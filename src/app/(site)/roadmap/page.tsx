import type { Metadata } from 'next'
import { RoadmapContent } from '@/components/codexa/roadmap-content'

export const metadata: Metadata = {
  title: 'Roadmap — Codexa Scanner',
  description:
    'Directions under consideration for Codexa Scanner — planned and considering items. Community suggestions, not commitments.',
}

export default function RoadmapPage() {
  return <RoadmapContent />
}
