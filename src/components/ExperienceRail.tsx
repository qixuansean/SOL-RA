import { useEffect, useRef, useState } from 'react'
import { experiences } from '../data/experiences'
import { ArrowRight, ChevronLeft, ChevronRight } from './Icons'
import { SmartImage } from './SmartImage'
import { TransitionLink } from './TransitionLink'

export function ExperienceRail() {
  const rail = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  useEffect(() => {
    const node = rail.current
    if (!node) return
    const update = () => {
      setAtStart(node.scrollLeft < 8)
      setAtEnd(node.scrollLeft + node.clientWidth >= node.scrollWidth - 8)
    }
    update()
    node.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      node.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const scroll = (direction: number) => {
    const node = rail.current
    if (!node) return
    node.scrollBy({ left: direction * Math.min(node.clientWidth * 0.8, 620), behavior: 'smooth' })
  }

  return (
    <section className="home-experiences section" aria-labelledby="experiences-heading">
      <div className="container">
        <div className="rail-head">
          <div>
            <h2 id="experiences-heading" className="h2" style={{ maxWidth: '13ch' }}>
              Days that ask nothing of you.
            </h2>
          </div>
          <div className="rail-controls">
            <button
              type="button"
              className="rail-btn"
              onClick={() => scroll(-1)}
              disabled={atStart}
              aria-label="Previous experiences"
            >
              <ChevronLeft width={20} height={20} />
            </button>
            <button
              type="button"
              className="rail-btn"
              onClick={() => scroll(1)}
              disabled={atEnd}
              aria-label="Next experiences"
            >
              <ChevronRight width={20} height={20} />
            </button>
          </div>
        </div>

        <div className="rail" ref={rail} aria-label="A selection of SOLÉRA experiences">
          {experiences.map((experience) => (
            <article className="experience-card" key={experience.slug}>
              <TransitionLink
                to={`/destinations/${experience.destinationSlug}`}
                aria-label={`${experience.title}, ${experience.place}`}
              >
                <div className="experience-card__media">
                  <SmartImage
                    src={experience.image}
                    alt={experience.imageAlt}
                    sizes="(max-width: 760px) 78vw, 27vw"
                  />
                </div>
                <div className="experience-card__body">
                  <p className="experience-card__place">{experience.place}</p>
                  <h3 className="experience-card__title">{experience.title}</h3>
                  <div className="experience-card__foot">
                    <span>{experience.duration}</span>
                    <span>{experience.price}</span>
                  </div>
                </div>
              </TransitionLink>
            </article>
          ))}
        </div>

        <TransitionLink to="/destinations" className="link-arrow" style={{ color: 'var(--paper)', marginTop: 34 }}>
          All places and experiences
          <ArrowRight width={15} height={15} />
        </TransitionLink>
      </div>
    </section>
  )
}
