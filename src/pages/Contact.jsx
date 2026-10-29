import React, { useState, useEffect } from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import { contactFaqs } from '../data/faqs';
import { Phone, Mail, MapPin, ExternalLink, Clock, Send, CheckCircle2, AlertCircle, Building2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Residential project',
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Please provide your name and contact phone number.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <main className="w-full">
      {/* 01 Contact Hero */}
      <section className="py-16 md:py-24 bg-[#F7F5EF] border-b border-[#E5E1D6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E1D6] text-xs font-semibold uppercase tracking-wider text-[#174B91]">
              <span>CONTACT MG PLANNERS</span>
            </div>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#202B39] tracking-tight leading-[1.08]">
              Let’s talk about <br />
              <span className="text-[#174B91]">your next project.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#4B5868] leading-relaxed">
              Enquire about architectural layouts, ongoing turnkey construction, residential flats at Dr. Charan Residency, or specialized statutory NOC drawings.
            </p>
          </div>
        </div>
      </section>

      {/* 02 Contact Info & Enquiry Form Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Verified Contact Details & Hours (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#E66B43] block mb-2">
                  VERIFIED CHANNELS
                </span>
                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#202B39]">
                  Get in touch directly with our team.
                </h2>
                <p className="text-sm text-[#4B5868] mt-2">
                  We welcome direct inquiries from property owners, developers, and corporate facility coordinators.
                </p>
              </div>

              {/* Direct Action Cards */}
              <div className="space-y-4">
                {/* Telephone */}
                <a
                  href="tel:9440368363"
                  className="flex items-start gap-4 p-5 rounded-2xl bg-[#F7F5EF] hover:bg-white border border-[#E5E1D6] hover:border-[#174B91] hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#174B91] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#4B5868] block">
                      Direct Telephone Call
                    </span>
                    <span className="text-xl font-heading font-bold text-[#202B39] group-hover:text-[#174B91] transition-colors block mt-0.5">
                      +91 9440368363
                    </span>
                    <span className="text-xs text-[#4B5868] block mt-0.5">
                      Tap to call immediately from your device
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:mgplanners1@gmail.com"
                  className="flex items-start gap-4 p-5 rounded-2xl bg-[#F7F5EF] hover:bg-white border border-[#E5E1D6] hover:border-[#174B91] hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#E66B43] text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#4B5868] block">
                      Email Communication
                    </span>
                    <span className="text-base sm:text-lg font-heading font-bold text-[#202B39] group-hover:text-[#E66B43] transition-colors block mt-0.5 break-all">
                      mgplanners1@gmail.com
                    </span>
                    <span className="text-xs text-[#4B5868] block mt-0.5">
                      Send CAD drawings, plot layouts, or documents
                    </span>
                  </div>
                </a>

                {/* Office Location */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#F7F5EF] border border-[#E5E1D6]">
                  <div className="w-12 h-12 rounded-xl bg-[#202B39] text-[#F2C94C] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#4B5868] block">
                      Office Address
                    </span>
                    <address className="not-italic text-sm text-[#202B39] font-medium leading-relaxed mt-1">
                      Door No. 59-3-6, Ground Floor, Kusuma Towers, ITI College Road, near ANR Paintings Works & Contracts, Siddhartha Nagar, Vijayawada, Andhra Pradesh – 520010
                    </address>
                    <div className="mt-3 flex items-center gap-3">
                      <a
                        href="https://plus.codes/7J4XMG52+6Q8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#174B91] hover:underline"
                      >
                        <span>Plus Code: MG52+6Q8, Vijayawada</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-center gap-3.5 px-5 py-3.5 rounded-xl bg-white border border-[#E5E1D6] text-xs text-[#4B5868]">
                  <Clock className="w-4 h-4 text-[#174B91] shrink-0" />
                  <span>
                    <strong>Hours:</strong> Monday – Saturday: 9:30 AM to 7:00 PM (Prior appointment recommended)
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Project Enquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-[#F7F5EF] rounded-3xl p-8 sm:p-10 border border-[#E5E1D6] shadow-sm">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#174B91] block">
                    PROJECT INQUIRY
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-[#202B39] mt-1">
                    Send an Enquiry to Our Planners
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B5868] mt-1">
                    Share your requirements, site constraints, or property enquiry.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-white border border-[#C8DFD1] text-center space-y-4">
                    <CheckCircle2 className="w-14 h-14 text-[#174B91] mx-auto" />
                    <div>
                      <h4 className="font-heading font-bold text-xl text-[#202B39]">
                        Enquiry Recorded Successfully!
                      </h4>
                      <p className="text-sm text-[#4B5868] mt-2 leading-relaxed">
                        Thank you, <strong className="text-[#202B39]">{formData.name}</strong>. Your enquiry regarding <strong className="text-[#202B39]">{formData.service}</strong> has been logged.
                      </p>
                      <p className="text-xs text-[#4B5868] mt-2">
                        Our principal architect will reach you at <strong className="text-[#174B91]">{formData.phone}</strong>. For urgent discussions, please call directly.
                      </p>
                    </div>
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                      size="sm"
                    >
                      Submit Another Query
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                      <div className="flex items-center gap-2 p-3.5 rounded-xl bg-red-50 text-red-700 text-xs border border-red-200">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-bold text-[#202B39] uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E1D6] focus:border-[#174B91] focus:ring-1 focus:ring-[#174B91] text-sm text-[#202B39]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#202B39] uppercase tracking-wider mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="e.g. 9440368363"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E1D6] focus:border-[#174B91] focus:ring-1 focus:ring-[#174B91] text-sm text-[#202B39]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#202B39] uppercase tracking-wider mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email address"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E1D6] focus:border-[#174B91] focus:ring-1 focus:ring-[#174B91] text-sm text-[#202B39]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#202B39] uppercase tracking-wider mb-1.5">
                        What is your enquiry about? *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E1D6] focus:border-[#174B91] focus:ring-1 focus:ring-[#174B91] text-sm text-[#202B39] cursor-pointer"
                      >
                        <option value="Residential project">Residential project (Custom villa / apartment)</option>
                        <option value="Dr. Charan Residency Flat enquiry">Dr. Charan Residency Flat enquiry</option>
                        <option value="Commercial project">Commercial building construction</option>
                        <option value="Architecture and planning">Architecture & Planning consultation</option>
                        <option value="Technical consultancy / HPCL NOC">Technical consultancy / Statutory NOC</option>
                        <option value="Other enquiry">Other enquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#202B39] uppercase tracking-wider mb-1.5">
                        Project Details *
                      </label>
                      <textarea
                        rows="4"
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        placeholder="Tell us about your plot location, dimensions, approximate budget, or timeline..."
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E1D6] focus:border-[#174B91] focus:ring-1 focus:ring-[#174B91] text-sm text-[#202B39] resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      showArrow={true}
                      className="w-full font-semibold shadow-md py-3.5"
                    >
                      Submit Project Enquiry
                    </Button>

                    <p className="text-[11px] text-[#4B5868] text-center pt-1">
                      Frontend demonstration form. Submissions can also be initiated by calling <strong>9440368363</strong>.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 03 Office Map & Directions */}
      <section className="py-16 md:py-20 bg-[#F7F5EF] border-t border-[#E5E1D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#174B91] block">
                FIND OUR OFFICE
              </span>
              <h2 className="font-heading font-bold text-3xl text-[#202B39]">
                Visit Us in Vijayawada
              </h2>
              <p className="text-sm text-[#4B5868] leading-relaxed">
                Located conveniently in Kusuma Towers along ITI College Road in Siddhartha Nagar. Close to prominent commercial transit points across the city.
              </p>
              <div className="pt-2">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=MG52%2B6Q8,+Vijayawada,+Andhra+Pradesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#174B91] hover:bg-[#103a73] text-white text-sm font-semibold shadow-xs transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#F2C94C]" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[16/9] bg-white flex items-center justify-center relative">
                {/* Embedded Interactive Map via OpenStreetMap / Google Maps link container */}
                <iframe
                  title="MG Planners Office Location"
                  src="https://maps.google.com/maps?q=16.5062,80.6480&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 Before You Enquire FAQ */}
      <section className="py-16 md:py-24 bg-white border-t border-[#E5E1D6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="BEFORE YOU ENQUIRE"
            eyebrowColor="yellow"
            title="Helpful guidance for first-time visitors."
            description="What to expect when scheduling an introductory architectural consultation."
            className="mb-12"
          />

          <div className="space-y-4">
            {contactFaqs.map((faq, index) => (
              <div key={index} className="p-6 rounded-2xl bg-[#F7F5EF] border border-[#E5E1D6]">
                <h3 className="font-heading font-bold text-base text-[#202B39] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[#4B5868] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

