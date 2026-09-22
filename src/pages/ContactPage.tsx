import React from 'react';
import { Phone, MapPin, Clock, MessageSquare, ShieldCheck, Compass, ArrowRight } from 'lucide-react';
import { Page, BUSINESS_INFO } from '../types';
import { ContactForm } from '../components/ContactForm';

interface ContactPageProps {
  onNavigate: (page: Page) => void;
  onOpenConsultationModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenConsultationModal }) => {
  return (
    <main className="min-h-screen bg-[#fbf9f5] text-[#0a1124]">
      {/* Header */}
      <section className="pt-12 pb-16 bg-[#0a1124] text-[#fbf9f5] border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#e8b4a2] font-semibold">
              <span>Contact & Location</span>
              <span className="w-8 h-[1px] bg-[#e8b4a2]/50" />
              <span>Bellach, Switzerland</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#fbf9f5] font-normal leading-tight">
              Get in Touch
            </h1>
            <p className="font-serif text-xl sm:text-2xl text-[#e6d7c3] italic font-light">
              Arrange your visit or consultation with Gaberell Elsbeth.
            </p>
            <p className="text-sm sm:text-base text-white/75 font-light leading-relaxed pt-2">
              All appointments are confirmed individually by telephone to ensure personal, unhurried time for every client at Lommiswilerstrasse 33 in Bellach.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Details & Telephone Focus */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white border border-[#0a1124]/15 p-8 rounded-3xl space-y-6 shadow-sm">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#0a1124]/60 font-semibold">
                    Direct Contact
                  </span>
                  <h2 className="font-serif text-3xl text-[#0a1124] mt-1">
                    {BUSINESS_INFO.name}
                  </h2>
                  <p className="text-xs uppercase tracking-wider text-[#0a1124]/70">
                    {BUSINESS_INFO.category} · {BUSINESS_INFO.description}
                  </p>
                </div>

                <div className="space-y-4 text-sm text-[#0a1124]/85">
                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#fae9e2]/50 border border-[#e8b4a2]/50">
                    <Phone className="w-5 h-5 text-[#0a1124] shrink-0 mt-1" />
                    <div>
                      <p className="text-xs uppercase tracking-wider font-semibold text-[#0a1124]">
                        Telephone Line
                      </p>
                      <a
                        id="contact-page-phone-link"
                        href={`tel:${BUSINESS_INFO.phoneRaw}`}
                        className="text-lg font-bold text-[#0a1124] hover:underline"
                      >
                        {BUSINESS_INFO.phone}
                      </a>
                      <p className="text-xs text-[#0a1124]/70 pt-0.5">
                        International: {BUSINESS_INFO.phoneInternational}
                      </p>
                      <p className="text-[11px] text-[#0a1124]/65 pt-1">
                        Please call during standard daytime hours to arrange your visit.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#f4ede2] border border-[#e6d7c3]">
                    <MapPin className="w-5 h-5 text-[#0a1124] shrink-0 mt-1" />
                    <div>
                      <p className="text-xs uppercase tracking-wider font-semibold text-[#0a1124]">
                        Salon Address
                      </p>
                      <p className="font-medium text-[#0a1124]">{BUSINESS_INFO.street}</p>
                      <p className="text-sm">{BUSINESS_INFO.postalCode} {BUSINESS_INFO.locality}</p>
                      <p className="text-xs text-[#0a1124]/70">{BUSINESS_INFO.country}</p>
                      <div className="pt-2">
                        <a
                          id="contact-directions-btn"
                          href="https://maps.google.com/?q=Lommiswilerstrasse+33,+4512+Bellach,+Switzerland"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#0a1124] underline hover:text-[#152238]"
                        >
                          <span>Directions in Google Maps</span>
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#fbf9f5] border border-[#0a1124]/10">
                    <Clock className="w-5 h-5 text-[#0a1124] shrink-0 mt-1" />
                    <div>
                      <p className="text-xs uppercase tracking-wider font-semibold text-[#0a1124]">
                        Appointments
                      </p>
                      <p className="text-xs text-[#0a1124]/80 leading-relaxed">
                        Arranged individually with Gaberell Elsbeth over the phone. By scheduling one client at a time, we ensure a serene environment.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    id="contact-call-action-btn"
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="w-full flex items-center justify-center gap-2 bg-[#0a1124] text-[#fbf9f5] hover:bg-[#152238] py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors shadow-sm"
                  >
                    <Phone className="w-4 h-4 text-[#e8b4a2]" />
                    <span>Call 032 618 20 38</span>
                  </a>
                </div>
              </div>

              {/* Verified Listing Disclosure */}
              <div className="p-5 rounded-2xl bg-[#f4ede2] border border-[#e6d7c3] space-y-2 text-xs text-[#0a1124]/80">
                <div className="flex items-center gap-2 font-semibold text-[#0a1124]">
                  <ShieldCheck className="w-4 h-4 text-[#0a1124]" />
                  <span>Public Listing Verification</span>
                </div>
                <p>
                  Business: <strong className="font-medium text-[#0a1124]">Gaberell Elsbeth</strong><br />
                  Reviews: <strong className="font-medium text-[#0a1124]">0 listed</strong><br />
                  Category: <strong className="font-medium text-[#0a1124]">Hair Salon / Local hairdressing service</strong>
                </p>
                <p className="text-[11px] text-[#0a1124]/70 pt-1">
                  We invite clients to experience our independent local craft directly through personal telephone consultation.
                </p>
              </div>
            </div>

            {/* Right Column: Contact Inquiry Form & FAQs */}
            <div className="lg:col-span-7 space-y-10">
              <ContactForm compact={false} />

              {/* Clear FAQ Section (Honest, factual) */}
              <div className="bg-white border border-[#0a1124]/15 p-8 rounded-3xl space-y-6">
                <h3 className="font-serif text-2xl text-[#0a1124]">
                  Visiting Gaberell Elsbeth — Frequently Asked Questions
                </h3>

                <div className="space-y-4 text-sm text-[#0a1124]/80">
                  <div className="border-b border-[#0a1124]/10 pb-4 space-y-1">
                    <h4 className="font-semibold text-sm text-[#0a1124]">
                      How do I book an appointment?
                    </h4>
                    <p className="text-xs sm:text-sm text-[#0a1124]/75 leading-relaxed">
                      Simply call Gaberell Elsbeth at <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-semibold underline">032 618 20 38</a>. We discuss your hair requirements and agree on a convenient date and time together.
                    </p>
                  </div>

                  <div className="border-b border-[#0a1124]/10 pb-4 space-y-1">
                    <h4 className="font-semibold text-sm text-[#0a1124]">
                      Can I book online?
                    </h4>
                    <p className="text-xs sm:text-sm text-[#0a1124]/75 leading-relaxed">
                      To preserve personal continuity and ensure adequate dedicated time is reserved for each haircut or styling session, we do not operate an automated online booking system. Telephone coordination allows us to understand your specific hair texture and length in advance.
                    </p>
                  </div>

                  <div className="border-b border-[#0a1124]/10 pb-4 space-y-1">
                    <h4 className="font-semibold text-sm text-[#0a1124]">
                      Where is the salon situated?
                    </h4>
                    <p className="text-xs sm:text-sm text-[#0a1124]/75 leading-relaxed">
                      At Lommiswilerstrasse 33 in 4512 Bellach, Switzerland. It is situated in a pleasant residential setting with easy access from Solothurn and neighboring communities.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-semibold text-sm text-[#0a1124]">
                      Can I arrange a consultation if I'm unsure of what style I need?
                    </h4>
                    <p className="text-xs sm:text-sm text-[#0a1124]/75 leading-relaxed">
                      Yes. You are welcome to call and discuss what style, trim, or care regimen might best suit your daily routine and hair type before finalizing your appointment.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
};
