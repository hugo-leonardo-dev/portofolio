# TODO.md — Project Roadmap & Task Tracker

> Live task tracker for the portfolio project.  
> ✅ = Completed · ⬜ = Pending · 🔄 = In Progress

---

## ✅ Completed Features

- [x] **Hero Section** — 3D Earth model with rotating starfield, neon-cyan scroll indicator, responsive layout
- [x] **About Section** — Service cards (Fullstack, Frontend, Backend, Automation) with Tilt 3D effect
- [x] **Experience Section** — Vertical timeline with company logos, role titles, descriptions, date ranges
- [x] **Tech Section** — Grid of technology icons with hover glow effects and floating animation
- [x] **Works Section** — Project showcase cards with Tilt effect, tag gradients, external links
- [x] **Contact Section** — Email, LinkedIn, and GitHub contact cards with icons
- [x] **Navbar** — Fixed top navigation with smooth-scroll anchors and mobile hamburger menu
- [x] **Dark/Neon Theme** — Custom Tailwind colors (deep space, cyan, magenta, purple), glassmorphism cards
- [x] **Scroll Animations** — Framer Motion stagger container, fade/slide/text variants on all sections
- [x] **Responsive Design** — Mobile breakpoints, adaptive 3D model scaling, collapsible nav
- [x] **3D Earth Model** — GLTF scene with dual-colored lighting (purple + cyan), Sparkles particle effects

---

## ⬜ Short-Term Improvements

### Core Features

- [ ] **Email contact form** — Add a form using EmailJS (already installed as a dependency) with name, email, message fields and validation
- [ ] **Testimonials section** — Add a carousel/slider for testimonials (data structure already exists in constants)
- [ ] **Active nav link highlighting** — Fix the `active` state in Navbar to highlight the current section on scroll (use IntersectionObserver)
- [ ] **Resume download button** — Add a link in Navbar or Hero to download a PDF resume
- [ ] **Scroll-to-top button** — Floating button that appears after scrolling down

### Performance & UX

- [ ] **Lazy load sections** — Use `React.lazy()` for sections below the fold to reduce initial bundle
- [ ] **Image optimization** — Convert project screenshots to WebP format, add loading="lazy"
- [ ] **Skeleton loaders** — Add loading placeholders for 3D canvas and images
- [ ] **Smooth scroll polyfill** — Ensure smooth scrolling works across all browsers
- [ ] **Reduce Three.js initial load** — Add loading screen or progressive rendering for Earth model

### Content

- [ ] **Add more projects** — Populate with additional work examples (currently has 3)
- [ ] **Add more technologies** — Expand tech grid with additional skills (Docker, TypeScript, etc.)
- [ ] **Fill testimonials data** — Replace empty `testimonials` array in constants
- [ ] **Update CV/experience** — Add any missing professional roles

### Polish

- [ ] **Social media meta tags** — Add Open Graph and Twitter Card tags for link previews
- [ ] **Custom favicon/animated favicon** — Enhance the site icon
- [ ] **Keyboard navigation** — Ensure all interactive elements are focusable and operable via keyboard
- [ ] **Better mobile menu animation** — Animate the mobile nav drawer open/close
- [ ] **Scroll progress bar** — Thin progress bar at the top of the page

---

## ⬜ Long-Term / Nice-to-Have

- [ ] **Blog section** — Add a simple markdown-based blog for technical writing
- [ ] **Dark/light theme toggle** — Add theme switching with CSS variables
- [ ] **Page transitions** — Animate between sections with morphing transitions
- [ ] **i18n support** — Multi-language (PT-BR / EN) toggle
- [ ] **Interactive 3D background** — Make the Earth model interactive (click/drag to rotate)
- [ ] **Particle background** — Animated particle system across the full page
- [ ] **Analytics integration** — Add lightweight page view tracking
- [ ] **GitHub activity widget** — Embed recent GitHub contributions feed
- [ ] **A11y audit** — Full accessibility pass (ARIA labels, contrast checks, screen reader support)
- [ ] **PWA support** — Service worker + manifest for offline access and installability
- [ ] **CI/CD pipeline** — GitHub Actions for lint → build → deploy
- [ ] **Unit tests** — Add Vitest + React Testing Library for component tests
- [ ] **404 page** — Custom not-found page for invalid routes
- [ ] **Contact form backend** — Replace EmailJS with a custom API endpoint (or serverless function)

---

## 🐛 Known Issues

- [ ] `Navbar` active state initializes with backtick string `"`\``"` instead of `""` — minor cosmetic bug
- [ ] `testimonials` constant exports single empty object `[{}]` — causes rendering issues if iterated
- [ ] Some project image assets (e.g., `tony.jpeg`) use JPEG — consider WebP for performance
- [ ] ESLint config targets `.js` and `.jsx` but some tech icons have unconventional imports via `src/assets/index.js`

---

## 📦 Dependency Status

| Package | Current | Latest | Notes |
|---------|---------|--------|-------|
| react | ^18.2.0 | 18.x | Current |
| vite | ^4.4.5 | 5.x | Major upgrade avail. |
| tailwindcss | ^3.3.3 | 3.x | Current |
| @react-three/fiber | ^8.13.7 | 8.x | Current |
| three | ^0.155.0 | 0.160+ | Minor updates avail. |
| framer-motion | ^10.16.1 | 10.x | Current |
| @emailjs/browser | ^3.11.0 | 3.x | Installed but unused |
