'use client'

import { motion } from 'framer-motion'
import {
  Radar,
  ShieldCheck,
  Network,
  Route,
  Lock,
  Globe,
  Server,
  History,
  Search,
  Cpu,
} from 'lucide-react'

const SIDEBAR = [
  { icon: Radar, label: 'Port Scanner', active: true },
  { icon: ShieldCheck, label: 'Web Audit' },
  { icon: Network, label: 'Subdomains' },
  { icon: Route, label: 'Path Fuzzer' },
  { icon: Lock, label: 'TLS Inspector' },
  { icon: Globe, label: 'DNS Intel' },
  { icon: Server, label: 'IP Info' },
  { icon: History, label: 'History' },
]

const SCAN_ROWS = [
  { port: '22', service: 'ssh', status: 'open' },
  { port: '80', service: 'http', status: 'open' },
  { port: '443', service: 'https', status: 'open' },
  { port: '8080', service: 'http-alt', status: 'open' },
  { port: '3306', service: 'mysql', status: 'filtered' },
  { port: '21', service: 'ftp', status: 'closed' },
]

export function AppMockup() {
  return (
    <div className="relative w-full">
      {/* glow */}
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2rem] bg-primary/10 blur-3xl"
      />
      <div className="overflow-hidden rounded-xl border border-border/70 bg-card/90 shadow-2xl shadow-black/40 backdrop-blur">
        {/* title bar */}
        <div className="flex items-center justify-between border-b border-border/60 bg-muted/30 px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
            <Cpu className="h-3 w-3 text-primary" />
            Codexa Scanner
          </span>
          <span className="w-12" />
        </div>

        <div className="grid grid-cols-[56px_1fr] sm:grid-cols-[150px_1fr]">
          {/* sidebar */}
          <div className="flex flex-col gap-1 border-r border-border/60 bg-muted/20 p-2">
            {SIDEBAR.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px] font-medium transition ${
                    item.active
                      ? 'bg-primary/15 text-primary ring-1 ring-primary/25'
                      : 'text-muted-foreground'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" />
                  <span className="hidden sm:inline truncate">{item.label}</span>
                </div>
              )
            })}
          </div>

          {/* main panel */}
          <div className="flex flex-col gap-3 p-3 sm:p-4">
            {/* target input */}
            <div className="flex items-center gap-2 rounded-md border border-border/60 bg-background/60 px-3 py-2">
              <Search className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="font-mono text-[11px] text-muted-foreground">
                Target:
              </span>
              <span className="font-mono text-[11px] text-foreground">
                scanme.example.org
              </span>
              <span className="ml-auto rounded bg-primary/15 px-1.5 py-0.5 font-mono text-[10px] text-primary">
                1-1000
              </span>
            </div>

            {/* progress */}
            <div className="flex items-center justify-between text-[10px] text-muted-foreground">
              <span className="font-mono">Pinned: 93.184.216.34</span>
              <span className="font-mono text-primary">42% · 420/1000</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary/70 to-primary"
                initial={{ width: '0%' }}
                whileInView={{ width: '42%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />
            </div>

            {/* scan table */}
            <div className="overflow-hidden rounded-md border border-border/50">
              <div className="grid grid-cols-3 gap-2 border-b border-border/50 bg-muted/30 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                <span>Port</span>
                <span>Service</span>
                <span className="text-right">Status</span>
              </div>
              <div className="divide-y divide-border/40">
                {SCAN_ROWS.map((row, i) => (
                  <motion.div
                    key={row.port}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.12, duration: 0.3 }}
                    className="grid grid-cols-3 gap-2 px-3 py-1.5 font-mono text-[11px]"
                  >
                    <span className="text-foreground">:{row.port}</span>
                    <span className="text-muted-foreground">{row.service}</span>
                    <span className="text-right">
                      <span
                        className={`inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[10px] font-semibold ${
                          row.status === 'open'
                            ? 'bg-emerald-500/15 text-emerald-400'
                            : row.status === 'filtered'
                              ? 'bg-amber-500/15 text-amber-400'
                              : 'bg-rose-500/15 text-rose-400'
                        }`}
                      >
                        {row.status}
                      </span>
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
