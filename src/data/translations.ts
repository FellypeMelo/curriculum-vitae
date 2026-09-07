export type Language = "pt" | "en";

export interface NavTranslation {
  sections: { id: string; num: string; label: string }[];
  status: string;
  statusAvailability: string;
  liveStatus: string;
  themeToggle: string;
  lightMode: string;
  darkMode: string;
  pageIndicator: string;
  contactTooltip: string;
  menuAria: string;
  skipLink: string;
}

export interface HeroTranslation {
  docRef: string;
  vol: string;
  classification: string;
  geo: string;
  fullName: string;
  titleBadge: string;
  thesisKicker: string;
  thesisLead: string;
  thesisBody: string;
  manifestoEnv: string;
  manifestoSha: string;
  manifestoThesis: string;
  manifestoFoundations: string[];
  manifestoInvariants: string;
  btnExplore: string;
  btnContact: string;
  btnCopyDoi: string;
  btnDoiCopied: string;
  matrixTitle: string;
  matrixSpec: string;
  matrixRows: {
    tag: string;
    title: string;
    sub?: string;
  }[];
  indexRun: string;
  statusOperational: string;
}

export interface ProfileTranslation {
  sec: string;
  title: string;
  subtitle: string;
  languagesTitle: string;
  languages: { name: string; level: string }[];
  secondaryEdLabel: string;
  secondaryEdValue: string;
  leadHeadline: string;
  p1: string;
  p2: string;
  p3: string;
  directivesTitle: string;
  directives: { num: string; text: string }[];
  institutionalCode: string;
  facts: { label: string; value: string; sub: string; highlight?: boolean }[];
}

export interface EngineeringTranslation {
  sec: string;
  title: string;
  subtitle: string;
  interactionHintTitle: string;
  interactionHint: string;
  manifestoLead: string;
  manifestoAuthor: string;
  pipelineTitle: string;
  stages: {
    id: number;
    stage: string;
    name: string;
    summary: string;
    description: string;
  }[];
  diagramTitle: string;
  diagramAudit: string;
  driverPort: string;
  driverSummary: string;
  coreTitle: string;
  coreSummary: string;
  drivenPort: string;
  drivenSummary: string;
  ruleStatement: string;
}

export interface ExperienceTranslation {
  sec: string;
  title: string;
  subtitle: string;
  fuzzyCompany: string;
  fuzzyRole: string;
  fuzzyPeriod: string;
  fuzzySummary: string;
  fuzzyAchievements: { title: string; subtitle: string; description: string }[];
  freelanceCompany: string;
  freelanceRole: string;
  freelancePeriod: string;
  freelanceSummary: string;
  benchmarkTitle: string;
  colId: string;
  colDomain: string;
  colHypothesis: string;
  colMetric: string;
  colStatus: string;
  benchmarks: {
    id: string;
    domain: string;
    hypothesis: string;
    metric: string;
    status: string;
  }[];
}

export interface ProjectsTranslation {
  sec: string;
  title: string;
  subtitle: string;
  lead: string;
  turboquant: {
    num: string;
    category: string;
    name: string;
    badgeAcc: string;
    badgeCosine: string;
    headline: string;
    description: string;
    tags: string[];
    benchmarkTitle: string;
    baselineLabel: string;
    syclLabel: string;
    cosineLabel: string;
    cosineVal: string;
    targetArch: string;
    optimizedBadge: string;
  };
  embryo: {
    num: string;
    category: string;
    name: string;
    badgeDataset: string;
    badgeZeroLeak: string;
    badgeMap: string;
    headline: string;
    description: string;
    tags: string[];
    figTitle: string;
    figAuditBadge: string;
    naiveTitle: string;
    naiveBadge: string;
    naiveDesc: string;
    strictTitle: string;
    strictBadge: string;
    strictDesc: string;
  };
  tino: {
    num: string;
    category: string;
    name: string;
    sub: string;
    badgeSuites: string;
    headline: string;
    description: string;
    cryptoLabel: string;
    cryptoVal: string;
    dedupLabel: string;
    dedupVal: string;
    rigLabel: string;
    rigVal: string;
    invariantStatus: string;
    verifiedBadge: string;
  };
  fecho: {
    num: string;
    category: string;
    name: string;
    sub: string;
    badgeMigrations: string;
    headline: string;
    description: string;
    invariantLabel: string;
    invariantVal: string;
    patternLabel: string;
    patternVal: string;
    schemaLabel: string;
    schemaVal: string;
    precisionStatus: string;
    verifiedBadge: string;
  };
}

export interface ResearchTranslation {
  sec: string;
  title: string;
  subtitle: string;
  pub1Status: string;
  pub1Venue: string;
  pub1Year: string;
  pub1Title: string;
  pub1AuthorLabel: string;
  pub1Author: string;
  pub1VenueLabel: string;
  pub1AreaLabel: string;
  pub1Area: string;
  pub1Abstract: string;
  btnCopyDoi: string;
  btnDoiCopied: string;
  pub2Status: string;
  pub2Venue: string;
  pub2Year: string;
  pub2Title: string;
  pub2AuthorLabel: string;
  pub2Author: string;
  pub2AreaLabel: string;
  pub2Area: string;
  pub2Abstract: string;
  educationTitle: string;
  educationItems: {
    type: string;
    institution: string;
    course: string;
    period: string;
    details: string;
  }[];
  certificationsTitle: string;
  certificationsItems: {
    title: string;
    issuer: string;
    topics: string;
  }[];
  stackTitle: string;
  stackTaxonomy: {
    index: string;
    category: string;
    skills: string[];
  }[];
}

export interface ContactTranslation {
  sec: string;
  kicker: string;
  title: string;
  lead: string;
  emailCardTitle: string;
  btnCopyEmail: string;
  btnEmailCopied: string;
  githubCardTitle: string;
  btnOpenProfile: string;
  linkedinCardTitle: string;
  btnConnect: string;
  locationCardTitle: string;
  locationCoordinates: string;
  colophonTitle: string;
  colophonTimestamp: string;
  colophonLead: string;
  colophonEngine: string;
  colophonTypo: string;
  colophonRules: string;
  auditPass: string;
  auditZeroDependencies: string;
  auditDomainIsolated: string;
}

export interface FooterTranslation {
  archive: string;
  spec: string;
  grid: string;
  operational: string;
  rights: string;
  colophon: string;
  legalNotice: string;
  pgpKey: string;
}

export interface TranslationSchema {
  nav: NavTranslation;
  hero: HeroTranslation;
  profile: ProfileTranslation;
  engineering: EngineeringTranslation;
  experience: ExperienceTranslation;
  projects: ProjectsTranslation;
  research: ResearchTranslation;
  contact: ContactTranslation;
  footer: FooterTranslation;
}

export const TRANSLATIONS: Record<Language, TranslationSchema> = {
  pt: {
    nav: {
      sections: [
        { id: "profile", num: "01", label: "01 PERFIL" },
        { id: "methodology", num: "02", label: "02 ENGENHARIA" },
        { id: "experience", num: "03", label: "03 EXPERIÊNCIA" },
        { id: "projects", num: "04", label: "04 PROJETOS" },
        { id: "research", num: "05", label: "05 PESQUISA" },
        { id: "contact", num: "06", label: "06 CONTATO" },
      ],
      status: "DISPONÍVEL P/ PROJETOS",
      statusAvailability: "RIO DE JANEIRO, RJ · DISPONÍVEL P/ PROJETOS",
      liveStatus: "LIVE STATUS // 200 OK",
      themeToggle: "TEMA",
      lightMode: "CLARO",
      darkMode: "ESCURO",
      pageIndicator: "PÁGINA",
      contactTooltip: "Ir para Contato",
      menuAria: "Abrir menu de navegação",
      skipLink: "Pular para o conteúdo",
    },
    hero: {
      docRef: "DOC.REF // SWISS-PAPER-2026",
      vol: "VOL. 01 — SYS.ARCH & APPLIED AI",
      classification: "CLASSIFICAÇÃO: PESQUISA ABERTA",
      geo: "FAETERJ-RIO // 22°54'S 43°12'W",
      fullName: "FELLYPE SAMUEL DE MELO",
      titleBadge: "SOFTWARE ENGINEER & IA · ADS · GRADUADO · FAETERJ-RIO · RIO DE JANEIRO, BRASIL",
      thesisKicker: "// THESIS.STATEMENT.01",
      thesisLead: "“Um bom software começa antes da implementação.”",
      thesisBody:
        "Engenharia de software fundamentada, Clean Architecture, isolamento estrito de domínio e Inteligência Artificial aplicada à pesquisa biomédica e sistemas científicos de alto throughput.",
      manifestoEnv: "TERMINAL.MANIFESTO // ENV: PRODUCTION",
      manifestoSha: "SHA-256: e3b0c44298fc",
      manifestoThesis: "\"A arquitetura define invariantes; o código apenas as preserva.\"",
      manifestoFoundations: ["Clean Architecture", "SOLID", "DDD", "TDD", "XP"],
      manifestoInvariants: "{ strict_domain: true, zero_side_effects: true, reproducible: true }",
      btnExplore: "EXPLORAR SISTEMAS",
      btnContact: "INICIAR CONTATO",
      btnCopyDoi: "COPIAR DOI",
      btnDoiCopied: "DOI COPIADO ✓",
      matrixTitle: "MATRIZ DE DADOS",
      matrixSpec: "[SPEC 2026]",
      matrixRows: [
        { tag: "01 // PAPEL PRIMÁRIO", title: "Tech Lead & Software Engineer" },
        { tag: "02 // PRODUÇÃO CIENTÍFICA", title: "1º Autor · Artigo Publicado", sub: "Revista Tópicos (2026) · IA e Cognição" },
        { tag: "03 // DOMÍNIO DE PESQUISA", title: "Deep Learning Médico & Visão Computacional", sub: "Laboratório Fuzzy · Embriologia Humana" },
        { tag: "04 // TITULAÇÃO", title: "Análise e Desenvolvimento de Sistemas", sub: "FAETERJ-Rio · Graduado" },
        { tag: "05 // LOCALIZAÇÃO OPERACIONAL", title: "Rio de Janeiro, RJ · Brasil" },
      ],
      indexRun: "INDEX RUN: 0x7F01",
      statusOperational: "STATUS: OPERACIONAL",
    },
    profile: {
      sec: "// SEC 01",
      title: "PERFIL",
      subtitle: "TRAJETÓRIA & IDENTIDADE",
      languagesTitle: "IDIOMAS:",
      languages: [
        { name: "PORTUGUÊS", level: "NATIVO" },
        { name: "INGLÊS", level: "B2 (PROFICIENTE)" },
      ],
      secondaryEdLabel: "FORMAÇÃO SECUNDÁRIA:",
      secondaryEdValue: "Técnico em Informática Industrial (2020–2023)",
      leadHeadline: "Engenharia de software fundamentada, com rigor conceitual e precisão analítica.",
      p1: "Fellype Samuel de Melo é graduado em Análise e Desenvolvimento de Sistemas pela FAETERJ-Rio. Atua como Tech Lead e pesquisador em Inteligência Artificial aplicada, com foco no desenvolvimento de sistemas distribuídos robustos, pipelines de Deep Learning médico e arquitetura orientada ao isolamento de domínio.",
      p2: "Sua metodologia descarta abordagens empíricas superficiais em favor de projetos orientados a contratos matematicamente defensáveis, separação estrita de camadas e verificabilidade automatizada de ponta a ponta.",
      p3: "Aplica Clean Architecture, SOLID, Domain-Driven Design, Design Patterns, TDD e Extreme Programming na condução de sistemas escaláveis, utilizando Inteligência Artificial como ferramenta de engenharia para acelerar análise de requisitos, documentação e validação formal.",
      directivesTitle: "CORE DIRECTIVES",
      directives: [
        { num: "01.", text: "Isolamento estrito da regra de negócio" },
        { num: "02.", text: "Eliminação ativa de Data Leakage" },
        { num: "03.", text: "Testabilidade como critério de design" },
        { num: "04.", text: "Local-first & integridade criptográfica" },
      ],
      institutionalCode: "FAETERJ-RIO INSTITUTIONAL CODE: 2022-2025",
      facts: [
        { label: "TITULAÇÃO", value: "Graduado ADS", sub: "FAETERJ-Rio" },
        { label: "PAPEL ATUAL", value: "Tech Lead / Pesquisador", sub: "Laboratório Fuzzy" },
        { label: "PRODUÇÃO", value: "Primeiro Autor", sub: "Revista Tópicos (2026)" },
        { label: "STATUS", value: "Disponível", sub: "Projetos & Contratos", highlight: true },
      ],
    },
    engineering: {
      sec: "// SEC 02",
      title: "COMO TRABALHO",
      subtitle: "ENGENHARIA COMO MANIFESTO",
      interactionHintTitle: "[INTERACTION]",
      interactionHint: "Passe o cursor ou clique nas etapas e portas para visualizar fluxos e invariantes ativas.",
      manifestoLead:
        "“Compreender o problema a fundo, levantar requisitos reais e modelar a solução antes de escrever código. A arquitetura deve definir invariantes, isolar o domínio, reduzir acoplamento e permitir evolução segura.”",
      manifestoAuthor: "— Princípio Metodológico de Engenharia de Fellype Melo",
      pipelineTitle: "PIPELINE DE CICLO DE VIDA DE SOFTWARE",
      stages: [
        {
          id: 1,
          stage: "STAGE 01",
          name: "COMPREENDER",
          summary: "Elicitação de requisitos reais, delimitação de escopo e identificação de restrições operacionais críticas.",
          description: "STAGE 01: COMPREENDER // Elicitação rigorosa de escopo e limites computacionais.",
        },
        {
          id: 2,
          stage: "STAGE 02",
          name: "MODELAR",
          summary: "Modelagem de domínio, diagramas de limites contextuais (DDD) e invariantes matemáticas explícitas.",
          description: "STAGE 02: MODELAR // Especificação formal de invariantes e limites contextuais DDD.",
        },
        {
          id: 3,
          stage: "STAGE 03",
          name: "ISOLAR",
          summary: "Separação estrita de portas e adaptadores, garantindo zero dependência externa no núcleo de negócio.",
          description: "STAGE 03: ISOLAR // Portas e adaptadores hexagonais sem acoplamento externo.",
        },
        {
          id: 4,
          stage: "STAGE 04",
          name: "VALIDAR",
          summary: "Criação de suítes de testes unitários e de integração baseadas em invariantes (TDD / XP practices).",
          description: "STAGE 04: VALIDAR // Casos de teste de invariantes e verificação matemática estrita.",
        },
        {
          id: 5,
          stage: "STAGE 05",
          name: "IMPLEMENTAR",
          summary: "Execução limpa e tipada, aplicando SOLID, DRY, KISS e profiling contínuo de recursos computacionais.",
          description: "STAGE 05: IMPLEMENTAR // Código limpo e defensivo com zero tolerância a bugs estáticos.",
        },
        {
          id: 6,
          stage: "STAGE 06",
          name: "EVOLUIR",
          summary: "Refatoração contínua suportada por suíte de testes impenetrável e documentação arquitetural viva.",
          description: "STAGE 06: EVOLUIR // Refatoração contínua suportada por suíte de testes impenetrável.",
        },
      ],
      diagramTitle: "FIG. 01 // LIMITES ARQUITETURAIS: PORTS & ADAPTERS (ISOLAMENTO ESTRITO)",
      diagramAudit: "[AUDITORIA ESTRUTURAL: ATIVA]",
      driverPort: "01 // DRIVER PORTS (ENTRADA)",
      driverSummary: "Controladores HTTP, CLI, mensageria e consumidores que traduzem estímulos externos para DTOs sem acoplamento de framework.",
      coreTitle: "NÚCLEO DE NEGÓCIO (DOMAIN & USE CASES)",
      coreSummary: "Regras de negócio puras, entidades e invariantes matemáticas com ZERO dependências de bibliotecas de terceiros ou I/O.",
      drivenPort: "02 // DRIVEN PORTS (SAÍDA)",
      drivenSummary: "Interfaces abstratas de persistência, modelos de IA, gateways e barramentos implementados via inversão de dependência.",
      ruleStatement: "INVARIANTE ARQUITETURAL: Dependências apontam exclusivamente para o interior. O núcleo de negócio não importa nada fora de seu módulo.",
    },
    experience: {
      sec: "// SEC 03",
      title: "EXPERIÊNCIA",
      subtitle: "LAB & ATUAÇÃO PROFISSIONAL",
      fuzzyCompany: "LABORATÓRIO FUZZY",
      fuzzyRole: "TECH LEAD & PESQUISADOR EM IA",
      fuzzyPeriod: "2025 — PRESENTE",
      fuzzySummary:
        "Liderança técnica no desenvolvimento de modelos de Deep Learning aplicados à medicina reprodutiva humana (classificação e segmentação de embriões). Responsável direto pela arquitetura de software, rigor de engenharia e modelagem estatística.",
      fuzzyAchievements: [
        {
          title: "CONQUISTA 01",
          subtitle: "Correção de Data Leakage",
          description:
            "Identificação e erradicação de vazamento estrutural via StratifiedGroupKFold por embrião em 18.520 imagens.",
        },
        {
          title: "CONQUISTA 02",
          subtitle: "Clean Architecture",
          description:
            "Isolamento completo entre os pipelines PyTorch, algoritmos YOLOv8-seg e as interfaces clínicas.",
        },
        {
          title: "CONQUISTA 03",
          subtitle: "Edge Quantization",
          description:
            "Otimização INT8 com 65% de redução de memória e ganho de 1.58x na latência de inferência hospitalar.",
        },
      ],
      freelanceCompany: "DESENVOLVEDOR FULL STACK INDEPENDENTE",
      freelanceRole: "CONSULTORIA & ARQUITETURA",
      freelancePeriod: "2025 — PRESENTE",
      freelanceSummary:
        "Atuação autônoma ponta a ponta: do levantamento de requisitos de negócio à entrega e monitoramento em produção. Foco em aplicações reativas de alta fidelidade com React, TypeScript, Vite, Tailwind CSS e backends orientados a microsserviços testáveis.",
      benchmarkTitle: "LAB BENCHMARK // EXPERIMENTOS REGISTRADOS",
      colId: "ID REG",
      colDomain: "DOMÍNIO",
      colHypothesis: "HIPÓTESE / EXPERIMENTO",
      colMetric: "MÉTRICA CHAVE",
      colStatus: "STATUS",
      benchmarks: [
        {
          id: "LAB/001",
          domain: "Edge AI",
          hypothesis: "Quantização INT8 post-training de redes convolvidas em hardware restrito.",
          metric: "mAP drop < 0.0054",
          status: "[VALIDADO]",
        },
        {
          id: "LAB/002",
          domain: "GPU Computing",
          hypothesis: "Portabilidade de Walsh-Hadamard Transform para SYCL sobre Intel Xe2.",
          metric: "+102.8% tok/s",
          status: "[VALIDADO]",
        },
        {
          id: "LAB/003",
          domain: "Sandboxing",
          hypothesis: "Execução segura de código científico não confiável via Linux bubblewrap sem root.",
          metric: "0 leaks / 1e-5 rev",
          status: "[VALIDADO]",
        },
        {
          id: "LAB/004",
          domain: "Local Storage",
          hypothesis: "Deduplicação determinística FNV-1a com janela deslizante de 90s em SQLite.",
          metric: "0.00% colisão",
          status: "[PRODUÇÃO]",
        },
      ],
    },
    projects: {
      sec: "// SEC 04",
      title: "ÍNDICE DE PROJETOS",
      subtitle: "ESTUDOS DE CASO DE ENGENHARIA",
      lead: "Estudos de caso reais desenvolvidos com tolerância zero a atalhos. Todos os repositórios incluem suítes completas de testes automatizados, documentação arquitetural e invariantes garantidas.",
      turboquant: {
        num: "PROJ.01 // GPU COMPUTING",
        category: "GPU COMPUTING",
        name: "llama-cpp-turboquant-SYCL",
        badgeAcc: "[ACCELERATION: +102.8%]",
        badgeCosine: "34/34 CASOS COSINE = 1.000000",
        headline: "Port de kernels de transformada rápida de Walsh-Hadamard para SYCL sobre GPU Intel Arc B580.",
        description:
          "Implementação de kernels computacionais WHT (Walsh-Hadamard Transform) e quantização TurboQuant escrita em C++ nativo com oneAPI SYCL para execução massivamente paralela na microarquitetura Intel Xe2 (GPU Arc B580). O throughput foi elevado de 1246 para 2528 tokens/segundo (+102.8%), preservando paridade matemática estrita: 34 casos de teste de 34 alcançaram similaridade cosseno de 1.000000 frente à referência matemática FP32.",
        tags: ["C++20", "Intel oneAPI SYCL", "Intel Arc B580 (Xe2)", "WHT Kernels", "ggml"],
        benchmarkTitle: "TELEMETRIA DE THROUGHPUT // BENCHMARK",
        baselineLabel: "BASELINE (CPU/GENERIC):",
        syclLabel: "SYCL KERNEL (B580):",
        cosineLabel: "Cosine Similarity Check:",
        cosineVal: "1.000000 (Pass 34/34)",
        targetArch: "TARGET: INTEL XE2 ARCH",
        optimizedBadge: "OPTIMIZED",
      },
      embryo: {
        num: "PROJ.02 // MEDICAL DEEP LEARNING",
        category: "MEDICAL DEEP LEARNING",
        name: "Embryo Trainer & Leakage Eliminator",
        badgeDataset: "[DATASET: 18.520 FRAMES]",
        badgeZeroLeak: "[ZERO LEAKAGE]",
        badgeMap: "INT8 mAP 0.7310",
        headline: "Detecção de Data Leakage em visão computacional biomédica e quantização edge.",
        description:
          "Pesquisa aplicada para segmentação e classificação de viabilidade de embriões humanos. O projeto identificou uma falha clássica de Data Leakage na literatura científica: o particionamento por imagem individual distribui múltiplos quadros do mesmo embrião entre os conjuntos de treino e teste, inflando os resultados artificialmente. A reestruturação empregou StratifiedGroupKFold por embrião, garantindo isolamento total do paciente.",
        tags: ["PyTorch 2.4", "YOLOv8-seg", "StratifiedGroupKFold", "INT8 Post-Training Quant", "Clean Architecture", "ONNX Runtime"],
        figTitle: "FIG. 02 // VULNERABILIDADE ESTRUTURAL",
        figAuditBadge: "[AUDITORIA]",
        naiveTitle: "IMAGE SPLIT (INGÊNUO)",
        naiveBadge: "❌ VAZAMENTO",
        naiveDesc: "Mesmo embrião E_01 compartilha frames F1, F2 no Treino e F3 no Teste. mAP artificialmente alto (~0.98), inútil clinicamente.",
        strictTitle: "EMBRYO SPLIT (ESTRITO)",
        strictBadge: "✓ ROBUSTO",
        strictDesc: "Agrupamento por ID de paciente e embrião. Zero overlap entre folds. Generalização clínica autêntica: FP32 mAP 0.7364 vs INT8 mAP 0.7310 (-65% VRAM, 1.58x speedup).",
      },
      tino: {
        num: "PROJ.03 // LOCAL-FIRST",
        category: "LOCAL-FIRST",
        name: "tino",
        sub: "SQLCipher · Android",
        badgeSuites: "33 TEST SUITES",
        headline: "Finanças pessoais com captura passiva de notificações bancárias e zero dados na nuvem.",
        description:
          "Aplicativo de finanças pessoais local-first com captura passiva de notificações bancárias via NotificationListenerService do Android. Zero servidores remotos, zero telemetria externa. Deduplicação determinística em janela deslizante de 90 segundos usando o algoritmo de hash FNV-1a.",
        cryptoLabel: "CRIPTOGRAFIA:",
        cryptoVal: "SQLCipher AES-256",
        dedupLabel: "DEDUPLICAÇÃO:",
        dedupVal: "FNV-1a / 90s window",
        rigLabel: "TEST RIG:",
        rigVal: "33 arquivos de teste",
        invariantStatus: "INVARIANTE: ZERO CLOUD LEAK",
        verifiedBadge: "[VERIFICADO]",
      },
      fecho: {
        num: "PROJ.04 // STRICT ACCOUNTING",
        category: "STRICT ACCOUNTING",
        name: "fecho",
        sub: "Double-Entry · Rust",
        badgeMigrations: "6 TESTED MIGRATIONS",
        headline: "Razão contábil de partidas dobradas de soma zero exata para microempreendedores.",
        description:
          "Livro-caixa e conciliação fiscal para Microempreendedores Individuais (MEI). Arquitetado com partida dobrada (double-entry bookkeeping) estrita: nenhuma transação é gravada se o saldo entre débito e crédito não satisfizer a invariante contábil de soma zero exata (Σ = R$ 0,00) com precisão Decimal de ponto fixo.",
        invariantLabel: "INVARIANTE CONTÁBIL:",
        invariantVal: "Σ(Débito + Crédito) == 0",
        patternLabel: "PADRÃO ARQUITETURAL:",
        patternVal: "Unit of Work / Repository",
        schemaLabel: "SCHEMA MIGRATIONS:",
        schemaVal: "6 migr. validadas em CI",
        precisionStatus: "PRECISÃO: FIXED POINT DECIMAL",
        verifiedBadge: "[VERIFICADO]",
      },
    },
    research: {
      sec: "// SEC 05",
      title: "PESQUISA",
      subtitle: "PUBLICAÇÕES & STACK",
      pub1Status: "ARTIGO PUBLICADO // 1º AUTOR",
      pub1Venue: "Revista Tópicos",
      pub1Year: "2026",
      pub1Title:
        "Arquitetura Algorítmica para Atenção Sustentável: o Modelo Be-Productive como Resposta à Sobrecarga Cognitiva no Capitalismo de Vigilância",
      pub1AuthorLabel: "Autor:",
      pub1Author: "Fellype Samuel de Melo",
      pub1VenueLabel: "Veículo:",
      pub1AreaLabel: "Área:",
      pub1Area: "Interseção entre Ciência da Computação, Teoria Crítica e Ergonomia Cognitiva",
      pub1Abstract:
        "O artigo introduz a formulação matemática e arquitetural do ecossistema Be-Productive, modelando como sistemas de software contemporâneos podem mitigar ativamente a dispersão atencional gerada por padrões de dark patterns e notificações intrusivas, substituindo arquiteturas de engajamento predatório por mecanismos transparentes de preservação de foco cognitivo.",
      btnCopyDoi: "COPIAR DOI",
      btnDoiCopied: "DOI COPIADO ✓",
      pub2Status: "// SUBMISSÃO 2026",
      pub2Venue: "LATIN.SCIENCE 2026",
      pub2Year: "2026",
      pub2Title: "Pipeline de Classificação e Segmentação Automática de Embriões Humanos com Quantização Edge",
      pub2AuthorLabel: "Autor:",
      pub2Author: "Laboratório Fuzzy",
      pub2AreaLabel: "Área:",
      pub2Area: "Deep Learning Médico & Visão Computacional",
      pub2Abstract:
        "Consolidação dos achados experimentais do Laboratório Fuzzy: erradicação do vazamento estrutural de pacientes em datasets de blastocistos e validação de tempo de resposta em hardware de consumo.",
      educationTitle: "FORMAÇÃO ACADÊMICA & HISTÓRICO FORMAL",
      educationItems: [
        {
          type: "GRADUAÇÃO SUPERIOR",
          institution: "FAETERJ-Rio",
          course: "Análise e Desenvolvimento de Sistemas",
          period: "Graduado",
          details: "Enfoque em Engenharia de Software, Estrutura de Dados e Sistemas Distribuídos.",
        },
        {
          type: "EDUCAÇÃO TÉCNICA",
          institution: "Ensino Médio Integrado",
          course: "Informática Industrial",
          period: "2020–2023",
          details: "Automação, lógica embarcada e arquiteturas de computadores + Robótica (Microcamp, 2019-2021).",
        },
        {
          type: "ROBÓTICA E HARDWARE",
          institution: "Microcamp",
          course: "Hardware e Robótica",
          period: "2019 - 2021",
          details: "Montagem e manutenção de computadores e lógica aplicada à robótica.",
        },
      ],
      certificationsTitle: "CERTIFICAÇÕES DE INDÚSTRIA & RIGOR TÉCNICO",
      certificationsItems: [
        {
          title: "AI Fundamentals with IBM SkillsBuild",
          issuer: "CISCO / IBM",
          topics: "Fundamentos de IA, NLP, visão computacional, ética em IA e Watson Studio.",
        },
        {
          title: "Artificial Intelligence Fundamentals",
          issuer: "IBM SkillsBuild",
          topics: "Aplicações de IA, chatbots, redes neurais, machine learning e deep learning.",
        },
        {
          title: "Java Foundations",
          issuer: "ORACLE",
          topics: "Fundamentos de programação orientada a objetos em Java.",
        },
        {
          title: "Ethical Hacker",
          issuer: "CISCO",
          topics: "Conceitos de pentest, vulnerabilidades e segurança de redes.",
        },
        {
          title: "Network Defense",
          issuer: "CISCO",
          topics: "Defesa de rede, criptografia, firewall, segurança em nuvem e autenticação.",
        },
      ],
      stackTitle: "TAXONOMIA TÉCNICA // COMPETÊNCIAS MATRICIAIS (6 COLUNAS)",
      stackTaxonomy: [
        {
          index: "01 // ARCH",
          category: "Arquitetura",
          skills: ["Clean Arch", "SOLID / DDD", "Design Patterns", "TDD / XP", "Microsserviços", "Zero Leakage"],
        },
        {
          index: "02 // AI / ML",
          category: "IA & ML",
          skills: ["PyTorch 2.x", "YOLOv8-seg", "SYCL / oneAPI", "INT8 Post-Quant", "Visão Computacional", "WHT Kernels"],
        },
        {
          index: "03 // LANGS",
          category: "Linguagens",
          skills: ["TypeScript", "Python 3.12", "C++ / C++20", "Rust", "Java", "SQL / Bash"],
        },
        {
          index: "04 // FRONT",
          category: "Frontend",
          skills: ["React 19", "Vite", "Tailwind CSS", "Next.js", "State Machines", "Acessibilidade"],
        },
        {
          index: "05 // BACK",
          category: "Backend",
          skills: ["Node / Fastify", "NestJS", "FastAPI", "REST & gRPC", "Double-Entry", "bubblewrap"],
        },
        {
          index: "06 // DATA",
          category: "Dados & Infra",
          skills: ["PostgreSQL", "SQLCipher", "SQLite Local", "Docker", "Kernel Linux", "Git / CI/CD"],
        },
      ],
    },
    contact: {
      sec: "// SEC 06",
      kicker: "// INITIATE ENGAGEMENT",
      title: "VAMOS CONSTRUIR ALGO BEM ARQUITETADO.",
      lead: "Disponível para posições como Software Engineer / Tech Lead, consultoria em Clean Architecture, pipelines de Inteligência Artificial aplicada ou pesquisas científicas em cooperação institucional.",
      emailCardTitle: "CANAL PRIMÁRIO // EMAIL",
      btnCopyEmail: "COPIAR EMAIL",
      btnEmailCopied: "EMAIL COPIADO ✓",
      githubCardTitle: "CODE ARCHIVE // GITHUB",
      btnOpenProfile: "ABRIR PERFIL",
      linkedinCardTitle: "NETWORK // LINKEDIN",
      btnConnect: "CONECTAR",
      locationCardTitle: "BASE OPERACIONAL // LOCALIZAÇÃO",
      locationCoordinates: "FAETERJ-RIO / RIO DE JANEIRO, RJ · BRASIL",
      colophonTitle: "SPEC.COLOPHON // DIRETRIZES DE ENGENHARIA",
      colophonTimestamp: "TIMESTAMP: 2026.04.14-UTC",
      colophonLead: "Este currículo e portfólio segue rigorosamente os cânones do Estilo Tipográfico Suíço (Die Neue Typographie):",
      colophonEngine: "Engine: React 19 + TypeScript + Tailwind CSS v4 (Zero-Radius Discipline)",
      colophonTypo: "Tipografia: Hanken Grotesk (Neo-Grotesque Suíça) + JetBrains Mono (Métrica Tabular)",
      colophonRules: "Invariante: Zero dependências não determinísticas. Transparência arquitetural total.",
      auditPass: "AUDITORIA DE RIGOR // APROVADO",
      auditZeroDependencies: "ZERO DEPENDÊNCIAS DE RUNTIME OBSOLETAS",
      auditDomainIsolated: "DOMÍNIO E INFRAESTRUTURA ISOLADOS",
    },
    footer: {
      archive: "ARQUIVO TÉCNICO",
      spec: "REV. 2026.04 // SWISS PRESS SPEC",
      grid: "GRID: 12-COL 48PX MARGIN",
      operational: "STATUS: OPERACIONAL",
      rights: "© 2026 FELLYPE SAMUEL DE MELO. TODOS OS DIREITOS RESERVADOS.",
      colophon: "COLOPHON",
      legalNotice: "AVISO LEGAL",
      pgpKey: "CHAVE PGP",
    },
  },

  en: {
    nav: {
      sections: [
        { id: "profile", num: "01", label: "01 PROFILE" },
        { id: "methodology", num: "02", label: "02 ENGINEERING" },
        { id: "experience", num: "03", label: "03 WORK" },
        { id: "projects", num: "04", label: "04 PROJECTS" },
        { id: "research", num: "05", label: "05 RESEARCH" },
        { id: "contact", num: "06", label: "06 CONTACT" },
      ],
      status: "AVAILABLE FOR PROJECTS",
      statusAvailability: "RIO DE JANEIRO, RJ · AVAILABLE FOR PROJECTS",
      liveStatus: "LIVE STATUS // 200 OK",
      themeToggle: "THEME",
      lightMode: "LIGHT",
      darkMode: "DARK",
      pageIndicator: "PAGE",
      contactTooltip: "Go to Contact",
      menuAria: "Open navigation menu",
      skipLink: "Skip to content",
    },
    hero: {
      docRef: "DOC.REF // SWISS-PAPER-2026",
      vol: "VOL. 01 — SYS.ARCH & APPLIED AI",
      classification: "CLASSIFICATION: OPEN RESEARCH",
      geo: "FAETERJ-RIO // 22°54'S 43°12'W",
      fullName: "FELLYPE SAMUEL DE MELO",
      titleBadge: "SOFTWARE ENGINEER & AI · B.S. ADS · FAETERJ-RIO · RIO DE JANEIRO, BRAZIL",
      thesisKicker: "// THESIS.STATEMENT.01",
      thesisLead: "“Good software begins before implementation.”",
      thesisBody:
        "Grounded software engineering, Clean Architecture, strict domain isolation, and Artificial Intelligence applied to biomedical research and high-throughput scientific systems.",
      manifestoEnv: "TERMINAL.MANIFESTO // ENV: PRODUCTION",
      manifestoSha: "SHA-256: e3b0c44298fc",
      manifestoThesis: "\"Architecture defines invariants; code merely preserves them.\"",
      manifestoFoundations: ["Clean Architecture", "SOLID", "DDD", "TDD", "XP"],
      manifestoInvariants: "{ strict_domain: true, zero_side_effects: true, reproducible: true }",
      btnExplore: "EXPLORE SYSTEMS",
      btnContact: "INITIATE CONTACT",
      btnCopyDoi: "COPY DOI",
      btnDoiCopied: "DOI COPIED ✓",
      matrixTitle: "DATA MATRIX",
      matrixSpec: "[SPEC 2026]",
      matrixRows: [
        { tag: "01 // PRIMARY ROLE", title: "Tech Lead & Software Engineer" },
        { tag: "02 // SCIENTIFIC PRODUCTION", title: "1st Author · Published Paper", sub: "Revista Tópicos (2026) · AI & Cognition" },
        { tag: "03 // RESEARCH DOMAIN", title: "Medical Deep Learning & Computer Vision", sub: "Laboratório Fuzzy · Human Embryology" },
        { tag: "04 // DEGREE", title: "Software Analysis and Development", sub: "FAETERJ-Rio · Graduated" },
        { tag: "05 // OPERATIONAL BASE", title: "Rio de Janeiro, RJ · Brazil" },
      ],
      indexRun: "INDEX RUN: 0x7F01",
      statusOperational: "STATUS: OPERATIONAL",
    },
    profile: {
      sec: "// SEC 01",
      title: "PROFILE",
      subtitle: "TRAJECTORY & RIGOR",
      languagesTitle: "LANGUAGES:",
      languages: [
        { name: "PORTUGUESE", level: "NATIVE" },
        { name: "ENGLISH", level: "B2 (PROFICIENT)" },
      ],
      secondaryEdLabel: "TECHNICAL BACKGROUND:",
      secondaryEdValue: "Industrial Informatics Technician (2020–2023)",
      leadHeadline: "Grounded software engineering with conceptual rigor and analytical precision.",
      p1: "Fellype Samuel de Melo holds a degree in Software Analysis and Development from FAETERJ-Rio. He serves as Tech Lead and researcher in Applied Artificial Intelligence, focusing on robust distributed systems, medical Deep Learning pipelines, and domain-isolated architectures.",
      p2: "His methodology rejects superficial trial-and-error approaches in favor of designs guided by mathematically defensible contracts, strict layer separation, and end-to-end automated verification.",
      p3: "Applies Clean Architecture, SOLID, Domain-Driven Design, Design Patterns, TDD, and Extreme Programming across scalable architectures, leveraging Artificial Intelligence as an engineering amplifier to accelerate requirements modeling, documentation, and formal validation.",
      directivesTitle: "CORE DIRECTIVES",
      directives: [
        { num: "01.", text: "Strict business logic isolation" },
        { num: "02.", text: "Active elimination of Data Leakage" },
        { num: "03.", text: "Testability as primary design criterion" },
        { num: "04.", text: "Local-first & cryptographic integrity" },
      ],
      institutionalCode: "FAETERJ-RIO INSTITUTIONAL CODE: 2022-2025",
      facts: [
        { label: "DEGREE", value: "B.S. Graduated", sub: "FAETERJ-Rio" },
        { label: "CURRENT ROLE", value: "Tech Lead / Researcher", sub: "Laboratório Fuzzy" },
        { label: "PUBLICATION", value: "First Author", sub: "Revista Tópicos (2026)" },
        { label: "STATUS", value: "Available", sub: "Projects & Contracts", highlight: true },
      ],
    },
    engineering: {
      sec: "// SEC 02",
      title: "METHODOLOGY",
      subtitle: "ENGINEERING AS A MANIFESTO",
      interactionHintTitle: "[INTERACTION]",
      interactionHint: "Hover or click lifecycle stages and boundary ports to inspect active data flows and invariants.",
      manifestoLead:
        "“Understand the problem deeply, elicit real requirements, and model the solution before writing code. Architecture must define invariants, isolate the domain, reduce coupling, and enable safe evolution.”",
      manifestoAuthor: "— Fellype Melo’s Engineering Methodological Principle",
      pipelineTitle: "SOFTWARE LIFECYCLE PIPELINE",
      stages: [
        {
          id: 1,
          stage: "STAGE 01",
          name: "UNDERSTAND",
          summary: "Deep requirement elicitation, scope boundaries, and identification of critical operational constraints.",
          description: "STAGE 01: UNDERSTAND // Rigorous scoping and computational boundary analysis.",
        },
        {
          id: 2,
          stage: "STAGE 02",
          name: "MODEL",
          summary: "Domain modeling, bounded context diagrams (DDD), and explicit mathematical invariants.",
          description: "STAGE 02: MODEL // Formal invariant specification and DDD bounded contexts.",
        },
        {
          id: 3,
          stage: "STAGE 03",
          name: "ISOLATE",
          summary: "Strict separation of ports and adapters, ensuring zero external vendor dependencies in business core.",
          description: "STAGE 03: ISOLATE // Hexagonal ports & adapters with zero framework coupling.",
        },
        {
          id: 4,
          stage: "STAGE 04",
          name: "VALIDATE",
          summary: "Exhaustive unit and integration test suites based on invariants (TDD / XP practices).",
          description: "STAGE 04: VALIDATE // Test suites anchoring domain invariants and mathematical boundaries.",
        },
        {
          id: 5,
          stage: "STAGE 05",
          name: "IMPLEMENT",
          summary: "Type-safe, defensive execution applying SOLID, DRY, KISS, and continuous resource profiling.",
          description: "STAGE 05: IMPLEMENT // Clean, strictly-typed code with zero tolerance for static bugs.",
        },
        {
          id: 6,
          stage: "STAGE 06",
          name: "EVOLVE",
          summary: "Continuous refactoring backed by impenetrable test coverage and living architectural specs.",
          description: "STAGE 06: EVOLVE // Continuous refactoring protected by impenetrable automated suites.",
        },
      ],
      diagramTitle: "FIG. 01 // ARCHITECTURAL BOUNDARIES: PORTS & ADAPTERS (STRICT ISOLATION)",
      diagramAudit: "[STRUCTURAL AUDIT: ACTIVE]",
      driverPort: "01 // DRIVER PORTS (INPUT)",
      driverSummary: "HTTP controllers, CLI adapters, messaging, and consumer handlers translating external inputs into DTOs with zero framework coupling.",
      coreTitle: "BUSINESS CORE (DOMAIN & USE CASES)",
      coreSummary: "Pure business logic, aggregate roots, entities, and domain invariants with ZERO third-party libraries or I/O imports.",
      drivenPort: "02 // DRIVEN PORTS (OUTPUT)",
      drivenSummary: "Abstract interfaces for persistence, AI models, third-party gateways, and event buses implemented via Dependency Inversion.",
      ruleStatement: "ARCHITECTURAL INVARIANT: Dependencies point inward only. The business core never imports external infrastructure.",
    },
    experience: {
      sec: "// SEC 03",
      title: "EXPERIENCE",
      subtitle: "LAB & PROFESSIONAL TRACK RECORD",
      fuzzyCompany: "LABORATÓRIO FUZZY",
      fuzzyRole: "TECH LEAD & AI RESEARCHER",
      fuzzyPeriod: "2025 — PRESENT",
      fuzzySummary:
        "Technical leadership in developing Deep Learning models applied to human assisted reproduction (embryo classification and segmentation). Direct ownership of software architecture, engineering rigor, and statistical modeling.",
      fuzzyAchievements: [
        {
          title: "ACHIEVEMENT 01",
          subtitle: "Data Leakage Eradication",
          description:
            "Diagnosed and eradicated structural patient leakage via StratifiedGroupKFold across 18,520 blastocyst frames.",
        },
        {
          title: "ACHIEVEMENT 02",
          subtitle: "Clean Architecture",
          description:
            "Decoupled pure PyTorch pipelines, YOLOv8-seg algorithms, and clinical interface layers completely.",
        },
        {
          title: "ACHIEVEMENT 03",
          subtitle: "Edge Quantization",
          description:
            "INT8 post-training quantization with 65% VRAM reduction and 1.58x inference speedup for local hardware.",
        },
      ],
      freelanceCompany: "INDEPENDENT FULL STACK ENGINEER",
      freelanceRole: "CONSULTING & ARCHITECTURE",
      freelancePeriod: "2025 — PRESENT",
      freelanceSummary:
        "End-to-end autonomous delivery: from domain requirement discovery to production deployment and monitoring. Focus on high-fidelity reactive applications using React, TypeScript, Vite, Tailwind CSS, and testable microservices.",
      benchmarkTitle: "LAB BENCHMARK // REGISTERED EXPERIMENTS",
      colId: "REG ID",
      colDomain: "DOMAIN",
      colHypothesis: "HYPOTHESIS / EXPERIMENT",
      colMetric: "KEY METRIC",
      colStatus: "STATUS",
      benchmarks: [
        {
          id: "LAB/001",
          domain: "Edge AI",
          hypothesis: "INT8 post-training quantization of convolutional models on resource-constrained hardware.",
          metric: "mAP drop < 0.0054",
          status: "[VALIDATED]",
        },
        {
          id: "LAB/002",
          domain: "GPU Computing",
          hypothesis: "Portability of Fast Walsh-Hadamard Transform to SYCL on Intel Xe2 architecture.",
          metric: "+102.8% tok/s",
          status: "[VALIDATED]",
        },
        {
          id: "LAB/003",
          domain: "Sandboxing",
          hypothesis: "Hermetic rootless execution of untrusted scientific code via Linux bubblewrap.",
          metric: "0 leaks / 1e-5 rev",
          status: "[VALIDATED]",
        },
        {
          id: "LAB/004",
          domain: "Local Storage",
          hypothesis: "Deterministic FNV-1a deduplication within 90s sliding window on local SQLite.",
          metric: "0.00% collision",
          status: "[PRODUCTION]",
        },
      ],
    },
    projects: {
      sec: "// SEC 04",
      title: "PROJECT INDEX",
      subtitle: "ENGINEERING CASE STUDIES",
      lead: "Real-world engineering case studies developed with zero tolerance for shortcuts. All repositories incorporate comprehensive automated test suites, architectural documentation, and verified invariants.",
      turboquant: {
        num: "PROJ.01 // GPU COMPUTING",
        category: "GPU COMPUTING",
        name: "llama-cpp-turboquant-SYCL",
        badgeAcc: "[ACCELERATION: +102.8%]",
        badgeCosine: "34/34 CASES COSINE = 1.000000",
        headline: "Port of fast Walsh-Hadamard transform kernels to SYCL on Intel Arc B580 GPU.",
        description:
          "Implementation of computational WHT (Walsh-Hadamard Transform) kernels and TurboQuant quantization written in native C++ with oneAPI SYCL for massively parallel execution on Intel Xe2 microarchitecture (Arc B580 GPU). Throughput was elevated from 1246 to 2528 tokens/second (+102.8%), preserving strict mathematical parity: 34 out of 34 test cases achieved cosine similarity of 1.000000 against FP32 mathematical baseline.",
        tags: ["C++20", "Intel oneAPI SYCL", "Intel Arc B580 (Xe2)", "WHT Kernels", "ggml"],
        benchmarkTitle: "THROUGHPUT TELEMETRY // BENCHMARK",
        baselineLabel: "BASELINE (CPU/GENERIC):",
        syclLabel: "SYCL KERNEL (B580):",
        cosineLabel: "Cosine Similarity Check:",
        cosineVal: "1.000000 (Pass 34/34)",
        targetArch: "TARGET: INTEL XE2 ARCH",
        optimizedBadge: "OPTIMIZED",
      },
      embryo: {
        num: "PROJ.02 // MEDICAL DEEP LEARNING",
        category: "MEDICAL DEEP LEARNING",
        name: "Embryo Trainer & Leakage Eliminator",
        badgeDataset: "[DATASET: 18,520 FRAMES]",
        badgeZeroLeak: "[ZERO LEAKAGE]",
        badgeMap: "INT8 mAP 0.7310",
        headline: "Data Leakage diagnosis in biomedical computer vision and edge quantization.",
        description:
          "Applied research for human embryo viability segmentation and classification. Identified a classic structural Data Leakage vulnerability in clinical literature: individual image partitioning distributes multiple frames of the same patient embryo across train and test sets, artificially inflating metrics. Restructured with patient-isolated StratifiedGroupKFold, guaranteeing pristine generalization.",
        tags: ["PyTorch 2.4", "YOLOv8-seg", "StratifiedGroupKFold", "INT8 Post-Training Quant", "Clean Architecture", "ONNX Runtime"],
        figTitle: "FIG. 02 // STRUCTURAL VULNERABILITY",
        figAuditBadge: "[AUDIT]",
        naiveTitle: "NAIVE IMAGE SPLIT",
        naiveBadge: "❌ LEAKAGE",
        naiveDesc: "Same embryo E_01 shares frames F1, F2 in Train and F3 in Test. Artificially high mAP (~0.98), clinically useless.",
        strictTitle: "STRICT PATIENT SPLIT",
        strictBadge: "✓ ROBUST",
        strictDesc: "Grouped by patient ID & embryo identity. Zero overlap between folds. Authentic clinical generalization: FP32 mAP 0.7364 vs INT8 mAP 0.7310 (-65% VRAM, 1.58x speedup).",
      },
      tino: {
        num: "PROJ.03 // LOCAL-FIRST",
        category: "LOCAL-FIRST",
        name: "tino",
        sub: "SQLCipher · Android",
        badgeSuites: "33 TEST SUITES",
        headline: "Personal finance with passive bank notification ingestion and zero cloud telemetry.",
        description:
          "Local-first personal finance application with passive bank notification capture via Android’s NotificationListenerService. Zero remote servers, zero external telemetry. Deterministic deduplication across 90-second sliding windows using the FNV-1a hashing algorithm.",
        cryptoLabel: "ENCRYPTION:",
        cryptoVal: "SQLCipher AES-256",
        dedupLabel: "DEDUPLICATION:",
        dedupVal: "FNV-1a / 90s window",
        rigLabel: "TEST RIG:",
        rigVal: "33 test suites",
        invariantStatus: "INVARIANT: ZERO CLOUD LEAK",
        verifiedBadge: "[VERIFIED]",
      },
      fecho: {
        num: "PROJ.04 // STRICT ACCOUNTING",
        category: "STRICT ACCOUNTING",
        name: "fecho",
        sub: "Double-Entry · Rust",
        badgeMigrations: "6 TESTED MIGRATIONS",
        headline: "Exact zero-sum double-entry accounting ledger for micro-enterprises.",
        description:
          "Cashbook and fiscal reconciliation for micro-entrepreneurs. Engineered around strict double-entry bookkeeping: no transaction is recorded unless debits and credits satisfy the exact zero-sum ledger invariant (Σ = $0.00) with fixed-point Decimal precision.",
        invariantLabel: "ACCOUNTING INVARIANT:",
        invariantVal: "Σ(Debit + Credit) == 0",
        patternLabel: "ARCHITECTURAL PATTERN:",
        patternVal: "Unit of Work / Repository",
        schemaLabel: "SCHEMA MIGRATIONS:",
        schemaVal: "6 migrations CI-validated",
        precisionStatus: "PRECISION: FIXED POINT DECIMAL",
        verifiedBadge: "[VERIFIED]",
      },
    },
    research: {
      sec: "// SEC 05",
      title: "RESEARCH",
      subtitle: "PUBLICATIONS & STACK",
      pub1Status: "PUBLISHED PAPER // 1ST AUTHOR",
      pub1Venue: "Revista Tópicos",
      pub1Year: "2026",
      pub1Title:
        "Algorithmic Architecture for Sustainable Attention: the Be-Productive Model as a Response to Cognitive Overload in Surveillance Capitalism",
      pub1AuthorLabel: "Author:",
      pub1Author: "Fellype Samuel de Melo",
      pub1VenueLabel: "Venue:",
      pub1AreaLabel: "Domain:",
      pub1Area: "Intersection of Computer Science, Critical Theory, and Cognitive Ergonomics",
      pub1Abstract:
        "Introduces the mathematical and architectural formalization of the Be-Productive ecosystem, modeling how modern software systems can actively mitigate attentional fragmentation caused by dark patterns and intrusive notifications, replacing extractive engagement loops with transparent cognitive preservation mechanisms.",
      btnCopyDoi: "COPY DOI",
      btnDoiCopied: "DOI COPIED ✓",
      pub2Status: "// 2026 SUBMISSION",
      pub2Venue: "LATIN.SCIENCE 2026",
      pub2Year: "2026",
      pub2Title: "Automated Human Embryo Classification and Segmentation Pipeline with Edge Quantization",
      pub2AuthorLabel: "Author:",
      pub2Author: "Laboratório Fuzzy",
      pub2AreaLabel: "Domain:",
      pub2Area: "Medical Deep Learning & Computer Vision",
      pub2Abstract:
        "Consolidation of experimental findings at Laboratório Fuzzy: eradication of structural patient leakage in blastocyst datasets and validation of clinical latency on consumer edge hardware.",
      educationTitle: "ACADEMIC BACKGROUND & FORMAL EDUCATION",
      educationItems: [
        {
          type: "HIGHER EDUCATION DEGREE",
          institution: "FAETERJ-Rio",
          course: "Software Analysis and Development",
          period: "Graduated",
          details: "Focus on Software Engineering, Data Structures, and Distributed Systems.",
        },
        {
          type: "TECHNICAL EDUCATION",
          institution: "Integrated High School",
          course: "Industrial Informatics",
          period: "2020–2023",
          details: "Automation, embedded logic, and computer architectures + Robotics (Microcamp, 2019-2021).",
        },
        {
          type: "ROBOTICS & HARDWARE",
          institution: "Microcamp",
          course: "Hardware and Robotics",
          period: "2019 - 2021",
          details: "Computer assembly, hardware maintenance, and applied robotics logic.",
        },
      ],
      certificationsTitle: "INDUSTRY CERTIFICATIONS & TECHNICAL RIGOR",
      certificationsItems: [
        {
          title: "AI Fundamentals with IBM SkillsBuild",
          issuer: "CISCO / IBM",
          topics: "AI Fundamentals, NLP, Computer Vision, AI Ethics, and Watson Studio.",
        },
        {
          title: "Artificial Intelligence Fundamentals",
          issuer: "IBM SkillsBuild",
          topics: "AI applications, chatbots, neural networks, machine learning, and deep learning.",
        },
        {
          title: "Java Foundations",
          issuer: "ORACLE",
          topics: "Object-oriented programming fundamentals in Java.",
        },
        {
          title: "Ethical Hacker",
          issuer: "CISCO",
          topics: "Penetration testing concepts, network security, and vulnerability assessment.",
        },
        {
          title: "Network Defense",
          issuer: "CISCO",
          topics: "Network defense, cryptography, firewalls, cloud security, and authentication.",
        },
      ],
      stackTitle: "TECHNICAL TAXONOMY // COMPETENCY MATRIX (6 COLUMNS)",
      stackTaxonomy: [
        {
          index: "01 // ARCH",
          category: "Architecture",
          skills: ["Clean Arch", "SOLID / DDD", "Design Patterns", "TDD / XP", "Microservices", "Zero Leakage"],
        },
        {
          index: "02 // AI / ML",
          category: "AI & ML",
          skills: ["PyTorch 2.x", "YOLOv8-seg", "SYCL / oneAPI", "INT8 Post-Quant", "Computer Vision", "WHT Kernels"],
        },
        {
          index: "03 // LANGS",
          category: "Languages",
          skills: ["TypeScript", "Python 3.12", "C++ / C++20", "Rust", "Java", "SQL / Bash"],
        },
        {
          index: "04 // FRONT",
          category: "Frontend",
          skills: ["React 19", "Vite", "Tailwind CSS", "Next.js", "State Machines", "Accessibility"],
        },
        {
          index: "05 // BACK",
          category: "Backend",
          skills: ["Node / Fastify", "NestJS", "FastAPI", "REST & gRPC", "Double-Entry", "bubblewrap"],
        },
        {
          index: "06 // DATA",
          category: "Storage & Infra",
          skills: ["PostgreSQL", "SQLCipher", "SQLite Local", "Docker", "Linux Kernel", "Git / CI/CD"],
        },
      ],
    },
    contact: {
      sec: "// SEC 06",
      kicker: "// INITIATE ENGAGEMENT",
      title: "LET'S BUILD GROUNDED, RESILIENT SOFTWARE.",
      lead: "Available for Software Engineer / Tech Lead positions, Clean Architecture consulting, Applied AI pipelines, or joint academic research initiatives.",
      emailCardTitle: "PRIMARY CHANNEL // EMAIL",
      btnCopyEmail: "COPY EMAIL",
      btnEmailCopied: "EMAIL COPIED ✓",
      githubCardTitle: "CODE ARCHIVE // GITHUB",
      btnOpenProfile: "OPEN PROFILE",
      linkedinCardTitle: "NETWORK // LINKEDIN",
      btnConnect: "CONNECT",
      locationCardTitle: "OPERATIONAL BASE // LOCATION",
      locationCoordinates: "FAETERJ-RIO / RIO DE JANEIRO, RJ · BRAZIL",
      colophonTitle: "SPEC.COLOPHON // ENGINEERING DIRECTIVES",
      colophonTimestamp: "TIMESTAMP: 2026.04.14-UTC",
      colophonLead: "This curriculum and portfolio strictly adheres to the canons of the Swiss Typographic Style (Die Neue Typographie):",
      colophonEngine: "Engine: React 19 + TypeScript + Tailwind CSS v4 (Zero-Radius Discipline)",
      colophonTypo: "Typography: Hanken Grotesk (Swiss Neo-Grotesque) + JetBrains Mono (Tabular Numerals)",
      colophonRules: "Invariant: Zero non-deterministic dependencies. Total architectural transparency.",
      auditPass: "ENGINEERING AUDIT // PASSED",
      auditZeroDependencies: "ZERO OBSOLETE RUNTIME DEPENDENCIES",
      auditDomainIsolated: "DOMAIN & INFRASTRUCTURE RIGIDLY ISOLATED",
    },
    footer: {
      archive: "TECHNICAL ARCHIVE",
      spec: "REV. 2026.04 // SWISS PRESS SPEC",
      grid: "GRID: 12-COL 48PX MARGIN",
      operational: "STATUS: OPERATIONAL",
      rights: "© 2026 FELLYPE SAMUEL DE MELO. ALL RIGHTS RESERVED.",
      colophon: "COLOPHON",
      legalNotice: "LEGAL NOTICE",
      pgpKey: "PGP KEY",
    },
  },
};
