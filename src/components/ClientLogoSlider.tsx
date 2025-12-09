// Removed ChevronLeft, ChevronRight imports as manual controls are removed
import { useEffect, useRef, useState } from 'react';

const clientNames = [
  'ELEVANCE HEALTH',
  'SMFG',
  'MALAYSIA AIRLINES',
  'DR. REDDY\'S',
  'UST',
  'PIRAMAL FINANCE',
  'DEXCOM',
  'AKPK',
  'ANALEC',
  'BANK MUAMALAT',
  'CGC',
  'EQUITY',
  'PERFIOS',
  'RAWBANK',
  'SVATANTRA',
  'CARELON',
  'ENVISTA',
  'NET HEALTH',
  'PERSYST',
  'CRAWFORD SOFTWARE',
  'IQST',
  'LEAPSCHOLAR',
  'LOGISFLEET',
  'NUVIZZ',
  'QUEST ALLIANCE',
  'SMARTKARROT',
  'SMARTX',
  'TECNOTREE',
  'WORKLLAMA',
];


const ClientLogoSlider = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  // Duplicate names for seamless loop
  const names = [...clientNames, ...clientNames];
  const positionRef = useRef(0);
  const reqIdRef = useRef(0);
  const speed = 1.0; // px per frame (matching tools speed)

  // Responsive visible cards - 7 logos on desktop
  const getCardsVisible = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 600) {
      return 3;
    }
    return 7;
  };
  const [cardsVisible, setCardsVisible] = useState(getCardsVisible());

  useEffect(() => {
    const handleResize = () => {
      setCardsVisible(getCardsVisible());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Marquee auto-scroll effect with pause on arrow hover
  const isPausedRef = useRef(false);
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;
    let start = positionRef.current;
    const animate = () => {
      if (!isPausedRef.current) {
        start -= speed;
        if (Math.abs(start) >= marquee.scrollWidth / 2) {
          start = 0;
        }
        marquee.style.transform = `translateX(${start}px)`;
        positionRef.current = start;
      }
      reqIdRef.current = requestAnimationFrame(animate);
    };
    reqIdRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(reqIdRef.current);
  }, []);

  // Pause/resume auto-scroll on hover (like tools grid)
  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };
  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };

  // Removed manual scroll controls for continuous looping

  return (
    <div 
      className="relative py-8 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Names Marquee - continuous loop */}
      <div className="overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex"
          style={{ willChange: 'transform' }}
        >
          {names.map((name, idx) => (
            <div
              key={idx}
              className={`min-w-[${100/cardsVisible}%] max-w-[${100/cardsVisible}%] flex items-center justify-center px-6`}
              style={{ boxSizing: 'border-box', minWidth: `${100/cardsVisible}%`, maxWidth: `${100/cardsVisible}%` }}
            >
              <span
                className="text-white text-lg font-medium whitespace-nowrap"
                style={{ opacity: 0.8 }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogoSlider;
