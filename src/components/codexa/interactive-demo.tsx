'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Play,
  RotateCcw,
  Cpu,
  Loader2,
  CheckCircle2,
  Ban,
  Filter,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SectionHeading } from './section-heading'

type Phase = 'idle' | 'resolving' | 'pinned' | 'scanning' | 'done'

type PortRow = {
  port: string
  service: string
  status: 'open' | 'filtered' | 'closed'
}

const TARGET = 'scanme.example.org'
const PINNED = '93.184.216.34'

const PORTS: PortRow[] = [
  { port: '22', service: 'ssh', status: 'open' },
  { port: '53', service: 'dns', status: 'open' },
  { port: '80', service: 'http', status: 'open' },
  { port: '443', service: 'https', status: 'open' },
  { port: '3306', service: 'mysql', status: 'filtered' },
  { port: '3389', service: 'rdp', status: 'filtered' },
  { port: '8080', service: 'http-alt', status: 'open' },
  { port: '8443', service: 'https-alt', status: 'filtered' },
  { port: '21', service: 'ftp', status: 'closed' },
  { port: '25', service: 'smtp', status: 'closed' },
  { port: '5432', service: 'postgres', status: 'closed' },
  { port: '6379', service: 'redis', status: 'closed' },
]

const STATUS_STYLE = {
  open: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  filtered: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
  closed: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
} as const

const STATUS_ICON = {
  open: CheckCircle2,
  filtered: Filter,
  closed: Ban,
} as const

export function InteractiveDemo() {
  const [phase, setPhase] = useState<Phase>('idle')
  const [revealed, setRevealed] = useState(0)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout)
    timers.current = []
  }, [])

  useEffect(() => () => clearTimers(), [clearTimers])

  const addTimer = (fn: () => void, ms: number) => {
    timers.current.push(setTimeout(fn, ms))
  }

  const runScan = () => {
    clearTimers()
    setRevealed(0)
    setPhase('resolving')

    addTimer(() => setPhase('pinned'), 900)
    addTimer(() => setPhase('scanning'), 1500)

    // reveal ports sequentially
    PORTS.forEach((_, i) => {
      addTimer(() => setRevealed(i + 1), 1500 + (i + 1) * 320)
    })
    const total = 1500 + PORTS.length * 320 + 200
    addTimer(() => setPhase('done'), total)
  }

  const reset = () => {
    clearTimers()
    setPhase('idle')
    setRevealed(0)
  }

  const progress =
    phase === 'done' ? 100 : Math.round((revealed / PORTS.length) * 100)

  const openCount = PORTS.slice(0, revealed).filter(
    (p) => p.status === 'open'
  ).length
  const filteredCount = PORTS.slice(0, revealed).filter(
    (p) => p.status === 'filtered'
  ).length
  const closedCount = PORTS.slice(0, revealed).filter(
    (p) => p.status === 'closed'
  ).length

  return (
    <section className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />
      <div className="absolute left-1/2 top-1/3 -z-10 h-[260px] w-[460px] -translate-x-1/2 rounded-full bg-primary/10 blur-[110px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Interactive demo"
          title={
            <>
              See a scan in <span className="text-primary">action</span>
            </>
          }
          description="A simulated run of the Port Scanner module — watch how DNS resolves, an address is pinned, and ports stream in live. This is a demo, not a real scan."
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-border/70 bg-card/90 shadow-2xl shadow-black/40">
            {/* title bar */}
            <div className="flex items-center justify-between border-b border-border/60 bg-muted/30 px-4 py-2.5">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
                <Cpu className="h-3 w-3 text-primary" />
                Codexa Scanner — Port Scanner
              </span>
              <Badge
                variant="outline"
                className="border-amber-500/30 bg-amber-500/10 font-mono text-[10px] text-amber-400"
              >
                DEMO
              </Badge>
            </div>

            <div className="flex flex-col gap-4 p-4 sm:p-5">
              {/* target row */}
              <div className="flex flex-wrap items-center gap-2 rounded-md border border-border/60 bg-background/60 px-3 py-2">
                <span className="font-mono text-[11px] text-muted-foreground">
                  Target:
                </span>
                <span className="font-mono text-[11px] text-foreground">
                  {TARGET}
                </span>
                <Badge
                  variant="outline"
                  className="ml-auto border-primary/30 bg-primary/10 font-mono text-[10px] text-primary"
                >
                  1-1000
                </Badge>
              </div>

              {/* status line */}
              <div className="flex min-h-[20px] items-center gap-2 font-mono text-[11px]">
                {phase === 'idle' && (
                  <span className="text-muted-foreground">
                    Ready to scan. Click “Run scan”.
                  </span>
                )}
                {phase === 'resolving' && (
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <Loader2 className="h-3 w-3 animate-spin text-primary" />
                    Resolving hostname…
                  </span>
                )}
                {(phase === 'pinned' ||
                  phase === 'scanning' ||
                  phase === 'done') && (
                  <span className="text-muted-foreground">
                    Pinned: <span className="text-foreground">{PINNED}</span>
                    <span className="mx-1.5 opacity-40">·</span>
                    <AnimatePresence mode="wait">
                      {phase === 'scanning' && (
                        <motion.span
                          key="scanning"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-primary"
                        >
                          scanning… {revealed}/{PORTS.length}
                        </motion.span>
                      )}
                      {phase === 'done' && (
                        <motion.span
                          key="done"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-emerald-400"
                        >
                          scan complete
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </span>
                )}
              </div>

              {/* progress */}
              {phase !== 'idle' && (
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary/70 to-primary"
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                </div>
              )}

              {/* results table */}
              <div className="overflow-hidden rounded-md border border-border/50">
                <div className="grid grid-cols-[60px_1fr_90px] gap-2 border-b border-border/50 bg-muted/30 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  <span>Port</span>
                  <span>Service</span>
                  <span className="text-right">Status</span>
                </div>
                <div className="min-h-[120px] divide-y divide-border/40">
                  {PORTS.slice(0, revealed).map((row) => {
                    const Icon = STATUS_ICON[row.status]
                    return (
                      <motion.div
                        key={row.port}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25 }}
                        className="grid grid-cols-[60px_1fr_90px] items-center gap-2 px-3 py-1.5 font-mono text-[11px]"
                      >
                        <span className="text-foreground">:{row.port}</span>
                        <span className="text-muted-foreground">
                          {row.service}
                        </span>
                        <span className="flex justify-end">
                          <span
                            className={`inline-flex items-center gap-1 rounded border px-1.5 py-0.5 text-[10px] font-semibold ${STATUS_STYLE[row.status]}`}
                          >
                            <Icon className="h-2.5 w-2.5" />
                            {row.status}
                          </span>
                        </span>
                      </motion.div>
                    )
                  })}
                  {revealed === 0 && (
                    <div className="px-3 py-6 text-center font-mono text-[11px] text-muted-foreground">
                      Awaiting scan…
                    </div>
                  )}
                </div>
              </div>

              {/* summary + controls */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-3 font-mono text-[11px] text-muted-foreground">
                  {phase !== 'idle' && (
                    <>
                      <span className="text-emerald-400">{openCount} open</span>
                      <span className="text-amber-400">
                        {filteredCount} filtered
                      </span>
                      <span className="text-rose-400">
                        {closedCount} closed
                      </span>
                    </>
                  )}
                </div>
                <div className="flex gap-2">
                  {phase === 'done' ? (
                    <Button onClick={reset} variant="outline" size="sm">
                      <RotateCcw className="mr-1.5 h-3.5 w-3.5" />
                      Reset
                    </Button>
                  ) : (
                    <Button
                      onClick={runScan}
                      size="sm"
                      disabled={phase !== 'idle'}
                    >
                      <Play className="mr-1.5 h-3.5 w-3.5" />
                      {phase === 'idle' ? 'Run scan' : 'Scanning…'}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            Simulated output for demonstration only — no real network requests
            are made. Actual scans require authorization.
          </p>
        </div>
      </div>
    </section>
  )
}
