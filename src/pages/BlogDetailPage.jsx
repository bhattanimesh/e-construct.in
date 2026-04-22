import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';
import { ArrowLeft, Calendar, User, Tag, Clock, Share2, ChevronRight } from 'lucide-react';

// ─── SIMPLE MARKDOWN RENDERER ─────────────────────────────────────────────────
// Handles: **bold**, *italic*, headings (#), numbered lists, bullet lists, blank-line paragraphs

const renderContent = (text) => {
  if (!text) return null;

  const lines = text.split('\n');
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Blank line — skip
    if (line.trim() === '') { i++; continue; }

    // Heading ##
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold text-slate-900 mt-8 mb-3">
          {inlineFormat(line.slice(3))}
        </h2>
      );
      i++; continue;
    }

    // Heading ###
    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="text-xl font-bold text-slate-900 mt-6 mb-2">
          {inlineFormat(line.slice(4))}
        </h3>
      );
      i++; continue;
    }

    // Heading #
    if (line.startsWith('# ')) {
      elements.push(
        <h1 key={i} className="text-3xl font-bold text-slate-900 mt-8 mb-4">
          {inlineFormat(line.slice(2))}
        </h1>
      );
      i++; continue;
    }

    // Numbered list — collect consecutive numbered lines
    if (/^\d+\.\s/.test(line)) {
      const items = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(<li key={i} className="mb-1">{inlineFormat(lines[i].replace(/^\d+\.\s/, ''))}</li>);
        i++;
      }
      elements.push(<ol key={`ol-${i}`} className="list-decimal list-outside ml-6 my-4 space-y-1 text-gray-700 leading-relaxed">{items}</ol>);
      continue;
    }

    // Bullet list — collect consecutive bullet lines
    if (/^[-*]\s/.test(line)) {
      const items = [];
      while (i < lines.length && /^[-*]\s/.test(lines[i])) {
        items.push(<li key={i} className="mb-1">{inlineFormat(lines[i].replace(/^[-*]\s/, ''))}</li>);
        i++;
      }
      elements.push(<ul key={`ul-${i}`} className="list-disc list-outside ml-6 my-4 space-y-1 text-gray-700 leading-relaxed">{items}</ul>);
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={i} className="text-gray-700 leading-relaxed mb-4 text-base">
        {inlineFormat(line)}
      </p>
    );
    i++;
  }

  return elements;
};

// Inline formatting: **bold**, *italic*
const inlineFormat = (text) => {
  const parts = [];
  const regex = /(\*\*(.+?)\*\*|\*(.+?)\*)/g;
  let last = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    if (match[0].startsWith('**')) {
      parts.push(<strong key={key++} className="font-bold text-slate-900">{match[2]}</strong>);
    } else {
      parts.push(<em key={key++} className="italic">{match[3]}</em>);
    }
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.length > 0 ? parts : text;
};

// ─── BLOG DETAIL PAGE ─────────────────────────────────────────────────────────

const BlogDetailPage = () => {
  const { slug } = useParams();
  const { data } = useAdmin();

  const blog = useMemo(() =>
    data.blogs.find(b => b.slug === slug && b.published !== false),
    [data.blogs, slug]
  );

  const related = useMemo(() =>
    data.blogs
      .filter(b => b.id !== blog?.id && b.published !== false && b.slug && b.category === blog?.category)
      .slice(0, 3),
    [data.blogs, blog]
  );

  const readTime = useMemo(() =>
    blog?.content ? Math.max(1, Math.ceil(blog.content.split(/\s+/).filter(Boolean).length / 200)) : null,
    [blog]
  );

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: blog.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (!blog) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 mt-20">
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Article Not Found</h1>
        <p className="text-gray-500 mb-6">This blog post doesn't exist or has been unpublished.</p>
        <Link to="/pages/blog"
          className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-slate-900 hover:text-white text-black font-bold px-6 py-3 rounded-xl transition-all">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
      </div>
    );
  }

  const tags = Array.isArray(blog.tags) ? blog.tags : (blog.tags ? blog.tags.split(',').map(t => t.trim()) : []);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative w-full h-[55vh] min-h-[420px] flex items-end overflow-hidden mt-20">
        {blog.img ? (
          <img src={blog.img} alt={blog.title} className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 bg-slate-800" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pb-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-white/60 text-xs mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/pages/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight size={12} />
            <span className="text-white/80 truncate max-w-[200px]">{blog.title}</span>
          </nav>
          {blog.category && (
            <span className="inline-block bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full mb-3">
              {blog.category}
            </span>
          )}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
            {blog.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm">
            {blog.author && (
              <span className="flex items-center gap-1.5">
                <User size={14} className="text-yellow-400" />
                {blog.author}
              </span>
            )}
            {blog.date && (
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-yellow-400" />
                {new Date(blog.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
            )}
            {readTime && (
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-yellow-400" />
                {readTime} min read
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Article body */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main content */}
          <article className="flex-1 min-w-0">
            {blog.desc && (
              <p className="text-lg text-gray-600 leading-relaxed mb-8 pb-8 border-b border-gray-100 font-medium italic">
                {blog.desc}
              </p>
            )}

            {blog.content ? (
              <div className="prose-content">
                {renderContent(blog.content)}
              </div>
            ) : (
              <p className="text-gray-400 italic">No content available for this article.</p>
            )}

            {/* Tags */}
            {tags.length > 0 && (
              <div className="mt-10 pt-6 border-t border-gray-100 flex flex-wrap items-center gap-2">
                <Tag size={14} className="text-gray-400" />
                {tags.map(tag => (
                  <span key={tag} className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Share + Back */}
            <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
              <Link to="/pages/blog"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-yellow-600 transition-colors">
                <ArrowLeft size={16} /> Back to Blog
              </Link>
              <button onClick={handleShare}
                className="inline-flex items-center gap-2 bg-gray-100 hover:bg-yellow-500 hover:text-black text-gray-700 font-bold text-sm px-4 py-2 rounded-xl transition-all">
                <Share2 size={14} /> Share Article
              </button>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="sticky top-28 space-y-6">
              {/* Author card */}
              {blog.author && (
                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Written by</h4>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                      {blog.author.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{blog.author}</p>
                      <p className="text-xs text-gray-500">E-Construct Team</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Related posts */}
              {related.length > 0 && (
                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Related Articles</h4>
                  <div className="space-y-4">
                    {related.map(r => (
                      <Link key={r.id} to={`/pages/blog/${r.slug}`}
                        className="flex gap-3 group">
                        <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-gray-200">
                          {r.img && <img src={r.img} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-slate-900 group-hover:text-yellow-600 transition-colors line-clamp-2 leading-snug">
                            {r.title}
                          </p>
                          {r.date && (
                            <p className="text-xs text-gray-400 mt-1">
                              {new Date(r.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                            </p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="bg-slate-900 rounded-2xl p-5 text-white">
                <h4 className="font-bold text-base mb-2">Have a project in mind?</h4>
                <p className="text-gray-400 text-xs mb-4 leading-relaxed">Our team of experts is ready to help you build something exceptional.</p>
                <Link to="/contact"
                  className="block text-center bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-sm px-4 py-2.5 rounded-xl transition-all">
                  Get in Touch
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* More articles */}
      {data.blogs.filter(b => b.id !== blog.id && b.published !== false && b.slug).length > 0 && (
        <section className="bg-gray-50 border-t border-gray-100 py-14">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">More Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.blogs
                .filter(b => b.id !== blog.id && b.published !== false && b.slug)
                .slice(0, 3)
                .map(b => (
                  <Link key={b.id} to={`/pages/blog/${b.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
                    <div className="h-48 overflow-hidden bg-gray-100">
                      {b.img && <img src={b.img} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />}
                    </div>
                    <div className="p-5">
                      {b.category && (
                        <span className="text-[10px] bg-yellow-100 text-yellow-700 font-bold px-2 py-0.5 rounded-full">{b.category}</span>
                      )}
                      <h3 className="font-bold text-slate-900 mt-2 mb-1 group-hover:text-yellow-600 transition-colors line-clamp-2">{b.title}</h3>
                      <p className="text-gray-500 text-xs line-clamp-2">{b.desc}</p>
                      <p className="text-yellow-600 font-bold text-xs mt-3 flex items-center gap-1">
                        Read More <ChevronRight size={12} />
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogDetailPage;
