import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Mail, MapPin, MessageSquare, Phone, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Container, Eyebrow, GradientOrb, Reveal, cn,
} from '../../design';
import { offices, supportEmail } from '../data/offices';

const reasons = ['Book a demo', 'Pricing question', 'Partnership', 'Press', 'General'];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [reason, setReason] = useState(reasons[0]);

  return (
    <>
      {/* Hero + form */}
      <section className="relative pt-20 sm:pt-24 pb-16 overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute inset-0 bg-mesh opacity-90" />
          <GradientOrb className="-top-32 -left-20" color="brand" size={620} opacity={0.4} />
          <GradientOrb className="-top-32 -right-20" color="rose" size={560} opacity={0.35} />
        </div>

        <Container size="wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <Reveal>
                <Eyebrow icon={<MessageSquare className="w-3.5 h-3.5" />}>Talk to us</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-6 font-display text-display-lg text-ink-900 text-balance">
                  Let's see SimplifyQA on your <span className="gradient-text">real workflows</span>.
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 text-[18px] text-ink-500 leading-relaxed max-w-xl">
                  Tell us a little about your team. A solutions engineer responds within
                  one business day — usually faster.
                </p>
              </Reveal>

              <div className="mt-10 space-y-4">
                {[
                  { icon: <Mail className="w-4 h-4" />, label: 'Email us',    value: supportEmail, href: `mailto:${supportEmail}` },
                  { icon: <Phone className="w-4 h-4" />, label: 'Call India HQ', value: offices[0].phone, href: `tel:${offices[0].phone.replace(/[^+\d]/g, '')}` },
                  { icon: <Sparkles className="w-4 h-4" />, label: 'Live demo', value: '30 minutes · pick a slot' },
                ].map((r) => {
                  const inner = (
                    <>
                      <span className="grid place-items-center w-10 h-10 rounded-xl bg-brand-50 text-brand-700 border border-brand-100">
                        {r.icon}
                      </span>
                      <div>
                        <div className="text-[12.5px] font-semibold uppercase tracking-wider text-ink-400">{r.label}</div>
                        <div className="text-[14.5px] font-semibold text-ink-900">{r.value}</div>
                      </div>
                    </>
                  );
                  return r.href ? (
                    <a key={r.label} href={r.href} className="flex items-center gap-3 rounded-2xl border border-ink-900/[0.06] bg-white p-4 lift">
                      {inner}
                    </a>
                  ) : (
                    <div key={r.label} className="flex items-center gap-3 rounded-2xl border border-ink-900/[0.06] bg-white p-4 lift">
                      {inner}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Form */}
            <Reveal delay={0.12}>
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="relative rounded-3xl glass-strong p-6 sm:p-8 shadow-plate"
              >
                {!submitted ? (
                  <>
                    <h2 className="font-display text-2xl text-ink-900">Tell us about your team</h2>
                    <p className="mt-1 text-[13.5px] text-ink-500">No spam. We reply, fast.</p>

                    <div className="mt-7 grid sm:grid-cols-2 gap-3">
                      <Field label="Full name"    name="name"    placeholder="Priya Krishnan" />
                      <Field label="Work email"   name="email"   type="email" placeholder="priya@company.com" />
                      <Field label="Company"      name="company" placeholder="Globex Inc." />
                      <Field label="Team size"    name="team"    placeholder="e.g. 25–250" />
                    </div>

                    <div className="mt-4">
                      <label className="block text-[12.5px] font-semibold text-ink-700">What's on your mind?</label>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {reasons.map((r) => (
                          <button
                            key={r}
                            type="button"
                            onClick={() => setReason(r)}
                            className={cn(
                              'h-9 px-3.5 rounded-full text-[12.5px] font-medium border transition-all',
                              reason === r
                                ? 'bg-brand-50 text-brand-700 border-brand-200'
                                : 'bg-white text-ink-700 border-ink-900/[0.08] hover:border-ink-900/15',
                            )}
                          >
                            {r}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="block text-[12.5px] font-semibold text-ink-700">Anything specific?</label>
                      <textarea
                        rows={4}
                        placeholder="Tools you're replacing, must-have integrations, timeline…"
                        className="mt-2 w-full rounded-2xl bg-white border border-ink-900/[0.08] px-4 py-3 text-[14px] text-ink-800 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-300"
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full mt-7 h-12">
                      Send message <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="mt-3 text-[11.5px] text-ink-400 text-center">
                      By submitting, you agree to our <Link to="/privacy" className="underline underline-offset-4">privacy policy</Link>.
                    </p>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-10"
                  >
                    <div className="mx-auto grid place-items-center w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-100">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="mt-5 font-display text-2xl text-ink-900">Thanks — we’re on it.</h3>
                    <p className="mt-2 text-[14.5px] text-ink-500">A solutions engineer will reach out within one business day.</p>
                    <Link to="/" className="mt-7 inline-flex items-center gap-2 text-[13.5px] font-semibold text-brand-700">
                      Back to home <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </motion.div>
                )}
              </form>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Offices */}
      <section className="relative py-24 sm:py-28 bg-surface-soft">
        <Container size="wide">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow icon={<MapPin className="w-3.5 h-3.5" />}>Our offices</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-display-md text-ink-900 text-balance">
                Find us in your timezone.
              </h2>
            </Reveal>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-4">
            {offices.map((o, i) => (
              <div key={`${o.city}-${i}`} className="rounded-3xl bg-white border border-ink-900/[0.06] p-6 lift">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[12.5px] text-brand-700 font-semibold">
                    <MapPin className="w-3.5 h-3.5" /> {o.country}
                  </div>
                  {o.badge && (
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-100 rounded-full px-2.5 py-1">
                      {o.badge}
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-display text-2xl text-ink-900">{o.city}</h3>
                <div className="mt-2 text-[13.5px] text-ink-500 leading-relaxed">{o.address}</div>
                <div className="mt-3 inline-flex items-center gap-2 text-[13px] text-ink-700">
                  <Phone className="w-3.5 h-3.5 text-brand-700" /> {o.phone}
                  {o.hours && <span className="text-ink-400">· {o.hours}</span>}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

function Field({ label, name, placeholder, type = 'text' }: { label: string; name: string; placeholder: string; type?: string }) {
  return (
    <label className="block">
      <span className="text-[12.5px] font-semibold text-ink-700">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full h-11 rounded-2xl bg-white border border-ink-900/[0.08] px-4 text-[14px] text-ink-800 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-300"
        required
      />
    </label>
  );
}
