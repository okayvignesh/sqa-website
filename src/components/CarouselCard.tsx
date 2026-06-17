import { BarChart3, Cloud, GitBranch, Globe, Shield, Zap } from 'lucide-react';
import React, { useState } from 'react';

const cards = [
  {
    title: 'AI-Powered Test Generation',
    header: 'Intelligent automation at scale',
    description: `Leverage advanced machine learning algorithms to automatically generate comprehensive test cases that understand your application structure, user flows, and business logic.<ul style='margin-top:16px;text-align:left;'><li><b>Smart Test Creation:</b> AI analyzes your app and generates relevant test scenarios automatically</li><li><b>Intelligent Assertions:</b> Automatically generates meaningful assertions based on UI elements and data</li><li><b>Self-Healing Tests:</b> Tests automatically adapt to UI changes, reducing maintenance by 70%</li><li><b>Pattern Recognition:</b> Learns from existing tests to suggest improvements and optimizations</li></ul>`,
    icon: <Zap className="w-8 h-8 text-white" />,
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    title: 'Cross-Platform Testing',
    header: 'Test everywhere, deploy with confidence',
    description: `Execute tests across web browsers, mobile devices, APIs, and desktop applications from a single platform. Ensure consistent user experience across all touchpoints.<ul style='margin-top:16px;text-align:left;'><li><b>Web Testing:</b> Chrome, Firefox, Safari, Edge - all browsers covered with headless support</li><li><b>Mobile Testing:</b> Real device testing on iOS and Android with cloud device farm</li><li><b>API Testing:</b> REST, SOAP, GraphQL - comprehensive API validation and performance testing</li><li><b>Desktop Apps:</b> Windows, macOS, Linux desktop application testing support</li></ul>`,
    icon: <Globe className="w-8 h-8 text-white" />,
    gradient: 'from-green-600 to-emerald-600'
  },
  {
    title: 'Enterprise Security',
    header: 'Bank-grade security and compliance',
    description: `Meet the highest security standards with SOC 2 Type II compliance, end-to-end encryption, and comprehensive audit logging for enterprise peace of mind.<ul style='margin-top:16px;text-align:left;'><li><b>SOC 2 Compliance:</b> Type II certified with regular third-party security audits</li><li><b>Data Encryption:</b> End-to-end encryption for data in transit and at rest</li><li><b>Access Control:</b> Role-based permissions with SSO and multi-factor authentication</li><li><b>Audit Logging:</b> Comprehensive activity logs for compliance and security monitoring</li></ul>`,
    icon: <Shield className="w-8 h-8 text-white" />,
    gradient: 'from-purple-600 to-indigo-600'
  },
  {
    title: 'Advanced Analytics',
    header: 'Data-driven testing insights',
    description: `Transform testing data into actionable insights with real-time dashboards, predictive analytics, and comprehensive reporting that drives continuous improvement.<ul style='margin-top:16px;text-align:left;'><li><b>Real-time Dashboards:</b> Live test execution monitoring with customizable views</li><li><b>Predictive Analytics:</b> AI-powered insights to predict and prevent quality issues</li><li><b>Custom Reports:</b> Executive summaries and detailed technical reports</li><li><b>Trend Analysis:</b> Historical data analysis to identify patterns and improvements</li></ul>`,
    icon: <BarChart3 className="w-8 h-8 text-white" />,
    gradient: 'from-orange-600 to-red-600'
  },
  {
    title: 'CI/CD Integration',
    header: 'Seamless DevOps workflow',
    description: `Integrate seamlessly with your existing DevOps pipeline. Trigger tests automatically, get instant feedback, and maintain quality gates throughout your development process.<ul style='margin-top:16px;text-align:left;'><li><b>Pipeline Integration:</b> Jenkins, GitHub Actions, GitLab CI, Azure DevOps support</li><li><b>Quality Gates:</b> Automated quality checks that prevent bad code from deploying</li><li><b>Parallel Execution:</b> Run thousands of tests simultaneously for faster feedback</li><li><b>Smart Notifications:</b> Contextual alerts via Slack, Teams, email, and webhooks</li></ul>`,
    icon: <GitBranch className="w-8 h-8 text-white" />,
    gradient: 'from-cyan-600 to-blue-600'
  },
  {
    title: 'Cloud Execution',
    header: 'Infinite scale, zero infrastructure',
    description: `Execute tests at massive scale with our cloud infrastructure. No setup required, automatic scaling, and global availability for consistent performance worldwide.<ul style='margin-top:16px;text-align:left;'><li><b>Auto Scaling:</b> Automatically scale resources based on test execution demand</li><li><b>Global Infrastructure:</b> Test from multiple geographic locations for performance validation</li><li><b>Zero Maintenance:</b> No infrastructure to manage - focus on testing, not servers</li><li><b>Cost Optimization:</b> Pay only for what you use with intelligent resource allocation</li></ul>`,
    icon: <Cloud className="w-8 h-8 text-white" />,
    gradient: 'from-pink-600 to-rose-600'
  },
  {
    title: 'AI-Powered Test Generation',
    header: 'Intelligent automation at scale',
    description: `Leverage advanced machine learning algorithms to automatically generate comprehensive test cases that understand your application structure, user flows, and business logic.<ul style='margin-top:16px;text-align:left;'><li><b>Smart Test Creation:</b> AI analyzes your app and generates relevant test scenarios automatically</li><li><b>Intelligent Assertions:</b> Automatically generates meaningful assertions based on UI elements and data</li><li><b>Self-Healing Tests:</b> Tests automatically adapt to UI changes, reducing maintenance by 70%</li><li><b>Pattern Recognition:</b> Learns from existing tests to suggest improvements and optimizations</li></ul>`,
    icon: <Zap className="w-8 h-8 text-white" />,
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    title: 'Cross-Platform Testing',
    header: 'Test everywhere, deploy with confidence',
    description: `Execute tests across web browsers, mobile devices, APIs, and desktop applications from a single platform. Ensure consistent user experience across all touchpoints.<ul style='margin-top:16px;text-align:left;'><li><b>Web Testing:</b> Chrome, Firefox, Safari, Edge - all browsers covered with headless support</li><li><b>Mobile Testing:</b> Real device testing on iOS and Android with cloud device farm</li><li><b>API Testing:</b> REST, SOAP, GraphQL - comprehensive API validation and performance testing</li><li><b>Desktop Apps:</b> Windows, macOS, Linux desktop application testing support</li></ul>`,
    icon: <Globe className="w-8 h-8 text-white" />,
    gradient: 'from-green-600 to-emerald-600'
  },
  {
    title: 'Enterprise Security',
    header: 'Bank-grade security and compliance',
    description: `Meet the highest security standards with SOC 2 Type II compliance, end-to-end encryption, and comprehensive audit logging for enterprise peace of mind.<ul style='margin-top:16px;text-align:left;'><li><b>SOC 2 Compliance:</b> Type II certified with regular third-party security audits</li><li><b>Data Encryption:</b> End-to-end encryption for data in transit and at rest</li><li><b>Access Control:</b> Role-based permissions with SSO and multi-factor authentication</li><li><b>Audit Logging:</b> Comprehensive activity logs for compliance and security monitoring</li></ul>`,
    icon: <Shield className="w-8 h-8 text-white" />,
    gradient: 'from-purple-600 to-indigo-600'
  },
  {
    title: 'Advanced Analytics',
    header: 'Data-driven testing insights',
    description: `Transform testing data into actionable insights with real-time dashboards, predictive analytics, and comprehensive reporting that drives continuous improvement.<ul style='margin-top:16px;text-align:left;'><li><b>Real-time Dashboards:</b> Live test execution monitoring with customizable views</li><li><b>Predictive Analytics:</b> AI-powered insights to predict and prevent quality issues</li><li><b>Custom Reports:</b> Executive summaries and detailed technical reports</li><li><b>Trend Analysis:</b> Historical data analysis to identify patterns and improvements</li></ul>`,
    icon: <BarChart3 className="w-8 h-8 text-white" />,
    gradient: 'from-orange-600 to-red-600'
  },
  {
    title: 'CI/CD Integration',
    header: 'Seamless DevOps workflow',
    description: `Integrate seamlessly with your existing DevOps pipeline. Trigger tests automatically, get instant feedback, and maintain quality gates throughout your development process.<ul style='margin-top:16px;text-align:left;'><li><b>Pipeline Integration:</b> Jenkins, GitHub Actions, GitLab CI, Azure DevOps support</li><li><b>Quality Gates:</b> Automated quality checks that prevent bad code from deploying</li><li><b>Parallel Execution:</b> Run thousands of tests simultaneously for faster feedback</li><li><b>Smart Notifications:</b> Contextual alerts via Slack, Teams, email, and webhooks</li></ul>`,
    icon: <GitBranch className="w-8 h-8 text-white" />,
    gradient: 'from-cyan-600 to-blue-600'
  },
  {
    title: 'Cloud Execution hello',
    header: 'Infinite scale, zero infrastructure',
    description: `Execute tests at massive scale with our cloud infrastructure. No setup required, automatic scaling, and global availability for consistent performance worldwide.<ul style='margin-top:16px;text-align:left;'><li><b>Auto Scaling:</b> Automatically scale resources based on test execution demand</li><li><b>Global Infrastructure:</b> Test from multiple geographic locations for performance validation</li><li><b>Zero Maintenance:</b> No infrastructure to manage - focus on testing, not servers</li><li><b>Cost Optimization:</b> Pay only for what you use with intelligent resource allocation</li></ul>`,
    icon: <Cloud className="w-8 h-8 text-white" />,
    gradient: 'from-pink-600 to-rose-600'
  },
];
const cardsPerSlide = 6;
const totalSlides = Math.ceil(cards.length / cardsPerSlide);

const CarouselCard: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [slide, setSlide] = useState(0); // 0 or 1

  const cardStyle = (isOpen: boolean) => ({
    cursor: 'pointer',
    padding: '32px',
    borderRadius: '16px',
    background: '#fff',
    boxShadow: '0 8px 40px rgba(0,0,0,0.18)',
    pointerEvents: 'auto' as 'auto',
  });

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(28, 28, 28, 0.95)',
          zIndex: 999,
          display: openIndex !== null ? 'flex' : 'none',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={() => setOpenIndex(null)}
      >
        <div
          style={{
            background: '#18181b',
            borderRadius: 20,
            boxShadow: '0 8px 40px rgba(0,0,0,0.28)',
            padding: '40px 32px',
            minWidth: 320,
            maxWidth: 480,
            width: '100%',
            position: 'relative',
            transform: openIndex !== null ? 'scale(1)' : 'scale(0.95)',
            opacity: openIndex !== null ? 1 : 0,
            transition: 'transform 0.7s cubic-bezier(.4,1,.4,1), opacity 0.7s cubic-bezier(.4,1,.4,1)',
            pointerEvents: openIndex !== null ? 'auto' : 'none',
            color: '#fff',
          }}
          onClick={e => e.stopPropagation()}
        >
          <button
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
              zIndex: 1001,
              border: 'none',
              borderRadius: '50%',
              width: 32,
              height: 32,
              cursor: 'pointer',
              fontSize: 18,
              background: '#eee',
              color: '#333',
            }}
            onClick={() => setOpenIndex(null)}
            aria-label="Close"
          >
            ×
          </button>
          {/* Modal card content */}
          {openIndex !== null && cards[openIndex] && (
            <div className="text-center">
              <div className={`w-16 m-auto h-16 bg-gradient-to-br ${cards[openIndex].gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                {cards[openIndex].icon}
              </div>
              <h3 className="text-2xl font-bold comprehensive_card_header mt-4" style={{ color: '#fff' }}>{cards[openIndex].title}</h3>
              <p className="font-medium comprehensive_card_subHeader light_grey" style={{ color: 'rgb(168 85 247 / var(--tw-bg-opacity, 1))', fontSize: 14, fontWeight: 500, marginTop: 8 }}>{cards[openIndex].header}</p>
              <div className='light_grey' style={{ color: '#444', fontSize: '1rem', fontWeight: 400, marginTop: 16, textAlign: 'left' }} dangerouslySetInnerHTML={{ __html: cards[openIndex].description }} />
            </div>
          )}
        </div>
      </div>
      {/* End modal rendering */}
      {/* Slide animation wrapper */}
      <div style={{ overflow: 'hidden', width: '100%' }}>
        <div
          style={{
            display: 'flex',
            width: '200%',
            transition: 'transform 0.6s cubic-bezier(.7,.2,.3,1)',
            transform: `translateX(-${slide * 50}%)`,
          }}
        >
          {[0, 1].map(slideIdx => (
            <div key={slideIdx} style={{ width: '50%', padding: '20px' }}>
              <div className="grid grid-rows-2 gap-3">
                {[0, 1].map(row => (
                  <div key={row} className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {cards.slice(slideIdx * cardsPerSlide + row * 3, slideIdx * cardsPerSlide + (row + 1) * 3).map((card, idx) => {
                      const cardIdx = slideIdx * cardsPerSlide + row * 3 + idx;
                      return (
                        <div
                          key={cardIdx}
                          className="comprehensive_card_main position-relative bg-white/80 feature-gradient-bg liener_bg"
                          style={cardStyle(openIndex === cardIdx)}
                          aria-haspopup="dialog"
                          aria-expanded={openIndex === cardIdx}
                          aria-controls={`card-${cardIdx}`}
                          data-state={openIndex === cardIdx ? 'open' : 'closed'}
                          onClick={() => openIndex === null && setOpenIndex(cardIdx)}
                        >
                          <div className="text-center" style={{ cursor: 'pointer' }}>
                            <div className={`w-16 m-auto h-16 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                              {card.icon}
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900 comprehensive_card_header">{card.title}</h3>
                              <p className="font-medium comprehensive_card_subHeader light_grey" style={{ color: 'rgb(168 85 247 / var(--tw-bg-opacity, 1))', fontSize: 12, fontWeight: 500 }}>{card.header}</p>
                            </div>
                            <div className="flex justify-end items-center mt-4">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link h-4 w-4 text-white opacity-80"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                            </div>
                            {/* Description removed from collapsed card view */}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center gap-6 mt-6">
        <button
          onClick={() => setSlide(s => Math.max(0, s - 1))}
          disabled={slide === 0}
          className={`bg-gray-700 hover:bg-gray-500 text-white rounded-full p-2 shadow-lg transition-all duration-200 flex items-center justify-center ${slide === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          aria-label="Previous"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button
          onClick={() => setSlide(s => Math.min(totalSlides - 1, s + 1))}
          disabled={slide === totalSlides - 1}
          className={`bg-gray-700 hover:bg-gray-500 text-white rounded-full p-2 shadow-lg transition-all duration-200 flex items-center justify-center ${slide === totalSlides - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          aria-label="Next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </>
  );
};

export default CarouselCard;