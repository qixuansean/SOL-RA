import { useCallback, useEffect, useRef, useState } from 'react'
import { soundtrack, soundtrackCredit } from '../data/soundtrack'
import { ChevronLeft, ChevronRight, CloseIcon, PauseIcon, PlayIcon } from './Icons'

const TRACK_KEY = 'solera.jazz.track.v1'
const VOLUME_KEY = 'solera.jazz.volume.v1'

function readTrack() {
  try {
    const raw = localStorage.getItem(TRACK_KEY)
    if (raw === null) return 0
    const value = Number(raw)
    if (Number.isInteger(value) && value >= 0 && value < soundtrack.length) return value
  } catch {
    /* storage can be unavailable in private modes */
  }
  return 0
}

function readVolume() {
  try {
    const raw = localStorage.getItem(VOLUME_KEY)
    if (raw === null) return 0.42
    const value = Number(raw)
    if (Number.isFinite(value) && value >= 0 && value <= 1) return value
  } catch {
    /* storage can be unavailable in private modes */
  }
  return 0.42
}

export function JazzPlayer() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(readTrack)
  const [volume, setVolume] = useState(readVolume)
  const [playing, setPlaying] = useState(false)
  const [error, setError] = useState(false)

  const audioRef = useRef<HTMLAudioElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const fadeRef = useRef<number | null>(null)
  const wantPlay = useRef(false)
  const volumeRef = useRef(volume)
  const track = soundtrack[index]

  volumeRef.current = volume

  const fadeTo = useCallback((target: number, duration: number, done?: () => void) => {
    const audio = audioRef.current
    if (!audio) return
    if (fadeRef.current !== null) cancelAnimationFrame(fadeRef.current)
    const from = audio.volume
    const startedAt = performance.now()
    const tick = (now: number) => {
      const progress = Math.min(1, Math.max(0, (now - startedAt) / duration))
      const next = Math.min(1, Math.max(0, from + (target - from) * progress))
      audio.volume = next
      if (progress < 1) {
        fadeRef.current = requestAnimationFrame(tick)
      } else {
        fadeRef.current = null
        done?.()
      }
    }
    fadeRef.current = requestAnimationFrame(tick)
  }, [])

  const play = useCallback(async () => {
    const audio = audioRef.current
    if (!audio) return
    wantPlay.current = true
    try {
      audio.volume = 0
      await audio.play()
      setPlaying(true)
      setError(false)
      fadeTo(volumeRef.current, 550)
    } catch {
      wantPlay.current = false
      setPlaying(false)
      setError(true)
    }
  }, [fadeTo])

  const pause = useCallback(() => {
    wantPlay.current = false
    setPlaying(false)
    fadeTo(0, 320, () => audioRef.current?.pause())
  }, [fadeTo])

  // A new src is applied by React before this effect runs, so playback can restart cleanly.
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 0
    if (!wantPlay.current) return
    let cancelled = false
    audio
      .play()
      .then(() => {
        if (cancelled) return
        setPlaying(true)
        setError(false)
        fadeTo(volumeRef.current, 500)
      })
      .catch(() => {
        if (cancelled) return
        wantPlay.current = false
        setPlaying(false)
        setError(true)
      })
    return () => {
      cancelled = true
    }
  }, [index, fadeTo])

  useEffect(() => {
    try {
      localStorage.setItem(TRACK_KEY, String(index))
    } catch {
      /* ignore */
    }
  }, [index])

  useEffect(() => {
    try {
      localStorage.setItem(VOLUME_KEY, String(volume))
    } catch {
      /* ignore */
    }
  }, [volume])

  useEffect(() => {
    if (!open) return
    const onPointerDown = (event: PointerEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  useEffect(
    () => () => {
      if (fadeRef.current !== null) cancelAnimationFrame(fadeRef.current)
      audioRef.current?.pause()
    },
    [],
  )

  const step = (direction: number) => {
    setIndex((current) => (current + direction + soundtrack.length) % soundtrack.length)
  }

  const changeVolume = (next: number) => {
    volumeRef.current = next
    setVolume(next)
    if (playing) {
      if (fadeRef.current !== null) cancelAnimationFrame(fadeRef.current)
      fadeRef.current = null
      if (audioRef.current) audioRef.current.volume = next
    }
  }

  return (
    <div className="jazz" ref={wrapRef}>
      <button
        type="button"
        className="jazz-toggle"
        aria-expanded={open}
        aria-controls="jazz-panel"
        aria-label={playing ? 'Jazz soundtrack, playing' : 'Jazz soundtrack, paused'}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="jazz-bars" data-playing={playing} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className="jazz-toggle__label">Jazz</span>
      </button>

      {open ? (
        <div id="jazz-panel" className="jazz-panel" role="region" aria-label="Jazz soundtrack">
          <div className="jazz-panel__head">
            <p className="jazz-panel__title">Jazz for slow afternoons</p>
            <button
              type="button"
              className="jazz-panel__close"
              onClick={() => setOpen(false)}
              aria-label="Close jazz player"
            >
              <CloseIcon width={16} height={16} />
            </button>
          </div>

          <div className="jazz-panel__now" aria-live="polite">
            <span className="jazz-bars jazz-bars--large" data-playing={playing} aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </span>
            <div>
              <strong>{track.title}</strong>
              <span>
                {track.artist} · {track.mood}
              </span>
            </div>
          </div>

          <div className="jazz-panel__controls">
            <button type="button" onClick={() => step(-1)} aria-label="Previous track">
              <ChevronLeft width={18} height={18} />
            </button>
            <button
              type="button"
              className="jazz-panel__play"
              onClick={() => (playing ? pause() : void play())}
              aria-label={playing ? 'Pause jazz' : 'Play jazz'}
            >
              {playing ? <PauseIcon width={18} height={18} /> : <PlayIcon width={18} height={18} />}
            </button>
            <button type="button" onClick={() => step(1)} aria-label="Next track">
              <ChevronRight width={18} height={18} />
            </button>
          </div>

          <label className="jazz-panel__volume">
            <span>Volume</span>
            <input
              type="range"
              min={0}
              max={100}
              step={1}
              value={Math.round(volume * 100)}
              style={{
                background: `linear-gradient(to right, var(--clay) ${Math.round(volume * 100)}%, rgba(22, 33, 30, 0.16) ${Math.round(volume * 100)}%)`,
              }}
              onChange={(event) => changeVolume(Number(event.target.value) / 100)}
              aria-label="Jazz volume"
            />
          </label>

          <p className="jazz-panel__credit">
            Music by{' '}
            {track.artist === 'Kevin MacLeod' ? (
              <>
                <a href={soundtrackCredit.url} target="_blank" rel="noreferrer">
                  {track.artist}
                </a>
                ·{' '}
                <a href={soundtrackCredit.licenseUrl} target="_blank" rel="noreferrer">
                  {soundtrackCredit.license}
                </a>
              </>
            ) : (
              track.artist
            )}
          </p>

          {error ? (
            <p className="jazz-panel__error" role="status">
              The soundtrack could not play. Check your connection and try again.
            </p>
          ) : null}
        </div>
      ) : null}

      <audio
        ref={audioRef}
        src={track.src}
        preload="none"
        onEnded={() => {
          if (wantPlay.current) step(1)
        }}
        onError={() => {
          setPlaying(false)
          setError(true)
        }}
      />
    </div>
  )
}
