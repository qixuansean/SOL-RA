import { site } from '../data/site'
import { soundtrackCredit } from '../data/soundtrack'
import { useReveal } from '../lib/useReveal'
import { ArrowUpRight, SunMark } from './Icons'
import { TransitionLink } from './TransitionLink'

export function Footer() {
  const wordRef = useReveal<HTMLDivElement>(0.05)

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="brand" style={{ color: 'var(--sand)' }}>
              <SunMark size={22} />
              <span>SOLÉRA</span>
            </span>
            <p>
              Private journeys shaped around light, season and the quiet luxury of having
              time. Amsterdam, by appointment.
            </p>
            <TransitionLink to="/plan" className="link-arrow">
              Plan a journey
              <ArrowUpRight width={15} height={15} />
            </TransitionLink>
          </div>

          <div className="footer__col">
            <h3>Explore</h3>
            <ul>
              {site.footer.explore.map((link) => (
                <li key={link.to}>
                  <TransitionLink to={link.to}>{link.label}</TransitionLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h3>Places</h3>
            <ul>
              {site.footer.places.map((link) => (
                <li key={link.to}>
                  <TransitionLink to={link.to}>{link.label}</TransitionLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col footer__contact">
            <h3>Studio</h3>
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <br />
              {site.address}
              <br />
              {site.phone}
            </p>
            <p style={{ marginTop: 14 }}>
              <a href={site.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
              {' · '}
              <a href={site.pinterest} target="_blank" rel="noreferrer">
                Pinterest
              </a>
            </p>
          </div>
        </div>
      </div>

      <div ref={wordRef} className="footer__word">
        <TransitionLink to="/" aria-label="SOLÉRA — home">
          SOLÉRA
        </TransitionLink>
      </div>

      <div className="footer__bottom">
        <span>© 2026 SOLÉRA Studio. All rights reserved.</span>
        <span>
          Photography via{' '}
          <a href="https://unsplash.com" target="_blank" rel="noreferrer">
            Unsplash
          </a>{' '}
          · Music:{' '}
          <a href={soundtrackCredit.url} target="_blank" rel="noreferrer">
            {soundtrackCredit.artist}
          </a>
          {', '}
          <a href={soundtrackCredit.licenseUrl} target="_blank" rel="noreferrer">
            {soundtrackCredit.license}
          </a>{' '}
          · Editorial sample content
        </span>
        <span>52.3676° N, 4.9041° E</span>
      </div>
    </footer>
  )
}
