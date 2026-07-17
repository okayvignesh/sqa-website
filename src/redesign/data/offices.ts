// Real Simplify3x / SimplifyQA office data, sourced from the production website.
// Update this single file when offices, phones, or the contact email change.

export type Office = {
  city: string;
  country: string;
  badge?: string;       // e.g. "Head Office"
  address: string;      // full street address
  phone: string;
  hours?: string;
};

export const supportEmail = 'support@simplify3x.com';

export const offices: Office[] = [
  {
    city: 'Bengaluru',
    country: 'India',
    badge: 'Head Office',
    address: 'BCIT, Block 1, Ground Floor, Bhartiya City, RK Hegde Nagar, Bangalore',
    phone: '+91 90194 07023',
    hours: 'Mon, Fri',
  },
  {
    city: 'Bengaluru',
    country: 'India',
    address: '406, 2nd & 3rd Floor, 1st Block, 7th Main Hennur Road, Banaswadi, Bengaluru, Karnataka, 560043',
    phone: '+91 80 4111 6728',
    hours: 'Mon, Fri',
  },
  {
    city: 'Orlando',
    country: 'Florida, USA',
    address: '1317 Edgewater Dr 897, Orlando, Florida 32804',
    phone: '+1 (678) 954-3946',
    hours: 'Mon, Fri',
  },
  {
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    address: '466, Unit 6, Level 4, SetiaWalk Mall (Block K), SetiaWalk, Persiaran Wawasan, Pusat Bandar Puchong, 47160',
    phone: '+60 3 8602 2095',
    hours: 'Mon, Fri',
  },
];
