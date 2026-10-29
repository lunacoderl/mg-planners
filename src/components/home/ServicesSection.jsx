import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import ServiceCard from '../ui/ServiceCard';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import { servicesData } from '../../data/services';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#FFFFFF] border-y border-[#E5E1D6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <Reveal>
            <SectionHeading
              eyebrow="OUR SERVICES"
              eyebrowColor="terracotta"
              title="Architectural capabilities built on real execution."
              description="From preliminary site layout and statutory NOC drawings to on-site concrete execution and property development in Vijayawada."
            />
          </Reveal>

          <Reveal delay={0.2} className="shrink-0">
            <Button
              to="/services"
              variant="outline"
              size="md"
              showArrow={true}
              className="font-semibold"
            >
              View Detailed Service Scope
            </Button>
          </Reveal>
        </div>

        {/* 4 Architectural Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {servicesData.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.1} duration={0.5}>
              <ServiceCard service={service} index={index} />
            </Reveal>
          ))}
        </div>

        {/* Bottom Context Banner */}
        <Reveal delay={0.4} className="mt-14">
          <div className="rounded-2xl bg-[#E9F3ED] border border-[#C8DFD1] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h4 className="font-heading font-bold text-lg md:text-xl text-[#202B39] mb-1">
                Have custom architectural or statutory requirements?
              </h4>
              <p className="text-sm text-[#4B5868]">
                We consult directly on industrial clearances, petroleum retail NOC drawings, and bespoke villa designs.
              </p>
            </div>
            <Button
              to="/contact"
              variant="primary"
              size="md"
              showArrow={true}
              className="shrink-0 font-semibold"
            >
              Consult with Our Team
            </Button>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

