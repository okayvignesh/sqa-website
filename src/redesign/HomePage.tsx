import Hero from './sections/Hero';
import TrustBar from './sections/TrustBar';
import BentoFeatures from './sections/BentoFeatures';
import AIShowcase from './sections/AIShowcase';
import WorkflowTimeline from './sections/WorkflowTimeline';
import Integrations from './sections/Integrations';
import Stats from './sections/Stats';
import Testimonials from './sections/Testimonials';
import CTA from './sections/CTA';

export default function HomePageV2() {
  return (
    <>
      <Hero />
      <TrustBar />
      <BentoFeatures />
      <AIShowcase />
      <WorkflowTimeline />
      <Stats />
      <Integrations />
      <Testimonials />
      <CTA />
    </>
  );
}
