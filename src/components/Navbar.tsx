import React, { useState } from 'react';
import { Phone, Menu, X, MapPin, Sparkles } from 'lucide-react';
import { Page, BUSINESS_INFO } from '../types';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onOpenConsultationModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenConsultationModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: Page; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Salon' },
    { id: 'services', label: 'Hairdressing Services' },
    { id: 'contact', label: 'Contact & Location' },
  ];

  const handleLinkClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#fbf9f5]/95 backdrop-blur-md border-b border-[#0a1124]/10 transition-colors">
      {/* Top micro-bar with Swiss location context & direct phone link */}
      <div className="bg-[#0a1124] text-[#e6d7c3] text-xs py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 tracking-wider text-[11px] uppercase">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#e8b4a2]" />
            <span>Independent Hairdressing Service</span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="hidden sm:inline text-white/80">Bellach, Switzerland</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="hidden md:flex items-center gap-1 text-white/75">
              <MapPin className="w-3 h-3 text-[#e8b4a2]" />
              {BUSINESS_INFO.street}, {BUSINESS_INFO.postalCode} {BUSINESS_INFO.locality}
            </span>
            <a
              id="top-bar-phone"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="font-medium text-[#fae9e2] hover:text-[#e8b4a2] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-[#e8b4a2]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between">
        {/* Brand identity */}
        <button
          id="nav-logo-btn"
          onClick={() => handleLinkClick('home')}
          className="text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0a1124]"
        >
          <span className="block font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#0a1124] group-hover:text-[#152238] transition-colors">
            {BUSINESS_INFO.name}
          </span>
          <span className="block text-[11px] tracking-widest uppercase font-medium text-[#0a1124]/60 group-hover:text-[#0a1124]/80 transition-colors">
            Hairdressing · Bellach
          </span>
        </button>

        {/* Desktop links */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`text-sm tracking-wide transition-all py-1 relative cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0a1124] rounded-sm ${
                  isActive
                    ? 'text-[#0a1124] font-semibold'
                    : 'text-[#0a1124]/75 hover:text-[#0a1124] font-normal'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0a1124]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Header Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="nav-consult-cta-btn"
            onClick={onOpenConsultationModal}
            className="text-xs uppercase tracking-wider font-semibold py-2 px-3.5 rounded-full border border-[#0a1124]/20 text-[#0a1124] hover:bg-[#fae9e2] transition-colors cursor-pointer"
          >
            Arrange a Consultation
          </button>
          <a
            id="nav-phone-cta-btn"
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex items-center gap-2 bg-[#0a1124] text-[#fbf9f5] hover:bg-[#152238] px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all shadow-sm cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 text-[#e8b4a2]" />
            <span>Call the Salon</span>
          </a>
        </div>

        {/* Mobile menu toggle button */}
        <button
          id="mobile-menu-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          className="lg:hidden p-2 text-[#0a1124] hover:bg-[#fae9e2] rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#0a1124]"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fbf9f5] border-b border-[#0a1124]/15 px-6 py-5 shadow-lg animate-in fade-in duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left py-2.5 px-3 rounded-md text-base transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#fae9e2] font-semibold text-[#0a1124]'
                      : 'text-[#0a1124]/80 hover:bg-neutral-100'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-[#0a1124]" />}
                </button>
              );
            })}
            <div className="pt-4 mt-2 border-t border-[#0a1124]/10 flex flex-col gap-2.5">
              <a
                id="mobile-call-cta"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 bg-[#0a1124] text-[#fbf9f5] py-3 rounded-full text-sm font-medium tracking-wide"
              >
                <Phone className="w-4 h-4 text-[#e8b4a2]" />
                <span>Call 032 618 20 38</span>
              </a>
              <button
                id="mobile-consult-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultationModal();
                }}
                className="w-full py-2.5 rounded-full border border-[#0a1124]/30 text-xs font-semibold uppercase tracking-wider text-[#0a1124]"
              >
                Arrange a Consultation
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
