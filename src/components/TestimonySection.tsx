import { ExternalLink, Star } from 'lucide-react';

const testimonies = [
  {
    source: 'Trustpilot',
    color: 'bg-green-600',
    icon: <Star className="h-5 w-5 text-white" />,
    link: '#',
    text: "SimplifyQA reduced our testing time by 70% while improving coverage. Game-changer for our team.",
    name: 'Sarah Johnson',
    role: 'QA Director, TechCorp',
  },
  {
    source: 'Capterra',
    color: 'bg-blue-600',
    icon: <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none"><path d="M4 4L20 12L4 20V4Z" fill="currentColor"/></svg>,
    link: '#',
    text: "It's not worth comparing this to typical freelance software services, as Worksome rather functions as a prolonged arm within our staff",
    name: 'Michael Chen',
    role: 'Lead Developer, StartupXYZ',
  },
  {
    source: 'Trustpilot',
    color: 'bg-green-600',
    icon: <Star className="h-5 w-5 text-white" />,
    link: '#',
    text: "SimplifyQA reduced our testing time by 70% while improving coverage. Game-changer for our team.",
    name: 'Sarah Johnson',
    role: 'QA Director, TechCorp',
  },
  {
    source: 'Capterra',
    color: 'bg-blue-600',
    icon: <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none"><path d="M4 4L20 12L4 20V4Z" fill="currentColor"/></svg>,
    link: '#',
    text: "It's not worth comparing this to typical freelance software services, as Worksome rather functions as a prolonged arm within our staff",
    name: 'Michael Chen',
    role: 'Lead Developer, StartupXYZ',
  },
  {
    source: 'Trustpilot',
    color: 'bg-green-600',
    icon: <Star className="h-5 w-5 text-white" />,
    link: '#',
    text: "Best testing platform we have used. The integrations work seamlessly with our existing stack.",
    name: 'Emily Rodriguez',
    role: 'QA Manager, Enter',
  },
];

import { useEffect, useRef, useState } from 'react';

export default function TestimonySection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate testimonies for infinite loop effect
  const loopedTestimonies = [...testimonies, ...testimonies];

  useEffect(() => {
    let scrollInterval: number | null = null;
    if (!isHovered) {
      scrollInterval = window.setInterval(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollLeft += 2;
          // Use fixed card width since we know cards are min-w-[320px] + gap
          const cardWidth = 320 + 32; // 320px card width + 32px gap
          const singleSetWidth = cardWidth * testimonies.length;
          if (scrollRef.current.scrollLeft >= singleSetWidth) {
            // Reset to the start of the first set for seamless loop
            scrollRef.current.scrollLeft -= singleSetWidth;
          }
        }
      }, 16);
    }
    return () => {
      if (scrollInterval) window.clearInterval(scrollInterval);
    };
  }, [isHovered]);

  return (
    <section className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex gap-8 overflow-x-auto scrollbar-hide"
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ scrollBehavior: 'smooth', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          {loopedTestimonies.map((t, idx) => (
            <div key={idx} className="min-w-[320px] max-w-xs border border-gray-800 rounded-xl liener_bg shadow-sm flex flex-col bg-gray-900" style={{minHeight: '300px', height: '300px'}}>
              <div className="flex items-center px-4 py-3 rounded-t-xl">
                <span className="font-semibold text-white text-sm">Review on {t.source}</span>
                <a href={t.link} target="_blank" rel="noopener noreferrer" className="ml-auto">
                  <ExternalLink className="h-4 w-4 text-white opacity-80" />
                </a>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="light_grey text-base mb-6">"{t.text}"</p>
                <div className="border-t border-gray-700 pt-4">
                  <span className="font-semibold text-white">{t.name}</span>
                  {t.role && <span className="ml-2 text-gray-400 text-xs font-medium">{t.role}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
        <style>{`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
        `}</style>
      </div>
    </section>
  );
}
