import { ArrowRight, SunMark } from '../components/Icons'
import { NewsletterSection } from '../components/NewsletterSection'
import { Parallax } from '../components/Parallax'
import { Reveal } from '../components/Reveal'
import { SmartImage } from '../components/SmartImage'
import { TransitionLink } from '../components/TransitionLink'
import { useDocumentTitle } from '../lib/useDocumentTitle'

const values = [
  {
    title: 'Light first.',
    text: 'We choose the month before the hotel and the hour before the restaurant. The quality of light is the one thing no amount of money can change, so we plan around it.',
  },
  {
    title: 'Fewer places, longer stays.',
    text: 'Three nights is usually the minimum. A week in one valley will tell you more than a fortnight of train stations. We would rather you knew one bakery by name.',
  },
  {
    title: 'The room matters.',
    text: 'Not the thread count — the opening, the shade, the direction the window faces, the sound at night. We ask about the relationship between the room and the place it sits in.',
  },
  {
    title: 'A route with room to change.',
    text: 'Every journey has a shape, not a schedule. We hold the reservations that matter and leave the rest of the day open enough to follow the weather, or a conversation.',
  },
]

export function About() {
  useDocumentTitle('About — SOLÉRA')

  return (
    <>
      <header className="about-hero">
        <SmartImage
          src="/images/about-hero.webp"
          alt="A traveller walking through a narrow ochre street in a Mediterranean town"
          priority
          sizes="100vw"
        />
        <div className="about-hero__shade" aria-hidden="true" />
        <div className="about-hero__inner container">
          <Reveal>
            <h1>We travel to notice.</h1>
            <p>
              SOLÉRA is a small travel studio in Amsterdam, designing private journeys around
              light, season and the luxury of unhurried time.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="manifesto" aria-labelledby="manifesto-heading">
        <div className="container">
          <div className="manifesto__grid">
            <Reveal className="manifesto__aside">
              <p id="manifesto-heading">The opposite of a bucket list.</p>
            </Reveal>
            <Reveal className="manifesto__body" delay={100}>
              <p>
                We started SOLÉRA after years of planning trips for other people and noticing
                that the best days were rarely the ones on the itinerary. They were the extra
                hour by the water, the unplanned lunch, the walk taken because the light was
                suddenly right.
              </p>
              <p>
                So we built a studio around that observation. We work with a small number of
                places, return to them often, and know the people who make them worth the
                journey. We do not sell packages. We design a route, make the reservations that
                matter, and then get out of the way.
              </p>
              <p>
                Our palette is deliberate: ivory, sand, ocean, forest and the softened red of
                old terracotta. Our pace is slower than the industry standard. We take no more
                than twelve parties a year, so that each journey gets the attention it needs.
              </p>
              <p className="manifesto__signature">— Mara Lindqvist &amp; Elias Moreau, founders</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="values" aria-labelledby="values-heading">
        <div className="container">
          <Reveal>
            <h2 className="h2" id="values-heading" style={{ maxWidth: '16ch', marginBottom: 'clamp(24px, 4vw, 44px)' }}>
              Four things we will not compromise.
            </h2>
          </Reveal>
          {values.map((value, index) => (
            <Reveal key={value.title} className="value-row" delay={index * 60}>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="about-images" aria-label="A sense of the places we return to">
        <div className="container">
          <div className="about-images__grid">
            <Reveal as="figure">
              <div className="about-images__tall">
                <Parallax strength={4}>
                  <SmartImage
                    src="/images/journal-villa.webp"
                    alt="A modern white villa with a still pool in front of it"
                    sizes="(max-width: 760px) 100vw, 55vw"
                  />
                </Parallax>
              </div>
              <figcaption>A room that opens entirely to the outside, somewhere warm.</figcaption>
            </Reveal>
            <Reveal as="figure" delay={100}>
              <div className="about-images__wide">
                <SmartImage
                  src="/images/experience-forest.webp"
                  alt="A small waterfall running through a mossy forest garden"
                  sizes="(max-width: 760px) 100vw, 40vw"
                />
              </div>
              <figcaption>The moss garden and its small waterfall, after rain.</figcaption>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="about-quote" aria-label="Studio note">
        <div className="container">
          <Reveal>
            <blockquote>
              We are not selling the world. We are selling the time to see a small part of it
              properly.
            </blockquote>
            <p>Studio notes · Amsterdam</p>
          </Reveal>
        </div>
      </section>

      <NewsletterSection />

      <section className="about-cta" aria-labelledby="about-cta-heading">
        <div className="container">
          <Reveal>
            <h2 className="h2" id="about-cta-heading">
              Begin with a conversation, not a booking form.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="lede" style={{ color: 'var(--salt)' }}>
              Tell us when you can leave, how long you have, and what you would like the days
              to feel like. We will reply within two working days.
            </p>
          </Reveal>
          <Reveal delay={140} className="saved-actions">
            <TransitionLink to="/plan" className="btn">
              Plan a journey
              <ArrowRight className="btn__arrow" width={16} height={16} />
            </TransitionLink>
            <TransitionLink to="/destinations" className="link-arrow">
              Or begin with the places
              <SunMark size={14} />
            </TransitionLink>
          </Reveal>
        </div>
      </section>
    </>
  )
}
