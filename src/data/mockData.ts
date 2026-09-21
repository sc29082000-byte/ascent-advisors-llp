import { ServiceDetail, AdvisoryStage, InsightArticle, TrustMetric, ClientSegment } from '../types';

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'business-registration',
    number: '01',
    title: 'BUSINESS REGISTRATION',
    tagline: 'Start your business on the right foundation.',
    category: 'corporate',
    description: 'Entity incorporation, capital structure formulation, and statutory licenses engineered for institutional governance and seamless future capitalization.',
    deliverables: [
      'Private Limited, LLP & Section 8 Incorporation',
      'Digital Signature Certificates (DSC) & DIN Allocation',
      'PAN, TAN, MSME (Udyam) & Startup India Certification',
      'Shareholders’ Agreements & Article of Association Customization',
      'Bank Account Facilitation & Capital Infusion Compliance'
    ],
    statutoryForms: ['SPICe+ (INC-32)', 'INC-33 (MoA)', 'INC-34 (AoA)', 'AGILE-PRO-S', 'DIR-3'],
    frequency: 'One-time with ongoing corporate secretarial support',
    targetClients: 'Founders, early-stage ventures, joint-ventures, overseas subsidiaries'
  },
  {
    id: 'gst-income-tax',
    number: '02',
    title: 'GST & INCOME TAX',
    tagline: 'Manage taxation with clarity, accuracy and timely compliance.',
    category: 'tax',
    description: 'Comprehensive dual-tier direct and indirect tax management ensuring optimal input tax credit, zero-leakage advance tax planning, and timely returns.',
    deliverables: [
      'Monthly/Quarterly GSTR-1, GSTR-3B & Annual GSTR-9/9C Reconciliation',
      'Corporate Advance Tax Computations & Form 15CA/15CB Foreign Remittance',
      'Annual Income Tax Return (ITR-6, ITR-5, ITR-7) & TDS/TCS Quarterly Filings',
      'E-Invoicing, E-Way Bill Integration & Input Tax Credit (ITC) Optimization',
      'Representation before Assessment Authorities & Appellate Forums'
    ],
    statutoryForms: ['GSTR-1', 'GSTR-3B', 'GSTR-9C', 'ITR-6', 'Form 26Q', 'Form 15CB'],
    frequency: 'Monthly, Quarterly & Annual statutory cadences',
    targetClients: 'Operating corporations, manufacturing units, SaaS enterprises, high-volume traders'
  },
  {
    id: 'audit-assurance',
    number: '03',
    title: 'AUDIT & ASSURANCE',
    tagline: 'Independent insight that strengthens financial confidence.',
    category: 'audit',
    description: 'Objective, rigorous examination of financial reporting and internal control mechanisms to assure shareholders, lenders, and regulatory authorities.',
    deliverables: [
      'Statutory Audits under Section 139 of the Companies Act, 2013',
      'Tax Audits under Section 44AB of the Income Tax Act, 1961',
      'Internal Financial Controls over Financial Reporting (IFCoFR) Evaluation',
      'Due Diligence Audits for Mergers, Acquisitions & PE Investment Rounds',
      'Special Investigative & Forensic Compliance Audits'
    ],
    statutoryForms: ['Form 3CA / 3CD', 'Independent Auditor’s Report (SA 700)', 'CARO 2020 Compliance Notes'],
    frequency: 'Quarterly reviews & Annual statutory reporting',
    targetClients: 'Mid-to-large corporates, funded ventures, credit-seeking businesses'
  },
  {
    id: 'roc-mca-compliance',
    number: '04',
    title: 'ROC & MCA COMPLIANCE',
    tagline: 'Keep your corporate records and regulatory obligations in order.',
    category: 'corporate',
    description: 'End-to-end secretarial maintenance and corporate governance adherence to ensure total legal hygiene and zero penalty vulnerability under the MCA.',
    deliverables: [
      'Annual Filings (AOC-4 Financial Statements & MGT-7/7A Annual Return)',
      'Board Meeting Resolutions, Minutes Documentation & Statutory Registers',
      'Director KYC Verification (DIR-3 KYC) & Significant Beneficial Ownership (BEN-2)',
      'Alteration of Share Capital, Allotment of Securities & Form PAS-3 Filings',
      'Change of Directors, Registered Office & Name Amendment Proceedings'
    ],
    statutoryForms: ['AOC-4 XBRL', 'MGT-7', 'DIR-3 KYC', 'PAS-3', 'INC-22', 'BEN-2'],
    frequency: 'Annual statutory filings and continuous event-based submissions',
    targetClients: 'Private & Public Limited companies, LLPs, Indian branch offices of foreign firms'
  },
  {
    id: 'accounting-bookkeeping',
    number: '05',
    title: 'ACCOUNTING & BOOKKEEPING',
    tagline: 'Accurate financial information for better business decisions.',
    category: 'advisory',
    description: 'Cloud-integrated management accounting frameworks delivering pristine ledger reconciliation, real-time MIS reporting, and audit-ready books.',
    deliverables: [
      'End-to-end Cloud Ledger Bookkeeping (Zoho Books, Tally Prime, QuickBooks)',
      'Monthly Executive MIS Reports with P&L, Balance Sheet & Cash Flow Diagnostics',
      'Bank, Vendor & Customer Ledger Reconciliations',
      'Payroll Computation, ESIC, EPFO, and Professional Tax Deductions',
      'Fixed Asset Register Maintenance & Depreciation Schedules'
    ],
    statutoryForms: ['PF Electronic Challan Return (ECR)', 'ESIC Monthly Return', 'PT Form V'],
    frequency: 'Weekly bookkeeping with Monthly executive MIS dashboards',
    targetClients: 'Fast-scaling businesses, international subsidiaries, professional practices'
  },
  {
    id: 'tax-business-advisory',
    number: '06',
    title: 'TAX & BUSINESS ADVISORY',
    tagline: 'Practical strategies for smarter financial and business decisions.',
    category: 'advisory',
    description: 'Strategic advisory bridging the gap between tax efficiency and corporate expansion, delivering customized structures for sustainable enterprise value.',
    deliverables: [
      'Cross-Border Taxation, Transfer Pricing Documentation & DTAA Structuring',
      'Corporate Reorganization, Demerger & Slump Sale Advisory',
      'Virtual CFO Advisory for Capital Allocation & Working Capital Optimization',
      'Incentive Scheme Advisory (PLI, Export Benefits, State Industrial Subsidies)',
      'Succession Planning, Family Trust Structuring & ESOP Architecture'
    ],
    statutoryForms: ['Form 3CEB (Transfer Pricing)', 'Advance Ruling Applications', 'Custom Valuation Reports'],
    frequency: 'Ongoing strategic retainer & deal-specific mandates',
    targetClients: 'Visionary founders, mid-market business owners, corporate leadership'
  }
];

export const ADVISORY_STAGES: AdvisoryStage[] = [
  {
    step: '01',
    title: 'COMPLY',
    shortDesc: 'Establish total statutory hygiene.',
    fullDesc: 'We build an unshakeable foundation across GST, MCA, Direct Tax, and statutory audits. Every filing is calibrated to prevent notices, penal interest, or compliance friction.',
    capabilities: [
      'Zero-defect GST & TDS statutory returns',
      'Timely MCA Annual Filings (AOC-4, MGT-7)',
      'Statutory & Internal Audit assurance',
      'Digitized regulatory compliance calendar'
    ],
    metricLabel: 'Statutory On-Time Filing Rate',
    metricValue: '99.8%'
  },
  {
    step: '02',
    title: 'UNDERSTAND',
    shortDesc: 'Decode the intelligence within your numbers.',
    fullDesc: 'Raw filing numbers are transformed into coherent management insight. We bridge statutory disclosures with operational KPIs to reveal cash-flow velocity, margin leaks, and operational bottlenecks.',
    capabilities: [
      'Monthly executive financial dashboards',
      'Gross margin & unit-economic diagnosis',
      'Working capital cycle breakdown',
      'Tax liability vs. cash-flow projections'
    ],
    metricLabel: 'Financial Visibility Horizon',
    metricValue: '30-Day Realtime'
  },
  {
    step: '03',
    title: 'OPTIMIZE',
    shortDesc: 'Engineer financial and structural efficiency.',
    fullDesc: 'We identify structural levers to minimize legitimate tax liability, claim full eligible input tax credits, streamline corporate entity architecture, and clean balance-sheet hygiene.',
    capabilities: [
      'Input Tax Credit (ITC) reconciliation & recovery',
      'Advance corporate tax minimization models',
      'Entity restructuring (Holding-Operating models)',
      'Vendor & contract tax optimization'
    ],
    metricLabel: 'Average Recovered ITC / Savings',
    metricValue: '14.2%'
  },
  {
    step: '04',
    title: 'GROW',
    shortDesc: 'Expand boldly with institutional readiness.',
    fullDesc: 'Equipped with clean books, strategic tax architecture, and airtight governance, your enterprise is pre-qualified for bank credit lines, VC/PE equity rounds, and global expansion.',
    capabilities: [
      'Due diligence readiness for institutional capital',
      'Virtual CFO & strategic financial planning',
      'Cross-border expansion & DTAA advisory',
      'Inorganic M&A evaluation & deal structuring'
    ],
    metricLabel: 'Client Capital Raised & Secured',
    metricValue: '₹450Cr+'
  }
];

export const TRUST_PILLARS = [
  {
    number: '01',
    title: 'PRECISION',
    subtitle: 'Accurate, structured and detail-driven execution.',
    description: 'In statutory law and taxation, a decimal error or delayed disclosure compounds into compounding interest and regulatory scrutiny. Our multi-tiered review protocols ensure zero defect output across every filing.'
  },
  {
    number: '02',
    title: 'RESPONSIVENESS',
    subtitle: 'Timely support for critical compliance and business decisions.',
    description: 'Corporate agility demands advisory partners who move at the speed of business. Direct partner access and guaranteed statutory turnarounds keep you insulated from regulatory bottlenecks.'
  },
  {
    number: '03',
    title: 'INTEGRATED ADVISORY',
    subtitle: 'Accounting, taxation, audit and regulatory requirements viewed together.',
    description: 'Siloed advisors cause blindspots. We unify direct tax, indirect tax, corporate law, and assurance into a cohesive institutional architecture that eliminates conflicting advice.'
  },
  {
    number: '04',
    title: 'LONG-TERM THINKING',
    subtitle: 'Solutions designed not only for today’s compliance but tomorrow’s growth.',
    description: 'We do not solve for the nearest deadline in isolation. Every entity choice, accounting treatment, and tax position is architected to support future fundraising, public listings, or generational succession.'
  }
];

export const TRUST_METRICS: TrustMetric[] = [
  {
    value: '₹1,500Cr+',
    label: 'Statutory Turnover Monitored',
    sublabel: 'Annual client turnover audited & structured',
    detail: 'Across technology, manufacturing, real estate & healthcare sectors.'
  },
  {
    value: '99.8%',
    label: 'On-Time Filing Adherence',
    sublabel: 'Across GST, MCA, TDS & Income Tax',
    detail: 'Eliminating penal interest and department show-cause notices.'
  },
  {
    value: '18+ Yrs',
    label: 'Senior Partner Experience',
    sublabel: 'Decades of collective domain leadership',
    detail: 'Alumni of premier auditing firms and regulatory advisory bodies.'
  },
  {
    value: '100%',
    label: 'Digital Audit Trail Hygiene',
    sublabel: 'Bank-grade documentation protocols',
    detail: 'Every reconciliation backed by verifiable cloud-stored working papers.'
  }
];

export const CLIENT_SEGMENTS: ClientSegment[] = [
  {
    id: 'smes',
    name: 'SMEs & Mid-Market',
    focus: 'Scale without regulatory friction',
    challenges: ['Cash flow trapped in un-reconciled ITC', 'Multi-state GST registrations', 'Evolving corporate audit thresholds'],
    solutions: ['Automated 2B vs GSTR-3B reconciliation', 'Centralized multi-state indirect tax compliance', 'Statutory audit preparation & MIS systems'],
    complianceStack: ['GST E-Invoicing', 'MCA AOC-4 & MGT-7', 'Tax Audit 44AB', 'Payroll ESIC/EPF']
  },
  {
    id: 'startups',
    name: 'Startups & Ventures',
    focus: 'Institutional hygiene for fundraising',
    challenges: ['ESOP taxation & FEMA compliance on foreign capital', 'Due diligence audit bottlenecks', 'Angel tax & Section 56(2)(viib) queries'],
    solutions: ['Cap table structuring & DPIIT recognition', 'Pre-round diligence audit clearance', 'Form FC-GPR & RBI reporting for FDI inflows'],
    complianceStack: ['DPIIT Startup India', 'Section 68/56 Tax Defense', 'FEMA FC-GPR', 'Virtual CFO Retainer']
  },
  {
    id: 'corporates',
    name: 'Corporates & Subsidiaries',
    focus: 'Cross-border governance & risk containment',
    challenges: ['Transfer pricing controversies & BEPS compliance', 'Internal financial controls over reporting (IFCoFR)', 'Complex corporate restructuring'],
    solutions: ['Benchmarking & Form 3CEB documentation', 'Statutory internal audit matrices', 'Amalgamation, demerger & fast-track merger petitions'],
    complianceStack: ['Transfer Pricing 3CEB', 'CARO 2020 & IFCoFR', 'NCLT Merger Filings', 'Secretarial Audit']
  },
  {
    id: 'professionals',
    name: 'Professionals & Firms',
    focus: 'Legitimate tax shielding & personal wealth structuring',
    challenges: ['Section 44ADA presumptive limits', 'Advance tax penalty traps under Section 234B/C', 'LLP partner profit allocation'],
    solutions: ['Optimized compensation & dividend planning', 'Advance tax estimation models', 'Family office & private trust establishment'],
    complianceStack: ['ITR-3 / ITR-4', 'Section 44ADA', 'Advance Tax Calculators', 'Private Family Trusts']
  },
  {
    id: 'growing-businesses',
    name: 'Growing Businesses',
    focus: 'Transitioning from sole-proprietor to corporate entity',
    challenges: ['Capital gains on business conversion', 'Vendor credibility & credit underwriting', 'Banking syndicate loan covenants'],
    solutions: ['Slump sale / conversion under Section 47(xiii)', 'CMA data preparation & balance sheet enhancement', 'Full corporate governance rollout'],
    complianceStack: ['ROC SPICe+ Conversion', 'GST Transfer of Business', 'CMA Reports', 'Quarterly Banking MIS']
  },
  {
    id: 'entrepreneurs',
    name: 'Entrepreneurs',
    focus: 'Ideation to compliant market launch in 7 days',
    challenges: ['Choosing between Private Ltd vs LLP', 'Securing requisite trade & statutory licenses', 'Early-stage co-founder equity alignment'],
    solutions: ['Founding structure advisory', 'Single-window statutory registration bundle', 'Founder vesting agreements & IP assignment'],
    complianceStack: ['Name Approval (RUN)', 'MoA/AoA Drafting', 'MSME Registration', 'GST Registration']
  }
];

export const INSIGHTS_DATA: InsightArticle[] = [
  {
    id: 'gst-einvoicing-thresholds',
    category: 'GST',
    title: 'Demystifying Mandatory GST E-Invoicing Thresholds & Input Credit Risk for 2026',
    excerpt: 'How the latest CBIC notifications regarding automated reconciliation and strict E-Invoicing mandates impact mid-market B2B cash cycles.',
    readTime: '4 min read',
    date: 'September 2026',
    author: 'Ascent Tax Practice Group',
    content: [
      'The Central Board of Indirect Taxes and Customs (CBIC) continues to tighten the input tax credit (ITC) verification loop through dynamic cross-matching of GSTR-1, GSTR-2B, and E-Way Bill registers.',
      'Enterprises crossing the statutory turnover threshold who fail to generate IRNs (Invoice Reference Numbers) face immediate supplier payment hold-ups and denial of credit under Section 16(2)(aa).',
      'Our team implements end-to-end ERP validation scripts that catch missing vendor IRNs before monthly filings occur, eliminating credit blockage.'
    ]
  },
  {
    id: 'mca-annual-compliance-calendar',
    category: 'MCA',
    title: 'MCA Compliance Playbook: Key Filings, DIR-3 KYC, and CARO 2020 Reporting Nuances',
    excerpt: 'A comprehensive briefing for company directors on managing significant beneficial ownership (BEN-2), related-party disclosures, and annual returns.',
    readTime: '5 min read',
    date: 'September 2026',
    author: 'Corporate Secretarial Desk',
    content: [
      'The Ministry of Corporate Affairs (MCA) has significantly enhanced automated data sharing with the Income Tax Department and financial institutions via MCA21 Version 3.',
      'Forms AOC-4, MGT-7, and director KYC declarations (DIR-3 KYC) are scrutinized for discrepancies in registered offices, active directorship ceilings, and loan disclosures under Section 185.',
      'Ascent Advisors delivers structured annual corporate health checks ensuring all statutory registers and board resolutions remain completely airtight.'
    ]
  },
  {
    id: 'direct-tax-optimization-ventures',
    category: 'INCOME TAX',
    title: 'Strategic Direct Tax Architecture for Scaling Enterprises: Advance Tax & Capital Depreciation',
    excerpt: 'Navigating Section 115BAA corporate tax regimes, accelerated software depreciation, and international withholding tax under Section 195.',
    readTime: '6 min read',
    date: 'August 2026',
    author: 'Direct Tax Advisory Team',
    content: [
      'Selecting the concessional 22% corporate tax rate under Section 115BAA requires precise financial modeling of forgone deductions versus base tax savings.',
      'Furthermore, quarterly advance tax estimations require rolling quarterly revenue forecasts to avoid penal interest levied under Sections 234B and 234C.',
      'We construct predictive direct tax schedules that protect working capital while maintaining conservative statutory reserves.'
    ]
  },
  {
    id: 'internal-financial-controls-audit',
    category: 'AUDIT',
    title: 'Strengthening Internal Financial Controls (IFCoFR): What Statutory Auditors Look For',
    excerpt: 'How establishing disciplined purchase-to-pay and order-to-cash internal controls transforms an audit from an ordeal into a strategic advantage.',
    readTime: '5 min read',
    date: 'August 2026',
    author: 'Assurance & Risk Desk',
    content: [
      'Under Section 143(3)(i) of the Companies Act, statutory auditors must issue a definitive opinion on the adequacy and operating effectiveness of a company’s internal financial controls.',
      'Documenting key authorization matrices, segregation of duties in cloud accounting software, and IT general controls prevents adverse audit qualifications.',
      'Ascent’s pre-audit readiness framework ensures our clients enter the annual statutory audit with complete, self-reconciling workpapers.'
    ]
  },
  {
    id: 'cloud-accounting-mis-advisory',
    category: 'ADVISORY',
    title: 'From Ledger Entries to Boardroom Clarity: Building a Modern Executive MIS Architecture',
    excerpt: 'Why traditional backward-looking accounting fails modern leadership, and how to build forward-looking unit-economic reporting.',
    readTime: '4 min read',
    date: 'July 2026',
    author: 'Management Consulting Team',
    content: [
      'Compliance numbers are the byproduct of economic activity. When synthesized effectively, your trial balance reveals operational inefficiencies months before they show up as cash distress.',
      'By standardizing chart of accounts and integrating real-time bank feeds into tailored executive dashboards, leadership gains visibility into debtor aging, gross contribution margin, and burn rates.',
      'Ascent helps clients transition from retroactive bookkeeping to proactive strategic financial steering.'
    ]
  },
  {
    id: 'transfer-pricing-arm-length',
    category: 'INCOME TAX',
    title: 'Cross-Border Transactions & Arm’s Length Pricing: Mitigating Transfer Pricing Risk',
    excerpt: 'Essential documentation protocols under Form 3CEB for Indian entities providing software development or shared services to foreign parent entities.',
    readTime: '6 min read',
    date: 'July 2026',
    author: 'International Tax Practice',
    content: [
      'As Indian entities expand global contracting, cross-border related-party billing is heavily scrutinized by the Transfer Pricing Officers (TPO).',
      'Choosing the appropriate method (TNMM vs. Cost Plus) and compiling comprehensive local file benchmarking studies are critical to avoiding adjustment demands.',
      'Ascent advises on defensive transfer pricing studies backed by authentic database screening and verifiable cost-allocation methodologies.'
    ]
  }
];
