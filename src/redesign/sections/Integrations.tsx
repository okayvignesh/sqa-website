import { motion } from 'framer-motion';
import { ArrowRight, Plug } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, Eyebrow, Reveal } from '../../design';

const integrations = [
  'Jira', 'GitLab', 'GitHub', 'Jenkins', 'Azure DevOps', 'Bitbucket',
  'Slack', 'Teams', 'ServiceNow', 'Salesforce', 'SAP', 'Selenium',
  'Appium', 'Postman', 'Cypress', 'Playwright', 'Datadog', 'Splunk',
  'Okta', 'Azure AD', 'AWS', 'GCP', 'Kubernetes', 'Docker',
];

export default function Integrations() {
  return (
    <section id="integrations" className="relative py-24 sm:py-32 bg-white">
      <Container size="wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Reveal>
              <Eyebrow icon={<Plug className="w-3.5 h-3.5" />}>Integrations</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-display-lg text-ink-900 text-balance">
                Slots in beside your <span className="gradient-text">existing stack</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-[17px] text-ink-500 max-w-xl">
                100+ deep integrations across project management, version control, CI/CD,
                identity, observability, and enterprise apps. Two-way sync — not just webhooks.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link to="/integrations" className="btn-primary">
                  Browse all integrations <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="btn-ghost">
                  Talk to solutions
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="relative">
            <div aria-hidden className="absolute -inset-8 rounded-[40px] bg-mesh opacity-70 -z-10" />
            <div className="grid grid-cols-4 gap-3 sm:gap-4">
              {integrations.map((name, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 10, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: (i % 8) * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4 }}
                  className="aspect-square rounded-2xl glass-card grid place-items-center text-center px-2"
                >
                  <div>
                    <div className="mx-auto w-8 h-8 rounded-lg bg-gradient-to-br from-brand-50 to-white border border-brand-100 grid place-items-center">
                      <span className="text-[11px] font-bold text-brand-700">{name.slice(0,2)}</span>
                    </div>
                    <div className="mt-2 text-[11.5px] font-medium text-ink-700 leading-tight">{name}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
