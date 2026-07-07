# Curriculum Vitae - Fellype Samuel de Melo

![Status](https://img.shields.io/badge/Status-Online-brightgreen)
![License](https://img.shields.io/badge/License-MIT-green)

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
que publica o conteúdo de `dist/` a cada push na branch `main`.

## Licença

Licenciado sob [MIT](./LICENSE).

---

Desenvolvido por [Fellype Melo](https://github.com/FellypeMelo).
