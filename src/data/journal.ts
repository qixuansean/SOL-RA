export type ArticleBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'quote'; text: string; attribution?: string }

export type Article = {
  slug: string
  title: string
  dek: string
  category: 'Places' | 'Slow Travel' | 'Design' | 'Nature' | 'Notes' | 'Light'
  date: string
  readTime: string
  author: string
  cover: string
  coverAlt: string
  featured?: boolean
  body: ArticleBlock[]
  secondImage?: { src: string; alt: string; caption: string }
}

export const articles: Article[] = [
  {
    slug: 'the-quiet-art-of-doing-nothing',
    title: 'The quiet art of doing nothing',
    dek: 'Somewhere between the third swim and the second espresso, the day stops being something to fill.',
    category: 'Slow Travel',
    date: '12 October 2026',
    readTime: '6 min read',
    author: 'Mara Lindqvist',
    cover: '/images/journal-slow.webp',
    coverAlt: 'A narrow path disappearing into a deep green forest',
    featured: true,
    body: [
      {
        type: 'paragraph',
        text: 'The first day of a holiday is usually spent recovering from the journey. The second is spent recovering from the first. By the third, something loosens. You wake without looking at the time. You notice that the light on the wall has moved, and that you have been watching it for a while.',
      },
      {
        type: 'paragraph',
        text: 'This is not laziness. It is a different kind of attention, one that most of us have unlearned. In ordinary life, attention is a currency: we spend it on tasks, on screens, on the next thing. In a place like the Maldives or the hills above Ubud, attention has nowhere urgent to go. It settles on small things — a gecko, the sound of a boat, the temperature of the shade.',
      },
      {
        type: 'quote',
        text: 'Doing nothing is not the absence of a plan. It is the decision to let the day have one of its own.',
      },
      {
        type: 'paragraph',
        text: 'The travel industry rarely sells this. It sells experiences, and experiences are countable. Three temples, two tastings, one sunset cruise. There is nothing wrong with any of them. But a holiday made only of experiences can feel like a second job, with better scenery.',
      },
      { type: 'heading', text: 'The case for the unplanned hour' },
      {
        type: 'paragraph',
        text: 'We build one unplanned hour into every day of a SOLÉRA journey. Sometimes it becomes a swim. Sometimes it becomes a conversation with the person who tends the garden. Occasionally it becomes a sleep so deep that you wake unsure of the day of the week. All three are good outcomes.',
      },
      {
        type: 'paragraph',
        text: 'The trick is to protect the hour. Do not fill it with a “quick” museum or a “short” walk. Let it be genuinely empty. The first twenty minutes may feel uncomfortable; the brain is looking for a task. After that, something else arrives. It is usually the thing you came for.',
      },
      {
        type: 'paragraph',
        text: 'This is what summer feels like when it is allowed to happen: not a season, but a pace. A long afternoon with no edge to it. A second coffee because there is no reason not to. The sun moving across the floor while you decide, slowly, what to do next. Usually: nothing.',
      },
    ],
    secondImage: {
      src: '/images/journal-sea.webp',
      alt: 'A soft sunset over a calm beach with shallow water',
      caption: 'The last hour at a beach with no name, on the west coast.',
    },
  },
  {
    slug: 'kyoto-before-the-shutters-open',
    title: 'Kyoto before the shutters open',
    dek: 'The city keeps its best hours for people willing to set an alarm.',
    category: 'Places',
    date: '28 September 2026',
    readTime: '5 min read',
    author: 'Kenji Mori',
    cover: '/images/journal-kyoto.webp',
    coverAlt: 'Cherry blossom above a quiet Kyoto lane in spring',
    featured: true,
    body: [
      {
        type: 'paragraph',
        text: 'At 6:40 in the morning, Kyoto is a city of small sounds. A broom on stone. A delivery van reversing slowly. The clatter of a shutter going up on a shop that has sold the same knives since 1912. The light is low and pink, and the streets are wide in a way they will never be again that day.',
      },
      {
        type: 'paragraph',
        text: 'By nine, the first tour groups are at Kiyomizu-dera. By eleven, the lanes of Higashiyama are a slow river of people. None of this is a secret. The city receives its visitors with patience and a certain reserve, the way a person might receive guests in a house they love but would also like to have to themselves for a while.',
      },
      {
        type: 'quote',
        text: 'The temple garden does not become more beautiful at dawn. You become more able to see it.',
      },
      {
        type: 'paragraph',
        text: 'The early hours are not just quieter; they change the ratio of the city. With fewer people, you notice the proportions: the width of a lane against the height of a wooden facade, the way a garden wall hides almost everything, the precise angle at which a roof turns up at its corners. Kyoto is a city of deliberate composition, and composition needs space around it.',
      },
      { type: 'heading', text: 'A route worth waking for' },
      {
        type: 'paragraph',
        text: 'Start at Kennin-ji, where the twin dragons on the ceiling are best seen before the hall fills. Walk north through Gion to Shirakawa, where the willow branches touch the canal. Cross the river and take coffee at a standing bar in Demachiyanagi. By then the city is awake, and you have already had the best of it.',
      },
      {
        type: 'paragraph',
        text: 'The reward is not smugness. It is a kind of possession: for an hour, the city feels like a place you live in rather than a place you are visiting. That feeling is worth the alarm. It is also, quietly, the whole argument for travelling slowly.',
      },
    ],
    secondImage: {
      src: '/images/kyoto-1.webp',
      alt: 'A tunnel of vermilion torii gates at Fushimi Inari',
      caption: 'The first hour at Fushimi Inari, before the city wakes.',
    },
  },
  {
    slug: 'what-the-sea-keeps-returning',
    title: 'What the sea keeps returning',
    dek: 'On the particular comfort of a horizon that does not care how your day went.',
    category: 'Nature',
    date: '9 September 2026',
    readTime: '4 min read',
    author: 'Mara Lindqvist',
    cover: '/images/journal-sea.webp',
    coverAlt: 'A calm sea at sunset with soft pink light on the sand',
    body: [
      {
        type: 'paragraph',
        text: 'The sea is not a metaphor, though it is often used as one. It is water, salt, weather and a great deal of time. Standing at the edge of it, the mind does something unusual: it stops narrating. For a few minutes, there is only the sound and the movement and the fact of being small.',
      },
      {
        type: 'paragraph',
        text: 'I have watched the sea from a wooden deck in the Maldives, from a black-sand beach in Iceland, from the back of a boat off Positano. The circumstances could not have been more different. The feeling was remarkably similar: a kind of reset, as if some internal ledger had been wiped clean.',
      },
      {
        type: 'quote',
        text: 'The sea does not ask you to be anything. It simply continues.',
      },
      {
        type: 'paragraph',
        text: 'There is a practical reason to put the sea at the centre of a trip. It imposes a rhythm. You swim, you dry, you eat, you swim again. The body takes over from the schedule. Even a single afternoon at the water can change the character of a week.',
      },
      {
        type: 'paragraph',
        text: 'The sea also keeps returning things: shells, driftwood, the occasional shoe. It is a reminder that nothing stays put, and that this is not always bad news. The tide comes back. The light comes back. Summer, eventually, comes back.',
      },
    ],
    secondImage: {
      src: '/images/maldives-2.webp',
      alt: 'Wooden loungers on a deck looking over a calm lagoon',
      caption: 'A deck in Baa Atoll, an hour before the light changes.',
    },
  },
  {
    slug: 'the-room-that-opens-to-the-trees',
    title: 'The room that opens to the trees',
    dek: 'Why the best hotel rooms are the ones that let the outside in.',
    category: 'Design',
    date: '21 August 2026',
    readTime: '5 min read',
    author: 'Elias Moreau',
    cover: '/images/journal-villa.webp',
    coverAlt: 'A modern white villa with a still pool in front of it',
    body: [
      {
        type: 'paragraph',
        text: 'A hotel room can be perfectly designed and still feel like a box. The difference is usually not the furniture. It is the relationship between the room and what is outside it — the size of the opening, the depth of the threshold, the way the floor continues past the glass.',
      },
      {
        type: 'paragraph',
        text: 'In Bali, we stayed in a room where the entire western wall opened. Not a window, not a sliding door, but a wall that folded back so completely that the boundary between interior and garden disappeared. At night, the sound of the forest came in. In the morning, so did the light.',
      },
      {
        type: 'quote',
        text: 'Luxury is not more room. It is a better relationship with the place the room is in.',
      },
      {
        type: 'paragraph',
        text: 'This is harder to achieve than it looks. A large opening brings heat, insects, rain and privacy problems. The best tropical architecture solves these quietly: deep eaves, cross-ventilation, mosquito nets that disappear into the frame, lighting placed low so the garden stays dark. The result feels effortless, which is the point.',
      },
      { type: 'heading', text: 'What to look for' },
      {
        type: 'paragraph',
        text: 'When we choose a place to stay, we ask about the opening before we ask about the thread count. Which direction does the room face? Can you hear the water? Is there a tree within sight of the bed? Does the bathroom get morning light? These are the details that decide whether a room is memorable.',
      },
      {
        type: 'paragraph',
        text: 'A good room does not compete with the view. It frames it, steps back, and lets the place do the talking. The best ones make you want to leave the door open all night.',
      },
    ],
    secondImage: {
      src: '/images/bali-2.webp',
      alt: 'Morning light falling across a jungle ridge',
      caption: 'The garden side of the room, just after sunrise.',
    },
  },
  {
    slug: 'the-road-that-asks-nothing',
    title: 'The road that asks nothing of you',
    dek: 'A few days on the Great Ocean Road, with no fixed arrival time.',
    category: 'Notes',
    date: '3 August 2026',
    readTime: '7 min read',
    author: 'Tessa Whitfield',
    cover: '/images/journal-road.webp',
    coverAlt: 'An empty stretch of sand and surf on the Great Ocean Road',
    body: [
      {
        type: 'paragraph',
        text: 'The best roads are the ones that make arriving less important than driving. The Great Ocean Road is like that. It runs along the southern edge of Australia for 243 kilometres, turning inland when the coast becomes too steep, then returning to the water as if it cannot stay away.',
      },
      {
        type: 'paragraph',
        text: 'We started in Torquay with no plan beyond a dinner booking in Apollo Bay. By lunchtime we had stopped three times: for coffee, for a beach with no name, for a koala asleep in a fork of a eucalyptus tree. None of these were on a list. All of them were the point.',
      },
      {
        type: 'quote',
        text: 'A road trip is not a route. It is a series of decisions made in the moment, with the windows down.',
      },
      {
        type: 'paragraph',
        text: 'The Twelve Apostles are the famous part, and they are worth seeing — preferably late, when the coaches have gone and the limestone stacks turn the colour of old paper. But the road is better remembered for its smaller moments: the bakery in Birregurra, the fern gully in the Otways, the smell of eucalyptus after rain.',
      },
      { type: 'heading', text: 'How to do it properly' },
      {
        type: 'paragraph',
        text: 'Take four days, not one. Stay in small towns rather than the big resorts. Drive the inland route on the way back; the forest is a different landscape entirely. Leave one afternoon completely free. And when you find a beach with nobody on it, stop. There is no prize for reaching the end early.',
      },
    ],
    secondImage: {
      src: '/images/oceania-1.webp',
      alt: 'A limestone stack and sheer cliffs above a pale beach',
      caption: 'The limestone coast, late in the afternoon.',
    },
  },
  {
    slug: 'in-praise-of-the-shade',
    title: 'In praise of the shade',
    dek: 'The most underrated luxury in a hot climate is a tree that has been there for a hundred years.',
    category: 'Light',
    date: '17 July 2026',
    readTime: '4 min read',
    author: 'Elias Moreau',
    cover: '/images/journal-light.webp',
    coverAlt: 'Sunlight filtering through the canopy of a large banyan tree',
    body: [
      {
        type: 'paragraph',
        text: 'We spend a great deal of time thinking about light when we design a trip. Sunrise, sunset, the golden hour, the blue hour. We spend much less time thinking about shade. And yet shade is what makes the light bearable. It is the negative space that gives the bright hours their shape.',
      },
      {
        type: 'paragraph',
        text: 'In Bali, the banyan tree at the bottom of the garden was the most important piece of architecture on the property. It was cooler under there by several degrees. The light came through the leaves in small, moving pieces. People gravitated towards it without being told to.',
      },
      {
        type: 'quote',
        text: 'Shade is not the absence of summer. It is summer, edited.',
      },
      {
        type: 'paragraph',
        text: 'The same principle applies to a courtyard in Marrakech, a colonnade in Amalfi, a veranda in the Australian bush. A good shade structure is a room without walls. It extends the usable day: lunch outside at one, a book at three, a drink at six.',
      },
      {
        type: 'paragraph',
        text: 'When you are choosing where to stay, look for the trees. Look for the depth of the eaves. Look for the place where the afternoon is comfortable. The sun is the reason you came. The shade is how you stay.',
      },
    ],
    secondImage: {
      src: '/images/experience-forest.webp',
      alt: 'A small waterfall running through a mossy forest garden',
      caption: 'The middle of the afternoon, under the canopy.',
    },
  },
]

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug)

export const categories: Array<Article['category'] | 'All stories'> = [
  'All stories',
  'Places',
  'Slow Travel',
  'Design',
  'Nature',
  'Notes',
  'Light',
]
