import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';

// ─── SEARCH INDEX ─────────────────────────────────────────────────────────────
const searchIndex = [
  // Main pages
  { title: 'Home', description: 'Welcome to Econstruct Design and Build', path: '/', tags: ['home', 'econstruct', 'main'] },
  { title: 'About Us', description: 'Learn about our company, mission, vision, and team', path: '/about', tags: ['about', 'team', 'mission', 'vision', 'values', 'founder', 'sandeep pingale'] },
  { title: 'Projects', description: 'Explore our portfolio of completed projects', path: '/projects', tags: ['projects', 'portfolio', 'residential', 'commercial', 'infrastructure'] },
  { title: 'Careers', description: 'Join our team — open positions and opportunities', path: '/careers', tags: ['careers', 'jobs', 'hiring', 'opportunities', 'work'] },
  { title: 'Contact', description: 'Get in touch with our team', path: '/contact', tags: ['contact', 'email', 'phone', 'reach', 'inquiry'] },

  // Services
  { title: 'Services', description: 'All civil engineering and consultancy services', path: '/services', tags: ['services', 'civil', 'engineering', 'consultancy'] },
  { title: 'BIM Consultancy', description: 'Building Information Modelling consultancy and implementation', path: '/services/bim-consultancy', tags: ['bim', 'building information modelling', 'clash detection', 'coordination', 'consultancy'] },
  { title: 'Structural Consultancy', description: 'Structural design, audit, and engineering services', path: '/services/structural-consultancy', tags: ['structural', 'design', 'audit', 'engineering', 'consultancy'] },
  { title: 'Project Management (ePMC)', description: 'End-to-end project management consultancy', path: '/services', tags: ['project management', 'epmc', 'construction management'] },
  { title: 'Architectural Consultancy', description: 'Concept, schematic, detailed design and execution drawings', path: '/services', tags: ['architecture', 'architectural', 'design', 'concept', 'schematic', 'drawings'] },
  { title: 'Luxury Villa Design & Build', description: 'Design and build services for luxury villas', path: '/services', tags: ['villa', 'luxury', 'residential', 'design build'] },
  { title: 'Construction Services', description: 'Full construction and build services', path: '/services', tags: ['construction', 'build', 'contractor'] },
  { title: 'Total Quality Management', description: 'Quality assurance and management services', path: '/services', tags: ['quality', 'tqm', 'management', 'assurance'] },
  { title: 'Interior Design Consultancy', description: 'Interior design and space planning services', path: '/services', tags: ['interior', 'design', 'space', 'decor'] },

  // Pages
  { title: 'Gallery', description: 'Gallery of BIM models and project visuals', path: '/pages/gallery', tags: ['gallery', 'bim', 'images', 'models', 'visuals'] },
  { title: 'Blog', description: 'Articles and insights on BIM and AEC industry', path: '/pages/blog', tags: ['blog', 'articles', 'bim', 'aec', 'insights', 'news'] },
  { title: 'MSB', description: 'Master in Smart Building resources and content', path: '/pages/msb', tags: ['msb', 'smart building', 'master', 'training'] },
  { title: 'MSC', description: 'Master in Smart Construction content', path: '/pages/msc', tags: ['msc', 'smart construction', 'master'] },
  { title: 'MSS', description: 'Master in Smart Structures content', path: '/pages/mss', tags: ['mss', 'smart structures', 'master'] },
  { title: 'PBD', description: 'Performance Based Design resources', path: '/pages/pbd', tags: ['pbd', 'performance based design', 'structural'] },

  // Training
  { title: 'Training', description: 'Corporate on-job BIM and AEC software training', path: '/training', tags: ['training', 'corporate', 'bim', 'software', 'aec', 'course', 'learn'] },
  { title: 'BIM Certification', description: 'Industry-recognized BIM certification training courses', path: '/pages/msb', tags: ['bim', 'certification', 'training', 'msb', 'courses'] },

  // Company info
  { title: 'Our Team', description: 'Meet our architects, engineers, and BIM specialists', path: '/about', tags: ['team', 'architects', 'engineers', 'staff', 'people'] },
  { title: 'Founder — Prof. Sandeep Pingale', description: 'Founder & Managing Director with 20+ years in Civil Engineering', path: '/about', tags: ['founder', 'sandeep pingale', 'managing director', 'leadership'] },
];

// ─── FUZZY MATCH ──────────────────────────────────────────────────────────────
function fuzzyScore(text, query) {
  const t = text.toLowerCase();
  const q = query.toLowerCase().trim();
  if (!q) return 0;

  // Exact match gets highest score
  if (t === q) return 100;
  if (t.startsWith(q)) return 90;
  if (t.includes(q)) return 70;

  // Fuzzy: all query chars appear in order
  let qi = 0;
  let score = 0;
  let consecutive = 0;
  for (let i = 0; i < t.length && qi < q.length; i++) {
    if (t[i] === q[qi]) {
      qi++;
      consecutive++;
      score += consecutive * 2;
    } else {
      consecutive = 0;
    }
  }
  if (qi < q.length) return 0; // not all chars matched
  return Math.min(score, 60);
}

function searchItems(query) {
  if (!query.trim()) return [];
  const results = searchIndex.map((item) => {
    const titleScore = fuzzyScore(item.title, query) * 3;
    const descScore = fuzzyScore(item.description, query) * 1.5;
    const tagScore = Math.max(...item.tags.map((t) => fuzzyScore(t, query))) * 2;
    const total = Math.max(titleScore, descScore, tagScore);
    return { ...item, score: total };
  });
  return results
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);
}

// ─── HIGHLIGHT ────────────────────────────────────────────────────────────────
function Highlight({ text, query }) {
  if (!query) return <span>{text}</span>;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return <span>{text}</span>;
  return (
    <span>
      {text.slice(0, idx)}
      <mark className="bg-yellow-200 text-yellow-900 rounded px-0.5">{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </span>
  );
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────
const SearchBar = ({ isScrolled }) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  // Run search on query change
  useEffect(() => {
    setResults(searchItems(query));
    setActiveIndex(-1);
  }, [query]);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [open]);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, -1));
    } else if (e.key === 'Enter') {
      if (activeIndex >= 0 && results[activeIndex]) {
        navigate(results[activeIndex].path);
        setOpen(false);
      }
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  }, [results, activeIndex, navigate]);

  const handleSelect = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Search trigger button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open search"
        className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 hover:border-yellow-500 hover:text-yellow-500 hover:bg-black/5
          ${isScrolled ? 'border-gray-200 text-gray-900' : 'border-white/20 text-white'}
          ${open ? (isScrolled ? 'border-yellow-500 text-yellow-500' : 'border-yellow-400 text-yellow-400') : ''}
        `}
      >
        <Search size={16} />
      </button>

      {/* Dropdown panel */}
      {open && (
        <div className="absolute right-0 top-full mt-3 w-[360px] bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden z-[2000]">
          {/* Input */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
            <Search size={16} className="text-gray-400 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search pages, services, topics…"
              className="flex-1 text-sm text-gray-800 placeholder-gray-400 outline-none bg-transparent"
            />
            {query && (
              <button onClick={() => setQuery('')} className="text-gray-400 hover:text-gray-600 transition-colors">
                <X size={14} />
              </button>
            )}
          </div>

          {/* Results */}
          {query && (
            <div className="max-h-[360px] overflow-y-auto">
              {results.length > 0 ? (
                <ul>
                  {results.map((item, i) => (
                    <li key={item.path + item.title}>
                      <button
                        onClick={() => handleSelect(item.path)}
                        onMouseEnter={() => setActiveIndex(i)}
                        className={`w-full text-left px-4 py-3 flex items-start gap-3 transition-colors duration-150 group
                          ${activeIndex === i ? 'bg-yellow-50' : 'hover:bg-gray-50'}
                        `}
                      >
                        <div className="mt-0.5 w-7 h-7 rounded-lg bg-yellow-100 flex items-center justify-center shrink-0">
                          <ArrowRight size={13} className="text-yellow-600" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-bold text-gray-900 leading-tight">
                            <Highlight text={item.title} query={query} />
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5 leading-snug truncate">
                            <Highlight text={item.description} query={query} />
                          </p>
                          <p className="text-[10px] text-yellow-600 font-medium mt-1">{item.path}</p>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="px-4 py-8 text-center">
                  <p className="text-sm text-gray-400">No results for "<span className="text-gray-600 font-medium">{query}</span>"</p>
                  <p className="text-xs text-gray-400 mt-1">Try a different keyword</p>
                </div>
              )}
            </div>
          )}

          {/* Empty state hint */}
          {!query && (
            <div className="px-4 py-5">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Quick Links</p>
              <div className="flex flex-wrap gap-2">
                {['BIM Consultancy', 'Projects', 'About Us', 'Training', 'Contact'].map((hint) => (
                  <button
                    key={hint}
                    onClick={() => setQuery(hint)}
                    className="text-xs bg-gray-100 hover:bg-yellow-100 hover:text-yellow-700 text-gray-600 px-3 py-1.5 rounded-full transition-colors font-medium"
                  >
                    {hint}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export { searchItems };

// ─── MOBILE SEARCH ────────────────────────────────────────────────────────────
export const MobileSearch = ({ onNavigate }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setResults(searchItems(query));
  }, [query]);

  const handleSelect = (path) => {
    navigate(path);
    onNavigate?.();
    setQuery('');
  };

  return (
    <div>
      <div className="flex items-center gap-2 bg-gray-100 rounded-xl px-3 py-2">
        <Search size={15} className="text-gray-400 shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search pages, services…"
          className="flex-1 text-sm text-gray-800 placeholder-gray-400 outline-none bg-transparent"
        />
        {query && (
          <button onClick={() => setQuery('')} className="text-gray-400">
            <X size={13} />
          </button>
        )}
      </div>
      {query && results.length > 0 && (
        <ul className="mt-2 space-y-1">
          {results.slice(0, 5).map((item) => (
            <li key={item.path + item.title}>
              <button
                onClick={() => handleSelect(item.path)}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-yellow-50 transition-colors"
              >
                <p className="text-sm font-bold text-gray-900">{item.title}</p>
                <p className="text-xs text-gray-500 truncate">{item.description}</p>
              </button>
            </li>
          ))}
        </ul>
      )}
      {query && results.length === 0 && (
        <p className="text-xs text-gray-400 mt-2 px-1">No results found</p>
      )}
    </div>
  );
};

export default SearchBar;
