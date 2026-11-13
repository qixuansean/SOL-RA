# SOLÉRA

An editorial travel site for a small, imaginary studio in Amsterdam. SOLÉRA plans private journeys around light, season and unhurried time, across sixteen places — from the Maldives, the Amalfi Coast and the Swiss Alps to Hawaii, the Seychelles, the Norwegian coast and Istanbul.

The site is built as a real front end, not a static mockup: search and filters work, trips can be saved and survive a reload, the planning page turns those saved places into an outline, the gallery has a keyboard-accessible lightbox, the newsletter validates input, the solar panels compute live local time and sunrise/sunset from each destination's coordinates, and a jazz soundtrack is available on request.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production bundle
npm run preview    # http://localhost:4174
npm run images     # rebuild src/data/image-variants.ts from public/images
```

Requires Node 20+.

## Pages

| Route | What is there |
| --- | --- |
| `/` | Cinematic hero, live light panel, manifesto, asymmetric destination collage, experience rail, pinned slow-travel essay, live sun section, journal spread, newsletter |
| `/destinations` | All sixteen places, live search, region and style filters, empty state |
| `/destinations/:slug` | Place story, live solar panel, facts, gallery with lightbox, experiences, month-by-month season chart, related places |
| `/journal` | Six stories, search and category filters |
| `/journal/:slug` | Long-form article with figures and related reading |
| `/saved` | Trips saved on this device, with clear-all confirmation |
| `/plan` | Planning form (month, days, travellers, style, saved places) that builds an in-page outline from the archive's own data, with a single `mailto:` confirmation |
| `/about` | Studio philosophy, values, images, contact |
| `*` | Designed 404 with recovery links |

## Design direction

- **Idea:** the sun's daily journey is the organising device. Every destination has a live local clock and a solar arc computed from its latitude, longitude and timezone.
- **Palette:** ivory `#F3EEE4`, paper `#FAF7F0`, sand `#DCCDB5`, ink `#16211E`, ocean `#1E3D3C`, clay `#B2705A`, salt `#5F6D65`.
- **Type:** Cormorant Garamond for display, Manrope for text; both self-hosted.
- **Rules:** no gradients except photographic scrims, no glass, no UI kit, no decorative eyebrow labels, no index numbers, no slider libraries.
- The research record, reference notes and motion rationale are in [`DESIGN_RESEARCH.md`](DESIGN_RESEARCH.md). Stack reasoning, including the Vue vs React comparison, is in [`TECH_DECISIONS.md`](TECH_DECISIONS.md).

## Interactions

- **Search and filters** on Destinations and the Journal, with live result counts and a designed empty state that resets in one action.
- **Saved trips** stored in `localStorage` under `solera.saved.v1`. The header count updates immediately, persists across reloads and appears on `/saved`.
- **Journey outline** on `/plan`: the form is plain `useState`, and the summary is assembled only from `destinations.ts` fields and `getSunData` — month score, best season, temperature, flight, usual stay, one highlight, and the sunrise/sunset and day length for the destination's own coordinates and timezone. Nothing is invented, and no new library is involved.
- **Gallery lightbox** opens from any frame, supports arrow keys, Escape, focus trapping, focus return and a horizontal swipe on touch screens. Body scroll is locked while open.
- **Full-screen menu** with a focus trap, Escape to close, focus return and scroll lock.
- **Newsletter** validates the address, shows an inline error, then a pending and success state. It stores the address locally; there is no backend.
- **Back to top** appears after 900px and scrolls smoothly; respects reduced motion.
- **Jazz player** in the header: play/pause, previous/next, volume, now-playing, error state and licence credit. Playback continues across route changes. Nothing autoplays.

## Images and performance

Every photograph is local WebP. Each base file has viewport-sized derivatives (`-640`, `-960`, `-1400` and, for hero-scale images, `-1800`) generated at quality 74; `src/data/image-variants.ts` records the intrinsic sizes and `SmartImage` builds the `srcset`. That manifest is generated, not hand-edited: run `npm run images` after adding images. The browser therefore downloads a 49 kB hero on a phone and a 312 kB hero on a wide desktop, rather than the 1.1 MB original.

The homepage hero preload is injected by a tiny inline script only on `/`; other routes never pay for it. The menu photograph is mounted on first open rather than fetched on first paint. Measured on the production build with a cold cache, the homepage now transfers:

| Viewport | Homepage transfer | Hero file served |
| --- | --- | --- |
| 390 × 844 | 459 kB | 49 kB (640w) |
| 1440 × 900 | 437 kB | 312 kB (1800w) |

On a phone this cut the initial transfer from 2.4 MB to 0.46 MB. Both first-contentful paints land around 0.3 s locally, with no layout shift from images.

## Sound

Three tracks by **Kevin MacLeod** (incompetech.com), licensed **CC BY 3.0**:

- Airport Lounge
- Bossa Antigua
- Cool Vibes

They live in `public/audio`, normalised to −18 LUFS and encoded at 112 kbps. The player uses `preload="none"`, so no audio is fetched until the visitor presses play. Track index and volume are remembered in `localStorage`; whether audio was playing is deliberately not restored on a fresh visit. Credit and licence links appear in the player and footer.

## Data and storage

This is a front-end-only demo. There is no server, database or email service.

- Destinations, journal articles and soundtrack metadata live in `src/data`.
- Saved trips: `solera.saved.v1`
- Newsletter acknowledgement: `solera.newsletter.v1`
- Intro seen flag: `solera.intro.seen`
- Jazz track: `solera.jazz.track.v1`
- Jazz volume: `solera.jazz.volume.v1`

All content is editorial sample writing, not real availability or pricing.

## Accessibility

- Semantic landmarks, a single `h1` per page and logical heading order.
- Visible focus states on every control; the menu and lightbox trap focus and return it on close.
- Muted text meets WCAG AA on both ivory and sand fields. `prefers-reduced-motion` removes the intro loader, page curtain, travel, parallax and looping motion while keeping all content visible.
- Automated axe-core checks report **0 violations** of WCAG 2.0/2.1 A and AA across the original routes at 1440 and 390, and with the menu, jazz panel and lightbox open. The planning page was reviewed by hand: every control is labelled, focus moves to the summary after submit, and the summary is a labelled live region.
- Descriptive alt text on photographs; decorative marks are `aria-hidden`.
- Live regions announce filter counts, the toast, the newsletter status and the journey outline.

## Verification

- `npx tsc --noEmit` and `npm run build` pass.
- All 29 routes were loaded from the production preview (port 4174): HTTP 200, correct titles, no broken images, no horizontal overflow at 1440×900. That includes the sixteen destination pages and `/plan`.
- A 24-combination production audit (eight route types at 390, 768 and 1440) found no broken images, hidden reveals, overflow or console messages.
- Narrow and landscape checks (320×568, 360×740, 844×390) found no page-level overflow; the only off-screen items are the intentionally swipeable experience rail cards.
- Interaction suite passed: search, filters, empty reset, save/un-save, reload persistence, saved page, clear-all confirmation, lightbox arrows/Escape/focus loop/swipe, menu focus trap/Escape/focus return, newsletter invalid/valid, back-to-top, jazz play/next/volume/cross-route persistence.
- Planning flow passed: saved places appear as checkboxes, the summary matches the chosen month, days, travellers and style, sun times are computed per destination, and the `mailto:` body carries the same outline.
- Reduced-motion pass: loader skipped, reveals visible immediately, page transitions navigate without the curtain, and body scroll lock is cleared.
- Link audit: every internal link on all 29 routes resolves to a live page.
- No console errors in the audited flows.

## Structure

```
src/
  components/     header, menu, hero panels, gallery, player, shared UI
  data/           destinations, journal, soundtrack, site copy, image manifest
  lib/            reveal, parallax, solar maths, document title
  pages/          the nine route types
  styles/         tokens, base, components, pages
scripts/
  prepare-images.mjs  rebuilds the image manifest from public/images
public/
  audio/          three local jazz tracks
  fonts/          self-hosted WOFF2
  images/         local WebP photography + manifest and sources
```

## Known limitations

- Newsletter and contact actions are local/demo only; `mailto:` opens the visitor's mail client. The `/plan` summary is generated in the browser and nothing is sent until the visitor chooses to send it.
- Photography is illustrative editorial stock, not commissioned work for these properties. `public/images` holds about 35 MB across originals and responsive derivatives; a visitor only downloads the sizes their viewport needs.
- The 11 MB jazz folder is part of the demo build; a production deployment would likely move audio to a CDN and transcode to a lower bitrate.
- No automated unit or end-to-end tests are committed; the verification above was run with scripted headless-browser audits during development.
