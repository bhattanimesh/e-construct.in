

import React from "react";
import { motion } from "framer-motion";

// 👉 STEP 1: Put your own images here
const galleryImages = [
  { id: 1, src: "https://e-construct.in/wp-content/uploads/2022/02/WhatsApp-Image-2022-01-24-at-19.38.39-2.jpeg", alt: "Wedding moment" },
  { id: 2, src: "https://e-construct.in/wp-content/uploads/2022/02/X-CM-2-1.jpg", alt: "Event highlight" },
  { id: 3, src: "https://e-construct.in/wp-content/uploads/2021/07/classroom2-min.jpg", alt: "Decoration setup" },
  { id: 4, src: "https://e-construct.in/wp-content/uploads/2022/02/X-CM-2-1.jpg", alt: "Stage view" },
  { id: 5, src: "https://e-construct.in/wp-content/uploads/2021/12/41.jpg", alt: "Guests enjoying" },
  { id: 6, src: "https://e-construct.in/wp-content/uploads/2021/07/classroom5-min.jpg", alt: "Close-up moment" },
  { id: 7, src: "https://e-construct.in/wp-content/uploads/2021/12/18.jpg", alt: "Lighting setup" },
  { id: 8, src: "https://e-construct.in/wp-content/uploads/2021/12/106524842_2909553979271777_2347980788158455249_n.jpg", alt: "Candid shot" },
  { id: 9, src: "https://e-construct.in/wp-content/uploads/2025/02/gallery7.jpg", alt: "Dance moment" },
  { id: 10, src: "https://e-construct.in/wp-content/uploads/2026/02/event6_11zon.webp", alt: "Venue look" },
  { id: 11, src: "https://e-construct.in/wp-content/uploads/2026/02/event5_11zon.webp", alt: "Food setup" },
  { id: 12, src: "https://e-construct.in/wp-content/uploads/2026/02/event4_11zon.webp", alt: "Group photo" },
  { id: 13, src: "https://e-construct.in/wp-content/uploads/2026/02/event-3_11zon.webp", alt: "Night view" },
  { id: 14, src: "https://e-construct.in/wp-content/uploads/2026/02/event2_11zon.webp", alt: "Entry moment" },
  { id: 15, src: "https://e-construct.in/wp-content/uploads/2026/02/event1_11zon.webp", alt: "Final shot" },
];

const OurGallery = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 py-10">
      
      {/* 🔥 Heading */}
     <div className="max-w-3xl mb-8 sm:mb-10 md:mb-12">
  
  {/* 🔥 Top Label */}
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4"
  >
    <span className="w-8 sm:w-10 md:w-12 h-[2px] bg-amber-500"></span>
    
    <span className="
      text-amber-600 
      font-semibold 
      uppercase 
      tracking-[0.2em] 
      text-[9px] 
      sm:text-xs 
      md:text-sm
    ">
      Captured Memories
    </span>
  </motion.div>

  {/* 🔥 Main Heading */}
  <motion.h2 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="
      text-2xl 
      sm:text-3xl 
      md:text-4xl 
      lg:text-5xl 
      xl:text-6xl
      font-black 
      text-black 
      leading-tight 
      uppercase 
      tracking-tight
    "
  >
    Our{" "}
    <span 
      className="text-transparent"
      style={{ WebkitTextStroke: '1px #1e293b' }}
    >
      Gallery
    </span>
  </motion.h2>

</div>
      {/* 🖼️ Gallery Grid */}
      <div className="grid grid-cols-3 grid-rows-5 lg:grid-cols-5 lg:grid-rows-3 md:gap-4 gap-1">
        {galleryImages.map((img) => (
          <motion.div
            key={img.id}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-xl border bg-black group cursor-pointer"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover aspect-video transition duration-500 group-hover:scale-110 group-hover:opacity-80"
            />

            {/* Optional overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500" />
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default OurGallery;