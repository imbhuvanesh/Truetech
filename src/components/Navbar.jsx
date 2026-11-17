import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

/**
 * Navigation Data Structure
 */
const NAV_CATEGORIES = [
  {
    id: 'research',
    title: 'Research',
    columns: [
      {
        label: 'OVERVIEW',
        heading: 'Research Overview',
        desc: 'Advancing intelligence through foundational science and empirical research.',
        links: [
          { text: 'Index of Publications', href: '#research-index', tag: 'New' },
          { text: 'Safety & Alignment Standards', href: '#safety' },
          { text: 'Open Research Releases', href: '#open-research' },
        ],
      },
      {
        label: 'FOCUS AREAS',
        heading: 'Focus Areas',
        links: [
          { text: 'Autonomous Systems & Agents', href: '#agents' },
          { text: 'Multimodal Perception & Vision', href: '#vision' },
          { text: 'Scalable Neural Architectures', href: '#architectures' },
          { text: 'Deep Reasoning & Logic', href: '#reasoning' },
          { text: 'Safety Evaluation & Benchmarks', href: '#benchmarks' },
        ],
      },
      {
        label: 'LATEST ADVANCEMENTS',
        heading: 'Recent Releases',
        links: [
          { text: 'TrueTech Model-4 Report', href: '#model-4', tag: 'Report' },
          { text: 'Latent Space Optimization', href: '#optimization' },
          { text: 'Multi-Agent Coordination', href: '#coordination' },
        ],
      },
      {
        label: 'COMMUNITY & LABS',
        heading: 'Open Science',
        links: [
          { text: 'Research Residency Program', href: '#residency' },
          { text: 'Academic Compute Grants', href: '#grants' },
          { text: 'Global Lab Collaborations', href: '#labs' },
        ],
      },
    ],
  },
  {
    id: 'products',
    title: 'Products',
    columns: [
      {
        label: 'FOR INDIVIDUALS',
        heading: 'Personal & Pro',
        desc: 'Empowering creators and professionals with next-generation tools.',
        links: [
          { text: 'TrueTech Studio', href: '#studio', tag: 'Popular' },
          { text: 'Mobile Apps (iOS & Android)', href: '#mobile' },
          { text: 'Search & Synthesis Engine', href: '#search-engine' },
        ],
      },
      {
        label: 'FOR TEAMS',
        heading: 'Team Solutions',
        links: [
          { text: 'TrueTech Enterprise Hub', href: '#enterprise' },
          { text: 'Collaborative Workspaces', href: '#workspaces' },
          { text: 'Shared Knowledge Bases', href: '#knowledge' },
          { text: 'Automated Workflows', href: '#workflows' },
        ],
      },
      {
        label: 'DEVELOPER PLATFORM',
        heading: 'Developer Tools',
        links: [
          { text: 'TrueTech API & Cloud SDK', href: '#api' },
          { text: 'Interactive Playground', href: '#playground' },
          { text: 'Custom Integration Connectors', href: '#connectors' },
        ],
      },
      {
        label: 'RESOURCES',
        heading: 'Ecosystem',
        links: [
          { text: 'Product Changelog', href: '#changelog' },
          { text: 'Security Architecture', href: '#security' },
          { text: 'Global Uptime Status (99.99%)', href: '#status' },
        ],
      },
    ],
  },
  {
    id: 'business',
    title: 'Business',
    columns: [
      {
        label: 'SOLUTIONS BY INDUSTRY',
        heading: 'Industry Solutions',
        links: [
          { text: 'Financial Services & FinTech', href: '#finance' },
          { text: 'Healthcare & Life Sciences', href: '#healthcare' },
          { text: 'Retail, Commerce & Logistics', href: '#retail' },
          { text: 'Technology & High-Growth', href: '#tech' },
        ],
      },
      {
        label: 'CAPABILITIES',
        heading: 'Enterprise Features',
        desc: 'Security, privacy, and dedicated infrastructure for global scale.',
        links: [
          { text: 'Zero Data Retention Compliance', href: '#privacy' },
          { text: 'SOC2 Type II & ISO 27001', href: '#compliance' },
          { text: 'Dedicated Single-Tenant Clouds', href: '#cloud' },
          { text: '24/7 Priority Support SLA', href: '#sla' },
        ],
      },
      {
        label: 'SCALE & IMPACT',
        heading: 'Case Studies',
        links: [
          { text: 'Enterprise Transformation Stories', href: '#stories' },
          { text: 'ROI & TCO Calculator', href: '#calculator' },
          { text: 'Implementation Advisory', href: '#advisory' },
        ],
      },
      {
        label: 'NEXT STEPS',
        heading: 'Engage With Us',
        links: [
          { text: 'Schedule Architecture Review', href: '#review' },
          { text: 'Request Customized Demo', href: '#demo' },
          { text: 'Contact Enterprise Sales', href: '#sales' },
        ],
      },
    ],
  },
  {
    id: 'developers',
    title: 'Developers',
    columns: [
      {
        label: 'GETTING STARTED',
        heading: 'Documentation',
        desc: 'Build intelligent applications in minutes with robust APIs.',
        links: [
          { text: 'Quickstart Guide (5 mins)', href: '#quickstart' },
          { text: 'API Reference & Specs', href: '#api-docs' },
          { text: 'Client SDKs (Node, Python, Go)', href: '#sdks' },
          { text: 'Interactive API Console', href: '#console' },
        ],
      },
      {
        label: 'CORE CAPABILITIES',
        heading: 'Building Blocks',
        links: [
          { text: 'Streaming Inference API', href: '#streaming' },
          { text: 'Function Calling & Tool Use', href: '#function-calling' },
          { text: 'Vector Embeddings & Search', href: '#embeddings' },
          { text: 'Model Fine-Tuning & Evaluation', href: '#fine-tuning' },
        ],
      },
      {
        label: 'COMMUNITY & EXAMPLES',
        heading: 'Ecosystem',
        links: [
          { text: 'Official GitHub Repositories', href: '#github' },
          { text: 'Open-Source Templates', href: '#templates' },
          { text: 'Developer Discord Community', href: '#community' },
        ],
      },
      {
        label: 'OPERATIONS',
        heading: 'Reliability',
        links: [
          { text: 'Rate Limits & Quota Tiers', href: '#quotas' },
          { text: 'API Status & Health', href: '#api-status' },
          { text: 'Developer Help Center', href: '#help' },
        ],
      },
    ],
  },
  {
    id: 'company',
    title: 'Company',
    columns: [
      {
        label: 'ABOUT TRUE TECH',
        heading: 'Our Organization',
        desc: 'Driven by curiosity, grounded in honesty and engineering excellence.',
        links: [
          { text: 'Mission, Vision & Principles', href: 'about.html' },
          { text: 'Executive Leadership Team', href: 'employees.html' },
          { text: 'Career Opportunities', href: '#careers', tag: 'Hiring' },
        ],
      },
      {
        label: 'NEWS & MEDIA',
        heading: 'Press & Newsroom',
        links: [
          { text: 'Company Announcements', href: '#news' },
          { text: 'Media Kit & Brand Assets', href: '#media-kit' },
          { text: 'Upcoming Keynotes & Events', href: '#events' },
        ],
      },
      {
        label: 'TRUST & SAFETY',
        heading: 'Governance',
        links: [
          { text: 'Security Whitepaper', href: '#security-whitepaper' },
          { text: 'Responsible AI Principles', href: '#ethics' },
          { text: 'Bug Bounty Program', href: '#bug-bounty' },
        ],
      },
      {
        label: 'GET IN TOUCH',
        heading: 'Global Offices',
        links: [
          { text: 'Headquarters & Locations', href: '#locations' },
          { text: 'Investor & Partner Relations', href: '#investors' },
          { text: 'General Contact Form', href: 'contact.html' },
        ],
      },
    ],
  },
  {
    id: 'foundation',
    title: 'Foundation',
    columns: [
      {
        label: 'PUBLIC BENEFIT',
        heading: 'Public Initiatives',
        desc: 'Ensuring technology creates broad, equitable benefits for society.',
        links: [
          { text: 'Democratizing Tech Access', href: '#access' },
          { text: 'Digital Literacy Grants', href: '#literacy' },
          { text: 'Open Educational Content', href: '#education' },
        ],
      },
      {
        label: 'ACADEMIC SUPPORT',
        heading: 'Grants & Fellowships',
        links: [
          { text: 'PhD Fellowship Program', href: '#fellowships' },
          { text: 'Open-Access Compute Grants', href: '#compute-grants' },
          { text: 'Student Hackathon Sponsorship', href: '#hackathons' },
        ],
      },
      {
        label: 'POLICY & RESEARCH',
        heading: 'Ethics & Policy',
        links: [
          { text: 'Annual Public Impact Report', href: '#impact-report' },
          { text: 'Public Policy Whitepapers', href: '#policy' },
          { text: 'Safe Deployment Standards', href: '#safety-standards' },
        ],
      },
      {
        label: 'GET INVOLVED',
        heading: 'Partner With Us',
        links: [
          { text: 'Nonprofit Application Form', href: '#nonprofit' },
          { text: 'Grant Submission Portal', href: '#grant-portal' },
          { text: 'Foundation Advisory Board', href: '#advisory-board' },
        ],
      },
    ],
  },
];

/**
 * Reusable React Navbar with Animated Mega Menu
 */
export default function Navbar({
  brandName = 'TRUE TECH',
  categories = NAV_CATEGORIES,
  onSearchClick,
}) {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMobileAccordion, setActiveMobileAccordion] = useState(null);
  const closeTimerRef = useRef(null);

  // Clear hover timer on unmount
  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveMenu(null);
        setIsMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Pointer event handlers with hover intent
  const handleMouseEnterItem = (id) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setActiveMenu(id);
  };

  const handleMouseLeaveItem = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  const handleMouseEnterPanel = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const handleMouseLeavePanel = () => {
    handleMouseLeaveItem();
  };

  const currentCategory = categories.find((c) => c.id === activeMenu);

  return (
    <>
      <header className="site-header" id="siteHeader">
        <div className="nav-container">
          {/* Logo (Left) */}
          <a href="/" className="nav-logo" aria-label={`${brandName} Homepage`}>
            <span className="logo-mark">●</span>
            <span className="logo-text">{brandName}</span>
          </a>

          {/* Center Navigation Links */}
          <nav className="nav-menu" aria-label="Main Navigation">
            <ul className="nav-list">
              {categories.map((cat) => {
                const isActive = activeMenu === cat.id;
                return (
                  <li
                    key={cat.id}
                    className={`nav-item ${isActive ? 'is-active' : ''}`}
                    onMouseEnter={() => handleMouseEnterItem(cat.id)}
                    onMouseLeave={handleMouseLeaveItem}
                  >
                    <button
                      type="button"
                      className="nav-link-btn"
                      aria-expanded={isActive}
                      onClick={() => setActiveMenu(isActive ? null : cat.id)}
                    >
                      {cat.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Actions */}
          <div className="nav-actions-right">
            <button
              type="button"
              className="nav-search-btn"
              onClick={onSearchClick}
              aria-label="Search"
              title="Search (Ctrl+K)"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            <a href="#login" className="nav-login-link">
              Log in
            </a>
            <a href="contact.html" className="nav-contact-btn">
              Contact
            </a>
            <a href="contact.html" className="nav-primary-cta">
              Get Started
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="nav-mobile-toggle"
              aria-expanded={isMobileOpen}
              aria-label="Toggle navigation"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              <span className="hamburger-bar" />
              <span className="hamburger-bar" />
            </button>
          </div>
        </div>

        {/* Animated Mega Menu Dropdown */}
        <AnimatePresence>
          {activeMenu && currentCategory && (
            <motion.div
              className="mega-menu-wrapper is-open"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={handleMouseEnterPanel}
              onMouseLeave={handleMouseLeavePanel}
            >
              <div className="mega-menu-panel">
                <div className="container mega-menu-container">
                  <motion.div
                    key={currentCategory.id}
                    className="mega-menu-content active"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                  >
                    {currentCategory.columns.map((col, idx) => (
                      <motion.div
                        key={idx}
                        className="mega-col"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, delay: idx * 0.04 }}
                      >
                        {col.label && <span className="mega-label">{col.label}</span>}
                        {col.heading && <h3 className="mega-heading">{col.heading}</h3>}
                        {col.desc && <p className="mega-desc">{col.desc}</p>}
                        <ul className="mega-links">
                          {col.links.map((link, lIdx) => (
                            <li key={lIdx} className="mega-link-item">
                              <a href={link.href}>
                                <span>{link.text}</span>
                                {link.tag && <span className="mega-link-tag">{link.tag}</span>}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Backdrop Dimmer */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            className="mega-backdrop is-active"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActiveMenu(null)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer Navigation */}
      {isMobileOpen && (
        <div className="mobile-nav-panel is-open">
          {categories.map((cat) => {
            const isAccOpen = activeMobileAccordion === cat.id;
            return (
              <div
                key={cat.id}
                className={`mobile-accordion-item ${isAccOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="mobile-accordion-btn"
                  onClick={() =>
                    setActiveMobileAccordion(isAccOpen ? null : cat.id)
                  }
                >
                  {cat.title}
                </button>
                {isAccOpen && (
                  <div className="mobile-accordion-content">
                    <ul className="mobile-sub-links">
                      {cat.columns.flatMap((col) =>
                        col.links.map((link, idx) => (
                          <li key={idx}>
                            <a href={link.href}>{link.text}</a>
                          </li>
                        ))
                      )}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}

          <div className="mobile-actions-group">
            <a href="contact.html" className="btn btn-secondary btn-block">
              Contact Sales
            </a>
            <a href="contact.html" className="btn btn-primary btn-block">
              Get Started
            </a>
          </div>
        </div>
      )}
    </>
  );
}
