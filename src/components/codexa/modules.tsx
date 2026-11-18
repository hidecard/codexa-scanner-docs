'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { MODULES } from '@/lib/codexa-data'
import { SectionHeading } from './section-heading'

export function Modules() {
  return (
    <section id="features" className="relative pt-28 pb-20 sm:pt-32 sm:pb-28">
      <div className="absolute inset-0 -z-10 dot-pattern opacity-40 mask-fade-b" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Capabilities"
          title={
            <>
              Eight modules, one{' '}
              <span className="text-primary">unified scanner</span>
            </>
          }
          description="From live port discovery to passive web-audit and TLS inspection, Codexa Scanner brings the reconnaissance toolchain together in a single cross-platform desktop app."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((mod, i) => {
            const Icon = mod.icon
            return (
              <motion.article
                key={mod.id}
                id={mod.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card"
              >
                <div
                  aria-hidden
                  className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0"
                />
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-primary/25 bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold tracking-tight">
                  {mod.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {mod.short}
                </p>

                <div
                  className="mt-4 max-h-0 overflow-hidden text-sm text-muted-foreground opacity-0 transition-all duration-300 group-hover:max-h-44 group-hover:opacity-100"
                  aria-hidden
                >
                  <p className="leading-relaxed">{mod.description}</p>
                </div>

                <ul className="mt-4 flex flex-col gap-1.5">
                  {mod.bullets.slice(0, 2).map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-xs text-muted-foreground"
                    >
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                      <span className="leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
