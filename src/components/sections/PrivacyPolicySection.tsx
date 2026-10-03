

import React, { useState, useMemo } from 'react';

import {
  ShieldCheck,
  Building2,
  Lock,
  FileText,
  Scale,
  CheckCircle2,
  AlertTriangle,
  Mail,
  Phone,
  MapPin,
  Search,
  Printer,
  ChevronRight,
  ExternalLink,
  Clock,
  Database,
  ArrowRight,
  Shield,
  HelpCircle,
  Eye,
  Key,
  Globe,
  Share2,
  UserCheck,
  Zap,
  X,
  Send,
  Download
} from 'lucide-react';

interface ClauseSection {
  id: string;
  number: string;
  category: 'general' | 'collection' | 'purpose' | 'confidentiality' | 'security' | 'retention' | 'rights' | 'grievance';
  title: string;
  shortDesc: string;
  content: React.ReactNode;
}

export const PrivacyPolicySection: React.FC<{ onBackToHome: () => void; onOpenAdvisor?: () => void }> = ({ onBackToHome, onOpenAdvisor }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeSectionId, setActiveSectionId] = useState<string>('section-1');
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquirySubject, setInquirySubject] = useState('Data Principal Access / Correction Request');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  const categories = [
    { id: 'all', label: 'All Clauses' },
    { id: 'collection', label: 'Data We Collect' },
    { id: 'confidentiality', label: 'ICAI Ethics & Privilege' },
    { id: 'security', label: 'Security & Hosting' },
    { id: 'rights', label: 'DPDPA 2023 Rights' },
    { id: 'grievance', label: 'Grievance Officer' }
  ];

  const clauses: ClauseSection[] = useMemo(() => [
    {
      id: 'section-1',
      number: '01',
      category: 'general',
      title: 'Preamble, Scope & Identity of Data Fiduciary',
      shortDesc: 'Operating entities, coverage across www.aca-ca.com, and definition of terms.',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-[#64748B] leading-relaxed">
          <p>
            This Privacy & Data Protection Policy (&quot;Policy&quot;) governs the privacy, confidentiality, and data processing practices of the website{' '}
            <strong className="text-[#2563EB]">www.aca-ca.com</strong> and all associated sub-domains, client self-service portals, MSME verification utilities, and secure document vaults.
          </p>
          <p>
            The digital infrastructure at <strong className="text-[#0F172A]">www.aca-ca.com</strong> is operated collaboratively by:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-3.5 rounded-lg bg-white border border-[#E2E8F0]">
              <div className="text-[#2563EB] font-bold text-xs uppercase tracking-wider mb-1">Chartered Accountancy Wing</div>
              <div className="text-[#0F172A] font-semibold text-sm">AJAY CHAURASIYA & ASSOCIATES</div>
              <div className="text-[11px] text-[#64748B] mt-1">
                Chartered Accountants &middot; Firm Reg. No: ACA-CA &middot; ICAI Peer-Reviewed Practice
              </div>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#E2E8F0]">
              <div className="text-[#059669] font-bold text-xs uppercase tracking-wider mb-1">Corporate Advisory Wing</div>
              <div className="text-[#0F172A] font-semibold text-sm">ASCENT ADVISORS LLP</div>
              <div className="text-[11px] text-[#64748B] mt-1">
                LLPIN: AABFA4412K &middot; Management Consulting, Virtual CFO & Business Valuation Practice
              </div>
            </div>
          </div>
          <p>
            Throughout this policy, references to <strong className="text-[#0F172A]">&quot;Firm&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;</strong> denote Ajay Chaurasiya & Associates and/or Ascent Advisors LLP acting as Data Fiduciaries under Indian law. References to <strong className="text-[#0F172A]">&quot;Client&quot;, &quot;User&quot;, &quot;Data Principal&quot;, or &quot;you&quot;</strong> encompass corporate entities, LLPs, partnership firms, proprietors, their authorized signatories, employees, and any visitor accessing our services or digital tools.
          </p>
          <div className="p-3 rounded-lg bg-[#1769FF]/10 border border-[#1769FF]/30 text-[11px] text-[#0F172A] flex items-start space-x-2.5">
            <ShieldCheck className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
            <span>
              By accessing www.aca-ca.com, engaging our professional services, uploading financial records, or using our compliance tools, you acknowledge and accept the data handling practices described in this document.
            </span>
          </div>
        </div>
      )
    },
    {
      id: 'section-2',
      number: '02',
      category: 'general',
      title: 'Legislative & Regulatory Compliance Architecture',
      shortDesc: 'Compliance under DPDPA 2023, IT Act 2000, and ICAI Code of Ethics.',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-[#64748B] leading-relaxed">
          <p>
            We adhere to the highest statutory benchmarks established by Indian law, statutory tax authorities, and chartered accountancy regulatory bodies:
          </p>
          <div className="space-y-2.5">
            <div className="flex items-start space-x-3 p-3 rounded-lg bg-white/60 border border-[#E2E8F0]">
              <Scale className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#0F172A] text-xs sm:text-sm">Digital Personal Data Protection Act, 2023 (DPDPA 2023):</strong>
                <p className="text-[11px] sm:text-xs text-[#64748B] mt-0.5">
                  Governing lawful grounds of processing, data minimization, specified purpose limitations, data principal rights, and mandatory grievance redressal frameworks.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 rounded-lg bg-white/60 border border-[#E2E8F0]">
              <Lock className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#0F172A] text-xs sm:text-sm">Information Technology Act, 2000 & SPDI Rules, 2011:</strong>
                <p className="text-[11px] sm:text-xs text-[#64748B] mt-0.5">
                  Strict adherence to Reasonable Security Practices and Procedures (Section 43A) for handling Sensitive Personal Data or Information (SPDI) including passwords, banking records, and biometric hashes.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 rounded-lg bg-white/60 border border-[#E2E8F0]">
              <Shield className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#0F172A] text-xs sm:text-sm">Chartered Accountants Act, 1949 & ICAI Code of Ethics:</strong>
                <p className="text-[11px] sm:text-xs text-[#64748B] mt-0.5">
                  Absolute professional secrecy and privilege enforced under Clause 1 of Part I of the Second Schedule to the Chartered Accountants Act, 1949. Client books and affairs remain completely confidential.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 rounded-lg bg-white/60 border border-[#E2E8F0]">
              <Database className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#0F172A] text-xs sm:text-sm">Statutory Tax Portal Standards:</strong>
                <p className="text-[11px] sm:text-xs text-[#64748B] mt-0.5">
                  Protocols aligned with the security standards mandated by the Goods and Services Tax Network (GSTN), Income Tax Department (CPC 2.0), Ministry of Corporate Affairs (MCA V3), and MSME Udyam portal.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'section-3',
      number: '03',
      category: 'collection',
      title: 'Categories of Data We Collect & Processing Modalities',
      shortDesc: 'Personal identity, corporate tax identifiers, ERP ledgers, and technical logs.',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-[#64748B] leading-relaxed">
          <p>
            In the ordinary course of providing chartered accountancy, corporate tax, statutory audit, and management advisory mandates, we collect and process the following categories of information:
          </p>
          <div className="space-y-3">
            <div className="p-3.5 rounded-lg bg-white border border-[#E2E8F0]">
              <h4 className="text-[#0F172A] font-bold text-xs uppercase tracking-wide text-[#2563EB] mb-1">
                A. Personal & Representative Identification Data
              </h4>
              <p className="text-xs text-[#64748B]">
                Full legal name, designation, Director Identification Number (DIN), digital signature certificates (DSC metadata), registered email address, mobile/telephone numbers, residential/office postal addresses, and identity proofs required under statutory KYC regulations.
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#E2E8F0]">
              <h4 className="text-[#0F172A] font-bold text-xs uppercase tracking-wide text-[#059669] mb-1">
                B. Corporate Tax & Statutory Identifiers
              </h4>
              <p className="text-xs text-[#64748B]">
                Permanent Account Number (PAN), Tax Deduction Account Number (TAN), Goods and Services Tax Identification Number (GSTIN), Corporate Identification Number (CIN), LLP Identification Number (LLPIN), and Udyam Registration Certificate numbers.
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#E2E8F0]">
              <h4 className="text-[#0F172A] font-bold text-xs uppercase tracking-wide text-[#2563EB] mb-1">
                C. Financial, Ledger & Transactional Telemetry
              </h4>
              <p className="text-xs text-[#64748B]">
                Sales & purchase registers, tax invoices, electronic bills of supply, e-way bill records, general ledgers, trial balances, bank statements, audited profit & loss statements, balance sheets, vendor aging schedules, and MSME 45-day payment tracking telemetry.
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#E2E8F0]">
              <h4 className="text-[#0F172A] font-bold text-xs uppercase tracking-wide text-[#64748B] mb-1">
                D. Technical Session & Security Logs
              </h4>
              <p className="text-xs text-[#64748B]">
                IP addresses, browser user-agent tokens, operating system characteristics, referral headers, access timestamps, authentication attempt logs, and session tokens utilized strictly to enforce multi-factor security and prevent unauthorized access.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'section-4',
      number: '04',
      category: 'purpose',
      title: 'Lawful Purpose & Legal Basis for Processing',
      shortDesc: 'Why client data is processed and statutory legal obligations.',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-[#64748B] leading-relaxed">
          <p>
            Under Section 4 and Section 7 of the DPDPA 2023, data processing must occur for lawful and specified purposes. We process information solely on the following legal bases:
          </p>
          <ul className="space-y-2 list-none">
            <li className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#0F172A]">Statutory Tax Filing Execution:</strong> Preparing, generating JSON schemas, and uploading GSTR-1, GSTR-3B, GSTR-9, GSTR-9C, Income Tax Returns (ITR-1 through ITR-7), TDS returns (24Q/26Q), and MCA ROC annual filings (AOC-4, MGT-7).
              </span>
            </li>
            <li className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#0F172A]">Statutory Audits & Assurance:</strong> Performing audit testing under the Companies Act, 2013 (including CARO 2020), Tax Audits under Section 44AB of the Income Tax Act, 1961, and compiling statutory working papers under Standards on Auditing (SA 230).
              </span>
            </li>
            <li className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#0F172A]">Automated Reconciliations:</strong> Reconciling 100% of GSTR-2B Input Tax Credit (ITC) vs. Purchase Registers to identify ineligible claims, supplier default, and prevent DRC-01 notices.
              </span>
            </li>
            <li className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#0F172A]">MSME Section 43B(h) Compliance:</strong> Verifying supplier Udyam registration numbers, major activities, and enterprise classifications to calculate allowable expense deductions and interest liabilities under the MSMED Act, 2006.
              </span>
            </li>
            <li className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#0F172A]">Strategic Consulting & Virtual CFO:</strong> Providing financial due diligence, 3-way balance sheet modeling, startup valuations, and executive MIS reports.
              </span>
            </li>
            <li className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#0F172A]">Billing, Escrow & Invoicing:</strong> Generating professional fee notes, tracking bank remittances, and issuing statutory GST tax invoices.
              </span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'section-5',
      number: '05',
      category: 'confidentiality',
      title: 'ICAI Code of Ethics & Chartered Accountant Privilege',
      shortDesc: 'Strict professional confidentiality, non-disclosure, and multi-tier reviews.',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-[#64748B] leading-relaxed">
          <div className="p-4 rounded-xl bg-gradient-to-r from-[#1769FF]/15 via-[#00D4FF]/05 to-transparent border border-[#2563EB]/30 space-y-2">
            <div className="flex items-center space-x-2 text-[#2563EB] font-bold text-xs uppercase tracking-wider">
              <Scale className="w-4 h-4" />
              <span>Statutory Professional Secrecy Guarantee</span>
            </div>
            <p className="text-[#0F172A] text-xs sm:text-sm font-medium">
              Every member of our team, including Chartered Accountants, article assistants, audit seniors, and technical engineers, is bound by the confidentiality obligations set out in Part I of the Second Schedule to the Chartered Accountants Act, 1949.
            </p>
          </div>
          <p>
            Under these binding ethical standards:
          </p>
          <ul className="space-y-2 list-disc list-inside pl-2">
            <li>A Chartered Accountant cannot disclose confidential client information acquired in the course of professional engagements to any third party without specific client authorization or statutory legal mandate.</li>
            <li>Client financial records, trade secrets, profit margins, supplier terms, and operational data are strictly segregated across engagements.</li>
            <li>Internal practice workflows enforce a <strong>4-Eye Review Protocol</strong>: only authorized engagement staff assigned to your specific file have access to your data.</li>
            <li>All technical staff and vendors sign stringent Non-Disclosure Agreements (NDAs) that survive the termination of employment or service contracts.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'section-6',
      number: '06',
      category: 'confidentiality',
      title: 'Information Sharing, Third Parties & Zero Commercial Sale',
      shortDesc: 'No selling or renting of data; sharing strictly limited to government tax portals.',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-[#64748B] leading-relaxed">
          <div className="p-3.5 rounded-lg bg-[#18C8A0]/10 border border-[#18C8A0]/30 text-white flex items-center space-x-3">
            <ShieldCheck className="w-6 h-6 text-[#059669] shrink-0" />
            <div className="text-xs sm:text-sm font-semibold">
              Zero Commercial Monetization: We never sell, rent, trade, license, or monetize your personal or financial data to advertising networks, brokers, or marketing entities.
            </div>
          </div>
          <p>
            Data disclosures occur strictly under the following limited conditions:
          </p>
          <div className="space-y-2.5">
            <div className="p-3 rounded-lg bg-white border border-[#E2E8F0]">
              <strong className="text-[#0F172A]">1. Official Statutory Portals:</strong>
              <p className="text-xs text-[#64748B] mt-1">
                Data is transmitted directly to government portals (GSTN, Income Tax e-filing portal, MCA21/MCA V3, TRACES, DGFT, and EPFO) solely for executing return filings, refund applications, and regulatory submissions authorized by you.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-white border border-[#E2E8F0]">
              <strong className="text-[#0F172A]">2. Regulated Cloud Infrastructure:</strong>
              <p className="text-xs text-[#64748B] mt-1">
                Secure enterprise cloud processors (e.g., Supabase / PostgreSQL / AWS / Google Cloud) hosting encrypted application databases and automated pipelines, bound by Data Processing Agreements compliant with Indian law.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-white border border-[#E2E8F0]">
              <strong className="text-[#0F172A]">3. Statutory Court Orders & Legal Mandate:</strong>
              <p className="text-xs text-[#64748B] mt-1">
                Where disclosure is required under a valid court summons, statutory order of a tax authority with competent jurisdiction, or regulatory mandate issued by the Institute of Chartered Accountants of India (ICAI).
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'section-7',
      number: '07',
      category: 'security',
      title: 'Data Security, Cryptographic Architecture & Indian Data Residency',
      shortDesc: 'TLS 1.3, AES-256 encryption, role-based access, and Indian data centers.',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-[#64748B] leading-relaxed">
          <p>
            In compliance with Section 8(5) of the DPDPA 2023 and the SPDI Rules 2011, we implement comprehensive technical, organizational, and physical security measures:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-lg bg-white border border-[#E2E8F0] space-y-1">
              <div className="flex items-center space-x-2 text-[#2563EB] font-bold text-xs">
                <Lock className="w-3.5 h-3.5" />
                <span>End-to-End Cryptography</span>
              </div>
              <p className="text-[11px] text-[#64748B]">
                All data in transit is protected using TLS 1.3 with high-cipher suites. Data at rest is encrypted using bank-grade AES-256 in certified storage volumes.
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#E2E8F0] space-y-1">
              <div className="flex items-center space-x-2 text-[#059669] font-bold text-xs">
                <Globe className="w-3.5 h-3.5" />
                <span>Indian Data Residency</span>
              </div>
              <p className="text-[11px] text-[#64748B]">
                Our primary and backup databases reside in Tier-III/IV data centers located within the territorial borders of the Republic of India (Mumbai/Hyderabad/Delhi regions).
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#E2E8F0] space-y-1">
              <div className="flex items-center space-x-2 text-[#2563EB] font-bold text-xs">
                <UserCheck className="w-3.5 h-3.5" />
                <span>Role-Based Access Control (RBAC)</span>
              </div>
              <p className="text-[11px] text-[#64748B]">
                Zero-trust access policy. Staff and audit partners access client records strictly through role-based access controls with multi-factor authentication (MFA).
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#E2E8F0] space-y-1">
              <div className="flex items-center space-x-2 text-[#059669] font-bold text-xs">
                <Clock className="w-3.5 h-3.5" />
                <span>Immutable Audit Trails</span>
              </div>
              <p className="text-[11px] text-[#64748B]">
                Every file upload, reconciliation run, GST return JSON export, and notice response is logged with cryptographic hash timestamps to maintain chain-of-custody.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'section-8',
      number: '08',
      category: 'retention',
      title: 'Data Retention, Archival & Destruction Protocols',
      shortDesc: 'Retention periods under Income Tax, GST, Companies Act, and SA 230.',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-[#64748B] leading-relaxed">
          <p>
            We retain personal, financial, and tax records strictly for the durations mandated by Indian statutes and professional audit guidelines:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-[#E2E8F0] rounded-lg overflow-hidden">
              <thead className="bg-white text-[#2563EB] uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="p-2.5 border-b border-[#E2E8F0]">Statutory Regulation</th>
                  <th className="p-2.5 border-b border-[#E2E8F0]">Scope of Records</th>
                  <th className="p-2.5 border-b border-[#E2E8F0]">Mandatory Retention Period</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] text-[#64748B]">
                <tr className="hover:bg-white/40">
                  <td className="p-2.5 font-semibold text-[#0F172A]">Income Tax Act, 1961</td>
                  <td className="p-2.5">Books of accounts, tax audit reports, computation sheets</td>
                  <td className="p-2.5 font-mono text-[#059669]">7 to 10 Assessment Years</td>
                </tr>
                <tr className="hover:bg-white/40">
                  <td className="p-2.5 font-semibold text-[#0F172A]">Central Goods & Services Tax Act, 2017 (Sec 36)</td>
                  <td className="p-2.5">Invoices, bills of supply, GSTR-1, 3B, 9/9C, ITC registers</td>
                  <td className="p-2.5 font-mono text-[#059669]">72 Months (6 Years) from Annual Return Due Date</td>
                </tr>
                <tr className="hover:bg-white/40">
                  <td className="p-2.5 font-semibold text-[#0F172A]">Companies Act, 2013 (Sec 128)</td>
                  <td className="p-2.5">Corporate statutory registers, minutes, balance sheets</td>
                  <td className="p-2.5 font-mono text-[#059669]">Not less than 8 Financial Years</td>
                </tr>
                <tr className="hover:bg-white/40">
                  <td className="p-2.5 font-semibold text-[#0F172A]">ICAI Standard on Auditing (SA 230)</td>
                  <td className="p-2.5">Audit documentation working papers & partner review notes</td>
                  <td className="p-2.5 font-mono text-[#059669]">7 Years from Auditor Report Date</td>
                </tr>
                <tr className="hover:bg-white/40">
                  <td className="p-2.5 font-semibold text-[#0F172A]">Website Inquiries & Consultation Leads</td>
                  <td className="p-2.5">Contact forms, scheduling requests, preliminary chats</td>
                  <td className="p-2.5 font-mono text-[#64748B]">180 Days unless converted to active client mandate</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Upon expiration of the applicable retention period and subject to no pending tax assessment or litigation, digital files are purged via cryptographically secure electronic deletion protocols.
          </p>
        </div>
      )
    },
    {
      id: 'section-9',
      number: '09',
      category: 'rights',
      title: 'Rights of Data Principals under DPDPA 2023',
      shortDesc: 'Your rights to access, correction, erasure, nomination, and grievance redressal.',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-[#64748B] leading-relaxed">
          <p>
            Under Chapter III of the Digital Personal Data Protection Act, 2023, you as a Data Principal hold specific enforceable rights regarding your personal data:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-lg bg-white border border-[#E2E8F0] space-y-1.5">
              <div className="text-[#0F172A] font-bold text-xs flex items-center space-x-2">
                <Eye className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Right to Access & Summary</span>
              </div>
              <p className="text-[11px] text-[#64748B]">
                You have the right to request a summary of the personal data being processed, identity of Data Processors, and categories of data shared.
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#E2E8F0] space-y-1.5">
              <div className="text-[#0F172A] font-bold text-xs flex items-center space-x-2">
                <FileText className="w-3.5 h-3.5 text-[#059669]" />
                <span>Right to Correction & Updating</span>
              </div>
              <p className="text-[11px] text-[#64748B]">
                You may request correction of inaccurate or misleading personal data, completion of incomplete data, and updating of your business profile.
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#E2E8F0] space-y-1.5">
              <div className="text-[#0F172A] font-bold text-xs flex items-center space-x-2">
                <Lock className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Right to Erasure (Right to Be Forgotten)</span>
              </div>
              <p className="text-[11px] text-[#64748B]">
                You may request deletion of your personal data where the purpose for which it was collected has been served, except where preservation is required by tax or statutory audit laws.
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#E2E8F0] space-y-1.5">
              <div className="text-[#0F172A] font-bold text-xs flex items-center space-x-2">
                <UserCheck className="w-3.5 h-3.5 text-[#059669]" />
                <span>Right to Nominate</span>
              </div>
              <p className="text-[11px] text-[#64748B]">
                Under Section 14 of DPDPA 2023, you have the right to nominate another individual who, in the event of your death or incapacity, shall exercise your rights.
              </p>
            </div>
          </div>
          <p className="text-xs text-[#64748B]">
            To exercise any of these rights, submit a written communication to our designated Data Protection Officer at <a href="mailto:privacy@aca-ca.com" className="text-[#2563EB] underline">privacy@aca-ca.com</a> or use the inquiry form on this page.
          </p>
        </div>
      )
    },
    {
      id: 'section-10',
      number: '10',
      category: 'security',
      title: 'Cookies, Web Telemetry & Browser Storage',
      shortDesc: 'Functional session security tokens only; zero invasive ad cookies.',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-[#64748B] leading-relaxed">
          <p>
            The website <strong className="text-[#0F172A]">www.aca-ca.com</strong> does not employ commercial ad-targeting cookies, tracking pixels, or third-party behavioral profiling mechanisms.
          </p>
          <p>
            We strictly deploy essential and functional web storage technologies:
          </p>
          <ul className="space-y-2 list-disc list-inside pl-2">
            <li><strong className="text-[#0F172A]">Session Security Tokens:</strong> Encrypted authentication tokens that maintain your authenticated session while reviewing GST tracker tables or notice responses.</li>
            <li><strong className="text-[#0F172A]">CSRF Protection Cookies:</strong> Cryptographic tokens designed to prevent cross-site request forgery attacks on client forms.</li>
            <li><strong className="text-[#0F172A]">Local Preferences:</strong> Browser local storage entries recording UI display preferences (e.g., active tab selection, table column sizing).</li>
          </ul>
          <p>
            You can modify your browser settings to refuse cookies or delete cached tokens. However, disabling essential session tokens will restrict your ability to log in to the Partner Portal or Client Self-Service Workspace.
          </p>
        </div>
      )
    },
    {
      id: 'section-11',
      number: '11',
      category: 'general',
      title: 'Protection of Children Data',
      shortDesc: 'Prohibition on collecting data of minors under 18 years.',
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-[#64748B] leading-relaxed">
          <p>
            In strict compliance with Section 9 of the DPDPA 2023, <strong className="text-[#0F172A]">www.aca-ca.com</strong> and its services are intended exclusively for businesses, corporate enterprises, and adult individuals possessing legal capacity to contract.
          </p>
          <p>
            We do not knowingly collect, process, track, or profile personal data relating to any individual under eighteen (18) years of age. In the event that we learn minor data has been inadvertently submitted, we will immediately initiate secure deletion from our servers.
          </p>
        </div>
      )
    },
    {
      id: 'section-12',
      number: '12',
      category: 'confidentiality',
      title: 'Statutory ICAI Disclaimer & Informational Website Notice',
      shortDesc: 'Clarification regarding non-solicitation and informational nature under ICAI guidelines.',
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-[#64748B] leading-relaxed">
          <div className="p-3.5 rounded-lg bg-white border border-[#E2E8F0] text-[#64748B] space-y-2">
            <div className="flex items-center space-x-2 text-[#0F172A] font-bold text-xs uppercase tracking-wider">
              <Scale className="w-4 h-4 text-[#2563EB]" />
              <span>Compliance with ICAI Website Guidelines</span>
            </div>
            <p className="text-xs leading-relaxed">
              As per the guidelines issued by the Institute of Chartered Accountants of India (ICAI), this website (<strong className="text-[#2563EB]">www.aca-ca.com</strong>) is not designed or intended to advertise, solicit professional work, or create an advocate/client relationship. The information contained herein is solely for the purpose of general information, transparency, client self-service, and technical compliance assistance.
            </p>
            <p className="text-[11px] text-[#64748B]/80">
              Users acknowledge that any consultation scheduled or inquiry submitted is at their voluntary request and does not establish a statutory auditor-client engagement until a formal engagement letter is countersigned.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'section-13',
      number: '13',
      category: 'grievance',
      title: 'Data Protection Officer & Grievance Redressal Mechanism',
      shortDesc: 'Official contact details, postal address, email, and 30-day resolution timeline.',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-[#64748B] leading-relaxed">
          <p>
            In compliance with Section 8(9) of the Digital Personal Data Protection Act, 2023 and Rule 5(9) of the Information Technology (SPDI) Rules, 2011, the details of our designated Data Protection Officer / Grievance Redressal Partner are provided below:
          </p>
          <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#2563EB]/30 space-y-4">
            <div className="flex items-start justify-between flex-wrap gap-2">
              <div>
                <span className="text-[10px] font-mono uppercase bg-[#1769FF]/20 text-[#2563EB] px-2 py-0.5 rounded border border-[#1769FF]/30 font-bold">
                  Designated Grievance Redressal Partner
                </span>
                <h4 className="text-base sm:text-lg font-bold text-[#0F172A] mt-1">
                  Sachin Chourasiya, FCA / Practice Partners
                </h4>
                <div className="text-xs text-[#64748B]">
                  Ajay Chaurasiya & Associates (Chartered Accountants) &amp; Ascent Advisors LLP
                </div>
              </div>
              <div className="text-right text-[11px] font-mono text-[#059669]">
                <span>SLA: 24h Ack &middot; 15-30 Day Resolution</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-[#E2E8F0] text-xs text-[#64748B]">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0F172A] block">Official Postal Address:</strong>
                  <span>Unit No 336, Lodha Signet, Kolshet Road, Thane West &ndash; 400607, Mumbai MMR, Maharashtra, India</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2.5">
                  <Mail className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <div>
                    <strong className="text-[#0F172A]">Grievance Desk Email:</strong>{' '}
                    <a href="mailto:privacy@aca-ca.com" className="text-[#2563EB] hover:underline font-mono">
                      privacy@aca-ca.com
                    </a>
                    <span className="text-slate-500"> / </span>
                    <a href="mailto:contact@aca-ca.com" className="text-[#2563EB] hover:underline font-mono">
                      contact@aca-ca.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Phone className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <div>
                    <strong className="text-[#0F172A]">Direct Telephone:</strong>{' '}
                    <span className="font-mono text-[#0F172A]">022 4522 1065</span>
                    <span className="text-slate-500"> &middot; </span>
                    <span className="font-mono text-[#0F172A]">+91 9892220555</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-white text-[11px] text-[#64748B] border border-[#E2E8F0]">
              <strong className="text-[#0F172A]">Escalation Protocol:</strong> In accordance with statutory provisions, every received privacy grievance will be acknowledged within 24 working hours with a unique tracking ticket, investigated by the partner desk, and resolved within thirty (30) calendar days. If unresolved, you may approach the Data Protection Board of India under the DPDPA 2023.
            </div>
          </div>
        </div>
      )
    }
  ], []);

  // Filter clauses based on search query and category
  const filteredClauses = useMemo(() => {
    return clauses.filter((clause) => {
      const matchesCategory = activeCategory === 'all' || clause.category === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const inTitle = clause.title.toLowerCase().includes(q);
      const inDesc = clause.shortDesc.toLowerCase().includes(q);
      const inNumber = clause.number.includes(q);
      return inTitle || inDesc || inNumber;
    });
  }, [clauses, activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans flex flex-col selection:bg-[#1769FF]/40 selection:text-[#2563EB] relative overflow-x-hidden">
      
      {/* AMBIENT LIGHTING BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 corporate-grid-bg opacity-25" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#1769FF]/15 via-[#00D4FF]/05 to-transparent rounded-full blur-[140px]" />
        <div className="absolute top-[30%] -right-40 w-[600px] h-[600px] bg-[#2563EB]/06 rounded-full blur-[160px]" />
      </div>

      {/* TOP NOTIFICATION RIBBON */}
      <div className="relative z-50 bg-white border-b border-[#E2E8F0] text-xs py-2 px-3 sm:px-4 text-[#64748B] backdrop-blur-xl no-print">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] sm:text-xs">
          <div className="flex items-center space-x-2 truncate">
            <span className="h-2 w-2 rounded-full bg-[#18C8A0] animate-pulse shrink-0" />
            <span className="font-bold text-[#0F172A] tracking-wide truncate">ASCENT ADVISORS LLP &amp; AJAY CHAURASIYA &amp; ASSOCIATES</span>
            <span className="text-[#64748B] hidden md:inline">| Official Portal: www.aca-ca.com</span>
          </div>
          <div className="flex items-center space-x-3 text-[#64748B] shrink-0">
            <span className="hidden sm:inline font-mono text-[#2563EB]">DPDPA 2023 &amp; ICAI Code of Ethics Compliant</span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <button onClick={onBackToHome} className="hover:text-[#2563EB] transition-colors">
              <span>Main Portal</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* STICKY HEADER */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-2xl border-b border-[#E2E8F0] no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          
          {/* Brand Mark */}
          <button onClick={onBackToHome} className="flex items-center gap-2.5">
            <img src="/brand/ascent-mark.png" alt="" className="h-9 w-auto" />
            <img src="/brand/ascent-wordmark.png" alt="Ascent Advisors LLP" className="h-6 w-auto" />
          </button>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 text-xs font-semibold text-[#64748B]">
            <button onClick={onBackToHome} className="hover:text-[#2563EB] transition-colors">Home</button>
            <button onClick={onBackToHome} className="hover:text-[#2563EB] transition-colors">Services</button>
            <a href="https://app.aca-ca.com/tools" className="hover:text-[#2563EB] transition-colors">Tools Hub</a>
            <a href="https://app.aca-ca.com/msme-verifier" className="hover:text-[#2563EB] transition-colors">MSME Verifier</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-1.5 bg-white hover:bg-[#F1F5F9] text-[#0F172A] border border-[#E2E8F0] hover:border-[#2563EB]/40 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>
            <button
              onClick={() => setShowInquiryModal(true)}
              className="bg-[#1769FF] hover:bg-[#1258db] text-white font-bold px-3 py-1.5 rounded-lg text-xs transition-all shadow-lg shadow-[#1769FF]/25 border border-[#2563EB]/40 flex items-center space-x-1.5 active:scale-[0.98]"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Grievance Desk</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-24 pb-2">
    <button
      onClick={onBackToHome}
      className="inline-flex items-center space-x-2 text-xs font-semibold text-[#2563EB] hover:text-white transition-colors bg-white border border-[#E2E8F0] px-3.5 py-2 rounded-lg"
    >
      <span>&larr; Back to Main Website</span>
    </button>
  </div>
  {/* HERO SECTION */}
      <section className="relative z-10 pt-10 pb-8 sm:pt-14 sm:pb-10 px-4 sm:px-6 lg:px-8 border-b border-[#E2E8F0] bg-white/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto space-y-6">
          
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#18C8A0]/15 border border-[#18C8A0]/30 text-[#059669] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>DPDPA 2023 &amp; ICAI Code of Ethics Compliant</span>
            </div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white border border-[#E2E8F0] text-[#2563EB] text-xs font-mono font-medium">
              <Globe className="w-3.5 h-3.5" />
              <span>Domain: www.aca-ca.com</span>
            </div>
          </div>

          <div className="space-y-3 max-w-4xl">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Privacy &amp; Data Protection Policy
            </h1>
            <p className="text-xs sm:text-base text-[#64748B] leading-relaxed">
              Official Data Governance and Confidentiality Charter for <strong className="text-[#0F172A]">www.aca-ca.com</strong>, governing client privilege, statutory tax telemetries, cloud cryptographic protections, and Data Principal rights across <strong className="text-[#2563EB]">Ajay Chaurasiya &amp; Associates (Chartered Accountants)</strong> and <strong className="text-[#059669]">Ascent Advisors LLP</strong>.
            </p>
          </div>

          {/* Quick Metadata Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
            <div className="p-3 rounded-lg bg-white border border-[#E2E8F0]">
              <span className="text-[#64748B] text-[10px] uppercase font-mono block">Effective Date</span>
              <span className="font-semibold text-[#0F172A]">01 April 2024</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-[#E2E8F0]">
              <span className="text-[#64748B] text-[10px] uppercase font-mono block">Statutory Review</span>
              <span className="font-semibold text-[#059669]">FY 2026-27 Compliant</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-[#E2E8F0]">
              <span className="text-[#64748B] text-[10px] uppercase font-mono block">Jurisdiction</span>
              <span className="font-semibold text-[#0F172A]">Mumbai MMR, India</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-[#E2E8F0]">
              <span className="text-[#64748B] text-[10px] uppercase font-mono block">Data Residency</span>
              <span className="font-semibold text-[#2563EB]">India Only (Tier-III)</span>
            </div>
          </div>

        </div>
      </section>

      {/* EXECUTIVE HIGHLIGHTS CARDS (5 PILLARS) */}
      <section className="relative z-10 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full no-print">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          
          <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2 shadow-lg hover:border-[#2563EB]/40 transition-all">
            <div className="h-8 w-8 rounded-lg bg-[#18C8A0]/15 text-[#059669] flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-xs text-[#0F172A]">Zero Commercial Sale</h3>
            <p className="text-[11px] text-[#64748B] leading-normal">
              We never sell, rent, monetize, or trade any personal or enterprise client financial records.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2 shadow-lg hover:border-[#2563EB]/40 transition-all">
            <div className="h-8 w-8 rounded-lg bg-[#1769FF]/15 text-[#2563EB] flex items-center justify-center">
              <Scale className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-xs text-[#0F172A]">ICAI Code of Ethics</h3>
            <p className="text-[11px] text-[#64748B] leading-normal">
              Professional secrecy mandated by the Chartered Accountants Act, 1949 and peer-review benchmarks.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2 shadow-lg hover:border-[#2563EB]/40 transition-all">
            <div className="h-8 w-8 rounded-lg bg-[#2563EB]/15 text-[#2563EB] flex items-center justify-center">
              <Lock className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-xs text-[#0F172A]">AES-256 Vaults</h3>
            <p className="text-[11px] text-[#64748B] leading-normal">
              TLS 1.3 transport security, AES-256 data at rest, and strictly role-based staff isolation.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2 shadow-lg hover:border-[#2563EB]/40 transition-all">
            <div className="h-8 w-8 rounded-lg bg-[#18C8A0]/15 text-[#059669] flex items-center justify-center">
              <UserCheck className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-xs text-[#0F172A]">DPDPA 2023 Rights</h3>
            <p className="text-[11px] text-[#64748B] leading-normal">
              Full data principal rights: access, correction, erasure, nomination, and grievance resolution.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2 shadow-lg hover:border-[#2563EB]/40 transition-all">
            <div className="h-8 w-8 rounded-lg bg-[#1769FF]/15 text-[#2563EB] flex items-center justify-center">
              <Database className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-xs text-[#0F172A]">Statutory Retention</h3>
            <p className="text-[11px] text-[#64748B] leading-normal">
              Preserved strictly for statutory periods (6-8 years) under Income Tax, GST, and Companies Act.
            </p>
          </div>

        </div>
      </section>

      {/* SEARCH & CATEGORY FILTER CONTROLS */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-6 no-print">
        <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-3">
          
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search privacy clauses (e.g. GST data, cookies, retention, DPDPA, grievance)..."
                className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg pl-10 pr-4 py-2 text-xs text-[#0F172A] placeholder-[#94A3B8]/60 focus:outline-none focus:border-[#2563EB]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-white text-xs"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Print button on mobile/desktop */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center justify-center space-x-1.5 px-4 py-2 bg-white hover:bg-[#F1F5F9] text-[#0F172A] rounded-lg border border-[#E2E8F0] text-xs font-semibold shrink-0"
            >
              <Printer className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Print Policy</span>
            </button>
          </div>

          {/* Category Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 text-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#1769FF] text-white shadow-md shadow-[#1769FF]/30 border border-[#2563EB]/40'
                    : 'bg-white text-[#64748B] hover:text-white border border-[#E2E8F0]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* MAIN TWO-COLUMN LAYOUT: SIDEBAR TOC + POLICY CLAUSES */}
      <main className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: DESKTOP STICKY TABLE OF CONTENTS (4 Cols) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-20 space-y-4 no-print">
            
            {/* Navigation Card */}
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#E2E8F0]">
                <span className="font-bold text-xs uppercase tracking-wider text-[#2563EB] flex items-center space-x-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Table of Contents</span>
                </span>
                <span className="text-[10px] font-mono text-[#64748B]">{clauses.length} Clauses</span>
              </div>

              <div className="space-y-1 max-h-[55vh] overflow-y-auto pr-1">
                {clauses.map((clause) => {
                  const isActive = activeSectionId === clause.id;
                  return (
                    <a
                      key={clause.id}
                      href={`#${clause.id}`}
                      onClick={() => setActiveSectionId(clause.id)}
                      className={`block px-2.5 py-2 rounded-lg text-xs transition-all ${
                        isActive
                          ? 'bg-[#1769FF]/20 text-[#2563EB] font-semibold border-l-2 border-[#2563EB]'
                          : 'text-[#64748B] hover:text-white hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-[10px] text-slate-500">{clause.number}.</span>
                        <span className="truncate">{clause.title}</span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Practice Contact Box */}
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-3 text-xs">
              <div className="text-[#0F172A] font-bold text-xs uppercase tracking-wide flex items-center space-x-2">
                <Building2 className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Practice Headquarters</span>
              </div>
              <p className="text-[11px] text-[#64748B]">
                Unit No 336, Lodha Signet, Kolshet Road, Thane West &ndash; 400607, Mumbai MMR.
              </p>
              <div className="space-y-1.5 pt-2 border-t border-[#E2E8F0] text-[11px]">
                <div className="flex items-center space-x-2 text-[#64748B]">
                  <Mail className="w-3.5 h-3.5 text-[#2563EB]" />
                  <a href="mailto:privacy@aca-ca.com" className="hover:text-white">privacy@aca-ca.com</a>
                </div>
                <div className="flex items-center space-x-2 text-[#64748B]">
                  <Phone className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>022 4522 1065 / 9892220555</span>
                </div>
              </div>
              <button
                onClick={() => setShowInquiryModal(true)}
                className="w-full mt-2 bg-[#1769FF]/20 hover:bg-[#1769FF]/30 text-[#2563EB] border border-[#2563EB]/30 font-semibold py-2 px-3 rounded-lg text-xs transition-colors flex items-center justify-center space-x-1.5"
              >
                <Send className="w-3 h-3" />
                <span>Submit Privacy Inquiry</span>
              </button>
            </div>

          </aside>

          {/* RIGHT COLUMN: POLICY CLAUSES (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {filteredClauses.length === 0 ? (
              <div className="p-8 text-center rounded-xl bg-white border border-[#E2E8F0] space-y-3">
                <AlertTriangle className="w-8 h-8 text-[#2563EB] mx-auto opacity-70" />
                <h3 className="text-sm font-bold text-[#0F172A]">No clauses matching your search query</h3>
                <p className="text-xs text-[#64748B]">
                  Try searching for general terms like &quot;GST&quot;, &quot;retention&quot;, &quot;DPDPA&quot;, or &quot;Grievance Officer&quot;.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  className="mt-2 text-xs font-semibold text-[#2563EB] hover:underline"
                >
                  Reset all filters
                </button>
              </div>
            ) : (
              filteredClauses.map((clause) => (
                <article
                  key={clause.id}
                  id={clause.id}
                  className="p-5 sm:p-7 rounded-xl bg-white border border-[#E2E8F0] shadow-xl space-y-4 scroll-mt-24 transition-all hover:border-[#E2E8F0]"
                >
                  {/* Clause Header */}
                  <div className="flex items-start justify-between gap-3 border-b border-[#E2E8F0] pb-3.5">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-xs font-bold text-[#2563EB] bg-white px-2 py-0.5 rounded border border-[#2563EB]/20">
                          CLAUSE {clause.number}
                        </span>
                        <span className="text-[10px] font-mono uppercase text-[#64748B] tracking-wider">
                          {clause.category}
                        </span>
                      </div>
                      <h2 className="text-base sm:text-xl font-bold text-[#0F172A]">
                        {clause.title}
                      </h2>
                      <p className="text-xs text-[#64748B]">
                        {clause.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Clause Content Body */}
                  <div className="pt-1">
                    {clause.content}
                  </div>
                </article>
              ))
            )}

            {/* Practice Compliance Assurance Footer Note */}
            <div className="p-5 rounded-xl bg-white border border-[#E2E8F0] text-xs text-[#64748B] space-y-2">
              <div className="flex items-center space-x-2 text-[#0F172A] font-bold">
                <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                <span>Statutory Verification &amp; Annual Review</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                This document is reviewed annually by the managing partners of Ajay Chaurasiya &amp; Associates and the designated compliance partners of Ascent Advisors LLP to maintain complete harmony with gazetted notifications under the Digital Personal Data Protection Act, 2023, circulars from the Institute of Chartered Accountants of India (ICAI), and revisions in GST/Income Tax portal integration frameworks.
              </p>
            </div>

          </div>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-[#E2E8F0] py-10 px-4 text-center text-xs text-[#64748B] space-y-3 bg-[#F8FAFC] no-print">
        <p>&copy; 2026 ASCENT ADVISORS LLP &amp; AJAY CHAURASIYA &amp; ASSOCIATES. All Rights Reserved. Operating in association with a network of Chartered Accountants.</p>
        <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-2 text-[11px] text-[#64748B]">
          <button onClick={onBackToHome} className="hover:text-[#2563EB] transition-colors">Home Portal</button>
          <span>&bull;</span>
          <button onClick={onBackToHome} className="hover:text-[#2563EB] transition-colors">Privacy Policy</button>
          <span>&bull;</span>
          <button onClick={onBackToHome} className="hover:text-[#2563EB] transition-colors">Tax &amp; MSME Tools</button>
          <span>&bull;</span>
          <button onClick={onBackToHome} className="hover:text-[#2563EB] transition-colors">Partner Portal</button>
          <span>&bull;</span>
          <button onClick={onBackToHome} className="hover:text-[#2563EB] transition-colors">Team Workspace</button>
          <span>&bull;</span>
          <button onClick={onBackToHome} className="hover:text-[#2563EB] transition-colors">Client Self-Service</button>
        </div>
        <div className="text-[10px] text-slate-500 max-w-2xl mx-auto pt-2">
          Domain: www.aca-ca.com &middot; Office: Unit No 336, Lodha Signet, Kolshet, Thane West - 400607, Mumbai MMR &middot; Tel: 022 4522 1065 &middot; Email: privacy@aca-ca.com
        </div>
      </footer>

      {/* INTERACTIVE PRIVACY INQUIRY / GRIEVANCE MODAL */}
      {showInquiryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md no-print">
          <div className="bg-white border border-[#E2E8F0] rounded-xl max-w-md w-full p-6 shadow-2xl space-y-4 text-left relative">
            
            <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-[#1769FF]/20 text-[#2563EB] flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0F172A]">
                    Submit Privacy Request
                  </h3>
                  <span className="text-[10px] text-[#64748B] font-mono">DPDPA 2023 Grievance Desk</span>
                </div>
              </div>
              <button 
                onClick={() => {
                  setShowInquiryModal(false);
                  setInquirySubmitted(false);
                }}
                className="text-[#64748B] hover:text-white p-1 rounded-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {inquirySubmitted ? (
              <div className="py-6 text-center space-y-3">
                <div className="h-12 w-12 rounded-full bg-[#18C8A0]/20 text-[#059669] mx-auto flex items-center justify-center border border-[#18C8A0]/40">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-[#0F172A]">Privacy Request Logged!</h4>
                <p className="text-xs text-[#64748B] max-w-xs mx-auto leading-relaxed">
                  Thank you, <span className="text-[#2563EB] font-semibold">{inquiryName || 'Applicant'}</span>. Your privacy inquiry has been registered with the Data Protection Officer under ticket <span className="font-mono text-[#0F172A]">#DPO-{Math.floor(1000 + Math.random() * 9000)}</span>. An official response will be dispatched within 24 working hours.
                </p>
                <button
                  onClick={() => {
                    setShowInquiryModal(false);
                    setInquirySubmitted(false);
                    setInquiryName('');
                    setInquiryEmail('');
                    setInquiryMessage('');
                  }}
                  className="mt-4 bg-[#1769FF] hover:bg-[#1258db] text-white text-xs font-bold py-2.5 px-6 rounded-lg transition-all"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block text-[#64748B] font-semibold mb-1">Company / Your Name</label>
                  <input
                    type="text"
                    required
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="e.g. Apex Enterprises / Rajesh Sharma"
                    className="w-full bg-white border border-[#E2E8F0] rounded-lg px-3.5 py-2.5 text-[#0F172A] placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#2563EB]"
                  />
                </div>

                <div>
                  <label className="block text-[#64748B] font-semibold mb-1">Official Work Email / Mobile</label>
                  <input
                    type="text"
                    required
                    value={inquiryEmail}
                    onChange={(e) => setInquiryEmail(e.target.value)}
                    placeholder="privacy@yourcompany.com or +91 98765 43210"
                    className="w-full bg-white border border-[#E2E8F0] rounded-lg px-3.5 py-2.5 text-[#0F172A] placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#2563EB]"
                  />
                </div>

                <div>
                  <label className="block text-[#64748B] font-semibold mb-1">Request Category</label>
                  <select
                    value={inquirySubject}
                    onChange={(e) => setInquirySubject(e.target.value)}
                    className="w-full bg-white border border-[#E2E8F0] rounded-lg px-3.5 py-2.5 text-[#0F172A] focus:outline-none focus:border-[#2563EB]"
                  >
                    <option>Data Principal Access / Summary Request</option>
                    <option>Data Correction / Updating Request</option>
                    <option>Data Erasure / De-linking Request</option>
                    <option>Nomination of Representative (Sec 14)</option>
                    <option>General Privacy Grievance or Dispute</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#64748B] font-semibold mb-1">Specific Description</label>
                  <textarea
                    rows={3}
                    required
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    placeholder="Please specify the nature of your request, relevant GSTIN or engagement details..."
                    className="w-full bg-white border border-[#E2E8F0] rounded-lg px-3.5 py-2 text-[#0F172A] placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#2563EB]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#1769FF] hover:bg-[#1258db] text-white font-bold py-3 px-4 rounded-lg transition-all shadow-lg shadow-[#1769FF]/20 border border-[#2563EB]/40 flex items-center justify-center space-x-2 active:scale-[0.98]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit to Data Protection Officer</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
