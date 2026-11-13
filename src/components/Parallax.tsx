import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from '../lib/useReveal'

gsap.registerPlugin(ScrollTrigger)

type Props = {
  children: ReactNode
  className?: string
  strength?: number
}

export function Parallax({ children, className = '', strength = 4 }: Props) {
  const outer = useRef<HTMLDivElement>(null)
  const inner = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced || !outer.current || !inner.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        inner.current,
        { yPercent: -strength },
        {
          yPercent: strength,
          ease: 'none',
          scrollTrigger: {
            trigger: outer.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8,
          },
        },
      )
    }, outer)
    const timer = window.setTimeout(() => ScrollTrigger.refresh(), 350)
    return () => {
      window.clearTimeout(timer)
      ctx.revert()
    }
  }, [reduced, strength])

  return (
    <div ref={outer} className={`parallax ${className}`}>
      <div ref={inner} className="parallax__inner">
        {children}
      </div>
    </div>
  )
}
