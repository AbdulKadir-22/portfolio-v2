# Design System Overview

This document outlines the core visual principles, color system, typography, and component styling rules implemented across the application.

## Core Visual Theme
The application uses a **Cosmic & Motion-Driven** design aesthetic featuring clean monochrome bases, subtle glowing accents, glassmorphic floating elements, and fluid motion.

## Color Tokens

### Dark Mode (Primary Theme)
- **Base Background:** Zinc 900 (`#18181B`) / Slate 950 (`#020617`)
- **Card / Surface Background:** Glass `rgba(0, 0, 0, 0.4)` / Zinc 900 (`#18181B`) with sub-pixel borders (`border-white/10`)
- **Primary Text:** Slate 50 (`#F8FAFC`) / Zinc 100 (`#F4F4F5`)
- **Muted Text:** Slate 400 (`#94A3B8`) / Zinc 400 (`#A1A1AA`)
- **Accents:** Blue 500 (`#3B82F6`), Amber/Yellow for cosmic glow

### Light Mode
- **Base Background:** Clean Monochrome White (`#FFFFFF`) / Zinc 50 (`#FAFAFA`)
- **Card / Surface Background:** Glass `rgba(255, 255, 255, 0.4)` with sub-pixel borders (`border-white/50`)
- **Primary Text:** Slate 800 (`#1E293B`)
- **Muted Text:** Slate 500 (`#64748B`)
- **Accents:** Blue 600 (`#2563EB`)

## Typography
- **Headings:** Archivo (Bold, clean geometric structure)
- **Body & Code:** Space Grotesk / Inter (Clean readability, high contrast)

## Key Design Principles
1. **Glassmorphic Floating Cards:** Backdrop blur (`backdrop-blur-md`), semi-transparent background fills, and fine sub-pixel border strokes.
2. **Smooth Transitions:** Transitions strictly set between `150ms` and `300ms` (`ease-in-out`). Instant shifts and jarring jumps are forbidden.
3. **SVG Icons Only:** All UI icons utilize vector SVG packages (e.g. Lucide React). Native emoji icons are avoided for core interface elements.
4. **Accessible Contrast:** Text and interactive elements maintain standard WCAG AAA/AA 4.5:1 visual contrast ratios.
