import React from 'react';
import {
  Phone,
  MapPin,
  Clock,
  Sparkles,
  Scissors,
  CheckCircle,
  ArrowRight,
  Compass,
  Calendar,
  ShieldCheck,
  UserCheck,
  Building,
} from 'lucide-react';
import { Page, BUSINESS_INFO } from '../types';
import { ContactForm } from '../components/ContactForm';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onOpenConsultationModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenConsultationModal }) => {
  return (
    <main className="min-h-screen bg-[#fbf9f5] text-[#0a1124]">
      {/* -------------------------------------------------------------
          1. EDITORIAL HERO SECTION (Asymmetrical magazine layout)
      ------------------------------------------------------------- */}
      <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#0a1124]/10 overflow-hidden">
        {/* Subtle background linework accents */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-0 right-1/4 w-[1px] h-full bg-[#0a1124]/10" />
          <div className="absolute top-1/3 left-0 w-full h-[1px] bg-[#0a1124]/5" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Asymmetrical Editorial Typography */}
            <div className="lg:col-span-7 space-y-6 lg:pr-8">
              {/* Editorial label & location stamp */}
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#0a1124] bg-[#fae9e2] px-3 py-1 rounded-full border border-[#e8b4a2]/50">
                  Bellach · Solothurn
                </span>
                <span className="h-[1px] w-12 bg-[#0a1124]/20" />
                <span className="text-xs uppercase tracking-widest text-[#0a1124]/60">
                  Independent Hairdressing
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-normal tracking-tight text-[#0a1124] leading-[1.08]">
                  Gaberell <br />
                  <span className="italic font-light text-[#0a1124]/90">Elsbeth</span>
                </h1>
                <p className="font-serif text-xl sm:text-2xl text-[#0a1124]/80 italic font-light pt-1">
                  A personal, independent hair salon dedicated to one-to-one craft.
                </p>
              </div>

              {/* Substantial Intro Prose */}
              <p className="text-base sm:text-lg text-[#0a1124]/80 leading-relaxed max-w-2xl font-light">
                Located on Lommiswilerstrasse in the quiet community of Bellach, <strong className="font-medium text-[#0a1124]">Gaberell Elsbeth</strong> offers a calm and focused salon environment where your hairdressing needs receive undivided personal attention. Without the hurried pace or noise of large commercial parlors, each session is arranged directly by phone to ensure thoughtful, personalized care.
              </p>

              {/* Key Quick Facts Pill Strip */}
              <div className="flex flex-wrap gap-2.5 pt-2 text-xs">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f4ede2] text-[#0a1124] border border-[#e6d7c3]">
                  <MapPin className="w-3.5 h-3.5 text-[#0a1124]" />
                  Lommiswilerstrasse 33, Bellach
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f4ede2] text-[#0a1124] border border-[#e6d7c3]">
                  <Phone className="w-3.5 h-3.5 text-[#0a1124]" />
                  Direct Telephone: 032 618 20 38
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#fae9e2] text-[#0a1124] border border-[#e8b4a2]/60">
                  <UserCheck className="w-3.5 h-3.5 text-[#0a1124]" />
                  Dedicated Individual Appointments
                </span>
              </div>

              {/* Primary Call to Action Group */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  id="hero-call-salon-btn"
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#0a1124] text-[#fbf9f5] hover:bg-[#152238] px-7 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all shadow-md cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#e8b4a2]" />
                  <span>Call the Salon: 032 618 20 38</span>
                </a>

                <button
                  id="hero-arrange-consultation-btn"
                  onClick={onOpenConsultationModal}
                  className="inline-flex items-center justify-center gap-2 border border-[#0a1124]/30 hover:border-[#0a1124] hover:bg-[#fae9e2] text-[#0a1124] px-6 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
                >
                  <span>Arrange a Consultation</span>
                </button>
              </div>

              <p className="text-[11px] text-[#0a1124]/60 italic">
                * Please call directly to coordinate date and time availability.
              </p>
            </div>

            {/* Right Column: Editorial Visual Framing & Vertical Details */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Vertical Text Accent (Swiss editorial signature) */}
                <div className="hidden sm:block absolute -left-7 top-1/4 -translate-y-1/2 select-none pointer-events-none z-10">
                  <span className="vertical-lr text-[10px] uppercase tracking-[0.35em] text-[#0a1124]/50 font-medium">
                    HAIRDRESSING · BELLACH
                  </span>
                </div>

                {/* Layered Editorial Card with Image Crop */}
                <div className="relative rounded-3xl overflow-hidden border border-[#0a1124]/15 bg-white shadow-xl">
                  <div className="aspect-[4/5] overflow-hidden bg-[#fae9e2]">
                    <img
                      src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80"
                      alt="Refined hair styling and cutting in a calm salon setting"
                      referrerPolicy="no-referrer"
                      loading="eager"
                      className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  {/* Overlaid Editorial Note */}
                  <div className="p-5 sm:p-6 bg-[#0a1124] text-[#fbf9f5] space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#e8b4a2] uppercase tracking-wider">
                      <span>Lommiswilerstrasse 33</span>
                      <span>4512 Bellach</span>
                    </div>
                    <p className="font-serif text-lg text-[#fbf9f5]">
                      “Hairdressing shaped by dialogue, precision, and quiet consistency.”
                    </p>
                    <p className="text-xs text-white/70">
                      Independent salon service for Bellach, Solothurn, and surrounding communities.
                    </p>
                  </div>
                </div>

                {/* Decorative Champagne Corner Stamp */}
                <div className="absolute -bottom-4 -right-4 bg-[#f4ede2] border border-[#e6d7c3] rounded-2xl p-3.5 shadow-md hidden sm:block">
                  <span className="block text-[10px] uppercase tracking-widest text-[#0a1124]/60">
                    Booking Mode
                  </span>
                  <span className="block font-serif font-bold text-sm text-[#0a1124]">
                    Telephone Direct
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          2. DETAILED INTRODUCTION TO THE LOCAL BUSINESS
      ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-[#fbf9f5] border-b border-[#0a1124]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#0a1124]/60">
                01 / Local Presence
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0a1124] leading-tight">
                An Independent Hairdressing Practice in Bellach
              </h2>
              <div className="w-12 h-[2px] bg-[#0a1124]" />
              <p className="text-xs text-[#0a1124]/60 uppercase tracking-widest pt-2">
                Situated in the canton of Solothurn
              </p>
            </div>

            <div className="lg:col-span-8 space-y-6 text-[#0a1124]/85 leading-relaxed font-light text-base sm:text-lg">
              <p>
                In an era dominated by large multi-chair salon franchises and impersonal booking algorithms, <strong className="font-medium text-[#0a1124]">Gaberell Elsbeth</strong> provides an intentional alternative: an independent, local hairdressing service rooted in the neighborhood of Bellach. Located at Lommiswilerstrasse 33, this salon is organized around personal consultation, quiet continuity, and direct communication.
              </p>
              <p>
                Choosing a neighborhood hairdresser means your appointment is not handed off between trainees or different stylists from one visit to the next. From the moment you pick up the phone to arrange your visit, you are speaking directly with the professional who will be cutting and caring for your hair. This establishes a clear understanding of your personal style, the behavior of your hair, and your daily styling routine.
              </p>
              <p>
                Whether you are a longtime resident of Bellach or visiting from neighboring towns like Lommiswil, Selzach, or Solothurn, the salon maintains a calm atmosphere where you can relax, discuss your expectations, and enjoy dedicated, professional attention.
              </p>

              {/* Informational callout */}
              <div className="bg-[#f4ede2] border-l-2 border-[#0a1124] p-5 rounded-r-xl space-y-1 text-sm font-normal text-[#0a1124]">
                <p className="font-semibold text-xs uppercase tracking-wider text-[#0a1124]">
                  Direct Connection & Transparency
                </p>
                <p className="text-[#0a1124]/80">
                  Gaberell Elsbeth operates with simple, honest communication. Appointments are coordinated by telephone at <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="underline font-semibold hover:text-[#152238]">032 618 20 38</a>, allowing you to ask questions about your hair, schedule, and visit details in advance.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          3. THE SALON EXPERIENCE & PERSONAL ATTENTION
      ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-[#0a1124] text-[#fbf9f5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
          
          <div className="max-w-3xl space-y-4 pb-12">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#e8b4a2]">
              02 / The Salon Environment
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#fbf9f5] leading-tight">
              Personal Attention Without Rushed Schedules
            </h2>
            <p className="text-base sm:text-lg text-white/75 font-light leading-relaxed">
              Visiting a hairdresser should be a restorative experience rather than a stressful obligation. At Lommiswilerstrasse 33, the focus is squarely placed on the client in the chair.
            </p>
          </div>

          {/* Asymmetrical 2-column editorial breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Editorial photo crop with caption */}
            <div className="rounded-3xl overflow-hidden border border-white/15 bg-white/5 relative">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80"
                  alt="Close-up of precise hairdressing tools and careful preparation"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 bg-[#0e172c] border-t border-white/10 text-xs text-white/70 flex items-center justify-between">
                <span>Careful Hair Craft</span>
                <span className="text-[#e8b4a2]">One-to-One Focus</span>
              </div>
            </div>

            {/* Thoughtful Prose Blocks */}
            <div className="space-y-6 text-sm sm:text-base text-white/80 leading-relaxed font-light">
              <div className="border-l border-[#e8b4a2]/40 pl-5 space-y-2">
                <h3 className="font-serif text-xl sm:text-2xl text-[#fbf9f5] font-normal">
                  Dedicated Appointment Windows
                </h3>
                <p>
                  Time is allotted thoughtfully for each appointment. Because the salon does not overlap multiple clients simultaneously, you are spared the long waiting room delays or fragmented focus typical of busy commercial chains.
                </p>
              </div>

              <div className="border-l border-[#e8b4a2]/40 pl-5 space-y-2">
                <h3 className="font-serif text-xl sm:text-2xl text-[#fbf9f5] font-normal">
                  Unrushed Hair Assessment
                </h3>
                <p>
                  Every haircut begins with a calm conversation. Before shears touch hair, we consider the natural fall of your hair, texture, whirls, growth patterns, face shape, and how easily you can maintain the style at home between salon visits.
                </p>
              </div>

              <div className="border-l border-[#e8b4a2]/40 pl-5 space-y-2">
                <h3 className="font-serif text-xl sm:text-2xl text-[#fbf9f5] font-normal">
                  A Quiet, Neighborhood Setting
                </h3>
                <p>
                  Set in a quiet residential stretch of Bellach on Lommiswilerstrasse, the salon provides an uncluttered environment free from loud salon music, high street traffic, or distractions.
                </p>
              </div>

              <div className="pt-2">
                <button
                  id="salon-exp-consult-btn"
                  onClick={onOpenConsultationModal}
                  className="inline-flex items-center gap-2 bg-[#fae9e2] text-[#0a1124] px-6 py-3 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-white transition-colors cursor-pointer"
                >
                  <span>Arrange a Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          4. CLEAR GENERAL OVERVIEW OF HAIRDRESSING SERVICES
      ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-[#fbf9f5] border-b border-[#0a1124]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#0a1124]/10">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#0a1124]/60">
                03 / Hairdressing Disciplines
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#0a1124]">
                Hair Care & Styling Disciplines
              </h2>
              <p className="text-base text-[#0a1124]/75 font-light">
                Gaberell Elsbeth provides classic, professional hairdressing services for women and men. Rather than rigid packages, each service is tailored individually upon telephone consultation.
              </p>
            </div>

            <div className="shrink-0">
              <button
                id="view-services-page-btn"
                onClick={() => {
                  onNavigate('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold border-b border-[#0a1124] pb-1 hover:text-[#152238] transition-colors"
              >
                <span>Read Full Services Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Asymmetrical Editorial Grid (Avoid generic 3-card layout!) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
            
            {/* Discipline 1: Precision Haircuts */}
            <div className="bg-white border border-[#0a1124]/15 p-8 rounded-3xl space-y-4 hover:border-[#0a1124]/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-serif text-2xl text-[#0a1124] font-medium">01</span>
                <Scissors className="w-5 h-5 text-[#0a1124]" />
              </div>
              <h3 className="font-serif text-2xl text-[#0a1124]">
                Individual Consultation & Precision Haircutting
              </h3>
              <p className="text-sm text-[#0a1124]/75 leading-relaxed">
                Clean, precise cutting tailored to your hair’s natural growth, hair density, and lifestyle. We discuss how your hair sits naturally so the cut retains its shape and balance as it grows out between appointments.
              </p>
              <ul className="text-xs text-[#0a1124]/70 space-y-1.5 pt-2 border-t border-[#0a1124]/10">
                <li>• Detailed face-shape and hair texture assessment</li>
                <li>• Custom scissors and thinning techniques suited to density</li>
                <li>• Easy-to-manage cuts suitable for daily routines</li>
              </ul>
            </div>

            {/* Discipline 2: Styling & Finishing */}
            <div className="bg-white border border-[#0a1124]/15 p-8 rounded-3xl space-y-4 hover:border-[#0a1124]/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-serif text-2xl text-[#0a1124] font-medium">02</span>
                <Sparkles className="w-5 h-5 text-[#0a1124]" />
              </div>
              <h3 className="font-serif text-2xl text-[#0a1124]">
                Hair Styling, Shaping & Blow-Drying
              </h3>
              <p className="text-sm text-[#0a1124]/75 leading-relaxed">
                Finishing techniques that enhance the natural vitality, movement, and volume of your hair. Whether for regular weekly care, a refreshed seasonal look, or a special occasion, styling is adapted to your personal taste.
              </p>
              <ul className="text-xs text-[#0a1124]/70 space-y-1.5 pt-2 border-t border-[#0a1124]/10">
                <li>• Gentle blow-drying that respects hair cuticle health</li>
                <li>• Structure and volume finishing suited to fine or thick hair</li>
                <li>• Practical recommendations for home maintenance</li>
              </ul>
            </div>

            {/* Discipline 3: Hair Health & Conditioning */}
            <div className="bg-white border border-[#0a1124]/15 p-8 rounded-3xl space-y-4 hover:border-[#0a1124]/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-serif text-2xl text-[#0a1124] font-medium">03</span>
                <CheckCircle className="w-5 h-5 text-[#0a1124]" />
              </div>
              <h3 className="font-serif text-2xl text-[#0a1124]">
                Hair Care, Washing & Conditioning
              </h3>
              <p className="text-sm text-[#0a1124]/75 leading-relaxed">
                Healthy hair begins at the scalp. Every wash and care sequence uses careful washing and conditioning techniques designed to hydrate dry strands, soothe scalp tension, and restore natural luster.
              </p>
              <ul className="text-xs text-[#0a1124]/70 space-y-1.5 pt-2 border-t border-[#0a1124]/10">
                <li>• Attentive cleansing and gentle scalp washing</li>
                <li>• Conditioning care to promote manageability and softness</li>
                <li>• Unhurried, relaxing sink experience</li>
              </ul>
            </div>

            {/* Discipline 4: Maintenance & Consultation */}
            <div className="bg-[#fae9e2] border border-[#e8b4a2] p-8 rounded-3xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-serif text-2xl text-[#0a1124] font-medium">04</span>
                <Phone className="w-5 h-5 text-[#0a1124]" />
              </div>
              <h3 className="font-serif text-2xl text-[#0a1124]">
                Personal Appointments by Telephone
              </h3>
              <p className="text-sm text-[#0a1124]/80 leading-relaxed">
                Because every client has different hair length, density, and requirements, Gaberell Elsbeth does not use automated online booking or standardized pricing tiers. Details are coordinated personally by phone.
              </p>
              <div className="pt-2">
                <a
                  id="services-grid-phone"
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#0a1124] bg-white px-4 py-2 rounded-full border border-[#0a1124]/15 hover:bg-[#0a1124] hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call 032 618 20 38</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------
          5. WHY VISITORS CHOOSE A LOCAL INDEPENDENT HAIRDRESSER
      ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-[#f4ede2] border-b border-[#0a1124]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#0a1124]/60">
                04 / The Independent Choice
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0a1124] leading-tight">
                Why Choose a Local Independent Hairdresser?
              </h2>
              <p className="text-sm sm:text-base text-[#0a1124]/80 font-light leading-relaxed">
                While commercial salon chains rely on rapid client rotation and rotating staff, independent neighborhood salons offer distinct qualities valued by many clients.
              </p>
              
              <div className="pt-4">
                <div className="p-6 bg-white/70 border border-[#0a1124]/10 rounded-2xl space-y-2">
                  <p className="font-serif text-lg text-[#0a1124]">
                    “Continuity builds familiarity. When the same professional cares for your hair visit after visit, there is no need to re-explain your preferences every time.”
                  </p>
                  <p className="text-xs uppercase tracking-wider text-[#0a1124]/60">
                    The Value of Independent Craft
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#0a1124]/10 space-y-2">
                <h3 className="font-serif text-xl text-[#0a1124] font-medium flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-[#0a1124]" />
                  <span>Consistent Stylist Continuity</span>
                </h3>
                <p className="text-sm text-[#0a1124]/75 leading-relaxed">
                  In an independent practice, you see the exact same hairdresser on every visit. This ensures your stylist accumulates a nuanced memory of how your hair reacts to humidity, how quickly it grows, and what shapes complement your personality best.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#0a1124]/10 space-y-2">
                <h3 className="font-serif text-xl text-[#0a1124] font-medium flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#0a1124]" />
                  <span>Calm, Unhurried Atmosphere</span>
                </h3>
                <p className="text-sm text-[#0a1124]/75 leading-relaxed">
                  Independent salons are not pressured by corporate quotas to cycle clients in 20-minute intervals. Time is treated with care, allowing for genuine craftsmanship, thorough washing, and a relaxed environment.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#0a1124]/10 space-y-2">
                <h3 className="font-serif text-xl text-[#0a1124] font-medium flex items-center gap-2">
                  <Building className="w-5 h-5 text-[#0a1124]" />
                  <span>Neighborhood Accessibility in Bellach</span>
                </h3>
                <p className="text-sm text-[#0a1124]/75 leading-relaxed">
                  Located on Lommiswilerstrasse in Bellach, you avoid the hassle of city center traffic, paid parking meters, or navigating crowded shopping malls. It is an accessible, community-grounded destination.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#0a1124]/10 space-y-2">
                <h3 className="font-serif text-xl text-[#0a1124] font-medium flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#0a1124]" />
                  <span>Direct Accountability & Personal Care</span>
                </h3>
                <p className="text-sm text-[#0a1124]/75 leading-relaxed">
                  Independent professionals take immense personal pride in their work. When you call Gaberell Elsbeth, you speak directly with the salon owner who is personally accountable for your satisfaction and comfort.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------
          6. SIMPLE CONSULTATION / CONTACT PROCESS
      ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-[#fbf9f5] border-b border-[#0a1124]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 pb-14">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#0a1124]/60">
              05 / How to Visit
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#0a1124]">
              Simple Three-Step Consultation
            </h2>
            <p className="text-base text-[#0a1124]/75 font-light">
              Arranging an appointment with Gaberell Elsbeth is direct and straightforward.
            </p>
          </div>

          {/* 3 Step Sequence */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Step 1 */}
            <div className="bg-white border border-[#0a1124]/15 p-8 rounded-3xl space-y-4 relative">
              <span className="inline-block font-serif text-3xl text-[#e8b4a2] font-semibold">
                Step 01
              </span>
              <h3 className="font-serif text-xl text-[#0a1124] font-medium">
                Call 032 618 20 38
              </h3>
              <p className="text-sm text-[#0a1124]/75 leading-relaxed">
                Give Gaberell Elsbeth a phone call during normal daytime hours. Share what you have in mind—whether it is a routine haircut, freshening up your style, or seeking general hair advice.
              </p>
              <div className="pt-2">
                <a
                  id="process-step1-call"
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-xs font-semibold uppercase tracking-wider text-[#0a1124] hover:underline flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0a1124]" />
                  <span>Call Directly</span>
                </a>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-[#0a1124]/15 p-8 rounded-3xl space-y-4 relative">
              <span className="inline-block font-serif text-3xl text-[#e8b4a2] font-semibold">
                Step 02
              </span>
              <h3 className="font-serif text-xl text-[#0a1124] font-medium">
                Confirm Date & Time
              </h3>
              <p className="text-sm text-[#0a1124]/75 leading-relaxed">
                We will discuss mutual availability to find a time that works comfortably for your schedule. We can also clarify any questions you have regarding your hair type or visit duration.
              </p>
              <div className="pt-2 text-xs text-[#0a1124]/60">
                ✓ Dedicated one-on-one booking reserved for you
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-[#0a1124]/15 p-8 rounded-3xl space-y-4 relative">
              <span className="inline-block font-serif text-3xl text-[#e8b4a2] font-semibold">
                Step 03
              </span>
              <h3 className="font-serif text-xl text-[#0a1124] font-medium">
                Visit Lommiswilerstrasse 33
              </h3>
              <p className="text-sm text-[#0a1124]/75 leading-relaxed">
                Arrive at the salon in Bellach for your personal session. Enjoy a relaxed consultation, unhurried washing and cutting, and personalized attention from start to finish.
              </p>
              <div className="pt-2 text-xs text-[#0a1124]/60">
                ✓ Convenient Bellach location
              </div>
            </div>

          </div>

          <div className="mt-12 text-center">
            <a
              id="process-call-now-cta"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-[#0a1124] text-[#fbf9f5] px-8 py-4 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-[#152238] transition-all shadow-md"
            >
              <Phone className="w-4 h-4 text-[#e8b4a2]" />
              <span>Call Gaberell Elsbeth at 032 618 20 38</span>
            </a>
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------
          7. LOCATION AND VISIT INFORMATION
      ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-[#0a1124] text-[#fbf9f5] border-b border-[#0a1124]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#e8b4a2]">
                  06 / Location & Arrival
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl text-[#fbf9f5] leading-tight">
                  Visiting Bellach, Switzerland
                </h2>
                <p className="text-base text-white/75 font-light leading-relaxed">
                  Gaberell Elsbeth is conveniently situated on Lommiswilerstrasse in Bellach (Postal Code 4512), in the canton of Solothurn.
                </p>
              </div>

              {/* Exact Address Box */}
              <div className="bg-white/5 border border-white/15 p-6 rounded-2xl space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#fae9e2] text-[#0a1124] flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-[#0a1124]" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-serif text-xl text-[#fbf9f5]">{BUSINESS_INFO.name}</p>
                    <p className="text-sm text-white/80">{BUSINESS_INFO.street}</p>
                    <p className="text-sm text-white/80">{BUSINESS_INFO.postalCode} {BUSINESS_INFO.locality}, {BUSINESS_INFO.country}</p>
                    <p className="text-xs text-[#e8b4a2] pt-1">Category: {BUSINESS_INFO.category}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-white/70">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#e8b4a2]" />
                    <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-medium text-white hover:text-[#e8b4a2]">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                  <a
                    id="maps-direction-link"
                    href="https://maps.google.com/?q=Lommiswilerstrasse+33,+4512+Bellach,+Switzerland"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#e8b4a2] hover:underline"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="space-y-3 text-sm text-white/75 font-light">
                <h3 className="font-serif text-lg text-[#fbf9f5] font-normal">
                  Regional & Neighborhood Context
                </h3>
                <p>
                  Bellach is located immediately west of the baroque town of Solothurn, nestled along the base of the Weissenstein mountain range. Lommiswilerstrasse connects Bellach towards Lommiswil, providing easy local access for residents of Bellach, Solothurn, Selzach, Langendorf, and Oberdorf.
                </p>
                <p>
                  Because appointments are arranged individually, you can count on a quiet, peaceful visit without the bustle of larger urban shopping areas.
                </p>
              </div>
            </div>

            {/* Visual Location Frame */}
            <div className="lg:col-span-6 space-y-4">
              <div className="rounded-3xl overflow-hidden border border-white/15 bg-white/5 relative shadow-xl">
                <div className="aspect-[4/3] bg-[#0e172c] relative overflow-hidden flex items-center justify-center p-6">
                  {/* Stylized Swiss Map Indicator */}
                  <div className="text-center space-y-3 p-8 border border-white/10 rounded-2xl bg-[#0a1124]/80 backdrop-blur-sm max-w-sm">
                    <div className="w-12 h-12 rounded-full bg-[#e8b4a2] text-[#0a1124] flex items-center justify-center mx-auto">
                      <Compass className="w-6 h-6 text-[#0a1124]" />
                    </div>
                    <p className="font-serif text-2xl text-[#fbf9f5]">4512 Bellach</p>
                    <p className="text-xs uppercase tracking-widest text-[#e8b4a2]">
                      Lommiswilerstrasse 33
                    </p>
                    <p className="text-xs text-white/70 leading-relaxed">
                      Canton of Solothurn, Switzerland. Please call 032 618 20 38 prior to arriving to ensure Gaberell Elsbeth is available.
                    </p>
                    <div className="pt-2">
                      <a
                        id="hero-directions-cta"
                        href="https://maps.google.com/?q=Lommiswilerstrasse+33,+4512+Bellach,+Switzerland"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#0a1124] bg-[#fae9e2] px-4 py-2 rounded-full hover:bg-white transition-colors"
                      >
                        <span>View Driving & Transit Directions</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-white/50 text-center">
                Appointments are held at Lommiswilerstrasse 33, 4512 Bellach, Switzerland.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          8. DETAILED FINAL CONTACT SECTION & INQUIRY FORM
      ------------------------------------------------------------- */}
      <section id="contact-section" className="py-16 sm:py-24 bg-[#fbf9f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Direct Call & Visit Summary */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#0a1124]/60">
                  07 / Get in Touch
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl text-[#0a1124] leading-tight">
                  Arrange Your Hairdressing Consultation
                </h2>
                <p className="text-base text-[#0a1124]/75 font-light leading-relaxed">
                  We look forward to welcoming you to the salon. You can speak directly with Gaberell Elsbeth by phone or send a message using the form to prepare for your visit.
                </p>
              </div>

              {/* Direct Telephone Highlight Card */}
              <div className="bg-[#0a1124] text-[#fbf9f5] p-6 sm:p-8 rounded-3xl space-y-4 shadow-lg">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest text-[#e8b4a2] font-semibold">
                    Immediate Assistance
                  </span>
                  <h3 className="font-serif text-2xl text-[#fbf9f5]">
                    Call the Salon Directly
                  </h3>
                  <p className="text-xs text-white/70">
                    Direct communication ensures your questions are answered and your visit is scheduled promptly.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    id="final-section-phone-btn"
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="w-full flex items-center justify-center gap-3 bg-[#e8b4a2] text-[#0a1124] hover:bg-[#fae9e2] py-3.5 px-6 rounded-full text-sm font-semibold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <Phone className="w-4 h-4 text-[#0a1124]" />
                    <span>032 618 20 38</span>
                  </a>
                </div>

                <div className="pt-3 border-t border-white/10 text-xs text-white/60 space-y-1">
                  <p className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#e8b4a2]" />
                    <span>Daytime telephone inquiries recommended</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#e8b4a2]" />
                    <span>Lommiswilerstrasse 33, 4512 Bellach</span>
                  </p>
                </div>
              </div>

              {/* Integrity & Reviews Note */}
              <div className="p-5 rounded-2xl bg-[#f4ede2] border border-[#e6d7c3] space-y-2 text-xs text-[#0a1124]/80">
                <div className="flex items-center gap-2 font-semibold text-[#0a1124]">
                  <ShieldCheck className="w-4 h-4 text-[#0a1124]" />
                  <span>Public Listing Notice</span>
                </div>
                <p>
                  Reviews: <strong className="font-medium text-[#0a1124]">0 listed</strong>. As a local neighborhood hairdressing practice, Gaberell Elsbeth does not maintain paid testimonial campaigns. We encourage you to call and discuss your hair styling needs directly.
                </p>
              </div>
            </div>

            {/* Right Column: Contact Inquiry Form */}
            <div className="lg:col-span-7">
              <ContactForm compact={false} />
            </div>

          </div>

        </div>
      </section>
    </main>
  );
};
