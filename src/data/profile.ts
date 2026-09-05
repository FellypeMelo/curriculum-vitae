import {
  Boxes,
  BrainCircuit,
  Code2,
  Database,
  FlaskConical,
  Layers,
  Lock,
  Microscope,
  Receipt,
  ServerCog,
  ShieldCheck,
  Cpu,
  Wallet,
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

  // Hero thesis - the architecture-first stance.
  thesisLead: 'Um bom software começa antes da implementação.',
  thesisBody:
    'Meu principal interesse está em compreender problemas, levantar requisitos, modelar soluções e definir arquiteturas que permitam a evolução sustentável de sistemas.',

  summary:
    'Software Engineer graduado em Análise e Desenvolvimento de Sistemas (FAETERJ-Rio), com foco em arquitetura de software, engenharia de software e Inteligência Artificial aplicada. Atuação como Tech Lead em projetos de desenvolvimento full stack (React, FastAPI) e de Deep Learning aplicado à pesquisa científica, com publicação como primeiro autor.',

  practices:
    'Aplico Clean Architecture, SOLID, Domain-Driven Design, Design Patterns, Clean Code, TDD e Extreme Programming na busca por soluções escaláveis e bem fundamentadas.',
};

/* Real, verifiable facts (not invented metrics) shown as the hero fact strip. */
export const FACTS: { label: string; value: string }[] = [
  { label: 'Papel', value: 'Tech Lead' },
  { label: 'Pesquisa', value: '1º autor · artigo publicado' },
  { label: 'Foco', value: 'Arquitetura + IA aplicada' },
  { label: 'Formação', value: 'ADS · Graduado' },
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
      'Definição da arquitetura da solução (Clean Architecture) e treinamento de modelos em PyTorch (ResNet/EfficientNet) para a classificação de fase embrionária, com validação cruzada agrupada por embrião (StratifiedGroupKFold) após diagnosticar e corrigir vazamento de dados entre quadros do mesmo embrião na validação original.',
      'Preparação de artigo científico com os resultados do pipeline de classificação de embriões, para submissão à conferência Latin.Science 2026.',
      'Desenvolvimento da API e integração da Inteligência Artificial à aplicação web.',
      'Em projeto distinto, segmentação de imagens de microscopia eletrônica (YOLOv8-seg) para identificar estruturas do parasita Trypanosoma cruzi.',
    ],
    tags: ['PyTorch', 'ResNet/EfficientNet', 'YOLOv8-seg', 'Deep Learning', 'FastAPI', 'Pesquisa'],
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
    name: 'OpenScientific Workbench',
    kind: 'Plataforma de agentes de pesquisa científica',
    status: 'Público · GitHub',
    role: 'Autor único',
    description:
      'Plataforma em Clean Architecture (FastAPI + Next.js) que deixa um agente LLM planejar workflows de bioinformática e executar de fato o código gerado: expõe dois problemas que costumam ficar de fora de uma demo, como isolar código Python/R/bash arbitrário do host, e como impedir que o agente devolva um número errado com confiança alta. O isolamento é feito com bubblewrap (namespaces, binds somente-leitura, limites de CPU/memória via preexec_fn), não um runtime de container privilegiado. A correção é um segundo portão independente: um revisor numérico com tolerância 1e-5, encaixado em um laço ator-crítico de repetição sobre a máquina de estados da sessão.',
    points: [
      'Orquestrador em DAG com poda por recompensa: cada nó do plano executa, seu exit code vira recompensa +1/-1, e um nó reprovado propaga a poda para todos os dependentes transitivos.',
      '172 ferramentas científicas catalogadas por camadas de confiança (A a D), deixando explícito quais são chamadas de biblioteca validadas e quais ainda não têm validação real, em vez de apresentar tudo como igualmente confiável.',
      'Guarda de path cross-platform (POSIX + ntpath + regex de drive letter) reescrita depois que a versão anterior, testada só em POSIX, deixava passar um caminho absoluto do Windows.',
      '92 commits solo em ~3 semanas; suite de testes com proporção de ~0,79 linha de teste por linha de código, gate de cobertura de 80% em CI e um job dedicado que instala bubblewrap real para rodar tentativas de fuga de sandbox.',
    ],
    stack: ['Python', 'FastAPI', 'bubblewrap', 'Qdrant', 'Neo4j', 'Redis/RQ', 'Next.js', 'PostgreSQL'],
    icon: FlaskConical,
  },
  {
    name: 'llama-cpp-turboquant-SYCL',
    kind: 'Fork técnico de TheTom/llama-cpp-turboquant',
    status: 'Público · fork pessoal, sem merge upstream',
    role: 'Port para SYCL/Intel Arc (~30 commits)',
    description:
      'Fork pessoal de TheTom/llama-cpp-turboquant, que por sua vez forka ggml-org/llama.cpp (10.185 commits no ponto de origem), para portar o TurboQuant (esquema de compressão de KV-cache criado por TheTom e Gabe Ortiz, com contribuições de Sean, Tuklus-Labs, Simon Gardling e Nathan Maine, que rotaciona vetores com Walsh-Hadamard e os quantiza com codebooks de Lloyd-Max) dos backends originais Metal/CUDA para o backend SYCL da Intel. Este autor não criou o esquema: escreveu, verificável via `git log --author`, os kernels de rotação WHT para SYCL, o despachante de flash-attention com precisão assimétrica entre K e V, e o harness de teste de paridade numérica e CI. É um artefato de release pessoal, sem PR aceito no repositório principal.',
    points: [
      'Kernel de WHT em dois regimes: shuffles de subgroup (sycl::select_from_group) enquanto o passo cabe no subgroup, e memória local compartilhada com barreira quando ultrapassa, sem equivalente direto em CUDA, já que subgroups do SYCL não mapeiam 1:1 para warps.',
      'Diagnosticou um crash de dispatch (K=turbo2/V=q8_0 em camadas de borda) sem caso na tabela de flash-attention; ao corrigi-lo e encontrar saída não determinística no novo caminho, criou um modo simétrico de fallback que força as camadas de borda para dois caminhos já validados.',
      'Teste de paridade numérica contra golden de CPU (cosseno e MSE) para turbo2/3/4 em pares simétricos e assimétricos, mais um gate de coerência que roda geração de texto real na GPU e rejeita saída degenerada por repetição de 5-gramas.',
      'Validado em hardware físico (Arc B580): 34/34 casos assimétricos com cosseno 1,000000; habilitar F16+AOT levou o prefill de 1246,70 para 2528,80 tok/s (+102,8%).',
    ],
    stack: ['C++', 'SYCL/DPC++', 'oneAPI', 'ggml', 'Intel Arc B580', 'CMake'],
    icon: Cpu,
  },
  {
    name: 'bio-saas',
    kind: 'Monorepo de 5 micro-SaaS de conformidade em saúde/estética',
    status: 'Privado',
    role: 'Autor único',
    description:
      'Monorepo pnpm com 5 aplicações para clínicas de saúde/estética no Brasil, sobre uma espinha dorsal de pacotes comum, endurecida para normas com prazo (RDC 978/2025, CFBM 423/2026, CFM 2.464/2026, RDC 222/2018, LGPD). O núcleo é uma trilha de auditoria em cadeia de hashes assinada por HMAC, pensada para resistir a um atacante privilegiado (DBA, dump restaurado), não só a um invasor externo, com uma tabela de âncora somente-inserção para detectar truncamento de cauda que uma cadeia de hash simples não pegaria. Repositório privado: a descrição cobre apenas arquitetura e algoritmos, sem dados de clientes, esquema interno ou termos comerciais.',
    points: [
      'Verificação de janela por sequência monotônica, não por timestamp; evita falso positivo de quebra de cadeia por clock skew.',
      'Isolamento multi-tenant em duas camadas: filtro de aplicação + Row-Level Security do Postgres (ENABLE+FORCE), provado em CI contra Postgres real autenticado como papel não superusuário, já que o Postgres embarcado (WASM) usado nos testes rápidos roda como superusuário e não consegue provar RLS.',
      'Bloqueio de SSRF em webhook de tenant com defesa contra TOCTOU: revalida o endereço no momento da conexão via uma função de lookup customizada, cobrindo faixas privadas, CGNAT e o endereço de metadados de nuvem.',
      '5 jobs reais de CI: segurança (gitleaks + audit), build/teste com gate de cobertura por arquivo ≥90%, integração com Postgres real, integração com S3/MinIO real e matriz Playwright de ponta a ponta para as 5 aplicações.',
    ],
    stack: ['TypeScript', 'Fastify', 'Drizzle ORM', 'PostgreSQL RLS', 'S3 Object-Lock', 'Vitest', 'Playwright'],
    icon: ShieldCheck,
  },
  {
    name: 'Embryo Trainer',
    kind: 'Pipeline de Deep Learning para classificação de embriões (FIV)',
    status: 'Privado',
    role: 'Autor único',
    description:
      'Pipeline de deep learning para classificar fase embrionária (ResNet/EfficientNet) e detectar/graduar blastocistos (YOLO) em imagens de time-lapse de FIV. Diagnosticou vazamento de dados na validação cruzada: como um mesmo embrião contribui com muitos quadros quase idênticos, dividir por imagem em vez de por embrião infla a acurácia reportada sem que ninguém perceba até checar contra um conjunto verdadeiramente isolado. Repositório privado: descrição cobre arquitetura e resultados técnicos, sem dados de pacientes ou identidades.',
    points: [
      'Correção com StratifiedGroupKFold agrupado por identidade do embrião (extraída por regex do nome de arquivo); a acurácia de validação cruzada, antes 94,18–96,63% com vazamento, caiu para 91,37% de acurácia real em holdout de 18.520 imagens nunca tocadas, com teste de regressão que primeiro reproduz o vazamento antes de provar que a correção o fecha.',
      'Refatoração para Clean Architecture (domain/application/infrastructure): a camada de domínio não importa PyTorch, e a orquestração é testada com mocks no lugar de tensores reais.',
      'Quantização INT8 estática do detector YOLO excluindo os nós da cabeça de detecção (sem NMS); quantizá-los zerava o mAP; o resultado final manteve mAP@50-95 em 0,7310 (vs. 0,7364 em FP32) com 65% menos tamanho de modelo e 1,58× de ganho de latência em CPU.',
      'Caminho de deploy sem PyTorch/Ultralytics: inferência via ONNX Runtime puro, reimplementando o letterbox de pré-processamento pixel a pixel para rodar em uma VPS de 2 vCPU / 8 GB.',
    ],
    stack: ['PyTorch', 'YOLO', 'ONNX Runtime', 'scikit-learn', 'OpenCV', 'Clean Architecture'],
    icon: Microscope,
  },
  {
    name: 'tino',
    kind: 'App de finanças pessoais local-first (Flutter)',
    status: 'Privado',
    role: 'Autor único',
    description:
      'App de finanças pessoais que captura transações lendo as próprias notificações bancárias/Pix do Android, via um NotificationListenerService nativo, sem login bancário e sem dado saindo do aparelho. Um parser data-driven (regras de captura como dados, não código compilado) decide, por banco, como extrair valor e comerciante de um texto ambíguo em pt-BR, com pontuação de confiança em vez de um palpite silencioso. A base fica criptografada em repouso (SQLCipher), com a chave apenas no Keystore/Keychain do sistema. Repositório privado: descrição cobre apenas arquitetura e algoritmos, sem dados de usuários ou instituições financeiras reais.',
    points: [
      'Deduplicação entre vias (hash FNV-1a + janela de tolerância de 90s) para garantir que a mesma compra, capturada automaticamente e lançada manualmente, nunca seja contada duas vezes; um bug real de duplicação entre as duas vias foi diagnosticado e corrigido com um normalizador de comerciante compartilhado.',
      'Detecção de assinaturas recorrentes e orçamento por envelopes recomputados a cada mutação do razão; um bug que gerava linhas duplicadas a cada execução foi corrigido com ID determinístico por comerciante e migração de esquema real.',
      'Camada de inteligência (assinaturas, saldo seguro para gastar, gasto incomum) inteiramente local, sem back-end; um teste de wiring reproduziu um bug em que essa camada, apesar de testada, nunca era de fato acionada em runtime.',
      '33 arquivos de teste, 187 casos, incluindo migração validada contra um banco SQLite legado construído à mão e testes de acessibilidade que expõem direção da transação como texto, não só cor.',
    ],
    stack: ['Flutter', 'Kotlin', 'Drift', 'SQLCipher', 'Riverpod', 'fpdart'],
    icon: Wallet,
  },
  {
    name: 'fecho',
    kind: 'Livro-caixa local-first para MEI (Flutter)',
    status: 'Privado',
    role: 'Autor único',
    description:
      'App de fechamento diário de caixa para microempreendedores brasileiros que transforma um ritual de 60 segundos em um razão contábil de partidas dobradas de verdade: precisa bater exatamente R$ 0,00 sempre, nunca duplicar receita se o app cair no meio da gravação, e aplicar tratamento fiscal diferente para MEI (DAS fixo, teto anual) ou Simples Nacional ME (apuração percentual). Repositório privado: descrição cobre apenas arquitetura e algoritmos, sem parâmetros fiscais, dados de negócio ou informações de usuários.',
    points: [
      'Dinheiro modelado como valor decimal arbitrário, nunca float; o lançamento usa Strategy por regime tributário e valida o lote inteiro por uma invariante de saldo por conta, não só débito total = crédito total, o que um bug simétrico poderia burlar.',
      'Unit of Work atômico sobre a transação SQLite: falha em qualquer etapa desfaz as quatro tabelas envolvidas (vendas, movimentos de caixa, lançamentos, fechamento), preservando o contrato de "falhas são valores" na borda da transação.',
      'Seis migrações de esquema testadas com o SchemaVerifier do Drift sobre dados reais inseridos à mão, incluindo uma migração que precisou deduplicar fechamentos pré-existentes antes de poder impor uma constraint única.',
      'Recuperação de chave de criptografia perdida (ex.: reset de biometria invalida o Keystore): descarta o banco agora ilegível e gera uma nova chave, em vez de deixar o app preso em loop de crash.',
    ],
    stack: ['Flutter', 'Drift', 'SQLCipher', 'Decimal', 'fpdart', 'Riverpod'],
    icon: Receipt,
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
/* Skills - grouped, no invented proficiency scores                    */
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
    items: ['PyTorch', 'Deep Learning', 'Machine Learning', 'CNN', 'YOLO', 'ONNX Runtime', 'Transformers', 'NLP', 'Watson Studio'],
  },
  {
    label: 'Linguagens',
    icon: Code2,
    items: ['Python', 'TypeScript', 'JavaScript', 'Dart', 'Java', 'C++', 'PHP', 'C'],
  },
  {
    label: 'Front-end',
    icon: Boxes,
    items: ['React', 'Vite', 'Next.js', 'HTML', 'CSS', 'WordPress', 'Elementor'],
  },
  {
    label: 'Back-end',
    icon: ServerCog,
    items: ['FastAPI', 'Fastify', 'APIs REST', 'SQLAlchemy'],
  },
  {
    label: 'Dados',
    icon: Database,
    items: ['PostgreSQL', 'SQLite', 'Análise de Dados'],
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
    period: 'Graduado',
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
