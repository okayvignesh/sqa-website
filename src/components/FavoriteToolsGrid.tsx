import React from 'react';

type ToolCardProps = {
  src: string;
  label: string;
};


const ToolCard = ({ src, label }: ToolCardProps) => (
  <div
    className="flex flex-col items-center justify-center p-8 shadow-lg"
    style={{ width: '150px', height: '150px', background: 'rgb(12 41 81)', borderRadius: 0, marginRight: '5px' }}
  >
    <img src={src} alt={label} className="h-12 w-12 mb-4 object-contain" />
    <span className="text-gray-200 text-base font-medium">{label}</span>
  </div>
);

const ScrollingRow = ({ cards, direction = 'left', duration = 20 }: { cards: ToolCardProps[]; direction?: 'left' | 'right'; duration?: number }) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const animationRef = React.useRef<number | null>(null);
  const startTimeRef = React.useRef<number | null>(null);
  const isPausedRef = React.useRef(false);
  const pausedAtRef = React.useRef(0);

  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
    if (startTimeRef.current) {
      startTimeRef.current = performance.now() - pausedAtRef.current;
    }
  };

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const animate = (currentTime: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime;
      }

      if (!isPausedRef.current) {
        const elapsed = currentTime - startTimeRef.current;
        let progress = (elapsed / (duration * 1000)) % 1;

        // For seamless looping, we need to ensure smooth transition between sets
        // The key is that progress goes from 0 to 1, and when it reaches 1, it should seamlessly continue

        // Calculate total width of one complete set of cards
        // Each card is 150px + 10px gap = 160px per card
        const cardWidth = 160;
        const totalWidth = cards.length * cardWidth;

        let translateX;
        if (direction === 'left') {
          translateX = -progress * totalWidth;
        } else {
          translateX = -(1 - progress) * totalWidth;
        }

        container.style.transform = `translate3d(${translateX}px, 0, 0)`;
      } else {
        pausedAtRef.current = currentTime - startTimeRef.current;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [cards, direction, duration]);

  return (
    <div 
      style={{
        overflow: 'hidden',
        width: '100%',
        position: 'relative',
        height: '150px',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Edge fade to make the re-entry/exit transition visibly pleasant */}
      <div
        ref={containerRef}
        style={{
          display: 'flex',
          width: 'max-content',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          gap: '0px', // Ensure no gap between card sets
          WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 8%, rgba(0,0,0,1) 92%, rgba(0,0,0,0))',
          maskImage: 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 8%, rgba(0,0,0,1) 92%, rgba(0,0,0,0))',
          WebkitMaskSize: '100% 100%',
          maskSize: '100% 100%',
          transformStyle: 'preserve-3d',
        } as React.CSSProperties}
      >
        {/* First set of cards */}
        <div style={{ display: 'flex', gap: '0px' }}>
          {cards.map((card, idx) => (
            <ToolCard key={`set1_${idx}_${card.label}`} src={card.src} label={card.label} />
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div style={{ display: 'flex', gap: '0px' }}>
          {cards.map((card, idx) => (
            <ToolCard key={`set2_${idx}_${card.label}`} src={card.src} label={card.label} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Note: per-row keyframes are generated dynamically inside ScrollingRow to ensure
// the translation distance matches the measured group width and avoids blank gaps.

const FavoriteToolsGrid: React.FC = () => (
  <section className="py-16 bg-black">
    <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-8 md:mb-10 px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
          Connect. Orchestrate. Deliver.
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
          Bridge the gap between fragmented tools. Turn your disconnected CI/CD, management, and testing tools into a single, unified delivery engine 
          </p>
        </div>
      <div style={{ position: 'relative', width: '100%' }}>
        {/* Vignette effect only for grid */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              zIndex: 2,
              background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 60%, rgba(0,0,0,0.7) 100%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              zIndex: 2,
              background: 'radial-gradient(circle, rgb(0 0 0 / 0%) 0%, rgba(0, 0, 0, 0.2) 60%, rgb(0 0 0) 100%)',
            }}
          />
        <div className="flex flex-col gap-[10px] items-center justify-center relative z-0">
          {/* Row 1: scroll left */}
          <ScrollingRow
            direction="left"
            duration={120}
            cards={[
              { src: "/assets/fav_tool/Jira.svg", label: "Jira" },
              { src: "/assets/fav_tool/MS teams.svg", label: "Teams" },
              { src: "/assets/fav_tool/Azure devops.svg", label: "Azure" },
              { src: "/assets/fav_tool/Browser stack.svg", label: "Browser stack" },
              { src: "/assets/fav_tool/Slack.svg", label: "Sauce labs" },
              { src: "/assets/fav_tool/AWS.svg", label: "Aws" },
              { src: "/assets/fav_tool/Vector (16).svg", label: "VM Based" },
              { src: "/assets/fav_tool/Jira.svg", label: "Jira" },
              { src: "/assets/fav_tool/MS teams.svg", label: "Teams" },
              { src: "/assets/fav_tool/Azure devops.svg", label: "Azure" },
              { src: "/assets/fav_tool/Browser stack.svg", label: "Browser stack" },
              { src: "/assets/fav_tool/Slack.svg", label: "Sauce labs" },
              { src: "/assets/fav_tool/AWS.svg", label: "Aws" },
              { src: "/assets/fav_tool/Vector (16).svg", label: "VM Based" },
            ]}
          />
          {/* Row 2: scroll right */}
          <ScrollingRow
            direction="right"
            duration={120}
            cards={[
              { src: "/assets/fav_tool/Jenkins_logo 1.svg", label: "Bamboo" },
              { src: "/assets/fav_tool/Slack.svg", label: "Slack" },
              { src: "/assets/fav_tool/Jenkins_logo 1.svg", label: "Jenkins" },
              { src: "/assets/fav_tool/Azure devops.svg", label: "Azure Devops" },
              { src: "/assets/fav_tool/Linear.svg", label: "GitLab" },
              { src: "/assets/fav_tool/Travis CI.svg", label: "Concourse" },
              { src: "/assets/fav_tool/Jenkins_logo 1.svg", label: "Bamboo" },
              { src: "/assets/fav_tool/Slack.svg", label: "Slack" },
              { src: "/assets/fav_tool/Jenkins_logo 1.svg", label: "Jenkins" },
              { src: "/assets/fav_tool/Azure devops.svg", label: "Azure Devops" },
              { src: "/assets/fav_tool/Linear.svg", label: "GitLab" },
              { src: "/assets/fav_tool/Travis CI.svg", label: "Concourse" },
              { src: "/assets/fav_tool/Jenkins_logo 1.svg", label: "Bamboo" },
            ]}
          />
        </div>
      </div>
    </div>
  </section>
);

export default FavoriteToolsGrid;
