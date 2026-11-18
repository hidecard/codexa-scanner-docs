import type { Metadata } from 'next'
import { AboutContent } from '@/components/codexa/about-content'

export const metadata: Metadata = {
  title: 'About — Codexa Scanner',
  description:
    'About Codexa Scanner: a cross-platform desktop network reconnaissance and HTTP security-header inspection app built with Go, Wails, React and TypeScript. Developed by H!D3-C4rD.',
}

export default function AboutPage() {
  return <AboutContent />
}
