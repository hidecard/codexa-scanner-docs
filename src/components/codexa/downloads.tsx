'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Copy, Check, Terminal, ExternalLink } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { PLATFORMS, PROJECT } from '@/lib/codexa-data'
import { SectionHeading } from './section-heading'
import { useLanguage, useT } from '@/components/i18n/language-provider'
import { ls } from '@/lib/i18n/local-string'
import type { LocalString } from '@/lib/i18n/local-string'

function CopyBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <div className="group relative">
      <pre className="custom-scroll overflow-x-auto rounded-lg border border-border/60 bg-background/70 p-4 font-mono text-[13px] leading-relaxed text-foreground">
        <code>{code}</code>
      </pre>
      <button
        type="button"
        onClick={() => {
          navigator.clipboard.writeText(code)
          setCopied(true)
          setTimeout(() => setCopied(false), 1800)
        }}
        className="absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded-md border border-border/60 bg-muted/60 text-muted-foreground transition hover:text-foreground"
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="h-3.5 w-3.5 text-primary" />
        ) : (
          <Copy className="h-3.5 w-3.5" />
        )}
      </button>
    </div>
  )
}

const BUILD_SOURCE = `# Prerequisites: Go 1.22+, Node.js 20+, npm, Wails v2
# Linux also needs GTK/WebKit dev libraries; Windows needs WebView2

git clone https://github.com/hidecard/codexa-scanner.git
cd codexa-scanner

npm install --prefix frontend
cd frontend && npm run build && cd ..
go mod tidy

# Build per platform
wails build -platform linux/amd64     # Linux
wails build -platform windows/amd64   # Windows
wails build -platform darwin/arm64     # macOS Apple Silicon
wails build -platform darwin/amd64     # macOS Intel

# For development
wails dev`

const EYEBROW: LocalString = { en: 'Download', my: 'ဒေါင်းလုဒ်' }
const TITLE_PRE: LocalString = { en: 'Get ', my: 'ယူပါ ' }
const TITLE_HL: LocalString = { en: 'Codexa Scanner', my: 'Codexa Scanner' }
const DESC: LocalString = {
  en: 'Pick the build for your operating system. All assets are published on the GitHub Releases page and built by GitHub Actions CI.',
  my: 'သင့် operating system အတွက် build ရွေးပါ။ Asset အကုန်ကို GitHub Releases page မှာတင်ပြီး GitHub Actions CI ကထုတ်တယ်။',
}
const INSTALL_LABEL: LocalString = { en: 'Install steps', my: 'Install အဆင့်တွေ' }
const BFS_HEADING: LocalString = { en: 'Build from source', my: 'Source ကနေ build' }
const BFS_DESC: LocalString = {
  en: 'Prefer to compile yourself? Codexa Scanner builds cleanly with Go, Wails and a standard npm frontend pipeline.',
  my: 'ကိုယ်တိုင် compile လုပ်ချင်လား? Codexa Scanner ကို Go, Wails နဲ့ npm frontend pipeline နဲ့ သန့်စင်စွာ build လုပ်လို့ရတယ်။',
}
const ALL_RELEASES: LocalString = { en: 'All releases', my: 'ထွက်ရှိမှုအကုန်' }

export function Downloads() {
  const { locale } = useLanguage()
  const t = useT()
  return (
    <section id="download" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />
      <div className="absolute left-1/2 top-1/3 -z-10 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={ls(EYEBROW, locale)}
          title={
            <>
              {ls(TITLE_PRE, locale)}
              <span className="text-primary">{ls(TITLE_HL, locale)}</span>{' '}
              {PROJECT.version}
            </>
          }
          description={ls(DESC, locale)}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          {/* platform tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border/60 bg-card/60 p-5 sm:p-6"
          >
            <Tabs defaultValue={PLATFORMS[0].id}>
              <TabsList className="flex w-full flex-wrap justify-start gap-1 bg-muted/40">
                {PLATFORMS.map((p) => (
                  <TabsTrigger
                    key={p.id}
                    value={p.id}
                    className="flex-1 whitespace-nowrap text-xs sm:text-sm"
                  >
                    {p.os}
                    <span className="ml-1 hidden font-mono text-[10px] text-muted-foreground sm:inline">
                      {p.arch}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {PLATFORMS.map((p) => {
                const Icon = p.icon
                return (
                  <TabsContent key={p.id} value={p.id} className="mt-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/25 bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </span>
                        <div>
                          <h3 className="text-base font-semibold">
                            {p.name}
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            {p.file}
                          </p>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-primary/30 bg-primary/10 font-mono text-[11px] text-primary"
                      >
                        {p.format}
                      </Badge>
                    </div>

                    {p.note && (
                      <p className="mt-4 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-xs text-amber-300">
                        {ls(p.note, locale)}
                      </p>
                    )}

                    <div className="mt-5">
                      <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        <span className="font-mono text-primary">›</span>
                        {ls(INSTALL_LABEL, locale)}
                      </p>
                      <ol className="flex flex-col gap-2">
                        {p.install.map((step, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm"
                          >
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-mono text-[10px] text-primary">
                              {idx + 1}
                            </span>
                            <span className="text-muted-foreground">
                              {ls(step, locale)}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    <Button asChild className="mt-6 w-full">
                      <a href={p.url} target="_blank" rel="noopener noreferrer">
                        <Download className="mr-2 h-4 w-4" />
                        {t('common.download')} {p.file}
                        <ExternalLink className="ml-2 h-3.5 w-3.5 opacity-60" />
                      </a>
                    </Button>
                  </TabsContent>
                )
              })}
            </Tabs>
          </motion.div>

          {/* build from source */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col rounded-2xl border border-border/60 bg-card/60 p-5 sm:p-6"
          >
            <div className="mb-4 flex items-center gap-2">
              <Terminal className="h-5 w-5 text-primary" />
              <h3 className="text-base font-semibold">{ls(BFS_HEADING, locale)}</h3>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              {ls(BFS_DESC, locale)}
            </p>
            <div className="flex-1">
              <CopyBlock code={BUILD_SOURCE} />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button asChild variant="outline" size="sm">
                <a href={PROJECT.releases} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                  {ls(ALL_RELEASES, locale)}
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href={PROJECT.docs} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                  {t('common.documentation')}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
