import { 
  BrainCircuit, 
  Code2, 
  Database, 
  Terminal,
  Cpu,
  Globe,
  Lock,
  MessageSquare,
  Microscope,
  Zap
} from 'lucide-react';

/**
 * Profile information for the user.
 * Contains personal details, links to social profiles, and a professional summary.
 */
export const PROFILE = {
  name: "Fellype Samuel Melo",
  role: "Analista de Sistemas & Desenvolvedor Full Stack",
  tagline: "Foco em Inteligência Artificial, P&D e Soluções para Laboratórios.",
  github: "https://github.com/FellypeMelo",
  linkedin: "https://www.linkedin.com/in/fellype-samuel",
  summary: "Enquanto muitos juniores esperam escopo pronto, eu ajudo a construir a arquitetura – e entrego soluções completas como o Audio Lab. Sou um profissional que pensa em datasets, parâmetros e arquitetura – e que tem experiência comprovada em dois projetos reais de IA (classificação de embriões + transcrição de áudio para laboratórios).",
  availability: "Disponível para Projetos Freelancer, Contrato Temporário, CLT ou PJ com foco em P&D."
};

/**
 * List of professional skills.
 * Each skill includes a name, category, and proficiency level (0-100).
 */
export const SKILLS = [
  { name: "Python", category: "Backend & IA", level: 95 },
  { name: "Deep Learning", category: "IA", level: 85 },
  { name: "Transformers / CNN", category: "IA", level: 80 },
  { name: "NLP", category: "IA", level: 75 },
  { name: "ReactJS", category: "Frontend", level: 85 },
  { name: "JavaScript / TS", category: "Frontend", level: 90 },
  { name: "Java", category: "Backend", level: 75 },
  { name: "PHP", category: "Backend", level: 70 },
  { name: "WordPress / Elementor", category: "CMS", level: 95 },
  { name: "SQL / Dados", category: "Database", level: 80 },
  { name: "Watson Studio", category: "IA", level: 70 },
  { name: "Ethical Hacking", category: "Security", level: 65 },
  { name: "Segurança de Redes", category: "Security", level: 70 },
  { name: "C (Avançado)", category: "Systems", level: 85 },
];

/**
 * Professional work experience history.
 * Includes company name, role, period of employment, description of responsibilities, and relevant tags.
 */
export const EXPERIENCE = [
  {
    company: "Audio Lab (Projeto Próprio)",
    role: "Idealizador & Full Stack AI Engineer",
    period: "Fev 2026 – Mar 2026",
    description: "Solução completa de reconhecimento de fala e automação para ambientes científicos. Traduz problemas do mundo real (como registro em biotérios) em software funcional, permitindo transcrição voz-para-texto e lembretes estruturados para aumentar a produtividade e rastreabilidade em laboratórios.",
    tags: ["Python", "Speech Recognition", "Audio Processing", "Laboratórios", "Automação"]
  },
  {
    company: "Laboratório Fuzzy",
    role: "Pesquisador e Desenvolvedor Júnior em IA",
    period: "2025 – Atual",
    description: "Desenvolvimento de modelos de inteligência artificial para classificação de embriões com Python, Transformers e técnicas de Deep Learning. Atuação direta na preparação de datasets, ajustes de parâmetros e planejamento da arquitetura dos modelos.",
    tags: ["Python", "Deep Learning", "Transformers", "Dataset Prep", "Pesquisa"]
  },
  {
    company: "Freelancer",
    role: "Desenvolvedor Web Júnior",
    period: "2025 – Atual",
    description: "Criação e manutenção de sites utilizando WordPress e Elementor, com foco em usabilidade, design funcional e responsividade. Responsável por todo o ciclo de desenvolvimento, desde o contato com o cliente até a entrega final.",
    tags: ["WordPress", "Elementor", "UI/UX", "Full Cycle", "Design"]
  }
];

/**
 * Educational background.
 * Lists institutions, courses, status, and details of the curriculum.
 */
export const EDUCATION = [
  {
    institution: "FAETERJ-Rio",
    course: "Análise e Desenvolvimento de Sistemas",
    status: "Cursando - 4º Período",
    details: "Engenharia de software, levantamento de requisitos, banco de dados e desenvolvimento full-stack. Foco em inovação tecnológica."
  },
  {
    institution: "Ensino Médio Técnico",
    course: "Informática Industrial",
    status: "2020 - 2023",
    details: "Formação técnica voltada para programação, redes e manutenção de sistemas computacionais."
  },
  {
    institution: "Microcamp",
    course: "Hardware e Robótica",
    status: "2019 - 2021",
    details: "Montagem e manutenção de computadores, além de lógica aplicada à robótica."
  }
];

/**
 * List of certifications and achievements.
 * Includes the name of the certification, the issuing organization, and an associated icon.
 */
export const CERTIFICATIONS = [
  { name: "AI Fundamentals", issuer: "IBM SkillsBuild & Cisco", icon: BrainCircuit },
  { name: "Artificial Intelligence Fundamentals", issuer: "IBM SkillsBuild", icon: Cpu },
  { name: "Ethical Hacker", issuer: "Cisco Networking Academy", icon: Lock },
  { name: "Network Defense", issuer: "Cisco Networking Academy", icon: Database },
  { name: "Java Foundations", issuer: "Oracle Academy", icon: Code2 },
];

/**
 * Project categories for P&D availability.
 */
export const PROJECT_TYPES = [
  {
    title: "Modelos de IA com Python",
    description: "Classificação, visão computacional, NLP, reconhecimento de fala.",
    icon: Microscope
  },
  {
    title: "Datasets para Pesquisa",
    description: "Preparação, limpeza e estruturação de grandes volumes de dados.",
    icon: Database
  },
  {
    title: "Arquitetura de Soluções",
    description: "Planejamento de soluções inteligentes e integração de IA em sistemas.",
    icon: Zap
  },
  {
    title: "Automação Científica",
    description: "Transcrição, lembretes por voz e registro estruturado para laboratórios.",
    icon: MessageSquare
  }
];

/**
 * Insights for the TERMINAL.STUDIO layer.
 * Maps target IDs to descriptive design/technical notes.
 */
export const INSIGHTS = {
  "hero-title": "Typography: Geist Mono + Inter combination for high-contrast 'Studio' vibe.",
  "about-header": "Design: Sticky sidebar pattern inspired by minimalist architectural portfolios.",
  "experience-header": "Strategy: Raw log-style layout to emphasize technical transparency.",
  "skills-header": "Aesthetic: Matrix-green accents used sparingly to avoid 'hacker' clichés.",
  "education-header": "Layout: Balanced grid system ensuring readability across large screens.",
  "certifications-header": "Micro-interactions: Glitch hover effects added to emphasize interactivity.",
  "languages-list": "Detail: Minimalist bar charts showing proficiency levels.",
  "availability-info": "Status: Real-time availability indicator for professional contact."
};
