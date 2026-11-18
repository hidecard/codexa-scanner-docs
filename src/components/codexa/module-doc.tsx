'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Check,
  Info,
  ArrowRight,
  ArrowLeft,
  ListChecks,
  Terminal,
} from 'lucide-react'
import { MODULES } from '@/lib/codexa-data'
import { TableOfContents } from './table-of-contents'
import { useT, useLanguage } from '@/components/i18n/language-provider'
import { ls } from '@/lib/i18n/local-string'

export function ModuleDoc({ id }: { id: string }) {
  const t = useT()
  const { locale } = useLanguage()
  const index = MODULES.findIndex((m) => m.id === id)
  if (index === -1) return null
  const active = MODULES[index]
  const prev = index > 0 ? MODULES[index - 1] : null
  const next = index < MODULES.length - 1 ? MODULES[index + 1] : null
  const Icon = active.icon

  const tocItems = [
    { id: 'overview', label: t('common.overview') },
    { id: 'how-to-use', label: t('common.howToUse') },
    { id: 'what-it-inspects', label: t('common.whatItInspects') },
    ...(active.notes ? [{ id: 'good-to-know', label: t('common.goodToKnow') }] : []),
  ]

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
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {active.name}
              </h1>
              <p className="mt-1.5 text-sm text-muted-foreground sm:text-base">
                {ls(active.short, locale)}
              </p>
            </div>
          </div>
        </div>

        {/* sections */}
        <div className="mt-8 flex flex-col gap-10">
          {/* overview */}
          <section id="overview" className="scroll-mt-24">
            <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold">
              <span className="font-mono text-primary">›</span>
              {t('common.overview')}
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-foreground/90 sm:text-base">
              {ls(active.description, locale)}
            </p>
          </section>

          {/* how to use */}
          <section id="how-to-use" className="scroll-mt-24">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <Terminal className="h-4 w-4 text-primary" />
              {t('common.howToUse')}
            </h2>
            <ol className="flex max-w-3xl flex-col gap-3">
              {active.usage.map((step, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 rounded-lg border border-border/50 bg-muted/20 p-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-mono text-[11px] font-semibold text-primary">
                    {idx + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {ls(step, locale)}
                  </span>
                </li>
              ))}
            </ol>
          </section>

          {/* what it inspects */}
          <section id="what-it-inspects" className="scroll-mt-24">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <ListChecks className="h-4 w-4 text-primary" />
              {t('common.whatItInspects')}
            </h2>
            <ul className="grid max-w-3xl gap-2 sm:grid-cols-2">
              {active.checks.map((c, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 rounded-lg border border-border/50 bg-card/40 p-3 text-sm"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="leading-relaxed text-foreground/90">{ls(c, locale)}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* good to know */}
          {active.notes && (
            <section id="good-to-know" className="scroll-mt-24">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                <Info className="h-4 w-4 text-primary" />
                {t('common.goodToKnow')}
              </h2>
              <div className="max-w-3xl rounded-lg border border-sky-500/30 bg-sky-500/[0.07] p-4">
                <p className="text-sm leading-relaxed text-sky-100/80 sm:text-base">
                  {ls(active.notes, locale)}
                </p>
              </div>
            </section>
          )}
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
