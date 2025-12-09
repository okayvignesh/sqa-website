import {
    ArrowRight,
    BookOpen,
    Calendar,
    Download,
    ExternalLink,
    Play,
    Users
} from 'lucide-react';
import { useState } from 'react';

import { useEffect } from 'react';
import { useScrollAnimations } from '../utils/useScrollAnimations';

const ResourcesPage = () => {
  useScrollAnimations();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Webinar modal state
  const [isWebinarFormOpen, setIsWebinarFormOpen] = useState(false);

  // Upcoming webinar data
  const upcomingWebinar = {
    title: "Advanced Test Automation with AI: Best Practices for 2025",
    date: "January 30, 2025",
    time: "2:00 PM EST",
    presenter: "Dr. Sarah Kim, CTO",
    description: "Learn how to leverage AI-powered testing to reduce manual effort by 80% and improve test coverage.",
    registrations: 1247,
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
  };

  // Past webinars data
  const pastWebinars = [
    {
      title: "Building Scalable Test Automation Frameworks",
      presenter: "Alex Rivera, CEO",
      date: "December 15, 2024",
      duration: "45 min",
      views: 2340,
      thumbnail: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop"
    },
    {
      title: "Mobile Testing Strategies for Modern Apps",
      presenter: "Marcus Johnson, VP Engineering",
      date: "November 28, 2024", 
      duration: "38 min",
      views: 1890,
      thumbnail: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop"
    },
    {
      title: "Enterprise Security in Test Automation",
      presenter: "Elena Rodriguez, VP Customer Success",
      date: "November 10, 2024",
      duration: "42 min", 
      views: 1650,
      thumbnail: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop"
    },
    {
      title: "CI/CD Integration Best Practices",
      presenter: "Michael Chen, Lead Developer",
      date: "October 25, 2024",
      duration: "50 min",
      views: 2100,
      thumbnail: "https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop"
    },
    {
      title: "Performance Testing at Scale",
      presenter: "Sarah Johnson, QA Director",
      date: "October 12, 2024",
      duration: "35 min",
      views: 1780,
      thumbnail: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop"
    },
    {
      title: "API Testing Automation Masterclass",
      presenter: "David Park, Senior Engineer",
      date: "September 28, 2024",
      duration: "55 min",
      views: 2450,
      thumbnail: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop"
    }
  ];
  const blogPosts = [
    {
      title: "10 Best Practices for Test Automation",
      excerpt: "Learn the essential strategies that top QA teams use to maximize their testing efficiency and coverage.",
      category: "Best Practices",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      date: "Dec 15, 2024"
    },
    {
      title: "AI in Testing: The Future is Now",
      excerpt: "Explore how artificial intelligence is revolutionizing software testing and quality assurance processes.",
      category: "Technology",
      readTime: "12 min read",
      image: "https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      date: "Dec 12, 2024"
    },
    {
      title: "Building a Scalable Testing Framework",
      excerpt: "Step-by-step guide to creating a testing framework that grows with your organization.",
      category: "Framework",
      readTime: "15 min read", 
      image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      date: "Dec 10, 2024"
    }
  ];

  const whitepapers = [
    {
      title: "The Complete Guide to Test Automation ROI",
      description: "Calculate and maximize the return on investment for your test automation initiatives.",
      pages: "32 pages",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    },
    {
      title: "Enterprise Testing Security Framework",
      description: "Best practices for implementing secure testing processes in enterprise environments.",
      pages: "28 pages",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    },
    {
      title: "Mobile Testing Strategy Guide",
      description: "Comprehensive strategies for testing mobile applications across different platforms and devices.",
      pages: "24 pages",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    }
  ];

  const webinars = [
    {
      title: "Advanced Test Automation Techniques",
      presenter: "Sarah Johnson, QA Expert",
      date: "Jan 25, 2025",
      time: "2:00 PM EST",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "Scaling QA in Agile Environments", 
      presenter: "Michael Chen, DevOps Engineer",
      date: "Feb 8, 2025",
      time: "1:00 PM EST",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-on-scroll">
            Resources & 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"> Learning Hub</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll animate-delay-200">
            Expand your testing knowledge with our comprehensive collection of guides, 
            best practices, and expert insights.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12 animate-on-scroll">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest from Our Blog</h2>
              <p className="text-lg text-gray-600">Stay up-to-date with testing trends and SimplifyQA updates</p>
            </div>
            <button className="hidden md:flex px-6 py-3 rounded-lg font-semibold transition-colors items-center" style={{background: 'rgb(255, 255, 255)', color: 'rgb(0, 0, 0)'}}>
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className={`bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden group animate-on-scroll ${index % 3 === 1 ? 'animate-delay-200' : index % 3 === 2 ? 'animate-delay-300' : ''}`}>
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                    <span className="mx-2">•</span>
                    {post.readTime}r
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Whitepapers Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              In-Depth Guides & Whitepapers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive resources to help you master testing strategies and implementation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whitepapers.map((whitepaper, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <img
                  src={whitepaper.image}
                  alt={whitepaper.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <BookOpen className="h-4 w-4 mr-1" />
                    {whitepaper.pages}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {whitepaper.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {whitepaper.description}
                  </p>
                  <button className="px-6 py-3 rounded-lg font-semibold transition-all w-full flex items-center justify-center" style={{background: 'rgb(255, 255, 255)', color: 'rgb(0, 0, 0)'}}>
                    <Download className="mr-2 h-4 w-4" />
                    Download Free
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Comprehensive Webinar Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* <div className="inline-flex items-center px-6 py-3 bg-blue-100 rounded-full mb-6">
              <Play className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-blue-800 font-semibold">Expert Webinars</span>
            </div> */}
            {/* <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Learn from Industry Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Join our live sessions and access our extensive library of on-demand webinars covering 
              everything from automation basics to advanced enterprise strategies.
            </p> */}
          </div>

          {/* Upcoming Webinar Spotlight */}
          {/* <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-12 mb-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-24 -translate-x-24"></div> */}
            
          
          {/* </div> */}

          {/* Past Webinars Library */}
          <div>
            <div className="flex justify-between items-center mb-12">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">On-Demand Webinar Library</h3>
                <p className="text-lg text-gray-600">Access our complete collection of expert-led sessions</p>
              </div>
              <button className="hidden md:flex px-6 py-3 rounded-lg font-semibold transition-all items-center" style={{background: 'rgb(255, 255, 255)', color: 'rgb(0, 0, 0)'}}>
                View All Sessions
                <ExternalLink className="ml-2 h-4 w-4" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastWebinars.map((webinar, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer">
                  <div className="relative">
                    <img
                      src={webinar.thumbnail}
                      alt={webinar.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white text-xs px-3 py-1 rounded-full font-medium">
                      {webinar.duration}
                    </div>
                    <div className="absolute bottom-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                      {webinar.views.toLocaleString()} views
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {webinar.title}
                    </h4>
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <Users className="h-4 w-4 mr-2" />
                      <span className="font-medium">{webinar.presenter}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{webinar.date}</span>
                      </div>
                      <button className="font-semibold text-sm flex items-center" style={{background: 'rgb(255, 255, 255)', color: 'rgb(0, 0, 0)'}}>
                        Watch Now
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;