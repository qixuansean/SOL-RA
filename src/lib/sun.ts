export type SunPhase = 'Night' | 'First light' | 'Morning light' | 'Daylight' | 'Golden hour' | 'Blue hour'

export type SunData = {
  timeLabel: string
  phase: SunPhase
  sunrise: Date
  sunset: Date
  sunriseLabel: string
  sunsetLabel: string
  progress: number
  dayLengthLabel: string
  remainingLabel: string
  isDay: boolean
}

const MIN = 60_000

function localDateParts(date: Date, timeZone: string) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date)
  const get = (type: string) => Number(parts.find((p) => p.type === type)?.value ?? 0)
  return { year: get('year'), month: get('month'), day: get('day') }
}

function dayOfYear(year: number, month: number, day: number) {
  const start = Date.UTC(year, 0, 0)
  const current = Date.UTC(year, month - 1, day)
  return Math.floor((current - start) / 86_400_000)
}

function formatClock(date: Date, timeZone: string) {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(date)
}

function durationLabel(ms: number) {
  const total = Math.max(0, Math.round(ms / MIN))
  const hours = Math.floor(total / 60)
  const minutes = total % 60
  if (hours <= 0) return `${minutes}m`
  return `${hours}h ${String(minutes).padStart(2, '0')}m`
}

/**
 * Approximate NOAA solar calculation. Accurate to a few minutes at the
 * latitudes used by SOLÉRA, which is enough for a "where is the light" panel.
 */
export function getSunData(now: Date, lat: number, lng: number, timeZone: string): SunData {
  const { year, month, day } = localDateParts(now, timeZone)
  const n = dayOfYear(year, month, day)
  const rad = Math.PI / 180
  const declination = 23.44 * rad * Math.sin((2 * Math.PI * (284 + n)) / 365)
  const b = (2 * Math.PI * (n - 81)) / 364
  const eqTime = 9.87 * Math.sin(2 * b) - 7.53 * Math.cos(b) - 1.5 * Math.sin(b)

  const cosHorizon = Math.cos(90.833 * rad) / (Math.cos(lat * rad) * Math.cos(declination)) -
    Math.tan(lat * rad) * Math.tan(declination)
  const safeCos = Math.min(1, Math.max(-1, cosHorizon))
  const hourAngle = Math.acos(safeCos) / rad

  const solarNoonMinutes = 720 - 4 * lng - eqTime
  const sunriseMinutes = solarNoonMinutes - 4 * hourAngle
  const sunsetMinutes = solarNoonMinutes + 4 * hourAngle

  const base = Date.UTC(year, month - 1, day)
  const sunrise = new Date(base + sunriseMinutes * MIN)
  const sunset = new Date(base + sunsetMinutes * MIN)
  const t = now.getTime()

  const beforeSunrise = t < sunrise.getTime() - 25 * MIN
  const inFirstLight = t >= sunrise.getTime() - 25 * MIN && t < sunrise.getTime() + 60 * MIN
  const beforeGolden = t >= sunrise.getTime() + 60 * MIN && t < sunset.getTime() - 75 * MIN
  const inGolden = t >= sunset.getTime() - 75 * MIN && t < sunset.getTime()
  const inBlue = t >= sunset.getTime() && t < sunset.getTime() + 40 * MIN

  let phase: SunPhase = 'Night'
  if (inFirstLight) phase = 'First light'
  else if (beforeGolden) phase = t < sunrise.getTime() + 150 * MIN ? 'Morning light' : 'Daylight'
  else if (inGolden) phase = 'Golden hour'
  else if (inBlue) phase = 'Blue hour'
  else if (!beforeSunrise && t < sunset.getTime()) phase = 'Daylight'

  const daylight = sunset.getTime() - sunrise.getTime()
  const progress = Math.min(1, Math.max(0, (t - sunrise.getTime()) / daylight))

  const isDay = t >= sunrise.getTime() && t < sunset.getTime()
  const remaining = isDay
    ? `${durationLabel(sunset.getTime() - t)} of light left`
    : `${durationLabel(sunrise.getTime() > t ? sunrise.getTime() - t : sunrise.getTime() + 86_400_000 - t)} until sunrise`

  return {
    timeLabel: formatClock(now, timeZone),
    phase,
    sunrise,
    sunset,
    sunriseLabel: formatClock(sunrise, timeZone),
    sunsetLabel: formatClock(sunset, timeZone),
    progress,
    dayLengthLabel: durationLabel(daylight),
    remainingLabel: remaining,
    isDay,
  }
}

export function pointOnArc(progress: number, width = 300, height = 92, inset = 8) {
  const t = Math.min(1, Math.max(0, progress))
  const x0 = inset
  const x2 = width - inset
  const x1 = width / 2
  const y0 = height - 8
  const y1 = 4
  const x = (1 - t) * (1 - t) * x0 + 2 * (1 - t) * t * x1 + t * t * x2
  const y = (1 - t) * (1 - t) * y0 + 2 * (1 - t) * t * y1 + t * t * y0
  return { x, y }
}
