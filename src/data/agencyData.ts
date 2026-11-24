export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  subServices: string[];
  icon: string;
  deliverables: string[];
  popularTag?: string;
}

export const servicesData: ServiceCategory[] = [
  {
    id: 'web-dev',
    number: '01',
    title: 'Web Development',
    tagline: 'High-performance digital flagships that convert',
    description: 'We engineer blazingly fast, modern websites and e-commerce platforms tailored to reflect your brand and drive measurable business results.',
    subServices: [
      'Website Design & Development',
      'High-Converting Landing Pages',
      'Modern E-commerce Websites'
    ],
    deliverables: [
      'Responsive Next.js / React Architecture',
      'Headless CMS & Custom Integrations',
      'Technical SEO & Performance Audits',
      'Conversion Rate Optimization'
    ],
    icon: 'Globe',
    popularTag: 'Most Requested'
  },
  {
    id: 'app-dev',
    number: '02',
    title: 'App & Software Development',
    tagline: 'Scalable applications built for seamless experiences',
    description: 'From intuitive mobile apps to enterprise web applications, we develop robust, scalable software that powers modern businesses.',
    subServices: [
      'Android Applications',
      'Web Applications (SaaS / Portals)',
      'Custom Software Development'
    ],
    deliverables: [
      'Native & Cross-Platform Mobile Apps',
      'Secure Cloud Infrastructure (AWS/GCP)',
      'REST & GraphQL API Engineering',
      'Comprehensive QA & Automated Testing'
    ],
    icon: 'Smartphone'
  },
  {
    id: 'creative-design',
    number: '03',
    title: 'Creative Design',
    tagline: 'Distinctive brand identities that command attention',
    description: 'We shape compelling visual languages, iconic logos, and strategic creative assets that establish instant credibility and emotional resonance.',
    subServices: [
      'Logo Design & Brand Identity',
      'Poster & Graphic Design',
      'Professional Photo Editing',
      'Strategic Content Writing'
    ],
    deliverables: [
      'Complete Brand Style Guides',
      'Marketing Collateral & Print Design',
      'Visual Asset Kits & Social Templates',
      'High-Impact Brand Copywriting'
    ],
    icon: 'Palette'
  },
  {
    id: 'video-production',
    number: '04',
    title: 'Video Production',
    tagline: 'Cinematic storytelling engineered for modern audiences',
    description: 'We produce engaging video content that captures attention, communicates complex ideas with clarity, and fuels viral social growth.',
    subServices: [
      'Professional Video Editing',
      'Promotional & Brand Commercials',
      'Reels, Shorts & Social Media Videos',
      'Commercial Video Shooting'
    ],
    deliverables: [
      'Full 4K Video Post-Production',
      'Motion Graphics & Sound Design',
      'Short-Form Vertical Content Engines',
      'Multi-Platform Aspect Ratio Delivery'
    ],
    icon: 'Video'
  },
  {
    id: 'digital-marketing',
    number: '05',
    title: 'Digital Marketing',
    tagline: 'Data-driven growth campaigns that maximize ROI',
    description: 'We craft comprehensive digital marketing funnels, manage high-yield ad campaigns, and cultivate organic communities that turn visitors into loyal customers.',
    subServices: [
      'Social Media Management',
      'Meta Ads & Campaign Management',
      'Multi-Format Content Creation',
      'Brand Growth Strategy'
    ],
    deliverables: [
      'Paid Acquisition & Retargeting',
      'Content Calendar & Community Management',
      'Analytics & Conversion Tracking',
      'Audience Persona Research'
    ],
    icon: 'TrendingUp',
    popularTag: 'High ROI'
  },
  {
    id: 'automation',
    number: '06',
    title: 'Automation',
    tagline: 'Streamlined workflows that save hours and eliminate errors',
    description: 'We automate repetitive business processes and integrate disparate software tools, enabling your team to focus on strategic revenue-generating work.',
    subServices: [
      'Business Process Automation',
      'Workflow Automation (Zapier / Make / APIs)',
      'Custom Automation Solutions'
    ],
    deliverables: [
      'CRM & Lead Pipeline Automation',
      'Automated Invoicing & Reporting',
      'Customer Onboarding Automations',
      'Error Handling & Fallback Systems'
    ],
    icon: 'Cpu'
  }
];

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 'Web Development' | 'App & Software' | 'Creative Design' | 'Video Production' | 'Digital Marketing';
  description: string;
  metrics: string;
  year: string;
  tags: string[];
  visualGradient: string;
  imageAlt: string;
}

export const portfolioData: ProjectItem[] = [
  {
    id: 'lumina-fintech',
    title: 'Lumina Digital Banking Experience',
    client: 'Lumina Global',
    category: 'Web Development',
    description: 'Next-generation web portal and onboarding funnel featuring real-time financial analytics and biometric verification.',
    metrics: '+310% Account Creation Rate',
    year: '2026',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    visualGradient: 'from-zinc-800 to-zinc-950',
    imageAlt: 'Lumina digital banking web interface'
  },
  {
    id: 'zenith-fitness',
    title: 'Zenith Health & Athletic Companion',
    client: 'Zenith Labs',
    category: 'App & Software',
    description: 'Android & Web application empowering over 80,000 active athletes with AI-driven training plans and biometric tracking.',
    metrics: '85K+ Active Users',
    year: '2025',
    tags: ['Android', 'React Native', 'Node.js', 'PostgreSQL'],
    visualGradient: 'from-neutral-800 to-zinc-900',
    imageAlt: 'Zenith mobile fitness tracking app UI'
  },
  {
    id: 'aurora-perfumery',
    title: 'Aurora Artisanal Visual Identity',
    client: 'Maison Aurora',
    category: 'Creative Design',
    description: 'Comprehensive luxury rebrand encompassing packaging typography, editorial photography editing, and minimalist digital brand guidelines.',
    metrics: 'Featured in Brand New 2025',
    year: '2025',
    tags: ['Brand Identity', 'Packaging', 'Typography', 'Art Direction'],
    visualGradient: 'from-stone-800 to-zinc-950',
    imageAlt: 'Maison Aurora luxury brand book'
  },
  {
    id: 'solis-campaign',
    title: 'Solis Sustainable Living Film Series',
    client: 'Solis Eco Living',
    category: 'Video Production',
    description: 'High-concept commercial shoot and 12-part micro-content series for social ad campaigns promoting zero-emissions smart appliances.',
    metrics: '4.2M Organic Social Impressions',
    year: '2026',
    tags: ['4K Video Shooting', 'Motion Graphics', 'Sound Design', 'Reels'],
    visualGradient: 'from-zinc-800 to-black',
    imageAlt: 'Solis cinematic brand video still'
  },
  {
    id: 'velox-growth',
    title: 'Velox Logistics Multi-Channel Acquisition',
    client: 'Velox Freight',
    category: 'Digital Marketing',
    description: 'Full-funnel Meta and LinkedIn ad campaigns combined with automated workflow attribution to capture enterprise B2B accounts.',
    metrics: '6.4x Return on Ad Spend (ROAS)',
    year: '2026',
    tags: ['Meta Ads', 'Funnel Strategy', 'Lead Automation', 'Content'],
    visualGradient: 'from-neutral-900 to-zinc-950',
    imageAlt: 'Velox performance marketing analytics dashboard'
  },
  {
    id: 'orbit-commerce',
    title: 'Orbit Modular Headless Storefront',
    client: 'Orbit Gear Co.',
    category: 'Web Development',
    description: 'Lightning-fast headless e-commerce store with dynamic 3D product previews and frictionless 1-click checkout integration.',
    metrics: '+185% Checkout Completion',
    year: '2025',
    tags: ['Shopify Storefront API', 'Tailwind CSS', 'Vercel', 'Next.js'],
    visualGradient: 'from-zinc-900 to-neutral-950',
    imageAlt: 'Orbit modern e-commerce storefront preview'
  }
];

export const whyChooseUsData = [
  {
    id: 'creative',
    title: 'Creative Thinking',
    subtitle: 'Beyond standard conventions',
    description: 'We do not recycle cookie-cutter templates. Every project is conceived from first principles with unique visual character and compelling narrative.',
    icon: 'Sparkles',
    metric: '100% Custom'
  },
  {
    id: 'tech',
    title: 'Modern Technology',
    subtitle: 'Engineered for speed & longevity',
    description: 'We leverage battle-tested modern stacks (React, Next.js, Node, Cloud architecture) ensuring your digital platforms are secure, accessible, and blazingly fast.',
    icon: 'Terminal',
    metric: '<0.8s Load Times'
  },
  {
    id: 'quality',
    title: 'Quality-Driven Work',
    subtitle: 'Obsessive attention to detail',
    description: 'From micro-interactions to scalable code architecture, we maintain rigorous quality standards through multi-stage QA and design audits.',
    icon: 'CheckCircle2',
    metric: '99.4% Delivery Precision'
  },
  {
    id: 'all-in-one',
    title: 'All-in-One Solutions',
    subtitle: 'From inception to scale',
    description: 'Eliminate the friction of juggling multiple fragmented freelancers. We seamlessly connect web, apps, branding, video, marketing, and automation under one roof.',
    icon: 'Layers',
    metric: 'End-to-End Delivery'
  },
  {
    id: 'business',
    title: 'Business-Focused Approach',
    subtitle: 'Creativity backed by metrics',
    description: 'We measure success not merely in aesthetic praise, but in real business growth: conversions, user retention, pipeline velocity, and bottom-line profit.',
    icon: 'Target',
    metric: 'Revenue & ROI Focus'
  }
];

export const processSteps = [
  {
    step: '01',
    name: 'Discover',
    duration: 'Week 1',
    tagline: 'Deep Dive & Goal Alignment',
    description: 'We immerse ourselves in your brand, industry landscape, competitors, and target audience to uncover unique leverage points and set measurable KPIs.',
    activities: [
      'Stakeholder Interviews',
      'Audience & Competitor Audits',
      'Technical Feasibility Assessment',
      'Core Value Proposition Definition'
    ]
  },
  {
    step: '02',
    name: 'Plan',
    duration: 'Week 2',
    tagline: 'Architecture & Creative Roadmap',
    description: 'We architect the blueprint: wireframes, technical specifications, user journey maps, and sprint milestones that eliminate guesswork.',
    activities: [
      'Information Architecture & UX Wireframes',
      'Technical Stack Selection',
      'Design System & Visual Moodboards',
      'Sprint Timelines & Deliverables Spec'
    ]
  },
  {
    step: '03',
    name: 'Create',
    duration: 'Weeks 3-5',
    tagline: 'Design, Development & Production',
    description: 'Our engineers, designers, and marketers execute in sync, building pixel-perfect interfaces, writing performant code, and crafting compelling creative assets.',
    activities: [
      'High-Fidelity UI/UX Prototyping',
      'Clean Modular Full-Stack Development',
      'Content Production & Video Editing',
      'Weekly Interactive Staging Previews'
    ]
  },
  {
    step: '04',
    name: 'Deliver',
    duration: 'Week 6+',
    tagline: 'Launch, Optimization & Growth',
    description: 'Rigorous cross-device testing, deployment to production infrastructure, staff training, and launch of marketing growth engines.',
    activities: [
      'Multi-Device QA & Performance Optimization',
      'Production Deployment & DNS Transfer',
      'Analytics & Event Tracking Setup',
      'Post-Launch Growth & Continuous Support'
    ]
  }
];

export const agencyStats = [
  { value: '150+', label: 'Projects Completed' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '6', label: 'Core Disciplines' },
  { value: '35+', label: 'Global Brands' }
];
