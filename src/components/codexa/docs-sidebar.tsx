'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Radar, ChevronRight, Home } from 'lucide-react'
import { MODULES } from '@/lib/codexa-data'
import { cn } from '@/lib/utils'

type Props = {
  onNavigate?: () => void
}

export function DocsSidebar({ onNavigate }: Props) {
  const pathname = usePathname()

  const isLanding = pathname === '/guides'
  const activeModuleId = MODULES.find((m) => pathname === `/guides/${m.id}`)?.id

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
        Overview
      </Link>

      <div className="px-3 pb-1 pt-4 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        Modules
      </div>

      <ul className="flex flex-col gap-0.5">
        {MODULES.map((m) => {
          const Icon = m.icon
          const isActive = activeModuleId === m.id
          return (
            <li key={m.id}>
              <Link
                href={`/guides/${m.id}`}
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
                <span className="truncate font-medium">{m.name}</span>
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
        })}
      </ul>

      <div className="mt-4 flex items-center gap-2 rounded-lg border border-border/50 bg-muted/20 px-3 py-2 text-[11px] text-muted-foreground">
        <Radar className="h-3.5 w-3.5 text-primary" />
        v1.1.4 · 8 modules
      </div>
    </nav>
  )
}
