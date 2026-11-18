'use client'

import { motion } from 'framer-motion'
import { MonitorSmartphone, Boxes, ShieldCheck, Database } from 'lucide-react'
import { useT } from '@/components/i18n/language-provider'
import type { DictKey } from '@/lib/i18n/dictionary'

const HIGHLIGHTS: { icon: any; titleKey: DictKey; bodyKey: DictKey }[] = [
  { icon: MonitorSmartphone, titleKey: 'highlights.cross.title', bodyKey: 'highlights.cross.body' },
  { icon: Boxes, titleKey: 'highlights.eight.title', bodyKey: 'highlights.eight.body' },
  { icon: ShieldCheck, titleKey: 'highlights.bounded.title', bodyKey: 'highlights.bounded.body' },
  { icon: Database, titleKey: 'highlights.local.title', bodyKey: 'highlights.local.body' },
]

export function Highlights() {
  const t = useT()
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col gap-3"
        >
          <span className="font-mono text-[11px] uppercase tracking-wider text-primary">
            {t('highlights.eyebrow')}
          </span>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            {t('highlights.title').split(t('highlights.titleHighlight'))[0]}
            <span className="text-primary">{t('highlights.titleHighlight')}</span>
            {t('highlights.title').split(t('highlights.titleHighlight'))[1]}
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((h, i) => {
            const Icon = h.icon
            return (
              <motion.div
                key={h.titleKey}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-xl border border-border/60 bg-card/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card"
              >
                <div
                  aria-hidden
                  className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-primary/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-primary/25 bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold tracking-tight">
                  {t(h.titleKey)}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {t(h.bodyKey)}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
