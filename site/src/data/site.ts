/**
 * Single source of truth for business details.
 *
 * Everything here comes from the business card supplied by the client, except
 * the values marked TODO — those need confirming before launch. Change a value
 * here and it updates the header, footer, contact page, schema markup and every
 * call-to-action at once.
 */

export const site = {
  name: 'AUS Building and Maintenance Service Pty Ltd',
  shortName: 'AUS Building & Maintenance',
  contactName: 'Akramul',
  tagline: 'Licensed builders and maintenance across Logan and Brisbane',
  description:
    'Licensed building, renovation and property maintenance services in Kingston, Logan and the Brisbane southside. Carpentry, decking, patios, fencing, retaining walls, kitchens, bathrooms and more. Free quotes.',

  licenceNumber: '15383711',
  companyNumber: '695 355 401',
  // TODO: confirm with the client — required for a .com.au domain and the footer.
  abn: 'TODO_ABN',
  // TODO: confirm QBCC licence class and public liability cover amount.
  licenceClass: 'TODO_LICENCE_CLASS',
  publicLiability: 'TODO_PUBLIC_LIABILITY_AMOUNT',

  phone: '+61 466 079 819',
  phoneHref: 'tel:+61466079819',
  phoneDisplay: '0466 079 819',
  whatsapp: 'https://wa.me/61466079819',
  email: 'ausbuildingandconstruction@gmail.com',

  address: {
    street: '36 Aquarius Dr',
    suburb: 'Kingston',
    state: 'QLD',
    postcode: '4114',
    country: 'Australia',
    full: '36 Aquarius Dr, Kingston QLD 4114, Australia',
    // Approximate — replace with the exact pin from Google Business Profile.
    lat: -27.6789,
    lng: 153.1088,
  },

  // TODO: confirm real trading hours with the client.
  hours: [
    { days: 'Monday – Friday', time: '7:00am – 5:00pm' },
    { days: 'Saturday', time: '8:00am – 2:00pm' },
    { days: 'Sunday', time: 'Closed' },
  ],
  /** Machine-readable equivalent of `hours` for the JSON-LD schema. */
  hoursSchema: ['Mo-Fr 07:00-17:00', 'Sa 08:00-14:00'],

  /**
   * Suburbs used in copy and in the `areaServed` schema. These are what people
   * actually type into Google, so keep the list specific rather than just
   * "Brisbane".
   */
  serviceAreas: [
    'Kingston',
    'Logan Central',
    'Woodridge',
    'Springwood',
    'Slacks Creek',
    'Underwood',
    'Loganholme',
    'Shailer Park',
    'Marsden',
    'Browns Plains',
    'Beenleigh',
    'Rochedale',
    'Sunnybank',
    'Mount Gravatt',
    'Brisbane southside',
  ],

  /**
   * Web3Forms access key — free, no account server-side, delivers straight to
   * the Gmail address above. Get the key at https://web3forms.com (enter the
   * business email, it is emailed to you) and paste it here before launch.
   */
  formAccessKey: 'TODO_WEB3FORMS_ACCESS_KEY',

  social: {
    // TODO: add real profile URLs, or delete the entries that don't exist.
    facebook: '',
    instagram: '',
    googleBusiness: '',
  },
} as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

/**
 * Placeholder testimonials so the layout can be reviewed. Replace with real
 * ones — never launch with these. See README "Content checklist".
 */
export const testimonials = [
  {
    quote:
      'PLACEHOLDER — replace with a real review. Two or three sentences about the job, how it went and whether they would recommend.',
    name: 'First name',
    suburb: 'Suburb, QLD',
    service: 'Decking',
  },
  {
    quote:
      'PLACEHOLDER — replace with a real review. Two or three sentences about the job, how it went and whether they would recommend.',
    name: 'First name',
    suburb: 'Suburb, QLD',
    service: 'Bathroom renovation',
  },
  {
    quote:
      'PLACEHOLDER — replace with a real review. Two or three sentences about the job, how it went and whether they would recommend.',
    name: 'First name',
    suburb: 'Suburb, QLD',
    service: 'Fencing',
  },
];
