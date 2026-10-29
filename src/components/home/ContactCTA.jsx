import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import { Phone, Mail, MapPin, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Architecture and planning',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Please provide your name and phone number so we can reach you.');
      return;
    }
    // Frontend validated state with direct contact guidance
    setSubmitted(true);
  };

  return (
    <section className="py-20 md:py-28 bg-[#202B39] text-white relative overflow-hidden">
      {/* Decorative architectural grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[radial-gradient(#F2C94C_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headline, Direct Telephone & Location (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#F2C94C] text-xs font-semibold uppercase tracking-widest">
                <span>LET'S DISCUSS YOUR PROJECT</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.12]">
                Have a project in mind? <br />
                <span className="text-[#F2C94C]">Let's shape it together.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-base md:text-lg text-white/75 leading-relaxed max-w-lg">
                Whether you are planning a new residential home, commercial complex, or require specialized statutory NOC drawings, our principal team is ready to consult.
              </p>
            </Reveal>

            {/* Direct Contact Cards */}
            <Reveal delay={0.3}>
              <div className="space-y-4 pt-2">
                <a
                  href="tel:9440368363"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#E66B43] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-semibold text-white/60 block">
                      Direct Phone Call
                    </span>
                    <span className="text-lg font-heading font-bold text-white group-hover:text-[#F2C94C] transition-colors">
                      +91 9440368363
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:mgplanners1@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#174B91] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-semibold text-white/60 block">
                      Email Enquiry
                    </span>
                    <span className="text-base sm:text-lg font-heading font-bold text-white group-hover:text-[#F2C94C] transition-colors break-all">
                      mgplanners1@gmail.com
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-12 h-12 rounded-lg bg-white/10 text-[#F2C94C] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-semibold text-white/60 block">
                      Office Address
                    </span>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                      Door No. 59-3-6, Ground Floor, Kusuma Towers, ITI College Road, Siddhartha Nagar, Vijayawada – 520010
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Fast Project Enquiry Form (6 cols) */}
          <div className="lg:col-span-6">
            <Reveal delay={0.2}>
              <div className="bg-white rounded-3xl p-7 sm:p-9 text-[#202B39] shadow-2xl border border-white/20">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E66B43] block">
                    Fast Consultation
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-[#202B39] mt-1">
                    Send a Project Request
                  </h3>
                  <p className="text-xs text-[#4B5868] mt-1">
                    Fill in your project basics and our team will get back to you promptly.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-6 rounded-2xl bg-[#E9F3ED] border border-[#C8DFD1] text-center space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-[#174B91] mx-auto" />
                    <div>
                      <h4 className="font-heading font-bold text-lg text-[#202B39]">
                        Thank you, {formData.name}!
                      </h4>
                      <p className="text-sm text-[#4B5868] mt-2 leading-relaxed">
                        Your project enquiry for <strong className="text-[#202B39]">{formData.service}</strong> has been received locally.
                      </p>
                      <p className="text-xs text-[#4B5868] mt-2">
                        For immediate discussion, call our principal architect directly at <strong className="text-[#174B91]">+91 9440368363</strong>.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-semibold text-[#174B91] hover:underline cursor-pointer"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                      <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 text-red-700 text-xs border border-red-200">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-bold text-[#202B39] uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E5E1D6] focus:border-[#174B91] focus:ring-1 focus:ring-[#174B91] text-sm text-[#202B39] placeholder:text-[#4B5868]/40"
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
                          className="w-full px-4 py-2.5 rounded-xl border border-[#E5E1D6] focus:border-[#174B91] focus:ring-1 focus:ring-[#174B91] text-sm text-[#202B39] placeholder:text-[#4B5868]/40"
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
                          placeholder="e.g. name@example.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-[#E5E1D6] focus:border-[#174B91] focus:ring-1 focus:ring-[#174B91] text-sm text-[#202B39] placeholder:text-[#4B5868]/40"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#202B39] uppercase tracking-wider mb-1.5">
                        Required Service *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E5E1D6] focus:border-[#174B91] focus:ring-1 focus:ring-[#174B91] text-sm text-[#202B39] bg-white cursor-pointer"
                      >
                        <option value="Architecture and planning">Architecture & Planning</option>
                        <option value="Construction & Execution">Building Construction & Execution</option>
                        <option value="Technical & NOC Consultancy">Technical & NOC Drawing Consultancy</option>
                        <option value="Residential Property Enquiry">Residential Property Enquiry (Dr. Charan Residency)</option>
                        <option value="Commercial Infrastructure">Commercial / Industrial Layouts</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#202B39] uppercase tracking-wider mb-1.5">
                        Brief Project Details
                      </label>
                      <textarea
                        rows="3"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your plot location, size, or target timeline..."
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E5E1D6] focus:border-[#174B91] focus:ring-1 focus:ring-[#174B91] text-sm text-[#202B39] placeholder:text-[#4B5868]/40 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      showArrow={true}
                      className="w-full font-semibold shadow-md"
                    >
                      Request Project Consultation
                    </Button>

                    <p className="text-[11px] text-[#4B5868] text-center mt-2">
                      Your details are handled with strict privacy. Direct calls welcome anytime.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}

