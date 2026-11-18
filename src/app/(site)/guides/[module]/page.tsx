import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { MODULES } from '@/lib/codexa-data'
import { GUIDE_ARTICLES } from '@/lib/guide-articles'
import { ModuleDoc } from '@/components/codexa/module-doc'
import { ArticleDoc } from '@/components/codexa/article-doc'

export function generateStaticParams() {
  return [...MODULES, ...GUIDE_ARTICLES].map((m) => ({ module: m.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ module: string }>
}): Promise<Metadata> {
  const { module: id } = await params
  const mod = MODULES.find((m) => m.id === id)
  if (mod) return { title: mod.name, description: mod.short.en }
  const article = GUIDE_ARTICLES.find((a) => a.id === id)
  if (article) return { title: article.name, description: article.short.en }
  return { title: 'Not found' }
}

export default async function GuideDocPage({
  params,
}: {
  params: Promise<{ module: string }>
}) {
  const { module: id } = await params

  if (MODULES.some((m) => m.id === id)) {
    return <ModuleDoc id={id} />
  }
  if (GUIDE_ARTICLES.some((a) => a.id === id)) {
    return <ArticleDoc id={id} />
  }
  notFound()
}
