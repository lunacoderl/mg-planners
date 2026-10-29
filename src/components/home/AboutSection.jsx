import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import { CheckCircle2, Shield, Award, Users, HardHat } from 'lucide-react';

export default function AboutSection() {
  const credentials = [
    "Comprehensive architectural layout & 3D planning documentation",
    "On-site structural execution through MG Constructions",
    "Proven statutory NOC drawing consultancy recognized by HPCL",
    "Active residential & commercial developments in Vijayawada"
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#F7F5EF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Asymmetrical Image Composition with Real On-Site Photos (6 cols) */}
          <div className="lg:col-span-6 relative">
            <Reveal duration={0.6}>
              {/* Primary On-Site Working Photo */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-[#202B39]/5">
                <img
                  src="/working/1230a709-d5bf-4065-83ad-6b9c7312d12f.jpg"
                  alt="MG Planners engineers and on-site construction execution"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                
                {/* Image Label */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#202B39]/80 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider">
                  Real Construction Site
                </div>
              </div>
            </Reveal>

            {/* Secondary Overlapping Accent Image (Real Finished Project) */}
            <Reveal delay={0.2} duration={0.6} className="absolute -bottom-8 -right-4 sm:-right-8 w-1/2 max-w-[280px]">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-square bg-[#202B39]/10">
                <img
                  src="/working/65fe40b1-1f82-4fec-b677-3784914711da.jpg"
                  alt="MG Planners structural reinforcement coordination"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F2C94C] block">
                    Execution Rigor
                  </span>
                  <span className="text-xs font-bold leading-tight block">
                    Structural Supervision
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Decorative Architectural Corner Border */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-[#174B91]/30 rounded-tl-2xl pointer-events-none" />
          </div>

          {/* Right Column: Editorial Copy & Core Credibility (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal delay={0.1}>
              <SectionHeading
                eyebrow="WHO WE ARE"
                eyebrowColor="cobalt"
                title="Planning with purpose. Building with care."
                description="MG Planners is a Vijayawada-based architectural planning and construction studio dedicated to turning ambitious visions into enduring physical realities."
              />
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-4 text-[#4B5868] text-base md:text-lg leading-relaxed">
                <p>
                  We operate with an integrated philosophy: design must never be detached from the practical realities of construction. Through <strong className="text-[#202B39]">MG Planners</strong>, we deliver concept designs, functional layout schematics, municipal documentation, and specialized statutory drawings.
                </p>
                <p>
                  Our execution arm, <strong className="text-[#202B39]">MG Constructions</strong>, ensures that every foundation poured, wall erected, and finish applied adheres to exact structural specifications. Supported by our professional association with <strong className="text-[#202B39]">Swamy Associates</strong>, our consortium bridges technical precision with hands-on building discipline.
                </p>
              </div>
            </Reveal>

            {/* Key Differentiators / Checklist */}
            <Reveal delay={0.3}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {credentials.map((cred, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-[#202B39] font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#174B91] shrink-0 mt-0.5" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Action */}
            <Reveal delay={0.4}>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button
                  to="/about"
                  variant="primary"
                  size="md"
                  showArrow={true}
                  className="font-semibold"
                >
                  Discover Our Story
                </Button>
                <Button
                  to="/services"
                  variant="outline"
                  size="md"
                >
                  Explore Capabilities
                </Button>
              </div>
            </Reveal>

          </div>

        </div>
      </div>
    </section>
  );
}

