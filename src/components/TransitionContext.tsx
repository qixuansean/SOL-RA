import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useReducedMotion } from '../lib/useReveal'
import { SunMark } from './Icons'

type Phase = 'idle' | 'cover' | 'reveal'
type TransitionContextValue = { go: (to: string) => void }

const TransitionContext = createContext<TransitionContextValue | null>(null)

export function TransitionProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate()
  const location = useLocation()
  const reduced = useReducedMotion()
  const [phase, setPhase] = useState<Phase>('idle')
  const timers = useRef<number[]>([])
  const busy = useRef(false)

  const clearTimers = () => {
    timers.current.forEach((timer) => window.clearTimeout(timer))
    timers.current = []
  }

  useEffect(() => () => clearTimers(), [])

  const go = useCallback(
    (to: string) => {
      if (busy.current) return
      const current = `${location.pathname}${location.search}`
      if (to === current) {
        window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
        return
      }

      if (reduced) {
        navigate(to)
        window.scrollTo(0, 0)
        return
      }

      busy.current = true
      document.body.classList.add('is-locked')
      setPhase('cover')
      timers.current.push(
        window.setTimeout(() => {
          navigate(to)
          window.scrollTo(0, 0)
          setPhase('reveal')
          timers.current.push(
            window.setTimeout(() => {
              setPhase('idle')
              document.body.classList.remove('is-locked')
              busy.current = false
              document.getElementById('main')?.focus({ preventScroll: true })
            }, 600),
          )
        }, 440),
      )
    },
    [location.pathname, location.search, navigate, reduced],
  )

  return (
    <TransitionContext.Provider value={{ go }}>
      {children}
      <div className="page-curtain" data-phase={phase} aria-hidden="true">
        <span className="page-curtain__mark">
          <SunMark size={38} />
        </span>
        <span className="page-curtain__word">SOLÉRA</span>
        <span className="page-curtain__line">Shaping the light</span>
      </div>
    </TransitionContext.Provider>
  )
}

export function useTransition() {
  const context = useContext(TransitionContext)
  if (!context) throw new Error('useTransition must be used within TransitionProvider')
  return context
}
