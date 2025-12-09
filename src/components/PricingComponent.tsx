import { Check } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useScrollAnimations } from '../utils/useScrollAnimations';
import ContactFormModal from './ContactFormModal';

const PricingComponent = () => {
  useScrollAnimations();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [highlightedCard, setHighlightedCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle card click to scroll to Powerful Add-Ons section and highlight the card
  const handleCardClick = (cardIndex: number) => {
    const targetSection = document.getElementById('powerful-addons');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });

      // Highlight the card after scrolling completes
      setTimeout(() => {
        setHighlightedCard(cardIndex);
        // Remove highlight after 3 seconds
        setTimeout(() => {
          setHighlightedCard(null);
        }, 3000);
      }, 500);
    }
  };
  const baseFeatures = [
    'Test Case Management',
    'Requirements Traceability',
    'Defect Tracking',
    'Test Planning & Execution',
    'Real-time Collaboration',
    'Custom Workflows',
    'Reports & Analytics',
    'Integrations (Jira, Azure DevOps)',
  ];

  const addons = [
    {
      name: 'Web Automation',
      description: 'Cross-browser automation and visual regression testing',
      price: '$299',
      features: [
        'Selenium & Playwright Support',
        'Visual Regression Testing',
        'Cross-Browser Testing',
        'Responsive Design Testing',
        'Performance Monitoring',
      ],
    },
    {
      name: 'API & Database Automation',
      description: 'Complete API testing and database validation suite',
      price: '$349',
      features: [
        'REST & GraphQL Testing',
        'API Test Automation',
        'Database Validation',
        'Data-Driven Testing',
        'Schema Verification',
      ],
    },
    {
      name: 'Desktop Automation',
      description: 'Native desktop application testing capabilities',
      price: '$399',
      features: [
        'Windows/Mac/Linux Support',
        'Native App Automation',
        'UI Element Recognition',
        'Desktop Performance Testing',
        'Screenshot Capture',
      ],
    },
    {
      name: 'Mobile Automation',
      description: 'iOS and Android testing on real devices and simulators',
      price: '$449',
      features: [
        'iOS & Android Support',
        'Real Device Cloud',
        'Emulator/Simulator Testing',
        'Touch Gesture Testing',
        'Mobile Performance Testing',
      ],
    },
  ];

  return (
    <div className="min-h-screen text-white">
      {/* New ALM Package Section */}


      <section
        className="px-4 md:px-6 py-12 md:py-16 pt-24 md:pt-32"
        style={{
          background: 'linear-gradient(to bottom, var(--color-bg-translucent), transparent 20%)'
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent" style={{ lineHeight: '70px' }}>
            Simple, Transparent Pricing
          </h2>
          <p className="text-base md:text-xl text-zinc-400">
            Start with comprehensive ALM capabilities, then expand with powerful testing add-ons as you grow
          </p>
        </div>
      </section>
      <section
        className="px-4 md:px-6 py-10 md:py-20"
        style={{
          background: 'linear-gradient(to bottom, var(--color-bg-translucent), transparent 20%)'
        }}
      >
        {/* Main ALM Package Box */}
        <div className='max-w-7xl mx-auto'>
          <div
            className="p-6 md:p-12 shadow-2xl animate-on-scroll relative fade-in-up"
            style={{
              width: isMobile ? '100%' : 'calc(100% - 180px)',
              borderRadius: isMobile ? '20px' : '35px',
              border: '1px solid rgba(75, 75, 75, 0.36)',
              background: 'rgba(30, 41, 59, 0.7)'
            }}
          >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12" style={{ width: isMobile ? '100%' : 'calc(100% - 180px)' }}>
              {/* Left Section - ALM Package */}
              <div style={{ flex: '2' }}>
                <div className="mb-6">
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">ALM Package</h3>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    Complete Application Lifecycle Management capabilities - Test Management, Execution, Requirements, Defect Tracking, Traceability & Analytics
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-gray-800 rounded-full p-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300">Requirements Management</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-gray-800 rounded-full p-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300">Test Planning & Execution</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-gray-800 rounded-full p-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300">Requirements Traceability Matrix</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-gray-800 rounded-full p-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300">Custom Workflows & Automation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-gray-800 rounded-full p-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300">Integrations (Jira, Azure DevOps, Git)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-gray-800 rounded-full p-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300">Audit Trails & Compliance</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-gray-800 rounded-full p-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300">Test Case Management</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-gray-800 rounded-full p-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300">Defect Tracking & Management</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-gray-800 rounded-full p-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300">Real-time Collaboration</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-gray-800 rounded-full p-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300">Advanced Reports & Analytics</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-gray-800 rounded-full p-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300">Role-based Access Control</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-gray-800 rounded-full p-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300">Document Management</span>
                    </div>
                  </div>
                </div>

                {/* <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-white font-semibold px-12 py-3 rounded-lg transition-all duration-200 hover:scale-105"
                  style={{
                    background: 'linear-gradient(120deg, #3b82f6, #a855f7)',
                    boxShadow: '0 10px 25px rgba(168, 85, 247, 0.25)'
                  }}
                >
                  Get Started
                </button> */}
              </div>

              {/* Right Section - Capability Cards (Desktop Only) */}
              {!isMobile && (
                <div
                  className="space-y-4"
                  style={{
                    position: 'absolute',
                    right: '-125px',
                    top: '30px',
                    width: '325px',
                    borderRadius: '25px',
                    border: '1px solid rgb(68, 68, 68)',
                    background: 'rgb(54 54 54 / 45%)',
                    backdropFilter: 'blur(2px)',
                    padding: '10px'
                  }}
                >
                  {/* Card 1 - Web Automation */}
                  <div
                    className="p-4 cursor-pointer border-l-4 border-cyan-500 sq-border-glow-cyan rounded-[15px] shadow-2xl shadow-cyan-900/20 relative overflow-hidden transition-transform hover:scale-[1.02]"
                    style={{
                      background: 'rgba(30, 41, 59, 0.7)'
                    }}
                    onClick={() => handleCardClick(0)}
                  >
                    <h4 className="text-xl font-bold text-white mb-3">Web Automation</h4>
                    <p className="text-gray-300 text-sm">Cross-browser automation and visual regression testing</p>
                  </div>

                  {/* Card 2 - API & Database */}
                  <div
                    className="p-4 cursor-pointer border-l-4 border-cyan-500 sq-border-glow-cyan rounded-[15px] shadow-2xl shadow-cyan-900/20 relative overflow-hidden transition-transform hover:scale-[1.02] mt-[10px]"
                    style={{
                      background: 'rgba(30, 41, 59, 0.7)'
                    }}
                    onClick={() => handleCardClick(1)}
                  >
                    <h4 className="text-xl font-bold text-white mb-3">API & Database Automation</h4>
                    <p className="text-gray-300 text-sm">Complete API testing and database validation suite</p>
                  </div>

                  {/* Card 3 - Desktop Testing */}
                  <div
                    className="p-4 cursor-pointer border-l-4 border-cyan-500 sq-border-glow-cyan rounded-[15px] shadow-2xl shadow-cyan-900/20 relative overflow-hidden transition-transform hover:scale-[1.02] mt-[10px]"
                    style={{
                      background: 'rgba(30, 41, 59, 0.7)'
                    }}
                    onClick={() => handleCardClick(2)}
                  >
                    <h4 className="text-xl font-bold text-white mb-3">Desktop Automation</h4>
                    <p className="text-gray-300 text-sm">Native desktop application testing capabilities</p>
                  </div>

                  {/* Card 4 - Mobile Testing */}
                  <div
                    className="p-4 cursor-pointer border-l-4 border-cyan-500 sq-border-glow-cyan rounded-[15px] shadow-2xl shadow-cyan-900/20 relative overflow-hidden transition-transform hover:scale-[1.02] mt-[10px]"
                    style={{
                      background: 'rgba(30, 41, 59, 0.7)'
                    }}
                    onClick={() => handleCardClick(3)}
                  >
                    <h4 className="text-xl font-bold text-white mb-3">Mobile Automation</h4>
                    <p className="text-gray-300 text-sm">iOS and Android testing on real devices and simulators</p>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Capability Cards - Below ALM Package content */}
            {isMobile && (
              <div className="grid grid-cols-2 gap-3 mt-8">
                {/* Card 1 - Web Automation */}
                <div
                  className="p-3 cursor-pointer border-l-4 border-cyan-500 sq-border-glow-cyan rounded-[12px] shadow-xl shadow-cyan-900/20 relative overflow-hidden"
                  style={{
                    background: 'rgba(30, 41, 59, 0.7)'
                  }}
                  onClick={() => handleCardClick(0)}
                >
                  <h4 className="text-sm font-bold text-white mb-1">Web Automation</h4>
                  <p className="text-gray-300 text-xs">Cross-browser automation and visual regression testing</p>
                </div>

                {/* Card 2 - API & Database */}
                <div
                  className="p-3 cursor-pointer border-l-4 border-cyan-500 sq-border-glow-cyan rounded-[12px] shadow-xl shadow-cyan-900/20 relative overflow-hidden"
                  style={{
                    background: 'rgba(30, 41, 59, 0.7)'
                  }}
                  onClick={() => handleCardClick(1)}
                >
                  <h4 className="text-sm font-bold text-white mb-1">API & Database Automation</h4>
                  <p className="text-gray-300 text-xs">Complete API testing and database validation suite</p>
                </div>

                {/* Card 3 - Desktop Testing */}
                <div
                  className="p-3 cursor-pointer border-l-4 border-cyan-500 sq-border-glow-cyan rounded-[12px] shadow-xl shadow-cyan-900/20 relative overflow-hidden"
                  style={{
                    background: 'rgba(30, 41, 59, 0.7)'
                  }}
                  onClick={() => handleCardClick(2)}
                >
                  <h4 className="text-sm font-bold text-white mb-1">Desktop Automation</h4>
                  <p className="text-gray-300 text-xs">Native desktop application testing capabilities</p>
                </div>

                {/* Card 4 - Mobile Testing */}
                <div
                  className="p-3 cursor-pointer border-l-4 border-cyan-500 sq-border-glow-cyan rounded-[12px] shadow-xl shadow-cyan-900/20 relative overflow-hidden"
                  style={{
                    background: 'rgba(30, 41, 59, 0.7)'
                  }}
                  onClick={() => handleCardClick(3)}
                >
                  <h4 className="text-sm font-bold text-white mb-1">Mobile Automation</h4>
                  <p className="text-gray-300 text-xs">iOS and Android testing on real devices and simulators</p>
                </div>
              </div>
            )}
          </div>
        </div>

      </section>

      {/* Hero Section */}


      {/* Add-ons Section */}
      <section
        id="powerful-addons"
        className="px-4 md:px-6 pt-12 md:pt-20 pb-12 md:pb-20"
        style={{
          background: 'linear-gradient(to bottom, var(--color-bg-translucent), transparent 20%)'
        }}
      >
        <div className="text-center mb-8 md:mb-16 animate-on-scroll">
          <h3 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Powerful Add-Ons</h3>
          <p className="text-base md:text-xl text-zinc-400">Extend your testing capabilities with specialized modules</p>
        </div>
        <div className='max-w-7xl mx-auto'>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {addons.map((addon, index) => (
              <div
                key={index}
                id={`addon-card-${index}`}
                className={`border-l-4 border-cyan-500 sq-border-glow-cyan rounded-xl p-4 md:p-8 shadow-2xl shadow-cyan-900/20 hover:shadow-cyan-900/40 transition-all duration-300 hover:scale-[1.02] flex flex-col animate-on-scroll relative overflow-hidden fade-in-up ${highlightedCard === index ? 'ring-2 ring-cyan-400 scale-[1.05]' : ''}`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  background: highlightedCard === index ? 'rgba(6, 182, 212, 0.15)' : '#49494945',
                  boxShadow: highlightedCard === index ? '0 0 30px rgba(6, 182, 212, 0.4), 0 0 60px rgba(6, 182, 212, 0.2)' : undefined
                }}
              >
                <div className="mb-4 md:mb-6">
                  <h4 className="text-lg md:text-2xl font-bold mb-2">{addon.name}</h4>
                  <p className="text-zinc-400 text-xs md:text-sm mb-3 md:mb-4">{addon.description}</p>
                </div>

                <div className="flex-1 space-y-2 md:space-y-3">
                  {addon.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2">
                      <div className="mt-0.5 md:mt-1 bg-zinc-800 rounded-full p-0.5">
                        <Check className="w-3 h-3 text-zinc-400" />
                      </div>
                      <span className="text-xs md:text-sm text-zinc-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>


      </section>

      {/* Contact Form Modal */}
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default PricingComponent;
