# Terminal Studio Portfolio Transformation Plan

## 1. Background & Motivation
The objective is to completely transform the current vertically-scrolling, light-themed portfolio into a highly interactive, OS-inspired "Terminal Studio" experience. This new design fuses the aesthetic of a command-line interface (ZUI.C), the structural confidence of a digital studio (SIRNIK), and radical minimalism (Vincent Saïsset). It introduces a unique "Insight Layer" that reveals the design and technical rationale behind the work at the press of a key.

## 2. Scope & Impact
- **`index.html`**: Update to include external fonts `Geist Mono` and `Inter`.
- **`src/index.css` & `tailwind.config.js`**: Implement the new color palette (deep blacks, dark grays, and neon green/matrix accents) and custom animations (e.g., glitch effects).
- **`src/App.tsx`**: Complete rewrite to implement the Split View CSS Grid layout (Terminal Header, Sidebar Navigation, Main Content Area, and Command Bar Footer).
- **`src/data/profile.ts`**: Extend the existing data structures to include "insights" (metadata for the Insight Layer).
- **`src/components/ui/`**: 
  - Create `TerminalHeader.tsx` (MacOS style window controls, live clock).
  - Create `CommandBar.tsx` (interactive terminal input).
  - Create `InsightLayer.tsx` (overlay system for annotations).
- **`src/components/sections/`**: Refactor existing components (`About`, `Experience`, `Skills`, etc.) to act as discrete, swappable "views" rather than stacked scrollable sections.

## 3. Proposed Solution & Architecture
- **State Management**: Use React state in `App.tsx` to manage `activeView` (current section) and `insightsVisible` (toggled by the 'i' key).
- **Dual Navigation**: Users can navigate by clicking the sidebar items (styled as terminal commands) OR by typing commands (e.g., `> experience`) in the footer command bar.
- **The Insight Layer**: A React Portal or fixed overlay that listens for the `i` key. When active, it uses `getBoundingClientRect` to dynamically position annotation tooltips next to target elements (identified via `data-target` attributes).
- **Aesthetic Details**: Heavy reliance on monospace typography for UI elements, clean sans-serif for long-form reading, and subtle CSS glitch effects on hover for interactive elements.

## 4. Phased Implementation Plan

### Phase 1: Foundation (Theming & Typography)
- Update `index.html` with Google Fonts (`Geist Mono`, `Inter`).
- Define CSS variables for the dark OS theme (`--bg: #0a0c0a`, `--surface: #111311`, `--accent: #4ade80`).
- Add global CSS utility classes for the `.glitch` hover effect.

### Phase 2: Core Layout Shell
- Scaffold the new `App.tsx` using a responsive CSS Grid:
  - Top: `TerminalHeader` (Traffic lights + Live Time).
  - Left Sidebar: `WorkNav` (List of sections with `$` prompts).
  - Center/Right: `MainContent` area (scrollable container for the active view).
  - Bottom: `CommandBar` (Fixed input field for commands).

### Phase 3: Adaptação das Views (Conteúdo)
- Convert `Hero`, `About`, `Experience`, `Education`, `Skills`, and `Certifications` into standalone views.
- Update their internal styling to match the new minimal, high-contrast dark aesthetic.
- Add specific `id` or `data-target` attributes to key elements (e.g., job titles, skill badges) to prepare for the Insight Layer.

### Phase 4: The Insight Layer (Magic Feature)
- Create the `InsightLayer` component.
- Implement a custom hook `useInsights` to listen for the 'i' key globally (ignoring when the user is typing in the command bar).
- Render floating tooltips that point to the `data-target` elements with design/technical annotations.
- Add resize and scroll event listeners to reposition tooltips dynamically.

### Phase 5: Command CLI Integration
- Wire up the `CommandBar` to accept inputs.
- Implement a command parser to handle commands like `help`, `about`, `skills`, `clear`, and `email`.
- Connect the command execution to the `activeView` state to swap content seamlessly.

## 5. Verification & Testing
- **Visuals**: Ensure the dark theme is consistent and typography hierarchy is clear. Verify glitch effects on hover.
- **Navigation**: Test that clicking sidebar links AND typing commands both correctly change the active view.
- **Insight Layer**: Press 'i' and verify tooltips appear exactly next to their intended targets. Resize the window to ensure they reposition correctly.
- **Responsiveness**: Verify the layout stacks elegantly on mobile (sidebar turns into a horizontal scrollable strip or collapses into a menu, command bar remains usable).

## 6. Migration & Rollback
Since this is a major architectural shift in the UI layer, changes will be committed incrementally. 
- Step 1: CSS/Theme foundation (Safe, easily reversible).
- Step 2: New UI components built in isolation.
- Step 3: `App.tsx` replacement. 
If the layout fails critically, we can revert to the previous `App.tsx` and styling commits, as the underlying data in `profile.ts` will remain backward compatible.