export type Track = {
  src: string
  title: string
  artist: string
  mood: string
}

/**
 * Tracks are served locally from /public/audio.
 * Kevin MacLeod tracks are CC BY 3.0 (incompetech.com).
 * The Genshin Impact track is fan-added; place the file at /public/audio/genshin-storytellers-room.mp3.
 */
export const soundtrack: Track[] = [
  {
    src: '/audio/airport-lounge.mp3',
    title: 'Airport Lounge',
    artist: 'Kevin MacLeod',
    mood: 'late-afternoon cool',
  },
  {
    src: '/audio/bossa-antigua.mp3',
    title: 'Bossa Antigua',
    artist: 'Kevin MacLeod',
    mood: 'warm, unhurried',
  },
  {
    src: '/audio/cool-vibes.mp3',
    title: 'Cool Vibes',
    artist: 'Kevin MacLeod',
    mood: 'after dark',
  },
  {
    src: '/audio/genshin-storytellers-room.mp3',
    title: 'The Imaginary World — Storyteller’s Room',
    artist: 'HOYO-MiX (Genshin Impact)',
    mood: 'fantasy, quiet, evening study',
  },
]

export const soundtrackCredit = {
  artist: 'Kevin MacLeod',
  url: 'https://incompetech.com',
  license: 'CC BY 3.0',
  licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
}
