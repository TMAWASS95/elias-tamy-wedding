import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const SITE = 'https://www.eliastamywedding.com'
const OG_IMAGE = `${SITE}/2nd%20pic%20DAS%202133.webp`

// Language-specific WhatsApp / social preview copy.
const preview = {
  en: {
    title: 'Elias & Tamy — Wedding Invitation',
    desc: "You're invited — Join us as we celebrate our wedding · Saturday, August 22, 2026 · Alyasa Village",
    locale: 'en_US',
  },
  ar: {
    title: 'دعوة زفاف — إلياس وتامي',
    desc: 'يسعدنا دعوتكم لمشاركتنا فرحة زفافنا · السبت ٢٢ آب ٢٠٢٦ · قرية أليسار',
    locale: 'ar_LB',
  },
} as const

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function socialBlock(lang: 'en' | 'ar', url: string): string {
  const p = preview[lang]
  return [
    '<!-- SOCIAL:START -->',
    '<meta property="og:type" content="website" />',
    '<meta property="og:site_name" content="Elias &amp; Tamy" />',
    `<meta property="og:locale" content="${p.locale}" />`,
    `<meta property="og:title" content="${escape(p.title)}" />`,
    `<meta property="og:description" content="${escape(p.desc)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escape(p.title)}" />`,
    `<meta name="twitter:description" content="${escape(p.desc)}" />`,
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
          .replace(
            /<!-- SOCIAL:START[\s\S]*?SOCIAL:END -->/,
            socialBlock(lang, url),
          )
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
