import React, { useEffect, useRef, useState } from 'react';
import {
  FaBolt,
  FaBug,
  FaChartLine,
  FaCheck,
  FaClipboardList,
  FaCloudArrowUp,
  FaCode,
  FaCompassDrafting,
  FaDesktop,
  FaFileInvoiceDollar,
  FaGlobe,
  FaHammer,
  FaLayerGroup,
  FaLink,
  FaMicrochip,
  FaMobileScreenButton,
  FaNetworkWired,
  FaPuzzlePiece,
  FaRegFileLines,
  FaRobot,
  FaRocket,
  FaServer,
  FaUserDoctor,
  FaVials,
  FaWandMagicSparkles
} from 'react-icons/fa6';

const WhyChooseTechBackground: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeSection, setActiveSection] = useState('creation');
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [enableTransition, setEnableTransition] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const navItemIds = ['creation', 'automation', 'lifecycle', 'coverage'];

  // Auto-rotate tabs every 3 seconds
  useEffect(() => {
    if (isAutoRotating) {
      intervalRef.current = setInterval(() => {
        setActiveSection((prev) => {
          const currentIndex = navItemIds.indexOf(prev);
          const nextIndex = (currentIndex + 1) % navItemIds.length;
          return navItemIds[nextIndex];
        });
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoRotating]);

  // Handle manual tab click - stops auto rotation and enables transition
  const handleTabClick = (id: string) => {
    setIsAutoRotating(false);
    setEnableTransition(true);
    setActiveSection(id);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const revealEls = Array.from(section.querySelectorAll<HTMLElement>('.sq-tech-reveal'));
    if (!revealEls.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('sq-reveal-active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const styleBlock = `

    .sq-nav-dock {
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.5rem;
      border-radius: 24px;
      background: rgba(15, 23, 42, 0.7);
      border: 1px solid rgba(148, 163, 184, 0.2);
      backdrop-filter: blur(12px);
      box-shadow: 0 10px 30px rgba(8, 47, 73, 0.25);
      max-width: 100%;
    }
    @media (min-width: 768px) {
      .sq-nav-dock {
        border-radius: 999px;
      }
    }
    .sq-nav-item {
      font-size: 0.65rem;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      padding: 0.5rem 0.75rem;
      border-radius: 999px;
      color: rgba(226, 232, 240, 0.7);
      border: 1px solid transparent;
      transition: all 0.25s ease;
      background: transparent;
      white-space: nowrap;
    }
    @media (min-width: 768px) {
      .sq-nav-item {
        font-size: 0.85rem;
        padding: 0.65rem 1.25rem;
      }
    }
    .sq-nav-item:hover {
      color: #f8fafc;
      border-color: rgba(148, 163, 184, 0.35);
    }
    .sq-nav-item-active {
      color: #0f172a;
      border-color: transparent;
      background: linear-gradient(120deg, #22d3ee, #3b82f6);
      box-shadow: 0 10px 25px rgba(14, 165, 233, 0.25);
    }
    .sq-tech-glass-card {
      background: rgba(30, 41, 59, 0.7);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    }
    .sq-tech-reveal {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s ease-out;
    }
    .sq-tech-reveal.sq-reveal-active {
      opacity: 1;
      transform: translateY(0);
    }
    .sq-delay-100 { transition-delay: 0.1s; }
    .sq-delay-200 { transition-delay: 0.2s; }
    .sq-delay-300 { transition-delay: 0.3s; }
    .sq-border-glow-cyan { animation: sq-agent-pulse 4s infinite ease-in-out; }
    .sq-border-glow-blue { animation: sq-blue-pulse 4s infinite ease-in-out; }
    .sq-border-glow-indigo { animation: sq-indigo-pulse 4s infinite ease-in-out; }
    .sq-border-glow-sky { animation: sq-sky-pulse 4s infinite ease-in-out; }
    .sq-floating-icon { animation: sq-float 6s ease-in-out infinite; }

    @keyframes sq-agent-pulse {
      0%, 100% { border-color: rgba(6, 182, 212, 0.5); box-shadow: 0 0 15px rgba(6, 182, 212, 0.1); }
      50% { border-color: rgba(6, 182, 212, 0.8); box-shadow: 0 0 25px rgba(6, 182, 212, 0.3); }
    }
    @keyframes sq-blue-pulse {
      0%, 100% { border-color: rgba(59, 130, 246, 0.5); }
      50% { border-color: rgba(59, 130, 246, 0.9); box-shadow: 0 0 20px rgba(59, 130, 246, 0.2); }
    }
    @keyframes sq-indigo-pulse {
      0%, 100% { border-color: rgba(99, 102, 241, 0.5); }
      50% { border-color: rgba(99, 102, 241, 0.9); box-shadow: 0 0 20px rgba(99, 102, 241, 0.2); }
    }
    @keyframes sq-sky-pulse {
      0%, 100% { border-color: rgba(14, 165, 233, 0.5); }
      50% { border-color: rgba(14, 165, 233, 0.9); box-shadow: 0 0 20px rgba(14, 165, 233, 0.2); }
    }
    @keyframes sq-float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }
  `;

  const agentHighlights = [
    {
      icon: <FaCompassDrafting className="text-sm" />,
      title: 'The Architect Agent',
      description: 'Reads BRDs, Figma & videos to generate test strategies.'
    },
    {
      icon: <FaHammer className="text-sm" />,
      title: 'The Builder Agent',
      description: 'Generates synthetic test data & automated scripts instantly.'
    },
    {
      icon: <FaUserDoctor className="text-sm" />,
      title: 'The Healer Agent',
      description: 'Detects failures and self-corrects scripts without human input.'
    }
  ];

  const unifiedLifecycleLeft = [
    { icon: <FaClipboardList />, label: 'Requirement Management' },
    { icon: <FaRocket />, label: 'Release Management' },
    { icon: <FaVials />, label: 'Test Management' },
    { icon: <FaBug />, label: 'Defect Tracking' }
  ];

  const unifiedLifecycleRight = [
    { icon: <FaLink />, label: 'Traceability Matrix' },
    { icon: <FaFileInvoiceDollar />, label: 'Advanced Reports' },
    { icon: <FaChartLine />, label: 'Live Dashboards' }
  ];

  const coverageGrid = [
    { icon: <FaGlobe />, label: 'Web Apps' },
    { icon: <FaMobileScreenButton />, label: 'Mobile (iOS/Android)' },
    { icon: <FaDesktop />, label: 'Desktop' },
    { icon: <FaCode />, label: 'API / Services' },
    { icon: <FaServer />, label: 'Mainframe / Legacy' },
    { icon: <FaCloudArrowUp />, label: 'Cloud Execution' }
  ];

  const navItems = [
    { id: 'creation', label: 'Creation Bottleneck' },
    { id: 'automation', label: 'Zero-Code Automation' },
    { id: 'lifecycle', label: 'Unified Lifecycle' },
    { id: 'coverage', label: 'Full Stack Ready' }
  ];

  return (
    <section ref={sectionRef} className="sq-tech-bg text-slate-300 overflow-hidden">
      <style>{styleBlock}</style>
      <div className="py-20 px-4 md:px-8 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 sq-tech-reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose SimplifyQA?
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Streamline your entire development lifecycle with our comprehensive, AI-powered platform designed for modern teams who demand quality, speed, and reliability.
            </p>
          </div>

          <div className="relative min-h-[420px]">
            <div
              className={`sq-tech-reveal grid md:grid-cols-2 gap-0 md:gap-8 items-center ${enableTransition ? 'transition-all duration-500 ease-out' : ''}`}
              style={{
                opacity: activeSection === 'creation' ? 1 : 0,
                visibility: activeSection === 'creation' ? 'visible' : 'hidden',
                position: activeSection === 'creation' ? 'relative' : 'absolute',
                top: 0,
                left: 0,
                width: '100%'
              }}
            >
              <div className="bg-slate-900/80 backdrop-blur-sm p-8 rounded-t-2xl md:rounded-2xl border border-slate-800 md:mr-4 opacity-80 hover:opacity-100 transition-all duration-300 shadow-lg">
                <div className="text-slate-700 text-4xl mb-4">
                  <FaRegFileLines />
                </div>
                <h3 className="text-xl font-bold text-slate-500 mb-2">The Creation Bottleneck</h3>
                <p className="text-slate-600 leading-relaxed">
                  80% of testing time is lost on prep work—parsing BRDs, creating dummy data, and manually translating test cases into scripts.
                </p>
              </div>

              <div className="sq-tech-glass-card p-10 rounded-b-2xl md:rounded-2xl shadow-2xl shadow-cyan-900/20 border-l-4 sq-border-glow-cyan border-cyan-500 relative overflow-hidden transform md:-ml-4 transition-transform hover:scale-[1.02] z-20 group">
                <div className="sq-floating-icon absolute top-0 right-0 p-4 opacity-5 text-cyan-400 text-9xl -mt-4 -mr-4 pointer-events-none">
                  <FaRobot />
                </div>

                <span className="absolute top-4 right-4 bg-cyan-500/20 text-cyan-300 text-[10px] md:text-xs font-bold px-3 py-1 rounded-full border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.3)] flex items-center gap-1">
                  <FaMicrochip className="animate-pulse" /> ALL-IN-ONE ALM
                </span>

                <div className="text-cyan-400 text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
                  <FaRobot />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Agentic AI Workforce</h3>
                <p className="text-slate-300 leading-relaxed mb-4 text-sm">
                  Stop writing. Start delegating. Our agents ingest your raw assets and build your QA artifacts autonomously.
                </p>

                <div className="space-y-4 pt-2">
                  {agentHighlights.map((item) => (
                    <div key={item.title} className="flex items-start">
                      <div className="w-8 h-8 rounded bg-cyan-900/40 flex items-center justify-center text-cyan-400 mr-3 shrink-0 mt-1">
                        {item.icon}
                      </div>
                      <div>
                        <strong className="text-white text-sm block">{item.title}</strong>
                        <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className={`sq-tech-reveal grid md:grid-cols-2 gap-0 md:gap-8 items-center ${enableTransition ? 'transition-all duration-500 ease-out' : ''}`}
              style={{
                opacity: activeSection === 'automation' ? 1 : 0,
                visibility: activeSection === 'automation' ? 'visible' : 'hidden',
                position: activeSection === 'automation' ? 'relative' : 'absolute',
                top: 0,
                left: 0,
                width: '100%'
              }}
            >
              <div className="bg-slate-900/80 backdrop-blur-sm p-8 rounded-t-2xl md:rounded-2xl border border-slate-800 md:mr-4 opacity-80 hover:opacity-100 transition-all duration-300 shadow-lg">
                <div className="text-slate-700 text-4xl mb-4">
                  <FaCode />
                </div>
                <h3 className="text-xl font-bold text-slate-500 mb-2">Dependent on Code</h3>
                <p className="text-slate-600 leading-relaxed">
                  Traditional frameworks like Selenium require heavy coding, creating a maintenance nightmare.
                </p>
              </div>

              <div className="sq-tech-glass-card p-10 rounded-b-2xl md:rounded-2xl shadow-2xl shadow-blue-900/20 border-l-4 sq-border-glow-blue border-blue-500 relative overflow-hidden transform md:-ml-4 transition-transform hover:scale-[1.02] z-20 group">
                <div className="sq-floating-icon absolute top-0 right-0 p-4 opacity-5 text-blue-400 text-9xl -mt-4 -mr-4 pointer-events-none" style={{ animationDelay: '1s' }}>
                  <FaBolt />
                </div>

                <span className="absolute top-4 right-4 bg-blue-500/20 text-blue-300 text-[10px] md:text-xs font-bold px-3 py-1 rounded-full border border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.3)] flex items-center gap-1">
                  <FaBolt className="animate-pulse" /> ALL-IN-ONE ALM
                </span>

                <div className="text-blue-400 text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
                  <FaWandMagicSparkles />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Zero-Code Automation</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Our keyword-driven engine and smart recorder let anyone create complex scenarios in minutes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-slate-300 font-medium">
                    <FaCheck className="text-blue-500 mr-2" /> 80% faster test creation
                  </li>
                  <li className="flex items-center text-sm text-slate-300 font-medium">
                    <FaCheck className="text-blue-500 mr-2" /> Human-readable Keywords
                  </li>
                </ul>
              </div>
            </div>

            <div
              className={`sq-tech-reveal grid md:grid-cols-2 gap-0 md:gap-8 items-center ${enableTransition ? 'transition-all duration-500 ease-out' : ''}`}
              style={{
                opacity: activeSection === 'lifecycle' ? 1 : 0,
                visibility: activeSection === 'lifecycle' ? 'visible' : 'hidden',
                position: activeSection === 'lifecycle' ? 'relative' : 'absolute',
                top: 0,
                left: 0,
                width: '100%'
              }}
            >
              <div className="bg-slate-900/80 backdrop-blur-sm p-8 rounded-t-2xl md:rounded-2xl border border-slate-800 md:mr-4 opacity-80 hover:opacity-100 transition-all duration-300 shadow-lg">
                <div className="text-slate-700 text-4xl mb-4">
                  <FaPuzzlePiece />
                </div>
                <h3 className="text-xl font-bold text-slate-500 mb-2">Fragmented Tools</h3>
                <p className="text-slate-600 leading-relaxed">
                  Jira for bugs, Excel for planning, Jenkins for builds. Jumping between disparate tools creates data silos.
                </p>
              </div>

              <div className="sq-tech-glass-card p-10 rounded-b-2xl md:rounded-2xl shadow-2xl shadow-indigo-900/20 border-l-4 sq-border-glow-indigo border-indigo-500 relative overflow-hidden transform md:-ml-4 transition-transform hover:scale-[1.02] z-20 group">
                <div className="sq-floating-icon absolute top-0 right-0 p-4 opacity-5 text-indigo-400 text-9xl -mt-4 -mr-4 pointer-events-none" style={{ animationDelay: '2s' }}>
                  <FaLayerGroup />
                </div>

                <span className="absolute top-4 right-4 bg-indigo-500/20 text-indigo-300 text-[10px] md:text-xs font-bold px-3 py-1 rounded-full border border-indigo-500/30 shadow-[0_0_10px_rgba(99,102,241,0.3)] flex items-center gap-1">
                  <FaLayerGroup className="animate-pulse" /> ALL-IN-ONE ALM
                </span>

                <div className="text-indigo-400 text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
                  <FaLayerGroup />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Unified Lifecycle</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Everything you need in one platform. Stop paying for multiple disjointed tools.
                </p>

                <div className="grid grid-cols-2 gap-x-2 gap-y-3 border-t border-slate-700/50 pt-4">
                  <div className="space-y-3">
                    {unifiedLifecycleLeft.map((item) => (
                      <div key={item.label} className="flex items-center text-xs text-slate-300 hover:text-white transition-colors">
                        <div className="w-5 text-indigo-400 text-center mr-2">{item.icon}</div> {item.label}
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {unifiedLifecycleRight.map((item) => (
                      <div key={item.label} className="flex items-center text-xs text-slate-300 hover:text-white transition-colors">
                        <div className="w-5 text-indigo-400 text-center mr-2">{item.icon}</div> {item.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`sq-tech-reveal grid md:grid-cols-2 gap-0 md:gap-8 items-center ${enableTransition ? 'transition-all duration-500 ease-out' : ''}`}
              style={{
                opacity: activeSection === 'coverage' ? 1 : 0,
                visibility: activeSection === 'coverage' ? 'visible' : 'hidden',
                position: activeSection === 'coverage' ? 'relative' : 'absolute',
                top: 0,
                left: 0,
                width: '100%'
              }}
            >
              <div className="bg-slate-900/80 backdrop-blur-sm p-8 rounded-t-2xl md:rounded-2xl border border-slate-800 md:mr-4 opacity-80 hover:opacity-100 transition-all duration-300 shadow-lg">
                <div className="text-slate-700 text-4xl mb-4">
                  <FaDesktop />
                </div>
                <h3 className="text-xl font-bold text-slate-500 mb-2">Limited Coverage</h3>
                <p className="text-slate-600 leading-relaxed">
                  Most tools specialize in just one thing. You end up with one tool for web, another for mobile, and manual effort for legacy apps.
                </p>
              </div>

              <div className="sq-tech-glass-card p-10 rounded-b-2xl md:rounded-2xl shadow-2xl shadow-sky-900/20 border-l-4 sq-border-glow-sky border-sky-500 relative overflow-hidden transform md:-ml-4 transition-transform hover:scale-[1.02] z-20 group">
                <div className="sq-floating-icon absolute top-0 right-0 p-4 opacity-5 text-sky-400 text-9xl -mt-4 -mr-4 pointer-events-none" style={{ animationDelay: '3s' }}>
                  <FaGlobe />
                </div>

                <span className="absolute top-4 right-4 bg-sky-500/20 text-sky-300 text-[10px] md:text-xs font-bold px-3 py-1 rounded-full border border-sky-500/30 shadow-[0_0_10px_rgba(14,165,233,0.3)] flex items-center gap-1">
                  <FaServer className="animate-pulse" /> ALL-IN-ONE ALM
                </span>

                <div className="text-sky-400 text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
                  <FaNetworkWired />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Any Device, Any App</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  From legacy Mainframes to modern Web and Mobile. Automate user journeys that span your entire tech stack.
                </p>

                <div className="grid grid-cols-2 gap-3 border-t border-slate-700/50 pt-4 mt-2">
                  {coverageGrid.map((item) => (
                    <div key={item.label} className="flex items-center text-xs text-slate-300 hover:text-white transition-colors">
                      <span className="text-sky-400 w-5 text-center mr-2">{item.icon}</span> {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-6 sq-tech-reveal px-2 md:px-0">
          <nav className="sq-nav-dock">
            {navItems.map(({ id, label }) => (
              <button
                key={`bottom-${id}`}
                type="button"
                className={`sq-nav-item ${activeSection === id ? 'sq-nav-item-active' : ''}`}
                onClick={() => handleTabClick(id)}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTechBackground;

