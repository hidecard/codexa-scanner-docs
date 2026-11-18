import type { Metadata } from 'next'
import { ContributingContent } from '@/components/codexa/contributing-content'

export const metadata: Metadata = {
  title: 'Contributing — Codexa Scanner',
  description:
    'Contribute to Codexa Scanner — prerequisites, build, development, testing, code style, branches and pull requests.',
}

export default function ContributingPage() {
  return <ContributingContent />
}
