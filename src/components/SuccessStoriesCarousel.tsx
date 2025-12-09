import { User } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Story {
  id: number;
  title: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
}

const stories: Story[] = [
  {
    id: 1,
    title: "Ultra-Fast Cloud-Driven Test Execution",
    description: "A leading FinTech client leveraged SimplifyQA's dynamic cloud execution to run thousands of automated test cases in minutes. The platform instantly spun up multiple cloud pods, auto-distributed tests, pushed reports, and seamlessly shut down resources after execution, dramatically boosting efficiency and enabling real-time feedback.",
    metrics: [
      { label: "Test case creation time reduction", value: "50–75%" },
      { label: "Regression testing effort reduction", value: "60–80%" },
      { label: "Dashboard/report generation time reduction", value: "70–90%" },
      { label: "Test coverage improvement", value: "200%" },
      { label: "Overall test automation cost reduction", value: "30–40%" }
    ]
  },
  {
    id: 2,
    title: "Mainframe Automation at Scale",
    description: "One of the largest insurance companies adopted SimplifyQA to automate over 10,000 mainframe test cases—something previously unmanageable. SimplifyQA's powerful scheduler and pipeline triggered systematic, high-volume test runs across mainframe, API, database, and web screens, ensuring 5,000+ successful executions per release and vastly improving coverage and speed.",
    metrics: [
      { label: "Test case creation time reduction", value: "50–75%" },
      { label: "Regression testing effort reduction", value: "60–80%" },
      { label: "Dashboard/report generation time reduction", value: "70–90%" },
      { label: "Test coverage improvement", value: "200%" },
      { label: "Overall test automation cost reduction", value: "30–40%" }
    ]
  },
  {
    id: 3,
    title: "Drastic Reduction in Execution Time",
    description: "A global healthcare provider saw regression test cycles drop from 15 hours to under 30 minutes after switching to SimplifyQA's parallel cloud execution. Automated provisioning, intelligent test distribution, and real-time results reporting helped the client achieve near-instant feedback and reduced time-to-market for new releases.",
    metrics: [
      { label: "Test case creation time reduction", value: "50–75%" },
      { label: "Regression testing effort reduction", value: "60–80%" },
      { label: "Dashboard/report generation time reduction", value: "70–90%" },
      { label: "Test coverage improvement", value: "200%" },
      { label: "Overall test automation cost reduction", value: "30–40%" }
    ]
  },
  {
    id: 4,
    title: "Effortless Maintenance & Creation for Large Teams",
    description: "A digital banking client used SimplifyQA's scriptless automation and AI-powered authoring to cut test case creation and maintenance time by over 60%. Manual testers quickly became automation experts, building resilient cross-platform tests, while maintenance overhead dropped due to self-healing automation and reusable assets.",
    metrics: [
      { label: "Test case creation time reduction", value: "50–75%" },
      { label: "Regression testing effort reduction", value: "60–80%" },
      { label: "Dashboard/report generation time reduction", value: "70–90%" },
      { label: "Test coverage improvement", value: "200%" },
      { label: "Overall test automation cost reduction", value: "30–40%" }
    ]
  },
  {
    id: 5,
    title: "End-to-End Lifecycle Automation & Bug Management",
    description: "A leading technology company streamlined its entire QA pipeline by integrating requirements, test case creation, cloud execution, and auto defect logging—supported by SimplifyQA's unified platform. The average time from bug creation to resolution was cut by half, thanks to intelligent dashboards, automated defect tracking, and real-time lifecycle management.",
    metrics: [
      { label: "Test case creation time reduction", value: "50–75%" },
      { label: "Regression testing effort reduction", value: "60–80%" },
      { label: "Dashboard/report generation time reduction", value: "70–90%" },
      { label: "Test coverage improvement", value: "200%" },
      { label: "Overall test automation cost reduction", value: "30–40%" }
    ]
  }
];

const SuccessStoriesCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll functionality with pause on hover
  useEffect(() => {
    if (isPaused) return; // Don't start interval if paused
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stories.length);
    }, 15000); // Change slide every 15 seconds for a much slower scroll

    return () => clearInterval(interval);
  }, [isPaused]);

  // Removed unused navigation functions

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  const getCardStyle = (index: number, isHovered: boolean) => {
    const diff = index - activeIndex;
    const position = diff < 0 ? diff + stories.length : diff;

    // Show only 3 cards at a time: current, next, and previous
    if (position <= 2) {
      // Active card - bottom of the stack, full size
      if (position === 0) {
        return {
          transform: isHovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0px) scale(1)',
          filter: 'blur(0px)',
          zIndex: 30,
          opacity: 1,
          top: '0px',
          pointerEvents: 'auto' as const,
          cursor: 'pointer' as const,
          visibility: 'visible' as const
        };
      } else if (position === 1) {
        // Second card - peeking out from top
        return {
          transform: isHovered ? 'translateY(-25%) scale(0.97)' : 'translateY(-20%) scale(0.95)',
          filter: 'blur(1px)',
          zIndex: 20,
          opacity: 1,
          top: '0px',
          pointerEvents: 'auto' as const,
          cursor: 'pointer' as const,
          visibility: 'visible' as const
        };
      } else if (position === 2) {
        // Third card - peeking out even more from top
        return {
          transform: isHovered ? 'translateY(-45%) scale(0.92)' : 'translateY(-40%) scale(0.9)',
          filter: 'blur(2px)',
          zIndex: 10,
          opacity: 1,
          top: '0px',
          pointerEvents: 'auto' as const,
          cursor: 'pointer' as const,
          visibility: 'visible' as const
        };
      }
    }

    // Hidden cards (opacity 0 but still in DOM for smooth transitions)
    return {
      transform: 'translateY(-60%) scale(0.85)',
      filter: 'blur(3px)',
      zIndex: 5,
      opacity: 0,
      top: '0px',
      pointerEvents: 'none' as const,
      visibility: 'hidden' as const
    };
  };


  return (
    <section className="pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10 px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
          Quality at the Speed of Innovation.
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
          Real stories of how we helped enterprises conquer technical debt, crush bottlenecks, and modernize their QA. 
          </p>
        </div>

         {/* Carousel Container */}
         <div
           className="relative min-h-[350px] sm:min-h-[400px] md:min-h-[425px]"
           style={{ top: '100px' }}
           onMouseEnter={() => setIsPaused(true)}
           onMouseLeave={() => setIsPaused(false)}
         >
           {/* Cards Stack */}
           <div className="relative flex items-start justify-center pt-4 md:pt-8 px-2 md:px-4">
            {stories.map((story, index) => (
              <div
                key={story.id}
                className="absolute transition-all duration-500 ease-out"
                style={{
                  ...getCardStyle(index, hoveredIndex === index),
                  width: 'min(900px, 90vw)',
                  maxWidth: '90vw'
                }}
                onMouseEnter={() => {
                  setHoveredIndex(index);
                  setIsPaused(true);
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  setIsPaused(false);
                }}
                onClick={() => handleCardClick(index)}
              >
                 {/* Card Content */}
                 <div
                   className="overflow-hidden relative"
                   style={{
                     background: 'linear-gradient(135deg, #0a1628 0%, #0c1a2a 50%, #0a1628 100%)',
                     border: '1px solid rgba(255, 255, 255, 0.1)',
                     borderRadius: '16px',
                     boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.08), inset 0 -1px 0 0 rgba(0,0,0,0.3), 0 4px 20px rgba(0,0,0,0.3)',
                     width: '100%'
                   }}
                 >
                    {/* Header Section */}
                    <div className="flex items-center justify-between px-4 md:px-8 py-2" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <div
                        className="rounded-lg flex items-center justify-center"
                        style={{
                          padding: '5px',
                          background: 'rgba(10, 22, 40, 0.8)',
                          borderRadius: '8px',
                          boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.05)'
                        }}
                      >
                        <User className="h-5 w-5 text-gray-400" strokeWidth={1.5} />
                      </div>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                      </div>
                    </div>

                    {/* Body Section */}
                    <div className="p-4 md:p-6 lg:p-8">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-3 md:mb-4">
                        {story.title}
                      </h3>

                      <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4 md:mb-6" style={{ opacity: 0.8 }}>
                        {story.description}
                      </p>

                      {/* Single Metric */}
                      <div className="flex items-start gap-2 md:gap-3">
                        <div className="w-4 h-4 md:w-5 md:h-5 mt-1 flex-shrink-0">
                          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-blue-400">
                            <path
                              d="M9 12l2 2 4-4"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="2"
                              fill="none"
                            />
                          </svg>
                        </div>
                        <div className="text-sm md:text-base">
                          <span className="text-white font-medium">{story.metrics[story.id - 1]?.label}: </span>
                          <span className="text-blue-400 font-semibold">{story.metrics[story.id - 1]?.value}</span>
                        </div>
                      </div>
                    </div>

                    {/* Gradient light effect */}
                    <div 
                      className="absolute top-0 right-0 w-full h-full pointer-events-none"
                      style={{
                        background: 'radial-gradient(50% 50% at 93.7% 8.1%, rgba(184, 199, 217, 0.5) 0%, rgba(4, 7, 13, 0) 100%)',
                        opacity: 0.1
                      }}
                    />
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Comment Text Below Cards */}
        <div className="text-center w-full md:w-[50vw] mx-auto mt-8 md:mt-12">
          
          {/* Navigation Dots */}
          <div className="flex justify-center gap-2">
            {stories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className="transition-all duration-300 hover:scale-110"
                style={{
                  width: idx === activeIndex ? '32px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: idx === activeIndex ? '#fff' : 'rgba(255, 255, 255, 0.3)'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesCarousel;

