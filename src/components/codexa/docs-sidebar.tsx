'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Radar, Home } from 'lucide-react'
import { MODULES } from '@/lib/codexa-data'
import { GUIDE_ARTICLES } from '@/lib/guide-articles'
import { useT } from '@/components/i18n/language-provider'
import { cn } from '@/lib/utils'

type Props = {
  onNavigate?: () => void
}

export function DocsSidebar({ onNavigate }: Props) {
  const pathname = usePathname()
  const t = useT()

  const isLanding = pathname === '/guides'
  const activeSlug = [...MODULES, ...GUIDE_ARTICLES].find(
    (m) => pathname === `/guides/${m.id}`
  )?.id

  const startedArticles = GUIDE_ARTICLES.filter(
    (a) => a.category === 'Getting Started'
  )
  const referenceArticles = GUIDE_ARTICLES.filter(
    (a) => a.category === 'Reference'
  )

  const renderItem = (item: { id: string; name: string; icon: any }) => {
    const Icon = item.icon
    const isActive = activeSlug === item.id
    return (
      <li key={item.id}>
        <Link
          href={`/guides/${item.id}`}
          onClick={onNavigate}
          className={cn(
            'group flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors',
            isActive
              ? 'bg-primary/10 text-foreground ring-1 ring-primary/30'
              : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
          )}
        >
          <Icon
            className={cn(
              'h-4 w-4 shrink-0',
              isActive ? 'text-primary' : 'text-muted-foreground'
            )}
          />
          <span className="truncate font-medium">{item.name}</span>
          <ChevronRight
            className={cn(
              'ml-auto hidden h-4 w-4 transition lg:block',
              isActive
                ? 'text-primary opacity-100'
                : 'opacity-0 group-hover:opacity-50'
            )}
          />
        </Link>
      </li>
    )
  }

  return (
    <nav className="flex flex-col gap-1" aria-label="Documentation">
      <Link
        href="/guides"
        onClick={onNavigate}
        className={cn(
          'flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
          isLanding
            ? 'bg-primary/10 text-foreground ring-1 ring-primary/30'
            : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
        )}
      >
        <Home className="h-4 w-4 text-primary" />
        {t('common.overview')}
      </Link>

      <p className="px-3 pb-1 pt-5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        {t('common.gettingStarted')}
      </p>
      <ul className="flex flex-col gap-0.5">
        {startedArticles.map(renderItem)}
      </ul>

      <p className="px-3 pb-1 pt-5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        {t('common.modules')}
      </p>
      <ul className="flex flex-col gap-0.5">{MODULES.map(renderItem)}</ul>

      <p className="px-3 pb-1 pt-5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        {t('common.reference')}
      </p>
      <ul className="flex flex-col gap-0.5">
        {referenceArticles.map(renderItem)}
      </ul>

      <div className="mt-5 flex items-center gap-2 rounded-lg border border-border/50 bg-muted/20 px-3 py-2 text-[11px] text-muted-foreground">
        <Radar className="h-3.5 w-3.5 text-primary" />
        {t('docschrome.versionNote', { n: MODULES.length + GUIDE_ARTICLES.length })}
      </div>
    </nav>
  )
}
