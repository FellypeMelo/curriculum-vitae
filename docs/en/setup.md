# Local setup

**Language:** English · [Português (Brasil)](../pt-BR/setup.md)

## Prerequisites

Node.js and npm. No Node or npm version is pinned anywhere in this repository (no `.nvmrc`, no
`engines` field in [`package.json`](../../package.json)) — a current LTS release of Node.js is
recommended, but nothing in the repo enforces a specific one. There is no other runtime
dependency: no database, no external service credentials, and no environment-variable file are
required to run this project locally.

## Install

```bash
npm install
```

This installs the dependencies exactly as declared in `package.json` and pinned in
`package-lock.json` — React 19, Vite 7, Tailwind CSS v4, Framer Motion 12, Lucide React, and the
Fontsource font packages listed in [`architecture.md`](./architecture.md#styling), plus the
ESLint 9 toolchain as a dev dependency.

## Available scripts

All four scripts below come verbatim from `package.json`; none have been altered for this
documentation pass.

| Script | Command it runs | What it does |
| --- | --- | --- |
| `npm run dev` | `vite` | Starts the Vite dev server with hot module replacement, default `http://localhost:5173`. |
| `npm run build` | `tsc -b && vite build` | Type-checks the project with `tsc -b`, then produces a production bundle in `./dist`. |
| `npm run lint` | `eslint .` | Runs ESLint over the whole tree using the flat config in [`eslint.config.js`](../../eslint.config.js). |
| `npm run preview` | `vite preview` | Serves the already-built `./dist` folder locally, so you can sanity-check a production build before pushing it. |

There is no `npm test` script. See [`testing.md`](./testing.md) for why.

## Day-to-day development loop

```bash
npm install
npm run dev       # edit src/, see changes live at http://localhost:5173
npm run lint      # before committing
npm run build     # before anything meant to reach production — see below
```

## Linting

[`eslint.config.js`](../../eslint.config.js) is a flat ESLint 9 config combining:

- `@eslint/js` recommended rules
- `typescript-eslint` recommended rules
- `eslint-plugin-react-hooks` (flat recommended preset)
- `eslint-plugin-react-refresh` (Vite preset)

It ignores `dist/` globally and applies to `**/*.{ts,tsx}`. Run it with `npm run lint`. It is
**not** invoked automatically by any Git hook or CI step in this repository today — running it is
a manual step for now (tracked in [`roadmap.md`](./roadmap.md)).

## Before you push: the `dist/` step

`npm run build` alone is not enough if your change is meant to reach the live site. This
project's deploy workflow publishes whatever is already committed in `dist/` — it does not build
anything itself. See [`deployment.md`](./deployment.md) for the full mechanics and the release
checklist, and [`../../CONTRIBUTING.md`](../../CONTRIBUTING.md) for the contributor-facing
summary of the same footgun.

## Editor setup

No `.editorconfig`, no committed VS Code workspace settings, and no Prettier config exist in this
repository. Formatting consistency today relies entirely on whatever ESLint's rule set enforces
(which does not include a full formatter's worth of style rules) plus the author's own editor
defaults. There is nothing further to configure to get useful lint/type feedback beyond what an
editor's built-in TypeScript and ESLint extensions already pick up from
`tsconfig*.json` and `eslint.config.js`.
