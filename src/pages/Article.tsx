import { Fragment, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { articles, getArticle } from '../data/journal'
import { useSaved } from '../components/SavedContext'
import { CheckIcon, CopyIcon, SunMark } from '../components/Icons'
import { ArticleCard } from '../components/ArticleCard'
import { Reveal } from '../components/Reveal'
import { ScrollProgress } from '../components/ScrollProgress'
import { SectionHead } from '../components/SectionHead'
import { SmartImage } from '../components/SmartImage'
import { TransitionLink } from '../components/TransitionLink'
import { useDocumentTitle } from '../lib/useDocumentTitle'
import { NotFound } from './NotFound'

export function Article() {
  const { slug = '' } = useParams<{ slug: string }>()
  const article = getArticle(slug)
  useDocumentTitle(article ? `${article.title} — SOLÉRA Journal` : 'Story not found — SOLÉRA')
  const { notify } = useSaved()
  const [copied, setCopied] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  if (!article) return <NotFound />

  const next = articles.filter((item) => item.slug !== article.slug).slice(0, 2)

  const copyLink = async () => {
    const url = window.location.href
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      notify('Link copied to your clipboard')
      window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => setCopied(false), 2200)
    } catch {
      notify('Select the address bar to copy this page')
    }
  }

  return (
    <>
      <ScrollProgress />
      <article>
        <header className="article-hero">
          <SmartImage src={article.cover} alt={article.coverAlt} priority sizes="100vw" />
          <div className="article-hero__shade" aria-hidden="true" />
        </header>

        <div className="article-head">
          <div className="container">
            <div className="article-head__inner">
              <TransitionLink to="/journal" className="back-link">
                ← The Journal
              </TransitionLink>
              <div className="article-head__meta">
                <span>{article.category}</span>
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
              <h1>{article.title}</h1>
              <p className="article-head__dek">{article.dek}</p>
              <p className="article-head__byline">
                By {article.author}
                <SunMark
                  size={13}
                  style={{ display: 'inline-block', verticalAlign: '-2px', margin: '0 8px' }}
                />
                Written for SOLÉRA
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="article-body">
            {article.body.map((block, index) => {
              const figure =
                article.secondImage && index === 3 ? (
                  <figure className="article-figure" key={`figure-${index}`}>
                    <div className="article-figure__media">
                      <SmartImage
                        src={article.secondImage.src}
                        alt={article.secondImage.alt}
                        sizes="(max-width: 760px) 100vw, 720px"
                      />
                    </div>
                    <figcaption>{article.secondImage.caption}</figcaption>
                  </figure>
                ) : null

              if (block.type === 'paragraph') {
                return (
                  <Fragment key={`p-${index}`}>
                    <p>{block.text}</p>
                    {figure}
                  </Fragment>
                )
              }

              if (block.type === 'heading') {
                return (
                  <Fragment key={`h-${index}`}>
                    <h2>{block.text}</h2>
                    {figure}
                  </Fragment>
                )
              }

              return (
                <Fragment key={`q-${index}`}>
                  <blockquote>
                    {block.text}
                    {block.attribution ? <cite>{block.attribution}</cite> : null}
                  </blockquote>
                  {figure}
                </Fragment>
              )
            })}
          </div>

          <div className="article-share">
            <span>If this stayed with you, pass it on.</span>
            <button type="button" onClick={copyLink} aria-live="polite">
              {copied ? <CheckIcon width={15} height={15} /> : <CopyIcon width={15} height={15} />}
              {copied ? 'Link copied' : 'Copy link'}
            </button>
          </div>
        </div>

        <section className="article-next" aria-labelledby="article-next-heading">
          <div className="container">
            <Reveal>
              <SectionHead
                id="article-next-heading"
                title="Two more, for the next long afternoon."
                side={
                  <TransitionLink to="/journal" className="link-arrow">
                    All stories
                    <SunMark size={14} />
                  </TransitionLink>
                }
              />
            </Reveal>
            <div className="article-next__grid">
              {next.map((item, index) => (
                <Reveal key={item.slug} delay={index * 80}>
                  <ArticleCard article={item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
