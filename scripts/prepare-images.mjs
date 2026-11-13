// Regenerates src/data/image-variants.ts from the files in public/images.
//
// Every base image has responsive derivatives beside it, named
// `<name>-640.webp`, `<name>-960.webp` and so on. SmartImage needs their
// intrinsic size and available widths to build a srcset, so this script reads
// the folder and rewrites the manifest rather than relying on hand edits.
//
// Usage: node scripts/prepare-images.mjs
import sharp from 'sharp'
import { readdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const IMAGES = path.join(ROOT, 'public', 'images')
const MANIFEST = path.join(ROOT, 'src', 'data', 'image-variants.ts')

// The widths that the derivative step writes. Base files can contain digits of
// their own (alps-1.webp), so only these exact suffixes are treated as variants.
const DERIVATIVE_WIDTHS = [640, 960, 1400, 1800]
const DERIVATIVE = new RegExp(`-(${DERIVATIVE_WIDTHS.join('|')})\\.webp$`)

const files = await readdir(IMAGES)
const bases = files.filter((file) => file.endsWith('.webp') && !DERIVATIVE.test(file)).sort()

const entries = []
for (const file of bases) {
  const { width, height } = await sharp(path.join(IMAGES, file)).metadata()
  const stem = file.replace(/\.webp$/, '')
  const variants = files
    .filter((candidate) => candidate.startsWith(`${stem}-`) && DERIVATIVE.test(candidate))
    .map((candidate) => Number(candidate.slice(stem.length + 1, -5)))
    .filter((value) => Number.isFinite(value))
    .sort((a, b) => a - b)
  entries.push({ src: `/images/${file}`, width, height, variants })
}

const body = entries
  .map(
    ({ src, width, height, variants }) =>
      `  ${JSON.stringify(src)}: {\n    "w": ${width},\n    "h": ${height},\n    "v": [\n${variants
        .map((value) => `      ${value}`)
        .join(',\n')}\n    ]\n  }`,
  )
  .join(',\n')

const output = `// Generated from the files in public/images. Do not edit by hand.
// Maps a source image to its intrinsic size and the resized widths that exist
// beside it on disk, so SmartImage can build a srcset without hard-coding.
export type ImageVariantInfo = { w: number; h: number; v: number[] }

export const imageVariants: Record<string, ImageVariantInfo> = {
${body}
}

export function srcSetFor(src: string): string | undefined {
  const info = imageVariants[src]
  if (!info || info.v.length === 0) return undefined
  const variants = info.v.map((w) => \`\${src.replace(/\\.webp$/, \`-\${w}.webp\`)} \${w}w\`)
  variants.push(\`\${src} \${info.w}w\`)
  return variants.join(', ')
}
`

await writeFile(MANIFEST, output)
console.log(`Wrote ${entries.length} image entries to src/data/image-variants.ts`)
