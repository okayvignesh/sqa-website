'use client';

import Hero from './sections/Hero';
import TrustBar from './sections/TrustBar';
import BentoFeatures from './sections/BentoFeatures';
import ReportDashboard from './sections/ReportDashboard';
import AIShowcase from './sections/AIShowcase';
import WorkflowTimeline from './sections/WorkflowTimeline';
import Integrations from './sections/Integrations';
import Stats from './sections/Stats';
import CTA from './sections/CTA';

export default function HomePageV2() {
  return (
    <>
      <Hero />
      <TrustBar />
      <BentoFeatures />
      <ReportDashboard />
      <AIShowcase />
      <WorkflowTimeline />
      <Stats />
      <Integrations />
      <CTA />
    </>
  );
}
