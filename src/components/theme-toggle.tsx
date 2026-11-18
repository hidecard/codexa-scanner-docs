'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { useT } from '@/components/i18n/language-provider'

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const t = useT()
  const [mounted, setMounted] = useState(false)

  // Standard next-themes hydration guard — runs once on mount.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), [])

  const current = resolvedTheme ?? theme
  const isDark = current === 'dark'

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={t('theme.toggle')}
      className="h-9 w-9 rounded-full border border-border/60 bg-background/40 backdrop-blur"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {mounted ? (
        isDark ? (
          <Sun className="h-4 w-4 text-primary" />
        ) : (
          <Moon className="h-4 w-4" />
        )
      ) : (
        <Sun className="h-4 w-4 opacity-0" />
      )}
    </Button>
  )
}
