import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, GradientOrb, Reveal } from '../../design';

export default function CTA() {
  return (
    <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
      <Container size="wide">
        <Reveal>
          <div className="relative rounded-[32px] overflow-hidden p-10 sm:p-16 bg-ink-900 text-white">
            {/* Glow */}
            <div aria-hidden className="absolute inset-0 -z-0">
              <GradientOrb className="-top-32 -left-20" color="brand" size={620} opacity={0.55} blur={120} />
              <GradientOrb className="-bottom-32 -right-10" color="plum" size={560} opacity={0.45} blur={120} />
              <div className="absolute inset-0 bg-grid opacity-[0.08]" />
            </div>

            <div className="relative max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-[12px] font-medium backdrop-blur">
                <Sparkles className="w-3.5 h-3.5 text-brand-300" />
                Now generally available
              </span>
              <h2 className="mt-6 font-display text-display-lg text-white text-balance leading-[1.04]">
                See SimplifyQA on your <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-brand-200 to-brand-400">own workflows</span>.
              </h2>
              <p className="mt-5 text-[16.5px] text-white/70 max-w-xl leading-relaxed">
                30-minute live walkthrough with a solutions engineer. Bring your real tools, real data, real edge cases.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/request-demo"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full text-[15px] font-medium text-ink-900 bg-white hover:bg-white/95 hover:-translate-y-px transition-all shadow-[0_10px_30px_-10px_rgba(255,255,255,0.45)]"
                >
                  Book a personalized demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full text-[15px] font-medium text-white bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur"
                >
                  View pricing
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
