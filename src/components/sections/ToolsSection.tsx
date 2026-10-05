import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const APP = 'https://app.aca-ca.com';

const TOOLS = [
  {
    href: `${APP}/tools/gst-health-checkup`,
    tag: 'New · Free', tagBg: '#ECFDF5', tagFg: '#047857', check: '#10B981', btn: 'linear-gradient(135deg,#1E3A8A,#2563EB)',
    title: 'GST Health Checkup',
    text: 'Score your GST year in minutes — GSTR-1, GSTR-3B and GSTR-2B reconciled, optionally against your books, in one client-ready PDF report.',
    points: ['GSTR-1 vs 3B, ITC vs 2B, Table 6.1', 'Books upload with B2B / B2C template', 'Scored report with an action plan'],
    cta: 'Start health checkup',
  },
  {
    href: `${APP}/msme-verifier`,
    tag: 'Live · Udyam linked', tagBg: '#E0F2FE', tagFg: '#0369A1', check: '#0D9488', btn: 'linear-gradient(135deg,#0F766E,#10B981)',
    title: 'MSME & Section 43B(h) Verifier',
    text: 'Verify Udyam numbers with the government portal, work out 43B(h) payment timelines, and keep certificates for tax-audit working papers.',
    points: ['Live Udyam verification', 'Form 3CD Clause 22 disallowance', 'Bulk screener & certificate vault'],
    cta: 'Open MSME verifier',
  },
  {
    href: `${APP}/tools/supplier-check`,
    tag: 'New · Free', tagBg: '#EDE9FE', tagFg: '#6D28D9', check: '#7C3AED', btn: 'linear-gradient(135deg,#6D28D9,#2563EB)',
    title: 'Supplier Compliance Check',
    text: 'Find the suppliers who put your input tax credit at risk — invoices missing from GSTR-2B, late reporting, blocked credit — with a ready follow-up message for each.',
    points: ['Supplier-wise risk from GSTR-2B', 'Purchase register vs 2B', 'Follow-up message + Excel'],
    cta: 'Check my suppliers',
  },
];

/* Free tools hosted on app.aca-ca.com — one card each, linking out. */
export const ToolsSection: React.FC = () => (
  <section id="tools" className="relative py-24 sm:py-28">
    <div className="max-w-7xl mx-auto px-6 sm:px-8">
      <div className="max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-mono tracking-[0.2em] uppercase bg-[#E0F2FE] text-[#0369A1] border border-[#BAE6FD]">
          Free practice tools
        </span>
        <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-[-0.035em] leading-[1.08] text-[#0F172A]">
          Tools that do the <span className="text-gradient-blue">heavy lifting</span>.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
          Your files are read in your browser — nothing to install, no login needed.
        </p>
      </div>

      <div className="mt-12 grid gap-7 lg:grid-cols-3">
        {TOOLS.map(t => (
          <a key={t.href} href={t.href} className="tool-card group relative flex flex-col rounded-3xl bg-white p-7 sm:p-9 border border-[#E2E8F0] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05),0_4px_6px_-2px_rgba(0,0,0,0.02)] transition-all duration-500 hover:-translate-y-1 hover:border-[#CBD5E1] hover:shadow-[0_24px_48px_-18px_rgba(15,23,42,0.16)]">
            <span className="self-start rounded-full px-3 py-1 text-[11px] font-mono tracking-[0.14em] uppercase" style={{ background: t.tagBg, color: t.tagFg }}>{t.tag}</span>
            <h3 className="mt-5 text-2xl sm:text-3xl font-extrabold tracking-[-0.03em] text-[#0F172A]">{t.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[#475569]">{t.text}</p>
            <ul className="mt-6 grid gap-2.5">
              {t.points.map(p => (
                <li key={p} className="flex items-center gap-3 text-sm text-[#334155]">
                  <span className="h-5 w-5 rounded-full grid place-items-center shrink-0" style={{ background: t.check }}>
                    <svg viewBox="0 0 16 16" className="w-3 h-3"><path d="M3.5 8.5l3 3 6-7" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>{p}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8 flex items-center justify-between">
              <span className="text-base font-semibold text-[#0F172A]">{t.cta}</span>
              <span className="relative h-14 w-14 rounded-full grid place-items-center text-white overflow-hidden shadow-md" style={{ background: t.btn }}>
                <ArrowUpRight className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-[140%] group-hover:-translate-y-[140%]" />
                <ArrowUpRight className="absolute w-6 h-6 -translate-x-[140%] translate-y-[140%] transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);
