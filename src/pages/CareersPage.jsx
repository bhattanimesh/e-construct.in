import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin, Clock, Briefcase, ChevronDown, Send, CheckCircle, ArrowRight,
  Users, TrendingUp, Heart, Star, Zap, BookOpen, X,
  Video, Link as LinkIcon, UploadCloud, FileText, Trash2, Film, Sparkles, Check, Play
} from 'lucide-react';
import ctaBG from '../assets/ctaBG.avif';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import planning from '../assets/planning.jpg';
import { useAdmin } from '../context/AdminContext';
import SectionHeading from '../components/SectionHeading';

// ─── STATIC DATA ──────────────────────────────────────────────────────────────

const perks = [
  { icon: TrendingUp, title: 'Career Growth', desc: 'Structured growth paths with mentorship from industry veterans and clear promotion milestones.' },
  { icon: BookOpen, title: 'Learning & Development', desc: 'Access to in-house BIM training, software certifications, and sponsored external courses.' },
  { icon: Heart, title: 'Health & Wellness', desc: 'Comprehensive health insurance for you and your family, plus wellness programmes.' },
  { icon: Users, title: 'Collaborative Culture', desc: 'Work alongside passionate engineers, architects, and designers on landmark projects.' },
  { icon: Star, title: 'Performance Rewards', desc: 'Competitive salaries, performance bonuses, and recognition for outstanding contributions.' },
  { icon: Zap, title: 'Cutting-Edge Projects', desc: 'Work on high-profile residential, commercial, and infrastructure projects across India.' },
];

const steps = [
  { num: '01', title: 'Apply Online', desc: 'Submit your application, resume & optional video resume through our careers form. We review every application personally.' },
  { num: '02', title: 'Initial Screening', desc: 'Our HR team will reach out within 5 business days for a brief introductory call.' },
  { num: '03', title: 'Technical Interview', desc: 'A focused technical discussion with our senior engineers to assess your skills and experience.' },
  { num: '04', title: 'Final Round & Offer', desc: 'Meet the leadership team. If it is a great fit, we will extend an offer within 48 hours.' },
];

// ─── HELPERS ──────────────────────────────────────────────────────────────────

const formatFileSize = (bytes) => {
  if (!bytes) return '';
  const mb = bytes / (1024 * 1024);
  if (mb >= 1) return `${mb.toFixed(1)} MB`;
  const kb = bytes / 1024;
  return `${kb.toFixed(0)} KB`;
};

const detectVideoPlatform = (url) => {
  if (!url || typeof url !== 'string') return null;
  const lower = url.toLowerCase().trim();
  if (lower.includes('loom.com')) return { name: 'Loom Video', color: 'bg-purple-50 text-purple-700 border-purple-200' };
  if (lower.includes('youtube.com') || lower.includes('youtu.be')) return { name: 'YouTube Video', color: 'bg-red-50 text-red-700 border-red-200' };
  if (lower.includes('drive.google.com')) return { name: 'Google Drive', color: 'bg-blue-50 text-blue-700 border-blue-200' };
  if (lower.includes('vimeo.com')) return { name: 'Vimeo', color: 'bg-sky-50 text-sky-700 border-sky-200' };
  if (lower.includes('onedrive') || lower.includes('1drv.ms') || lower.includes('sharepoint.com')) return { name: 'OneDrive / Cloud', color: 'bg-cyan-50 text-cyan-700 border-cyan-200' };
  if (lower.includes('dropbox.com')) return { name: 'Dropbox', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' };
  if (lower.startsWith('http://') || lower.startsWith('https://')) return { name: 'Video URL', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
  return null;
};

// ─── DOCUMENT RESUME UPLOAD COMPONENT ─────────────────────────────────────────

const DocumentResumeInput = ({ file, onFileChange }) => {
  const fileInputRef = useRef(null);

  return (
    <div className="space-y-1.5">
      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center justify-between">
        <span>Upload Resume (PDF/DOC) *</span>
        <span className="text-[11px] text-gray-400 font-normal lowercase">PDF, DOC, DOCX (Max 10MB)</span>
      </label>

      {file ? (
        <div className="flex items-center justify-between p-3 bg-yellow-50/80 border border-yellow-200 rounded-xl transition-all">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-yellow-500/20 text-yellow-700 flex items-center justify-center flex-shrink-0">
              <FileText size={18} />
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm font-bold text-slate-800 truncate">{file.name}</p>
              <p className="text-[11px] text-gray-500 font-medium">{formatFileSize(file.size)}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              onFileChange(null);
              if (fileInputRef.current) fileInputRef.current.value = '';
            }}
            className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-white rounded-lg transition-colors flex-shrink-0 ml-2"
            title="Remove file"
          >
            <Trash2 size={16} />
          </button>
        </div>
      ) : (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center justify-between px-4 py-3 border-2 border-dashed border-gray-200 hover:border-yellow-400 rounded-xl bg-gray-50/60 hover:bg-yellow-50/30 cursor-pointer transition-all group"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gray-200/70 group-hover:bg-yellow-100 group-hover:text-yellow-700 text-gray-500 flex items-center justify-center transition-colors">
              <UploadCloud size={16} />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-slate-900 transition-colors">
                Choose or drag resume file
              </p>
            </div>
          </div>
          <span className="px-3 py-1.5 bg-white border border-gray-200 group-hover:border-yellow-400 text-slate-700 text-xs font-bold rounded-lg shadow-xs group-hover:text-yellow-700 transition-all">
            Browse
          </span>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => onFileChange(e.target.files[0] || null)}
            className="hidden"
          />
        </div>
      )}
    </div>
  );
};

// ─── VIDEO RESUME INPUT COMPONENT ─────────────────────────────────────────────

const VideoResumeInput = ({
  videoMode,
  setVideoMode,
  videoUrl,
  setVideoUrl,
  videoFile,
  setVideoFile
}) => {
  const videoInputRef = useRef(null);
  const detectedPlatform = detectVideoPlatform(videoUrl);

  return (
    <div className="rounded-2xl border border-yellow-200/80 bg-gradient-to-br from-amber-50/40 via-yellow-50/20 to-orange-50/20 p-4 sm:p-5 space-y-3.5">
      {/* Header with Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-yellow-500 text-black flex items-center justify-center">
            <Video size={13} />
          </div>
          <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Video Resume</span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-yellow-400/90 text-black border border-yellow-500/30">
            <Sparkles size={10} /> Fast-Track
          </span>
        </div>
        <span className="text-[11px] text-gray-500 font-medium">Optional — highly recommended</span>
      </div>

      <p className="text-xs text-gray-600 leading-relaxed">
        Stand out from other applicants! Share a short 1–2 minute video introduction covering your engineering or BIM background, key achievements, and career goals.
      </p>

      {/* Mode Switcher Tabs */}
      <div className="flex items-center gap-1 bg-white/80 p-1 rounded-xl border border-yellow-100 shadow-2xs">
        <button
          type="button"
          onClick={() => setVideoMode('link')}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
            videoMode === 'link'
              ? 'bg-yellow-500 text-black shadow-xs'
              : 'text-gray-600 hover:text-slate-900 hover:bg-gray-50'
          }`}
        >
          <LinkIcon size={13} />
          <span>Share Video Link</span>
        </button>
        <button
          type="button"
          onClick={() => setVideoMode('file')}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
            videoMode === 'file'
              ? 'bg-yellow-500 text-black shadow-xs'
              : 'text-gray-600 hover:text-slate-900 hover:bg-gray-50'
          }`}
        >
          <Film size={13} />
          <span>Upload Video File</span>
        </button>
      </div>

      {/* Content depending on Mode */}
      {videoMode === 'link' ? (
        <div className="space-y-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
              <LinkIcon size={15} />
            </div>
            <input
              type="url"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="Paste link e.g. Loom, YouTube, Google Drive, OneDrive, Vimeo..."
              className="w-full pl-10 pr-10 py-2.5 sm:py-3 rounded-xl border border-gray-200 bg-white focus:bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none text-xs sm:text-sm text-slate-800 placeholder-gray-400 transition-all"
            />
            {videoUrl && (
              <button
                type="button"
                onClick={() => setVideoUrl('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-red-500"
                title="Clear link"
              >
                <X size={15} />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5">
            {detectedPlatform ? (
              <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold border ${detectedPlatform.color}`}>
                <Check size={12} /> {detectedPlatform.name} Detected
              </span>
            ) : (
              <span className="text-[11px] text-gray-400">
                Supports: Loom, YouTube (unlisted/public), Google Drive, Vimeo, OneDrive
              </span>
            )}
            <span className="text-[10px] text-gray-500 italic">
              *Ensure public / view permissions are enabled
            </span>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          {videoFile ? (
            <div className="flex items-center justify-between p-3 bg-white border border-yellow-200 rounded-xl">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-lg bg-yellow-500/20 text-yellow-700 flex items-center justify-center flex-shrink-0">
                  <Film size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-bold text-slate-800 truncate">{videoFile.name}</p>
                  <p className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                    <Check size={11} /> {formatFileSize(videoFile.size)} • Video Ready
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setVideoFile(null);
                  if (videoInputRef.current) videoInputRef.current.value = '';
                }}
                className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0 ml-2"
                title="Remove video"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ) : (
            <div
              onClick={() => videoInputRef.current?.click()}
              className="flex items-center justify-between px-4 py-3 border-2 border-dashed border-yellow-300/80 hover:border-yellow-500 rounded-xl bg-white/70 hover:bg-white cursor-pointer transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-yellow-100 text-yellow-700 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                  <Video size={16} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-gray-800">
                    Click to select your intro video
                  </p>
                  <p className="text-[10px] text-gray-400">MP4, MOV, WEBM, MKV (Max 100MB)</p>
                </div>
              </div>
              <span className="px-3 py-1.5 bg-yellow-500 hover:bg-black hover:text-white text-black text-xs font-bold rounded-lg shadow-2xs transition-all">
                Browse Video
              </span>
              <input
                ref={videoInputRef}
                type="file"
                accept="video/mp4,video/quicktime,video/webm,video/x-matroska,video/*"
                onChange={(e) => setVideoFile(e.target.files[0] || null)}
                className="hidden"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

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

const HeroSection = () => {
  const { data } = useAdmin();
  const heroImage = data?.aboutContent?.heroImage || '/training/32.jpeg';

  return (
    <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden mt-20">
      <img src={heroImage} alt="Careers at E-Construct" className="absolute inset-0 w-full h-full object-cover scale-105" loading="lazy" decoding="async" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 pb-16 w-full">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-yellow-500" />
            <span className="text-yellow-400 font-bold uppercase tracking-[0.2em] text-xs">Join Our Team</span>
          </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white leading-tight tracking-tight">
          Build Your Career<br /><span className="accent-text italic">With E-Construct</span>
        </h1>
        <p className="mt-4 text-white/70 text-base md:text-lg max-w-2xl leading-relaxed">
          Join a team of passionate engineers, architects, and construction professionals shaping India's built environment.
        </p>
        <div className="flex flex-wrap gap-6 mt-8">
          {[['6+', 'Open Positions'], ['25+', 'Years of Excellence'], ['500+', 'Happy Clients']].map(([val, lbl]) => (
            <div key={lbl} className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-yellow-400">{val}</span>
              <span className="text-white/60 text-sm font-semibold uppercase tracking-wider">{lbl}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
  );
};

// ─── PERKS ────────────────────────────────────────────────────────────────────

const PerksSection = () => (
  <section className="py-20 md:py-28 bg-white">
    <div className="max-w-[1400px] mx-auto px-6">
      <div className="text-center mb-14">
        <SectionLabel text="Why Join Us" center />
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-3xl md:text-5xl font-medium text-slate-900 leading-tight tracking-tight">
          Life at <span className="accent-text italic">E-Construct</span>
        </motion.h2>
        <div className="w-20 h-1.5 bg-yellow-500 mx-auto rounded-full mt-5" />
        <p className="text-gray-500 mt-5 max-w-xl mx-auto leading-relaxed text-sm md:text-base">
          We invest in our people as much as we invest in our projects. Here is what you can expect when you join us.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {perks.map(({ icon: Icon, title, desc }, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }} viewport={{ once: true }}
            className="group bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-yellow-50 border border-yellow-100 flex items-center justify-center mb-5 group-hover:bg-yellow-500 transition-colors duration-300">
              <Icon className="text-yellow-600 group-hover:text-white h-5 w-5 transition-colors duration-300" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2">{title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── JOB CARD ─────────────────────────────────────────────────────────────────

const JobCard = ({ job, index }) => {
  const [open, setOpen] = useState(false);
  const [applying, setApplying] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07 }} viewport={{ once: true }}
      className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      {/* Card Header */}
      <div className="p-6 md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="flex-1">
            <span className="inline-block px-3 py-1 bg-yellow-50 text-yellow-700 text-[10px] font-bold uppercase tracking-widest rounded-full border border-yellow-100 mb-3">
              {job.dept}
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 mb-3">{job.title}</h3>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5"><MapPin size={13} className="text-yellow-500" />{job.location}</span>
              <span className="flex items-center gap-1.5"><Clock size={13} className="text-yellow-500" />{job.type}</span>
              <span className="flex items-center gap-1.5"><Briefcase size={13} className="text-yellow-500" />{job.experience}</span>
            </div>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button onClick={() => setApplying(true)}
              className="px-5 py-2.5 bg-yellow-500 hover:bg-black hover:text-white text-black font-bold rounded-xl text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2">
              Apply <ArrowRight size={13} />
            </button>
            <button onClick={() => setOpen(!open)}
              className="px-4 py-2.5 border border-gray-200 hover:border-yellow-400 rounded-xl text-sm font-bold text-gray-600 hover:text-yellow-600 transition-all duration-300 flex items-center gap-1">
              {open ? 'Less' : 'Details'} <ChevronDown size={14} className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed mt-4">{job.desc}</p>
      </div>
      {/* Expandable Details */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }}
            className="overflow-hidden border-t border-gray-100">
            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50">
              <div>
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4">Key Responsibilities</h4>
                <ul className="space-y-2.5">
                  {job.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle size={14} className="text-yellow-500 flex-shrink-0 mt-0.5" />{r}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4">Requirements</h4>
                <ul className="space-y-2.5">
                  {job.requirements.map((r, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle size={14} className="text-yellow-500 flex-shrink-0 mt-0.5" />{r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Apply Modal */}
      <AnimatePresence>
        {applying && <ApplyModal job={job} onClose={() => setApplying(false)} />}
      </AnimatePresence>
    </motion.div>
  );
};

// ─── APPLY MODAL ──────────────────────────────────────────────────────────────

const ApplyModal = ({ job, onClose }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    resumeFile: null,
    videoMode: 'link', // 'link' | 'file'
    videoUrl: '',
    videoFile: null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  const handleResumeFile = (file) => setForm(p => ({ ...p, resumeFile: file }));
  const setVideoMode = (mode) => setForm(p => ({ ...p, videoMode: mode }));
  const setVideoUrl = (url) => setForm(p => ({ ...p, videoUrl: url }));
  const setVideoFile = (file) => setForm(p => ({ ...p, videoFile: file }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  const hasVideoResume = Boolean(form.videoUrl?.trim() || form.videoFile);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div initial={{ scale: 0.92, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.92, y: 30 }}
        className="bg-white rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 sm:p-7 border-b border-gray-100 flex-shrink-0 bg-white">
          <div>
            <p className="text-yellow-600 text-xs font-bold uppercase tracking-widest mb-1">Applying for Position</p>
            <h3 className="text-xl font-extrabold text-slate-900">{job.title}</h3>
            <p className="text-gray-400 text-sm mt-0.5">{job.dept} • {job.location}</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
        {/* Modal Body */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-5">
          {submitted ? (
            <div className="flex flex-col items-center text-center py-8 gap-4">
              <div className="w-16 h-16 rounded-full bg-yellow-50 border-2 border-yellow-400 flex items-center justify-center">
                <CheckCircle className="text-yellow-500 h-8 w-8" />
              </div>
              <h4 className="text-xl font-extrabold text-slate-900">Application Submitted!</h4>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                Thank you for applying for the <strong>{job.title}</strong> role at E-Construct. Our HR team will review your application and get back to you within 5 business days.
              </p>

              {hasVideoResume && (
                <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-yellow-50 border border-yellow-200 rounded-xl text-yellow-800 text-xs font-bold">
                  <Sparkles size={14} className="text-yellow-600" />
                  <span>Video Resume Attached • Fast-Track Review Enabled</span>
                </div>
              )}

              <button onClick={onClose} className="mt-2 px-6 py-3 bg-yellow-500 hover:bg-black hover:text-white text-black font-bold rounded-xl text-sm uppercase tracking-wider transition-all duration-300">
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Full Name *</label>
                  <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none text-sm text-slate-800 placeholder-gray-400 transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email *</label>
                  <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none text-sm text-slate-800 placeholder-gray-400 transition-all" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Phone Number</label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none text-sm text-slate-800 placeholder-gray-400 transition-all" />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Cover Note</label>
                <textarea name="message" rows={3} value={form.message} onChange={handleChange} placeholder="Tell us about your relevant projects & experience..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none text-sm text-slate-800 placeholder-gray-400 resize-none transition-all" />
              </div>

              {/* Document Resume Input */}
              <DocumentResumeInput
                file={form.resumeFile}
                onFileChange={handleResumeFile}
              />

              {/* Video Resume Input */}
              <VideoResumeInput
                videoMode={form.videoMode}
                setVideoMode={setVideoMode}
                videoUrl={form.videoUrl}
                setVideoUrl={setVideoUrl}
                videoFile={form.videoFile}
                setVideoFile={setVideoFile}
              />

              <button type="submit" disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-4 bg-yellow-500 hover:bg-black hover:text-white text-black font-bold rounded-xl text-sm uppercase tracking-wider transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed mt-2">
                {loading ? <><span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />Submitting Application...</> : <><Send size={14} />Submit Application</>}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

// ─── OPENINGS SECTION ─────────────────────────────────────────────────────────

const OpeningsSection = () => {
  const { data } = useAdmin();
  const openings = data.careers;
  const depts = ['All', ...new Set(openings.map(o => o.dept))];
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? openings : openings.filter(j => j.dept === active);
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-12">
          <SectionLabel text="Open Positions" center />
          <SectionHeading title="Current Openings" />
          <div className="w-20 h-1.5 bg-yellow-500 mx-auto rounded-full mt-5" />
        </div>
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {depts.map(d => (
            <button key={d} onClick={() => setActive(d)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-200 ${
                active === d
                  ? 'bg-yellow-500 border-yellow-500 text-black'
                  : 'bg-white border-gray-200 text-gray-600 hover:border-yellow-400 hover:text-yellow-600'
              }`}>
              {d}
            </button>
          ))}
        </div>
        {/* Job Cards */}
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}
            className="space-y-4">
            {filtered.length > 0 ? filtered.map((job, i) => (
              <JobCard key={job.id} job={job} index={i} />
            )) : (
              <div className="text-center py-16 text-gray-400 font-semibold">No openings in this department right now. Check back soon!</div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

// ─── PROCESS SECTION ──────────────────────────────────────────────────────────

const ProcessSection = () => (
  <section className="py-20 md:py-28 bg-white">
    <div className="max-w-[1400px] mx-auto px-6">
      <div className="text-center mb-14">
        <SectionLabel text="Hiring Process" center />
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-3xl md:text-5xl font-medium text-slate-900 leading-tight tracking-tight">
          How We <span className="accent-text italic">Hire</span>
        </motion.h2>
        <div className="w-20 h-1.5 bg-yellow-500 mx-auto rounded-full mt-5" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {steps.map(({ num, title, desc }, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }} viewport={{ once: true }}
            className="relative bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
            <span className="absolute -top-5 -left-3 text-7xl font-black text-gray-100 group-hover:text-yellow-100 transition-colors select-none leading-none">{num}</span>
            <div className="relative z-10 mt-4">
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">{title}</h3>
              <div className="w-8 h-1 bg-yellow-500 rounded-full mb-3" />
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── CULTURE SECTION ──────────────────────────────────────────────────────────

const CultureSection = () => (
  <section className="py-20 md:py-28 bg-slate-900 overflow-hidden">
    <div className="max-w-[1400px] mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Images */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
          <div className="col-span-2 rounded-2xl overflow-hidden aspect-video">
            <img src={img1} alt="Team at work" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" decoding="async" />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-square">
            <img src={img2} alt="Construction site" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" decoding="async" />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-square">
            <img src={planning} alt="Planning session" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" decoding="async" />
          </div>
        </motion.div>
        {/* Text */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="w-full lg:w-1/2 space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-10 h-[2px] bg-yellow-500" />
            <span className="text-yellow-400 font-bold uppercase tracking-[0.2em] text-xs">Our Culture</span>
          </div>
          <SectionHeading title="Where Passion Meets Purpose" light center={false} />
          <p className="text-white/60 leading-relaxed text-base md:text-lg">
            At E-Construct, we believe great buildings start with great people. Our culture is built on collaboration, continuous learning, and a shared commitment to excellence. Every team member is empowered to take ownership, innovate, and grow.
          </p>
          <p className="text-white/60 leading-relaxed text-base md:text-lg">
            From fresh graduates to seasoned professionals, we welcome talent that is driven, curious, and ready to make a real impact on India's built environment.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-2">
            {[['ISO 9001:2015', 'Certified Quality'], ['25+', 'Years of Trust'], ['650+', 'Projects Delivered'], ['500+', 'Happy Clients']].map(([val, lbl]) => (
              <div key={lbl} className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="text-2xl font-black text-yellow-400">{val}</div>
                <div className="text-white/50 text-xs font-semibold uppercase tracking-wider mt-1">{lbl}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// ─── OPEN APPLICATION SECTION ─────────────────────────────────────────────────

const OpenApplicationSection = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    message: '',
    resumeFile: null,
    videoMode: 'link', // 'link' | 'file'
    videoUrl: '',
    videoFile: null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  const handleResumeFile = (file) => setForm(p => ({ ...p, resumeFile: file }));
  const setVideoMode = (mode) => setForm(p => ({ ...p, videoMode: mode }));
  const setVideoUrl = (url) => setForm(p => ({ ...p, videoUrl: url }));
  const setVideoFile = (file) => setForm(p => ({ ...p, videoFile: file }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  const hasVideoResume = Boolean(form.videoUrl?.trim() || form.videoFile);

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="text-center mb-12">
          <SectionLabel text="Don't See a Fit?" center />
          <SectionHeading title="Send an Open Application" />
          <div className="w-20 h-1.5 bg-yellow-500 mx-auto rounded-full mt-5" />
          <p className="text-gray-500 mt-5 max-w-lg mx-auto text-sm leading-relaxed">
            Don't see a role that matches your profile? We are always looking for exceptional talent. Drop us your resume & optional video resume and we will reach out when the right opportunity arises.
          </p>
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
          {submitted ? (
            <div className="flex flex-col items-center text-center py-10 gap-5">
              <div className="w-20 h-20 rounded-full bg-yellow-50 border-2 border-yellow-400 flex items-center justify-center">
                <CheckCircle className="text-yellow-500 h-10 w-10" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">Application Received!</h3>
              <p className="text-gray-500 max-w-sm leading-relaxed text-sm">
                We have added you to our talent pool. Our HR team will review your profile and reach out as soon as a suitable opportunity opens up.
              </p>

              {hasVideoResume && (
                <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-yellow-50 border border-yellow-200 rounded-xl text-yellow-800 text-xs font-bold">
                  <Sparkles size={15} className="text-yellow-600" />
                  <span>Video Resume Attached • Priority Review in Talent Pool</span>
                </div>
              )}

              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({
                    name: '',
                    email: '',
                    phone: '',
                    role: '',
                    message: '',
                    resumeFile: null,
                    videoMode: 'link',
                    videoUrl: '',
                    videoFile: null,
                  });
                }}
                className="px-6 py-3 bg-yellow-500 hover:bg-black hover:text-white text-black font-bold rounded-xl text-sm uppercase tracking-wider transition-all duration-300"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Full Name *</label>
                  <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none text-sm text-slate-800 placeholder-gray-400 transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email *</label>
                  <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none text-sm text-slate-800 placeholder-gray-400 transition-all" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Phone</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none text-sm text-slate-800 placeholder-gray-400 transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Desired Role / Department</label>
                  <input type="text" name="role" value={form.role} onChange={handleChange} placeholder="e.g. BIM Engineer, Site Engineer"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none text-sm text-slate-800 placeholder-gray-400 transition-all" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Tell Us About Yourself *</label>
                <textarea name="message" required rows={4} value={form.message} onChange={handleChange} placeholder="Brief introduction, your skills, and what you are looking for..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none text-sm text-slate-800 placeholder-gray-400 resize-none transition-all" />
              </div>

              {/* Document Resume Upload */}
              <DocumentResumeInput
                file={form.resumeFile}
                onFileChange={handleResumeFile}
              />

              {/* Video Resume Input */}
              <VideoResumeInput
                videoMode={form.videoMode}
                setVideoMode={setVideoMode}
                videoUrl={form.videoUrl}
                setVideoUrl={setVideoUrl}
                videoFile={form.videoFile}
                setVideoFile={setVideoFile}
              />

              <button type="submit" disabled={loading}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-yellow-500 hover:bg-black hover:text-white text-black font-bold rounded-xl text-sm uppercase tracking-wider transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed">
                {loading ? <><span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />Sending Application...</> : <><Send size={14} />Send Application</>}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────

const CareersPage = () => (
  <div className="min-h-screen bg-white">
    <HeroSection />
    <PerksSection />
    <OpeningsSection />
    <ProcessSection />
    <CultureSection />
    <OpenApplicationSection />
  </div>
);

export default CareersPage;
