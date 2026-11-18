import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Modules } from '@/components/codexa/modules'

export const metadata: Metadata = {
  title: 'Features — Codexa Scanner',
  description:
    'Explore all eight Codexa Scanner modules — Port Scanner, Web Audit, Subdomain Discovery, Path Fuzzer, TLS Inspector, DNS Intelligence, IP Information and History & Reports.',
}

export default function FeaturesPage() {
  return (
    <>
      <Modules />
      <section className="border-t border-border/60 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-border/60 bg-card/40 p-6 sm:flex-row sm:items-center sm:p-7">
            <div>
              <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
                Need the full usage guide?
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Each module has its own documentation page with step-by-step
                usage, what it inspects, and notes.
              </p>
            </div>
            <Link
              href="/guides"
              className="inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2.5 text-sm font-medium text-primary transition hover:bg-primary/20"
            >
              Browse the documentation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
