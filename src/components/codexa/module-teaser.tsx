'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { MODULES } from '@/lib/codexa-data'
import { SectionHeading } from './section-heading'

export function ModuleTeaser() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 dot-pattern opacity-30 mask-fade-b" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Modules"
          title={
            <>
              A complete <span className="text-primary">recon toolchain</span>
            </>
          }
          description="Eight bounded modules cover discovery, inspection and reporting — each with its own documentation and usage guide."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((m, i) => {
            const Icon = m.icon
            return (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.07 }}
              >
                <Link
                  href={`/guides/${m.id}`}
                  className="group flex h-full flex-col rounded-xl border border-border/60 bg-card/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/25 bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  <h3 className="text-sm font-semibold">{m.name}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {m.short}
                  </p>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/guides"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-muted/40 px-4 py-2 text-sm font-medium text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
          >
            Browse all modules &amp; docs
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
