import { useNavigate } from 'react-router-dom';
import { Star, MoreHorizontal, ArrowRight, ChevronLeft, BarChart2 } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import { projects } from '../../projects/data/config';

/**
 * SkillDetailsCard — interactive card showing detailed proficiency, technologies, and projects.
 */
const SkillDetailsCard = ({ category, onBack }) => {
  const { isDark } = useTheme();
  const navigate = useNavigate();

  if (!category) return null;

  // Filter project database to get project info for the featured projects listed
  const featuredList = projects.filter((p) => category.featuredProjects.includes(p.id));

  return (
    <div
      className={`
        w-full rounded-2xl border p-5 flex flex-col gap-5 transition-all duration-500
        ${
          isDark
            ? 'bg-black/25 border-white/10 backdrop-blur-lg text-white shadow-[0_4px_30px_rgba(0,0,0,0.2)]'
            : 'bg-white/85 border-slate-200/90 backdrop-blur-lg text-slate-800 shadow-xl shadow-slate-100/50'
        }
      `}
    >
      {/* ── Card Header ── */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3.5 min-w-0">
          {/* Mobile Back Button (Only visible on mobile/tablet) */}
          {onBack && (
            <button
              onClick={onBack}
              className={`
                lg:hidden p-1.5 rounded-full border cursor-pointer transition-colors duration-200
                ${isDark ? 'border-white/10 hover:bg-white/5 text-white/70' : 'border-slate-200 hover:bg-slate-50 text-slate-600'}
              `}
              aria-label="Back to planets"
            >
              <ChevronLeft size={16} />
            </button>
          )}

          {/* Category Planet Icon */}
          <div
            className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center p-0.5"
            style={{
              background: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
              border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.05)',
            }}
          >
            <img
              src={category.planet}
              alt={category.title}
              className="w-full h-full object-contain planet-animation"
              style={{ animationDuration: '40s' }}
            />
          </div>

          {/* Title and Badge */}
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <h2
                className={`
                  text-sm sm:text-base font-bold tracking-wide leading-tight truncate
                  ${isDark ? 'text-white' : 'text-slate-900'}
                `}
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                {category.title}
              </h2>
              <span className="text-amber-400 flex-shrink-0">
                <Star size={12} fill="currentColor" />
              </span>
            </div>
            <p className={`text-[9px] font-semibold mt-0.5 ${isDark ? 'text-white/40' : 'text-slate-400'}`}>
              {category.count}
            </p>
          </div>
        </div>

        {/* Action button */}
        <button
          className={`
            p-1.5 rounded-lg border transition-colors duration-200 cursor-pointer flex-shrink-0
            ${isDark ? 'border-white/10 hover:bg-white/5 text-white/50' : 'border-slate-200 hover:bg-slate-50 text-slate-400'}
          `}
        >
          <MoreHorizontal size={14} />
        </button>
      </div>

      {/* ── Category Description ── */}
      <p className={`text-xs leading-relaxed -mt-1 ${isDark ? 'text-white/60' : 'text-slate-500'}`}>
        {category.description}
      </p>

      {/* ── Section: Proficiency ── */}
      <div className="flex flex-col gap-3.5">
        <div className="flex items-center justify-between border-b border-dashed pb-1.5 border-white/5">
          <h4
            className={`text-[9px] font-black tracking-[0.15em] uppercase ${
              isDark ? 'text-white/40' : 'text-slate-400'
            }`}
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Proficiency
          </h4>
          <BarChart2 size={12} className={isDark ? 'text-white/30' : 'text-slate-400'} />
        </div>

        <div className="flex flex-col gap-3">
          {category.proficiencies.map((item) => (
            <div key={item.name} className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-[10px] font-bold tracking-wide">
                <span className={isDark ? 'text-white/80' : 'text-slate-600'}>{item.name}</span>
                <span className={isDark ? 'text-yellow-400' : 'text-blue-600'}>{item.percentage}%</span>
              </div>
              {/* Progress Bar Track */}
              <div className={`h-1.5 w-full rounded-full overflow-hidden ${isDark ? 'bg-white/[0.04]' : 'bg-slate-100'}`}>
                {/* Progress Bar Value */}
                <div
                  className={`
                    h-full rounded-full transition-all duration-1000 ease-out
                    ${
                      isDark
                        ? 'bg-gradient-to-r from-amber-500 to-yellow-400 shadow-[0_0_8px_rgba(234,179,8,0.25)]'
                        : 'bg-gradient-to-r from-blue-600 to-sky-500'
                    }
                  `}
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Section: Technologies ── */}
      <div className="flex flex-col gap-3">
        <h4
          className={`
            text-[9px] font-black tracking-[0.15em] uppercase border-b border-dashed pb-1.5
            ${isDark ? 'text-white/40 border-white/5' : 'text-slate-400 border-slate-200'}
          `}
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Technologies
        </h4>

        {/* Technology Tag Cloud */}
        <div className="flex flex-wrap gap-2">
          {category.technologies.map((tech) => {
            const Icon = tech.icon;
            const iconColor = isDark
              ? tech.darkColor || tech.color
              : tech.lightColor || tech.color;

            return (
              <div
                key={tech.name}
                className={`
                  flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-[10px] font-semibold tracking-wide select-none
                  ${
                    isDark
                      ? 'bg-white/[0.02] border-white/5 text-white/80'
                      : 'bg-slate-100/60 border-slate-200/50 text-slate-700'
                  }
                `}
              >
                {Icon && <Icon size={13} style={{ color: iconColor }} className="flex-shrink-0" />}
                <span>{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Section: Featured Projects ── */}
      <div className="flex flex-col gap-3">
        <h4
          className={`
            text-[9px] font-black tracking-[0.15em] uppercase border-b border-dashed pb-1.5
            ${isDark ? 'text-white/40 border-white/5' : 'text-slate-400 border-slate-200'}
          `}
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Featured Projects Using This Skill
        </h4>

        <div className="flex flex-col gap-2.5">
          {featuredList.map((project) => (
            <div
              key={project.id}
              onClick={() => navigate(`/project/${project.id}`)}
              className={`
                group flex items-center justify-between p-2 rounded-xl border cursor-pointer transition-all duration-300
                ${
                  isDark
                    ? 'bg-white/[0.01] border-white/5 hover:bg-white/[0.04] hover:border-white/10 hover:shadow-md'
                    : 'bg-slate-50/40 border-slate-200/30 hover:bg-white hover:border-slate-200 hover:shadow-sm'
                }
              `}
            >
              {/* Thumbnail + Text Info */}
              <div className="flex items-center gap-3 min-w-0">
                {/* Thumbnail Image */}
                <div className="w-12 h-9 rounded-md overflow-hidden bg-black/10 flex-shrink-0 border border-white/5">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[7px] opacity-40">No Image</div>
                  )}
                </div>

                {/* Title and Short Description */}
                <div className="min-w-0">
                  <h5
                    className={`
                      text-[11px] font-black tracking-wide leading-none truncate
                      ${isDark ? 'text-white group-hover:text-yellow-400' : 'text-slate-800 group-hover:text-blue-600'}
                    `}
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    {project.title}
                  </h5>
                  <p className={`text-[9px] truncate mt-1 ${isDark ? 'text-white/40' : 'text-slate-400'}`}>
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Action arrow */}
              <button
                className={`
                  p-1 rounded-full border cursor-pointer transition-all duration-300 flex-shrink-0
                  ${
                    isDark
                      ? 'border-white/5 text-white/40 group-hover:border-white/15 group-hover:text-yellow-400 group-hover:translate-x-0.5'
                      : 'border-slate-200/50 text-slate-400 group-hover:border-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5'
                  }
                `}
              >
                <ArrowRight size={10} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ── Footer Link: View All Projects ── */}
      <button
        onClick={() => navigate('/projects')}
        className={`
          group border-t border-dashed pt-3.5 flex items-center justify-center gap-1.5 cursor-pointer
          text-[10px] font-black tracking-[0.15em] uppercase w-full text-center transition-colors duration-200
          ${
            isDark
              ? 'border-white/5 text-yellow-400/80 hover:text-yellow-300'
              : 'border-slate-200 text-blue-600 hover:text-blue-500'
          }
        `}
      >
        <span>View All Projects</span>
        <ArrowRight size={11} className="transition-transform duration-200 group-hover:translate-x-1" />
      </button>
    </div>
  );
};

export default SkillDetailsCard;
