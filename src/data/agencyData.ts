export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  category: string;
  features: string[];
  techStack: string[];
  previewStats: { label: string; value: string };
  pricingPlaceholder: string;
  deliverables: string[];
  ctaText: string;
}

export const productsData: ProductItem[] = [
  {
    id: 'nexus-starter-suite',
    name: 'Nexus Core Web Starter',
    tagline: 'High-performance Next.js production starter kit for enterprises & startups.',
    description: 'An enterprise-grade, SEO-optimized web foundation pre-configured with modern design tokens, headless CMS schemas, fast analytics, and Core Web Vitals 95+ guarantees.',
    badge: 'Early Partner Access',
    category: 'Digital Infrastructure',
    features: [
      'Next.js 14 App Router & TypeScript Architecture',
      'Pre-built 95+ Lighthouse Performance Core',
      'Automated SEO, Schema.org & AEO OpenGraph meta',
      'Integrated payment gateways (Stripe & Razorpay)',
    ],
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Sanity CMS'],
    previewStats: { label: 'Lighthouse Score', value: '98/100' },
    pricingPlaceholder: 'Pricing available on inquiry / Early Partner Access',
    deliverables: ['Full Source Code', 'Architecture Documentation', 'Setup Support'],
    ctaText: 'Inquire for Access',
  },
  {
    id: 'autoflow-crm-hub',
    name: 'AutoFlow WhatsApp & CRM Engine',
    tagline: 'Automated lead capture, instant WhatsApp dispatch & pipeline sync.',
    description: 'A pre-integrated automation pipeline connecting web forms, WhatsApp Business Cloud API, CRM databases, and real-time sales team Slack/Discord notifications.',
    badge: 'Available Now',
    category: 'Automation & AI',
    features: [
      'Meta Official Cloud WhatsApp API Webhook Engine',
      'Automated 30-second lead qualification bot',
      'Multi-channel CRM synchronization (Zoho, HubSpot)',
      'Real-time team alerts & escalation logic',
    ],
    techStack: ['Node.js', 'WhatsApp Cloud API', 'Supabase', 'n8n'],
    previewStats: { label: 'Avg Lead Response', value: '< 30 sec' },
    pricingPlaceholder: 'Tiered rollout • Announcement TBA',
    deliverables: ['Custom Integration Script', 'Workflow Blueprints', 'Cloud Deployment Guide'],
    ctaText: 'Deploy for Business',
  },
  {
    id: 'brandbox-design-system',
    name: 'BrandBox Identity & Design System',
    tagline: 'Comprehensive digital brand guidelines, UI kit, and marketing asset bank.',
    description: 'A complete, ready-to-deploy design system comprising Figma UI libraries, social marketing kits, typography tokens, vector icons, and stationery templates.',
    badge: 'In Development',
    category: 'Branding & Creative',
    features: [
      '400+ Component Tokenized Figma UI Library',
      'Social media launch templates (Instagram, LinkedIn)',
      'Vector icon suite & hand-drawn doodle asset pack',
      'Brand style guide & typography documentation',
    ],
    techStack: ['Figma Tokens', 'SVG Vector Suite', 'Motion Presets'],
    previewStats: { label: 'Tokenized UI Assets', value: '400+ items' },
    pricingPlaceholder: 'Product bundle • In Development',
    deliverables: ['Figma Design Files', 'Asset Exports (SVG/PNG)', 'Brand Guidelines PDF'],
    ctaText: 'Join Waitlist',
  },
  {
    id: 'omnisync-billing-pos',
    name: 'OmniSync Retail POS & Billing Core',
    tagline: 'Offline-first hybrid POS terminal and multi-branch inventory engine.',
    description: 'Engineered for retail counters, boutique stores, and cloud kitchens with lightning-fast barcode scanning, GST/VAT tax compliance, thermal receipt printing, and live stock reconciliation.',
    badge: 'Coming Soon',
    category: 'Digital Infrastructure',
    features: [
      'Offline-first IndexedDB local cache with automatic cloud sync',
      'GST & VAT compliant e-invoicing and digital receipts',
      'Multi-counter and multi-branch stock reconciliation',
      'Thermal printer (USB/Bluetooth) & barcode scanner plug-and-play',
    ],
    techStack: ['React', 'Electron', 'PostgreSQL', 'WebSockets'],
    previewStats: { label: 'Offline Sync Speed', value: '100% Zero-Loss' },
    pricingPlaceholder: 'Commercial Licensing • Coming Q1',
    deliverables: ['Desktop/Web POS App', 'Admin Cloud Dashboard', 'Hardware Drivers Setup'],
    ctaText: 'Request Demo Preview',
  },
  {
    id: 'synapse-copilot-rag',
    name: 'Synapse RAG Enterprise Copilot',
    tagline: 'Custom private LLM assistant trained on your company SOPs & databases.',
    description: 'A secure generative AI assistant integrated with your knowledge bases, customer support tickets, and internal documentation — keeping client data 100% private.',
    badge: 'Early Access',
    category: 'Automation & AI',
    features: [
      'Hybrid semantic vector search with pgvector and OpenAI / Anthropic',
      'Role-based access control (RBAC) with strict data isolation',
      'Customer support auto-resolution with human fallback routing',
      'Plug-and-play widget for website or Slack/Teams workspace',
    ],
    techStack: ['Python / FastAPI', 'LangChain', 'pgvector', 'OpenAI'],
    previewStats: { label: 'Support Resolution', value: '68% Auto' },
    pricingPlaceholder: 'Dedicated Pilot Deployment • Inquire for Pilot',
    deliverables: ['Private Docker Container', 'Vector Database Pipeline', 'Embeddable Web Widget'],
    ctaText: 'Inquire for Pilot',
  },
  {
    id: 'saas-launchpad-pro',
    name: 'SaaS Launchpad Multi-Tenant Core',
    tagline: 'Production-ready subscription architecture with team workspaces & RBAC.',
    description: 'Everything you need to ship a software product: pre-configured Stripe recurring billing, user onboarding flows, team invitations, dark/light themes, and transactional email templates.',
    badge: 'Available Now',
    category: 'Digital Infrastructure',
    features: [
      'Complete Stripe Subscriptions, Checkout, and Customer Portal',
      'Multi-tenant workspace architecture with team member invites',
      'Supabase / Prisma ORM with automated database migrations',
      'Transactional emails via Resend with React Email templates',
    ],
    techStack: ['Next.js 14', 'Prisma', 'Stripe Billing', 'Resend'],
    previewStats: { label: 'Time Saved', value: '180+ hours' },
    pricingPlaceholder: 'Founder Licensing • Inquire Details',
    deliverables: ['Production Next.js Boilerplate', 'Database Schema Models', 'Stripe Webhooks Engine'],
    ctaText: 'Explore License',
  },
];

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  seoTitle: string;
  primaryKeywords: string[];
  tagline: string;
  aeoBlock: string;
  description: string;
  subServices: string[];
  icon: string;
  deliverables: string[];
  faq: ServiceFAQ[];
  popularTag?: string;
}

export const servicesData: ServiceCategory[] = [
  // ── 01 ── Web Design & Development ─────────────────────────────────────────
  {
    id: 'web-development',
    number: '01',
    title: 'Web Design & Development',
    seoTitle: 'Website Design & Development Services | Nexus Digital Agency',
    primaryKeywords: ['website development company', 'custom web design', 'e-commerce website development', 'landing page design', 'Next.js development'],
    tagline: 'Fast websites that rank, convert and grow your business.',
    aeoBlock: 'We design and develop blazing-fast, mobile-first websites — from clean corporate sites and high-converting landing pages to full e-commerce stores. Built on React and Next.js, every website is performance-optimised, technically SEO-ready, and engineered to maximise conversions.',
    description: 'We engineer high-performance, modern websites and e-commerce platforms that reflect your brand, rank on Google, and convert visitors into paying customers. From a simple corporate site to a fully custom headless e-commerce store, every pixel is purposeful.',
    subServices: [
      'Corporate & Business Website Design',
      'High-Converting Landing Pages',
      'E-Commerce Store Development (Shopify / WooCommerce / Custom)',
      'Web Portal & Client Dashboard Development',
      'Progressive Web Apps (PWA)',
      'Website Redesign & CRO Audits',
      'Technical SEO & Core Web Vitals Optimisation',
    ],
    deliverables: [
      'Responsive React / Next.js Architecture',
      'Headless CMS Integration (Sanity, Contentful, WordPress)',
      'Payment Gateway Integration (Razorpay, Stripe, PayU)',
      'Lighthouse 90+ Performance Guarantee',
      'Technical SEO & Schema Markup Setup',
      'Conversion Rate Optimisation (CRO)',
    ],
    faq: [
      { question: 'How long does it take to build a business website?', answer: 'A standard business website typically takes 2–4 weeks from briefing to launch. E-commerce stores and custom web applications take 4–8 weeks depending on feature complexity and content readiness.' },
      { question: 'Do you build websites that rank on Google?', answer: 'Yes. Every website we build includes technical SEO foundations: semantic HTML, schema markup, Core Web Vitals optimisation, sitemap, robots.txt, and fast page load times — all essential for Google ranking.' },
      { question: 'Can you redesign my existing website without losing my SEO rankings?', answer: 'Absolutely. We perform a full pre-migration SEO audit, preserve all existing URL structures where possible, implement 301 redirects, and monitor Search Console after launch to protect your ranking positions.' },
    ],
    icon: 'Globe',
    popularTag: 'Most Requested',
  },

  // ── 02 ── Mobile App Development ───────────────────────────────────────────
  {
    id: 'mobile-app-development',
    number: '02',
    title: 'Mobile App Development',
    seoTitle: 'Mobile App Development Services — Android & iOS | Nexus',
    primaryKeywords: ['mobile app development company', 'android app development', 'iOS app development', 'Flutter app development', 'cross-platform app development'],
    tagline: 'Intuitive apps for Android & iOS — from MVP to enterprise scale.',
    aeoBlock: 'We build native and cross-platform mobile apps for Android and iOS using Flutter and React Native. From MVP prototypes to full-scale enterprise apps with real-time sync, biometric security, and cloud backends — we handle everything from design to Play Store and App Store deployment.',
    description: 'From consumer-facing apps to complex enterprise field tools, we develop robust, scalable mobile applications that deliver seamless user experiences across Android and iOS. We manage the entire lifecycle — UI/UX design, development, QA, and store submission.',
    subServices: [
      'Android App Development (Native & Flutter)',
      'iOS App Development (Swift & Flutter)',
      'Cross-Platform App Development (Flutter / React Native)',
      'Enterprise & B2B Mobile Applications',
      'App UI/UX Design & Prototyping (Figma)',
      'App Store Optimisation (ASO) & Launch Strategy',
      'App Maintenance, Updates & Performance Monitoring',
    ],
    deliverables: [
      'Native & Cross-Platform Architecture',
      'Push Notifications, Offline Mode & Biometric Auth',
      'Backend API & Cloud Database Integration (Firebase / Supabase)',
      'Play Store & App Store Submission',
      'Automated QA & Multi-Device Compatibility Testing',
      'Post-Launch Analytics & Crash Monitoring',
    ],
    faq: [
      { question: 'Should I build a native app or a cross-platform app?', answer: 'For most businesses, a cross-platform app built with Flutter is the most cost-effective choice — one codebase for both Android and iOS with near-native performance. Native development is recommended only for apps requiring deep platform-specific hardware access.' },
      { question: 'How much does it cost to build a mobile app?', answer: 'A simple mobile app starts from ₹80,000–₹1,50,000. Apps with real-time features, payment integrations, or custom backends range from ₹2,00,000–₹8,00,000. We provide a detailed estimate after a free discovery call.' },
      { question: 'Do you help with publishing on the Google Play Store and Apple App Store?', answer: 'Yes. We handle the full submission process — app store listings, screenshots, metadata optimisation, compliance review, and ongoing ASO to improve discoverability after launch.' },
    ],
    icon: 'Smartphone',
  },

  // ── 03 ── Enterprise Software: ERP, CRM, Billing & POS ─────────────────────
  {
    id: 'erp-crm-billing-pos',
    number: '03',
    title: 'ERP, CRM, Billing & POS Systems',
    seoTitle: 'Custom ERP, CRM, Billing & POS Software Development | Nexus',
    primaryKeywords: ['custom ERP software development', 'CRM software development', 'billing software development India', 'POS system development', 'business management software'],
    tagline: 'Purpose-built enterprise systems that replace spreadsheets and Tally.',
    aeoBlock: 'We build custom ERP, CRM, billing, and POS software specifically tailored to your business workflows — covering inventory, sales, HR, payroll, and operations. Our systems replace disconnected tools with a unified platform, available as cloud-based or on-premise deployments with GST-compliant billing.',
    description: 'We design and develop purpose-built enterprise software — from GST-compliant billing and retail POS systems to full multi-module ERP and CRM platforms. Our systems centralise your operations, eliminate manual data entry, and give your leadership team real-time visibility across every department.',
    subServices: [
      'Custom ERP Development (Inventory, HR, Accounting, Supply Chain)',
      'CRM Software & Sales Pipeline Management Systems',
      'GST-Compliant Billing & Invoicing Software',
      'Point of Sale (POS) Software for Retail, Restaurants & Services',
      'Multi-Branch & Multi-Store Management Dashboards',
      'HRM & Payroll Management Systems',
      'ERP/CRM Integration with Tally, Zoho, Salesforce & more',
    ],
    deliverables: [
      'Role-Based Access Control (RBAC) & Multi-User Dashboards',
      'GST-Compliant Invoicing & Automated Reports',
      'Cloud or On-Premise Deployment Options',
      'Real-Time Analytics & Custom Business Intelligence',
      'Mobile Companion App for Field Teams',
      'Secure Data Migration from Legacy Systems',
    ],
    faq: [
      { question: 'What is the difference between a custom ERP and off-the-shelf software like Tally or Zoho?', answer: 'Off-the-shelf software is built for generic use cases and forces you to change your processes to fit the tool. Custom ERP is built around your exact workflows — your terminology, your approval chains, your reports — with no unnecessary modules or licensing fees per user.' },
      { question: 'Can you build GST-compliant billing and invoicing software?', answer: 'Yes. We build fully GST-compliant billing software with auto-calculation of CGST, SGST, IGST, HSN codes, e-invoice generation, and direct integration with the GSTN portal for filing returns.' },
      { question: 'How long does it take to develop a custom POS or ERP system?', answer: 'A POS or basic billing system typically takes 6–10 weeks. A full multi-module ERP covering inventory, HR, accounts, and CRM takes 3–6 months depending on the number of modules and integration requirements.' },
    ],
    icon: 'Database',
    popularTag: 'Enterprise',
  },

  // ── 04 ── Custom Software & SaaS Engineering ────────────────────────────────
  {
    id: 'custom-software-saas',
    number: '04',
    title: 'Custom Software & SaaS Engineering',
    seoTitle: 'Custom Software Development & SaaS Product Engineering | Nexus',
    primaryKeywords: ['custom software development', 'SaaS product development', 'MVP development', 'web application development', 'enterprise software solutions'],
    tagline: 'From bold startup MVPs to enterprise-grade SaaS platforms that scale.',
    aeoBlock: 'We engineer custom software and SaaS products from idea to production — including MVP development, multi-tenant platform architecture, API integrations, and cloud deployments on AWS, GCP, and Azure. Whether you need your first MVP or are modernising a legacy system, we deliver scalable, secure software.',
    description: 'We build custom software products and SaaS platforms that solve specific business problems at scale. From rapid MVP development for startups to enterprise application modernisation, we handle the full stack — architecture, development, cloud deployment, and ongoing DevOps.',
    subServices: [
      'MVP (Minimum Viable Product) Development',
      'SaaS Platform & Multi-Tenant Application Engineering',
      'Enterprise Web Application Development',
      'API Development, Integration & Microservices Architecture',
      'Cloud Infrastructure Setup (AWS, GCP, Azure)',
      'Legacy System Modernisation & Tech Stack Migration',
      'Database Design, Optimisation & Data Engineering',
    ],
    deliverables: [
      'Scalable Cloud Architecture with CI/CD Pipelines',
      'REST & GraphQL API Engineering',
      'Multi-Tenant Subscription & Role Management',
      'Automated Testing & Code Quality Assurance',
      'DevOps, Docker & Kubernetes Deployment',
      'SLA-Backed Uptime & Post-Launch Support',
    ],
    faq: [
      { question: 'What is an MVP and how quickly can you build one?', answer: 'An MVP (Minimum Viable Product) is a working version of your software with only the core features needed to validate your idea with real users. We can design and build a functional MVP in 4–8 weeks, depending on complexity.' },
      { question: 'Can you build a multi-tenant SaaS platform where each client has their own workspace?', answer: 'Yes. We architect multi-tenant SaaS applications with isolated data, custom subdomain or white-label support, role-based access, subscription billing integration (Stripe / Razorpay), and usage analytics dashboards.' },
      { question: 'Do you provide cloud hosting and DevOps support after the software is built?', answer: 'Yes. We handle full cloud infrastructure setup on AWS, GCP, or Azure — including Docker containers, Kubernetes orchestration, CI/CD pipelines, automated backups, and 24/7 uptime monitoring as a managed service.' },
    ],
    icon: 'Code2',
  },

  // ── 05 ── AI, ML & Intelligent Automation ───────────────────────────────────
  {
    id: 'ai-ml-automation',
    number: '05',
    title: 'AI, ML & Intelligent Automation',
    seoTitle: 'AI & Machine Learning Solutions | Intelligent Business Automation | Nexus',
    primaryKeywords: ['AI solutions company India', 'machine learning development', 'business process automation', 'AI chatbot development', 'workflow automation services', 'RAG LLM integration'],
    tagline: 'Turn data into decisions and manual workflows into autonomous systems.',
    aeoBlock: 'We develop custom AI and machine learning solutions — from intelligent chatbots and predictive analytics to fully automated business workflows. Using OpenAI, Gemini, and open-source LLMs, we build AI tools that reduce manual effort, improve decision-making, and scale with your business operations.',
    description: 'We build intelligent systems that transform how your business operates — from AI-powered chatbots and predictive analytics models to fully automated end-to-end workflows. We work with leading AI frameworks and large language models to deliver solutions that create measurable operational leverage.',
    subServices: [
      'Custom AI & Machine Learning Model Development',
      'AI-Powered Chatbots & Conversational Agents (WhatsApp / Website / App)',
      'Business Process Automation (n8n / Make / Zapier / Custom APIs)',
      'Predictive Analytics & Intelligent Reporting',
      'Computer Vision & Image Recognition Solutions',
      'Natural Language Processing (NLP) Applications',
      'Retrieval-Augmented Generation (RAG) & LLM Integrations',
      'Automated Document Processing (OCR, Invoice Extraction, Form Parsing)',
      'AI-Driven CRM & Lead Nurturing Automation',
    ],
    deliverables: [
      'Custom Trained AI Models (OpenAI, Gemini, Claude, Open-Source LLMs)',
      'WhatsApp Business API Integration with Smart Bot Flows',
      'Real-Time Data Pipelines & ML Inference APIs',
      'Automated Reporting Dashboards (Email / Slack / WhatsApp Delivery)',
      'Error Handling, Fallback Logic & Human Escalation Design',
      'Model Monitoring, Retraining & Performance Tracking',
    ],
    faq: [
      { question: 'What types of AI chatbots can you build for my business?', answer: 'We build rule-based bots for simple FAQs, hybrid bots that combine rules with LLM responses, and fully conversational AI agents powered by OpenAI or Gemini — deployable on your website, WhatsApp Business API, or mobile app.' },
      { question: 'Can you automate repetitive tasks in my business without replacing my existing software?', answer: 'Yes. We integrate automation layers (via n8n, Make, or custom APIs) on top of your existing tools — CRM, email, billing software, spreadsheets — so you get automated workflows without replacing what already works.' },
      { question: 'What is RAG and how can it help my business?', answer: 'RAG (Retrieval-Augmented Generation) allows an AI model to answer questions based on your own business documents, product catalogues, or knowledge base — not just general internet data. It is ideal for internal knowledge bots, customer support automation, and smart document search.' },
    ],
    icon: 'Cpu',
    popularTag: 'High Demand',
  },

  // ── 06 ── Creative Design, Branding & Content ───────────────────────────────
  {
    id: 'creative-design-branding',
    number: '06',
    title: 'Creative Design & Branding',
    seoTitle: 'Brand Identity Design, Graphic Design & Content Creation | Nexus',
    primaryKeywords: ['brand identity design', 'logo design services India', 'graphic design agency', 'UI UX design services', 'poster design', 'content writing services'],
    tagline: 'Distinct visual identities and content that communicate clearly and memorably.',
    aeoBlock: 'We create powerful brand identities — from logo design and visual style guides to full UI/UX design systems and marketing content. Our creative team handles everything from social media posters and pitch decks to packaging design and SEO-optimised copywriting that builds authority and drives action.',
    description: 'We shape brand identities, design systems, and creative content that make your business visually unforgettable. From a first logo to a full rebrand and everything in between — posters, UI/UX, packaging, copywriting — our creative team works at the intersection of aesthetics and commercial strategy.',
    subServices: [
      'Logo Design & Complete Brand Identity Systems',
      'UI/UX Design & Interactive Prototyping (Figma)',
      'Social Media Post & Poster Design',
      'Marketing Collateral — Brochures, Flyers, Banners, Business Cards',
      'Presentation & Pitch Deck Design',
      'Packaging & Product Label Design',
      'Content Writing, Copywriting & Scriptwriting',
      'Professional Photo Editing & Retouching',
    ],
    deliverables: [
      'Brand Style Guide (Colours, Typography, Logo Usage Rules)',
      'Figma Design System & Interactive Prototype',
      'Ready-to-Print & Digital Format Files (AI, PDF, PNG, SVG)',
      'Social Media Template Kits (Canva / Figma)',
      'SEO-Optimised Marketing Copywriting',
      'Multi-Language Content Support',
    ],
    faq: [
      { question: 'What is included in a brand identity design package?', answer: 'A complete brand identity package includes: primary and secondary logo variations, colour palette, typography system, brand style guide, business card design, and social media profile templates — delivered as editable source files and final print/digital exports.' },
      { question: 'Can you redesign our brand without losing existing customer recognition?', answer: 'Yes. We perform a brand equity audit before any redesign — identifying which visual elements carry strong recognition that should be retained or evolved, versus elements that are holding the brand back. We present a phased transition strategy to protect existing equity.' },
      { question: 'Do you write content and copy as part of the design service?', answer: 'Yes. We offer integrated copywriting for websites, social media, brochures, pitch decks, and ad campaigns — all written to match your brand voice and optimised for search engines and conversational AI platforms.' },
    ],
    icon: 'Palette',
  },

  // ── 07 ── Video Production & Motion Graphics ────────────────────────────────
  {
    id: 'video-production',
    number: '07',
    title: 'Video Production & Motion Graphics',
    seoTitle: 'Video Production, Video Editing & Motion Graphics Services | Nexus',
    primaryKeywords: ['video production company India', 'video editing services', 'cinematic brand film', 'reels editing', 'YouTube video editing', 'motion graphics animation'],
    tagline: 'Cinematic storytelling for brands — shoot, edit, and deliver across every platform.',
    aeoBlock: 'We produce and edit professional video content — from cinematic brand films and commercial shoots to social media Reels, YouTube videos, explainer animations, and motion graphics. Our post-production team handles colour grading, sound design, captions, and multi-platform aspect ratio delivery.',
    description: 'We create high-impact video content that stops thumbs, communicates brand stories with clarity, and drives measurable engagement across YouTube, Instagram, and paid ad campaigns. From on-location commercial shoots to animated explainer videos and social-first Reels, every frame is crafted with intention.',
    subServices: [
      'Cinematic Brand Film & Commercial Shoot Production',
      'Professional Video Editing & Colour Grading',
      'Instagram Reels, YouTube Shorts & TikTok Video Editing',
      'YouTube Long-Form Video Editing & SEO Optimisation (VEO)',
      'Motion Graphics, 2D Animation & Kinetic Typography',
      'Product Demo & Explainer Video Production',
      'Event Highlight & Corporate Video Production',
      'Sound Design, Voice-Over Coordination & Audio Mixing',
    ],
    deliverables: [
      'Full 4K Post-Production & Colour Grading',
      'Multi-Platform Aspect Ratio Delivery (16:9, 9:16, 1:1, 4:5)',
      'Dynamic Captions, Motion Text & VFX Overlays',
      'Thumbnail Design & YouTube Metadata Optimisation',
      'Raw Footage Management & Cloud Asset Delivery',
      'Platform-Specific Export Specifications',
    ],
    faq: [
      { question: 'Do you handle video shooting as well as editing?', answer: 'Yes. We offer end-to-end video production — location scouting, shoot direction, on-camera production, and full post-production including editing, colour grading, sound design, captions, and multi-format delivery.' },
      { question: 'What types of videos perform best for Instagram Reels and YouTube Shorts?', answer: 'Short-form videos that perform best share three traits: a strong hook in the first 1–3 seconds, clear value or entertainment in a concise format (15–60 seconds), and dynamic editing with captions. We script, shoot, and edit content engineered specifically for each platform\'s algorithm.' },
      { question: 'Can you create animated explainer videos without real video footage?', answer: 'Yes. We create fully animated explainer videos using 2D motion graphics, kinetic typography, and character animation — ideal for SaaS products, fintech, and B2B services where live footage is impractical or unavailable.' },
    ],
    icon: 'Video',
  },

  // ── 08 ── Digital Marketing, SEO & Performance Ads ──────────────────────────
  {
    id: 'digital-marketing-seo',
    number: '08',
    title: 'Digital Marketing & Performance Ads',
    seoTitle: 'Digital Marketing Agency — SEO, Meta Ads, Google Ads & Social Media | Nexus',
    primaryKeywords: ['digital marketing agency India', 'SEO services', 'Meta ads agency', 'Google ads management', 'social media marketing', 'performance marketing agency'],
    tagline: 'Data-driven growth campaigns that maximise ROI across every channel.',
    aeoBlock: 'We run data-driven digital marketing campaigns — including SEO, Google Ads, Meta Ads, social media management, and email automation. Our performance marketing team optimises for real business outcomes: qualified leads, e-commerce sales, and measurable ROI — not just impressions and vanity metrics.',
    description: 'We build and manage full-funnel digital marketing systems that drive consistent, qualified traffic, grow your audience, and maximise revenue. From search rankings and paid ads to social media content and email automation — every campaign is tracked, tested, and continuously optimised.',
    subServices: [
      'Search Engine Optimisation (SEO) — On-Page, Off-Page & Technical',
      'Local SEO & Google Business Profile (GMB) Optimisation',
      'Meta (Facebook & Instagram) Ads Management',
      'Google Search & YouTube Ads Campaign Management',
      'Social Media Management & Content Strategy',
      'Email Marketing & Automated Drip Campaign Sequences',
      'Influencer Marketing & Creator Collaboration Management',
      'Conversion Rate Optimisation (CRO) & A/B Testing',
      'Analytics Setup, Reporting & Attribution (GA4 / GTM)',
    ],
    deliverables: [
      'Keyword Research & Competitive SERP Analysis',
      'Monthly Content Calendar & Social Media Creatives',
      'Ad Campaign Setup, A/B Testing & ROAS Reporting',
      'Google Analytics 4 & Google Tag Manager Configuration',
      'Monthly Performance Reports with Actionable Insights',
      'Lead Attribution & Conversion Funnel Tracking',
    ],
    faq: [
      { question: 'How long does SEO take to show results?', answer: 'Most businesses start seeing measurable organic ranking improvements within 3–6 months of consistent SEO activity — depending on domain age, competition level, and content volume. Local SEO results for Google Maps rankings can appear within 4–8 weeks.' },
      { question: 'What is the minimum budget required to run effective Meta or Google Ads?', answer: 'For Meta Ads (Facebook/Instagram), a minimum daily budget of ₹500–₹1,000 is needed to gather meaningful data. Google Search Ads typically require ₹20,000–₹50,000 per month minimum to be competitive in most industries. We recommend starting with one platform and scaling based on ROAS data.' },
      { question: 'Do you manage social media content creation as well as ad campaigns?', answer: 'Yes. We offer integrated social media management — including content strategy, monthly content calendars, graphic and video content creation, caption writing, posting, community engagement, and paid amplification of top-performing organic posts.' },
    ],
    icon: 'TrendingUp',
    popularTag: 'High ROI',
  },
];

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category:
    | 'Web Development'
    | 'Mobile App'
    | 'ERP & CRM'
    | 'Custom Software'
    | 'AI & Automation'
    | 'Creative Design'
    | 'Video Production'
    | 'Digital Marketing';
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
    category: 'Mobile App',
    description: 'Android & iOS application empowering over 80,000 active athletes with AI-driven training plans and biometric tracking.',
    metrics: '85K+ Active Users',
    year: '2025',
    tags: ['Flutter', 'React Native', 'Node.js', 'PostgreSQL'],
    visualGradient: 'from-neutral-800 to-zinc-900',
    imageAlt: 'Zenith mobile fitness tracking app UI'
  },
  {
    id: 'apex-erp',
    title: 'Apex Manufacturing ERP & POS System',
    client: 'Apex Industries',
    category: 'ERP & CRM',
    description: 'Custom multi-module ERP with GST-compliant billing, inventory management, HR & payroll, and a companion POS app for retail counters.',
    metrics: '72% Reduction in Manual Processes',
    year: '2026',
    tags: ['Custom ERP', 'POS Software', 'GST Billing', 'React Dashboard'],
    visualGradient: 'from-blue-900 to-zinc-950',
    imageAlt: 'Apex ERP manufacturing dashboard'
  },
  {
    id: 'gridflow-saas',
    title: 'Gridflow Project Intelligence SaaS',
    client: 'Gridflow Labs',
    category: 'Custom Software',
    description: 'Multi-tenant SaaS platform for construction project management with real-time collaboration, budget tracking, and automated milestone reporting.',
    metrics: '3,200+ Active Workspace Users',
    year: '2026',
    tags: ['SaaS', 'Multi-Tenant', 'AWS', 'React', 'REST API'],
    visualGradient: 'from-indigo-900 to-zinc-950',
    imageAlt: 'Gridflow SaaS project management dashboard'
  },
  {
    id: 'synapse-ai',
    title: 'Synapse AI Lead Qualification Engine',
    client: 'Synapse CRM',
    category: 'AI & Automation',
    description: 'RAG-powered AI assistant integrated with the client CRM to auto-qualify inbound leads, generate follow-up sequences, and route opportunities to the right rep.',
    metrics: '58% Faster Lead-to-Meeting Conversion',
    year: '2026',
    tags: ['LLM Integration', 'RAG', 'n8n Automation', 'WhatsApp API'],
    visualGradient: 'from-purple-900 to-zinc-950',
    imageAlt: 'Synapse AI CRM automation dashboard'
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
    description: 'Full-funnel Meta and Google ad campaigns combined with automated workflow attribution to capture enterprise B2B accounts.',
    metrics: '6.4× Return on Ad Spend (ROAS)',
    year: '2026',
    tags: ['Meta Ads', 'Google Ads', 'Lead Automation', 'SEO'],
    visualGradient: 'from-neutral-900 to-zinc-950',
    imageAlt: 'Velox performance marketing analytics dashboard'
  },
  {
    id: 'orbit-commerce',
    title: 'Orbit Modular Headless Storefront',
    client: 'Orbit Gear Co.',
    category: 'Web Development',
    description: 'Lightning-fast headless e-commerce store with dynamic product previews and frictionless 1-click checkout integration.',
    metrics: '+185% Checkout Completion',
    year: '2025',
    tags: ['Shopify Storefront API', 'Tailwind CSS', 'Vercel', 'Next.js'],
    visualGradient: 'from-zinc-900 to-neutral-950',
    imageAlt: 'Orbit modern e-commerce storefront preview'
  },
  {
    id: 'pulse-delivery',
    title: 'Pulse Rapid Fleet & Courier App',
    client: 'Pulse Logistics',
    category: 'Mobile App',
    description: 'Real-time hyper-local courier tracking application with live geo-routing, driver telematics, and automated push notifications.',
    metrics: '120K+ Monthly Deliveries',
    year: '2026',
    tags: ['React Native', 'Mapbox SDK', 'WebSockets', 'Go Engine'],
    visualGradient: 'from-cyan-950 to-neutral-950',
    imageAlt: 'Pulse mobile delivery tracker app preview'
  },
  {
    id: 'coreflow-crm',
    title: 'CoreFlow B2B Distribution & CRM',
    client: 'CoreFlow Global',
    category: 'ERP & CRM',
    description: 'Comprehensive wholesale distribution platform handling credit terms, quotation workflows, automated tax invoices, and sales rep commission tracking.',
    metrics: '$18M+ Processed Volume',
    year: '2026',
    tags: ['PostgreSQL', 'Tailwind', 'Next.js', 'Redis'],
    visualGradient: 'from-slate-900 to-zinc-950',
    imageAlt: 'CoreFlow distribution CRM and invoice platform'
  },
  {
    id: 'cloudbridge-api',
    title: 'CloudBridge Microservices Gateway',
    client: 'FinTech Alliance',
    category: 'Custom Software',
    description: 'High-throughput secure API gateway connecting banking ledger cores to external payment partners with strict zero-trust security checks.',
    metrics: '99.999% Service Uptime',
    year: '2025',
    tags: ['Golang', 'Docker', 'Kubernetes', 'gRPC'],
    visualGradient: 'from-blue-950 to-neutral-950',
    imageAlt: 'CloudBridge microservices architecture monitor'
  },
  {
    id: 'hyperion-ml',
    title: 'Hyperion Predictive Demand Forecasting',
    client: 'Hyperion Supply',
    category: 'AI & Automation',
    description: 'Machine learning forecasting model predicting retail inventory shortages 3 weeks ahead, cutting dead stock and storage overhead.',
    metrics: '42% Lower Warehousing Cost',
    year: '2026',
    tags: ['Python / PyTorch', 'scikit-learn', 'FastAPI', 'AWS'],
    visualGradient: 'from-violet-950 to-zinc-950',
    imageAlt: 'Hyperion ML inventory forecasting charts'
  },
  {
    id: 'kintsugi-coffee',
    title: 'Kintsugi Specialty Roasters Brand Pack',
    client: 'Kintsugi Roastery',
    category: 'Creative Design',
    description: 'Artisanal coffee packaging, bespoke hand-lettered logo, tactile label finishes, and minimalist e-commerce storefront assets.',
    metrics: 'Red Dot Design Nominee 2025',
    year: '2025',
    tags: ['Brand Strategy', 'Foil Stamp Packaging', 'Illustration', '3D Render'],
    visualGradient: 'from-amber-950 to-neutral-950',
    imageAlt: 'Kintsugi specialty coffee identity and packaging design'
  },
  {
    id: 'verve-motion',
    title: 'Verve Electric Mobility Launch Film',
    client: 'Verve Motors',
    category: 'Video Production',
    description: 'Dynamic 3D CGI product reveal video and high-energy social cutdowns showcasing smart electric scooter engineering and safety systems.',
    metrics: '2.8M Views Across Platforms',
    year: '2026',
    tags: ['Blender 3D', 'After Effects', 'Sound Mastering', 'Color Grade'],
    visualGradient: 'from-emerald-950 to-black',
    imageAlt: 'Verve electric scooter 3D motion video reel'
  },
  {
    id: 'elevate-growth',
    title: 'Elevate Omni-Channel D2C Scale Funnel',
    client: 'Elevate Wellness',
    category: 'Digital Marketing',
    description: 'Scale marketing program orchestrating viral TikTok UGC ads, programmatic Google Search, and lifecycle email automation flows.',
    metrics: '+430% Direct Revenue Growth',
    year: '2026',
    tags: ['TikTok Ads', 'Klaviyo Email Flows', 'CRO Audits', 'Meta Pixel'],
    visualGradient: 'from-fuchsia-950 to-neutral-950',
    imageAlt: 'Elevate omnichannel analytics dashboard'
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
  { value: '8', label: 'Core Disciplines' },
  { value: '35+', label: 'Global Brands' }
];
