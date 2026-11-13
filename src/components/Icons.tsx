import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

export function ArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  )
}

export function ArrowLeft(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 12H5" />
      <path d="M11 18l-6-6 6-6" />
    </svg>
  )
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>
  )
}

export function ArrowUp(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20V5" />
      <path d="M6 11l6-6 6 6" />
    </svg>
  )
}

export function ChevronLeft(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M15 5l-7 7 7 7" />
    </svg>
  )
}

export function ChevronRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 5l7 7-7 7" />
    </svg>
  )
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4.5 4.5" />
    </svg>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export function RefreshIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 11a8 8 0 1 0-2.4 5.7" />
      <path d="M20 4v7h-7" />
    </svg>
  )
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  )
}

export function ZoomIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="11" cy="11" r="6" />
      <path d="M11 8.5v5M8.5 11h5M15.5 15.5L20 20" />
    </svg>
  )
}

export function CopyIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="8" y="8" width="11" height="11" rx="1" />
      <path d="M5 15V5h10" />
    </svg>
  )
}

export function SunMark({ size = 20, ...props }: IconProps & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="10" r="5.4" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3.2 18.2h17.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

export function SaveSun({ size = 18, filled = false }: { size?: number; filled?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <g className="sun-fill" fill="currentColor" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
        <circle cx="12" cy="10" r="5.2" />
      </g>
      <circle cx="12" cy="10" r="5.2" stroke="currentColor" strokeWidth="1.35" />
      <path d="M3.4 18.1h17.2" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      {filled ? (
        <path d="M9.4 10.1l1.8 1.8 3.5-3.6" stroke="var(--paper)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M12 7.1v5.8M9.1 10h5.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      )}
    </svg>
  )
}

export function CompassMark(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M14.8 9.2l-1.6 4-2.4 1.6 1.6-4 2.4-1.6z" />
    </svg>
  )
}

export function WavesMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 110" fill="none" aria-hidden="true" className={className}>
      <circle cx="80" cy="44" r="25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M18 74h124" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M28 86c10-6 20-6 30 0s20 6 30 0 20-6 30 0 20 6 30 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".55" />
      <path d="M42 98c10-5 18-5 28 0s18 5 28 0 18-5 28 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".3" />
    </svg>
  )
}

export function PlayIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 5.2v13.6L19 12z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function PauseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="7.2" y="5.2" width="3.1" height="13.6" rx="0.6" fill="currentColor" stroke="none" />
      <rect x="13.7" y="5.2" width="3.1" height="13.6" rx="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}
