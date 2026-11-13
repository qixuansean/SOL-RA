import { useMemo, useState } from 'react'
import { articles, categories } from '../data/journal'
import type { Article } from '../data/journal'
import { CloseIcon, SearchIcon, WavesMark, ArrowRight } from '../components/Icons'
import { ArticleCard } from '../components/ArticleCard'
import { Reveal } from '../components/Reveal'
import { SectionHead } from '../components/SectionHead'
import { SmartImage } from '../components/SmartImage'
import { TransitionLink } from '../components/TransitionLink'
import { useDocumentTitle } from '../lib/useDocumentTitle'

export function Journal() {
  useDocumentTitle('Journal — SOLÉRA')
  const [category, setCategory] = useState<Article['category'] | 'All stories'>('All stories')
  const [query, setQuery] = useState('')

  const feature = articles.find((article) => article.featured) ?? articles[0]
  const filtering = category !== 'All stories' || query.trim().length > 0

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return articles.filter((article) => {
      const matchesCategory = category === 'All stories' || article.category === category
      const matchesQuery =
        needle.length === 0 ||
        [article.title, article.dek, article.category, article.author]
          .join(' ')
          .toLowerCase()
          .includes(needle)
      return matchesCategory && matchesQuery
    })
  }, [category, query])

  const reset = () => {
    setCategory('All stories')
    setQuery('')
  }

  const displayed = filtering
    ? results
    : results.filter((article) => article.slug !== feature.slug)

  return (
    <>
      <header className="page-hero journal-hero">
        <div className="container">
          <div className="page-hero__grid">
            <Reveal>
              <h1>The Journal</h1>
            </Reveal>
            <Reveal className="page-hero__side" delay={110}>
              <p>
                Notes on light, place and the pace of a good day. Written by the people who
                plan the journeys, from the places they return to.
              </p>
              <p className="meta">Six stories · A new letter each month</p>
            </Reveal>
          </div>
        </div>
      </header>

      <div className="filter-bar journal-filter">
        <div className="container">
          <div className="filter-bar__top">
            <div className="search">
              <SearchIcon width={18} height={18} />
              <label htmlFor="journal-search" className="visually-hidden">
                Search the journal
              </label>
              <input
                id="journal-search"
                type="search"
                placeholder="Search a story, a place or an idea"
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
              {results.length === 1 ? 'One story' : `${results.length} stories`}
              {filtering ? ' in this view' : ' in the journal'}
            </p>
          </div>
          <div className="filters" role="group" aria-label="Filter stories by category">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                className="chip"
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="journal-list">
        <div className="container">
          {!filtering ? (
            <Reveal>
              <TransitionLink
                to={`/journal/${feature.slug}`}
                className="journal-feature"
                aria-label={`${feature.title} — ${feature.readTime}`}
              >
                <div className="journal-feature__media">
                  <SmartImage
                    src={feature.cover}
                    alt={feature.coverAlt}
                    priority
                    sizes="(max-width: 1100px) 100vw, 60vw"
                  />
                </div>
                <div className="journal-feature__body">
                  <div className="journal-feature__meta">
                    <span>{feature.category}</span>
                    <span>{feature.date}</span>
                    <span>{feature.readTime}</span>
                  </div>
                  <h2 className="journal-feature__title">{feature.title}</h2>
                  <p className="journal-feature__dek">{feature.dek}</p>
                  <span className="link-arrow">
                    Read the story
                    <ArrowRight width={15} height={15} />
                  </span>
                </div>
              </TransitionLink>
            </Reveal>
          ) : null}

          {displayed.length > 0 ? (
            <>
              <Reveal>
                <SectionHead
                  title={filtering ? 'Stories that match.' : 'More from the journal.'}
                  side={
                    <p>
                      {filtering
                        ? 'A narrower view of the journal. Clear the filters to return to everything.'
                        : 'Longer pieces on place, design and the small decisions that shape a journey.'}
                    </p>
                  }
                />
              </Reveal>
              <div className="journal-grid">
                {displayed.map((article, index) => (
                  <Reveal key={article.slug} delay={Math.min(index, 4) * 60}>
                    <ArticleCard article={article} priority={index === 0} />
                  </Reveal>
                ))}
              </div>
            </>
          ) : (
            <div className="empty-state">
              <WavesMark />
              <h2>No story matches that search.</h2>
              <p>
                Try a different word, a broader category, or begin again with everything the
                journal has to offer.
              </p>
              <button type="button" className="btn" onClick={reset}>
                Clear the filters
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
