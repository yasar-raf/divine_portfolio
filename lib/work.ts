export type CaseStudy = {
  slug: string;
  title: string;
  role: string;
  org: string;
  period: string;
  outcome: string;
  one_liner: string;
  cover_color: string;
  cover_label: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'vocational-education',
    title: 'Vocational Education Module',
    role: 'Product Manager',
    org: 'TN EMIS · School Education Department',
    period: 'Feb 2024 — present',
    outcome: 'Tagged 1.2 crore students to MSME industries across a four-phase statewide rollout.',
    one_liner: 'A scalable vocational system, end-to-end.',
    cover_color: 'from-sienna to-sienna-deep',
    cover_label: '01',
  },
  {
    slug: 'transfer-counselling',
    title: 'Transfer Counselling Module',
    role: 'Product Manager',
    org: 'TN EMIS · School Education Department',
    period: 'Feb 2024 — present',
    outcome: 'Digitized teacher transfer counselling for an entire state — 5 lakh teachers, one cycle, on time.',
    one_liner: 'A manual process, made transparent and equitable.',
    cover_color: 'from-ink to-muted',
    cover_label: '02',
  },
  {
    slug: 'karur-initiatives',
    title: 'Karur District Initiatives',
    role: 'Education Fellow',
    org: 'Madhi Foundation × Tamil Nadu Govt',
    period: 'Sep 2022 — Mar 2024',
    outcome: 'Five district programs reducing dropouts and strengthening foundational literacy under IAS leadership.',
    one_liner: 'Policy that reaches the classroom.',
    cover_color: 'from-sienna-soft to-sienna',
    cover_label: '03',
  },
];
