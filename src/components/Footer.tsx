import React from 'react';
import { Phone, MapPin, Scissors, ArrowUp, Clock, ShieldCheck, Heart } from 'lucide-react';
import { Page, BUSINESS_INFO } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
  onOpenConsultationModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultationModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a1124] text-[#fbf9f5] border-t border-[#e6d7c3]/20 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-white/10">
          {/* Brand & Mission Statement */}
          <div className="md:col-span-5 space-y-4">
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#e8b4a2] font-semibold">
                Bellach · Switzerland
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#fbf9f5] tracking-tight">
                {BUSINESS_INFO.name}
              </h2>
              <p className="text-xs uppercase tracking-widest text-[#e6d7c3]/70">
                {BUSINESS_INFO.category} · {BUSINESS_INFO.description}
              </p>
            </div>

            <p className="text-sm text-white/75 leading-relaxed pr-0 sm:pr-6">
              Independent hairdressing service rooted in personal, unhurried attention. Every appointment is arranged directly by telephone, ensuring a calm, tailored salon environment at Lommiswilerstrasse in Bellach.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                id="footer-call-cta"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-[#e8b4a2] text-[#0a1124] px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#fae9e2] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
              <button
                id="footer-consult-cta"
                onClick={onOpenConsultationModal}
                className="inline-flex items-center gap-2 border border-[#e6d7c3]/40 text-[#fbf9f5] hover:border-[#e8b4a2] px-4 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer"
              >
                Arrange a Consultation
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.18em] text-[#e6d7c3] font-semibold">
              Explore Salon
            </h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <button
                  id="footer-nav-home"
                  onClick={() => {
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#e8b4a2] transition-colors cursor-pointer text-left"
                >
                  Home Page Overview
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-about"
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#e8b4a2] transition-colors cursor-pointer text-left"
                >
                  About Gaberell Elsbeth
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-services"
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#e8b4a2] transition-colors cursor-pointer text-left"
                >
                  Hairdressing Services
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-contact"
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#e8b4a2] transition-colors cursor-pointer text-left"
                >
                  Contact & Location
                </button>
              </li>
            </ul>

            <div className="pt-2 text-xs text-white/50 space-y-1">
              <p className="flex items-center gap-1.5 text-[#e6d7c3]/80">
                <ShieldCheck className="w-3.5 h-3.5 text-[#e8b4a2]" />
                <span>Reviews: 0 listed</span>
              </p>
              <p className="text-[11px] leading-relaxed">
                As a local independent service, appointments are arranged directly on mutual schedule.
              </p>
            </div>
          </div>

          {/* Location & Telephone Info */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.18em] text-[#e6d7c3] font-semibold">
              Salon Address & Telephone
            </h3>
            
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#e8b4a2] shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-[#fbf9f5]">{BUSINESS_INFO.name}</p>
                  <p>{BUSINESS_INFO.street}</p>
                  <p>{BUSINESS_INFO.postalCode} {BUSINESS_INFO.locality}</p>
                  <p className="text-xs text-[#e6d7c3]/70">{BUSINESS_INFO.country}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#e8b4a2] shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-[#e6d7c3]/70 uppercase tracking-wider">Direct Telephone</p>
                  <a
                    id="footer-direct-phone"
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="font-medium text-[#fbf9f5] hover:text-[#e8b4a2] transition-colors text-base"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-[11px] text-white/60">
                    Arrangements made individually by phone call.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#e8b4a2] shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-[#e6d7c3]/70 uppercase tracking-wider">Appointments</p>
                  <p className="text-xs text-white/70">
                    By telephone arrangement to give each client dedicated time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. Lommiswilerstrasse 33, 4512 Bellach, Switzerland.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-white/40">English Version</span>
            <button
              id="back-to-top-btn"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#e6d7c3] hover:text-[#e8b4a2] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
