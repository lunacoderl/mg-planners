import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { homeFaqs } from '../../data/faqs';
import { ChevronDown, HelpCircle, Phone, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F7F5EF] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal className="text-center mb-14 md:mb-16">
          <SectionHeading
            align="center"
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            eyebrowColor="terracotta"
            title="Clear answers for prospective clients."
            description="Common questions about our architectural approach, project scope, execution timelines, and residential opportunities."
          />
        </Reveal>

        {/* Accordion List */}
        <div className="space-y-4">
          {homeFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={index} delay={index * 0.05}>
                <div
                  className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#174B91]/40 shadow-md'
                      : 'bg-white/80 border-[#E5E1D6] hover:border-[#174B91]/30'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                  >
                    <span className="font-heading font-bold text-base sm:text-lg text-[#202B39] pr-2">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? 'bg-[#174B91] text-white rotate-180'
                          : 'bg-[#F7F5EF] text-[#202B39]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${index}`}
                      className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-[#4B5868] leading-relaxed border-t border-[#F0EDE4] animate-in fade-in-50 duration-200"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom Support Callout */}
        <Reveal delay={0.3} className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-5 rounded-2xl bg-white border border-[#E5E1D6] shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#174B91]/10 text-[#174B91] flex items-center justify-center">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-sm font-bold text-[#202B39] block">
                  Have a specific question not covered here?
                </span>
                <span className="text-xs text-[#4B5868]">
                  Speak directly with our principal planning team.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="tel:9440368363"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-[#F7F5EF] hover:bg-[#174B91] hover:text-white text-[#202B39] border border-[#E5E1D6] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#E66B43]" />
                <span>Call 9440368363</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#174B91] hover:text-[#E66B43] transition-colors"
              >
                <span>Write to us</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

