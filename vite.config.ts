import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const SITE = 'https://www.eliastamywedding.com'
const OG_IMAGE = `${SITE}/2nd%20pic%20DAS%202133.webp`

// Image-only social preview: no baked title/description text (the sender types
// the invitation message themselves). og:title is intentionally empty so
// WhatsApp doesn't fall back to the page <title>.
function socialBlock(url: string): string {
  return [
    '<!-- SOCIAL:START -->',
    '<meta property="og:type" content="website" />',
    '<meta property="og:title" content="" />',
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    '<meta name="twitter:title" content="" />',
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
    '<!-- SOCIAL:END -->',
  ].join('\n    ')
}

// Generate a static HTML file per guest (dist/<slug>.html) with that guest's
// Open Graph tags baked in, so WhatsApp/social crawlers — which don't run JS —
// see a language-correct image + text preview. Browsers still boot the SPA.
function guestSocialPreviews(): Plugin {
  return {
    name: 'guest-social-previews',
    apply: 'build',
    async closeBundle() {
      const { guests } = await import('./src/data')
      const outDir = resolve(__dirname, 'dist')
      const base = readFileSync(resolve(outDir, 'index.html'), 'utf8')

      for (const g of guests) {
        const lang: 'en' | 'ar' = g.lang === 'ar' ? 'ar' : 'en'
        const url = `${SITE}/${g.slug}`
        const html = base
          .replace(/<!-- SOCIAL:START[\s\S]*?SOCIAL:END -->/, socialBlock(url))
          .replace(
            '<html lang="en">',
            `<html lang="${lang}"${lang === 'ar' ? ' dir="rtl"' : ''}>`,
          )
        writeFileSync(resolve(outDir, `${g.slug}.html`), html)
      }
      console.log(`\n[guest-social-previews] generated ${guests.length} guest preview pages`)
    },
  }
}

export default defineConfig({
  plugins: [react(), guestSocialPreviews()],
  base: '/',
})
