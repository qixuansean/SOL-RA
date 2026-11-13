import type { Article } from '../data/journal'
import { SmartImage } from './SmartImage'
import { TransitionLink } from './TransitionLink'

type Props = {
  article: Article
  priority?: boolean
}

export function ArticleCard({ article, priority = false }: Props) {
  return (
    <TransitionLink
      to={`/journal/${article.slug}`}
      className="article-card"
      aria-label={`${article.title} — ${article.readTime}`}
    >
      <div className="article-card__media">
        <SmartImage
          src={article.cover}
          alt={article.coverAlt}
          priority={priority}
          sizes="(max-width: 760px) 100vw, 33vw"
        />
      </div>
      <div className="article-card__meta">
        <span>{article.category}</span>
        <span>{article.readTime}</span>
      </div>
      <h3 className="article-card__title">{article.title}</h3>
      <p className="article-card__dek">{article.dek}</p>
    </TransitionLink>
  )
}
