import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { RewardsSection } from './components/RewardsSection';
import { AboutSection } from './components/agency/AboutSection';
import { TabContentToggle } from './components/agency/TabContentToggle';
import { ServicesSection } from './components/agency/ServicesSection';
import { PortfolioSection } from './components/agency/PortfolioSection';
import { WhyChooseUsSection } from './components/agency/WhyChooseUsSection';
import { ProcessSection } from './components/agency/ProcessSection';
import { ContactSection } from './components/agency/ContactSection';
import { Footer } from './components/agency/Footer';
import { Modals } from './components/Modals';
import confetti from 'canvas-confetti';

export function App() {
  const [selectedService, setSelectedService] = useState<string>('Web Development');
  const [activeModal, setActiveModal] = useState<'about' | 'stats' | 'tokenomics' | 'airdrop' | 'wallet' | null>(null);
  const [walletConnected, setWalletConnected] = useState(false);
  const [, setWalletAddress] = useState('0x71C849fF138243b8214f4e24D7A1A7D0bE649A2b');
  const shouldReduceMotion = useReducedMotion();

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesElem = document.getElementById('services');
    if (servicesElem) {
      servicesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    scrollToContact();
  };

  const handleOpenModal = (tab: 'about' | 'stats' | 'tokenomics' | 'airdrop' | 'wallet') => {
    setActiveModal(tab);
  };

  const handleGetStarted = () => {
    confetti({
      particleCount: 85,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#A8FF00', '#0645D8', '#FFFFFF']
    });
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#082B91] text-primary-black flex flex-col items-center justify-start p-2 sm:p-5 md:p-8 lg:p-10 select-none antialiased">

      {/* Main Container matching Reference Image */}
      <main className="w-full max-w-[1260px] rounded-[36px] sm:rounded-[48px] md:rounded-[56px] shadow-[0_30px_90px_-15px_rgba(0,10,50,0.65),0_0_0_1px_rgba(255,255,255,0.12)] overflow-hidden border border-white/15 transition-all">

        {/* =========================================================================
            TOP SECTION: ELECTRIC ROYAL BLUE HERO WITH TECHNICAL GRID
           ========================================================================= */}
        <div className="relative w-full bg-[#0645D8] hero-grid min-h-[550px] sm:min-h-[620px] md:min-h-[670px] flex flex-col justify-between overflow-visible">

          {/* Subtle Ambient Radial Light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#1253ff] opacity-40 blur-[130px] rounded-full pointer-events-none" />

          {/* Navigation Bar inside the Electric Blue container */}
          <Navbar
            onStartProject={scrollToContact}
            onOpenModal={handleOpenModal}
          />

          {/* Hero Section Container with Headline, Doodles & Floating Cards */}
          <HeroSection onGetStarted={handleGetStarted} />

        </div>

        {/* =========================================================================
            BOTTOM SECTION: PURE WHITE EXPANSIVE AGENCY BODY
            Immediately follows the Hero section as requested:
            1. The 3 Reference Reward Cards with Connector Doodles
            2. About Us
            3. Our Services (All 6 Categories)
            4. Our Work / Portfolio
            5. Why Choose Us (5 Pillars)
            6. Our Process (4 Stages)
            7. Contact Section (Form + WhatsApp + Email)
           ========================================================================= */}
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0.9, y: shouldReduceMotion ? 0 : 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "100px 0px 100px 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full bg-white rounded-t-[36px] sm:rounded-t-[48px] md:rounded-t-[56px] shadow-[0_-20px_50px_rgba(0,0,0,0.08)] overflow-hidden"
        >
          {/* The 3 Reference Cards */}
          <RewardsSection />

          {/* About Us */}
          <AboutSection onExploreServices={scrollToServices} />

          {/* Tab Content Toggle (GSAP / SplitText) */}
          <TabContentToggle />

          {/* Our Services (All 6 Disciplines) */}
          <ServicesSection onSelectService={handleSelectService} />

          {/* Our Work / Selected Portfolio */}
          <PortfolioSection />

          {/* Why Choose Us (5 Pillars) */}
          <WhyChooseUsSection />

          {/* Our 4-Stage Process */}
          <ProcessSection />

          {/* Contact Section ("Have a Project in Mind?") */}
          <ContactSection preselectedService={selectedService} />

          {/* Footer */}
          <Footer />

        </motion.div>

      </main>

      {/* Interactive Modals */}
      <Modals
        activeModal={activeModal}
        onClose={() => setActiveModal(null)}
        walletConnected={walletConnected}
        setWalletConnected={setWalletConnected}
        setWalletAddress={setWalletAddress}
      />

    </div>
  );
}

export default App;
