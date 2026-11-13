export type Experience = {
  slug: string
  title: string
  place: string
  destinationSlug: string
  duration: string
  price: string
  description: string
  image: string
  imageAlt: string
}

export const experiences: Experience[] = [
  {
    slug: 'sea-before-the-world-wakes',
    title: 'The sea before the world wakes',
    place: 'Baa Atoll, Maldives',
    destinationSlug: 'maldives',
    duration: 'Half day',
    price: 'From $480',
    description:
      'A dhoni, a marine biologist and a reef that belongs to you until breakfast. We leave before the light has decided what colour it wants to be.',
    image: '/images/maldives-2.webp',
    imageAlt: 'Wooden loungers on a deck above a calm lagoon at sunrise',
  },
  {
    slug: 'a-table-above-the-sea',
    title: 'A table above the sea',
    place: 'Amalfi Coast, Italy',
    destinationSlug: 'amalfi-coast',
    duration: 'Afternoon',
    price: 'From €320',
    description:
      'Lunch in a lemon grove, six courses long, with the Tyrrhenian doing its best impression of a painting below. The table is yours for the whole afternoon.',
    image: '/images/amalfi-1.webp',
    imageAlt: 'Pastel houses climbing the hillside above the sea in Positano',
  },
  {
    slug: 'a-day-with-nothing-in-it',
    title: 'A day with nothing in it',
    place: 'Ubud, Bali',
    destinationSlug: 'bali',
    duration: 'Full day',
    price: 'From $260',
    description:
      'A villa, a pool, a therapist who arrives at eleven, and a lunch that appears when you are hungry. The most structured thing about the day is the sunset.',
    image: '/images/experience-spa.webp',
    imageAlt: 'Hands performing a slow massage with warm oil',
  },
  {
    slug: 'the-long-way-round-the-lake',
    title: 'The long way round the lake',
    place: 'Engadin, Switzerland',
    destinationSlug: 'swiss-alps',
    duration: 'Full day',
    price: 'From CHF 540',
    description:
      'A wooden boat, a picnic from the village bakery and a skipper who knows where the wind will be at three. No itinerary, just a lake and a day.',
    image: '/images/experience-sail.webp',
    imageAlt: 'Wooden boats on a clear alpine lake beneath high mountains',
  },
  {
    slug: 'the-coast-by-boat',
    title: 'The coast, by boat',
    place: 'Santorini, Greece',
    destinationSlug: 'santorini',
    duration: '5 hours',
    price: 'From €690',
    description:
      'A traditional kaiki, a quiet cove, a swim in water the colour of glass. We time the return for the hour when the caldera turns gold.',
    image: '/images/santorini-3.webp',
    imageAlt: 'The white town of Oia above boats on the caldera',
  },
]
