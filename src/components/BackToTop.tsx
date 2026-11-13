import { useEffect, useState } from 'react'
import { ArrowUp } from './Icons'
import { useReducedMotion } from '../lib/useReveal'

export function BackToTop() {
  const [visible, setVisible] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      className={`to-top ${visible ? 'is-visible' : ''}`}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })}
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUp width={18} height={18} />
    </button>
  )
}
