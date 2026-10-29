import React from 'react';
import { ArrowUpRight, Award, Compass, ShieldCheck, ChevronDown, Phone } from 'lucide-react';
import Button from '../ui/Button';

export default function Hero() {
  const scrollToExplore = () => {
    const el = document.getElementById('featured-projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden">
      
      {/* =========================================================================
          MOBILE VIEW (< md):
          Full-bleed interior background image ('/projects/8de76b21-4a64-40f6-824e-ef358af653a1.jpg'),
          NO colored overlays, text directly on top with subtle drop shadows and compact sizes.
          Immediately renders the stunning architectural interior on the first screen!
         ========================================================================= */}
      <div className="md:hidden relative min-h-[88vh] flex flex-col justify-between p-5 bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage: "url('/projects/8de76b21-4a64-40f6-824e-ef358af653a1.jpg')"
        }}
      >
        {/* Top bar on mobile hero */}
        <div className="pt-2 flex items-center justify-between">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/35 backdrop-blur-xs border border-white/30 [text-shadow:_0_1px_3px_rgb(0_0_0_/_80%)]">
            <span className="w-2 h-2 rounded-full bg-[#F2C94C] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white">
              ARCHITECTS & BUILDERS
            </span>
          </div>

          <span className="text-[10px] font-semibold text-white/90 bg-black/35 px-2.5 py-1 rounded-full border border-white/20 [text-shadow:_0_1px_3px_rgb(0_0_0_/_80%)]">
            Vijayawada · AP
          </span>
        </div>

        {/* Middle/Bottom content on mobile hero: Crisp, small text directly on top with no overlaying colors */}
        <div className="space-y-3.5 pb-4">
          
          {/* Prominent Brand Name */}
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#F2C94C] block [text-shadow:_0_2px_4px_rgb(0_0_0_/_90%)]">
              ARCHITECTURE & PLANNING
            </span>
            <h1 className="font-heading font-black text-3xl tracking-tight text-white leading-none [text-shadow:_0_2px_8px_rgb(0_0_0_/_90%)]">
              MG PLANNERS
            </h1>
          </div>

          {/* Subheading in compact, elegant size */}
          <h2 className="font-heading font-bold text-lg text-white leading-snug [text-shadow:_0_2px_6px_rgb(0_0_0_/_90%)]">
            Spaces built around your vision.
          </h2>

          <p className="text-xs text-white/95 leading-relaxed max-w-xs font-normal [text-shadow:_0_1px_4px_rgb(0_0_0_/_90%)]">
            Residential developments, commercial construction, and HPCL-recognized technical consultancy.
          </p>

          {/* Compact Mobile CTAs */}
          <div className="flex items-center gap-2.5 pt-1">
            <Button
              to="/projects"
              variant="primary"
              size="sm"
              showArrow={true}
              className="text-xs font-bold py-2.5 px-4 shadow-md bg-[#174B91] border border-white/20"
            >
              Explore Projects
            </Button>

            <Button
              to="/contact"
              variant="white"
              size="sm"
              className="text-xs font-bold py-2.5 px-3.5 shadow-md bg-white text-[#202B39]"
            >
              Discuss Project
            </Button>

            <a
              href="tel:9440368363"
              className="p-2.5 rounded-lg bg-black/40 backdrop-blur-xs text-white border border-white/30 hover:bg-[#174B91] transition-colors"
              aria-label="Direct call"
            >
              <Phone className="w-4 h-4 text-[#F2C94C]" />
            </a>
          </div>

          {/* Micro trust badge on mobile */}
          <div className="pt-2 flex items-center gap-2 text-[10px] text-white/90 font-medium [text-shadow:_0_1px_3px_rgb(0_0_0_/_90%)]">
            <Award className="w-3.5 h-3.5 text-[#F2C94C] shrink-0" />
            <span>HPCL 2023–24 NOC Drawing Recognition</span>
          </div>

        </div>
      </div>

      {/* =========================================================================
          DESKTOP & TABLET VIEW (>= md):
          Grand editorial layout, prominent MG PLANNERS brand headline,
          warm ivory canvas with architectural visual cards.
         ========================================================================= */}
      <div className="hidden md:flex relative min-h-[92vh] items-center bg-[#F7F5EF] pt-6 pb-16 md:py-20">
        {/* Subtle architectural dot grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#174B91_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Typography & CTAs (7 cols) */}
            <div className="col-span-7 space-y-6 lg:space-y-7 text-left">
              
              {/* Brand Header Eyebrow */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E1D6] shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#E66B43] animate-pulse" />
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#174B91]">
                  MG PLANNERS · ARCHITECTS & BUILDERS
                </span>
              </div>

              {/* Prominent Brand Headline */}
              <div>
                <span className="block font-heading font-black text-4xl lg:text-5xl text-[#202B39] tracking-tight">
                  MG PLANNERS
                </span>
                <h1 className="font-heading font-extrabold text-[#174B91] tracking-tight leading-[1.08] text-[clamp(2.2rem,4.5vw,3.8rem)] mt-1">
                  Spaces built around your vision.
                </h1>
              </div>

              {/* Supporting Copy */}
              <p className="text-base lg:text-lg text-[#4B5868] leading-relaxed max-w-2xl font-normal">
                Thoughtful planning. Purposeful design. Construction shaped around your project. Delivering residential developments, commercial hubs, and verified technical consultancy across Vijayawada and Andhra Pradesh.
              </p>

              {/* CTAs */}
              <div className="flex items-center gap-4 pt-2">
                <Button
                  to="/projects"
                  variant="primary"
                  size="lg"
                  showArrow={true}
                  className="text-base font-semibold shadow-md hover:shadow-lg"
                >
                  Explore Our Projects
                </Button>

                <Button
                  to="/contact"
                  variant="outline"
                  size="lg"
                  className="text-base font-semibold"
                >
                  Discuss Your Project
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-[#E5E1D6] grid grid-cols-3 gap-6">
                <div>
                  <span className="block font-heading font-extrabold text-2xl lg:text-3xl text-[#174B91]">
                    HPCL
                  </span>
                  <span className="text-xs text-[#4B5868] font-medium leading-tight block mt-0.5">
                    2023–24 NOC Drawing Recognition
                  </span>
                </div>

                <div>
                  <span className="block font-heading font-extrabold text-2xl lg:text-3xl text-[#E66B43]">
                    100%
                  </span>
                  <span className="text-xs text-[#4B5868] font-medium leading-tight block mt-0.5">
                    Real Completed Work & Awards
                  </span>
                </div>

                <div>
                  <span className="block font-heading font-extrabold text-2xl lg:text-3xl text-[#202B39]">
                    Vijayawada
                  </span>
                  <span className="text-xs text-[#4B5868] font-medium leading-tight block mt-0.5">
                    Siddhartha Nagar HQ
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Visual Split (5 cols) */}
            <div className="col-span-5 relative">
              {/* Primary Visual Card: Exterior Elevation */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-[#202B39]/10">
                <img
                  src="/projects/21e06af6-4b0d-4408-8e50-ee8c88ae2b14.jpg"
                  alt="MG Planners completed project"
                  fetchPriority="high"
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#202B39]/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating caption */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/50 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#E66B43] block">
                        Completed Residential
                      </span>
                      <h3 className="font-heading font-bold text-sm lg:text-base text-[#202B39]">
                        Dr. Charan Residency · Gunadala
                      </h3>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#174B91] text-white flex items-center justify-center shrink-0">
                      <Compass className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Overlapping Interior Preview Card */}
              <div className="absolute -bottom-6 -left-8 max-w-[220px] p-2.5 rounded-2xl bg-white shadow-xl border border-[#E5E1D6]">
                <div className="rounded-xl overflow-hidden aspect-[4/3] mb-2">
                  <img
                    src="/projects/8de76b21-4a64-40f6-824e-ef358af653a1.jpg"
                    alt="MG Planners completed luxury interior"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[10px] font-bold uppercase text-[#174B91] block">
                  Completed Living Interior
                </span>
                <span className="text-xs font-semibold text-[#202B39] block">
                  Bespoke Spatial Design
                </span>
              </div>

              {/* Decorative shapes */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[#F2C94C]/30 blur-xl pointer-events-none -z-10" />
            </div>

          </div>

          {/* Desktop Scroll Down Indicator */}
          <div className="mt-12 text-center flex justify-center">
            <button
              onClick={scrollToExplore}
              className="group inline-flex items-center gap-2 text-xs font-semibold text-[#4B5868] hover:text-[#174B91] transition-colors cursor-pointer select-none"
              aria-label="Scroll to explore projects"
            >
              <span>DISCOVER MG PLANNERS PORTFOLIO</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}
