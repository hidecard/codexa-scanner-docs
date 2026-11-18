'use client'

import { motion } from 'framer-motion'
import { QUICK_STEPS, TECH_STACK } from '@/lib/codexa-data'
import { SectionHeading } from './section-heading'
import { AlertTriangle, ShieldAlert } from 'lucide-react'
import { useLanguage } from '@/components/i18n/language-provider'
import { ls } from '@/lib/i18n/local-string'
import type { LocalString } from '@/lib/i18n/local-string'

const QS_EYEBROW: LocalString = { en: 'Quick start', my: 'အမြန်စတင်' }
const QS_TITLE_PRE: LocalString = { en: 'From download to ', my: 'ဒေါင်းလုဒ်ကနေ ' }
const QS_TITLE_HL: LocalString = { en: 'first scan', my: 'ပထမ scan' }
const QS_TITLE_POST: LocalString = { en: ' in minutes', my: ' မိနစ်အနည်းငယ်အတွင်း' }
const QS_DESC: LocalString = {
  en: 'Four steps to go from a fresh install to an exported, remediation-ready report.',
  my: 'Fresh install ကနေ export လုပ်ထားတဲ့ remediation-ready report အထိ လေးအဆင့်။',
}
const TS_EYEBROW: LocalString = { en: 'Tech stack', my: 'Tech stack' }
const TS_TITLE_PRE: LocalString = { en: 'Built with a ', my: 'တည်ဆောက်ထားတာ ' }
const TS_TITLE_HL: LocalString = { en: 'modern', my: 'ခေတ်မီ' }
const TS_TITLE_POST: LocalString = { en: ' toolchain', my: ' toolchain နဲ့' }
const NOTICE_TITLE: LocalString = { en: 'Authorized-use notice', my: 'ခွင့်ပြုထားတဲ့ အသုံးပြုမှု သတိပြုစရာ' }
const NOTICE_BODY: LocalString = {
  en: 'Use Codexa Scanner only against systems you own or have explicit permission to assess. Port scanning and HTTP requests may be logged, trigger defensive controls, or violate policy or law when performed without authorization. All checks are passive and non-exploitative; results are indicators for review, not proof of exploitability or a substitute for a professional assessment. You are responsible for obtaining permission, complying with applicable laws, and respecting target scope and rate limits.',
  my: 'Codexa Scanner ကို သင်ပိုင်တဲ့ ဒါမမဟုတ် စစ်ဆေးဖို့ ခွင့်ပြုထားတဲ့ system တွေမှာသာသုံးပါ။ Port scanning နဲ့ HTTP request တွေက ခွင့်မပြုဘဲလုပ်ရင် log တက်၊ defensive control တက်၊ ဒါမမဟုတ် policy/law ပိုင်းဆိုင်ရာ ချိုးဖောက်နိုင်တယ်။ Check အကုန်က passive + non-exploitative; ရလဒ်တွေက ဆန်းစစ်ဖို့ ညွှန်ကိန်းတွေသာ၊ exploit ရကြောင်း သက်သေ ဒါမမဟုတ် ကျွမ်းကျင် စစ်ဆေးမှုအစား မဟုတ်ပါ။ ခွင့်ပြုချက်ရယူခြင်း၊ လိုက်နာရမည့် ဥပဒေတွေလိုက်နာခြင်း၊ target scope နဲ့ rate limit လေးစားခြင်းက သင့်တာဝန်ပါ။',
}
const NOTICE_FOOTER: LocalString = {
  en: 'A clean report does not mean a site is vulnerability-free.',
  my: 'Clean report ဆိုတာ site မှာ vulnerability မရှိလို့ မဆိုလိုပါ။',
}

export function QuickStart() {
  const { locale } = useLanguage()
  return (
    <section id="quick-start" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={ls(QS_EYEBROW, locale)}
          title={
            <>
              {ls(QS_TITLE_PRE, locale)}
              <span className="text-primary">{ls(QS_TITLE_HL, locale)}</span>
              {ls(QS_TITLE_POST, locale)}
            </>
          }
          description={ls(QS_DESC, locale)}
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {QUICK_STEPS.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="relative flex flex-col rounded-xl border border-border/60 bg-card/60 p-5"
            >
              <span className="font-mono text-3xl font-bold text-primary/30">
                {s.step}
              </span>
              <h3 className="mt-2 text-base font-semibold">{ls(s.title, locale)}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{ls(s.body, locale)}</p>

              {i < QUICK_STEPS.length - 1 && (
                <span className="absolute -right-2.5 top-1/2 hidden h-5 w-5 -translate-y-1/2 items-center justify-center text-primary lg:flex">
                  →
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* tech stack */}
        <div className="mt-16">
          <SectionHeading
            eyebrow={ls(TS_EYEBROW, locale)}
            title={
              <>
                {ls(TS_TITLE_PRE, locale)}
                <span className="text-primary">{ls(TS_TITLE_HL, locale)}</span>
                {ls(TS_TITLE_POST, locale)}
              </>
            }
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TECH_STACK.map((t, i) => {
              const Icon = t.icon
              return (
                <motion.div
                  key={t.name}
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
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{ls(t.role, locale)}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mt-16 overflow-hidden rounded-2xl border border-amber-500/30 bg-amber-500/[0.06] p-6"
        >
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-amber-500/40 bg-amber-500/15">
              <ShieldAlert className="h-5 w-5 text-amber-400" />
            </span>
            <div>
              <h3 className="flex items-center gap-2 text-base font-semibold text-amber-200">
                <AlertTriangle className="h-4 w-4" />
                {ls(NOTICE_TITLE, locale)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-amber-100/80">
                {ls(NOTICE_BODY, locale)}
              </p>
              <p className="mt-3 text-xs text-amber-100/60">
                {ls(NOTICE_FOOTER, locale)}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
