import {
  Cloud,
  Code,
  Database,
  Globe,
  Network,
  Settings
} from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface ApiType {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  position: { x: number; y: number };
  isActive?: boolean;
}

const ApiIntegrationShowcase: React.FC = () => {
  const [activeApi, setActiveApi] = useState<string>('rest');
  const [activeInnerIndex, setActiveInnerIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const apiTypes: ApiType[] = [
    // Inner orbit (radius 130px)
    {
      id: 'rest',
      name: 'API {REST}',
      icon: <Cloud className="h-6 w-6" />,
      color: 'bg-blue-500',
      position: { x: 50, y: 17.5 } // Top of inner orbit
    },
    {
      id: 'http',
      name: 'API {HTTP}',
      icon: <Globe className="h-6 w-6" />,
      color: 'bg-blue-500',
      position: { x: 82.5, y: 17.5 } // Right side of inner orbit
    },
    {
      id: 'json',
      name: 'API {JSON}',
      icon: <Code className="h-6 w-6" />,
      color: 'bg-blue-500',
      position: { x: 50, y: 82.5 } // Bottom of inner orbit
    },
    {
      id: 'soap',
      name: 'SOAP',
      icon: <Cloud className="h-6 w-6" />,
      color: 'bg-blue-500',
      position: { x: 17.5, y: 17.5 } // Left side of inner orbit
    },
    // Outer orbit (radius 165px)
    {
      id: 'grpc',
      name: 'gRPC',
      icon: <Network className="h-6 w-6" />,
      color: 'bg-gray-500',
      position: { x: 50, y: 8.75 } // Top of outer orbit
    },
    {
      id: 'graphql',
      name: 'GraphQL',
      icon: <Database className="h-6 w-6" />,
      color: 'bg-pink-500',
      position: { x: 91.25, y: 8.75 }, // Right side of outer orbit
      isActive: true
    },
    {
      id: 'api',
      name: 'API',
      icon: <Settings className="h-6 w-6" />,
      color: 'bg-gray-500',
      position: { x: 50, y: 91.25 } // Bottom of outer orbit
    }
  ];

  // Auto-rotate through inner orbit circles
  useEffect(() => {
    if (isHovered) return; // Don't auto-rotate when hovered
    
    const interval = setInterval(() => {
      setActiveInnerIndex(prev => (prev + 1) % 5); // 5 circles in inner orbit
    }, 4000); // Change every 4 seconds (slower)

    return () => clearInterval(interval);
  }, [isHovered]);

  const currentApi = apiTypes.find(api => api.id === activeApi);

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-scale {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
          }
          30% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(0.8);
          }
          60% {
            opacity: 0.7;
            transform: translate(-50%, -50%) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
        
        .animate-fade-in-scale {
          animation: fade-in-scale 2.0s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
          }
          50% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Your One-Stop Hub for <br /> Smarter Test Automation.
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Automate across every technology stack with our comprehensive testing solution
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Left Side - API Visualization */}
           <div className="w-full lg:w-1/2 flex justify-center" style={{ marginLeft: '-20%', marginTop: '-10%' }}>
            <div className="relative w-[600px] h-[600px] flex-shrink-0">
               {/* Central Sun */}
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                 <div className="w-32 h-32 flex items-center justify-center shadow-2xl">
                   <img 
                     src="/assets/center_sun.svg" 
                     alt="Central Sun" 
                     className="w-full h-full object-contain animate-pulse"
                   />
                 </div>
               </div>

               {/* Circular Orbits */}
               <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 600">
                 <defs>
                   <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                     <circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.3)" />
                   </pattern>
                 </defs>
                 {/* Inner Orbit */}
                 <circle
                   cx="300"
                   cy="300"
                   r="150"
                   stroke="#5C5D5D"
                   strokeWidth="1"
                   fill="none"
                   strokeDasharray="8, 2"
                 />
                 {/* Outer Orbit - 130px gap from inner orbit */}
                 <circle
                   cx="300"
                   cy="300"
                   r="280"
                   stroke="#5C5D5D"
                   strokeWidth="1"
                   fill="none"
                   strokeDasharray="8, 2"
                 />
               </svg>

               {/* Logo Circles on Inner Orbit (Right Side) */}
               {(() => {
                 const logos = [
                   { icon: '/assets/circle_logo/Web.svg', name: 'Web' },
                   { icon: '/assets/circle_logo/Mobile.svg', name: 'Mobile' },
                   { icon: '/assets/circle_logo/api.svg', name: 'API' },
                   { icon: '/assets/circle_logo/Desktop.svg', name: 'Desktop' },
                   { icon: '/assets/circle_logo/Database.svg', name: 'Database' }
                 ];
                 
                 // Calculate positions for 5 circles on right side of inner orbit (150px radius)
                 const centerX = 300;
                 const centerY = 300;
                 const radius = 150; // Same radius as the orbit line
                 const startAngle = -Math.PI / 2; // Start from top
                 const endAngle = Math.PI / 2; // End at bottom
                 const angleStep = (endAngle - startAngle) / 4; // 4 gaps between 5 circles
                 
                 return logos.map((item, index) => {
                   const angle = startAngle + (index * angleStep);
                   const x = centerX + radius * Math.cos(angle);
                   const y = centerY + radius * Math.sin(angle);
                   const isActive = activeInnerIndex === index;
                   
                   return (
                     <div
                       key={index}
                       className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                       style={{
                         left: `${x}px`,
                         top: `${y}px`
                       }}
                       onClick={() => setActiveInnerIndex(index)}
                       onMouseEnter={() => setIsHovered(true)}
                       onMouseLeave={() => setIsHovered(false)}
                     >
                        <div className={`w-[50px] h-[50px] rounded-full flex items-center justify-center ${
                          isActive 
                            ? 'border-2 border-white scale-110' 
                            : 'border-2 border-gray-200'
                        }`}
                        style={{
                          backgroundColor: 'rgb(3, 3, 3)',
                          ...(isActive ? {
                            boxShadow: '0 0 20px rgba(255, 255, 0, 0.8), 0 0 40px rgba(255, 255, 0, 0.4), 0 0 60px rgba(255, 255, 0, 0.2)'
                          } : {})
                        }}>
                         <img 
                           src={item.icon} 
                           alt={item.name}
                           className="w-8 h-8 object-contain"
                         />
                       </div>
                       {isActive && (
                         <div className="absolute -inset-2 bg-white rounded-full opacity-30 animate-pulse"></div>
                       )}
                     </div>
                   );
                 });
               })()}

               {/* Dynamic Technology Icons on Outer Orbit */}
               {(() => {
                 // Define technology icons for each automation type
                 const technologyIcons = {
                   0: [ // Web Automation
                     { icon: '/assets/circle_logo/web/chrome.svg', name: 'Chrome' },
                     { icon: '/assets/circle_logo/web/firefox.svg', name: 'Firefox' },
                     { icon: '/assets/circle_logo/web/safari.svg', name: 'Safari' },
                     { icon: '/assets/circle_logo/web/edge.svg', name: 'Edge' },
                     { icon: '/assets/circle_logo/web/internet-explore.svg', name: 'Internet Explorer' }
                   ],
                   1: [ // Mobile Automation
                     { icon: '/assets/circle_logo/mobile/Android_circle.svg', name: 'Android' },
                     { icon: '/assets/circle_logo/mobile/iOS.svg', name: 'iOS' }
                   ],
                   2: [ // API Automation
                     { icon: '/assets/circle_logo/api/API_rest.svg', name: 'REST' },
                     { icon: '/assets/circle_logo/api/SOAP.png', name: 'SOAP' }
                   ],
                   3: [ // Desktop Automation
                     { icon: '/assets/circle_logo/desktop/java-icon.svg', name: 'Java' },
                     { icon: '/assets/circle_logo/desktop/dotnet.svg', name: '.NET' },
                     { icon: '/assets/circle_logo/desktop/mainframe.svg', name: 'Mainframe' },
                     { icon: '/assets/circle_logo/desktop/flex.svg', name: 'Flex' },
                     { icon: '/assets/circle_logo/desktop/Silverlight.png', name: 'Silverlight' },
                     { icon: '/assets/circle_logo/desktop/java-applet.svg', name: 'Java Applet' }
                   ],
                   4: [ // Database Automation
                     { icon: '/assets/circle_logo/database/mysql-official.svg', name: 'MySQL' },
                     { icon: '/assets/circle_logo/database/oracle.svg', name: 'Oracle' },
                     { icon: '/assets/circle_logo/database/Postgresql_elephant.svg', name: 'PostgreSQL' },
                     { icon: '/assets/circle_logo/database/mongodb.svg', name: 'MongoDB' },
                     { icon: '/assets/circle_logo/database/SQL Server.svg', name: 'SQL Server' },
                     { icon: '/assets/circle_logo/database/Siebel.svg', name: 'Siebel' },
                     { icon: '/assets/circle_logo/database/Monitor.svg', name: 'Monitor' }
                   ]
                 };

                 // Get current technology icons based on active inner orbit
                 const outerLogos = technologyIcons[activeInnerIndex] || [];
                 
                 // Calculate positions for circles on outer orbit (280px radius)
                 const centerX = 300;
                 const centerY = 300;
                 const radius = 280; // Same radius as the outer orbit line
                 
                 let startAngle, endAngle, angleStep;
                 
                 if (outerLogos.length === 2) {
                   // For 2 icons: position them on the right side center (around 0 degrees)
                   startAngle = -Math.PI / 6; // -30 degrees
                   endAngle = Math.PI / 6;    // +30 degrees
                   angleStep = (endAngle - startAngle) / (outerLogos.length - 1);
                 } else {
                   // For other numbers: use full right side arc
                   startAngle = -Math.PI / 2; // Start from top
                   endAngle = Math.PI / 2;    // End at bottom
                   angleStep = outerLogos.length > 1 ? (endAngle - startAngle) / (outerLogos.length - 1) : 0;
                 }
                 
                 return outerLogos.map((item, index) => {
                   const angle = startAngle + (index * angleStep);
                   const x = centerX + radius * Math.cos(angle);
                   const y = centerY + radius * Math.sin(angle);
                   
                   return (
                     <div
                       key={`outer-${activeInnerIndex}-${index}`}
                       className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out animate-fade-in"
                       style={{
                         left: `${x}px`,
                         top: `${y}px`
                       }}
                     >
                       <div 
                         className="w-[50px] h-[50px] rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200 transition-all duration-500 hover:scale-110 hover:shadow-xl"
                         style={{
                           backgroundColor: 'rgb(3, 3, 3)'
                         }}
                       >
                         <img 
                           src={item.icon} 
                           alt={item.name}
                           className="w-8 h-8 object-contain transition-transform duration-300 hover:scale-110"
                         />
                       </div>
                     </div>
                   );
                 });
               })()}

            </div>
          </div>

          {/* Right Side - Dynamic Content */}
          <div className="w-full lg:w-1/2 flex-grow" style={{ paddingLeft: '30px' }}>
            <div className="p-8">
              {/* Section Heading */}
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {activeInnerIndex === 0 && "Web Automation"}
                  {activeInnerIndex === 1 && "Mobile Automation"}
                  {activeInnerIndex === 2 && "API Automation"}
                  {activeInnerIndex === 3 && "Desktop Automation"}
                  {activeInnerIndex === 4 && "Database Automation"}
                </h3>
                <p className="text-white leading-relaxed mb-6">
                  {activeInnerIndex === 0 && "Supports automation across all major browsers including Chrome, Firefox, Safari, Edge, and Internet Explorer."}
                  {activeInnerIndex === 1 && "Supports native and hybrid app automation on both Android and iOS platforms."}
                  {activeInnerIndex === 2 && "Supports REST, SOAP, and GraphQL API testing with automated request and response validation."}
                  {activeInnerIndex === 3 && "Supports automation for desktop applications built on .NET, Java, Win32, and legacy platforms."}
                  {activeInnerIndex === 4 && "Supports automation for both SQL and NoSQL databases for validating backend data integrity."}
                </p>
                
                <div className="mb-4"></div>
              </div>

              <div className="space-y-3">
                {activeInnerIndex === 0 && (
                  <>
                    <div className="flex items-center gap-3">
                      <div className="text-green-500 text-lg">✓</div>
                      <span className="text-white text-sm">Enables cross-browser testing to ensure consistent behavior and UI rendering across platforms and devices</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-green-500 text-lg">✓</div>
                      <span className="text-white text-sm">Supports both desktop and responsive/mobile web testing with real-time device emulation and resolution adjustments</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-green-500 text-lg">✓</div>
                      <span className="text-white text-sm">Provides robust object identification techniques with XPath, CSS Selectors, ID, and image recognition for dynamic web elements</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-green-500 text-lg">✓</div>
                      <span className="text-white text-sm">Allows parallel cloud execution on multiple browsers simultaneously, drastically reducing test cycles and improving release velocity</span>
                    </div>
                  </>
                )}
                {activeInnerIndex === 1 && (
                  <>
                    <div className="flex items-center gap-3">
                      <div className="text-green-500 text-lg">✓</div>
                      <span className="text-white text-sm">Compatible with real devices, emulators, and simulators to cover a broad user base</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-green-500 text-lg">✓</div>
                      <span className="text-white text-sm">Supports automation on iOS devices using Windows and Mac OS for enhanced flexibility</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-green-500 text-lg">✓</div>
                      <span className="text-white text-sm">Enables parallel test execution on multiple mobile devices to speed up testing cycles</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-green-500 text-lg">✓</div>
                      <span className="text-white text-sm">Captures detailed device-level logs and screenshots for effective root cause analysis</span>
                    </div>
                  </>
                )}
                {activeInnerIndex === 2 && (
                  <>
                    <div className="flex items-center gap-3">
                      <div className="text-green-500 text-lg">✓</div>
                      <span className="text-white text-sm">Enables integration with CI/CD pipelines for automated backend workflow validation and early defect detection</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-green-500 text-lg">✓</div>
                      <span className="text-white text-sm">Supports performance testing and security checks for API endpoints ensuring robustness before release</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-green-500 text-lg">✓</div>
                      <span className="text-white text-sm">Allows data-driven API tests with dynamic parameterization for comprehensive coverage</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-green-500 text-lg">✓</div>
                      <span className="text-white text-sm">Provides detailed logs and reports to help debug API failures efficiently</span>
                    </div>
                  </>
                )}
                {activeInnerIndex === 3 && (
                  <>
                    <div className="flex items-center gap-3">
                      <div className="text-green-500 text-lg">✓</div>
                      <span className="text-white text-sm">Enables interaction with native UI components including menus, buttons, and complex controls</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-green-500 text-lg">✓</div>
                      <span className="text-white text-sm">Supports object recognition through property-based and image-based identification for dynamic desktop UIs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-green-500 text-lg">✓</div>
                      <span className="text-white text-sm">Facilitates scriptless automation creation allowing QA engineers to build and maintain tests without coding</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-green-500 text-lg">✓</div>
                      <span className="text-white text-sm">Provides support for cross-platform desktop testing including Windows and macOS environments</span>
                    </div>
                  </>
                )}
                {activeInnerIndex === 4 && (
                  <>
                    <div className="flex items-center gap-3">
                      <div className="text-green-500 text-lg">✓</div>
                      <span className="text-white text-sm">Allows execution of complex queries, data validation, and transaction tests as part of automation suites</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-green-500 text-lg">✓</div>
                      <span className="text-white text-sm">Integrates database checks with UI and API tests for end-to-end validation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-green-500 text-lg">✓</div>
                      <span className="text-white text-sm">Supports cross-platform database testing (Oracle, MySQL, MongoDB, SQL Server, etc.)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-green-500 text-lg">✓</div>
                      <span className="text-white text-sm">Provides detailed reports on data states before and after transaction operations for audit and compliance</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiIntegrationShowcase;
