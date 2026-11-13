import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { getDestination, styles } from '../data/destinations'
import type { Destination, TravelStyle } from '../data/destinations'
import { site } from '../data/site'
import { useSaved } from '../components/SavedContext'
import { SmartImage } from '../components/SmartImage'
import { TransitionLink } from '../components/TransitionLink'
import { Reveal } from '../components/Reveal'
import { ArrowRight, SunMark, WavesMark } from '../components/Icons'
import { useDocumentTitle } from '../lib/useDocumentTitle'

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const TRAVEL_STYLES = styles.filter((style): style is TravelStyle => style !== 'All styles')

type PlanEntry = {
  destination: Destination
  days: number
  score: number
  sunrise?: string
  sunset?: string
  dayLength?: string
}

type Plan = {
  month: number
  days: number
  travellers: number
  style: TravelStyle
  entries: PlanEntry[]
}

function buildMessage(plan: Plan) {
  const travellers =
    plan.travellers === 1 ? 'one traveller' : `${plan.travellers} travellers`
  const article = plan.style === 'Alpine' ? 'an' : 'a'
  return [
    'Hello SOLÉRA,',
    '',
    `I would like to talk about ${plan.days} days in ${MONTHS[plan.month - 1]}, for ${travellers}, in ${article} ${plan.style.toLowerCase()} register.`,
    '',
    'Places from my saved list:',
    ...plan.entries.map(
      (entry) =>
        `- ${entry.destination.name}, ${entry.destination.country} — ${entry.days} days; ${entry.score}/4 in ${MONTHS[plan.month - 1]}; sunrise ${entry.sunrise}, sunset ${entry.sunset}, ${entry.dayLength} of daylight.`,
    ),
    '',
    'Sent from the planning page.',
  ].join('\n')
}

export function Plan() {
  useDocumentTitle('Plan a journey — SOLÉRA')

  const { saved } = useSaved()
  const savedDestinations = saved
    .map((slug) => getDestination(slug))
    .filter((destination): destination is Destination => destination !== undefined)

  const [month, setMonth] = useState(() => new Date().getMonth() + 1)
  const [days, setDays] = useState(9)
  const [travellers, setTravellers] = useState(2)
  const [style, setStyle] = useState<TravelStyle>('Coastal')
  // 核心变更：记录每个目的地分配的天数 { [slug]: days }
  const [allocation, setAllocation] = useState<Record<string, number>>({})
  
  // 自动根据保存的地点初始化分配
  useEffect(() => {
    const initial: Record<string, number> = {}
    savedDestinations.forEach((d) => (initial[d.slug] = Math.max(1, Math.floor(days / savedDestinations.length))))
    setAllocation(initial)
  }, [saved, days])

  const [plan, setPlan] = useState<Plan | null>(null)
  const summaryRef = useRef<HTMLDivElement>(null)

  // 计算剩余天数
  const allocatedDays = Object.values(allocation).reduce((a, b) => a + b, 0)
  const remainingDays = days - allocatedDays

  const updateAllocation = (slug: string, value: number) => {
    setAllocation((prev) => ({ ...prev, [slug]: value }))
  }

  const togglePlace = (slug: string) => {
    setAllocation((prev) => {
      const next = { ...prev }
      if (next[slug]) {
        delete next[slug]
      } else {
        next[slug] = 1
      }
      return next
    })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (remainingDays !== 0) {
      alert(`Please allocate all ${days} days. Currently ${remainingDays > 0 ? `${remainingDays} remaining` : `${Math.abs(remainingDays)} extra`}.`)
      return
    }
    
    const entries = Object.entries(allocation)
      .map(([slug, days]) => ({ destination: getDestination(slug), days }))
      .filter((e): e is { destination: Destination; days: number } => e.destination !== undefined)
      .map(({ destination, days }) => {
        return { destination, days, score: destination.months[month - 1] }
      })
    setPlan({ month, days, travellers, style, entries })
  }


  const mailtoHref = plan
    ? `mailto:${site.email}?subject=${encodeURIComponent(
        `Journey outline — ${MONTHS[plan.month - 1]}, ${plan.days} days`,
      )}&body=${encodeURIComponent(buildMessage(plan))}`
    : undefined

  return (
    <>
      <header className="plan-head">
        <div className="container">
          <h1>Plan a journey</h1>
          <p>
            Tell us when you can leave and how long you have. We will set it against the
            places you have saved, the month-by-month light and the hours of each day.
          </p>
        </div>
      </header>

      <div className="plan-body">
        <div className="container">
          <div className="plan-grid">
            <Reveal>
              <form className="plan-form" onSubmit={handleSubmit}>
                <fieldset className="plan-fieldset" data-animate="scale">
                  <legend>When and how long</legend>
                  <div className="plan-fields">
                    <div className="plan-field">
                      <label htmlFor="plan-month">Departure month</label>
                      <select
                        id="plan-month"
                        value={month}
                        onChange={(event) => setMonth(Number(event.target.value))}
                      >
                        {MONTHS.map((name, index) => (
                          <option key={name} value={index + 1}>
                            {name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="plan-field">
                      <label htmlFor="plan-days">Days</label>
                      <input
                        id="plan-days"
                        type="number"
                        min={1}
                        max={60}
                        value={days}
                        onChange={(event) => setDays(Number(event.target.value))}
                        required
                      />
                    </div>
                    <div className="plan-field">
                      <label htmlFor="plan-travellers">Travellers</label>
                      <input
                        id="plan-travellers"
                        type="number"
                        min={1}
                        max={12}
                        value={travellers}
                        onChange={(event) => setTravellers(Number(event.target.value))}
                        required
                      />
                    </div>
                  </div>
                </fieldset>

                <fieldset className="plan-fieldset" data-animate="slide-right">
                  <legend>Travel style</legend>
                  <div className="plan-field">
                    <label htmlFor="plan-style">The register of the days</label>
                    <select
                      id="plan-style"
                      value={style}
                      onChange={(event) => setStyle(event.target.value as TravelStyle)}
                    >
                      {TRAVEL_STYLES.map((name) => (
                        <option key={name} value={name}>
                          {name}
                        </option>
                      ))}
                    </select>
                  </div>
                </fieldset>

                <fieldset className="plan-fieldset" data-animate="slide-left">
                  <legend>From your saved places {savedDestinations.length > 0 && <span style={{fontSize: '0.8rem', color: 'var(--salt)'}}>({remainingDays} days remaining)</span>}</legend>
                  {savedDestinations.length > 0 ? (
                    <div className="plan-places">
                      {savedDestinations.map((destination) => (
                        <div className="plan-place-row" key={destination.slug}>
                          <label className="plan-place">
                            <input
                              type="checkbox"
                              checked={!!allocation[destination.slug]}
                              onChange={() => togglePlace(destination.slug)}
                            />
                            <span className="plan-place__media">
                              <SmartImage src={destination.cover} alt="" sizes="52px" />
                            </span>
                            <span className="plan-place__text">
                              <strong>{destination.name}</strong>
                            </span>
                          </label>
                          {allocation[destination.slug] !== undefined && (
                             <input 
                                type="number"
                                min={1}
                                max={days}
                                className="plan-place__days"
                                value={allocation[destination.slug]}
                                onChange={(e) => updateAllocation(destination.slug, Number(e.target.value))}
                             />
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="plan-places__empty">
                      <WavesMark />
                      <p>
                        Nothing is saved yet. The planning page draws only from the places
                        you have kept, so begin there.
                      </p>
                      <TransitionLink to="/destinations" className="link-arrow">
                        Browse the destinations
                        <ArrowRight width={15} height={15} />
                      </TransitionLink>
                    </div>
                  )}
                </fieldset>

                <button type="submit" className="btn plan-submit" disabled={Object.keys(allocation).length === 0 || remainingDays !== 0} data-animate="scale">
                  Build the outline
                  <SunMark size={16} />
                </button>
              </form>
            </Reveal>

            <div
              className="plan-summary"
              ref={summaryRef}
              tabIndex={-1}
              role="region"
              aria-live="polite"
              aria-label="Your journey outline"
            >
              {plan ? (
                <>
                  <p className="plan-summary__meta">
                    {MONTHS[plan.month - 1]} · {plan.days} days ·{' '}
                    {plan.travellers === 1 ? 'one traveller' : `${plan.travellers} travellers`} ·{' '}
                    {plan.style}
                  </p>
                  <h2>Your outline</h2>
                  <p className="plan-summary__intro">
                    These are the places you saved, set against the light of{' '}
                    {MONTHS[plan.month - 1]}. Nothing has been added that you did not choose.
                  </p>

                  <ol className="plan-summary__list">
                    {plan.entries.map((entry) => {
                      const { destination } = entry
                      const highlight = destination.highlights[0]
                      return (
                        <li className="plan-summary__place" key={destination.slug}>
                          <div className="plan-summary__media">
                            <SmartImage
                              src={destination.cover}
                              alt={destination.coverAlt}
                              sizes="(max-width: 560px) 90px, 120px"
                            />
                          </div>
                          <div className="plan-summary__body">
                            <div className="plan-summary__row">
                              <h3>{destination.name}</h3>
                              <span className="plan-summary__days-badge">{entry.days} days</span>
                            </div>
                            <span className="plan-summary__score">
                              {entry.score} / 4 in {MONTHS[plan.month - 1]}
                            </span>
                            <p className="plan-summary__facts">
                              {destination.country} · {destination.region} · {destination.style}
                              {' · '}best {destination.bestSeason}
                            </p>
                            <p>
                              Sunrise {entry.sunrise}, sunset {entry.sunset} —{' '}
                              {entry.dayLength} of daylight at mid-month.
                            </p>
                            <p>
                              {destination.facts.temperature} · {destination.facts.flight} ·
                              usually {destination.facts.stay}.
                            </p>
                            <p className="plan-summary__note">
                              {highlight.title} — {highlight.text}
                            </p>
                            {entry.score <= 2 ? (
                              <p className="plan-summary__caution">
                                Our chart marks this month {entry.score} of 4. Its best season
                                is {destination.bestSeason}.
                              </p>
                            ) : null}
                          </div>
                        </li>
                      )
                    })}
                  </ol>

                  <div className="plan-summary__foot">
                    <p>
                      Send this outline to the studio and we will reply with the light, the
                      rooms and the order of the days.
                    </p>
                    <a href={mailtoHref} className="btn">
                      Send this outline
                      <ArrowRight className="btn__arrow" width={16} height={16} />
                    </a>
                  </div>
                </>
              ) : (
                <div className="plan-summary__idle">
                  <SunMark size={26} />
                  <h2>Your outline will appear here.</h2>
                  <p>
                    Choose a month, a length of stay and the places you have saved. We will
                    gather what the archive already knows about each one.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
