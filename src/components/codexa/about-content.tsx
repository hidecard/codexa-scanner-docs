'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Github,
  Download,
  BookOpen,
  ShieldCheck,
  Lock,
  Database,
  Gauge,
  ArrowUpRight,
  Code2,
  Layers,
  Cpu,
  Terminal,
  ShieldAlert,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { PROJECT, STATS, TECH_STACK } from '@/lib/codexa-data'

const PHILOSOPHY = [
  {
    icon: Gauge,
    title: 'Bounded by design',
    body: 'Every module uses capped concurrency, timeouts and bounded response reads. Predictable, controlled, and safe to run.',
  },
  {
    icon: ShieldCheck,
    title: 'Authorization-first',
    body: 'Each scan requires explicit confirmation for its exact target and range. Private/lab targets need a one-shot opt-in.',
  },
  {
    icon: Lock,
    title: 'Passive & non-exploitative',
    body: 'Checks surface indicators for review — never proof of exploitability. The path module is HEAD-only with no response bodies.',
  },
  {
    icon: Database,
    title: 'Local & private',
    body: 'History lives in a local SQLite file, auto-pruned to 2,000 records and never uploaded by the app.',
  },
]

const TECH_ICON_MAP: Record<string, any> = {
  Go: Code2,
  'Wails v2': Layers,
  React: Cpu,
  TypeScript: Terminal,
}

export function AboutContent() {
  return (
    <div className="pt-28 pb-20 sm:pt-32 sm:pb-28">
      {/* hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 grid-pattern opacity-50" />
        <div className="absolute left-1/2 top-0 -z-10 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="mb-5 gap-1.5 border-primary/30 bg-primary/10 px-3 py-1 text-primary"
            >
              <span className="font-mono text-[11px]">{PROJECT.version}</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-[11px] font-medium text-muted-foreground">
                By {PROJECT.author}
              </span>
            </Badge>
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
              About <span className="text-glow text-primary">Codexa</span>{' '}
              <span className="text-foreground">Scanner</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              {PROJECT.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-11 px-5">
                <a href={PROJECT.repo} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
              <Button asChild size="lg" className="h-11 px-5">
                <Link href="/download">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Link>
              </Button>
              <Button asChild size="lg" className="h-11 px-5">
                <Link href="/guides">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Read the docs
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* overview */}
      <section className="mt-16 sm:mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                What it is
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                A recon toolchain in one desktop app
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <p>
                  Codexa Scanner is a desktop application for network
                  reconnaissance and HTTP security-header inspection. It brings
                  eight bounded modules — port scanning, web audit, subdomain
                  discovery, path fuzzing, TLS inspection, DNS intelligence, IP
                  information and history &amp; reports — into a single
                  cross-platform UI.
                </p>
                <p>
                  The React frontend calls Go methods exposed by Wails v2. The
                  engine resolves, scopes and bounds every request before it
                  leaves your machine: hostnames resolve once with a pinned
                  address, HTTP clients are scoped per host/port, and ambient
                  proxies are disabled so they cannot bypass address checks.
                </p>
                <p>
                  It is developed by{' '}
                  <span className="font-medium text-foreground">
                    {PROJECT.author}
                  </span>{' '}
                  and built continuously by GitHub Actions, producing native
                  packages for Linux, Windows and macOS.
                </p>
              </div>
            </motion.div>

            {/* stats */}
            <motion.dl
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 gap-px overflow-hidden self-start rounded-xl border border-border/60 bg-border/60"
            >
              {STATS.map((s) => (
                <div key={s.label} className="bg-card/80 px-4 py-4">
                  <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </dt>
                  <dd className="mt-1 text-2xl font-bold text-foreground">
                    {s.value}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>
        </div>
      </section>

      {/* philosophy */}
      <section className="mt-20 sm:mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            Design philosophy
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Bounded, authorized, passive, local
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PHILOSOPHY.map((p, i) => {
              const Icon = p.icon
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="rounded-xl border border-border/60 bg-card/60 p-5"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-primary/25 bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* tech stack */}
      <section className="mt-20 sm:mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            Built with
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            A modern desktop toolchain
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TECH_STACK.map((t, i) => {
              const Icon = TECH_ICON_MAP[t.name] ?? Code2
              return (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/60 p-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* build & release */}
      <section className="mt-20 sm:mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border/60 bg-card/60 p-6 sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Build &amp; release
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              Continuously built, least-privilege CI
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              GitHub Actions runs on pushes to main, pull requests and version
              tags. Permissions are least-privilege by default (contents: read);
              only the tag-release job is granted contents: write. The release
              attaches the .deb, .exe and both .dmg assets to a GitHub Release
              with generated notes. Frontend dependencies are pinned with a
              committed lockfile to reduce build drift.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Button asChild variant="outline" size="sm">
                <a href={PROJECT.releases} target="_blank" rel="noopener noreferrer">
                  <ArrowUpRight className="mr-1.5 h-3.5 w-3.5" />
                  Releases
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="/guides/build-from-source">
                  <Terminal className="mr-1.5 h-3.5 w-3.5" />
                  Build from source
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* authorized-use */}
      <section className="mt-20 sm:mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/[0.06] p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-amber-500/40 bg-amber-500/15">
                <ShieldAlert className="h-5 w-5 text-amber-400" />
              </span>
              <div>
                <h2 className="text-lg font-semibold text-amber-200">
                  Authorized use only
                </h2>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-amber-100/80 sm:text-base">
                  Codexa Scanner is provided for authorized testing, education
                  and defensive security work. You are responsible for obtaining
                  permission, complying with applicable laws, and respecting
                  target scope and rate limits. The authors accept no liability
                  for misuse or damage.
                </p>
                <Link
                  href="/guides/authorized-use"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-amber-200 underline underline-offset-2 hover:text-amber-100"
                >
                  Read the full authorized-use notice
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
