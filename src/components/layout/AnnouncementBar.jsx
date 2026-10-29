import React from 'react';
import { Phone, MapPin, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AnnouncementBar() {
  return (
    <aside aria-label="Announcement" className="bg-[#202B39] text-[#F7F5EF] text-xs py-2 px-4 border-b border-[#202B39]/50 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        {/* Left: Location & Verified Status */}
        <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
          <span className="inline-flex items-center gap-1.5 text-[#F2C94C] font-medium">
            <Award className="w-3.5 h-3.5" />
            <span>HPCL 2023–24 NOC Drawing Consultancy Recognized</span>
          </span>
          <span className="hidden md:inline-block w-1 h-1 rounded-full bg-white/30" />
          <span className="hidden md:inline-flex items-center gap-1 text-white/80">
            <MapPin className="w-3.5 h-3.5 text-[#E66B43]" />
            <span>Siddhartha Nagar, Vijayawada, AP</span>
          </span>
        </div>

        {/* Right: Direct Telephone & Quick Consultation */}
        <div className="flex items-center gap-4 text-xs">
          <a
            href="tel:9440368363"
            className="inline-flex items-center gap-1.5 text-white hover:text-[#F2C94C] transition-colors font-medium"
          >
            <Phone className="w-3 h-3 text-[#E66B43]" />
            <span>+91 9440368363</span>
          </a>
          <span className="w-1 h-1 rounded-full bg-white/30 hidden sm:inline-block" />
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-1 text-[#F2C94C] hover:text-white transition-colors font-semibold"
          >
            <span>Request Consultation</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </aside>
  );
}

