/**
 * Case Study Database for Portfolio Projects.
 * Centralizes deep technical information, metrics, highlights, and roadmap scopes.
 */
import portfolio1 from '../Images/og-image.png'
import portfolio2 from '../../../assets/projects/project-portfolio.png'

import neargrab1 from '../Images/Neargrab1.png'
import neargrab2 from '../Images/Neargrab2.png'
import neargrab from '../Images/Neargrab.png'

import amaal1 from '../Images/amaal/amaal1.png'
import amaal2 from '../Images/amaal/amaal2.png'

import bits1 from '../Images/bits/dashboard.jpeg'
import bits2 from '../Images/bits/playstore.png'
import bits3 from '../Images/bits/playstoress.png'

import portyours1 from '../Images/portyours/portfolio.png'
import portyours2 from '../Images/portyours/portyours.png'


export const projectDetails = {
  bits: {
    subtitle: "A premium, local-first habit tracking and daily productivity mobile application designed to cultivate long-term consistency.",
    status: "Production Ready: Built • Tested",
    highlights: {
      duration: "May 2026 - June 2026",
      role: "Lead Mobile Developer",
      teamSize: "Solo Project",
      projectType: "Cross-Platform Mobile Application"
    },
    techStackCategorized: {
      Frontend: [
        { name: "Flutter 3.x", level: "Cross-Platform SDK" },
        { name: "Dart", level: "Core Language" },
        { name: "Riverpod", level: "State Management" },
        { name: "Material Design 3", level: "UI Design System" },
        { name: "GoRouter", level: "Navigation" }
      ],
      "Database & Storage": [
        { name: "Hive NoSQL", level: "Local Persistence" },
        { name: "Path Provider", level: "File System Utility" }
      ],
      "DevOps & Tools": [
        { name: "Git & GitHub", level: "Version Control" },
        { name: "Flutter Launcher Icons", level: "Asset Customizer" },
        { name: "Flutter Native Splash", level: "Splash Screen Engine" }
      ],
      "Utilities & OS APIs": [
        { name: "Flutter Local Notifications", level: "System Reminders" },
        { name: "Timezone & Flutter Timezone", level: "Timezone Synchronization" }
      ]
    },
    keyFeatures: [
      { title: "Dynamic Habit Tracker", desc: "Build consistency with a customizable habit checklist, streak count tracking, theme colors, and milestone goals." },
      { title: "Time-Tracked Habits", desc: "Log active hours for habits manually or via stopwatch timers, compiling stats on a dedicated timer dashboard." },
      { title: "Hierarchical Sub-Habits", desc: "Break complex habits down into smaller, actionable sub-habits with independent checkbox tracking." },
      { title: "Unified To-Do System", desc: "Manage daily tasks via a timeline view or all-tasks panel to keep routine and to-do lists unified." },
      { title: "Location-Aware Reminders", desc: "Schedule daily global reminders or specific habit alerts, synced accurately with the device's local timezone." },
      { title: "Milestones & Celebration Popups", desc: "Motivate habits by triggering congratulatory milestone overlays when achieving consecutive day targets." }
    ],
    detailedFeatures: [
      { title: "Dynamic Habit Tracker", detailedDesc: "Persists rich habit records (including streak counts, completion lists, and custom themes) using Hive's fast key-value storage API." },
      { title: "Time-Tracked Habits", detailedDesc: "Maintains high-precision duration tracking using a dedicated TimeLog scheme, mapping elapsed hours against calendar days." },
      { title: "Hierarchical Sub-Habits", detailedDesc: "Uses nested serialization in Dart models to save, update, and toggle checklists of sub-routines inside parent habit boxes." },
      { title: "Unified To-Do System", detailedDesc: "Allows sorting and grouping tasks dynamically in memory-mapped Hive boxes, rendering a timeline layout sorted chronologically." },
      { title: "Location-Aware Reminders", detailedDesc: "Leverages the flutter_local_notifications library to programmatically queue timezone-aware daily/habit notifications using system alarms." },
      { title: "Milestones & Celebration Popups", detailedDesc: "Triggers context-aware custom overlays containing streak milestones computed on-the-fly using backwards date traversal algorithms." }
    ],
    metrics: [
      { label: "Data Read/Write", value: "<1ms", icon: "zap" },
      { label: "UI Response", value: "60 FPS", icon: "trending" },
      { label: "App Size", value: "<15MB", icon: "database" },
      { label: "User Streaks", value: "Active", icon: "users" }
    ],
    screenshots: [
      bits1,
      bits2,
      bits3
    ],
    architectureText: "Bits is designed on a modular client-side architecture using Flutter and Dart. State management is orchestrated through Riverpod, enforcing a decoupled data-flow separation between UI elements, controllers, and services. Local persistence is powered by Hive, a lightweight NoSQL key-value database that stores JSON-serialized models, achieving sub-millisecond read/write performance. Platform-specific features like background alarms and local reminders are triggered using flutter_local_notifications coupled with native Android and iOS timezone APIs.",
    challenges: [
      {
        title: "Sub-millisecond State Hydration",
        desc: "Using standard relational databases for high-frequency habit checking created visible rendering stutters. Resolved by implementing Hive NoSQL, serializing custom nested Dart structures directly to memory-mapped local storage."
      },
      {
        title: "Exact Timezone Alarms",
        desc: "Encountered alarm failures when scheduling daily and habit reminders across different timezones. Resolved by integrating flutter_timezone to resolve the device's specific local location and mapping notifications to future tz.TZDateTime instances."
      },
      {
        title: "Consecutive Streak Traversal",
        desc: "Calculating streaks accurately when users complete habits late or change system dates was complex. Engineered a robust date comparison traversal helper that scans history starting from today or yesterday to compute active consecutive days."
      }
    ],
    futureScope: [
      "Implement cloud synchronization using Supabase or Firebase for multi-device data backup and restore.",
      "Add interactive home screen widgets for Android and iOS for single-tap completion logs directly from the home screen.",
      "Design advanced analytics dashboards with interactive trend graphs and monthly heatmaps."
    ]
  },
  neargrab: {
    subtitle: "Hyper-local product discovery platform bridging neighborhood customers and physical merchants.",
    status: "Production Ready: Built • Tested • Deployed",
    highlights: {
      duration: "January 2025 - June 2026",
      role: "Full Stack Developer",
      teamSize: "1 Developer + 1 Designer + 1 Product Manager",
      projectType: "Full Stack Web Application"
    },
    techStackCategorized: {
      Frontend: [
        { name: "React 19", level: "Core Framework" },
        { name: "Tailwind CSS v4", level: "Styling Engine" },
        { name: "Zustand", level: "State Management" },
        { name: "React Router v7", level: "Routing" }
      ],
      Backend: [
        { name: "Express.js", level: "Server Framework" },
        { name: "Prisma ORM", level: "Database Access" },
        { name: "Zod", level: "Schema Validation" },
        { name: "Pino", level: "Structured Logging" }
      ],
      "Database & Storage": [
        { name: "PostgreSQL", level: "Primary Database" },
        { name: "Supabase Auth", level: "Identity & JWT" },
        { name: "Cloudinary", level: "Media Storage & CDN" }
      ],
      "DevOps & Tools": [
        { name: "Git & GitHub", level: "Version Control" },
        { name: "Vite 8", level: "Build Tooling" },
        { name: "Vercel", level: "Hosting" }
      ]
    },
    keyFeatures: [
      { title: "User Authentication", desc: "Secure multi-provider access using Supabase Auth supporting Email, Google OAuth, and Phone OTP." },
      { title: "Nearby Product Search", desc: "Discover physical products and shops within a custom kilometer radius using GPS coordinates." },
      { title: "Merchant Storefronts", desc: "Responsive digital storefronts displaying real-time stock levels, timings, and map directions." },
      { title: "Shopkeeper Dashboard", desc: "Empowers local sellers to manage inventory levels, track visitor views, and moderate ratings." },
      { title: "Media Upload Pipelines", desc: "Optimized product image and shop logo processing using Multer buffers and Cloudinary upload streams." },
      { title: "Dynamic QR Codes", desc: "Unique QR code generator per shop page to bridge offline foot traffic into online storefront subscribers." }
    ],
    detailedFeatures: [
      { title: "User Authentication", detailedDesc: "Authenticates client sessions by validating incoming tokens against the Supabase JWKS endpoint with asymmetric ES256 signature verification." },
      { title: "Nearby Product Search", detailedDesc: "Uses Postgres decimal coordinate queries to compute distances dynamically, filtering shops and listings by user-defined geographical radii." },
      { title: "Merchant Storefronts", detailedDesc: "Integrates Google Maps redirection, contact detail visibility toggles, and localized category browsing for enhanced local accessibility." },
      { title: "Shopkeeper Dashboard", detailedDesc: "Displays storefront performance graphs via Recharts, reviews modal feeds, low-stock alerts, and transactional inventory toggles via Prisma ORM." },
      { title: "Media Upload Pipelines", detailedDesc: "Implements server-side type/size constraint filters with Multer, streaming validated buffers directly to Cloudinary global CDN folders." },
      { title: "Dynamic QR Codes", detailedDesc: "Generates offline-shareable SVG QR codes dynamically on the client-side via the QRCode library for shopkeeper marketing utility." }
    ],
    metrics: [
      { label: "Total Users", value: "1K+", icon: "users" },
      { label: "Active Shops", value: "10+", icon: "store" },
      { label: "Products Indexed", value: "10+", icon: "package" },
      { label: "API Latency", value: "<50ms", icon: "zap" }
    ],
    screenshots: [
      neargrab,
      neargrab1,
      neargrab2
    ],
    architectureText: "Neargrab utilizes a decoupled client-server architecture. The frontend React client is structured using a Feature Slice Pattern, compiling dynamically with Vite 8 and styling via Tailwind CSS v4's CSS-first theme engine. The backend Express.js server acts as an orchestration API layer, validating payloads via Zod, logging metrics with Pino, and querying the database through Prisma ORM. PostgreSQL is used as the relational database, while Supabase handles authorization JWT validation. Media assets (shop logos and product images) are processed using Multer and securely stored on Cloudinary CDN.",
    challenges: [
      {
        title: "Supabase JWT Verification Mismatch",
        desc: "Encountered authentication failures during backend verification of Google OAuth tokens due to cryptographic signature differences. Resolved by refactoring the verification middleware to support ES256 asymmetric signature checks using public keys fetched dynamically from the Supabase JWKS endpoint."
      },
      {
        title: "Non-Blocking Multi-file Image Uploads",
        desc: "Uploading high-resolution product photos directly to the server caused thread blocking and slow API responses. Solved by implementing a stream-based media pipeline using Multer buffers, uploading chunks directly to Cloudinary's global CDN."
      },
      {
        title: "State Hydration and Latency Mocking",
        desc: "Validating edge-case user states during early development stages was challenging. Designed an asynchronous mock service wrapper with simulated network latency to ensure fluid transitions and robust fallback UI coverage before database deployment."
      }
    ],
    futureScope: [
      "Integrate localized directions using OpenStreetMap/Google Maps Directions API for in-app merchant pathfinding.",
      "Develop an automated WhatsApp notification notification channel for shopkeepers when customers request reservation/stock updates.",
      "Build an AI-powered smart product recommendation engine leveraging PostgreSQL vector similarity search."
    ]
  },

  ramazaanAmaal: {

    subtitle: "A comprehensive Ramazaan Amaal and Ibaadah Tracker designed to help the Ummah maintain daily consistency and spiritual growth.",

    status: "Production Ready: Built • Tested • Deployed",

    highlights: {

      duration: "February 2025 - March 2025",

      role: "Lead Full Stack Flutter Developer",

      teamSize: "2 Developers + 1 UI/UX Designer",

      projectType: "Cross-Platform Mobile Application"

    },

    techStackCategorized: {

      Frontend: [

        { name: "Flutter 3.x", level: "Cross-Platform SDK" },

        { name: "Dart", level: "Core Language" },

        { name: "Provider", level: "State Management" },

        { name: "Material Design 3", level: "UI Design System" }

      ],

      Backend: [

        { name: "Node.js", level: "Server Runtime" },

        { name: "Express.js", level: "API Framework" },

        { name: "Firebase Admin SDK", level: "Cloud Messaging Gateway" }

      ],

      "Database & Storage": [

        { name: "Hive NoSQL", level: "High-Performance Local DB" },

        { name: "Shared Preferences", level: "Key-Value Configuration" }

      ],

      "DevOps & Tools": [

        { name: "Git & GitHub", level: "Version Control" },

        { name: "Build Runner", level: "Code Generation" },

        { name: "Render", level: "Backend Hosting" }

      ]

    },

    keyFeatures: [

      { title: "Daily Salah Tracker", desc: "Track five daily prayers, Taraweeh, and voluntary Sunnah/Nawafil (Tahajjud, Ishraq, Chasht, Awwabin) with detailed rakats checklist." },
      { title: "Fasting & Suhoor Monitor", desc: "Log daily fasts, manage Suhoor and Roza Niyats, and maintain fasting streak records throughout the holy month." },
      { title: "Quran Tilawat Logger", desc: "Log page-level Quran recitation progress, page count increments, and visualize reading statistics dynamically." },
      { title: "Tasbeeh & Zikr Counter", desc: "A customizable digital Tasbeeh counter to log daily Adhkar, track targets, and configure vibration haptic feedback." },
      { title: "Dua & Supplications", desc: "Access a curated library of authentic daily supplications, with easy trackers for morning, evening, and special prayers." },
      { title: "Self-Reflection Journal", desc: "Answer daily reflection questionnaires checking negative habits (backbiting, lying, gaze protection) alongside custom diary notes." }

    ],

    detailedFeatures: [

      { title: "Daily Salah Tracker", detailedDesc: "Maintains a structured database map of daily prayers persistently on local storage using Hive boxes, calculating prayer consistency metrics." },
      { title: "Fasting & Suhoor Monitor", detailedDesc: "Uses a clean state manager model to toggle and persist fasting intentions, enabling simple calendar-based streak records." },
      { title: "Quran Tilawat Logger", detailedDesc: "Saves page-level reading logs to memory-mapped local storage via Hive TypeAdapters, generating stats cards on the dashboard." },
      { title: "Tasbeeh & Zikr Counter", detailedDesc: "Utilizes a ChangeNotifier provider to orchestrate active counters, sync progress with daily records, and fire vibration haptics." },
      { title: "Dua & Supplications", detailedDesc: "Maintains localized map objects of duas, tracking completed and pending supplications per day inside Hive daily records." },
      { title: "Self-Reflection Journal", detailedDesc: "Stores daily behavioral attributes and rich text journaling notes locally in a structured NoSQL schema under 1ms." }

    ],

    metrics: [

      { label: "Active Trackers", value: "30 Days", icon: "calendar" },
      { label: "Data Persistence", value: "<1ms", icon: "database" },
      { label: "Notification Reminders", value: "100%", icon: "bell" },
      { label: "Active Users", value: "1K+", icon: "users" }

    ],

    screenshots: [
      amaal1,
      amaal2
    ],

    architectureText: "Ramazaan Amaal utilizes a client-server architecture centered around a highly responsive Flutter mobile client. The frontend is built using a clean folder-by-feature pattern in Dart, utilizing Provider for state management and Hive for memory-mapped, high-performance NoSQL local storage. For global events and broadcast updates, a Node.js/Express.js backend deployed on Render integrates with Firebase Cloud Messaging (FCM) to deliver push notifications, which are scheduled locally using the Flutter Local Notifications plugin and timezone adapters.",

    challenges: [

      {

        title: "High-Performance Local Synced Storage",
        desc: "Using standard SQLite for frequent daily checklist updates caused micro-stutters in UI transitions. Resolved by migrating to Hive NoSQL database, creating custom generated TypeAdapters to serialize daily records and tilawat logs to memory-mapped local storage under 1ms."

      },

      {

        title: "Accurate Multi-Timezone Reminders",

        desc: "Setting daily prayer and zikr reminders failed when users changed timezones or during daylight saving shifts. Solved by integrating Flutter Local Notifications with the timezone and flutter_timezone packages, scheduling notifications via tz.TZDateTime relative to the user's localized zone."

      },

      {

        title: "Broadcast Notifications Delivery",

        desc: "Implementing a simple notification broadcast system required secure access control without complex enterprise IAM. Developed a Node.js/Express admin gateway deployed on Render, validating requests via an admin security key to dispatch push alerts through Firebase Admin SDK."

      }

    ],

    futureScope: [

      "Integrate automatic prayer time calculations using GPS location and offline astronomical formula computations.",

      "Add dynamic PDF report generation and WhatsApp sharing to export weekly/monthly progress summaries.",

      "Incorporate an audio player for correct pronunciation of the Dua collection and Quranic verses."

    ]

  },

  portfoliov2: {
    subtitle: "My personal portfolio built with React + Vite and Tailwind CSS.",
    status: "Dreaming: Finalizing • Polishing • Maintaining",
    highlights: {
      duration: "April 2026 - Present",
      role: "Creator & Designer",
      teamSize: "Solo",
      projectType: "Personal Showcase"
    },
    techStackCategorized: {
      Frontend: [
        { name: "React", level: "Library" },
        { name: "Tailwind CSS", level: "Styling" },
        { name: "Framer Motion", level: "Transitions" }
      ],
      Backend: [
        { name: "Web3Forms", level: "Contact Forms" }
      ],
      Database: [
        { name: "json", level: "content storing" }
      ],
      "DevOps & Tools": [
        { name: "Vercel", level: "Hosting" },
        { name: "Figma", level: "UI/UX Design" },
        { name: "ChatGPT", level: "UI inspiration generation " },
        { name: "Antigravity", level: "Code generation helper" }
      ]
    },
    keyFeatures: [
      { title: "3D Celestial Scenes", desc: "Interactive planet spheres and orbiting stars built Navigation." },
      { title: "Sleek Glassmorphic UI", desc: "Curated translucent panels with custom backdrop-filters and light borders." },
      { title: "Special Hobbies", desc: "Custom Hobbies for painting, series and books wanderers can explore." },
      { title: "Global Dark/Light toggle", desc: "Consistent themes utilizing Tailwind hooks and context switches." }
    ],
    detailedFeatures: [
      { title: "3D Celestial Scenes", detailedDesc: "Interactive planet spheres and orbiting stars built Navigation." },
      { title: "Sleek Glassmorphic UI", detailedDesc: "Curated translucent panels with custom backdrop-filters and light borders." },
      { title: "Special Hobbies", detailedDesc: "Custom Hobbies for painting, series and books wanderers can explore." },
      { title: "Global Dark/Light toggle", detailedDesc: "Consistent themes utilizing Tailwind hooks and context switches." }
    ],
    metrics: [
      { label: "Personal", value: "9/10", icon: "users" },
      // { label: "Render Frame Rate", value: "60fps", icon: "trending" },
      // { label: "Bundle Size", value: "68kB", icon: "clock" },
      // { label: "Design Iterations", value: "4", icon: "star" }
    ],
    screenshots: [
      portfolio1,
      portfolio2
    ],

    architectureText: "The portfolio architecture focuses heavily on render optimization. Since Three.js is loaded, it is bundled in a lazy chunk that is only requested once the user focuses on 3D elements. Framer motion uses lightweight features to keep bundle sizes minimal, and layout grids are built to utilize pure CSS coordinates.",
    challenges: [
      {
        title: "Planet Navigation Mobile",
        desc: "The USP of the portfolio the planetary navigation system was failing in Mobile which was later changed to bottom navigation bar due to easiness."
      },
      {
        title: "The meteors falling",
        desc: "The meteors in the background were only visible in desktop mode and were not visible in mobile mode. Which was later changed to a simple CSS gradient animation "
      }
    ],
    futureScope: [
      "Add interactive audio system with celestial theme melodies.",
      "Add literature Page which will show novel, poem, quotes written by me",
      "Adding Admin Side so i can add directly through admin panel"
    ]
  },

  portyours: {
  subtitle: "Dynamic developer portfolio builder and hosting platform bridging profile personalization and instant sharing.",
  status: "Production Ready: Built • Tested • Deployed",
  highlights: {
    duration: "August 2025 - April 2026",
    role: "Full Stack Developer",
    teamSize: "1 Backend + 1 Frontend Developer",
    projectType: "Full Stack Web Application"
  },
  techStackCategorized: {
    Frontend: [
      { name: "React 19", level: "Core Framework" },
      { name: "Tailwind CSS v4", level: "Styling Engine" },
      { name: "React Router v7", level: "Routing" },
      { name: "ImageKit React SDK", level: "Media Optimization" }
    ],
    Backend: [
      { name: "Express.js 5", level: "Server Framework" },
      { name: "Mongoose ORM", level: "Database Access" },
      { name: "JSON Web Tokens (JWT)", level: "Security & Auth" },
      { name: "Bcrypt.js", level: "Password Hashing" }
    ],
    "Database & Storage": [
      { name: "MongoDB", level: "Primary Database" },
      { name: "ImageKit CDN", level: "Media Storage & CDN" }
    ],
    "DevOps & Tools": [
      { name: "Git & GitHub", level: "Version Control" },
      { name: "Vite 7", level: "Build Tooling" },
      { name: "Vercel", level: "Hosting" }
    ]
  },
  keyFeatures: [
    { title: "User Authentication", desc: "Secure user registration and login flows utilizing JWT session cookies and Bcrypt password encryption." },
    { title: "Dynamic Portfolio Builder", desc: "Interactive builder covering Home, About, Skills, Projects, and Social contact details." },
    { title: "Direct ImageKit Uploads", desc: "Blazingly fast image loading and hosting by uploading media assets directly from the client to ImageKit CDN." },
    { title: "Dynamic Skill Management", desc: "Interactive widget to add customized skill blocks, set names, and upload relevant icons." },
    { title: "Project Portfolio Showcase", desc: "Visually clean project lists containing descriptive copy, screenshots, and source links." },
    { title: "Public Username Routes", desc: "Generates custom public links (e.g., /portfolio/:username) to share portfolio pages with external audiences." }
  ],
  detailedFeatures: [
    { title: "User Authentication", detailedDesc: "Protects user state and routes by validating JWT tokens inside a secure Express middleware handler, fetching users from MongoDB." },
    { title: "Dynamic Portfolio Builder", detailedDesc: "Implements centralized state management and form handling via a custom React hook that syncs profile changes with the database." },
    { title: "Direct ImageKit Uploads", detailedDesc: "Generates short-lived cryptographic authorization parameters on the backend to authenticate direct client-to-CDN image uploads safely." },
    { title: "Dynamic Skill Management", detailedDesc: "Maps list-based skills into sub-document arrays in MongoDB, updating frontend tags instantly on modification." },
    { title: "Project Portfolio Showcase", detailedDesc: "Integrates project objects as structured Mongoose sub-schemas, allowing clean array manipulation during updates." },
    { title: "Public Username Routes", detailedDesc: "Extracts username URL params dynamically with React Router and executes a MongoDB join to resolve and serve the specific public portfolio." }
  ],
  metrics: [
    { label: "Image Storage", value: "ImageKit", icon: "image" },
    { label: "API Latency", value: "<30ms", icon: "zap" }
  ],
  screenshots: [
    portyours2,
    portyours1
  ],
  architectureText: "Portyours utilizes a decoupled client-server architecture. The frontend React client is structured around component-based pages, compiling dynamically with Vite 7 and styled using Tailwind CSS v4's CSS-first theme engine alongside custom styles. The backend Express 5 server acts as an orchestration API layer, validating routes with custom authentication middleware and querying the database through Mongoose ORM. MongoDB acts as the primary relational/document store. Media assets (profile photos, project images, and skill icons) are securely stored on ImageKit's global CDN, leveraging client-side uploads authorized by server-generated tokens.",
  challenges: [
    {
      title: "Direct Client-to-CDN Image Uploading",
      desc: "Uploading images through the backend server first created latency and wasted resource bandwidth. Resolved by implementing an ImageKit authentication handler on the server that signs short-lived tokens, authorizing the React client to upload photos directly to the CDN secure and fast."
    },
    {
      title: "Seamless Schema Upsert Operations",
      desc: "Distinguishing between new portfolio creation and edits added route complexity. Simplified by using a unified MongoDB `findOneAndUpdate` operation with `upsert: true` and `setDefaultsOnInsert: true`, streamlining form submissions into a single endpoint."
    },
    {
      title: "Dynamic Public Profiling",
      desc: "Enabling instant portfolio discovery without hardcoded pages was crucial. Engineered dynamic parameters using React Router v7 (`/portfolio/:username`) paired with a backend user lookup to dynamically map database records directly to the rendering components."
    }
  ],
  futureScope: [
    "Integrate custom domain mapping to let users link personal domains to their portfolios.",
    "Introduce predefined themes and custom layout templates to give users more stylistic choice.",
    "Implement real-time viewer analytics to show portfolio owners daily traffic and click rates."
  ]
}

};
