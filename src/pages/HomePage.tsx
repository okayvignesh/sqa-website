import {
  ArrowRight,
  BarChart3,
  Bug,
  Calendar,
  Cloud,
  Cpu,
  FileText,
  GitBranch,
  Globe,
  Layers,
  Settings,
  Shield,
  Target,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';
import ClientLogoSlider from '../components/ClientLogoSlider';
import DemoRequestForm from '../components/DemoRequestForm';
import Hero from '../components/Hero';
import HoneycombGrid from '../components/HoneycombGrid';
import { useScrollAnimations } from '../utils/useScrollAnimations';

import FeatureShowcase from '../components/FeatureShowcase';
import PlatformArchitectureShowcase from '../components/PlatformArchitectureShowcase';
import SuccessStoriesCarousel from '../components/SuccessStoriesCarousel';
import { TrialForm } from '../components/TrialForm';
import WhyChooseTechBackground from '../components/WhyChooseTechBackground';
import { blogPosts } from '../utils/blogData';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useScrollAnimations();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Trigger animations after a short delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    const params = new URLSearchParams(window.location.search);
    const scrollTo = params.get('scrollTo');

    if (scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(scrollTo);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }

    return () => clearTimeout(timer);
  }, []);

  // Horizontal scroll image + text pairs
  const imageTextPairs = [
    {
      img: '/assets/banner/unnamed (1).jpg',
      heading: 'Banner 1',
      text: 'Description for Banner 1.'
    },
    {
      img: '/assets/banner/unnamed (2).jpg',
      heading: 'Banner 2',
      text: 'Description for Banner 2.'
    },
    {
      img: '/assets/banner/unnamed (3).jpg',
      heading: 'Banner 3',
      text: 'Description for Banner 3.'
    },
    {
      img: '/assets/banner/unnamed (4).jpg',
      heading: 'Banner 4',
      text: 'Description for Banner 4.'
    },
    {
      img: '/assets/banner/unnamed.jpg',
      heading: 'Banner 5',
      text: 'Description for Banner 5.'
    }
  ];

  // Refs for scroll effect
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const pairStripRef = React.useRef<HTMLDivElement>(null);

  // Smooth scroll-linked horizontal animator using RAF + easing
  React.useEffect(() => {
    const strip = pairStripRef.current;
    if (!strip) return;

    // measurement-based CSS animation for smooth continuous scroll
    const PX_PER_SEC = 0.2; // very slow motion; tune to 0.1 for almost static

    // ensure style
    strip.style.willChange = 'transform';
    strip.style.backfaceVisibility = 'hidden';

  const totalWidth = strip.scrollWidth || 0;
  const originalWidth = totalWidth / 2 || 0;
  if (originalWidth === 0) return;

  // fixed duration as requested by user
  const durationSec = 1; // 1 second full loop
    const animName = `homeLoop_${Math.floor(Math.random() * 1e9)}`;
    const styleEl = document.createElement('style');
    styleEl.setAttribute('data-home-loop', animName);
    styleEl.innerHTML = `
      @keyframes ${animName} {
        0% { transform: translate3d(0,0,0); }
        100% { transform: translate3d(-${originalWidth}px,0,0); }
      }
      @media (prefers-reduced-motion: reduce) {
        @keyframes ${animName} { 0% { transform: none; } 100% { transform: none; } }
      }
    `;
    document.head.appendChild(styleEl);

    strip.style.animationName = animName;
    strip.style.animationDuration = `${durationSec}s`;
    strip.style.animationTimingFunction = 'linear';
    strip.style.animationIterationCount = 'infinite';

    // pause on hover
    const onEnter = () => { strip.style.animationPlayState = 'paused'; };
    const onLeave = () => { strip.style.animationPlayState = 'running'; };
    strip.addEventListener('mouseenter', onEnter);
    strip.addEventListener('mouseleave', onLeave);

    return () => {
      strip.removeEventListener('mouseenter', onEnter);
      strip.removeEventListener('mouseleave', onLeave);
      const el = document.head.querySelector(`style[data-home-loop="${animName}"]`);
      if (el) el.remove();
      strip.style.animationName = '';
    };
  }, [imageTextPairs.length]);
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeCategory, setActiveCategory] = useState('web');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dissolveActive, setDissolveActive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setDissolveActive((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  const mainFeatures = [
    {
      icon: <Cpu className="h-12 w-12 text-blue-600" />,
      title: "AI-Powered Test Generation",
      description: "Automatically generate comprehensive test cases using machine learning algorithms that understand your application structure and user flows.",
      details: [
        "Smart test case creation from user stories",
        "Automated test data generation",
        "Intelligent test path optimization",
        "Self-healing test scripts"
      ]
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      title: "Lightning-Fast Execution",
      description: "Execute thousands of tests simultaneously with our cloud-based infrastructure designed for speed and reliability.",
      details: [
        "Parallel test execution",
        "Cloud-based test runners",
        "Instant feedback on failures",
        "99.9% uptime guarantee"
      ]
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-purple-600" />,
      title: "Advanced Analytics & Reporting",
      description: "Gain deep insights into your testing performance with comprehensive analytics and customizable dashboards.",
      details: [
        "Real-time test execution monitoring",
        "Trend analysis and predictions",
        "Custom dashboard creation",
        "Export capabilities for stakeholders"
      ]
    },
    {
      icon: <GitBranch className="h-12 w-12 text-green-600" />,
      title: "Seamless CI/CD Integration",
      description: "Integrate effortlessly with your existing development workflow and popular DevOps tools.",
      details: [
        "Jenkins, GitHub Actions, GitLab CI",
        "Slack and Teams notifications",
        "Jira integration for bug tracking",
        "API-first architecture"
      ]
    },
    {
      icon: <Cloud className="h-12 w-12 text-cyan-600" />,
      title: "Cloud Execution",
      description: "Execute tests on our scalable cloud infrastructure with unlimited parallel execution and global availability.",
      details: [
        "Unlimited parallel test execution",
        "Global cloud infrastructure",
        "Auto-scaling based on demand",
        "99.9% uptime guarantee"
      ]
    },
    {
      icon: <Globe className="h-12 w-12 text-indigo-600" />,
      title: "Cross-Platform Testing",
      description: "Test across multiple browsers, devices, and operating systems from a single platform.",
      details: [
        "Web, mobile, and API testing",
        "Multi-browser compatibility",
        "Device farm integration",
        "Visual regression testing"
      ]
    },
    {
      icon: <Shield className="h-12 w-12 text-red-500" />,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance, encryption, and comprehensive access controls.",
      details: [
        "End-to-end encryption",
        "Role-based access control",
        "Audit logs and compliance",
        "GDPR and SOC 2 certified"
      ]
    }
  ];
  const [isGaneshModalOpen, setIsGaneshModalOpen] = useState(false);
  const [isWebinarFormOpen, setIsWebinarFormOpen] = useState(false);
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);
  const [isTrialFormOpen, setIsTrialFormOpen] = useState(false);

  const features = [
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "AI-Powered Test Generation",
      description: "Generate comprehensive test cases automatically using machine learning algorithms that understand your application structure."
    },
    {
      icon: <Cpu className="h-8 w-8 text-blue-500" />,
      title: "Smart Test Maintenance",
      description: "Self-healing tests that automatically adapt to UI changes, reducing maintenance overhead significantly."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Agile Management",
      description: "Streamline sprint planning, backlog management, and team collaboration with intelligent automation tools."
    },
    {
      icon: <GitBranch className="h-8 w-8 text-green-600" />,
      title: "Release Management", 
      description: "Orchestrate seamless releases with automated deployment pipelines and zero-downtime deployments."
    },
    {
      icon: <Bug className="h-8 w-8 text-red-600" />,
      title: "Defect Management",
      description: "Intelligent bug tracking, prioritization, and resolution with automated detection and AI-driven insights."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-500" />,
      title: "Lightning Fast Execution",
      description: "Execute thousands of tests simultaneously with parallel processing and cloud-based infrastructure."
    },
    {
      icon: <Target className="h-8 w-8 text-orange-500" />,
      title: "Cross-Platform Testing",
      description: "Test web, mobile, and API applications across multiple browsers, devices, and operating systems."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-green-500" />,
      title: "Reports & Dashboard",
      description: "Real-time analytics, executive dashboards, and predictive insights to monitor project health."
    },
    {
      icon: <Shield className="h-8 w-8 text-red-500" />,
      title: "Enterprise Security",
      description: "SOC 2 compliant with end-to-end encryption, role-based access control, and comprehensive audit logs."
    },
    {
      icon: <Layers className="h-8 w-8 text-cyan-500" />,
      title: "Seamless CI/CD Integration",
      description: "Native integrations with Jenkins, GitHub Actions, GitLab CI, and 200+ other DevOps tools."
    },
    {
      icon: <FileText className="h-8 w-8 text-indigo-500" />,
      title: "Requirements Management",
      description: "Centralized requirement tracking, traceability matrix, and automated validation for complete coverage."
    },
    {
      icon: <Calendar className="h-8 w-8 text-pink-500" />,
      title: "Team Collaboration",
      description: "Built-in collaboration tools with real-time sharing, comments, and notifications for teams."
    }
  ];

  // Slider configuration
  const featuresPerSlide = 6;
  const totalSlides = Math.ceil(features.length / featuresPerSlide);

  // Slider functions
  const getCurrentFeatures = () => {
    const startIndex = currentSlide * featuresPerSlide;
    return features.slice(startIndex, startIndex + featuresPerSlide);
  };

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

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

  const upcomingWebinar = {
    title: "Advanced Test Automation with AI: Best Practices for 2025",
    date: "January 30, 2025",
    time: "2:00 PM EST",
    presenter: "Dr. Sarah Kim, CTO",
    description: "Learn how to leverage AI-powered testing to reduce manual effort by 80% and improve test coverage.",
    registrations: 1247,
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
  };

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

  return (
    <div className="text-white min-h-screen">
  <div className="w-full text-white">
        <Hero />
      
      </div>

      {/* Feature Showcase (moved just after Hero) */}
      <div 
        className={`animate-on-scroll transition-all duration-300 ease-out ${
          isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`} 
        id="feature-showcase" 
        style={{ 
          background: 'linear-gradient(to bottom, var(--color-bg-translucent), transparent 20%)'
        }}
      >
        <FeatureShowcase />
      </div>

      <div
        id="why-choose-simplifyqa"
        className={`animate-on-scroll transition-all duration-300 ease-out ${
          isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}
        style={{ background: 'linear-gradient(to bottom, var(--color-bg-translucent), transparent 20%)' }}
      >
        <WhyChooseTechBackground />
      </div>

      {/* API Integration Showcase */}
      <div
        id="integrations"
        className={`animate-on-scroll transition-all duration-300 ease-out ${
          isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}
        style={{
          background: 'linear-gradient(to bottom, var(--color-bg-translucent), transparent 20%)'
        }}
      >
        <PlatformArchitectureShowcase />
      </div>

      {/* Client Logos Slider */}
      <section 
        className={`py-16 transition-all duration-300 ease-out ${
          isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}
        style={{
          background: 'linear-gradient(to bottom, var(--color-bg-translucent), transparent 20%)'
        }}
      >
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8" id="client-logos">
          <div className="relative">
            {/* Slider for Client Logos */}
            <ClientLogoSlider />
          </div>
        </div>
      </section>
      {/* Demo Request Form */}
      <DemoRequestForm
        isOpen={isDemoFormOpen}
        onClose={() => setIsDemoFormOpen(false)}
      />

      {/* Success Stories Carousel */}
      <div 
        className={`animate-on-scroll transition-all duration-300 ease-out ${
          isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`} 
      >
        <SuccessStoriesCarousel />
      </div>


      {/* Honeycomb Grid Section */}
      <div
        className={`animate-on-scroll transition-all duration-300 ease-out ${
          isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}
        id="honeycomb-grid"
        style={{
          background: 'linear-gradient(to bottom, var(--color-bg-translucent), transparent 20%)'
        }}
      >
        <HoneycombGrid />
      </div>





      {/* Blog Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-10 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Latest Blogs
            </h2>
            <Link
              to="/blog"
              className="px-6 py-2 border border-gray-600 rounded-full text-white hover:border-cyan-400 hover:text-cyan-400 transition-colors text-sm"
            >
              View blog
            </Link>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post, index) => (
              <div
                key={post.id}
                className={`group animate-on-scroll ${
                  index % 3 === 1 ? 'animate-delay-200' : index % 3 === 2 ? 'animate-delay-300' : ''
                }`}
              >
                {/* Image */}
                <Link to={`/blog/${post.slug}`} className="block mb-4">
                  <div className="relative overflow-hidden rounded-2xl aspect-square bg-gray-900">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>

                {/* Content */}
                <div>
                  <Link to={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors leading-tight">
                      {post.title}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                    <span>{post.publishedDate}</span>
                    <span>{post.category}</span>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    Read blog
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Badges Section */}
      <section
        className="py-16"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll" id="compliance-badges">
        <div className="text-center mb-8 md:mb-10 px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
          Our Certifications & Compliance
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
          Real stories of how we helped enterprises conquer technical debt, crush bottlenecks, and modernize their QA.
          </p>
        </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
            <img
              src="/assets/crt/SOC.png"
              alt="SOC 2 TYPE 2"
              className="h-auto w-[108px] object-contain transition-transform hover:scale-105"
            />
            <img
              src="/assets/crt/GDPR compliant.png"
              alt="GDPR Compliant"
              className="h-auto w-[150px] object-contain transition-transform hover:scale-105"
            />
            <img
              src="/assets/crt/Intercert.Png"
              alt="ISO 27001"
              className="h-auto w-[150px] object-contain transition-transform hover:scale-105"
            />
            <img
              src="/assets/crt/HIPAA compliant.png"
              alt="HIPAA Compliant"
              className="h-auto w-[150px] object-contain transition-transform hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Trial Form Modal */}
      <TrialForm isOpen={isTrialFormOpen} onClose={() => setIsTrialFormOpen(false)} />
    </div>
  );
};

export default HomePage;