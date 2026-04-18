import React from 'react';
import { motion } from "framer-motion";
import b1 from '../assets/b1.webp';
import b2 from '../assets/b2.webp';
import b3 from '../assets/b3.webp';
import b4 from '../assets/b4.webp';
import b5 from '../assets/b5.jpeg';
import b7 from '../assets/b7.jpg';

const OurBlogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Transforming a Barren Pond…",
      desc: "Transforming a Barren Pond Area",
      img: b1
    },
    {
      id: 2,
      title: "The Evolution of Modern-Day…",
      desc: "The Evolution of Modern-Day Construction:…",
      img: b2
    },
    {
      id: 3,
      title: "Why Buildings Crack and…",
      desc: "Cracks in buildings are a…",
      img: b3
    },
    {
      id: 4,
      title: "Top 10 Benefits of…",
      desc: "Top 10 Benefits of BIM…",
      img: b4
    },
    {
      id: 5,
      title: "The Kolkata Flyover Collapse…",
      desc: "The tragic collapse of the…",
      img: b5
    },
    {
      id: 6,
      title: "Building Collapses in India:…",
      desc: "Discover the causes of building…",
      img: b7
    },
    {
      id: 7,
      title: "Decline in vision for Temples of heritage : The Shift from Stone to Concrete in Modern Temple Construction",
      desc: "Old temple architecture is a testament to the ingenuity and artistry of ancient builders, characterized by intricate designs, towering gopurams,",
      img: "/b1_new.jpg"
    },
    {
      id: 8,
      title: "What’s wrong with the making process of a Civil Engineer?",
      desc: "Civil Engineering is a part of engineering that deals with mathematical and scientific knowledge to improve infrastructures.",
      img: "/b2_new.png"
    },
    {
      id: 9,
      title: "Tips to get a job as a Structural Engineer",
      desc: "As a fresher, it is always difficult as a Structural Engineer. Most companies out there prefer candidates who have experience",
      img: "/b3_new.png"
    }
  ];

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
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
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
                  Learn More ↗
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
