import { ArrowRight, TrendingUp } from 'lucide-react';

import { useEffect } from 'react';
import SuccessStoriesCarousel from '../components/SuccessStoriesCarousel';
import { useScrollAnimations } from '../utils/useScrollAnimations';

const CustomerSuccessPage = () => {
  useScrollAnimations();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "QA Director",
      company: "TechCorp Global",
      content: "SimplifyQA reduced our testing time by 70% while improving coverage. The AI-powered features are game-changers for our team.",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      companyLogo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&fit=crop",
      metrics: [
        { label: "Time Saved", value: "70%" },
        { label: "Test Coverage", value: "95%" },
        { label: "Team Satisfaction", value: "9.8/10" }
      ]
    },
    {
      name: "Michael Chen", 
      role: "Lead Developer",
      company: "StartupXYZ",
      content: "The seamless CI/CD integration and intelligent test maintenance have transformed our development workflow. Couldn't imagine working without it.",
      avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      companyLogo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&fit=crop",
      metrics: [
        { label: "Deployment Speed", value: "5x faster" },
        { label: "Bug Detection", value: "85% earlier" },
        { label: "Developer Productivity", value: "+40%" }
      ]
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Engineering",
      company: "Enterprise Inc",
      content: "SimplifyQA's enterprise security and scalability features make it perfect for our needs. The support team is exceptional.",
      avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      companyLogo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&fit=crop",
      metrics: [
        { label: "Cost Reduction", value: "60%" },
        { label: "Quality Score", value: "98%" },
        { label: "Compliance", value: "100%" }
      ]
    }
  ];

  const caseStudies = [
    {
      company: "FinanceFirst Bank",
      industry: "Financial Services",
      challenge: "Needed to automate complex compliance testing while maintaining security standards",
      solution: "Implemented SimplifyQA's enterprise security features with custom compliance workflows",
      results: [
        "Reduced compliance testing time by 80%",
        "Achieved 100% audit pass rate",
        "Improved security posture"
      ],
      image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      company: "RetailMax E-commerce",
      industry: "E-commerce",
      challenge: "Peak traffic periods required extensive performance and load testing",
      solution: "Leveraged SimplifyQA's cloud infrastructure for scalable performance testing",
      results: [
        "Handled 10x traffic increase seamlessly",
        "Reduced page load times by 40%", 
        "Improved customer satisfaction by 25%"
      ],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      company: "HealthTech Solutions",
      industry: "Healthcare",
      challenge: "Required HIPAA-compliant testing for patient data systems",
      solution: "Deployed SimplifyQA with advanced security and audit logging capabilities",
      results: [
        "Achieved HIPAA compliance certification",
        "Reduced testing overhead by 65%",
        "Improved data security measures"
      ],
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    }
  ];

  const clientLogos = [
    "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&fit=crop",
    "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&fit=crop",
    "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&fit=crop",
    "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&fit=crop",
    "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&fit=crop",
    "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&fit=crop"
  ];

  return (
    <div className="pt-16 text-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0"></div>
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/12 via-transparent to-transparent opacity-30 pointer-events-none"></div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-gray-400 mb-6">
            CUSTOMER SUCCESS STORIES
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-6 leading-tight">
            Customer Success Stories
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how leading organizations are transforming their testing workflows and achieving
            remarkable results with SimplifyQA.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="relative py-16">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/15 via-transparent to-transparent opacity-20 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Detailed Case Studies
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Dive deep into how different organizations have solved their testing challenges with SimplifyQA.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="rounded-2xl shadow-[0_15px_45px_rgba(0,0,0,0.45)] border border-white/5 hover:border-cyan-400/60 transition-all duration-500 overflow-hidden group cursor-pointer transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                <img
                  src={study.image}
                  alt={study.company}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/15 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {study.industry}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <h3 className="text-2xl font-bold text-white mb-2">{study.company}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-lg font-bold text-white mb-2">Challenge</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-white mb-2">Solution</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-white mb-3">Key Results</h4>
                    <div className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-200 text-sm font-medium">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-purple-500 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center justify-center group-hover:shadow-lg">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gallery Navigation */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  className="w-3 h-3 rounded-full bg-white/20 hover:bg-cyan-400 transition-colors duration-200"
                ></button>
              ))}
            </div>
          </div>
          
          {/* View All Button */}
          <div className="text-center mt-8"></div>
        </div>
      </section>

      {/* Case Study Modal Overlay - Hidden by default */}
      <div className="hidden fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="p-8">
              <div className="mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Industry</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-2">Company Name</h2>
                <p className="text-gray-600">Detailed case study content would go here...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Original case studies section - now updated */}
      <section className="py-16 bg-white" style={{ display: 'none' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Detailed Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dive deep into how different organizations have solved their testing challenges with SimplifyQA.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <img
                  src={study.image}
                  alt={study.company}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-semibold mb-2">{study.industry}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{study.company}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    <strong>Challenge:</strong> {study.challenge}
                  </p>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    <strong>Solution:</strong> {study.solution}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-gray-900 text-sm">Key Results:</h4>
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-start">
                        <TrendingUp className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center text-sm">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  

      {/* Customer Support Section */}
      <section className="relative py-16">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/15 via-transparent to-transparent opacity-20 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Dedicated Customer Success
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Our customer success team works closely with you to ensure you're getting 
                maximum value from SimplifyQA. From onboarding to optimization, we're here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-cyan-400 mt-2 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Dedicated Success Manager</h3>
                    <p className="text-gray-400">Your dedicated point of contact for strategic guidance and support</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-cyan-400 mt-2 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">24/7 Technical Support</h3>
                    <p className="text-gray-400">Round-the-clock assistance when you need it most</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-cyan-400 mt-2 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Training & Best Practices</h3>
                    <p className="text-gray-400">Ongoing education to maximize your testing efficiency</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Customer Success Team"
                className="rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.45)] border border-white/5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Carousel */}
      <SuccessStoriesCarousel />

      {/* CTA Section */}
      <section className="relative py-16 bg-gray-900 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/15 via-transparent to-transparent opacity-20 pointer-events-none"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            See how SimplifyQA can transform your testing process and deliver measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://outlook.office.com/book/SimplifyQAMeeting@simplify3x.com/?ismsaljsauthenabled', '_blank')}
              className="text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center justify-center hover:scale-105"
              style={{
                background: 'linear-gradient(120deg, #3b82f6, #a855f7)',
                boxShadow: '0 10px 25px rgba(168, 85, 247, 0.25)'
              }}
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button onClick={() => window.open('https://outlook.office.com/book/SimplifyQAMeeting@simplify3x.com/?ismsaljsauthenabled', '_blank')} className="bg-purple-500 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center justify-center">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerSuccessPage;