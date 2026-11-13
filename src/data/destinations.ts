export type Region = 'Indian Ocean' | 'Mediterranean' | 'Europe' | 'Asia' | 'Oceania'
export type TravelStyle = 'Barefoot' | 'Coastal' | 'Alpine' | 'Cultural'

export type GalleryImage = {
  src: string
  alt: string
  caption: string
}

export type DestinationExperience = {
  title: string
  description: string
  duration: string
}

export type Destination = {
  slug: string
  name: string
  country: string
  region: Region
  style: TravelStyle
  tagline: string
  summary: string
  intro: string[]
  signature: string
  cover: string
  coverAlt: string
  /** Visible photo credit for the gallery; defaults to Unsplash when omitted. */
  credit?: string
  gallery: GalleryImage[]
  bestSeason: string
  months: number[]
  facts: {
    bestTime: string
    temperature: string
    flight: string
    stay: string
    currency: string
    language: string
  }
  experiences: DestinationExperience[]
  highlights: { title: string; text: string }[]
  coords: { lat: number; lng: number }
  timezone: string
  featured?: boolean
}

export const destinations: Destination[] = [
  {
    slug: 'maldives',
    name: 'The Maldives',
    country: 'Maldives',
    region: 'Indian Ocean',
    style: 'Barefoot',
    tagline: 'A horizon with nothing in the way.',
    summary:
      'Twenty-six atolls of white sand and water so clear it reads as a colour, not a surface.',
    signature: 'Barefoot luxury, forty minutes by seaplane.',
    intro: [
      'The Maldives is not one place but a scatter of them: 1,192 islands arranged like beads across the Indian Ocean. The water changes character every hour — glass at dawn, lapis at noon, a deep ink-blue after the rain — and the day is best measured by those changes rather than by the clock.',
      'We favour the smaller atolls, where a villa has its own stretch of reef and dinner is a table set in the sand. There is very little to do here, which is precisely the point. Swim, read, sleep, repeat. The outside world becomes a rumour.',
    ],
    cover: '/images/dest-maldives.webp',
    coverAlt: 'A small island ringed by turquoise water seen from above',
    gallery: [
      {
        src: '/images/maldives-1.webp',
        alt: 'A curved resort pool framed by palms and the ocean',
        caption: 'The long pool at Baa Atoll, just before lunch.',
      },
      {
        src: '/images/maldives-2.webp',
        alt: 'Wooden loungers on a deck looking over a calm lagoon',
        caption: 'Afternoon on the west deck. Nothing is scheduled.',
      },
      {
        src: '/images/maldives-3.webp',
        alt: 'An overwater villa lit warmly at dusk above the lagoon',
        caption: 'The last hour, when the villas switch on.',
      },
    ],
    bestSeason: 'November to April',
    months: [4, 4, 4, 3, 2, 2, 2, 2, 2, 3, 4, 4],
    facts: {
      bestTime: 'Nov — Apr',
      temperature: '27–31°C',
      flight: 'Seaplane from Malé',
      stay: '7 nights',
      currency: 'Maldivian rufiyaa',
      language: 'Dhivehi, English',
    },
    experiences: [
      {
        title: 'A reef at first light',
        description:
          'A dhoni leaves before the atoll wakes. You snorkel a coral garden with a marine biologist, then eat breakfast on a sandbank that will be underwater by noon.',
        duration: 'Half day · private',
      },
      {
        title: 'The overwater table',
        description:
          'Dinner on a private deck, cooked by the resort chef, with only the sound of small fish turning in the shallows. Wine chosen for salt and heat.',
        duration: 'Evening · private',
      },
      {
        title: 'Nothing, by design',
        description:
          'A day with no itinerary: a book, a shaded daybed, a cooler of water and the quietest stretch of beach on the island held for you.',
        duration: 'Full day',
      },
    ],
    highlights: [
      { title: 'The water', text: 'Reefs begin a few steps from the sand.' },
      { title: 'The quiet', text: 'Many islands hold a single resort, and little else.' },
      { title: 'The flight', text: 'The seaplane ride is the first proper view of the atolls.' },
    ],
    coords: { lat: 3.2028, lng: 73.2207 },
    timezone: 'Indian/Maldives',
    featured: true,
  },
  {
    slug: 'amalfi-coast',
    name: 'Amalfi Coast',
    country: 'Italy',
    region: 'Mediterranean',
    style: 'Coastal',
    tagline: 'Lemon groves, salt, and a road that refuses to hurry.',
    summary:
      'Fifty kilometres of cliff, colour and vertigo between Sorrento and Salerno.',
    signature: 'A slow drive south, with the sea always below.',
    intro: [
      'The Amalfi Coast is a place best entered by water. From the ferry, the towns reveal themselves in layers: lemon terraces, faded ochre facades, a church dome, then the road threading improbably through all of it. Arriving by car is dramatic; arriving by boat feels like the coast has been waiting.',
      'We build the days around the hours when the light is kind and the crowds are elsewhere — an early swim at Marina Grande, lunch high in a lemon grove, a late afternoon in Ravello when the day-trippers have gone. The coast is famous for good reason. It is also possible to have it almost to yourself.',
    ],
    cover: '/images/dest-amalfi.webp',
    coverAlt: 'Positano at sunset, its houses stacked above the Tyrrhenian Sea',
    gallery: [
      {
        src: '/images/amalfi-1.webp',
        alt: 'Pastel houses climbing the hillside above the sea in Positano',
        caption: 'Positano, early morning, before the ferries.',
      },
      {
        src: '/images/amalfi-2.webp',
        alt: 'Swimmers in clear turquoise water below the cliffs',
        caption: 'A swim stop below the coast road.',
      },
      {
        src: '/images/amalfi-3.webp',
        alt: 'A small boat in a turquoise cove beneath limestone cliffs',
        caption: 'The cove at Conca dei Marini, before the boats arrive.',
      },
    ],
    bestSeason: 'May to June, September to October',
    months: [1, 1, 2, 3, 4, 4, 3, 2, 4, 4, 2, 1],
    facts: {
      bestTime: 'May — Jun · Sep — Oct',
      temperature: '22–28°C',
      flight: 'Naples, then private transfer',
      stay: '5 nights',
      currency: 'Euro',
      language: 'Italian',
    },
    experiences: [
      {
        title: 'The lemon-grove lunch',
        description:
          'A family table terraced into the hillside above Maiori. Six courses, cold white wine, and a view that makes conversation optional.',
        duration: 'Afternoon',
      },
      {
        title: 'A boat with no schedule',
        description:
          'A classic gozzo and a skipper who knows which coves are empty at which hour. Swim stops, a picnic, and the coast seen from the water.',
        duration: 'Full day · private',
      },
      {
        title: 'Ravello at closing time',
        description:
          'The gardens of Villa Cimbrone after the last coach has left, when the Terrace of Infinity belongs to the swallows and you.',
        duration: 'Late afternoon',
      },
    ],
    highlights: [
      { title: 'The light', text: 'Best from the sea, an hour before sunset.' },
      { title: 'The food', text: 'Lemons, anchovies, tomatoes grown on the cliffs.' },
      { title: 'The walks', text: 'Old mule tracks link the villages above the road.' },
    ],
    coords: { lat: 40.634, lng: 14.6029 },
    timezone: 'Europe/Rome',
    featured: true,
  },
  {
    slug: 'swiss-alps',
    name: 'The Swiss Alps',
    country: 'Switzerland',
    region: 'Europe',
    style: 'Alpine',
    tagline: 'The loudest thing is the silence.',
    summary:
      'High valleys, cold lakes and a horizon that keeps rearranging itself as you walk.',
    signature: 'Ten days of clear air, long walks and early nights.',
    intro: [
      'Summer in the Alps is a well-kept secret. The ski lifts keep running, the meadows are in flower, and the valleys are emptier than they are in February. Mornings are sharp and blue; afternoons bring a soft haze; evenings turn the peaks the colour of pale honey.',
      'This is walking country, but not only. There are lake boats, thermal baths, mountain huts serving soup and strudel, and trains that climb through the clouds. We pair a few days of proper hiking with long, unhurried stays in small hotels where the owner still remembers your name.',
    ],
    cover: '/images/dest-alps.webp',
    coverAlt: 'The Matterhorn at dusk above a snow-covered ridge',
    gallery: [
      {
        src: '/images/alps-1.webp',
        alt: 'A walker beside a still alpine lake at sunrise',
        caption: 'The lake at sunrise, before the first boat.',
      },
      {
        src: '/images/alps-2.webp',
        alt: 'A green alpine valley and village seen from the ridge',
        caption: 'The valley floor, seen from the long ridge walk.',
      },
      {
        src: '/images/alps-3.webp',
        alt: 'A snow-covered peak and circling birds above the cloud line',
        caption: 'Above the cloud line, on the long ridge walk.',
      },
    ],
    bestSeason: 'June to September',
    months: [1, 1, 2, 2, 3, 4, 4, 4, 3, 2, 1, 1],
    facts: {
      bestTime: 'Jun — Sep',
      temperature: '16–26°C',
      flight: 'Zurich or Geneva, by rail',
      stay: '8 nights',
      currency: 'Swiss franc',
      language: 'German, French, Italian',
    },
    experiences: [
      {
        title: 'The hut walk',
        description:
          'A guided day on a high trail, with lunch at a family-run hut and a descent by cable car before the weather turns.',
        duration: 'Full day',
      },
      {
        title: 'A lake before the wind',
        description:
          'An early paddle on a glacier-fed lake, followed by coffee on a wooden jetty while the water is still glass.',
        duration: 'Morning',
      },
      {
        title: 'Bread, cheese, and a long table',
        description:
          'A visit to a mountain dairy, a tasting, and lunch in the farm kitchen. Nothing is rushed, including the cheese.',
        duration: 'Half day',
      },
    ],
    highlights: [
      { title: 'The air', text: 'Cool, dry and startlingly clear after rain.' },
      { title: 'The trails', text: 'Marked paths run from village to village.' },
      { title: 'The trains', text: 'The Glacier Express is worth the window seat.' },
    ],
    coords: { lat: 46.0207, lng: 7.7491 },
    timezone: 'Europe/Zurich',
    featured: true,
  },
  {
    slug: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    region: 'Asia',
    style: 'Barefoot',
    tagline: 'Green, warm, and entirely its own weather.',
    summary:
      'Rice terraces, stone temples and a jungle that seems to breathe alongside you.',
    signature: 'Slow mornings, warm rain, and a villa in the trees.',
    intro: [
      'Bali rewards a slower route. Skip the south coast traffic and head inland, where the roads narrow and the air cools, and the island becomes what people come looking for: a green, generous place with a temple at the end of most paths.',
      'Ubud is the centre of that feeling, but the quieter villages around it — Tegalalang, Payangan, Sidemen — are where we stay. Days begin with birdsong and end with the smell of frangipani. The rain, when it comes, is warm and brief, and the jungle sounds better afterwards.',
    ],
    cover: '/images/dest-bali.webp',
    coverAlt: 'Mount Agung at sunrise above a still lake and a bank of cloud',
    gallery: [
      {
        src: '/images/bali-1.webp',
        alt: 'A narrow path winding between green rice terraces',
        caption: 'The rice terraces above Ubud, an hour after sunrise.',
      },
      {
        src: '/images/bali-2.webp',
        alt: 'Morning light falling across a jungle ridge',
        caption: 'The jungle ridge at first light.',
      },
      {
        src: '/images/bali-3.webp',
        alt: 'A lone figure on the sand at sunset',
        caption: 'The last light on the west coast.',
      },
    ],
    bestSeason: 'April to October',
    months: [3, 3, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3],
    facts: {
      bestTime: 'Apr — Oct',
      temperature: '24–31°C',
      flight: 'Denpasar, then private car',
      stay: '6 nights',
      currency: 'Indonesian rupiah',
      language: 'Indonesian, Balinese',
    },
    experiences: [
      {
        title: 'A morning in the rice terraces',
        description:
          'A walk with a local guide through the subak irrigation system, ending with coffee and a view over the valley at Tegalalang.',
        duration: 'Half day',
      },
      {
        title: 'The temple before the tourists',
        description:
          'An early visit to a water temple, with a priest and a offering of flowers, before the first bus arrives.',
        duration: 'Morning',
      },
      {
        title: 'Forest bathing, Balinese style',
        description:
          'A slow walk with a naturalist through secondary forest, learning the plants, the birds and the sounds that fill the afternoon.',
        duration: '2–3 hours',
      },
    ],
    highlights: [
      { title: 'The green', text: 'Every surface seems to be growing something.' },
      { title: 'The water', text: 'Temples, rivers and the sea within an hour of each other.' },
      { title: 'The ritual', text: 'Offerings appear on doorsteps and dashboards each morning.' },
    ],
    coords: { lat: -8.5069, lng: 115.2625 },
    timezone: 'Asia/Makassar',
    featured: true,
  },
  {
    slug: 'kyoto',
    name: 'Kyoto',
    country: 'Japan',
    region: 'Asia',
    style: 'Cultural',
    tagline: 'A city that keeps its best hours for early risers.',
    summary:
      'Temple gardens, narrow lanes and the particular quiet of a city before breakfast.',
    signature: 'Up before the first train, home before the last.',
    intro: [
      'Kyoto is at its most generous before seven in the morning. The lanes around Gion are empty, the temple gardens are wet with dew, and the only sound is a shutter being pulled up on a shop that has been there for four generations. By ten, the city belongs to everyone else.',
      'Our days here are built around those early hours and the longer evenings: a tea ceremony in a private machiya, a walk along the Kamo River at dusk, dinner in a seven-seat counter restaurant where the chef decides. Kyoto rewards attention more than itinerary.',
    ],
    cover: '/images/dest-kyoto.webp',
    coverAlt: 'A quiet Kyoto street with a pagoda rising above wooden houses',
    gallery: [
      {
        src: '/images/kyoto-1.webp',
        alt: 'A tunnel of vermilion torii gates at Fushimi Inari',
        caption: 'The torii path at Fushimi Inari, before the crowds.',
      },
      {
        src: '/images/kyoto-2.webp',
        alt: 'Tall bamboo stalks closing overhead in Arashiyama',
        caption: 'The bamboo grove at Arashiyama.',
      },
      {
        src: '/images/kyoto-3.webp',
        alt: 'Two figures with a paper umbrella on a lantern-lit Kyoto street',
        caption: 'Gion, after the shops have closed.',
      },
    ],
    bestSeason: 'March to April, October to November',
    months: [1, 2, 4, 4, 3, 2, 2, 2, 2, 4, 4, 3],
    facts: {
      bestTime: 'Mar — Apr · Oct — Nov',
      temperature: '12–24°C',
      flight: 'Osaka Kansai, then rail',
      stay: '5 nights',
      currency: 'Japanese yen',
      language: 'Japanese',
    },
    experiences: [
      {
        title: 'The garden at opening time',
        description:
          'A private hour in a temple garden with a gardener, learning how the view is composed — and how to look at it.',
        duration: 'Early morning',
      },
      {
        title: 'A counter for seven',
        description:
          'Dinner at a small kaiseki counter in Gion, where the menu follows the market and the conversation follows the chef.',
        duration: 'Evening',
      },
      {
        title: 'The paper makers',
        description:
          'A visit to a family washi workshop outside the city, followed by tea in their garden and a walk back along the river.',
        duration: 'Half day',
      },
    ],
    highlights: [
      { title: 'The morning', text: 'The city is a different place before 8am.' },
      { title: 'The craft', text: 'Paper, knives, ceramics, tea — often in the same family.' },
      { title: 'The season', text: 'Cherry blossom and maple each transform the same streets.' },
    ],
    coords: { lat: 35.0116, lng: 135.7681 },
    timezone: 'Asia/Tokyo',
    featured: true,
  },
  {
    slug: 'santorini',
    name: 'Santorini',
    country: 'Greece',
    region: 'Mediterranean',
    style: 'Coastal',
    tagline: 'White walls, blue water, a volcano asleep below.',
    summary:
      'A caldera village where the evening light is the main event, every night.',
    signature: 'One island, two sides, and the best sunset in the Aegean.',
    intro: [
      'Santorini is a flooded volcano, and you can feel it. The caldera cliffs drop 300 metres into water so deep it turns almost black. Villages cling to the rim in white and blue, and the whole island seems arranged to watch the sun go down.',
      'The trick is to stay away from the busiest rim at the busiest hour. We favour the quieter villages — Pyrgos, Megalochori, the east coast — and time the caldera for the moments when the light is low and the crowds have moved on. A private boat, a table on a terrace, a long dinner after dark.',
    ],
    cover: '/images/dest-santorini.webp',
    coverAlt: 'Whitewashed steps and pink bougainvillea in a Cycladic village',
    gallery: [
      {
        src: '/images/santorini-1.webp',
        alt: 'Whitewashed houses and a windmill above the caldera in Oia',
        caption: 'Oia, seen from the castle ruins.',
      },
      {
        src: '/images/santorini-2.webp',
        alt: 'A terrace overlooking the caldera in late afternoon light',
        caption: 'A terrace above the caldera, an hour before sunset.',
      },
      {
        src: '/images/santorini-3.webp',
        alt: 'The white town of Oia spilling down the cliff to the sea',
        caption: 'The last stretch of the cliff path.',
      },
    ],
    bestSeason: 'May to June, September to October',
    months: [1, 1, 2, 3, 4, 4, 3, 2, 4, 4, 2, 1],
    facts: {
      bestTime: 'May — Jun · Sep — Oct',
      temperature: '22–28°C',
      flight: 'Athens, then 45-minute flight',
      stay: '5 nights',
      currency: 'Euro',
      language: 'Greek',
    },
    experiences: [
      {
        title: 'The caldera by boat',
        description:
          'A traditional kaiki leaves in the late afternoon, anchoring at the hot springs and a quiet cove for a swim before the sunset.',
        duration: '5 hours · private',
      },
      {
        title: 'Pyrgos, above the crowd',
        description:
          'A walk through the old capital with a local historian, ending on a rooftop terrace with the whole caldera below.',
        duration: 'Late afternoon',
      },
      {
        title: 'A table for the sunset',
        description:
          'Dinner on a private terrace in Megalochori, cooked by a home chef, timed to the light rather than the clock.',
        duration: 'Evening',
      },
    ],
    highlights: [
      { title: 'The caldera', text: 'The view changes with every hour and every cloud.' },
      { title: 'The villages', text: 'Pyrgos and Megalochori are quieter than the rim.' },
      { title: 'The wine', text: 'Assyrtiko grown in volcanic soil, best chilled.' },
    ],
    coords: { lat: 36.3932, lng: 25.4615 },
    timezone: 'Europe/Athens',
  },
  {
    slug: 'great-ocean-road',
    name: 'Great Ocean Road',
    country: 'Australia',
    region: 'Oceania',
    style: 'Coastal',
    tagline: 'A coast road with room to breathe.',
    summary:
      'Limestone cliffs, eucalyptus forest and long beaches along Victoria’s wild southern edge.',
    signature: 'Windows down, southbound, no fixed arrival time.',
    intro: [
      'The Great Ocean Road is 243 kilometres of cliff, forest and surf, and it is best taken slowly. Most people drive it in a day. We suggest four, with stops for rainforest walks, small-town bakeries and the kind of beach where the only footprints are yours.',
      'The Twelve Apostles are the postcard, but the quieter pleasures are elsewhere: the Otway rainforest, the koalas above Kennett River, a long lunch in Apollo Bay, and the last light on the limestone stacks when the coaches have gone. This is a landscape that rewards the unplanned hour.',
    ],
    cover: '/images/dest-oceania.webp',
    coverAlt: 'The Twelve Apostles silhouetted against a red sunset',
    gallery: [
      {
        src: '/images/oceania-1.webp',
        alt: 'A limestone stack and sheer cliffs above a pale beach',
        caption: 'The beach below the lookouts, at low tide.',
      },
      {
        src: '/images/oceania-2.webp',
        alt: 'A natural arch carved into the limestone coast',
        caption: 'Island Archway, on the quieter stretch of coast.',
      },
      {
        src: '/images/oceania-3.webp',
        alt: 'A lone surfer walking into the water on a wide beach',
        caption: 'A beach with no name, somewhere past Apollo Bay.',
      },
    ],
    bestSeason: 'November to March',
    months: [4, 4, 3, 2, 1, 1, 1, 1, 2, 3, 4, 4],
    facts: {
      bestTime: 'Nov — Mar',
      temperature: '18–26°C',
      flight: 'Melbourne, then drive',
      stay: '4 nights',
      currency: 'Australian dollar',
      language: 'English',
    },
    experiences: [
      {
        title: 'The Apostels at last light',
        description:
          'A guided walk to the viewing platforms after the day-trippers leave, with a flask of tea and the sound of the Southern Ocean below.',
        duration: 'Evening',
      },
      {
        title: 'Rainforest, then sea',
        description:
          'A morning walk in the Otway rainforest — fern gullies, towering eucalypts, maybe a koala — followed by a swim at a hidden cove.',
        duration: 'Full day',
      },
      {
        title: 'A long lunch in Apollo Bay',
        description:
          'Oysters, flathead and a bottle of local pinot at a table overlooking the harbour. The afternoon is deliberately left open.',
        duration: 'Afternoon',
      },
    ],
    highlights: [
      { title: 'The road', text: 'One of the world’s great coastal drives.' },
      { title: 'The forest', text: 'Cool temperate rainforest minutes from the surf.' },
      { title: 'The wildlife', text: 'Koalas, kangaroos and whales in season.' },
    ],
    coords: { lat: -38.68, lng: 143.39 },
    timezone: 'Australia/Melbourne',
  },
  {
    slug: 'hawaii',
    name: 'The Hawaiian Islands',
    country: 'United States',
    region: 'Oceania',
    style: 'Coastal',
    tagline: 'Green cliffs, warm water, a horizon that keeps opening.',
    summary:
      'Eight islands in the middle of the Pacific, each with its own weather and its own idea of quiet.',
    signature: 'Trade winds, long swims, and a road that ends at the sea.',
    intro: [
      'Hawaii is not one place but a chain of them, strung across 2,400 kilometres of open Pacific. The islands differ more than their postcards suggest: Kauai is green and vertical, the Big Island still growing, Maui a sequence of climates in a single day. What they share is the light — low, warm and almost hourly changeable.',
      'We stay away from the resort strips where we can. A house above the water on the north shore, a morning on a beach reached only by trail, an afternoon drive that ends wherever the road does. The islands reward curiosity more than a schedule, and the trade winds keep everything moving.',
    ],
    cover: '/images/dest-hawaii.webp',
    coverAlt: 'The fluted green cliffs of the Na Pali Coast rising above turquoise water',
    credit: 'Photography via Wikimedia Commons',
    gallery: [
      {
        src: '/images/hawaii-1.webp',
        alt: 'Green sea cliffs dropping into clear blue water along the Na Pali Coast',
        caption: 'The Na Pali Coast, seen from the water before the afternoon wind.',
      },
      {
        src: '/images/hawaii-2.webp',
        alt: 'Red and green canyon walls under cloud in Waimea Canyon',
        caption: 'Waimea Canyon, where the island shows its age.',
      },
      {
        src: '/images/hawaii-3.webp',
        alt: 'A pale sand beach with palms and a small island offshore',
        caption: 'Lanikai, early enough that the sand is still cool.',
      },
    ],
    bestSeason: 'April to October',
    months: [3, 3, 3, 4, 4, 4, 4, 4, 4, 3, 3, 3],
    facts: {
      bestTime: 'Apr — Oct',
      temperature: '24–29°C',
      flight: 'Honolulu, then island hop',
      stay: '9 nights',
      currency: 'US dollar',
      language: 'English, Hawaiian',
    },
    experiences: [
      {
        title: 'The coast by kayak',
        description:
          'A guided paddle along a quiet stretch of shoreline, with a landing on a beach that has no road to it and a swim before the wind builds.',
        duration: 'Morning · private',
      },
      {
        title: 'Up before the road',
        description:
          'A drive to a lookout while the valleys are still in shadow, coffee from a roadside stand, and the long view down the coast as the light arrives.',
        duration: 'Early morning',
      },
      {
        title: 'A table under the trees',
        description:
          'Dinner cooked outdoors — fish, fruit, something grilled — with the sound of the surf a few steps beyond the garden.',
        duration: 'Evening',
      },
    ],
    highlights: [
      { title: 'The water', text: 'Warm, clear and swimmable most of the year.' },
      { title: 'The scale', text: 'Each island has its own weather, coast and pace.' },
      { title: 'The light', text: 'Trade winds keep the sky moving all day.' },
    ],
    coords: { lat: 22.0964, lng: -159.5261 },
    timezone: 'Pacific/Honolulu',
  },
  {
    slug: 'seychelles',
    name: 'The Seychelles',
    country: 'Seychelles',
    region: 'Indian Ocean',
    style: 'Barefoot',
    tagline: 'Granite, palms, and water the colour of glass.',
    summary:
      'One hundred and fifteen islands scattered below the equator, most of them empty.',
    signature: 'Barefoot days, warm rain, and beaches without a queue.',
    intro: [
      'The Seychelles are what remains of a lost continent, and the granite gives them away: enormous weathered boulders at the edge of the sand, palms growing out of the cracks, water so clear the reef reads as a shadow. The inner islands are close enough to move between by boat, and far enough apart to feel separate.',
      'We favour the smaller islands and the hours when the day boats have gone. A beach at first light, a walk into the Vallée de Mai before the heat, lunch under a takamaka tree. The islands ask very little of you beyond patience with the weather, which moves quickly and leaves the light cleaner than it found it.',
    ],
    cover: '/images/dest-seychelles.webp',
    coverAlt: 'A granite boulder on a Seychelles beach at sunset, with palms above the sand',
    credit: 'Photography via Wikimedia Commons',
    gallery: [
      {
        src: '/images/seychelles-1.webp',
        alt: 'Anse Source d’Argent, with granite boulders and shallow turquoise water',
        caption: 'Anse Source d’Argent, before the first boat.',
      },
      {
        src: '/images/seychelles-2.webp',
        alt: 'Palms and broad leaves in the Vallée de Mai forest',
        caption: 'The Vallée de Mai, where the palms have been left alone.',
      },
      {
        src: '/images/seychelles-3.webp',
        alt: 'A long pale beach with green hills behind it',
        caption: 'Beau Vallon, looking north along the bay.',
      },
    ],
    bestSeason: 'April to May, October to November',
    months: [3, 3, 3, 4, 4, 2, 2, 2, 2, 3, 4, 3],
    facts: {
      bestTime: 'Apr — May · Oct — Nov',
      temperature: '26–31°C',
      flight: 'Mahé, via Dubai or Doha',
      stay: '8 nights',
      currency: 'Seychellois rupee',
      language: 'Seychellois Creole, English, French',
    },
    experiences: [
      {
        title: 'A beach with no name',
        description:
          'A small boat takes you to a cove on a neighbouring island, with a picnic, two umbrellas and no fixed time to leave.',
        duration: 'Full day · private',
      },
      {
        title: 'The forest before the heat',
        description:
          'A walk through the Vallée de Mai with a naturalist, looking for the coco de mer and the birds that live in the canopy.',
        duration: 'Morning',
      },
      {
        title: 'Dinner on the sand',
        description:
          'A table set just above the tide line, cooked by a local chef, with the reef audible between courses.',
        duration: 'Evening',
      },
    ],
    highlights: [
      { title: 'The granite', text: 'Boulders worn into shapes that look almost deliberate.' },
      { title: 'The water', text: 'Reef and lagoon within a few steps of the beach.' },
      { title: 'The emptiness', text: 'Most islands hold one small settlement, or none.' },
    ],
    coords: { lat: -4.6796, lng: 55.492 },
    timezone: 'Indian/Mahe',
  },
  {
    slug: 'kerala',
    name: 'Kerala',
    country: 'India',
    region: 'Asia',
    style: 'Cultural',
    tagline: 'A green coast that moves at the speed of water.',
    summary:
      'Backwaters, tea hills and a shoreline that has been trading with the world for two thousand years.',
    signature: 'Slow boats, wet green hills, and dinner served on a leaf.',
    intro: [
      'Kerala is a narrow strip of India between the Western Ghats and the Arabian Sea, and it feels like a country of its own. The backwaters are the centre of it: a lattice of canals, lagoons and rice paddies where the road gives way to water and the day is measured by the passing of boats.',
      'Inland, the hills rise into tea and cardamom, cool enough for a jumper in the evening. On the coast, fishing villages and old trading ports face west. We move between the two slowly, because the point of Kerala is not to see it all but to let one landscape become another.',
    ],
    cover: '/images/dest-kerala.webp',
    coverAlt: 'A golden sunset behind palms and houseboats on the Kerala backwaters',
    credit: 'Photography via Wikimedia Commons',
    gallery: [
      {
        src: '/images/kerala-1.webp',
        alt: 'Terraced tea gardens running down a green hillside in Munnar',
        caption: 'The tea hills above Munnar, after the morning mist.',
      },
      {
        src: '/images/kerala-2.webp',
        alt: 'A palm-fringed beach with orange flowers in the foreground',
        caption: 'The cliff path at Varkala, looking south.',
      },
      {
        src: '/images/kerala-3.webp',
        alt: 'Kathakali performers in full costume and make-up on a dark stage',
        caption: 'Kathakali, in a hall that holds perhaps eighty people.',
      },
    ],
    bestSeason: 'October to March',
    months: [4, 4, 3, 2, 1, 1, 1, 1, 2, 3, 4, 4],
    facts: {
      bestTime: 'Oct — Mar',
      temperature: '23–32°C',
      flight: 'Kochi, then drive',
      stay: '7 nights',
      currency: 'Indian rupee',
      language: 'Malayalam, English',
    },
    experiences: [
      {
        title: 'A night on the water',
        description:
          'A private houseboat on a quiet canal, with a cook, a shaded deck and nowhere in particular to be by sunset.',
        duration: 'Overnight',
      },
      {
        title: 'The tea hills at first light',
        description:
          'A walk through the plantations above Munnar before the pickers start, ending with tea in a family kitchen.',
        duration: 'Early morning',
      },
      {
        title: 'An evening of Kathakali',
        description:
          'A performance in a small hall, preceded by the slow, deliberate work of the make-up.',
        duration: 'Evening',
      },
    ],
    highlights: [
      { title: 'The backwaters', text: 'A whole way of life organised around water.' },
      { title: 'The hills', text: 'Tea, cardamom and cool air a few hours inland.' },
      { title: 'The table', text: 'Fish, coconut, rice and a great deal of pepper.' },
    ],
    coords: { lat: 9.9312, lng: 76.2673 },
    timezone: 'Asia/Kolkata',
  },
  {
    slug: 'loire-valley',
    name: 'Loire Valley',
    country: 'France',
    region: 'Europe',
    style: 'Cultural',
    tagline: 'A river, a long table, and more châteaux than a week can hold.',
    summary:
      'France’s longest river, moving slowly past gardens, vineyards and houses built to be looked at.',
    signature: 'By bicycle, between two rivers, with lunch taking most of the afternoon.',
    intro: [
      'The Loire is less a region than a sequence: the river widens and narrows, the stone changes colour, and the châteaux appear and disappear behind the trees. It is gentle country, best seen at the speed of a bicycle or a small car with the windows down.',
      'We stay near Amboise or Tours and work outwards, visiting one garden in the morning and one house in the afternoon, leaving the middle of the day for lunch. The light here is soft and northern, and the river catches it twice — once in the sky and once below.',
    ],
    cover: '/images/dest-loire.webp',
    coverAlt: 'The north facade of Château de Chambord reflected in the water',
    credit: 'Photography via Wikimedia Commons',
    gallery: [
      {
        src: '/images/loire-1.webp',
        alt: 'A formal garden with clipped hedges in front of a white château',
        caption: 'Chenonceau, from the garden of Catherine de’ Medici.',
      },
      {
        src: '/images/loire-2.webp',
        alt: 'Geometric kitchen gardens and flowers at Villandry',
        caption: 'The potager at Villandry, in its late-summer order.',
      },
      {
        src: '/images/loire-3.webp',
        alt: 'A château and bridge above the wide Loire river',
        caption: 'Amboise, with the river doing most of the work.',
      },
    ],
    bestSeason: 'May to June, September to October',
    months: [1, 1, 2, 3, 4, 4, 3, 3, 4, 3, 1, 1],
    facts: {
      bestTime: 'May — Jun · Sep — Oct',
      temperature: '15–26°C',
      flight: 'Paris, then rail to Tours',
      stay: '5 nights',
      currency: 'Euro',
      language: 'French',
    },
    experiences: [
      {
        title: 'The garden before opening',
        description:
          'An hour at Villandry with the head gardener, before the gates open, learning how the beds are re-drawn each season.',
        duration: 'Early morning',
      },
      {
        title: 'A river lunch',
        description:
          'A table by the water in Amboise, with the local white wine and no plan for the afternoon.',
        duration: 'Afternoon',
      },
      {
        title: 'Two châteaux, slowly',
        description:
          'Chenonceau by boat, then Chambord at the end of the day, when the coaches have gone and the rooms empty out.',
        duration: 'Full day',
      },
    ],
    highlights: [
      { title: 'The river', text: 'The Loire is the spine of everything here.' },
      { title: 'The gardens', text: 'Formal, productive and still worked by hand.' },
      { title: 'The table', text: 'Goat cheese, asparagus, white wine, long lunches.' },
    ],
    coords: { lat: 47.3941, lng: 0.6848 },
    timezone: 'Europe/Paris',
  },
  {
    slug: 'norwegian-coast',
    name: 'The Norwegian Coast',
    country: 'Norway',
    region: 'Europe',
    style: 'Coastal',
    tagline: 'A coast that keeps going, and a sun that forgets to set.',
    summary:
      'Fjords, fishing villages and a shoreline that runs half the length of the country.',
    signature: 'North by sea, with the light on until midnight.',
    intro: [
      'The Norwegian coast is not one landscape but a thousand kilometres of them: deep fjords, low islands, vertical mountains rising straight out of the water. In summer the light does not really leave, and the days take on a strange, generous quality in which dinner at eleven feels entirely reasonable.',
      'We travel north by boat and road, staying in small fishing villages where the harbour is the centre of everything. The weather changes quickly and is part of the pleasure. A walk in the morning, a long lunch while the rain passes, and an evening that never quite becomes night.',
    ],
    cover: '/images/dest-norway.webp',
    coverAlt: 'Red fishing cabins along the water at Reine in the Lofoten Islands',
    credit: 'Photography via Wikimedia Commons',
    gallery: [
      {
        src: '/images/norway-1.webp',
        alt: 'A green fjord bending between steep mountains, seen from above',
        caption: 'Geirangerfjord, from the road above.',
      },
      {
        src: '/images/norway-2.webp',
        alt: 'A harbour filled with small fishing boats below snow-covered peaks',
        caption: 'Henningsvær, where the boats come in for the afternoon.',
      },
      {
        src: '/images/norway-3.webp',
        alt: 'Red cabins on stilts above the water at sunset in Reine',
        caption: 'Reine, at an hour that could be evening or morning.',
      },
    ],
    bestSeason: 'June to August',
    months: [1, 1, 2, 2, 3, 4, 4, 4, 3, 2, 1, 1],
    facts: {
      bestTime: 'Jun — Aug',
      temperature: '10–18°C',
      flight: 'Oslo, then the coastal route',
      stay: '8 nights',
      currency: 'Norwegian krone',
      language: 'Norwegian',
    },
    experiences: [
      {
        title: 'The fjord from the water',
        description:
          'A small boat into a branch of the fjord, with the engine off for the last mile and the cliffs going up on both sides.',
        duration: 'Half day · private',
      },
      {
        title: 'A village walk',
        description:
          'A slow walk through a fishing village with someone who has always lived there, ending at the drying racks.',
        duration: 'Morning',
      },
      {
        title: 'The midnight light',
        description:
          'A late drive to a west-facing beach, a flask, and the sun sliding along the horizon without quite setting.',
        duration: 'Late evening',
      },
    ],
    highlights: [
      { title: 'The light', text: 'Summer nights that never fully arrive.' },
      { title: 'The water', text: 'Fjords deep enough to hold their own weather.' },
      { title: 'The villages', text: 'Small, practical and painted in strong colours.' },
    ],
    coords: { lat: 67.9325, lng: 13.0885 },
    timezone: 'Europe/Oslo',
  },
  {
    slug: 'english-lake-district',
    name: 'The Lake District',
    country: 'England',
    region: 'Europe',
    style: 'Alpine',
    tagline: 'Small mountains, long views, and rain that makes the green greener.',
    summary:
      'A pocket of fell and water in northern England, walked for two hundred years and still quiet at the right hour.',
    signature: 'Boots, a flask, and a pub at the end of the valley.',
    intro: [
      'The Lake District is a small landscape that behaves like a large one. The fells rise quickly from the valley floors, the lakes sit between them like poured glass, and a walk of a few hours can feel like a day in the Alps. It is also famously wet, which is why it is so green.',
      'We stay in a village with a good pub and walk from the door, rather than driving between viewpoints. Mornings are for the high ground, afternoons for the water or a garden. The weather is not an interruption; it is the thing that gives the place its colour.',
    ],
    cover: '/images/dest-lakes.webp',
    coverAlt: 'Green fells and a dark blue lake seen from the hillside at Buttermere',
    credit: 'Photography via Wikimedia Commons',
    gallery: [
      {
        src: '/images/lakes-1.webp',
        alt: 'A lake seen from a grassy fell under a dramatic sky',
        caption: 'Ullswater, with the weather coming across the fells.',
      },
      {
        src: '/images/lakes-2.webp',
        alt: 'A still lake at dusk with rocks in the foreground',
        caption: 'Derwentwater, after the last walkers have gone.',
      },
      {
        src: '/images/lakes-3.webp',
        alt: 'A valley of green fells at the head of a lake',
        caption: 'Wasdale, looking towards the head of the valley.',
      },
    ],
    bestSeason: 'May to September',
    months: [1, 1, 2, 3, 4, 4, 3, 3, 3, 2, 1, 1],
    facts: {
      bestTime: 'May — Sep',
      temperature: '12–20°C',
      flight: 'Manchester, then drive',
      stay: '5 nights',
      currency: 'Pound sterling',
      language: 'English',
    },
    experiences: [
      {
        title: 'A fell day',
        description:
          'A guided walk up one of the quieter fells, with lunch in the lee of a wall and a descent through the woods.',
        duration: 'Full day',
      },
      {
        title: 'A lake at dawn',
        description:
          'An early swim or paddle on flat water, followed by coffee from a flask on the shore.',
        duration: 'Early morning',
      },
      {
        title: 'The long way to dinner',
        description:
          'A walk between two villages, a fire at the end of it, and a menu that has not changed for years.',
        duration: 'Evening',
      },
    ],
    highlights: [
      { title: 'The scale', text: 'Big views from walks that fit into a morning.' },
      { title: 'The water', text: 'Lakes long enough to swim, small enough to read.' },
      { title: 'The weather', text: 'Four seasons in an afternoon, and better light for it.' },
    ],
    coords: { lat: 54.5417, lng: -3.2667 },
    timezone: 'Europe/London',
  },
  {
    slug: 'new-zealand-north-island',
    name: 'New Zealand’s North Island',
    country: 'New Zealand',
    region: 'Oceania',
    style: 'Coastal',
    tagline: 'Volcanoes, islands and a coast that never quite ends.',
    summary:
      'From the volcanic plateau to the Bay of Islands, a landscape that changes faster than the road can follow.',
    signature: 'Two weeks, one island, and still not enough time.',
    intro: [
      'The North Island packs an unreasonable amount into a small space: active volcanoes in the centre, geothermal valleys that steam at dawn, and a coastline of islands and peninsulas in the north. The light is southern and sharp, and the weather can turn a drive into a completely different day.',
      'We begin in Auckland and head south slowly, or north to the Bay of Islands first, depending on the season. The distances are manageable, but the temptation is to keep moving. The better choice is usually to stop earlier than planned and stay for the afternoon.',
    ],
    cover: '/images/dest-new-zealand.webp',
    coverAlt: 'A volcanic crater with snow and red rock in Tongariro National Park',
    credit: 'Photography via Wikimedia Commons',
    gallery: [
      {
        src: '/images/new-zealand-1.webp',
        alt: 'A small green island and a sailboat in the Bay of Islands',
        caption: 'The Bay of Islands, from the water.',
      },
      {
        src: '/images/new-zealand-2.webp',
        alt: 'A steaming geothermal pool with an orange mineral edge',
        caption: 'Wai-O-Tapu, early, before the steam thickens.',
      },
      {
        src: '/images/new-zealand-3.webp',
        alt: 'A white rock arch over a turquoise beach at Cathedral Cove',
        caption: 'Cathedral Cove, reached on foot.',
      },
    ],
    bestSeason: 'November to March',
    months: [4, 4, 3, 2, 1, 1, 1, 1, 2, 3, 4, 4],
    facts: {
      bestTime: 'Nov — Mar',
      temperature: '15–24°C',
      flight: 'Auckland, then drive south',
      stay: '9 nights',
      currency: 'New Zealand dollar',
      language: 'English, Māori',
    },
    experiences: [
      {
        title: 'The crossing',
        description:
          'A guided walk across the volcanic plateau, starting before sunrise and finishing before the afternoon cloud arrives.',
        duration: 'Full day',
      },
      {
        title: 'A day on the water',
        description:
          'A small boat among the islands, with a stop for a swim and lunch anchored in a quiet bay.',
        duration: 'Full day · private',
      },
      {
        title: 'The geothermal morning',
        description:
          'A walk through a steaming valley at first light, when the boardwalks are empty and the pools are at their clearest.',
        duration: 'Early morning',
      },
    ],
    highlights: [
      { title: 'The volcanoes', text: 'An active landscape you can walk across.' },
      { title: 'The islands', text: 'Sheltered water, small beaches, and a boat to reach them.' },
      { title: 'The space', text: 'Long views and very few people between them.' },
    ],
    coords: { lat: -39.281, lng: 175.57 },
    timezone: 'Pacific/Auckland',
  },
  {
    slug: 'tuscany',
    name: 'Tuscany',
    country: 'Italy',
    region: 'Europe',
    style: 'Cultural',
    tagline: 'Hills the colour of bread, and towns built for the evening.',
    summary:
      'Cypress roads, hill towns and a table that never seems to end.',
    signature: 'One hill town at a time, and lunch taken seriously.',
    intro: [
      'Tuscany is a landscape that has been composed for centuries: the cypress lines, the stone farms, the hill towns placed exactly where the view is best. It can feel familiar before you arrive, and then the light does something you did not expect — a low gold in the late afternoon, or a blue haze between the ridges.',
      'We stay outside the cities and move between them early or late, when the coaches have gone and the piazzas belong to residents again. Siena, Florence, a small town with one good restaurant. The pleasure is in the repetition: a walk, a long lunch, a swim, another walk.',
    ],
    cover: '/images/dest-tuscany.webp',
    coverAlt: 'Rolling green and gold hills under a pink sunrise in the Val d’Orcia',
    credit: 'Photography via Wikimedia Commons',
    gallery: [
      {
        src: '/images/tuscany-1.webp',
        alt: 'The rooftops and tower of Siena seen from above',
        caption: 'Siena, from the tower of the Mangia.',
      },
      {
        src: '/images/tuscany-2.webp',
        alt: 'The Duomo of Florence lit at dusk, with the city below',
        caption: 'Florence, at the hour when the stone turns pink.',
      },
      {
        src: '/images/tuscany-3.webp',
        alt: 'A white gravel road between cypress trees and gold fields',
        caption: 'A back road in the Val d’Orcia, near the end of the day.',
      },
    ],
    bestSeason: 'May to June, September to October',
    months: [1, 1, 2, 3, 4, 4, 3, 3, 4, 3, 1, 1],
    facts: {
      bestTime: 'May — Jun · Sep — Oct',
      temperature: '16–29°C',
      flight: 'Florence or Pisa, then rail',
      stay: '6 nights',
      currency: 'Euro',
      language: 'Italian',
    },
    experiences: [
      {
        title: 'A hill town at opening time',
        description:
          'An early walk through Siena before the shops open, ending with coffee in a square that is still in shadow.',
        duration: 'Early morning',
      },
      {
        title: 'The long lunch',
        description:
          'A table at a farm above the valley, four courses and a bottle of something local, with the afternoon left empty.',
        duration: 'Afternoon',
      },
      {
        title: 'The garden at dusk',
        description:
          'A private visit to a villa garden, timed for the hour when the light comes low through the cypresses.',
        duration: 'Late afternoon',
      },
    ],
    highlights: [
      { title: 'The light', text: 'Gold on the stone, blue between the hills.' },
      { title: 'The table', text: 'Simple food, taken slowly, with wine from the next hill.' },
      { title: 'The towns', text: 'Small enough to walk, old enough to keep their shape.' },
    ],
    coords: { lat: 43.3188, lng: 11.3308 },
    timezone: 'Europe/Rome',
  },
  {
    slug: 'istanbul',
    name: 'Istanbul',
    country: 'Türkiye',
    region: 'Europe',
    style: 'Cultural',
    tagline: 'Two continents, one city, and water in between.',
    summary:
      'A city built on a strait, where the call to prayer, the ferries and the traffic all share the same air.',
    signature: 'Early mornings on the water, late evenings on the hills.',
    intro: [
      'Istanbul is a city best understood from the water. The Bosphorus divides Europe from Asia and connects the Black Sea to the Mediterranean, and the ferries that cross it are the city’s true public transport. From the deck, the skyline rearranges itself: domes, minarets, apartment blocks, container ships.',
      'We stay on the European side and cross often, moving between the old city and the newer neighbourhoods along the water. Mornings are for mosques and markets before the crowds; afternoons for a long lunch and a ferry; evenings for the light on the hills. The city is loud, and then suddenly very quiet.',
    ],
    cover: '/images/dest-istanbul.webp',
    coverAlt: 'Hagia Sophia and its minarets under a clear blue sky',
    credit: 'Photography via Wikimedia Commons',
    gallery: [
      {
        src: '/images/istanbul-1.webp',
        alt: 'A ferry crossing the Bosphorus with Hagia Sophia on the hill behind',
        caption: 'The Bosphorus ferry, with the old city behind.',
      },
      {
        src: '/images/istanbul-2.webp',
        alt: 'A shopfront in the Grand Bazaar lit by hanging lamps',
        caption: 'The Grand Bazaar, somewhere near the spice row.',
      },
      {
        src: '/images/istanbul-3.webp',
        alt: 'The Galata Tower lit at night above the city',
        caption: 'Galata, after dark.',
      },
    ],
    bestSeason: 'April to May, September to October',
    months: [1, 1, 3, 4, 4, 2, 1, 1, 3, 4, 2, 1],
    facts: {
      bestTime: 'Apr — May · Sep — Oct',
      temperature: '14–26°C',
      flight: 'Istanbul, direct',
      stay: '5 nights',
      currency: 'Turkish lira',
      language: 'Turkish',
    },
    experiences: [
      {
        title: 'The old city before nine',
        description:
          'A walk between Hagia Sophia and the Grand Bazaar while the streets are still being swept, with coffee at a stand that has no name.',
        duration: 'Early morning',
      },
      {
        title: 'A ferry to the Asian side',
        description:
          'A crossing with no particular destination, lunch near the landing, and the return at the end of the afternoon.',
        duration: 'Half day',
      },
      {
        title: 'Dinner above the water',
        description:
          'A table on a rooftop in Galata, with the lights coming on across the Golden Horn.',
        duration: 'Evening',
      },
    ],
    highlights: [
      { title: 'The water', text: 'The city is defined by the strait it sits on.' },
      { title: 'The layers', text: 'Roman, Byzantine and Ottoman stone in the same street.' },
      { title: 'The food', text: 'Breakfast as a long meal, and sweets at every hour.' },
    ],
    coords: { lat: 41.0082, lng: 28.9784 },
    timezone: 'Europe/Istanbul',
  },
  {
    slug: 'azores',
    name: 'The Azores',
    country: 'Portugal',
    region: 'Europe',
    style: 'Coastal',
    tagline: 'Volcanic peaks rising from the mid-Atlantic.',
    summary:
      'Green islands, crater lakes, and an ocean that stretches forever in all directions.',
    signature: 'Cloud forests, hot springs, and a pace that knows no clock.',
    intro: [
      'The Azores are nine volcanic islands in the middle of the Atlantic, and they feel like a world apart. The landscape is a intense, saturated green, carved by craters and softened by centuries of rain. It is a place of deep blue lakes, hydrangea-lined roads, and hot springs that bubble up in the forest.',
      'We stay in houses built of volcanic stone, spending mornings on the caldera trails and afternoons by the sea. There are no crowds here, only the rhythm of the wind, the sea, and the clouds moving quickly over the peaks.',
    ],
    cover: '/images/azores-1.webp',
    coverAlt: 'A twin crater lake in Sete Cidades surrounded by lush green hills',
    gallery: [
      {
        src: '/images/azores-1.webp',
        alt: 'The twin lakes of Sete Cidades seen from a ridge',
        caption: 'The lakes of Sete Cidades, before the morning mist settles.',
      },
      {
        src: '/images/azores-2.webp',
        alt: 'A natural pool filled by the sea in the volcanic rock',
        caption: 'A natural swimming pool formed by volcanic lava.',
      },
      {
        src: '/images/azores-3.webp',
        alt: 'A waterfall falling into a warm pool in a jungle forest',
        caption: 'A thermal pool in the middle of the forest.',
      },
    ],
    bestSeason: 'June to September',
    months: [1, 1, 1, 2, 3, 4, 4, 4, 3, 2, 1, 1],
    facts: {
      bestTime: 'Jun — Sep',
      temperature: '18–25°C',
      flight: 'Lisbon or direct, then ferry',
      stay: '7 nights',
      currency: 'Euro',
      language: 'Portuguese',
    },
    experiences: [
      {
        title: 'A crater walk',
        description:
          'A guided trek along the rim of a dormant volcano, with lakes on both sides and a view that takes in the entire island.',
        duration: 'Half day',
      },
      {
        title: 'Thermal waters',
        description:
          'A morning in the hot springs of Furnas, surrounded by giant ferns and the scent of iron and earth.',
        duration: 'Morning',
      },
      {
        title: 'Whale watching',
        description:
          'A small boat out into the deep Atlantic, with no wind and nothing but the horizon.',
        duration: 'Half day',
      },
    ],
    highlights: [
      { title: 'The green', text: 'A landscape of intense, saturated colour.' },
      { title: 'The water', text: 'Thermal pools, crater lakes, and the deep Atlantic.' },
      { title: 'The pace', text: 'An island rhythm that feels genuinely unhurried.' },
    ],
    coords: { lat: 37.7412, lng: -25.6756 },
    timezone: 'Atlantic/Azores',
  },
  {
    slug: 'georgia',
    name: 'Georgia',
    country: 'Georgia',
    region: 'Asia',
    style: 'Cultural',
    tagline: 'High peaks, deep valleys, and a wine culture as old as time.',
    summary:
      'A country defined by the Caucasus, where the hospitality is a serious, daily commitment.',
    signature: 'Mountain paths, ancient vines, and a dinner table that never empties.',
    intro: [
      'Georgia sits between the Black Sea and the Caucasus, and it has a landscape to match: snow-capped peaks that soar over green valleys, and a wine tradition that is some of the oldest in the world. It is a country that takes hospitality as a core part of its architecture.',
      'We travel between the mountains and the plains, spending time in small villages where the wine is still made in clay pots and the dinners are a performance of family, bread, and fire. The pace is slow, set by the terrain and the generous amount of time it takes to eat.',
    ],
    cover: '/images/georgia-1.webp',
    coverAlt: 'Gergeti Trinity Church against the backdrop of the Caucasus mountains',
    gallery: [
      {
        src: '/images/georgia-1.webp',
        alt: 'Gergeti Trinity Church high in the Caucasus mountains',
        caption: 'The church at Gergeti, at the foot of the peaks.',
      },
      {
        src: '/images/georgia-2.webp',
        alt: 'Wine aging in qvevri clay pots in a cellar',
        caption: 'A traditional cellar, where the wine ages in clay.',
      },
      {
        src: '/images/georgia-3.webp',
        alt: 'A stone tower in a high mountain village',
        caption: 'The high villages, where the towers still guard the valley.',
      },
    ],
    bestSeason: 'May to June, September to October',
    months: [1, 1, 2, 3, 4, 4, 3, 3, 4, 4, 1, 1],
    facts: {
      bestTime: 'May — Jun · Sep — Oct',
      temperature: '15–28°C',
      flight: 'Tbilisi, direct',
      stay: '7 nights',
      currency: 'Georgian lari',
      language: 'Georgian',
    },
    experiences: [
      {
        title: 'The high valley walk',
        description:
          'A day hike into a valley that has only a few houses, ending with a meal in the kitchen of a local family.',
        duration: 'Full day',
      },
      {
        title: 'The qvevri tasting',
        description:
          'A visit to a family vineyard to taste wine made in clay pots buried in the ground.',
        duration: 'Afternoon',
      },
      {
        title: 'Tbilisi at dawn',
        description:
          'A walk through the old city before the cafes open, with the fortress rising above in the morning light.',
        duration: 'Early morning',
      },
    ],
    highlights: [
      { title: 'The mountains', text: 'Some of the highest, least-touched peaks in Europe.' },
      { title: 'The table', text: 'Bread, walnuts, cheese, and wine as a way of life.' },
      { title: 'The history', text: 'Towers and churches built into the rock itself.' },
    ],
    coords: { lat: 41.7151, lng: 44.8271 },
    timezone: 'Asia/Tbilisi',
  },
  {
    slug: 'faroe-islands',
    name: 'The Faroe Islands',
    country: 'Faroe Islands',
    region: 'Europe',
    style: 'Coastal',
    tagline: 'Sheep on the cliffs, Atlantic light, and silence above the breakers.',
    summary:
      'Eighteen volcanic islands in the North Atlantic, where grass grows on roofs and the weather changes every ten minutes.',
    signature: 'Fog rolling in over turf houses, puffin colonies, and a road that ends at the sea.',
    intro: [
      'The Faroes are not easy to reach, and that is precisely why they remain themselves. Sheep outnumber people, turf-roofed churches sit beside fjords, and the light — when it breaks — is a pale, clear gold that makes the green cliffs seem lit from within.',
      'We stay in small guesthouses in villages where the harbour is the centre of everything, walking coastal paths in the morning and eating lamb stew by the fire in the evening. It is windy, it is raw, and it is beautiful in a way that asks nothing of you.',
    ],
    cover: 'https://images.unsplash.com/photo-1540959783232-9fd306b255b9?q=80&w=1400&auto=format&fit=crop',
    coverAlt: 'Grass-roofed houses by a fjord in the Faroe Islands under moody Atlantic skies',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1540959783232-9fd306b255b9?q=80&w=1400&auto=format&fit=crop',
        alt: 'Turf-roofed houses clustered by a Faroese fjord',
        caption: 'Gásadalur, where the waterfall falls straight into the ocean.',
      },
      {
        src: 'https://images.unsplash.com/photo-1531365999718-ee56986a0962?q=80&w=1400&auto=format&fit=crop',
        alt: 'Sea stacks rising from the North Atlantic beneath dramatic clouds',
        caption: 'Drangarnir, the natural sea arch, seen from the cliffs of Vágar.',
      },
      {
        src: 'https://images.unsplash.com/photo-1597091452723-d6e9c4743a8b?q=80&w=1400&auto=format&fit=crop',
        alt: 'Green grassy cliffs dropping into dark blue ocean water',
        caption: 'The bird cliffs of Mykines, home to puffins in summer.',
      },
    ],
    bestSeason: 'June to August',
    months: [1, 1, 1, 2, 3, 4, 4, 4, 3, 2, 1, 1],
    facts: {
      bestTime: 'Jun — Aug',
      temperature: '10–14°C',
      flight: 'Vágar, via Copenhagen',
      stay: '6 nights',
      currency: 'Faroese króna',
      language: 'Faroese, Danish, English',
    },
    experiences: [
      {
        title: 'The coastal path',
        description:
          'A guided walk along the cliff edge above Sørvágur, with the ocean below and the islands of Mykines on the horizon.',
        duration: 'Half day',
      },
      {
        title: 'Turf house dinner',
        description:
          'Lamb and root vegetables cooked in a traditional Faroese kitchen, with the wind rattling the windows outside.',
        duration: 'Evening',
      },
      {
        title: 'Puffin watching',
        description:
          'A boat trip to Mykines at first light, when the cliffs are alive with nesting birds and the sea is still glass.',
        duration: 'Morning',
      },
    ],
    highlights: [
      { title: 'The light', text: 'Atlantic mist that clears into sudden, sharp gold.' },
      { title: 'The grass', text: 'Turf roofs and green slopes that roll straight into the sea.' },
      { title: 'The quiet', text: 'Villages with one shop, one church, and nothing else.' },
    ],
    coords: { lat: 62.0221, lng: -6.7805 },
    timezone: 'Atlantic/Faroe',
  },
  {
    slug: 'french-polynesia',
    name: 'French Polynesia',
    country: 'French Polynesia',
    region: 'Oceania',
    style: 'Barefoot',
    tagline: 'Turquoise lagoons, black pearls, and an ocean that glows at night.',
    summary:
      'Scattered atolls in the South Pacific where the reef is alive and the days follow the tide.',
    signature: 'Bare feet on warm sand, outrigger canoes, and a horizon that never ends.',
    intro: [
      'French Polynesia is not one place but a scatter of atolls across five archipelagos, each with its own light and rhythm. The lagoons are the colour of crushed turquoise, the coral is electric, and at night the water sometimes glows with bioluminescence.',
      'We favour the quieter atolls — Rangiroa, Fakarava, the Tuamotus — where a pension has a handful of rooms and dinner is fresh fish eaten under the stars. There is no hurry here, only the slow pulse of the ocean.',
    ],
    cover: 'https://images.unsplash.com/photo-1544620346-c7fd453d379f?q=80&w=1400&auto=format&fit=crop',
    coverAlt: 'Overwater bungalows in a turquoise lagoon in French Polynesia',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1544620346-c7fd453d379f?q=80&w=1400&auto=format&fit=crop',
        alt: 'Overwater bungalows above a turquoise lagoon',
        caption: 'A pension on Rangiroa, with the reef just below the deck.',
      },
      {
        src: 'https://images.unsplash.com/photo-1527982379703-7e18127078f6?q=80&w=1400&auto=format&fit=crop',
        alt: 'A white sand beach with palm trees and clear blue water',
        caption: 'The motu at dawn, before the day boats arrive.',
      },
      {
        src: 'https://images.unsplash.com/photo-1569412371198-7a29a94e4f27?q=80&w=1400&auto=format&fit=crop',
        alt: 'A traditional outrigger canoe on calm lagoon water at sunset',
        caption: 'A vaʻa crossing the lagoon at the end of the day.',
      },
    ],
    bestSeason: 'May to October',
    months: [2, 2, 3, 4, 4, 4, 4, 4, 4, 3, 2, 2],
    facts: {
      bestTime: 'May — Oct',
      temperature: '24–30°C',
      flight: 'Papeete, then domestic flight or boat',
      stay: '8 nights',
      currency: 'CFP franc',
      language: 'French, Tahitian',
    },
    experiences: [
      {
        title: 'The reef pass drift',
        description:
          'A drift snorkel through a reef pass at slack tide, with reef sharks, manta rays and schools of fish in the blue.',
        duration: 'Half day',
      },
      {
        title: 'A lunch on the motu',
        description:
          'A private picnic on a sandbar island — poisson cru, coconut bread, and water so clear you can see the reef below.',
        duration: 'Full day',
      },
      {
        title: 'Bioluminescent water',
        description:
          'A swim after dark in a calm lagoon, where every movement sparks a trail of living light.',
        duration: 'Evening',
      },
    ],
    highlights: [
      { title: 'The water', text: 'Turquoise, warm and alive with reef fish and coral.' },
      { title: 'The pace', text: 'Days marked by the tide, not by the clock.' },
      { title: 'The night', text: 'Stars so bright they seem reflected in the water.' },
    ],
    coords: { lat: -17.6797, lng: -149.4068 },
    timezone: 'Pacific/Tahiti',
  },
  {
    slug: 'bhutan',
    name: 'Bhutan',
    country: 'Bhutan',
    region: 'Asia',
    style: 'Cultural',
    tagline: 'Gross national happiness, cliffside monasteries, and prayer flags on the wind.',
    summary:
      'A Himalayan kingdom that measures success in wellbeing, where dzongs rise above river valleys and forests cover seven out of ten hills.',
    signature: 'High mountain passes, red-robed monks, and a sense that time moves differently here.',
    intro: [
      'Bhutan is a country that guards its soul carefully. Visitors are few, the mountains are high, and the architecture — dzongs, temples, farmhouses — is painted in the same deep red and ochre as the monks’ robes. Prayer flags string between peaks, carrying blessings on the wind.',
      'We travel slowly, stopping at mountain passes to hang flags, visiting monasteries where the chanting is low and ancient, and walking trails that have been used by pilgrims for centuries. The air is thin, clear, and cold at dawn.',
    ],
    cover: 'https://images.unsplash.com/photo-1533398840170-5e619f53385c?q=80&w=1400&auto=format&fit=crop',
    coverAlt: "Tiger's Nest monastery clinging to a cliffside in Bhutan's Paro Valley",
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1533398840170-5e619f53385c?q=80&w=1400&auto=format&fit=crop',
        alt: "Paro Taktsang, Tiger's Nest Monastery, perched on a cliff above the Paro Valley",
        caption: "Tiger’s Nest, clinging to the rock face above the pine forest.",
      },
      {
        src: 'https://images.unsplash.com/photo-1577169698772-0e13c2dec7d6?q=80&w=1400&auto=format&fit=crop',
        alt: 'Prayer flags strung across a Himalayan mountain pass',
        caption: 'The Dochula Pass, with 108 chortens and the eastern Himalaya beyond.',
      },
      {
        src: 'https://images.unsplash.com/photo-1530620625711-e420009e6bb6?q=80&w=1400&auto=format&fit=crop',
        alt: 'A Bhutanese dzong fortress above a river valley',
        caption: 'Punakha Dzong, at the junction of two rivers.',
      },
    ],
    bestSeason: 'March to May, September to November',
    months: [2, 3, 4, 3, 2, 1, 1, 1, 2, 4, 4, 3],
    facts: {
      bestTime: 'Mar — May · Sep — Nov',
      temperature: '10–25°C',
      flight: 'Paro, via Delhi or Bangkok',
      stay: '7 nights',
      currency: 'Bhutanese ngultrum',
      language: 'Dzongkha',
    },
    experiences: [
      {
        title: 'The Tiger’s Nest trek',
        description:
          'A morning climb to Paro Taktsang, the monastery built into a cliff 900 metres above the valley floor, with a guide who knows every legend.',
        duration: 'Full day',
      },
      {
        title: 'A monk’s morning',
        description:
          'Time in a quiet dzong during prayer, listening to the low chant and the scent of butter lamps.',
        duration: 'Morning',
      },
      {
        title: 'The high pass',
        description:
          'A drive over Dochula at dawn, stopping to hang prayer flags as the sun touches the snow peaks.',
        duration: 'Early morning',
      },
    ],
    highlights: [
      { title: 'The mountains', text: 'The eastern Himalaya, close enough to touch on clear days.' },
      { title: 'The red', text: 'Monk’s robes, temple walls, and prayer flags against the green.' },
      { title: 'The silence', text: 'Valleys where the loudest sound is a distant waterfall.' },
    ],
    coords: { lat: 27.5142, lng: 90.4336 },
    timezone: 'Asia/Thimphu',
  },
  {
    slug: 'madeira',
    name: 'Madeira',
    country: 'Portugal',
    region: 'Europe',
    style: 'Coastal',
    tagline: 'A floating garden of levada trails, laurel forest, and Atlantic cliffs.',
    summary:
      'A Portuguese island in the mid-Atlantic, steep, green and laced with centuries-old irrigation paths.',
    signature: 'Walking the levadas, drinking Madeira wine, and watching clouds pass over the peaks.',
    intro: [
      'Madeira is a garden that floats in the Atlantic. Laurisilva forest covers the mountains, levada trails run alongside ancient irrigation channels, and the cliffs drop into dark blue water. The island is small, but the walking is infinite.',
      'We stay in Funchal or a quinta in the hills, spending days on the levadas — narrow paths beside water channels that lead through tunnels, past waterfalls, and along ridges with the ocean on both sides. Evenings are for wine and grilled fish on a terrace.',
    ],
    cover: 'https://images.unsplash.com/photo-1570581702399-4099e1697d17?q=80&w=1400&auto=format&fit=crop',
    coverAlt: 'Levada trail winding through Madeira’s laurel forest with ocean views',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1570581702399-4099e1697d17?q=80&w=1400&auto=format&fit=crop',
        alt: 'A levada path through green forest with mountains in the distance',
        caption: 'The Levada do Caniçal, where the path runs beside the water channel.',
      },
      {
        src: 'https://images.unsplash.com/photo-1533352113657-10716184e640?q=80&w=1400&auto=format&fit=crop',
        alt: 'Steep cliffs dropping into the Atlantic at Ponta de São Lourenço',
        caption: 'The eastern tip of Madeira, where the island ends in rock.',
      },
      {
        src: 'https://images.unsplash.com/photo-1548003972-35385333272e?q=80&w=1400&auto=format&fit=crop',
        alt: 'A Madeira wine bottle and glass on a terrace overlooking the ocean',
        caption: 'A glass of Malmsey at sunset, above Funchal.',
      },
    ],
    bestSeason: 'April to October',
    months: [2, 2, 3, 4, 4, 4, 4, 4, 4, 3, 2, 2],
    facts: {
      bestTime: 'Apr — Oct',
      temperature: '18–25°C',
      flight: 'Funchal, direct or via Lisbon',
      stay: '6 nights',
      currency: 'Euro',
      language: 'Portuguese',
    },
    experiences: [
      {
        title: 'The levada walk',
        description:
          'A guided hike along a centuries-old levada, through laurel forest and beside waterfalls, ending with a picnic on a ridge.',
        duration: 'Full day',
      },
      {
        title: 'Madeira wine tasting',
        description:
          'A visit to a Funchal lodge, tasting Sercial, Verdelho and Malmsey with the winemaker.',
        duration: 'Afternoon',
      },
      {
        title: 'Cabo Girão',
        description:
          'A walk along one of Europe’s highest sea cliffs, with a glass platform looking straight down to the ocean.',
        duration: 'Morning',
      },
    ],
    highlights: [
      { title: 'The green', text: 'Laurisilva forest, a UNESCO world heritage, ancient and damp.' },
      { title: 'The levadas', text: 'Over 2,000 kilometres of walking paths beside water channels.' },
      { title: 'The wine', text: 'Fortified Madeira, aged in cask and served chilled.' },
    ],
    coords: { lat: 32.6661, lng: -16.9241 },
    timezone: 'Atlantic/Madeira',
  },
  {
    slug: 'slovenia',
    name: 'Slovenia',
    country: 'Slovenia',
    region: 'Europe',
    style: 'Alpine',
    tagline: 'Emerald lakes, Julian Alps, and a capital that feels like a large village.',
    summary:
      'A small country between the Alps and the Adriatic, where Lake Bled meets limestone peaks and green river valleys.',
    signature: 'A pletna boat at dawn, a walk in Triglav National Park, and a glass of Rebula in the hills.',
    intro: [
      'Slovenia is the kind of place that fits into a week but leaves an impression for years. Lake Bled is the postcard — an island church in an emerald lake beneath a cliffside castle — but the real country is in the valleys, the vineyards, and the Julian Alps.',
      'We base ourselves in Ljubljana or a small inn in the hills, making day trips to Lake Bohinj, the Soča Valley, and the mountains. The water is turquoise where it should be, the forests are deep, and the people are quietly proud.',
    ],
    cover: 'https://images.unsplash.com/photo-1567620863088-a8ce7b320e4f?q=80&w=1400&auto=format&fit=crop',
    coverAlt: 'Lake Bled with the island church and castle on the cliff in Slovenia',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1567620863088-a8ce7b320e4f?q=80&w=1400&auto=format&fit=crop',
        alt: 'Lake Bled with the island church and medieval castle on the cliff',
        caption: 'Lake Bled at first light, before the tour boats arrive.',
      },
      {
        src: 'https://images.unsplash.com/photo-1545140135-453063f0be27?q=80&w=1400&auto=format&fit=crop',
        alt: 'Emerald green Soča River flowing through limestone gorge',
        caption: 'The Soča Valley, where the water is the colour of glass.',
      },
      {
        src: 'https://images.unsplash.com/photo-1554790204-6e938779fd28?q=80&w=1400&auto=format&fit=crop',
        alt: 'Ljubljana old town with the Triple Bridge and river',
        caption: 'Ljubljana, crossing the river on a quiet morning.',
      },
    ],
    bestSeason: 'May to June, September to October',
    months: [2, 2, 3, 4, 4, 3, 3, 3, 4, 4, 2, 1],
    facts: {
      bestTime: 'May — Jun · Sep — Oct',
      temperature: '15–26°C',
      flight: 'Ljubljana, direct or via Munich',
      stay: '5 nights',
      currency: 'Euro',
      language: 'Slovene',
    },
    experiences: [
      {
        title: 'The pletna at dawn',
        description:
          'A traditional wooden boat to Bled Island before the day-trippers, climbing the 99 steps to the church of the Assumption.',
        duration: 'Early morning',
      },
      {
        title: 'The Soča walk',
        description:
          'A hike along the emerald river in Triglav National Park, with limestone peaks rising on both sides.',
        duration: 'Full day',
      },
      {
        title: 'A wine afternoon',
        description:
          'A visit to a family cellar in the Vipava Valley, tasting Rebula and Pinela with a plate of cheese and prosciutto.',
        duration: 'Afternoon',
      },
    ],
    highlights: [
      { title: 'The water', text: 'Emerald lakes and rivers that look painted.' },
      { title: 'The peaks', text: 'Triglav and the Julian Alps, close and dramatic.' },
      { title: 'The scale', text: 'A whole country small enough to see properly in a week.' },
    ],
    coords: { lat: 46.1512, lng: 14.9955 },
    timezone: 'Europe/Ljubljana',
  },
  {
    slug: 'namibia',
    name: 'Namibia',
    country: 'Namibia',
    region: 'Oceania',
    style: 'Barefoot',
    tagline: 'Ancient dunes, endless horizons, and the quiet of the desert.',
    summary:
      'A vast landscape where the Namib Desert meets the Atlantic, and the space between things is the main event.',
    signature: 'Rust-red dunes at sunrise, stars that fill the sky, and a road that never seems to end.',
    intro: [
      'Namibia is defined by space: the sheer, overwhelming scale of the Namib Desert, the skeletons of trees in Deadvlei, and the cold Atlantic crashing against the dunes. It is a place that strips life back to its essentials: light, heat, sand, and sky.',
      'We focus on the Sossusvlei region, where the dunes are tallest and the colours most intense. Mornings are for climbing the dunes before the heat builds; evenings are for watching the shadows stretch across the desert floor. It is profound, quiet, and entirely transformative.',
    ],
    cover: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1400&auto=format&fit=crop',
    coverAlt: 'Deadvlei in Namibia with dead acacia trees against orange dunes',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1400&auto=format&fit=crop',
        alt: 'Deadvlei under a clear blue sky',
        caption: 'Deadvlei, where the trees have stood for centuries.',
      },
      {
        src: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1400&auto=format&fit=crop',
        alt: 'Dune 45 at sunrise in the Namib Desert',
        caption: 'The dunes at sunrise, when the light turns everything rust-red.',
      },
      {
        src: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1400&auto=format&fit=crop',
        alt: 'Rugged desert landscape stretching to the horizon',
        caption: 'The endless desert, an hour before sunset.',
      },
    ],
    bestSeason: 'May to October',
    months: [2, 3, 3, 4, 4, 4, 4, 4, 4, 3, 2, 2],
    facts: {
      bestTime: 'May — Oct',
      temperature: '15–30°C',
      flight: 'Windhoek, then drive',
      stay: '7 nights',
      currency: 'Namibian dollar',
      language: 'English',
    },
    experiences: [
      {
        title: 'The dune climb',
        description:
          'A sunrise climb up one of the highest dunes, ending with a view that takes in the entire Namib-Naukluft Park.',
        duration: 'Early morning',
      },
      {
        title: 'Desert stargazing',
        description:
          'A night in the desert with no light pollution, where the Milky Way is bright enough to cast shadows.',
        duration: 'Evening',
      },
      {
        title: 'The ghost forest',
        description:
          'A walk through Deadvlei, where the dead trees stand like sculptures against the bright orange sand.',
        duration: 'Half day',
      },
    ],
    highlights: [
      { title: 'The dunes', text: 'Some of the tallest, oldest sand formations on earth.' },
      { title: 'The sky', text: 'Endless, clear, and filled with more stars than you can name.' },
      { title: 'The silence', text: 'A stillness that is rare, profound, and restorative.' },
    ],
    coords: { lat: -24.722, lng: 15.342 },
    timezone: 'Africa/Windhoek',
  },
  {
    slug: 'musandam',
    name: 'Musandam Peninsula',
    country: 'Oman',
    region: 'Asia',
    style: 'Coastal',
    tagline: 'Fjords of Arabia, crystal waters, and dolphins in the morning.',
    summary:
      'A rugged peninsula where the Hajar Mountains drop straight into the turquoise Gulf, often called the Norway of Arabia.',
    signature: 'A traditional dhow boat, quiet coves, and the smell of salt and sun.',
    intro: [
      'Musandam is an exclave of Oman, cut off from the rest of the country by the UAE. It is a place of sheer, limestone cliffs that plunge into the Strait of Hormuz, creating a series of intricate, fjord-like inlets called khors.',
      'We stay in Khasab and spend our days on a traditional wooden dhow, sailing into the inlets to swim in water so clear it seems to be air. There are no roads to most of these coves, only the sea, the limestone, and the occasional school of dolphins.',
    ],
    cover: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop',
    coverAlt: 'A dhow boat sailing in a fjord in Musandam, Oman',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop',
        alt: 'A dhow boat in the Musandam fjords',
        caption: 'A traditional dhow in the quietest part of the khor.',
      },
      {
        src: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1400&auto=format&fit=crop',
        alt: 'Limestone cliffs meeting turquoise water',
        caption: 'The cliffs of Musandam, where the rock drops into the sea.',
      },
      {
        src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&auto=format&fit=crop',
        alt: 'Clear turquoise water with fish visible',
        caption: 'The reef, just a few steps from the beach.',
      },
    ],
    bestSeason: 'October to April',
    months: [3, 4, 4, 3, 2, 1, 1, 1, 2, 3, 4, 4],
    facts: {
      bestTime: 'Oct — Apr',
      temperature: '20–35°C',
      flight: 'Khasab or Dubai, then transfer',
      stay: '4 nights',
      currency: 'Omani rial',
      language: 'Arabic, English',
    },
    experiences: [
      {
        title: 'The dhow day',
        description:
          'A private day trip on a traditional wooden dhow, sailing into the deepest inlets, with stops to snorkel and a picnic on board.',
        duration: 'Full day',
      },
      {
        title: 'Dolphin watching',
        description:
          'A morning cruise out into the Strait, where dolphins often play in the wake of the boat.',
        duration: 'Morning',
      },
      {
        title: 'Khor Najd',
        description:
          'A drive to the lookout above Khor Najd, where the mountains reveal a sudden, breathtaking view of the sea.',
        duration: 'Afternoon',
      },
    ],
    highlights: [
      { title: 'The fjords', text: 'Limestone cliffs that create a stunning, intricate coastline.' },
      { title: 'The dhows', text: 'Traditional wooden boats that feel part of the landscape.' },
      { title: 'The sea', text: 'Warm, clear, and filled with life.' },
    ],
    coords: { lat: 26.2, lng: 56.25 },
    timezone: 'Asia/Muscat',
  },
  {
    slug: 'yakushima',
    name: 'Yakushima',
    country: 'Japan',
    region: 'Asia',
    style: 'Alpine',
    tagline: 'Ancient cedar forests, moss-covered paths, and the spirit of the mountain.',
    summary:
      'A Japanese island covered in ancient, subtropical rainforest and jagged mountain peaks.',
    signature: 'Moss-covered roots, towering cedars, and a rain that makes the forest breathe.',
    intro: [
      'Yakushima is an island that feels primordial. Seven thousand years old cedars stand in the cloud-drenched forest, moss covers every rock and root, and the peaks rise sharply from the sea. It is said to rain 35 days a month, which is precisely why it feels so alive.',
      'We walk the trails of Shiratani Unsuikyo, where the light filters through the ancient canopy, and spend time in the small, harbour villages. It is a place for slow walking, quiet observation, and understanding how a forest can feel like a sanctuary.',
    ],
    cover: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1400&auto=format&fit=crop',
    coverAlt: 'Ancient moss-covered cedar forest in Yakushima',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1400&auto=format&fit=crop',
        alt: 'Mossy forest floor with ancient cedar roots',
        caption: 'The Shiratani Unsuikyo forest, ancient and green.',
      },
      {
        src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1400&auto=format&fit=crop',
        alt: 'A high mountain peak above the clouds in Yakushima',
        caption: 'The mountain peaks above the cloud line.',
      },
      {
        src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1400&auto=format&fit=crop',
        alt: 'A small village harbour at the edge of the forest',
        caption: 'The village harbour, where the forest meets the sea.',
      },
    ],
    bestSeason: 'May to June, September to November',
    months: [1, 1, 2, 3, 4, 4, 3, 3, 4, 4, 2, 1],
    facts: {
      bestTime: 'May — Jun · Sep — Nov',
      temperature: '15–25°C',
      flight: 'Kagoshima, then ferry',
      stay: '5 nights',
      currency: 'Japanese yen',
      language: 'Japanese',
    },
    experiences: [
      {
        title: 'The ancient forest walk',
        description:
          'A guided trek to see the Jomon Sugi, a cedar tree estimated to be thousands of years old, deep in the mountain forest.',
        duration: 'Full day',
      },
      {
        title: 'Mossy sanctuary',
        description:
          'A quiet walk through the Shiratani Unsuikyo ravine, where the moss creates a vibrant green world.',
        duration: 'Morning',
      },
      {
        title: 'Coastal evening',
        description:
          'Time in a small harbour village, with local tea and the sound of the ocean.',
        duration: 'Evening',
      },
    ],
    highlights: [
      { title: 'The cedars', text: 'Ancient trees that have stood for millennia.' },
      { title: 'The moss', text: 'A vibrant green covering that turns every rock into a sculpture.' },
      { title: 'The rain', text: 'It keeps the island lush, green, and wonderfully remote.' },
    ],
    coords: { lat: 30.3397, lng: 130.5202 },
    timezone: 'Asia/Tokyo',
  },
]

export const getDestination = (slug: string) => destinations.find((d) => d.slug === slug)

export const regions: Array<Region | 'All regions'> = [
  'All regions',
  'Indian Ocean',
  'Mediterranean',
  'Europe',
  'Asia',
  'Oceania',
]

export const styles: Array<TravelStyle | 'All styles'> = [
  'All styles',
  'Barefoot',
  'Coastal',
  'Alpine',
  'Cultural',
]
