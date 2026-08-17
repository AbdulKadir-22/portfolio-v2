# Architecture Overview

This document describes the high-level architecture and structure of the **internet-home** portfolio application.

## Core Technologies
- **Framework:** React 19 + Vite 8
- **Routing:** React Router 7 (Lazy-loaded feature modules)
- **Styling:** Tailwind CSS v4 + Vanilla CSS design tokens
- **Animations:** Framer Motion 12
- **SEO & Meta:** React Helmet Async

## Component & Feature Structure

```
src/
├── App.jsx              # Root application component with Context Providers
├── main.jsx             # Entry point
├── router.jsx           # Lazy-loaded route configurations
├── components/          # Reusable shared UI elements
│   ├── Navigation.jsx   # Top application navigation bar
│   ├── Hero.jsx         # Hero section
│   ├── StatusCard.jsx   # Floating status indicator component
│   ├── ThemeToggle.jsx  # Dark/Light mode switcher
│   └── layout/          # Layout wrapper components
├── context/             # Global Context providers (e.g. ThemeContext)
├── data/                # Static data configuration (`siteContent`)
└── features/            # Feature-sliced modules
    ├── home/            # Home landing view
    ├── projects/        # Projects showcase & interactive catalog
    ├── skills/          # Interactive planetary orbit skills map
    ├── experience/      # Interactive journey & experience timeline
    ├── blogs/           # Blog module & reading view
    ├── literature/      # Original poetry, quotes, & novel status
    ├── hobbies/         # Interactive grids for personal interests
    └── contact/         # Reach out forms & direct links
```

## State & Theme System
- **ThemeContext**: Manages active theme (`dark` / `light`) state, syncing class updates with `document.documentElement`.
- **Motion System**: Managed via Framer Motion's `AnimatePresence` and custom micro-animations for page transitions and card hover states.
