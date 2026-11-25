'use client';

import Hero from './sections/Hero';
import TrustBar from './sections/TrustBar';
import BentoFeatures from './sections/BentoFeatures';
import ReportDashboard from './sections/ReportDashboard';
import ExecutionCopilot from './sections/ExecutionCopilot';
import AIShowcase from './sections/AIShowcase';
import WorkflowTimeline from './sections/WorkflowTimeline';
import Integrations from './sections/Integrations';
import Stats from './sections/Stats';
import ProductsSuite from './sections/ProductsSuite';
import HomeFAQ from './sections/HomeFAQ';
import CTA from './sections/CTA';
import CapabilityStrip from './sections/CapabilityStrip';
import WhatsNew from './sections/WhatsNew';

export default function HomePageV2() {
  return (
    <>
      <Hero />
      <CapabilityStrip />
      <TrustBar />
      <BentoFeatures />
      <ProductsSuite />
      <ReportDashboard />
      <ExecutionCopilot />
      <AIShowcase />
      <WorkflowTimeline />
      <Stats />
      <Integrations />
      <WhatsNew />
      <HomeFAQ />
      <CTA />
    </>
  );
}
