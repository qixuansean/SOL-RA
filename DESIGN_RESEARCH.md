# SOLÉRA — Design Research

Research window: 30 October 2026. The notes below record what was actually observed, what was inaccessible, and how the observations were translated into an original visual language. Nothing is copied; the references are used only to understand rhythm, pacing and editorial behaviour.

## 1. Reference set

| Reference | Why it was studied | Access |
| --- | --- | --- |
| [Nomadic Tribe](https://nomadictribe.com/) — makemepulse, Awwwards Site of the Day, 2019 | Interactive storytelling, hold/drag gestures, scroll-as-journey, warmth of a hand-drawn world | Live site returned a tunnel error (ERR_TUNNEL_CONNECTION_FAILED). Studied through the Awwwards case page, its listed elements ("hold interaction", "drag interaction"), its published 3-colour palette (`#987654`, `#49c5b6`, `#ecd06f`) and its 8.3/10 SOTD score breakdown. |
| [Hedwig: Curated Travel](https://hedwigtravel.com/) — catarisso, Awwwards Honorable Mention, April 2026 | Current benchmark for bespoke-travel editorial: "blending editorial storytelling and a refined visual language" | Live site did not return content. Awwwards case page inspected (description, tags: Photography, Storytelling, Clean, Colorful, Graphic design; 15/27 votes). |
| [Awwwards travel collection](https://www.awwwards.com/websites/travel/) | Current standard for travel interaction and typography | Live index inspected, 40+ entries across 4 pages. Additional entries reviewed: Snami Travel, Niarra Travel, Voyagers Travel, Spain Collection, Travel Next Level, Lithuania Travel. |
| [Awwwards hotel/restaurant collection](https://www.awwwards.com/websites/hotel-restaurant/) | Hospitality-specific conventions and image treatment | Index inspected. |
| Aman, Six Senses, Black Tomato, Explora (market familiarity) | Luxury hospitality tone: restraint, place-first copy, one dominant image, quiet navigation | Used as a mental benchmark, not as a layout source. |

**Research limitation, stated plainly:** Nomadic Tribe and Hedwig could not be rendered in the available browser (network tunnel failure), so no claim is made about their exact layout, motion timings or type sizes. The conclusions below come from Awwwards' published metadata, the visible travel collection, and the broader conventions of the category. This is recorded rather than hidden.

## 2. What the award-level travel work has in common

1. **A place is the first screen, not a product.** The strongest entries let one photograph occupy most of the viewport and place a short line of type into its negative space. Navigation is secondary and visually quiet.
2. **Editorial pacing over card grids.** Work is arranged as a magazine spread: one dominant image, an asymmetric secondary image, a list of names with generous leading. Identical tiles and icon rows are almost absent.
3. **Type does the luxury work.** A high-contrast serif at very large scale against a small, calm sans-serif. Extreme scale contrast (roughly 4:1 to 8:1) rather than many intermediate sizes.
4. **Motion imitates light and water, not UI.** Slow reveals, long easing tails, gentle parallax, images that settle rather than bounce. Durations cluster around 0.8–1.6s with `cubic-bezier(.16,1,.3,1)`-style ease-outs. Almost no spring overshoot.
5. **The scroll is composed.** Sections change composition and sometimes field colour; they do not repeat a template. Pinned image/text passages create a "chapter" feeling.
6. **Navigation is an experience of its own.** Full-screen menus with oversized serif links, a single image, and a clear close action. On mobile the menu becomes the primary brand moment.
7. **Colour is place-derived.** Sand, salt, olive, ocean, sun-faded clay. Gradients are rare; flat fields and photography do the work.
8. **Details signal craft.** Image crops share ratios; captions are small but legible; hover states are restrained; loading states are branded rather than spinner-based.

## 3. Specific observations from the Awwwards travel index

- The index is dominated by full-bleed imagery and one- or two-word navigation.
- Awwwards' own metadata for Hedwig foregrounds *storytelling*, *photography* and *graphic design* — a signal that current travel winners are judged as editorial products, not booking engines.
- Nomadic Tribe's palette (wood brown, turquoise, sun yellow) confirms that warmth plus one cool accent is a durable travel palette; its interaction vocabulary (hold, drag) shows gesture can be narrative rather than decorative.
- The category's weakness, visible across lesser entries, is the "hero + three cards + testimonial" structure. SOLÉRA deliberately avoids it.

## 4. Translation into SOLÉRA's own language

### The idea

> On this page, **the sun's daily journey across sixteen places** becomes **the organising device for the whole site** — in the hero, in the navigation of time, and in a live panel that tells you where the light is right now.

This belongs to SOLÉRA (from *sol*, sun) and cannot be transplanted to another travel brand. It also gives the site one genuinely live element: a solar clock computed from each destination's latitude and longitude, not a decorative animation.

### Composition

- Hero: full-bleed photograph, wordmark top-left, two-line serif headline bottom-left, one action, live light panel bottom-right.
- Home rhythm: image-led hero → quiet manifesto → asymmetric destination collage → horizontal experience rail on deep ocean → pinned slow-travel passage → live sun section → journal spread → brand image → newsletter → oversized footer.
- No two adjacent sections share a layout. No icon cards. No numbered steps. No eyebrow labels.

### Type

- Display: **Cormorant Garamond** 300/400, optically large, tracking −0.02em to −0.035em, leading 0.92–1.0. It has the calligraphic contrast of a travel journal without the cliché of a fashion Didone.
- Text: **Manrope** 300–600 at 16–18px, leading 1.6, measure 58–68 characters. Quiet, contemporary, highly legible.
- Scale contrast: hero 7–8vw against 13–16px captions. Section headings 4–5vw. Only five functional sizes.

### Colour

| Role | Value | Use |
| --- | --- | --- |
| Ivory | `#F3EEE4` | page ground |
| Paper | `#FAF7F0` | raised editorial panels |
| Sand | `#DCCDB5` | quiet fields, chips, image beds |
| Ink | `#16211E` | text, dark fields |
| Ocean | `#1E3D3C` | full-bleed chapters, footer |
| Clay | `#B2705A` | sun mark, small accents, save state |
| Salt | `#5F6D65` | secondary text on light (4.7:1 on ivory, 5.1:1 on paper) |
| Mist | `#B9C6BE` | secondary text on dark |

Proportion: 70% ivory/paper, 20% photography, 8% ocean/ink, 2% clay. Clay is never a large field, avoiding the generic cream-and-terracotta look.

### Motion system

| Purpose | Behaviour | Duration / easing |
| --- | --- | --- |
| First entrance | Hero image clip-reveals from a sand bed while settling from 1.06 → 1; headline lines rise behind masks; nav and live panel fade in last | 1.4s / 1.1s / 0.8s, `cubic-bezier(.16,1,.3,1)` |
| Navigation | Hides on downward scroll after 120px, returns on upward scroll; field switches from transparent to ivory | 380ms, `cubic-bezier(.22,1,.36,1)` |
| Page transition | Ivory curtain with the sun mark rises over the old page, new route mounts, curtain lifts | 420ms in / 480ms out |
| Image reveal | Clip-path inset + scale settle, 60ms stagger inside a group | 1.1s, same ease |
| Image hover | Scale 1.035, 700ms; caption underline draws in; no tilt, no bounce | 700ms |
| Text reveal | Lines masked and raised 110%, paragraphs fade + 14px rise | 0.9s, 70ms stagger |
| Scroll scenes | Section headings and media enter once at 18% visibility; parallax capped at 8% of image height | 1.0s |
| Buttons | Fill wipes from left, label swaps arrow position by 4px, press scales to 0.985 | 420ms / 120ms |
| Menu | Ocean field clip-paths open from the top, links rise in sequence, one image fades last | 720ms + 60ms stagger |
| Save | Sun glyph fills, one soft ring expands once, count updates in header | 480ms |
| Gallery | Directional crossfade + 1.04 scale; lightbox opens from the clicked frame | 520ms |
| Solar arc | The sun marker travels along the real daylight arc, updated every 30s; the phase label crossfades | 600ms / continuous |
| Sound | Equalizer bars breathe only while audio plays; panel fades down from the header; volume and track fades avoid hard cuts | 1.05s bars / 550ms fades |
| Footer | Giant wordmark rises 40px and fades; columns stagger 80ms | 1.1s |
| Loading / empty | Brand sun breathes at 2.4s; empty state fades in with a warm line drawing of the sun over water | 900ms |

All motion is transform/opacity only. Every animation has a `prefers-reduced-motion` path that removes travel and keeps content visible.

### Interaction principles

- Hover is an invitation, never the only way to get information.
- One live thing: the solar panel (hero + home + destination pages). It uses real local time and real sunrise/sunset maths.
- Every control is a real button/link with visible focus. Saved trips persist in `localStorage`.
- Search and filters are real, with counts and designed empty states.
- Images carry descriptive alt text; decorative marks are hidden from assistive tech.
- Sound is opt-in. The header control opens a compact player; nothing streams or plays until the visitor presses play. Playback persists across route changes because the header stays mounted. Track index and volume persist in `localStorage`; whether audio is playing does not, respecting a fresh visit.

## 5. Responsive strategy

- **≥1200px:** 12-column editorial grid, 64px outer margins, hero type 8vw, asymmetric image spans.
- **768–1199px:** 8 columns, 40px margins, hero type 9vw, two-up destination collage, horizontal rails become scroll-snap.
- **≤767px:** single column with 20px margins, 100svh hero, navigation becomes wordmark + menu only, headline 44–52px in two lines, live panel becomes an inline strip under the hero, horizontal rails remain swipeable with visible affordance.
- Touch targets ≥44px; hover-only captions are always visible on coarse pointers.
- Images use `loading="lazy"` except the hero; fixed aspect ratios prevent layout shift.

## 6. Deliberate rejections

- No auto-playing sound, no custom cursor hijacking, no scroll-jacking, no WebGL that blocks reading. The jazz soundtrack is explicitly user-initiated.
- No gradients (except photographic scrims), no glass panels, no hairline grids, no index numbers, no marquee text.
- No invented reviews, awards or client logos. Editorial voice only.
- No placeholder stock imagery: every photograph is downloaded locally, matched to the place it describes, and credited in the footer.
