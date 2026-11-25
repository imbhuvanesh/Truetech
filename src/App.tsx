import { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/agency/Footer';
import { FloatingBackToTop } from './components/FloatingBackToTop';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProductsPage } from './pages/ProductsPage';
import { WorkPage } from './pages/WorkPage';
import { ContactPage } from './pages/ContactPage';

// Automatically scroll to top whenever the route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#082B91] text-primary-black flex flex-col items-center justify-start p-2 sm:p-4 md:p-6 lg:p-8 pt-20 sm:pt-24 md:pt-28 select-none antialiased relative">
        {/* Floating Fixed Navigation Bar */}
        <Navbar />

        {/* Dedicated Page Routes */}
        <main className="w-full flex flex-col items-center flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Redesigned Stacked-Card Footer Container */}
        <Footer />

        {/* Dynamic Circular Scroll-Progress Back To Top Button */}
        <FloatingBackToTop />
      </div>
    </HashRouter>
  );
}

export default App;
