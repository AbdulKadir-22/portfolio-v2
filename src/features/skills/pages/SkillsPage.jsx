import { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '../../../context/ThemeContext';
import { skillsConfig, skillsData } from '../data/skillsData';
import SkillsOrbSystem from '../components/SkillsOrbSystem';
import SkillDetailsCard from '../components/SkillDetailsCard';

/**
 * SkillsPage — main page layout.
 * Coordinates orbital system on the left/center and details panel on the right.
 */
const SkillsPage = () => {
  const { isDark } = useTheme();
  const [activeId, setActiveId] = useState('frontend');
  const detailsRef = useRef(null);

  // Automatically select Frontend on mount
  useEffect(() => {
    setActiveId('frontend');
  }, []);

  const handleSelectCategory = (id) => {
    setActiveId(id);
    
    // On mobile/tablet, smooth-scroll to the details card so the user doesn't miss it
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const activeCategory = skillsData.find((cat) => cat.id === activeId) || skillsData[0];

  return (
    <section
      id="skills-page"
      className="w-full max-w-[96vw] lg:max-w-[98vw] xl:max-w-[1600px] 2xl:max-w-[1700px] mx-auto px-4 lg:pr-8 flex flex-col items-center gap-6 py-4"
    >
      <Helmet>
        <title>Skills — Abdulkadir Shaikh</title>
        <meta name="description" content="Full stack skills including JavaScript, React, Node.js, Flutter, MongoDB, PostgreSQL, Prisma, Docker, and more. 90%+ proficiency in the MERN stack." />
        <link rel="canonical" href="https://abdulkadir.in/skills" />
        <meta property="og:title" content="Skills — Abdulkadir Shaikh" />
        <meta property="og:description" content="Full stack skills including JavaScript, React, Node.js, Flutter, MongoDB, PostgreSQL, Prisma, Docker, and more. 90%+ proficiency in the MERN stack." />
        <meta property="og:url" content="https://abdulkadir.in/skills" />
        <meta property="og:image" content="https://abdulkadir.in/og-image.png" />
      </Helmet>
      {/* ── Page Header Title ── */}
      <header className="flex items-center gap-4 mb-2 select-none">
        <div className="flex items-center gap-2">
          <span className={`tracking-widest text-sm ${isDark ? 'text-yellow-400/60' : 'text-blue-400/60'}`}>
            ───
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`${isDark ? 'text-yellow-300' : 'text-blue-500'}`}
          >
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
          </svg>
        </div>

        <h1
          className="text-2xl sm:text-3xl md:text-4xl tracking-wider uppercase font-black"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            color: isDark ? '#e2e8f0' : '#1e3a5f',
          }}
        >
          {skillsConfig.pageTitle}
        </h1>

        <div className="flex items-center gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`${isDark ? 'text-yellow-300' : 'text-blue-500'}`}
          >
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
          </svg>
          <span className={`tracking-widest text-sm ${isDark ? 'text-yellow-400/60' : 'text-blue-400/60'}`}>
            ───
          </span>
        </div>
      </header>

      {/* ── Page Header Subtitle ── */}
      <p
        className={`
          text-xs sm:text-sm tracking-wide -mt-4 mb-2 text-center max-w-xl select-none
          ${isDark ? 'text-white/50' : 'text-slate-500'}
        `}
      >
        {skillsConfig.pageSubtitle}
      </p>

      {/* ── Responsive Column Layout ── */}
      <div className="w-full lg:pl-[220px] xl:pl-[250px] flex flex-col lg:flex-row gap-6 lg:gap-16 xl:gap-24 items-center lg:items-start justify-between">
        
        {/* Left/Center Column: Interactive Planetary Orbit System */}
        <div className="w-full lg:w-[53%] xl:w-[55%] flex-shrink-0 flex items-center justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-[480px]">
          <SkillsOrbSystem activeId={activeId} onSelectCategory={handleSelectCategory} />
        </div>

        {/* Right Column: Glassmorphic Details Card */}
        <div
          ref={detailsRef}
          className="w-full lg:w-[40%] xl:w-[35%] lg:max-w-[450px] flex-shrink-0 lg:ml-auto lg:sticky lg:top-8 scroll-mt-24"
        >
          {activeCategory && (
            <SkillDetailsCard
              category={activeCategory}
              onBack={window.innerWidth < 1024 ? () => detailsRef.current?.scrollIntoView({ behavior: 'smooth' }) : null}
            />
          )}
        </div>
      </div>

      {/* ── Footer Widgets (Quote and Scroll Indicator) ── */}
      <footer className="w-full flex flex-col items-center gap-4 mt-6 select-none">
        {/* Quote Container */}
        <div
          className={`
            px-5 py-2.5 rounded-full text-center max-w-md mx-auto text-[10px] sm:text-xs font-semibold tracking-wider italic border flex items-center gap-1.5 backdrop-blur-md
            ${
              isDark
                ? 'bg-black/10 border-white/5 text-white/55'
                : 'bg-slate-100/50 border-slate-200/60 text-slate-500 shadow-sm'
            }
          `}
        >
          <span className="text-yellow-500 font-extrabold text-sm leading-none">“</span>
          <span>{skillsConfig.quote}</span>
          <span className="text-yellow-500 font-extrabold text-sm leading-none">”</span>
        </div>

        {/* Mouse Scroll Indicator */}
        <div className="flex flex-col items-center gap-1 mt-2 opacity-45">
          <div
            className={`w-5 h-8 rounded-full border-2 flex justify-center py-1.5 ${
              isDark ? 'border-white/30' : 'border-slate-400'
            }`}
          >
            <div className={`w-1 h-2 rounded-full scroll-indicator-icon ${isDark ? 'bg-white' : 'bg-slate-500'}`} />
          </div>
          <span
            className={`text-[7px] font-black tracking-[0.25em] uppercase ${
              isDark ? 'text-white/60' : 'text-slate-600'
            }`}
          >
            Scroll To Explore
          </span>
        </div>
      </footer>
    </section>
  );
};

export default SkillsPage;
