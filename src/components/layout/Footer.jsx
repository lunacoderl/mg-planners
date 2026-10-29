import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUp, Award, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#202B39] text-[#F7F5EF] pt-16 md:pt-20 pb-12 border-t border-[#202B39]/80 relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Col 1: Brand & Philosophy (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="bg-white p-1.5 rounded-xl shadow-xs">
                <img
                  src="/logo.png"
                  alt="MG Planners"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                  MG PLANNERS
                </span>
                <span className="text-[11px] font-semibold tracking-widest uppercase text-[#F2C94C]">
                  Architects & Builders
                </span>
              </div>
            </Link>

            <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-md">
              Thoughtful planning. Purposeful design. Construction shaped around your project in Vijayawada and across Andhra Pradesh. Backed by proven corporate recognitions and transparent on-site execution.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-[#F2C94C] font-medium">
                <Award className="w-4 h-4 text-[#F2C94C] shrink-0" />
                <span>HPCL 2023–24 NOC Drawing Recognition</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#E66B43]">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-white/80 hover:text-white hover:underline transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white hover:underline transition-colors">
                  About MG Planners
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white hover:underline transition-colors">
                  Services & Scope
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-white/80 hover:text-white hover:underline transition-colors">
                  Projects & Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white hover:underline transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Capabilities (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#E66B43]">
              Capabilities
            </h3>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <Link to="/services#architecture-planning" className="hover:text-white hover:underline transition-colors">
                  Architecture & Planning
                </Link>
              </li>
              <li>
                <Link to="/services#construction" className="hover:text-white hover:underline transition-colors">
                  Building Construction
                </Link>
              </li>
              <li>
                <Link to="/services#technical-consultancy" className="hover:text-white hover:underline transition-colors">
                  NOC Drawing Consultancy
                </Link>
              </li>
              <li>
                <Link to="/services#residential-projects" className="hover:text-white hover:underline transition-colors">
                  Residential Projects
                </Link>
              </li>
              <li>
                <Link to="/projects?filter=Commercial" className="hover:text-white hover:underline transition-colors">
                  Industrial & C&F Layouts
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#E66B43]">
              Get In Touch
            </h3>
            <div className="space-y-3 text-sm text-white/80">
              <a
                href="tel:9440368363"
                className="flex items-start gap-3 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-[#F2C94C] shrink-0 mt-1" />
                <div>
                  <span className="block font-medium text-white group-hover:text-[#F2C94C]">
                    +91 9440368363
                  </span>
                  <span className="text-xs text-white/60">Mon–Sat · 9:30 AM to 7:00 PM</span>
                </div>
              </a>

              <a
                href="mailto:mgplanners1@gmail.com"
                className="flex items-start gap-3 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#F2C94C] shrink-0 mt-1" />
                <span className="font-medium text-white group-hover:text-[#F2C94C] break-all">
                  mgplanners1@gmail.com
                </span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E66B43] shrink-0 mt-1" />
                <address className="not-italic text-xs text-white/70 leading-relaxed">
                  Door No. 59-3-6, Ground Floor, Kusuma Towers, ITI College Road, near ANR Paintings Works & Contracts, Siddhartha Nagar, Vijayawada, AP – 520010
                </address>
              </div>

              <div className="pt-2">
                <a
                  href="https://plus.codes/7J4XMG52+6Q8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#F2C94C] hover:underline"
                >
                  <span>Plus Code: MG52+6Q8, Vijayawada</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal, Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <p>
              © {new Date().getFullYear()} MG Planners · All rights reserved.
            </p>
            <span className="hidden sm:inline-block">·</span>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span>·</span>
            <Link to="/cookie-policy" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/80 hover:text-white border border-white/10 transition-all cursor-pointer"
            aria-label="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

