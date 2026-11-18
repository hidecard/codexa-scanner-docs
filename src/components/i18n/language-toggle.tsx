'use client'

import { Languages } from 'lucide-react'
import { useLanguage } from './language-provider'
import { cn } from '@/lib/utils'

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage()
  const next = locale === 'en' ? 'my' : 'en'

  return (
    <button
      type="button"
      onClick={() => setLocale(next)}
      aria-label={`Switch to ${next === 'my' ? 'Burmese' : 'English'}`}
      title={`Switch to ${next === 'my' ? 'Burmese' : 'English'}`}
      className={cn(
        'inline-flex h-9 items-center gap-1.5 rounded-full border border-border/60 bg-background/40 px-2.5 text-xs font-medium backdrop-blur transition hover:border-primary/40 hover:text-primary',
        className
      )}
    >
      <Languages className="h-3.5 w-3.5 text-primary" />
      <span className="font-mono uppercase">{t('lang.toggle')}</span>
    </button>
  )
}
