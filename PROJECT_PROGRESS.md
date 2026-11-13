# SOLÉRA — Project Progress

**Status:** Complete and verified in the browser. Production build and preview are working.
**Last updated:** 1 November 2026

## What was built

A React + TypeScript + Vite site for a fictional luxury travel studio, with nine route types, sixteen destinations, six journal stories, live solar calculations, a journey-planning page and an opt-in jazz player.

## Completed

### 1. Research and direction
- Studied Nomadic Tribe, Hedwig and the Awwwards travel/hospitality collections; recorded what could and could not be observed.
- Wrote `DESIGN_RESEARCH.md`: composition, type, colour, motion, responsive strategy and deliberate rejections.
- Wrote `TECH_DECISIONS.md`: React vs Vue, tokenised CSS vs Tailwind, GSAP vs other motion approaches, state and sound decisions.

### 2. Foundations
- React 19, TypeScript, Vite 8, React Router 7, GSAP 3 + ScrollTrigger.
- Hand-authored token system in `src/styles/tokens.css`; no UI kit or CSS framework.
- Self-hosted Cormorant Garamond and Manrope; preloaded, no runtime font requests.
- 41 local WebP photographs, explicit dimensions and aspect ratios; hero preload; everything else lazy.
- Responsive derivatives (640/960/1400, plus 1800 for hero-scale images) generated at quality 74; `SmartImage` builds `srcset` from `src/data/image-variants.ts`.

### 3. Pages and content
- Home, Destinations, Destination Detail, Journal, Article, Saved, Plan, About and 404.
- Sixteen destinations and six articles with place-specific copy, captions and alt text.
- Live solar panel using latitude, longitude and timezone, updated every 30 seconds.
- Editorial components: asymmetric collage, horizontal experience rail, pinned slow-travel passage, month chart, gallery, related content, newsletter, oversized footer.

### 4. Motion system
- 14 categories implemented: first entrance, navigation, page transitions, image reveals, image hover, text reveals, scroll scenes, parallax, buttons, menu, save feedback, gallery/lightbox, solar arc, sound equalizer, footer, loading and empty states.
- Durations and easing chosen for a slow, settled feel (`cubic-bezier(.16,1,.3,1)` and similar); no bounce or spring overshoot.
- Reduced-motion paths remove travel, parallax and looping animation while keeping content visible.

### 5. Real interactions
- Destinations search and region/style filters with counts and a reset empty state.
- Journal search and category filters.
- Saved trips with `localStorage`, header count, toast, saved page and clear-all confirmation.
- Gallery lightbox with arrow keys, Escape, focus trap and focus return.
- Full-screen menu with focus trap, Escape, focus return and scroll lock.
- Newsletter validation with error, pending and success states.
- Back to top, smooth with reduced-motion fallback.
- Jazz player: three local CC BY 3.0 tracks, play/pause, previous/next, volume, persisted track and volume, cross-route playback, no autoplay, `preload="none"`.

### 6. Fixes found through browser review
- Gallery images were hidden because a clip-path reveal never intersected; switched that reveal to a fade.
- Gallery right column left a large void on desktop; rebalanced the grid.
- Missing stored jazz volume was parsed as `0`, muting playback; default is now `0.42`.
- Opening Jazz while the header was auto-hidden clipped the panel; the header now stays visible while the panel is open or focused.
- Replaced mismatched photography for Amalfi, the Alps, Bali, Kyoto, Santorini, the Great Ocean Road, one journal cover and the forest image.
- Home hero mobile text sat on bright water; a mobile scrim and text shadow restore legibility.
- Destinations search was clipped on mobile; it now takes a full row with the count below.
- 404 heading and paragraph touched; spacing fixed.
- Muted text failed AA on ivory and sand; salt was darkened to `#5F6D65` with a deeper on-sand variant.
- Destination page meta claimed four regions/five styles; corrected to five regions/four styles.
- “The Maldives · Maldives” repeated the country; the solar panels now show the region when the name contains the country.
- Jazz volume slider used the browser's lavender track; replaced with a token-coloured track and thumb.
- Back-to-top was a heavy square; now a compact circular control.
- Hero `h1` exposed “longlight ofsummer” to assistive tech; added an accessible label and spacing.
- Removed unused duplicate `texture-sand.webp`.

### 7. Final polish pass
- Added responsive `srcset` for all 41 photographs; mobile homepage transfer fell from 2.4 MB to 459 kB. The 2400w hero gained an 1800w step so desktops no longer pay for the largest file.
- Scoped the hero preload to the homepage with an inline script and `imagesrcset`/`imagesizes`; the menu photograph now mounts on first open instead of on first paint.
- Redesigned the filtered-list empty state as a compact banner on tablet and desktop, so the message and reset action sit directly under the filter bar; the journal hides its redundant “Stories that match” heading when there are no matches.
- Strengthened the article hero’s top scrim, then checked it against the brightest forest crop; the overlay header stays legible.
- Reworked the menu at tablet/phone heights: the image becomes a full-width band at 621–860px and the menu content centres vertically on tall screens.
- Added horizontal swipe navigation to the mobile lightbox, with a deliberate-horizontal threshold so vertical scrolls do not change image.
- Reduced-motion visitors now skip the intro loader entirely rather than seeing a shortened flash.
- Fixed remaining contrast failures found by axe: fact labels and experience day labels on sand, and the clay saved badge/button now use `--clay-deep`.
- Reworded the footer music credit and the destination gallery copy; removed the duplicated “preferred window” sentence from the month note.

### 8. Destination expansion and planning page (November 2026)
- Added nine destinations in the studio's existing register: Hawaii, the Seychelles, Kerala, the Loire Valley, the Norwegian coast, the English Lake District, New Zealand's North Island, Tuscany and Istanbul. Each has coordinates, a timezone, twelve month scores, three experiences, three highlights and a three-image gallery.
- Sourced 36 photographs from Wikimedia Commons (CC0 / CC BY / CC BY-SA), cropped to 4:3, encoded as WebP and given 640/960/1400 derivatives; `public/images/SOURCES.md` records every file, photographer and licence.
- Regenerated `src/data/image-variants.ts` from disk (77 entries) rather than editing it by hand; `sharp` is a dev dependency used only for image preparation.
- Added `/plan`: a `useState` form for month, days, travellers, style and saved places, an in-page summary built strictly from `destinations.ts` fields and `getSunData`, and one `mailto:` button at the end.
- Repointed every “Plan a journey” call to action (home, destinations, detail pages, saved, about, footer) from `mailto:` to `/plan`; email links remain in the menu and footer.
- Updated the “seven places” copy to “sixteen” on Home, Destinations and in the menu.
- New gallery filenames intentionally resemble the existing `alps-1.webp` pattern; the derivative scan excludes only the `-640/-960/-1400/-1800` suffixes.

### 9. Photograph pass (November 2026)
- Audited every image reference against `public/images`: 77 base images and 254 files in total; no missing, orphaned or duplicated files.
- Gave each journal article a photograph inside the body; five of the six stories previously carried only a cover.
- Added cover thumbnails to the `/plan` saved-place checklist and to every entry in the journey summary, so the summary is no longer text-only.
- Added an opening photograph to the `/saved` empty state.
- The gallery credit now follows the destination — “Photography via Wikimedia Commons” for the nine new places, “Photography via Unsplash” for the originals — instead of always saying Unsplash.
- Added `@media print` overrides for the reveal system so sections that were never scrolled into view do not print blank.
- Replaced the Kerala cover — a flat daytime houseboat snapshot — with Liji Jinaraj's golden backwater sunset (CC BY-SA 2.0), cropped to 1600×1200 with fresh derivatives.

## Verification record

### TypeScript and build
- `npx tsc --noEmit`: pass.
- `npm run build`: pass.
  - `dist/assets/style-*.css`: 73.1 kB (14.3 kB gzip)
  - `dist/assets/index-*.js`: 519.5 kB (169.0 kB gzip)
- The only build output beyond the bundle is the standard chunk-size warning; no type errors.
- `npm run preview`: served on port 4174.

### Production route smoke test
- 29 routes tested: home, destinations index, 16 destination details, journal index, 6 article details, saved, plan, about, 404.
- All returned HTTP 200 with correct document titles and a single `h1`.
- No broken images, no horizontal document overflow at 1440×900.
- Audio, fonts and images served with correct MIME types and range support.

### Accessibility audit
- axe-core 4.10.2, WCAG 2.0/2.1 A and AA, on the original eight route types at 1440×900 and 390×844: **0 violations**.
- Menu, jazz panel and gallery lightbox audited open at both widths: 0 violations.
- `/plan` reviewed manually: labelled controls, focus moves to the summary on submit, the summary is a labelled `aria-live` region, and the single `mailto:` action is a normal link.
- Every internal link on all 29 routes resolves.

### Responsive audit
- Desktop 1440×900 and mobile 390×844 across every page.
- 24-combination production audit (eight route types × 390/768/1440): no broken images, hidden reveals, overflow or console messages.
- Narrow and landscape checks at 320×568, 360×740 and 844×390: no page-level overflow; only the intentionally swipeable experience rail extends past the viewport.
- Mobile menu links all fit; menu scrolls if needed and centres vertically on tall screens.
- Jazz panel measured 358px wide inside a 390px viewport, fully on screen.
- Tablet menu image spans the available width at 768px; caption stays readable.
- `/plan` collapses to a single column below 1100px and to one field per row below 760px.

### Interaction tests
| Flow | Result |
| --- | --- |
| Search “kyoto” | 1 result, “One place in this view” |
| Clear search | 7 results |
| Region “Asia” | Bali + Kyoto |
| Add style “Alpine” | 0 results, empty state shown |
| Clear all filters | 7 results |
| Save first card | `aria-pressed=true`, header count 1, storage `["maldives"]` |
| Reload | Saved state and count persist |
| Saved page | 1 card, “One place saved” |
| Remove from saved | Empty state, storage `[]` |
| Clear-all confirmation | Confirmation appears, clears to empty state |
| Gallery | Opens at 1/3, ArrowRight → 2/3, Tab stays inside, Escape closes, focus returns |
| Gallery swipe | Left swipe → 2/3, right swipe → 1/3, vertical swipe leaves the image unchanged |
| Menu | Focus moves to close, Tab stays inside, Escape closes, focus returns to toggle |
| Newsletter invalid | Error state and message |
| Newsletter valid | Success state and local storage |
| Back to top | Visible after scroll, returns to 0 |
| Jazz | Plays at 0.42, next track loads, panel closes, audio continues on `/saved` |
| Empty results | Compact banner sits under the filter bar; “Clear all filters” restores all results |
| Plan, saved places | Three saved places appear as checked boxes; summary lists exactly those three |
| Plan, month/style | June + Alpine → “in an alpine register”; sun times differ per destination |
| Plan, `mailto:` | Body repeats the month, days, travellers, style, scores and sun times |
| Reduced motion | Loader skipped, reveals visible immediately, navigation has no curtain delay |

### Console
- No application console errors or page errors in the audited flows.
- The only earlier noise was Chromium aborting audio metadata requests on page close; switching to `preload="none"` removed unnecessary loading entirely.

## Documentation
- `DESIGN_RESEARCH.md` — references, observations, translation to the site, motion table, responsive and rejection lists.
- `TECH_DECISIONS.md` — framework, styling, motion, state, sound, imagery, verification.
- `README.md` — setup, routes, features, storage keys, accessibility, verification, limitations.
- `public/images/SOURCES.md` — photo sources for the initial set and the 2026 Wikimedia Commons expansion, plus music/font licences.
- `public/images/manifest.json` — original Unsplash IDs for the initial image set.
- `scripts/prepare-images.mjs` — rebuilds `src/data/image-variants.ts` from the files on disk.

## Remaining limitations
- No backend: newsletter, contact and saved trips are local only.
- Content and photography are editorial samples, not real availability.
- Audio is local and uncompressed beyond 112 kbps; a production deployment would use a CDN.
- No committed automated test suite; verification was performed with scripted headless Edge/Puppeteer audits.

## Handoff cleanup
- Done: temporary audit and image scripts removed; the image manifest step now lives in `scripts/prepare-images.mjs`.
- Done: no unused research server or backup images remain in the project root.
- Done: `dist` rebuilt from the final source; only source, public assets, docs, scripts and `dist` remain.
