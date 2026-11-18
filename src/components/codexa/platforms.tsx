'use client'

import { motion } from 'framer-motion'
import { Check, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PLATFORMS } from '@/lib/codexa-data'
import { SectionHeading } from './section-heading'
import { useLanguage } from '@/components/i18n/language-provider'
import { useT } from '@/components/i18n/language-provider'
import { ls } from '@/lib/i18n/local-string'
import type { LocalString } from '@/lib/i18n/local-string'

const ACCENTS: Record<string, string> = {
  emerald:
    'border-emerald-500/30 bg-emerald-500/10 text-emerald-400 group-hover:border-emerald-500/50',
  amber:
    'border-amber-500/30 bg-amber-500/10 text-amber-400 group-hover:border-amber-500/50',
  sky: 'border-sky-500/30 bg-sky-500/10 text-sky-400 group-hover:border-sky-500/50',
}

const EYEBROW: LocalString = { en: 'Cross-platform', my: 'ခရိုစ်-ပလက်ဖောင်း' }
const TITLE_PRE: LocalString = { en: 'One app, ', my: 'App တစ်ခု၊ ' }
const TITLE_HL: LocalString = { en: 'every desktop', my: 'desktop တိုင်း' }
const DESC: LocalString = {
  en: 'Built on Wails v2, Codexa Scanner ships native builds for Linux, Windows and macOS — including separate Intel and Apple Silicon DMGs.',
  my: 'Wails v2 ပေါ်မှာတည်ဆောက်၊ Codexa Scanner က Linux, Windows, macOS အတွက် native build တွေထုတ်တယ် — Intel နဲ့ Apple Silicon DMG တွေကိုလည်း ခွဲထုတ်တယ်။',
}
const FOOTER_NOTE: LocalString = {
  en: 'macOS DMGs are unsigned & not notarized. Use Finder → Open the first time if Gatekeeper blocks the launch.',
  my: 'macOS DMG တွေက unsigned + notarize မလုပ်ထားပါ။ Gatekeeper တားရင် ပထမဆုံး Finder → Open နဲ့ဖွင့်ပါ။',
}

export function Platforms() {
  const { locale } = useLanguage()
  const t = useT()
  const overview = [
    PLATFORMS.find((p) => p.os === 'Linux')!,
    PLATFORMS.find((p) => p.os === 'Windows')!,
    PLATFORMS.find((p) => p.os === 'macOS')!,
  ]

  return (
    <section id="platforms" className="relative pt-28 pb-20 sm:pt-32 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={ls(EYEBROW, locale)}
          title={
            <>
              {ls(TITLE_PRE, locale)}
              <span className="text-primary">{ls(TITLE_HL, locale)}</span>
            </>
          }
          description={ls(DESC, locale)}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {overview.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-card"
              >
                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl border transition ${ACCENTS[p.accent]}`}
                >
                  <Icon className="h-7 w-7" />
                </div>

                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {p.os}
                  </h3>
                  <span className="rounded-md border border-border/60 bg-muted/40 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                    {p.arch}
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {ls(p.size, locale)} · {p.format}
                </p>

                <ul className="mt-5 flex flex-1 flex-col gap-2">
                  {p.install.slice(0, 3).map((step, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{ls(step, locale)}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="mt-6 w-full">
                  <a href={p.url} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    {t('common.download')} {p.format}
                  </a>
                </Button>
              </motion.div>
            )
          })}
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          {ls(FOOTER_NOTE, locale)}
        </p>
      </div>
    </section>
  )
}
