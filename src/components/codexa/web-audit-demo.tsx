'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Play,
  RotateCcw,
  ShieldCheck,
  Loader2,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Gauge,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/components/i18n/language-provider'
import { ls } from '@/lib/i18n/local-string'
import type { LocalString } from '@/lib/i18n/local-string'

type Sev = 'pass' | 'warn' | 'fail'

type Finding = {
  check: LocalString
  detail: LocalString
  sev: Sev
}

const URL_TARGET = 'https://shop.example.com'

const FINDINGS: Finding[] = [
  {
    check: { en: 'HTTPS transport', my: 'HTTPS transport' },
    detail: { en: 'Connection upgraded to HTTPS', my: 'Connection ကို HTTPS ကိုတိုး' },
    sev: 'pass',
  },
  {
    check: { en: 'TLS certificate', my: 'TLS certificate' },
    detail: { en: 'Valid — 89 days remaining, trusted chain', my: 'မှန်ကန် — နေ့ ၈၉ ကျန်၊ trusted chain' },
    sev: 'pass',
  },
  {
    check: { en: 'Strict-Transport-Security', my: 'Strict-Transport-Security' },
    detail: { en: 'Header missing', my: 'Header မပါ' },
    sev: 'warn',
  },
  {
    check: { en: 'Content-Security-Policy', my: 'Content-Security-Policy' },
    detail: { en: 'Present but contains unsafe-inline', my: 'ပါပေမယ့် unsafe-inline ပါ' },
    sev: 'warn',
  },
  {
    check: { en: 'X-Content-Type-Options', my: 'X-Content-Type-Options' },
    detail: { en: 'nosniff — present', my: 'nosniff — ပါ' },
    sev: 'pass',
  },
  {
    check: { en: 'X-Frame-Options', my: 'X-Frame-Options' },
    detail: { en: 'DENY — present', my: 'DENY — ပါ' },
    sev: 'pass',
  },
  {
    check: { en: 'Cookie attributes', my: 'Cookie attribute' },
    detail: { en: '1 session cookie missing Secure', my: 'Session cookie တစ်ခုတွင် Secure မပါ' },
    sev: 'fail',
  },
  {
    check: { en: 'Mixed content', my: 'Mixed content' },
    detail: { en: 'No insecure sub-resources', my: 'Insecure sub-resource မရှိ' },
    sev: 'pass',
  },
]

const SEV_STYLE: Record<Sev, string> = {
  pass: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  warn: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
  fail: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
}
const SEV_ICON: Record<Sev, any> = {
  pass: CheckCircle2,
  warn: AlertTriangle,
  fail: XCircle,
}

const RISK_SCORE = 62
const GRADE = 'C'

const L: Record<string, LocalString> = {
  titleBar: { en: 'Codexa Scanner — Web Audit', my: 'Codexa Scanner — Web Audit' },
  url: { en: 'URL:', my: 'URL:' },
  resolving: { en: 'Resolving + scoping redirect chain…', my: 'Resolving + redirect chain scope လုပ်နေ…' },
  running: { en: 'auditing…', my: 'audit လုပ်နေ…' },
  complete: { en: 'audit complete', my: 'audit ပြီးပါပြီ' },
  ready: { en: 'Ready to audit. Click “Run audit”.', my: 'Audit လုပ်ဖို့ အဆင်သင့်။ “Run audit” ကိုနှိပ်ပါ။' },
  check: { en: 'Check', my: 'Check' },
  result: { en: 'Result', my: 'ရလဒ်' },
  riskScore: { en: 'Risk score', my: 'Risk score' },
  grade: { en: 'Grade', my: 'Grade' },
  runAudit: { en: 'Run audit', my: 'Audit လုပ်' },
  reset: { en: 'Reset', my: 'ပြန်စ' },
  awaiting: { en: 'Awaiting audit…', my: 'Audit စောင့်နေ…' },
}

export function WebAuditCard() {
  const { locale } = useLanguage()
  const [phase, setPhase] = useState<'idle' | 'resolving' | 'running' | 'done'>('idle')
  const [revealed, setRevealed] = useState(0)
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
    setRevealed(0)
    setPhase('resolving')
    addTimer(() => setPhase('running'), 1000)
    FINDINGS.forEach((_, i) => {
      addTimer(() => setRevealed(i + 1), 1000 + 300 + (i + 1) * 280)
    })
    addTimer(() => setPhase('done'), 1000 + 300 + FINDINGS.length * 280 + 200)
  }
  const reset = () => {
    clearTimers()
    setPhase('idle')
    setRevealed(0)
  }

  const passCount = FINDINGS.slice(0, revealed).filter((f) => f.sev === 'pass').length
  const warnCount = FINDINGS.slice(0, revealed).filter((f) => f.sev === 'warn').length
  const failCount = FINDINGS.slice(0, revealed).filter((f) => f.sev === 'fail').length

  return (
    <div className="overflow-hidden rounded-2xl border border-border/70 bg-card/90 shadow-2xl shadow-black/40">
      <div className="flex items-center justify-between border-b border-border/60 bg-muted/30 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <span className="flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
          <ShieldCheck className="h-3 w-3 text-primary" />
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
            {ls(L.url, locale)}
          </span>
          <span className="font-mono text-[11px] text-foreground">{URL_TARGET}</span>
        </div>

        <div className="flex min-h-[20px] items-center gap-2 font-mono text-[11px]">
          {phase === 'idle' && (
            <span className="text-muted-foreground">{ls(L.ready, locale)}</span>
          )}
          {phase === 'resolving' && (
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <Loader2 className="h-3 w-3 animate-spin text-primary" />
              {ls(L.resolving, locale)}
            </span>
          )}
          {(phase === 'running' || phase === 'done') && (
            <span className={phase === 'done' ? 'text-emerald-400' : 'text-primary'}>
              {phase === 'done' ? ls(L.complete, locale) : `${ls(L.running, locale)} ${revealed}/${FINDINGS.length}`}
            </span>
          )}
        </div>

        <div className="overflow-hidden rounded-md border border-border/50">
          <div className="grid grid-cols-[1fr_110px] gap-2 border-b border-border/50 bg-muted/30 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            <span>{ls(L.check, locale)}</span>
            <span className="text-right">{ls(L.result, locale)}</span>
          </div>
          <div className="min-h-[150px] divide-y divide-border/40">
            {FINDINGS.slice(0, revealed).map((f, idx) => {
              const Icon = SEV_ICON[f.sev]
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-[1fr_110px] items-center gap-2 px-3 py-1.5"
                >
                  <div className="min-w-0">
                    <p className="truncate text-[11px] font-medium text-foreground">
                      {ls(f.check, locale)}
                    </p>
                    <p className="truncate text-[10px] text-muted-foreground">
                      {ls(f.detail, locale)}
                    </p>
                  </div>
                  <span className="flex justify-end">
                    <span
                      className={`inline-flex items-center gap-1 rounded border px-1.5 py-0.5 text-[10px] font-semibold ${SEV_STYLE[f.sev]}`}
                    >
                      <Icon className="h-2.5 w-2.5" />
                      {f.sev}
                    </span>
                  </span>
                </motion.div>
              )
            })}
            {revealed === 0 && (
              <div className="px-3 py-8 text-center font-mono text-[11px] text-muted-foreground">
                {ls(L.awaiting, locale)}
              </div>
            )}
          </div>
        </div>

        {phase === 'done' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 gap-3"
          >
            <div className="rounded-lg border border-border/60 bg-muted/20 p-3">
              <p className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                <Gauge className="h-3 w-3 text-primary" />
                {ls(L.riskScore, locale)}
              </p>
              <motion.p
                className="mt-1 font-mono text-2xl font-bold text-amber-400"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
              >
                {RISK_SCORE}
                <span className="text-sm text-muted-foreground">/100</span>
              </motion.p>
            </div>
            <div className="rounded-lg border border-border/60 bg-muted/20 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                {ls(L.grade, locale)}
              </p>
              <motion.p
                className="mt-1 font-mono text-2xl font-bold text-amber-400"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
              >
                {GRADE}
              </motion.p>
            </div>
          </motion.div>
        )}

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-3 font-mono text-[11px] text-muted-foreground">
            {phase !== 'idle' && (
              <>
                <span className="text-emerald-400">{passCount} pass</span>
                <span className="text-amber-400">{warnCount} warn</span>
                <span className="text-rose-400">{failCount} fail</span>
              </>
            )}
          </div>
          <div className="flex gap-2">
            {phase === 'done' ? (
              <Button onClick={reset} variant="outline" size="sm">
                <RotateCcw className="mr-1.5 h-3.5 w-3.5" />
                {ls(L.reset, locale)}
              </Button>
            ) : (
              <Button onClick={run} size="sm" disabled={phase !== 'idle'}>
                <Play className="mr-1.5 h-3.5 w-3.5" />
                {phase === 'idle' ? ls(L.runAudit, locale) : ls(L.running, locale)}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
