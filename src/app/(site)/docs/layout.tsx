import type { Metadata } from 'next'
import { DocsChrome } from '@/components/codexa/docs-chrome'

export const metadata: Metadata = {
  title: {
    default: 'Documentation — Codexa Scanner',
    template: '%s — Codexa Scanner Docs',
  },
  description:
    'Codexa Scanner documentation — usage guides for every module: Port Scanner, Web Audit, Subdomain Discovery, Path Fuzzer, TLS Inspector, DNS Intelligence, IP Information and History & Reports.',
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <DocsChrome>{children}</DocsChrome>
}
