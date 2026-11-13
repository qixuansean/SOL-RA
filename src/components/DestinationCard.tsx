import type { Destination } from '../data/destinations'
import { ArrowUpRight } from './Icons'
import { SaveButton } from './SaveButton'
import { SmartImage } from './SmartImage'
import { TransitionLink } from './TransitionLink'

type Props = {
  destination: Destination
  variant?: 'default' | 'wide' | 'square'
  save?: boolean
  priority?: boolean
}

export function DestinationCard({ destination, variant = 'default', save = true, priority = false }: Props) {
  const place = destination.name.includes(destination.country)
    ? destination.region
    : `${destination.country} · ${destination.region}`

  return (
    <article
      className={`dest-card ${
        variant === 'wide' ? 'dest-card--wide' : variant === 'square' ? 'dest-card--square' : ''
      }`}
    >
      <TransitionLink
        to={`/destinations/${destination.slug}`}
        className="dest-card__link"
        aria-label={`${destination.name}, ${place}`}
      >
        <div className="dest-card__media">
          <SmartImage
            src={destination.cover}
            alt={destination.coverAlt}
            priority={priority}
            sizes="(max-width: 760px) 100vw, 50vw"
          />
        </div>
        <div className="dest-card__body">
          <div>
            <h3 className="dest-card__name">{destination.name}</h3>
            <span className="dest-card__country">{place}</span>
          </div>
          <ArrowUpRight className="dest-card__arrow" width={20} height={20} />
        </div>
      </TransitionLink>
      {save ? (
        <div className="dest-card__save">
          <SaveButton slug={destination.slug} name={destination.name} />
        </div>
      ) : null}
    </article>
  )
}
