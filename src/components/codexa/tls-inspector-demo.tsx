'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Play, RotateCcw, Lock, Loader2, CheckCircle2, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/components/i18n/language-provider'
import { ls } from '@/lib/i18n/local-string'
import type { LocalString } from '@/lib/i18n/local-string'

const HOST = 'mail.example.com'

type Field = { label: LocalString; value: LocalString; ok?: boolean }

const FIELDS: Field[] = [
  {
    label: { en: 'Issuer', my: 'Issuer' },
    value: { en: 'Let’s Encrypt R3', my: 'Let’s Encrypt R3' },
    ok: true,
  },
  {
    label: { en: 'Validity', my: 'Validity' },
    value: { en: 'Valid · expires Mar 14, 2027', my: 'မှန် · Mar 14, 2027 ကုန်' },
    ok: true,
  },
  {
    label: { en: 'Subject Alternative Names', my: 'Subject Alternative Names' },
    value: { en: '3 — mail, api, www', my: '၃ — mail, api, www' },
    ok: true,
  },
  {
    label: { en: 'Negotiated cipher', my: 'Negotiated cipher' },
    value: { en: 'TLS_AES_256_GCM_SHA384', my: 'TLS_AES_256_GCM_SHA384' },
    ok: true,
  },
  {
    label: { en: 'Chain', my: 'Chain' },
    value: { en: '2 subjects presented', my: 'Subject ၂ ခုပါ' },
    ok: true,
  },
]

const TLS_PROBES: { ver: string; status: 'supported' | 'notsupported' | 'inconclusive' }[] = [
  { ver: 'TLS 1.3', status: 'supported' },
  { ver: 'TLS 1.2', status: 'supported' },
  { ver: 'TLS 1.1', status: 'inconclusive' },
  { ver: 'TLS 1.0', status: 'notsupported' },
]

const PROBE_STYLE: Record<string, string> = {
  supported: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  notsupported: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
  inconclusive: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
}

const L: Record<string, LocalString> = {
  titleBar: { en: 'Codexa Scanner — TLS Inspector', my: 'Codexa Scanner — TLS Inspector' },
  host: { en: 'Host:', my: 'Host:' },
  port: { en: ':443', my: ':443' },
  connecting: { en: 'Performing TLS handshake…', my: 'TLS handshake လုပ်နေ…' },
  complete: { en: 'inspection complete', my: 'inspection ပြီးပါပြီ' },
  ready: { en: 'Ready to inspect. Click “Inspect”.', my: 'Inspect လုပ်ဖို့ အဆင်သင့်။ “Inspect” ကိုနှိပ်ပါ။' },
  inspect: { en: 'Inspect', my: 'Inspect' },
  reset: { en: 'Reset', my: 'ပြန်စ' },
  certDetails: { en: 'Certificate details', my: 'Certificate အသေးအဖွဲ့' },
  legacyProbes: { en: 'Legacy TLS probes', my: 'Legacy TLS probe' },
  supported: { en: 'Supported', my: 'Support' },
  notsupported: { en: 'Not supported', my: 'မsupport' },
  inconclusive: { en: 'Inconclusive', my: 'Inconclusive' },
}

export function TlsInspectorCard() {
  const { locale } = useLanguage()
  const [phase, setPhase] = useState<'idle' | 'connecting' | 'done'>('idle')
  const [fieldsShown, setFieldsShown] = useState(0)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout)
    timers.current = []
  }, [])
  useEffect(() => () => clearTimers(), [clearTimers])
  const addTimer = (fn: () => void, ms: number) =>
    timers.current.push(setTimeout(fn, ms))

  const run = () => {
    clearTimers()
    setFieldsShown(0)
    setPhase('connecting')
    addTimer(() => setPhase('done'), 1200)
    FIELDS.forEach((_, i) => {
      addTimer(() => setFieldsShown(i + 1), 1200 + (i + 1) * 200)
    })
  }
  const reset = () => {
    clearTimers()
    setPhase('idle')
    setFieldsShown(0)
  }

  const probeLabel = (s: string) =>
    s === 'supported'
      ? ls(L.supported, locale)
      : s === 'notsupported'
        ? ls(L.notsupported, locale)
        : ls(L.inconclusive, locale)

  return (
    <div className="overflow-hidden rounded-2xl border border-border/70 bg-card/90 shadow-2xl shadow-black/40">
      <div className="flex items-center justify-between border-b border-border/60 bg-muted/30 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <span className="flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
          <Lock className="h-3 w-3 text-primary" />
          {ls(L.titleBar, locale)}
        </span>
        <Badge
          variant="outline"
          className="border-amber-500/30 bg-amber-500/10 font-mono text-[10px] text-amber-400"
        >
          DEMO
        </Badge>
      </div>

      <div className="flex flex-col gap-4 p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-2 rounded-md border border-border/60 bg-background/60 px-3 py-2">
          <span className="font-mono text-[11px] text-muted-foreground">
            {ls(L.host, locale)}
          </span>
          <span className="font-mono text-[11px] text-foreground">
            {HOST}
            <span className="text-muted-foreground">{ls(L.port, locale)}</span>
          </span>
        </div>

        <div className="flex min-h-[20px] items-center gap-2 font-mono text-[11px]">
          {phase === 'idle' && (
            <span className="text-muted-foreground">{ls(L.ready, locale)}</span>
          )}
          {phase === 'connecting' && (
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <Loader2 className="h-3 w-3 animate-spin text-primary" />
              {ls(L.connecting, locale)}
            </span>
          )}
          {phase === 'done' && (
            <span className="text-emerald-400">{ls(L.complete, locale)}</span>
          )}
        </div>

        {phase !== 'idle' && (
          <div className="flex flex-col gap-5">
            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                {ls(L.certDetails, locale)}
              </p>
              <div className="overflow-hidden rounded-md border border-border/50">
                <div className="divide-y divide-border/40">
                  {FIELDS.slice(0, fieldsShown).map((f, idx) => {
                    const Icon = f.ok ? CheckCircle2 : AlertTriangle
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25 }}
                        className="grid grid-cols-[120px_1fr] items-center gap-2 px-3 py-1.5"
                      >
                        <span className="text-[11px] font-medium text-muted-foreground">
                          {ls(f.label, locale)}
                        </span>
                        <span className="flex items-center gap-1.5 font-mono text-[11px] text-foreground">
                          <Icon className="h-3 w-3 shrink-0 text-emerald-400" />
                          {ls(f.value, locale)}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>

            {phase === 'done' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {ls(L.legacyProbes, locale)}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {TLS_PROBES.map((p) => (
                    <div
                      key={p.ver}
                      className={`flex items-center justify-between rounded-md border px-3 py-1.5 font-mono text-[11px] ${PROBE_STYLE[p.status]}`}
                    >
                      <span>{p.ver}</span>
                      <span className="text-[10px] font-semibold">
                        {probeLabel(p.status)}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        )}

        <div className="flex justify-end gap-2">
          {phase === 'done' ? (
            <Button onClick={reset} variant="outline" size="sm">
              <RotateCcw className="mr-1.5 h-3.5 w-3.5" />
              {ls(L.reset, locale)}
            </Button>
          ) : (
            <Button onClick={run} size="sm" disabled={phase !== 'idle'}>
              <Play className="mr-1.5 h-3.5 w-3.5" />
              {ls(L.inspect, locale)}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
