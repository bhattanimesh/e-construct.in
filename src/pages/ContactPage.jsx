import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin, Phone, Mail, Clock, Send, CheckCircle,
  Facebook, Linkedin, Instagram, Youtube, ArrowRight
} from 'lucide-react';
import ctaBG from '../assets/ctaBG.avif';

// ─── DATA ─────────────────────────────────────────────────────────────────────

const contactInfo = [
  {
    icon: MapPin,
    title: 'Corporate Office',
    lines: [
      'Office No. 1, 2nd Floor,',
      'Civil Engineering Dept,',
      'Pune, Maharashtra, India',
    ],
    accent: 'bg-yellow-50 border-yellow-100 text-yellow-600',
    iconBg: 'bg-yellow-500',
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+91 91122 34455', '+91 91122 34488'],
    accent: 'bg-slate-50 border-slate-100 text-slate-600',
    iconBg: 'bg-slate-800',
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['support@e-construct.in', 'info@e-construct.in'],
    accent: 'bg-yellow-50 border-yellow-100 text-yellow-600',
    iconBg: 'bg-yellow-500',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: ['Mon – Sat: 9:00 AM – 7:00 PM', 'Sunday: Closed'],
    accent: 'bg-slate-50 border-slate-100 text-slate-600',
    iconBg: 'bg-slate-800',
  },
];

const services = [
  'BIM Technology Consultancy',
  'Architectural Consultancy',
  'Structural Design & Audit',
  'Project Management (ePMC)',
  'Interior Design Consultancy',
  'Corporate On-Job Training',
  'Luxury Villa Design & Build',
  'Construction Services',
  'Other',
];

const socials = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

// ─── SECTION LABEL ────────────────────────────────────────────────────────────

const SectionLabel = ({ text, center = false }) => (
  <motion.div
    initial={{ opacity: 0, x: center ? 0 : -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className={`flex items-center gap-3 mb-4 ${center ? 'justify-center' : ''}`}
  >
    <span className="w-10 h-[2px] bg-yellow-500" />
    <span className="text-yellow-600 font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs">{text}</span>
    {center && <span className="w-10 h-[2px] bg-yellow-500" />}
  </motion.div>
);

// ─── HERO ─────────────────────────────────────────────────────────────────────

const HeroSection = () => (
  <section className="relative h-[50vh] min-h-[380px] flex items-end overflow-hidden">
    <img src={ctaBG} alt="Contact E-Construct" className="absolute inset-0 w-full h-full object-cover scale-105" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
    <div className="relative z-10 max-w-[1400px] mx-auto px-6 pb-16 w-full">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-[2px] bg-yellow-500" />
          <span className="text-yellow-400 font-bold uppercase tracking-[0.2em] text-xs">Get In Touch</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white leading-tight tracking-tight">
          Contact <br />
          <span className="accent-text italic">E-Construct</span>
        </h1>
        <p className="mt-4 text-white/70 text-base md:text-lg max-w-xl leading-relaxed">
          Have a project in mind? Let's talk. Our team is ready to help you build something extraordinary.
        </p>
      </motion.div>
    </div>
  </section>
);

// ─── CONTACT CARDS ────────────────────────────────────────────────────────────

const InfoCards = () => (
  <section className="py-16 bg-white">
    <div className="max-w-[1400px] mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactInfo.map(({ icon: Icon, title, lines, iconBg }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-5`}>
              <Icon className="text-white h-5 w-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-3">{title}</h3>
            {lines.map((line, j) => (
              <p key={j} className="text-gray-500 text-sm leading-relaxed">{line}</p>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── CONTACT FORM ─────────────────────────────────────────────────────────────

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center py-20 gap-6"
      >
        <div className="w-20 h-20 rounded-full bg-yellow-50 border-2 border-yellow-400 flex items-center justify-center">
          <CheckCircle className="text-yellow-500 h-10 w-10" />
        </div>
        <h3 className="text-2xl font-extrabold text-slate-900">Message Sent!</h3>
        <p className="text-gray-500 max-w-sm leading-relaxed">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }); }}
          className="mt-2 px-6 py-3 bg-yellow-500 hover:bg-black hover:text-white text-black font-bold rounded-xl transition-all duration-300 text-sm uppercase tracking-wider"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Full Name *</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none transition-all duration-200 text-sm text-slate-800 placeholder-gray-400"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address *</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none transition-all duration-200 text-sm text-slate-800 placeholder-gray-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none transition-all duration-200 text-sm text-slate-800 placeholder-gray-400"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Service Interested In</label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none transition-all duration-200 text-sm text-slate-800 appearance-none cursor-pointer"
          >
            <option value="">Select a service…</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Your Message *</label>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your project, requirements, or any questions you have…"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none transition-all duration-200 text-sm text-slate-800 placeholder-gray-400 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-yellow-500 hover:bg-black hover:text-white text-black font-bold rounded-xl transition-all duration-300 uppercase tracking-wider text-sm disabled:opacity-60 disabled:cursor-not-allowed active:scale-95"
      >
        {loading ? (
          <>
            <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send Message <Send size={15} />
          </>
        )}
      </button>
    </form>
  );
};

// ─── MAIN FORM + SIDEBAR SECTION ──────────────────────────────────────────────

const FormSection = () => (
  <section className="py-20 md:py-28 bg-gray-50">
    <div className="max-w-[1400px] mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

        {/* Left: Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-[60%] bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100"
        >
          <SectionLabel text="Send a Message" />
          <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-2 leading-tight tracking-tight">
            Let's Start a <span className="accent-text italic">Conversation</span>
          </h2>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            Fill in the form and our team will reach out within 24 hours. No spam, ever.
          </p>
          <ContactForm />
        </motion.div>

        {/* Right: Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-[40%] flex flex-col gap-8"
        >
          {/* Why Contact Us */}
          <div className="bg-slate-900 rounded-3xl p-8 text-white">
            <SectionLabel text="Why Us" />
            <h3 className="text-2xl font-medium mb-6 leading-tight tracking-tight">
              Why Work With <span className="accent-text italic">E-Construct?</span>
            </h3>
            <ul className="space-y-4">
              {[
                '25+ years of proven expertise',
                '650+ successfully delivered projects',
                'ISO 9001:2015 certified quality',
                'End-to-end design & build solutions',
                'Transparent pricing & timelines',
                'Dedicated project manager assigned',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-yellow-500 flex items-center justify-center">
                    <CheckCircle className="text-black h-3 w-3" />
                  </div>
                  <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-extrabold text-slate-900 mb-2">Follow Us</h3>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Stay updated with our latest projects, insights, and industry news.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-100 hover:border-yellow-400 hover:bg-yellow-50 transition-all duration-300 group"
                >
                  <Icon className="text-gray-400 group-hover:text-yellow-600 h-4 w-4 transition-colors" />
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-yellow-700 transition-colors">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick CTA */}
          <div
            className="rounded-3xl p-8 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #fbc02d 0%, #f57f17 100%)' }}
          >
            <h3 className="text-xl font-extrabold text-black mb-2">Need a Quick Quote?</h3>
            <p className="text-black/70 text-sm mb-5 leading-relaxed">
              Call us directly for an instant consultation on your project.
            </p>
            <a
              href="tel:+919112234455"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-bold rounded-xl text-sm uppercase tracking-wider hover:bg-slate-800 transition-colors duration-300"
            >
              <Phone size={14} /> Call Now <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// ─── MAP SECTION ──────────────────────────────────────────────────────────────

const MapSection = () => (
  <section className="bg-white">
    <div className="max-w-[1400px] mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <SectionLabel text="Find Us" center />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight"
        >
          Our <span className="accent-text italic">Location</span>
        </motion.h2>
        <div className="w-16 h-1.5 bg-yellow-500 mx-auto rounded-full mt-4" />
      </div>
    </div>

    {/* Full-width map embed */}
    <div className="w-full h-[420px] md:h-[500px] overflow-hidden">
      <iframe
        title="E-Construct Office Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.01773823!2d73.72283!3d18.52043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0, filter: 'grayscale(20%)' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </section>
);

// ─── FAQ SECTION ──────────────────────────────────────────────────────────────

const faqs = [
  {
    q: 'How quickly can I expect a response?',
    a: 'Our team typically responds within 24 business hours. For urgent matters, please call us directly.',
  },
  {
    q: 'Do you offer free consultations?',
    a: 'Yes, we offer a complimentary initial consultation to understand your project requirements and provide a preliminary assessment.',
  },
  {
    q: 'Which cities do you operate in?',
    a: 'Our headquarters is in Pune, Maharashtra. We serve clients across India and also offer remote consultancy services.',
  },
  {
    q: 'What information should I have ready before contacting you?',
    a: 'A brief description of your project, approximate budget range, preferred timeline, and the type of service you need will help us assist you faster.',
  },
];

const FAQItem = ({ q, a, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      viewport={{ once: true }}
      className="border border-gray-100 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 bg-white hover:bg-gray-50 transition-colors duration-200 text-left"
      >
        <span className="font-bold text-slate-900 text-sm md:text-base pr-4">{q}</span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full border-2 border-gray-200 flex items-center justify-center transition-all duration-300 ${open ? 'bg-yellow-500 border-yellow-500 rotate-45' : ''}`}>
          <span className={`text-lg font-bold leading-none ${open ? 'text-black' : 'text-gray-400'}`}>+</span>
        </span>
      </button>
      <motion.div
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-4">{a}</p>
      </motion.div>
    </motion.div>
  );
};

const FAQSection = () => (
  <section className="py-20 md:py-28 bg-gray-50">
    <div className="max-w-[900px] mx-auto px-6">
      <div className="text-center mb-12">
        <SectionLabel text="FAQ" center />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight"
        >
          Frequently Asked <span className="accent-text italic">Questions</span>
        </motion.h2>
        <div className="w-16 h-1.5 bg-yellow-500 mx-auto rounded-full mt-4" />
      </div>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
        ))}
      </div>
    </div>
  </section>
);

// ─── PAGE ─────────────────────────────────────────────────────────────────────

const ContactPage = () => (
  <div className="min-h-screen bg-white">
    <HeroSection />
    <InfoCards />
    <FormSection />
    <MapSection />
    <FAQSection />
  </div>
);

export default ContactPage;
