# MAESTRO WEB — Digital Studio & Web Agency Landing Page

[![React](https://img.shields.io/badge/React-19.1-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.3-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.19-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![i18next](https://img.shields.io/badge/i18next-25.2_(EN_|_RU_|_HE)-26A69A?logo=i18next&logoColor=white)](https://www.i18next.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern, multilingual promotional landing page for **MAESTRO WEB** — a digital studio crafting high-converting websites, portfolios, QR-price lists, digital business cards, and visual branding. Built with **React 19**, **Vite 6 (SWC)**, **Framer Motion 12**, and **i18next** with automatic **LTR / RTL** layout switching.

**Live Demo:** [maestro-web-nine.vercel.app](https://maestro-web-nine.vercel.app)

---

## Tech Stack

### Core & Build Tooling
- **React 19** (`react`, `react-dom`) — Component-based UI architecture and hooks
- **Vite 6** + **@vitejs/plugin-react-swc** — Fast HMR and SWC-powered production bundling
- **ESLint 9** — Flat configuration with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`

### Internationalization (i18n & RTL)
- **i18next** & **react-i18next** — Dynamic client-side localization supporting **English (`en`)**, **Russian (`ru`)**, and **Hebrew (`he`)**
- **i18next-http-backend** — Asynchronous JSON translation loading from `/public/locales/{{lng}}/translation.json`
- **i18next-browser-languagedetector** — Automatic language detection and `localStorage` persistence
- **Automatic RTL/LTR Direction** — Dynamically updates `document.documentElement.dir` when switching between Hebrew (`rtl`) and English/Russian (`ltr`)

### Animation, Styling & UI
- **Framer Motion 12** — Scroll-triggered animations (`whileInView`), spring physics on buttons, and smooth FAQ accordion transitions
- **AOS (Animate On Scroll)** — Global scroll animation initialization
- **Interactive 3D Tilt Cards** — Real-time mouse-tracking perspective transforms (`rotateX` / `rotateY`) on showcase, service, and about cards
- **Custom CSS + Tailwind CSS 4 + PostCSS** — Component-scoped styles, glassmorphism, neon glow accents, and responsive layouts
- **React Icons (`react-icons/fa`)** — Vector iconography across sections

---

## Key Features & Sections

- **Custom Cursor (`CustomCursor`)** — Hardware-accelerated (`translate3d`) custom cursor tracking mouse movement across the viewport.
- **Responsive Navbar & Language Switcher (`NavBar`, `LanguageSwitcher`)** — Sticky navigation with desktop/mobile language switching (`EN` / `RU` / `עב`), burger menu, and cross-link to **MAESTRO STUDIO**.
- **Video Hero Section (`HeroSection`)** — Full-bleed background video (`/bghero1.mp4`) with overlay, staggered Framer Motion typography, and direct WhatsApp CTA button.
- **Why MAESTROWEB (`GlassCardShowcase`)** — Glassmorphic 3D-tilt cards highlighting *AI + Code*, *Design that Sells*, and *Turnkey Content*.
- **Our Services (`Services`)** — 6 interactive 3D-tilt service cards (*Selling Website, Portfolio, QR-Price List, Business Card, Visual Style, Feedback*).
- **About Us (`AboutUs`)** — Mission, approach, and team overview with interactive tilt cards.
- **Interactive FAQ (`FAQ`)** — Animated accordion answering key client questions on pricing, timelines, requirements, and post-launch support.
- **Footer & Direct Contacts (`Footer`, `ContactSection`)** — Direct WhatsApp integration, phone, Google Maps location, portfolio links, and social media links.
- **Accessibility Support (`AccessibilityWidget`, `AccessibilityButton`)** — Integrated accessibility widget support.

---

## Project Structure

```text
MAESTRO-WEB/
├── public/
│   ├── locales/
│   │   ├── en/translation.json      # English translations (LTR)
│   │   ├── ru/translation.json      # Russian translations (LTR)
│   │   └── he/translation.json      # Hebrew translations (RTL)
│   ├── bghero1.mp4                  # Hero background video
│   ├── maestro-icon.png             # Brand icon
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── AboutUs.jsx / .css       # Mission, Approach & Team 3D-tilt cards
│   │   ├── AccessibilityButton.jsx  # Accessibility trigger button
│   │   ├── AccessibilityWidget.jsx  # Sienna accessibility script loader
│   │   ├── ContactSection.jsx / .css# Contact details & WhatsApp CTA
│   │   ├── CustomCursor.jsx / .css  # Smooth custom mouse cursor
│   │   ├── FAQ.jsx / .css           # Animated FAQ accordion
│   │   ├── Footer.jsx / .css        # Multi-column footer & project links
│   │   ├── GlassCardShowcase.jsx    # "Why MaestroWeb" glassmorphic 3D cards
│   │   ├── GlitchIntro.jsx / .css   # Glitch typography intro component
│   │   ├── HeroSection.jsx / .css   # Video background hero & animated headlines
│   │   ├── LanguageSwitcher.jsx     # EN / RU / HE language selector
│   │   ├── NavBar.jsx / .css        # Responsive header & mobile burger menu
│   │   └── Services.jsx / .css      # 6 service cards with 3D mouse-tilt effect
│   ├── pages/
│   │   └── HomePage.jsx             # Page wrapper component
│   ├── App.jsx                      # Root component & RTL/LTR direction sync
│   ├── i18n.js                      # i18next configuration & language detector
│   ├── index.css                    # Global styles & resets
│   └── main.jsx                     # App entry point & AOS initialization
├── eslint.config.js                 # ESLint 9 flat configuration
├── vite.config.js                   # Vite + React SWC configuration
└── package.json
