import {
  Boxes,
  BrainCircuit,
  Code2,
  Database,
  Layers,
  Microscope,
  Receipt,
  ServerCog,
  Cpu,
  Wallet,
  Binary,
  type LucideIcon,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/* Identity & Metadata                                                 */
/* ------------------------------------------------------------------ */

export const PROFILE = {
  name: 'Fellype Melo',
  fullName: 'Fellype Samuel de Melo',
  fullLegalName: 'Fellype Samuel dos Santos de Melo',
  title: 'Software Engineer & IA',
  degree: 'ADS · Graduado · FAETERJ-Rio',
  location: 'Rio de Janeiro, RJ · Brasil',
  locationCoords: "22°54'S 43°12'W",
  status: 'Disponível p/ Projetos & Contratos',
  email: 'fellypesamuel1@gmail.com',
  github: 'https://github.com/FellypeMelo',
  githubLabel: 'github.com/FellypeMelo',
  linkedin: 'https://www.linkedin.com/in/fellype-samuel',
  linkedinLabel: 'linkedin.com/in/fellype-samuel',

  // Hero thesis statement
  thesisLead: '“Um bom software começa antes da implementação.”',
  thesisBody:
    'Engenharia de software fundamentada, Clean Architecture, isolamento estrito de domínio e Inteligência Artificial aplicada à pesquisa biomédica e sistemas científicos de alto throughput.',

  summary:
    'Fellype Samuel de Melo é graduado em Análise e Desenvolvimento de Sistemas pela FAETERJ-Rio. Atua como Tech Lead e pesquisador em Inteligência Artificial aplicada, com foco no desenvolvimento de sistemas distribuídos robustos, pipelines de Deep Learning médico e arquitetura orientada ao isolamento de domínio.',

  methodologyLead:
    '“Compreender o problema a fundo, levantar requisitos reais e modelar a solução antes de escrever código. A arquitetura deve definir invariantes, isolar o domínio, reduzir acoplamento e permitir evolução segura.”',

  practices:
    'Aplico Clean Architecture, SOLID, Domain-Driven Design, Design Patterns, Clean Code, TDD e Extreme Programming na busca por soluções escaláveis, seguras e bem fundamentadas.',

  doi: '10.70773/revistatopicos/781363235',
  doiHref: 'https://doi.org/10.70773/revistatopicos/781363235',
};

/* Core Invariants displayed in terminal manifesto */
export const MANIFESTO_INVARIANTS = {
  statement: 'A arquitetura define invariantes; o código apenas as preserva.',
  foundations: ['Clean Architecture', 'SOLID', 'DDD', 'TDD', 'XP'],
  invariants: '{ strict_domain: true, zero_side_effects: true, reproducible: true }',
  sha256: 'e3b0c44298fc',
};

/* Core Directives */
export const CORE_DIRECTIVES = [
  { num: '01.', text: 'Isolamento estrito da regra de negócio' },
  { num: '02.', text: 'Eliminação ativa de Data Leakage' },
  { num: '03.', text: 'Testabilidade como critério de design' },
  { num: '04.', text: 'Local-first & integridade criptográfica' },
];

/* ------------------------------------------------------------------ */
/* Facts & Metrics                                                     */
/* ------------------------------------------------------------------ */

export const FACTS = [
  { label: 'TITULAÇÃO', value: 'Graduado ADS', sub: 'FAETERJ-Rio' },
  { label: 'PAPEL ATUAL', value: 'Tech Lead / Pesquisador', sub: 'Laboratório Fuzzy' },
  { label: 'PRODUÇÃO', value: 'Primeiro Autor', sub: 'Revista Tópicos (2026)' },
  { label: 'STATUS', value: 'Disponível', sub: 'Projetos & Contratos', highlight: true },
];

/* ------------------------------------------------------------------ */
/* Pipeline Stages (Section 02)                                       */
/* ------------------------------------------------------------------ */

export interface PipelineStage {
  id: number;
  stage: string;
  name: string;
  summary: string;
  description: string;
}

export const PIPELINE_STAGES: PipelineStage[] = [
  {
    id: 1,
    stage: 'STAGE 01',
    name: 'COMPREENDER',
    summary: 'Elicitação de requisitos reais, delimitação de escopo e identificação de restrições operacionais críticas.',
    description: 'STAGE 01: COMPREENDER // Elicitação rigorosa de escopo e limites computacionais.',
  },
  {
    id: 2,
    stage: 'STAGE 02',
    name: 'MODELAR',
    summary: 'Modelagem de domínio, diagramas de limites contextuais (DDD) e invariantes matemáticas explícitas.',
    description: 'STAGE 02: MODELAR // Especificação formal de invariantes e limites contextuais DDD.',
  },
  {
    id: 3,
    stage: 'STAGE 03',
    name: 'ISOLAR',
    summary: 'Separação estrita de portas e adaptadores, garantindo zero dependência externa no núcleo de negócio.',
    description: 'STAGE 03: ISOLAR // Portas e adaptadores hexagonais sem acoplamento externo.',
  },
  {
    id: 4,
    stage: 'STAGE 04',
    name: 'VALIDAR',
    summary: 'Criação de suítes de testes unitários e de integração baseadas em invariantes (TDD / XP practices).',
    description: 'STAGE 04: VALIDAR // Casos de teste de invariantes e verificação matemática estrita.',
  },
  {
    id: 5,
    stage: 'STAGE 05',
    name: 'IMPLEMENTAR',
    summary: 'Execução limpa e tipada, aplicando SOLID, DRY, KISS e profiling contínuo de recursos computacionais.',
    description: 'STAGE 05: IMPLEMENTAR // Código limpo e defensivo com zero tolerância a bugs estáticos.',
  },
  {
    id: 6,
    stage: 'STAGE 06',
    name: 'EVOLUIR',
    summary: 'Refatoração contínua suportada por suíte de testes impenetrável e documentação arquitetural viva.',
    description: 'STAGE 06: EVOLUIR // Refatoração contínua suportada por suíte de testes impenetrável.',
  },
];

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  badge: string;
  summary: string;
  achievements: { title: string; subtitle: string; description: string }[];
  points: string[];
  tags: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'LABORATÓRIO FUZZY',
    role: 'TECH LEAD & PESQUISADOR EM IA',
    period: '2025 — PRESENTE',
    badge: 'TECH LEAD & PESQUISADOR EM IA',
    summary:
      'Liderança técnica no desenvolvimento de modelos de Deep Learning aplicados à medicina reprodutiva humana (classificação e segmentação de embriões). Responsável direto pela arquitetura de software, rigor de engenharia e modelagem estatística.',
    achievements: [
      {
        title: 'CONQUISTA 01',
        subtitle: 'Correção de Data Leakage',
        description:
          'Identificação e erradicação de vazamento estrutural via StratifiedGroupKFold por embrião em 18.520 imagens.',
      },
      {
        title: 'CONQUISTA 02',
        subtitle: 'Clean Architecture',
        description:
          'Isolamento completo entre os pipelines PyTorch, algoritmos YOLOv8-seg e as interfaces clínicas.',
      },
      {
        title: 'CONQUISTA 03',
        subtitle: 'Edge Quantization',
        description:
          'Otimização INT8 com 65% de redução de memória e ganho de 1.58x na latência de inferência hospitalar.',
      },
    ],
    points: [
      'Definição da arquitetura da solução (Clean Architecture) e treinamento de modelos em PyTorch (ResNet/EfficientNet) para a classificação de fase embrionária, com validação cruzada agrupada por embrião (StratifiedGroupKFold) após diagnosticar e corrigir vazamento de dados entre quadros do mesmo embrião na validação original.',
      'Preparação de artigo científico com os resultados do pipeline de classificação de embriões, para submissão à conferência Latin.Science 2026.',
      'Desenvolvimento da API e integração da Inteligência Artificial à aplicação web.',
      'Em projeto distinto, segmentação de imagens de microscopia eletrônica (YOLOv8-seg) para identificar estruturas do parasita Trypanosoma cruzi.',
    ],
    tags: ['PyTorch', 'ResNet/EfficientNet', 'YOLOv8-seg', 'Deep Learning', 'FastAPI', 'Pesquisa'],
  },
  {
    company: 'DESENVOLVEDOR FULL STACK INDEPENDENTE',
    role: 'CONSULTORIA & ARQUITETURA',
    period: '2025 — PRESENTE',
    badge: 'CONSULTORIA & ARQUITETURA',
    summary:
      'Atuação autônoma ponta a ponta: do levantamento de requisitos de negócio à entrega e monitoramento em produção. Foco em aplicações reativas de alta fidelidade com React, TypeScript, Vite, Tailwind CSS e backends orientados a microsserviços testáveis.',
    achievements: [],
    points: [
      'Desenvolvimento com React, WordPress e Elementor, com atuação direta junto aos clientes.',
      'Foco em usabilidade, responsividade e performance das soluções entregues.',
    ],
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Fastify', 'UI/UX'],
  },
];

/* ------------------------------------------------------------------ */
/* Technical Lab Benchmarks                                            */
/* ------------------------------------------------------------------ */

export interface LabExperiment {
  id: string;
  domain: string;
  hypothesis: string;
  metric: string;
  status: string;
}

export const LAB_EXPERIMENTS: LabExperiment[] = [
  {
    id: 'LAB/001',
    domain: 'Edge AI',
    hypothesis: 'Quantização INT8 post-training de redes convolvidas em hardware restrito.',
    metric: 'mAP drop < 0.0054',
    status: '[VALIDADO]',
  },
  {
    id: 'LAB/002',
    domain: 'GPU Computing',
    hypothesis: 'Portabilidade de Walsh-Hadamard Transform para SYCL sobre Intel Xe2.',
    metric: '+102.8% tok/s',
    status: '[VALIDADO]',
  },
  {
    id: 'LAB/003',
    domain: 'Sandboxing',
    hypothesis: 'Execução segura de código científico não confiável via Linux bubblewrap sem root.',
    metric: '0 leaks / 1e-5 rev',
    status: '[VALIDADO]',
  },
  {
    id: 'LAB/004',
    domain: 'Local Storage',
    hypothesis: 'Deduplicação determinística FNV-1a com janela deslizante de 90s em SQLite.',
    metric: '0.00% colisão',
    status: '[PRODUÇÃO]',
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  kind: string;
  status: string;
  badge: string;
  role: string;
  headline: string;
  description: string;
  points: string[];
  metrics?: { label: string; value: string }[];
  stack: string[];
  icon: LucideIcon;
  github?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'PROJ.01',
    name: 'OpenScientific Workbench',
    category: 'RESEARCH SYSTEMS',
    kind: 'Plataforma de agentes científicos com isolamento em sandbox',
    status: 'Repositório Verificado',
    badge: '80% TEST COVERAGE',
    role: 'Autor Único (92 commits solo)',
    headline: 'Plataforma de agentes científicos com isolamento em sandbox e verificação numérica estrita.',
    description:
      'Sistema para orquestração determinística de agentes de pesquisa científica. O ambiente executa scripts de modelagem sob um sandbox de baixo nível baseado em Linux bubblewrap (sem privilégios de root, namespaces isolados e filesystem somente-leitura). Possui um duplo portão de validação com revisor numérico operando com tolerância estrita de erro (ε < 1e-5), garantindo convergência e reprodutibilidade analítica absoluta antes da escrita em DAG.',
    points: [
      'Execução determinística e hermética de scripts em Linux bubblewrap (bwrap unshare-all) sem privilégios de root.',
      'Duplo portão de validação numérica com revisor de tolerância estrita de erro (ε ≤ 0.000010).',
      'Test-to-code ratio de 0.79 linhas de teste por linha de código, com 80.4% de cobertura de branches.',
      'Engine de orquestração via DAG e escrita de artefatos reproduzíveis.',
    ],
    metrics: [
      { label: 'Sandbox Security:', value: 'bwrap unshare-all' },
      { label: 'Dual-Gate Numerical Tolerance:', value: 'ε ≤ 0.000010' },
      { label: 'Test-to-Code Ratio:', value: '0.79 linhas/linha' },
      { label: 'Total Coverage:', value: '80.4% das branches' },
    ],
    stack: ['Linux bubblewrap', 'DAG Execution Engine', 'Numerical Verifier (1e-5)', 'Python 3.12 / Rust'],
    icon: Binary,
    github: 'https://github.com/FellypeMelo',
  },
  {
    id: 'PROJ.02',
    name: 'llama-cpp-turboquant-SYCL',
    category: 'GPU COMPUTING',
    kind: 'Port de kernels WHT para SYCL sobre GPU Intel Arc B580',
    status: 'Público · fork pessoal, sem merge upstream',
    badge: '34/34 CASOS COSINE = 1.000000',
    role: 'Port para SYCL/Intel Arc (~30 commits)',
    headline: 'Port de kernels de transformada rápida de Walsh-Hadamard para SYCL sobre GPU Intel Arc B580.',
    description:
      'Implementação de kernels computacionais WHT (Walsh-Hadamard Transform) e quantização TurboQuant escrita em C++ nativo com oneAPI SYCL para execução massivamente paralela na microarquitetura Intel Xe2 (GPU Arc B580). O throughput foi elevado de 1246 para 2528 tokens/segundo (+102.8%), preservando paridade matemática estrita: 34 casos de teste de 34 alcançaram similaridade cosseno de 1.000000 frente à referência matemática FP32.',
    points: [
      'Kernel de WHT em dois regimes: shuffles de subgroup (sycl::select_from_group) enquanto o passo cabe no subgroup, e memória local compartilhada com barreira quando ultrapassa, sem equivalente direto em CUDA, já que subgroups do SYCL não mapeiam 1:1 para warps.',
      'Diagnosticou um crash de dispatch (K=turbo2/V=q8_0 em camadas de borda) sem caso na tabela de flash-attention; ao corrigi-lo e encontrar saída não determinística no novo caminho, criou um modo simétrico de fallback que força as camadas de borda para dois caminhos já validados.',
      'Teste de paridade numérica contra golden de CPU (cosseno e MSE) para turbo2/3/4 em pares simétricos e assimétricos, mais um gate de coerência que roda geração de texto real na GPU e rejeita saída degenerada por repetição de 5-gramas.',
      'Validado em hardware físico (Arc B580): 34/34 casos assimétricos com cosseno 1,000000; habilitar F16+AOT levou o prefill de 1246,70 para 2528,80 tok/s (+102,8%).',
    ],
    stack: ['C++20', 'Intel oneAPI SYCL', 'Intel Arc B580 (Xe2)', 'WHT Kernels', 'ggml'],
    icon: Cpu,
    github: 'https://github.com/FellypeMelo',
  },
  {
    id: 'PROJ.03',
    name: 'Embryo Trainer & Leakage Eliminator',
    category: 'MEDICAL DEEP LEARNING',
    kind: 'Pipeline de Deep Learning para FIV com isolamento de paciente',
    status: 'Privado · Pesquisa Laboratório Fuzzy',
    badge: 'INT8 mAP 0.7310',
    role: 'Autor Único · Tech Lead',
    headline: 'Detecção de Data Leakage em visão computacional biomédica e quantização edge.',
    description:
      'Pesquisa aplicada para segmentação e classificação de viabilidade de embriões humanos. O projeto identificou uma falha clássica de Data Leakage na literatura científica: o particionamento por imagem individual distribui múltiplos quadros do mesmo embrião entre os conjuntos de treino e teste, inflando os resultados artificialmente. A reestruturação empregou StratifiedGroupKFold por embrião, garantindo isolamento total do paciente.',
    points: [
      'Correção com StratifiedGroupKFold agrupado por identidade do embrião (extraída por regex do nome de arquivo); a acurácia de validação cruzada, antes 94,18% a 96,63% com vazamento, caiu para 91,37% de acurácia real em holdout de 18.520 imagens nunca tocadas, com teste de regressão que primeiro reproduz o vazamento antes de provar que a correção o fecha.',
      'Refatoração para Clean Architecture (domain/application/infrastructure): a camada de domínio não importa PyTorch, e a orquestração é testada com mocks no lugar de tensores reais.',
      'Quantização INT8 estática do detector YOLO excluindo os nós da cabeça de detecção (sem NMS); quantizá-los zerava o mAP; o resultado final manteve mAP@50-95 em 0,7310 (vs. 0,7364 em FP32) com 65% menos tamanho de modelo e 1,58× de ganho de latência em CPU.',
      'Caminho de deploy sem PyTorch/Ultralytics: inferência via ONNX Runtime puro, reimplementando o letterbox de pré-processamento pixel a pixel para rodar em uma VPS de 2 vCPU / 8 GB.',
    ],
    stack: ['PyTorch 2.4', 'YOLOv8-seg', 'StratifiedGroupKFold', 'INT8 Post-Training Quant', 'Clean Architecture', 'ONNX Runtime'],
    icon: Microscope,
  },
  {
    id: 'PROJ.04',
    name: 'tino',
    category: 'LOCAL-FIRST',
    kind: 'App de finanças pessoais local-first (Flutter)',
    status: 'Privado',
    badge: '33 TEST SUITES',
    role: 'Autor Único',
    headline: 'Finanças pessoais com captura passiva de notificações bancárias e zero dados na nuvem.',
    description:
      'Aplicativo de finanças pessoais local-first com captura passiva de notificações bancárias via NotificationListenerService do Android. Zero servidores remotos, zero telemetria externa. Deduplicação determinística em janela deslizante de 90 segundos usando o algoritmo de hash FNV-1a.',
    points: [
      'Deduplicação entre vias (hash FNV-1a + janela de tolerância de 90s) para garantir que a mesma compra, capturada automaticamente e lançada manualmente, nunca seja contada duas vezes; um bug real de duplicação entre as duas vias foi diagnosticado e corrigido com um normalizador de comerciante compartilhado.',
      'Detecção de assinaturas recorrentes e orçamento por envelopes recomputados a cada mutação do razão; um bug que gerava linhas duplicadas a cada execução foi corrigido com ID determinístico por comerciante e migração de esquema real.',
      'Camada de inteligência (assinaturas, saldo seguro para gastar, gasto incomum) inteiramente local, sem back-end; um teste de wiring reproduziu um bug em que essa camada, apesar de testada, nunca era de fato acionada em runtime.',
      '33 arquivos de teste, 187 casos, incluindo migração validada contra um banco SQLite legado construído à mão e testes de acessibilidade que expõem direção da transação como texto, não só cor.',
    ],
    stack: ['Flutter', 'Kotlin', 'Drift', 'SQLCipher', 'Riverpod', 'fpdart', 'FNV-1a'],
    icon: Wallet,
  },
  {
    id: 'PROJ.05',
    name: 'fecho',
    category: 'STRICT ACCOUNTING',
    kind: 'Livro-caixa local-first para MEI (Flutter)',
    status: 'Privado',
    badge: '6 TESTED MIGRATIONS',
    role: 'Autor Único',
    headline: 'Razão contábil de partidas dobradas de soma zero exata para microempreendedores.',
    description:
      'Livro-caixa e conciliação fiscal para Microempreendedores Individuais (MEI). Arquitetado com partida dobrada (double-entry bookkeeping) estrita: nenhuma transação é gravada se o saldo entre débito e crédito não satisfizer a invariante contábil de soma zero exata (Σ = R$ 0,00) com precisão Decimal de ponto fixo.',
    points: [
      'Dinheiro modelado como valor decimal arbitrário, nunca float; o lançamento usa Strategy por regime tributário e valida o lote inteiro por uma invariante de saldo por conta, não só débito total = crédito total, o que um bug simétrico poderia burlar.',
      'Unit of Work atômico sobre a transação SQLite: falha em qualquer etapa desfaz as quatro tabelas envolvidas (vendas, movimentos de caixa, lançamentos, fechamento), preservando o contrato de "falhas são valores" na borda da transação.',
      'Seis migrações de esquema testadas com o SchemaVerifier do Drift sobre dados reais inseridos à mão, incluindo uma migração que precisou deduplicar fechamentos pré-existentes antes de poder impor uma constraint única.',
      'Recuperação de chave de criptografia perdida (ex.: reset de biometria invalida o Keystore): descarta o banco agora ilegível e gera uma nova chave, em vez de deixar o app preso em loop de crash.',
    ],
    stack: ['Flutter', 'Drift', 'SQLCipher', 'Decimal', 'fpdart', 'Riverpod', 'Double-Entry'],
    icon: Receipt,
  },
];

/* ------------------------------------------------------------------ */
/* Publications                                                        */
/* ------------------------------------------------------------------ */

export interface PublicationItem {
  id: string;
  status: 'published' | 'in-prep';
  statusLabel: string;
  venue: string;
  year: string;
  title: string;
  author: string;
  citation: string;
  area: string;
  abstract: string;
  doi?: string;
  doiHref?: string;
}

export const PUBLICATIONS: PublicationItem[] = [
  {
    id: 'PUB-01',
    status: 'published',
    statusLabel: 'ARTIGO PUBLICADO // 1º AUTOR',
    venue: 'Revista Tópicos',
    year: '2026',
    title:
      'Arquitetura Algorítmica para Atenção Sustentável: o Modelo Be-Productive como Resposta à Sobrecarga Cognitiva no Capitalismo de Vigilância',
    author: 'Fellype Samuel de Melo',
    citation: 'MELO, F. S. S. et al. Revista Tópicos, 2026.',
    area: 'Interseção entre Ciência da Computação, Teoria Crítica e Ergonomia Cognitiva',
    abstract:
      'O artigo introduz a formulação matemática e arquitetural do ecossistema Be-Productive, modelando como sistemas de software contemporâneos podem mitigar ativamente a dispersão atencional gerada por padrões de dark patterns e notificações intrusivas, substituindo arquiteturas de engajamento predatório por mecanismos transparentes de preservação de foco cognitivo.',
    doi: '10.70773/revistatopicos/781363235',
    doiHref: 'https://doi.org/10.70773/revistatopicos/781363235',
  },
  {
    id: 'PUB-02',
    status: 'in-prep',
    statusLabel: '// SUBMISSÃO 2026',
    venue: 'LATIN.SCIENCE 2026',
    year: '2026',
    title:
      'Pipeline de Classificação e Segmentação Automática de Embriões Humanos com Quantização Edge',
    author: 'Laboratório Fuzzy',
    citation: 'Laboratório Fuzzy. Latin.Science, 2026.',
    area: 'Deep Learning Médico & Visão Computacional',
    abstract:
      'Consolidação dos achados experimentais do Laboratório Fuzzy: erradicação do vazamento estrutural de pacientes em datasets de blastocistos e validação de tempo de resposta em hardware de consumo.',
  },
];

/* ------------------------------------------------------------------ */
/* Education & Certifications                                          */
/* ------------------------------------------------------------------ */

export interface EducationItem {
  type: string;
  institution: string;
  course: string;
  period: string;
  details: string;
}

export const EDUCATION: EducationItem[] = [
  {
    type: 'GRADUAÇÃO SUPERIOR',
    institution: 'FAETERJ-Rio',
    course: 'Análise e Desenvolvimento de Sistemas',
    period: 'Graduado',
    details: 'Enfoque em Engenharia de Software, Estrutura de Dados e Sistemas Distribuídos.',
  },
  {
    type: 'EDUCAÇÃO TÉCNICA',
    institution: 'Ensino Médio Integrado',
    course: 'Informática Industrial',
    period: '2020–2023',
    details:
      'Automação, lógica embarcada e arquiteturas de computadores + Robótica (Microcamp, 2019-2021).',
  },
  {
    type: 'ROBÓTICA E HARDWARE',
    institution: 'Microcamp',
    course: 'Hardware e Robótica',
    period: '2019 - 2021',
    details: 'Montagem e manutenção de computadores e lógica aplicada à robótica.',
  },
];

export interface CertItem {
  name: string;
  title: string;
  issuer: string;
  topics?: string;
  icon: LucideIcon;
}

export const CERTIFICATIONS: CertItem[] = [
  {
    name: 'AI Fundamentals with IBM SkillsBuild',
    title: 'AI Fundamentals',
    issuer: 'CISCO / IBM',
    topics: 'Fundamentos de IA, NLP, visão computacional, ética em IA e Watson Studio.',
    icon: BrainCircuit,
  },
  {
    name: 'Artificial Intelligence Fundamentals',
    title: 'AI Fundamentals',
    issuer: 'IBM SkillsBuild',
    topics: 'Aplicações de IA, chatbots, redes neurais, machine learning e deep learning.',
    icon: Cpu,
  },
  {
    name: 'Java Foundations',
    title: 'Java Foundations',
    issuer: 'ORACLE',
    topics: 'Fundamentos de programação orientada a objetos em Java.',
    icon: Code2,
  },
  {
    name: 'Ethical Hacker',
    title: 'Ethical Hacker',
    issuer: 'CISCO',
    topics: 'Conceitos de pentest, vulnerabilidades e segurança de redes.',
    icon: Cpu,
  },
  {
    name: 'Network Defense',
    title: 'Network Defense',
    issuer: 'CISCO',
    topics: 'Defesa de rede, criptografia, firewall, segurança em nuvem e autenticação.',
    icon: Binary,
  },
];

export const LANGUAGES = [
  { name: 'PORTUGUÊS', level: 'NATIVO' },
  { name: 'INGLÊS', level: 'B2 (PROFICIENTE)' },
];

/* ------------------------------------------------------------------ */
/* Technical Competencies Matrix (6 Swiss Columns)                     */
/* ------------------------------------------------------------------ */

export interface StackColumn {
  index: string;
  category: string;
  skills: string[];
}

export const STACK_TAXONOMY: StackColumn[] = [
  {
    index: '01 // ARCH',
    category: 'Architecture',
    skills: ['Clean Arch', 'SOLID / DDD', 'Design Patterns', 'TDD / XP', 'Microservices', 'Zero Leakage'],
  },
  {
    index: '02 // AI / ML',
    category: 'AI & ML',
    skills: ['PyTorch 2.x', 'YOLOv8-seg', 'SYCL / oneAPI', 'INT8 Post-Quant', 'Computer Vision', 'WHT Kernels'],
  },
  {
    index: '03 // LANGS',
    category: 'Languages',
    skills: ['TypeScript', 'Python 3.12', 'C++ / C++20', 'Rust', 'Java', 'SQL / Bash'],
  },
  {
    index: '04 // FRONT',
    category: 'Frontend',
    skills: ['React 19', 'Vite', 'Tailwind CSS', 'Next.js', 'State Machines', 'Accessibility'],
  },
  {
    index: '05 // BACK',
    category: 'Backend',
    skills: ['Node / Fastify', 'NestJS', 'FastAPI', 'REST & gRPC', 'Double-Entry', 'bubblewrap'],
  },
  {
    index: '06 // DATA',
    category: 'Storage & Infra',
    skills: ['PostgreSQL', 'SQLCipher', 'SQLite Local', 'Docker', 'Linux Kernel', 'Git / CI/CD'],
  },
];

/* Backward compatibility exports */
export const SKILL_GROUPS = [
  {
    label: 'Engenharia de Software',
    icon: Layers,
    items: ['Clean Architecture', 'SOLID', 'DDD', 'Design Patterns', 'Clean Code', 'TDD', 'XP'],
  },
  {
    label: 'Inteligência Artificial',
    icon: BrainCircuit,
    items: ['PyTorch', 'Deep Learning', 'Machine Learning', 'CNN', 'YOLO', 'ONNX Runtime', 'Transformers', 'NLP'],
  },
  {
    label: 'Linguagens',
    icon: Code2,
    items: ['Python', 'TypeScript', 'JavaScript', 'C++', 'Rust', 'Java', 'SQL', 'Bash'],
  },
  {
    label: 'Front-end',
    icon: Boxes,
    items: ['React 19', 'Vite', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS', 'WordPress', 'Elementor'],
  },
  {
    label: 'Back-end',
    icon: ServerCog,
    items: ['FastAPI', 'Fastify', 'NestJS', 'Node.js', 'APIs REST', 'gRPC'],
  },
  {
    label: 'Dados & Infra',
    icon: Database,
    items: ['PostgreSQL', 'SQLite', 'SQLCipher', 'Docker', 'Linux', 'Git / CI/CD'],
  },
];

/* ------------------------------------------------------------------ */
/* Navigation sections                                                 */
/* ------------------------------------------------------------------ */

export const SECTIONS = [
  { id: 'top', num: '01', label: '01 PROFILE' },
  { id: 'methodology', num: '02', label: '02 ENGINEERING' },
  { id: 'experience', num: '03', label: '03 WORK' },
  { id: 'projects', num: '04', label: '04 PROJECTS' },
  { id: 'research', num: '05', label: '05 RESEARCH' },
  { id: 'contact', num: '06', label: '06 CONTACT' },
];
