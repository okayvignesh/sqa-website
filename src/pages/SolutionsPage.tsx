import {
    ArrowRight,
    Building,
    CheckCircle,
    Globe,
    Rocket,
    Smartphone,
    Users,
    Zap
} from 'lucide-react';

import { useEffect } from 'react';
import { useScrollAnimations } from '../utils/useScrollAnimations';

const SolutionsPage = () => {
  useScrollAnimations();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const solutions = [
    {
      icon: <Building className="h-12 w-12 text-blue-600" />,
      title: "Enterprise Testing",
      description: "Comprehensive testing solutions for large-scale applications with advanced security and compliance requirements.",
      benefits: [
        "Scalable infrastructure for thousands of tests",
        "Advanced security and compliance features",
        "Custom integrations and workflows",
        "Dedicated support and training"
      ],
      image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      icon: <Users className="h-12 w-12 text-green-600" />,
      title: "Agile Teams", 
      description: "Streamlined testing workflows that integrate seamlessly with agile development practices and sprint cycles.",
      benefits: [
        "Sprint-aligned test planning",
        "Continuous testing integration",
        "Real-time collaboration tools",
        "Rapid feedback cycles"
      ],
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      icon: <Rocket className="h-12 w-12 text-purple-600" />,
      title: "DevOps Integration",
      description: "Seamlessly integrate testing into your DevOps pipeline with automated testing triggers and comprehensive reporting.",
      benefits: [
        "CI/CD pipeline integration",
        "Automated test execution",
        "Deployment quality gates",
        "Performance monitoring"
      ],
      image: "https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      icon: <Smartphone className="h-12 w-12 text-cyan-600" />,
      title: "Mobile Testing",
      description: "Comprehensive mobile application testing across devices, platforms, and network conditions.",
      benefits: [
        "Real device testing",
        "Cross-platform compatibility",
        "Performance testing",
        "Automated UI validation"
      ],
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    }
  ];

  const industries = [
    {
      name: "Financial Services",
      description: "Ensure security and compliance in financial applications",
      icon: <Building className="h-8 w-8 text-blue-600" />
    },
    {
      name: "Healthcare",
      description: "Meet regulatory requirements with validated testing processes",
      icon: <Globe className="h-8 w-8 text-green-600" />
    },
    {
      name: "E-commerce",
      description: "Optimize user experience across all customer touchpoints",
      icon: <Zap className="h-8 w-8 text-purple-600" />
    },
    {
      name: "Technology",
      description: "Scale testing for rapid product development cycles",
      icon: <Rocket className="h-8 w-8 text-cyan-600" />
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-on-scroll">
            Solutions Tailored for 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"> Your Team</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll animate-delay-200">
            Whether you're a startup or enterprise, SimplifyQA adapts to your unique testing requirements 
            and development workflow.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-10 animate-on-scroll ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              } ${index % 3 === 1 ? 'animate-delay-200' : index % 3 === 2 ? 'animate-delay-300' : ''}`}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="mb-6">
                  {solution.icon}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {solution.title}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {solution.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full rounded-2xl shadow-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SimplifyQA serves organizations across various industries with specialized testing requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {industry.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Find the Perfect Solution for Your Team
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Not sure which solution fits your needs? Let our experts help you design the perfect testing strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center">
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-blue-300 hover:border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
              View All Features
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;