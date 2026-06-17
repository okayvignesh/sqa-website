
import { Mail, Phone, Send } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useScrollAnimations } from '../utils/useScrollAnimations';

const RequestDemoPage = () => {
  useScrollAnimations();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    message: '',
    demoRequest: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Request Demo Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-5xl font-bold text-white mb-4">
              Request a <span style={{ fontStyle: 'italic', fontWeight: '300' }}>Demo</span>
            </h2>
            <p className="text-lg text-gray-400">See SimplifyQA in action - schedule your personalized demo today</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-6 max-w-6xl mx-auto">
            {/* Left side - Contact Cards */}
            <div className="space-y-6 animate-on-scroll animate-delay-200">
              {/* Email Us Card */}
              <div 
                className="border-l-4 border-cyan-500 sq-border-glow-cyan rounded-2xl p-8 relative overflow-hidden shadow-2xl shadow-cyan-900/20 hover:shadow-cyan-900/40 transition-all duration-300 hover:scale-[1.02]" 
                style={{ 
                  background: '#49494945',
                  borderRadius: '16px',
                  width: '100%'
                }}
              >
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div 
                      className="p-3 rounded-lg flex items-center justify-center" 
                      style={{ 
                        background: 'rgb(16, 19, 28)',
                        borderRadius: '8px',
                        boxShadow: 'rgba(207, 231, 255, 0.2) 0px 1px 1px 0px inset'
                      }}
                    >
                      <Mail className="h-6 w-6 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Email Us</h3>
                  </div>
                  <p className="text-gray-400 mb-4 leading-relaxed" style={{ opacity: 0.8 }}>
                    Facing technical challenges or product concerns?<br />We're here to assist
                  </p>
                  <a 
                    href="mailto:support@simplify3x.com" 
                    className="text-white hover:text-gray-300 transition-colors"
                    target="_blank"
                    rel="noopener"
                  >
                    support@simplify3x.com
                  </a>
                </div>
                
                {/* Gradient light effect */}
                <div 
                  className="absolute top-0 right-0 w-full h-full pointer-events-none"
                  style={{
                    background: 'radial-gradient(50% 50% at 93.7% 8.1%, rgba(184, 199, 217, 0.5) 0%, rgba(4, 7, 13, 0) 100%)',
                    opacity: 0.1
                  }}
                />
              </div>

              {/* Contact Sales Card */}
              <div 
                className="border-l-4 border-cyan-500 sq-border-glow-cyan rounded-2xl p-8 relative overflow-hidden shadow-2xl shadow-cyan-900/20 hover:shadow-cyan-900/40 transition-all duration-300 hover:scale-[1.02]" 
                style={{ 
                  background: '#49494945',
                  borderRadius: '16px',
                  width: '100%'
                }}
              >
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div 
                      className="p-3 rounded-lg flex items-center justify-center" 
                      style={{ 
                        background: 'rgb(16, 19, 28)',
                        borderRadius: '8px',
                        boxShadow: 'rgba(207, 231, 255, 0.2) 0px 1px 1px 0px inset'
                      }}
                    >
                      <Phone className="h-6 w-6 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Contact Sales</h3>
                  </div>
                  <p className="text-gray-400 mb-4 leading-relaxed" style={{ opacity: 0.8 }}>
                    Let's collaborate on custom solutions or discuss<br />product insights
                  </p>
                  <a 
                    href="#" 
                    className="text-white hover:text-gray-300 transition-colors underline"
                  >
                    Book a call
                  </a>
                </div>
                
                {/* Gradient light effect */}
                <div 
                  className="absolute top-0 right-0 w-full h-full pointer-events-none"
                  style={{
                    background: 'radial-gradient(50% 50% at 93.7% 8.1%, rgba(184, 199, 217, 0.5) 0%, rgba(4, 7, 13, 0) 100%)',
                    opacity: 0.1
                  }}
                />
              </div>
            </div>

            {/* Right side - Demo Request Form */}
            <div className="animate-on-scroll animate-delay-200">
              <div 
                className="border-l-4 border-cyan-500 sq-border-glow-cyan rounded-2xl p-8 relative overflow-hidden shadow-2xl shadow-cyan-900/20 hover:shadow-cyan-900/40 transition-all duration-300 hover:scale-[1.02]" 
                style={{ 
                  background: '#49494945',
                  borderRadius: '16px',
                  width: '100%'
                }}
              >
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-white mb-8">Schedule Your Demo</h2>
                
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative w-full">
                        <label className="block text-sm mb-2" style={{ color: '#d5dbe6', cursor: 'default' }}>First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          placeholder="John"
                          className="w-full focus:outline-none transition-all"
                          style={{ 
                            background: 'rgba(4, 7, 13, 0.41)',
                            border: '1px solid rgba(216, 231, 242, 0.07)',
                            borderRadius: '8px',
                            color: '#d5dbe6',
                            padding: '12px',
                            fontSize: '14px',
                            fontWeight: 400,
                            lineHeight: '1.2em',
                            letterSpacing: '0em',
                            fontFamily: 'Inter, sans-serif',
                            height: '48px'
                          }}
                          onFocus={(e) => e.target.style.borderColor = 'rgba(213, 219, 230, 0.15)'}
                          onBlur={(e) => e.target.style.borderColor = 'rgba(216, 231, 242, 0.07)'}
                        />
                      </div>
                      <div className="relative w-full">
                        <label className="block text-sm mb-2" style={{ color: '#d5dbe6', cursor: 'default' }}>Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          placeholder="Doe"
                          className="w-full focus:outline-none transition-all"
                          style={{ 
                            background: 'rgba(4, 7, 13, 0.41)',
                            border: '1px solid rgba(216, 231, 242, 0.07)',
                            borderRadius: '8px',
                            color: '#d5dbe6',
                            padding: '12px',
                            fontSize: '14px',
                            fontWeight: 400,
                            lineHeight: '1.2em',
                            letterSpacing: '0em',
                            fontFamily: 'Inter, sans-serif',
                            height: '48px'
                          }}
                          onFocus={(e) => e.target.style.borderColor = 'rgba(213, 219, 230, 0.15)'}
                          onBlur={(e) => e.target.style.borderColor = 'rgba(216, 231, 242, 0.07)'}
                        />
                      </div>
                    </div>

                    <div className="relative w-full">
                      <label className="block text-sm mb-2" style={{ color: '#d5dbe6', cursor: 'default' }}>Work Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john.doe@company.com"
                        className="w-full focus:outline-none transition-all"
                        style={{ 
                          background: 'rgba(4, 7, 13, 0.41)',
                          border: '1px solid rgba(216, 231, 242, 0.07)',
                          borderRadius: '8px',
                          color: '#d5dbe6',
                          padding: '12px',
                          fontSize: '14px',
                          fontWeight: 400,
                          lineHeight: '1.2em',
                          letterSpacing: '0em',
                          fontFamily: 'Inter, sans-serif',
                          height: '48px'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'rgba(213, 219, 230, 0.15)'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(216, 231, 242, 0.07)'}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative w-full">
                        <label className="block text-sm mb-2" style={{ color: '#d5dbe6', cursor: 'default' }}>Company *</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          required
                          placeholder="Your Company"
                          className="w-full focus:outline-none transition-all"
                          style={{ 
                            background: 'rgba(4, 7, 13, 0.41)',
                            border: '1px solid rgba(216, 231, 242, 0.07)',
                            borderRadius: '8px',
                            color: '#d5dbe6',
                            padding: '12px',
                            fontSize: '14px',
                            fontWeight: 400,
                            lineHeight: '1.2em',
                            letterSpacing: '0em',
                            fontFamily: 'Inter, sans-serif',
                            height: '48px'
                          }}
                          onFocus={(e) => e.target.style.borderColor = 'rgba(213, 219, 230, 0.15)'}
                          onBlur={(e) => e.target.style.borderColor = 'rgba(216, 231, 242, 0.07)'}
                        />
                      </div>
                      <div className="relative w-full">
                        <label className="block text-sm mb-2" style={{ color: '#d5dbe6', cursor: 'default' }}>Job Title</label>
                        <input
                          type="text"
                          name="jobTitle"
                          value={formData.jobTitle}
                          onChange={handleInputChange}
                          placeholder="QA Manager"
                          className="w-full focus:outline-none transition-all"
                          style={{ 
                            background: 'rgba(4, 7, 13, 0.41)',
                            border: '1px solid rgba(216, 231, 242, 0.07)',
                            borderRadius: '8px',
                            color: '#d5dbe6',
                            padding: '12px',
                            fontSize: '14px',
                            fontWeight: 400,
                            lineHeight: '1.2em',
                            letterSpacing: '0em',
                            fontFamily: 'Inter, sans-serif',
                            height: '48px'
                          }}
                          onFocus={(e) => e.target.style.borderColor = 'rgba(213, 219, 230, 0.15)'}
                          onBlur={(e) => e.target.style.borderColor = 'rgba(216, 231, 242, 0.07)'}
                        />
                      </div>
                    </div>

                    <div className="relative w-full">
                      <label className="block text-sm mb-2" style={{ color: '#d5dbe6', cursor: 'default' }}>Tell us about your testing needs</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Describe your current testing challenges and goals..."
                        className="w-full focus:outline-none transition-all resize-none"
                        style={{ 
                          background: 'rgba(4, 7, 13, 0.41)',
                          border: '1px solid rgba(216, 231, 242, 0.07)',
                          borderRadius: '8px',
                          color: '#d5dbe6',
                          padding: '12px',
                          fontSize: '14px',
                          fontWeight: 400,
                          lineHeight: '1.2em',
                          letterSpacing: '0em',
                          fontFamily: 'Inter, sans-serif'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'rgba(213, 219, 230, 0.15)'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(216, 231, 242, 0.07)'}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full font-semibold text-white transition-all hover:opacity-90 relative overflow-visible cursor-pointer flex items-center justify-center"
                      style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '8px',
                        willChange: 'transform',
                        padding: '14px 28px',
                        height: 'min-content'
                      }}
                    >
                      {/* Glow effect */}
                      <div 
                        className="absolute pointer-events-none overflow-hidden"
                        style={{
                          inset: '0 -1px 0 0',
                          zIndex: 0,
                          background: 'radial-gradient(25% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)',
                          filter: 'blur(15px)',
                          borderRadius: '8px',
                          willChange: 'transform'
                        }}
                      />
                      
                      {/* Stroke effect */}
                      <div 
                        className="absolute pointer-events-none overflow-hidden"
                        style={{
                          inset: '0 -1px 0 0',
                          zIndex: 0,
                          background: 'radial-gradient(20.7% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)',
                          borderRadius: '8px',
                          willChange: 'auto'
                        }}
                      />
                      
                      {/* Fill background */}
                      <div 
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          backgroundColor: 'rgb(0, 0, 0)',
                          borderRadius: '8px',
                          zIndex: 1
                        }}
                      />
                      
                      {/* Button text */}
                      <span className="relative flex items-center" style={{ zIndex: 10 }}>
                        <Send className="mr-2 h-5 w-5" />
                        Request Demo
                      </span>
                    </button>

                    <p className="mt-4 text-sm text-center" style={{ color: '#9ca3af' }}>
                      By submitting this form, you agree to our privacy policy. We'll respond within 24 hours.
                    </p>
                  </form>
                </div>

                {/* Gradient light effect */}
                <div 
                  className="absolute top-0 right-0 w-full h-full pointer-events-none"
                  style={{
                    background: 'radial-gradient(50% 50% at 93.7% 8.1%, rgba(184, 199, 217, 0.5) 0%, rgba(4, 7, 13, 0) 100%)',
                    opacity: 0.1
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RequestDemoPage;
