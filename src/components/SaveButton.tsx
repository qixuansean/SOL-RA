import { useRef, useState } from 'react'
import { useSaved } from './SavedContext'
import { SaveSun } from './Icons'

type Props = {
  slug: string
  name: string
  variant?: 'icon' | 'text'
  className?: string
}

export function SaveButton({ slug, name, variant = 'icon', className = '' }: Props) {
  const { isSaved, toggle } = useSaved()
  const saved = isSaved(slug)
  const [pulsing, setPulsing] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  const onClick = () => {
    toggle(slug, name)
    setPulsing(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setPulsing(false), 720)
  }

  return (
    <button
      type="button"
      className={`save-button ${variant === 'text' ? 'save-button--text' : ''} ${
        pulsing ? 'is-pulsing' : ''
      } ${className}`}
      aria-pressed={saved}
      aria-label={saved ? `Remove ${name} from saved trips` : `Save ${name} to saved trips`}
      onClick={onClick}
    >
      <span className="save-button__ring" aria-hidden="true" />
      <SaveSun size={variant === 'text' ? 17 : 18} filled={saved} />
      {variant === 'text' ? <span>{saved ? 'Saved' : 'Save trip'}</span> : null}
    </button>
  )
}
