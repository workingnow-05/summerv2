/** Production content + real place/event captions (no framed Study/City/Fun prefixes). */

export const HERO_SLIDES = [
  {
    kind: 'fun',
    src: '/photos/hero-graduates-figma.jpg',
    caption: 'Commencement selfie with classmates under a clear blue sky',
    alt: 'Four graduates in caps and gowns taking a group selfie',
  },
  {
    kind: 'city',
    src: '/figma/program-3.jpg',
    caption: 'Tulane and Loyola campuses with the New Orleans skyline beyond',
    alt: 'Aerial view of Tulane and Loyola campuses with New Orleans skyline and Superdome',
  },
  {
    kind: 'fun',
    src: '/photos/festival-night.jpg',
    caption: 'Night festival crowd facing the main stage lights',
    alt: 'Silhouetted crowd at an outdoor music festival facing a lit stage',
  },
  {
    kind: 'city',
    src: '/photos/mission-bay.jpg',
    caption: 'Mission Bay and the Ingraham Street Bridge, San Diego',
    alt: 'Aerial view of Mission Bay with bridge, shoreline parks, and Crown Point',
  },
  {
    kind: 'fun',
    src: '/photos/mardi-gras-parade.jpg',
    caption: 'Mardi Gras parade float rolling through a New Orleans crowd',
    alt: 'Colorful Mardi Gras jester float and crowd on a tree-lined New Orleans street',
  },
  {
    kind: 'study',
    src: '/figma/hero-1.jpg',
    caption: 'The Immaculata Parish on the University of San Diego campus',
    alt: 'Blue-domed Immaculata Parish and palm trees at University of San Diego',
  },
]

export const PROGRAMS = [
  {
    id: 'supply-chain',
    number: '01',
    school: 'Knauss School of Business',
    university: 'University of San Diego',
    logo: '/figma/logo-usd-ksb.png',
    title: 'Global Business & Global Supply Chain Strategy',
    formTitle: 'Global Supply Chain Strategy',
    formAffiliation: 'USD · Knauss',
    city: 'San Diego, California',
    date: 'July to August 2027',
    cohort: '60 students',
    fee: '$2,400',
    image: '/figma/program-1.jpg',
    drawerImage: '/photos/prog-usd-knauss.jpg',
    caption: 'Knauss School of Business courtyard, University of San Diego',
    accent: 'sunset',
    cta: 'blue',
    media: [
      {
        type: 'pair',
        images: ['/photos/usd-campus.jpg', '/figma/hero-5.jpg'],
        captions: [
          'University of San Diego campus',
          'Gaslamp Quarter — historic heart of San Diego',
        ],
      },
      {
        type: 'pair',
        images: ['/photos/mission-bay.jpg', '/photos/festival-night.jpg'],
        captions: [
          'Mission Bay, San Diego',
          'Summer festival night under stage lights',
        ],
      },
      {
        type: 'video',
        youtubeId: 'qhSYcbwjxaI',
        caption: 'University of San Diego campus tour',
      },
    ],
    desc: "Learn how global supply chains, cross-border trade and AI-led transformation work, with faculty-led sessions and industry exposure in America's busiest border economy.",
    badges: ['Bloomberg #48 MBA globally', '#49 MS Supply Chain Mgmt globally'],
    experience: [
      '15 hours of faculty-led sessions on global supply chains',
      'Company site visits to leading San Diego firms',
      'On-campus housing, meals, materials and transport to visits',
      "San Diego's border culture, coastline and neighborhoods",
      'Certificate of completion from USD Knauss School of Business',
    ],
    curriculum: [
      'Supply Chain Strategy & Design in a Global Economy',
      'Cross-Border Trade & the CaliBaja Corridor',
      'Technology, AI & Digital Supply Chain Transformation',
      'Sustainable & Ethical Global Sourcing',
      'International Business Negotiation & Cultural Intelligence',
      "Industry Case Studies: San Diego's Innovation Ecosystem",
    ],
    whyHeading: 'Why choose Knauss?',
    why: [
      ['Dual AACSB accredited', 'Held by fewer than 2% of business schools worldwide.'],
      ['Supply Chain Management Institute', 'Running since 1986, with 200+ industry professionals at its forums.'],
      ['Ahlers Center', 'Students consult for brands like Mazda and L’Oréal.'],
      ['$80M Knauss Center', '120,000 sq ft with analytics and finance labs.'],
    ],
  },
  {
    id: 'agentic-ai',
    number: '02',
    school: 'Shiley-Marcos School of Engineering',
    university: 'University of San Diego',
    logo: '/figma/logo-usd-eng.png',
    title: 'Agentic AI & Autonomous Agents',
    formTitle: 'Agentic AI & Autonomous Agents',
    formAffiliation: 'USD · Shiley-Marcos',
    city: 'San Diego, California',
    date: 'July to August 2027',
    cohort: '30 students',
    fee: '$3,500',
    image: '/figma/program-2.jpg',
    drawerImage: '/photos/prog-usd-eng.jpg',
    caption: 'The Immaculata overlooking Colachis Plaza, USD',
    accent: 'blue',
    cta: 'blue',
    media: [
      {
        type: 'pair',
        images: ['/photos/prog-usd-eng.jpg', '/figma/hero-4.jpg'],
        captions: [
          'Shiley-Marcos Center for Design & Innovation, USD',
          'Balboa Park lily pond and California Tower',
        ],
      },
      {
        type: 'pair',
        images: ['/figma/hero-2.jpg', '/photos/shiley-mardi-gras-lawn.jpg'],
        captions: [
          'Pacific sunset along the San Diego coast',
          'Moonlit Mardi Gras glow on the USD campus lawn',
        ],
      },
      {
        type: 'video',
        youtubeId: 'qhSYcbwjxaI',
        caption: 'University of San Diego campus tour',
      },
    ],
    desc: "Get hands-on with applied AI, cybersecurity engineering and agentic systems, with faculty-led learning and industry exposure in San Diego's tech and innovation ecosystem.",
    badges: ['#13 Nationally by U.S. News', 'NCAE-C Designated'],
    experience: [
      'About 15 hours with Shiley-Marcos PhD faculty on AI and cybersecurity',
      'Company site visits to leading San Diego firms',
      'On-campus housing and three meals a day',
      'Meet the builders and thinkers shaping San Diego’s technology scene.',
      'Certificate of completion from USD Shiley-Marcos School of Engineering',
    ],
    curriculum: [
      'Agentic AI & Autonomous Systems',
      'Generative AI & Large Language Models',
      'Retrieval-Augmented Generation (RAG)',
      'AI in Cybersecurity',
      'AI-Enabled IoT & Smart Systems',
    ],
    whyHeading: 'Why choose Shiley-Marcos?',
    why: [
      ['#13 Nationally', 'Among non-doctoral engineering programs, per U.S. News & World Report.'],
      [
        'NCAE-C Designated',
        'The MS in Cyber Security Engineering holds National Center of Academic Excellence in Cybersecurity status.',
      ],
      ['Cyber Center (CCSET)', 'Hosts symposiums, executive programs and recruiter events.'],
      ['San Diego Innovation Hub', '2,000+ tech companies and 378+ AI firms.'],
      ['Changemaking Engineers', 'Technical depth paired with ethics and real-world problem solving.'],
    ],
  },
  {
    id: 'connected-future',
    number: '03',
    school: 'A. B. Freeman School of Business',
    university: 'Tulane University',
    logo: '/figma/figma-immersion-6.png',
    title: 'Connected Future: AI, Industry 4.0 & Sustainable Innovation',
    formTitle: 'Connected Future: AI & Sustainable Innovation',
    formAffiliation: 'Tulane · Freeman',
    city: 'New Orleans, Louisiana',
    date: 'July to August 2027',
    cohort: '30 students',
    fee: '$3,700',
    image: '/figma/program-3.jpg',
    drawerImage: '/photos/prog-tulane-goldring.jpg',
    caption: 'Tulane and Loyola campuses with the New Orleans skyline beyond',
    accent: 'green',
    cta: 'green',
    media: [
      {
        type: 'pair',
        images: ['/photos/prog-tulane-aerial.jpg', '/photos/mardi-gras-parade.jpg'],
        captions: [
          'Tulane and Loyola campuses with the New Orleans skyline beyond',
          'Mardi Gras parade float rolling through a New Orleans crowd',
        ],
      },
      {
        type: 'pair',
        images: ['/photos/hero-jazz-lights.jpg', '/photos/tulane-freeman-atrium.jpg'],
        captions: [
          'Confetti and neon on a New Orleans festival night',
          'Freeman panel and networking in the Goldring atrium',
        ],
      },
      {
        type: 'video',
        youtubeId: 'Tdwaf5Zqt7Y',
        caption: 'Tulane University campus & student life',
      },
    ],
    desc: "See how AI, energy, logistics and advanced manufacturing are reshaping global business, through faculty-led instruction and experiential learning in one of America's great port economies.",
    badges: ['AACSB-Accredited Business Education', 'Potential Industry Visits'],
    experience: [
      '15 hours of faculty-led sessions on AI, supply chains, energy and smart manufacturing',
      'Three company or site visits across industries like ports, energy and manufacturing',
      'Meet Freeman faculty and industry professionals',
      "Explore New Orleans, one of America's great port cities, beyond the classroom",
      'Certificate of completion from the A. B. Freeman School of Business',
    ],
    curriculum: [
      'AI & Business Decision Making',
      'Supply Chains, Ports & Global Logistics',
      'Future of Energy & Industrial Transformation',
      'Smart Manufacturing & Industry 4.0',
      'Business Analytics',
      'Sustainability & Infrastructure',
      'Leadership in Complex Organizations',
    ],
    whyHeading: 'Why choose Tulane?',
    why: [
      [
        'AACSB-Accredited Business Education',
        "Set in one of America's key port and energy economies, where logistics, AI, healthcare, manufacturing and energy meet.",
      ],
      [
        'Potential Industry Visits',
        'May include the Port of New Orleans, Entergy, Shell, Chevron, NASA Michoud and Ochsner Health.',
      ],
      [
        'Learning Inside Industry',
        'See how AI, supply chains and the energy transition work inside leading organizations, not just in a classroom.',
      ],
    ],
  },
]

/** Mixed: Explore / Learn / Connect / Experience — copy tuned to each tile photo */
export const EXPERIENCE_TILES = [
  {
    label: 'Explore',
    copy: 'Step past the lecture hall into a living city—street grids, river trade, and neighborhoods that shape how business really moves.',
    src: '/photos/nola-french-quarter-aerial.jpg',
    caption: 'French Quarter rooftops and the Mississippi at golden hour',
    alt: 'Aerial view of New Orleans French Quarter curving along the Mississippi River at sunset',
  },
  {
    label: 'Learn',
    copy: 'Sit with faculty and peers on a live U.S. campus—fair tables, clubs, and the day-to-day energy of student life.',
    src: '/photos/exp-learn-usd-fair.jpg',
    caption: 'Campus involvement fair at La Gran Terraza, USD',
    alt: 'Students at a USD campus fair under blue and green pennants near The Immaculata',
  },
  {
    label: 'Connect',
    copy: 'Share the season with your cohort—parades, nights out, and the local traditions you’ll remember longer than any slide deck.',
    src: '/photos/exp-festival-friends.jpg',
    caption: 'Disco costumes and foam fill a Mardi Gras parade night',
    alt: 'Mardi Gras revelers in disco costumes under falling foam on a New Orleans street',
  },
  {
    label: 'Experience',
    copy: 'Weekend light on the water—marinas, shoreline walks, and the coastal calm that balances a packed immersion week.',
    src: '/photos/mission-bay.jpg',
    caption: 'Mission Bay marina and shoreline, San Diego',
    alt: 'Aerial golden-hour view of Mission Bay with sailboats, beaches, and palm trees',
  },
]

export const JOURNEY = [
  ['01', 'Explore', 'Compare schools, cities, curriculum and cost to find the immersion that fits your degree plan.'],
  ['02', 'Book your seat', 'Pay a ₹75,000 deposit online to hold your place. It’s adjusted against your program fee.'],
  ['03', 'Cohort confirmation', 'Once the minimum cohort is met, your program is confirmed and we share the next steps.'],
  ['04', 'Visa support', 'Our team guides you through your U.S. visa application, documents and interview prep.'],
  ['05', 'Final payment', 'Pay the balance at least 120 days before the immersion begins.'],
  ['06', 'Travel & support', "One GradRight contact coordinates flights and campus arrival, and stays with you until you're back in India."],
]

export const FAQS = [
  [
    'Who is eligible for these U.S. immersion programs?',
    'These immersion programs are designed for pre-final and final-year students looking to gain international academic and industry exposure.',
  ],
  [
    'How long are the U.S. immersion programs?',
    'Each program is designed as a 7-day U.S. immersion experience, combining academic sessions, industry visits, campus experiences, and cultural exploration.',
  ],
  [
    'When will the U.S. immersion programs take place?',
    'The programs are scheduled for Summer 2027. The two University of San Diego programs are planned for July–August 2027.',
  ],
  [
    'Where are the U.S. immersion programs held?',
    'The programs are hosted at the University of San Diego in San Diego, California, and Tulane University in New Orleans, Louisiana.',
  ],
  [
    'What are the U.S. immersion program fees?',
    'The program fee is $3,500 per student for USD Shiley-Marcos, $2,400 per student for USD Knauss, and $3,700 per student for Tulane Freeman.',
  ],
  [
    'What do the U.S. immersion programs include?',
    'The programs combine university-led academic sessions, company and industry visits, campus experiences, networking opportunities, and cultural experiences across a 7-day immersion.',
  ],
]

export const NAV_LINKS = [
  { href: '#programs', label: 'Programs' },
  { href: '#experience', label: 'Experience' },
  { href: '#interest', label: 'Mark your interest' },
  { href: '#how', label: 'How it works' },
  { href: '#faqs', label: 'FAQs' },
]
