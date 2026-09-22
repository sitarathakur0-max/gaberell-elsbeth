import React from 'react';
import { Phone, Scissors, Sparkles, Droplets, CheckCircle, ShieldCheck, ArrowRight, HelpCircle } from 'lucide-react';
import { Page, BUSINESS_INFO } from '../types';

interface ServicesPageProps {
  onNavigate: (page: Page) => void;
  onOpenConsultationModal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenConsultationModal }) => {
  return (
    <main className="min-h-screen bg-[#fbf9f5] text-[#0a1124]">
      {/* Page Header */}
      <section className="pt-12 pb-16 bg-[#0a1124] text-[#fbf9f5] border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#e8b4a2] font-semibold">
              <span>Hairdressing Services</span>
              <span className="w-8 h-[1px] bg-[#e8b4a2]/50" />
              <span>Gaberell Elsbeth · Bellach</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#fbf9f5] font-normal leading-tight">
              Craft & Disciplines
            </h1>
            <p className="font-serif text-xl sm:text-2xl text-[#e6d7c3] italic font-light">
              Classic, tailored hairdressing services coordinated to your individual needs.
            </p>
            <p className="text-sm sm:text-base text-white/75 font-light leading-relaxed pt-2">
              Every client's hair is distinct in texture, thickness, and daily requirements. Rather than forcing your hair into rigid package tiers, Gaberell Elsbeth approaches each appointment with thoughtful personal consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Narrative & Disciplines Breakdown */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          {/* Important Notice Callout regarding Pricing & Booking */}
          <div className="bg-[#f4ede2] border border-[#e6d7c3] p-6 sm:p-8 rounded-3xl mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#0a1124] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0a1124]" />
                Direct Communication Notice
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#0a1124]">
                Tailored Services Arranged by Telephone
              </h3>
              <p className="text-xs sm:text-sm text-[#0a1124]/80 leading-relaxed">
                We do not list standardized package prices online because hair density, current length, and specific treatment requirements vary considerably. For honest recommendations and schedule coordination, call <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="underline font-semibold">{BUSINESS_INFO.phone}</a>.
              </p>
            </div>
            <a
              id="services-call-banner-btn"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-[#0a1124] text-[#fbf9f5] px-6 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold hover:bg-[#152238] transition-colors shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-[#e8b4a2]" />
              <span>Call 032 618 20 38</span>
            </a>
          </div>

          {/* Asymmetrical Disciplines Layout */}
          <div className="space-y-12">
            
            {/* Discipline 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-10 rounded-3xl border border-[#0a1124]/15">
              <div className="lg:col-span-1 text-center lg:text-left">
                <span className="font-serif text-4xl text-[#e8b4a2] font-semibold">01</span>
              </div>
              <div className="lg:col-span-7 space-y-3">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#0a1124]/60 font-semibold">
                  <Scissors className="w-4 h-4 text-[#0a1124]" />
                  <span>Precision Haircutting</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#0a1124]">
                  Consultative Haircutting & Shaping
                </h3>
                <p className="text-sm sm:text-base text-[#0a1124]/80 leading-relaxed font-light">
                  A superior haircut is designed to look graceful not just on the day you leave the salon, but throughout the weeks that follow. Gaberell Elsbeth takes the time to assess natural hair growth patterns, cowlicks, density, and face geometry before trimming.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#0a1124]/70">
                  <p>• Women’s and men’s custom haircuts</p>
                  <p>• Textured layers and weight reduction</p>
                  <p>• Fringe shaping and contour refinement</p>
                  <p>• Easy-care styling advice for home</p>
                </div>
              </div>
              <div className="lg:col-span-4 bg-[#fae9e2]/60 p-6 rounded-2xl border border-[#e8b4a2]/50 space-y-2">
                <p className="text-xs uppercase tracking-wider font-semibold text-[#0a1124]">
                  The Consultation Difference
                </p>
                <p className="text-xs text-[#0a1124]/75 leading-relaxed">
                  Every haircut begins with a clear conversation about how you wear your hair in daily life, work, and sports, ensuring a cut that suits your realistic routine.
                </p>
              </div>
            </div>

            {/* Discipline 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-10 rounded-3xl border border-[#0a1124]/15">
              <div className="lg:col-span-1 text-center lg:text-left">
                <span className="font-serif text-4xl text-[#e8b4a2] font-semibold">02</span>
              </div>
              <div className="lg:col-span-7 space-y-3">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#0a1124]/60 font-semibold">
                  <Sparkles className="w-4 h-4 text-[#0a1124]" />
                  <span>Styling & Blow-Drying</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#0a1124]">
                  Shaping, Volume & Finishing
                </h3>
                <p className="text-sm sm:text-base text-[#0a1124]/80 leading-relaxed font-light">
                  Professional blow-drying and styling that brings out the natural vitality and silkiness of your hair. We focus on techniques that protect hair integrity while building enduring structure and natural movement.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#0a1124]/70">
                  <p>• Smooth or voluminous blow-drying</p>
                  <p>• Natural movement and subtle finishing</p>
                  <p>• Event styling consultation</p>
                  <p>• Heat-protective, gentle handling</p>
                </div>
              </div>
              <div className="lg:col-span-4 bg-[#f4ede2] p-6 rounded-2xl border border-[#e6d7c3] space-y-2">
                <p className="text-xs uppercase tracking-wider font-semibold text-[#0a1124]">
                  Occasions & Everyday Polish
                </p>
                <p className="text-xs text-[#0a1124]/75 leading-relaxed">
                  Whether preparing for a family gathering, business appointment, or personal refresh, styling is adjusted to your comfort level and preferences.
                </p>
              </div>
            </div>

            {/* Discipline 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-10 rounded-3xl border border-[#0a1124]/15">
              <div className="lg:col-span-1 text-center lg:text-left">
                <span className="font-serif text-4xl text-[#e8b4a2] font-semibold">03</span>
              </div>
              <div className="lg:col-span-7 space-y-3">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#0a1124]/60 font-semibold">
                  <Droplets className="w-4 h-4 text-[#0a1124]" />
                  <span>Hair & Scalp Health</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#0a1124]">
                  Washing, Conditioning & Care
                </h3>
                <p className="text-sm sm:text-base text-[#0a1124]/80 leading-relaxed font-light">
                  A soothing sink experience designed to care for hair fibers and nourish the scalp. We use thoughtful washing motions that improve circulation and conditioning steps that restore moisture balance.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#0a1124]/70">
                  <p>• Thorough, calming hair wash</p>
                  <p>• Targeted conditioning for dry or sensitive strands</p>
                  <p>• Scalp tension relief during washing</p>
                  <p>• Moisture replenishment for seasonal dryness</p>
                </div>
              </div>
              <div className="lg:col-span-4 bg-[#fae9e2]/60 p-6 rounded-2xl border border-[#e8b4a2]/50 space-y-2">
                <p className="text-xs uppercase tracking-wider font-semibold text-[#0a1124]">
                  Scalp Care Foundation
                </p>
                <p className="text-xs text-[#0a1124]/75 leading-relaxed">
                  Healthy hair growth requires a balanced, well-cared-for scalp environment. Gentle cleansing is a cornerstone of every visit.
                </p>
              </div>
            </div>

            {/* Discipline 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-10 rounded-3xl border border-[#0a1124]/15">
              <div className="lg:col-span-1 text-center lg:text-left">
                <span className="font-serif text-4xl text-[#e8b4a2] font-semibold">04</span>
              </div>
              <div className="lg:col-span-7 space-y-3">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#0a1124]/60 font-semibold">
                  <HelpCircle className="w-4 h-4 text-[#0a1124]" />
                  <span>Personal Consultation</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#0a1124]">
                  Hair Color & Styling Advice
                </h3>
                <p className="text-sm sm:text-base text-[#0a1124]/80 leading-relaxed font-light">
                  Considering a new style or subtle change? Color decisions and style transformations require an honest evaluation of skin undertones, hair condition, and long-term maintenance commitment. Gaberell Elsbeth provides objective, professional feedback.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#0a1124]/70">
                  <p>• Realistic advice on maintenance cycles</p>
                  <p>• Color suitability discussions</p>
                  <p>• Transitioning between lengths</p>
                  <p>• Direct conversation with zero sales pressure</p>
                </div>
              </div>
              <div className="lg:col-span-4 bg-[#f4ede2] p-6 rounded-2xl border border-[#e6d7c3] space-y-2">
                <p className="text-xs uppercase tracking-wider font-semibold text-[#0a1124]">
                  Telephone Inquiry Welcome
                </p>
                <p className="text-xs text-[#0a1124]/75 leading-relaxed">
                  If you are unsure what service you require, describe your hair over the phone at 032 618 20 38 and receive immediate guidance.
                </p>
              </div>
            </div>

          </div>

          {/* Final Callout to Schedule */}
          <div className="mt-16 text-center space-y-4 max-w-xl mx-auto">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#0a1124]">
              Ready to Coordinate Your Appointment?
            </h3>
            <p className="text-sm text-[#0a1124]/75">
              Call Gaberell Elsbeth at Lommiswilerstrasse 33 in Bellach to arrange your visit.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                id="services-page-call-btn"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-[#0a1124] text-[#fbf9f5] px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-[#152238] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#e8b4a2]" />
                <span>Call 032 618 20 38</span>
              </a>
              <button
                id="services-page-inquiry-btn"
                onClick={onOpenConsultationModal}
                className="inline-flex items-center gap-2 border border-[#0a1124]/30 text-[#0a1124] px-6 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-[#fae9e2] transition-colors cursor-pointer"
              >
                <span>Arrange a Consultation</span>
              </button>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};
