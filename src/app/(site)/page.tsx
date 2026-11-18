import type { Metadata } from 'next'
import { Hero } from '@/components/codexa/hero'
import { Highlights } from '@/components/codexa/highlights'
import { ModuleTeaser } from '@/components/codexa/module-teaser'
import { InteractiveDemo } from '@/components/codexa/interactive-demo'
import { CtaBanner } from '@/components/codexa/cta-banner'

export const metadata: Metadata = {
  title: 'Codexa Scanner — Cross-Platform Network & Web Security Scanner',
  description:
    'Codexa Scanner is a cross-platform desktop app for network reconnaissance and HTTP security-header inspection. Built with Go, Wails, React and TypeScript. Available for Linux, Windows and macOS.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <ModuleTeaser />
      <InteractiveDemo />
      <CtaBanner />
    </>
  )
}
