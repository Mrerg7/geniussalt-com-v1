export const SITE = {
  name: 'geniussalt.com',
  title: 'geniussalt.com • The Essential Seasoning of Genius | Premium Domain for Acquisition',
  description:
    'geniussalt.com — The Essential Seasoning of Genius. A premium brandable domain uniting the spark of genius with the grounding power of salt. Available for strategic acquisition by serious buyers.',
  url: 'https://geniussalt.com',
  locale: 'en_US',
  acquisitionEmail: 'sales@desertrich.com',
  updated: '2026-06-23',
} as const;

export const ACQUISITION_MAILTO = `mailto:${SITE.acquisitionEmail}?subject=${encodeURIComponent(
  `${SITE.name} — Domain Acquisition Inquiry`,
)}&body=${encodeURIComponent(
  'Hello,\n\nI am interested in acquiring geniussalt.com. Please share availability, terms, and next steps.\n\n— ',
)}`;
