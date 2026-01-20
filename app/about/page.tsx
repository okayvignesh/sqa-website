'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight,
  Users,
  Globe2,
  Award,
  Briefcase,
  Sparkles,
  Target,
  Heart,
  Zap,
  MapPin,
  CheckCircle2,
  Code2,
  Cpu,
  Shield,
  BarChart3,
  Play,
  Layers,
} from 'lucide-react'
import { Container } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { GradientOrb, FloatingOrb } from '@/components/effects/gradient-orbs'
import { NoiseTexture } from '@/components/effects/noise-texture'
import { CTASection } from '@/components/sections'
import { cn } from '@/lib/utils'
import * as variants from '@/components/motion/motion-variants'

const stats = [
  { label: 'Team Members', value: '500+', icon: Users, color: 'from-blue-500 to-blue-600' },
  { label: 'Global Offices', value: '4', icon: Globe2, color: 'from-brand-500 to-brand-600' },
  { label: 'Organizations', value: '100+', icon: Briefcase, color: 'from-violet-500 to-violet-600' },
  { label: 'Projects Delivered', value: '500+', icon: Award, color: 'from-emerald-500 to-emerald-600' },
]

const values = [
  {
    title: 'Future Ready',
    description: 'Building solutions designed for tomorrow\'s challenges, not yesterday\'s problems.',
    icon: Sparkles,
    gradient: 'from-violet-500/10 to-purple-500/10',
  },
  {
    title: 'Trustworthy',
    description: 'Reliable technology you can depend on for your most critical testing workflows.',
    icon: Target,
    gradient: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    title: 'Inclusive',
    description: 'Empowering people of all technical backgrounds to participate in quality assurance.',
    icon: Heart,
    gradient: 'from-rose-500/10 to-pink-500/10',
  },
  {
    title: 'Impact Driven',
    description: 'Simplifying complexity to deliver real, measurable results for our customers.',
    icon: Zap,
    gradient: 'from-amber-500/10 to-orange-500/10',
  },
]

const timeline = [
  { year: '2015', event: 'Simplify3x founded in Bengaluru, India', highlight: false },
  { year: '2017', event: 'First version of SimplifyQA launched', highlight: false },
  { year: '2019', event: 'Expanded to serve enterprise clients globally', highlight: false },
  { year: '2021', event: 'Introduced AI-powered test generation', highlight: true },
  { year: '2023', event: 'Reached 100+ enterprise customers', highlight: false },
  { year: '2024', event: 'Launched next-generation platform', highlight: true },
]

const offices = [
  { city: 'Bengaluru', country: 'India', role: 'Global HQ', isHQ: true },
  { city: 'New York', country: 'USA', role: 'Americas', isHQ: false },
  { city: 'London', country: 'UK', role: 'EMEA', isHQ: false },
  { city: 'Singapore', country: 'Singapore', role: 'APAC', isHQ: false },
]

// QA-themed floating elements for visual interest
const qaFeatures = [
  { icon: CheckCircle2, label: 'Auto Testing', delay: 0 },
  { icon: Code2, label: 'Codeless', delay: 0.1 },
  { icon: Cpu, label: 'AI Powered', delay: 0.2 },
  { icon: Shield, label: 'Secure', delay: 0.3 },
  { icon: BarChart3, label: 'Analytics', delay: 0.4 },
  { icon: Play, label: 'CI/CD Ready', delay: 0.5 },
]

export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  return (
    <>
      {/* ========== HERO WITH QA VISUAL ========== */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden pt-20"
      >
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface-1/50 via-background to-background" />
        <NoiseTexture opacity={0.02} />

        {/* Gradient orbs */}
        <GradientOrb
          size="xl"
          color="brand"
          intensity="subtle"
          className="top-[-10%] left-[-10%]"
          parallaxSpeed={0.3}
        />
        <FloatingOrb
          size="lg"
          color="accent"
          className="bottom-[10%] right-[-5%]"
        />

        <Container className="relative z-10">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            style={{ opacity: heroOpacity, scale: heroScale }}
          >
            {/* Left - Content */}
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge
                  variant="primary"
                  className={cn(
                    'mb-6 px-3 py-1.5 text-xs font-medium border-0',
                    'bg-white/60 dark:bg-white/[0.05]',
                    'backdrop-blur-md',
                    'text-brand-700 dark:text-brand-400'
                  )}
                >
                  About SimplifyQA
                </Badge>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-[1.1]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Turning complexity into{' '}
                <span className="relative">
                  <span className="text-brand-700 dark:text-brand-500">clarity</span>
                  <motion.span
                    className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-brand-600 to-brand-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                </span>{' '}
                since 2015
              </motion.h1>

              <motion.p
                className="mt-6 text-lg text-text-secondary leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                We believe testing shouldn&apos;t be a bottleneck. SimplifyQA exists to give
                every software team—regardless of technical expertise—the power to ship
                quality products confidently.
              </motion.p>

              {/* Quick stats */}
              <motion.div
                className="mt-10 grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {stats.slice(0, 2).map((stat) => (
                  <div
                    key={stat.label}
                    className={cn(
                      'p-4 rounded-2xl',
                      'bg-white/50 dark:bg-white/[0.02]',
                      'backdrop-blur-lg',
                      'border border-white/40 dark:border-white/[0.06]'
                    )}
                  >
                    <div
                      className={cn(
                        'w-10 h-10 rounded-xl flex items-center justify-center mb-3',
                        'bg-gradient-to-br',
                        stat.color
                      )}
                    >
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-2xl font-bold text-text-primary">{stat.value}</p>
                    <p className="text-sm text-text-secondary">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right - QA Visual */}
            <motion.div
              className="relative h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px] flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* Central glass card with logo */}
              <div className="relative">
                {/* Animated rings */}
                <motion.div
                  className="absolute inset-0 -m-16 rounded-full border border-brand-500/20"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.1, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute inset-0 -m-32 rounded-full border border-brand-500/10"
                  animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.05, 0.2] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                />
                <motion.div
                  className="absolute inset-0 -m-48 rounded-full border border-brand-500/5"
                  animate={{ scale: [1, 1.03, 1], opacity: [0.1, 0.02, 0.1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                />

                {/* Main card */}
                <motion.div
                  className={cn(
                    'relative w-64 h-64 md:w-80 md:h-80 rounded-3xl',
                    'bg-white/70 dark:bg-white/[0.03]',
                    'backdrop-blur-2xl backdrop-saturate-150',
                    'border border-white/60 dark:border-white/[0.08]',
                    'shadow-[0_32px_64px_rgba(0,0,0,0.1)]',
                    'dark:shadow-[0_32px_64px_rgba(0,0,0,0.4)]',
                    'flex flex-col items-center justify-center',
                    'overflow-hidden'
                  )}
                  whileHover={{ scale: 1.02, rotateY: 5, rotateX: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-brand-600/10" />

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    initial={{ x: '-200%' }}
                    animate={{ x: '200%' }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  />

                  {/* Logo container */}
                  <div className="relative z-10 flex flex-col items-center">
                    {/* QA Badge */}
                    <motion.div
                      className={cn(
                        'w-24 h-24 md:w-32 md:h-32 rounded-2xl',
                        'bg-gradient-to-br from-brand-600 to-brand-700',
                        'flex items-center justify-center',
                        'shadow-lg shadow-brand-500/30'
                      )}
                      animate={{
                        boxShadow: [
                          '0 10px 40px rgba(173, 25, 39, 0.3)',
                          '0 20px 60px rgba(173, 25, 39, 0.4)',
                          '0 10px 40px rgba(173, 25, 39, 0.3)',
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">QA</span>
                    </motion.div>

                    {/* SimplifyQA text */}
                    <motion.div
                      className="mt-6 text-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <p className="text-2xl md:text-3xl font-bold text-text-primary">
                        Simplify<span className="text-brand-600">QA</span>
                      </p>
                      <p className="text-sm text-text-secondary mt-1">Test Smarter, Ship Faster</p>
                    </motion.div>
                  </div>

                  {/* Corner decorations */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-brand-500/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-brand-500/10 to-transparent" />
                </motion.div>

                {/* Floating feature badges around the card */}
                {qaFeatures.map((feature, index) => {
                  const angle = (index * 60 - 90) * (Math.PI / 180)
                  const radius = 180
                  const x = Math.cos(angle) * radius
                  const y = Math.sin(angle) * radius

                  return (
                    <motion.div
                      key={feature.label}
                      className={cn(
                        'absolute px-3 py-2 rounded-xl',
                        'bg-white/80 dark:bg-white/[0.05]',
                        'backdrop-blur-lg',
                        'border border-white/50 dark:border-white/[0.08]',
                        'shadow-lg shadow-black/5',
                        'flex items-center gap-2'
                      )}
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + feature.delay, type: 'spring', stiffness: 200 }}
                      whileHover={{ scale: 1.1, zIndex: 10 }}
                    >
                      <feature.icon className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                      <span className="text-xs font-medium text-text-primary whitespace-nowrap">
                        {feature.label}
                      </span>
                    </motion.div>
                  )
                })}

                {/* Connecting dots/lines effect */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ overflow: 'visible' }}
                >
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgb(173, 25, 39)" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="rgb(173, 25, 39)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {qaFeatures.map((_, index) => {
                    const angle = (index * 60 - 90) * (Math.PI / 180)
                    const endRadius = 140
                    const x = Math.cos(angle) * endRadius
                    const y = Math.sin(angle) * endRadius

                    return (
                      <motion.line
                        key={index}
                        x1="50%"
                        y1="50%"
                        x2={`calc(50% + ${x}px)`}
                        y2={`calc(50% + ${y}px)`}
                        stroke="url(#lineGradient)"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                      />
                    )
                  })}
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </Container>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            className={cn(
              'w-6 h-10 rounded-full flex items-start justify-center p-1.5',
              'border border-border/50',
              'bg-white/30 dark:bg-white/5',
              'backdrop-blur-sm'
            )}
          >
            <motion.div
              className="w-1 h-2 rounded-full bg-brand-600/60"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ========== OUR STORY ========== */}
      <section id="our-story" className="section-padding relative overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-1/20 via-background to-background" />
        <NoiseTexture opacity={0.015} />

        <Container className="relative z-10">
          {/* Header */}
          <motion.div
            className="max-w-3xl mx-auto mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand-600 dark:text-brand-400 font-medium tracking-wide uppercase text-sm mb-4">
              Our Story
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
              The SimplifyQA Story
            </h2>
          </motion.div>

          {/* Narrative Content */}
          <div className="max-w-3xl mx-auto">
            {/* Chapter 1 - The Challenge */}
            <motion.div
              className="mb-12 md:mb-20 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-500/10 dark:bg-brand-500/5 flex items-center justify-center group-hover:bg-brand-500/15 transition-colors">
                  <Layers className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                </div>
                <div>
                  <span className="text-xs font-medium text-brand-600 dark:text-brand-400 uppercase tracking-wider">
                    The Challenge
                  </span>
                  <p className="mt-3 text-lg md:text-xl lg:text-2xl text-text-primary leading-relaxed font-medium">
                    Quality Assurance was supposed to make software better. Instead, somewhere along the way,
                    it became complicated.
                  </p>
                  <p className="mt-4 text-text-secondary leading-relaxed">
                    Ever counted how many apps you juggle every day for testing? There was a time when manual
                    checklists and spreadsheets ruled the quality game. Then came the age of automation, where
                    scripts took center stage—but also deepened the rift between &ldquo;functional&rdquo; and &ldquo;technical&rdquo; teams.
                    One tool for test management, another for automation, a third for defect tracking. Teams started
                    working in silos, wasting more time switching tabs than actually improving quality.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Chapter 2 - Our Vision */}
            <motion.div
              className="mb-12 md:mb-20 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-500/10 dark:bg-brand-500/5 flex items-center justify-center group-hover:bg-brand-500/15 transition-colors">
                  <Target className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                </div>
                <div>
                  <span className="text-xs font-medium text-brand-600 dark:text-brand-400 uppercase tracking-wider">
                    Our Vision
                  </span>
                  <p className="mt-3 text-lg md:text-xl lg:text-2xl text-text-primary leading-relaxed font-medium">
                    We started SimplifyQA because we believed testing deserved better.
                  </p>
                  <p className="mt-4 text-text-secondary leading-relaxed">
                    Our vision was simple: to build a platform where all those scattered parts finally fit together.
                    A single, unified space where test planning, automation, execution, and reporting all live
                    together—like LEGO blocks snapped into a single, intuitive workspace.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Chapter 3 - Inclusivity */}
            <motion.div
              className="mb-12 md:mb-20 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-500/10 dark:bg-brand-500/5 flex items-center justify-center group-hover:bg-brand-500/15 transition-colors">
                  <Heart className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                </div>
                <div>
                  <span className="text-xs font-medium text-brand-600 dark:text-brand-400 uppercase tracking-wider">
                    Inclusivity
                  </span>
                  <p className="mt-3 text-lg md:text-xl lg:text-2xl text-text-primary leading-relaxed font-medium">
                    At the heart of our platform is inclusivity.
                  </p>
                  <p className="mt-4 text-text-secondary leading-relaxed">
                    We pioneered scriptless automation so that anyone—whether a tester, developer, or business
                    user—can create and run a test case without needing to know code. Testing shouldn&apos;t belong
                    only to specialists. It should be something every team member can contribute to.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Chapter 4 - Built for Impact */}
            <motion.div
              className="mb-12 md:mb-20 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-500/10 dark:bg-brand-500/5 flex items-center justify-center group-hover:bg-brand-500/15 transition-colors">
                  <Zap className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                </div>
                <div>
                  <span className="text-xs font-medium text-brand-600 dark:text-brand-400 uppercase tracking-wider">
                    Built for Impact
                  </span>
                  <p className="mt-3 text-lg md:text-xl lg:text-2xl text-text-primary leading-relaxed font-medium">
                    But unifying tools wasn&apos;t enough. We wanted to push QA forward.
                  </p>
                  <p className="mt-4 text-text-secondary leading-relaxed">
                    That&apos;s why SimplifyQA is built with impact analysis that sees change before it breaks things,
                    cloud execution that finishes in hours what used to take days, and dashboards that turn raw
                    data into clear decisions.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Belief - Highlighted Quote */}
            <motion.div
              className="mb-12 md:mb-20 py-6 px-4 md:py-10 md:px-8 rounded-2xl bg-brand-500/5 dark:bg-brand-500/[0.03] border border-brand-500/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="w-8 h-8 text-brand-500/60 mb-4" />
              <blockquote className="text-lg md:text-xl lg:text-2xl text-text-primary leading-relaxed font-medium italic">
                &ldquo;More than a platform, SimplifyQA is a belief: that quality should be simple, scalable,
                and accessible for everyone.&rdquo;
              </blockquote>
              <p className="mt-4 text-text-secondary text-sm">
                We invest heavily in innovation, listening to real teams, solving real bottlenecks, and
                constantly evolving our platform to match the pace of technology.
              </p>
            </motion.div>

            {/* Chapter 5 - Inventing the Future */}
            <motion.div
              className="mb-10 md:mb-16 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-500/10 dark:bg-brand-500/5 flex items-center justify-center group-hover:bg-brand-500/15 transition-colors">
                  <ArrowRight className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                </div>
                <div>
                  <span className="text-xs font-medium text-brand-600 dark:text-brand-400 uppercase tracking-wider">
                    Inventing the Future
                  </span>
                  <p className="mt-3 text-lg md:text-xl lg:text-2xl text-text-primary leading-relaxed font-medium">
                    Today, SimplifyQA is trusted by teams across industries and geographies.
                  </p>
                  <p className="mt-4 text-text-secondary leading-relaxed">
                    Teams who share the same frustration we once felt—and the same dream we&apos;re building toward.
                    Because we believe the best way to predict the future of quality is not to wait for it.
                    It&apos;s to invent it—and make it radically accessible for everyone.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="pl-18"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/contact">
                <Button size="lg" className="gap-2">
                  Start Your Story With Us
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ========== GLOBAL PRESENCE ========== */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-1/30 to-background" />
        <NoiseTexture opacity={0.02} />

        <Container className="relative z-10">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="primary" className="mb-4">Global Presence</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              Serving teams worldwide
            </h2>
            <p className="mt-4 text-text-secondary">
              With offices across four continents, we provide local expertise with global capabilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={cn(
                    'relative p-6 rounded-2xl h-full',
                    'bg-white/50 dark:bg-white/[0.02]',
                    'backdrop-blur-xl',
                    'border border-white/40 dark:border-white/[0.06]',
                    'group hover:bg-white/70 dark:hover:bg-white/[0.04]',
                    'transition-all duration-500',
                    office.isHQ && 'ring-1 ring-brand-500/30'
                  )}
                >
                  {office.isHQ && (
                    <div className="absolute -top-3 left-6">
                      <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-brand-600 text-white rounded-full">
                        Headquarters
                      </span>
                    </div>
                  )}

                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        'w-12 h-12 rounded-xl flex items-center justify-center',
                        'bg-gradient-to-br from-brand-500/10 to-brand-600/5',
                        'group-hover:from-brand-500/20 group-hover:to-brand-600/10',
                        'transition-colors duration-300'
                      )}
                    >
                      <MapPin className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary">
                        {office.city}
                      </h3>
                      <p className="text-sm text-text-secondary">{office.country}</p>
                      <p className="mt-2 text-xs font-medium text-brand-600 dark:text-brand-400">
                        {office.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========== STATS BAR ========== */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-700 via-brand-600 to-brand-700" />
        <NoiseTexture opacity={0.04} />

        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl" />
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <stat.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-white/70 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========== MISSION ========== */}
      <section className="section-padding relative overflow-hidden">
        <GradientOrb
          size="lg"
          color="brand"
          intensity="subtle"
          className="top-[20%] right-[-10%]"
          parallaxSpeed={0.3}
        />

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Mission text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="primary" className="mb-4">Our Mission</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                Democratizing test automation
              </h2>
              <div className="mt-6 space-y-4">
                <p className="text-lg text-text-secondary leading-relaxed">
                  Software quality shouldn&apos;t depend on the size of your engineering team
                  or the depth of your automation expertise.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  We&apos;re building tools that make comprehensive testing accessible to
                  everyone—from startups shipping their first product to enterprises
                  managing thousands of applications.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Our platform combines the power of AI with intuitive design, enabling
                  teams to achieve enterprise-grade test coverage without enterprise-grade
                  complexity.
                </p>
              </div>
            </motion.div>

            {/* Right - Visual element */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div
                className={cn(
                  'p-4 md:p-8 rounded-2xl md:rounded-3xl',
                  'bg-white/50 dark:bg-white/[0.02]',
                  'backdrop-blur-xl',
                  'border border-white/40 dark:border-white/[0.06]'
                )}
              >
                <div className="space-y-4 md:space-y-6">
                  {[
                    { label: 'Test Creation Time', value: '75%', desc: 'Reduction' },
                    { label: 'Regression Effort', value: '80%', desc: 'Reduction' },
                    { label: 'Test Coverage', value: '200%', desc: 'Improvement' },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      <div
                        className={cn(
                          'w-16 h-16 rounded-2xl flex items-center justify-center',
                          'bg-gradient-to-br from-brand-500 to-brand-600',
                          'text-white font-bold text-xl'
                        )}
                      >
                        {item.value}
                      </div>
                      <div>
                        <p className="font-semibold text-text-primary">{item.label}</p>
                        <p className="text-sm text-text-secondary">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ========== VALUES ========== */}
      <section className="section-padding bg-surface-1/50 relative overflow-hidden">
        <NoiseTexture opacity={0.02} />
        <FloatingOrb size="md" color="brand" className="top-[10%] left-[5%]" />

        <Container className="relative z-10">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="primary" className="mb-4">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              What guides us
            </h2>
            <p className="mt-4 text-text-secondary">
              The principles that shape everything we build.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div
                  className={cn(
                    'relative p-6 rounded-2xl h-full text-center',
                    'bg-white/60 dark:bg-white/[0.02]',
                    'backdrop-blur-xl',
                    'border border-white/50 dark:border-white/[0.06]',
                    'overflow-hidden group'
                  )}
                >
                  {/* Gradient background on hover */}
                  <div
                    className={cn(
                      'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500',
                      'bg-gradient-to-br',
                      value.gradient
                    )}
                  />

                  <div className="relative z-10">
                    <div
                      className={cn(
                        'w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4',
                        'bg-gradient-to-br from-brand-500/10 to-brand-600/5'
                      )}
                    >
                      <value.icon className="w-7 h-7 text-brand-600 dark:text-brand-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========== TIMELINE ========== */}
      <section className="section-padding relative overflow-hidden">
        <GradientOrb
          size="lg"
          color="accent"
          intensity="subtle"
          className="bottom-[10%] left-[-10%]"
          parallaxSpeed={0.4}
        />

        <Container className="relative z-10">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="primary" className="mb-4">Our Journey</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              Building the future of testing
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500 via-brand-400 to-border" />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    className="relative flex gap-4 md:gap-8 pl-16 md:pl-20"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Year badge */}
                    <div
                      className={cn(
                        'absolute left-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center',
                        'text-xs md:text-sm font-bold',
                        item.highlight
                          ? 'bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-500/30'
                          : 'bg-white/60 dark:bg-white/[0.05] backdrop-blur-md border border-white/40 dark:border-white/10 text-text-primary'
                      )}
                    >
                      {item.year}
                    </div>

                    {/* Content */}
                    <div
                      className={cn(
                        'flex-1 p-5 rounded-2xl',
                        'bg-white/40 dark:bg-white/[0.02]',
                        'backdrop-blur-lg',
                        'border border-white/30 dark:border-white/[0.05]',
                        item.highlight && 'ring-1 ring-brand-500/20'
                      )}
                    >
                      <p className="text-text-primary">{item.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========== CAREERS CTA ========== */}
      <section className="section-padding bg-surface-1/30 relative overflow-hidden">
        <NoiseTexture opacity={0.02} />

        <Container className="relative z-10">
          <motion.div
            className={cn(
              'max-w-3xl mx-auto text-center p-6 md:p-12 rounded-2xl md:rounded-3xl',
              'bg-white/50 dark:bg-white/[0.02]',
              'backdrop-blur-xl',
              'border border-white/40 dark:border-white/[0.06]'
            )}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <Badge variant="primary" className="mb-4">Careers</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              Join our team
            </h2>
            <p className="mt-4 text-lg text-text-secondary max-w-xl mx-auto">
              We&apos;re always looking for talented individuals who are passionate about
              transforming software quality.
            </p>
            <div className="mt-8">
              <Link href="/careers">
                <Button size="lg" className="gap-2 shadow-glow">
                  View Open Positions
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
