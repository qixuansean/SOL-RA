import type { ReactNode } from 'react'

type Props = {
  title: string
  id?: string
  side?: ReactNode
  className?: string
}

export function SectionHead({ title, id, side, className = '' }: Props) {
  return (
    <div className={`section-head ${className}`}>
      <h2 className="h2" id={id}>
        {title}
      </h2>
      {side ? <div className="section-head__side">{side}</div> : null}
    </div>
  )
}
