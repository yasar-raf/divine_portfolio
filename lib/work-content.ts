export type Section = {
  heading: string;
  body: string[];
  list?: string[];
};

export type FullCaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  org: string;
  period: string;
  outcome_stat: { value: string; label: string }[];
  sections: Section[];
  artifacts: { label: string; href: string }[];
};

export const fullCaseStudies: Record<string, FullCaseStudy> = {
  'vocational-education': {
    slug: 'vocational-education',
    title: 'Vocational Education Module',
    tagline:
      'A four-phase rollout connecting 30,000 students and 400 teachers to MSME industries across Tamil Nadu.',
    role: 'Product Manager',
    org: 'Xenovex Technologies × TN EMIS · School Education Department',
    period: 'Feb 2024 — present',
    outcome_stat: [
      { value: '30,000', label: 'students tagged to industries' },
      { value: '400', label: 'teachers onboarded' },
      { value: '4', label: 'phases shipped' },
    ],
    sections: [
      {
        heading: 'Context',
        body: [
          'Tamil Nadu runs one of the largest school systems in the world. Vocational education in this system was, until 2024, a paper-driven process — student records on local registers, industry partnerships negotiated school-by-school, attendance tracked in notebooks. The data never reached the State.',
          'The mandate from the School Education Department was clear: build a digital backbone that lets the state see, in real time, which student is learning which trade, where, and how often. The catch — it had to be usable by Block Resource Coordinators in rural Tamil Nadu, not just officers in Chennai.',
        ],
      },
      {
        heading: 'Users',
        body: [
          'Three primary user groups, each with sharply different needs and tolerance for friction:',
        ],
        list: [
          'Vocational students and their teachers — the people the system exists for',
          'BRC supervisors — validators sitting between the school and the State',
          'TNSED administrators — policy-side users who care about aggregates, exceptions, and outcomes',
        ],
      },
      {
        heading: 'Decisions I made',
        body: [
          'I broke the rollout into four sequential phases instead of a single launch, because the system would only work if every prior layer was clean before the next one shipped. A big-bang rollout would have buried us in data quality issues we could not unwind.',
        ],
        list: [
          'Phase 1 — Tag every vocational student to an MSME category before anything else. The MSME taxonomy became the spine of the data model.',
          'Phase 2 — Hand validation to BRC supervisors. They know the schools. They are the right gate.',
          'Phase 3 — Integrate attendance and feedback into the existing TNSED TN Schools App so teachers learn one tool, not two.',
          'Phase 4 — Open up real-time monitoring through the TNSED Administrators App so the State could finally see the system it was running.',
        ],
      },
      {
        heading: 'What shipped',
        body: [
          'A four-app stack that runs end-to-end: student tagging, supervisor validation, attendance + feedback capture, and administrator dashboards. Cross-functional delivery with developers and testers at Xenovex, plus department officials guiding the policy side.',
        ],
      },
      {
        heading: 'Outcome',
        body: [
          'Industry engagement is now measurable for the first time. Stakeholders — from teachers up to the Director — have the same source of truth. Hands-on learning is finally accountable to the State that funds it.',
        ],
      },
    ],
    artifacts: [
      { label: 'Detailed program report', href: '#' },
      { label: 'TNSED TN Schools App', href: '#' },
      { label: 'TNSED Administrators App', href: '#' },
    ],
  },

  'transfer-counselling': {
    slug: 'transfer-counselling',
    title: 'Transfer Counselling Module',
    tagline:
      'Digitized teacher transfer counselling for an entire state — 5 lakh teachers, one cycle, on time.',
    role: 'Product Manager',
    org: 'TN EMIS · School Education Department',
    period: 'Feb 2024 — present',
    outcome_stat: [
      { value: '5,00,000', label: 'eligible teachers' },
      { value: '100%', label: 'cycle completed on time' },
      { value: '0', label: 'manual paper steps remain' },
    ],
    sections: [
      {
        heading: 'Context',
        body: [
          'For decades, Tamil Nadu’s teacher transfer counselling ran on paper — applications, eligibility checks, vacancy lists, allocations. Each cycle drew complaints about transparency, equity, and timing. Teachers waited. Schools waited. Trust eroded.',
          'The 2024 — 26 cycle was the first attempt to digitize the entire flow under a single module, with real-time EMIS sync and role-based access for every category of stakeholder.',
        ],
      },
      {
        heading: 'Users',
        body: [
          'A wide set of users with very different power and very different needs:',
        ],
        list: [
          'Teachers across thousands of designations, each with their own eligibility logic',
          'Samagra Shiksha staff coordinating at the block and district level',
          'School Education Department administrators approving and finalizing allocations',
          'Directors and State Coordinators monitoring the cycle as it unfolded',
        ],
      },
      {
        heading: 'Decisions I made',
        body: [
          'Three calls shaped how the module landed:',
        ],
        list: [
          'A specialized form for each designation rather than a generic one — this took longer to build but eliminated entire classes of edge cases at submission time.',
          'Eligibility filtering applied before vacancy lists were shown, so teachers only saw what they could actually apply to. This compressed the support load to almost nothing.',
          'Real-time sync with EMIS, so the source of truth never drifted between systems. Every decision in counselling reflected the latest official record.',
        ],
      },
      {
        heading: 'What shipped',
        body: [
          'A unified counselling module rolled out statewide for the 2024 — 26 cycle. Specialized forms, eligibility-aware filtering, role-based access, audit trails. A traditionally manual process now lives as a scalable, accountable system.',
        ],
      },
      {
        heading: 'Outcome',
        body: [
          'The cycle finished within the defined timelines. Application flow simplified. Manual intervention minimized. Vacancy visibility improved across the board. Directors and State Coordinators flagged user experience as a tangible improvement over the prior paper process.',
        ],
      },
    ],
    artifacts: [
      { label: 'Cycle summary (internal)', href: '#' },
      { label: 'EMIS portal', href: '#' },
    ],
  },

  'karur-initiatives': {
    slug: 'karur-initiatives',
    title: 'Karur District Initiatives',
    tagline:
      'Five district-level programs reducing dropouts and lifting literacy, under the leadership of District Collector Dr. Prabhu Shankar, IAS.',
    role: 'Education Fellow · District Project Management Unit',
    org: 'Madhi Foundation × Tamil Nadu Government',
    period: 'Sep 2022 — Mar 2024',
    outcome_stat: [
      { value: '5', label: 'flagship district programs' },
      { value: '17', label: 'months in the field' },
      { value: '1', label: 'district, end-to-end' },
    ],
    sections: [
      {
        heading: 'Context',
        body: [
          'Karur is a mid-sized district in Tamil Nadu with the same education challenges that show up across the state in different ratios: school dropouts, foundational literacy gaps, adolescent health, and patchy career guidance. The District Collector wanted these tackled together, not as siloed programs.',
          'I joined the District Project Management Unit as a Tamil Nadu Education Fellow under Madhi Foundation, embedded with the Chief Educational Office. The job was to translate state-level policy into things that actually happened in classrooms.',
        ],
      },
      {
        heading: 'Programs led',
        body: [
          'Five flagship initiatives, each with its own theory of change:',
        ],
        list: [
          'Palli Kooda Mani Adichachi — reduced school dropouts through community-level engagement and outreach.',
          'Ennum Ezhuthum — strengthened foundational literacy and numeracy at the primary level.',
          'Uthiram Uyarthuvom — tackled adolescent anaemia through awareness and screening campaigns.',
          'Karur Book Festival — promoted literacy through a district-wide cultural event.',
          'Nan Mudhalvan Camp — career guidance for older students preparing for the world after school.',
        ],
      },
      {
        heading: 'Decisions I made',
        body: [
          'The work was less product-design and more systems orchestration. Three calls mattered:',
        ],
        list: [
          'Build a District Dashboard in Looker Studio so monthly review meetings argued from data, not anecdote. The dashboard became the spine of CEO-level decisions.',
          'Compile a comprehensive District Profile — students, teachers, schemes — so every program had a shared baseline to plan against.',
          'Launch Kalvi Vanoli (a Tamil podcast) and a district E-Magazine, so the work was visible to the community it served, not just to the State.',
        ],
      },
      {
        heading: 'What shipped',
        body: [
          'Five live programs, monthly review meetings backed by real data, a district profile that became reference material for incoming officers, and a media stack — podcast, magazine, social — that gave the district its own voice.',
        ],
      },
      {
        heading: 'Outcome',
        body: [
          'The fellowship ended in March 2024, but the systems persisted: course corrections were data-driven, programs were measurable, and the next cohort had a baseline to start from. The fellowship was the bridge between policy intent and classroom outcome.',
        ],
      },
    ],
    artifacts: [
      { label: 'District Dashboard (Looker Studio)', href: '#' },
      { label: 'District Profile', href: '#' },
      { label: 'Karur E-Magazine', href: '#' },
      { label: 'Kalvi Vanoli (Spotify)', href: '#' },
    ],
  },
};
