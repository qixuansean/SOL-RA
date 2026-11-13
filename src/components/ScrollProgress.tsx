import { useEffect, useRef } from 'react'

export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const node = bar.current
      if (!node) return
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max <= 0 ? 0 : Math.min(1, Math.max(0, window.scrollY / max))
      node.style.setProperty('--progress', progress.toFixed(4))
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return <div ref={bar} className="read-progress" aria-hidden="true" />
}
