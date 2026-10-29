import React, { useEffect } from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import ContactCTA from '../components/home/ContactCTA';
import { servicesData } from '../data/services';
import { servicesFaqs } from '../data/faqs';
import { projectsData } from '../data/projects';
import { Compass, Hammer, FileCheck2, Home, CheckCircle2, ArrowRight, ShieldCheck, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  useEffect(() => {
    // Check if there is an anchor hash in the URL
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="w-full">
      {/* 01 Services Hero */}
      <section className="py-16 md:py-24 bg-[#F7F5EF] border-b border-[#E5E1D6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E1D6] text-xs font-semibold uppercase tracking-wider text-[#174B91]">
                <span>OUR SERVICES & SCOPE</span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#202B39] tracking-tight leading-[1.08]">
                Thoughtful planning. <br />
                <span className="text-[#174B91]">Purposeful design.</span>
              </h1>
              <p className="text-lg md:text-xl text-[#4B5868] leading-relaxed max-w-xl">
                Explore our architectural, construction, and technical consultancy capabilities for your next residential or commercial project.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button to="/contact" variant="primary" size="lg" showArrow={true} className="font-semibold">
                  Discuss Your Project
                </Button>
                <button
                  onClick={() => scrollToSection('architecture-planning')}
                  className="px-5 py-3 rounded-lg border border-[#202B39]/20 hover:border-[#174B91] hover:text-[#174B91] text-sm font-semibold transition-colors cursor-pointer"
                >
                  Explore Capabilities &darr;
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-[#202B39]/10">
                <img
                  src="/projects/490cd90f-20e4-46f1-848b-590a6a82f039.jpg"
                  alt="MG Planners architecture services overview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 Service Anchor Navigation Bar */}
      <nav className="sticky top-[73px] z-30 bg-white/95 backdrop-blur-md border-b border-[#E5E1D6] py-3 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4B5868] shrink-0 mr-2 hidden sm:inline-block">
              Quick Nav:
            </span>
            {servicesData.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap bg-[#F7F5EF] hover:bg-[#174B91] hover:text-white text-[#202B39] border border-[#E5E1D6] transition-all cursor-pointer"
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* 03 Detailed Service Sections (Alternating Layouts) */}
      <div className="divide-y divide-[#E5E1D6] bg-white">
        {servicesData.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={service.id}
              id={service.id}
              className="py-20 md:py-28 scroll-mt-28"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  {/* Text Column (6 cols) */}
                  <div className={`lg:col-span-6 space-y-6 ${isEven ? '' : 'lg:col-start-7'}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-[#E66B43] bg-[#E66B43]/10 border border-[#E66B43]/30">
                      <span>{service.subtitle}</span>
                    </div>

                    <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#202B39] tracking-tight leading-tight">
                      {service.title}
                    </h2>

                    <p className="text-base md:text-lg text-[#4B5868] leading-relaxed">
                      {service.fullDesc}
                    </p>

                    {/* Deliverables List */}
                    <div className="space-y-3 pt-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#202B39]">
                        Deliverables & Scope of Engagement:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.deliverables.map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#202B39]">
                            <CheckCircle2 className="w-4 h-4 text-[#174B91] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Client Practical Benefit Card */}
                    <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E5E1D6]">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#174B91] block mb-1">
                        Client Benefit
                      </span>
                      <p className="text-xs sm:text-sm text-[#4B5868]">
                        {service.clientBenefit}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="pt-2">
                      <Button
                        to="/contact"
                        variant="primary"
                        size="md"
                        showArrow={true}
                        className="font-semibold"
                      >
                        Enquire for {service.title}
                      </Button>
                    </div>
                  </div>

                  {/* Image Column (6 cols) */}
                  <div className={`lg:col-span-6 ${isEven ? '' : 'lg:col-start-1'}`}>
                    <div className="space-y-4">
                      {/* Main Service Image */}
                      <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-[#F7F5EF] aspect-[4/3] bg-[#202B39]/5">
                        <img
                          src={service.image}
                          alt={service.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>

                      {/* On-Site Working Context Thumbnail */}
                      {service.workingImage && (
                        <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#F7F5EF] border border-[#E5E1D6]">
                          <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-white shadow-xs">
                            <img
                              src={service.workingImage}
                              alt="On-site work"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#E66B43] block">
                              Active Job Site Verification
                            </span>
                            <span className="text-xs font-medium text-[#202B39]">
                              Photographed on MG Planners & MG Constructions active sites
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 04 Our Approach Timeline */}
      <section className="py-20 md:py-28 bg-[#F7F5EF] border-b border-[#E5E1D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="OUR APPROACH"
            eyebrowColor="cobalt"
            title="How clients engage with MG Planners."
            description="A four-step partnership ensuring clear expectations, budget control, and flawless architectural execution."
            className="mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Tell us about your project", desc: "Share your requirements, plot dimensions, goals and approximate target scope." },
              { num: "02", title: "Discuss requirements", desc: "Clarify the relevant service, technical constraints, statutory permits and deliverables." },
              { num: "03", title: "Agree on the scope", desc: "Confirm the proposed drawings schedule, material benchmarks, terms and milestone phases." },
              { num: "04", title: "Begin engagement", desc: "Proceed with drafting and on-site construction once all arrangements are agreed." }
            ].map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-6 border border-[#E5E1D6] shadow-2xs">
                <span className="font-heading font-extrabold text-3xl text-[#174B91] block mb-3">
                  {step.num}
                </span>
                <h3 className="font-heading font-bold text-base text-[#202B39] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5868] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 Related Projects Connections */}
      <section className="py-20 md:py-28 bg-white border-b border-[#E5E1D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E66B43] block mb-1">
                EVIDENCE IN ACTION
              </span>
              <h2 className="font-heading font-bold text-3xl text-[#202B39]">
                Projects demonstrating these capabilities.
              </h2>
            </div>
            <Button to="/projects" variant="outline" size="md" showArrow={true}>
              View All Projects
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {projectsData.slice(0, 3).map((proj) => (
              <div key={proj.id} className="rounded-2xl overflow-hidden border border-[#E5E1D6] bg-[#F7F5EF] flex flex-col">
                <div className="aspect-[16/10] overflow-hidden bg-[#202B39]/5">
                  <img src={proj.coverImage} alt={proj.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[11px] font-bold text-[#E66B43] uppercase tracking-wider block mb-1">
                      {proj.category} · {proj.location}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-[#202B39] mb-2">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-[#4B5868] line-clamp-2 mb-4">
                      {proj.oneLiner}
                    </p>
                  </div>
                  <Link to="/projects" className="text-xs font-semibold text-[#174B91] hover:underline flex items-center gap-1">
                    <span>View project details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 Services FAQ */}
      <section className="py-20 md:py-28 bg-[#F7F5EF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="SERVICE FAQS"
            eyebrowColor="yellow"
            title="Frequently asked questions about our services."
            description="Clear guidelines on contracts, execution deliverables, and drawing submissions."
            className="mb-14"
          />

          <div className="space-y-4">
            {servicesFaqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-[#E5E1D6]">
                <h3 className="font-heading font-bold text-base sm:text-lg text-[#202B39] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[#4B5868] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 Final CTA */}
      <ContactCTA />
    </main>
  );
}

