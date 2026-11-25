'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

// Smooth wheel/trackpad scrolling for the marketing pages. Mounted inside
// MarketingChrome, so admin pages keep native scrolling. Off when the visitor
// asks for reduced motion; touch devices keep their native scroll.
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,            // same-page #links glide too
      allowNestedScroll: true,  // modals, menus and other scroll boxes scroll natively
    });
    return () => lenis.destroy();
  }, []);
  return null;
}
