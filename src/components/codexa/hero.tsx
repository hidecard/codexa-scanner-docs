'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, Download, ShieldCheck, Terminal, Cpu, Layers, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { PROJECT, STATS } from '@/lib/codexa-data'
import { AppMockup } from './app-mockup'
import { useT } from '@/components/i18n/language-provider'
import type { DictKey } from '@/lib/i18n/dictionary'

const PLATFORM_BADGES = [
  { icon: Terminal, label: 'Linux' },
  { icon: Cpu, label: 'Windows' },
  { icon: Layers, label: 'macOS' },
]

const STAT_LABEL: Record<string, DictKey> = {
  Platforms: 'hero.platforms',
  Modules: 'hero.modules',
  Version: 'hero.version',
  License: 'hero.license',
}

export function Hero() {
  const t = useT()
  return (
    <section id="top" className="relative overflow-hidden pt-24 sm:pt-28">
      {/* background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-pattern opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute left-1/2 top-[-10%] h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          {/* left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            <Badge
              variant="outline"
              className="mb-5 gap-1.5 border-primary/30 bg-primary/10 px-3 py-1 text-primary"
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              <span className="font-mono text-[11px]">{PROJECT.version}</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-[11px] font-medium text-muted-foreground">
                {t('hero.latest')}
              </span>
            </Badge>

            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-glow text-primary">Codexa</span>{' '}
              <span className="text-foreground">Scanner</span>
            </h1>

            <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
              {t('hero.desc')}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {PLATFORM_BADGES.map((p) => {
                const Icon = p.icon
                return (
                  <span
                    key={p.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    <Icon className="h-3.5 w-3.5 text-primary" />
                    {p.label}
                  </span>
                )
              })}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 px-6">
                <Link href="/download">
                  <Download className="mr-2 h-4 w-4" />
                  {t('hero.downloadFree')}
                </Link>
              </Button>
              <Button asChild size="lg" className="h-12 px-6">
                <Link href="/features">
                  {t('hero.exploreFeatures')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 px-6"
              >
                <a href={PROJECT.repo} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  {t('hero.viewGithub')}
                </a>
              </Button>
            </div>

            {/* stats */}
            <dl className="mt-10 grid w-full max-w-lg grid-cols-2 gap-px overflow-hidden rounded-xl border border-border/60 bg-border/60 sm:grid-cols-4">
              {STATS.map((s) => {
                const labelKey = STAT_LABEL[s.label] ?? 'hero.platforms'
                const value =
                  s.value === 'Open Source' ? t('hero.openSource') : s.value
                return (
                  <div key={s.label} className="bg-card/80 px-4 py-3">
                    <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      {t(labelKey)}
                    </dt>
                    <dd className="mt-0.5 text-lg font-semibold text-foreground">
                      {value}
                    </dd>
                  </div>
                )
              })}
            </dl>
          </motion.div>

          {/* right: mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <AppMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
