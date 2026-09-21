import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INSIGHTS_DATA } from '../../data/mockData';
import { InsightArticle } from '../../types';
import { BookOpen, ArrowUpRight, Clock, Calendar, X, FileText } from 'lucide-react';

export const InsightsSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'GST', 'MCA', 'INCOME TAX', 'AUDIT', 'ADVISORY'];

  const filteredArticles = activeCategory === 'ALL'
    ? INSIGHTS_DATA
    : INSIGHTS_DATA.filter((a) => a.category === activeCategory);

  return (
    <section id="insights" className="relative w-full py-32 bg-[#07090C] text-white border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#00D6FF] mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>REGULATORY DISPATCHES</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Insights for <br />
              <span className="text-gradient-cyan">better decisions.</span>
            </h2>
          </div>

          {/* Category Switcher */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-colors ${
                  activeCategory === cat
                    ? 'bg-white text-black font-semibold'
                    : 'bg-white/[0.03] text-white/50 hover:text-white border border-white/[0.06]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              onClick={() => setSelectedArticle(article)}
              className="group p-8 rounded-2xl bg-[#0A0D12]/70 border border-white/[0.08] hover:border-[#00D6FF]/40 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-white/40 mb-4">
                  <span className="text-[#00D6FF] px-2 py-0.5 rounded bg-[#0050FF]/15 border border-[#0050FF]/30 font-semibold">
                    {article.category}
                  </span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#00D6FF] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="mt-3 text-xs text-white/60 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-white/40">
                <span>{article.date}</span>
                <span className="text-[#00D6FF] group-hover:translate-x-0.5 transition-transform font-medium flex items-center gap-1">
                  Read Briefing <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Editorial Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl bg-[#0A0D12] border border-white/[0.12] rounded-2xl shadow-2xl p-6 sm:p-10 overflow-hidden z-10 max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white/60 hover:text-white"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 text-xs font-mono text-[#00D6FF] mb-3">
                <span className="px-2 py-0.5 rounded bg-[#0050FF]/20 border border-[#0050FF]/40">
                  {selectedArticle.category} BRIEFING
                </span>
                <span className="text-white/30">•</span>
                <span className="text-white/50">{selectedArticle.readTime}</span>
                <span className="text-white/30">•</span>
                <span className="text-white/50">{selectedArticle.date}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                {selectedArticle.title}
              </h2>

              <div className="mt-2 text-xs font-mono text-white/40">
                Author: {selectedArticle.author}
              </div>

              <div className="mt-8 space-y-4 text-sm sm:text-base text-white/70 leading-relaxed border-t border-white/[0.08] pt-6">
                {selectedArticle.content.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-white/50 flex items-center justify-between">
                <span>Published by Ascent Advisors Research & Regulatory Intelligence Group.</span>
                <span className="font-mono text-[#00D6FF]">REF: ASC-2026-REG</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
