import { destinations } from '../data/destinations'
import { articles } from '../data/journal'
import { ArrowRight, ArrowUpRight, SunMark } from '../components/Icons'
import { DestinationCard } from '../components/DestinationCard'
import { ExperienceRail } from '../components/ExperienceRail'
import { NewsletterSection } from '../components/NewsletterSection'
import { Parallax } from '../components/Parallax'
import { Reveal } from '../components/Reveal'
import { SectionHead } from '../components/SectionHead'
import { SmartImage } from '../components/SmartImage'
import { SunPanel } from '../components/SunPanel'
import { SunSection } from '../components/SunSection'
import { TransitionLink } from '../components/TransitionLink'
import { useDocumentTitle } from '../lib/useDocumentTitle'

const collage = [
  { destination: destinations[0], className: 'dest-collage__item--maldives', variant: 'wide' as const },
  { destination: destinations[1], className: 'dest-collage__item--amalfi', variant: 'default' as const },
  { destination: destinations[4], className: 'dest-collage__item--kyoto', variant: 'default' as const },
  { destination: destinations[2], className: 'dest-collage__item--alps', variant: 'wide' as const },
]

const collageColumns = [
  [collage[0], collage[2]],
  [collage[1], collage[3]],
]

export function Home() {
  useDocumentTitle('SOLÉRA — Where every moment feels like summer')
  const feature = articles[0]
  const side = articles.slice(1, 4)

  return (
    <>
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero__media">
          <SmartImage
            src="/images/hero-maldives.webp"
            alt="A curved overwater walkway and villas above turquoise shallows in the Maldives"
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero__shade" aria-hidden="true" />

        <div className="hero__inner container">
          <div className="hero__layout">
            <div>
              <h1 className="hero__title" id="hero-heading" aria-label="The long light of summer.">
                <span className="hero__line" aria-hidden="true">
                  <span>The long </span>
                </span>
                <span className="hero__line" aria-hidden="true">
                  <span>light of </span>
                </span>
                <span className="hero__line" aria-hidden="true">
                  <span>summer.</span>
                </span>
              </h1>
              <p className="hero__sub">
                Private journeys shaped around light, season and the quiet luxury of having
                time. Sixteen places we know by heart, and the hours that make them worth the
                journey.
              </p>
              <div className="hero__actions">
                <TransitionLink to="/destinations" className="btn btn--sand">
                  Explore destinations
                  <ArrowRight className="btn__arrow" width={17} height={17} />
                </TransitionLink>
                <TransitionLink to="/journal" className="link-arrow hero__journal-link">
                  Read the journal
                  <ArrowUpRight width={14} height={14} />
                </TransitionLink>
              </div>
            </div>

            <div className="hero__aside">
              <SunPanel destination={destinations[0]} showLink />
            </div>
          </div>
        </div>

        <div className="hero__scroll" aria-hidden="true">
          <span />
          Scroll slowly
        </div>
      </section>

      <section className="home-intro" aria-labelledby="home-intro-heading">
        <div className="container">
          <div className="home-intro__grid">
            <Reveal>
              <h2 className="home-intro__title h2" id="home-intro-heading">
                We plan around the hour, not the itinerary.
              </h2>
            </Reveal>
            <Reveal delay={110} className="home-intro__body">
              <p className="home-intro__statement">
                A good journey is not a list of places. It is a sequence of moments that arrive
                in the right order.
              </p>
              <p className="lead">
                SOLÉRA is a small studio working across sixteen places we return to ourselves.
                We begin with the light — when to swim, when to walk, when to open a bottle —
                and build the days gently around it.
              </p>
              <p className="lead">
                There is no coach, no group, no fixed departure. Just a considered route, a
                handful of rooms we trust, and enough empty space for the day to have its own
                ideas.
              </p>
              <TransitionLink to="/about" className="link-arrow">
                How we work
                <ArrowRight width={15} height={15} />
              </TransitionLink>
            </Reveal>
          </div>
          <Reveal className="home-intro__note" variant="fade">
            <span>Sixteen destinations</span>
            <span>One studio in Amsterdam</span>
            <span>Journeys by appointment</span>
            <span>No more than twelve parties a year</span>
          </Reveal>
        </div>
      </section>

      <section className="home-destinations" aria-labelledby="home-destinations-heading">
        <div className="container">
          <Reveal>
            <SectionHead
              id="home-destinations-heading"
              title="Places that reward a slower route."
              side={
                <>
                  <p>
                    From an atoll with one road to a city best seen before breakfast. Each
                    place is chosen for a particular quality of light, and a particular way of
                    spending a day.
                  </p>
                  <TransitionLink to="/destinations" className="link-arrow">
                    All sixteen destinations
                    <ArrowRight width={15} height={15} />
                  </TransitionLink>
                </>
              }
            />
          </Reveal>

          <div className="dest-collage">
            {collageColumns.map((column, columnIndex) => (
              <div
                key={column[0].destination.slug}
                className={`dest-collage__col ${
                  columnIndex === 1 ? 'dest-collage__col--offset' : ''
                }`}
              >
                {column.map((item, index) => (
                  <Reveal
                    key={item.destination.slug}
                    className={item.className}
                    delay={(columnIndex * 2 + index) * 80}
                  >
                    <DestinationCard destination={item.destination} variant={item.variant} />
                  </Reveal>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ExperienceRail />

      <section className="slow" aria-labelledby="slow-heading">
        <div className="container">
          <div className="slow__grid">
            <div className="slow__media">
              <Parallax strength={5}>
                <SmartImage
                  src="/images/slow-travel.webp"
                  alt="A wooden dock leading into a still lake at first light, ringed by forest"
                  sizes="(max-width: 1100px) 100vw, 45vw"
                />
              </Parallax>
            </div>

            <div className="slow__body">
              <Reveal>
                <h2 className="h2" id="slow-heading">
                  A slower route is usually the better one.
                </h2>
                <p>
                  We are not interested in how much you can see. We are interested in how well
                  you see it. That usually means fewer places, longer stays, and a willingness
                  to leave an afternoon blank.
                </p>
              </Reveal>

              <div className="slow__chapters">
                <Reveal className="slow-chapter" delay={60}>
                  <h3>The first day is for arriving.</h3>
                  <p>
                    Not for a museum, or a reservation across town. A swim, a walk to the
                    nearest bakery, an early dinner. The journey leaves the body; the place
                    begins to settle in.
                  </p>
                </Reveal>
                <Reveal className="slow-chapter" delay={100}>
                  <h3>The middle days are for nothing in particular.</h3>
                  <p>
                    One thing in the morning, one thing in the afternoon. A long lunch between
                    them. We build in an unplanned hour every day and defend it as fiercely as
                    a dinner booking.
                  </p>
                </Reveal>
                <Reveal className="slow-chapter" delay={140}>
                  <h3>The last day is for planning the return.</h3>
                  <p>
                    A final swim, a last coffee in the same chair, a note of the place you
                    would come back to. The best trips end with a reason to begin another.
                  </p>
                </Reveal>
              </div>

              <Reveal className="slow__link">
                <TransitionLink to="/journal" className="link-arrow">
                  Notes on travelling slowly
                  <ArrowRight width={15} height={15} />
                </TransitionLink>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <SunSection />

      <section className="home-journal" aria-labelledby="home-journal-heading">
        <div className="container">
          <Reveal>
            <SectionHead
              id="home-journal-heading"
              title="Notes from the road, the sea and the shade."
              side={
                <>
                  <p>
                    A journal about place, pace and the details that make a room or an
                    afternoon memorable. Written by the people who plan the journeys.
                  </p>
                  <TransitionLink to="/journal" className="link-arrow">
                    All stories
                    <ArrowRight width={15} height={15} />
                  </TransitionLink>
                </>
              }
            />
          </Reveal>

          <div className="home-journal__grid">
            <Reveal>
              <TransitionLink to={`/journal/${feature.slug}`} className="feature-article">
                <div className="feature-article__media">
                  <SmartImage
                    src={feature.cover}
                    alt={feature.coverAlt}
                    sizes="(max-width: 1100px) 100vw, 60vw"
                  />
                </div>
                <div className="feature-article__body">
                  <div className="feature-article__meta">
                    <span>{feature.category}</span>
                    <span>{feature.date}</span>
                    <span>{feature.readTime}</span>
                  </div>
                  <h3 className="feature-article__title">{feature.title}</h3>
                  <p className="feature-article__dek">{feature.dek}</p>
                  <span className="link-arrow" style={{ marginTop: 22 }}>
                    Read the story
                    <ArrowRight width={15} height={15} />
                  </span>
                </div>
              </TransitionLink>
            </Reveal>

            <div className="journal-side">
              {side.map((article, index) => (
                <Reveal key={article.slug} delay={index * 70}>
                  <TransitionLink to={`/journal/${article.slug}`} className="article-row">
                    <div className="article-row__media">
                      <SmartImage src={article.cover} alt={article.coverAlt} sizes="104px" />
                    </div>
                    <div>
                      <p className="article-row__meta">
                        {article.category} · {article.readTime}
                      </p>
                      <h3 className="article-row__title">{article.title}</h3>
                    </div>
                  </TransitionLink>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="brand-band" aria-labelledby="brand-band-heading">
        <div className="brand-band__media">
          <SmartImage
            src="/images/journal-sea.webp"
            alt="A calm sea at sunset with soft pink light on the sand"
            sizes="100vw"
          />
        </div>
        <div className="brand-band__shade" aria-hidden="true" />
        <div className="container brand-band__content">
          <Reveal>
            <h2 className="h2" id="brand-band-heading">
              Luxury, as we use the word, is mostly time.
            </h2>
          </Reveal>
          <Reveal className="brand-band__foot" delay={100}>
            <p>
              Time to stay in one place. Time to change your mind. Time to do nothing at all,
              without feeling that something is being missed.
            </p>
            <TransitionLink to="/about" className="btn btn--light">
              Our philosophy
              <ArrowRight className="btn__arrow" width={17} height={17} />
            </TransitionLink>
          </Reveal>
        </div>
      </section>

      <NewsletterSection />

      <section className="section section--paper" aria-labelledby="home-cta-heading">
        <div className="container">
          <div className="destinations-more">
            <Reveal>
              <h2 className="h2" id="home-cta-heading" style={{ maxWidth: '16ch' }}>
                Tell us when you can leave. We will find the light.
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <TransitionLink to="/plan" className="btn">
                Start a conversation
                <ArrowRight className="btn__arrow" width={17} height={17} />
              </TransitionLink>
            </Reveal>
          </div>
          <p className="meta" style={{ marginTop: 26, display: 'flex', alignItems: 'center', gap: 8 }}>
            <SunMark size={14} />
            No enquiry is too early. We plan a season ahead, and occasionally further.
          </p>
        </div>
      </section>
    </>
  )
}
