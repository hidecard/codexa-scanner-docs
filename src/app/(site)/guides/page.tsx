import type { Metadata } from 'next'
import { GuidesIndexContent } from '@/components/codexa/guides-index-content'

export const metadata: Metadata = {
  title: 'Documentation',
  description:
    'Codexa Scanner documentation — getting started, per-module usage guides, build instructions, FAQ and the authorized-use notice.',
}

export default function GuidesIndexPage() {
  return <GuidesIndexContent />
}
