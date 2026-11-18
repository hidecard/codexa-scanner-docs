import type { Metadata } from 'next'
import { Modules } from '@/components/codexa/modules'
import { DocsBrowser } from '@/components/codexa/docs-browser'

export const metadata: Metadata = {
  title: 'Features & Documentation — Codexa Scanner',
  description:
    'Explore all eight Codexa Scanner modules — Port Scanner, Web Audit, Subdomain Discovery, Path Fuzzer, TLS Inspector, DNS Intelligence, IP Information and History & Reports — with step-by-step usage and documentation.',
}

export default function FeaturesPage() {
  return (
    <>
      <Modules />
      <DocsBrowser />
    </>
  )
}
