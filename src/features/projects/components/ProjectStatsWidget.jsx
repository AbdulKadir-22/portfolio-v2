import { Layers, Terminal, Award } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import { projectConfig } from '../data/config';

/**
 * ProjectStatsWidget — renders stats in the sidebar (Projects Built, Full Stack, Open Source).
 * Fits the celestial portfolio aesthetics.
 */
const ProjectStatsWidget = () => {
  const { isDark } = useTheme();

  // Helper to map color string to CSS class names
  const getColorClasses = (color) => {
    switch (color) {
      case 'purple':
        return {
          bg: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
          dot: 'bg-purple-500'
        };
      case 'cyan':
        return {
          bg: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
          dot: 'bg-cyan-500'
        };
      case 'gold':
      default:
        return {
          bg: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
          dot: 'bg-amber-500'
        };
    }
  };

  // Helper to map stat icons
  const getIcon = (label) => {
    const term = label.toLowerCase();
    if (term.includes('built')) return <Award size={15} />;
    if (term.includes('stack')) return <Layers size={15} />;
    return <Terminal size={15} />;
  };

  return (
    <div
      className={`
        rounded-2xl border p-4 flex flex-col gap-4
        ${isDark
          ? 'bg-white/[0.02] border-white/10 backdrop-blur-md'
          : 'bg-white/60 border-slate-200/80 backdrop-blur-md shadow-sm'
        }
      `}
    >
      {/* Title */}
      <h3
        className={`
          text-[10px] font-bold tracking-[0.15em] uppercase
          ${isDark ? 'text-white/40' : 'text-slate-400'}
        `}
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        Project Stats
      </h3>

      {/* Stats List */}
      <div className="flex flex-col gap-3.5">
        {projectConfig.stats.map((stat) => {
          const colors = getColorClasses(stat.color);
          return (
            <div key={stat.label} className="flex items-center gap-3">
              {/* Colored Glassmorphic Icon Wrapper */}
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center border ${colors.bg}`}>
                {getIcon(stat.label)}
              </div>

              {/* Counts & Label */}
              <div className="flex flex-col">
                <span
                  className={`
                    text-base font-bold leading-tight tracking-wider
                    ${isDark ? 'text-white' : 'text-slate-800'}
                  `}
                >
                  {stat.value}
                </span>
                <span
                  className={`
                    text-[10px] font-medium opacity-80
                    ${isDark ? 'text-white/40' : 'text-slate-400'}
                  `}
                >
                  {stat.label}
                </span>
              </div>

              {/* Status Glow Dot (Far Right) */}
              <div className="ml-auto flex items-center">
                <span className={`w-2 h-2 rounded-full ${colors.dot} animate-pulse shadow-[0_0_8px_currentColor]`} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectStatsWidget;
