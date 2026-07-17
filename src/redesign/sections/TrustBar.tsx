'use client';

import { Container } from '../../design';
import { clients } from '../data/clients';

export default function TrustBar() {
  return (
    <section className="relative py-14 sm:py-16 border-y border-ink-900/[0.05] bg-white">
      <Container size="wide">
        <div className="marquee-mask overflow-hidden">
          <div className="marquee-track gap-10 sm:gap-14 items-center">
            {[...clients, ...clients].map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                className="shrink-0 flex items-center justify-center h-14 sm:h-16 w-[140px] sm:w-[160px] opacity-80 hover:opacity-100 transition-opacity"
                title={c.name}
              >
                <img
                  src={c.src}
                  alt={c.alt}
                  className="h-12 sm:h-14 w-auto max-w-[92%] object-contain"
                  style={{ transform: `scale(${c.src.startsWith('/logos/') ? 1 : 1.45})` }}
                  draggable={false}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 text-center text-[13.5px] text-ink-500 max-w-3xl mx-auto text-pretty">
          Trusted by 1,200+ QA and engineering teams across 90+ countries, including{' '}
          <span className="text-ink-800 font-medium">Malaysia Airlines</span>,{' '}
          <span className="text-ink-800 font-medium">OpenText</span>,{' '}
          <span className="text-ink-800 font-medium">Dexcom</span>, and{' '}
          <span className="text-ink-800 font-medium">Elevance Health</span>.
        </p>
      </Container>
    </section>
  );
}
