'use client'

import { motion } from 'framer-motion'
import { Check, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PLATFORMS } from '@/lib/codexa-data'
import { SectionHeading } from './section-heading'

const ACCENTS: Record<string, string> = {
  emerald:
    'border-emerald-500/30 bg-emerald-500/10 text-emerald-400 group-hover:border-emerald-500/50',
  amber:
    'border-amber-500/30 bg-amber-500/10 text-amber-400 group-hover:border-amber-500/50',
  sky: 'border-sky-500/30 bg-sky-500/10 text-sky-400 group-hover:border-sky-500/50',
}

export function Platforms() {
  // dedupe by OS for the overview cards (show one card per OS)
  const overview = [
    PLATFORMS.find((p) => p.os === 'Linux')!,
    PLATFORMS.find((p) => p.os === 'Windows')!,
    PLATFORMS.find((p) => p.os === 'macOS')!,
  ]

  return (
    <section id="platforms" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Cross-platform"
          title={
            <>
              One app, <span className="text-primary">every desktop</span>
            </>
          }
          description="Built on Wails v2, Codexa Scanner ships native builds for Linux, Windows and macOS — including separate Intel and Apple Silicon DMGs."
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
                  {p.size} · {p.format}
                </p>

                <ul className="mt-5 flex flex-1 flex-col gap-2">
                  {p.install.slice(0, 3).map((step) => (
                    <li
                      key={step}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="mt-6 w-full">
                  <a href={p.url} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Download {p.format}
                  </a>
                </Button>
              </motion.div>
            )
          })}
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          macOS DMGs are unsigned &amp; not notarized. Use{' '}
          <span className="font-medium text-foreground">
            Finder → Open
          </span>{' '}
          the first time if Gatekeeper blocks the launch.
        </p>
      </div>
    </section>
  )
}
