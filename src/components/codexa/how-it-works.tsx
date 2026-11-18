'use client'

import { motion } from 'framer-motion'
import { Monitor, ArrowRight, Boxes, ArrowLeft, Server } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { useLanguage } from '@/components/i18n/language-provider'
import { ls } from '@/lib/i18n/local-string'
import type { LocalString } from '@/lib/i18n/local-string'
import type { LucideIcon } from 'lucide-react'

type FlowNode = { icon: LucideIcon; label: LocalString; detail: LocalString }

const FLOW: FlowNode[] = [
  {
    icon: Monitor,
    label: { en: 'React + TypeScript UI', my: 'React + TypeScript UI' },
    detail: {
      en: 'Component-based frontend renders live scan results and calls Go methods exposed by Wails bindings.',
      my: 'Component-based frontend က live scan ရလဒ်တွေပြပြီး Wails binding တွေကို expose လုပ်ထားတဲ့ Go method တွေကိုခေါ်တယ်။',
    },
  },
  {
    icon: Boxes,
    label: { en: 'Wails v2 Runtime', my: 'Wails v2 Runtime' },
    detail: {
      en: 'Cross-platform desktop bridge. Binds frontend methods to Go functions and ships native webview shells per OS.',
      my: 'ခရိုစ်-ပလက်ဖောင်း desktop bridge။ Frontend method တွေကို Go function နဲ့ bind လုပ်ပြီး OS အလိုက် native webview shell တွေပါ။',
    },
  },
  {
    icon: Server,
    label: { en: 'Go Networking Engine', my: 'Go ကွန်ရက် Engine' },
    detail: {
      en: 'Bounded worker pools, DNS pinning, scoped HTTP clients, TLS validation and local SQLite history — all in Go.',
      my: 'Bounded worker pool၊ DNS pinning၊ scoped HTTP client၊ TLS validation + local SQLite history — အကုန် Go နဲ့။',
    },
  },
]

const PRINCIPLES: { title: LocalString; body: LocalString }[] = [
  {
    title: { en: 'Bounded by design', my: 'ဒီဇိုင်းနဲ့ကန့်သတ်' },
    body: {
      en: 'Every module uses capped concurrency, timeouts and bounded response reads to stay safe and predictable.',
      my: 'Module တိုင်းက capped concurrency၊ timeout နဲ့ bounded response read သုံးပြီး လုံခြုံ + ခန့်မှန်းလို့ရတယ်။',
    },
  },
  {
    title: { en: 'Authorization first', my: 'Authorization ဦးစွာ' },
    body: {
      en: 'Each scan requires explicit confirmation for its exact target and range. Private/lab targets need a one-shot opt-in.',
      my: 'Scan တိုင်းက အတိအကျ target နဲ့ range အတွက် အတည်ပြုချက်လိုတယ်။ Private/lab target တွေက one-shot opt-in လိုတယ်။',
    },
  },
  {
    title: { en: 'Passive & non-exploitative', my: 'Passive + non-exploitative' },
    body: {
      en: 'Checks surface indicators for review — never proof of exploitability. Path discovery is HEAD-only with no bodies.',
      my: 'Check တွေက ဆန်းစစ်ဖို့ ညွှန်ကိန်းတွေပြတယ် — exploit ရကြောင်း သက်သေမဟုတ်။ Path discovery က HEAD-only၊ body မရှိပါ။',
    },
  },
  {
    title: { en: 'Local & private', my: 'Local + private' },
    body: {
      en: 'History lives in a local SQLite file, auto-pruned to 2,000 records. Nothing is uploaded by the app.',
      my: 'History က local SQLite file မှာ၊ 2,000 record အထိ auto-prune။ App ကဘာမျှ upload မလုပ်ပါ။',
    },
  },
]

const LAYER_LABEL: LocalString = { en: 'Layer', my: 'လွှာ' }
const EYEBROW: LocalString = { en: 'How it works', my: 'ဘယ်လိုလုပ်ဆောင်လဲ' }
const TITLE_PRE: LocalString = { en: 'A ', my: 'တစ်ခု ' }
const TITLE_HL: LocalString = { en: 'layered', my: 'အလွှာလွှာ' }
const TITLE_POST: LocalString = { en: ' desktop architecture', my: ' desktop architecture' }
const DESC: LocalString = {
  en: 'The React UI talks to a Go backend through Wails bindings. The engine resolves, scopes and bounds every request before it ever leaves your machine.',
  my: 'React UI က Wails binding တွေဆီကနေ Go backend နဲ့စကားပြောတယ်။ Engine က request တွေကို သင့်မက်စင်ကနေမထွက်ခင် resolve၊ scope + bound လုပ်တယ်။',
}
const LIFECYCLE_LABEL: LocalString = { en: 'Request lifecycle:', my: 'Request lifecycle:' }
const LIFECYCLE_BODY: LocalString = {
  en: 'DNS resolves once → one deterministic address pinned → bounded worker pool streams results → findings saved to local SQLite with bounded redaction.',
  my: 'DNS တစ်ကြိမ် resolve → တိကျတဲ့ address တစ်ခု pin → bounded worker pool ကရလဒ် stream → ရလဒ်တွေကို bounded redaction နဲ့ local SQLite မှာသိမ်း။',
}

export function HowItWorks() {
  const { locale } = useLanguage()
  return (
    <section id="how-it-works" className="relative pt-28 pb-20 sm:pt-32 sm:pb-28">
      <div className="absolute inset-0 -z-10 dot-pattern opacity-30" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={ls(EYEBROW, locale)}
          title={
            <>
              {ls(TITLE_PRE, locale)}
              <span className="text-primary">{ls(TITLE_HL, locale)}</span>
              {ls(TITLE_POST, locale)}
            </>
          }
          description={ls(DESC, locale)}
        />

        {/* architecture flow */}
        <div className="mt-14">
          <div className="grid items-stretch gap-4 lg:grid-cols-3">
            {FLOW.map((node, i) => {
              const Icon = node.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: i * 0.12 }}
                  className="relative flex flex-col rounded-xl border border-border/60 bg-card/60 p-5"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/25 bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {ls(LAYER_LABEL, locale)} {i + 1}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold">{ls(node.label, locale)}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {ls(node.detail, locale)}
                  </p>

                  {i < FLOW.length - 1 && (
                    <span className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-background text-primary lg:flex">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* request lifecycle note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="mt-4 flex items-center gap-3 rounded-xl border border-border/60 bg-muted/20 px-5 py-4 text-sm text-muted-foreground"
          >
            <ArrowLeft className="h-4 w-4 rotate-180 text-primary" />
            <span>
              <span className="font-medium text-foreground">{ls(LIFECYCLE_LABEL, locale)}</span>{' '}
              {ls(LIFECYCLE_BODY, locale)}
            </span>
          </motion.div>
        </div>

        {/* principles */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-border/50 bg-card/40 p-4"
            >
              <h4 className="text-sm font-semibold text-foreground">
                {ls(p.title, locale)}
              </h4>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                {ls(p.body, locale)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
