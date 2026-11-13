import { useEffect, useRef, useState } from 'react'
import { srcSetFor } from '../data/image-variants'
import { SunMark } from './Icons'

type Props = {
  src: string
  alt: string
  priority?: boolean
  className?: string
  sizes?: string
}

export function SmartImage({ src, alt, priority = false, className = '', sizes }: Props) {
  const [state, setState] = useState<'loading' | 'loaded' | 'error'>('loading')
  const ref = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const img = ref.current
    if (!img) return
    if (img.complete) {
      setState(img.naturalWidth > 0 ? 'loaded' : 'error')
    }
  }, [src])

  return (
    <span
      className={`smart-image ${state === 'loaded' ? 'is-loaded' : ''} ${
        state === 'error' ? 'is-error' : ''
      } ${className}`}
    >
      <img
        ref={ref}
        src={src}
        srcSet={srcSetFor(src)}
        alt={alt}
        sizes={sizes ?? '100vw'}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        draggable={false}
        onLoad={() => setState('loaded')}
        onError={() => setState('error')}
      />
      {state === 'error' ? (
        <span className="smart-image__fallback">
          <SunMark size={30} />
          <span>Image unavailable</span>
        </span>
      ) : null}
    </span>
  )
}
