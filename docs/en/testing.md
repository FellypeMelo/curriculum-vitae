# Testing

**Language:** English · [Português (Brasil)](../pt-BR/testing.md)

## Current state: no automated tests

This is stated plainly because it is easy for a docs tree to imply coverage that does not exist
— it does not here:

- There is no test framework declared in [`package.json`](../../package.json) — no Vitest, no
  Jest, no Playwright, no Cypress, nothing.
- There are zero `*.test.*` or `*.spec.*` files anywhere in the tracked tree.
- There is no `npm test` script.
- [`.github/workflows/deploy.yml`](../../.github/workflows/deploy.yml), the one CI workflow in
  this repository, does not run tests — it does not even build the project (see
  [`deployment.md`](./deployment.md)).

## What static checking does exist

Two things, both manual today:

- **TypeScript**, via `tsc -b` as the first half of `npm run build`. This catches type errors at
  build time but is not a substitute for behavioral tests — it verifies shapes, not logic.
- **ESLint**, via `npm run lint`, using the flat config in
  [`eslint.config.js`](../../eslint.config.js) (`@eslint/js` recommended + `typescript-eslint` +
  `eslint-plugin-react-hooks` + `eslint-plugin-react-refresh`). This catches a class of React
  hook and lint issues, not correctness bugs.

Neither is invoked automatically by CI. Both are manual steps documented in
[`setup.md`](./setup.md) and [`../../CONTRIBUTING.md`](../../CONTRIBUTING.md).

## Why this matters for this specific project

The app is small and mostly presentational (see [`architecture.md`](./architecture.md)), but it
is not risk-free:

- `src/lib/hooks.ts` has real conditional logic (`useTheme`'s `localStorage` fallback chain,
  `useActiveSection`'s `IntersectionObserver` selection logic) that unit tests would suit well.
- `ArchGraph.tsx`'s node-count and reduced-motion branching is exactly the kind of logic that
  silently regresses without a test pinning its behavior.
- `src/data/profile.ts` is the single source of truth for every section; a schema or type-level
  regression there (e.g. a required field renamed) would currently only be caught by `tsc -b` if
  it breaks a type, not if it just breaks a runtime assumption a component makes about the data.

None of this is a defect today — it is a description of where the risk would concentrate if this
project grows past its current one-maintainer, static-content scope.

## What retrofitting tests would look like (not yet done)

This section is a recommendation for future work, not a description of anything implemented.
Given the existing stack (Vite + React 19 + TypeScript), the conventional, low-friction choices
would be:

- **Vitest** for unit tests of `src/lib/hooks.ts` and any future non-trivial logic, since it
  shares Vite's config and transform pipeline already used for the app itself.
- **React Testing Library** for component-level tests of section components against
  `src/data/profile.ts` fixtures.
- **Playwright** (or a comparable end-to-end tool) for a small smoke suite: page loads, nav
  scroll-spy highlights the right section, theme toggle persists across reload.

None of these packages are installed, and no config for them exists in this repository as of
this writing. Introducing them, and then wiring `npm test` and `npm run lint` into
`deploy.yml` (or a separate CI workflow) as a real quality gate, is tracked in
[`roadmap.md`](./roadmap.md).
