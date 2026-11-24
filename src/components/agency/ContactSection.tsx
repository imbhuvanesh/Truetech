import React, { useState } from 'react';
import { Send, CheckCircle, Sparkles, MessageSquare, Mail, ArrowUpRight } from 'lucide-react';
import { MaskedLineReveal, FadeUpParagraph, FadeUpText } from '../AnimatedText';

const servicesList = [
  'Web Development',
  'App & Software',
  'Creative Design',
  'Video Production',
  'Digital Marketing',
  'Automation Solutions',
];

const budgetTiers = [
  '< $5,000',
  '$5,000 - $15,000',
  '$15,000 - $35,000',
  '$35,000+',
];

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: preselectedService || 'Web Development',
    budget: '$5,000 - $15,000',
    description: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [prevService, setPrevService] = useState(preselectedService);
  if (preselectedService && preselectedService !== prevService) {
    setPrevService(preselectedService);
    setFormData(prev => ({ ...prev, service: preselectedService }));
  }

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Valid email address is required';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.description.trim() || formData.description.length < 10) {
      errs.description = 'Please describe your project (minimum 10 characters)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="relative w-full py-16 sm:py-24 md:py-32 px-4 sm:px-8 text-white bg-[#062B88] select-none">
      
      {/* Subtle Tech Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-white/15">
          <div className="max-w-2xl">
            <FadeUpText delay={0.05} className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-neon-lime font-bold text-xs tracking-wider uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-lime animate-pulse" />
              <span>Let's Collaborate</span>
            </FadeUpText>
            
            <MaskedLineReveal
              lines={["HAVE A PROJECT IN MIND?", "START A CONVERSATION."]}
              className="font-sans text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white leading-[1.12]"
              delay={0.1}
            />
          </div>
          
          <FadeUpParagraph
            className="mt-4 md:mt-0 max-w-md text-sm sm:text-base text-white/85 font-normal font-sans leading-relaxed"
            delay={0.25}
          >
            Let's turn your ideas into something extraordinary. Tell us about your goals and our partners will reply with a detailed project proposal within 2 hours.
          </FadeUpParagraph>
        </div>

        {/* =========================================================================
            PARENT CONTAINER WITH LIGHT THEME & LAYERED SOFT SHADOW
           ========================================================================= */}
        <div className="bg-[#FAFAFB] rounded-[36px] sm:rounded-[48px] p-6 sm:p-10 md:p-12 border border-black/[0.04] shadow-card-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Column: Direct Channels & Guarantee */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-5">

              {/* Card 1: Fast Response Guarantee */}
              <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-black/[0.035] shadow-card-soft">
                <div className="w-11 h-11 rounded-2xl bg-royal-blue text-white flex items-center justify-center mb-4 shadow-md">
                  <Sparkles className="w-5 h-5 text-neon-lime" />
                </div>
                <h3 className="font-sans font-bold text-xl text-black">
                  Fast-Track Discovery
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal font-sans">
                  No automated ticket queues or endless back-and-forth. You speak directly with our senior creative technologist and growth director.
                </p>

                <div className="mt-6 pt-4 border-t border-black/[0.04] flex items-center space-x-2 text-xs font-bold text-emerald-600 font-sans">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>Available for New Client Projects</span>
                </div>
              </div>

              {/* Card 2: Direct WhatsApp Chat */}
              <a
                href="https://wa.me/15551234567?text=Hello%20Nexus%20Studio%2C%20I%20have%20a%20project%20in%20mind!"
                target="_blank"
                rel="noreferrer"
                className="bg-white rounded-[32px] p-6 border border-emerald-200 shadow-card-soft hover:shadow-card-hover transition-all duration-300 group flex items-center justify-between"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-md">
                    <MessageSquare className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <div className="text-[10.5px] font-bold uppercase tracking-wider text-emerald-600 font-sans">Direct Chat</div>
                    <div className="font-sans font-bold text-base text-black">Chat on WhatsApp</div>
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>

              {/* Card 3: Direct Email */}
              <a
                href="mailto:hello@nexusstudio.agency"
                className="bg-white rounded-[32px] p-6 border border-black/[0.035] shadow-card-soft hover:shadow-card-hover transition-all duration-300 group flex items-center justify-between"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-royal-blue text-white flex items-center justify-center shadow-md">
                    <Mail className="w-5 h-5 stroke-[2] text-neon-lime" />
                  </div>
                  <div>
                    <div className="text-[10.5px] font-bold uppercase tracking-wider text-zinc-400 font-sans">Email Directly</div>
                    <div className="font-sans font-bold text-sm sm:text-base text-black">hello@nexusstudio.agency</div>
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-zinc-100 group-hover:bg-royal-blue text-zinc-600 group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>

            </div>

            {/* Right Column: Project Enquiry Form */}
            <div className="lg:col-span-7 bg-white rounded-[32px] sm:rounded-[36px] p-6 sm:p-10 border border-black/[0.035] shadow-card-soft">

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Select Service Pills */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-2.5 font-sans">
                      1. What service do you need?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {servicesList.map((svc) => (
                        <button
                          type="button"
                          key={svc}
                          onClick={() => setFormData(prev => ({ ...prev, service: svc }))}
                          className={`text-xs font-sans px-3.5 py-2 rounded-xl transition-all duration-200 ${
                            formData.service === svc
                              ? 'bg-royal-blue text-white font-bold shadow-md'
                              : 'bg-[#F6F6F6] text-zinc-700 font-normal hover:bg-zinc-200'
                          }`}
                        >
                          {svc}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Select Budget Range Pills */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-2.5 font-sans">
                      2. Estimated Project Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetTiers.map((tier) => (
                        <button
                          type="button"
                          key={tier}
                          onClick={() => setFormData(prev => ({ ...prev, budget: tier }))}
                          className={`text-xs font-sans px-3 py-2 rounded-xl text-center transition-all duration-200 ${
                            formData.budget === tier
                              ? 'bg-royal-blue text-white font-bold shadow-md'
                              : 'bg-[#F6F6F6] text-zinc-700 font-normal hover:bg-zinc-200'
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Text Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1.5 font-sans">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Alex Rivera"
                        value={formData.name}
                        onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className={`w-full px-4 py-3 rounded-2xl bg-[#F6F6F6] border text-sm font-sans focus:outline-none focus:ring-2 focus:ring-royal-blue transition-all ${
                          errors.name ? 'border-red-400' : 'border-black/[0.04]'
                        }`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1 font-sans">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1.5 font-sans">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className={`w-full px-4 py-3 rounded-2xl bg-[#F6F6F6] border text-sm font-sans focus:outline-none focus:ring-2 focus:ring-royal-blue transition-all ${
                          errors.email ? 'border-red-400' : 'border-black/[0.04]'
                        }`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1 font-sans">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1.5 font-sans">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className={`w-full px-4 py-3 rounded-2xl bg-[#F6F6F6] border text-sm font-sans focus:outline-none focus:ring-2 focus:ring-royal-blue transition-all ${
                        errors.phone ? 'border-red-400' : 'border-black/[0.04]'
                      }`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1 font-sans">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1.5 font-sans">
                      Project Details *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your project goals, timelines, and requirements..."
                      value={formData.description}
                      onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      className={`w-full px-4 py-3 rounded-2xl bg-[#F6F6F6] border text-sm font-sans focus:outline-none focus:ring-2 focus:ring-royal-blue transition-all ${
                        errors.description ? 'border-red-400' : 'border-black/[0.04]'
                      }`}
                    />
                    {errors.description && <p className="text-red-500 text-xs mt-1 font-sans">{errors.description}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-neon-lime text-black font-sans font-bold text-sm py-4 rounded-full shadow-[0_10px_30px_rgba(168,255,0,0.35)] hover:shadow-[0_15px_40px_rgba(168,255,0,0.55)] transition-all hover:scale-[1.01] active:scale-98 flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <span>Sending Your Request...</span>
                    ) : (
                      <>
                        <span>Submit Project Proposal Request</span>
                        <Send className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center space-x-2 text-[11px] text-zinc-500 font-sans">
                    <CheckCircle className="w-3.5 h-3.5 text-royal-blue" />
                    <span>Strict NDA protection • Senior partner review • 2h response</span>
                  </div>

                </form>
              ) : (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-3xl bg-neon-lime text-black flex items-center justify-center mb-5 shadow-lg">
                    <CheckCircle className="w-9 h-9 stroke-[2.5]" />
                  </div>
                  <h3 className="font-sans font-bold text-2xl text-black">
                    Request Received!
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 max-w-md font-sans">
                    Thank you, <span className="font-bold text-black">{formData.name}</span>. Our lead creative technologist will review your requirements for <span className="font-bold text-royal-blue">{formData.service}</span> and reach out within 2 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-full bg-zinc-100 text-black font-sans text-xs font-bold hover:bg-zinc-200 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              )}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
