# Contributing

This is a personal CV/portfolio site with a single maintainer
([@FellypeMelo](https://github.com/FellypeMelo)). Before opening a pull request, please read
[`LICENSE`](./LICENSE): the code and design are proprietary, and the license does not grant
permission to copy, redistribute, or reuse the design/layout. Contributions here are welcome in
the form of bug fixes, accessibility fixes, and small factual corrections — not forks or reuse
of the design.

## Local development

Requirements: Node.js and npm (no specific version is pinned in this repository; a current LTS
release is recommended).

```bash
npm install
npm run dev       # Vite dev server, default http://localhost:5173
```

Available scripts (from `package.json`):

| Script            | What it runs           | Purpose                          |
| ----------------- | ----------------------- | --------------------------------- |
| `npm run dev`     | `vite`                  | Local dev server with HMR         |
| `npm run build`   | `tsc -b && vite build`  | Type-check, then bundle to `dist/` |
| `npm run lint`    | `eslint .`              | ESLint (flat config)              |
| `npm run preview` | `vite preview`          | Serve the built `dist/` locally   |

There is no `npm test` script — this project has no automated test suite yet. Run
`npm run lint` before opening a pull request; it is currently the only static check available,
and it is not run in CI, so it will not catch anything for you automatically.

## The `dist/` footgun — read this before pushing to `main`

[`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) deploys to GitHub Pages by
uploading whatever is already committed in `dist/`. It does **not** run `npm install`,
`npm run build`, lint, or tests. If you change anything under `src/`, `index.html`, or any
config that affects the build, the live site will not reflect your change until you:

1. Run `npm run build` locally.
2. Commit the refreshed `dist/` alongside your source change.
3. Push to `main` (or merge a PR that includes the updated `dist/`).

A pull request that changes `src/` without an updated `dist/` will build correctly locally but
will not update the deployed site once merged.

## Pull requests

- Keep changes focused and describe what changed and why in the PR description (a template is
  provided).
- Run `npm run lint` and `npm run build` locally before opening the PR.
- If your change affects the deployed site, include the rebuilt `dist/` in the same PR (see
  above).
- There is no CI gate today, so please do not rely on CI to catch build or lint errors — verify
  locally.

## Reporting bugs or requesting features

Use the issue templates under `.github/ISSUE_TEMPLATE/`. For security issues, see
[`SECURITY.md`](./SECURITY.md) instead of opening a public issue.

## Code of conduct

Participation in this repository is governed by [`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md).
