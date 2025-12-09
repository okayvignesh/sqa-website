import {
  Code,
  Database,
  Globe,
  Monitor,
  Server,
  Smartphone
} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: {
    subtitle: string;
    mainDescription: string;
    features: string[];
  };
}

const DataAnalyticsShowcase: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const features: Feature[] = [
    {
      id: 'web-automation',
      title: 'Web Automation',
      description: 'Deliver Flawless Experiences Across Every Browser. Ensure your web applications perform perfectly for every user, on every device.',
      icon: <Globe className="h-6 w-6 text-white" />,
      details: {
        subtitle: 'Deliver Flawless Experiences Across Every Browser',
        mainDescription: 'SimplifyQA empowers teams to run scalable, scriptless tests across the modern web.',
        features: [
          'Cross-Browser Compatibility: Automate tests seamlessly on Chrome, Firefox, Safari, Edge, and IE to guarantee consistent UI rendering.',
          'Responsive & Mobile Web: Validate responsive designs with real-time device emulation and dynamic resolution adjustments.',
          'Smart Object Recognition: Utilize robust identification (XPath, CSS, Image Recognition) to stabilize tests against dynamic web elements.',
          'Cloud Scaling: Execute parallel tests on the cloud to slash regression cycles and accelerate release velocity.'
        ]
      }
    },
    {
      id: 'api-automation',
      title: 'API Automation',
      description: 'Validate Backend Logic with Precision. Shift left and secure your application\'s core.',
      icon: <Code className="h-6 w-6 text-white" />,
      details: {
        subtitle: 'Validate Backend Logic with Precision',
        mainDescription: 'Our API testing suite ensures your backend services are robust, secure, and ready for integration.',
        features: [
          'Multi-Protocol Support: Comprehensive automation for REST, SOAP, and GraphQL APIs with automated response validation.',
          'CI/CD Integration: Embed backend workflow validation directly into your pipeline for early defect detection.',
          'Performance & Security: Run automated health checks and security scans on endpoints before they hit production.',
          'Data-Driven Coverage: Dynamically parameterize requests to test edge cases and ensure total API reliability.'
        ]
      }
    },
    {
      id: 'mobile-automation',
      title: 'Mobile Automation',
      description: 'Native & Hybrid App Testing at Scale. Conquer fragmentation with a unified mobile testing strategy.',
      icon: <Smartphone className="h-6 w-6 text-white" />,
      details: {
        subtitle: 'Native & Hybrid App Testing at Scale',
        mainDescription: 'Automate complex gestures and user flows across the devices your customers actually use.',
        features: [
          'Android & iOS Support: Automate native and hybrid apps on real devices, emulators, and simulators.',
          'Cross-OS Flexibility: Uniquely supports iOS automation execution on both Windows and Mac environments.',
          'Parallel Execution: Run tests simultaneously across multiple devices to drastically reduce time-to-market.',
          'Deep Diagnostics: Capture device-level logs, screenshots, and videos for rapid root cause analysis.'
        ]
      }
    },
    {
      id: 'database-automation',
      title: 'Database Automation',
      description: 'Ensure Data Integrity & Reliability. Data is the lifeblood of your application.',
      icon: <Database className="h-6 w-6 text-white" />,
      details: {
        subtitle: 'Ensure Data Integrity & Reliability',
        mainDescription: 'Automate complex validations to ensure your frontend actions match your backend reality.',
        features: [
          'SQL & NoSQL Support: Native connectivity for Oracle, MySQL, SQL Server, MongoDB, and more.',
          'End-to-End Validation: Seamlessly chain database checks with UI and API tests for full-transaction verification.',
          'Complex Query Execution: Automate data integrity checks, stored procedure testing, and transaction rollbacks.',
          'Audit-Ready Reporting: Generate detailed logs comparing data states before and after transactions for compliance.'
        ]
      }
    },
    {
      id: 'desktop-automation',
      title: 'Desktop Automation',
      description: 'Modernize Testing for Legacy & Desktop Apps. Don\'t leave your core business applications behind.',
      icon: <Monitor className="h-6 w-6 text-white" />,
      details: {
        subtitle: 'Modernize Testing for Legacy & Desktop Apps',
        mainDescription: 'Bring the speed of modern automation to your critical desktop software.',
        features: [
          'Broad Tech Stack: Support for .NET, Java, Win32, WPF, and legacy Windows applications.',
          'Native UI Interaction: Precisely control menus, ribbons, pop-ups, and complex desktop controls.',
          'Smart Identification: Hybrid property-based and image-based recognition ensures stability even on older interfaces.',
          'Cross-Platform Ready: Build stable automation for both Windows and macOS desktop environments without coding.'
        ]
      }
    },
    {
      id: 'mainframe-automation',
      title: 'Mainframe Automation',
      description: 'Unlock the Value of Legacy Systems. Bridge the gap between foundational mainframes and digital agility.',
      icon: <Server className="h-6 w-6 text-white" />,
      details: {
        subtitle: 'Unlock the Value of Legacy Systems',
        mainDescription: 'Automate green-screen workflows to modernize your critical business logic.',
        features: [
          'Terminal Emulation: Seamless integration with 3270 and 5250 terminal emulators (IBM i/AS400, z/OS).',
          'Green Screen to GUI: Validate data flow between legacy mainframe screens and modern web/mobile interfaces in a single test.',
          'High-Speed Entry: Automate complex keystrokes and data entry tasks faster and more accurately than human operators.',
          'Legacy Modernization: Ensure stability while refactoring or migrating mainframe data to modern cloud architectures.'
        ]
      }
    }
  ];

  const currentFeature = features[activeFeature];

  // Auto-play functionality
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % features.length);
      }, 3000); // Change every 3 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, features.length]);

  return (
    <section className="py-16 pb-32 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16" style={{ marginLeft: '10%' }}>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            One Platform. All Architectures.
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto mb-4">
            Unified Vision. Absolute Control.
          </p>
          <p className="text-base text-gray-400 leading-relaxed max-w-4xl mx-auto">
            Stop toggling tools. Unify your entire testing landscape—from legacy mainframes to cloud-native microservices—under one intelligent, scriptless command center.
          </p>
        </div>
        <div className="border border-gray-600 rounded-xl bg-gray-800">
          <div className="flex flex-col lg:flex-row items-stretch">
            {/* Left Section - Feature Showcase (55%) */}
            <div 
              className="w-full lg:w-[55%]" 
              style={{ padding: '0px 50px', background: 'rgb(24, 24, 27)', borderRadius: '12px 0 0 12px' }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="flex flex-col md:flex-row gap-5 h-full justify-center">
                {/* Column 1 - First 3 cards */}
                <div style={{ gap: '10px', position: 'relative', top: '-70px' }}>
                  {features.slice(0, 3).map((feature, index) => (
                    <div
                      key={feature.id}
                      onClick={() => setActiveFeature(index)}
                      className="flex flex-col cursor-pointer transition-all duration-300 hover:scale-105"
                      style={{
                        border: activeFeature === index ? '2px solid #3B82F6' : '1px solid rgba(75, 75, 75, 0.36)',
                        background: activeFeature === index ? 'rgb(30, 30, 35)' : 'rgb(24, 24, 27)',
                        padding: '10px',
                        borderRadius: '5px',
                        boxShadow: activeFeature === index ? '0 4px 12px rgba(59, 130, 246, 0.3)' : 'var(--shd, 0 1px 4px rgba(0, 0, 0, .6))',
                        width: '240px',
                        height: '300px',
                        marginTop: '20px'
                      }}
                    >
                        {/* Feature Icon */}
                        <div className="mb-4">
                          <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                            {feature.icon}
                          </div>
                        </div>

                      {/* Content moved to bottom */}
                      <div className="mt-auto">
                        {/* Feature Title */}
                        <h3 className="text-lg font-bold mb-3" style={{ color: 'white' }}>
                          {feature.title}
                        </h3>

                        {/* Feature Description */}
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                          {feature.description}
                        </p>
                        {/* Bottom Line */}
                        <div className="pt-4 border-t border-gray-600"></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Column 2 - Last 3 cards */}
                <div style={{ gap: '10px', position: 'relative', bottom: '-100px' }}>
                  {features.slice(3, 6).map((feature, index) => (
                    <div
                      key={feature.id}
                      onClick={() => setActiveFeature(index + 3)}
                      className="flex flex-col cursor-pointer transition-all duration-300 hover:scale-105"
                      style={{
                        border: activeFeature === (index + 3) ? '2px solid #3B82F6' : '1px solid rgba(75, 75, 75, 0.36)',
                        background: activeFeature === (index + 3) ? 'rgb(30, 30, 35)' : 'rgb(24, 24, 27)',
                        padding: '10px',
                        borderRadius: '5px',
                        boxShadow: activeFeature === (index + 3) ? '0 4px 12px rgba(59, 130, 246, 0.3)' : 'none',
                        width: '240px',
                        height: '300px',
                        marginTop: '20px'
                      }}
                    >
                        {/* Feature Icon */}
                        <div className="mb-4">
                          <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                            {feature.icon}
                          </div>
                        </div>

                      {/* Content moved to bottom */}
                      <div className="mt-auto">
                        {/* Feature Title */}
                        <h3 className="text-lg font-bold mb-3" style={{ color: 'white' }}>
                          {feature.title}
                        </h3>

                        {/* Feature Description */}
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                          {feature.description}
                        </p>
                        {/* Bottom Line */}
                        <div className="pt-4 border-t border-gray-600"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Section - Dynamic Content (45%) */}
            <div className="w-full lg:w-[45%] relative flex flex-col border-l border-gray-600 overflow-hidden" style={{
              backgroundImage: 'url(/assets/bg_main.avif)',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              borderRadius: '0 12px 12px 0'
            }}>
              {/* Background Overlay for readability */}
              <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>
                     <div className="relative z-10 px-[60px] py-8 flex flex-col justify-center h-full">
                <div className="mb-6">
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                    {currentFeature.title}
                  </h2>
                    <p className="text-xl text-blue-300 font-semibold mb-4">
                      {currentFeature.details.subtitle}
                    </p>
                </div>
                
                <div className="space-y-3">
                  {currentFeature.details.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAnalyticsShowcase;
