# 🧭 Campus Compass 2026

> A Premium Spatial UI/UX Student Orientation Hub & Guidance Portal for Amrita Amaravati. Built with high-fidelity glassmorphism, responsive bento grids, interactive CGPA simulators, and dynamic 3D elements.

---

## 📖 The Problem

Entering university is one of the most exciting yet intimidating transitions in a student's life. Freshers face severe **informational bottlenecks** and academic stress during their first weeks:

- **Complex Rules & Expectations**: Critical requirements like the strict **75% attendance policy** and **Continuous Internal Assessments (CIA)** weights are often poorly understood, leading to preventable academic penalties.
- **Scattered & Fragmented Portals**: Important syllabus blueprints, resource guides, student portals, and transit logs are spread across disconnected platforms and physical notice boards.
- **Orientation Anxiety & Social Gap**: Freshers lack a centralized, engaging way to discover student clubs (such as *Chakravyuha* or *GDSC*), understand daily hostel routines, and connect with peer networks.

---

## ✨ The Solution

**Campus Compass 2026** bridges this gap by delivering a **highly interactive spatial navigation hub**. Designed with modern fluid aesthetics (radial gradient light blobs, convex liquid-glass cards, and 3D interactions), it serves as a digital survival armory:

1. **3D Interactive Compass Hub (Hero)**: A responsive, tilting compass rose allowing students to navigate through the 4 directions (North, East, South, West) and center future roadmaps.
2. **Dynamic Bento grids**: Highly responsive grid cards details Academics (North), Clubs (East), Campus Life (South), and Career opportunities (West) that morph cleanly into dedicated glass drawers.
3. **Interactive Tools & Simulators**:
   - **SGPA & CGPA Simulator**: Real-time internal/external marks slider calculation to project semester GPAs from Day 1.
   - **Interactive Hotspot Blueprint Tour**: Tappable vector-grid map hotspots indicating major campus sectors and secret senior tips.
4. **Nostalgic Audio Player Widget**: A beautiful rotating vinyl record player (playing local college-nostalgia tracks) synced with HTML5 soundwave visualizers and off-screen YouTube API triggers.
5. **Freshman Survival Kit & Checklists**: Curated DO's & DON'Ts guides, daily biometric scan checktimes, standard mess schedules, and direct networking links to peer seniors.

---

## 🛠️ Tech Stack & Architecture

This application is built with a state-of-the-art developer environment, compiling with strict type safety and high performance:

- **Framework**: [React 19](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vite.dev/) (Builds compile in under 4.5 seconds)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla HSL Custom Gradients
- **Animations**: [Motion v12](https://motion.dev/) (Hardware-accelerated fluid springs & transitions)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Hosting Ready**: [Vercel Edge Cloud](https://vercel.com/) (Fully optimized with instant SPA routing rules)

---

## 📂 GitHub Directory Structure

```directory
Amaravathi-main/
├── doc/                      # Documentation & Slides
│   └── presentation.html     # Interactive 5-slide project deck (HTML/CSS)
├── public/                   # Static Assets & transparent icons
│   ├── favicon.ico           # Official transparent AV Amrita crest favicon
│   ├── favicon.png
│   └── campus-compass.png
├── src/                      # Source Code
│   ├── assets/               # Local media assets (logos, 3D compass dial images)
│   │   ├── logo.png          # Vinyl spinning AV record logo
│   │   ├── cap.png           # Falling graduation cap loader image
│   │   └── compass3d.png     # Center spinning active compass rose dial
│   ├── components/           # Reusable UI Components
│   │   ├── Sections/         # Core Bento grid subsections
│   │   │   ├── AcademicLife.tsx
│   │   │   ├── CampusGallery.tsx # Engagements lightboxes with height scroll
│   │   │   ├── CampusLife.tsx
│   │   │   ├── Clubs.tsx
│   │   │   ├── ConnectWithSeniors.tsx
│   │   │   └── Resources.tsx # Amrita portals redirects
│   │   ├── AudioPlayer.tsx   # Vinyl capsule with safe bottom-4 alignments
│   │   ├── BentoSections.tsx # Central bento grid morph modals
│   │   ├── Compass.tsx       # Dynamic resize hook (250px <400px < 640px)
│   │   ├── FAQ.tsx           # Premium accordion collapsible details
│   │   ├── Footer.tsx        # Fully centered credit layouts
│   │   ├── Hero.tsx          # Spacing optimized pt-28 header grids
│   │   ├── JourneyTimeline.tsx # Milestone roadmaps
│   │   ├── Navbar.tsx        # Mobile hamburger drawer overlays
│   │   ├── ShareButton.tsx   # Overlap-safe floating share FAB (bottom-24)
│   │   ├── SplashLoader.tsx  # AV circular progress loader
│   │   ├── ThemeProvider.tsx
│   │   └── WaterDrops.tsx    # Premium realistic convex 3D droplets
│   ├── App.tsx               # Main application layout structure
│   ├── index.css             # Fluid animations, shadows, & glass utilities
│   ├── main.tsx
│   └── vite-env.d.ts
├── tsconfig.json             # Strictly type-safe TS configurations
├── vite.config.ts            # Vite compile environment & resolution paths
├── vercel.json               # Cloud rewrite rules for client redirects
└── package.json              # System configurations & dependencies
```

---

## 🚀 How to Run & Deploy

### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (v18+) installed on your local machine.

### 1. Local Development Setup
Clone the repository and install system dependencies:

```bash
# 1. Install dependencies
npm install

# 2. Start the hot-reloading development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Verify Typings & Production Build
To check for any TypeScript errors or verify compilation speed before deploying:

```bash
# Verify TypeScript strict type-safety
npm run lint

# Compile production-optimized bundle
npm run build
```

This compiles a clean production-grade bundle inside the `dist/` directory with **0 errors**.

### 3. Vercel Cloud Deployment
This project is fully ready for zero-config deployment on Vercel:

1. Connect your GitHub repository (`https://github.com/uday0438/Amaravathi.git`) to your Vercel account.
2. Vercel will automatically detect the **Vite** configuration.
3. Keep the default build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**. Vercel will build and serve your site globally on a fast CDN edge server!
