import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'lucide-react';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 250);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-center gap-3 select-none"
      aria-label="Quick contact and navigation controls"
    >
      {/* 1. Scroll To Top CTA (Animated fade in/out) */}
      <button
        type="button"
        onClick={scrollToTop}
        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[#202B39] border border-[#E5E1D6] hover:bg-[#F7F5EF] hover:border-[#174B91] shadow-lg flex items-center justify-center transition-all duration-300 group cursor-pointer focus-visible:outline-2 focus-visible:outline-[#174B91] ${
          showScrollTop
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
            : 'opacity-0 translate-y-4 scale-75 pointer-events-none'
        }`}
        aria-label="Scroll to top of page"
        title="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-[#174B91] transition-transform duration-300 group-hover:-translate-y-0.5" />
      </button>

      {/* 2. WhatsApp Direct Chat CTA */}
      <a
        href="https://wa.me/919440368363?text=Hello%20MG%20Planners%2C%20I%20would%20like%20to%20discuss%20an%20architectural%20project%20in%20Vijayawada."
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 group cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
        aria-label="Chat with MG Planners on WhatsApp"
        title="Chat on WhatsApp (+91 9440368363)"
      >
        {/* Subtle pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping -z-10" />

        {/* WhatsApp Icon */}
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 fill-current transition-transform duration-300 group-hover:scale-110"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.004.577 1.777.854 2.806.854 3.182 0 5.768-2.587 5.768-5.766 0-3.182-2.586-5.767-5.768-5.767zm0-2.172c4.418 0 8 3.582 8 8 0 1.502-.416 2.91-1.139 4.119l1.108 4.043-4.137-1.085c-1.16.657-2.496 1.023-3.922 1.023-4.418 0-8-3.582-8-8 0-4.418 3.582-8 8-8zm3.328 11.233c-.144.405-.837.774-1.17.824-.312.045-.705.074-2.164-.523-1.748-.716-2.87-2.477-2.956-2.591-.088-.115-.716-.952-.716-1.815 0-.864.453-1.288.614-1.463.161-.174.351-.219.468-.219.117 0 .234.001.336.006.107.005.252-.041.394.301.146.351.498 1.213.542 1.301.044.088.073.19.015.305-.059.115-.088.188-.175.291-.088.102-.185.228-.264.306-.088.087-.18.182-.078.357.102.175.454.75 1.012 1.246.721.642 1.328.841 1.518.934.19.094.302.079.414-.05.113-.131.482-.562.611-.755.129-.193.258-.161.433-.096.175.064 1.11.523 1.301.618.19.095.317.142.363.22.047.078.047.452-.097.857z" />
        </svg>
      </a>

      {/* 3. Direct Phone Call CTA */}
      <a
        href="tel:9440368363"
        className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#174B91] hover:bg-[#103a73] text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 group cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
        aria-label="Call MG Planners at +91 9440368363"
        title="Call +91 9440368363"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:rotate-12" />
      </a>
    </div>
  );
}

