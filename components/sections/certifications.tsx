'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Shield, CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/layout'
import { Badge } from '@/components/ui/badge'
import { NoiseTexture } from '@/components/effects/noise-texture'
import { cn } from '@/lib/utils'

const certifications = [
  {
    name: 'SOC 2 Type II',
    description: 'Certified for security, availability, and confidentiality',
    image: '/certifications/soc2.png',
  },
  {
    name: 'GDPR',
    description: 'Compliant with EU data protection regulations',
    image: '/certifications/gdpr.png',
  },
  {
    name: 'ISO 27001',
    description: 'Information security management certified',
    image: '/certifications/iso27001.webp',
  },
  {
    name: 'HIPAA',
    description: 'Healthcare data protection compliant',
    image: '/certifications/hipaa.png',
  },
]

export function Certifications() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-1/30 via-background to-background" />
      <NoiseTexture opacity={0.02} />

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge
            variant="primary"
            className={cn(
              'mb-4 px-3 py-1.5 text-xs font-medium border-0',
              'bg-white/60 dark:bg-white/[0.05]',
              'backdrop-blur-md',
              'text-brand-700 dark:text-brand-400'
            )}
          >
            <Shield className="w-3 h-3 mr-1.5" />
            Security & Compliance
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
            Our Certifications & Compliance
          </h2>
          <p className="mt-4 text-base md:text-lg text-text-secondary max-w-2xl mx-auto">
            Enterprise-grade security you can trust. We maintain the highest standards
            of data protection and regulatory compliance.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group"
            >
              <div
                className={cn(
                  'relative flex flex-col items-center p-4 md:p-6 rounded-2xl h-full',
                  'bg-white/70 dark:bg-white/[0.03]',
                  'backdrop-blur-xl',
                  'border border-white/50 dark:border-white/[0.08]',
                  'shadow-sm hover:shadow-lg',
                  'transition-all duration-300'
                )}
              >
                {/* Certification Image */}
                <div className="relative w-16 h-16 md:w-20 md:h-20 mb-3 md:mb-4">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Certification Name */}
                <h3 className="text-sm md:text-base font-semibold text-text-primary text-center">
                  {cert.name}
                </h3>

                {/* Description */}
                <p className="mt-1 text-xs text-text-tertiary text-center hidden md:block">
                  {cert.description}
                </p>

                {/* Verified Badge */}
                <div className="mt-2 md:mt-3 flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" />
                  <span className="text-[10px] md:text-xs font-medium">Verified</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Message */}
        <motion.p
          className="mt-8 md:mt-12 text-center text-sm text-text-tertiary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Your data security is our top priority. All certifications are independently audited and verified.
        </motion.p>
      </Container>
    </section>
  )
}
