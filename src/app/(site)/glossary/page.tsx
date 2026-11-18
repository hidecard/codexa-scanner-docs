import type { Metadata } from 'next'
import { GlossaryContent } from '@/components/codexa/glossary-content'

export const metadata: Metadata = {
  title: 'Glossary — Codexa Scanner',
  description:
    'Security and networking terms used across Codexa Scanner docs — CSP, TLS, RDAP, Certificate Transparency, RFC1918, DMARC and more.',
}

export default function GlossaryPage() {
  return <GlossaryContent />
}
