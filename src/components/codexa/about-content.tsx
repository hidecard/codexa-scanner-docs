'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Github,
  Download,
  BookOpen,
  ShieldCheck,
  Lock,
  Database,
  Gauge,
  ArrowUpRight,
  Code2,
  Layers,
  Cpu,
  Terminal,
  ShieldAlert,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { PROJECT, STATS, TECH_STACK } from '@/lib/codexa-data'
import { useLanguage, useT } from '@/components/i18n/language-provider'
import { ls } from '@/lib/i18n/local-string'
import type { LocalString } from '@/lib/i18n/local-string'

const PHILOSOPHY: { icon: any; title: LocalString; body: LocalString }[] = [
  {
    icon: Gauge,
    title: { en: 'Bounded by design', my: 'ဒီဇိုင်းနဲ့ကန့်သတ်' },
    body: {
      en: 'Every module uses capped concurrency, timeouts and bounded response reads. Predictable, controlled, and safe to run.',
      my: 'Module တိုင်းက capped concurrency၊ timeout နဲ့ bounded response read သုံးတယ်။ ခန့်မှန်းလို့ရ၊ ထိန်းထား၊ လုံခြုံ။',
    },
  },
  {
    icon: ShieldCheck,
    title: { en: 'Authorization-first', my: 'Authorization ဦးစွာ' },
    body: {
      en: 'Each scan requires explicit confirmation for its exact target and range. Private/lab targets need a one-shot opt-in.',
      my: 'Scan တိုင်းက အတိအကျ target နဲ့ range အတွက် အတည်ပြုချက်လိုတယ်။ Private/lab target တွေက one-shot opt-in လိုတယ်။',
    },
  },
  {
    icon: Lock,
    title: { en: 'Passive & non-exploitative', my: 'Passive + non-exploitative' },
    body: {
      en: 'Checks surface indicators for review — never proof of exploitability. The path module is HEAD-only with no response bodies.',
      my: 'Check တွေက ဆန်းစစ်ဖို့ ညွှန်ကိန်းတွေပြတယ် — exploit ရကြောင်း သက်သေမဟုတ်။ Path module က HEAD-only၊ response body မရှိပါ။',
    },
  },
  {
    icon: Database,
    title: { en: 'Local & private', my: 'Local + private' },
    body: {
      en: 'History lives in a local SQLite file, auto-pruned to 2,000 records and never uploaded by the app.',
      my: 'History က local SQLite file မှာ၊ 2,000 record အထိ auto-prune၊ app က upload မလုပ်ပါ။',
    },
  },
]

const TECH_ICON_MAP: Record<string, any> = {
  Go: Code2,
  'Wails v2': Layers,
  React: Cpu,
  TypeScript: Terminal,
}

const L: Record<string, LocalString> = {
  badgeBy: { en: '· By ', my: '· ဖန်တီးသူ ' },
  hRecon: { en: 'A recon toolchain in one desktop app', my: 'Desktop app တစ်ခုတည်းမှာ recon toolchain' },
  whatIs: { en: 'What it is', my: 'ဘာလဲ' },
  p1: { en: 'Codexa Scanner is a desktop application for network reconnaissance and HTTP security-header inspection. It brings eight bounded modules — port scanning, web audit, subdomain discovery, path fuzzing, TLS inspection, DNS intelligence, IP information and history & reports — into a single cross-platform UI.', my: 'Codexa Scanner က ကွန်ရက်စူးစမ်းမှုနဲ့ HTTP လုံခြုံရေးဟက်ဒါ စစ်ဆေးခြင်းအတွက် desktop application။ ကန့်သတ် module ရှစ်ခု — port scanning, web audit, subdomain discovery, path fuzzing, TLS inspection, DNS intelligence, IP information + history & reports — ကို ခရိုစ်-ပလက်ဖောင်း UI တစ်ခုတည်းမှာပေါင်းတယ်။' },
  p2: { en: 'The React frontend calls Go methods exposed by Wails v2. The engine resolves, scopes and bounds every request before it leaves your machine: hostnames resolve once with a pinned address, HTTP clients are scoped per host/port, and ambient proxies are disabled so they cannot bypass address checks.', my: 'React frontend က Wails v2 က expose လုပ်ထားတဲ့ Go method တွေခေါ်တယ်။ Engine က request တွေကို သင့်မက်စင်ကနေမထွက်ခင် resolve၊ scope + bound လုပ်တယ်: hostname တွေက pinned address နဲ့ တစ်ကြိမ် resolve၊ HTTP client တွေက host/port အလိုက် scope၊ ambient proxy တွေကပိတ်ထားလို့ address check တွေကို bypass မလုပ်နိုင်။' },
  p3: { en: 'It is developed by ', my: 'ဖန်တီးသူ ' },
  p3post: { en: ' and built continuously by GitHub Actions, producing native packages for Linux, Windows and macOS.', my: ' ဖန်တီးပြီး GitHub Actions ကဆက်လက် build လုပ်တယ်၊ Linux, Windows, macOS အတွက် native package တွေထုတ်တယ်။' },
  philosophy: { en: 'Design philosophy', my: 'ဒီဇိုင်းအတွေးအခေါ်' },
  philosophyTitle: { en: 'Bounded, authorized, passive, local', my: 'ကန့်သတ်၊ authorized၊ passive၊ local' },
  builtWith: { en: 'Built with', my: 'တည်ဆောက်ထားတာ' },
  techTitle: { en: 'A modern desktop toolchain', my: 'ခေတ်မီ desktop toolchain' },
  buildRelease: { en: 'Build & release', my: 'Build + release' },
  buildTitle: { en: 'Continuously built, least-privilege CI', my: 'ဆက်လက် build၊ least-privilege CI' },
  buildBody: { en: 'GitHub Actions runs on pushes to main, pull requests and version tags. Permissions are least-privilege by default (contents: read); only the tag-release job is granted contents: write. The release attaches the .deb, .exe and both .dmg assets to a GitHub Release with generated notes. Frontend dependencies are pinned with a committed lockfile to reduce build drift.', my: 'GitHub Actions က main မှာ push၊ pull request + version tag မှာ run တယ်။ Permission တွေက least-privilege (contents: read); tag-release job သာ contents: write ရတယ်။ Release က .deb, .exe + .dmg asset နှစ်ခုကို generated notes နဲ့ GitHub Release မှာတွဲတယ်။ Frontend dependency တွေက committed lockfile နဲ့ pin ထားပြီး build drift လျှော့တယ်။' },
  authorized: { en: 'Authorized use only', my: 'ခွင့်ပြုထားတဲ့ အသုံးပြုမှုသာ' },
  authorizedBody: { en: 'Codexa Scanner is provided for authorized testing, education and defensive security work. You are responsible for obtaining permission, complying with applicable laws, and respecting target scope and rate limits. The authors accept no liability for misuse or damage.', my: 'Codexa Scanner ကို ခွင့်ပြုထားတဲ့ စမ်းသပ်မှု၊ ပညာရေး + ကာကွယ်ရေး လုံခြုံမှုလုပ်ငန်းအတွက်ပေးထားတယ်။ ခွင့်ပြုချက်ရယူခြင်း၊ လိုက်နာရမည့် ဥပဒေ၊ target scope + rate limit လေးစားခြင်းက သင့်တာဝန်ပါ။ မမှန်ကန်သုံးတာ ဒါမမဟုတ် ပျက်ဆီးမှုအတွက် ဖန်တီးသူတွေက တာဝန်မခံပါ။' },
  authorizedLink: { en: 'Read the full authorized-use notice', my: 'အပြည့်အဝ authorized-use သတိပြုစရာဖတ်ပါ' },
  releases: { en: 'Releases', my: 'ထွက်ရှိမှုများ' },
  buildFromSource: { en: 'Build from source', my: 'Source ကနေ build' },
}

export function AboutContent() {
  const { locale } = useLanguage()
  const t = useT()
  return (
    <div className="pt-28 pb-20 sm:pt-32 sm:pb-28">
      {/* hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 grid-pattern opacity-50" />
        <div className="absolute left-1/2 top-0 -z-10 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="mb-5 gap-1.5 border-primary/30 bg-primary/10 px-3 py-1 text-primary"
            >
              <span className="font-mono text-[11px]">{PROJECT.version}</span>
              <span className="text-muted-foreground">{ls(L.badgeBy, locale)}</span>
              <span className="text-[11px] font-medium text-muted-foreground">
                {PROJECT.author}
              </span>
            </Badge>
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
              <span className="text-glow text-primary">Codexa</span>{' '}
              <span className="text-foreground">Scanner</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              {ls(PROJECT.description, locale)}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-11 px-5">
                <a href={PROJECT.repo} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  {t('common.viewGithub')}
                </a>
              </Button>
              <Button asChild size="lg" className="h-11 px-5">
                <Link href="/download">
                  <Download className="mr-2 h-4 w-4" />
                  {t('common.download')}
                </Link>
              </Button>
              <Button asChild size="lg" className="h-11 px-5">
                <Link href="/guides">
                  <BookOpen className="mr-2 h-4 w-4" />
                  {t('common.documentation')}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* overview */}
      <section className="mt-16 sm:mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                {ls(L.whatIs, locale)}
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                {ls(L.hRecon, locale)}
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <p>{ls(L.p1, locale)}</p>
                <p>{ls(L.p2, locale)}</p>
                <p>
                  {ls(L.p3, locale)}
                  <span className="font-medium text-foreground">{PROJECT.author}</span>
                  {ls(L.p3post, locale)}
                </p>
              </div>
            </motion.div>

            {/* stats */}
            <motion.dl
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 gap-px overflow-hidden self-start rounded-xl border border-border/60 bg-border/60"
            >
              {STATS.map((s) => (
                <div key={s.label.en} className="bg-card/80 px-4 py-4">
                  <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    {ls(s.label, locale)}
                  </dt>
                  <dd className="mt-1 text-2xl font-bold text-foreground">
                    {ls(s.value, locale)}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>
        </div>
      </section>

      {/* philosophy */}
      <section className="mt-20 sm:mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            {ls(L.philosophy, locale)}
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            {ls(L.philosophyTitle, locale)}
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PHILOSOPHY.map((p, i) => {
              const Icon = p.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="rounded-xl border border-border/60 bg-card/60 p-5"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-primary/25 bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold tracking-tight">
                    {ls(p.title, locale)}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {ls(p.body, locale)}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* tech stack */}
      <section className="mt-20 sm:mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            {ls(L.builtWith, locale)}
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            {ls(L.techTitle, locale)}
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TECH_STACK.map((tech, i) => {
              const Icon = TECH_ICON_MAP[tech.name] ?? Code2
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/60 p-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{tech.name}</p>
                    <p className="text-xs text-muted-foreground">{ls(tech.role, locale)}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* build & release */}
      <section className="mt-20 sm:mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border/60 bg-card/60 p-6 sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              {ls(L.buildRelease, locale)}
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              {ls(L.buildTitle, locale)}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {ls(L.buildBody, locale)}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Button asChild variant="outline" size="sm">
                <a href={PROJECT.releases} target="_blank" rel="noopener noreferrer">
                  <ArrowUpRight className="mr-1.5 h-3.5 w-3.5" />
                  {ls(L.releases, locale)}
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="/guides/build-from-source">
                  <Terminal className="mr-1.5 h-3.5 w-3.5" />
                  {ls(L.buildFromSource, locale)}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* authorized-use */}
      <section className="mt-20 sm:mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/[0.06] p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-amber-500/40 bg-amber-500/15">
                <ShieldAlert className="h-5 w-5 text-amber-400" />
              </span>
              <div>
                <h2 className="text-lg font-semibold text-amber-200">
                  {ls(L.authorized, locale)}
                </h2>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-amber-100/80 sm:text-base">
                  {ls(L.authorizedBody, locale)}
                </p>
                <Link
                  href="/guides/authorized-use"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-amber-200 underline underline-offset-2 hover:text-amber-100"
                >
                  {ls(L.authorizedLink, locale)}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
