import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import ProjectsSection from '../components/home/ProjectsSection';
import ProcessSection from '../components/home/ProcessSection';
import AwardsSection from '../components/home/AwardsSection';
import GallerySection from '../components/home/GallerySection';
import FAQSection from '../components/home/FAQSection';
import ContactCTA from '../components/home/ContactCTA';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full">
      {/* 02 Immersive Hero */}
      <Hero />

      {/* 03 About MG Planners */}
      <AboutSection />

      {/* 04 Services Overview */}
      <ServicesSection />

      {/* 05 Featured Projects */}
      <ProjectsSection />

      {/* 06 Our Process */}
      <ProcessSection />

      {/* 07 Testimonials & Awards */}
      <AwardsSection />

      {/* 08 Immersive Gallery */}
      <GallerySection />

      {/* 09 FAQ */}
      <FAQSection />

      {/* 10 Contact CTA */}
      <ContactCTA />
    </main>
  );
}

