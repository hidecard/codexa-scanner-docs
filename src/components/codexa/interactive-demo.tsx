'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from './section-heading'
import { PortScanCard } from './port-scan-card'
import { useT } from '@/components/i18n/language-provider'

export function InteractiveDemo() {
  const t = useT()
  return (
    <section className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />
      <div className="absolute left-1/2 top-1/3 -z-10 h-[260px] w-[460px] -translate-x-1/2 rounded-full bg-primary/10 blur-[110px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t('demo.eyebrow')}
          title={
            <>
              {t('demo.title').split(t('demo.titleHighlight'))[0]}
              <span className="text-primary">{t('demo.titleHighlight')}</span>
              {t('demo.title').split(t('demo.titleHighlight'))[1]}
            </>
          }
          description={t('demo.desc')}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-12 max-w-3xl"
        >
          <PortScanCard />
          <p className="mt-4 text-center text-xs text-muted-foreground">
            {t('demo.disclaimer')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
