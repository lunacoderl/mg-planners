import React from 'react';
import { MapPin, ArrowUpRight, Calendar, Layers } from 'lucide-react';

export default function ProjectCard({ project, onSelect, featured = false }) {
  return (
    <div
      onClick={() => onSelect && onSelect(project)}
      className={`group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-[#E5E1D6] hover:border-[#174B91]/40 shadow-xs hover:shadow-xl transition-all duration-400 cursor-pointer ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Image container */}
      <div
        className={`relative w-full overflow-hidden bg-[#202B39]/5 ${
          featured ? 'h-64 sm:h-80 md:h-96' : 'h-64 sm:h-72'
        }`}
      >
        <img
          src={project.coverImage}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />

        {/* Gradient overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#202B39]/80 via-[#202B39]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

        {/* Category & Status badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/95 text-[#202B39] shadow-xs backdrop-blur-xs">
            {project.category}
          </span>
          {project.year && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#202B39]/80 text-[#F2C94C] backdrop-blur-xs border border-white/20">
              {project.year}
            </span>
          )}
        </div>

        {/* Quick View Button on Hover */}
        <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#174B91] text-white flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-md">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>

      {/* Content details */}
      <div className="p-6 md:p-7 flex flex-col justify-between flex-grow">
        <div>
          {/* Location */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#E66B43] uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>{project.location}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-heading font-bold text-[#202B39] mb-2.5 group-hover:text-[#174B91] transition-colors duration-200">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-[#4B5868] leading-relaxed line-clamp-2 mb-4">
            {project.oneLiner}
          </p>
        </div>

        {/* Project Scope tags */}
        {project.scope && (
          <div className="pt-4 border-t border-[#F0EDE4] flex flex-wrap gap-2">
            {project.scope.slice(0, 3).map((item, i) => (
              <span
                key={i}
                className="text-xs px-2.5 py-1 rounded-md bg-[#F7F5EF] text-[#4B5868] border border-[#E5E1D6]"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

