'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Info, ShieldAlert } from 'lucide-react'
import { GUIDE_ARTICLES, type DocBlock } from '@/lib/guide-articles'
import { TableOfContents } from './table-of-contents'
import { CopyBlock } from './copy-block'
import { useT, useLanguage } from '@/components/i18n/language-provider'
import { ls } from '@/lib/i18n/local-string'
import type { Locale } from '@/lib/i18n/dictionary'

function Block({ block, locale }: { block: DocBlock; locale: Locale }) {
  switch (block.kind) {
    case 'paragraph':
      return (
        <p className="max-w-3xl text-sm leading-relaxed text-foreground/90 sm:text-base">
          {ls(block.text, locale)}
        </p>
      )
    case 'list':
      return (
        <ul className="flex max-w-3xl flex-col gap-2">
          {block.items.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2.5 rounded-lg border border-border/50 bg-muted/20 p-3 text-sm sm:text-base"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span className="leading-relaxed text-foreground/90">
                {ls(item, locale)}
              </span>
            </li>
          ))}
        </ul>
      )
    case 'code':
      return (
        <div className="max-w-3xl">
          <CopyBlock code={block.code} />
        </div>
      )
    case 'callout': {
      const isWarning = block.tone === 'warning'
      return (
        <div
          className={`max-w-3xl rounded-lg border p-4 ${
            isWarning
              ? 'border-amber-500/30 bg-amber-500/[0.07]'
              : 'border-sky-500/30 bg-sky-500/[0.07]'
          }`}
        >
          {block.title && (
            <h4
              className={`mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${
                isWarning ? 'text-amber-300' : 'text-sky-300'
              }`}
            >
              {isWarning ? (
                <ShieldAlert className="h-3.5 w-3.5" />
              ) : (
                <Info className="h-3.5 w-3.5" />
              )}
              {ls(block.title, locale)}
            </h4>
          )}
          <p
            className={`text-sm leading-relaxed sm:text-base ${
              isWarning ? 'text-amber-100/80' : 'text-sky-100/80'
            }`}
          >
            {ls(block.text, locale)}
          </p>
        </div>
      )
    }
    default:
      return null
  }
}

export function ArticleDoc({ id }: { id: string }) {
  const t = useT()
  const { locale } = useLanguage()
  const index = GUIDE_ARTICLES.findIndex((a) => a.id === id)
  if (index === -1) return null
  const active = GUIDE_ARTICLES[index]
  const prev = index > 0 ? GUIDE_ARTICLES[index - 1] : null
  const next =
    index < GUIDE_ARTICLES.length - 1 ? GUIDE_ARTICLES[index + 1] : null
  const Icon = active.icon

  const tocItems = active.sections.map((s) => ({
    id: s.id,
    label: ls(s.title, locale),
  }))

  return (
    <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_200px] xl:gap-10">
      <article className="min-w-0">
        {/* breadcrumb */}
        <nav className="mb-6 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Link href="/guides" className="transition-colors hover:text-foreground">
            {t('common.docs')}
          </Link>
          <span className="opacity-50">/</span>
          <span className="text-foreground">{active.name}</span>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          {/* header */}
          <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-primary/10 to-transparent p-6 sm:p-7">
            <div
              aria-hidden
              className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl"
            />
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </span>
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                  {active.category}
                </p>
                <h1 className="mt-0.5 text-2xl font-bold tracking-tight sm:text-3xl">
                  {active.name}
                </h1>
              </div>
            </div>
            <p className="mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
              {ls(active.intro, locale)}
            </p>
          </div>

          {/* sections */}
          <div className="mt-8 flex flex-col gap-10">
            {active.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                  <span className="font-mono text-primary">›</span>
                  {ls(section.title, locale)}
                </h2>
                <div className="flex flex-col gap-4">
                  {section.blocks.map((block, i) => (
                    <Block key={i} block={block} locale={locale} />
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* prev / next */}
          <div className="mt-12 grid gap-3 border-t border-border/60 pt-6 sm:grid-cols-2">
            {prev ? (
              <Link
                href={`/guides/${prev.id}`}
                className="group flex flex-col rounded-xl border border-border/60 bg-card/40 p-4 transition hover:border-primary/40 hover:bg-card"
              >
                <span className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-muted-foreground">
                  <ArrowLeft className="h-3 w-3 transition group-hover:-translate-x-0.5" />
                  {t('common.previous')}
                </span>
                <span className="mt-1 flex items-center gap-2 text-sm font-semibold">
                  <prev.icon className="h-4 w-4 text-primary" />
                  {prev.name}
                </span>
              </Link>
            ) : (
              <span className="hidden sm:block" />
            )}
            {next ? (
              <Link
                href={`/guides/${next.id}`}
                className="group flex flex-col items-end rounded-xl border border-border/60 bg-card/40 p-4 text-right transition hover:border-primary/40 hover:bg-card sm:items-end"
              >
                <span className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-muted-foreground">
                  {t('common.next')}
                  <ArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5" />
                </span>
                <span className="mt-1 flex items-center gap-2 text-sm font-semibold">
                  {next.name}
                  <next.icon className="h-4 w-4 text-primary" />
                </span>
              </Link>
            ) : (
              <span className="hidden sm:block" />
            )}
          </div>
        </motion.div>
      </article>

      {/* TOC — sticky on xl */}
      <aside className="hidden xl:sticky xl:top-28 xl:block xl:self-start">
        <div className="rounded-xl border border-border/50 bg-muted/20 p-4">
          <TableOfContents sections={tocItems} />
        </div>
      </aside>
    </div>
  )
}
