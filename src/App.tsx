import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Footer from './redesign/Footer';
import Navbar from './redesign/Navbar';
import HomePage from './redesign/HomePage';

// Top-level pages
import AboutPage from './redesign/pages/AboutPage';
import BlogPage from './redesign/pages/BlogPage';
import BlogDetailPage from './redesign/pages/BlogDetailPage';
import CareersPage from './redesign/pages/CareersPage';
import ContactPage from './redesign/pages/ContactPage';
import CustomerSuccessPage from './redesign/pages/CustomerSuccessPage';
import IntegrationsPage from './redesign/pages/IntegrationsPage';
import LegalPage from './redesign/pages/LegalPage';
import PricingPage from './redesign/pages/PricingPage';
import RequestDemoPage from './redesign/pages/RequestDemoPage';
import ResourcesPage from './redesign/pages/ResourcesPage';
import SolutionsPage from './redesign/pages/SolutionsPage';

// Platform pages
import TestManagementPage      from './redesign/pages/platform/TestManagementPage';
import TestAutomationPage      from './redesign/pages/platform/TestAutomationPage';
import AITestAssistantPage     from './redesign/pages/platform/AITestAssistantPage';
import DefectManagementPage    from './redesign/pages/platform/DefectManagementPage';
import ReleaseOrchestrationPage from './redesign/pages/platform/ReleaseOrchestrationPage';
import InsightsReportsPage     from './redesign/pages/platform/InsightsReportsPage';

// Solutions pages
import EnterpriseQAPage        from './redesign/pages/solutions/EnterpriseQAPage';
import AutomationTeamsPage     from './redesign/pages/solutions/AutomationTeamsPage';
import EngineeringLeadersPage  from './redesign/pages/solutions/EngineeringLeadersPage';
import AgileScrumPage          from './redesign/pages/solutions/AgileScrumPage';
import IndustriesPage          from './redesign/pages/solutions/IndustriesPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white text-ink-900">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/"                  element={<HomePage />} />

            {/* Platform */}
            <Route path="/platform/test-management"        element={<TestManagementPage />} />
            <Route path="/platform/test-automation"        element={<TestAutomationPage />} />
            <Route path="/platform/ai-test-assistant"      element={<AITestAssistantPage />} />
            <Route path="/platform/defect-management"      element={<DefectManagementPage />} />
            <Route path="/platform/release-orchestration"  element={<ReleaseOrchestrationPage />} />
            <Route path="/platform/insights-reports"       element={<InsightsReportsPage />} />

            {/* Solutions */}
            <Route path="/solutions"                       element={<SolutionsPage />} />
            <Route path="/solutions/enterprise-qa"         element={<EnterpriseQAPage />} />
            <Route path="/solutions/automation-teams"      element={<AutomationTeamsPage />} />
            <Route path="/solutions/engineering-leaders"   element={<EngineeringLeadersPage />} />
            <Route path="/solutions/agile-scrum"           element={<AgileScrumPage />} />
            <Route path="/solutions/industries"            element={<IndustriesPage />} />

            {/* Top-level */}
            <Route path="/integrations"      element={<IntegrationsPage />} />
            <Route path="/pricing"           element={<PricingPage />} />
            <Route path="/resources"         element={<ResourcesPage />} />
            <Route path="/blog"              element={<BlogPage />} />
            <Route path="/blog/:slug"        element={<BlogDetailPage />} />
            <Route path="/about"             element={<AboutPage />} />
            <Route path="/contact"           element={<ContactPage />} />
            <Route path="/customer-success"  element={<CustomerSuccessPage />} />
            <Route path="/request-demo"      element={<RequestDemoPage />} />
            <Route path="/careers"           element={<CareersPage />} />

            {/* Legal / status */}
            <Route path="/privacy"           element={<LegalPage kind="privacy" />} />
            <Route path="/terms"             element={<LegalPage kind="terms" />} />
            <Route path="/security"          element={<LegalPage kind="security" />} />
            <Route path="/status"            element={<LegalPage kind="status" />} />

            {/* Fallback */}
            <Route path="*"                  element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
