import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass, Hammer, FileCheck2, Home, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Compass,
  Hammer,
  FileCheck2,
  Home
};

export default function ServiceCard({ service, index = 0 }) {
  const IconComponent = iconMap[service.iconName] || Compass;

  return (
    <Link
      to={`/services#${service.id}`}
      className="group relative flex flex-col justify-between bg-white rounded-2xl p-7 md:p-8 border border-[#E5E1D6] hover:border-[#174B91]/40 shadow-xs hover:shadow-xl transition-all duration-400 overflow-hidden"
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 group-hover:h-2"
        style={{ backgroundColor: service.accentColor }}
      />

      <div>
        {/* Header row: Icon & Tag */}
        <div className="flex items-center justify-between gap-4 mb-6 pt-2">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
            style={{
              backgroundColor: `${service.accentColor}15`,
              color: service.accentColor
            }}
          >
            <IconComponent className="w-6 h-6" />
          </div>

          <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F7F5EF] text-[#4B5868] border border-[#E5E1D6]">
            {service.tag}
          </span>
        </div>

        {/* Subtitle / Eyebrow */}
        <span className="block text-xs font-semibold uppercase tracking-wider text-[#E66B43] mb-2">
          {service.subtitle}
        </span>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-heading font-bold text-[#202B39] mb-3 group-hover:text-[#174B91] transition-colors duration-200">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm md:text-base text-[#4B5868] leading-relaxed mb-6">
          {service.shortDesc}
        </p>

        {/* Sample Deliverables Preview */}
        <ul className="space-y-2 mb-6 border-t border-[#F0EDE4] pt-4">
          {service.deliverables.slice(0, 3).map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-[#4B5868]">
              <CheckCircle2 className="w-4 h-4 text-[#174B91] shrink-0 mt-0.5" />
              <span className="line-clamp-1">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Footer: CTA link */}
      <div className="pt-4 border-t border-[#F0EDE4] flex items-center justify-between text-sm font-semibold text-[#174B91] group-hover:text-[#E66B43] transition-colors duration-200">
        <span>Explore service capabilities</span>
        <div className="w-8 h-8 rounded-full bg-[#174B91]/10 group-hover:bg-[#E66B43] group-hover:text-white flex items-center justify-center transition-all duration-300">
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}

