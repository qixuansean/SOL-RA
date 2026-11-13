import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { GalleryImage } from '../data/destinations'
import { ChevronLeft, ChevronRight, CloseIcon, ZoomIcon } from './Icons'
import { SmartImage } from './SmartImage'

type Props = {
  images: GalleryImage[]
  title: string
}

export function Gallery({ images, title }: Props) {
  const [index, setIndex] = useState<number | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const previousFocus = useRef<HTMLElement | null>(null)
  const touchStart = useRef<{ x: number; y: number } | null>(null)

  const close = useCallback(() => setIndex(null), [])

  const step = useCallback(
    (direction: number) => {
      setIndex((current) => {
        if (current === null) return current
        return (current + direction + images.length) % images.length
      })
    },
    [images.length],
  )

  useEffect(() => {
    if (index === null) return
    previousFocus.current = document.activeElement as HTMLElement | null
    document.body.classList.add('is-locked')
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 40)

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        close()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        step(1)
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault()
        step(-1)
      } else if (event.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      window.clearTimeout(focusTimer)
      document.removeEventListener('keydown', onKeyDown)
      document.body.classList.remove('is-locked')
      previousFocus.current?.focus?.()
    }
  }, [index === null, close, step])

  const active = index === null ? null : images[index]

  return (
    <>
      <div className="gallery-grid">
        {images.map((image, imageIndex) => (
          <button
            key={image.src}
            type="button"
            className="gallery-item"
            aria-label={`Open image ${imageIndex + 1} of ${images.length}: ${image.caption}`}
            onClick={() => setIndex(imageIndex)}
          >
            <SmartImage src={image.src} alt={image.alt} sizes="(max-width: 760px) 100vw, 55vw" />
            <span className="gallery-item__zoom" aria-hidden="true">
              <ZoomIcon width={18} height={18} />
            </span>
          </button>
        ))}
      </div>

      {active !== null && index !== null
        ? createPortal(
            <div
              ref={dialogRef}
              className="lightbox"
              role="dialog"
              aria-modal="true"
              aria-label={`${title} gallery`}
              onClick={(event) => {
                if (event.target === event.currentTarget) close()
              }}
            >
              <div className="lightbox__top">
                <span>
                  {index + 1} / {images.length}
                </span>
                <button
                  ref={closeRef}
                  type="button"
                  className="lightbox__close"
                  onClick={close}
                  aria-label="Close gallery"
                >
                  <CloseIcon width={22} height={22} />
                </button>
              </div>

              <div
                className="lightbox__stage"
                onTouchStart={(event) => {
                  const touch = event.touches[0]
                  touchStart.current = { x: touch.clientX, y: touch.clientY }
                }}
                onTouchEnd={(event) => {
                  const start = touchStart.current
                  touchStart.current = null
                  if (!start) return
                  const touch = event.changedTouches[0]
                  const dx = touch.clientX - start.x
                  const dy = touch.clientY - start.y
                  // A deliberate horizontal swipe, not a diagonal scroll.
                  if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.4) {
                    step(dx < 0 ? 1 : -1)
                  }
                }}
              >
                <img key={active.src} src={active.src} alt={active.alt} draggable={false} />
              </div>

              <div className="lightbox__bottom">
                <p className="lightbox__caption">{active.caption}</p>
                <div className="lightbox__nav">
                  <button
                    type="button"
                    className="lightbox__btn"
                    onClick={() => step(-1)}
                    aria-label="Previous image"
                  >
                    <ChevronLeft width={20} height={20} />
                  </button>
                  <button
                    type="button"
                    className="lightbox__btn"
                    onClick={() => step(1)}
                    aria-label="Next image"
                  >
                    <ChevronRight width={20} height={20} />
                  </button>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  )
}
