import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarCheck, CheckCircle2, Clock, ShieldCheck, Sparkles, UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Container, Eyebrow, GradientOrb, Reveal,
} from '../../design';

const steps = [
  { icon: <UserRound className="w-3.5 h-3.5" />, t: 'Quick intro call',  d: '15 minutes — tell us what you’re solving for and the tools you use today.' },
  { icon: <Sparkles className="w-3.5 h-3.5" />,  t: 'Tailored demo',     d: '30 minutes — see SimplifyQA on workflows that map to your team.' },
  { icon: <CalendarCheck className="w-3.5 h-3.5" />, t: 'Pilot in days', d: 'A focused proof-of-value pilot on real data, with a dedicated SE.' },
];

export default function RequestDemoPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="relative pt-20 sm:pt-24 pb-24 overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 bg-mesh opacity-90" />
        <GradientOrb className="-top-32 -left-20" color="brand" size={620} opacity={0.4} />
        <GradientOrb className="-top-32 -right-20" color="rose" size={560} opacity={0.35} />
      </div>

      <Container size="wide">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">
          {/* Left — pitch + steps */}
          <div>
            <Reveal>
              <Eyebrow icon={<Sparkles className="w-3.5 h-3.5" />}>Book a demo</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-display-lg text-ink-900 text-balance">
                See SimplifyQA on your <span className="gradient-text">own workflows</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-[17px] text-ink-500 max-w-xl leading-relaxed">
                30-minute live walkthrough with a solutions engineer. Bring your real tools, real
                data, and the test cases that hurt the most.
              </p>
            </Reveal>

            <div className="mt-10 space-y-3">
              {steps.map((s, i) => (
                <motion.div
                  key={s.t}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="relative flex items-start gap-4 rounded-2xl border border-ink-900/[0.06] bg-white p-5 lift"
                >
                  <span className="grid place-items-center w-10 h-10 rounded-xl bg-brand-50 text-brand-700 border border-brand-100 shrink-0">
                    {s.icon}
                  </span>
                  <div>
                    <div className="text-[14.5px] font-semibold text-ink-900">{s.t}</div>
                    <div className="text-[13.5px] text-ink-500 mt-1 leading-relaxed">{s.d}</div>
                  </div>
                  <span className="absolute top-4 right-5 text-[11px] font-semibold uppercase tracking-wider text-ink-300">
                    Step {String(i + 1).padStart(2, '0')}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-3">
              {[
                { icon: <ShieldCheck className="w-4 h-4" />, t: 'SOC 2 / ISO / HIPAA',   d: 'Enterprise security by default.' },
                { icon: <Clock className="w-4 h-4" />,       t: '1-business-day reply',  d: 'Usually much faster.' },
                { icon: <Sparkles className="w-4 h-4" />,    t: 'AI Studio included',    d: 'Live in the demo.' },
              ].map((v) => (
                <div key={v.t} className="rounded-2xl bg-surface-soft border border-ink-900/[0.06] p-4">
                  <span className="grid place-items-center w-9 h-9 rounded-xl bg-brand-50 text-brand-700 border border-brand-100">
                    {v.icon}
                  </span>
                  <div className="mt-3 text-[13.5px] font-semibold text-ink-900">{v.t}</div>
                  <div className="text-[12px] text-ink-500">{v.d}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <Reveal delay={0.12}>
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="rounded-3xl glass-strong shadow-plate p-6 sm:p-8 sticky top-28"
            >
              {!submitted ? (
                <>
                  <h2 className="font-display text-2xl text-ink-900">Tell us about your team</h2>
                  <p className="mt-1 text-[13.5px] text-ink-500">A solutions engineer will reach out within one business day.</p>

                  <div className="mt-7 grid sm:grid-cols-2 gap-3">
                    <Field label="First name"  name="first"  placeholder="Priya" />
                    <Field label="Last name"   name="last"   placeholder="Krishnan" />
                    <Field label="Work email"  name="email"  type="email" placeholder="priya@company.com" full />
                    <Field label="Company"     name="company" placeholder="Globex Inc." />
                    <Field label="Job title"   name="title"   placeholder="Director of QA" />
                    <Field label="Team size"   name="team"    placeholder="25–250" />
                    <Field label="Country"     name="country" placeholder="United States" />
                  </div>

                  <div className="mt-4">
                    <label className="text-[12.5px] font-semibold text-ink-700">What problem are you solving?</label>
                    <textarea
                      rows={4}
                      placeholder="Replacing a tool? Tackling automation ROI? Compliance audit coming up?"
                      className="mt-2 w-full rounded-2xl bg-white border border-ink-900/[0.08] px-4 py-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-300"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full mt-7 h-12">
                    Book my demo <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="mt-3 text-[11.5px] text-ink-400 text-center">
                    By submitting, you agree to our <Link to="/privacy" className="underline underline-offset-4">privacy policy</Link>.
                  </p>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                  className="text-center py-10"
                >
                  <div className="mx-auto grid place-items-center w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-100">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-ink-900">You’re booked.</h3>
                  <p className="mt-2 text-[14.5px] text-ink-500">A solutions engineer will reach out within one business day to lock in a time.</p>
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
  );
}

function Field({ label, name, placeholder, type = 'text', full }: { label: string; name: string; placeholder: string; type?: string; full?: boolean }) {
  return (
    <label className={`block ${full ? 'sm:col-span-2' : ''}`}>
      <span className="text-[12.5px] font-semibold text-ink-700">{label}</span>
      <input
        name={name} type={type} placeholder={placeholder}
        className="mt-2 w-full h-11 rounded-2xl bg-white border border-ink-900/[0.08] px-4 text-[14px] text-ink-800 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-300"
        required
      />
    </label>
  );
}
