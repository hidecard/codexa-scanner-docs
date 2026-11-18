'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Heart, ArrowUpRight } from 'lucide-react'
import { PROJECT } from '@/lib/codexa-data'
import { useLanguage } from '@/components/i18n/language-provider'
import { ls } from '@/lib/i18n/local-string'
import { CopyBlock } from './copy-block'
import type { LocalString } from '@/lib/i18n/local-string'

type Section = { id: string; title: LocalString; body?: LocalString; list?: LocalString[]; code?: string }

const EYEBROW: LocalString = { en: 'Open source', my: 'Open source' }
const TITLE: LocalString = { en: 'Contributing', my: 'ဆောင်ရွက်ခြင်း' }
const DESC: LocalString = {
  en: 'Codexa Scanner is open source. Build it locally, report issues, and submit pull requests.',
  my: 'Codexa Scanner က open source။ Local မှာ build၊ issue တွေအစီရင်ခံ၊ pull request တွေတင်။',
}

const SECTIONS: Section[] = [
  {
    id: 'prerequisites',
    title: { en: 'Prerequisites', my: 'Prerequisite တွေ' },
    list: [
      { en: 'Go 1.22 or newer', my: 'Go 1.22 ဒါမမဟုတ် ပိုအသစ်' },
      { en: 'Node.js 20+ and npm', my: 'Node.js 20+ + npm' },
      { en: 'Wails v2 CLI', my: 'Wails v2 CLI' },
      { en: 'Linux: GTK / WebKit dev libraries', my: 'Linux: GTK/WebKit dev library တွေ' },
      { en: 'Windows: WebView2 runtime', my: 'Windows: WebView2 runtime' },
    ],
  },
  {
    id: 'clone-build',
    title: { en: 'Clone & build', my: 'Clone + build' },
    code: `git clone https://github.com/hidecard/codexa-scanner.git
cd codexa-scanner
npm install --prefix frontend
cd frontend && npm run build && cd ..
go mod tidy
wails build -platform linux/amd64`,
  },
  {
    id: 'development',
    title: { en: 'Development mode', my: 'Development mode' },
    body: {
      en: 'Run wails dev for hot-reload development from the repository root. Frontend dependencies are pinned with a committed lockfile to reduce build drift.',
      my: 'Repository root ကနေ hot-reload development အတွက် wails dev run ပါ။ Frontend dependency တွေက committed lockfile နဲ့ pin ထားပြီး build drift လျှော့တယ်။',
    },
  },
  {
    id: 'testing',
    title: { en: 'Testing', my: 'Testing' },
    body: {
      en: 'CI runs go test -race ./... and go vet ./... on Linux, and go test ./... + go vet on Windows. Run the same locally before opening a PR.',
      my: 'CI က Linux မှာ go test -race ./... + go vet ./... run၊ Windows မှာ go test ./... + go vet run တယ်။ PR မဖွင့်ခင် local မှာ ဒီလိုပဲ run ပါ။',
    },
  },
  {
    id: 'code-style',
    title: { en: 'Code style', my: 'Code style' },
    list: [
      { en: 'Go: gofmt + go vet clean; keep functions bounded and concurrent-safe.', my: 'Go: gofmt + go vet သန့်; function တွေ bounded + concurrent-safe ထား။' },
      { en: 'Frontend: TypeScript strict; keep components small and typed.', my: 'Frontend: TypeScript strict; component တွေသေး + typed ထား။' },
      { en: 'Keep all checks passive and bounded — do not add active/exploitative behavior.', my: 'Check အကုန်က passive + bounded ထား — active/exploitative လုပ်ဆောင်ချက်မထည့်ပါ။' },
      { en: 'Redact credentials and sensitive data in any new stored/exported field.', my: 'Stored/exported field အသစ်တိုင်းမှာ credential + sensitive data redact လုပ်ပါ။' },
    ],
  },
  {
    id: 'branches-prs',
    title: { en: 'Branches & pull requests', my: 'Branch + pull request' },
    list: [
      { en: 'Branch from main; name feature branches feat/<short>, fixes fix/<short>.', my: 'main ကနေ branch; feature branch တွေကို feat/<short>၊ fix တွေကို fix/<short> အမည်ပေး။' },
      { en: 'Keep PRs focused and small; describe what changed and why.', my: 'PR တွေကို တစ်ခုတည်းပေါ် focus + သေးအောင်ထား; ဘာပြောင်းလဲလဲ + ဘာကြောင့်လဲဖော်ပြ။' },
      { en: 'CI must pass (build + go test + go vet) before review.', my: 'Review မလုပ်ခင် CI (build + go test + go vet) ပြောင်ပြောင်ဖြစ်ရမယ်။' },
    ],
  },
  {
    id: 'issues',
    title: { en: 'Reporting issues', my: 'Issue အစီရင်ခံခြင်း' },
    body: {
      en: 'Open a GitHub Issue with the version, OS, steps to reproduce, and what you expected vs. what happened. Security-related findings: do not open a public issue — contact the maintainer privately.',
      my: 'Version၊ OS၊ reproduce လုပ်ပုံ၊ မျှော်လင့်တာ vs တကယ်ဖြစ်တာနဲ့ GitHub Issue ဖွင့်ပါ။ Security-related တွေ: public issue မဖွင့်ပါ — maintainer ကိုကိုယ်ပိုင်တိုက်ရိုက်ဆက်သွယ်ပါ။',
    },
  },
]

export function ContributingContent() {
  const { locale } = useLanguage()
  return (
    <div className="pt-28 pb-20 sm:pt-32 sm:pb-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-[260px] bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Heart className="h-4 w-4 text-primary" />
            {ls(EYEBROW, locale)}
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {ls(TITLE, locale)}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
            {ls(DESC, locale)}
          </p>
          <a
            href={PROJECT.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80"
          >
            {PROJECT.repo.replace('https://', '')}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </motion.div>

        <div className="mt-10 flex flex-col gap-8">
          {SECTIONS.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                <span className="font-mono text-primary">›</span>
                {ls(s.title, locale)}
              </h2>
              <div className="flex flex-col gap-3">
                {s.body && (
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {ls(s.body, locale)}
                  </p>
                )}
                {s.list && (
                  <ul className="flex flex-col gap-2">
                    {s.list.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 rounded-lg border border-border/50 bg-muted/20 p-3 text-sm sm:text-base"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="leading-relaxed text-foreground/90">
                          {ls(item, locale)}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                {s.code && <CopyBlock code={s.code} />}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-border/60 bg-card/40 p-5 text-center">
          <p className="text-sm text-muted-foreground">
            <Link href="/guides/build-from-source" className="font-medium text-primary hover:text-primary/80">
              {locale === 'my' ? 'Build အသေးအဖွဲ့ →' : 'Detailed build guide →'}
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
