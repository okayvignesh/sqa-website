// Customer trust-bar catalog — logos sourced via logo.dev (Clearbit successor).
// Free public demo token used; users with a logo.dev account should swap in their
// own token via VITE_LOGO_DEV_TOKEN.

const TOKEN = (import.meta as any)?.env?.VITE_LOGO_DEV_TOKEN || 'pk_X-1ZO13GSgeOoUrIuJ6GMQ';
const logo = (domain: string) =>
  `https://img.logo.dev/${domain}?token=${TOKEN}&format=png&retina=true&size=256`;

export type Client = { name: string; src: string; alt: string };

export const clients: Client[] = [
  { name: 'Malaysia Airlines', src: logo('malaysiaairlines.com'), alt: 'Malaysia Airlines' },
  { name: 'OpenText',          src: logo('opentext.com'),         alt: 'OpenText' },
  { name: 'UST',               src: logo('ust.com'),              alt: 'UST' },
  { name: 'Dexcom',            src: logo('dexcom.com'),           alt: 'Dexcom' },
  { name: 'Carelon',           src: logo('carelon.com'),          alt: 'Carelon' },
  { name: 'Vodacom',           src: logo('vodacom.co.za'),        alt: 'Vodacom' },
  { name: 'Elevance Health',   src: logo('elevancehealth.com'),   alt: 'Elevance Health' },
  { name: 'Aditya Birla',      src: logo('adityabirla.com'),      alt: 'Aditya Birla Group' },
  { name: "Dr Reddy's",        src: logo('drreddys.com'),         alt: "Dr Reddy's Laboratories" },
  { name: 'NCBA Group',        src: logo('ncbagroup.com'),        alt: 'NCBA Group' },
  { name: 'Availity',          src: logo('availity.com'),         alt: 'Availity' },
  { name: 'Rawbank',           src: logo('rawbank.com'),          alt: 'Rawbank' },
  { name: 'Mesiniaga',         src: logo('mesiniaga.com.my'),     alt: 'Mesiniaga' },
  { name: 'Net Health',        src: logo('nethealth.com'),        alt: 'Net Health' },
  { name: 'Envista',           src: logo('envistaco.com'),        alt: 'Envista Holdings' },
  { name: 'Perfios',           src: logo('perfios.com'),          alt: 'Perfios' },
  { name: 'LeapScholar',       src: logo('leapscholar.com'),      alt: 'LeapScholar' },
  { name: 'SMFG',              src: logo('smfg.co.jp'),           alt: 'Sumitomo Mitsui Financial Group' },
  { name: 'myEG',              src: logo('myeg.com.my'),          alt: 'MyEG Services' },
  { name: 'Körber',            src: logo('koerber.com'),          alt: 'Körber' },
  { name: 'euNetworks',        src: logo('eunetworks.com'),       alt: 'euNetworks' },
  { name: 'Equity Bank',       src: logo('equitybank.co.ke'),     alt: 'Equity Bank' },
  { name: 'Globitel',          src: logo('globitel.com'),         alt: 'Globitel' },
  { name: 'CGC Malaysia',      src: logo('cgc.com.my'),           alt: 'Credit Guarantee Corporation Malaysia' },
];
