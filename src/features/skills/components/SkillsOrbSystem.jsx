import { useState, useEffect } from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { skillsData } from '../data/skillsData';
import { siteContent } from '../../../data/content';
import skillsCenterPlanet from '../../../assets/skills/skills.png';

/**
 * SkillsOrbSystem — renders the astronomical orbits, central sun, and fanned-out planets.
 */
const SkillsOrbSystem = ({ activeId, onSelectCategory }) => {
  const { isDark } = useTheme();
  const [radius, setRadius] = useState(230);

  // Map category ID to its primary glow color
  const getGlowColor = (id) => {
    switch (id) {
      case 'frontend':
        return 'rgba(234, 179, 8, 0.7)';
      case 'backend':
        return 'rgba(34, 197, 94, 0.7)';
      case 'databases':
        return 'rgba(59, 130, 246, 0.7)';
      case 'tools-devops':
        return 'rgba(217, 119, 6, 0.7)';
      case 'ai-ml':
        return 'rgba(139, 92, 246, 0.7)';
      default:
        return 'rgba(255, 255, 255, 0.5)';
    }
  };

  // Keep orbit radius responsive to viewport width
  useEffect(() => {
    const updateRadius = () => {
      const w = window.innerWidth;
      if (w < 370) {
        setRadius(115);
      } else if (w < 480) {
        setRadius(140);
      } else if (w < 640) {
        setRadius(165);
      } else if (w < 768) {
        setRadius(185);
      } else if (w < 1024) {
        setRadius(215);
      } else if (w < 1280) {
        setRadius(230);
      } else if (w < 1440) {
        setRadius(250);
      } else {
        setRadius(285);
      }
    };
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  return (
    <div
      className="relative flex items-center justify-center select-none"
      style={{
        width: `${radius * 2.8}px`,
        height: `${radius * 2.8}px`,
        maxWidth: '100%',
        aspectRatio: '1/1',
      }}
    >
      {/* ── Outer Space Orbital Rings (Depth representation) ── */}
      {[0.7, 1.0, 1.3].map((scale, i) => (
        <div
          key={i}
          className={`absolute rounded-full border border-dashed pointer-events-none transition-colors duration-700 ${
            isDark ? 'border-white/5' : 'border-blue-200/20'
          }`}
          style={{
            width: `${radius * 2 * scale}px`,
            height: `${radius * 2 * scale}px`,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 1 - i * 0.25,
          }}
        />
      ))}

      {/* ── Central Sun (skills.png) ── */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full z-30 flex flex-col items-center justify-center text-center pointer-events-none"
        style={{
          width: `${radius * 2.4}px`,
          height: `${radius * 2.4}px`,
          minWidth: '155px',
          minHeight: '155px',
          maxWidth: '280px',
          maxHeight: '280px',
        }}
      >
        {/* Central Planet Image (Sun) */}
        <img
          src={skillsCenterPlanet}
          alt="Central Star"
          className="w-full h-full object-contain mix-blend-screen absolute inset-0"
          style={{
            filter: isDark
              ? 'brightness(1.1)'
              : 'none',
          }}
        />

        {/* Text Details Direct Overlay */}
        <div className="relative z-10 px-3 select-none flex flex-col items-center justify-center w-[90%] pointer-events-none">
          <h2
            className="text-[8px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] font-black tracking-widest text-[#0c2445] leading-tight uppercase"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            {siteContent.personal.name}
          </h2>
          <div className="h-[1px] w-[55%] bg-[#0c2445]/20 my-1 md:my-1.5" />
          <p className="text-[4px] sm:text-[6px] md:text-[7px] lg:text-[7.5px] xl:text-[8.5px] font-black tracking-[0.16em] text-[#0c2445] leading-none uppercase">
            {siteContent.personal.title.replace(/ · /g, ' • ')}
          </p>
        </div>
      </div>

      {/* ── Orbiting Planets ── */}
      {skillsData.map((category, index) => {
        const angle = category.angle;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        const isSelected = activeId === category.id;

        const isRightAligned = ['frontend', 'backend', 'databases'].includes(category.id);

        return (
          <div
            key={category.id}
            className="absolute z-20"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
            }}
          >
            <div
              className="orbit-item"
              style={{
                animationDelay: `${index * 0.7}s`,
              }}
            >
              <div
                onClick={() => onSelectCategory(category.id)}
                className={`
                  flex group cursor-pointer transition-all duration-300 select-none
                  ${
                    isRightAligned
                      ? 'flex-col sm:flex-row sm:items-center text-center sm:text-left gap-1 sm:gap-3.5'
                      : 'flex-col items-center text-center gap-1.5'
                  }
                `}
              >
                {/* Planet Image Sphere Container */}
                <div
                  className={`
                    relative rounded-full transition-all duration-500 flex items-center justify-center
                    w-16 h-16 sm:w-20 sm:h-20 lg:w-20 lg:h-20 xl:w-24 xl:h-24
                    ${
                      isSelected
                        ? 'scale-110 sm:scale-115 ring-2 ring-yellow-400/40'
                        : 'hover:scale-105 active:scale-95'
                    }
                  `}
                >
                  <img
                    src={category.planet}
                    alt={category.title}
                    className={`
                      w-full h-full object-contain transition-all duration-500 mix-blend-screen
                      ${isSelected ? 'brightness-[1.15] contrast-[1.05]' : 'opacity-85 hover:opacity-100'}
                    `}
                  />
                </div>

                {/* Label Details */}
                <div
                  className={`
                    flex flex-col whitespace-nowrap transition-all duration-300
                    ${
                      isSelected
                        ? 'opacity-100 scale-100'
                        : 'opacity-70 group-hover:opacity-100 group-hover:scale-102'
                    }
                  `}
                >
                  <h3
                    className={`
                      text-[8px] sm:text-[9px] md:text-[10px] lg:text-[10px] xl:text-[11px] font-black tracking-wider uppercase
                      ${
                        isSelected
                          ? isDark
                            ? 'text-yellow-300'
                            : 'text-blue-700 font-bold'
                          : isDark
                          ? 'text-white'
                          : 'text-slate-800'
                      }
                    `}
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    {category.title.replace(' Development', '').replace(' & DevOps', '')}
                  </h3>
                  <p
                    className={`
                      text-[6px] sm:text-[7px] md:text-[8px] lg:text-[8px] xl:text-[9px] font-semibold tracking-tight
                      ${isDark ? 'text-white/40' : 'text-slate-400'}
                    `}
                  >
                    {category.count}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsOrbSystem;