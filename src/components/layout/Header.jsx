import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import Button from '../ui/Button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F5EF]/95 backdrop-blur-md shadow-xs border-b border-[#E5E1D6] py-3'
          : 'bg-[#F7F5EF] py-4 md:py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-[#174B91] rounded-lg"
          >
            <img
              src="/logo.png"
              alt="MG Planners Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-[#202B39] leading-tight group-hover:text-[#174B91] transition-colors">
                MG PLANNERS
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-[#E66B43]">
                Architects & Builders
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    active
                      ? 'text-[#174B91] font-semibold'
                      : 'text-[#202B39] hover:text-[#174B91] hover:bg-white/50'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#174B91] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA & Telephone */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:9440368363"
              className="hidden lg:flex items-center gap-2 text-sm font-medium text-[#202B39] hover:text-[#174B91] transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-[#174B91]/10 flex items-center justify-center text-[#174B91]">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-semibold">9440368363</span>
            </a>

            <Button
              to="/contact"
              variant="primary"
              size="md"
              showArrow={true}
              className="font-semibold shadow-xs"
            >
              Discuss Your Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="tel:9440368363"
              aria-label="Call MG Planners"
              className="p-2 rounded-lg bg-white border border-[#E5E1D6] text-[#174B91]"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#202B39] hover:bg-white border border-[#E5E1D6] focus:outline-hidden"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F7F5EF] border-b border-[#E5E1D6] px-4 pt-4 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2 mb-6">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between ${
                    active
                      ? 'bg-[#174B91] text-white font-semibold'
                      : 'text-[#202B39] bg-white border border-[#E5E1D6] hover:bg-[#F0EDE4]'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-70" />
                </Link>
              );
            })}
          </nav>

          <div className="space-y-3 pt-2 border-t border-[#E5E1D6]">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              showArrow={true}
              className="w-full text-center font-semibold"
            >
              Discuss Your Project
            </Button>
            <a
              href="tel:9440368363"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-[#202B39] border border-[#E5E1D6] font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-[#E66B43]" />
              <span>Call +91 9440368363</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

