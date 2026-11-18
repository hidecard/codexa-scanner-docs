import Link from 'next/link'
import { ArrowUpRight, BookOpen, ShieldAlert } from 'lucide-react'
import { MODULES } from '@/lib/codexa-data'

export const metadata = {
  title: 'Documentation',
}

export default function DocsIndexPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* intro */}
      <section>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <BookOpen className="h-4 w-4 text-primary" />
          Documentation
        </div>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Codexa Scanner <span className="text-primary">Docs</span>
        </h1>
        <p className="mt-3 max-w-2xl text-base text-muted-foreground">
          Everything you need to use Codexa Scanner safely and effectively.
          Each module has its own guide covering overview, step-by-step usage,
          what it inspects, and the fine print.
        </p>
      </section>

      {/* module index */}
      <section>
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Modules
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {MODULES.map((m) => {
            const Icon = m.icon
            return (
              <Link
                key={m.id}
                href={`/guides/${m.id}`}
                className="group flex items-start gap-3 rounded-xl border border-border/60 bg-card/60 p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="flex items-center gap-1 text-sm font-semibold">
                    {m.name}
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition group-hover:text-primary" />
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {m.short}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* authorized-use notice */}
      <section className="rounded-xl border border-amber-500/30 bg-amber-500/[0.06] p-4">
        <div className="flex items-start gap-3">
          <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
          <div>
            <h3 className="text-sm font-semibold text-amber-200">
              Authorized-use notice
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-amber-100/80">
              Use Codexa Scanner only against systems you own or have explicit
              permission to assess. All checks are passive and non-exploitative;
              results are indicators for review, not proof of exploitability.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
