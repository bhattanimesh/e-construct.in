import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, MapPin, Phone, ChevronRight, Send } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

const Footer = () => {
  const { data } = useAdmin();
  const f = data.footerContent;
  const c = data.contact;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 text-slate-800 border-t border-slate-200">
      {/* Newsletter */}
      <div className="border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-slate-900">{f.newsletterTitle}</h3>
              <p className="text-sm text-slate-700">{f.newsletterSubtitle}</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input type="email" placeholder="Email Address" className="bg-white border border-slate-200 px-4 py-2 rounded-l-md focus:outline-none focus:border-orange-500 w-full md:w-64" />
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-r-md transition-colors flex items-center"><Send size={18} /></button>
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-[1400px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center w-fit px-4 space-x-2">
              <img src={f.logoUrl || '/logo.webp'} alt="logo" className="h-10" />
            </div>
            <p className="text-sm leading-relaxed text-slate-700">{f.companyDesc}</p>
            <div className="flex space-x-4">
              <a href={c.facebook || 'https://www.facebook.com/econstruct.in'} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-orange-500 transition-colors" aria-label="Facebook"><Facebook size={20} /></a>
              <a href={(!c.linkedin || c.linkedin === '#' || c.linkedin === 'https://www.linkedin.com/company/econstruct') ? 'https://www.linkedin.com/company/econstruct-design-and-build-pvt-ltd/' : c.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-orange-500 transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href={(!c.youtube || c.youtube === '#' || c.youtube === 'https://www.youtube.com/@econstruct') ? 'https://www.youtube.com/@Econstructofficial' : c.youtube} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-orange-500 transition-colors" aria-label="YouTube"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-slate-900 font-semibold mb-6 uppercase tracking-wider text-sm">Services & Training</h4>
            <ul className="space-y-3 text-sm">
              {f.serviceLinks.map((item) => (
                <li key={item.name || item} className="flex items-center group cursor-pointer">
                  <ChevronRight size={14} className="mr-2 text-orange-500 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  {item.path
                    ? <Link to={item.path} className="group-hover:text-slate-900 transition-colors">{item.name}</Link>
                    : <span className="group-hover:text-slate-900 transition-colors">{item.name || item}</span>
                  }
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-slate-900 font-semibold mb-6 uppercase tracking-wider text-sm">Useful Links</h4>
            <ul className="space-y-3 text-sm">
              {f.usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-600 hover:text-slate-900 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-slate-900 font-semibold mb-6 uppercase tracking-wider text-sm">Corporate Office</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-orange-500 shrink-0" />
                <span>{c.office}</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-orange-500 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <a href={`tel:${c.phone1?.replace(/\s/g,'')}`} className="hover:text-orange-500 transition-colors">{c.phone1}</a>
                  {c.phone2 && <a href={`tel:${c.phone2?.replace(/\s/g,'')}`} className="hover:text-orange-500 transition-colors">{c.phone2}</a>}
                  {c.phone3 && <a href={`tel:${c.phone3?.replace(/\s/g,'')}`} className="hover:text-orange-500 transition-colors">{c.phone3}</a>}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-orange-500 shrink-0" />
                <a href={`mailto:${c.email1}`} className="hover:text-orange-500 transition-colors">{c.email1}</a>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-[10px] uppercase text-slate-600 font-bold mb-2">Recognized By</p>
              <div className="flex gap-4 opacity-70 grayscale hover:grayscale-0 transition-all">
                <span className="font-bold italic text-slate-800 text-lg">{data.companyStats.certification}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-slate-100 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-700 uppercase tracking-widest">
          <p>© {currentYear} {f.copyrightName}.</p>
          <p>Designed with excellence by <span className="text-orange-600">{f.designedBy}</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
