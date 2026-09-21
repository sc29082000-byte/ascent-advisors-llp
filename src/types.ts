export interface ServiceDetail {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  category: 'tax' | 'corporate' | 'audit' | 'advisory';
  deliverables: string[];
  statutoryForms: string[];
  frequency: string;
  targetClients: string;
}

export interface AdvisoryStage {
  step: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  capabilities: string[];
  metricLabel: string;
  metricValue: string;
}

export interface InsightArticle {
  id: string;
  category: 'GST' | 'INCOME TAX' | 'MCA' | 'AUDIT' | 'ADVISORY';
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  author: string;
  content: string[];
}

export interface TrustMetric {
  value: string;
  label: string;
  sublabel: string;
  detail: string;
}

export interface ClientSegment {
  id: string;
  name: string;
  focus: string;
  challenges: string[];
  solutions: string[];
  complianceStack: string[];
}
