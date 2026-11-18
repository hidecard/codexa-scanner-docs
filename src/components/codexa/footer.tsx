'use client'

import Link from 'next/link'
import { Radar, Github, ExternalLink, BookOpen, Download, Heart } from 'lucide-react'
import { PROJECT, MODULES } from '@/lib/codexa-data'

const LINKS = [
  {
    title: 'Product',
    items: [
      { label: 'Home', href: '/' },
      { label: 'Features', href: '/features' },
      { label: 'Download', href: '/download' },
      { label: 'Guide', href: '/guide' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Documentation', href: '/guides' },
      { label: 'Releases', href: PROJECT.releases, external: true },
      { label: 'Repository', href: PROJECT.repo, external: true },
    ],
  },
]

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                <Radar className="h-5 w-5 text-primary" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-sm font-semibold">{PROJECT.name}</span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                  {PROJECT.version}
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              {PROJECT.description}
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href={PROJECT.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/60 bg-muted/40 text-muted-foreground transition hover:border-primary/40 hover:text-primary"
                aria-label="GitHub repository"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={PROJECT.releases}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/60 bg-muted/40 text-muted-foreground transition hover:border-primary/40 hover:text-primary"
                aria-label="Releases"
              >
                <Download className="h-4 w-4" />
              </a>
              <Link
                href="/guides"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/60 bg-muted/40 text-muted-foreground transition hover:border-primary/40 hover:text-primary"
                aria-label="Documentation"
              >
                <BookOpen className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* link columns */}
          {LINKS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {col.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.items.map((item) => (
                  <li key={item.label}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {item.label}
                        <ExternalLink className="h-3 w-3 opacity-60" />
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* modules */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Modules
            </h4>
            <ul className="mt-4 grid grid-cols-1 gap-2.5">
              {MODULES.map((m) => (
                <li key={m.id}>
                  <Link
                    href={`/guides/${m.id}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {m.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/50 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {PROJECT.name}. Developed by{' '}
            <span className="font-medium text-foreground">{PROJECT.author}</span>.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            Built for authorized testing &amp; defensive security work
            <Heart className="h-3 w-3 text-primary" />
          </p>
        </div>
      </div>
    </footer>
  )
}
