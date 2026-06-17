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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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

      {/* Everything You Need in One Platform */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need in One Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From planning to deployment, SimplifyQA provides a unified solution that covers every aspect of your software development lifecycle.
            </p>
          </div>

          <div className="mb-16">
            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="space-y-8 flex flex-col">
                {/* Smarter Control */}
                <div className="group relative flex-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <Users className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Smarter Control</h3>
                        <p className="text-blue-600 font-medium text-sm">One sign-in for all roles</p>
                      </div>
                    </div>
                    <div className="space-y-3 flex-grow">
                      {[
                        "Custom team & project layouts with flexible field configuration",
                        "Organize by product lines and business units for scalability",
                        "Advanced role-based access control with granular permissions",
                        "Multi-tenant architecture for enterprise security"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start group/item">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 group-hover/item:scale-125 transition-transform duration-200"></div>
                          <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* AI Assistance */}
                <div className="group relative flex-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <Cpu className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">AI Assistance</h3>
                        <p className="text-purple-600 font-medium text-sm">AI-generated acceptance criteria</p>
                      </div>
                    </div>
                    <div className="space-y-3 flex-grow">
                      {[
                        "End-to-end self-healing with intelligent flakiness detection",
                        "AI assistant for smart test case generation and suggestions",
                        "Automated test optimization and performance enhancement",
                        "Machine learning-powered failure analysis and resolution"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start group/item">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2 group-hover/item:scale-125 transition-transform duration-200"></div>
                          <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Column */}
              <div className="space-y-8 flex flex-col">
                {/* Dynamic Test Data */}
                <div className="group relative flex-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <BarChart3 className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Dynamic Test Data</h3>
                        <p className="text-green-600 font-medium text-sm">Auto-generate data</p>
                      </div>
                    </div>
                    <div className="space-y-3 flex-grow">
                      {[
                        "Parameterize manual and automated tests with dynamic variables",
                        "Create reusable functions and components across projects",
                        "Smart data generation with realistic test datasets",
                        "Advanced data masking for security and compliance"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start group/item">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 group-hover/item:scale-125 transition-transform duration-200"></div>
                          <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Virtualization & Integrations */}
                <div className="group relative flex-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <GitBranch className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Virtualization & Integrations</h3>
                        <p className="text-cyan-600 font-medium text-sm">DevOps integration</p>
                      </div>
                    </div>
                    <div className="space-y-3 flex-grow">
                      {[
                        "Connect to Jenkins, Azure, GitLab, Jira",
                        "Advanced service virtualization capabilities",
                        "API mocking and simulation tools",
                        "Real-time integration monitoring"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start group/item">
                          <div className="w-2 h-2 bg-cyan-600 rounded-full mr-3 mt-2 group-hover/item:scale-125 transition-transform duration-200"></div>
                          <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8 flex flex-col">
                {/* Modern Execution */}
                <div className="group relative flex-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-600/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <Zap className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Modern Execution</h3>
                        <p className="text-orange-600 font-medium text-sm">Resume failed runs from any step</p>
                      </div>
                    </div>
                    <div className="space-y-3 flex-grow">
                      {[
                        "Unified manual and automation test suites in one platform",
                        "Effortless scheduling with remote execution capabilities",
                        "Automatic step-wise screenshots and detailed logging",
                        "Parallel execution with intelligent load balancing"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start group/item">
                          <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2 group-hover/item:scale-125 transition-transform duration-200"></div>
                          <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Powerful Reporting */}
                <div className="group relative flex-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <BarChart3 className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Powerful Reporting</h3>
                        <p className="text-indigo-600 font-medium text-sm">Drag-and-drop requirements</p>
                      </div>
                    </div>
                    <div className="space-y-3 flex-grow">
                      {[
                        "Role-based dashboards with fully customizable reports",
                        "Detailed step-level logs and custom notification systems",
                        "Real-time analytics with predictive insights and trends",
                        "Executive summaries and automated compliance reporting"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start group/item">
                          <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3 mt-2 group-hover/item:scale-125 transition-transform duration-200"></div>
                          <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
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