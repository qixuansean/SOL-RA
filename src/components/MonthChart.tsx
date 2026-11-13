import { useState } from 'react'
import type { CSSProperties } from 'react'

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const monthNamesLong = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const notes: Record<number, string> = {
  4: 'Peak conditions. Book early — the best rooms go a season ahead.',
  3: 'A good month, with slightly more weather or more people.',
  2: 'Quieter and cheaper, but the season can be changeable.',
  1: 'We would usually steer you towards another month.',
}

type Props = {
  months: number[]
  destinationName: string
}

export function MonthChart({ months, destinationName }: Props) {
  const suggested = months.reduce((best, value, index) => (value > months[best] ? index : best), 0)
  const [selected, setSelected] = useState(suggested)
  const value = months[selected]

  return (
    <div>
      <div className="months" role="group" aria-label={`Month by month conditions in ${destinationName}`}>
        {months.map((monthValue, index) => (
          <button
            key={monthNames[index]}
            type="button"
            className={`month ${monthValue === 4 ? 'is-best' : ''}`}
            aria-pressed={selected === index}
            aria-label={`${monthNamesLong[index]}, ${notes[monthValue]}`}
            onClick={() => setSelected(index)}
          >
            <span className="month__bar">
              <span
                className="month__fill"
                style={{ '--v': monthValue } as CSSProperties}
                aria-hidden="true"
              />
            </span>
            <span className="month__label">{monthNames[index]}</span>
          </button>
        ))}
      </div>
      <p className="month-note" aria-live="polite">
        <strong>{monthNamesLong[selected]}</strong> — {notes[value]}
      </p>
    </div>
  )
}
