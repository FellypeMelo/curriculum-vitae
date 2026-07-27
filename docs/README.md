# Internal documentation

This directory holds the internal documentation for the `curriculum-vitae` repository, in two
mirrored language trees with the same filenames, structure, and section order in both:

- **English:** [`en/`](./en/)
  - [`architecture.md`](./en/architecture.md) — how the app is put together (component tree,
    `src/data/profile.ts` as single content source, hooks, the Canvas 2D hero visual, styling).
  - [`setup.md`](./en/setup.md) — local install, scripts, linting, editor setup.
  - [`deployment.md`](./en/deployment.md) — the GitHub Pages workflow and why `dist/` must be
    rebuilt and committed locally before a push meant to go live.
  - [`testing.md`](./en/testing.md) — the honest current state (no automated tests) and what
    retrofitting a test suite would look like.
  - [`roadmap.md`](./en/roadmap.md) — tracked gaps, plus a preserved-but-unimplemented
    exploratory redesign plan originally at `conductor/terminal-studio-plan.md`.
- **Português (Brasil):** [`pt-BR/`](./pt-BR/) — mirrors every file above, same names and
  headings, content adapted for a native pt-BR technical reader (not a literal translation).

For the project-level README (value proposition, quickstart, license), see the repository root:
[`README.md`](../README.md) (English) and [`README.pt-BR.md`](../README.pt-BR.md) (Português).

## Language-neutral assets

There are currently no language-neutral binary or schema assets (no OpenAPI spec, no `.puml`
diagrams, no images) attached to this documentation tree — all diagrams here are Mermaid,
written as text directly inside the Markdown files that use them, so there is nothing to
de-duplicate between `en/` and `pt-BR/` yet. If any such asset is added later, it belongs under
`docs/en/` only, linked from both trees rather than copied.

## Mirror scope

This first pass of internal documentation covers five topics per language
(architecture, setup, deployment, testing, roadmap) — deliberately scoped for a
single-maintainer personal-site repository rather than mirroring every conceivable doc type. Expanding
the mirror to new topics should keep following the same pattern: author the English version
under `en/`, then the pt-BR mirror under `pt-BR/` with the same filename.
