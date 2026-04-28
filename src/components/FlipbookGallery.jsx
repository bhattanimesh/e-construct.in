import React, { useRef, useState, useEffect } from 'react';
import PdfFlipbook from './PdfFlipbook';
import { useAdmin } from '../context/AdminContext';

const LazyFlipbook = ({ pdfUrl }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { rootMargin: '120px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full">
      {visible ? (
        <PdfFlipbook width={640} height={450} pdfUrl={pdfUrl} />
      ) : (
        <div className="w-full rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center" style={{ height: 380 }}>
          <span className="text-slate-300 text-xs font-semibold tracking-widest uppercase">Portfolio</span>
        </div>
      )}
    </div>
  );
};

const FlipbookGallery = () => {
  const { data } = useAdmin();
  const flipbooks = data.flipbooks || [];

  if (flipbooks.length === 0) return null;

  return (
    <section className="flipbook-gallery reveal bg-white py-14 md:py-20 border-b border-black/5 w-full px-4 text-[var(--primary-dark)]">
      {/* Header */}
      <div className="container text-center mb-10 md:mb-12 mx-auto">
        <span className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase">Interactive Library</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[var(--primary-dark)] mt-2 tracking-tight">
          Our Digital <span className="accent-text italic">Showcase</span>
        </h2>
        <p className="text-[var(--text-muted)] mt-3 max-w-2xl mx-auto text-sm">
          Explore our portfolio, brochures, and technical guides in one interactive place.
        </p>
      </div>

      {/* Grid */}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1500px] mx-auto">
        {flipbooks.map((fb) => (
          <div key={fb.id} className="flex flex-col items-center bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-3 pb-4">
            {/* Title */}
            <h3 className="text-[var(--primary-dark)] text-xs font-bold uppercase tracking-widest mb-3 text-center pt-1">
              {fb.title}
            </h3>
            {/* Flipbook */}
            <div className="w-full">
              <LazyFlipbook pdfUrl={fb.pdfUrl} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlipbookGallery;
