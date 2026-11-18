'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: {
  eyebrow: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'center' | 'left'
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col gap-3 ${
        align === 'center' ? 'items-center text-center' : 'items-start text-left'
      }`}
    >
      <Badge
        variant="outline"
        className="gap-1.5 border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-primary"
      >
        {eyebrow}
      </Badge>
      <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  )
}
