import { useEffect, useState } from 'react'
import type { Destination } from '../data/destinations'
import { getSunData, pointOnArc } from '../lib/sun'
import { ArrowRight } from './Icons'
import { TransitionLink } from './TransitionLink'

export function SunArc({ progress, label }: { progress: number; label: string }) {
  const point = pointOnArc(progress)
  return (
    <svg className="sun-arc" viewBox="0 0 300 92" role="img" aria-label={label}>
      <path
        d="M8 84 Q150 4 292 84"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.24"
      />
      <path
        d="M8 84 Q150 4 292 84"
        fill="none"
        stroke="var(--clay)"
        strokeWidth="2"
        pathLength={100}
        strokeDasharray={`${Math.max(0.5, progress * 100)} 100`}
      />
      <line
        x1="8"
        y1="84"
        x2="292"
        y2="84"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.18"
        strokeDasharray="2 5"
      />
      <circle cx={point.x} cy={point.y} r="5.2" fill="var(--sand)" stroke="var(--clay)" strokeWidth="2" />
    </svg>
  )
}

type Props = {
  destination: Destination
  variant?: 'compact' | 'block'
  showLink?: boolean
  className?: string
}

export function SunPanel({ destination, variant = 'compact', showLink = false, className = '' }: Props) {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 30_000)
    return () => window.clearInterval(timer)
  }, [])

  const sun = getSunData(now, destination.coords.lat, destination.coords.lng, destination.timezone)

  return (
    <div
      className={`sun-panel ${variant === 'block' ? 'sun-panel--block' : ''} ${className}`}
      aria-label={`Current light in ${destination.name}`}
    >
      <div className="sun-panel__top">
        <p className="sun-panel__place">
          {destination.name} ·{' '}
          {destination.name.includes(destination.country) ? destination.region : destination.country}
        </p>
        <span className="sun-panel__live">
          <span className="sun-panel__dot" aria-hidden="true" />
          Live
        </span>
      </div>
      <p className="sun-panel__time">{sun.timeLabel}</p>
      <p className="sun-panel__phase">{sun.phase}</p>
      <SunArc
        progress={sun.progress}
        label={`The sun is ${Math.round(sun.progress * 100)} percent through its arc in ${destination.name}`}
      />
      <div className="sun-panel__meta">
        <span>Sunrise {sun.sunriseLabel}</span>
        <span>Sunset {sun.sunsetLabel}</span>
      </div>
      {variant === 'block' ? (
        <div className="sun-panel__meta" style={{ marginTop: 6 }}>
          <span>{sun.dayLengthLabel} of daylight</span>
          <span>{sun.remainingLabel}</span>
        </div>
      ) : null}
      {showLink ? (
        <TransitionLink to={`/destinations/${destination.slug}`} className="sun-panel__link">
          See {destination.name}
          <ArrowRight width={14} height={14} />
        </TransitionLink>
      ) : null}
    </div>
  )
}
