import React from 'react';
import { motion } from "framer-motion";
import { useAdmin } from '../context/AdminContext';

const OurBlogs = () => {
  const { data } = useAdmin();
  const blogs = data.blogs;

  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 pb-10">
      <div className="py-8 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-0">
          <div className="max-w-md">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-3 sm:mb-4"
            >
              <span className="w-10 sm:w-12 h-[2px] bg-amber-500"></span>
              <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs">
                Insights & Articles
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-medium text-black leading-tight tracking-tight"
            >
              Our <span className="accent-text italic">Blogs</span>
            </motion.h2>
          </div>
        </div>
      </div>

      {/* Blog Grid: 3 cards per row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="group relative bg-white border border-gray-300 rounded-2xl overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
            {/* Image Box */}
            <div className="relative h-60 overflow-hidden shrink-0">
              <img 
                src={blog.img} 
                alt={blog.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" decoding="async" />
            </div>

            {/* Content Box */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-extrabold text-slate-900 mb-3 leading-tight group-hover:text-amber-600 transition-colors">
                {blog.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                {blog.desc}
              </p>

              <div className="mt-auto pt-4 border-t border-gray-100">
                <button className="inline-flex items-center gap-2 font-black text-xs uppercase tracking-tighter text-slate-900 border-b-2 border-transparent hover:text-amber-600 hover:border-amber-600 transition-all">
                  Learn More &#8599;
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default OurBlogs;
