'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, Download, GitCompare, Sparkles } from 'lucide-react'
import { RELEASES } from '@/lib/changelog'
import { PROJECT } from '@/lib/codexa-data'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

function formatDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function ChangelogContent() {
  return (
    <div className="pt-28 pb-20 sm:pt-32 sm:pb-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-[300px] bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge
            variant="outline"
            className="mb-4 gap-1.5 border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-primary"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Changelog
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Release history
          </h1>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Every version of Codexa Scanner, from the initial cross-platform
            release to the latest macOS DMG builds. Releases are built by GitHub
            Actions CI; highlights are derived from the commit history.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="sm" className="h-9">
              <Link href="/download">
                <Download className="mr-1.5 h-4 w-4" />
                Download latest
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="h-9">
              <a href={PROJECT.releases} target="_blank" rel="noopener noreferrer">
                <ArrowUpRight className="mr-1.5 h-4 w-4" />
                GitHub Releases
              </a>
            </Button>
          </div>
        </motion.div>

        {/* timeline */}
        <div className="mt-12">
          <ol className="relative border-l border-border/60 pl-6 sm:pl-8">
            {RELEASES.map((rel, i) => (
              <motion.li
                key={rel.tag}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative mb-10 last:mb-0"
              >
                {/* dot */}
                <span
                  className={`absolute -left-[31px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 sm:-left-[39px] ${
                    rel.latest
                      ? 'border-primary bg-primary'
                      : 'border-border bg-background'
                  }`}
                >
                  {rel.latest && (
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
                  )}
                </span>

                <div className="rounded-xl border border-border/60 bg-card/60 p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="font-mono text-lg font-bold tracking-tight sm:text-xl">
                      {rel.version}
                    </h2>
                    {rel.latest && (
                      <Badge className="bg-primary/15 text-primary">
                        Latest
                      </Badge>
                    )}
                    <span className="text-xs text-muted-foreground">
                      {formatDate(rel.date)}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                    {rel.summary}
                  </p>

                  <ul className="mt-4 flex flex-col gap-1.5">
                    {rel.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-foreground/90"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>

                  {rel.assets && rel.assets.length > 0 && (
                    <div className="mt-4">
                      <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                        Assets
                      </p>
                      <div className="grid gap-1.5 sm:grid-cols-2">
                        {rel.assets.map((a) => (
                          <div
                            key={a.name}
                            className="flex items-center justify-between rounded-md border border-border/50 bg-muted/20 px-3 py-1.5 font-mono text-xs"
                          >
                            <span className="truncate text-foreground/90">
                              {a.name}
                            </span>
                            <span className="ml-2 shrink-0 text-muted-foreground">
                              {a.size}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-4 flex flex-wrap gap-3 border-t border-border/50 pt-3">
                    <a
                      href={rel.compareUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <GitCompare className="h-3.5 w-3.5" />
                      Full changelog {rel.version}
                      <ArrowUpRight className="h-3 w-3 opacity-60" />
                    </a>
                    {rel.latest && (
                      <Link
                        href="/download"
                        className="inline-flex items-center gap-1 text-xs font-medium text-primary transition-colors hover:text-primary/80"
                      >
                        <Download className="h-3.5 w-3.5" />
                        Download
                      </Link>
                    )}
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}
