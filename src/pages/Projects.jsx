import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectCard from '../components/ui/ProjectCard';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import LightboxModal from '../components/layout/LightboxModal';
import ContactCTA from '../components/home/ContactCTA';
import { projectCategories, projectsData } from '../data/projects';
import { workingSitesData } from '../data/workingSites';
import { Filter, Layers, HardHat, CheckCircle2, ZoomIn, MapPin } from 'lucide-react';

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('filter') || 'All Projects';
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [viewMode, setViewMode] = useState('completed'); // 'completed' | 'under-construction'
  const [selectedProject, setSelectedProject] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const filter = searchParams.get('filter');
    if (filter && projectCategories.includes(filter)) {
      setActiveCategory(filter);
      setViewMode('completed');
    }
  }, [searchParams]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setViewMode('completed');
    if (cat === 'All Projects') {
      searchParams.delete('filter');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ filter: cat });
    }
  };

  const filteredProjects = activeCategory === 'All Projects'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setLightboxOpen(true);
  };

  const handleSelectWorkingSite = (site, index) => {
    setSelectedProject({
      title: site.title,
      category: site.stage,
      location: site.location,
      oneLiner: site.description,
      description: site.description,
      gallery: [site.image]
    });
    setCurrentImageIndex(0);
    setLightboxOpen(true);
  };

  const handleNextImage = () => {
    if (!selectedProject?.gallery) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.gallery.length);
  };

  const handlePrevImage = () => {
    if (!selectedProject?.gallery) return;
    setCurrentImageIndex((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
  };

  return (
    <main className="w-full">
      {/* 01 Portfolio Hero */}
      <section className="py-16 md:py-24 bg-[#F7F5EF] border-b border-[#E5E1D6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E1D6] text-xs font-semibold uppercase tracking-wider text-[#174B91]">
              <span>PORTFOLIO & FIELD RECORDS</span>
            </div>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#202B39] tracking-tight leading-[1.08]">
              Projects shaped around <span className="text-[#174B91]">purpose.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#4B5868] leading-relaxed">
              Explore our 14 completed architectural works and 14 on-site under-construction field records across Vijayawada and Andhra Pradesh.
            </p>
          </div>
        </div>
      </section>

      {/* 02 Filter & View-Mode Bar */}
      <section className="py-5 bg-white border-b border-[#E5E1D6] sticky top-[73px] z-30 backdrop-blur-md bg-white/95 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Left: View Mode Toggle (Completed vs Under Construction) */}
            <div className="inline-flex p-1 rounded-xl bg-[#F7F5EF] border border-[#E5E1D6] shrink-0">
              <button
                type="button"
                onClick={() => setViewMode('completed')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'completed'
                    ? 'bg-[#174B91] text-white shadow-xs'
                    : 'text-[#4B5868] hover:text-[#202B39]'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Completed Works ({projectsData.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('under-construction')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'under-construction'
                    ? 'bg-[#E66B43] text-white shadow-xs'
                    : 'text-[#4B5868] hover:text-[#202B39]'
                }`}
              >
                <HardHat className="w-3.5 h-3.5" />
                <span>Under Construction ({workingSitesData.length})</span>
              </button>
            </div>

            {/* Right: Category Chips (Active only for completed works) */}
            {viewMode === 'completed' && (
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#4B5868] shrink-0 mr-1 hidden sm:inline-block">
                  Sector:
                </span>
                {projectCategories.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                        isActive
                          ? 'bg-[#202B39] text-white'
                          : 'bg-[#F7F5EF] text-[#202B39] hover:bg-[#E5E1D6] border border-[#E5E1D6]'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            )}

            {viewMode === 'under-construction' && (
              <span className="text-xs font-medium text-[#E66B43]">
                Viewing 14 real on-site engineering stages
              </span>
            )}

          </div>
        </div>
      </section>

      {/* 03 Projects Grid / Working Sites Grid */}
      <section className="py-16 md:py-24 bg-[#F7F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* VIEW MODE 1: COMPLETED WORKS */}
          {viewMode === 'completed' && (
            <div>
              {filteredProjects.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-3xl border border-[#E5E1D6] p-8 max-w-xl mx-auto">
                  <Layers className="w-12 h-12 text-[#174B91]/30 mx-auto mb-4" />
                  <h3 className="font-heading font-bold text-xl text-[#202B39] mb-2">
                    No projects found in this category
                  </h3>
                  <p className="text-sm text-[#4B5868] mb-6">
                    Try selecting "All Projects" to explore our complete portfolio.
                  </p>
                  <Button onClick={() => handleCategoryChange('All Projects')} variant="primary" size="md">
                    Show All Projects
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {filteredProjects.map((project, index) => (
                    <Reveal key={project.id} delay={(index % 3) * 0.08}>
                      <ProjectCard
                        project={project}
                        onSelect={handleSelectProject}
                        featured={index === 0 && activeCategory === 'All Projects'}
                      />
                    </Reveal>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* VIEW MODE 2: UNDER CONSTRUCTION / WORKING SITES */}
          {viewMode === 'under-construction' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {workingSitesData.map((site, index) => (
                <Reveal key={site.id} delay={(index % 4) * 0.08}>
                  <div
                    onClick={() => handleSelectWorkingSite(site, index)}
                    className="group bg-white rounded-2xl overflow-hidden border border-[#E5E1D6] hover:border-[#E66B43]/50 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#202B39]/5">
                      <img
                        src={site.image}
                        alt={site.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#E66B43] text-white">
                        {site.stage}
                      </div>
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#202B39] text-xs font-semibold shadow-md">
                          <ZoomIn className="w-3.5 h-3.5 text-[#E66B43]" />
                          <span>Inspect Field Photo</span>
                        </span>
                      </div>
                    </div>

                    <div className="p-5 flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex items-center gap-1 text-[11px] font-semibold text-[#4B5868] mb-1.5">
                          <MapPin className="w-3 h-3 text-[#E66B43]" />
                          <span>{site.location}</span>
                        </div>
                        <h3 className="font-heading font-bold text-base text-[#202B39] group-hover:text-[#E66B43] transition-colors leading-snug mb-2">
                          {site.title}
                        </h3>
                        <p className="text-xs text-[#4B5868] leading-relaxed line-clamp-2">
                          {site.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-[#F0EDE4] flex items-center justify-between text-xs font-bold text-[#E66B43]">
                        <span>Active Job Site</span>
                        <span className="group-hover:translate-x-0.5 transition-transform">
                          Zoom &rarr;
                        </span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Selected Project Full Details Modal & Lightbox */}
      {selectedProject && (
        <LightboxModal
          isOpen={lightboxOpen}
          images={selectedProject.gallery || [selectedProject.coverImage]}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={handlePrevImage}
          onNext={handleNextImage}
          title={selectedProject.title}
          description={`${selectedProject.category} · ${selectedProject.location} — ${selectedProject.description || selectedProject.oneLiner}`}
        />
      )}

      {/* Final Contact CTA */}
      <ContactCTA />
    </main>
  );
}
