'use client';

import { ArrowRight, CalendarClock, Clock, Mail, MapPin, MessageSquare, Phone, Sparkles } from 'lucide-react';
import {
  Container, Eyebrow, GradientOrb, Reveal,
} from '../../design';
import { offices, supportEmail } from '../data/offices';
import { BookDemoButton } from '../CalendlyModal';

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 sm:pt-24 pb-16 sm:pb-20 overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute inset-0 bg-mesh opacity-90" />
          <GradientOrb className="-top-32 -left-20" color="brand" size={620} opacity={0.4} />
          <GradientOrb className="-top-32 -right-20" color="rose" size={560} opacity={0.35} />
        </div>

        <Container size="wide">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">
            <div>
              <Reveal>
                <Eyebrow icon={<MessageSquare className="w-3.5 h-3.5" />}>Talk to us</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-6 font-display text-display-lg leading-[1.12] pb-[0.06em] text-ink-900 text-balance">
                  Let's see SimplifyQA on your <span className="gradient-text">real workflows</span>.
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 text-[18px] text-ink-500 leading-relaxed max-w-xl">
                  Book a 30-minute walkthrough with our solutions team. Real workflows, real
                  data, real answers, no slideware. We usually reply within an hour.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <BookDemoButton className="btn-primary h-12 px-6 text-[15px]">
                    <CalendarClock className="w-4 h-4" />
                    Book a demo
                    <ArrowRight className="w-4 h-4" />
                  </BookDemoButton>
                  <a
                    href={`mailto:${supportEmail}`}
                    className="btn-ghost h-12 px-6 text-[15px]"
                  >
                    <Mail className="w-4 h-4" />
                    Email us
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right: contact cards */}
            <Reveal delay={0.12}>
              <div className="space-y-3">
                <ContactCard
                  icon={<Mail className="w-4 h-4" />}
                  label="Email"
                  value={supportEmail}
                  href={`mailto:${supportEmail}`}
                  hint="We reply within one business hour."
                />
                <ContactCard
                  icon={<Phone className="w-4 h-4" />}
                  label="Call India HQ"
                  value={offices[0].phone}
                  href={`tel:${offices[0].phone.replace(/[^+\d]/g, '')}`}
                  hint={offices[0].hours ?? undefined}
                />
                <BookDemoCard />
                <ContactCard
                  icon={<Clock className="w-4 h-4" />}
                  label="Response time"
                  value="Same business day"
                  hint="Usually much faster during business hours."
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Offices */}
      <section className="relative py-16 sm:py-20 bg-surface-soft">
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

function ContactCard({
  icon, label, value, hint, href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  hint?: string;
  href?: string;
}) {
  const inner = (
    <>
      <span className="grid place-items-center w-11 h-11 rounded-xl bg-brand-50 text-brand-700 border border-brand-100 shrink-0">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-ink-400">{label}</div>
        <div className="text-[15px] font-semibold text-ink-900 truncate">{value}</div>
        {hint && <div className="text-[12.5px] text-ink-500 mt-0.5">{hint}</div>}
      </div>
      {href && <ArrowRight className="w-4 h-4 text-ink-300 shrink-0" />}
    </>
  );
  const cls = 'flex items-center gap-4 rounded-2xl border border-ink-900/[0.06] bg-white p-4 sm:p-5 lift transition-colors';
  return href ? (
    <a href={href} className={cls}>{inner}</a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

function BookDemoCard() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border p-4 sm:p-5 flex items-center gap-4"
      style={{
        background: 'linear-gradient(135deg, #FFF5F6 0%, #FFFFFF 60%, #FFEEDF 100%)',
        borderColor: '#F5D0D5',
      }}
    >
      <span className="grid place-items-center w-11 h-11 rounded-xl bg-brand-100 text-brand-700 border border-brand-200 shrink-0">
        <Sparkles className="w-4 h-4" />
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-brand-700">
          Book a live demo
        </div>
        <div className="text-[15px] font-semibold text-ink-900">30 minutes · pick a slot</div>
        <div className="text-[12.5px] text-ink-500 mt-0.5">
          Solutions engineer + your AE on the call.
        </div>
      </div>
      <BookDemoButton className="shrink-0 inline-flex items-center gap-1.5 h-9 px-3.5 rounded-full text-[12.5px] font-semibold text-white transition-colors"
        style={{
          background: 'linear-gradient(180deg, #C8253A 0%, #B91D2D 60%, #9A1525 100%)',
          boxShadow: '0 6px 18px -6px rgba(185,29,45,0.55)',
        }}
      >
        Pick a time
        <ArrowRight className="w-3.5 h-3.5" />
      </BookDemoButton>
    </div>
  );
}
