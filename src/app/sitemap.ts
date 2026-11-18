import type { MetadataRoute } from 'next'
import { MODULES } from '@/lib/codexa-data'
import { GUIDE_ARTICLES } from '@/lib/guide-articles'

const BASE = 'https://github.com/hidecard/codexa-scanner'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const staticRoutes = [
    '',
    '/features',
    '/download',
    '/guide',
    '/about',
    '/changelog',
    '/guides',
  ]

  const entries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.8,
  }))

  // docs pages (modules + articles)
  const docs = [...MODULES, ...GUIDE_ARTICLES]
  docs.forEach((d) => {
    entries.push({
      url: `${BASE}/guides/${d.id}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    })
  })

  return entries
}
