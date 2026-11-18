'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { DICTIONARY, type DictKey, type Locale } from '@/lib/i18n/dictionary'

type Ctx = {
  locale: Locale
  setLocale: (l: Locale) => void
  t: (key: DictKey, vars?: Record<string, string | number>) => string
}

const LanguageContext = createContext<Ctx | null>(null)

function interpolate(
  str: string,
  vars?: Record<string, string | number>
): string {
  if (!vars) return str
  return str.replace(/\{(\w+)\}/g, (_, k) =>
    vars[k] !== undefined ? String(vars[k]) : `{${k}}`
  )
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')

  // Load saved locale on mount (sync external storage → state).
  useEffect(() => {
    const saved = localStorage.getItem('codexa-locale')
    if (saved === 'en' || saved === 'my') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocaleState(saved)
    }
  }, [])

  // Reflect locale on <html lang> for accessibility.
  useEffect(() => {
    document.documentElement.lang = locale === 'my' ? 'my' : 'en'
  }, [locale])

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l)
    localStorage.setItem('codexa-locale', l)
  }, [])

  const t = useCallback(
    (key: DictKey, vars?: Record<string, string | number>) => {
      const table = DICTIONARY[locale] as Record<string, string>
      const val = table[key] ?? key
      return interpolate(val, vars)
    },
    [locale]
  )

  const value = useMemo<Ctx>(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return ctx
}

export function useT() {
  return useLanguage().t
}
