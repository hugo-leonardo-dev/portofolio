# SPECS.md — Technical Specifications

> Comprehensive technical documentation for the Hugo Developer Portfolio.

---

## 1. System Overview

**Name:** Hugo Developer Portfolio  
**Type:** Single-page static portfolio website  
**URL:** Served via Vite dev server or static hosting (Vercel/Netlify/etc.)  
**Target:** Desktop and mobile browsers with WebGL support  

### Purpose

A professional portfolio to showcase the developer's skills, experience, and projects to potential employers and clients.

---

## 2. Tech Stack Details

### 2.1 Core

| Specification | Detail |
|---------------|--------|
| Language | JavaScript (ES Modules) |
| Framework | React 18.2.0 (with Strict Mode) |
| Build Tool | Vite 4.4.5 |
| Package Manager | npm |
| JSX Runtime | Automatic (Vite default) |

### 2.2 Styling

| Specification | Detail |
|---------------|--------|
| Framework | Tailwind CSS 3.3.3 (JIT mode) |
| PostCSS | 8.4.28 with autoprefixer 10.4.15 |
| Custom CSS | Encapsulated in `src/index.css` |
| Design Tokens | Defined in `tailwind.config.js` → `theme.extend` |

### 2.3 3D Graphics

| Specification | Detail |
|---------------|--------|
| Library | Three.js 0.155.0 |
| React bindings | @react-three/fiber 8.13.7 |
| Utilities | @react-three/drei 9.80.6 |
| 3D Model | GLTF format (public/planet/scene.gltf + scene.bin) |
| Canvas API | WebGL (via Three.js) |

### 2.4 Animation

| Specification | Detail |
|---------------|--------|
| Library | Framer Motion 10.16.1 |
| Variants | 5 custom variants in `src/utils/motions.js` |
| Trigger | Scroll-based (`whileInView`) |
| Durations | 0.3s — 1.25s |

### 2.5 Additional Dependencies

| Package | Purpose |
|---------|---------|
| react-router-dom 6.15.0 | Hash-based navigation (single page anchors) |
| react-tilt 1.0.2 | 3D tilt effect on cards |
| react-vertical-timeline-component 3.6.0 | Experience timeline |
| @emailjs/browser 3.11.0 | Email sending (installed, not yet integrated) |
| maath 0.7.0 | Math utilities (dependency of drei) |

---

## 3. Architecture

### 3.1 Component Tree

```
<BrowserRouter>
  <App>
    ├── <Navbar />                        # Fixed top nav
    ├── <Hero />                          # Full-screen hero + 3D Earth canvas
    │   └── <EarthCanvas>                 # Three.js Canvas
    │       ├── <Stars>                   # Starfield background
    │       ├── <Sparkles>                # Particle effects
    │       ├── <OrbitControls>           # Auto-rotating camera
    │       └── <Earth>                   # GLTF model
    ├── <SectionWrapper(About)>           # About section
    │   └── <ServiceCard> × 4             # Tilt cards
    ├── <SectionWrapper(Experience)>      # Timeline section
    │   └── <VerticalTimeline>
    │       └── <ExperienceCard> × 4      # Timeline entries
    ├── <SectionWrapper(Tech)>            # Tech grid
    │   └── <Tech icons> × 12            # Animated icon grid
    ├── <SectionWrapper(Works)>           # Projects section
    │   └── <ProjectCard> × 3            # Tilt project cards
    └── <SectionWrapper(Contact)>         # Contact section
        └── <ContactCard> × 3             # Social/contact cards
```

### 3.2 Data Architecture

All content data is centralized in `src/constants/index.js`:

| Export | Type | Purpose |
|--------|------|---------|
| `navLinks` | Array<{id, title}> | Navigation items |
| `services` | Array<{title, icon}> | About section cards |
| `technologies` | Array<{name, icon}> | Tech grid |
| `experiences` | Array<{title, company_name, icon, iconBg, date, points}> | Timeline |
| `testimonials` | Array<{}> | Placeholder (currently empty) |
| `projects` | Array<{name, description, tags, image, source_code_link}> | Project cards |

### 3.3 Animation Architecture

```
User Scrolls
    ↓
SectionWrapper HOC (staggerContainer)
    ↓
motion.section enters viewport (whileInView)
    ↓
Staggered children animate via variants:
    ├── textVariant() → headings
    ├── fadeIn() → content blocks
    └── staggerChildren → sequential reveals
```

### 3.4 3D Architecture

```
EarthCanvas (wrapper component)
    ├── Detects mobile via matchMedia
    └── Renders <Canvas> with:
        ├── Camera: fov=45, position=[-4, 3, 6]
        ├── Lighting: purple directional + cyan directional
        ├── Stars: 5000 particles, radius=100
        ├── Sparkles: cyan (200) + magenta (100)
        ├── OrbitControls: autoRotate, speed=1.5
        └── Earth: GLTF model, responsive scale
```

---

## 4. Design System

### 4.1 Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#030014` | Page background |
| `secondary` | `#aaa6c3` | Body text, muted elements |
| `tertiary` | `#151030` | Card backgrounds |
| `black-100` | `#100d25` | Dark card variant |
| `white-100` | `#f3f3f3` | Light text |
| `neon-cyan` | `#00f3ff` | Primary accent, glows |
| `neon-magenta` | `#ff00ff` | Secondary accent |
| `neon-purple` | `#b026ff` | Tertiary accent, hero name |

### 4.2 Typography

| Element | Class | Size (lg/sm/xs) | Weight |
|---------|-------|------------------|--------|
| Hero heading | `heroHeadText` | 80/60/50/40px | 900 (black) |
| Hero subtext | `heroSubText` | 24/20/18/16px | 500 (medium) |
| Section heading | `sectionHeadText` | 60/50/40/30px | 900 (black) |
| Section subtext | `sectionSubText` | 18/14px | 500 (medium) |
| Body text | — | 17px / 14px | 400 (regular) |
| Font family | Poppins (Google Fonts) | — | 100-900 |

### 4.3 Spacing System

```js
paddingX:  "sm:px-16 px-6"         // Horizontal padding
paddingY:  "sm:py-16 py-6"         // Vertical padding
padding:   "sm:px-16 px-6 sm:py-16 py-10"  // Combined
```

### 4.4 Effects

| Effect | Implementation |
|--------|---------------|
| Glassmorphism | `.glassmorphism` — bg rgba(16,13,37,0.4), blur(10px), border subtle |
| Glow shadow | `shadow-glow` — 0 0 10px rgba(0,243,255,0.5) |
| Card 3D tilt | `react-tilt` with max=45, scale=1 |
| Hover glow | `group-hover:border-neon-cyan/50 + shadow-glow` |
| Text gradients | Custom CSS classes (`.blue-text-gradient`, etc.) |
| Floating animation | `animate-float` — subtle Y oscillation |

---

## 5. Responsive Breakpoints

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| xs | 450px+ | Small phone adjustments |
| sm | 640px+ | Tablet, show horizontal nav |
| md | 768px+ | Medium screens |
| lg | 1024px+ | Desktop layout |
| — | ≤600px | 3D model scale reduced (1.3×) |

---

## 6. Performance Considerations

### Current State

- **Bundle:** Framework overhead (React, Three.js, Framer Motion) with no code splitting.
- **3D Model:** ~1-2MB GLTF binary — loaded on initial render.
- **Images:** PNG/JPEG format — no WebP conversion.
- **Animations:** CSS animations (GPU-accelerated where possible).

### Recommendations

1. **Code splitting:** `React.lazy()` for sections below the fold (Tech, Works, Contact).
2. **Image formats:** Convert assets to WebP with fallback.
3. **Three.js optimization:** Use `frameloop="demand"` (already configured) to only render when needed.
4. **Font loading:** Add `font-display: swap` for Poppins Google Font.
5. **Preload 3D model:** Add `<link rel="preload">` for the GLTF scene.

---

## 7. Scripts & Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start Vite dev server (HMR at localhost:5173) |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint on all `.js, .jsx` files |

---

## 8. Build Output

```
dist/
├── index.html
├── assets/
│   ├── index-xxxx.js         # Main bundle
│   └── index-xxxx.css        # Compiled CSS
└── planet/                   # Static 3D assets
    ├── scene.bin
    └── scene.gltf
```

Vite automatically hashes assets for cache busting. The `public/` directory content is copied as-is.

---

## 9. Browser Support

- **Modern browsers:** Chrome, Firefox, Safari, Edge (latest 2 versions).
- **WebGL:** Required for 3D Earth rendering (graceful degradation via Suspense).
- **JavaScript:** ES module support required (modern browsers only).
- **Polyfills:** None included — assume modern browser APIs.
