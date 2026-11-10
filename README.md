# DZAKIRUL — PREMIUM PERSONAL PORTFOLIO

> **CONCEPT: BEYOND THE INTERFACE.**  
> *"I build digital experiences where creativity meets technology. Exploring ideas, experimenting with interfaces, and transforming concepts into meaningful digital experiences."*

---

## ✦ Brand Identity & Visual Language

- **Full Name:** DZAKIRUL FAVIAN JIWANI ZUHRI
- **Role:** Creative Web Developer / Digital Engineer
- **Brand Personality:** Experimental, Creative, Futuristic, Bold, Innovative, Professional.
- **Visual Reference Direction:** Inspired by high-fashion editorial digital studios (Landon Norris aesthetic), featuring predominantly black backgrounds, aggressive crimson/neon-red accents, oversized typography, asymmetrical layouts, subtle film grain, and kinetic micro-interactions.

### Color Palette
- **Primary Background:** `#0A0A0A`
- **Secondary Background:** `#151515`
- **Primary Accent:** `#E50914` (Bold Crimson)
- **Secondary Accent:** `#FF2A36` (Neon Red Glow)
- **Primary Text:** `#F5F5F5`
- **Secondary Text:** `#A1A1A1`
- **Borders & Dividers:** `rgba(255, 255, 255, 0.1)` / `rgba(229, 9, 20, 0.4)`

### Typography Stack
- **Display Headlines:** [Syne](https://fonts.google.com/specimen/Syne) (Weights 700, 800, 900)
- **Body & Subtitles:** [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (Weights 300, 400, 500, 600, 700)
- **Technical Badges & Code:** [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (Weights 400, 500, 600)

---

## ✦ Website Architecture & Sections

1. **Custom Interactive Cursor (`CustomCursor.tsx`):**
   - Central red dot with a trailing smooth halo ring and interactive scaling on clickable elements (auto-disabled on touch devices).
2. **Background FX (`BackgroundFX.tsx`):**
   - Ambient noise film grain, cybernetic grid lines, and an interactive mouse-following radial crimson blur.
3. **Navigation (`Navbar.tsx`):**
   - Minimalist monogram logo `[>DF] DZAKIRUL`, live scrollspy indicator, "AVAILABLE FOR 2026" status badge, and full-screen mobile drawer with oversized editorial links.
4. **Hero Section (`Hero.tsx`):**
   - Full-screen editorial typography ("DZAKIRUL FAVIAN JIWANI ZUHRI"), professional label "CREATIVE WEB DEVELOPER", main headline "DESIGNING THE DIGITAL EXPERIENCE", dramatic photography frame with coordinates, subtle 3D mouse parallax, infinite marquee ticker, and primary/secondary CTAs.
5. **About Me (`About.tsx`):**
   - Core concept callout ("BEYOND THE INTERFACE"), personality pillars, personal introduction, creative philosophy manifesto, editorial photographic composition, and 60 FPS performance metrics.
6. **Expertise (`Expertise.tsx`):**
   - 4 Architectural Pillars: *Frontend Development*, *Backend Development*, *UI/UX Design*, and *Creative Development*.
   - Interactive live playground (canvas particle simulation, latency benchmarks, design token inspector) and code preview.
7. **Selected Work & Modal (`SelectedWork.tsx` & `ProjectModal.tsx`):**
   - High-impact case studies with category filtering (All, Creative Frontend, Full Stack, Interactive, UI/UX Design).
   - "Deep Dive" modal showing architectural briefs, key metrics, deliverables, technologies, and live demo / GitHub links.
8. **My Journey (`Journey.tsx`):**
   - Filterable timeline for *Experience*, *Education*, and *Achievements* with red timeline nodes and detailed bullet points.
9. **Beyond The Code (`BeyondTheCode.tsx`):**
   - Curated passions and visual eye: Generative Art Shaders, Analog Synthesis & Spatial Audio, Cyberpunk Architecture, Tactile Industrial Hardware, Nocturnal Urban Photography, and Avant-Garde Typography.
10. **Contact (`Contact.tsx`):**
    - Bold closing typography: *"HAVE A VISION? LET'S BUILD SOMETHING EXTRAORDINARY."*
    - Interactive 1-click email copy to clipboard with toast notification, direct interactive dispatch message form with validation, social links, and live Indonesia local time clock (GMT+7).
11. **Footer (`Footer.tsx`):**
    - Minimal branding, copyright © 2026, social links, system telemetry status, and smooth back-to-top interaction.

---

## ✦ Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 8
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite` & `@theme`)
- **Animation:** Framer Motion
- **Icons:** Lucide React + Bespoke SVG Social Icons
- **Typography:** Google Fonts (Syne, Space Grotesk, JetBrains Mono)

---

## ✦ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173/`.

### 3. Production Build & Preview
```bash
npm run build
npm run preview
```

---

## ✦ Customization Guide

All personal and project information is isolated into structured TypeScript data files:

| Section | Data File Location |
| :--- | :--- |
| **Selected Projects** | [`src/data/projects.ts`](file:///D:/05_coding/webportofolio/src/data/projects.ts) |
| **Technical Expertise** | [`src/data/expertise.ts`](file:///D:/05_coding/webportofolio/src/data/expertise.ts) |
| **Career & Education Timeline** | [`src/data/journey.ts`](file:///D:/05_coding/webportofolio/src/data/journey.ts) |
| **Curated Passions & Gallery** | [`src/data/beyond.ts`](file:///D:/05_coding/webportofolio/src/data/beyond.ts) |
| **Contact Email & Social Links** | [`src/components/Contact.tsx`](file:///D:/05_coding/webportofolio/src/components/Contact.tsx) |
| **Visual Colors & Theme Variables** | [`src/index.css`](file:///D:/05_coding/webportofolio/src/index.css) |
