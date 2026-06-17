import React, { useState } from 'react';
import Hero from '../components/Hero';
import { 
  Zap, 
  Shield, 
  BarChart3, 
  Cpu, 
  CheckCircle, 
  ArrowRight,
  Star,
  GitBranch,
  Users,
  FileText,
  Bug,
  Calendar,
  Target,
  Layers,
  Settings,
  TrendingUp
} from 'lucide-react';

const HomePage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeCategory, setActiveCategory] = useState('web');

  const features = [
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "AI-Powered Test Generation",
      description: "Automatically generate comprehensive test cases using machine learning algorithms that understand your application structure and user flows."
    },
    {
      icon: <Cpu className="h-8 w-8 text-blue-500" />,
      title: "Smart Test Maintenance",
      description: "Self-healing tests that automatically adapt to UI changes, reducing maintenance overhead by 70%."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Agile Management",
      description: "Streamline sprint planning, backlog management, and team collaboration with intelligent automation and real-time insights."
    },
    {
      icon: <GitBranch className="h-8 w-8 text-green-600" />,
      title: "Release Management", 
      description: "Orchestrate seamless releases with automated deployment pipelines, version control, and zero-downtime deployments."
    },
    {
      icon: <Bug className="h-8 w-8 text-red-600" />,
      title: "Defect Management",
      description: "Intelligent bug tracking, prioritization, and resolution with automated detection and AI-driven insights for faster fixes."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-500" />,
      title: "Lightning Fast Execution",
      description: "Execute thousands of tests simultaneously with parallel processing and cloud-based infrastructure."
    },
    {
      icon: <Target className="h-8 w-8 text-orange-500" />,
      title: "Cross-Platform Testing",
      description: "Test web, mobile, and API applications across multiple browsers, devices, and operating systems from one platform."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-green-500" />,
      title: "Reports & Dashboard",
      description: "Real-time analytics, executive dashboards, and predictive insights to monitor project health and team performance."
    },
    {
      icon: <Shield className="h-8 w-8 text-red-500" />,
      title: "Enterprise Security",
      description: "SOC 2 compliant with end-to-end encryption, role-based access control, and comprehensive audit logs."
    },
    {
      icon: <Layers className="h-8 w-8 text-cyan-500" />,
      title: "Seamless CI/CD Integration",
      description: "Native integrations with Jenkins, GitHub Actions, GitLab CI, and 200+ other tools in your DevOps pipeline."
    },
    {
      icon: <FileText className="h-8 w-8 text-indigo-500" />,
      title: "Requirements Management",
      description: "Centralized requirement tracking, traceability matrix, and automated validation to ensure complete coverage."
    },
    {
      icon: <Calendar className="h-8 w-8 text-pink-500" />,
      title: "Team Collaboration",
      description: "Built-in collaboration tools with real-time sharing, comments, and notifications for distributed teams."
    }
  ];

  const almFeatures = [
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Agile Management",
      description: "Streamline sprint planning, backlog management, and team collaboration with intelligent automation and real-time insights."
    },
    {
      icon: <GitBranch className="h-8 w-8 text-green-500" />,
      title: "Release Management",
      description: "Orchestrate seamless releases with automated deployment pipelines, version control, and zero-downtime deployments."
    },
    {
      icon: <Settings className="h-8 w-8 text-purple-500" />,
      title: "Test Automation",
      description: "AI-powered test generation, execution, and maintenance with cross-platform support and intelligent self-healing capabilities."
    },
    {
      icon: <Bug className="h-8 w-8 text-red-500" />,
      title: "Defect Management",
      description: "Intelligent bug tracking, prioritization, and resolution with automated detection and AI-driven insights for faster fixes."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-cyan-500" />,
      title: "Reports & Dashboard",
      description: "Real-time analytics, executive dashboards, and predictive insights to monitor project health and team performance."
    },
    {
      icon: <FileText className="h-8 w-8 text-orange-500" />,
      title: "Requirements Management",
      description: "Centralized requirement tracking, traceability matrix, and automated validation to ensure complete coverage."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "QA Director",
      company: "TechCorp",
      content: "SimplifyQA reduced our testing time by 70% while improving coverage. Game-changer for our team.",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      company: "StartupXYZ", 
      content: "The AI capabilities are incredible. Our test maintenance went from hours to minutes.",
      avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Emily Rodriguez",
      role: "QA Manager",
      company: "Enterprise Inc",
      content: "Best testing platform we've used. The integrations work seamlessly with our existing stack.",
      avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  return (
    <div>
      <Hero />

      {/* Why Choose SimplifyQA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose SimplifyQA?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Streamline your entire development lifecycle with our comprehensive, AI-powered platform designed for modern teams who demand quality, speed, and reliability.
            </p>
          </div>
          
          {/* Interactive Feature Timeline */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 rounded-full hidden lg:block"></div>
            
            {/* Feature Items */}
            <div className="space-y-16">
              {features.map((feature, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-16`}>
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-500 rounded-full z-10 hidden lg:block shadow-lg">
                    <div className="absolute inset-1 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Feature Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:text-left lg:pl-16'} text-center lg:text-left`}>
                    <div className="group">
                      {/* Icon Container */}
                      <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${
                        index % 4 === 0 ? 'from-blue-500 to-cyan-500' :
                        index % 4 === 1 ? 'from-purple-500 to-pink-500' :
                        index % 4 === 2 ? 'from-green-500 to-emerald-500' :
                        'from-orange-500 to-red-500'
                      } shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 mb-6`}>
                        <div className="text-white text-2xl">
                          {React.cloneElement(feature.icon, { className: "w-10 h-10" })}
                        </div>
                      </div>
                      
                      {/* Feature Details */}
                      <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 max-w-lg mx-auto lg:mx-0">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-base">
                          {feature.description}
                        </p>
                        
                        {/* Feature Number */}
                        <div className={`absolute -top-4 ${index % 2 === 0 ? 'lg:-right-4' : 'lg:-left-4'} -right-4 w-8 h-8 rounded-full bg-gradient-to-br ${
                          index % 4 === 0 ? 'from-blue-500 to-cyan-500' :
                          index % 4 === 1 ? 'from-purple-500 to-pink-500' :
                          index % 4 === 2 ? 'from-green-500 to-emerald-500' :
                          'from-orange-500 to-red-500'
                        } text-white text-sm font-bold flex items-center justify-center shadow-lg`}>
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Visual Element */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:pl-16' : 'lg:pr-16'} mt-8 lg:mt-0`}>
                    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${
                      index % 4 === 0 ? 'from-blue-50 to-cyan-50' :
                      index % 4 === 1 ? 'from-purple-50 to-pink-50' :
                      index % 4 === 2 ? 'from-green-50 to-emerald-50' :
                      'from-orange-50 to-red-50'
                    } p-8 h-64 flex items-center justify-center group hover:scale-105 transition-transform duration-500`}>
                      {/* Abstract Visual Pattern */}
                      <div className="relative">
                        <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${
                          index % 4 === 0 ? 'from-blue-200 to-cyan-200' :
                          index % 4 === 1 ? 'from-purple-200 to-pink-200' :
                          index % 4 === 2 ? 'from-green-200 to-emerald-200' :
                          'from-orange-200 to-red-200'
                        } opacity-60 group-hover:opacity-80 transition-opacity duration-500`}></div>
                        <div className={`absolute top-4 left-4 w-24 h-24 rounded-full bg-gradient-to-br ${
                          index % 4 === 0 ? 'from-blue-300 to-cyan-300' :
                          index % 4 === 1 ? 'from-purple-300 to-pink-300' :
                          index % 4 === 2 ? 'from-green-300 to-emerald-300' :
                          'from-orange-300 to-red-300'
                        } opacity-40 group-hover:opacity-60 transition-opacity duration-500 group-hover:rotate-45`}></div>
                        <div className={`absolute top-8 left-8 w-16 h-16 rounded-full bg-gradient-to-br ${
                          index % 4 === 0 ? 'from-blue-400 to-cyan-400' :
                          index % 4 === 1 ? 'from-purple-400 to-pink-400' :
                          index % 4 === 2 ? 'from-green-400 to-emerald-400' :
                          'from-orange-400 to-red-400'
                        } opacity-20 group-hover:opacity-40 transition-opacity duration-500 group-hover:-rotate-45`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-6 bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">10x</div>
                <div className="text-gray-600 text-sm">Faster Development</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">85%</div>
                <div className="text-gray-600 text-sm">Cost Reduction</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">95%</div>
                <div className="text-gray-600 text-sm">Quality Improvement</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">24/7</div>
                <div className="text-gray-600 text-sm">AI Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered ALM Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ease your ALM with 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> AI</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transform your Application Lifecycle Management with intelligent automation that learns, adapts, and optimizes your entire development process.
            </p>
          </div>

          <div className="space-y-16">
            {/* Feature 1: AI-Powered User Story Generation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  AI-Powered User Story Generation
                </h3>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-red-600 mb-2">Problem:</h4>
                  <p className="text-gray-600 mb-4">
                    Manual user story creation is time-consuming and often lacks consistency and clarity, leading to miscommunication and project delays.
                  </p>
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">Solution:</h4>
                  <p className="text-gray-600 mb-6">
                    Harness advanced AI algorithms to transform raw requirements into comprehensive, well-structured user stories. This feature intelligently captures requirements, including acceptance criteria, to create a backlog that is clear, consistent, and ready for development.
                  </p>
                  <h4 className="text-lg font-semibold text-green-600 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <div>
                        <span className="font-medium text-gray-900">Accelerate Agile Workflows:</span>
                        <span className="text-gray-600"> Drastically reduce backlog grooming time and get to development faster.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <div>
                        <span className="font-medium text-gray-900">Improve Collaboration:</span>
                        <span className="text-gray-600"> Provide a single source of truth that enhances communication between product owners, developers, and testers.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <div>
                        <span className="font-medium text-gray-900">Enhance Precision:</span>
                        <span className="text-gray-600"> Ensure requirements are precise and test-ready from day one, improving overall SDLC efficiency.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Smart Story Creation</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: Automated Generation of Manual Test Cases */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Auto Test Generation</h4>
                  </div>
                </div>
              </div>
              <div className="order-2">
                <div className="bg-gradient-to-br from-green-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Automated Generation of Manual Test Cases
                </h3>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-red-600 mb-2">Problem:</h4>
                  <p className="text-gray-600 mb-4">
                    Manually writing test cases is a laborious process prone to human error, which can lead to inadequate test coverage and missed bugs.
                  </p>
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">Solution:</h4>
                  <p className="text-gray-600 mb-6">
                    Leverage AI to automatically generate detailed manual test cases directly from your user stories and requirements. The AI analyzes functional specifications to create test cases that are accurate, comprehensive, and perfectly aligned with project goals.
                  </p>
                  <h4 className="text-lg font-semibold text-green-600 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <div>
                        <span className="font-medium text-gray-900">Reduce Human Error:</span>
                        <span className="text-gray-600"> Automate test planning to eliminate mistakes and inconsistencies.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <div>
                        <span className="font-medium text-gray-900">Expedite QA Cycles:</span>
                        <span className="text-gray-600"> Drastically cut down on the time spent on test case design.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <div>
                        <span className="font-medium text-gray-900">Boost Test Coverage:</span>
                        <span className="text-gray-600"> Ensure a high level of coverage to validate all functional specifications.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Feature 3: Self-Healing Test Automation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Self-Healing Test Automation
                </h3>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-red-600 mb-2">Problem:</h4>
                  <p className="text-gray-600 mb-4">
                    Test automation scripts are notoriously brittle, breaking with every small UI change and requiring constant, time-consuming maintenance.
                  </p>
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">Solution:</h4>
                  <p className="text-gray-600 mb-6">
                    Our proprietary AI engine continuously monitors and repairs broken test scripts. It identifies UI changes and dynamically corrects the test script to ensure it remains stable and functional without any manual intervention.
                  </p>
                  <h4 className="text-lg font-semibold text-green-600 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <div>
                        <span className="font-medium text-gray-900">Minimize Maintenance Overhead:</span>
                        <span className="text-gray-600"> Drastically reduce the time and resources spent on fixing flaky tests.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <div>
                        <span className="font-medium text-gray-900">Enhance Test Stability:</span>
                        <span className="text-gray-600"> Ensure your test suite is reliable and robust across fast-evolving software environments.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <div>
                        <span className="font-medium text-gray-900">Accelerate Deployment:</span>
                        <span className="text-gray-600"> Maintain continuous testing within your CI/CD pipelines, enabling faster, more confident deployments.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Self-Healing Tests</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 4: Integrated AI Co-pilot */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">AI Co-pilot</h4>
                  </div>
                </div>
              </div>
              <div className="order-2">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-white text-2xl font-bold">4</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Integrated AI Co-pilot
                </h3>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-red-600 mb-2">Problem:</h4>
                  <p className="text-gray-600 mb-4">
                    Writing test scripts is a complex process that can be hindered by syntax errors, debugging challenges, and a lack of optimization knowledge.
                  </p>
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">Solution:</h4>
                  <p className="text-gray-600 mb-6">
                    The AI co-pilot provides real-time, contextual assistance during test script development. It offers intelligent code completion, detects errors as you type, and suggests code optimization tips to improve performance and readability.
                  </p>
                  <h4 className="text-lg font-semibold text-green-600 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <div>
                        <span className="font-medium text-gray-900">Boost Productivity:</span>
                        <span className="text-gray-600"> Write, debug, and optimize test code faster than ever before.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <div>
                        <span className="font-medium text-gray-900">Improve Script Quality:</span>
                        <span className="text-gray-600"> Produce high-quality, maintainable scripts with built-in best practices.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <div>
                        <span className="font-medium text-gray-900">Streamline Workflows:</span>
                        <span className="text-gray-600"> Accelerate test automation within your CI/CD processes.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Feature 5: AI-Generated Test Data */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-white text-2xl font-bold">5</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  AI-Generated Test Data
                </h3>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-red-600 mb-2">Problem:</h4>
                  <p className="text-gray-600 mb-4">
                    Creating diverse, realistic, and compliant test data is a major bottleneck that can expose sensitive information and limit test coverage.
                  </p>
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">Solution:</h4>
                  <p className="text-gray-600 mb-6">
                    Our AI automatically generates diverse and tailored test data sets for your specific application scenarios. It can create everything from boundary cases to complex user data while ensuring data privacy and regulatory compliance.
                  </p>
                  <h4 className="text-lg font-semibold text-green-600 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <div>
                        <span className="font-medium text-gray-900">Maximize Test Coverage:</span>
                        <span className="text-gray-600"> Ensure your application is robust by testing with comprehensive and realistic data.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <div>
                        <span className="font-medium text-gray-900">Ensure Regulatory Compliance:</span>
                        <span className="text-gray-600"> Mask sensitive information and generate synthetic data to comply with standards like GDPR and HIPAA.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <div>
                        <span className="font-medium text-gray-900">Reduce Risks:</span>
                        <span className="text-gray-600"> Eliminate the need to use production data, thereby protecting user privacy.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Smart Test Data</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 6: AI-Driven Regression Testing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Smart Regression</h4>
                  </div>
                </div>
              </div>
              <div className="order-2">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-white text-2xl font-bold">6</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  AI-Driven Regression Testing
                </h3>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-red-600 mb-2">Problem:</h4>
                  <p className="text-gray-600 mb-4">
                    Exhaustive regression testing is time-consuming and expensive, often delaying release cycles.
                  </p>
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">Solution:</h4>
                  <p className="text-gray-600 mb-6">
                    Our AI-powered analytics engine identifies the highest-risk test cases based on change impact analysis, business risk, and historical defect trends. It intelligently selects the most critical tests to run, optimizing resource use and execution time.
                  </p>
                  <h4 className="text-lg font-semibold text-green-600 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <div>
                        <span className="font-medium text-gray-900">Optimize Resources:</span>
                        <span className="text-gray-600"> Focus your testing efforts where they matter most.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <div>
                        <span className="font-medium text-gray-900">Accelerate Release Cycles:</span>
                        <span className="text-gray-600"> Run only the necessary tests to ensure quality, enabling faster releases.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <div>
                        <span className="font-medium text-gray-900">Ensure High-Quality Delivery:</span>
                        <span className="text-gray-600"> Minimize risk and confidently deploy software with continuous regression optimization.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Feature 7: AI Chatbot Assistant */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-teal-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-white text-2xl font-bold">7</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  AI Chatbot Assistant
                </h3>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-red-600 mb-2">Problem:</h4>
                  <p className="text-gray-600 mb-4">
                    Teams face communication bottlenecks and struggle to find quick answers or documentation, slowing down defect resolution.
                  </p>
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">Solution:</h4>
                  <p className="text-gray-600 mb-6">
                    The integrated AI chatbot is a conversational assistant that understands natural language queries. It provides instant answers, access to documentation, and troubleshooting help for testers and developers.
                  </p>
                  <h4 className="text-lg font-semibold text-green-600 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <div>
                        <span className="font-medium text-gray-900">Boost Team Productivity:</span>
                        <span className="text-gray-600"> Get real-time, contextual help to resolve issues on the fly.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <div>
                        <span className="font-medium text-gray-900">Enhance Collaboration:</span>
                        <span className="text-gray-600"> Provide a central point for guidance, reducing bottlenecks and improving communication.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <div>
                        <span className="font-medium text-gray-900">Accelerate Resolution:</span>
                        <span className="text-gray-600"> Get faster defect resolution and seamless process guidance.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-br from-teal-100 to-green-100 rounded-3xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-teal-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">AI Assistant</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your ALM with AI?</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Experience the power of AI-driven Application Lifecycle Management and see how it can revolutionize your development process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-blue-300 hover:border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
                  Schedule AI Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Automation Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive automation support across every technology in your stack. One platform, unlimited possibilities.
            </p>
          </div>

          {/* Interactive Category Tabs */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                { id: 'web', name: 'Web Automation', subtitle: 'Headless & Incognito', color: 'blue', count: '5 Browsers' },
                { id: 'db', name: 'DB Automation', subtitle: 'SQL & NoSQL', color: 'green', count: '7 Systems' },
                { id: 'desktop', name: 'Desktop', subtitle: 'Legacy & Modern', color: 'purple', count: '6 Platforms' },
                { id: 'enterprise', name: 'Enterprise Applications', subtitle: 'ERP & CRM', color: 'orange', count: '7 Applications' },
                { id: 'mobile', name: 'Mobile Automation', subtitle: 'Native & Hybrid', color: 'pink', count: '2 Platforms' },
                { id: 'api', name: 'API Automation', subtitle: 'REST & SOAP', color: 'cyan', count: '2 Protocols' }
              ].map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`group relative px-8 py-6 rounded-2xl font-semibold transition-all duration-500 transform ${
                    activeCategory === category.id
                      ? `bg-gradient-to-br from-${category.color}-500 to-${category.color}-700 text-white shadow-2xl scale-110 -translate-y-2`
                      : `bg-gradient-to-br from-${category.color}-50 to-${category.color}-100 text-${category.color}-700 hover:from-${category.color}-100 hover:to-${category.color}-200 hover:scale-105 shadow-lg`
                  }`}
                >
                  <div className="text-lg font-bold">{category.name}</div>
                  <div className="text-sm opacity-80">{category.subtitle}</div>
                  <div className="text-xs mt-1 opacity-70">{category.count}</div>
                  
                  {activeCategory === category.id && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rotate-45"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Content Display */}
          <div className="relative min-h-[600px]">
            {/* Web Automation */}
            {activeCategory === 'web' && (
              <div className="animate-slideIn">
                <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 rounded-3xl p-12 shadow-2xl border border-blue-200">
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full font-bold text-lg mb-4">
                      🌐 Web Automation
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Cross-Browser Excellence</h3>
                    <p className="text-lg text-gray-600">Headless & Incognito Support • Real Browser Testing • Cloud Infrastructure</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {[
                      { name: 'Chrome', icon: '🌐', color: 'from-blue-500 to-green-500', market: '65%', features: ['V8 Engine', 'DevTools', 'Extensions'] },
                      { name: 'Firefox', icon: '🦊', color: 'from-orange-500 to-red-500', market: '18%', features: ['Gecko Engine', 'Privacy Focus', 'Developer Tools'] },
                      { name: 'Edge', icon: '🔷', color: 'from-blue-600 to-cyan-600', market: '10%', features: ['Chromium Base', 'Microsoft Integration', 'Enterprise'] },
                      { name: 'Safari', icon: '🧭', color: 'from-blue-400 to-purple-500', market: '5%', features: ['WebKit Engine', 'macOS/iOS', 'Privacy'] },
                      { name: 'Internet Explorer', icon: '🌍', color: 'from-blue-500 to-blue-700', market: '2%', features: ['Legacy Support', 'Enterprise', 'Compatibility'] }
                    ].map((browser, index) => (
                      <div key={index} className="group">
                        <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-2 border-blue-100 hover:border-blue-300">
                          <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${browser.color} flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                            {browser.icon}
                          </div>
                          <h4 className="text-xl font-bold text-gray-900 text-center mb-3">{browser.name}</h4>
                          <div className="text-center mb-4">
                            <span className="text-sm text-gray-500">Market Share</span>
                            <div className="text-2xl font-bold text-blue-600">{browser.market}</div>
                          </div>
                          <div className="space-y-1">
                            {browser.features.map((feature, idx) => (
                              <div key={idx} className="text-center">
                                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Database Automation */}
            {activeCategory === 'db' && (
              <div className="animate-slideIn">
                <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 rounded-3xl p-12 shadow-2xl border border-green-200">
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-full font-bold text-lg mb-4">
                      🗄️ Database Automation
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Complete Database Coverage</h3>
                    <p className="text-lg text-gray-600">SQL & NoSQL • Data Validation • Performance Testing • Schema Management</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      { name: 'MySQL', icon: '🐬', color: 'from-blue-600 to-blue-800', type: 'Relational', usage: '39%' },
                      { name: 'Oracle', icon: '🔴', color: 'from-red-600 to-red-800', type: 'Enterprise', usage: '21%' },
                      { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-500 to-indigo-600', type: 'Open Source', usage: '15%' },
                      { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-green-700', type: 'NoSQL', usage: '8%' },
                      { name: 'DB2', icon: '💙', color: 'from-blue-700 to-blue-900', type: 'Mainframe', usage: '5%' },
                      { name: 'SQL Server', icon: '🟦', color: 'from-red-600 to-orange-600', type: 'Microsoft', usage: '7%' },
                      { name: 'Siebel', icon: '🔷', color: 'from-blue-600 to-cyan-600', type: 'CRM DB', usage: '5%' }
                    ].map((db, index) => (
                      <div key={index} className="group">
                        <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-2 border-green-100 hover:border-green-300">
                          <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${db.color} flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                            {db.icon}
                          </div>
                          <h4 className="text-xl font-bold text-gray-900 text-center mb-3">{db.name}</h4>
                          <div className="text-center mb-4">
                            <span className="text-sm text-gray-500">Market Usage</span>
                            <div className="text-2xl font-bold text-green-600">{db.usage}</div>
                          </div>
                          <div className="text-center">
                            <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">{db.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Desktop Automation */}
            {activeCategory === 'desktop' && (
              <div className="animate-slideIn">
                <div className="bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100 rounded-3xl p-12 shadow-2xl border border-purple-200">
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-full font-bold text-lg mb-4">
                      🖥️ Desktop Automation
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Legacy & Modern Applications</h3>
                    <p className="text-lg text-gray-600">Cross-Platform Support • Legacy System Integration • Modern Framework Testing</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                      { name: 'Java', icon: '☕', color: 'from-orange-500 to-red-600', platform: 'Cross-Platform', year: '1995' },
                      { name: 'Mainframe', icon: '🖥️', color: 'from-gray-600 to-gray-800', platform: 'Legacy Enterprise', year: '1960s' },
                      { name: '.NET', icon: '🔷', color: 'from-blue-500 to-purple-600', platform: 'Windows', year: '2002' },
                      { name: 'Silverlight', icon: '✨', color: 'from-gray-500 to-blue-600', platform: 'Web/Desktop', year: '2007' },
                      { name: 'Flex', icon: '⚡', color: 'from-red-500 to-pink-600', platform: 'Adobe RIA', year: '2004' },
                      { name: 'Java Applet', icon: '🌐', color: 'from-orange-600 to-yellow-600', platform: 'Browser Plugin', year: '1995' }
                    ].map((tech, index) => (
                      <div key={index} className="group">
                        <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-2 border-purple-100 hover:border-purple-300">
                          <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                            {tech.icon}
                          </div>
                          <h4 className="text-xl font-bold text-gray-900 text-center mb-3">{tech.name}</h4>
                          <div className="text-center mb-4">
                            <span className="text-sm text-gray-500">Since</span>
                            <div className="text-lg font-bold text-purple-600">{tech.year}</div>
                          </div>
                          <div className="text-center">
                            <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">{tech.platform}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Enterprise Applications */}
            {activeCategory === 'enterprise' && (
              <div className="animate-slideIn">
                <div className="bg-gradient-to-br from-orange-50 via-red-50 to-orange-100 rounded-3xl p-12 shadow-2xl border border-orange-200">
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-full font-bold text-lg mb-4">
                      🏢 Enterprise Applications
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Mission-Critical Systems</h3>
                    <p className="text-lg text-gray-600">ERP • CRM • Business Applications • Custom Enterprise Solutions</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      { name: 'SAP', icon: '🏢', color: 'from-blue-600 to-blue-800', category: 'ERP Leader', market: '#1 ERP' },
                      { name: 'Oracle Fusion', icon: '🔴', color: 'from-red-600 to-orange-600', category: 'Cloud ERP', market: 'Enterprise' },
                      { name: 'ORMB', icon: '⚡', color: 'from-red-500 to-red-700', category: 'Billing System', market: 'Utilities' },
                      { name: 'Salesforce', icon: '☁️', color: 'from-blue-500 to-cyan-500', category: 'CRM Leader', market: '#1 CRM' },
                      { name: 'Siebel CRM', icon: '🔷', color: 'from-blue-600 to-indigo-600', category: 'Enterprise CRM', market: 'Legacy' },
                      { name: 'MS Dynamics', icon: '🔵', color: 'from-blue-600 to-purple-600', category: 'ERP/CRM Suite', market: 'Microsoft' },
                      { name: 'Pega', icon: '🎯', color: 'from-blue-500 to-teal-600', category: 'BPM Platform', market: 'Process' }
                    ].map((app, index) => (
                      <div key={index} className="group">
                        <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-2 border-orange-100 hover:border-orange-300">
                          <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${app.color} flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                            {app.icon}
                          </div>
                          <h4 className="text-xl font-bold text-gray-900 text-center mb-3">{app.name}</h4>
                          <div className="text-center mb-4">
                            <span className="text-sm text-gray-500">Position</span>
                            <div className="text-lg font-bold text-orange-600">{app.market}</div>
                          </div>
                          <div className="text-center">
                            <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium">{app.category}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Mobile Automation */}
            {activeCategory === 'mobile' && (
              <div className="animate-slideIn">
                <div className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 rounded-3xl p-12 shadow-2xl border border-pink-200">
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-full font-bold text-lg mb-4">
                      📱 Mobile Automation
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Native & Hybrid Apps</h3>
                    <p className="text-lg text-gray-600">Real Device Testing • Cloud Device Farm • Performance Monitoring</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
                    {[
                      { 
                        name: 'Android', 
                        icon: '🤖', 
                        color: 'from-green-500 to-green-700', 
                        share: '71%', 
                        devices: '24,000+',
                        features: ['Native Apps', 'Hybrid Apps', 'Real Devices', 'Emulators']
                      },
                      { 
                        name: 'iOS', 
                        icon: '📱', 
                        color: 'from-gray-700 to-gray-900', 
                        share: '28%', 
                        devices: '15+',
                        features: ['Native Apps', 'Hybrid Apps', 'Real Devices', 'Simulators']
                      }
                    ].map((platform, index) => (
                      <div key={index} className="group">
                        <div className="bg-white rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-6 border-2 border-pink-100 hover:border-pink-300">
                          <div className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${platform.color} flex items-center justify-center text-6xl mb-8 mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}>
                            {platform.icon}
                          </div>
                          <h4 className="text-3xl font-bold text-gray-900 text-center mb-6">{platform.name}</h4>
                          <div className="grid grid-cols-2 gap-6 mb-6">
                            <div className="text-center">
                              <span className="text-sm text-gray-500">Market Share</span>
                              <div className="text-2xl font-bold text-pink-600">{platform.share}</div>
                            </div>
                            <div className="text-center">
                              <span className="text-sm text-gray-500">Device Models</span>
                              <div className="text-2xl font-bold text-pink-600">{platform.devices}</div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            {platform.features.map((feature, idx) => (
                              <div key={idx} className="text-center">
                                <span className="text-sm bg-pink-100 text-pink-700 px-3 py-1 rounded-full font-medium">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* API Automation */}
            {activeCategory === 'api' && (
              <div className="animate-slideIn">
                <div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-100 rounded-3xl p-12 shadow-2xl border border-cyan-200">
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white rounded-full font-bold text-lg mb-4">
                      🔗 API Automation
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Complete API Testing</h3>
                    <p className="text-lg text-gray-600">RESTful Services • SOAP Web Services • GraphQL • Microservices Architecture</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
                    {[
                      { 
                        name: 'REST', 
                        icon: '🔗', 
                        color: 'from-purple-600 to-purple-800', 
                        usage: '85%', 
                        features: ['JSON/XML Support', 'HTTP Methods', 'Stateless Design', 'Microservices']
                      },
                      { 
                        name: 'SOAP', 
                        icon: '🧼', 
                        color: 'from-blue-500 to-cyan-600', 
                        usage: '15%', 
                        features: ['XML Protocol', 'WSDL Support', 'Enterprise Security', 'Legacy Systems']
                      }
                    ].map((protocol, index) => (
                      <div key={index} className="group">
                        <div className="bg-white rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-6 border-2 border-cyan-100 hover:border-cyan-300">
                          <div className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${protocol.color} flex items-center justify-center text-6xl mb-8 mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}>
                            {protocol.icon}
                          </div>
                          <h4 className="text-3xl font-bold text-gray-900 text-center mb-6">{protocol.name}</h4>
                          <div className="text-center mb-6">
                            <span className="text-sm text-gray-500">Industry Usage</span>
                            <div className="text-3xl font-bold text-cyan-600">{protocol.usage}</div>
                          </div>
                          <div className="space-y-3">
                            {protocol.features.map((feature, idx) => (
                              <div key={idx} className="text-center">
                                <span className="text-sm bg-cyan-100 text-cyan-700 px-3 py-2 rounded-full font-medium">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Bottom Statistics Panel */}
          <div className="mt-16 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 rounded-3xl p-12 text-white shadow-2xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Complete Technology Coverage</h3>
              <p className="text-xl text-gray-300">One unified platform for all your automation needs across every technology stack</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              <div className="group">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">29+</div>
                <div className="text-gray-300 text-lg">Technologies Supported</div>
              </div>
              <div className="group">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">6</div>
                <div className="text-gray-300 text-lg">Automation Categories</div>
              </div>
              <div className="group">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-gray-300 text-lg">Platform Coverage</div>
              </div>
              <div className="group">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">0</div>
                <div className="text-gray-300 text-lg">Setup Complexity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transform Your Testing Strategy
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                From test creation to execution and reporting, SimplifyQA provides everything 
                your team needs to deliver quality software at scale.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Reduce manual testing effort by 80%",
                  "Seamless CI/CD pipeline integration", 
                  "Real-time collaboration for distributed teams",
                  "Advanced AI for test optimization",
                  "Comprehensive cross-platform support"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center">
                Explore Features
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Testing Dashboard"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Leading Teams
            </h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              See how SimplifyQA is helping teams worldwide deliver better software faster.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Testing?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Join thousands of teams who trust SimplifyQA to deliver quality software faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-gray-600 hover:border-blue-400 text-white hover:text-blue-400 px-8 py-3 rounded-lg font-semibold transition-all">
              Request Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;