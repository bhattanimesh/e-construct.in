import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const ConstructionBlog = () => {
  const posts = [
    {
      id: 1,
      date: "25",
      month: "OCT",
      category: "News",
      title: "Team E-construct Meeting with Former Chief Minister of Karnataka",
      desc: "Team E-construct held a high-level meeting with the former Chief Minister of Karnataka to discuss...",
      img: "https://e-construct.in/wp-content/uploads/2025/12/honurable-moment2-1024x683.webp"
    },
    {
      id: 2,
      date: "18",
      month: "OCT",
      category: "Sustainability",
      title: "Eco-Friendly Concrete: The Future of Green Construction",
      desc: "Reducing carbon footprint in the construction industry using recycled materials and green cement...",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      date: "12",
      month: "OCT",
      category: "Safety",
      title: "Transforming a Barren Pond Area into a Construction Site",
      desc: "A barren pond area is being transformed into a functional construction site, showcasing efficient land...",
      img: "https://e-construct.in/wp-content/uploads/2025/03/IMG-20250311-WA0008.jpg"
    }
  ];

  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 pb-10">
    
       <div className=" py-8 md:py-12">

  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-0">

    {/* Left: Heading */}
    <div className="max-w-md">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-3 sm:mb-4"
      >
        <span className="w-10 sm:w-12 h-[2px] bg-amber-500"></span>
        <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs">
          Latest Updates
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-medium text-black leading-tight tracking-tight"
      >
        News & <span className="accent-text italic">Insights</span>
      </motion.h2>
    </div>

    {/* Right: CTA Button */}
    <div>
      <Link to="/pages/blog" className="bg-slate-900 text-white px-6 sm:px-8 py-3 sm:py-4 font-bold uppercase text-sm hover:bg-orange-600 transition-colors duration-300 flex items-center gap-2">
        View All News <span>→</span>
      </Link>
    </div>

  </div>
</div>
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {posts.map((post) => (
            <div key={post.id} className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              
              {/* Image Box */}
              <div className="relative h-40 sm:h-44 overflow-hidden">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[40%] group-hover:grayscale-0"
                />
                {/* Construction Date Badge */}
                <div className="absolute top-0 left-0 bg-orange-600 text-white px-2.5 py-1.5 text-center min-w-[48px]">
                  <span className="block text-base sm:text-lg font-black leading-none">{post.date}</span>
                  <span className="block text-[9px] font-bold uppercase">{post.month}</span>
                </div>
              </div>

              {/* Content Box */}
              <div className="p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-[2px] bg-orange-600"></div>
                    <span className="text-orange-600 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">{post.category}</span>
                </div>
                
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-orange-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-500 text-xs leading-relaxed mb-3.5 line-clamp-2">
                  {post.desc}
                </p>

                <Link to="/pages/blog" className="inline-flex items-center gap-1.5 font-bold text-[11px] uppercase tracking-wider border-b border-slate-900 pb-0.5 hover:text-orange-600 hover:border-orange-600 transition-all">
                  Read Full Article
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConstructionBlog;