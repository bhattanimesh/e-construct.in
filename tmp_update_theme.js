const fs = require('fs');
const path = require('path');

const files = [
  'VideoGallery.jsx',
  'Projects.jsx',
  'ProcessSection.jsx',
  'OurServices.jsx',
  'OurGallery.tsx',
  'NewsAndBlog.jsx',
  'FoundersSection.jsx',
  'FlipbookGallery.jsx',
  'About.jsx'
];

const basePath = path.join(__dirname, 'src/components');

files.forEach(file => {
  const filePath = path.join(basePath, file);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // Replace background
  content = content.replace(/bg-\[#0a0a0a\]/g, 'bg-slate-50');

  // Carefully replace text-white on headings and paragraphs, but not necessarily everywhere.
  // Actually, replacing text-white with text-slate-900 for typical h2, h3, p, span might be needed.
  // Let's do selective regex:
  
  content = content.replace(/text-white(?! hover:)/g, 'text-slate-900');
  
  // Oh wait, some buttons or badges might use text-white which we want to keep.
  // E.g., `text-white` on a project overlay: `<h4 className="text-3xl font-bold text-white mb-3">`
  // That text is over an image, so it SHOULD stay white!
});
