import { Container } from '../../design';
import { clients } from '../data/clients';

export default function TrustBar() {
  return (
    <section className="relative py-14 sm:py-16 border-y border-ink-900/[0.05] bg-white">
      <Container size="wide">
        <p className="text-center text-[12.5px] font-medium uppercase tracking-[0.18em] text-ink-400">
          Trusted by enterprise QA, automation & engineering teams worldwide
        </p>

        <div className="mt-10 marquee-mask overflow-hidden">
          <div className="marquee-track gap-10 sm:gap-14 items-center">
            {[...clients, ...clients].map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                className="shrink-0 flex items-center justify-center h-16 w-[140px] sm:w-[160px] opacity-80 hover:opacity-100 transition-opacity"
                title={c.name}
              >
                <img
                  src={c.src}
                  alt={c.alt}
                  className="max-h-12 max-w-full object-contain"
                  draggable={false}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
