import { WavesMark } from '../components/Icons'
import { TransitionLink } from '../components/TransitionLink'
import { useDocumentTitle } from '../lib/useDocumentTitle'

export function NotFound() {
  useDocumentTitle('Page not found — SOLÉRA')

  return (
    <section className="not-found" aria-labelledby="not-found-heading">
      <div className="container">
        <WavesMark className="not-found__mark" />
        <p className="meta">Error 404</p>
        <h1 id="not-found-heading">A wrong turn.</h1>
        <p>
          The path you were following does not lead anywhere we know. The light is better back
          on the main road.
        </p>
        <div className="saved-actions">
          <TransitionLink to="/" className="btn">
            Return home
          </TransitionLink>
          <TransitionLink to="/destinations" className="link-arrow">
            Browse the destinations
          </TransitionLink>
        </div>
      </div>
    </section>
  )
}
