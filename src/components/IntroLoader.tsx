import { useEffect, useState } from 'react'

const KEY = 'solera.intro.seen'

export function IntroLoader() {
  const [visible] = useState(() => {
    try {
      // A reduced-motion visitor gets the page directly; the sun-rising loader
      // is decoration, and a 420ms flash of ivory is worse than no loader.
      return (
        window.sessionStorage.getItem(KEY) !== '1' &&
        !window.matchMedia('(prefers-reduced-motion: reduce)').matches
      )
    } catch {
      return true
    }
  })
  const [done, setDone] = useState(false)
  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    if (!visible) {
      setMounted(false)
      return
    }
    document.body.classList.add('is-locked')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const duration = reduced ? 420 : 1700
    const doneTimer = window.setTimeout(() => {
      setDone(true)
      document.body.classList.remove('is-locked')
      try {
        window.sessionStorage.setItem(KEY, '1')
      } catch {
        // ignore
      }
    }, duration)
    const removeTimer = window.setTimeout(() => setMounted(false), duration + 800)
    return () => {
      window.clearTimeout(doneTimer)
      window.clearTimeout(removeTimer)
      document.body.classList.remove('is-locked')
    }
  }, [visible])

  if (!mounted) return null

  return (
    <div className={`intro ${done ? 'is-done' : ''}`} aria-hidden="true">
      <span className="intro__sun" />
      <span className="intro__word">
        <span>SOLÉRA</span>
      </span>
      <span style={{ fontSize: '0.6875rem', color: 'var(--salt)', letterSpacing: '0.04em' }}>
        Shaping the light
      </span>
    </div>
  )
}
