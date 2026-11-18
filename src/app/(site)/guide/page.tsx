import type { Metadata } from 'next'
import { HowItWorks } from '@/components/codexa/how-it-works'
import { QuickStart } from '@/components/codexa/quick-start'

export const metadata: Metadata = {
  title: 'Guide — Codexa Scanner',
  description:
    'How Codexa Scanner works: a layered React + Wails + Go architecture, the bounded authorization-first workflow, a quick-start guide, the tech stack and the authorized-use notice.',
}

export default function GuidePage() {
  return (
    <>
      <HowItWorks />
      <QuickStart />
    </>
  )
}
