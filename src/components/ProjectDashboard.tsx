import {
  Code,
  GitBranch,
  Play,
  Settings,
  Target
} from 'lucide-react';
import React from 'react';

interface ALMCapability {
  id: string;
  title: string;
  description: string;
  position: 'top-left' | 'top-right' | 'center' | 'bottom-left' | 'bottom-right';
  icon: React.ReactNode;
}

const ProjectDashboard: React.FC = () => {
  const almCapabilities: ALMCapability[] = [
    {
      id: '1',
      title: 'AI-Driven Requirements Management',
      description: 'Capture, organize, and refine requirements with hierarchy, traceability, and instant AI-powered ingestion for total clarity from idea to execution.',
      position: 'top-left',
      icon: <Target className="w-6 h-6" />
    },
    {
      id: '2',
      title: 'Strategic Release & Predictive Planning',
      description: 'Efficiently prioritize, schedule, and manage resources with AI-driven risk analysis and real-time stakeholder updates for seamless delivery.',
      position: 'top-right',
      icon: <Settings className="w-6 h-6" />
    },
    {
      id: '3',
      title: 'No-Code & AI-Powered Test Authoring',
      description: 'Instantly generate and orchestrate robust manual and automated tests across platforms with intuitive, scriptless workflows and smart suggestions.',
      position: 'center',
      icon: <Code className="w-6 h-6" />
    },
    {
      id: '4',
      title: 'Scalable, Intelligent Test Execution',
      description: 'Accelerate parallel and cloud-based test execution, optimize runs with AI, and monitor results live for comprehensive quality assurance.',
      position: 'bottom-left',
      icon: <Play className="w-6 h-6" />
    },
    {
      id: '5',
      title: 'Integrated, Automated CI/CD Quality Gates',
      description: 'Seamlessly connect to your DevOps tools for pipeline-triggered testing, enforce release quality, and get real-time feedback and reporting at every stage.',
      position: 'bottom-right',
      icon: <GitBranch className="w-6 h-6" />
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="heading font-bold text-white">
          Why Choose SimplifyQA?
          </h2>
          <p className="subheading text-gray-300 max-w-4xl mx-auto mb-12">
          Streamline your entire development lifecycle with our comprehensive, AI-powered platform designed for modern teams who demand quality, speed, and reliability.
          </p>
        </div>

        {/* ALM Sections Layout */}
        <div className="max-w-6xl mx-auto">
          {/* Top Row - Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Section */}
            <div className="p-8" style={{ borderRight: 'rgba(255,255,255,.05) 1px solid', borderBottom: 'rgba(255,255,255,.05) 1px solid' }}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {almCapabilities[0].title}
                </h2>
                <p className="text-gray-400 text-sm mb-4">
                  {almCapabilities[0].description}
                </p>
              </div>
            </div>

            {/* Right Section */}
            <div className="p-8" style={{ borderBottom: 'rgba(255,255,255,.05) 1px solid' }}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {almCapabilities[1].title}
                </h2>
                <p className="text-gray-400 text-sm mb-4">
                  {almCapabilities[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* Center Full Width Section */}
          <div className="p-8 text-center" style={{ borderBottom: 'rgba(255,255,255,.05) 1px solid' }}>
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-white mb-4">
                {almCapabilities[2].title}
              </h2>
              <p className="text-gray-300 text-lg max-w-4xl mx-auto">
                {almCapabilities[2].description}
              </p>
            </div>
          </div>

          {/* Bottom Row - Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Bottom Section */}
            <div className="p-8" style={{ borderRight: 'rgba(255,255,255,.05) 1px solid' }}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {almCapabilities[3].title}
                </h2>
                <p className="text-gray-400 text-sm">
                  {almCapabilities[3].description}
                </p>
              </div>
            </div>

            {/* Right Bottom Section */}
            <div className="p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {almCapabilities[4].title}
                </h2>
                <p className="text-gray-400 text-sm">
                  {almCapabilities[4].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDashboard;
