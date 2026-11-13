import { Newsletter } from './Newsletter'
import { Reveal } from './Reveal'

export function NewsletterSection() {
  return (
    <section className="newsletter" aria-labelledby="newsletter-heading">
      <div className="container">
        <Reveal className="newsletter__grid">
          <div>
            <h2 id="newsletter-heading" className="h2">
              A letter at the start of each month.
            </h2>
            <p>
              New places, seasonal notes and the occasional room we could not resist. Written
              slowly, sent rarely.
            </p>
          </div>
          <Newsletter />
        </Reveal>
      </div>
    </section>
  )
}
