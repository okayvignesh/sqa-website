import {
  Shield,
  Target,
  TrendingUp,
  Wrench,
  Zap
} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: {
    description: string;
    features: string[];
  };
}

const FeatureShowcase: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [expandedCards, setExpandedCards] = useState<number[]>([0]); // Only first card expanded by default
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isMediaFading, setIsMediaFading] = useState(false);
  const rightSideRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const autoAdvanceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Duration for each video in milliseconds (26s, 9s, 9s for third)
  const videoDurations = [26000, 9000, 9000];

  const mediaItems = [
    {
      src: '/assets/video/open_ai.gif',
      title: 'AI Studio',
      description: 'AI Studio interprets your requirements to define actionable features, creates accurate user stories from them, and then transforms those into executable test cases.'
    },
    {
      src: '/assets/video/Test_data_generation.gif',
      title: 'Test Data Generation',
      description: 'SimplifyQA delivers AI-powered test data generation rooted in advanced formula logic. Accurate, reusable, and scalable — built to support any industry\'s complexity.'
    },
    {
      src: '/assets/video/Automation_Testcase.gif',
      title: 'Automation Testcase',
      description: 'Go from a simple text prompt to a rigorous test case without writing a single line. Our GenAI engine analyzes your intent and automatically builds the detailed steps required for execution, ensuring precision at the speed of thought.'
    }
  ];

  const features: Feature[] = [
    {
      id: 'smart-requirement-capture',
      title: 'Smart Requirement Capture & Management',
      description: 'Smart Requirement Capture & Management',
      icon: <Zap className="h-6 w-6 text-blue-500" />,
      details: {
        description: 'Smart Requirement Capture & Management',
        features: [
          'Automate transformation of raw inputs into actionable Epics, Features, and User Stories.',
          'Ensure full traceability by connecting requirements to original sources.',
          'Use AI to detect gaps, ambiguities, and prioritize critical requirements.'
        ]
      }
    },
    {
      id: 'predictive-release-planning',
      title: 'Predictive & Intelligent Release Planning',
      description: 'Predictive & Intelligent Release Planning',
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      details: {
        description: 'Predictive & Intelligent Release Planning',
        features: [
          'Forecast bottlenecks and optimize release order with AI-driven insights.',
          'Make informed Go/No-Go decisions backed by risk analysis and readiness scores.',
          'Keep stakeholders aligned with real-time release dashboards and metrics.'
        ]
      }
    },
    {
      id: 'next-gen-test-creation',
      title: 'Next-Gen Test Creation & Execution',
      description: 'Next-Gen Test Creation & Execution',
      icon: <Wrench className="h-6 w-6 text-blue-500" />,
      details: {
        description: 'Next-Gen Test Creation & Execution',
        features: [
          'Generate prioritized test cases and automation scripts powered by AI analysis.',
          'Seamlessly convert user stories to manual tests, then automate with ease.',
          'Streamline API and web test creation side-by-side for comprehensive coverage.',
          'Enhance execution with self-healing, adaptive scheduling, and failure prediction.'
        ]
      }
    },
    {
      id: 'ai-driven-defect-identification',
      title: 'AI-Driven Defect Identification & Resolution',
      description: 'AI-Driven Defect Identification & Resolution',
      icon: <Target className="h-6 w-6 text-blue-500" />,
      details: {
        description: 'AI-Driven Defect Identification & Resolution',
        features: [
          'Uncover root causes and recurring defect patterns using AI-powered analysis.',
          'Focus efforts on high-impact defects through data-driven prioritization.',
          'Track quality progress and improvements with dynamic, executive-friendly reports.'
        ]
      }
    },
    {
      id: 'actionable-analytics',
      title: 'Actionable Analytics for Continuous Improvement',
      description: 'Actionable Analytics for Continuous Improvement',
      icon: <TrendingUp className="h-6 w-6 text-blue-500" />,
      details: {
        description: 'Actionable Analytics for Continuous Improvement',
        features: [
          'Leverage AI to predict trends and uncover optimization opportunities.',
          'Analyze team performance, velocity, and quality patterns over time.',
          'Customize dashboards with real-time KPIs tailored to different roles.',
          'Proactively monitor critical metrics with live updates and smart alerts.'
        ]
      }
    }
  ];

  const currentFeature = features[activeFeature];

  // Auto-advance media based on duration for each video
  useEffect(() => {
    // Clear any existing timeout
    if (autoAdvanceRef.current) {
      clearTimeout(autoAdvanceRef.current);
    }

    // Set timeout for current video duration
    const duration = videoDurations[currentMediaIndex];
    autoAdvanceRef.current = setTimeout(() => {
      setIsMediaFading(true);
      setTimeout(() => {
        setCurrentMediaIndex((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1));
        setTimeout(() => setIsMediaFading(false), 300);
      }, 250);
    }, duration);

    return () => {
      if (autoAdvanceRef.current) {
        clearTimeout(autoAdvanceRef.current);
      }
    };
  }, [currentMediaIndex, mediaItems.length]);

  const toggleCardExpansion = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? [] // Close all if clicking on an open card
        : [index] // Open only the clicked card, close all others
    );
    
    // If expanding a card, scroll to that section
    if (!expandedCards.includes(index)) {
      setActiveFeature(index);
      scrollToFeature(index);
    }
  };

  const scrollToFeature = (index: number) => {
    if (rightSideRef.current) {
      const sectionHeight = rightSideRef.current.clientHeight;
      const scrollPosition = index * sectionHeight;
      
      // Custom slow scroll animation
      const startPosition = rightSideRef.current.scrollTop;
      const distance = scrollPosition - startPosition;
      const duration = 10000; // 10 seconds for ultra slow scroll
      let startTime: number;
      
      const animateScroll = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth deceleration
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentPosition = startPosition + (distance * easeOutCubic);
        
        if (rightSideRef.current) {
          rightSideRef.current.scrollTop = currentPosition;
        }
        
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };
      
      requestAnimationFrame(animateScroll);
    }
  };


  // Scroll-based feature switching with animations
  useEffect(() => {
    let ticking = false;
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!rightSideRef.current) {
            ticking = false;
            return;
          }

          setIsScrolling(true);
          
          // Clear previous timeout
          clearTimeout(scrollTimeout);
          
          // Set timeout to detect when scrolling stops
          scrollTimeout = setTimeout(() => {
            setIsScrolling(false);
          }, 2000);

          const scrollTop = rightSideRef.current.scrollTop;
          const containerHeight = rightSideRef.current.clientHeight;
          const sectionHeight = containerHeight; // Each section takes full height
          
          // Calculate which section should be active based on scroll position
          const newActiveFeature = Math.round(scrollTop / sectionHeight);
          const clampedFeature = Math.max(0, Math.min(newActiveFeature, features.length - 1));

          if (clampedFeature !== activeFeature) {
            setActiveFeature(clampedFeature);
            setExpandedCards([clampedFeature]);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    const rightSide = rightSideRef.current;
    if (rightSide) {
      // Add smooth scroll behavior
      rightSide.style.scrollBehavior = 'smooth';
      
      rightSide.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        rightSide.removeEventListener('scroll', handleScroll);
        clearTimeout(scrollTimeout);
      };
    }
  }, [activeFeature, features.length]);

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 mb-6" style={{lineHeight: '65px'}}>
            Next-Gen ALM: AI-Driven Quality and Delivery Management
          </h2>
          <div className={`transition-opacity duration-500 ${isMediaFading ? 'opacity-0' : 'opacity-100'}`}>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {currentMediaIndex === 0 ? (
                <>
                  <span
                    className="font-bold"
                    style={{
                      background: 'linear-gradient(120deg, #3b82f6, #a855f7)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    AI Studio
                  </span>
                  {' interprets your requirements to define actionable features, creates accurate user stories from them, and then transforms those into executable test cases.'}
                </>
              ) : (
                mediaItems[currentMediaIndex].description
              )}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 h-full">
          {/* <div className="flex flex-col justify-between h-full space-y-4">
            <div className="space-y-4">
              {features.map((feature, index) => {
                const isExpanded = expandedCards.includes(index);
                return (
                  <div
                    key={feature.id}
                    className={`rounded-xl transition-all duration-300 ${
                      activeFeature === index
                        ? 'border-l-4 border-blue-500'
                        : ''
                    }`}
                    style={{
                      border: '1px solid rgba(75, 75, 75, 0.36)',
                      background: 'rgb(24, 24, 27)'
                    }}
                  >
                    <div 
                      className="p-6 cursor-pointer"
                      onClick={() => {
                        setActiveFeature(index);
                        scrollToFeature(index);
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className="flex-shrink-0 mt-1">
                            {feature.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className={`text-lg font-bold ${
                              activeFeature === index ? 'text-white' : 'text-gray-300'
                            }`}>
                              {feature.title}
                            </h3>
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCardExpansion(index);
                          }}
                          className="p-1 rounded hover:bg-gray-600 transition-all duration-300 ease-in-out"
                        >
                          <div className={`transform transition-transform duration-500 ease-in-out ${isExpanded ? 'rotate-180' : 'rotate-0'}`}>
                            <ChevronDown className="h-4 w-4 text-gray-400" />
                          </div>
                        </button>
                      </div>
                    </div>

                    <div className={`transition-all duration-700 ease-in-out overflow-hidden ${
                      isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-6 pb-6">
                        <div className="space-y-2">
                          {feature.details.features.map((featureItem, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{featureItem}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div> */}

          {/* Right Media View with Carousel */}
          <div 
            className="relative flex flex-col items-center justify-center w-full space-y-6" 
            ref={rightSideRef} 
          >
            {mediaItems.length > 1 && (
              <button
                onClick={() => {
                  if (isMediaFading) return;
                  setIsMediaFading(true);
                  setTimeout(() => {
                    setCurrentMediaIndex((prev) => (prev === 0 ? mediaItems.length - 1 : prev - 1));
                    setTimeout(() => setIsMediaFading(false), 300);
                  }, 250);
                }}
                className="absolute left-1 md:left-4 lg:left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 md:p-3 rounded-full transition-all z-10"
                aria-label="Previous media"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            <div
              className="w-full md:w-[90%] lg:w-3/4 mx-auto rounded-xl overflow-hidden relative"
              style={{
                border: '1px solid rgba(75, 75, 75, 0.36)',
                background: 'transparent'
              }}
            >
              <img
                key={currentMediaIndex}
                src={mediaItems[currentMediaIndex].src}
                alt={mediaItems[currentMediaIndex].title}
                className={`w-full h-auto object-contain transition-opacity duration-500 ${isMediaFading ? 'opacity-0' : 'opacity-100'}`}
              />
            </div>
            {mediaItems.length > 1 && (
              <button
                onClick={() => {
                  if (isMediaFading) return;
                  setIsMediaFading(true);
                  setTimeout(() => {
                    setCurrentMediaIndex((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1));
                    setTimeout(() => setIsMediaFading(false), 300);
                  }, 250);
                }}
                className="absolute right-1 md:right-4 lg:right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 md:p-3 rounded-full transition-all z-10"
                aria-label="Next media"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
