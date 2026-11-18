import type { Metadata } from 'next'
import { ChangelogContent } from '@/components/codexa/changelog-content'

export const metadata: Metadata = {
  title: 'Changelog — Codexa Scanner',
  description:
    'Release history for Codexa Scanner — from v1.0.0 to the latest v1.1.4, including macOS DMG builds, recon modules and remediation guidance.',
}

export default function ChangelogPage() {
  return <ChangelogContent />
}
