import { useEffect, useRef, useState } from 'react'
import { useSaved } from './SavedContext'
import { CloseIcon, SunMark } from './Icons'
import { TransitionLink } from './TransitionLink'
import { SmartImage } from './SmartImage'

type Props = { open: boolean; onClose: () => void }

const links = [
  { label: 'Destinations', to: '/destinations' },
  { label: 'Journal', to: '/journal' },
  { label: 'About', to: '/about' },
  { label: 'Saved trips', to: '/saved' },
]

export function Menu({ open, onClose }: Props) {
  const dialog = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const { count } = useSaved()
  // The menu sits in the viewport even when clipped shut, so a lazy image
  // inside it would still be fetched on first paint. Mount it on first open.
  const [hasOpened, setHasOpened] = useState(false)

  useEffect(() => {
    if (open) setHasOpened(true)
  }, [open])

  useEffect(() => {
    if (!open) return
    const previous = document.activeElement as HTMLElement | null
    document.body.classList.add('is-locked')
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 60)

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }
      if (event.key !== 'Tab' || !dialog.current) return
      const focusable = dialog.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])',
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

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      window.clearTimeout(focusTimer)
      document.body.classList.remove('is-locked')
      previous?.focus?.()
    }
  }, [open, onClose])

  return (
    <div
      id="site-menu"
      ref={dialog}
      className={`menu ${open ? 'is-open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      aria-hidden={!open}
    >
      <div className="menu__top">
        <span className="brand" style={{ color: 'var(--paper)' }}>
          <SunMark size={20} />
          <span>SOLÉRA</span>
        </span>
        <button ref={closeRef} type="button" className="menu__close" aria-label="Close menu" onClick={onClose}>
          <CloseIcon />
        </button>
      </div>

      <div className="menu__body">
        <div>
          <nav className="menu__nav" aria-label="Menu">
            {links.map((link) => (
              <TransitionLink key={link.to} to={link.to} className="menu__link" onClick={onClose}>
                <span className="menu__link-inner">
                  {link.label}
                  {link.to === '/saved' ? <small> ({count})</small> : null}
                </span>
              </TransitionLink>
            ))}
          </nav>
          <div className="menu__foot">
            <a href="mailto:hello@solera.travel">hello@solera.travel</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <span>Amsterdam · 52.37° N</span>
          </div>
        </div>

        <aside className="menu__aside">
          <div className="menu__image">
            {hasOpened ? (
              <SmartImage
                src="/images/maldives-3.webp"
                alt="An overwater villa illuminated at dusk above a calm lagoon"
                sizes="(max-width: 760px) 100vw, 34vw"
              />
            ) : null}
          </div>
          <div className="menu__caption">
            <span>Currently dreaming of</span>
            <span>The Maldives</span>
          </div>
          <p style={{ color: 'var(--mist)', fontSize: '0.8125rem', maxWidth: '34ch' }}>
            Sixteen places we return to, and the hours that make them worth the journey.
          </p>
        </aside>
      </div>
    </div>
  )
}
