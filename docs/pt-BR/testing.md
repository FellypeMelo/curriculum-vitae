# Testes

**Idioma:** Português (Brasil) · [English](../en/testing.md)

## Estado atual: nenhum teste automatizado

Isso é dito de forma direta porque é fácil uma árvore de documentação sugerir uma cobertura que
não existe — não é o caso aqui:

- Não há framework de testes declarado em [`package.json`](../../package.json) — nada de
  Vitest, Jest, Playwright, Cypress.
- Não existe nenhum arquivo `*.test.*` ou `*.spec.*` em nenhum lugar da árvore versionada.
- Não existe script `npm test`.
- [`.github/workflows/deploy.yml`](../../.github/workflows/deploy.yml), o único workflow de CI
  deste repositório, não roda testes — ele nem sequer builda o projeto (veja
  [`deployment.md`](./deployment.md)).

## Quais verificações estáticas existem

Duas, ambas manuais hoje:

- **TypeScript**, via `tsc -b` como a primeira metade de `npm run build`. Isso pega erros de
  tipo em tempo de build, mas não substitui testes de comportamento — verifica formatos, não
  lógica.
- **ESLint**, via `npm run lint`, usando o flat config em
  [`eslint.config.js`](../../eslint.config.js) (`@eslint/js` recommended + `typescript-eslint` +
  `eslint-plugin-react-hooks` + `eslint-plugin-react-refresh`). Isso pega uma classe de
  problemas de hooks do React e de lint, não bugs de corretude.

Nenhum dos dois é acionado automaticamente pelo CI. Ambos são passos manuais, documentados em
[`setup.md`](./setup.md) e no `CONTRIBUTING.md` (disponível apenas em inglês).

## Por que isso importa especificamente neste projeto

A aplicação é pequena e majoritariamente apresentacional (veja
[`architecture.md`](./architecture.md)), mas não é isenta de risco:

- `src/lib/hooks.ts` tem lógica condicional real (a cadeia de fallback do `localStorage` em
  `useTheme`, a lógica de seleção do `IntersectionObserver` em `useActiveSection`) que se
  encaixaria bem em testes unitários.
- A ramificação de contagem de nós e de movimento reduzido em `ArchGraph.tsx` é exatamente o
  tipo de lógica que regride silenciosamente sem um teste fixando seu comportamento.
- `src/data/profile.ts` é a fonte única de verdade de cada seção; uma regressão de schema ou de
  tipo ali (por exemplo, um campo obrigatório renomeado) hoje só seria pega por `tsc -b` se
  quebrar um tipo, não se apenas quebrar uma suposição em tempo de execução que algum componente
  faz sobre os dados.

Nada disso é um defeito hoje — é uma descrição de onde o risco se concentraria se este projeto
crescesse além do seu escopo atual, de manutenção única e conteúdo estático.

## Como seria retrofitar testes (ainda não feito)

Esta seção é uma recomendação para trabalho futuro, não uma descrição de nada implementado.
Dado o stack existente (Vite + React 19 + TypeScript), as escolhas convencionais e de menor
atrito seriam:

- **Vitest** para testes unitários de `src/lib/hooks.ts` e de qualquer lógica não trivial
  futura, já que compartilha a configuração e o pipeline de transformação do Vite já usados na
  própria aplicação.
- **React Testing Library** para testes em nível de componente das seções, usando fixtures
  baseadas em `src/data/profile.ts`.
- **Playwright** (ou ferramenta comparável de ponta a ponta) para uma pequena suíte de smoke
  test: a página carrega, o scroll-spy da navegação destaca a seção certa, o toggle de tema
  persiste após recarregar.

Nenhum desses pacotes está instalado, e nenhuma configuração para eles existe neste repositório
até o momento desta escrita. Introduzi-los, e então conectar `npm test` e `npm run lint` ao
`deploy.yml` (ou a um workflow de CI separado) como um gate de qualidade real, está registrado em
[`roadmap.md`](./roadmap.md).
