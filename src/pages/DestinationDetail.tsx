import { useParams } from 'react-router-dom'
import { destinations, getDestination } from '../data/destinations'
import { ArrowLeft, ArrowRight, SunMark } from '../components/Icons'
import { DestinationCard } from '../components/DestinationCard'
import { Gallery } from '../components/Gallery'
import { MonthChart } from '../components/MonthChart'
import { Reveal } from '../components/Reveal'
import { SaveButton } from '../components/SaveButton'
import { SectionHead } from '../components/SectionHead'
import { SmartImage } from '../components/SmartImage'
import { SunPanel } from '../components/SunPanel'
import { TransitionLink } from '../components/TransitionLink'
import { useDocumentTitle } from '../lib/useDocumentTitle'
import { NotFound } from './NotFound'

export function DestinationDetail() {
  const { slug = '' } = useParams<{ slug: string }>()
  const destination = getDestination(slug)
  useDocumentTitle(destination ? `${destination.name} — SOLÉRA` : 'Destination not found — SOLÉRA')

  if (!destination) return <NotFound />

  const related = destinations.filter((item) => item.slug !== destination.slug).slice(0, 3)
  const facts = [
    ['Best time', destination.facts.bestTime],
    ['Temperature', destination.facts.temperature],
    ['Getting there', destination.facts.flight],
    ['Suggested stay', destination.facts.stay],
    ['Currency', destination.facts.currency],
    ['Language', destination.facts.language],
  ]

  return (
    <>
      <header className="detail-hero">
        <div className="detail-hero__media">
          <SmartImage
            src={destination.cover}
            alt={destination.coverAlt}
            priority
            sizes="100vw"
          />
        </div>
        <div className="detail-hero__shade" aria-hidden="true" />
        <div className="detail-hero__inner container">
          <TransitionLink
            to="/destinations"
            className="back-link"
            style={{ color: 'rgba(250,247,240,0.72)' }}
          >
            <ArrowLeft width={14} height={14} />
            All destinations
          </TransitionLink>
          <div className="detail-hero__row">
            <div>
              <div className="detail-hero__meta">
                <span>{destination.country}</span>
                <span>{destination.region}</span>
                <span>{destination.style}</span>
              </div>
              <h1>{destination.name}</h1>
              <p className="detail-hero__tagline">{destination.tagline}</p>
            </div>
            <div className="detail-hero__actions">
              <SaveButton slug={destination.slug} name={destination.name} variant="text" />
              <TransitionLink to="/plan" className="btn btn--light">
                Plan this journey
                <ArrowRight className="btn__arrow" width={16} height={16} />
              </TransitionLink>
            </div>
          </div>
        </div>
      </header>

      <section className="facts" aria-label={`${destination.name} at a glance`}>
        <div className="container">
          <dl className="facts__grid">
            {facts.map(([label, value]) => (
              <div className="fact" key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="detail-intro" aria-labelledby="detail-intro-heading">
        <div className="container">
          <div className="detail-intro__grid">
            <Reveal>
              <h2 className="detail-intro__lead" id="detail-intro-heading">
                {destination.summary}
              </h2>
              <p className="detail-intro__signature">{destination.signature}</p>
              <div className="detail-highlights">
                {destination.highlights.map((highlight) => (
                  <div key={highlight.title}>
                    <h3>{highlight.title}</h3>
                    <p>{highlight.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal className="detail-intro__body" delay={100}>
              {destination.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 36)}>{paragraph}</p>
              ))}
              <TransitionLink to="/about" className="link-arrow" style={{ marginTop: 26 }}>
                How we choose a place
                <ArrowRight width={15} height={15} />
              </TransitionLink>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="light-now" aria-labelledby="light-now-heading">
        <div className="container">
          <div className="light-now__grid">
            <Reveal className="light-now__copy">
              <h2 className="h2" id="light-now-heading">
                The light, at this hour.
              </h2>
              <p>
                A live reading from {destination.name}, calculated from its coordinates and
                timezone. The sun does not observe the itinerary, but we do our best to follow
                it.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <SunPanel destination={destination} variant="block" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="detail-gallery" aria-labelledby="detail-gallery-heading">
        <div className="container">
          <Reveal>
            <SectionHead
              id="detail-gallery-heading"
              title="Three hours worth waking for."
              side={
                <p>
                  A few frames from the journey — the first walk before the streets fill, the
                  hour after rain, the last light on the way home.
                </p>
              }
            />
          </Reveal>
          <Reveal variant="fade">
            <Gallery images={destination.gallery} title={destination.name} />
          </Reveal>
          <div className="gallery-notes">
            <span>Open any frame for the full image.</span>
            <span>{destination.credit ?? 'Photography via Unsplash'}</span>
          </div>
        </div>
      </section>

      <section className="detail-experiences" aria-labelledby="detail-experiences-heading">
        <div className="container">
          <Reveal>
            <SectionHead
              id="detail-experiences-heading"
              title="Days we would arrange again."
              side={
                <p>
                  Three ways to spend a day here. None is compulsory, and all can be reshaped
                  around the weather, the season or the way you feel at breakfast.
                </p>
              }
            />
          </Reveal>
          <div className="exp-list">
            {destination.experiences.map((experience, index) => (
              <Reveal className="exp-item" key={experience.title} delay={index * 60}>
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
                <span className="day">{experience.duration}</span>
              </Reveal>
            ))}
          </div>
          <Reveal className="detail-experiences__foot">
            <p>
              Every journey is private and built from scratch. These are starting points, not
              a menu.
            </p>
            <TransitionLink to="/plan" className="btn">
              Ask about this place
              <ArrowRight className="btn__arrow" width={16} height={16} />
            </TransitionLink>
          </Reveal>
        </div>
      </section>

      <section className="season" aria-labelledby="season-heading">
        <div className="container">
          <div className="season__grid">
            <Reveal className="season__copy">
              <h2 className="h2" id="season-heading">
                When the light is at its best.
              </h2>
              <p>
                A month-by-month reading of the season. Choose a month to see how we would
                think about it.
              </p>
              <p className="season__best">
                <SunMark size={15} />
                Our preferred window: {destination.bestSeason}
              </p>
            </Reveal>
            <Reveal delay={100}>
              <MonthChart months={destination.months} destinationName={destination.name} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="related" aria-labelledby="related-heading">
        <div className="container">
          <Reveal>
            <SectionHead
              id="related-heading"
              title="Perhaps somewhere else, this time."
              side={
                <TransitionLink to="/destinations" className="link-arrow">
                  See all destinations
                  <ArrowRight width={15} height={15} />
                </TransitionLink>
              }
            />
          </Reveal>
          <div className="related__grid">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 70}>
                <DestinationCard destination={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
