import React, { useState } from 'react';

const tabs = [
  { id: 'web', label: 'Web' },
  { id: 'api', label: 'API' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'db', label: 'Database' },
  { id: 'desktop', label: 'Desktop' },
  { id: 'mainframe', label: 'Mainframe' }
];

const PlatformArchitectureShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('web');

  return (
    <section className="sq-tech-bg text-slate-200 py-24 border-y border-white/5 relative overflow-hidden">
      <style>{`
        .scanline::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 100% 3px;
          opacity: 0.25;
          mix-blend-mode: screen;
          pointer-events: none;
        }
        .platform-nav-dock {
          display: inline-flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.35rem;
          padding: 0.4rem;
          border-radius: 20px;
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid rgba(148, 163, 184, 0.2);
          backdrop-filter: blur(12px);
          box-shadow: 0 10px 30px rgba(8, 47, 73, 0.25);
          max-width: 100%;
        }
        @media (min-width: 768px) {
          .platform-nav-dock {
            border-radius: 999px;
            gap: 0.5rem;
            padding: 0.5rem;
          }
        }
        .platform-nav-item {
          font-size: 0.65rem;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          padding: 0.5rem 0.65rem;
          border-radius: 999px;
          color: rgba(226, 232, 240, 0.7);
          border: 1px solid transparent;
          transition: all 0.25s ease;
          background: transparent;
          cursor: pointer;
          white-space: nowrap;
        }
        @media (min-width: 768px) {
          .platform-nav-item {
            font-size: 0.85rem;
            padding: 0.65rem 1.25rem;
          }
        }
        .platform-nav-item:hover {
          color: #f8fafc;
          border-color: rgba(148, 163, 184, 0.35);
        }
        .platform-nav-item-active {
          color: #0f172a;
          border-color: transparent;
          background: linear-gradient(120deg, #22d3ee, #3b82f6);
          box-shadow: 0 10px 25px rgba(14, 165, 233, 0.25);
        }
        @keyframes sq-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header - Centered like HoneycombGrid */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Unified Vision. Absolute Control.
          </h2>
          <p
            className="text-base md:text-lg lg:text-xl text-blue-100/80 max-w-3xl mx-auto"
            style={{ fontWeight: 400, letterSpacing: '0.3px' }}
          >
            Stop toggling tools. Unify your entire testing landscape—from legacy mainframes to cloud-native microservices—under one intelligent, scriptless command center.
          </p>

          {/* Tabs - Below the heading with new design */}
          <div className="mt-8 flex justify-center px-2 md:px-0">
            <nav className="platform-nav-dock">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`platform-nav-item ${activeTab === tab.id ? 'platform-nav-item-active' : ''}`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="rounded-2xl p-8 lg:p-12 min-h-[400px] relative overflow-hidden border-l-4 border-indigo-500 shadow-2xl shadow-indigo-900/20 transition-transform hover:scale-[1.01] group" style={{
          background: 'rgba(30, 41, 59, 0.7)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderLeft: '4px solid #6366f1',
          boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.08), inset 0 -1px 0 0 rgba(0,0,0,0.3), 0 4px 20px rgba(0,0,0,0.3), 0 0 15px rgba(99, 102, 241, 0.1)'
        }}>
          {/* Floating background icon - changes based on active tab */}
          <div className="absolute top-0 right-0 p-4 opacity-5 text-blue-400 pointer-events-none" style={{ animation: 'sq-float 6s ease-in-out infinite', animationDelay: '1s' }}>
            {activeTab === 'web' && (
              <svg className="w-48 h-48 -mt-8 -mr-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            )}
            {activeTab === 'api' && (
              <svg className="w-48 h-48 -mt-8 -mr-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            )}
            {activeTab === 'mobile' && (
              <svg className="w-48 h-48 -mt-8 -mr-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            )}
            {activeTab === 'db' && (
              <svg className="w-48 h-48 -mt-8 -mr-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            )}
            {activeTab === 'desktop' && (
              <svg className="w-48 h-48 -mt-8 -mr-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            )}
            {activeTab === 'mainframe' && (
              <svg className="w-48 h-48 -mt-8 -mr-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            )}
          </div>
          {activeTab === 'web' && (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Deliver Flawless Experiences Across Every Browser</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Ensure your web applications perform perfectly for every user, on every device. SimplifyQA empowers teams to run scalable, scriptless tests across the modern web.
                </p>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span> Cross-Browser Compatibility: Automate tests seamlessly on Chrome, Firefox, Safari, Edge, and IE
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span> Responsive & Mobile Web: Validate responsive designs with real-time device emulation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span> Smart Object Recognition: Utilize robust identification (XPath, CSS, Image Recognition)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span> Cloud Scaling: Execute parallel tests on the cloud to slash regression cycles
                  </li>
                </ul>
              </div>
              <div className="relative rounded-lg bg-slate-900 border border-slate-700 aspect-video shadow-2xl flex flex-col overflow-hidden">
                <div className="h-8 bg-slate-800 border-b border-slate-700 flex items-center px-3 space-x-2">
                  <div className="w-2 h-2 rounded-full bg-slate-600" />
                  <div className="w-2 h-2 rounded-full bg-slate-600" />
                  <div className="ml-auto text-xs text-slate-500">Grid View</div>
                </div>
                <div className="flex-1 p-4 grid grid-cols-2 gap-4 bg-slate-950">
                  {[
                    { name: 'Chrome 118', color: 'bg-blue-500', progress: 'w-[80%]', status: 'Executing Login...' },
                    { name: 'Firefox 119', color: 'bg-orange-500', progress: 'w-[65%]', status: 'Executing Cart...' },
                    { name: 'Safari 17', color: 'bg-cyan-500', progress: 'w-[90%]', status: 'Verifying Payment...' },
                    { name: 'Edge 118', color: 'bg-green-500', progress: 'w-[45%]', status: 'Loading Home...' }
                  ].map((browser) => (
                    <div
                      key={browser.name}
                      className="bg-slate-900 border border-slate-800 rounded p-3 flex flex-col justify-between hover:border-blue-500/40 transition"
                    >
                      <div className="flex justify-between items-start">
                        <span className="text-xs text-slate-400 font-bold">{browser.name}</span>
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className={`${browser.color} h-full ${browser.progress}`} />
                      </div>
                      <div className="text-[10px] text-slate-500 mt-1">{browser.status}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'mobile' && (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Native & Hybrid App Testing at Scale</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Conquer fragmentation with a unified mobile testing strategy. Automate complex gestures and user flows across the devices your customers actually use.
                </p>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">✓</span> Android & iOS Support: Automate native and hybrid apps on real devices, emulators, and simulators
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">✓</span> Cross-OS Flexibility: Uniquely supports iOS automation execution on both Windows and Mac
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">✓</span> Parallel Execution: Run tests simultaneously across multiple devices
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">✓</span> Deep Diagnostics: Capture device-level logs, screenshots, and videos for rapid root cause analysis
                  </li>
                </ul>
              </div>
              <div className="relative flex justify-center">
                <div className="w-56 h-[400px] bg-slate-900 border-[6px] border-slate-800 rounded-[2.5rem] shadow-2xl relative overflow-hidden ring-1 ring-white/10">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-800 rounded-b-xl z-20" />
                  <div className="w-full h-full bg-slate-950 flex flex-col pt-8 relative">
                    <div className="px-4 mb-6 flex justify-between items-center">
                      <div className="w-4 h-4 rounded bg-slate-800" />
                      <div className="h-2 w-20 bg-slate-800 rounded" />
                    </div>
                    <div className="px-6 space-y-4">
                      <div className="h-8 w-16 bg-purple-600/20 rounded mb-2" />
                      <div className="h-4 w-32 bg-slate-800 rounded" />
                      <div className="relative">
                        <div className="h-10 w-full bg-slate-900 border border-slate-700 rounded flex items-center px-3 text-xs text-slate-500">
                          username
                        </div>
                        <div className="absolute inset-0 border-2 border-purple-500 bg-purple-500/10 rounded flex items-center justify-center">
                          <span className="bg-purple-500 text-white text-[9px] px-1 rounded absolute -top-2 left-2">id: input_user</span>
                        </div>
                      </div>
                      <div className="h-10 w-full bg-slate-900 border border-slate-700 rounded flex items-center px-3 text-xs text-slate-500">
                        password
                      </div>
                      <div className="h-10 w-full bg-purple-600 rounded flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-purple-600/20">
                        Log In
                      </div>
                    </div>
                    <div className="absolute bottom-6 right-4 w-10 h-10 bg-white rounded-full text-slate-900 flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'desktop' && (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-12 h-12 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Modernize Testing for Legacy & Desktop Apps</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Don't leave your core business applications behind. Bring the speed of modern automation to your critical desktop software.
                </p>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-teal-400">✓</span> Broad Tech Stack: Support for .NET, Java, Win32, WPF, and legacy Windows applications
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-400">✓</span> Native UI Interaction: Precisely control menus, ribbons, pop-ups, and complex desktop controls
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-400">✓</span> Smart Identification: Hybrid property-based and image-based recognition for stability
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-400">✓</span> Cross-Platform Ready: Build stable automation for Windows and macOS without coding
                  </li>
                </ul>
              </div>
              <div className="relative rounded-lg bg-slate-900 border border-slate-700 aspect-video shadow-2xl flex flex-col overflow-hidden">
                <div className="h-8 bg-slate-800 border-b border-slate-700 flex items-center px-3 justify-between">
                  <div className="text-xs text-slate-400">SAP GUI - Order Processing</div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 border border-slate-600 rounded-sm" />
                    <div className="w-3 h-3 border border-slate-600 rounded-sm" />
                    <div className="w-3 h-3 bg-red-500/50 rounded-sm" />
                  </div>
                </div>
                <div className="flex-1 bg-slate-200 p-4 relative text-slate-800 text-xs">
                  <div className="w-1/4 h-full bg-slate-300 absolute left-0 top-0 border-r border-slate-400 p-2">
                    <div className="mb-2 font-bold text-slate-600">Menu</div>
                    <div className="space-y-1">
                      <div className="bg-blue-600 text-white p-1 rounded shadow cursor-pointer">Orders</div>
                      <div className="p-1 hover:bg-slate-400/20 rounded cursor-pointer">Inventory</div>
                      <div className="p-1 hover:bg-slate-400/20 rounded cursor-pointer">Reports</div>
                    </div>
                  </div>
                  <div className="ml-[25%] pl-4 pt-2">
                    <h4 className="font-bold text-lg mb-4 text-slate-700">New Order #8821</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold mb-1">Customer ID</label>
                        <div className="bg-white border border-slate-400 p-1 w-full shadow-inner">C-9921</div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold mb-1">Date</label>
                        <div className="bg-white border border-slate-400 p-1 w-full shadow-inner">2024-11-26</div>
                      </div>
                    </div>
                    <div className="absolute top-28 left-1/3 border-2 border-red-500 bg-red-500/10 w-32 h-8 flex items-center justify-center animate-pulse">
                      <span className="bg-red-500 text-white text-[9px] px-1 absolute -top-4 left-0">win_id: txt_cust_id</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'mainframe' && (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Unlock the Value of Legacy Systems</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Bridge the gap between foundational mainframes and digital agility. Automate green-screen workflows to modernize your critical business logic.
                </p>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500">✓</span> Terminal Emulation: Seamless integration with 3270 and 5250 terminal emulators (IBM i/AS400, z/OS)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500">✓</span> Green Screen to GUI: Validate data flow between legacy mainframe screens and modern web/mobile interfaces
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500">✓</span> High-Speed Entry: Automate complex keystrokes and data entry tasks faster than human operators
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500">✓</span> Legacy Modernization: Ensure stability while refactoring or migrating mainframe data to cloud
                  </li>
                </ul>
              </div>
              <div className="relative rounded-lg bg-black border border-slate-800 aspect-video shadow-2xl flex flex-col overflow-hidden">
                <div className="bg-slate-800 h-6 w-full flex items-center px-2">
                  <div className="text-[10px] text-slate-400 font-mono">SSH: 192.168.1.105 - IBM 3270</div>
                </div>
                <div className="flex-1 p-6 font-mono text-green-500 text-xs leading-relaxed opacity-90 relative">
                  <div className="absolute inset-0 bg-green-500/5 pointer-events-none scanline" />
                  <div>CICS TRANSACTION SERVER V5.3</div>
                  <div className="mb-4">WELCOME TO SIMPLIFYQA BANKING SYSTEM</div>
                  <div className="grid grid-cols-[100px_1fr] gap-2 mb-2">
                    <span>USERID:</span>
                    <span className="bg-green-500 text-black px-1 w-fit">ADMIN___</span>
                  </div>
                  <div className="grid grid-cols-[100px_1fr] gap-2 mb-8">
                    <span>PASSWORD:</span>
                    <span>********</span>
                  </div>
                  <div>
                    COMMAND ===&gt; <span className="animate-pulse">_</span>
                  </div>
                  <div className="absolute bottom-4 left-6 text-green-700">F1=HELP F3=EXIT F12=CANCEL</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'api' && (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-12 h-12 rounded-lg bg-pink-500/10 text-pink-500 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Validate Backend Logic with Precision</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Shift left and secure your application's core. Our API testing suite ensures your backend services are robust, secure, and ready for integration.
                </p>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-pink-500">✓</span> Multi-Protocol Support: Comprehensive automation for REST, SOAP, and GraphQL APIs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pink-500">✓</span> CI/CD Integration: Embed backend workflow validation directly into your pipeline
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pink-500">✓</span> Performance & Security: Run automated health checks and security scans on endpoints
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pink-500">✓</span> Data-Driven Coverage: Dynamically parameterize requests to test edge cases
                  </li>
                </ul>
              </div>
              <div className="relative rounded-lg bg-slate-900 border border-slate-700 aspect-video shadow-2xl flex flex-col overflow-hidden text-xs">
                <div className="p-3 border-b border-slate-800 flex items-center gap-2 bg-slate-950">
                  <div className="px-2 py-1 bg-green-600 text-white font-bold rounded text-[10px]">POST</div>
                  <div className="text-slate-300 font-mono flex-1 truncate">https://api.simplifyqa.com/graphql</div>
                  <div className="px-3 py-1 bg-pink-600 text-white font-bold rounded cursor-pointer">Send</div>
                </div>
                <div className="flex flex-1">
                  <div className="w-1/2 border-right border-slate-800 p-4 font-mono text-slate-400">
                    <div className="mb-2 text-slate-500 uppercase text-[10px] font-bold">Query (GraphQL)</div>
                    <div className="text-pink-400">query &#123;</div>
                    <div className="pl-4">
                      <span className="text-blue-300">user</span>(id: <span className="text-orange-300">"101"</span>) &#123;
                      <br />
                      &nbsp;&nbsp;<span className="text-blue-300">name</span>
                      <br />
                      &nbsp;&nbsp;<span className="text-blue-300">orders</span> &#123; id &#125;
                      <br />
                      &#125;
                    </div>
                    <div className="text-pink-400">&#125;</div>
                  </div>
                  <div className="w-1/2 p-4 font-mono bg-slate-950/50">
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-500 uppercase text-[10px] font-bold">Response</span>
                      <span className="text-green-500 text-[10px] font-bold">200 OK</span>
                    </div>
                    <div className="text-slate-300">
                      <span className="text-yellow-400">&#123;</span>
                      <br />
                      <span className="pl-4 text-blue-300">"data"</span>: &#123;
                      <br />
                      <span className="pl-8 text-blue-300">"user"</span>: &#123;
                      <br />
                      <span className="pl-12 text-blue-300">"name"</span>: <span className="text-green-300">"Alice"</span>
                      <br />
                      <span className="pl-8">&#125;</span>
                      <br />
                      <span className="pl-4">&#125;</span>
                      <br />
                      <span className="text-yellow-400">&#125;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'db' && (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-12 h-12 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Ensure Data Integrity & Reliability</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Data is the lifeblood of your application. Automate complex validations to ensure your frontend actions match your backend reality.
                </p>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-500">✓</span> SQL & NoSQL Support: Native connectivity for Oracle, MySQL, SQL Server, MongoDB, and more
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-500">✓</span> End-to-End Validation: Seamlessly chain database checks with UI and API tests
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-500">✓</span> Complex Query Execution: Automate data integrity checks, stored procedure testing, and rollbacks
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-500">✓</span> Audit-Ready Reporting: Generate detailed logs comparing data states for compliance
                  </li>
                </ul>
              </div>
              <div className="relative rounded-lg bg-slate-900 border border-slate-700 aspect-video shadow-2xl flex flex-col overflow-hidden text-xs">
                <div className="h-8 bg-slate-800 border-b border-slate-700 flex items-center px-3 justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-slate-400 text-[10px]">Connected: production-db-01</span>
                  </div>
                  <div className="bg-indigo-600 text-white px-3 py-0.5 rounded text-[10px] font-bold cursor-pointer transition">
                    RUN QUERY
                  </div>
                </div>
                <div className="flex flex-1">
                  <div className="w-1/4 border-r border-slate-800 bg-slate-950 p-3 space-y-2 hidden sm:block">
                    <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-2">Tables</div>
                    <div className="text-slate-500 pl-2 border-l-2 border-slate-800 hover:text-slate-300 cursor-pointer">
                      public.users
                    </div>
                    <div className="text-white pl-2 border-l-2 border-indigo-500 bg-slate-900/50 cursor-pointer">public.orders</div>
                    <div className="text-slate-500 pl-2 border-l-2 border-slate-800 hover:text-slate-300 cursor-pointer">
                      public.inventory
                    </div>
                  </div>
                  <div className="w-full sm:w-3/4 flex flex-col">
                    <div className="h-1/3 border-b border-slate-800 p-3 font-mono text-slate-300 bg-slate-900 leading-relaxed">
                      <span className="text-purple-400">SELECT</span> * <span className="text-purple-400">FROM</span> orders
                      <br />
                      <span className="text-purple-400">WHERE</span> status = <span className="text-orange-300">'SHIPPED'</span>
                      <br />
                      <span className="text-purple-400">LIMIT</span> 3;
                    </div>
                    <div className="flex-1 bg-slate-950 p-0 overflow-hidden relative">
                      <table className="w-full text-left">
                        <thead className="bg-slate-900 text-slate-500 text-[9px] uppercase">
                          <tr>
                            <th className="p-2 font-medium border-b border-slate-800">id</th>
                            <th className="p-2 font-medium border-b border-slate-800">customer</th>
                            <th className="p-2 font-medium border-b border-slate-800">amount</th>
                            <th className="p-2 font-medium border-b border-slate-800">status</th>
                          </tr>
                        </thead>
                        <tbody className="text-slate-400 font-mono text-[10px]">
                          {[
                            { id: '1021', customer: '"Alice"', amount: '$450.00' },
                            { id: '1022', customer: '"Bob"', amount: '$120.50' },
                            { id: '1023', customer: '"Charlie"', amount: '$89.99' }
                          ].map((row) => (
                            <tr key={row.id} className="border-b border-slate-800/50 hover:bg-slate-900/50">
                              <td className="p-2 text-blue-400">{row.id}</td>
                              <td className="p-2">{row.customer}</td>
                              <td className="p-2 text-green-400">{row.amount}</td>
                              <td className="p-2">
                                <span className="bg-green-500/10 text-green-400 px-1 rounded border border-green-500/20">SHIPPED</span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className="absolute bottom-4 right-4 bg-slate-800 border border-green-500/30 text-green-400 px-3 py-2 rounded shadow-lg flex items-center gap-2 text-xs animate-bounce">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Validation Passed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PlatformArchitectureShowcase;

