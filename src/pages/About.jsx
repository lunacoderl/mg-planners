import React, { useEffect } from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import ContactCTA from '../components/home/ContactCTA';
import { Award, Compass, ShieldCheck, CheckCircle2, Building, HardHat, FileText, Users } from 'lucide-react';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pillars = [
    {
      icon: Compass,
      title: "Context-Aware Architecture",
      desc: "Every design is rooted in solar angles, cross-ventilation, Vastu alignment, and local soil conditions characteristic of the Krishna river basin and Vijayawada geography."
    },
    {
      icon: HardHat,
      title: "Uncompromising Construction",
      desc: "Through MG Constructions, we execute projects with verified grade concrete, continuous slump tests, corrosion-resistant steel, and strict on-site supervision."
    },
    {
      icon: FileText,
      title: "Statutory & NOC Precision",
      desc: "Recognized by industry leaders like HPCL for NOC drawing consultancy, ensuring our technical packs clear municipal and corporate audits without delays."
    },
    {
      icon: Users,
      title: "Collaborative Synergy",
      desc: "Working in concert with Swamy Associates, we unite structural engineering, spatial planning, and field execution under a single accountable standard."
    }
  ];

  return (
    <main className="w-full">
      {/* About Hero */}
      <section className="py-16 md:py-24 bg-[#F7F5EF] border-b border-[#E5E1D6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E1D6] text-xs font-semibold uppercase tracking-wider text-[#174B91]">
              <span>ABOUT MG PLANNERS</span>
            </div>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#202B39] tracking-tight leading-[1.1]">
              Architectural vision grounded in <span className="text-[#174B91]">proven execution.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#4B5868] leading-relaxed">
              We are architects, planners, and builders based in Vijayawada, Andhra Pradesh. We believe that true architectural excellence is measured not only by how a building looks on paper, but by how reliably it is built and how comfortably it is lived in.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section: Story & Ecosystem */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Organization Synergy (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="OUR FOUNDATION"
                eyebrowColor="terracotta"
                title="A unified ecosystem for planning and construction."
                description="To eliminate the frequent friction between architects and contractors, MG Planners operates an integrated delivery model."
              />

              <div className="space-y-4 text-[#4B5868] text-base leading-relaxed">
                <p>
                  Established in Siddhartha Nagar, Vijayawada, <strong className="text-[#202B39]">MG Planners</strong> was formed with a clear mission: to provide client-centered architectural layouts, rigorous CAD documentation, and statutory technical consultancy.
                </p>
                <p>
                  Recognizing that ambitious designs require hands-on construction discipline, we paired our architectural studio with <strong className="text-[#202B39]">MG Constructions</strong>. This arm directly manages site grading, RCC structural frames, masonry, waterproofing, and finishing trades.
                </p>
                <p>
                  Our strategic partnership with <strong className="text-[#202B39]">Swamy Associates</strong> further deepens our engineering capabilities, providing specialized technical review for complex industrial, commercial, and multi-family residential ventures.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F7F5EF] border border-[#E5E1D6] flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#174B91] text-white flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#202B39]">
                    HPCL Corporate Recognition (2023–24)
                  </h4>
                  <p className="text-xs text-[#4B5868]">
                    Commended for specialized technical NOC drawing consultancy adhering to rigorous statutory petroleum directives.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Imagery from Working Sites (6 cols) */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-md border-2 border-white bg-[#202B39]/5">
                  <img
                    src="/working/100005e2-b30b-4490-af71-3ddcd45be8b4.jpg"
                    alt="MG Planners architectural site alignment"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square shadow-md border-2 border-white bg-[#202B39]/5">
                  <img
                    src="/working/2987d6d3-80e4-425b-9941-949955049bdd.jpg"
                    alt="MG Planners technical structural verification"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden aspect-square shadow-md border-2 border-white bg-[#202B39]/5">
                  <img
                    src="/working/906bb7b0-539d-4a3c-b787-3da8749b7e14.jpg"
                    alt="MG Planners brickwork and structural masonry"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-md border-2 border-white bg-[#202B39]/5">
                  <img
                    src="/working/b0e0d721-c0a7-4055-842a-15e8506ab281.jpg"
                    alt="MG Planners multi-tier building framing"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4 Core Pillars */}
      <section className="py-20 md:py-28 bg-[#F7F5EF] border-t border-[#E5E1D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="OUR PRINCIPLES"
            eyebrowColor="cobalt"
            title="What defines our architectural practice."
            description="Every project undertaken by MG Planners adheres to four non-negotiable standards of practice."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-7 border border-[#E5E1D6] shadow-2xs hover:border-[#174B91]/40 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#174B91]/10 text-[#174B91] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#202B39] mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#4B5868] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}

