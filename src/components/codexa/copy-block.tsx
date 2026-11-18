'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export function CopyBlock({ code }: { code: string }) {
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
