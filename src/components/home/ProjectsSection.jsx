import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import LightboxModal from '../layout/LightboxModal';
import { projectsData } from '../../data/projects';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Take top 4 representative projects for the homepage editorial grid
  const featuredProjects = projectsData.slice(0, 4);

  const handleSelectProject = (project) => {
    setSelectedProject(project);
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
    <section id="featured-projects" className="py-20 md:py-28 bg-[#F7F5EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title and "View All" CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <Reveal>
            <SectionHeading
              eyebrow="SELECTED WORK"
              eyebrowColor="cobalt"
              title="Projects shaped around purpose."
              description="A curated selection of our completed and active architectural, residential, commercial, and technical consultancy engagements."
            />
          </Reveal>

          <Reveal delay={0.2} className="shrink-0">
            <Button
              to="/projects"
              variant="primary"
              size="md"
              showArrow={true}
              className="font-semibold shadow-xs"
            >
              Explore Full Portfolio ({projectsData.length})
            </Button>
          </Reveal>
        </div>

        {/* Editorial Project Grid: Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Large Featured Residential Project (spans 2 columns on tablet/desktop) */}
          <Reveal delay={0.1} className="md:col-span-2">
            <ProjectCard
              project={featuredProjects[0]}
              onSelect={handleSelectProject}
              featured={true}
            />
          </Reveal>

          {/* Card 2: Commercial C&F Facility */}
          <Reveal delay={0.2} className="md:col-span-1">
            <ProjectCard
              project={featuredProjects[1]}
              onSelect={handleSelectProject}
              featured={false}
            />
          </Reveal>

          {/* Card 3: HPCL NOC Drawing Consultancy */}
          <Reveal delay={0.3} className="md:col-span-1">
            <ProjectCard
              project={featuredProjects[2]}
              onSelect={handleSelectProject}
              featured={false}
            />
          </Reveal>

          {/* Card 4: Commercial Retail Hub (spans 2 columns for architectural rhythm) */}
          <Reveal delay={0.4} className="md:col-span-2">
            <ProjectCard
              project={featuredProjects[3]}
              onSelect={handleSelectProject}
              featured={true}
            />
          </Reveal>
        </div>

        {/* Bottom Project Category Quick Navigation */}
        <Reveal delay={0.4} className="mt-14 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 p-2 rounded-2xl bg-white border border-[#E5E1D6] shadow-2xs">
            <span className="text-xs font-semibold text-[#4B5868] px-3">
              Browse by Sector:
            </span>
            <Button to="/projects?filter=Residential" variant="ghost" size="sm" className="text-xs font-medium">
              Residential
            </Button>
            <span className="text-[#E5E1D6]">|</span>
            <Button to="/projects?filter=Commercial" variant="ghost" size="sm" className="text-xs font-medium">
              Commercial
            </Button>
            <span className="text-[#E5E1D6]">|</span>
            <Button to="/projects?filter=Planning & Consultancy" variant="ghost" size="sm" className="text-xs font-medium">
              Planning & Consultancy
            </Button>
          </div>
        </Reveal>

      </div>

      {/* Accessible Full-Screen Lightbox */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={selectedProject?.gallery || [selectedProject?.coverImage]}
        currentIndex={currentImageIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
        title={selectedProject?.title}
        description={`${selectedProject?.category} · ${selectedProject?.location} — ${selectedProject?.oneLiner}`}
      />
    </section>
  );
}

