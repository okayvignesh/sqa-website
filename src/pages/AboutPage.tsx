import React from 'react';
import { Target, Users, Award, ArrowRight, Linkedin } from 'lucide-react';

const AboutPage = () => {
  const team = [
    {
      name: "Alex Rivera",
      role: "CEO & Co-Founder",
      bio: "Former VP of Engineering at TestTech with 15+ years in quality assurance and test automation.",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Dr. Sarah Kim",
      role: "CTO & Co-Founder", 
      bio: "PhD in Computer Science, former Principal Engineer at Google focusing on testing infrastructure.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Marcus Johnson",
      role: "VP of Engineering",
      bio: "Led testing teams at Microsoft and Amazon, expert in scalable testing architectures.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Elena Rodriguez",
      role: "VP of Customer Success",
      bio: "15+ years helping enterprise customers optimize their testing and quality processes.",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Quality First",
      description: "We believe quality software starts with quality testing. Every decision we make prioritizes helping our customers deliver better products."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Customer Success",
      description: "Your success is our success. We're committed to providing the tools, support, and expertise needed to achieve your testing goals."
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: "Innovation",
      description: "We continuously push the boundaries of what's possible in testing automation, leveraging the latest technologies and methodologies."
    }
  ];

  const milestones = [
    { year: "2019", title: "Company Founded", description: "SimplifyQA was born from the frustration of complex testing workflows." },
    { year: "2020", title: "First Enterprise Customer", description: "Signed our first Fortune 500 customer and proved enterprise viability." },
    { year: "2021", title: "AI Integration", description: "Launched AI-powered test generation, revolutionizing automated testing." },
    { year: "2022", title: "Series A Funding", description: "Raised $25M Series A to accelerate product development and growth." },
    { year: "2023", title: "Global Expansion", description: "Expanded operations to serve customers across North America and Europe." },
    { year: "2024", title: "1M+ Tests Daily", description: "Platform now processes over 1 million test executions daily." }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Building the Future of 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"> Testing</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Founded by testing experts who understand the challenges of delivering quality software at scale. 
                We're on a mission to simplify testing for every development team worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  Join Our Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <button className="border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition-all">
                  Our Story
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="SimplifyQA Team"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driven by a commitment to excellence, innovation, and customer success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced leaders driving SimplifyQA's vision and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 text-center group">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>
                <button className="text-blue-600 hover:text-blue-700 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Map */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Global Presence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving customers worldwide with local expertise and global reach across 8 major regions
            </p>
          </div>
          
          {/* Interactive World Map */}
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 mb-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5"></div>
            
            {/* SVG World Map */}
            <div className="relative">
              <svg viewBox="0 0 1000 500" className="w-full h-auto max-h-96">
                {/* World Map Base */}
                <defs>
                  <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.8" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Simplified World Map Shapes */}
                {/* North America */}
                <path d="M50 80 L200 70 L220 120 L180 180 L120 190 L80 150 Z" 
                      fill="url(#mapGradient)" 
                      className="hover:opacity-80 transition-opacity cursor-pointer"
                      data-region="North America" />
                
                {/* South America */}
                <path d="M150 220 L200 210 L220 280 L200 380 L160 390 L140 320 Z" 
                      fill="url(#mapGradient)" 
                      className="hover:opacity-80 transition-opacity cursor-pointer"
                      data-region="South America" />
                
                {/* Europe */}
                <path d="M420 60 L520 50 L540 100 L500 130 L450 120 L430 90 Z" 
                      fill="url(#mapGradient)" 
                      className="hover:opacity-80 transition-opacity cursor-pointer"
                      data-region="Europe" />
                
                {/* Africa */}
                <path d="M450 140 L550 130 L570 250 L540 350 L480 360 L460 280 Z" 
                      fill="url(#mapGradient)" 
                      className="hover:opacity-80 transition-opacity cursor-pointer"
                      data-region="Africa" />
                
                {/* Middle East */}
                <path d="M550 120 L620 110 L640 160 L610 200 L570 190 L560 150 Z" 
                      fill="url(#mapGradient)" 
                      className="hover:opacity-80 transition-opacity cursor-pointer"
                      data-region="Middle East" />
                
                {/* South Asia */}
                <path d="M620 160 L720 150 L740 220 L700 250 L650 240 L630 200 Z" 
                      fill="url(#mapGradient)" 
                      className="hover:opacity-80 transition-opacity cursor-pointer"
                      data-region="South Asia" />
                
                {/* East Asia */}
                <path d="M720 80 L850 70 L870 150 L820 180 L750 170 L730 120 Z" 
                      fill="url(#mapGradient)" 
                      className="hover:opacity-80 transition-opacity cursor-pointer"
                      data-region="East Asia" />
                
                {/* Southeast Asia */}
                <path d="M750 180 L850 170 L880 240 L840 280 L780 270 L760 220 Z" 
                      fill="url(#mapGradient)" 
                      className="hover:opacity-80 transition-opacity cursor-pointer"
                      data-region="Southeast Asia" />
                
                {/* Regional Markers */}
                <circle cx="125" cy="125" r="8" fill="#EF4444" className="animate-pulse" filter="url(#glow)" />
                <circle cx="175" cy="305" r="8" fill="#EF4444" className="animate-pulse" filter="url(#glow)" />
                <circle cx="480" cy="95" r="8" fill="#EF4444" className="animate-pulse" filter="url(#glow)" />
                <circle cx="515" cy="245" r="8" fill="#EF4444" className="animate-pulse" filter="url(#glow)" />
                <circle cx="585" cy="155" r="8" fill="#EF4444" className="animate-pulse" filter="url(#glow)" />
                <circle cx="675" cy="205" r="8" fill="#EF4444" className="animate-pulse" filter="url(#glow)" />
                <circle cx="785" cy="125" r="8" fill="#EF4444" className="animate-pulse" filter="url(#glow)" />
                <circle cx="815" cy="225" r="8" fill="#EF4444" className="animate-pulse" filter="url(#glow)" />
              </svg>
            </div>
          </div>
          
          {/* Regional Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                region: "North America",
                countries: ["USA", "Canada"],
                color: "from-blue-500 to-blue-700",
                icon: "🇺🇸"
              },
              {
                region: "South America", 
                countries: ["Brazil", "Argentina"],
                color: "from-green-500 to-green-700",
                icon: "🇧🇷"
              },
              {
                region: "Europe",
                countries: ["UK", "Germany", "Finland", "France"],
                color: "from-purple-500 to-purple-700",
                icon: "🇪🇺"
              },
              {
                region: "Africa",
                countries: ["Nigeria", "Kenya", "South Africa", "DRC"],
                color: "from-orange-500 to-orange-700",
                icon: "🌍"
              },
              {
                region: "Middle East",
                countries: ["Jordan", "UAE", "Saudi Arabia"],
                color: "from-yellow-500 to-yellow-700",
                icon: "🕌"
              },
              {
                region: "South Asia",
                countries: ["India", "Sri Lanka", "Bangladesh"],
                color: "from-indigo-500 to-indigo-700",
                icon: "🇮🇳"
              },
              {
                region: "East Asia",
                countries: ["China", "Japan", "South Korea"],
                color: "from-red-500 to-red-700",
                icon: "🇯🇵"
              },
              {
                region: "Southeast Asia",
                countries: ["Malaysia", "Singapore", "Indonesia"],
                color: "from-teal-500 to-teal-700",
                icon: "🇸🇬"
              }
            ].map((region, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${region.color} flex items-center justify-center text-2xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {region.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 text-center mb-3 group-hover:text-blue-600 transition-colors">
                    {region.region}
                  </h3>
                  <div className="space-y-1">
                    {region.countries.map((country, countryIndex) => (
                      <div key={countryIndex} className="text-center">
                        <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-pointer">
                          {country}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Global Stats */}
          <div className="mt-16 bg-white rounded-3xl shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  8
                </div>
                <div className="text-gray-600 font-medium">Global Regions</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  25+
                </div>
                <div className="text-gray-600 font-medium">Countries Served</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  24/7
                </div>
                <div className="text-gray-600 font-medium">Global Support</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  15+
                </div>
                <div className="text-gray-600 font-medium">Time Zones</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              From startup to industry leader - here's how we've grown.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-start mb-12">
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                <div className="ml-16">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold inline-block mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our Growing Team
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented individuals who share our passion for quality software.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
            View Open Positions
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;