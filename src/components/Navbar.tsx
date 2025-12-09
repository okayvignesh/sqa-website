import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CalendlyPopup from './CalendlyPopup';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  // ...existing code...
  const handleFeatureClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/?scrollTo=feature-showcase');
    } else {
      const el = document.getElementById('feature-showcase');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  return (
    <>
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 navbar-bg ${
      scrolled 
        ? 'shadow-lg border-b border-gray-800' 
        : 'backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2 group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img 
                src="/simplify_logo.svg" 
                alt="SimplifyQA" 
                className="" style={{ width: '190px' }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-8">
              {/* Navigation Links */}
              <Link
                to="/"
                className={`font-medium transition-colors duration-200 ${
                  isActive('/')
                    ? 'text-[#26c8ef]'
                    : 'text-gray-300 hover:text-[#26c8ef]'
                }`}
              >
                Home
              </Link>
              <a
                href="#feature-showcase"
                onClick={handleFeatureClick}
                className="font-medium transition-colors duration-200 text-gray-300 hover:text-[#26c8ef]"
              >
                Features
              </a>
              <Link
                to="/pricing"
                className={`font-medium transition-colors duration-200 ${
                  isActive('/pricing')
                    ? 'text-[#26c8ef]'
                    : 'text-gray-300 hover:text-[#26c8ef]'
                }`}
              >
                Pricing
              </Link>
              {/* <Link
                to="/resources"
                className={`font-medium transition-colors duration-200 ${
                  isActive('/resources')
                    ? 'text-purple-600'
                    : 'text-gray-300 hover:text-purple-600'
                }`}
              >
                Resources
              </Link> */}
              
              <Link
                to="/about"
                className={`font-medium transition-colors duration-200 ${
                  isActive('/about')
                    ? 'text-[#26c8ef]'
                    : 'text-gray-300 hover:text-[#26c8ef]'
                }`}
              >
                Our Story
              </Link>
              <a
                href="https://discord.com/invite/e58NZySa2T"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium transition-colors duration-200 text-gray-300 hover:text-[#26c8ef]"
              >
                Discord
              </a>
              {/* <Link
                to="/contact"
                className={`font-medium transition-colors duration-200 ${
                  isActive('/contact')
                    ? 'text-purple-600'
                    : 'text-gray-300 hover:text-purple-600'
                }`}
              >
                Contact
              </Link> */}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => window.open('https://app.simplifyqa.ai/login', '_blank')}
              className="text-gray-300 hover:text-[#26c8ef] font-medium transition-colors duration-200"
            >
              Sign In
            </button>
            <button
              onClick={() => setIsCalendlyOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200"
              style={{ background: '#fff', color: '#000' }}
            >
              Request Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-purple-600 hover:bg-gray-800 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden">
          <div
            className="px-4 pt-4 pb-6 space-y-1 border-t border-gray-700/50 shadow-lg"
            style={{
              background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.98) 0%, rgba(10, 15, 30, 0.98) 100%)',
              backdropFilter: 'blur(20px)'
            }}
          >
            <div className="space-y-2">
              <Link
                to="/"
                className="block px-3 py-2 text-base text-gray-300 hover:text-[#26c8ef] hover:bg-gray-800 rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <a
                href="#feature-showcase"
                onClick={e => { handleFeatureClick(e); setIsOpen(false); }}
                className="block px-3 py-2 text-base text-gray-300 hover:text-[#26c8ef] hover:bg-gray-800 rounded-md transition-colors duration-200"
              >
                Features
              </a>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-base text-gray-300 hover:text-[#26c8ef] hover:bg-gray-800 rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-base text-gray-300 hover:text-[#26c8ef] hover:bg-gray-800 rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Our Story
              </Link>
              <a
                href="https://discord.com/invite/e58NZySa2T"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-base text-gray-300 hover:text-[#26c8ef] hover:bg-gray-800 rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Discord
              </a>
            </div>
            <div className="pt-4 border-t border-gray-700/50">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsCalendlyOpen(true);
                }}
                className="w-full block text-center border-l-4 border-cyan-500 sq-border-glow-cyan px-4 py-3 rounded-lg font-medium shadow-2xl shadow-cyan-900/20 hover:shadow-cyan-900/40 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden text-white"
                style={{
                  background: '#49494945'
                }}
              >
                Request Demo
              </button>
            </div>
          </div>
        </div>
      )}

    </nav>
    {/* Calendly Popup - rendered outside nav for proper positioning */}
    <CalendlyPopup isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </>
  );
};

export default Navbar;