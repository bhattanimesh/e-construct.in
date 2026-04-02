import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook, Twitter, Instagram, Linkedin, Youtube,
  Mail, MapPin, Phone, ChevronRight, Send
} from 'lucide-react';

import Logo from '../assets/logo.webp'
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 text-slate-800 border-t border-slate-200">
      {/* Newsletter Section */}
      <div className="border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-slate-900">Subscribe to our Newsletter</h3>
              <p className="text-sm text-slate-700">Engineering updates aur industry insights ke liye join karein.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white border border-slate-200 px-4 py-2 rounded-l-md focus:outline-none focus:border-orange-500 w-full md:w-64"
              />
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-r-md transition-colors flex items-center">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <div className="flex items-center w-fit px-4 space-x-2">
               <img src={Logo} alt="logo" className="h-10" />
            </div>
            <p className="text-sm leading-relaxed text-slate-700">
              India's leading Corporate Training & Consultancy firm. Hum engineering students aur professionals ko industry-ready banate hain aur all sectors of civil engineering – including world-class structural design services provide karte hain.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors"><Youtube size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Column 2: Our Expertise */}
          <div>
            <h4 className="text-slate-900 font-semibold mb-6 uppercase tracking-wider text-sm">Services & Training</h4>
            <ul className="space-y-3 text-sm">
              {[
                "Civil Engineering & Structural Consultancy",
                "Project Management (PMC)",
                "Pre-Engineered Buildings (PEB)",
                "Corporate Training",
                "Software Mastery (STAAD.Pro, ETABS)",
                "BIM Implementation"
              ].map((item) => (
                <li key={item} className="flex items-center group cursor-pointer">
                  <ChevronRight size={14} className="mr-2 text-orange-500 group-hover:translate-x-1 transition-transform" />
                  <span className="group-hover:text-slate-900 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-slate-900 font-semibold mb-6 uppercase tracking-wider text-sm">Useful Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "About Company", path: "/about" },
                { name: "Success Stories", path: "/success" },
                { name: "Ongoing Batches", path: "/training" },
                { name: "Job Portal", path: "/careers" },
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Terms & Conditions", path: "/terms" }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-600 hover:text-slate-900 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-6">
            <h4 className="text-slate-900 font-semibold mb-6 uppercase tracking-wider text-sm">Corporate Office</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-orange-500 shrink-0" />
                <span>Office No. 1, 2nd Floor, <br />Civil Engineering Dept, Pune, MH, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-orange-500 shrink-0" />
                <span>+91 91122 34455 / 88</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-orange-500 shrink-0" />
                <span>support@e-construct.in</span>
              </div>
            </div>
            {/* Accreditation/Partners Badge (Optional) */}
            <div className="pt-4 border-t border-slate-200">
              <p className="text-[10px] uppercase text-slate-600 font-bold mb-2">Recognized By</p>
              <div className="flex gap-4 opacity-70 grayscale hover:grayscale-0 transition-all">
                <span className="font-bold italic text-slate-800 text-lg">ISO 9001:2015</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-slate-100 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-700 uppercase tracking-widest">
          <p>© {currentYear} E-CONSTRUCT Design & Build Pvt Ltd.</p>
          <p>
            Designed with excellence by <span className="text-orange-600">Nexty.tech</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;