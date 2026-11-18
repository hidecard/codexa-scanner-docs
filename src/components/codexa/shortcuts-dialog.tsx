'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { useLanguage } from '@/components/i18n/language-provider'
import { ls } from '@/lib/i18n/local-string'
import type { LocalString } from '@/lib/i18n/local-string'

type Shortcut = { keys: string; desc: LocalString }

const SHORTCUTS: Shortcut[] = [
  {
    keys: '⌘K / Ctrl+K',
    desc: { en: 'Open search palette', my: 'Search palette ဖွင့်' },
  },
  {
    keys: '/',
    desc: { en: 'Open search (when not typing)', my: 'Search ဖွင့် (ရိုက်နေချိန်မဟုတ်ရင်)' },
  },
  {
    keys: '?',
    desc: { en: 'Show this shortcuts dialog', my: 'ဒီ shortcuts dialog ပြ' },
  },
  {
    keys: 'T',
    desc: { en: 'Toggle light / dark theme', my: 'Light / dark theme ပြောင်း' },
  },
  {
    keys: 'Esc',
    desc: { en: 'Close dialog or palette', my: 'Dialog ဒါမမဟုတ် palette ပိတ်' },
  },
]

const TITLE: LocalString = { en: 'Keyboard shortcuts', my: 'Keyboard shortcuts' }
const DESC: LocalString = {
  en: 'Quick actions available anywhere on the site.',
  my: 'Site ပေါ်မှာ ဘယ်နေရာမှာမဆို အသုံးပြုလို့ရတဲ့ အမြန်လုပ်ဆောင်ချက်တွေ။',
}

function isTyping(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false
  return (
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target.isContentEditable
  )
}

export function ShortcutsDialog() {
  const [open, setOpen] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()
  const { locale } = useLanguage()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // "?" = Shift+/  →  e.key === '?'
      if (e.key === '?' && !isTyping(e.target)) {
        e.preventDefault()
        setOpen((v) => !v)
        return
      }
      // "T" toggle theme — ignore when mod pressed (cmd+t new tab) or typing
      if (
        e.key.toLowerCase() === 't' &&
        !e.metaKey &&
        !e.ctrlKey &&
        !e.altKey &&
        !isTyping(e.target)
      ) {
        e.preventDefault()
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [setTheme, resolvedTheme])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md gap-0 p-0">
        <DialogHeader className="border-b border-border/60 px-5 py-4">
          <DialogTitle className="text-base">{ls(TITLE, locale)}</DialogTitle>
          <DialogDescription className="text-xs">
            {ls(DESC, locale)}
          </DialogDescription>
        </DialogHeader>
        <ul className="divide-y divide-border/40 px-5 py-2">
          {SHORTCUTS.map((s) => (
            <li
              key={s.keys}
              className="flex items-center justify-between gap-3 py-2.5"
            >
              <span className="text-sm text-muted-foreground">
                {ls(s.desc, locale)}
              </span>
              <kbd className="rounded-md border border-border/60 bg-muted/40 px-2 py-1 font-mono text-[11px] text-foreground">
                {s.keys}
              </kbd>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  )
}
