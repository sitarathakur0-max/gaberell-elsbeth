import React, { useState, useEffect } from 'react';
import { Page, BUSINESS_INFO } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { Phone, Calendar } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Synchronize hash with page state for bookmarking and navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'about' || hash === 'services' || hash === 'contact' || hash === 'home') {
        setCurrentPage(hash as Page);
      }
    };

    // Check initial hash
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f5] text-[#0a1124] selection:bg-[#fae9e2] selection:text-[#0a1124]">
      {/* Navigation Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConsultationModal={() => setIsModalOpen(true)}
      />

      {/* Primary Page Content */}
      <div className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenConsultationModal={() => setIsModalOpen(true)}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenConsultationModal={() => setIsModalOpen(true)}
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenConsultationModal={() => setIsModalOpen(true)}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenConsultationModal={() => setIsModalOpen(true)}
          />
        )}
      </div>

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Sticky Mobile Quick Call Bar (visible on small mobile devices) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#0a1124] text-[#fbf9f5] p-3 px-4 flex items-center justify-between border-t border-white/10 shadow-2xl">
        <div className="text-left">
          <span className="block text-[10px] uppercase tracking-wider text-[#e8b4a2]">
            Gaberell Elsbeth
          </span>
          <span className="font-semibold text-xs text-white">
            Lommiswilerstrasse 33
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            id="mobile-sticky-consult-btn"
            onClick={() => setIsModalOpen(true)}
            className="text-[11px] uppercase tracking-wider font-semibold border border-white/30 text-white px-3 py-2 rounded-full hover:bg-white/10"
          >
            Inquire
          </button>
          <a
            id="mobile-sticky-call-btn"
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex items-center gap-1.5 bg-[#e8b4a2] text-[#0a1124] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call</span>
          </a>
        </div>
      </div>

      {/* Global Site Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultationModal={() => setIsModalOpen(true)}
      />
    </div>
  );
}

