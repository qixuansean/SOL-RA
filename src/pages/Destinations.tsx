import { useMemo, useState } from 'react'
import { destinations, regions, styles } from '../data/destinations'
import type { Region, TravelStyle } from '../data/destinations'
import { CloseIcon, SearchIcon, SunMark, WavesMark } from '../components/Icons'
import { DestinationCard } from '../components/DestinationCard'
import { Reveal } from '../components/Reveal'
import { TransitionLink } from '../components/TransitionLink'
import { useDocumentTitle } from '../lib/useDocumentTitle'

export function Destinations() {
  useDocumentTitle('Destinations — SOLÉRA')
  const [query, setQuery] = useState('')
  const [region, setRegion] = useState<Region | 'All regions'>('All regions')
  const [style, setStyle] = useState<TravelStyle | 'All styles'>('All styles')

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return destinations.filter((destination) => {
      const matchesRegion = region === 'All regions' || destination.region === region
      const matchesStyle = style === 'All styles' || destination.style === style
      const matchesQuery =
        needle.length === 0 ||
        [
          destination.name,
          destination.country,
          destination.region,
          destination.style,
          destination.tagline,
          destination.summary,
        ]
          .join(' ')
          .toLowerCase()
          .includes(needle)
      return matchesRegion && matchesStyle && matchesQuery
    })
  }, [query, region, style])

  const filtering = query.trim().length > 0 || region !== 'All regions' || style !== 'All styles'

  const reset = () => {
    setQuery('')
    setRegion('All regions')
    setStyle('All styles')
  }

  return (
    <>
      <header className="page-hero">
        <div className="container">
          <div className="page-hero__grid">
            <Reveal>
              <h1>Destinations</h1>
            </Reveal>
            <Reveal className="page-hero__side" delay={110}>
              <p>
                Sixteen places we know well enough to plan around the weather, the crowds and
                the hour the light turns. Filter by region, or by the kind of day you want.
              </p>
              <p className="meta">Five regions · Four travel styles · Two hemispheres</p>
            </Reveal>
          </div>
        </div>
      </header>

      <div className="filter-bar">
        <div className="container">
          <div className="filter-bar__top">
            <div className="search">
              <SearchIcon width={18} height={18} />
              <label htmlFor="destination-search" className="visually-hidden">
                Search destinations
              </label>
              <input
                id="destination-search"
                type="search"
                placeholder="Search a place, a country or a feeling"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                autoComplete="off"
              />
              {query ? (
                <button
                  type="button"
                  className="search__clear"
                  aria-label="Clear search"
                  onClick={() => setQuery('')}
                >
                  <CloseIcon width={15} height={15} />
                </button>
              ) : null}
            </div>
            <p className="result-count" aria-live="polite">
              {results.length === 1 ? 'One place' : `${results.length} places`}
              {filtering ? ' in this view' : ''}
            </p>
          </div>

          <div className="filters" role="group" aria-label="Filter by region">
            {regions.map((item) => (
              <button
                key={item}
                type="button"
                className="chip"
                aria-pressed={region === item}
                onClick={() => setRegion(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="filters" role="group" aria-label="Filter by travel style" style={{ marginTop: 8 }}>
            {styles.map((item) => (
              <button
                key={item}
                type="button"
                className="chip"
                aria-pressed={style === item}
                onClick={() => setStyle(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="destinations-list">
        <div className="container">
          {results.length > 0 ? (
            <div className="destinations-grid">
              {results.map((destination, index) => (
                <Reveal key={destination.slug} className="destinations-grid__item" delay={Math.min(index, 4) * 60}>
                  <DestinationCard destination={destination} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <WavesMark />
              <h2>No place matches that combination.</h2>
              <p>
                Try a broader region, a different travel style, or simply clear the search and
                begin again. The sixteen places are not going anywhere.
              </p>
              <button type="button" className="btn" onClick={reset}>
                Clear all filters
              </button>
            </div>
          )}

          <div className="destinations-more">
            <Reveal>
              <p>
                Not sure where to begin? Tell us the kind of day you want, and we will find the
                place that suits it.
              </p>
            </Reveal>
            <Reveal delay={80} className="saved-actions">
              <TransitionLink to="/plan" className="btn">
                Plan a journey
                <SunMark size={16} />
              </TransitionLink>
              <TransitionLink to="/saved" className="link-arrow">
                Or revisit your saved trips
              </TransitionLink>
            </Reveal>
          </div>
        </div>
      </div>
    </>
  )
}
