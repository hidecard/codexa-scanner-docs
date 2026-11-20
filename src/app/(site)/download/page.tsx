import type { Metadata } from 'next'
import { Platforms } from '@/components/codexa/platforms'
import { Downloads } from '@/components/codexa/downloads'

export const metadata: Metadata = {
  title: 'Download — Codexa Scanner',
  description:
    'Download Codexa Scanner v1.1.5 for Linux (.deb), Windows (.exe) and macOS (.dmg for Intel & Apple Silicon). Includes install steps and build-from-source instructions.',
}

export default function DownloadPage() {
  return (
    <>
      <Platforms />
      <Downloads />
    </>
  )
}
