import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  Menu, X, ChevronDown, Facebook, Linkedin, Youtube,
  Building2, Layers, HardHat, Home, Wrench, ShieldCheck,
  LayoutDashboard, Image, BookOpen, GraduationCap, FileText,
  BarChart2, BookMarked, ArrowRight, RotateCcw,
} from 'lucide-react';
import Logo from '../assets/logo.webp';
import SearchBar, { MobileSearch } from './SearchBar';
import { useAdmin } from '../context/AdminContext';

// ─── DROPDOWN DATA ────────────────────────────────────────────────────────────

const servicesMenu = {
  label: 'Civil Engineering',
  items: [
    {
      icon: Layers,
      title: 'BIM Consultancy',
      desc: 'Full BIM implementation & clash detection',
      path: '/services/bim-consultancy',
    },
    {
      icon: Building2,
      title: 'Structural Consultancy',
      desc: 'Structural design, audit & engineering',
      path: '/services/structural-consultancy',
    },
    {
      icon: BarChart2,
      title: 'Project Management (ePMC)',
      desc: 'End-to-end construction management',
      path: '/services/epmc',
    },
    {
      icon: Home,
      title: 'Luxury Villa Design & Build',
      desc: 'Premium residential design & execution',
      path: '/services/luxury-villa',
    },
    {
      icon: HardHat,
      title: 'Construction Services',
      desc: 'Full-scale build & site management',
      path: '/services/construction',
    },
    {
      icon: ShieldCheck,
      title: 'Total Quality Management',
      desc: 'Quality assurance across all stages',
      path: '/services/tqm',
    },
    {
      icon: Wrench,
      title: 'Interior Design Consultancy',
      desc: 'Space planning & interior solutions',
      path: '/services/interior-design',
    },
    {
      icon: LayoutDashboard,
      title: 'Architectural Consultancy',
      desc: 'Concept to execution drawings',
      path: '/services/architectural-consultancy',
    },
  ],
};

const pagesMenu = [
  { icon: Image, title: 'Gallery', desc: 'BIM models & project visuals', path: '/pages/gallery' },
  { icon: BookOpen, title: 'Blog', desc: 'Insights & industry articles', path: '/pages/blog' },
  { icon: ShieldCheck, title: 'Privacy Policy', desc: 'Data privacy & cookies information', path: '/privacy-policy' },
  { icon: FileText, title: 'Terms & Conditions', desc: 'Terms of service & agreements', path: '/terms-and-conditions' },
  { icon: RotateCcw, title: 'Refund & Cancellation Policy', desc: 'Returns, cancellations & refunds', path: '/return-refund-and-cancellation-policy' },
];

const trainingMenu = [
  { icon: Layers, title: 'PG Diploma In Structural Engineering', desc: 'Comprehensive Structural Design', path: '/pages/pg-diploma-in-structural-engineering' },
  { icon: BookMarked, title: 'PG Diploma in Project Management with BIM Technology', desc: 'Project Management & BIM Tech', path: '/pages/pg-diploma-in-project-management-with-bim-technology' },
  { icon: GraduationCap, title: 'PG Diploma in Entrepreneurship in Structures, BIM and Project Management', desc: 'Structures, BIM & PM Entrepreneurship', path: '/pages/pg-diploma-in-entrepreneurship-in-structures-bim-and-project-management' },
  { icon: FileText, title: 'Masters Study In Engineering Drawing & Drafting', desc: 'Master technical drawing', path: '/training/drawing-drafting' },
];

// ─── SERVICES MEGA DROPDOWN ───────────────────────────────────────────────────

const ServicesDropdown = () => (
  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[min(640px,90vw)] bg-white border-t-[3px] border-[#fbc02d] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.18)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 rounded-b-2xl overflow-hidden translate-y-3 group-hover:translate-y-0 z-50">
    {/* Header strip */}
    <div className="bg-gradient-to-r from-[#fbc02d]/10 to-transparent px-6 py-3 border-b border-gray-100 flex items-center justify-between">
      <span className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-[#fbc02d]">{servicesMenu.label}</span>
      <Link to="/services" className="text-[0.65rem] font-bold text-gray-400 hover:text-[#fbc02d] flex items-center gap-1 transition-colors">
        View all <ArrowRight size={10} />
      </Link>
    </div>
    {/* Grid */}
    <div className="grid grid-cols-2 gap-px bg-gray-100 p-px">
      {servicesMenu.items.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.title}
            to={item.path}
            className="bg-white px-5 py-4 flex items-start gap-3 hover:bg-[#fbc02d]/5 transition-colors duration-150 group/item"
          >
            <div className="mt-0.5 w-8 h-8 rounded-lg bg-[#fbc02d]/10 flex items-center justify-center shrink-0 group-hover/item:bg-[#fbc02d]/20 transition-colors">
              <Icon size={15} className="text-[#fbc02d]" />
            </div>
            <div>
              <p className="text-[0.78rem] font-bold text-gray-900 leading-tight group-hover/item:text-[#fbc02d] transition-colors">{item.title}</p>
              <p className="text-[0.68rem] text-gray-400 mt-0.5 leading-snug">{item.desc}</p>
            </div>
          </Link>
        );
      })}
    </div>
  </div>
);

// ─── PAGES DROPDOWN ───────────────────────────────────────────────────────────

const PagesDropdown = () => (
  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[min(420px,90vw)] bg-white border-t-[3px] border-[#fbc02d] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.18)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 rounded-b-2xl overflow-hidden translate-y-3 group-hover:translate-y-0 z-50">
    <div className="bg-gradient-to-r from-[#fbc02d]/10 to-transparent px-5 py-3 border-b border-gray-100 flex items-center justify-between">
      <span className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-[#fbc02d]">Pages</span>
      <Link to="/pages/gallery" className="text-[0.65rem] font-bold text-gray-400 hover:text-[#fbc02d] flex items-center gap-1 transition-colors">
        View all <ArrowRight size={10} />
      </Link>
    </div>
    <div className="py-2">
      {pagesMenu.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.title}
            to={item.path}
            className="flex items-center gap-3 px-5 py-3 hover:bg-[#fbc02d]/5 transition-colors duration-150 group/item"
          >
            <div className="w-7 h-7 rounded-lg bg-[#fbc02d]/10 flex items-center justify-center shrink-0 group-hover/item:bg-[#fbc02d]/20 transition-colors">
              <Icon size={13} className="text-[#fbc02d]" />
            </div>
            <div>
              <p className="text-[0.78rem] font-bold text-gray-900 group-hover/item:text-[#fbc02d] transition-colors leading-tight">{item.title}</p>
              <p className="text-[0.65rem] text-gray-400 leading-snug">{item.desc}</p>
            </div>
          </Link>
        );
      })}
    </div>
  </div>
);

// ─── TRAINING DROPDOWN ────────────────────────────────────────────────────────

const TrainingDropdown = () => (
  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[min(620px,90vw)] bg-white border-t-[3px] border-[#fbc02d] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.18)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 rounded-b-2xl overflow-hidden translate-y-3 group-hover:translate-y-0 z-50">
    <div className="bg-gradient-to-r from-[#fbc02d]/10 to-transparent px-6 py-3 border-b border-gray-100 flex items-center justify-between">
      <span className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-[#fbc02d]">Training Programs</span>
      <Link to="/training/drawing-drafting" className="text-[0.65rem] font-bold text-gray-400 hover:text-[#fbc02d] flex items-center gap-1 transition-colors">
        View all <ArrowRight size={10} />
      </Link>
    </div>
    <div className="grid grid-cols-2 gap-px bg-gray-100 p-px">
      {trainingMenu.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.title}
            to={item.path}
            className="bg-white px-5 py-4 flex items-start gap-3 hover:bg-[#fbc02d]/5 transition-colors duration-150 group/item"
          >
            <div className="mt-0.5 w-8 h-8 rounded-lg bg-[#fbc02d]/10 flex items-center justify-center shrink-0 group-hover/item:bg-[#fbc02d]/20 transition-colors">
              <Icon size={15} className="text-[#fbc02d]" />
            </div>
            <div>
              <p className="text-[0.78rem] font-bold text-gray-900 leading-tight group-hover/item:text-[#fbc02d] transition-colors">{item.title}</p>
              <p className="text-[0.68rem] text-gray-400 mt-0.5 leading-snug">{item.desc}</p>
            </div>
          </Link>
        );
      })}
    </div>
  </div>
);

// ─── MOBILE ACCORDION ─────────────────────────────────────────────────────────

const MobileAccordion = ({ label, items, onNavigate }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between text-xl font-black text-gray-900 uppercase tracking-tighter hover:text-yellow-500 transition-colors"
      >
        <span>{label}</span>
        <ChevronDown size={20} className={`transition-transform duration-300 ${open ? 'rotate-180 text-yellow-500' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[600px] mt-4' : 'max-h-0'}`}>
        <div className="pl-4 border-l-2 border-[#fbc02d] space-y-1">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                to={item.path}
                onClick={onNavigate}
                className="flex items-center gap-3 py-2.5 group/item"
              >
                <div className="w-7 h-7 rounded-lg bg-[#fbc02d]/10 flex items-center justify-center shrink-0">
                  <Icon size={13} className="text-[#fbc02d]" />
                </div>
                <div>
                  <p className="text-[0.82rem] font-bold text-gray-800 group-hover/item:text-yellow-500 transition-colors leading-tight">{item.title}</p>
                  <p className="text-[0.68rem] text-gray-400 leading-snug">{item.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ─── HEADER ───────────────────────────────────────────────────────────────────

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { data } = useAdmin();
  const c = data.contact;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close mobile menu on route change
  const closeMenu = () => setIsOpen(false);

  const linkedinUrl = (c.linkedin && c.linkedin !== '#' && c.linkedin !== 'https://www.linkedin.com/company/econstruct')
    ? c.linkedin
    : 'https://www.linkedin.com/company/econstruct-design-and-build-pvt-ltd/';

  const socialLinks = [
    { icon: <Facebook size={16} />, label: 'Facebook', href: c.facebook && c.facebook !== '#' ? c.facebook : 'https://www.facebook.com/econstruct.in' },
    { icon: <Linkedin size={16} />, label: 'LinkedIn', href: linkedinUrl },
    { icon: <Youtube size={16} />, label: 'YouTube', href: (c.youtube && c.youtube !== '#' && c.youtube !== 'https://www.youtube.com/@econstruct') ? c.youtube : 'https://www.youtube.com/@Econstructofficial' },
  ];

  const navTextClass = (isActive) =>
    `text-[0.7rem] font-extrabold uppercase tracking-[0.2em] transition-all duration-300 ${isActive
      ? 'text-yellow-500'
      : isScrolled
        ? 'text-gray-900 hover:text-yellow-500'
        : 'text-white hover:text-yellow-500'
    }`;

  const chevronClass = `transition-all duration-300 group-hover:rotate-180 ${isScrolled ? 'text-gray-500' : 'text-yellow-400'}`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${isScrolled
          ? 'bg-white shadow-[0_10px_30px_rgba(0,0,0,0.07)] h-20'
          : 'bg-black/40 backdrop-blur-sm h-[100px]'
        }`}
    >
      <div className="max-w-[1500px] mx-auto px-[5%] h-full flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src={Logo}
            alt="E-Construct Logo"
            className={`h-11 md:h-12 transition-all duration-300 ${isScrolled ? 'brightness-0' : 'brightness-0 invert'}`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 h-full">

          <NavLink to="/about" className={({ isActive }) => navTextClass(isActive)}>ABOUT US</NavLink>

          {/* Services */}
          <div className="group relative h-full flex items-center">
            <button className={`flex items-center gap-1 ${navTextClass(false)}`}>
              SERVICES <ChevronDown size={10} className={chevronClass} />
            </button>
            <ServicesDropdown />
          </div>

          <NavLink to="/projects" className={({ isActive }) => navTextClass(isActive)}>PROJECTS</NavLink>

          {/* Training */}
          <div className="group relative h-full flex items-center">
            <button className={`flex items-center gap-1 ${navTextClass(false)}`}>
              TRAINING <ChevronDown size={10} className={chevronClass} />
            </button>
            <TrainingDropdown />
          </div>

          {/* Pages */}
          <div className="group relative h-full flex items-center">
            <button className={`flex items-center gap-1 ${navTextClass(false)}`}>
              PAGES <ChevronDown size={10} className={chevronClass} />
            </button>
            <PagesDropdown />
          </div>

          <NavLink to="/careers" className={({ isActive }) => navTextClass(isActive)}>CAREERS</NavLink>
          <NavLink to="/contact" className={({ isActive }) => navTextClass(isActive)}>CONTACT</NavLink>
        </nav>

        {/* Right — socials + search */}
        <div className="hidden lg:flex items-center gap-3">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 hover:border-yellow-500 hover:text-yellow-500 hover:bg-black/5 ${isScrolled ? 'border-gray-200 text-gray-900' : 'border-white/20 text-white'
                }`}
            >
              {s.icon}
            </a>
          ))}
          <SearchBar isScrolled={isScrolled} />
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`fixed inset-0 bg-white z-[2000] lg:hidden flex flex-col transition-all duration-500 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
          }`}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 safe-top" style={{ paddingTop: 'max(1rem, env(safe-area-inset-top))' }}>
          <img src={Logo} alt="Logo" className="h-9 brightness-0" />
          <button onClick={closeMenu} className="text-gray-900 p-1"><X size={26} /></button>
        </div>

        {/* Search */}
        <div className="px-5 py-3 border-b border-gray-100">
          <MobileSearch onNavigate={closeMenu} />
        </div>

        {/* Nav items */}
        <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
          {[
            { label: 'ABOUT US', path: '/about' },
            { label: 'PROJECTS', path: '/projects' },
            { label: 'CAREERS', path: '/careers' },
            { label: 'CONTACT', path: '/contact' },
          ].map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block text-xl font-black uppercase tracking-tighter transition-colors ${isActive ? 'text-yellow-500' : 'text-gray-900 hover:text-yellow-500'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <MobileAccordion label="SERVICES" items={servicesMenu.items} onNavigate={closeMenu} />
          <MobileAccordion label="TRAINING" items={trainingMenu} onNavigate={closeMenu} />
          <MobileAccordion label="PAGES" items={pagesMenu} onNavigate={closeMenu} />
        </div>

        {/* Social footer */}
        <div className="px-5 py-5 border-t border-gray-100 flex gap-4 justify-center" style={{ paddingBottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}>
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:border-yellow-500 hover:text-yellow-500 transition-all duration-300"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
