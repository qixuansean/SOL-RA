import type { CSSProperties, ReactNode } from 'react'
import { useReveal } from '../lib/useReveal'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  variant?: 'up' | 'small' | 'fade' | 'mask'
  as?: 'div' | 'section' | 'li' | 'figure' | 'span'
  style?: CSSProperties
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  variant = 'up',
  as: Tag = 'div',
  style,
}: RevealProps) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <Tag
      ref={ref as never}
      className={className}
      data-reveal={variant === 'up' ? 'true' : variant}
      style={{ ...style, '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}
