'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Download, BookOpen, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CtaBanner() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card p-8 sm:p-12"
        >
          <div
            aria-hidden
            className="absolute inset-0 -z-10 grid-pattern opacity-40"
          />
          <div
            aria-hidden
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/15 blur-[100px]"
          />
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Ready to run your first scan?
              </h2>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                Download Codexa Scanner for your platform, or read the guide to
                see how the bounded, authorization-first workflow keeps every
                check safe and reviewable.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 px-6">
                <Link href="/download">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-6">
                <Link href="/guide">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Read the guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
