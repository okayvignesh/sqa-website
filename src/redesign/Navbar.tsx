import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight, Bot, ChevronDown, Cpu, FlaskConical, GitBranch,
  LayoutDashboard, LineChart, Menu, ShieldCheck, Sparkles, Users, X, Zap,
} from 'lucide-react';
import { cn } from '../design';

type MegaItem = {
  label: string;
  desc: string;
  to: string;
  icon: React.ReactNode;
};

const platform: MegaItem[] = [
  { label: 'Test Management',     desc: 'Plan, design and trace every test case.',     to: '/solutions#test-management', icon: <FlaskConical className="w-4 h-4" /> },
  { label: 'Test Automation',     desc: 'Low-code automation across web, mobile, API.', to: '/solutions#automation',      icon: <Zap className="w-4 h-4" /> },
  { label: 'AI Test Assistant',   desc: 'Generate, repair, and explain tests with AI.', to: '/solutions#ai',              icon: <Sparkles className="w-4 h-4" /> },
  { label: 'Defect Management',   desc: 'Smart triage with root-cause hints.',          to: '/solutions#defects',         icon: <Bot className="w-4 h-4" /> },
  { label: 'Release Orchestration', desc: 'Pipelines, gates, and quality signals.',     to: '/solutions#release',         icon: <GitBranch className="w-4 h-4" /> },
  { label: 'Insights & Reports',  desc: 'Executive dashboards and quality KPIs.',       to: '/solutions#insights',        icon: <LineChart className="w-4 h-4" /> },
];

const solutions: MegaItem[] = [
  { label: 'Enterprise QA',       desc: 'Scale governance across 1000+ teams.',         to: '/solutions#enterprise', icon: <ShieldCheck className="w-4 h-4" /> },
  { label: 'Automation Teams',    desc: 'Replace fragile scripts with intelligence.',   to: '/solutions#automation-teams', icon: <Cpu className="w-4 h-4" /> },
  { label: 'Engineering Leaders', desc: 'Real-time quality visibility, end-to-end.',    to: '/solutions#leaders', icon: <LayoutDashboard className="w-4 h-4" /> },
  { label: 'Agile / Scrum',       desc: 'Plan sprints around quality, not the other way.', to: '/solutions#agile', icon: <Users className="w-4 h-4" /> },
];

export default function NavbarV2() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<null | 'platform' | 'solutions'>(null);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-spring',
        scrolled ? 'pt-3' : 'pt-5',
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={cn(
            'relative flex items-center justify-between rounded-full transition-all duration-300 ease-spring',
            scrolled
              ? 'glass-strong shadow-[0_10px_40px_-20px_rgba(15,19,34,0.18)] h-14 px-3 sm:px-4'
              : 'h-16 px-3 sm:px-5',
          )}
          onMouseLeave={() => setOpen(null)}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 px-2">
            <span className="font-display text-[18px] font-semibold tracking-tight text-ink-900">
              Simplify<span className="text-brand-600">QA</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            <li onMouseEnter={() => setOpen('platform')}>
              <button className={cn(
                'inline-flex items-center gap-1 h-9 px-4 text-sm font-medium text-ink-700 rounded-full transition-colors',
                open === 'platform' && 'bg-ink-50 text-ink-900',
              )}>
                Platform <ChevronDown className={cn('w-3.5 h-3.5 transition-transform', open === 'platform' && 'rotate-180')} />
              </button>
            </li>
            <li onMouseEnter={() => setOpen('solutions')}>
              <button className={cn(
                'inline-flex items-center gap-1 h-9 px-4 text-sm font-medium text-ink-700 rounded-full transition-colors',
                open === 'solutions' && 'bg-ink-50 text-ink-900',
              )}>
                Solutions <ChevronDown className={cn('w-3.5 h-3.5 transition-transform', open === 'solutions' && 'rotate-180')} />
              </button>
            </li>
            <li onMouseEnter={() => setOpen(null)}>
              <NavLink to="/integrations" className="inline-flex items-center h-9 px-4 text-sm font-medium text-ink-700 rounded-full hover:text-ink-900 hover:bg-ink-50">Integrations</NavLink>
            </li>
            <li onMouseEnter={() => setOpen(null)}>
              <NavLink to="/pricing" className="inline-flex items-center h-9 px-4 text-sm font-medium text-ink-700 rounded-full hover:text-ink-900 hover:bg-ink-50">Pricing</NavLink>
            </li>
            <li onMouseEnter={() => setOpen(null)}>
              <NavLink to="/resources" className="inline-flex items-center h-9 px-4 text-sm font-medium text-ink-700 rounded-full hover:text-ink-900 hover:bg-ink-50">Resources</NavLink>
            </li>
            <li onMouseEnter={() => setOpen(null)}>
              <NavLink to="/customer-success" className="inline-flex items-center h-9 px-4 text-sm font-medium text-ink-700 rounded-full hover:text-ink-900 hover:bg-ink-50">Customers</NavLink>
            </li>
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <NavLink to="/contact" className="text-sm font-medium text-ink-700 hover:text-ink-900 px-3">
              Sign in
            </NavLink>
            <NavLink
              to="/request-demo"
              className="btn-primary h-10 px-5"
            >
              Book a demo
              <ArrowRight className="w-3.5 h-3.5" />
            </NavLink>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-full hover:bg-ink-50"
            onClick={() => setMobile((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobile ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Mega menu */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="hidden lg:block absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-[680px]"
                onMouseEnter={() => setOpen(open)}
              >
                <div className="glass-strong rounded-3xl p-3 shadow-[0_24px_70px_-20px_rgba(15,19,34,0.25)]">
                  <div className="grid grid-cols-2 gap-1.5">
                    {(open === 'platform' ? platform : solutions).map((item) => (
                      <Link
                        key={item.label}
                        to={item.to}
                        onClick={() => setOpen(null)}
                        className="group flex items-start gap-3 rounded-2xl p-3 hover:bg-white transition-colors"
                      >
                        <span className="grid place-items-center w-9 h-9 rounded-xl bg-brand-50 text-brand-700 border border-brand-100">
                          {item.icon}
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[13.5px] font-semibold text-ink-900">{item.label}</span>
                          <span className="block text-[12.5px] text-ink-500 leading-relaxed">{item.desc}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-2 flex items-center justify-between rounded-2xl bg-gradient-to-r from-brand-50 to-white border border-brand-100/60 px-4 py-3">
                    <div className="flex items-center gap-2 text-[12.5px] text-ink-700">
                      <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                      New — SimplifyQA AI Studio is live
                    </div>
                    <Link to="/solutions#ai" className="text-[12.5px] font-semibold text-brand-700 hover:text-brand-900 inline-flex items-center gap-1">
                      Explore <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden mx-4 mt-3"
          >
            <div className="glass-strong rounded-3xl p-3">
              {[
                ['Platform', '/solutions'],
                ['Solutions', '/solutions'],
                ['Integrations', '/integrations'],
                ['Pricing', '/pricing'],
                ['Resources', '/resources'],
                ['Customers', '/customer-success'],
              ].map(([label, to]) => (
                <Link
                  key={label}
                  to={to}
                  onClick={() => setMobile(false)}
                  className="block px-4 py-3 rounded-2xl text-[15px] font-medium text-ink-800 hover:bg-white"
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/request-demo"
                onClick={() => setMobile(false)}
                className="mt-2 btn-primary w-full"
              >
                Book a demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
