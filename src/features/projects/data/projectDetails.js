/**
 * Case Study Database for Portfolio Projects.
 * Centralizes deep technical information, metrics, highlights, and roadmap scopes.
 */
import portfolio1 from '../Images/og-image.png'
import portfolio2 from '../../../assets/projects/project-portfolio.png'

import neargrab1 from '../Images/Neargrab1.png'
import neargrab2 from '../Images/Neargrab2.png'
import neargrab from '../Images/Neargrab.png'
  

export const projectDetails = {
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
        {name: "Antigravity", level: "Code generation helper" }
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
    screenshots : [
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
    subtitle: "Cloud storage solution with file sharing and previews.",
    status: "Dreaming: Building • Testing • Scaling",
    highlights: {
      duration: "Dec 2024 - Jan 2025",
      role: "Lead Developer",
      teamSize: "Solo",
      projectType: "Cloud Platform"
    },
    techStackCategorized: {
      Frontend: [
        { name: "React", level: "UI Library" },
        { name: "TypeScript", level: "Structure" },
        { name: "Tailwind CSS", level: "Styling" }
      ],
      Backend: [
        { name: "Node.js & Express", level: "File Processing" },
        { name: "AWS SDK", level: "Storage Access" }
      ],
      Database: [
        { name: "PostgreSQL", level: "Metadata Storage" },
        { name: "Prisma", level: "ORM" }
      ],
      "DevOps & Tools": [
        { name: "Docker", level: "Environment" },
        { name: "AWS S3", level: "Object Storage" },
        { name: "GitHub Actions", level: "CI" }
      ]
    },
    keyFeatures: [
      { title: "Drag & Drop Upload", desc: "Drag and drop uploading interface supporting multi-gigabyte files and folders." },
      { title: "Dynamic File Previews", desc: "Instantly view PDFs, videos, images, and code files inside the app canvas." },
      { title: "Encrypted Sharing Keys", desc: "Generate secure, password-protected download links with dynamic expiration times." },
      { title: "Visual Dashboard Stats", desc: "Disk space meters, category pie charts, and download counters." }
    ],
    metrics: [
      { label: "Data Stored", value: "5TB+", icon: "star" },
      { label: "Total Uploads", value: "25K+", icon: "trending" },
      { label: "Transfer Speed", value: "15MB/s", icon: "clock" },
      { label: "Active Accounts", value: "800+", icon: "users" }
    ],
    architectureText: "PortYours handles uploads using secure presigned S3 URLs, letting the client stream files directly to AWS buckets and bypassing backend node servers. PostgreSQL maps folder directories, file hashes, and permissions, while Redis maintains user session keys and rate-limiting metrics.",
    challenges: [
      {
        title: "Streaming Heavy Video Previews",
        desc: "High server memory usage during file downloads. Resolved by implementing chunked HTTP range headers to stream media content straight from S3 endpoints."
      },
      {
        title: "Folder Tree Performance",
        desc: "Nested folders required recursive database matching. Solved by adopting material path models in SQL schemas for fast single-query depth fetches."
      }
    ],
    futureScope: [
      "Implement client-side end-to-end zero-knowledge encryption.",
      "Add collaborative shared folders with role-based editing constraints.",
      "Introduce automated optical character recognition (OCR) on image uploads."
    ]
  },
};
