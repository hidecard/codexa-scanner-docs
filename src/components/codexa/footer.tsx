'use client'

import Link from 'next/link'
import { Radar, Github, ExternalLink, BookOpen, Download, Heart } from 'lucide-react'
import { PROJECT, MODULES } from '@/lib/codexa-data'
import { useT, useLanguage } from '@/components/i18n/language-provider'
import type { DictKey } from '@/lib/i18n/dictionary'
import { ls } from '@/lib/i18n/local-string'

type FooterItem = { labelKey: DictKey; href: string; external?: boolean }
type FooterCol = { titleKey: DictKey; items: FooterItem[] }

const LINKS: FooterCol[] = [
  {
    titleKey: 'footer.product',
    items: [
      { labelKey: 'footer.home', href: '/' },
      { labelKey: 'nav.features', href: '/features' },
      { labelKey: 'nav.download', href: '/download' },
      { labelKey: 'nav.guide', href: '/guide' },
      { labelKey: 'nav.about', href: '/about' },
    ],
  },
  {
    titleKey: 'footer.resources',
    items: [
      { labelKey: 'common.documentation', href: '/guides' },
      { labelKey: 'footer.changelog', href: '/changelog' },
      { labelKey: 'footer.glossary', href: '/glossary' },
      { labelKey: 'footer.roadmap', href: '/roadmap' },
      { labelKey: 'footer.contributing', href: '/contributing' },
      { labelKey: 'footer.releases', href: PROJECT.releases, external: true },
      { labelKey: 'footer.repository', href: PROJECT.repo, external: true },
    ],
  },
]

export function Footer() {
  const t = useT()
  const { locale } = useLanguage()
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
              {ls(PROJECT.description, locale)}
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
            <div key={col.titleKey}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {t(col.titleKey)}
              </h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.items.map((item) => (
                  <li key={item.labelKey}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {t(item.labelKey)}
                        <ExternalLink className="h-3 w-3 opacity-60" />
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {t(item.labelKey)}
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
              {t('footer.modules')}
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
            © {new Date().getFullYear()} {PROJECT.name}. {t('footer.developedBy')}{' '}
            <span className="font-medium text-foreground">{PROJECT.author}</span>.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            {t('footer.builtFor')}
            <Heart className="h-3 w-3 text-primary" />
          </p>
        </div>
      </div>
    </footer>
  )
}
