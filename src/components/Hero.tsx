import { ArrowRight, BarChart3, Brain, Bug, GitBranch, Settings, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import CalendlyPopup from './CalendlyPopup';
import { TrialForm } from './TrialForm';

const Hero = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [isTrialFormOpen, setIsTrialFormOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const almPhases = [
    { 
      name: "Agile Management", 
      icon: <Users className="w-5 h-5" />,
      description: "Optimize sprint cycles, manage backlogs efficiently, and enhance team productivity with intelligent automation"
    },
    { 
      name: "Release Management", 
      icon: <GitBranch className="w-5 h-5" />,
      description: "Automate deployment pipelines, manage version control, and ensure quality releases with zero downtime"
    },
    { 
      name: "Testing", 
      icon: <Settings className="w-5 h-5" />,
      description: "Automate test execution, generate smart test cases, and achieve 100% coverage with minimal effort"
    },
    { 
      name: "Defect Management", 
      icon: <Bug className="w-5 h-5" />,
      description: "Automatically detect issues, prioritize critical bugs, and accelerate resolution with AI-driven insights"
    },
    { 
      name: "Reports & Dashboard", 
      icon: <BarChart3 className="w-5 h-5" />,
      description: "Visualize real-time metrics, monitor project health, and generate executive-ready analytics instantly"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhase((prev) => (prev + 1) % almPhases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentALM = almPhases[currentPhase];

  return (
    <section className="relative bg-black overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Subtle Background Effects */}
      {/* <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" style={{zoom: 1.1}}>
        {/* Main Content */}
        <div className="text-center mb-16 mt-4">
          {/* AI Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 font-medium mb-6">
            <Brain className="w-4 h-4 mr-2" />
            Next-Gen AI for Complete ALM
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight min-h-[12rem] flex items-center justify-center">
            <div className="text-center">
              <div className="transition-opacity duration-500 ease-in-out">
                {currentPhase === 0 && (
                  <>
                    Streamline Your
                    <div className="relative inline-block mx-4">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                        Agile Management
                      </span>
                    </div>
                    <br />
                    with AI-Powered Workflows
                  </>
                )}
                {currentPhase === 1 && (
                  <>
                    Orchestrate Seamless
                    <div className="relative inline-block mx-4">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                        Release Management
                      </span>
                      {" "}with Smart Automation
                    </div>
                  </>
                )}
                {currentPhase === 2 && (
                  <>
                    Accelerate Your
                    <div className="relative inline-block mx-4">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                        Testing
                      </span>
                    </div>
                    <br />
                    with Intelligent Automation
                  </>
                )}
                {currentPhase === 3 && (
                  <>
                    Intelligent
                    <div className="relative inline-block mx-4">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                        Defect Management
                      </span>
                    </div>
                    <br />
                    Tracking & Resolution
                  </>
                )}
                {currentPhase === 4 && (
                  <>
                    Get Insights from
                    <div className="relative inline-block mx-4">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                        Reports & Dashboard
                      </span>
                    </div>
                    <br />
                    & Track Execution Status
                  </>
                )}
              </div>
            </div>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto h-16 flex items-center justify-center transition-opacity duration-500 ease-in-out">
            {currentALM.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => setIsCalendlyOpen(true)}
              className="text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center justify-center hover:scale-105"
              style={{
                background: 'linear-gradient(120deg, #3b82f6, #a855f7)',
                boxShadow: '0 10px 25px rgba(168, 85, 247, 0.25)'
              }}
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            
            {/* <button onClick={() => setIsTourOpen(true)} className="flex items-center justify-center px-8 py-3 text-white border border-white/30 hover:border-blue-400/50 rounded-lg font-semibold transition-all hover:bg-white/10">
              <Play className="h-4 w-4 mr-2" />
              Product Tour
            </button> */}
          </div>
        </div>

        {/* ALM Phases */}
        <div>
        {isTourOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            <div className="bg-black rounded-lg w-full max-w-4xl h-[60vh] overflow-hidden">
              <div className="p-3 flex justify-end">
                <button className="text-white text-xl" onClick={() => setIsTourOpen(false)}>✕</button>
              </div>
              <div className="h-full">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/4IUKqRsq_oc" title="Product Tour" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
            </div>
          </div>
        )}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {almPhases.map((phase, index) => (
              <div 
                key={index}
                className={`relative p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                  index === currentPhase 
                    ? 'bg-blue-500/20 border-blue-400/50 scale-105' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
                onClick={() => setCurrentPhase(index)}
              >
                <div className="text-center">
                  <div className={`mb-2 flex justify-center ${
                    index === currentPhase ? 'text-blue-400' : 'text-gray-400'
                  }`}>
                    {phase.icon}
                  </div>
                  <h4 className="text-white font-medium text-sm">{phase.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Trial Form Modal */}
      <TrialForm isOpen={isTrialFormOpen} onClose={() => setIsTrialFormOpen(false)} />
      
      {/* Calendly Popup Modal */}
      <CalendlyPopup isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </section>
  );
};

export default Hero;