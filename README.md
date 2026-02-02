# Geek Lens — Precision Gaming Dashboard

Geek Lens is a premium, high-performance gaming dashboard built with a focus on precision, modularity, and modern aesthetics. It serves as a central hub for players to track performance, explore a dynamic game catalog, and engage in integrated training modules.

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescript.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with **OKLCH** color space for vibrant, perception-accurate design.
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for smooth, high-fidelity transitions.
- **Icons**: [Lucide React](https://lucide.dev/)
- **Components**: Custom-built using [Radix UI](https://www.radix-ui.com/) primitives (via Shadcn/UI).

## 🛠 Project Structure

The codebase is organized following modern frontend best practices, emphasizing modularity and clean separation of concerns:

```text
├── app/                  # Next.js App Router (Pages & Layouts)
│   ├── game/[slug]/      # Dynamic game session environment
│   ├── games/            # Interactive game catalog
│   ├── profile/          # Player stats and account settings
│   └── globals.css       # Design tokens and M3 surface definitions
├── components/           # Reusable React components
│   ├── shared/           # Cross-page components (Header, AppCard)
│   └── ui/               # Atomic Shadcn components
├── modules/              # Core business logic
│   └── games/            # Modular game registry and implementations
├── lib/                  # Shared utilities (cn, etc.)
└── public/               # Static assets and game thumbnails
```

## 📋 Comprehensive Page Details

### 1. Dashboard (The Command Center)

The entry point (`/`) designed for quick situational awareness.

- **Welcome Section**: Personalized greeting ("Hi, Geek") with a motivational prompt.
- **Recent Activity**: A horizontal grid of `recent` variant cards showing the last played games and time elapsed (e.g., "2h ago").
- **Performance Analytics**: A large surface card displaying key metrics like focus level percentage and trend indicators.
- **System Status**: Real-time engine status ("V4.0 Precision Engine Live") and global data sync indicators.

### 2. Game Catalog (The Explorer)

A fully searchable interface (`/games`) for the modular game library.

- **M3 Search Bar**: A prominent, rounded search input with real-time filtering.
- **Category Pills**: Dynamic filtering system allowing users to switch between "All", "Action", "Training", "FPS", etc.
- **Catalog Grid**: Responsive grid layout featuring `catalog` variant cards with:
  - Game category and title.
  - Pricing/Access status (e.g., "Free" or price tag).
  - High-visibility action buttons for launching sessions.
- **Empty State**: Custom handling for search results with a "Reset Filters" fallback.

### 3. Game Session (The Training Ground)

The immersive environment (`/game/[slug]`) where training occurs.

- **Session Header**: Minimalist bar showing the current game title and session type (e.g., "In-game session").
- **Dynamic Content**: An isolated, low-distraction container that renders the selected game module.
- **Game: Neural Reaction**:
  - **F1 Light Sequence**: 5-light FIA standard countdown.
  - **Precision Timer**: Millisecond-accurate reaction time measurement.
  - **Live Result Panel**: Instant feedback with "Restart" and "Try Again" functionality.
  - **Session Stats**: Comparison of current attempt vs. personal best.
  - **Hall of Fame**: Integrated leaderboard showing world record holders (e.g., Max Verstappen).

### 4. Player Profile (The Identity)

A high-detail dashboard (`/profile`) for player management.

- **Player Details**: High-impact heading with elite badges, avatar management, and an editable bio.
- **Performance Hub**: A 4-column grid of essential stats:
  - Total Games Played.
  - Average Accuracy.
  - Top Historical Score.
  - Best Reaction Time.
- **Experience Preferences**: Toggle-based settings for Appearance (Dark Mode), Language, and Notifications.
- **Security & Access**: Inline management for Email, Phone, and Two-Factor Authentication (2FA) status.

### 5. Global Navigation (The Bridge)

Permanent UI elements available on every page.

- **Header**: Persistent navigation with Catalog and Home shortcuts.
- **Command Palette**: `Cmd+K` searchable overlay featuring:
  - Recent search history.
  - Trending games shortcuts.
  - Quick actions like "Go to Profile" or "Leaderboard".
- **Responsive Layout**: Fluid transition from high-density desktop views to focused mobile layouts.

## ⚙️ Core Logic & Patterns

### Modular Game Registry

The project uses a centralized registry (`modules/games/registry.ts`) to manage all game modules. This allows for:

- One-step game registration.
- Automatic metadata propagation to the catalog.
- Client-side dynamic importing for optimal performance.

### Design System

The UI is built on a **Material 3 (M3)** inspired design system:

- **Surfaces**: Extensive use of `oklch` variables for consistent backgrounds and borders.
- **Typography**: Bold, italic, and uppercase headings create an aggressive, sport-like gaming atmosphere.
- **Interactivity**: Unified `AppCard` component handles multiple states (catalog, recent, info, section) with a single interface.

## 🛠 Development

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

---

_Built with Antigravity Engine v4.0 Precision._
