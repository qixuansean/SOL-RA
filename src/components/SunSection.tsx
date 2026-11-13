import { useEffect, useRef, useState } from 'react'
import { destinations } from '../data/destinations'
import { getSunData } from '../lib/sun'
import { ArrowRight } from './Icons'
import { SunArc } from './SunPanel'
import { TransitionLink } from './TransitionLink'

export function SunSection() {
  const [now, setNow] = useState(() => new Date())
  const [selected, setSelected] = useState(0)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 30_000)
    return () => window.clearInterval(timer)
  }, [])

  const destination = destinations[selected]
  const sun = getSunData(now, destination.coords.lat, destination.coords.lng, destination.timezone)

  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    const last = destinations.length - 1
    let next = index
    if (event.key === 'ArrowRight') next = index === last ? 0 : index + 1
    else if (event.key === 'ArrowLeft') next = index === 0 ? last : index - 1
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = last
    else return
    event.preventDefault()
    setSelected(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <section className="sun-section section" aria-labelledby="sun-heading">
      <div className="container">
        <div className="sun-section__grid">
          <div className="sun-section__copy">
            <h2 id="sun-heading" className="h2">
              The sun is always somewhere.
            </h2>
            <p>
              SOLÉRA is built around light. Choose a place and see its real local time, sunrise
              and sunset — the small facts that decide when to swim, when to walk, and when to
              open a bottle.
            </p>
            <p style={{ marginTop: 18 }}>
              Updated every thirty seconds, wherever you are.
            </p>
          </div>

          <div>
            <div className="sun-tabs" role="tablist" aria-label="Choose a destination">
              {destinations.map((item, index) => (
                <button
                  key={item.slug}
                  ref={(node) => {
                    tabRefs.current[index] = node
                  }}
                  type="button"
                  role="tab"
                  id={`sun-tab-${item.slug}`}
                  aria-selected={index === selected}
                  aria-controls="sun-panel"
                  tabIndex={index === selected ? 0 : -1}
                  className="sun-tab"
                  onClick={() => setSelected(index)}
                  onKeyDown={(event) => onKeyDown(event, index)}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div
              className="sun-readout"
              id="sun-panel"
              role="tabpanel"
              aria-labelledby={`sun-tab-${destination.slug}`}
            >
              <div>
                <p className="sun-readout__place">
                  {destination.name} ·{' '}
                  {destination.name.includes(destination.country) ? destination.region : destination.country}
                </p>
                <p className="sun-readout__time">{sun.timeLabel}</p>
                <p className="sun-readout__phase">{sun.phase}</p>
                <div className="sun-readout__meta">
                  <div>
                    <span>Sunrise</span>
                    <strong>{sun.sunriseLabel}</strong>
                  </div>
                  <div>
                    <span>Sunset</span>
                    <strong>{sun.sunsetLabel}</strong>
                  </div>
                  <div>
                    <span>Daylight</span>
                    <strong>{sun.dayLengthLabel}</strong>
                  </div>
                  <div>
                    <span>{sun.isDay ? 'Light left' : 'Until sunrise'}</span>
                    <strong>{sun.remainingLabel.replace(' of light left', '').replace(' until sunrise', '')}</strong>
                  </div>
                </div>
              </div>

              <div className="sun-readout__arc">
                <SunArc
                  progress={sun.progress}
                  label={`Sun position in ${destination.name} between sunrise and sunset`}
                />
                <p>{sun.remainingLabel}</p>
                <TransitionLink
                  to={`/destinations/${destination.slug}`}
                  className="link-arrow"
                  style={{ color: 'var(--paper)', marginTop: 22 }}
                >
                  See the journey
                  <ArrowRight width={14} height={14} />
                </TransitionLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
