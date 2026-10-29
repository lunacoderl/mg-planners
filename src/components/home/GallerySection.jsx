import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import LightboxModal from '../layout/LightboxModal';
import { workingSitesData } from '../../data/workingSites';
import { projectsData } from '../../data/projects';
import { ZoomIn, Camera, HardHat, CheckCircle2 } from 'lucide-react';

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState('completed'); // 'completed' | 'working'
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Map 14 completed projects
  const completedGallery = projectsData.map((p) => ({
    src: p.coverImage,
    title: p.title,
    category: p.category,
    location: p.location,
    badge: "Completed Work"
  }));

  // Map 14 on-site working images
  const workingGallery = workingSitesData.map((w) => ({
    src: w.image,
    title: w.title,
    category: w.stage,
    location: w.location,
    badge: "Under Construction"
  }));

  const activeItems = activeTab === 'completed' ? completedGallery : workingGallery;

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E5E1D6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <Reveal>
            <SectionHeading
              eyebrow="FIELD EVIDENCE & GALLERY"
              eyebrowColor="cobalt"
              title="From active foundations to completed spaces."
              description="Browse our photographic record categorized by verified completed architectural projects and real-time on-site construction works."
            />
          </Reveal>

          {/* Tab Switcher */}
          <Reveal delay={0.2} className="shrink-0">
            <div className="inline-flex p-1.5 rounded-2xl bg-[#F7F5EF] border border-[#E5E1D6] shadow-2xs">
              <button
                type="button"
                onClick={() => setActiveTab('completed')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'completed'
                    ? 'bg-[#174B91] text-white shadow-xs'
                    : 'text-[#4B5868] hover:text-[#202B39]'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Completed Works ({completedGallery.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('working')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'working'
                    ? 'bg-[#E66B43] text-white shadow-xs'
                    : 'text-[#4B5868] hover:text-[#202B39]'
                }`}
              >
                <HardHat className="w-4 h-4" />
                <span>On-Site / Under Construction ({workingGallery.length})</span>
              </button>
            </div>
          </Reveal>
        </div>

        {/* Dynamic Gallery Grid (Displaying all 14 images of active tab) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
          {activeItems.map((item, index) => (
            <Reveal key={index} delay={(index % 4) * 0.08}>
              <div
                onClick={() => handleOpen(index)}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#202B39]/10 cursor-pointer border border-[#E5E1D6] shadow-xs hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 pointer-events-none">
                  <span
                    className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs text-white ${
                      activeTab === 'completed'
                        ? 'bg-[#174B91]/80'
                        : 'bg-[#E66B43]/85'
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Bottom Details & Zoom Icon */}
                <div className="absolute bottom-3 left-3 right-3 text-white flex items-end justify-between gap-2">
                  <div className="pr-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#F2C94C] block mb-0.5 line-clamp-1">
                      {item.category} · {item.location}
                    </span>
                    <h3 className="font-heading font-bold text-xs sm:text-sm leading-tight line-clamp-1">
                      {item.title}
                    </h3>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 group-hover:bg-[#174B91] transition-colors">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-10 text-center">
          <p className="text-xs text-[#4B5868]">
            Click any photograph to view high-resolution details, construction specifications, and site notes.
          </p>
        </div>

      </div>

      {/* Accessible Full-Screen Lightbox */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={activeItems}
        currentIndex={currentIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setCurrentIndex((prev) => (prev - 1 + activeItems.length) % activeItems.length)}
        onNext={() => setCurrentIndex((prev) => (prev + 1) % activeItems.length)}
        title={activeItems[currentIndex]?.title}
        description={`${activeItems[currentIndex]?.badge} · ${activeItems[currentIndex]?.category} — ${activeItems[currentIndex]?.location}`}
      />
    </section>
  );
}
