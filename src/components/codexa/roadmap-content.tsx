'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Compass } from 'lucide-react'
import { ROADMAP, type RoadmapStatus } from '@/lib/roadmap'
import { useLanguage } from '@/components/i18n/language-provider'
import { ls } from '@/lib/i18n/local-string'
import type { LocalString } from '@/lib/i18n/local-string'

const EYEBROW: LocalString = { en: 'Roadmap', my: 'Roadmap' }
const TITLE: LocalString = { en: 'What might come next', my: 'နောက်မှာဘာတွေလာမလဲ' }
const DESC: LocalString = {
  en: 'Directions under consideration. These are community suggestions, not commitments — priorities can change.',
  my: 'စဉ်းစားနေတဲ့အရာတွေ။ ဒါတွေက community suggestion တွေသာ၊ ကတိမဟုတ် — ဦးစားပေးတွေပြောင်းနိုင်တယ်။',
}
const COL_PLANNED: LocalString = { en: 'Planned', my: 'Planned' }
const COL_CONSIDERING: LocalString = { en: 'Considering', my: 'Considering' }
const NOTE: LocalString = {
  en: 'Have a suggestion? Open an issue on GitHub.',
  my: 'အကြံပြုချင်ရင်? GitHub မှာ issue ဖွင့်ပါ။',
}

export function RoadmapContent() {
  const { locale } = useLanguage()
  const planned = ROADMAP.filter((i) => i.status === 'planned')
  const considering = ROADMAP.filter((i) => i.status === 'considering')

  const col = (status: RoadmapStatus, items: typeof ROADMAP, title: LocalString, icon: any) => {
    const Icon = icon
    return (
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4 text-primary" />
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {ls(title, locale)} <span className="text-muted-foreground/60">· {items.length}</span>
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border border-border/60 bg-card/60 p-4"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-semibold">{ls(item.title, locale)}</h3>
                <span className="shrink-0 rounded border border-border/60 bg-muted/40 px-1.5 py-0.5 text-[10px] text-muted-foreground">
                  {ls(item.category, locale)}
                </span>
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                {ls(item.desc, locale)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="pt-28 pb-20 sm:pt-32 sm:pb-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-[260px] bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Compass className="h-4 w-4 text-primary" />
            {ls(EYEBROW, locale)}
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {ls(TITLE, locale)}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
            {ls(DESC, locale)}
          </p>
        </motion.div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {col('planned', planned, COL_PLANNED, Lightbulb)}
          {col('considering', considering, COL_CONSIDERING, Compass)}
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          {ls(NOTE, locale)}
        </p>
      </div>
    </div>
  )
}
