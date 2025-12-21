import { 
  BrainCircuit, 
  Code2, 
  Database, 
  Terminal,
} from 'lucide-react';

/**
 * Profile information for the user.
 * Contains personal details, links to social profiles, and a professional summary.
 */
export const PROFILE = {
  name: "Fellype Samuel Dos Santos de Melo",
  role: "Analista de Sistemas & Desenvolvedor Full Stack",
  tagline: "Especialista em Requisitos, IA e Desenvolvimento Web.",
  github: "https://github.com/FellypeMelo",
  linkedin: "https://www.linkedin.com/in/fellype-samuel",
  summary: "Atuar como Analista de Sistemas, com foco em levantamento e análise de requisitos, documentação técnica e apoio ao desenvolvimento de soluções de software. Interesse também em atuar como Programador, contribuindo no desenvolvimento front-end e back-end de aplicações."
};

/**
 * List of professional skills.
 * Each skill includes a name, category, and proficiency level (0-100).
 */
export const SKILLS = [
  { name: "Python", category: "Backend & IA", level: 90 },
  { name: "Java", category: "Backend", level: 75 },
  { name: "ReactJS", category: "Frontend", level: 80 },
  { name: "JavaScript", category: "Frontend", level: 85 },
  { name: "Machine Learning", category: "IA", level: 70 },
  { name: "WordPress / Elementor", category: "CMS", level: 95 },
  { name: "Transformers / CNN", category: "IA", level: 65 },
  { name: "SQL / Dados", category: "Database", level: 70 },
];

/**
 * Professional work experience history.
 * Includes company name, role, period of employment, description of responsibilities, and relevant tags.
 */
export const EXPERIENCE = [
  {
    company: "Laboratório Fuzzy",
    role: "Pesquisador e Desenvolvedor Júnior em IA",
    period: "2025 – Atual",
    description: "Desenvolvimento de modelos de inteligência artificial para classificação de embriões com Python, Transformers e técnicas de Deep Learning. Atuação direta na preparação de datasets, ajustes de parâmetros e planejamento da arquitetura dos modelos.",
    tags: ["Python", "Deep Learning", "Transformers", "Pesquisa"]
  },
  {
    company: "Freelancer",
    role: "Desenvolvedor Web Júnior",
    period: "2025 – Atual",
    description: "Criação e manutenção de sites utilizando WordPress e Elementor, com foco em usabilidade, design funcional e responsividade. Responsável por todo o ciclo de desenvolvimento, desde o contato com o cliente até a entrega final.",
    tags: ["WordPress", "Elementor", "UI/UX", "Full Cycle"]
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
    details: "Engenharia de software, levantamento de requisitos, banco de dados e desenvolvimento full-stack."
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
  { name: "Artificial Intelligence Fundamentals", issuer: "IBM SkillsBuild", icon: BrainCircuit },
  { name: "Ethical Hacker", issuer: "Cisco Networking Academy", icon: Terminal },
  { name: "Network Defense", issuer: "Cisco Networking Academy", icon: Database },
  { name: "Java Foundations", issuer: "Oracle Academy", icon: Code2 },
];
