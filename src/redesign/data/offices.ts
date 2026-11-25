// Real Simplify3x / SimplifyQA office data, sourced from the production website.
// Update this single file when offices, phones, or the contact email change.

export type Office = {
  city: string;
  country: string;
  badge?: string;       // e.g. "Head Office"
  address: string;      // full street address
  phone?: string;
  hours?: string;
};

export const supportEmail = 'support@simplify3x.com';

export const offices: Office[] = [
  {
    city: 'Bengaluru',
    country: 'India',
    badge: 'Head Office',
    address: 'BCIT, Block 1, Ground Floor, Bhartiya City, RK Hegde Nagar, Bangalore',
    hours: 'Mon to Friday',
  },
  {
    city: 'Bengaluru',
    country: 'India',
    address: '406, 2nd & 3rd Floor, 1st Block, 7th Main Hennur Road, Banaswadi, Bengaluru, Karnataka, 560043',
    hours: 'Mon to Friday',
  },
  {
    city: 'Orlando',
    country: 'Florida, USA',
    address: '1317 Edgewater Dr 897, Orlando, Florida 32804',
    hours: 'Mon to Friday',
  },
  {
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    address: '466, Unit 6, Level 4, SetiaWalk Mall (Block K), SetiaWalk, Persiaran Wawasan, Pusat Bandar Puchong, 47160',
    hours: 'Mon to Friday',
  },
];
