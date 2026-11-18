'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Menu, X, Radar, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { PROJECT } from '@/lib/codexa-data'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Features', href: '/features' },
  { label: 'Docs', href: '/guides' },
  { label: 'Download', href: '/download' },
  { label: 'Guide', href: '/guide' },
  { label: 'About', href: '/about' },
]

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change (sync URL → UI state).
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false)
  }, [pathname])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/60 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
            <Radar className="h-5 w-5 text-primary" />
            <span className="absolute inset-0 rounded-lg ring-1 ring-primary/20 transition group-hover:ring-primary/40" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-semibold tracking-tight">
              {PROJECT.name}
            </span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
              {PROJECT.version}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'relative rounded-md px-3 py-2 text-sm font-medium transition-colors',
                isActive(link.href)
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {link.label}
              {isActive(link.href) && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-primary"
                />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="hidden h-9 px-3 sm:inline-flex"
          >
            <a href={PROJECT.repo} target="_blank" rel="noopener noreferrer">
              <Github className="mr-1.5 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button asChild size="sm" className="h-9">
            <Link href="/download">
              <Download className="mr-1.5 h-4 w-4" />
              Download
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground',
                    isActive(link.href)
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={PROJECT.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <Github className="h-4 w-4" /> View on GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
