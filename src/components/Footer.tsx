import { FileText, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-white" style={{ background: 'linear-gradient(180deg, #06132d 0%, #040b1a 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              {/* <TestTube2 className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">SimplifyQA</span> */}
              <Link 
                to="/" 
                className="flex items-center space-x-2 group"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
              <img 
                src="/simplify_logo.svg" 
                alt="SimplifyQA" 
                className="h-4 w-auto"
              />
            </Link>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Streamline your product workflows with our AI-powered Application Lifecycle Management platform. Built for modern teams who demand quality and speed.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/simplifyqa-ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@simplify3xQA" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/#why-choose-simplifyqa"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('why-choose-simplifyqa');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else window.location.href = '/?scrollTo=why-choose-simplifyqa';
                  }}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Why Choose SimplifyQA
                </a>
              </li>
              <li>
                <a
                  href="/#feature-showcase"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('feature-showcase');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else window.location.href = '/?scrollTo=feature-showcase';
                  }}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  AI Features
                </a>
              </li>
              <li>
                <a
                  href="/#honeycomb-grid"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('honeycomb-grid');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else window.location.href = '/?scrollTo=honeycomb-grid';
                  }}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Integrations
                </a>
              </li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://discord.gg/e58NZySa2T" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Join Discord
                </a>
              </li>
              <li>
                <a href="https://docs.simplifyqa.ai/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Help Documents
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">Our Story</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                support@simplify3x.com
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                © 2025 SimplifyQA. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;