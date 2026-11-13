import type { MouseEvent } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { useTransition } from './TransitionContext'

type Props = Omit<LinkProps, 'to'> & { to: string }

export function TransitionLink({ to, onClick, children, ...rest }: Props) {
  const { go } = useTransition()

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return
    }
    event.preventDefault()
    go(to)
  }

  return (
    <Link to={to} onClick={handleClick} {...rest}>
      {children}
    </Link>
  )
}
