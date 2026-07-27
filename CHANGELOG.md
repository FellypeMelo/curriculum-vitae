# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). This project
does not yet use [Semantic Versioning](https://semver.org/) tags or GitHub releases — there are
no git tags in this repository as of this writing — so everything to date is recorded under
`[Unreleased]`. Entries reference the short commit hash they come from instead of a version
number or release date, since none exist yet.

## [Unreleased]

### Added

- English-first `README.md`, with `README.pt-BR.md` preserving the original Portuguese content
  and a language-switcher link at the top of both files.
- `CONTRIBUTING.md`, `SECURITY.md`, `CODE_OF_CONDUCT.md`, this `CHANGELOG.md`, GitHub issue
  templates (`bug_report.yml`, `feature_request.yml`), and a pull request template.
- `SECURITY.md` documents GitHub private vulnerability reporting as the reporting channel and
  records the historical tracked-credential issue (see Security notes below).

### Changed

- `README` no longer claims an MIT license or shows a `License: MIT` badge. The project's
  actual [`LICENSE`](./LICENSE) is a proprietary, all-rights-reserved license; the README badge
  and license section now describe that accurately.
- Removed the static, hardcoded `Status: Online` badge from both README files — it reported
  "Online" unconditionally and was not a real uptime check.
- `refactor: redesign CV as editorial-technical single-page site` (`94328de`) — the shipped
  site's current "Ink & Signal" editorial design.
- `fix: clarify that the in-prep paper is the embryo pipeline, not YOLOv8` (`ae855dd`).
- `chore: remove phone number from contact` (`fa93d27`).
- `feat: introduce animejs for various UI animations and new animation components across
  sections` (`d47c9ff`) — later superseded by the Framer Motion–based `Reveal` component in the
  current codebase.
- `docs: Add JSDoc comments to components and data structures, and update README` (`3919513`).
- `feat: Add GitHub Pages deployment workflow and update profile course period` (`786ce17`) /
  `Add GitHub Actions workflow for deploying to Pages` (`6f82b1a`) — introduced the current
  deploy-only `.github/workflows/deploy.yml`.
- `build: refresh compiled CSS assets, add project license, and update profile and about
  section content` (`1222fef`) — added the current [`LICENSE`](./LICENSE) file.
- `chore: Update dependencies and build output, including React 19, and adjust Footer and Hero
  components` (`ae1bcc6`).

### Security

- `security: stop tracking .openclaude-profile.json (contained an API credential)` (`2856eb8`)
  — the file is no longer tracked and is now git-ignored. Note that removing it from the current
  tree does not remove it from git history; see [`SECURITY.md`](./SECURITY.md) for the
  outstanding rotation/history-rewrite recommendation.

### Not yet done (tracked, not implied as complete)

- No automated test suite exists (unit, component, or end-to-end).
- CI (`.github/workflows/deploy.yml`) does not run install, build, lint, or tests — it only
  publishes the already-committed `dist/`.
