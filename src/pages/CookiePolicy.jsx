import React, { useEffect } from 'react';
import { Cookie, ShieldCheck } from 'lucide-react';

export default function CookiePolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="py-16 md:py-24 bg-[#F7F5EF] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5E1D6] shadow-xs space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#174B91]/10 text-[#174B91] text-xs font-semibold uppercase tracking-wider mb-3">
              <Cookie className="w-3.5 h-3.5" />
              <span>TRANSPARENCY</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#202B39]">
              Cookie Policy
            </h1>
            <p className="text-xs text-[#4B5868] mt-2">
              Last updated: October 2026 · MG Planners
            </p>
          </div>

          <div className="prose max-w-none text-[#4B5868] space-y-6 text-sm sm:text-base leading-relaxed">
            <section className="space-y-2">
              <h2 className="font-heading font-bold text-xl text-[#202B39]">
                1. What Are Cookies?
              </h2>
              <p>
                Cookies are small text files placed on your computer or mobile device when you visit websites. They help the site remember your preferences, optimize navigation, and improve loading efficiency.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-heading font-bold text-xl text-[#202B39]">
                2. How MG Planners Uses Cookies
              </h2>
              <p>
                Our website utilizes minimal, essential cookies designed solely to:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Remember your interface preferences (such as reduced motion settings).</li>
                <li>Ensure smooth client-side routing between our Services, Projects, and Contact pages.</li>
                <li>Protect our enquiry forms from automated spam submissions.</li>
              </ul>
              <p>
                We do not use intrusive third-party cross-site behavioral tracking cookies.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-heading font-bold text-xl text-[#202B39]">
                3. Managing Cookies
              </h2>
              <p>
                Most web browsers permit you to manage or delete cookies via their browser preferences. If you choose to disable cookies, our core website pages and project galleries will continue to function properly.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

