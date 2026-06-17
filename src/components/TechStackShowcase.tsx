import {
  Building2,
  Database as DatabaseIcon,
  Globe,
  Smartphone,
  Webhook
} from 'lucide-react';
import React from 'react';
import {
  FaAndroid,
  FaApple,
  FaChrome,
  FaEdge,
  FaFirefoxBrowser,
  FaJava,
  FaOpera,
  FaReact,
  FaSafari
} from 'react-icons/fa';
import {
  SiDotnet,
  SiFlutter,
  SiGraphql,
  SiMariadb,
  SiMongodb,
  SiMysql,
  SiPostgresql
} from 'react-icons/si';

const TechStackShowcase: React.FC = () => {
  const cardClasses =
    'sq-pro-card rounded-2xl border border-[rgba(148,163,184,0.15)] bg-[rgba(15,23,42,0.7)] backdrop-blur-xl transition-all duration-300 relative overflow-hidden';

  const sections = [
    {
      id: 'web',
      span: 'lg:col-span-6',
      icon: <Globe className="h-6 w-6 text-blue-400" />,
      chipBg: 'bg-blue-500/10',
      title: 'Web & Browser',
      description: 'Parallel cross-browser execution.',
      badges: [
        { label: 'Chrome', icon: <FaChrome className="text-blue-400" /> },
        { label: 'Firefox', icon: <FaFirefoxBrowser className="text-orange-500" /> },
        { label: 'Edge', icon: <FaEdge className="text-blue-500" /> },
        { label: 'Safari', icon: <FaSafari className="text-cyan-400" /> },
        { label: 'Opera', icon: <FaOpera className="text-red-500" /> }
      ]
    },
    {
      id: 'mobile',
      span: 'lg:col-span-6',
      icon: <Smartphone className="h-6 w-6 text-purple-400" />,
      chipBg: 'bg-purple-500/10',
      title: 'Mobile Devices',
      description: 'Real devices & emulators.',
      badges: [
        { label: 'iOS', icon: <FaApple className="text-white" /> },
        { label: 'Android', icon: <FaAndroid className="text-green-500" /> },
        { label: 'Flutter', icon: <SiFlutter className="text-cyan-400" /> },
        { label: 'React Native', icon: <FaReact className="text-blue-400" /> }
      ]
    },
    {
      id: 'api',
      span: 'lg:col-span-4',
      icon: <Webhook className="h-5 w-5 text-emerald-400" />,
      chipBg: 'bg-emerald-500/10',
      title: 'API Layer',
      description: '',
      badges: [
        { label: 'REST', icon: <Globe className="h-4 w-4" /> },
        { label: 'SOAP', icon: <Webhook className="h-4 w-4" /> },
        { label: 'GraphQL', icon: <SiGraphql className="text-pink-500" /> },
        { label: 'gRPC', icon: <Globe className="h-4 w-4" /> }
      ]
    },
    {
      id: 'enterprise',
      span: 'lg:col-span-4',
      icon: <Building2 className="h-5 w-5 text-indigo-400" />,
      chipBg: 'bg-indigo-500/10',
      title: 'Enterprise & Legacy',
      description: '',
      badges: [
        { label: 'Java Apps', icon: <FaJava className="text-orange-400" /> },
        { label: '.NET', icon: <SiDotnet className="text-purple-400" /> },
        { label: 'SAP', icon: <Building2 className="h-4 w-4" /> },
        { label: 'Mainframe', icon: <Globe className="h-4 w-4" /> }
      ],
      extraClass: 'bg-slate-800/40'
    },
    {
      id: 'data',
      span: 'lg:col-span-4',
      icon: <DatabaseIcon className="h-5 w-5 text-amber-400" />,
      chipBg: 'bg-amber-500/10',
      title: 'Data Layer',
      description: '',
      badges: [
        { label: 'Postgres', icon: <SiPostgresql className="text-blue-400" /> },
        { label: 'MySQL', icon: <SiMysql className="text-blue-300" /> },
        { label: 'Mongo', icon: <SiMongodb className="text-green-500" /> },
        { label: 'SQL Server', icon: <DatabaseIcon className="h-4 w-4 text-red-400" /> },
        { label: 'Maria', icon: <SiMariadb className="text-orange-300" /> }
      ]
    }
  ];

  return (
    <section className="relative py-20 bg-[#0B1120] text-slate-200 overflow-hidden">
      <style>{`
        .sq-grid-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 30px 30px;
          opacity: 0.6;
          pointer-events: none;
        }
        .sq-tech-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.85rem;
          border-radius: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(15, 23, 42, 0.6);
          font-size: 0.8rem;
          font-weight: 500;
          color: #94a3b8;
          transition: all 0.2s ease;
        }
        .sq-tech-badge:hover {
          color: #e2e8f0;
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(148, 163, 184, 0.1);
        }
      `}</style>

      <div className="sq-grid-bg absolute inset-0" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center md:items-start md:flex-row justify-between gap-6 border-b border-slate-800 pb-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-800 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Ecosystem Support
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              One Platform. <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">All Technologies.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Unified automation infrastructure. From modern frontend frameworks to legacy mainframe systems.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {sections.map((section) => (
            <div key={section.id} className={`${section.span} ${cardClasses} ${section.extraClass ?? ''} p-6`}>
              <div className="flex items-start gap-5 mb-6">
                <div className={`p-3 rounded-xl ${section.chipBg}`}>{section.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                  {section.description && (
                    <p className="text-slate-400 text-sm mt-1">{section.description}</p>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {section.badges.map((badge) => (
                  <span key={badge.label} className="sq-tech-badge">
                    {badge.icon}
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackShowcase;

