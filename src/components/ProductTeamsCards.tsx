import { Plus, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

type CardItem = {
  id: string;
  title: string;
  imageSrc?: string; // background illustration (optional)
  onClick?: () => void;
  contentTitle?: string;
  contentParagraphs?: string[];
};

type ProductTeamsCardsProps = {
  heading?: string; // backward-compat single heading
  headingTitle?: string;
  headingSubtitle?: string;
  items?: CardItem[];
};

const Card: React.FC<CardItem> = ({ title, imageSrc, onClick }) => {
  return (
    <div
      className="relative rounded-xl sm:rounded-2xl overflow-hidden"
      style={{
        background: 'rgb(29 29 29 / 35%)',
        height: '350px',
        minHeight: '350px'
      }}
    >
      <button
        type="button"
        onClick={onClick}
        className="w-full h-full text-left group reset-module__RLQqCG__reset-button relative"
        aria-haspopup="dialog"
        aria-expanded="false"
      >
        {/* Image area with bottom overlay inside as child */}
        <div className="relative h-full">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
            />
          ) : (
            <div
              className="w-full h-full"
              style={{
                background:
                  'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.06), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.06), transparent 35%)'
              }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.25)] to-[rgba(0,0,0,0.6)]" />

          {/* Bottom row: title + plus icon */}
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-3 sm:gap-4 w-full px-4 sm:px-6 py-4 sm:py-6">
            <span className="font-semibold leading-tight flex-shrink min-w-0 text-base sm:text-lg md:text-xl" style={{ color: '#d0d0d0' }}>
              {title}
            </span>
            <span
              className="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[rgba(255,255,255,0.06)] text-gray-300 group-hover:bg-[rgba(255,255,255,0.12)] transition-colors flex-shrink-0"
              aria-hidden="true"
            >
              <Plus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </span>
          </div>
        </div>
      </button>
    </div>
  );
};

const ProductTeamsCards: React.FC<ProductTeamsCardsProps> = ({ heading = 'Built for product teams', headingTitle, headingSubtitle, items }) => {
  const [openImage, setOpenImage] = useState<string | null>(null);
  const [openTitle, setOpenTitle] = useState<string>('');
  const [modalMounted, setModalMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const CLOSE_ANIM_MS = 600;

  const demoItems: CardItem[] = [
    {
      id: 'release-requirement-management',
      title: 'Release & Requirement Management',
      imageSrc: '/assets/modal_image/req.png',
      contentTitle: 'Release & Requirement Management - Centralized control and intelligent orchestration for seamless releases.',
      contentParagraphs: [
        'Centralized Release Orchestrator: Configure and control every release through a centralized board integrated with sprint data and test executions. SimplifyQA enables real-time tracking of build versions, linked test suites, and deployment readiness across environments.',
        'Release Intelligence Metrics: Gain real-time visibility into release quality with automated dashboards tracking execution status, defect trends, and test coverage. SimplifyQA delivers data-driven insights to assess readiness and optimize every deployment cycle.',
        'Intelligent Version Control: Maintain complete traceability with automatic version control for your test cases, modules, and releases. Easily compare, restore, or link versions to specific builds for consistent, reliable testing.',
        'Cross-Project Release Integrator: Manage and synchronize releases spanning multiple projects from a single dashboard. SimplifyQA unifies execution tracking, dependencies, and reporting to ensure seamless coordination across integrated systems.'
      ]
    },
    {
      id: 'test-management',
      title: 'Test Management',
      imageSrc: '/assets/modal_image/test_case.png',
      contentTitle: 'Scaling Quality without Scaling Headcount 🛡️ - Transform your QA team into a high-efficiency center by empowering everyone to automate.',
      contentParagraphs: [
        'Cost Optimization: Democratize Automation with our script-less platform, leveraging existing manual resources to build robust automation, drastically lowering the cost per test case.',
        'Resilient Automation: Our Self-Healing Mechanism automatically adapts tests to minor UI changes, cutting maintenance effort by up to 80% and freeing up technical talent.',
        'Comprehensive Risk Coverage: Support for Manual, API, Database, and Hybrid Tests in a single hub ensures all application layers are covered.',
        'Maximise Re-usability: Utilize built-in logic and centralized management to easily copy and reuse test logic across projects.'
      ]
    },
    {
      id: 'test-execution',
      title: 'Test Execution',
      imageSrc: '/assets/modal_image/test_exe.png',
      contentTitle: 'Velocity and Stability ⏱️ - Accelerate delivery speed while reinforcing quality gates with massive scale and seamless integration.',
      contentParagraphs: [
        'Fastest Time-to-Market (TTM): Parallel Cloud Execution delivers test results in minutes, not hours, allowing for more frequent and safer deployments.',
        'DevOps Synergy: Seamless CI/CD Integration (Jenkins, GitLab) for automated Pipelines, enabling true "Shift-Left" quality control.',
        'High Confidence Deployments: Structured Test Execution Plans ensure every build is thoroughly vetted before reaching production.',
        'Efficient Scheduling: Run tests during off-peak hours with automated scheduling to maximize environment utilization and minimize disruption.'
      ]
    },
    {
      id: 'defect-management',
      title: 'Defect Management',
      imageSrc: '/assets/modal_image/frame_4.png',
      contentTitle: 'Closing the Quality Loop Instantly 🐞 - Slash incident costs and accelerate resolution times with automated, transparent defect tracking.',
      contentParagraphs: [
        'Reduced Incident Costs: Auto-logging of Defects and bi-directional synchronization with Jira cuts the Mean Time To Resolution (MTTR).',
        'Faster Developer Feedback: Developers instantly receive detailed, context-rich bug reports without manual data entry by the QA team.',
        'Risk Mitigation: Defects are automatically linked back to the originating Requirement/Test Case, allowing management to assess the true impact of unresolved issues.',
        'Seamless Synergy: Our Defect Management Marketplace ensures issues are synchronized instantly, eliminating communication lag between QA and Dev tools.'
      ]
    },
    {
      id: 'requirement-traceability-management',
      title: 'Requirement and Traceability Management (RTM)',
      imageSrc: '/assets/modal_image/rtm.png',
      contentTitle: 'The Trust Factor 🔗 - Ensure every line of code aligns with business needs and that quality is provable and auditable.',
      contentParagraphs: [
        'Compliance & Audit: The End-to-End Traceability and Hierarchy Tree provide a clear, indisputable chain of quality, crucial for regulatory and stakeholder trust.',
        '100% Coverage Assurance: Developers and BAs can instantly verify that every User Story is linked to at least one Test Case, leaving no requirement untested.',
        'Risk Visibility: Assess the true impact of a potential failure by viewing the criticality of the requirement linked to a failed test.',
        'Consistent Definition: Utilize Custom Fields to standardize requirement data across all projects, enforcing organizational governance.'
      ]
    },
    {
      id: 'dashboard-reports',
      title: 'Dashboard & Reports',
      imageSrc: '/assets/modal_image/dash_board.png',
      contentTitle: 'Dashboard - Transform complex testing data into actionable, real-time insights with intelligent analytics.',
      contentParagraphs: [
        'Data Intelligence Engine: Leverage advanced business intelligence to visualize test performance, defect trends, and release metrics. SimplifyQA transforms complex testing data into actionable, real-time insights.',
        'Smart Dashboard Builder: Design custom dashboards effortlessly with an intuitive drag-and-drop interface. SimplifyQA lets you build and organize widgets, charts, and reports without any coding effort.',
        'Connected Data Framework: Connect multiple reports for end-to-end visibility across projects, sprints, and releases. SimplifyQA dynamically links data sources, ensuring consistency and traceability in every dashboard view.',
        'Intelligent Dependency Mapping: Analyze dependencies between test cases, modules, and releases through intelligent visual graphs. SimplifyQA enables deep drill-downs to uncover root causes and track impact instantly.',
        'One-Click Report Exporter: Convert dashboards into professional PDF reports with a single click. SimplifyQA ensures every chart and metric is formatted perfectly for documentation and stakeholder reviews.',
        'Collaborative Insight Hub: Collaborate seamlessly by sharing real-time dashboards across teams and stakeholders. SimplifyQA provides secure, role-based access for transparent and informed decision-making.'
      ]
    }
  ];

  const cards = items && items.length > 0 ? items : demoItems;
  const CARDS_PER_SLIDE = 3;
  const totalSlides = Math.ceil(cards.length / CARDS_PER_SLIDE);

  // basic body scroll lock while modal is open
  useEffect(() => {
    if (openImage) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      // allow enter animation on next frame
      requestAnimationFrame(() => setModalMounted(true));
      return () => { document.body.style.overflow = prev; };
    }
  }, [openImage]);

  const autoPlayIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-play carousel - pause when modal is open
  useEffect(() => {
    if (openImage) {
      // Clear interval if modal is open
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
        autoPlayIntervalRef.current = null;
      }
      return;
    }
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000); // Change slide every 4 seconds

    autoPlayIntervalRef.current = interval;

    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
        autoPlayIntervalRef.current = null;
      }
    };
  }, [openImage, totalSlides]);

  const closeModal = () => {
    setModalMounted(false);
    window.setTimeout(() => setOpenImage(null), CLOSE_ANIM_MS);
  };

  const handleSlideClick = (slideIndex: number) => {
    // Stop auto-play when user manually clicks
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
      autoPlayIntervalRef.current = null;
    }
    
    setCurrentSlide(slideIndex);
  };

  const getCardsForSlide = (slideIndex: number) => {
    const start = slideIndex * CARDS_PER_SLIDE;
    return cards.slice(start, start + CARDS_PER_SLIDE);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">{headingTitle || heading}</h2>
          {headingSubtitle && (
            <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">{headingSubtitle}</p>
          )}
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div 
                key={slideIndex}
                className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              >
                {getCardsForSlide(slideIndex).map((card) => (
                  <Card
                    key={card.id}
                    {...card}
                    onClick={() => {
                      if (card.imageSrc) setOpenImage(card.imageSrc);
                      setOpenTitle(card.title);
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-2 mt-6 sm:mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideClick(index)}
              className="transition-all duration-300 hover:scale-110 focus:outline-none"
              aria-label={`Go to slide ${index + 1}`}
              style={{
                width: index === currentSlide ? '32px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: index === currentSlide ? '#fff' : 'rgba(255, 255, 255, 0.3)'
              }}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal rendered in portal to ensure it overlays header and all content */}
      {openImage && createPortal(
        (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={openTitle}
            tabIndex={-1}
            onKeyDown={(e) => { if (e.key === 'Escape') closeModal(); }}
            className="fixed inset-0 z-[10000] flex items-center justify-center"
          >
            <div
              className={`absolute inset-0 bg-black/80 transition-opacity duration-500 ease-out ${modalMounted ? 'opacity-100' : 'opacity-0'} z-0`}
              onClick={closeModal}
            />
          <div
            className={`relative z-10 w-[95vw] sm:w-[92vw] max-w-[1100px] rounded-2xl overflow-hidden transform transition-all duration-500 ease-out ${modalMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} max-h-[90vh] sm:max-h-[85vh] overflow-y-auto bg-[rgb(18,18,20)] modal-scrollbar`}
          >
              {/* Close button - Sticky */}
              <div className="sticky top-3 sm:top-4 z-20 flex justify-end px-3 sm:px-4 pointer-events-none">
                <button
                  type="button"
                  aria-label="Close"
                  onClick={closeModal}
                  className="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-black/70 cursor-pointer pointer-events-auto transition-all"
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>

              {/* Overall Scrollable Content */}
              <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12">
                <div className="max-w-4xl mx-auto">
                  {/* Image - 40% width, centered with border radius */}
                  {openImage && (
                    <div className="flex justify-center mb-8 sm:mb-10">
                      <img 
                        src={openImage} 
                        alt={openTitle}
                        className="w-[40%] h-auto object-contain rounded-xl"
                      />
                    </div>
                  )}

                  {/* Heading - Sub-heading as main heading */}
                  <h4 
                    className="text-white mb-6 sm:mb-8 text-center" 
                    style={{ 
                      letterSpacing: '-0.0325em',
                      fontVariationSettings: '"opsz" 28',
                      fontSize: '56px',
                      fontWeight: 538,
                      lineHeight: 1.1
                    }}
                  >
                    {openTitle}
                  </h4>
                  
                  {/* Body Text - First paragraph */}
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed break-words text-center mb-8 sm:mb-10 max-w-3xl mx-auto">
                    {(() => {
                      const card = cards.find(c => c.title === openTitle);
                      const contentTitle = card?.contentTitle;
                      return contentTitle?.split(' - ')[1]?.trim() || '';
                    })()}
                  </p>
                  
                  {/* Content List - Clean paragraphs */}
                  <div className="space-y-5 sm:space-y-6">
                    {(cards.find(c => c.title === openTitle)?.contentParagraphs || []).map((p, i) => {
                      const [label, ...rest] = p.split(':');
                      const description = rest.join(':').trim();
                      const fullText = description || p;
                      
                      return (
                        <p key={i} className="text-base sm:text-lg leading-relaxed break-words text-left max-w-3xl mx-auto" style={{ color: '#8a8f98' }}>
                          <span className="font-semibold" style={{ color: '#8a8f98' }}>{label}:</span>
                          {description && ` ${description}`}
                          {!description && fullText}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
        document.body
      )}
    </section>
  );
};

export default ProductTeamsCards;


