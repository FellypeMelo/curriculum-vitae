# Roadmap

**Language:** English · [Português (Brasil)](../pt-BR/roadmap.md)

This page tracks two different kinds of forward-looking material for this repository:

1. Concrete, currently-tracked gaps (below) — things the shipped site does not yet have.
2. An exploratory redesign plan (further down) that was written at some point but **never
   implemented** and contradicts the site as it exists today.

## Tracked gaps

None of the items below are implemented. They are ordered roughly by how much they affect a
reader or contributor today, not by any committed timeline — there is no release schedule for
this project.

- **Automated tests.** There is no test framework in `package.json` and no `*.test.*` /
  `*.spec.*` file anywhere in the tree. See [`testing.md`](./testing.md) for the full current
  state. This is the largest structural gap for a project of this size.
- **Wire `lint` and `build` into CI.** [`.github/workflows/deploy.yml`](../../.github/workflows/deploy.yml)
  only uploads the already-committed `dist/` folder; it never runs `npm install`, `npm run
  build`, or `npm run lint`. See [`deployment.md`](./deployment.md) for what the workflow
  actually does.
- **In-app language toggle.** The deployed site is Portuguese-only
  (`index.html` declares `lang="pt-BR"`, and every string in `src/data/profile.ts` is
  Portuguese). There is no i18n library, no language switcher, and no English content path in
  the running app — only this documentation tree and the root README are bilingual.
- **Retiring or reconciling this file's own history.** This document used to live at
  `conductor/terminal-studio-plan.md`, a stray planning file at the repository root. It has been
  moved here (`git mv`) rather than deleted, per this documentation pass's policy of not
  deleting existing content. Whether the plan below is revived, adapted, or formally
  discontinued is a decision for the repository owner, not something this documentation pass
  resolves.

## Exploratory plan: "Terminal Studio" redesign (not implemented)

> **Status: unimplemented, exploratory only.** Everything from here down is a planning document
> that was written to explore a completely different visual direction — a dark, OS/CLI-inspired
> interface — for this portfolio. **None of it has been built.** The site as shipped today uses
> the light-first "Ink & Signal" editorial design described in the root
> [`README.md`](../../README.md) (hairline drafting-board grid, expressive display typography,
> a light/dark toggle, and a generative Canvas 2D graph in the hero — see
> [`architecture.md`](./architecture.md)). The plan below predates or was drafted alongside that
> design and was never carried out; it is preserved verbatim below as a historical record of
> design exploration, not as a description of the current codebase.

### 1. Background & Motivation
The objective is to completely transform the current vertically-scrolling, light-themed portfolio into a highly interactive, OS-inspired "Terminal Studio" experience. This new design fuses the aesthetic of a command-line interface (ZUI.C), the structural confidence of a digital studio (SIRNIK), and radical minimalism (Vincent Saïsset). It introduces a unique "Insight Layer" that reveals the design and technical rationale behind the work at the press of a key.

### 2. Scope & Impact
- **`index.html`**: Update to include external fonts `Geist Mono` and `Inter`.
- **`src/index.css` & `tailwind.config.js`**: Implement the new color palette (deep blacks, dark grays, and neon green/matrix accents) and custom animations (e.g., glitch effects).
- **`src/App.tsx`**: Complete rewrite to implement the Split View CSS Grid layout (Terminal Header, Sidebar Navigation, Main Content Area, and Command Bar Footer).
- **`src/data/profile.ts`**: Extend the existing data structures to include "insights" (metadata for the Insight Layer).
- **`src/components/ui/`**:
  - Create `TerminalHeader.tsx` (MacOS style window controls, live clock).
  - Create `CommandBar.tsx` (interactive terminal input).
  - Create `InsightLayer.tsx` (overlay system for annotations).
- **`src/components/sections/`**: Refactor existing components (`About`, `Experience`, `Skills`, etc.) to act as discrete, swappable "views" rather than stacked scrollable sections.

### 3. Proposed Solution & Architecture
- **State Management**: Use React state in `App.tsx` to manage `activeView` (current section) and `insightsVisible` (toggled by the 'i' key).
- **Dual Navigation**: Users can navigate by clicking the sidebar items (styled as terminal commands) OR by typing commands (e.g., `> experience`) in the footer command bar.
- **The Insight Layer**: A React Portal or fixed overlay that listens for the `i` key. When active, it uses `getBoundingClientRect` to dynamically position annotation tooltips next to target elements (identified via `data-target` attributes).
- **Aesthetic Details**: Heavy reliance on monospace typography for UI elements, clean sans-serif for long-form reading, and subtle CSS glitch effects on hover for interactive elements.

### 4. Phased Implementation Plan

#### Phase 1: Foundation (Theming & Typography)
- Update `index.html` with Google Fonts (`Geist Mono`, `Inter`).
- Define CSS variables for the dark OS theme (`--bg: #0a0c0a`, `--surface: #111311`, `--accent: #4ade80`).
- Add global CSS utility classes for the `.glitch` hover effect.

#### Phase 2: Core Layout Shell
- Scaffold the new `App.tsx` using a responsive CSS Grid:
  - Top: `TerminalHeader` (Traffic lights + Live Time).
  - Left Sidebar: `WorkNav` (List of sections with `$` prompts).
  - Center/Right: `MainContent` area (scrollable container for the active view).
  - Bottom: `CommandBar` (Fixed input field for commands).

#### Phase 3: View Adaptation (Content)
- Convert `Hero`, `About`, `Experience`, `Education`, `Skills`, and `Certifications` into standalone views.
- Update their internal styling to match the new minimal, high-contrast dark aesthetic.
- Add specific `id` or `data-target` attributes to key elements (e.g., job titles, skill badges) to prepare for the Insight Layer.

#### Phase 4: The Insight Layer (Magic Feature)
- Create the `InsightLayer` component.
- Implement a custom hook `useInsights` to listen for the 'i' key globally (ignoring when the user is typing in the command bar).
- Render floating tooltips that point to the `data-target` elements with design/technical annotations.
- Add resize and scroll event listeners to reposition tooltips dynamically.

#### Phase 5: Command CLI Integration
- Wire up the `CommandBar` to accept inputs.
- Implement a command parser to handle commands like `help`, `about`, `skills`, `clear`, and `email`.
- Connect the command execution to the `activeView` state to swap content seamlessly.

### 5. Verification & Testing
- **Visuals**: Ensure the dark theme is consistent and typography hierarchy is clear. Verify glitch effects on hover.
- **Navigation**: Test that clicking sidebar links AND typing commands both correctly change the active view.
- **Insight Layer**: Press 'i' and verify tooltips appear exactly next to their intended targets. Resize the window to ensure they reposition correctly.
- **Responsiveness**: Verify the layout stacks elegantly on mobile (sidebar turns into a horizontal scrollable strip or collapses into a menu, command bar remains usable).

### 6. Migration & Rollback
Since this is a major architectural shift in the UI layer, changes will be committed incrementally.
- Step 1: CSS/Theme foundation (Safe, easily reversible).
- Step 2: New UI components built in isolation.
- Step 3: `App.tsx` replacement.
If the layout fails critically, we can revert to the previous `App.tsx` and styling commits, as the underlying data in `profile.ts` will remain backward compatible.

---

*This file was originally `conductor/terminal-studio-plan.md` at the repository root; it was
relocated here with `git mv` so its history is preserved. Its content above is otherwise
unchanged from the original, with one exception: the original file's "Phase 3" heading was
itself written in Portuguese ("Adaptação das Views (Conteúdo)") in a document that is otherwise
English — that one heading has been translated above for consistency with this file's declared
language. The [`pt-BR` mirror](../pt-BR/roadmap.md) of this file carries the original Portuguese
heading unchanged, alongside a full translation of the rest of the plan.*
