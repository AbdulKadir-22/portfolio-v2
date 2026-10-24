import React, { useState, useEffect } from 'react';
import {
  Home,
  FolderOpen,
  BookOpen,
  Camera,
  Mail,
  Sparkle,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import planetBase from '../assets/planet-base.webp';
import planetDark from '../assets/planet-dark.webp';
import { useTheme } from '../context/ThemeContext';

/**
 * Mobile Celestial Navigation System & Overlay
 * Top-right planet trigger opens a fullscreen planetary constellation
 * with navigation items arranged in a cascading diagonal layout.
 * Supports both dark and light modes with backdrop blur over the underlying page.
 */
export const MobilePlanetNav = ({ currentPage = 'HOME', onPageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  // Close overlay on ESC key & prevent body scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setIsOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  // Route active helper: HOME is ONLY active when exactly on HOME
  const isRouteActive = (planetRoute) => {
    if (planetRoute === 'HOME') {
      return currentPage === 'HOME';
    }
    return currentPage === planetRoute || currentPage.startsWith(`${planetRoute}/`);
  };

  // Nav planets arranged in an even, elegant diagonal cascade
  const navPlanets = [
    {
      id: 'home',
      label: 'HOME',
      route: 'HOME',
      icon: Home,
      size: 52,
      cx: 74,
      cy: 16,
      hue: 35,
      brightness: 1.0,
      saturate: 3.0,
      contrast: 1.25,
      color: '#fbbf24',
      glow: 'rgba(251, 191, 36, 0.6)',
      tagX: 48,
      tagY: 16,
    },
    {
      id: 'projects',
      label: 'PROJECTS',
      route: 'PROJECTS',
      icon: FolderOpen,
      size: 70,
      cx: 68,
      cy: 32,
      hue: 195,
      brightness: 0.85,
      saturate: 3.5,
      contrast: 1.35,
      color: '#38bdf8',
      glow: 'rgba(56, 189, 248, 0.65)',
      tagX: 38,
      tagY: 32,
    },
    {
      id: 'blogs',
      label: 'BLOG',
      route: 'BLOGS',
      icon: BookOpen,
      size: 50,
      cx: 76,
      cy: 48,
      hue: 20,
      brightness: 0.9,
      saturate: 3.0,
      contrast: 1.3,
      color: '#fb923c',
      glow: 'rgba(251, 146, 60, 0.6)',
      tagX: 48,
      tagY: 48,
    },
    {
      id: 'hobbies',
      label: 'PHOTOGRAPHY',
      route: 'HOBBIES',
      icon: Camera,
      size: 56,
      cx: 66,
      cy: 64,
      hue: 280,
      brightness: 0.85,
      saturate: 3.5,
      contrast: 1.3,
      color: '#c084fc',
      glow: 'rgba(192, 132, 252, 0.55)',
      tagX: 36,
      tagY: 64,
    },
    {
      id: 'contact',
      label: 'CONTACT',
      route: 'CONTACT',
      icon: Mail,
      size: 48,
      cx: 74,
      cy: 80,
      hue: 210,
      brightness: 0.9,
      saturate: 3.2,
      contrast: 1.25,
      color: '#93c5fd',
      glow: 'rgba(147, 197, 253, 0.6)',
      tagX: 46,
      tagY: 80,
    },
  ];

  const handleSelectPage = (route) => {
    if (onPageChange) onPageChange(route);
    setIsOpen(false);
  };

  return (
    <>
      {/* ── Fixed Mobile Trigger Planet (Top-Right) ── */}
      <motion.button
        type="button"
        id="mobile-planet-trigger"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label="Open navigation menu"
        className="fixed top-5 right-5 z-40 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded-full"
      >
        <div className="relative w-[52px] h-[52px] flex items-center justify-center">
          {/* Ambient glow */}
          <div
            className={`absolute -inset-1.5 rounded-full animate-pulse blur-[3px] ${
              isDark
                ? 'bg-gradient-to-tr from-blue-500/30 via-indigo-500/20 to-amber-400/25'
                : 'bg-gradient-to-tr from-blue-400/35 to-amber-400/25'
            }`}
          />
          {/* Border ring */}
          <div
            className={`absolute inset-0 rounded-full border-2 transition-all duration-300 group-hover:scale-110 group-active:scale-95 ${
              isDark
                ? 'border-yellow-400/70 shadow-[0_0_18px_rgba(234,179,8,0.5)]'
                : 'border-blue-400/70 shadow-[0_0_16px_rgba(59,130,246,0.4)]'
            }`}
          />
          {/* Planet sphere */}
          <img
            src={isDark ? planetDark : planetBase}
            alt="Menu"
            className="w-11 h-11 object-contain rounded-full transition-transform duration-500 group-hover:rotate-[30deg]"
            style={{
              filter: isDark
                ? 'brightness(1.25) contrast(1.15) drop-shadow(0 0 12px rgba(59,130,246,0.55))'
                : 'brightness(0.95) contrast(1.2) hue-rotate(190deg) saturate(1.4) drop-shadow(0 0 10px rgba(37,99,235,0.35))',
            }}
          />
          {/* Orbiting micro star */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
            <span
              className={`absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${
                isDark ? 'bg-yellow-300 shadow-[0_0_6px_#fde047]' : 'bg-blue-500 shadow-[0_0_6px_#3b82f6]'
              }`}
            />
          </div>
        </div>
      </motion.button>

      {/* ── Planetary Constellation Fullscreen Overlay with Framer Motion ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`fixed inset-0 z-50 overflow-hidden select-none backdrop-blur-xl ${
              isDark ? 'bg-slate-950/65' : 'bg-white/65'
            }`}
          >
            {/* ─ Dark mode subtle starry specks (only in dark mode) ─ */}
            {isDark && (
              <div className="absolute inset-0 pointer-events-none">
                {[
                  { t: '8%', l: '15%', s: 1, d: '3s', c: 'bg-white' },
                  { t: '18%', l: '45%', s: 1.5, d: '2.5s', c: 'bg-blue-200' },
                  { t: '32%', l: '10%', s: 1, d: '4s', c: 'bg-yellow-200' },
                  { t: '55%', l: '22%', s: 1, d: '3.5s', c: 'bg-white' },
                  { t: '72%', l: '38%', s: 1.5, d: '2.8s', c: 'bg-white' },
                  { t: '88%', l: '12%', s: 1, d: '4.2s', c: 'bg-sky-200' },
                  { t: '44%', l: '55%', s: 1, d: '3s', c: 'bg-white/70' },
                  { t: '62%', l: '8%', s: 1, d: '5s', c: 'bg-yellow-100' },
                  { t: '25%', l: '30%', s: 1, d: '3.8s', c: 'bg-white/60' },
                  { t: '78%', l: '52%', s: 1, d: '4.5s', c: 'bg-blue-100' },
                ].map((star, i) => (
                  <span
                    key={i}
                    className={`absolute rounded-full animate-pulse ${star.c}`}
                    style={{
                      top: star.t,
                      left: star.l,
                      width: `${star.s * 2}px`,
                      height: `${star.s * 2}px`,
                      animationDuration: star.d,
                    }}
                  />
                ))}
              </div>
            )}

            {/* ── SVG Orbital Rings & Connector Lines ── */}
            <motion.svg
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                {/* Dark mode gradients */}
                <linearGradient id="orbGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.05" />
                  <stop offset="50%" stopColor="#93c5fd" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#fef08a" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="connGradDark" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
                </linearGradient>

                {/* Light mode gradients */}
                <linearGradient id="orbGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0284c7" stopOpacity="0.08" />
                  <stop offset="50%" stopColor="#2563eb" stopOpacity="0.32" />
                  <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.15" />
                </linearGradient>
                <linearGradient id="connGradLight" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2563eb" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {/* Concentric orbit ellipses anchored at top-right close button (~88, 6) */}
              {[
                { rx: 20, ry: 14 },
                { rx: 32, ry: 24 },
                { rx: 46, ry: 36 },
                { rx: 60, ry: 50 },
                { rx: 74, ry: 64 },
                { rx: 88, ry: 78 },
              ].map((o, i) => (
                <ellipse
                  key={i}
                  cx="88"
                  cy="6"
                  rx={o.rx}
                  ry={o.ry}
                  fill="none"
                  stroke={isDark ? 'url(#orbGradDark)' : 'url(#orbGradLight)'}
                  strokeWidth={isDark ? 0.3 + i * 0.04 : 0.35 + i * 0.04}
                  strokeDasharray={`${1 + i * 0.3} ${1.2 + i * 0.2}`}
                  opacity={isDark ? 0.6 - i * 0.06 : 0.75 - i * 0.06}
                />
              ))}

              {/* Connector lines from label pills to planet centers */}
              {navPlanets.map((p) => (
                <React.Fragment key={`conn-${p.id}`}>
                  <line
                    x1={p.tagX + 0.5}
                    y1={p.tagY}
                    x2={p.cx}
                    y2={p.cy}
                    stroke={isDark ? 'url(#connGradDark)' : 'url(#connGradLight)'}
                    strokeWidth="0.35"
                    strokeDasharray="0.6 0.6"
                  />
                  {/* Small connector dot at pill edge */}
                  <circle
                    cx={p.tagX + 0.5}
                    cy={p.tagY}
                    r="0.5"
                    fill={isDark ? '#ffffff' : '#2563eb'}
                    opacity={isDark ? 0.65 : 0.8}
                  />
                </React.Fragment>
              ))}

              {/* Decorative glowing star near close button */}
              <circle
                cx="78"
                cy="12"
                r="1"
                fill={isDark ? '#fef08a' : '#3b82f6'}
                opacity={isDark ? 0.8 : 0.6}
              >
                <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite" />
              </circle>
            </motion.svg>

            {/* ── Top Header Bar ── */}
            <motion.div
              initial={{ opacity: 0, y: -24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-30 flex items-center justify-between px-5 pt-5"
            >
              {/* Theme toggle pill (left) */}
              <motion.button
                type="button"
                onClick={toggleTheme}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-md transition-all cursor-pointer group shadow-lg ${
                  isDark
                    ? 'border-yellow-500/30 bg-black/55 text-white hover:border-yellow-400/50'
                    : 'border-slate-300/80 bg-white/85 text-slate-800 hover:border-blue-400/60 shadow-[0_4px_16px_rgba(0,0,0,0.06)]'
                }`}
                aria-label="Toggle theme"
              >
                <Sparkle
                  size={13}
                  className={`transition-transform duration-500 ${
                    isDark ? 'text-blue-400 rotate-12' : 'text-yellow-500 -rotate-12'
                  } group-hover:scale-110`}
                  fill="currentColor"
                />
                <span
                  className={`text-[10px] font-bold tracking-[0.12em] uppercase ${
                    isDark ? 'text-white/85' : 'text-slate-800'
                  }`}
                >
                  {isDark ? 'DARK' : 'LIGHT'}
                </span>
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isDark
                      ? 'bg-blue-400 shadow-[0_0_6px_#60a5fa]'
                      : 'bg-yellow-400 shadow-[0_0_6px_#fde047]'
                  }`}
                />
              </motion.button>

              {/* ── Close Button: Planet sphere with corona ring & X ── */}
              <motion.button
                type="button"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.08, rotate: 90 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                aria-label="Close navigation"
                className="relative w-[56px] h-[56px] rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
              >
                {/* Outer corona ring */}
                <div
                  className={`absolute -inset-1 rounded-full border-[2.5px] animate-pulse ${
                    isDark
                      ? 'border-yellow-400/90 shadow-[0_0_22px_rgba(250,204,21,0.6),0_0_44px_rgba(250,204,21,0.2)]'
                      : 'border-blue-500/90 shadow-[0_0_22px_rgba(59,130,246,0.45),0_0_44px_rgba(59,130,246,0.2)]'
                  }`}
                />
                <div
                  className={`absolute -inset-0.5 rounded-full border ${
                    isDark ? 'border-yellow-300/25' : 'border-blue-400/30'
                  }`}
                />

                {/* Planet sphere */}
                <div className="w-[50px] h-[50px] rounded-full overflow-hidden relative flex items-center justify-center shadow-md">
                  <img
                    src={planetBase}
                    alt=""
                    className="w-full h-full object-cover"
                    style={{
                      filter: isDark
                        ? 'hue-rotate(200deg) brightness(0.85) saturate(3.5) contrast(1.35) drop-shadow(0 0 14px rgba(59,130,246,0.55))'
                        : 'hue-rotate(195deg) brightness(1.05) saturate(2.2) contrast(1.15) drop-shadow(0 2px 10px rgba(37,99,235,0.35))',
                    }}
                  />
                  {/* Overlay with X */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center rounded-full transition-colors ${
                      isDark ? 'bg-black/40 hover:bg-black/50' : 'bg-slate-900/40 hover:bg-slate-900/50'
                    }`}
                  >
                    <X
                      size={22}
                      className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.85)]"
                      strokeWidth={2.5}
                    />
                  </div>
                </div>
              </motion.button>
            </motion.div>

            {/* ── Navigation Planets & Labels ── */}
            <div className="relative z-20 w-full h-[calc(100vh-80px)]">
              {navPlanets.map((planet, index) => {
                const Icon = planet.icon;
                const isActive = isRouteActive(planet.route);

                return (
                  <React.Fragment key={planet.id}>
                    {/* ─── Planet Sphere with Spring Animation ─── */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.25, x: 20, y: -10 }}
                      animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                      exit={{ opacity: 0, scale: 0.3, transition: { duration: 0.18 } }}
                      transition={{
                        duration: 0.45,
                        delay: 0.08 + index * 0.06,
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
                      }}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.92 }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                      style={{
                        left: `${planet.cx}%`,
                        top: `${planet.cy}%`,
                        zIndex: 20,
                      }}
                      onClick={() => handleSelectPage(planet.route)}
                    >
                      <div
                        className="relative rounded-full flex items-center justify-center"
                        style={{
                          width: `${planet.size}px`,
                          height: `${planet.size}px`,
                        }}
                      >
                        {/* Glow / Active Ring (ONLY active for the current page) */}
                        {isActive && (
                          <div
                            className="absolute -inset-[5px] rounded-full border-2 animate-pulse"
                            style={{
                              borderColor: isDark ? planet.color : '#2563eb',
                              boxShadow: isDark
                                ? `0 0 16px ${planet.glow}, 0 0 32px ${planet.glow}`
                                : `0 0 16px rgba(37,99,235,0.65), 0 2px 8px rgba(0,0,0,0.12)`,
                            }}
                          />
                        )}

                        {/* Planet image */}
                        <img
                          src={planetBase}
                          alt={planet.label}
                          className="w-full h-full object-contain planet-animation select-none pointer-events-none rounded-full"
                          style={{
                            filter: isDark
                              ? `hue-rotate(${planet.hue}deg) brightness(${planet.brightness}) saturate(${planet.saturate}) contrast(${planet.contrast}) drop-shadow(0 0 10px ${planet.glow})`
                              : `hue-rotate(${planet.hue}deg) brightness(${planet.brightness * 1.05}) saturate(${planet.saturate * 0.95}) contrast(${planet.contrast * 1.08}) drop-shadow(0 6px 14px rgba(15, 23, 42, 0.22))`,
                            animationDelay: `${index * 5}s`,
                          }}
                        />
                      </div>
                    </motion.div>

                    {/* ─── Label Pill (to the left of the planet) with Slide Animation ─── */}
                    <motion.div
                      initial={{ opacity: 0, x: -35 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20, transition: { duration: 0.18 } }}
                      transition={{
                        duration: 0.42,
                        delay: 0.12 + index * 0.06,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="absolute -translate-y-1/2"
                      style={{
                        right: `${100 - planet.tagX}%`,
                        top: `${planet.cy}%`,
                        zIndex: 20,
                      }}
                    >
                      <motion.button
                        type="button"
                        onClick={() => handleSelectPage(planet.route)}
                        whileHover={{ scale: 1.05, x: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className={`
                          flex items-center gap-2 pl-3 pr-3 py-[7px] rounded-full border backdrop-blur-md
                          transition-all duration-300 ease-out cursor-pointer whitespace-nowrap
                          ${
                            isDark
                              ? isActive
                                ? 'bg-white/20 border-white/60 shadow-[0_0_18px_rgba(255,255,255,0.25)]'
                                : 'bg-black/50 border-white/15 hover:bg-black/65 hover:border-white/35 active:scale-95'
                              : isActive
                                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 border-blue-400 shadow-[0_4px_20px_rgba(37,99,235,0.4)]'
                                : 'bg-white/85 border-slate-200/90 hover:bg-white hover:border-blue-300 shadow-[0_4px_16px_rgba(0,0,0,0.08)] active:scale-95'
                          }
                        `}
                        style={{
                          boxShadow: isActive
                            ? isDark
                              ? `0 0 16px ${planet.glow}`
                              : `0 4px 18px rgba(37, 99, 235, 0.45)`
                            : isDark
                              ? '0 4px 18px rgba(0,0,0,0.5)'
                              : '0 4px 16px rgba(0,0,0,0.06)',
                        }}
                      >
                        <Icon
                          size={14}
                          className={`flex-shrink-0 transition-colors duration-300 ${
                            isDark
                              ? isActive ? 'text-white' : 'text-slate-300'
                              : isActive ? 'text-white' : 'text-slate-600'
                          }`}
                          strokeWidth={isActive ? 2.5 : 2}
                        />
                        <span
                          className={`text-[11px] font-bold tracking-[0.1em] uppercase ${
                            isDark
                              ? isActive ? 'text-white' : 'text-slate-200/90'
                              : isActive ? 'text-white' : 'text-slate-800'
                          }`}
                        >
                          {planet.label}
                        </span>
                        {/* Connector dot on pill right edge */}
                        <span
                          className={`ml-0.5 w-[5px] h-[5px] rounded-full flex-shrink-0 ${
                            isActive
                              ? 'bg-white shadow-[0_0_6px_rgba(255,255,255,0.9)]'
                              : isDark
                                ? 'bg-white/40'
                                : 'bg-blue-500/60'
                          }`}
                        />
                      </motion.button>
                    </motion.div>
                  </React.Fragment>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobilePlanetNav;
