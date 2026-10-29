import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { MessageSquare, Compass, HardHat, CheckCircle } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Consultation & Discovery",
      desc: "We discuss your functional objectives, spatial needs, municipal constraints, and site parameters to define an accurate project brief.",
      icon: MessageSquare,
      accent: "#174B91"
    },
    {
      number: "02",
      title: "Planning & Design Development",
      desc: "Our architects draft concepts, structural layouts, Vastu orientations, and detailed CAD drawing packages ready for approval.",
      icon: Compass,
      accent: "#E66B43"
    },
    {
      number: "03",
      title: "Construction & Execution",
      desc: "MG Constructions mobilizes on-site, overseeing material testing, RCC framework, structural integrity, and transparent milestones.",
      icon: HardHat,
      accent: "#F2C94C"
    },
    {
      number: "04",
      title: "Finishing & Handover",
      desc: "Thorough quality snag inspection, MEP verification, client sign-off, and delivery of a durable, built-for-life space.",
      icon: CheckCircle,
      accent: "#174B91"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] border-y border-[#E5E1D6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <Reveal className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <SectionHeading
            align="center"
            eyebrow="HOW WE WORK"
            eyebrowColor="cobalt"
            title="A clear, dependable process from first blueprint to final key."
            description="Our structured engagement model ensures complete visibility, accountability, and technical rigor at every stage."
          />
        </Reveal>

        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop Horizontal Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-[#E5E1D6] -translate-y-6 z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const IconComp = step.icon;
              return (
                <Reveal key={step.number} delay={index * 0.15} duration={0.5}>
                  <div className="relative flex flex-col bg-[#F7F5EF] rounded-2xl p-7 border border-[#E5E1D6] hover:border-[#174B91]/40 transition-all duration-300 h-full group">
                    {/* Top Step Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-heading font-extrabold text-3xl text-[#174B91]">
                        {step.number}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E1D6] flex items-center justify-center text-[#202B39] shadow-2xs group-hover:bg-[#174B91] group-hover:text-white transition-all duration-300">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-lg md:text-xl font-heading font-bold text-[#202B39] mb-3 group-hover:text-[#174B91] transition-colors">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-sm text-[#4B5868] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

