import { useEffect, useState } from 'react'
import { getDestination } from '../data/destinations'
import type { Destination } from '../data/destinations'
import { useSaved } from '../components/SavedContext'
import { DestinationCard } from '../components/DestinationCard'
import { Reveal } from '../components/Reveal'
import { SmartImage } from '../components/SmartImage'
import { TransitionLink } from '../components/TransitionLink'
import { WavesMark } from '../components/Icons'
import { useDocumentTitle } from '../lib/useDocumentTitle'

export function Saved() {
  useDocumentTitle('Saved trips — SOLÉRA')
  const { saved, clear } = useSaved()
  const [confirming, setConfirming] = useState(false)

  useEffect(() => {
    if (!confirming) return
    const timer = window.setTimeout(() => setConfirming(false), 5000)
    return () => window.clearTimeout(timer)
  }, [confirming])

  const savedDestinations = saved
    .map((slug) => getDestination(slug))
    .filter((destination): destination is Destination => destination !== undefined)

  return (
    <>
      <header className="saved-head">
        <div className="container">
          <div className="saved-head__row">
            <div>
              <h1>Saved trips</h1>
              <p>
                A shortlist, kept on this device. No account, no email required — simply the
                places you would like to return to.
              </p>
            </div>
            <span className="saved-count">
              {savedDestinations.length === 1
                ? 'One place saved'
                : `${savedDestinations.length} places saved`}
            </span>
          </div>
        </div>
      </header>

      <div className="saved-body">
        <div className="container">
          {savedDestinations.length > 0 ? (
            <>
              <div className="saved-actions" style={{ justifyContent: 'flex-end', marginBottom: 28 }}>
                {confirming ? (
                  <>
                    <button type="button" className="clear-saved" onClick={() => clear()}>
                      Yes, clear the list
                    </button>
                    <button type="button" className="clear-saved" onClick={() => setConfirming(false)}>
                      Keep it
                    </button>
                  </>
                ) : (
                  <button type="button" className="clear-saved" onClick={() => setConfirming(true)}>
                    Clear all saved trips
                  </button>
                )}
              </div>

              <div className="saved-grid">
                {savedDestinations.map((destination, index) => (
                  <Reveal key={destination.slug} delay={Math.min(index, 4) * 60}>
                    <DestinationCard destination={destination} />
                  </Reveal>
                ))}
              </div>

              <div className="destinations-more">
                <Reveal>
                  <p>
                    When one of these keeps coming back to mind, that is usually the one. Tell
                    us the month and we will tell you the light.
                  </p>
                </Reveal>
                <Reveal delay={80}>
                  <TransitionLink to="/plan" className="btn">
                    Plan from this list
                  </TransitionLink>
                </Reveal>
              </div>
            </>
          ) : (
            <div className="empty-state">
              <div className="empty-state__media">
                <SmartImage
                  src="/images/slow-travel.webp"
                  alt="A wooden dock leading into a still lake at first light, ringed by forest"
                  sizes="(max-width: 760px) 82vw, 440px"
                />
              </div>
              <WavesMark />
              <h2>Nothing saved yet.</h2>
              <p>
                Add a place with the sun mark on any destination card. It will wait here,
                quietly, until you are ready to think about the journey.
              </p>
              <TransitionLink to="/destinations" className="btn">
                Browse the destinations
              </TransitionLink>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
