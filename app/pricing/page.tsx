'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ChevronDown, Sparkles } from 'lucide-react'
import { Container } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GradientOrb, FloatingOrb } from '@/components/effects/gradient-orbs'
import { NoiseTexture } from '@/components/effects/noise-texture'
import { pricingPlans } from '@/lib/constants'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'How do I get started?',
    answer: 'Contact our sales team to schedule a demo and discuss your testing needs. We\'ll help you choose the right plan for your organization.',
  },
  {
    question: 'Can I change plans later?',
    answer: 'Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, ACH transfers, and wire transfers for Enterprise customers. Annual billing is available with a 20% discount.',
  },
  {
    question: 'Do you offer discounts for startups?',
    answer: 'Yes, we have a startup program offering 50% off for the first year. Contact our sales team to learn more about eligibility.',
  },
  {
    question: 'What happens if I exceed my plan limits?',
    answer: 'We\'ll notify you as you approach your limits. You can either upgrade your plan or purchase additional capacity as needed.',
  },
  {
    question: 'Is there an on-premise option?',
    answer: 'Yes, our Enterprise plan includes an on-premise deployment option for organizations with specific security or compliance requirements.',
  },
]

function AccordionItem({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: { question: string; answer: string }
  isOpen: boolean
  onToggle: () => void
  index: number
}) {
  return (
    <div className="border-b border-border/50 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <h3 className="font-medium text-text-primary group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
          {faq.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown
            className={cn(
              'w-5 h-5 flex-shrink-0 transition-colors',
              isOpen ? 'text-brand-600 dark:text-brand-400' : 'text-text-tertiary'
            )}
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-text-secondary leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function PricingPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-1/50 via-background to-background" />
        <NoiseTexture opacity={0.02} />
        <GradientOrb
          size="xl"
          color="brand"
          intensity="subtle"
          className="top-[-20%] right-[10%]"
          parallaxSpeed={0.3}
        />
        <FloatingOrb
          size="md"
          color="accent"
          className="bottom-[10%] left-[5%]"
        />

        <Container className="relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
              Pricing
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary">
              Pricing that scales with your{' '}
              <span className="relative">
                <span className="text-brand-700 dark:text-brand-500">ambition</span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-brand-600 to-brand-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
            </h1>
            <p className="mt-6 text-xl text-text-secondary">
              Start free, scale as you grow. All plans include unlimited users.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={cn(
                    'relative p-4 md:p-8 h-full',
                    'bg-white/60 dark:bg-white/[0.02]',
                    'backdrop-blur-xl backdrop-saturate-150',
                    'border border-white/50 dark:border-white/[0.06]',
                    'transition-all duration-300 hover:shadow-xl',
                    plan.highlighted && 'ring-2 ring-brand-500 shadow-glow'
                  )}
                >
                  {plan.highlighted && (
                    <Badge
                      variant="primary"
                      className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-600 to-brand-500 border-0"
                    >
                      <Sparkles className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  )}

                  <div className="text-center mb-4 md:mb-6">
                    <h3 className="text-lg md:text-xl font-semibold text-text-primary">
                      {plan.name}
                    </h3>
                    <p className="mt-2 text-sm text-text-secondary h-10 md:h-12">
                      {plan.description}
                    </p>
                  </div>

                  <div className="text-center mb-6 md:mb-8">
                    <span className="text-3xl md:text-4xl font-bold text-text-primary">Custom</span>
                    <p className="text-sm text-text-tertiary mt-1">Contact for pricing</p>
                  </div>

                  <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <div className="w-5 h-5 rounded-full bg-brand-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-brand-600" />
                        </div>
                        <span className="text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className="block">
                    <Button
                      variant={plan.highlighted ? 'primary' : 'secondary'}
                      className={cn(
                        'w-full',
                        plan.highlighted && 'shadow-lg shadow-brand-500/25'
                      )}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-surface-1/50">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <Badge variant="primary" className="mb-4">FAQ</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-text-secondary">
              Everything you need to know about SimplifyQA pricing.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div
              className={cn(
                'rounded-2xl p-6 md:p-8',
                'bg-white/70 dark:bg-white/[0.02]',
                'border border-border/50'
              )}
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  faq={faq}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-text-secondary mb-4">
              Still have questions?
            </p>
            <Link href="/contact">
              <Button variant="secondary">Contact Sales</Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
