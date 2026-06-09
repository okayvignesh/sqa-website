import { Container } from '../../design';

const logos = [
  'Atlassian', 'GitLab', 'GitHub', 'Jenkins', 'Azure DevOps',
  'Jira', 'Slack', 'ServiceNow', 'Salesforce', 'SAP',
  'Microsoft', 'Oracle', 'AWS',
];

export default function TrustBar() {
  return (
    <section className="relative py-14 sm:py-16 border-y border-ink-900/[0.05] bg-white">
      <Container size="wide">
        <p className="text-center text-[12.5px] font-medium uppercase tracking-[0.18em] text-ink-400">
          Trusted by enterprise QA, automation & engineering teams worldwide
        </p>

        <div className="mt-8 marquee-mask overflow-hidden">
          <div className="marquee-track gap-12 sm:gap-16">
            {[...logos, ...logos].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="shrink-0 flex items-center justify-center h-10 px-2 text-ink-400/80 font-semibold tracking-tight text-[18px] sm:text-[20px] hover:text-ink-700 transition-colors"
                aria-label={name}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
