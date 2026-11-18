'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Check, Info, ArrowRight, ArrowLeft, ListChecks } from 'lucide-react'
import { MODULES } from '@/lib/codexa-data'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

export function DocsBrowser() {
  const [activeId, setActiveId] = useState(MODULES[0].id)

  // Sync with URL hash so /features#web-audit deep-links into the docs.
  const syncFromHash = useCallback(() => {
    if (typeof window === 'undefined') return
    const raw = window.location.hash.replace('#', '')
    const match = MODULES.find((m) => m.id === raw)
    if (match) setActiveId(match.id)
  }, [])

  useEffect(() => {
    // Sync docs selection from URL hash on mount and on hashchange.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    syncFromHash()
    window.addEventListener('hashchange', syncFromHash)
    return () => window.removeEventListener('hashchange', syncFromHash)
  }, [syncFromHash])

  const selectModule = useCallback((id: string) => {
    setActiveId(id)
    // Update hash without causing a scroll jump (replaceState preserves position).
    if (typeof window !== 'undefined') {
      history.replaceState(null, '', `#${id}`)
    }
  }, [])

  const active = MODULES.find((m) => m.id === activeId) ?? MODULES[0]
  const activeIndex = MODULES.findIndex((m) => m.id === activeId)
  const prev = activeIndex > 0 ? MODULES[activeIndex - 1] : null
  const next =
    activeIndex < MODULES.length - 1 ? MODULES[activeIndex + 1] : null

  return (
    <section id="docs" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 dot-pattern opacity-25 mask-fade-b" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Documentation"
          title={
            <>
              Docs &amp; usage,{' '}
              <span className="text-primary">module by module</span>
            </>
          }
          description="Pick a module to read its overview, step-by-step usage, what it inspects, and the fine print. Every module follows the same bounded, authorization-first model."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[270px_1fr]">
          {/* sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-xl border border-border/60 bg-card/40 p-2">
              <p className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Modules
              </p>
              <ul className="custom-scroll flex gap-1 overflow-x-auto pb-1 lg:max-h-[480px] lg:flex-col lg:overflow-y-auto lg:pb-0">
                {MODULES.map((m) => {
                  const Icon = m.icon
                  const isActive = m.id === activeId
                  return (
                    <li key={m.id} className="shrink-0 lg:shrink">
                      <button
                        type="button"
                        onClick={() => selectModule(m.id)}
                        className={cn(
                          'group flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-sm transition-all',
                          isActive
                            ? 'bg-primary/10 text-foreground ring-1 ring-primary/30'
                            : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                        )}
                      >
                        <Icon
                          className={cn(
                            'h-4 w-4 shrink-0 transition-colors',
                            isActive ? 'text-primary' : 'text-muted-foreground'
                          )}
                        />
                        <span className="whitespace-nowrap font-medium lg:whitespace-normal">
                          {m.name}
                        </span>
                        <ChevronRight
                          className={cn(
                            'ml-auto hidden h-4 w-4 transition lg:block',
                            isActive
                              ? 'text-primary opacity-100'
                              : 'opacity-0 group-hover:opacity-50'
                          )}
                        />
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          </aside>

          {/* content */}
          <div className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.article
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden rounded-2xl border border-border/60 bg-card/60"
              >
                {/* header */}
                <div className="relative border-b border-border/60 bg-gradient-to-br from-primary/10 to-transparent p-6 sm:p-7">
                  <div
                    aria-hidden
                    className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl"
                  />
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                      <active.icon className="h-6 w-6 text-primary" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                        {active.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {active.short}
                      </p>
                    </div>
                  </div>
                </div>

                {/* body */}
                <div className="grid gap-7 p-6 sm:p-7 lg:grid-cols-2">
                  {/* overview + usage */}
                  <div className="flex flex-col gap-6">
                    <div>
                      <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        <span className="font-mono text-primary">›</span>
                        Overview
                      </h4>
                      <p className="text-sm leading-relaxed text-foreground/90">
                        {active.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        <span className="font-mono text-primary">›</span>
                        How to use
                      </h4>
                      <ol className="flex flex-col gap-2.5">
                        {active.usage.map((step, idx) => (
                          <li
                            key={step}
                            className="flex items-start gap-3 text-sm"
                          >
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-mono text-[10px] font-semibold text-primary">
                              {idx + 1}
                            </span>
                            <span className="leading-relaxed text-muted-foreground">
                              {step}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  {/* checks + notes */}
                  <div className="flex flex-col gap-6">
                    <div>
                      <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        <ListChecks className="h-3.5 w-3.5 text-primary" />
                        What it inspects
                      </h4>
                      <ul className="flex flex-col gap-2">
                        {active.checks.map((c) => (
                          <li
                            key={c}
                            className="flex items-start gap-2.5 rounded-lg border border-border/50 bg-muted/20 px-3 py-2 text-sm"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span className="leading-relaxed text-foreground/90">
                              {c}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {active.notes && (
                      <div className="rounded-lg border border-sky-500/30 bg-sky-500/[0.07] p-4">
                        <h4 className="mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-300">
                          <Info className="h-3.5 w-3.5" />
                          Good to know
                        </h4>
                        <p className="text-sm leading-relaxed text-sky-100/80">
                          {active.notes}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* prev / next */}
                <div className="flex flex-col gap-3 border-t border-border/60 bg-muted/20 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    onClick={() => prev && selectModule(prev.id)}
                    disabled={!prev}
                    className="group flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition enabled:hover:text-foreground disabled:opacity-30"
                  >
                    <ArrowLeft className="h-4 w-4 transition group-enabled:group-hover:-translate-x-0.5" />
                    <span className="flex flex-col items-start leading-tight">
                      <span className="text-[10px] uppercase tracking-wider">
                        Previous
                      </span>
                      <span className="font-medium">
                        {prev ? prev.name : '—'}
                      </span>
                    </span>
                  </button>
                  <span className="font-mono text-xs text-muted-foreground">
                    {activeIndex + 1} / {MODULES.length}
                  </span>
                  <button
                    type="button"
                    onClick={() => next && selectModule(next.id)}
                    disabled={!next}
                    className="group flex items-center justify-end gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition enabled:hover:text-foreground disabled:opacity-30"
                  >
                    <span className="flex flex-col items-end leading-tight">
                      <span className="text-[10px] uppercase tracking-wider">
                        Next
                      </span>
                      <span className="font-medium">
                        {next ? next.name : '—'}
                      </span>
                    </span>
                    <ArrowRight className="h-4 w-4 transition group-enabled:group-hover:translate-x-0.5" />
                  </button>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
