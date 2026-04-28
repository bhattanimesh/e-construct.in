/**
 * SectionHeading
 *
 * Renders a section title where all words are dark and the last word
 * is in the gold italic accent font — matching the "Our Digital Showcase" style.
 *
 * Props:
 *   title   {string}  — full heading text, e.g. "What We Do"
 *   label   {string}  — optional small yellow label above the heading
 *   center  {boolean} — center-align (default true)
 *   light   {boolean} — use white text instead of dark (for dark backgrounds)
 *   className {string} — extra classes on the <h2>
 */
import React from 'react';

const SectionHeading = ({ title = '', label = '', center = true, light = false, className = '' }) => {
  const words = title.trim().split(' ');
  const body = words.slice(0, -1).join(' ');
  const accent = words[words.length - 1];

  return (
    <div className={center ? 'text-center' : ''}>
      {label && (
        <div className={`flex items-center gap-3 mb-3 ${center ? 'justify-center' : ''}`}>
          <span className="w-10 h-[2px] bg-[#fbc02d]" />
          <span className="text-[#fbc02d] text-xs font-bold tracking-[0.2em] uppercase">{label}</span>
          <span className="w-10 h-[2px] bg-[#fbc02d]" />
        </div>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight ${
          light ? 'text-white' : 'text-gray-900'
        } ${className}`}
      >
        {body && <>{body} </>}
        <span className="accent-text italic">{accent}</span>
      </h2>
    </div>
  );
};

export default SectionHeading;
