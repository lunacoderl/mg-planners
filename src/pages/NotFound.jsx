import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Compass, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-[#F7F5EF] px-4 py-20">
      <div className="max-w-xl mx-auto text-center space-y-6 bg-white p-8 sm:p-12 rounded-3xl border border-[#E5E1D6] shadow-sm">
        
        {/* Architectural Icon badge */}
        <div className="w-16 h-16 rounded-2xl bg-[#174B91]/10 text-[#174B91] flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8" />
        </div>

        <span className="font-heading font-extrabold text-7xl sm:text-8xl text-[#174B91] tracking-tight block">
          404
        </span>

        <h1 className="font-heading font-bold text-2xl sm:text-3xl text-[#202B39]">
          Blueprint Not Found
        </h1>

        <p className="text-sm sm:text-base text-[#4B5868] leading-relaxed">
          The architectural plan or page you requested does not exist or may have been relocated. Let’s guide you back to our main portfolio.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button to="/" variant="primary" size="md" showArrow={false}>
            <Home className="w-4 h-4 mr-2 inline" />
            <span>Return to Homepage</span>
          </Button>

          <Button to="/projects" variant="outline" size="md" showArrow={true}>
            <span>Explore Portfolio</span>
          </Button>
        </div>
      </div>
    </main>
  );
}

