'use client'

import { motion } from 'framer-motion'
import { MonitorSmartphone, Boxes, ShieldCheck, Database } from 'lucide-react'

const HIGHLIGHTS = [
  {
    icon: MonitorSmartphone,
    title: 'Truly cross-platform',
    body: 'Native builds for Linux, Windows and macOS — including separate Intel & Apple Silicon DMGs. One app, every desktop.',
  },
  {
    icon: Boxes,
    title: 'Eight modules in one',
    body: 'Port scanning, web audit, subdomain discovery, path fuzzing, TLS, DNS, IP intel and history — a full recon toolchain.',
  },
  {
    icon: ShieldCheck,
    title: 'Bounded & authorization-first',
    body: 'Every scan requires explicit confirmation. Capped concurrency, timeouts and passive, non-exploitative checks throughout.',
  },
  {
    icon: Database,
    title: 'Local & private',
    body: 'History lives in a local SQLite file, auto-pruned and never uploaded. Bounded redaction on stored data and exports.',
  },
]

export function Highlights() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((h, i) => {
            const Icon = h.icon
            return (
              <motion.div
                key={h.title}
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
                  {h.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {h.body}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
