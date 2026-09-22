import React from 'react';
import { Phone, MapPin, Sparkles, UserCheck, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { Page, BUSINESS_INFO } from '../types';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
  onOpenConsultationModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenConsultationModal }) => {
  return (
    <main className="min-h-screen bg-[#fbf9f5] text-[#0a1124]">
      {/* Page Header */}
      <section className="pt-12 pb-16 bg-[#0a1124] text-[#fbf9f5] border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#e8b4a2] font-semibold">
              <span>About the Salon</span>
              <span className="w-8 h-[1px] bg-[#e8b4a2]/50" />
              <span>Bellach, Switzerland</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#fbf9f5] font-normal leading-tight">
              Gaberell Elsbeth
            </h1>
            <p className="font-serif text-xl sm:text-2xl text-[#e6d7c3] italic font-light">
              Independent Hairdressing Grounded in Dedicated Attention
            </p>
            <p className="text-sm sm:text-base text-white/75 font-light leading-relaxed pt-2">
              A local hairdressing service located at Lommiswilerstrasse 33 in Bellach, focused on the enduring values of personal consultation, thoughtful hair craft, and relaxed one-on-one appointments.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative Article (Swiss Editorial Style) */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Sticky Summary Card */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              <div className="bg-white border border-[#0a1124]/15 p-6 sm:p-8 rounded-3xl space-y-5 shadow-sm">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#0a1124]/60 font-semibold">
                    Salon Profile
                  </span>
                  <h2 className="font-serif text-2xl text-[#0a1124]">
                    {BUSINESS_INFO.name}
                  </h2>
                  <p className="text-xs uppercase tracking-wider text-[#0a1124]/70">
                    {BUSINESS_INFO.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-[#0a1124]/10 text-xs text-[#0a1124]/80">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#0a1124] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#0a1124]">Address</p>
                      <p>{BUSINESS_INFO.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-[#0a1124] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#0a1124]">Telephone</p>
                      <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-sm font-semibold underline hover:text-[#152238]">
                        {BUSINESS_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#0a1124] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#0a1124]">Public Reviews</p>
                      <p>0 listed (Quiet neighborhood practice)</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    id="about-call-cta-btn"
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="w-full flex items-center justify-center gap-2 bg-[#0a1124] text-[#fbf9f5] hover:bg-[#152238] py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#e8b4a2]" />
                    <span>Call 032 618 20 38</span>
                  </a>
                </div>
              </div>

              {/* Editorial Quote Box */}
              <div className="bg-[#f4ede2] border border-[#e6d7c3] p-6 rounded-3xl space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-[#0a1124]/60 font-semibold">
                  Philosophy
                </span>
                <p className="font-serif text-lg text-[#0a1124]">
                  “Good hairdressing does not rush. It listens first, observes how hair moves, and cuts with precision.”
                </p>
              </div>
            </div>

            {/* Right Detailed Editorial Content */}
            <div className="lg:col-span-8 space-y-10 text-[#0a1124]/85 font-light leading-relaxed text-base sm:text-lg">
              
              <div className="space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#0a1124]">
                  A Quiet Salon in the Heart of Bellach
                </h2>
                <p>
                  Bellach, located just west of Solothurn, is a community known for its tranquil residential character and scenic proximity to the Jura foothills. On Lommiswilerstrasse 33, <strong className="font-medium text-[#0a1124]">Gaberell Elsbeth</strong> has created a hairdressing space that reflects this neighborhood calm.
                </p>
                <p>
                  Rather than mirroring the sensory overload of modern high-volume salons—where multiple hair dryers roar continuously, pop music plays loudly, and stylists juggle three clients at once—this independent salon operates on a quiet, disciplined cadence. Here, every appointment is treated as an individual occasion.
                </p>
              </div>

              {/* Editorial Image Accent */}
              <div className="rounded-3xl overflow-hidden border border-[#0a1124]/15 bg-[#fae9e2]">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=80"
                    alt="Careful hair washing and consultation in a calm salon"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 bg-white text-xs text-[#0a1124]/75 flex justify-between items-center border-t border-[#0a1124]/10">
                  <span>Quiet salon ambiance on Lommiswilerstrasse</span>
                  <span className="font-medium text-[#0a1124]">Bellach, Solothurn</span>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#0a1124]">
                  The Importance of Personal Stylist Continuity
                </h2>
                <p>
                  One of the most persistent frustrations expressed by salon visitors is the lack of consistency in modern hair studios. When you visit a large chain, you rarely know who will cut your hair, whether that stylist will still be employed there next season, or whether they will take the time to understand your hair's unique behavior.
                </p>
                <p>
                  At Gaberell Elsbeth, continuity is guaranteed. You develop an ongoing relationship with the same independent professional. Over successive visits, your stylist learns:
                </p>
                <ul className="space-y-2 text-sm sm:text-base pl-4 border-l-2 border-[#e8b4a2]">
                  <li>• How your hair texture changes across changing Swiss seasons</li>
                  <li>• Where stubborn cowlicks, crowns, or whirls naturally dictate the fall of your cut</li>
                  <li>• How much time you realistically spend styling your hair each morning</li>
                  <li>• The subtle shapes and lengths that flatter your unique jawline and facial contours</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#0a1124]">
                  A Direct, Honest Approach to Appointments
                </h2>
                <p>
                  We believe in straightforward, genuine service. Gaberell Elsbeth does not employ promotional gimmicks or inflated claims. You will not find fabricated awards or automated booking algorithms here. When you wish to schedule a consultation or haircut, you call <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="underline font-semibold text-[#0a1124]">{BUSINESS_INFO.phone}</a>.
                </p>
                <p>
                  This direct telephone contact gives both you and your stylist an opportunity to discuss the scope of your visit, plan adequate time, and confirm clear expectations.
                </p>
              </div>

              {/* Call to action section */}
              <div className="p-8 rounded-3xl bg-[#0a1124] text-[#fbf9f5] space-y-4">
                <h3 className="font-serif text-2xl text-[#fbf9f5]">
                  Experience Independent Hair Care in Bellach
                </h3>
                <p className="text-sm text-white/75 font-light">
                  Whether you are seeking a careful trim, a refreshed look, or thoughtful advice on caring for your hair, Gaberell Elsbeth welcomes your inquiry.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    id="about-cta-phone"
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="inline-flex items-center gap-2 bg-[#e8b4a2] text-[#0a1124] px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#fae9e2] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call 032 618 20 38</span>
                  </a>
                  <button
                    id="about-cta-consult"
                    onClick={onOpenConsultationModal}
                    className="inline-flex items-center gap-2 border border-white/30 text-white px-5 py-3 rounded-full text-xs font-medium uppercase tracking-wider hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <span>Arrange a Consultation</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
};
