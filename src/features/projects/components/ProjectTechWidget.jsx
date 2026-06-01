import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import { projectConfig } from '../data/config';

/**
 * ProjectTechWidget — renders tech proficiency progress meters in the sidebar.
 * Includes a premium animated CTA link to "Explore Skills".
 */
const ProjectTechWidget = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();

  // Helper to map color names to Tailwind progress bar colors
  const getProgressBarColor = (color) => {
    switch (color) {
      case 'blue':
        return 'bg-gradient-to-r from-blue-500 to-sky-400';
      case 'violet':
        return 'bg-gradient-to-r from-violet-500 to-indigo-400';
      case 'emerald':
        return 'bg-gradient-to-r from-emerald-500 to-teal-400';
      case 'amber':
        return 'bg-gradient-to-r from-amber-500 to-yellow-400';
      case 'indigo':
      default:
        return 'bg-gradient-to-r from-indigo-500 to-purple-400';
    }
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
        Tech Stack Overview
      </h3>

      {/* Progress Bars */}
      <div className="flex flex-col gap-3.5">
        {projectConfig.techStackOverview.map((item) => (
          <div key={item.label} className="flex flex-col gap-1.5">
            {/* Label and Percentage */}
            <div className="flex items-center justify-between text-[10px] font-semibold tracking-wide">
              <span className={isDark ? 'text-white/70' : 'text-slate-600'}>
                {item.label}
              </span>
              <span className={isDark ? 'text-blue-300' : 'text-blue-600'}>
                {item.percentage}%
              </span>
            </div>

            {/* Progress Container */}
            <div
              className={`
                h-1.5 w-full rounded-full overflow-hidden
                ${isDark ? 'bg-white/[0.04]' : 'bg-slate-100'}
              `}
            >
              {/* Progress Value with transition */}
              <div
                className={`h-full rounded-full transition-all duration-1000 ${getProgressBarColor(item.color)}`}
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Explore Skills Link Card */}
      <button
        onClick={() => navigate('/skills')}
        className={`
          group border-t border-dashed mt-2 pt-3 flex items-center justify-between
          text-[10px] font-bold tracking-[0.12em] uppercase cursor-pointer w-full text-left
          transition-colors duration-200
          ${isDark ? 'border-white/10 text-blue-300 hover:text-blue-200' : 'border-slate-200 text-blue-600 hover:text-blue-500'}
        `}
      >
        <span>Explore Skills</span>
        <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-1" />
      </button>
    </div>
  );
};

export default ProjectTechWidget;
