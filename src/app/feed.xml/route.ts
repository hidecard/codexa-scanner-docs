import { RELEASES } from '@/lib/changelog'

const BASE = 'https://github.com/hidecard/codexa-scanner'

function esc(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const updated = RELEASES[0]?.date ?? new Date().toISOString()

  const items = RELEASES.map((r) => {
    const title = `Codexa Scanner ${r.version}`
    const summary = r.summary.en
    const highlights = r.highlights.map((h) => `<li>${esc(h.en)}</li>`).join('')
    const url = `${BASE}/releases/tag/${r.tag}`
    return `    <item>
      <title>${esc(title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(r.date).toUTCString()}</pubDate>
      <description>${esc(summary)}</description>
      <content:encoded><![CDATA[<p>${esc(summary)}</p><ul>${highlights}</ul>]]></content:encoded>
    </item>`
  }).join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Codexa Scanner Releases</title>
    <link>${BASE}/releases</link>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Release history for Codexa Scanner — cross-platform network and web security scanner.</description>
    <language>en</language>
    <lastBuildDate>${new Date(updated).toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
