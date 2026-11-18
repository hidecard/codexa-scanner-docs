'use client'

import { motion } from 'framer-motion'
import { Radar, ShieldCheck, Lock, AlertTriangle } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { PortScanCard } from './port-scan-card'
import { WebAuditCard } from './web-audit-demo'
import { TlsInspectorCard } from './tls-inspector-demo'
import { useLanguage } from '@/components/i18n/language-provider'
import { ls } from '@/lib/i18n/local-string'
import type { LocalString } from '@/lib/i18n/local-string'

const EYEBROW: LocalString = { en: 'Playground', my: 'Playground' }
const TITLE: LocalString = { en: 'Interactive playground', my: 'Interactive playground' }
const DESC: LocalString = {
  en: 'Simulated runs of three Codexa Scanner modules — no real network requests are made. Click run to watch how each module surfaces results.',
  my: 'Codexa Scanner module ၃ ခုရဲ့ တုပစမ်း run — တကယ့်ကွန်ရက် request တွေမလုပ်ပါ။ Run ကိုနှိပ်ပြီး ဘယ်လိုရလဒ်ပေါ်လဲကြည့်ပါ။',
}
const TAB_PORT: LocalString = { en: 'Port Scanner', my: 'Port Scanner' }
const TAB_WEB: LocalString = { en: 'Web Audit', my: 'Web Audit' }
const TAB_TLS: LocalString = { en: 'TLS Inspector', my: 'TLS Inspector' }
const DISCLAIMER: LocalString = {
  en: 'All output is simulated for demonstration only. Actual scans require authorization and run against targets you own or have explicit permission to assess.',
  my: 'ရလဒ်အကုန်က ပြသမှုအတွက်သာ simulated။ တကယ့် scan တွေက authorization လိုပြီး သင်ပိုင်တဲ့ ဒါမမဟုတ် စစ်ဆေးဖို့ခွင့်ပြုထားတဲ့ target တွေမှာသာ run လုပ်ပါ။',
}

export function PlaygroundContent() {
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
            <Radar className="h-4 w-4 text-primary" />
            {ls(EYEBROW, locale)}
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {ls(TITLE, locale)}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
            {ls(DESC, locale)}
          </p>
        </motion.div>

        <div className="mt-8">
          <Tabs defaultValue="port">
            <TabsList className="flex w-full flex-wrap justify-start gap-1 bg-muted/40">
              <TabsTrigger value="port" className="flex-1 whitespace-nowrap text-xs sm:text-sm">
                <Radar className="mr-1.5 h-3.5 w-3.5" />
                {ls(TAB_PORT, locale)}
              </TabsTrigger>
              <TabsTrigger value="web" className="flex-1 whitespace-nowrap text-xs sm:text-sm">
                <ShieldCheck className="mr-1.5 h-3.5 w-3.5" />
                {ls(TAB_WEB, locale)}
              </TabsTrigger>
              <TabsTrigger value="tls" className="flex-1 whitespace-nowrap text-xs sm:text-sm">
                <Lock className="mr-1.5 h-3.5 w-3.5" />
                {ls(TAB_TLS, locale)}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="port" className="mt-5">
              <PortScanCard />
            </TabsContent>
            <TabsContent value="web" className="mt-5">
              <WebAuditCard />
            </TabsContent>
            <TabsContent value="tls" className="mt-5">
              <TlsInspectorCard />
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-500/30 bg-amber-500/[0.06] p-4">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
          <p className="text-xs leading-relaxed text-amber-100/80">
            {ls(DISCLAIMER, locale)}
          </p>
        </div>
      </div>
    </div>
  )
}
