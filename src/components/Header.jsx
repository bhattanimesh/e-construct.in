import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  Menu, X, ChevronDown, ChevronRight, Facebook, Linkedin, Youtube,
  Building2, Layers, HardHat, Home, Wrench, ShieldCheck,
  LayoutDashboard, Image, BookOpen, GraduationCap, FileText,
  BarChart2, BookMarked, ArrowRight, RotateCcw, Palette, Calendar
} from 'lucide-react';
import Logo from '../assets/logo.webp';
import SearchBar, { MobileSearch } from './SearchBar';
import { useAdmin } from '../context/AdminContext';

// ─── DROPDOWN DATA ────────────────────────────────────────────────────────────

const engineeringSubmenu = {
  title: 'Engineering Design Consultancy',
  desc: 'Structural, BIM, PMC, Villas & Interiors',
  items: [
    {
      icon: Building2,
      title: 'Structural Engineering',
      desc: 'Structural design, audit & engineering',
      path: '/services/structural-consultancy',
    },
    {
      icon: Layers,
      title: 'BIM services',
      desc: 'Full BIM implementation & clash detection',
      path: '/services/bim-consultancy',
    },
    {
      icon: BarChart2,
      title: 'Project Management services',
      desc: 'End-to-end construction management',
      path: '/services/epmc',
    },
    {
      icon: Home,
      title: 'Luxury Villa design services',
      desc: 'Premium residential design & execution',
      path: '/services/luxury-villa',
    },
    {
      icon: Palette,
      title: 'Interior Design Consultancy',
      desc: 'Space planning & interior solutions',
      path: '/services/interior-design',
    },
  ],
};

const standaloneServices = [
  {
    icon: LayoutDashboard,
    title: 'Architectural Consultancy',
    desc: 'Concept to execution drawings',
    path: '/services/architectural-consultancy',
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
];

const servicesMenu = {
  label: 'Civil Engineering',
  items: [
    ...engineeringSubmenu.items,
    ...standaloneServices,
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
  { icon: Calendar, title: 'ETABS Level 1 Workshop', desc: 'Academic-Industry Collaboration', path: '/training/corporate' },
];

// ─── SERVICES MEGA DROPDOWN (NATURAL CASCADING MENU) ─────────────────────────

const ServicesDropdown = () => {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[340px] bg-white border-t-[3px] border-[#fbc02d] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.18)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 rounded-b-2xl translate-y-3 group-hover:translate-y-0 z-50">
      
      {/* Top Header */}
      <div className="bg-gradient-to-r from-[#fbc02d]/10 to-transparent px-5 py-3 border-b border-gray-100 flex items-center justify-between rounded-t-none">
        <span className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-[#fbc02d]">{servicesMenu.label}</span>
        <Link to="/services" className="text-[0.65rem] font-bold text-gray-400 hover:text-[#fbc02d] flex items-center gap-1 transition-colors">
          View all <ArrowRight size={10} />
        </Link>
      </div>

      {/* Vertical List */}
      <div className="p-2 space-y-0.5">
        
        {/* ── Engineering Design Consultancy (Side Flyout Trigger) ── */}
        <div className="relative group/side">
          <div className="flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl hover:bg-[#fbc02d]/10 group-hover/side:bg-[#fbc02d]/10 transition-colors duration-150 cursor-pointer">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[#fbc02d]/15 text-slate-900 flex items-center justify-center shrink-0 group-hover/side:bg-[#fbc02d] transition-colors">
                <Building2 size={16} className="text-[#fbc02d] group-hover/side:text-slate-900 transition-colors" />
              </div>
              <div className="min-w-0">
                <p className="text-[0.78rem] font-bold text-gray-900 leading-tight group-hover/side:text-yellow-600 transition-colors truncate">
                  {engineeringSubmenu.title}
                </p>
                <p className="text-[0.66rem] text-gray-400 mt-0.5 leading-snug truncate">Structural, BIM, PMC, Villas & Interiors</p>
              </div>
            </div>
            <ChevronRight size={14} className="text-gray-400 group-hover/side:text-yellow-600 group-hover/side:translate-x-0.5 transition-all shrink-0" />
          </div>

          {/* ── Side Submenu (Opens seamlessly attached to the right) ── */}
          <div className="absolute left-[calc(100%+4px)] top-0 w-[310px] bg-white border border-gray-100 shadow-[0_15px_40px_-5px_rgba(0,0,0,0.18)] rounded-xl p-1.5 space-y-0.5 opacity-0 invisible group-hover/side:opacity-100 group-hover/side:visible -translate-x-1 group-hover/side:translate-x-0 transition-all duration-200 pointer-events-none group-hover/side:pointer-events-auto z-[60]">
            {/* Invisible hover bridge */}
            <div className="absolute -left-2 top-0 w-2 h-full" />

            {engineeringSubmenu.items.map((sub) => {
              const Icon = sub.icon;
              return (
                <Link
                  key={sub.title}
                  to={sub.path}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#fbc02d]/10 transition-colors duration-150 group/sub"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#fbc02d]/10 flex items-center justify-center shrink-0 group-hover/sub:bg-[#fbc02d]/25 transition-colors">
                    <Icon size={14} className="text-[#fbc02d]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[0.77rem] font-bold text-gray-900 leading-tight group-hover/sub:text-yellow-600 transition-colors truncate">
                      {sub.title}
                    </p>
                    <p className="text-[0.65rem] text-gray-400 mt-0.5 leading-snug truncate">
                      {sub.desc}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* ── Other Standalone Services ── */}
        {standaloneServices.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.title}
              to={item.path}
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-[#fbc02d]/10 transition-colors duration-150 group/item"
            >
              <div className="w-8 h-8 rounded-lg bg-[#fbc02d]/10 flex items-center justify-center shrink-0 group-hover/item:bg-[#fbc02d]/20 transition-colors">
                <Icon size={15} className="text-[#fbc02d]" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[0.78rem] font-bold text-gray-900 leading-tight group-hover/item:text-yellow-600 transition-colors truncate">{item.title}</p>
                <p className="text-[0.66rem] text-gray-400 mt-0.5 leading-snug truncate">{item.desc}</p>
              </div>
            </Link>
          );
        })}

      </div>
    </div>
  );
};

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
  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[min(500px,90vw)] bg-white border-t-[3px] border-[#fbc02d] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.18)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 rounded-b-2xl overflow-hidden translate-y-3 group-hover:translate-y-0 z-50">
    <div className="bg-gradient-to-r from-[#fbc02d]/10 to-transparent px-6 py-3 border-b border-gray-100 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-[#fbc02d]">Corporate Training</span>
        <span className="hidden sm:inline-flex items-center gap-1.5 bg-slate-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
          <img src="/iit-bhubaneswar-crest.png" alt="IIT Bhubaneswar" className="w-4 h-4 object-contain bg-white rounded-full p-0.5" />
          IIT Bhubaneswar Partnered
        </span>
      </div>
      <Link to="/training/drawing-drafting" className="text-[0.65rem] font-bold text-gray-400 hover:text-[#fbc02d] flex items-center gap-1 transition-colors">
        View all <ArrowRight size={10} />
      </Link>
    </div>
    <div className="py-2 flex flex-col">
      {trainingMenu.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.title}
            to={item.path}
            className="flex items-start gap-4 px-6 py-3.5 hover:bg-[#fbc02d]/5 transition-colors duration-150 group/item"
          >
            <div className="mt-0.5 w-9 h-9 rounded-xl bg-[#fbc02d]/10 flex items-center justify-center shrink-0 group-hover/item:bg-[#fbc02d] transition-colors">
              <Icon size={16} className="text-[#fbc02d] group-hover/item:text-slate-900 transition-colors" />
            </div>
            <div>
              <p className="text-[0.8rem] font-bold text-gray-900 leading-tight group-hover/item:text-yellow-600 transition-colors">{item.title}</p>
              <p className="text-[0.7rem] text-gray-500 mt-1 leading-snug">{item.desc}</p>
            </div>
          </Link>
        );
      })}
    </div>
  </div>
);

// ─── MOBILE SERVICES ACCORDION ────────────────────────────────────────────────

const MobileServicesAccordion = ({ onNavigate }) => {
  const [open, setOpen] = useState(false);
  const [engOpen, setEngOpen] = useState(true);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between text-lg font-black text-gray-900 uppercase tracking-tight hover:text-yellow-500 transition-colors"
      >
        <span>SERVICES</span>
        <ChevronDown size={18} className={`transition-transform duration-300 ${open ? 'rotate-180 text-yellow-500' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[800px] mt-3' : 'max-h-0'}`}>
        <div className="pl-3 border-l-2 border-[#fbc02d] space-y-1">
          {/* Engineering Design Consultancy Dropdown Group */}
          <div className="rounded-xl bg-amber-50/60 p-2.5 my-1 border border-amber-200/50">
            <button
              type="button"
              onClick={() => setEngOpen((v) => !v)}
              className="w-full flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-6 h-6 rounded-md bg-[#fbc02d] flex items-center justify-center shrink-0">
                  <Building2 size={13} className="text-slate-900" />
                </div>
                <div className="min-w-0">
                  <p className="text-[0.8rem] font-black text-gray-900 leading-tight truncate">{engineeringSubmenu.title}</p>
                </div>
              </div>
              <ChevronDown size={14} className={`text-gray-400 transition-transform duration-200 shrink-0 ${engOpen ? 'rotate-180 text-[#fbc02d]' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${engOpen ? 'max-h-[400px] mt-2' : 'max-h-0'}`}>
              <div className="ml-3 pl-3 border-l-2 border-[#fbc02d]/60 space-y-1">
                {engineeringSubmenu.items.map((sub) => {
                  const Icon = sub.icon;
                  return (
                    <Link
                      key={sub.title}
                      to={sub.path}
                      onClick={onNavigate}
                      className="flex items-center gap-2 py-1.5"
                    >
                      <div className="w-5 h-5 rounded bg-[#fbc02d]/15 flex items-center justify-center shrink-0">
                        <Icon size={11} className="text-[#fbc02d]" />
                      </div>
                      <div>
                        <p className="text-[0.75rem] font-bold text-gray-800 leading-tight">{sub.title}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Standalone services */}
          {standaloneServices.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                to={item.path}
                onClick={onNavigate}
                className="flex items-center gap-3 py-2 group/item"
              >
                <div className="w-7 h-7 rounded-lg bg-[#fbc02d]/10 flex items-center justify-center shrink-0">
                  <Icon size={13} className="text-[#fbc02d]" />
                </div>
                <div>
                  <p className="text-[0.82rem] font-bold text-gray-800 group-hover/item:text-yellow-500 transition-colors leading-tight">{item.title}</p>
                  <p className="text-[0.66rem] text-gray-400 leading-snug">{item.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ─── MOBILE ACCORDION ─────────────────────────────────────────────────────────

const MobileAccordion = ({ label, items, onNavigate }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between text-lg font-black text-gray-900 uppercase tracking-tight hover:text-yellow-500 transition-colors"
      >
        <span>{label}</span>
        <ChevronDown size={18} className={`transition-transform duration-300 ${open ? 'rotate-180 text-yellow-500' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[600px] mt-3' : 'max-h-0'}`}>
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
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
          isScrolled
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

            {/* Corporate Training */}
            <div className="group relative h-full flex items-center">
              <button className={`flex items-center gap-1 ${navTextClass(false)}`}>
                CORPORATE TRAINING <ChevronDown size={10} className={chevronClass} />
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
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 hover:border-yellow-500 hover:text-yellow-500 hover:bg-black/5 ${
                  isScrolled ? 'border-gray-200 text-gray-900' : 'border-white/20 text-white'
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
      </header>

      {/* ── Mobile Menu Drawer (rendered outside header so backdrop-filter does not clip it) ── */}
      <div
        className={`fixed inset-0 w-screen h-screen bg-white z-[99999] lg:hidden flex flex-col transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
        style={{ minHeight: '100dvh', height: '100dvh' }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-white shrink-0 safe-top" style={{ paddingTop: 'max(1rem, env(safe-area-inset-top))' }}>
          <img src={Logo} alt="Logo" className="h-9 brightness-0" />
          <button onClick={closeMenu} className="text-gray-900 p-2 hover:text-yellow-500 transition-colors" aria-label="Close menu">
            <X size={26} />
          </button>
        </div>

        {/* Search */}
        <div className="px-5 py-3 border-b border-gray-100 bg-white shrink-0">
          <MobileSearch onNavigate={closeMenu} />
        </div>

        {/* Nav items */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-5 bg-white">
          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block text-lg font-black uppercase tracking-tight transition-colors ${
                isActive ? 'text-yellow-500' : 'text-gray-900 hover:text-yellow-500'
              }`
            }
          >
            ABOUT US
          </NavLink>

          <MobileServicesAccordion onNavigate={closeMenu} />

          <NavLink
            to="/projects"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block text-lg font-black uppercase tracking-tight transition-colors ${
                isActive ? 'text-yellow-500' : 'text-gray-900 hover:text-yellow-500'
              }`
            }
          >
            PROJECTS
          </NavLink>

          <MobileAccordion label="CORPORATE TRAINING" items={trainingMenu} onNavigate={closeMenu} />

          <MobileAccordion label="PAGES" items={pagesMenu} onNavigate={closeMenu} />

          <NavLink
            to="/careers"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block text-lg font-black uppercase tracking-tight transition-colors ${
                isActive ? 'text-yellow-500' : 'text-gray-900 hover:text-yellow-500'
              }`
            }
          >
            CAREERS
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block text-lg font-black uppercase tracking-tight transition-colors ${
                isActive ? 'text-yellow-500' : 'text-gray-900 hover:text-yellow-500'
              }`
            }
          >
            CONTACT
          </NavLink>
        </div>

        {/* Social footer */}
        <div className="px-5 py-5 border-t border-gray-100 bg-white flex gap-4 justify-center shrink-0" style={{ paddingBottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}>
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
    </>
  );
};

export default Header;
