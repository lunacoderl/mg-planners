import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import LightboxModal from '../layout/LightboxModal';
import { awardsData } from '../../data/awards';
import { testimonialsData } from '../../data/testimonials';
import { Award, Quote, CheckCircle2, ZoomIn, ShieldCheck } from 'lucide-react';

export default function AwardsSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentAwardIndex, setCurrentAwardIndex] = useState(0);

  const handleOpenAward = (index) => {
    setCurrentAwardIndex(index);
    setLightboxOpen(true);
  };

  const awardImages = awardsData.map((a) => ({
    src: a.image,
    title: a.title,
    alt: `${a.title} - ${a.organization}`
  }));

  return (
    <section id="awards" className="py-20 md:py-28 bg-[#F7F5EF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <SectionHeading
            align="center"
            eyebrow="AWARDS & RECOGNITION"
            eyebrowColor="yellow"
            title="Professional honors backed by real corporate evidence."
            description="Our commitment to drawing accuracy and construction integrity has been commended by established public-sector and private-sector organizations."
          />
        </Reveal>

        {/* Real Awards & Mementos Grid - Displaying all 7 authentic awards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-7 mb-20">
          {awardsData.map((award, index) => (
            <Reveal key={award.id} delay={index * 0.08}>
              <div
                onClick={() => handleOpenAward(index)}
                className="group relative bg-white rounded-2xl p-5 border border-[#E5E1D6] hover:border-[#174B91]/40 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                {/* Memento Photo Container */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-[#202B39]/5 mb-5">
                  <img
                    src={award.image}
                    alt={award.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 text-[#202B39] text-xs font-semibold backdrop-blur-xs shadow-md">
                      <ZoomIn className="w-3.5 h-3.5 text-[#174B91]" />
                      <span>Inspect Memento</span>
                    </span>
                  </div>

                  {/* Year Tag */}
                  <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-md bg-[#202B39]/80 text-[#F2C94C] text-[11px] font-bold backdrop-blur-xs">
                    {award.year}
                  </div>
                </div>

                {/* Award Details */}
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#E66B43] block mb-1.5">
                    {award.organization}
                  </span>
                  <h3 className="font-heading font-bold text-base md:text-lg text-[#202B39] mb-2 group-hover:text-[#174B91] transition-colors leading-snug">
                    {award.title}
                  </h3>
                  <p className="text-xs text-[#4B5868] leading-relaxed line-clamp-2">
                    {award.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F0EDE4] flex items-center justify-between text-xs text-[#174B91] font-semibold">
                  <span className="flex items-center gap-1 text-[#202B39]/70">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#174B91]" />
                    <span>Verified Physical Plaque</span>
                  </span>
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    View &rarr;
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Client Testimonials Section */}
        <div className="pt-10 border-t border-[#E5E1D6]">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#174B91] block mb-2">
              CLIENT TESTIMONIALS
            </span>
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-[#202B39]">
              Feedback grounded in actual project delivery.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonialsData.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 0.15}>
                <div className="bg-white rounded-2xl p-7 border border-[#E5E1D6] shadow-2xs flex flex-col justify-between h-full relative">
                  <div>
                    <Quote className="w-8 h-8 text-[#174B91]/20 mb-4" />
                    <p className="text-sm md:text-base text-[#202B39] leading-relaxed mb-6 italic">
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F0EDE4]">
                    <h4 className="font-heading font-bold text-sm text-[#202B39]">
                      {item.author}
                    </h4>
                    <span className="text-xs text-[#4B5868] block">
                      {item.role}
                    </span>
                    <span className="text-xs font-medium text-[#E66B43] block mt-0.5">
                      {item.project}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox for High-Res Memento Photos */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={awardImages}
        currentIndex={currentAwardIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setCurrentAwardIndex((prev) => (prev - 1 + awardImages.length) % awardImages.length)}
        onNext={() => setCurrentAwardIndex((prev) => (prev + 1) % awardImages.length)}
        title={awardsData[currentAwardIndex]?.title}
        description={`${awardsData[currentAwardIndex]?.organization} (${awardsData[currentAwardIndex]?.year}) — ${awardsData[currentAwardIndex]?.description}`}
      />
    </section>
  );
}

