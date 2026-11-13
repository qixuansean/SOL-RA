import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useSaved } from './SavedContext'
import { SaveSun, SunMark } from './Icons'
import { JazzPlayer } from './JazzPlayer'
import { Menu } from './Menu'
import { TransitionLink } from './TransitionLink'

const overlayRoutes = (pathname: string) =>
  pathname === '/' ||
  pathname === '/about' ||
  /^\/destinations\/[^/]+$/.test(pathname) ||
  /^\/journal\/[^/]+$/.test(pathname)

export function Header() {
  const location = useLocation()
  const { count } = useSaved()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastY = useRef(0)
  const overlay = overlayRoutes(location.pathname)

  useEffect(() => {
    lastY.current = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      const delta = y - lastY.current
      if (Math.abs(delta) > 5) {
        setHidden(y > 240 && delta > 0 && !menuOpen)
      }
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
    setHidden(false)
  }, [location.pathname])

  const solid = scrolled || !overlay

  return (
    <>
      <header
        className={`site-header ${overlay && !scrolled ? 'is-overlay' : ''} ${
          solid ? 'is-solid' : ''
        } ${hidden ? 'is-hidden' : ''}`}
      >
        <div className="header-inner">
          <TransitionLink to="/" className="brand" aria-label="SOLÉRA — home">
            <SunMark size={20} />
            <span>SOLÉRA</span>
          </TransitionLink>

          <nav className="site-nav" aria-label="Primary">
            <TransitionLink
              to="/destinations"
              className="site-nav__link"
              aria-current={location.pathname.startsWith('/destinations') ? 'page' : undefined}
            >
              Destinations
            </TransitionLink>
            <TransitionLink
              to="/journal"
              className="site-nav__link"
              aria-current={location.pathname.startsWith('/journal') ? 'page' : undefined}
            >
              Journal
            </TransitionLink>
            <TransitionLink
              to="/about"
              className="site-nav__link"
              aria-current={location.pathname === '/about' ? 'page' : undefined}
            >
              About
            </TransitionLink>
          </nav>

          <div className="header-tools">
            <JazzPlayer />
            <TransitionLink to="/saved" className="saved-link" aria-label={`Saved trips, ${count} saved`}>
              <span className="saved-link__mark" aria-hidden="true">
                <SaveSun size={17} filled={count > 0} />
              </span>
              <span className="saved-link__label">Saved</span>
              <span className="saved-link__count" data-zero={count === 0}>
                {count}
              </span>
            </TransitionLink>
            <button
              type="button"
              className="menu-toggle"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
