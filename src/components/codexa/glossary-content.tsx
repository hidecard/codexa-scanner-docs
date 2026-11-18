'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Search, BookA } from 'lucide-react'
import { GLOSSARY } from '@/lib/glossary'
import { useLanguage } from '@/components/i18n/language-provider'
import { ls } from '@/lib/i18n/local-string'
import type { LocalString } from '@/lib/i18n/local-string'

const EYEBROW: LocalString = { en: 'Reference', my: 'ကိုးကား' }
const TITLE: LocalString = { en: 'Glossary', my: 'အသုံးအနှုန်း အဘိဓာန်' }
const DESC: LocalString = {
  en: 'Key security and networking terms used across the docs — search to filter.',
  my: 'Docs တွေမှာသုံးတဲ့ security + networking အသုံးအနှုန်းအဓိာက်တွေ — ရှာဖွေကာစစ်ထုတ်လို့ရတယ်။',
}
const PLACEHOLDER: LocalString = { en: 'Filter terms…', my: 'အသုံးအနှုန်းစစ်ထုတ်…' }
const EMPTY: LocalString = { en: 'No matching terms.', my: 'ကိုက်ညီတဲ့ အသုံးအနှုန်းမရှိပါ။' }

export function GlossaryContent() {
  const { locale } = useLanguage()
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return GLOSSARY
    return GLOSSARY.filter((t) =>
      `${t.term} ${t.definition.en} ${t.definition.my}`
        .toLowerCase()
        .includes(q)
    )
  }, [query])

  const categories = useMemo(() => {
    const map = new Map<string, typeof GLOSSARY>()
    for (const t of filtered) {
      const cat = ls(t.category, locale)
      if (!map.has(cat)) map.set(cat, [])
      map.get(cat)!.push(t)
    }
    return Array.from(map.entries())
  }, [filtered, locale])

  return (
    <div className="pt-28 pb-20 sm:pt-32 sm:pb-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-[260px] bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <BookA className="h-4 w-4 text-primary" />
            {ls(EYEBROW, locale)}
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {ls(TITLE, locale)}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
            {ls(DESC, locale)}
          </p>

          {/* search */}
          <div className="mt-6 flex items-center gap-2 rounded-lg border border-border/60 bg-background/60 px-3 py-2.5">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={ls(PLACEHOLDER, locale)}
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              aria-label={ls(PLACEHOLDER, locale)}
            />
            <kbd className="rounded border border-border/60 bg-muted/40 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
              {filtered.length}
            </kbd>
          </div>
        </motion.div>

        {/* results */}
        <div className="mt-10 flex flex-col gap-10">
          {categories.length === 0 && (
            <p className="text-sm text-muted-foreground">{ls(EMPTY, locale)}</p>
          )}
          {categories.map(([cat, terms]) => (
            <section key={cat}>
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-primary">
                {cat}
              </h2>
              <dl className="grid gap-3 sm:grid-cols-2">
                {terms.map((t) => (
                  <div
                    key={t.term}
                    className="rounded-xl border border-border/60 bg-card/60 p-4"
                  >
                    <dt className="text-sm font-semibold">{t.term}</dt>
                    <dd className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {ls(t.definition, locale)}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
