import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INSIGHTS_DATA } from '../../data/mockData';
import { InsightArticle } from '../../types';
import { BookOpen, ArrowUpRight, X } from 'lucide-react';

export const InsightsSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'GST', 'MCA', 'INCOME TAX', 'AUDIT', 'ADVISORY'];

  const filteredArticles = activeCategory === 'ALL'
    ? INSIGHTS_DATA
    : INSIGHTS_DATA.filter((a) => a.category === activeCategory);

  return (
    <section id="insights" className="relative w-full py-32 bg-[#071225] text-[#F5F8FF] border-t border-[rgba(70,150,220,0.18)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0A1629] border border-[rgba(70,150,220,0.18)] text-xs font-mono text-[#00D4FF] mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>REGULATORY DISPATCHES</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#F5F8FF] leading-tight">
              Insights for <br />
              <span className="text-gradient-cyan">executive decisions.</span>
            </h2>
          </div>

          {/* Category Switcher */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#1769FF] text-[#F5F8FF] font-semibold border border-[#00D4FF]/40 shadow-[0_0_15px_rgba(23,105,255,0.25)]'
                    : 'bg-[#0A1629] text-[#91A4BD] hover:text-[#F5F8FF] border border-[rgba(70,150,220,0.18)]'
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
              className="group p-7 rounded-xl bg-[#0A1629] border border-[rgba(70,150,220,0.18)] hover:border-[#00D4FF]/40 transition-all duration-300 hover:shadow-corporate-card hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-[#91A4BD] mb-4">
                  <span className="text-[#00D4FF] px-2 py-0.5 rounded bg-[#071225] border border-[rgba(70,150,220,0.22)] font-semibold">
                    {article.category}
                  </span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-base font-bold text-[#F5F8FF] group-hover:text-[#00D4FF] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="mt-3 text-xs text-[#91A4BD] leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[rgba(70,150,220,0.14)] flex items-center justify-between text-xs text-[#91A4BD]">
                <span>{article.date}</span>
                <span className="text-[#00D4FF] group-hover:translate-x-0.5 transition-transform font-medium flex items-center gap-1">
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
              className="absolute inset-0 bg-[#030817]/85 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl bg-[#0A1629] border border-[rgba(70,150,220,0.25)] rounded-xl shadow-2xl p-6 sm:p-10 overflow-hidden z-10 max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-lg bg-[#071225] hover:bg-[#0E1B33] text-[#91A4BD] hover:text-[#F5F8FF] border border-[rgba(70,150,220,0.18)]"
                aria-label="Close article"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 text-xs font-mono text-[#00D4FF] mb-3">
                <span className="px-2.5 py-0.5 rounded bg-[#071225] border border-[rgba(70,150,220,0.25)]">
                  {selectedArticle.category} BRIEFING
                </span>
                <span className="text-[#91A4BD]/40">•</span>
                <span className="text-[#91A4BD]">{selectedArticle.readTime}</span>
                <span className="text-[#91A4BD]/40">•</span>
                <span className="text-[#91A4BD]">{selectedArticle.date}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F8FF] tracking-tight leading-tight">
                {selectedArticle.title}
              </h2>

              <div className="mt-2 text-xs font-mono text-[#91A4BD]">
                Author: {selectedArticle.author}
              </div>

              <div className="mt-8 space-y-4 text-sm text-[#91A4BD] leading-relaxed border-t border-[rgba(70,150,220,0.18)] pt-6">
                {selectedArticle.content.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 p-4 rounded-lg bg-[#071225] border border-[rgba(70,150,220,0.18)] text-xs text-[#91A4BD] flex items-center justify-between">
                <span>Published by Ascent Advisors Research & Regulatory Intelligence Group.</span>
                <span className="font-mono text-[#00D4FF]">REF: ASC-2026-REG</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
