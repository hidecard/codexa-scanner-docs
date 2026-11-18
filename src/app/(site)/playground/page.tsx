import type { Metadata } from 'next'
import { PlaygroundContent } from '@/components/codexa/playground-content'

export const metadata: Metadata = {
  title: 'Playground — Codexa Scanner',
  description:
    'Interactive simulated demos of the Port Scanner, Web Audit and TLS Inspector modules — no real network requests.',
}

export default function PlaygroundPage() {
  return <PlaygroundContent />
}
