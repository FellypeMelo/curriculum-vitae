import {
  Boxes,
  BrainCircuit,
  Code2,
  Database,
  Layers,
  Lock,
  ServerCog,
  ShieldCheck,
  Cpu,
  type LucideIcon,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/* Identity                                                            */
/* ------------------------------------------------------------------ */

export const PROFILE = {
  name: 'Fellype Samuel de Melo',
  fullName: 'Fellype Samuel dos Santos de Melo',
  roles: [
    'Software Engineer',
    'Full Stack Developer',
    'Arquitetura de Software',
    'Inteligência Artificial',
  ],
  location: 'Rio de Janeiro, RJ',
  email: 'fellypesamuel1@hotmail.com',
  github: 'https://github.com/FellypeMelo',
  githubLabel: 'github.com/FellypeMelo',
  linkedin: 'https://www.linkedin.com/in/fellype-samuel',
  linkedinLabel: 'linkedin.com/in/fellype-samuel',

  // Hero thesis — the architecture-first stance.
  thesisLead: 'Um bom software começa antes da implementação.',
  thesisBody:
    'Meu principal interesse está em compreender problemas, levantar requisitos, modelar soluções e definir arquiteturas que permitam a evolução sustentável de sistemas.',

  summary:
    'Software Engineer e estudante do último semestre de Análise e Desenvolvimento de Sistemas, com foco em arquitetura de software, engenharia de software e Inteligência Artificial aplicada. Atuação como Tech Lead em projetos de desenvolvimento full stack (React, FastAPI) e de Deep Learning aplicado à pesquisa científica, com publicação como primeiro autor.',

  practices:
    'Aplico Clean Architecture, SOLID, Domain-Driven Design, Design Patterns, Clean Code, TDD e Extreme Programming na busca por soluções escaláveis e bem fundamentadas.',
};

/* Real, verifiable facts (not invented metrics) shown as the hero fact strip. */
export const FACTS: { label: string; value: string }[] = [
  { label: 'Papel', value: 'Tech Lead' },
  { label: 'Pesquisa', value: '1º autor · artigo publicado' },
  { label: 'Foco', value: 'Arquitetura + IA aplicada' },
  { label: 'Formação', value: 'ADS · último semestre' },
];

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  summary: string;
  points: string[];
  tags: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Laboratório Fuzzy',
    role: 'Tech Lead & Pesquisador em IA',
    period: '2025 - Atual',
    summary:
      'Liderança técnica de um sistema de Deep Learning para classificação automática de embriões humanos, em parceria com pesquisa de mestrado.',
    points: [
      'Definição da arquitetura da solução e treinamento de modelos em PyTorch (ResNet-18 com validação cruzada estratificada k-fold) para a classificação de embriões.',
      'Preparação de artigo científico com os resultados do pipeline de classificação de embriões, para submissão à conferência Latin.Science 2026.',
      'Desenvolvimento da API e integração da Inteligência Artificial à aplicação web.',
      'Em projeto distinto, segmentação de imagens de microscopia eletrônica (YOLOv8-seg) para identificar estruturas do parasita Trypanosoma cruzi.',
    ],
    tags: ['PyTorch', 'ResNet-18', 'YOLOv8-seg', 'Deep Learning', 'FastAPI', 'Pesquisa'],
  },
  {
    company: 'Freelancer',
    role: 'Desenvolvedor Full Stack',
    period: '2025 - Atual',
    summary:
      'Aplicações web completas conduzindo o ciclo inteiro: levantamento de requisitos, implementação, testes e entrega.',
    points: [
      'Desenvolvimento com React, WordPress e Elementor, com atuação direta junto aos clientes.',
      'Foco em usabilidade, responsividade e performance das soluções entregues.',
    ],
    tags: ['React', 'WordPress', 'Elementor', 'UI/UX'],
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export interface ProjectItem {
  name: string;
  kind: string;
  status: string;
  role: string;
  description: string;
  points: string[];
  stack: string[];
  icon: LucideIcon;
}

export const PROJECTS: ProjectItem[] = [
  {
    name: 'OpenChatBot',
    kind: 'Plataforma de agentes conversacionais locais',
    status: 'Em desenvolvimento',
    role: 'Idealizador & Arquiteto',
    description:
      'Plataforma para agentes conversacionais com execução local, memória persistente e gerenciamento de contexto.',
    points: [
      'Arquitetura modular com modelagem comportamental para personalização de agentes inteligentes.',
      'Clean Architecture, SOLID, Domain-Driven Design, Design Patterns e Test-Driven Development.',
    ],
    stack: ['React', 'Vite', 'Python', 'FastAPI'],
    icon: BrainCircuit,
  },
  {
    name: 'Educa',
    kind: 'Sistema de gerenciamento escolar',
    status: 'Trabalho de Conclusão de Curso',
    role: 'Tech Lead',
    description:
      'Sistema de gestão escolar conduzido como TCC, da arquitetura à entrega.',
    points: [
      'Liderança técnica do desenvolvimento: arquitetura da solução e levantamento de requisitos.',
      'Documentação técnica e implementação da plataforma.',
    ],
    stack: ['Arquitetura', 'Requisitos', 'Full Stack'],
    icon: Boxes,
  },
];

/* ------------------------------------------------------------------ */
/* Publications                                                        */
/* ------------------------------------------------------------------ */

export interface PublicationItem {
  status: 'published' | 'in-prep';
  statusLabel: string;
  title: string;
  citation: string;
  venue: string;
  year: string;
  doi?: string;
  doiHref?: string;
}

export const PUBLICATIONS: PublicationItem[] = [
  {
    status: 'published',
    statusLabel: 'Publicado · Primeiro autor',
    title:
      'Arquitetura Algorítmica para Atenção Sustentável: o Modelo Be-Productive como Resposta à Sobrecarga Cognitiva no Capitalismo de Vigilância',
    citation: 'MELO, F. S. S. et al.',
    venue: 'Revista Tópicos',
    year: '2026',
    doi: '10.70773/revistatopicos/781363235',
    doiHref: 'https://doi.org/10.70773/revistatopicos/781363235',
  },
  {
    status: 'in-prep',
    statusLabel: 'Em preparação',
    title:
      'Pipeline de classificação automática de embriões humanos com Deep Learning',
    citation: 'Laboratório Fuzzy',
    venue: 'Latin.Science',
    year: '2026',
  },
];

/* ------------------------------------------------------------------ */
/* Skills — grouped, no invented proficiency scores                    */
/* ------------------------------------------------------------------ */

export interface SkillGroup {
  label: string;
  icon: LucideIcon;
  items: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: 'Engenharia de Software',
    icon: Layers,
    items: ['Clean Architecture', 'SOLID', 'DDD', 'Design Patterns', 'Clean Code', 'TDD', 'XP'],
  },
  {
    label: 'Inteligência Artificial',
    icon: BrainCircuit,
    items: ['PyTorch', 'Deep Learning', 'Machine Learning', 'CNN', 'Transformers', 'NLP', 'Watson Studio'],
  },
  {
    label: 'Linguagens',
    icon: Code2,
    items: ['Python', 'JavaScript', 'Java', 'PHP', 'C'],
  },
  {
    label: 'Front-end',
    icon: Boxes,
    items: ['React', 'Vite', 'HTML', 'CSS', 'WordPress', 'Elementor'],
  },
  {
    label: 'Back-end',
    icon: ServerCog,
    items: ['FastAPI', 'APIs REST'],
  },
  {
    label: 'Dados',
    icon: Database,
    items: ['Análise de Dados'],
  },
];

/* ------------------------------------------------------------------ */
/* Education                                                           */
/* ------------------------------------------------------------------ */

export interface EducationItem {
  institution: string;
  course: string;
  period: string;
  details: string;
}

export const EDUCATION: EducationItem[] = [
  {
    institution: 'FAETERJ-Rio',
    course: 'Análise e Desenvolvimento de Sistemas',
    period: 'Último semestre',
    details:
      'Engenharia de software, levantamento de requisitos, banco de dados e desenvolvimento full stack.',
  },
  {
    institution: 'Ensino Médio Técnico',
    course: 'Informática Industrial',
    period: '2020 - 2023',
    details:
      'Formação técnica voltada para programação, redes e manutenção de sistemas computacionais.',
  },
  {
    institution: 'Microcamp',
    course: 'Hardware e Robótica',
    period: '2019 - 2021',
    details: 'Montagem e manutenção de computadores e lógica aplicada à robótica.',
  },
];

/* ------------------------------------------------------------------ */
/* Certifications                                                      */
/* ------------------------------------------------------------------ */

export interface CertItem {
  name: string;
  issuer: string;
  topics: string;
  icon: LucideIcon;
}

export const CERTIFICATIONS: CertItem[] = [
  {
    name: 'AI Fundamentals with IBM SkillsBuild',
    issuer: 'Cisco & IBM',
    topics: 'Fundamentos de IA, NLP, visão computacional, ética em IA e Watson Studio.',
    icon: BrainCircuit,
  },
  {
    name: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM SkillsBuild',
    topics: 'Aplicações de IA, chatbots, redes neurais, machine learning e deep learning.',
    icon: Cpu,
  },
  {
    name: 'Java Foundations',
    issuer: 'Oracle Academy',
    topics: 'Fundamentos de programação orientada a objetos em Java.',
    icon: Code2,
  },
  {
    name: 'Ethical Hacker',
    issuer: 'Cisco Networking Academy',
    topics: 'Conceitos de pentest, vulnerabilidades e segurança de redes.',
    icon: Lock,
  },
  {
    name: 'Network Defense',
    issuer: 'Cisco Networking Academy',
    topics: 'Defesa de rede, criptografia, firewall, segurança em nuvem e autenticação.',
    icon: ShieldCheck,
  },
];

/* ------------------------------------------------------------------ */
/* Languages                                                           */
/* ------------------------------------------------------------------ */

export const LANGUAGES: { name: string; level: string }[] = [
  { name: 'Português', level: 'Nativo' },
  { name: 'Inglês', level: 'Avançado-Intermediário (B2)' },
];

/* ------------------------------------------------------------------ */
/* Navigation sections                                                 */
/* ------------------------------------------------------------------ */

export const SECTIONS: { id: string; label: string }[] = [
  { id: 'inicio', label: 'Início' },
  { id: 'perfil', label: 'Perfil' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'publicacoes', label: 'Publicações' },
  { id: 'stack', label: 'Stack' },
  { id: 'formacao', label: 'Formação' },
  { id: 'contato', label: 'Contato' },
];
