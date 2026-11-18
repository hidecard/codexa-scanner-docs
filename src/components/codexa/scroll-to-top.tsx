'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // On route change, jump to top unless there's a hash anchor.
    if (typeof window === 'undefined') return
    if (window.location.hash) return
    // Defer to next frame so it runs after Next.js scroll restoration.
    requestAnimationFrame(() => window.scrollTo(0, 0))
  }, [pathname])

  return null
}
