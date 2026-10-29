import React, { useEffect } from 'react';
import { FileText, ShieldCheck } from 'lucide-react';

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="py-16 md:py-24 bg-[#F7F5EF] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5E1D6] shadow-xs space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#174B91]/10 text-[#174B91] text-xs font-semibold uppercase tracking-wider mb-3">
              <FileText className="w-3.5 h-3.5" />
              <span>TERMS OF ENGAGEMENT</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#202B39]">
              Terms & Conditions
            </h1>
            <p className="text-xs text-[#4B5868] mt-2">
              Last updated: October 2026 · MG Planners & MG Constructions
            </p>
          </div>

          <div className="prose max-w-none text-[#4B5868] space-y-6 text-sm sm:text-base leading-relaxed">
            <section className="space-y-2">
              <h2 className="font-heading font-bold text-xl text-[#202B39]">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing this website, you agree to comply with and be bound by these Terms and Conditions. The information published on this website is intended to introduce our architectural, construction, and technical consultancy capabilities.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-heading font-bold text-xl text-[#202B39]">
                2. Professional Scope & Accuracy
              </h2>
              <p>
                Project descriptions, photographic evidence, and awards presented on this website reflect verified commissions and authentic company recognition (including HPCL appreciation awards and Martur Lubes C&F construction). Actual construction terms, delivery timelines, and statutory drawing approvals are governed by separate, formal written agreements executed between the client and MG Planners / MG Constructions.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-heading font-bold text-xl text-[#202B39]">
                3. Intellectual Property
              </h2>
              <p>
                All content, photographic portfolios, logos, and architectural drawings displayed on this site are the intellectual property of MG Planners or reproduced with appropriate client permission. Unauthorized reproduction, modification, or distribution is prohibited without prior written consent.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-heading font-bold text-xl text-[#202B39]">
                4. Residential Properties & Enquiries
              </h2>
              <p>
                References to residential properties such as Dr. Charan Residency (Gunadala, Vijayawada) are provided for informational and enquiry purposes. Formal flat allotments, price schedules, and sales agreements are subject to availability and direct verification at our registered office.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-heading font-bold text-xl text-[#202B39]">
                5. Jurisdiction
              </h2>
              <p>
                Any disputes relating to the use of this website or architectural contractual engagements shall be governed by the laws of India and subject to the exclusive jurisdiction of the courts in Vijayawada, Andhra Pradesh.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

