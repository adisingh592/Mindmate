# 🌌 Mind Mate AI (Peehu Sakhi)
> **Your AI Companion for Life.**  
> A personal life operating system combining emotional intelligence, journaling, mission planning, habit building, skill learning, media recommendations, and continuous personal growth.

---

## 📖 Overview

**Mind Mate AI (Peehu Sakhi)** is neither just a chatbot, a productivity tool, nor a simple journal app. It is a **Personal Life Operating System (Life OS)**.

Designed with inspiration from **Apple** (simplicity & micro-interactions), **Linear** (speed & command-palette driven navigation), **Notion** (deep interconnected memory), **Headspace** (mindfulness & emotion awareness), and **Arc Browser** (floating glassmorphism workspaces), Mind Mate AI provides a single unified interface that remembers your journey, understands your emotions, and guides your life momentum.

---

## ✨ Core Pillars & Features

| Pillar | Description | Primary Route |
| :--- | :--- | :--- |
| 🧠 **Emotional Intelligence** | Emotion scanner, waveform timelines, trigger detection, and context-aware guidance. | `/app/mood` |
| 💬 **Neural Dialogue** | Contextual conversation engine with 4 AI personas (*Friend, Coach, Mentor, Reflective Guide*) and active memory recall. | `/app/chat` |
| 🎯 **Mission Control** | Purpose-driven task modeling with importance weights (1–10), effort estimates, and workload projection. | `/app/planner` |
| 🧾 **Memory Archive** | Searchable chronological life log, freeform creative writing canvas, and structured daily reflection routines. | `/app/journal` |
| 🌿 **Growth Network** | Interlinked habit consistency nodes, GitHub-style execution heatmaps, and streak protection. | `/app/habits` |
| 📚 **Knowledge & Skills** | Digital library shelf, deep PDF workspace with annotations, and dynamic skill-tree roadmaps. | `/app/books`, `/app/skills` |
| 🎵 **State Regulation** | Mood-aligned focus audio frequencies, philosophical cinema recommendations, and spoken voice companion. | `/app/music`, `/app/movies`, `/app/voice` |
| 📊 **System Intelligence** | Composite **Life Score (0–100)** synthesizing mood, consistency, learning, and productivity trajectory. | `/app/analytics` |
| 🎮 **Growth Gamification** | XP accumulation, progressive level milestones, badges, and momentum challenges. | `/app/gamification` |

---

## 🧭 Navigation & Layout Architecture

```
                                  [ / (Landing Page) ]
                                            │
                                            ▼
┌─────────────────────────────────── [ /app (Life OS) ] ───────────────────────────────────┐
│                                                                                          │
│   ┌──────────────────────────────────────────────────────────────────────────────────┐   │
│   │                              Top Header & Controls                               │   │
│   │                      Theme Toggle (Light / Dark) • Status                        │   │
│   └──────────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                          │
│   ┌──────────────────────────────────────────────────────────────────────────────────┐   │
│   │                              Active Page Viewport                                │   │
│   │                  (One of 22 dedicated modular life surfaces)                     │   │
│   └──────────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                          │
│   ┌──────────────────────────────────────────────────────────────────────────────────┐   │
│   │                   Command Center Palette (Ctrl + K / Cmd + K)                    │   │
│   │      Instant keyboard traversal across all Primary, Secondary, & Utility pages   │   │
│   └──────────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                          │
│   ┌──────────────────────────────────────────────────────────────────────────────────┐   │
│   │                          Floating Bottom Glass Dock                              │   │
│   │  [🏠 Dashboard] [💬 Chat] [🎯 Planner] [🧾 Journal] [📊 Analytics] [👤 Profile]  │   │
│   └──────────────────────────────────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 🗺️ Complete Page Directory (All 22 Pages)

### 1. Public Portal
- **Landing Page (`/`)** — [Landing.tsx](src/app/components/pages/Landing.tsx): Editorial storytelling narrative explaining the vision, emotional AI core, neural memory engine, and ecosystem layers.

### 2. Primary Life Core Hubs (Dock)
- **Life Command Center / Dashboard (`/app`)** — [Dashboard.tsx](src/app/components/pages/Dashboard.tsx): Global status board tracking the composite Life Score, today's AI brief, habit synchronization, and cross-domain recommendations.
- **Neural Link / Chat (`/app/chat`)** — [Chat.tsx](src/app/components/pages/Chat.tsx): Conversational AI workspace with real-time memory retrieval, mode switching (*Friend, Coach, Mentor, Reflective Guide*), and prompt suggestions.
- **Mission Control / Planner (`/app/planner`)** — [Planner.tsx](src/app/components/pages/Planner.tsx): Execution hub treating tasks as strategic missions with subtask graphs, importance ratings, effort curves, and remaining workloads.
- **Memory Archive / Journal (`/app/journal`)** — [JournalHome.tsx](src/app/components/pages/JournalHome.tsx): Central memory feed indexing chronological entries, calendar lookups, mood history links, and breakthrough highlights.
- **System Intelligence / Analytics (`/app/analytics`)** — [Analytics.tsx](src/app/components/pages/Analytics.tsx): Cross-signal intelligence dashboard mapping habit loops, sentiment trends, cognitive focus, and forward-looking forecasts.
- **Identity Core / Profile (`/app/profile`)** — [Profile.tsx](src/app/components/pages/Profile.tsx): Dynamic self-concept board reflecting core traits, long-horizon ambition goals, unlocked achievements, and growth seasons.

### 3. Specialized Secondary Modules
- **Creative Canvas (`/app/journal/write`)** — [WriteJournal.tsx](src/app/components/pages/WriteJournal.tsx): Distraction-free long-form writing canvas with emotional context tags and introspective prompts.
- **Mind Space / Daily Reflection (`/app/journal/reflection`)** — [DailyReflection.tsx](src/app/components/pages/DailyReflection.tsx): 6-step guided daily review covering mood, gratitude, today's wins, obstacles, key lessons, and tomorrow's intentions.
- **Growth Network / Habits (`/app/habits`)** — [Habits.tsx](src/app/components/pages/Habits.tsx): Habit relationship graph, streak maintenance, consistency and reliability percentages, and temporal heatmap matrix.
- **Growth Journey / Gamification (`/app/gamification`)** — [Gamification.tsx](src/app/components/pages/Gamification.tsx): Motivation mechanics featuring cumulative XP, leveling tiers, short-term quests, and unlockable badges.
- **Timeline Nexus / History (`/app/history`)** — [History.tsx](src/app/components/pages/History.tsx): Temporal navigation across previous mood shifts, completed missions, book reads, and skill pivots.
- **Knowledge Vault / Books (`/app/books`)** — [Books.tsx](src/app/components/pages/Books.tsx): Reading shelf with active reading queues, AI contextual recommendations, saved highlights, and daily life philosophy quotes.
- **Deep Reading / PDF Reader (`/app/books/reader/:id`)** — [PDFReader.tsx](src/app/components/pages/PDFReader.tsx): Focused document reading workspace with inline marginalia, AI summaries, and flashcards.
- **Skill Matrix (`/app/skills`)** — [Skills.tsx](src/app/components/pages/Skills.tsx): Visual skill-tree node network mapping progressive learning roadmaps and capability mastery trajectories.
- **Mastery Studio / Skill Detail (`/app/skills/:id`)** — [SkillDetail.tsx](src/app/components/pages/SkillDetail.tsx): Granular lesson workspace with syllabus modules, practice notes, and knowledge gap reinforcement.
- **Audio Nexus / Music (`/app/music`)** — [Music.tsx](src/app/components/pages/Music.tsx): Emotion-focused audio soundscapes, binaural focus beats, and playlist archives.
- **Cinema Grid / Movies (`/app/movies`)** — [Movies.tsx](src/app/components/pages/Movies.tsx): Curated cinematic intelligence organizing movies by current mood, life themes, and philosophical takeaways.
- **Emotion Scanner / Mood Hub (`/app/mood`)** — [MoodHub.tsx](src/app/components/pages/MoodHub.tsx): Emotion radar, trigger correlations, historical sentiment waveforms, and targeted regulation exercises.
- **Audio Intelligence / Voice Companion (`/app/voice`)** — [VoiceCompanion.tsx](src/app/components/pages/VoiceCompanion.tsx): Hands-free conversational companion with spoken journaling, guided audio reflections, and acoustic emotion detection.
- **Signal Center / Notifications (`/app/notifications`)** — [Notifications.tsx](src/app/components/pages/Notifications.tsx): Signal management center separating high-priority nudges from routine habit digests.
- **Control Center / Settings (`/app/settings`)** — [Settings.tsx](src/app/components/pages/Settings.tsx): Preferences, privacy constraints, memory persistence settings, and AI behavior parameters.

---

## 🎨 Visual Identity & Design System

The application strictly avoids traditional SaaS dashboard templates and repetitive cards, adopting a layered glassmorphic design language:

### Color Palette

| Mode | Token | Hex Value | Purpose |
| :--- | :--- | :--- | :--- |
| **Dark (Default)** | Background | `#0A0A0A` / `#020617` | Deep void immersion |
| | Surface | `#151515` / `#0F172A` | Primary card & section surfaces |
| | Elevated Surface | `#1E1E1E` / `#1E293B` | Interactive elements & flyouts |
| | Text Primary | `#F5F5F5` / `#E2E8F0` | High-contrast readability |
| | Text Secondary | `#A3A3A3` / `#64748B` | Subtle annotations & metadata |
| **Light** | Background | `#F8FAFC` | Airy, clean canvas |
| | Surface | `#FFFFFF` | Floating cards |
| | Text Primary | `#0F172A` | Deep contrast text |
| | Text Secondary | `#64748B` | Balanced secondary text |

### Accent Signatures
Each domain has a distinct semantic color identity:
- 🟢 **Electric Lime (`#D4FF00`)**: Life Command Center & System Primary
- 🐬 **Cyan Glow (`#00FFC6`)**: Neural Link (Chat), Voice, Identity
- 🟠 **Flame Coral (`#FF6B00`)**: Mission Control (Planner)
- 🌸 **Vibrant Magenta (`#FF4D8D`)**: Memory Archive (Journal & Canvas)
- 🌿 **Emerald Meadow (`#22C55E` / `#A3E635`)**: Habits & Skill Matrix
- 🟣 **Violet Glow (`#C084FC`)**: Books, Reading, Knowledge Vault
- 🌕 **Golden Amber (`#FFB800`)**: Cinema Grid & Gamification
- ❤️ **Crimson Pulse (`#FF375F` / `#FF2D55`)**: Mood Hub & Audio Nexus

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite 6](https://vitejs.dev/) with `@vitejs/plugin-react`
- **Routing**: [React Router 7](https://reactrouter.com/) (Data router via `createBrowserRouter`)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + Custom Design Tokens + Glassmorphism
- **UI & Accessibility Components**: [Radix UI](https://www.radix-ui.com/) primitives & [Shadcn UI](https://ui.shadcn.com/)
- **Animations & Micro-interactions**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics & Canvas**: [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) + [@react-three/drei](https://github.com/pmndrs/drei)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/)

---

## 📁 Repository Structure

```
Mind mate ai/
├── index.html                   # HTML entry point
├── package.json                 # Project dependencies and run scripts
├── vite.config.ts               # Vite configuration with React & Tailwind plugins
├── tsconfig.json                # TypeScript compilation config
├── ATTRIBUTIONS.md              # Open-source attributions (shadcn, Unsplash)
├── guidelines/
│   └── Guidelines.md            # System & design system specifications
├── src/
│   ├── main.tsx                 # React DOM mount point with RouterProvider
│   ├── app/
│   │   ├── App.tsx              # Root app wrapper
│   │   ├── routes.ts            # Complete route tree definition
│   │   └── components/
│   │       ├── Root.tsx         # Layout wrapper with dock, toggle, and command center
│   │       ├── FloatingDock.tsx # Floating glass navigation dock
│   │       ├── CommandCenter.tsx# Global Command Palette (Ctrl+K)
│   │       ├── ThemeToggle.tsx  # Dynamic Dark / Light mode toggle
│   │       ├── pages/           # All 22 distinct screen components
│   │       ├── system/          # LifeOSPage and GenericPage unified layout templates
│   │       ├── three/           # 3D interactive visualizations (Solar System, Portal)
│   │       ├── landing/         # Modular landing page sections
│   │       └── ui/              # Shadcn UI reusable primitive components
│   ├── styles/
│   │   ├── index.css            # Base stylesheet
│   │   ├── theme.css            # CSS variables & theme tokens
│   │   └── globals.css          # Global styling rules
│   └── lib/
│       └── motion.ts            # Shared Framer Motion animation configs
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [pnpm](https://pnpm.io/) (or `npm` / `yarn`)

### Installation & Local Development

1. **Clone or open the repository**:
   ```bash
   cd "Mind mate ai"
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Start the development server**:
   ```bash
   pnpm dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:5173](http://localhost:5173).

### Building for Production
```bash
pnpm build
```

---

## 🔮 Future Roadmap

- [ ] **AI Backend Integration**: Connecting the Neural Link (`/app/chat`) and Voice Companion (`/app/voice`) to an LLM provider (e.g. Gemini API).
- [ ] **Data Persistence & Sync**: Integrating local storage / database (IndexedDB / Supabase / Firebase) for journals, habits, missions, and notes.
- [ ] **Live 3D Models**: Enhancing the `LifeSolarSystem` and `FloatingPortal` with interactive particle fields and real-time state manipulation.
- [ ] **Voice Emotion Recognition**: Enabling real-time speech analysis and sentiment detection during audio journaling sessions.
