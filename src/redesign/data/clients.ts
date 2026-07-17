// Active SimplifyQA customers, per the Preprod customer sheet.
// Local, high-quality SVGs live under /public/logos/customers/.
// For the 6 customers below without a shipped SVG yet, we fall back to
// logo.dev by domain so the UI is not blank — swap to a local SVG when
// available.

const TOKEN = process.env.NEXT_PUBLIC_LOGO_DEV_TOKEN || 'pk_X-1ZO13GSgeOoUrIuJ6GMQ';
const logoDev = (domain: string) =>
  `https://img.logo.dev/${domain}?token=${TOKEN}&format=png&retina=true&size=256`;

export type Client = { name: string; src: string; alt: string; scale?: number };

export const clients: Client[] = [
  // Preprod Active Clients + On-Premise + India Instance
  { name: 'Malaysia Airlines', src: '/logos/customers/malaysia-airlines.svg', alt: 'Malaysia Airlines' },
  { name: 'SMFG',              src: '/logos/customers/smfg.svg',              alt: 'Sumitomo Mitsui Financial Group' },
  { name: 'CGC Malaysia',      src: '/logos/customers/cgc-malaysia.svg',      alt: 'CGC Malaysia' },
  { name: 'Quest Alliance',    src: '/logos/customers/quest-alliance.svg',    alt: 'Quest Alliance' },
  { name: 'NetHealth',         src: '/logos/customers/net-health.svg',        alt: 'Net Health' },
  { name: 'Eu Networks',       src: '/logos/customers/eu-networks.svg',       alt: 'euNetworks' },
  { name: 'Analec',            src: '/logos/customers/analec.svg',            alt: 'Analec' },

  // ponytail: no local SVG yet, using logo.dev fallback. Drop a real SVG into
  // /public/logos/customers/ and swap the src to remove the fallback.
  { name: 'MyEG Malaysia',     src: logoDev('myeg.com.my'),         alt: 'MyEG Services' },
  { name: 'Leadway',           src: logoDev('leadway.com'),         alt: 'Leadway Assurance' },
  { name: 'Technology Mindz',  src: logoDev('technologymindz.com'), alt: 'Technology Mindz' },
  { name: 'Zipcar',            src: logoDev('zipcar.com'),          alt: 'Zipcar' },
  { name: 'Mirae Assets',      src: logoDev('miraeasset.com'),      alt: 'Mirae Assets', scale: 1.6 },
  { name: 'Korcomptenz',       src: logoDev('korcomptenz.com'),     alt: 'Korcomptenz' },
  { name: 'Leapfinance',       src: logoDev('leapfinance.com'),     alt: 'Leapfinance' },
  { name: 'AB-InBev',          src: logoDev('ab-inbev.com'),        alt: 'AB InBev' },
  { name: 'ECCT',              src: logoDev('ecct.info'),           alt: 'ECCT' },
  { name: 'Venus Geo',         src: logoDev('venusgeo.com'),        alt: 'Venus Geo' },
  { name: 'Nuvizz',            src: logoDev('nuvizz.com'),          alt: 'Nuvizz' },
  { name: 'EPSSWIN',           src: logoDev('epsswin.com'),         alt: 'EPSSWIN' },
];
