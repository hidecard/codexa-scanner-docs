'use client'

import { motion } from 'framer-motion'
import { Monitor, ArrowRight, Boxes, ArrowLeft, Server } from 'lucide-react'
import { SectionHeading } from './section-heading'

const FLOW = [
  {
    icon: Monitor,
    label: 'React + TypeScript UI',
    detail:
      'Component-based frontend renders live scan results and calls Go methods exposed by Wails bindings.',
    side: 'left',
  },
  {
    icon: Boxes,
    label: 'Wails v2 Runtime',
    detail:
      'Cross-platform desktop bridge. Binds frontend methods to Go functions and ships native webview shells per OS.',
    side: 'center',
  },
  {
    icon: Server,
    label: 'Go Networking Engine',
    detail:
      'Bounded worker pools, DNS pinning, scoped HTTP clients, TLS validation and local SQLite history — all in Go.',
    side: 'right',
  },
]

const PRINCIPLES = [
  {
    title: 'Bounded by design',
    body: 'Every module uses capped concurrency, timeouts and bounded response reads to stay safe and predictable.',
  },
  {
    title: 'Authorization first',
    body: 'Each scan requires explicit confirmation for its exact target and range. Private/lab targets need a one-shot opt-in.',
  },
  {
    title: 'Passive & non-exploitative',
    body: 'Checks surface indicators for review — never proof of exploitability. Path discovery is HEAD-only with no bodies.',
  },
  {
    title: 'Local & private',
    body: 'History lives in a local SQLite file, auto-pruned to 2,000 records. Nothing is uploaded by the app.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative pt-28 pb-20 sm:pt-32 sm:pb-28">
      <div className="absolute inset-0 -z-10 dot-pattern opacity-30" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              A <span className="text-primary">layered</span> desktop architecture
            </>
          }
          description="The React UI talks to a Go backend through Wails bindings. The engine resolves, scopes and bounds every request before it ever leaves your machine."
        />

        {/* architecture flow */}
        <div className="mt-14">
          <div className="grid items-stretch gap-4 lg:grid-cols-3">
            {FLOW.map((node, i) => {
              const Icon = node.icon
              return (
                <motion.div
                  key={node.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: i * 0.12 }}
                  className="relative flex flex-col rounded-xl border border-border/60 bg-card/60 p-5"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/25 bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Layer {i + 1}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold">{node.label}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {node.detail}
                  </p>

                  {i < FLOW.length - 1 && (
                    <span className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-background text-primary lg:flex">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* request lifecycle note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="mt-4 flex items-center gap-3 rounded-xl border border-border/60 bg-muted/20 px-5 py-4 text-sm text-muted-foreground"
          >
            <ArrowLeft className="h-4 w-4 rotate-180 text-primary" />
            <span>
              <span className="font-medium text-foreground">Request lifecycle:</span>{' '}
              DNS resolves once → one deterministic address pinned → bounded worker pool streams results →
              findings saved to local SQLite with bounded redaction.
            </span>
          </motion.div>
        </div>

        {/* principles */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-border/50 bg-card/40 p-4"
            >
              <h4 className="text-sm font-semibold text-foreground">
                {p.title}
              </h4>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
