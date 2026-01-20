'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { Container } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { GradientOrb } from '@/components/shared'
import { siteConfig } from '@/lib/constants'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <GradientOrb className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-4">Contact</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary">
              Let&apos;s talk about your testing needs
            </h1>
            <p className="mt-6 text-xl text-text-secondary">
              Whether you&apos;re ready to get started or just exploring, we&apos;re here to help.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <Card className="p-4 md:p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">
                    Message sent!
                  </h3>
                  <p className="mt-2 text-text-secondary">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-text-primary mb-2"
                      >
                        First name
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-text-primary mb-2"
                      >
                        Last name
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-text-primary mb-2"
                    >
                      Work email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-text-primary mb-2"
                    >
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Acme Inc."
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="interest"
                      className="block text-sm font-medium text-text-primary mb-2"
                    >
                      What are you interested in?
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      className="flex h-11 w-full rounded-xl border border-border bg-surface-1 px-4 py-2 text-base text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-500"
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="demo">Request a demo</option>
                      <option value="pricing">Pricing information</option>
                      <option value="support">Technical support</option>
                      <option value="partnership">Partnership inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-text-primary mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your testing challenges..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>

                  <p className="text-xs text-text-tertiary text-center">
                    By submitting this form, you agree to our{' '}
                    <a href="/privacy" className="text-coral-500 hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </form>
              )}
            </Card>

            {/* Contact Info */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-text-primary mb-6">
                  Get in touch
                </h2>
                <p className="text-text-secondary">
                  Have questions about SimplifyQA? Our team is here to help you find the right solution for your testing needs.
                </p>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 rounded-lg bg-coral-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-coral-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-text-primary">Email</h3>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-text-secondary hover:text-coral-500 transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 rounded-lg bg-coral-500/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-coral-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-text-primary">Phone</h3>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-text-secondary hover:text-coral-500 transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 rounded-lg bg-coral-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-coral-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-text-primary">Headquarters</h3>
                    <p className="text-text-secondary text-sm">
                      BCIT, Block 1, Ground Floor<br />
                      Bhartiya City, RK Hegde Nagar<br />
                      Bengaluru, Karnataka 560064<br />
                      India
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
