'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import { MODULES, PROJECT } from '@/lib/codexa-data'
import { GUIDE_ARTICLES } from '@/lib/guide-articles'
import {
  Home,
  Radar,
  Download,
  BookOpen,
  ShieldAlert,
  History,
  Search,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type SearchEntry = {
  id: string
  label: string
  keywords: string
  href: string
  group: string
  icon: LucideIcon
}

const PAGES: SearchEntry[] = [
  { id: 'home', label: 'Home', keywords: 'home landing overview', href: '/', group: 'Pages', icon: Home },
  { id: 'features', label: 'Features', keywords: 'features modules capabilities', href: '/features', group: 'Pages', icon: Radar },
  { id: 'download', label: 'Download', keywords: 'download install linux windows macos', href: '/download', group: 'Pages', icon: Download },
  { id: 'guide', label: 'Guide', keywords: 'guide how it works quick start architecture', href: '/guide', group: 'Pages', icon: BookOpen },
  { id: 'about', label: 'About', keywords: 'about app project developer', href: '/about', group: 'Pages', icon: ShieldAlert },
  { id: 'changelog', label: 'Changelog', keywords: 'changelog releases versions history updates', href: '/changelog', group: 'Pages', icon: History },
  { id: 'guides', label: 'Documentation', keywords: 'docs documentation guides manuals', href: '/guides', group: 'Pages', icon: BookOpen },
]

export function SearchPalette() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const onOpen = useCallback(() => setOpen(true), [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Cmd+K / Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((v) => !v)
        return
      }
      // "/" when not typing in a field
      if (
        e.key === '/' &&
        !(e.target instanceof HTMLInputElement) &&
        !(e.target instanceof HTMLTextAreaElement) &&
        !(e.target as HTMLElement)?.isContentEditable
      ) {
        e.preventDefault()
        setOpen(true)
      }
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('open-search', onOpen as EventListener)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('open-search', onOpen as EventListener)
    }
  }, [onOpen])

  const entries = useMemo<SearchEntry[]>(() => {
    const modules: SearchEntry[] = MODULES.map((m) => ({
      id: `mod-${m.id}`,
      label: m.name,
      keywords: `${m.name} ${m.short} ${m.description} ${m.usage.join(' ')} ${m.checks.join(' ')}`,
      href: `/guides/${m.id}`,
      group: 'Modules',
      icon: m.icon,
    }))
    const articles: SearchEntry[] = GUIDE_ARTICLES.map((a) => ({
      id: `art-${a.id}`,
      label: a.name,
      keywords: `${a.name} ${a.short} ${a.intro} ${a.sections.map((s) => s.title).join(' ')}`,
      href: `/guides/${a.id}`,
      group: a.category,
      icon: a.icon,
    }))
    return [...PAGES, ...modules, ...articles]
  }, [])

  const runEntry = (href: string) => {
    setOpen(false)
    router.push(href)
  }

  const groups = [
    { name: 'Pages', entries: entries.filter((e) => e.group === 'Pages') },
    { name: 'Getting Started', entries: entries.filter((e) => e.group === 'Getting Started') },
    { name: 'Modules', entries: entries.filter((e) => e.group === 'Modules') },
    { name: 'Reference', entries: entries.filter((e) => e.group === 'Reference') },
  ].filter((g) => g.entries.length > 0)

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
      title="Search Codexa Scanner"
      description="Search pages, modules and documentation articles."
    >
      <CommandInput placeholder="Search docs, modules, pages…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {groups.map((g, gi) => (
          <div key={g.name}>
            <CommandGroup heading={g.name}>
              {g.entries.map((e) => {
                const Icon = e.icon
                return (
                  <CommandItem
                    key={e.id}
                    value={`${e.label} ${e.keywords}`}
                    onSelect={() => runEntry(e.href)}
                    className="gap-2"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-primary" />
                    <span className="font-medium">{e.label}</span>
                    <span className="ml-auto text-[11px] text-muted-foreground">
                      {e.href}
                    </span>
                  </CommandItem>
                )
              })}
            </CommandGroup>
            {gi < groups.length - 1 && <CommandSeparator />}
          </div>
        ))}
      </CommandList>
    </CommandDialog>
  )
}
