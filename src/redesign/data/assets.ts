// Local-asset references used across the redesign (encoding handled here so
// component code stays clean).
//
// Customer logos → see ./clients.ts (sourced from logo.dev).
// Integration logos → see ./integrations.tsx (sourced from devicon / simpleicons.org / svgl.app).

const enc = (path: string) => path.split('/').map(encodeURIComponent).join('/');

export const logo = `/${enc('SimplifyQA logo Grey.png')}`;

export const certs = [
  { name: 'SOC 2',       file: 'assets/crt/SOC.png',             alt: 'SOC 2 compliance badge' },
  { name: 'ISO 27001',   file: 'assets/crt/Intercert.Png',       alt: 'ISO 27001 certification badge' },
  { name: 'GDPR',        file: 'assets/crt/GDPR compliant.png',  alt: 'GDPR compliant badge' },
  { name: 'HIPAA',       file: 'assets/crt/HIPAA compliant.png', alt: 'HIPAA compliant badge' },
].map((c) => ({ ...c, src: `/${enc(c.file)}` }));
