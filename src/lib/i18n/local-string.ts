import type { Locale } from './dictionary'

export type LocalString = {
  en: string
  my: string
}

/** Return a localized string while retaining a safe English fallback. */
export function ls(value: LocalString | string, locale: Locale): string {
  if (typeof value === 'string') return value
  return value[locale] || value.en
}
