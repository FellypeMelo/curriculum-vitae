export function ProjectsSection() {
  return (
    <section
      className="reveal-node w-full px-grid-margin-mobile md:px-grid-margin-tablet lg:px-grid-margin-desktop py-unit-16 border-b border-primary bg-surface-container-lowest"
      id="projects"
    >
      <div className="grid grid-cols-12 gap-gutter-desktop mb-unit-8">
        <div className="col-span-12 lg:col-span-3">
          <span className="font-meta-mono text-meta-mono text-secondary font-bold block mb-unit-1">
            // SEC 04
          </span>
          <h2 className="font-headline-lg text-headline-lg uppercase text-primary tracking-tight">
            PROJECT INDEX
          </h2>
          <span className="font-meta-mono-sm text-meta-mono-sm text-on-surface-variant uppercase block mt-unit-1">
            ESTUDOS DE CASO DE ENGENHARIA
          </span>
        </div>
        <div className="col-span-12 lg:col-span-9 flex items-end">
          <p className="font-body-md text-body-md text-on-surface-variant">
            Estudos de caso reais desenvolvidos com tolerância zero a atalhos. Todos os repositórios incluem suítes completas de testes automatizados, documentação arquitetural e invariantes garantidas.
          </p>
        </div>
      </div>

      <div className="space-y-unit-12">
        {/* ===================================================================
            PROJETO 01: OpenScientific Workbench
            =================================================================== */}
        <article className="border border-primary bg-surface shadow-sm transition-all duration-300 hover:shadow-md">
          <div className="px-unit-4 py-unit-3 bg-surface-container border-b border-primary flex flex-wrap justify-between items-center gap-unit-2 font-meta-mono text-meta-mono">
            <div className="flex items-center gap-unit-2">
              <span className="text-secondary font-bold">PROJ.01 // RESEARCH SYSTEMS</span>
              <span className="text-primary font-bold">OpenScientific Workbench</span>
            </div>
            <div className="flex items-center gap-unit-3 text-meta-mono-sm">
              <span>[COMMITS: 92 SOLO]</span>
              <span className="text-secondary font-bold">[TEST RATIO: 0.79 LOC]</span>
              <span className="bg-primary text-on-primary px-unit-2 py-0.5">80% TEST COVERAGE</span>
            </div>
          </div>

          <div className="p-unit-6 grid grid-cols-12 gap-gutter-desktop">
            <div className="col-span-12 lg:col-span-7 space-y-unit-4">
              <h3 className="font-headline-md text-headline-md text-primary font-bold">
                Plataforma de agentes científicos com isolamento em sandbox e verificação numérica estrita.
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Sistema para orquestração determinística de agentes de pesquisa científica. O ambiente executa scripts de modelagem sob um sandbox de baixo nível baseado em <strong>Linux bubblewrap</strong> (sem privilégios de root, namespaces isolados e filesystem somente-leitura). Possui um <strong>duplo portão de validação</strong> com revisor numérico operando com tolerância estrita de erro (ε &lt; 1e-5), garantindo convergência e reprodutibilidade analítica absoluta antes da escrita em DAG.
              </p>

              <div className="pt-unit-2 font-meta-mono text-meta-mono text-primary flex flex-wrap gap-unit-2">
                <span className="border border-outline px-unit-2 py-unit-1 bg-surface-container hover:border-secondary transition-colors cursor-default">Linux bubblewrap</span>
                <span className="border border-outline px-unit-2 py-unit-1 bg-surface-container hover:border-secondary transition-colors cursor-default">DAG Execution Engine</span>
                <span className="border border-outline px-unit-2 py-unit-1 bg-surface-container hover:border-secondary transition-colors cursor-default">Numerical Verifier (1e-5)</span>
                <span className="border border-outline px-unit-2 py-unit-1 bg-surface-container hover:border-secondary transition-colors cursor-default">Python 3.12 / Rust</span>
              </div>

              {/* Sandbox Isolation Status */}
              <div className="mt-3 p-2 bg-surface-container-low border border-outline-variant font-meta-mono-sm flex items-center justify-between">
                <span className="text-on-surface-variant flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 telemetry-pulse"></span>
                  <span>KERNEL SANDBOX ENFORCEMENT: ACTIVE</span>
                </span>
                <span className="text-secondary font-bold text-[11px]">[UNSHARE_PID | UNSHARE_NET]</span>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5 bg-surface-container-low border border-outline-variant p-unit-4 font-meta-mono text-meta-mono flex flex-col justify-between">
              <div>
                <div className="text-secondary font-bold text-meta-mono-sm pb-unit-2 border-b border-outline-variant uppercase flex justify-between items-center">
                  <span>MÉTRICAS ARQUITETURAIS // VERIFICAÇÃO</span>
                  <span className="text-[10px] text-primary font-bold">100% PASS</span>
                </div>
                <div className="mt-unit-4 space-y-unit-3 text-body-sm">
                  <div className="flex justify-between hover:bg-surface p-1 transition-colors">
                    <span className="text-on-surface-variant">Sandbox Security:</span>
                    <span className="font-bold text-primary">bwrap unshare-all</span>
                  </div>
                  <div className="flex justify-between hover:bg-surface p-1 transition-colors">
                    <span className="text-on-surface-variant">Dual-Gate Numerical Tolerance:</span>
                    <span className="font-bold text-secondary">ε ≤ 0.000010</span>
                  </div>
                  <div className="flex justify-between hover:bg-surface p-1 transition-colors">
                    <span className="text-on-surface-variant">Test-to-Code Ratio:</span>
                    <span className="font-bold text-primary">0.79 linhas/linha</span>
                  </div>
                  <div className="flex justify-between hover:bg-surface p-1 transition-colors">
                    <span className="text-on-surface-variant">Total Coverage:</span>
                    <span className="font-bold text-primary">80.4% das branches</span>
                  </div>
                </div>
              </div>

              <div className="mt-unit-6 pt-unit-3 border-t border-outline-variant flex justify-between items-center text-meta-mono-sm">
                <span className="text-on-surface-variant">REPOSITÓRIO VERIFICADO</span>
                <a
                  className="text-primary font-bold hover:text-secondary flex items-center gap-1 transition-colors"
                  href="https://github.com/FellypeMelo"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>[CÓDIGO DISPONÍVEL]</span>
                  <span className="material-symbols-outlined text-[13px]">open_in_new</span>
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* ===================================================================
            PROJETO 02: llama-cpp-turboquant-SYCL
            =================================================================== */}
        <article className="border border-primary bg-surface shadow-sm transition-all duration-300 hover:shadow-md" id="turboquant-card">
          <div className="px-unit-4 py-unit-3 bg-surface-container border-b border-primary flex flex-wrap justify-between items-center gap-unit-2 font-meta-mono text-meta-mono">
            <div className="flex items-center gap-unit-2">
              <span className="text-secondary font-bold">PROJ.02 // GPU COMPUTING</span>
              <span className="text-primary font-bold">llama-cpp-turboquant-SYCL</span>
            </div>
            <div className="flex items-center gap-unit-3 text-meta-mono-sm">
              <span className="text-secondary font-bold">[ACCELERATION: +102.8%]</span>
              <span className="bg-primary text-on-primary px-unit-2 py-0.5">34/34 CASOS COSINE = 1.000000</span>
            </div>
          </div>

          <div className="p-unit-6 grid grid-cols-12 gap-gutter-desktop">
            <div className="col-span-12 lg:col-span-7 space-y-unit-4">
              <h3 className="font-headline-md text-headline-md text-primary font-bold">
                Port de kernels de transformada rápida de Walsh-Hadamard para SYCL sobre GPU Intel Arc B580.
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Implementação de kernels computacionais WHT (Walsh-Hadamard Transform) e quantização TurboQuant escrita em C++ nativo com <strong>oneAPI SYCL</strong> para execução massivamente paralela na microarquitetura Intel Xe2 (GPU Arc B580). O throughput foi elevado de <strong>1246 para 2528 tokens/segundo</strong> (+102.8%), preservando paridade matemática estrita: 34 casos de teste de 34 alcançaram similaridade cosseno de <strong>1.000000</strong> frente à referência matemática FP32.
              </p>
              <div className="pt-unit-2 font-meta-mono text-meta-mono text-primary flex flex-wrap gap-unit-2">
                <span className="border border-outline px-unit-2 py-unit-1 bg-surface-container hover:border-secondary transition-colors cursor-default">C++20</span>
                <span className="border border-outline px-unit-2 py-unit-1 bg-surface-container hover:border-secondary transition-colors cursor-default">Intel oneAPI SYCL</span>
                <span className="border border-outline px-unit-2 py-unit-1 bg-surface-container hover:border-secondary transition-colors cursor-default">Intel Arc B580 (Xe2)</span>
                <span className="border border-outline px-unit-2 py-unit-1 bg-surface-container hover:border-secondary transition-colors cursor-default">WHT Kernels</span>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5 bg-surface-container-low border border-outline-variant p-unit-4 font-meta-mono text-meta-mono flex flex-col justify-between">
              <div>
                <div className="text-secondary font-bold text-meta-mono-sm pb-unit-2 border-b border-outline-variant uppercase flex justify-between items-center">
                  <span>TELEMETRIA DE THROUGHPUT // BENCHMARK</span>
                  <span className="text-secondary font-bold">+102.8%</span>
                </div>

                <div className="mt-unit-4 space-y-unit-3">
                  <div>
                    <div className="flex justify-between text-meta-mono-sm mb-unit-1">
                      <span className="text-on-surface-variant">BASELINE (CPU/GENERIC):</span>
                      <span className="text-primary font-bold">1246 tok/s</span>
                    </div>
                    <div className="w-full h-3 bg-surface-container border border-outline overflow-hidden">
                      <div className="h-full bg-outline transition-all duration-1000 ease-out" style={{ width: '49.3%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-meta-mono-sm mb-unit-1">
                      <span className="text-secondary font-bold">SYCL KERNEL (B580):</span>
                      <span className="text-secondary font-bold">2528 tok/s (+102.8%)</span>
                    </div>
                    <div className="w-full h-3 bg-surface-container border border-outline overflow-hidden">
                      <div className="h-full bg-secondary transition-all duration-1000 ease-out hover:brightness-110" style={{ width: '100%' }}></div>
                    </div>
                  </div>

                  <div className="pt-unit-2 text-meta-mono-sm text-on-surface-variant flex justify-between border-t border-outline-variant">
                    <span>Cosine Similarity Check:</span>
                    <span className="text-primary font-bold font-mono">1.000000 (Pass 34/34)</span>
                  </div>
                </div>
              </div>

              <div className="mt-unit-6 pt-unit-3 border-t border-outline-variant flex justify-between items-center text-meta-mono-sm">
                <span className="text-on-surface-variant">TARGET: INTEL XE2 ARCH</span>
                <span className="text-secondary font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-secondary telemetry-pulse"></span> OPTIMIZED
                </span>
              </div>
            </div>
          </div>
        </article>

        {/* ===================================================================
            PROJETO 03: Embryo Trainer (Deep Learning Médico)
            =================================================================== */}
        <article className="border border-primary bg-surface shadow-sm transition-all duration-300 hover:shadow-md">
          <div className="px-unit-4 py-unit-3 bg-surface-container border-b border-primary flex flex-wrap justify-between items-center gap-unit-2 font-meta-mono text-meta-mono">
            <div className="flex items-center gap-unit-2">
              <span className="text-secondary font-bold">PROJ.03 // MEDICAL DEEP LEARNING</span>
              <span className="text-primary font-bold">Embryo Trainer &amp; Leakage Eliminator</span>
            </div>
            <div className="flex items-center gap-unit-3 text-meta-mono-sm">
              <span>[DATASET: 18.520 FRAMES]</span>
              <span className="text-secondary font-bold">[ZERO LEAKAGE]</span>
              <span className="bg-primary text-on-primary px-unit-2 py-0.5">INT8 mAP 0.7310</span>
            </div>
          </div>

          <div className="p-unit-6 grid grid-cols-12 gap-gutter-desktop">
            <div className="col-span-12 lg:col-span-7 space-y-unit-4">
              <h3 className="font-headline-md text-headline-md text-primary font-bold">
                Detecção de Data Leakage em visão computacional biomédica e quantização edge.
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Pesquisa aplicada para segmentação e classificação de viabilidade de embriões humanos. O projeto identificou uma falha clássica de <strong>Data Leakage</strong> na literatura científica: o particionamento por imagem individual distribui múltiplos quadros do mesmo embrião entre os conjuntos de treino e teste, inflando os resultados artificialmente. A reestruturação empregou <strong>StratifiedGroupKFold por embrião</strong>, garantindo isolamento total do paciente.
              </p>
              <div className="pt-unit-2 font-meta-mono text-meta-mono text-primary flex flex-wrap gap-unit-2">
                <span className="border border-outline px-unit-2 py-unit-1 bg-surface-container hover:border-secondary transition-colors cursor-default">PyTorch 2.4</span>
                <span className="border border-outline px-unit-2 py-unit-1 bg-surface-container hover:border-secondary transition-colors cursor-default">YOLOv8-seg</span>
                <span className="border border-outline px-unit-2 py-unit-1 bg-surface-container hover:border-secondary transition-colors cursor-default">StratifiedGroupKFold</span>
                <span className="border border-outline px-unit-2 py-unit-1 bg-surface-container hover:border-secondary transition-colors cursor-default">INT8 Post-Training Quant</span>
              </div>
            </div>

            {/* Technical Comparison: FIG 02 */}
            <div className="col-span-12 lg:col-span-5 bg-surface-container-low border border-outline-variant p-unit-4 font-meta-mono text-meta-mono">
              <div className="text-secondary font-bold text-meta-mono-sm pb-unit-2 border-b border-outline-variant uppercase flex justify-between">
                <span>FIG. 02 // VULNERABILIDADE ESTRUTURAL</span>
                <span className="text-primary font-bold">[AUDITORIA]</span>
              </div>
              <div className="mt-unit-4 space-y-unit-4">
                {/* Image Split (Vazamento) */}
                <div className="p-unit-3 border border-secondary/60 bg-surface transition-all duration-200 hover:border-secondary hover:bg-surface-container">
                  <div className="flex items-center justify-between text-secondary font-bold text-meta-mono-sm">
                    <span>IMAGE SPLIT (INGÊNUO)</span>
                    <span className="text-xs bg-red-100 text-secondary px-1.5 py-0.5 border border-secondary">❌ VAZAMENTO</span>
                  </div>
                  <div className="text-body-sm text-on-surface-variant mt-unit-1">
                    Mesmo embrião E_01 compartilha frames F1, F2 no Treino e F3 no Teste. mAP artificialmente alto (~0.98), inútil clinicamente.
                  </div>
                </div>

                {/* Embryo Split (Estrito) */}
                <div className="p-unit-3 border-2 border-primary bg-surface-container-lowest transition-all duration-200 hover:border-secondary hover:shadow-sm">
                  <div className="flex items-center justify-between text-primary font-bold text-meta-mono-sm">
                    <span>EMBRYO SPLIT (ESTRITO)</span>
                    <span className="text-xs bg-emerald-100 text-emerald-800 px-1.5 py-0.5 border border-emerald-600 font-bold">✓ ROBUSTO</span>
                  </div>
                  <div className="text-body-sm text-on-surface mt-unit-1">
                    Agrupamento por ID de paciente e embrião. Zero overlap entre folds. Generalização clínica autêntica: FP32 mAP <strong>0.7364</strong> vs INT8 mAP <strong>0.7310</strong> (-65% VRAM, 1.58x speedup).
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* ===================================================================
            PROJETO 04: tino & PROJETO 05: fecho (Grid Lado a Lado)
            =================================================================== */}
        <div className="grid grid-cols-12 gap-gutter-desktop">
          {/* PROJETO 04: tino */}
          <article className="col-span-12 lg:col-span-6 border border-primary bg-surface flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200">
            <div>
              <div className="px-unit-4 py-unit-3 bg-surface-container border-b border-primary flex justify-between items-center font-meta-mono text-meta-mono">
                <span className="text-secondary font-bold">PROJ.04 // LOCAL-FIRST</span>
                <span className="text-meta-mono-sm font-bold bg-surface px-2 py-0.5 border border-outline-variant">33 TEST SUITES</span>
              </div>
              <div className="p-unit-6">
                <div className="flex items-baseline justify-between mb-unit-2">
                  <h3 className="font-headline-md text-headline-md text-primary font-bold">tino</h3>
                  <span className="font-meta-mono text-meta-mono text-on-surface-variant">SQLCipher · Android</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-unit-4">
                  Aplicativo de finanças pessoais local-first com captura passiva de notificações bancárias via <code>NotificationListenerService</code> do Android. Zero servidores remotos, zero telemetria externa. Deduplicação determinística em janela deslizante de 90 segundos usando o algoritmo de hash FNV-1a.
                </p>
                <div className="p-unit-3 bg-surface-container border border-outline-variant font-meta-mono-sm text-meta-mono-sm space-y-unit-1">
                  <div className="flex justify-between hover:bg-surface-container-high p-0.5 transition-colors">
                    <span>CRIPTOGRAFIA:</span> <span className="font-bold text-primary">SQLCipher AES-256</span>
                  </div>
                  <div className="flex justify-between hover:bg-surface-container-high p-0.5 transition-colors">
                    <span>DEDUPLICAÇÃO:</span> <span className="font-bold text-primary">FNV-1a / 90s window</span>
                  </div>
                  <div className="flex justify-between hover:bg-surface-container-high p-0.5 transition-colors">
                    <span>TEST RIG:</span> <span className="font-bold text-secondary">33 arquivos de teste</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-unit-6 py-unit-3 border-t border-outline-variant bg-surface-container-low font-meta-mono text-meta-mono-sm flex justify-between items-center">
              <span className="text-on-surface-variant flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span> INVARIANTE: ZERO CLOUD LEAK
              </span>
              <span className="text-primary font-bold hover:text-secondary cursor-default">[VERIFICADO]</span>
            </div>
          </article>

          {/* PROJETO 05: fecho */}
          <article className="col-span-12 lg:col-span-6 border border-primary bg-surface flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200">
            <div>
              <div className="px-unit-4 py-unit-3 bg-surface-container border-b border-primary flex justify-between items-center font-meta-mono text-meta-mono">
                <span className="text-secondary font-bold">PROJ.05 // STRICT ACCOUNTING</span>
                <span className="text-meta-mono-sm font-bold bg-surface px-2 py-0.5 border border-outline-variant">6 TESTED MIGRATIONS</span>
              </div>
              <div className="p-unit-6">
                <div className="flex items-baseline justify-between mb-unit-2">
                  <h3 className="font-headline-md text-headline-md text-primary font-bold">fecho</h3>
                  <span className="font-meta-mono text-meta-mono text-on-surface-variant">Double-Entry · Rust</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-unit-4">
                  Livro-caixa e conciliação fiscal para Microempreendedores Individuais (MEI). Arquitetado com partida dobrada (double-entry bookkeeping) estrita: nenhuma transação é gravada se o saldo entre débito e crédito não satisfizer a invariante contábil de soma zero exata (Σ = R$ 0,00) com precisão Decimal de ponto fixo.
                </p>
                <div className="p-unit-3 bg-surface-container border border-outline-variant font-meta-mono-sm text-meta-mono-sm space-y-unit-1">
                  <div className="flex justify-between hover:bg-surface-container-high p-0.5 transition-colors">
                    <span>INVARIANTE CONTÁBIL:</span> <span className="font-bold text-secondary">Σ(Débito + Crédito) == 0</span>
                  </div>
                  <div className="flex justify-between hover:bg-surface-container-high p-0.5 transition-colors">
                    <span>PADRÃO ARQUITETURAL:</span> <span className="font-bold text-primary">Unit of Work / Repository</span>
                  </div>
                  <div className="flex justify-between hover:bg-surface-container-high p-0.5 transition-colors">
                    <span>SCHEMA MIGRATIONS:</span> <span className="font-bold text-primary">6 migr. validadas em CI</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-unit-6 py-unit-3 border-t border-outline-variant bg-surface-container-low font-meta-mono text-meta-mono-sm flex justify-between items-center">
              <span className="text-on-surface-variant flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span> PRECISÃO: FIXED POINT DECIMAL
              </span>
              <span className="text-primary font-bold hover:text-secondary cursor-default">[VERIFICADO]</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
