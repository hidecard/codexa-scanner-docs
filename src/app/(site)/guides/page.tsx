import Link from 'next/link'
import { ArrowUpRight, BookOpen, ShieldAlert } from 'lucide-react'
import { MODULES } from '@/lib/codexa-data'
import { GUIDE_ARTICLES } from '@/lib/guide-articles'

export const metadata = {
  title: 'Documentation',
}

function DocCard({
  id,
  name,
  short,
  icon: Icon,
  badge,
}: {
  id: string
  name: string
  short: string
  icon: any
  badge?: string
}) {
  return (
    <Link
      href={`/guides/${id}`}
      className="group flex items-start gap-3 rounded-xl border border-border/60 bg-card/60 p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="flex items-center gap-1 text-sm font-semibold">
          {name}
          <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition group-hover:text-primary" />
        </h3>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          {short}
        </p>
      </div>
      {badge && (
        <span className="shrink-0 rounded border border-border/60 bg-muted/40 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          {badge}
        </span>
      )}
    </Link>
  )
}

export default function GuidesIndexPage() {
  const started = GUIDE_ARTICLES.filter((a) => a.category === 'Getting Started')
  const reference = GUIDE_ARTICLES.filter((a) => a.category === 'Reference')

  return (
    <div className="flex flex-col gap-10">
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
          Everything you need to use Codexa Scanner safely and effectively —
          getting started, per-module usage guides, build instructions, FAQ and
          the authorized-use notice.
        </p>
      </section>

      {/* getting started */}
      <section>
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Getting Started
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {started.map((a) => (
            <DocCard
              key={a.id}
              id={a.id}
              name={a.name}
              short={a.short}
              icon={a.icon}
            />
          ))}
        </div>
      </section>

      {/* modules */}
      <section>
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Modules
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {MODULES.map((m) => (
            <DocCard
              key={m.id}
              id={m.id}
              name={m.name}
              short={m.short}
              icon={m.icon}
            />
          ))}
        </div>
      </section>

      {/* reference */}
      <section>
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Reference
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {reference.map((a) => (
            <DocCard
              key={a.id}
              id={a.id}
              name={a.name}
              short={a.short}
              icon={a.icon}
            />
          ))}
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
              results are indicators for review, not proof of exploitability.{' '}
              <Link
                href="/guides/authorized-use"
                className="font-medium underline underline-offset-2 hover:text-amber-100"
              >
                Read the full notice →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
