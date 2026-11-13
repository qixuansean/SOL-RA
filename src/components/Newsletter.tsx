import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowRight, CheckIcon, SunMark } from './Icons'

type Status = 'idle' | 'pending' | 'error' | 'success'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')
  const [subscribedEmail, setSubscribedEmail] = useState('')
  const timer = useRef<number | undefined>(undefined)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const value = email.trim()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
      setStatus('error')
      setMessage('Please enter a valid email address, such as name@example.com.')
      return
    }
    setStatus('pending')
    setMessage('')
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => {
      try {
        window.localStorage.setItem('solera.newsletter.v1', value)
      } catch {
        // Subscription is still acknowledged in-session.
      }
      setSubscribedEmail(value)
      setStatus('success')
      setEmail('')
    }, 750)
  }

  return (
    <div className="newsletter__form">
      {status === 'success' ? (
        <div className="newsletter__done" role="status">
          <CheckIcon width={20} height={20} />
          <div>
            <strong>You are on the list.</strong>
            <p style={{ fontSize: '0.8125rem' }}>
              A letter will arrive at {subscribedEmail} at the start of each month. No noise, no
              more than one.
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate>
          <label htmlFor="newsletter-email" className="visually-hidden">
            Email address
          </label>
          <div className="field">
            <input
              id="newsletter-email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Your email address"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
                if (status === 'error') {
                  setStatus('idle')
                  setMessage('')
                }
              }}
              aria-invalid={status === 'error'}
              aria-describedby="newsletter-note newsletter-status"
            />
            <button
              type="submit"
              className="field__submit"
              disabled={status === 'pending'}
              aria-label="Subscribe to the SOLÉRA letter"
            >
              {status === 'pending' ? 'Joining…' : 'Subscribe'}
              <ArrowRight width={16} height={16} />
            </button>
          </div>
          <p
            id="newsletter-status"
            className="newsletter__status"
            data-state={status}
            aria-live="polite"
          >
            {message}
          </p>
        </form>
      )}
      <p id="newsletter-note" className="newsletter__fine">
        <SunMark size={13} style={{ display: 'inline-block', verticalAlign: '-2px', marginRight: 6 }} />
        One letter a month: new places, seasonal notes and the occasional room we could not
        resist. Unsubscribe at any time.
      </p>
    </div>
  )
}
