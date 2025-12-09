import React, { useEffect, useState } from 'react';

type WorkflowSection = {
  id: string;
  title: string;
  angle: number;
  icon: string;
  content: {
    heading: string;
    description: string;
    features: string[];
  };
};

const CircularWorkflow: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);

  const handleSectionClick = (index: number) => {
    setActiveSection(index);
  };

  // Auto-rotate through sections every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection(prev => (prev + 1) % 6); // We have 6 sections
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const workflowSections: WorkflowSection[] = [
  {
    id: 'web',
    title: 'Web',
    angle: 0,
    icon: 'web',
    content: {
      heading: 'Web Automation',
      description: 'Supports automation across all major browsers including Chrome, Firefox, Safari, Edge, and Internet Explorer.',
      features: [
        'Enables cross-browser testing to ensure consistent behavior and UI rendering across platforms and devices',
        'Supports both desktop and responsive/mobile web testing with real-time device emulation and resolution adjustments',
        'Provides robust object identification techniques with XPath, CSS Selectors, ID, and image recognition for dynamic web elements',
        'Allows parallel cloud execution on multiple browsers simultaneously, drastically reducing test cycles and improving release velocity'
      ]
    }
  },
  {
    id: 'mobile',
    title: 'Mobile',
    angle: 60,
    icon: 'mobile',
    content: {
      heading: 'Mobile Automation',
      description: 'Supports native and hybrid app automation on both Android and iOS platforms.',
      features: [
        'Compatible with real devices, emulators, and simulators to cover a broad user base',
        'Supports automation on iOS devices using Windows and Mac OS for enhanced flexibility',
        'Enables parallel test execution on multiple mobile devices to speed up testing cycles',
        'Captures detailed device-level logs and screenshots for effective root cause analysis'
      ]
    }
  },
  {
    id: 'api',
    title: 'API',
    angle: 120,
    icon: 'api',
    content: {
      heading: 'API Automation',
      description: 'Supports REST, SOAP, and GraphQL API testing with automated request and response validation.',
      features: [
        'Enables integration with CI/CD pipelines for automated backend workflow validation and early defect detection',
        'Supports performance testing and security checks for API endpoints ensuring robustness before release',
        'Allows data-driven API tests with dynamic parameterization for comprehensive coverage',
        'Provides detailed logs and reports to help debug API failures efficiently'
      ]
    }
  },
  {
    id: 'sap',
    title: 'SAP',
    angle: 180,
    icon: 'enterprise',
    content: {
      heading: 'Enterprise Automation',
      description: 'Supports automation and testing across all major enterprise platforms and technologies including SAP, Oracle, Salesforce, and legacy mainframe systems.',
      features: [
        'Provides scalable automation for complex enterprise business workflows and multi-system integrations',
        'Supports secure, compliant testing environments aligned with enterprise security and governance policies',
        'Integrates seamlessly with enterprise CI/CD pipelines for automated build, test, and deployment workflows',
        'Offers real-time reporting and analytics for enterprise-grade visibility over application quality and performance'
      ]
    }
  },
  {
    id: 'desktop',
    title: 'Desktop',
    angle: 240,
    icon: 'desktop',
    content: {
      heading: 'Desktop Automation',
      description: 'Supports automation for desktop applications built on .NET, Java, Win32, and legacy platforms.',
      features: [
        'Enables interaction with native UI components including menus, buttons, and complex controls',
        'Supports object recognition through property-based and image-based identification for dynamic desktop UIs',
        'Facilitates scriptless automation creation allowing QA engineers to build and maintain tests without coding',
        'Provides support for cross-platform desktop testing including Windows and macOS environments'
      ]
    }
  },
  {
    id: 'dbtest',
    title: 'Database',
    angle: 300,
    icon: 'database',
    content: {
      heading: 'Database Automation',
      description: 'Supports automation for both SQL and NoSQL databases for validating backend data integrity.',
      features: [
        'Allows execution of complex queries, data validation, and transaction tests as part of automation suites',
        'Integrates database checks with UI and API tests for end-to-end validation',
        'Supports cross-platform database testing (Oracle, MySQL, MongoDB, SQL Server, etc.)',
        'Provides detailed reports on data states before and after transaction operations for audit and compliance'
      ]
    }
  }
];

  const radius = 140;
  const outerRadius = 220;
  const centerX = 265;
  const centerY = 265;

  const renderIcon = (iconType: string, x: number, y: number, isActive: boolean, isCenter: boolean = false) => {
    const color = "#ffffff";
    const size = isCenter ? 40 : 20;
    const halfSize = size / 2;
    
    switch (iconType) {
      case 'web':
        return (
          <svg x={x - halfSize} y={y - halfSize} width={size} height={size} viewBox="0 0 24 24" fill={color}>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
        );
      case 'mobile':
        return (
          <svg x={x - halfSize} y={y - halfSize} width={size} height={size} viewBox="0 0 24 24" fill={color}>
            <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H7V6h10v10z"/>
          </svg>
        );
      case 'api':
        return (
          <svg x={x - halfSize} y={y - halfSize} width={size} height={size} viewBox="0 0 24 24" fill={color}>
            <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
          </svg>
        );
      case 'enterprise':
        return (
          <svg x={x - halfSize} y={y - halfSize} width={size} height={size} viewBox="0 0 24 24" fill={color}>
            <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
          </svg>
        );
      case 'desktop':
        return (
          <svg x={x - halfSize} y={y - halfSize} width={size} height={size} viewBox="0 0 24 24" fill={color}>
            <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z"/>
          </svg>
        );
      case 'database':
        return (
          <svg x={x - halfSize} y={y - halfSize} width={size} height={size} viewBox="0 0 24 24" fill={color}>
            <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4zm0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="heading font-bold text-white">
            Complete Test Automation Platform
          </h2>
          <p className="subheading text-gray-300 max-w-3xl mx-auto">
            Automate across every technology stack with our comprehensive testing solution
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Circular Diagram */}
          <div className="relative flex-shrink-0 w-full max-w-lg">
            <svg width="530" height="530" viewBox="0 0 530 530" className="w-full h-auto mx-auto">
              <defs>
                <filter id="iconShadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#ffffff" flood-opacity="0.4"/>
                  <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#ffffff" flood-opacity="0.3"/>
                </filter>
                
                <filter id="hoverShadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#3b82f6" flood-opacity="0.6"/>
                  <feDropShadow dx="0" dy="0" stdDeviation="12" flood-color="#3b82f6" flood-opacity="0.4"/>
                </filter>
                
                {/* Conic-like gradient simulation using multiple radial gradients */}
                <radialGradient id="conicGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="16.67%" stopColor="#06b6d4" />
                  <stop offset="33.34%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#6366f1" />
                  <stop offset="66.67%" stopColor="#8b5cf6" />
                  <stop offset="83.34%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#10b981" />
                </radialGradient>
                
                {/* Create smooth gradient paths using stroke-dasharray to simulate conic effect */}
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%" gradientTransform="rotate(0)">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%" gradientTransform="rotate(60)">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
                
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%" gradientTransform="rotate(120)">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
                
                <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%" gradientTransform="rotate(180)">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
                
                <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%" gradientTransform="rotate(240)">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
                
                <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%" gradientTransform="rotate(300)">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
              
              {/* Single circle with conic-like gradient effect using overlapping transparent arcs */}
              <g>
                {/* Base circle */}
                <circle
                  cx={centerX}
                  cy={centerY}
                  r={radius}
                  fill="none"
                  stroke="url(#conicGradient)"
                  strokeWidth="6"
                  opacity="0.3"
                />
                
                {/* Overlapping gradient arcs for smooth transitions */}
                <path
                  d={`M ${centerX} ${centerY - radius} A ${radius} ${radius} 0 0 1 ${centerX + radius * Math.sin(Math.PI/3)} ${centerY - radius * Math.cos(Math.PI/3)}`}
                  fill="none"
                  stroke="url(#gradient1)"
                  strokeWidth="6"
                  opacity="0.8"
                />
                
                <path
                  d={`M ${centerX + radius * Math.sin(Math.PI/3)} ${centerY - radius * Math.cos(Math.PI/3)} A ${radius} ${radius} 0 0 1 ${centerX + radius * Math.sin(Math.PI/3)} ${centerY + radius * Math.cos(Math.PI/3)}`}
                  fill="none"
                  stroke="url(#gradient2)"
                  strokeWidth="6"
                  opacity="0.8"
                />
                
                <path
                  d={`M ${centerX + radius * Math.sin(Math.PI/3)} ${centerY + radius * Math.cos(Math.PI/3)} A ${radius} ${radius} 0 0 1 ${centerX} ${centerY + radius}`}
                  fill="none"
                  stroke="url(#gradient3)"
                  strokeWidth="6"
                  opacity="0.8"
                />
                
                <path
                  d={`M ${centerX} ${centerY + radius} A ${radius} ${radius} 0 0 1 ${centerX - radius * Math.sin(Math.PI/3)} ${centerY + radius * Math.cos(Math.PI/3)}`}
                  fill="none"
                  stroke="url(#gradient4)"
                  strokeWidth="6"
                  opacity="0.8"
                />
                
                <path
                  d={`M ${centerX - radius * Math.sin(Math.PI/3)} ${centerY + radius * Math.cos(Math.PI/3)} A ${radius} ${radius} 0 0 1 ${centerX - radius * Math.sin(Math.PI/3)} ${centerY - radius * Math.cos(Math.PI/3)}`}
                  fill="none"
                  stroke="url(#gradient5)"
                  strokeWidth="6"
                  opacity="0.8"
                />
                
                <path
                  d={`M ${centerX - radius * Math.sin(Math.PI/3)} ${centerY - radius * Math.cos(Math.PI/3)} A ${radius} ${radius} 0 0 1 ${centerX} ${centerY - radius}`}
                  fill="none"
                  stroke="url(#gradient6)"
                  strokeWidth="6"
                  opacity="0.8"
                />
              </g>

              {/* Outer circle for arrow movement */}
              <circle
                cx={centerX}
                cy={centerY}
                r={outerRadius}
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              />

              {/* SimplifyQA Logo - positioned at top of center */}
              <image
                href="/simplify_logo.svg"
                x={centerX - 50}
                y={centerY - 80}
                width="100"
                height="100"
              />
              
              {/* Active section icon in center - positioned in the middle */}
              <g className="transition-all duration-500 ease-in-out">
                {renderIcon(workflowSections[activeSection]?.icon, centerX, centerY + 20, true, true)}
              </g>

              {/* Icon Circles - positioned on the outer circle line */}
              {workflowSections.map((section, index) => {
                const x = centerX + outerRadius * Math.cos((section.angle - 90) * Math.PI / 180);
                const y = centerY + outerRadius * Math.sin((section.angle - 90) * Math.PI / 180);
                const isActive = activeSection === index;
                
                return (
                  <g key={section.id} className="cursor-pointer" onClick={() => handleSectionClick(index)}>
                    {/* Main icon circle background with box shadow when active */}
                    <circle
                      cx={x}
                      cy={y}
                      r="25"
                      fill="#08090a"
                      stroke="#6b7280"
                      strokeWidth="2"
                      className="transition-all duration-300"
                      filter={isActive ? "url(#iconShadow)" : ""}
                    />
                    
                    {/* Hover shadow circle - only visible on hover */}
                    <circle
                      cx={x}
                      cy={y}
                      r="25"
                      fill="transparent"
                      stroke="transparent"
                      strokeWidth="2"
                      className="transition-all duration-300 opacity-0 hover:opacity-100"
                      filter="url(#hoverShadow)"
                    />
                    
                    {/* Icon */}
                    {renderIcon(section.icon, x, y, isActive)}
                    
                    {/* Label text always visible */}
                    <text
                      x={x}
                      y={y - 35}
                      textAnchor="middle"
                      dominantBaseline="auto"
                      fill={isActive ? "#10b981" : "#9ca3af"}
                      fontSize="12"
                      fontWeight="bold"
                      className="transition-all duration-300 pointer-events-none"
                    >
                      {section.title}
                    </text>
                  </g>
                );
              })}

            </svg>
          </div>

          {/* Content Panel */}
          <div className="lg:w-1/2 rounded-xl p-8">
            <div className="transition-all duration-500 ease-in-out">
              <h3 className="text-2xl font-bold text-white mb-4">
                {workflowSections[activeSection]?.content.heading}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {workflowSections[activeSection]?.content.description}
              </p>
              
              <div className="space-y-3">
                {workflowSections[activeSection]?.content.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="text-green-500">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CircularWorkflow;
