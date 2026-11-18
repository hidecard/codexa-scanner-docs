import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { MODULES } from '@/lib/codexa-data'
import { ModuleDoc } from '@/components/codexa/module-doc'

export function generateStaticParams() {
  return MODULES.map((m) => ({ module: m.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ module: string }>
}): Promise<Metadata> {
  const { module: id } = await params
  const mod = MODULES.find((m) => m.id === id)
  if (!mod) return { title: 'Not found' }
  return {
    title: mod.name,
    description: mod.short,
  }
}

export default async function ModuleDocPage({
  params,
}: {
  params: Promise<{ module: string }>
}) {
  const { module: id } = await params
  const mod = MODULES.find((m) => m.id === id)
  if (!mod) notFound()

  return <ModuleDoc id={id} />
}
