'use client'

import { useState } from 'react'
import { Menu, BookOpen, Search } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { DocsSidebar } from './docs-sidebar'
import { useT } from '@/components/i18n/language-provider'

export function DocsChrome({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const t = useT()

  return (
    <div className="pt-16">
      {/* docs top bar */}
      <div className="border-b border-border/60 bg-background/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <BookOpen className="h-4 w-4 text-primary" />
            <span className="font-semibold">{t('docschrome.title')}</span>
            <span className="hidden text-muted-foreground sm:inline">
              · Codexa Scanner v1.1.4
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* search trigger */}
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event('open-search'))}
              className="hidden items-center gap-2 rounded-md border border-border/60 bg-muted/30 px-3 py-1.5 text-xs text-muted-foreground transition hover:border-primary/40 hover:text-foreground sm:flex"
              aria-label={t('search.trigger')}
            >
              <Search className="h-3.5 w-3.5" />
              <span>{t('search.trigger')}</span>
              <kbd className="rounded border border-border/60 bg-background px-1 font-mono text-[10px]">
                /
              </kbd>
            </button>

            {/* mobile sidebar trigger */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5 text-xs font-medium lg:hidden"
                aria-label={t('docschrome.modules')}
              >
                <Menu className="h-4 w-4" />
                {t('docschrome.modules')}
              </SheetTrigger>
              <SheetContent side="left" className="w-72 overflow-y-auto p-0">
                <SheetHeader className="border-b border-border/60 px-4 py-3">
                  <SheetTitle className="text-left text-sm">
                    {t('docschrome.title')}
                  </SheetTitle>
                  <SheetDescription className="sr-only">
                    {t('docschrome.title')}
                  </SheetDescription>
                </SheetHeader>
                <div className="p-3">
                  <DocsSidebar onNavigate={() => setOpen(false)} />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* body: sidebar + content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 py-10 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-12">
          {/* desktop sidebar */}
          <aside className="hidden lg:sticky lg:top-28 lg:block lg:self-start">
            <div className="max-h-[calc(100vh-9rem)] overflow-y-auto rounded-xl border border-border/60 bg-card/40 p-3 custom-scroll">
              <DocsSidebar />
            </div>
          </aside>

          {/* content */}
          <div className="min-w-0">{children}</div>
        </div>
      </div>
    </div>
  )
}
