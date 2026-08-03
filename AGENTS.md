# AGENTS.md — AI Agent Configuration

This file provides instructions and context for AI coding agents (like Codebuff/Buffy) working on this portfolio project.

---

## Project Overview

A personal developer portfolio website built with **React 18**, **Vite**, **Tailwind CSS**, **Three.js**, and **Framer Motion**. Features a dark/neon theme with 3D graphics, scroll animations, and responsive design. The portfolio showcases the developer's skills, experience, and projects.

**Live context:** This is a **single-page application** (no client-side routing between pages — `BrowserRouter` is used only for hash-based navigation). The entire site is one scrollable page with anchor-linked sections.

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | React | ^18.2.0 |
| Build Tool | Vite | ^4.4.5 |
| Styling | Tailwind CSS | ^3.3.3 |
| 3D Graphics | Three.js / @react-three/fiber | ^0.155.0 / ^8.13.7 |
| 3D Utilities | @react-three/drei | ^9.80.6 |
| Animations | Framer Motion | ^10.16.1 |
| Form Handling | @emailjs/browser | ^3.11.0 |
| UI Effects | react-tilt | ^1.0.2 |
| Timeline | react-vertical-timeline-component | ^3.6.0 |
| Linting | ESLint (with react/recommended) | ^8.45.0 |

---

## Project Structure

```
portofolio/
├── public/
│   └── planet/              # 3D model assets (GLTF scene)
├── src/
│   ├── assets/              # Static images (logos, icons, screenshots)
│   │   ├── company/         # Company logos for Experience section
│   │   ├── services/        # Service category icons
│   │   ├── tech/            # Technology stack icons
│   │   └── works/           # Project screenshots
│   ├── components/          # React components
│   │   ├── canvas/          # Three.js/3D components
│   │   │   ├── Earth.jsx    # 3D Earth model with starfield
│   │   │   └── index.js
│   │   ├── About.jsx        # About + service cards
│   │   ├── Contact.jsx      # Contact information cards
│   │   ├── Experience.jsx   # Work experience timeline
│   │   ├── Hero.jsx         # Hero section with 3D Earth
│   │   ├── Loader.jsx       # 3D loading fallback
│   │   ├── Navbar.jsx       # Fixed top navigation
│   │   ├── Tech.jsx         # Technologies grid
│   │   ├── Works.jsx        # Project showcase cards
│   │   └── index.js         # Re-exports barrel
│   ├── constants/
│   │   └── index.js         # Data: navLinks, services, technologies, experiences, projects
│   ├── hoc/
│   │   ├── SectionWrapper.jsx  # HOC for scroll-triggered animations
│   │   └── index.js
│   ├── utils/
│   │   └── motions.js       # Framer Motion animation variants
│   ├── App.jsx              # Root layout component
│   ├── index.css            # Tailwind directives + custom CSS (gradients, glassmorphism)
│   ├── main.jsx             # Entry point
│   └── styles.js            # Shared style constants
├── index.html
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
├── package.json
├── .eslintrc.cjs
└── README.md
```

---

## Architecture & Conventions

### Component Architecture

- **Section-based layout:** Each major page section (Hero, About, Experience, Tech, Works, Contact) is a standalone component.
- **Higher-Order Component (HOC) pattern:** Sections are wrapped with `SectionWrapper` from `src/hoc/SectionWrapper.jsx` to add scroll-triggered `staggerContainer` animations.
- **3D Canvas isolation:** Three.js scenes are encapsulated in the `canvas/` subdirectory. The `EarthCanvas` lives inside the `Hero` section as a full-screen background.
- **Data-driven components:** All display content (services, technologies, experiences, projects) is defined in `src/constants/index.js` and imported by components.

### Styling Conventions

- **Framework:** Tailwind CSS with `jit` mode.
- **Custom theme colors** (defined in `tailwind.config.js`):
  - `primary: #030014` (deep space background)
  - `secondary: #aaa6c3` (muted text)
  - `neon-cyan: #00f3ff`, `neon-magenta: #ff00ff`, `neon-purple: #b026ff`
- **Glassmorphism class:** `.glassmorphism` in `index.css` — semi-transparent backdrop-blur cards.
- **Text gradients:** Utility classes like `.blue-text-gradient`, `.pink-text-gradient`, `.green-text-gradient` etc. for tag colors.
- **Shadow glow:** `shadow-glow` Tailwind utility (cyan glow effect).
- **Animations:** Custom `float` and `pulse-slow` keyframes in Tailwind config.
- **Spacing:** Use `styles.paddingX`, `styles.paddingY`, `styles.padding` from `src/styles.js` for consistent section padding.

### Animation Patterns (Framer Motion)

Animation variants are centralized in `src/utils/motions.js`:

| Variant | Purpose |
|---------|---------|
| `textVariant(delay)` | Vertical slide-in for headings (spring) |
| `fadeIn(direction, type, delay, duration)` | Configurable fade + slide from any direction |
| `zoomIn(delay, duration)` | Scale from 0 to 1 |
| `slideIn(direction, type, delay, duration)` | Full slide from offscreen |
| `staggerContainer(staggerChildren, delayChildren)` | Wraps section content for staggered child animations |

### Data Flow

- All content data flows from `src/constants/index.js` → components via props/map.
- The `SectionWrapper` HOC provides scroll-triggered animation context.
- The `Navbar` uses `useState` for active link tracking and mobile menu toggle.
- The `EarthCanvas` detects mobile via `window.matchMedia` to adjust 3D model scale.
- No state management library — sufficient with local state and props.

### Code Style

- **Language:** JavaScript (JSX), not TypeScript.
- **Imports:** Group by: (1) external libraries, (2) internal modules, (3) assets/styles.
- **Exports:** Default exports for components, named exports for utilities/constants.
- **Naming:** PascalCase for components, camelCase for functions/variables, lowercase for asset files.
- **File extensions:** `.jsx` for React components, `.js` for utilities/constants.
- **Formatting:** Single-line JSX props when few, multi-line when many.

---

## How to Run

```bash
npm install        # Install dependencies
npm run dev        # Start dev server (default: http://localhost:5173)
npm run build      # Production build
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

---

## Guidelines for AI Agents

### Before Making Changes

1. **Read AGENTS.md first** — understand the conventions.
2. **Read the file you intend to modify** fully before editing.
3. **Check existing patterns** — look at similar components for style/architecture cues.
4. **Check `src/constants/index.js`** — content should be data-driven, not hardcoded.

### When Modifying Components

- Maintain the `SectionWrapper` HOC pattern for all content sections.
- Use styles from `src/styles.js` (not raw Tailwind classes in most cases).
- Use motion variants from `src/utils/motions.js` (not inline animation objects).
- Keep 3D components in `canvas/` directory.
- Add new assets to the appropriate `src/assets/` subdirectory and update `src/assets/index.js`.
- Add new data to `src/constants/index.js`, not in component files.

### When Adding Dependencies

- Use the project's package manager (`npm`).
- Prefer libraries that align with existing stack (React 18, Tailwind, Framer Motion).
- Keep the bundle size lean — this is a portfolio, not an app.

### Styling Rules

- Use Tailwind utility classes over custom CSS.
- Only add custom CSS to `src/index.css` if Tailwind cannot express the style.
- Maintain the dark/neon theme (primary background, neon accents).
- Use `glassmorphism` class for card containers.
- Ensure all components are responsive (mobile-first).

### Animation Rules

- Use pre-defined variants from `src/utils/motions.js` where possible.
- Only create new Framer Motion variants if existing ones don't cover the need.
- Keep animation durations between 0.3s and 1.25s.
- Use `whileInView` (not `animate`) for scroll-triggered animations.

---

## Deployment Notes

- Built with Vite — output goes to `dist/`.
- Can be deployed to Vercel, Netlify, GitHub Pages, or any static host.
- The 3D model (`public/planet/scene.gltf`) must be included in the build.
- No server-side rendering — purely static client-side app.
