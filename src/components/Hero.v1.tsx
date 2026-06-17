import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Brain, FileText, Bug, BarChart3, GitBranch, Users, Layers, Code, Settings } from 'lucide-react';

const Hero = () => {
  const [currentPhase, setCurrentPhase] = useState(0);

  const almPhases = [
    { 
      name: "Requirements", 
      icon: <FileText className="w-4 h-4" />,
      description: "AI analyzes and validates requirements automatically",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      name: "Design", 
      icon: <Layers className="w-4 h-4" />,
      description: "Intelligent architecture planning and optimization",
      color: "from-purple-500 to-pink-500"
    },
    { 
      name: "Development", 
      icon: <Code className="w-4 h-4" />,
      description: "Smart code generation and quality assurance",
      color: "from-green-500 to-emerald-500"
    },
    { 
      name: "Testing", 
      icon: <Bug className="w-4 h-4" />,
      description: "Comprehensive AI-powered testing automation",
      color: "from-orange-500 to-red-500"
    },
    { 
      name: "Deployment", 
      icon: <GitBranch className="w-4 h-4" />,
      description: "Intelligent release management and automation",
      color: "from-indigo-500 to-purple-500"
    },
    { 
      name: "Monitoring", 
      icon: <BarChart3 className="w-4 h-4" />,
      description: "Real-time insights and predictive analytics",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhase((prev) => (prev + 1) % almPhases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentALM = almPhases[currentPhase];

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Content */}
        <div className="text-center mb-12">
          {/* AI Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 font-medium mb-6">
            <Brain className="w-4 h-4 mr-2" />
            Complete ALM AI Platform
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            AI Transforms
            <div className="relative inline-block mx-3">
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentALM.color}`}>
                {currentALM.name}
              </span>
            </div>
            <br />Across Your ALM
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            {currentALM.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            
            <button className="flex items-center justify-center px-6 py-3 text-white border border-white/30 hover:border-blue-400/50 rounded-lg font-semibold transition-all hover:bg-white/10">
              <Play className="h-4 w-4 mr-2" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* ALM Phases */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {almPhases.map((phase, index) => (
              <div 
                key={index}
                className={`relative p-3 rounded-lg border transition-all duration-300 cursor-pointer ${
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

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-1">
              85%
            </div>
            <div className="text-gray-400 text-sm">Time Saved</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-1">
              360°
            </div>
            <div className="text-gray-400 text-sm">ALM Coverage</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-1">
              24/7
            </div>
            <div className="text-gray-400 text-sm">AI Monitoring</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-1">
              10x
            </div>
            <div className="text-gray-400 text-sm">Faster</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;