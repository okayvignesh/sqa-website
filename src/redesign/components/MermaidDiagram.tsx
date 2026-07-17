'use client';

import { useEffect, useRef } from 'react';

// Lazy singleton — initialize mermaid once, first time it's used.
let mermaidPromise: Promise<typeof import('mermaid').default> | null = null;
async function getMermaid() {
  if (!mermaidPromise) {
    mermaidPromise = import('mermaid').then((m) => {
      m.default.initialize({
        startOnLoad: false,
        securityLevel: 'loose',
        theme: 'base',
        themeVariables: {
          fontFamily: 'Inter, -apple-system, sans-serif',
          fontSize: '12px',
          primaryColor:       '#F5F3FF',
          primaryTextColor:   '#4C1D95',
          primaryBorderColor: '#7C3AED',
          lineColor:          '#7C3AED',
          secondaryColor:     '#EDE9FE',
          tertiaryColor:      '#FFFFFF',
          noteBkgColor:       '#FEF3C7',
          noteTextColor:      '#92400E',
          noteBorderColor:    '#F59E0B',
          actorBkg:           '#F5F3FF',
          actorBorder:        '#7C3AED',
          actorTextColor:     '#4C1D95',
          signalColor:        '#6D28D9',
          signalTextColor:    '#4C1D95',
          labelBoxBkgColor:   '#EDE9FE',
          labelBoxBorderColor:'#7C3AED',
          labelTextColor:     '#4C1D95',
          loopTextColor:      '#4C1D95',
        },
      });
      return m.default;
    });
  }
  return mermaidPromise;
}

let idCounter = 0;

export default function MermaidDiagram({
  code,
  className,
}: {
  code: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    const container = ref.current;
    if (!container) return;

    idCounter += 1;
    const id = `mmd-${idCounter}`;

    (async () => {
      try {
        const mermaid = await getMermaid();
        const { svg } = await mermaid.render(id, code.trim());
        if (cancelled || !ref.current) return;
        ref.current.innerHTML = svg;
        const svgEl = ref.current.querySelector('svg');
        if (svgEl) {
          svgEl.setAttribute('width', '100%');
          svgEl.setAttribute('height', '100%');
          svgEl.style.maxWidth = '100%';
          svgEl.style.maxHeight = '100%';
        }
      } catch {
        if (ref.current) ref.current.innerHTML = '';
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [code]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ display: 'grid', placeItems: 'center', overflow: 'hidden' }}
    />
  );
}
