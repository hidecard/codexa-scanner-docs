import type { MetadataRoute } from 'next'

const BASE = 'https://github.com/hidecard/codexa-scanner'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  }
}
