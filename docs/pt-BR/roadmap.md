# Roadmap

**Idioma:** Português (Brasil) · [English](../en/roadmap.md)

Esta página reúne dois tipos diferentes de material voltado para o futuro deste repositório:

1. Lacunas concretas e atualmente registradas (abaixo) — coisas que o site publicado ainda não
   tem.
2. Um plano exploratório de redesign (mais adiante) que foi escrito em algum momento mas
   **nunca foi implementado** e contradiz o site como ele existe hoje.

## Lacunas registradas

Nenhum dos itens abaixo está implementado. Estão listados aproximadamente pela ordem de quanto
afetam um leitor ou contribuidor hoje, não por um cronograma comprometido — não existe
cronograma de release para este projeto.

- **Testes automatizados.** Não há framework de testes em `package.json` nem nenhum arquivo
  `*.test.*` / `*.spec.*` em nenhum lugar da árvore. Veja [`testing.md`](./testing.md) para o
  estado atual completo. Esta é a maior lacuna estrutural para um projeto deste tamanho.
- **Conectar `lint` e `build` ao CI.** [`.github/workflows/deploy.yml`](../../.github/workflows/deploy.yml)
  apenas envia a pasta `dist/` já commitada; ele nunca roda `npm install`, `npm run build` ou
  `npm run lint`. Veja [`deployment.md`](./deployment.md) para o que o workflow realmente faz.
- **Alternador de idioma dentro da aplicação.** O site publicado é somente em português
  (`index.html` declara `lang="pt-BR"`, e toda string em `src/data/profile.ts` está em
  português). Não há biblioteca de i18n, nenhum seletor de idioma e nenhum caminho de conteúdo
  em inglês na aplicação em execução — apenas esta árvore de documentação e o README da raiz são
  bilíngues.
- **Reconciliar o histórico deste próprio arquivo.** Este documento morava em
  `conductor/terminal-studio-plan.md`, um arquivo de planejamento avulso na raiz do repositório.
  Ele foi movido para cá (`git mv`) em vez de excluído, seguindo a política desta etapa de
  documentação de não apagar conteúdo existente. Se o plano abaixo será retomado, adaptado ou
  formalmente descontinuado é uma decisão do dono do repositório, não algo que esta etapa de
  documentação resolve.

## Plano exploratório: redesign "Terminal Studio" (não implementado)

> **Status: exploratório, não implementado.** Tudo a partir daqui é um documento de
> planejamento escrito para explorar uma direção visual completamente diferente — uma interface
> escura, inspirada em sistema operacional/CLI — para este portfólio. **Nada disso foi
> construído.** O site publicado hoje usa o design editorial-técnico "Ink & Signal" descrito no
> [`README.md`](../../README.pt-BR.md) da raiz (grade de prancheta em hairline claro, tipografia
> de destaque expressiva, um alternador claro/escuro e um grafo generativo em Canvas 2D no
> hero — veja [`architecture.md`](./architecture.md)). O plano abaixo antecede ou foi rascunhado
> em paralelo a esse design e nunca foi executado; ele é preservado literalmente logo abaixo como
> um registro histórico de exploração de design, não como uma descrição do código atual.

### 1. Contexto e motivação
O objetivo é transformar completamente o portfólio atual — de rolagem vertical e tema claro —
em uma experiência altamente interativa, inspirada em sistema operacional, chamada "Terminal
Studio". Este novo design funde a estética de uma interface de linha de comando (ZUI.C), a
confiança estrutural de um estúdio digital (SIRNIK) e o minimalismo radical (Vincent Saïsset).
Ele introduz uma "Insight Layer" única, que revela o raciocínio de design e técnico por trás do
trabalho ao apertar uma tecla.

### 2. Escopo e impacto
- **`index.html`**: atualizar para incluir as fontes externas `Geist Mono` e `Inter`.
- **`src/index.css` e `tailwind.config.js`**: implementar a nova paleta de cores (pretos
  profundos, cinzas escuros e acentos verde-neon/matrix) e animações customizadas (por exemplo,
  efeitos de glitch).
- **`src/App.tsx`**: reescrita completa para implementar o layout de Split View em CSS Grid
  (Terminal Header, navegação lateral, área de conteúdo principal e rodapé de Command Bar).
- **`src/data/profile.ts`**: estender as estruturas de dados existentes para incluir "insights"
  (metadados para a Insight Layer).
- **`src/components/ui/`**:
  - Criar `TerminalHeader.tsx` (controles de janela estilo macOS, relógio ao vivo).
  - Criar `CommandBar.tsx` (input de terminal interativo).
  - Criar `InsightLayer.tsx` (sistema de overlay para anotações).
- **`src/components/sections/`**: refatorar os componentes existentes (`About`, `Experience`,
  `Skills` etc.) para funcionarem como "views" discretas e intercambiáveis, em vez de seções
  empilhadas e roláveis.

### 3. Solução e arquitetura propostas
- **Gerenciamento de estado**: usar estado React em `App.tsx` para gerenciar `activeView`
  (seção atual) e `insightsVisible` (alternado pela tecla 'i').
- **Navegação dupla**: os usuários podem navegar clicando nos itens da barra lateral
  (estilizados como comandos de terminal) OU digitando comandos (por exemplo, `> experience`) na
  Command Bar do rodapé.
- **A Insight Layer**: um React Portal ou overlay fixo que escuta a tecla `i`. Quando ativa, usa
  `getBoundingClientRect` para posicionar dinamicamente tooltips de anotação ao lado dos
  elementos-alvo (identificados via atributos `data-target`).
- **Detalhes estéticos**: forte dependência de tipografia monoespaçada para elementos de UI,
  sans-serif limpa para leitura longa, e sutis efeitos de glitch em CSS no hover de elementos
  interativos.

### 4. Plano de implementação por fases

#### Fase 1: Fundação (tema e tipografia)
- Atualizar `index.html` com Google Fonts (`Geist Mono`, `Inter`).
- Definir variáveis CSS para o tema escuro de SO (`--bg: #0a0c0a`, `--surface: #111311`,
  `--accent: #4ade80`).
- Adicionar classes utilitárias CSS globais para o efeito de hover `.glitch`.

#### Fase 2: Shell do layout principal
- Montar o novo `App.tsx` usando um CSS Grid responsivo:
  - Topo: `TerminalHeader` (semáforo de janela + hora ao vivo).
  - Barra lateral esquerda: `WorkNav` (lista de seções com prompts `$`).
  - Centro/direita: área `MainContent` (container rolável para a view ativa).
  - Rodapé: `CommandBar` (campo de input fixo para comandos).

#### Fase 3: Adaptação das Views (Conteúdo)
- Converter `Hero`, `About`, `Experience`, `Education`, `Skills` e `Certifications` em views
  independentes.
- Atualizar seu estilo interno para combinar com a nova estética escura, minimalista e de alto
  contraste.
- Adicionar atributos `id` ou `data-target` específicos em elementos-chave (por exemplo, cargos,
  badges de skill) para preparar a Insight Layer.

#### Fase 4: A Insight Layer (a funcionalidade "mágica")
- Criar o componente `InsightLayer`.
- Implementar um hook customizado `useInsights` para escutar a tecla 'i' globalmente (ignorando
  quando o usuário está digitando na Command Bar).
- Renderizar tooltips flutuantes que apontam para os elementos `data-target` com anotações de
  design/técnicas.
- Adicionar listeners de resize e scroll para reposicionar os tooltips dinamicamente.

#### Fase 5: Integração da CLI de comandos
- Conectar a `CommandBar` para aceitar inputs.
- Implementar um parser de comandos para lidar com comandos como `help`, `about`, `skills`,
  `clear` e `email`.
- Conectar a execução dos comandos ao estado `activeView` para trocar o conteúdo de forma
  contínua.

### 5. Verificação e testes
- **Visuais**: garantir que o tema escuro seja consistente e a hierarquia tipográfica seja
  clara. Verificar os efeitos de glitch no hover.
- **Navegação**: testar que clicar nos links da barra lateral E digitar comandos alteram
  corretamente a view ativa.
- **Insight Layer**: apertar 'i' e verificar que os tooltips aparecem exatamente ao lado dos
  elementos-alvo pretendidos. Redimensionar a janela para garantir que eles se reposicionem
  corretamente.
- **Responsividade**: verificar que o layout se empilha de forma elegante no mobile (a barra
  lateral vira uma faixa horizontal rolável ou colapsa em um menu, a Command Bar permanece
  utilizável).

### 6. Migração e rollback
Por se tratar de uma mudança arquitetural importante na camada de UI, as alterações seriam
commitadas de forma incremental.
- Passo 1: fundação de CSS/tema (seguro, facilmente reversível).
- Passo 2: novos componentes de UI construídos isoladamente.
- Passo 3: substituição do `App.tsx`.
Se o layout falhar criticamente, seria possível reverter para os commits anteriores de `App.tsx`
e de estilo, já que os dados subjacentes em `profile.ts` permaneceriam retrocompatíveis.

---

*Este arquivo estava originalmente em `conductor/terminal-studio-plan.md`, na raiz do
repositório; ele foi movido para cá com `git mv` para preservar o histórico. Este é o mirror em
português do conteúdo em [`../en/roadmap.md`](../en/roadmap.md), adaptado para um leitor técnico
nativo, mantendo nomes de arquivos, identificadores de código e comandos exatamente como no
original.*
