import React, { useEffect } from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="py-16 md:py-24 bg-[#F7F5EF] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5E1D6] shadow-xs space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#174B91]/10 text-[#174B91] text-xs font-semibold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>LEGAL COMPLIANCE</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#202B39]">
              Privacy Policy
            </h1>
            <p className="text-xs text-[#4B5868] mt-2">
              Last updated: October 2026 · MG Planners & MG Constructions
            </p>
          </div>

          <div className="prose max-w-none text-[#4B5868] space-y-6 text-sm sm:text-base leading-relaxed">
            <section className="space-y-2">
              <h2 className="font-heading font-bold text-xl text-[#202B39]">
                1. Information We Collect
              </h2>
              <p>
                MG Planners ("we", "us", or "our") respects your personal privacy. When you interact with our website, request a consultation, or submit a project enquiry form, we may collect information including your name, telephone number, email address, property/plot location, and brief project requirements.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-heading font-bold text-xl text-[#202B39]">
                2. How We Use Your Information
              </h2>
              <p>
                The information you provide is strictly utilized to:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Respond to your architectural planning and construction enquiries.</li>
                <li>Coordinate preliminary site visits, surveys, or office consultations in Vijayawada.</li>
                <li>Provide estimates, technical scope documents, or statutory NOC drawing advice.</li>
                <li>Maintain client communication throughout ongoing project contracts.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-heading font-bold text-xl text-[#202B39]">
                3. Information Sharing and Disclosure
              </h2>
              <p>
                We do not sell, rent, or trade your personal details with third-party marketing companies. Project data is only shared internally across our consortium members (MG Planners, MG Constructions, and Swamy Associates) solely to evaluate and execute your requested architectural services.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-heading font-bold text-xl text-[#202B39]">
                4. Data Security & Storage
              </h2>
              <p>
                We employ standard physical and digital security procedures to safeguard contact information and drawing specifications against unauthorized access, disclosure, or misuse.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-heading font-bold text-xl text-[#202B39]">
                5. Contacting Us
              </h2>
              <p>
                If you have questions regarding this Privacy Policy or wish to have your submitted contact record amended or removed, please contact us at:
              </p>
              <p className="font-medium text-[#202B39]">
                MG Planners · Door No. 59-3-6, Ground Floor, Kusuma Towers, ITI College Road, Siddhartha Nagar, Vijayawada – 520010 <br />
                Telephone: +91 9440368363 · Email: mgplanners1@gmail.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

