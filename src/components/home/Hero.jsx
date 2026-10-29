import React from 'react';
import { ArrowUpRight, Award, Compass, ShieldCheck, ChevronDown, Phone, MapPin } from 'lucide-react';
import Button from '../ui/Button';

export default function Hero() {
  const scrollToExplore = () => {
    const el = document.getElementById('featured-projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative min-h-[90vh] md:min-h-[94vh] flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden px-4 py-16 md:py-24"
      style={{
        backgroundImage: "url('/hero-mobile.jpg')"
      }}
    >
      {/* Subtle ambient darkening vignette around the screen perimeter only, leaving center image visible */}
      <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/60 pointer-events-none" />

      {/* Centered Glassy Container around the text - protects text legibility without entirely covering the background image */}
      <div className="relative z-10 w-full max-w-xl md:max-w-3xl mx-auto my-auto text-center">
        <div className="bg-black/50  rounded-3xl sm:rounded-[32px] p-6 sm:p-10 md:p-12 border border-white/25 shadow-2xl text-white space-y-4 sm:space-y-6">

          {/* Top Brand Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/30 backdrop-blur-xs text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#F2C94C] mx-auto">
            <span className="w-2 h-2 rounded-full bg-[#F2C94C] animate-pulse" />
            <span>ARCHITECTS & BUILDERS · VIJAYAWADA</span>
          </div>

          {/* Prominent Brand Name */}
          <div className="space-y-1">
            <h1 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl tracking-tight text-white leading-none [text-shadow:_0_2px_10px_rgb(0_0_0_/_80%)]">
              MG PLANNERS
            </h1>
            <p className="font-heading font-bold text-lg sm:text-2xl md:text-3xl text-[#F2C94C] leading-snug [text-shadow:_0_2px_8px_rgb(0_0_0_/_80%)]">
              Spaces built around your vision.
            </p>
          </div>

          {/* Supporting Copy */}
          <p className="text-xs sm:text-base md:text-lg text-white/90 leading-relaxed max-w-xl mx-auto font-normal [text-shadow:_0_1px_4px_rgb(0_0_0_/_80%)]">
            Thoughtful planning. Purposeful design. Construction shaped around your project. Delivering residential developments, commercial hubs, and verified statutory NOC consultancy.
          </p>

          {/* Centered CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-1 sm:pt-2">
            <Button
              to="/projects"
              variant="primary"
              size="md"
              showArrow={true}
              className="w-full sm:w-auto text-xs sm:text-sm font-bold py-3 px-6 shadow-lg bg-[#174B91] hover:bg-[#103a73] border border-white/30"
            >
              Explore Our Projects
            </Button>

            <Button
              to="/contact"
              variant="white"
              size="md"
              className="w-full sm:w-auto text-xs sm:text-sm font-bold py-3 px-6 shadow-lg bg-white text-[#202B39] hover:bg-[#F7F5EF]"
            >
              Discuss Your Project
            </Button>

            <a
              href="tel:9440368363"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-white/15 hover:bg-white/25 backdrop-blur-xs text-white border border-white/30 text-xs font-bold transition-colors"
              title="Call directly"
            >
              <Phone className="w-4 h-4 text-[#F2C94C]" />
              <span>9440368363</span>
            </a>
          </div>

          {/* Trust Highlights inside Glass Card */}
          <div className="pt-4 sm:pt-6 border-t border-white/20 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 text-center">
            <div className="p-2 rounded-xl bg-white/5 border border-white/10">
              <span className="block font-heading font-black text-sm sm:text-lg text-[#F2C94C]">
                HPCL Recognized
              </span>
              <span className="text-[10px] sm:text-xs text-white/80 block mt-0.5">
                2023–24 NOC Drawing Award
              </span>
            </div>

            <div className="p-2 rounded-xl bg-white/5 border border-white/10">
              <span className="block font-heading font-black text-sm sm:text-lg text-white">
                100% Verified
              </span>
              <span className="text-[10px] sm:text-xs text-white/80 block mt-0.5">
                Real Projects & Plaques
              </span>
            </div>

            <div className="col-span-2 sm:col-span-1 p-2 rounded-xl bg-white/5 border border-white/10">
              <span className="block font-heading font-black text-sm sm:text-lg text-[#F2C94C]">
                Vijayawada
              </span>
              <span className="text-[10px] sm:text-xs text-white/80 block mt-0.5">
                Siddhartha Nagar HQ
              </span>
            </div>
          </div>

        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-6 sm:mt-8 flex justify-center">
          <button
            onClick={scrollToExplore}
            className="group inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/25 text-[11px] sm:text-xs font-bold text-white transition-all cursor-pointer shadow-lg"
            aria-label="Scroll to explore projects"
          >
            <span>DISCOVER MG PLANNERS</span>
            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform text-[#F2C94C]" />
          </button>
        </div>
      </div>

    </section>
  );
}
