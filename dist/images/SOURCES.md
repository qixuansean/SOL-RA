# Photography sources

All photographs are stored locally in this folder and served as WebP. The initial set was selected from Unsplash; the original Unsplash photo IDs are recorded in `manifest.json`.

Each base file also has responsive derivatives named `*-640.webp`, `*-960.webp`, `*-1400.webp` and, for the two hero-scale images, `*-1800.webp`. They are resized copies at quality 74, generated locally with `sharp`; the sizes are recorded in `src/data/image-variants.ts` so the site can build a `srcset`. Treat each derivative as the same source and licence as its base file. After adding or replacing images, run `npm run images` to rebuild that manifest from disk.

Some images that did not match their captions were replaced with Unsplash-origin photographs re-published on Wikimedia Commons. Those files are CC0 (public domain dedication). The table below records the Commons file titles used for each replacement set. Files were cropped and resized; no other alteration was made.

| Local files | Commons source titles (all CC0, Unsplash origin) |
| --- | --- |
| `dest-amalfi.webp`, `amalfi-1.webp`, `amalfi-3.webp` | Positano's sunset (Unsplash); Positano, Italy (Unsplash yfq0bOJmeZI); Amalfi Coast, Amalfi, Italy (Unsplash QVU 5fjXWe0) |
| `amalfi-2.webp` | Swimming in blue sea of Amalfi coast (Unsplash) |
| `dest-alps.webp`, `alps-1.webp` | Zermatt (Unsplash); Matterhorn, Zermatt, Switzerland (Unsplash) |
| `alps-2.webp`, `alps-3.webp` | Houses near a precipice (Unsplash); Swiss Alps, Switzerland (Unsplash) |
| `dest-bali.webp` | Mount Agung Sunrise (Unsplash) |
| `bali-1.webp`, `bali-2.webp`, `bali-3.webp` | Bali, Indonesien (Unsplash); Ubud, Indonesia (Unsplash vBm6PhJVLz4); Bali, Indonesia (Unsplash 4DNaLXQlDg) |
| `kyoto-1.webp` | 20181110 Fushimi Inari Torii 12 |
| `kyoto-2.webp` | Arashiyama Bamboo Grove (Unsplash) |
| `kyoto-3.webp` | Kyoto, Japan (Unsplash MsMISAIe8Qw) |
| `journal-kyoto.webp` | Pink-blossom-kyoto (Unsplash) |
| `experience-forest.webp` | Waterfall in Kyoto (Unsplash) |
| `dest-santorini.webp`, `santorini-1.webp` | Oia, Greece (Unsplash) |
| `santorini-2.webp`, `santorini-3.webp` | Santorini, Greece (Unsplash UFd3oTtLEnM); Santorini, Greece (Unsplash OSzlbMcf9Hg) |
| `dest-oceania.webp` | A world lost in time (Unsplash) |
| `oceania-1.webp`, `oceania-2.webp`, `oceania-3.webp` | 12 Apostles Carpark, Princetown, Australia (Unsplash); Loch Ard Gorge, Aust; Twelve Apostles, Princetown (Unsplash fvNaioUp-7c) |
| `journal-road.webp` | Great Ocean Road, Peterborough, Australia (Unsplash) |

## New destinations (2026)

The nine places added in 2026 use Wikimedia Commons photographs, cropped to 4:3 and re-encoded as WebP with responsive derivatives. Each entry below records the Commons file title, the photographer and the licence. No other alteration was made.

| Local files | Commons file | Photographer | Licence |
| --- | --- | --- | --- |
| `dest-hawaii.webp` | King Kong Beach Na Pali Coast Kauai Hawaii | dronepicr | CC BY 2.0 |
| `hawaii-1.webp` | Na Pali Coast, Kauai, Hawaii | Jeff Kubina | CC BY-SA 2.0 |
| `hawaii-2.webp` | Waimea Canyon, Kauaʻi | Frank Schulenburg | CC BY-SA 4.0 |
| `hawaii-3.webp` | Lanikai Strand auf Oahu | Hakilon | CC BY 3.0 |
| `dest-seychelles.webp` | 198 Granite rock in La Digue Island at sunset | Giles Laurent | CC BY-SA 4.0 |
| `seychelles-1.webp` | Anse Source d'Argent on La Digue 2015 | Bjørn Christian Tørrissen | CC BY-SA 4.0 |
| `seychelles-2.webp` | Vallée De Mai – National Park – Praslin – Seychelles – 02 | NorbertNagel | CC BY-SA 4.0 |
| `seychelles-3.webp` | Beau Vallon, Mahé, Seychelles, 2025-09-07, DD 06 | Diego Delso | CC BY-SA 4.0 |
| `dest-kerala.webp` | Backwater sunset (4233005418) | Liji Jinaraj | CC BY-SA 2.0 |
| `kerala-1.webp` | Tea plantations in Munnar | eatoutzone.com | CC BY 3.0 |
| `kerala-2.webp` | Varkala Beach 2022 December | Akhilan | CC BY-SA 4.0 |
| `kerala-3.webp` | Kathakali at alvas2 | Ashwin Geet Dsa | CC BY-SA 4.0 |
| `dest-loire.webp` | Chambord Castle Northwest facade | Benh LIEU SONG | CC BY-SA 3.0 |
| `loire-1.webp` | Chenonceau Garden View | Eric Kilby | CC BY-SA 4.0 |
| `loire-2.webp` | Château de Villandry Gardens | Ввласенко | CC BY-SA 3.0 |
| `loire-3.webp` | 00 1205 Amboise Loire – Schloss Amboise | W. Bulach | CC BY-SA 4.0 |
| `dest-norway.webp` | Reine i Lofoten LC0148 | Jörg Hempel | CC BY-SA 2.0 de |
| `norway-1.webp` | Geirangerfjord from Ørnesvingen, 2013 June | Ximonic (Simo Räsänen) | CC BY-SA 3.0 |
| `norway-2.webp` | Henningsvær, Lofoten, Norway | Christoph Strässler | CC BY-SA 2.0 |
| `norway-3.webp` | Houses of Reine by Gravdalsbukta, Moskenes, Nordland, Norway, 2022 June | Ximonic (Simo Räsänen) | CC BY-SA 4.0 |
| `dest-lakes.webp` | Buttermere, Buttermere and Grasmoor | Peer Lawther | CC BY 2.0 |
| `lakes-1.webp` | Ullswater from Hallin Fell (geograph 3972199) | Clive Giddis | CC BY-SA 2.0 |
| `lakes-2.webp` | Derwentwater Friars' Crag Lake District 2022 01 | Julian Herzog | CC BY 4.0 |
| `lakes-3.webp` | Wasdale from Wastwater 1 | GkgAlf | CC BY-SA 3.0 |
| `dest-new-zealand.webp` | Tongariro Alpine Crossing | Jeffrey Pang | CC BY 2.0 |
| `new-zealand-1.webp` | 00 1840 Bay of Islands – in New Zealand | W. Bulach | CC BY-SA 4.0 |
| `new-zealand-2.webp` | ChampagnePool-Wai-O-Tapu rotated MC | Christian Mehlführer | CC BY 2.5 |
| `new-zealand-3.webp` | Cathedral Cove 03 | Krzysztof Golik | CC BY-SA 4.0 |
| `dest-tuscany.webp` | Val D Orcia Sunrise (117255847) | Enrico Ghiberto | CC BY 3.0 |
| `tuscany-1.webp` | PiazzadelCampoSiena | Massimo Catarinella | CC BY-SA 3.0 |
| `tuscany-2.webp` | Florence Duomo from Michelangelo hill | Petar Milošević | CC BY-SA 4.0 |
| `tuscany-3.webp` | Val D Orcia In Autumn (179351679) | Fabrizio Lunardi | CC0 |
| `dest-istanbul.webp` | Hagia Sophia Mars 2013 | Arild Vågen | CC BY-SA 3.0 |
| `istanbul-1.webp` | Sultanahmet ferry on the Bosphorus in Istanbul, Turkey 001 | Moonik | CC BY-SA 3.0 |
| `istanbul-2.webp` | Grand Bazaar, Istanbul, Turkey (Ank Kumar) 05 | Ank Kumar | CC BY-SA 4.0 |
| `istanbul-3.webp` | Istanbul Galata Tower IMG 7475 1800 | Alexxx1979 | CC BY-SA 3.0 |

Each Commons file page can be reached from `https://commons.wikimedia.org/wiki/File:<file title>`; licence links are the standard Creative Commons deeds.

## Music

`public/audio/airport-lounge.mp3`, `bossa-antigua.mp3`, `cool-vibes.mp3`

- Composer: Kevin MacLeod (incompetech.com)
- Licence: Creative Commons Attribution 3.0 — https://creativecommons.org/licenses/by/3.0/
- Files were loudness-normalised to −18 LUFS, encoded at 112 kbps, and are served locally.

## Fonts

Cormorant Garamond and Manrope, self-hosted WOFF2 subsets. Both are licensed under the SIL Open Font License 1.1.
