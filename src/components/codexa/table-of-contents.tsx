'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export type TocItem = { id: string; label: string }

export function TableOfContents({ sections = [] }: { sections?: TocItem[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? '')

  useEffect(() => {
    const headings = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null)
    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) {
          setActive(visible[0].target.id)
        }
      },
      { rootMargin: '-80px 0px -70% 0px', threshold: 0 }
    )

    headings.forEach((h) => observer.observe(h))
    return () => observer.disconnect()
  }, [sections])

  if (sections.length === 0) return null

  return (
    <nav className="flex flex-col gap-1 text-sm" aria-label="On this page">
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        On this page
      </p>
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={cn(
            'rounded-md px-2 py-1 text-muted-foreground transition-colors hover:text-foreground',
            active === s.id
              ? 'font-medium text-primary'
              : 'border-l border-transparent pl-3'
          )}
        >
          {s.label}
        </a>
      ))}
    </nav>
  )
}
