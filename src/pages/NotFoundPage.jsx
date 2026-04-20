import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Home, Search } from 'lucide-react';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 pt-24 pb-16">
      <div className="max-w-2xl w-full text-center">

        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mb-6 flex items-center justify-center"
        >
          <span className="text-[140px] sm:text-[180px] font-black text-gray-100 leading-none select-none">
            404
          </span>
          <div className="absolute flex items-center justify-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center shadow-xl shadow-yellow-500/30">
              <Search size={28} className="text-black" />
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-4 mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-yellow-500" />
            <span className="text-yellow-600 font-bold uppercase tracking-[0.2em] text-xs">Page Not Found</span>
            <span className="w-10 h-[2px] bg-yellow-500" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-medium text-slate-900 tracking-tight leading-tight">
            Looks like this page<br />
            <span className="accent-text italic">doesn't exist</span>
          </h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-md mx-auto">
            The page you're looking for may have been moved, deleted, or never existed. Let's get you back on track.
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-slate-900 text-slate-900 font-bold uppercase tracking-wider text-xs rounded-xl hover:bg-slate-900 hover:text-white transition-all duration-300"
          >
            <ArrowLeft size={15} /> Go Back
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-yellow-500 hover:bg-black hover:text-white text-black font-bold uppercase tracking-wider text-xs rounded-xl transition-all duration-300"
          >
            <Home size={15} /> Back to Home
          </Link>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-14 pt-10 border-t border-gray-100"
        >
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-5">Popular Pages</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { label: 'About Us', to: '/about' },
              { label: 'Services', to: '/services' },
              { label: 'Projects', to: '/projects' },
              { label: 'BIM Consultancy', to: '/services/bim-consultancy' },
              { label: 'Careers', to: '/careers' },
              { label: 'Contact', to: '/contact' },
            ].map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="px-4 py-2 bg-gray-50 hover:bg-yellow-50 border border-gray-200 hover:border-yellow-300 text-gray-600 hover:text-yellow-700 text-xs font-semibold rounded-full transition-all duration-200"
              >
                {label}
              </Link>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default NotFoundPage;
