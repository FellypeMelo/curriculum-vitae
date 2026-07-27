# Curriculum Vitae - Fellype Samuel de Melo

**Idioma:** Português (Brasil) · [English](./README.md)

![License](https://img.shields.io/badge/License-Proprietary-informational)

## Sobre o projeto

Portfólio / currículo interativo de página única que apresenta **Fellype Samuel de Melo**
como **Software Engineer** com foco em arquitetura de software, engenharia de software e
Inteligência Artificial aplicada.

A interface segue uma linguagem editorial-técnica ("Ink & Signal"): tipografia expressiva,
grade de prancheta em hairline, tema claro/escuro e um grafo de arquitetura generativo em
canvas na dobra inicial. Todo o movimento respeita `prefers-reduced-motion`.

## Tecnologias

- **[React 19](https://react.dev/)** + **[TypeScript](https://www.typescriptlang.org/)**
- **[Vite](https://vitejs.dev/)** para build e dev server
- **[Tailwind CSS v4](https://tailwindcss.com/)** com tokens de tema em CSS custom properties
- **[Framer Motion](https://www.framer.com/motion/)** para reveals em scroll
- **[Lucide React](https://github.com/lucide-icons/lucide)** para ícones
- **Fontes self-hosted** via Fontsource: Bricolage Grotesque (display), Archivo (corpo), Geist Mono (dados)
- **Canvas 2D** para o grafo de arquitetura (sem dependências pesadas)

## Estrutura

```
src/
├── components/
│   ├── common/       # Reveal (wrapper de animação em scroll)
│   ├── layout/       # Nav (barra + toggle de tema + seção ativa)
│   ├── sections/     # Hero, About, Experience, Projects, Publications,
│   │                 # Skills, Education, Certifications, Contact
│   └── visual/       # ArchGraph (canvas generativo)
├── data/profile.ts   # Conteúdo do currículo (fonte única de verdade)
├── lib/hooks.ts      # useTheme, useActiveSection
├── index.css         # Tokens de tema, base, utilitários
├── App.tsx
└── main.tsx
```

## Executar localmente

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build de produção

```bash
npm run build    # gera ./dist
```

O deploy é feito para **GitHub Pages** pelo workflow em `.github/workflows/deploy.yml`,
que publica o conteúdo de `dist/` a cada push na branch `main`. Esse workflow **não** executa
`npm install`, build, lint ou testes — ele apenas publica o que já estiver commitado em `dist/`.
Por isso, `dist/` é versionado no repositório e deve ser gerado (`npm run build`) e commitado
localmente antes de qualquer push que deva ir para produção. Veja
[`CONTRIBUTING.md`](./CONTRIBUTING.md) (em inglês) para o checklist de release.

## Testes

Não há suíte de testes automatizados neste projeto (nenhum framework de teste em
`package.json`, nenhum arquivo `*.test.*`/`*.spec.*`). O único verificador estático é o ESLint
(`npm run lint`), que não é executado pelo CI.

## Documentação adicional

Documentação mais aprofundada, por tópico, vive em [`docs/`](./docs/README.md), espelhada em
português e inglês:

- [`docs/pt-BR/architecture.md`](./docs/pt-BR/architecture.md) / [`docs/en/architecture.md`](./docs/en/architecture.md)
- [`docs/pt-BR/setup.md`](./docs/pt-BR/setup.md) / [`docs/en/setup.md`](./docs/en/setup.md)
- [`docs/pt-BR/deployment.md`](./docs/pt-BR/deployment.md) / [`docs/en/deployment.md`](./docs/en/deployment.md)
- [`docs/pt-BR/testing.md`](./docs/pt-BR/testing.md) / [`docs/en/testing.md`](./docs/en/testing.md)
- [`docs/pt-BR/roadmap.md`](./docs/pt-BR/roadmap.md) / [`docs/en/roadmap.md`](./docs/en/roadmap.md)

## Licença

Este repositório **não** é open source e **não** está sob MIT, ao contrário do que uma versão
anterior deste README afirmava. Os termos reais estão em [`LICENSE`](./LICENSE): copyright
proprietário, todos os direitos reservados. A visualização do código é permitida para fins
educacionais ou para avaliação do portfólio profissional do autor; cópia, redistribuição,
obras derivadas e uso comercial **não** são permitidos sem autorização escrita explícita do
autor. Leia o arquivo [`LICENSE`](./LICENSE) na íntegra antes de reaproveitar qualquer parte
deste repositório.

---

Desenvolvido por [Fellype Melo](https://github.com/FellypeMelo).
