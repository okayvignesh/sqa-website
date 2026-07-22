import { renderOg } from '../../../src/lib/og';
import { SigDefectManagement } from '../../../src/lib/og-signatures';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'SimplifyQA Defect Management — smart triage, clustering, and root-cause hints';

export default function OgImage() {
  return renderOg({
    eyebrow: 'Platform · Defects',
    title: 'Catch the flake, not the fallout.',
    subtitle:
      'Smart triage, clustering, severity scoring, root-cause hints. Bi-directional Jira and Azure DevOps sync built in.',
    path: 'simplifyqa.app/platform/defect-management',
    signature: <SigDefectManagement />,
  });
}
