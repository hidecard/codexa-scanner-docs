'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Radar, Home, BookOpen, Search, Compass } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/codexa/navbar'
import { Footer } from '@/components/codexa/footer'
import { ScrollToTop } from '@/components/codexa/scroll-to-top'
import { SearchPalette } from '@/components/codexa/search-palette'
import { useT } from '@/components/i18n/language-provider'

export default function NotFound() {
  const t = useT()
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <ScrollToTop />
      <SearchPalette />
      <main className="flex flex-1 items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-8 text-center sm:p-12"
        >
          <div
            aria-hidden
            className="absolute inset-0 -z-10 grid-pattern opacity-40"
          />
          <div
            aria-hidden
            className="absolute left-1/2 top-0 -z-10 h-48 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-[80px]"
          />

          <span className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
            <Radar className="h-7 w-7 text-primary" />
          </span>

          <p className="font-mono text-6xl font-bold text-primary text-glow sm:text-7xl">
            404
          </p>
          <h1 className="mt-4 text-xl font-semibold tracking-tight sm:text-2xl">
            {t('notfound.title')}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            {t('notfound.desc')}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild className="h-11 px-5">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                {t('notfound.home')}
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-11 px-5">
              <Link href="/guides">
                <BookOpen className="mr-2 h-4 w-4" />
                {t('notfound.browseDocs')}
              </Link>
            </Button>
            <Button
              variant="outline"
              className="h-11 px-5"
              onClick={() => window.dispatchEvent(new Event('open-search'))}
            >
              <Search className="mr-2 h-4 w-4" />
              {t('notfound.search')}
            </Button>
          </div>

          <p className="mt-6 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <Compass className="h-3.5 w-3.5 text-primary" />
            {t('notfound.hint')}
          </p>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
