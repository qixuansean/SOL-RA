# SOLÉRA — Technology Decisions

## Framework: React 19 + TypeScript + Vite

Both Vue 3 and React were evaluated against the actual brief.

| Criterion | React | Vue 3 |
| --- | --- | --- |
| Multi-page routing with animated transitions | React Router 7 is mature and lets a transition provider wrap navigation | Vue Router is equally capable |
| Fine-grained motion control | GSAP integrates directly with refs/effects; no framework-specific animation layer needed | Same, but community examples lean on VueUse/Motion |
| Component model for editorial composition | Hooks + context suit the small global state needed (saved trips, menu, transitions) | Composition API is equally suitable |
| Hiring/maintenance | Larger talent pool | Strong, smaller pool |
| Existing project | None — empty folder | None |

**Decision: React.** The deciding factor is not familiarity but the combination of React Router's nested layout model, a tiny context surface for saved trips/transitions, and direct GSAP lifecycle control. Vue would have produced an equally good result; it was not chosen because it offered no decisive advantage for this scope. TypeScript is used throughout, including data models.

## Styling: hand-authored CSS with design tokens

Tailwind was considered and rejected. The design depends on editorial compositions (asymmetric grid spans, masked type, image clip reveals, a custom solar arc) that would become long arbitrary-value class strings. A tokenised CSS system gives clearer intent and smaller output here. Tokens live in `src/styles/tokens.css`; there is no CSS-in-JS runtime.

## Motion: GSAP + CSS

- **GSAP 3 + ScrollTrigger** for scroll-linked parallax, pinned slow-travel section and staggered entrance timelines.
- **CSS transitions/keyframes** for hover, focus, press, menu, save and loading states where a timeline adds nothing.
- A central `useReducedMotion` check plus GSAP `matchMedia` disables travel for `prefers-reduced-motion`.
- No Lenis or scroll hijacking: native scrolling is faster, more accessible, and behaves correctly with trackpads and keyboards.

## State

- React Context for saved trips, menu state, toast and page transitions.
- `localStorage` key `solera.saved.v1` for persistence; gracefully degrades when storage is unavailable.
- Destination and journal search/filters are component state with live counts and designed empty states. They are intentionally not URL-synced; the site is editorial, and shareable filtered URLs were not part of the brief.
- Jazz player preference keys: `solera.jazz.track.v1` and `solera.jazz.volume.v1`.

## Sound

- A single `<audio>` element lives in the mounted header, so playback survives client-side route changes.
- Three Kevin MacLeod tracks are stored locally in `public/audio`, loudness-normalised to −18 LUFS and encoded at 112 kbps (~11 MB total). No streaming host, no tracking.
- `preload="none"` means no audio bytes are fetched until the visitor presses play. The player fades volume in/out with `requestAnimationFrame` to avoid clicks and abrupt stops.
- Autoplay is deliberately absent. Browsers block it, and a luxury editorial site should not intrude.
- Credit and licence links are shown in the panel and footer: Kevin MacLeod, CC BY 3.0.

## Imagery and fonts

- Photography: 77 WebP base images in `public/images` (254 files including responsive derivatives), downloaded locally and sized per use; no runtime dependency on a third-party image host. Source IDs record the original Unsplash selection. Several mismatched images were later replaced with Unsplash-origin CC0 files re-published on Wikimedia Commons, and the nine newest destinations use Commons photography directly; every file, photographer and licence is listed in `public/images/SOURCES.md`.
- Fonts: Cormorant Garamond and Manrope, self-hosted WOFF2 in `public/fonts`, preloaded. No Google Fonts request at runtime.
- All images have width/height attributes and explicit aspect ratios to prevent CLS. Hero is preloaded with `fetchpriority="high"`; everything else is lazy.

## Libraries installed

`react`, `react-dom`, `react-router-dom`, `gsap`; dev: `vite`, `@vitejs/plugin-react`, `typescript`, `@types/react`, `@types/react-dom`, `sharp` (image manifest regeneration via `npm run images`).

No UI kit, icon pack, carousel library or animation framework beyond GSAP. Small icons (arrow, sun, close, heart) are inline SVG.

## Verification

- Production build via `npm run build`, then `vite preview` on port 4174.
- All 29 routes returned 200 in preview, with no broken images or horizontal overflow at 1440×900.
- Browser checks: 1440×900 and 390×844 across every route; console errors; keyboard navigation; saved-trip persistence; search/filter empty states; lightbox keyboard loop; menu focus trap; newsletter validation; mobile menu; reduced motion; jazz playback, track switching, volume and cross-route persistence.
- Accessibility pass: landmarks, heading order, focus visibility, focus traps, alt text, `aria-live` for result counts and toasts, ≥4.5:1 muted-text contrast on light and sand fields, reduced-motion paths.
