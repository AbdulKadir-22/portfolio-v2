import { Star, ArrowRight } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';

/**
 * ProjectCard — displays project cover image, title, description, category badge, and tech stack icons.
 * Follows the high fidelity celestial design system.
 */
const ProjectCard = ({ project, onExplore, viewMode = 'grid' }) => {
  const { isDark } = useTheme();

  // Helper to render customized tech stack logos/badges
  const renderTechIcon = (tech) => {
    const name = tech.name.toLowerCase();
    
    // Custom SVG / Styled Renders for major tech logos
    if (name.includes('react')) {
      return (
        <span
          key={tech.name}
          title="React"
          className="w-6 h-6 rounded-md flex items-center justify-center bg-sky-500/10 border border-sky-400/20 text-sky-400"
        >
          <svg className="w-3.5 h-3.5 animate-spin-slow" viewBox="0 0 100 100" fill="none">
            <ellipse cx="50" cy="50" rx="8" ry="20" stroke="currentColor" strokeWidth="2" transform="rotate(0 50 50)" />
            <ellipse cx="50" cy="50" rx="8" ry="20" stroke="currentColor" strokeWidth="2" transform="rotate(60 50 50)" />
            <ellipse cx="50" cy="50" rx="8" ry="20" stroke="currentColor" strokeWidth="2" transform="rotate(120 50 50)" />
            <circle cx="50" cy="50" r="4" fill="currentColor" />
          </svg>
        </span>
      );
    }

    if (name.includes('next')) {
      return (
        <span
          key={tech.name}
          title="Next.js"
          className={`w-6 h-6 rounded-md flex items-center justify-center font-extrabold text-[10px] border
            ${isDark 
              ? 'bg-white/10 border-white/20 text-white' 
              : 'bg-slate-900 border-slate-800 text-white'
            }`}
        >
          N
        </span>
      );
    }

    if (name.includes('tailwind')) {
      return (
        <span
          key={tech.name}
          title="Tailwind CSS"
          className="w-6 h-6 rounded-md flex items-center justify-center bg-cyan-500/10 border border-cyan-400/20 text-cyan-400"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 6.018C13.8 3.618 16.5 2 20 2c3.5 0 4 3 4 3s-3.5-.5-5.5 2c-3 3.75-3.5 7.25-8 11.5-1.8 1.7-3.9 3.5-7.5 3.5-3.5 0-3-3-3-3s3.5.5 5.5-2c3-3.75 3.5-7.25 8-11.5z" />
          </svg>
        </span>
      );
    }

    if (name.includes('typescript')) {
      return (
        <span
          key={tech.name}
          title="TypeScript"
          className="w-6 h-6 rounded-md flex items-center justify-center bg-blue-600/10 border border-blue-500/20 text-blue-400 font-bold text-[9px]"
        >
          TS
        </span>
      );
    }

    if (name.includes('node')) {
      return (
        <span
          key={tech.name}
          title="Node.js"
          className="w-6 h-6 rounded-md flex items-center justify-center bg-emerald-500/10 border border-emerald-400/20 text-emerald-400"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.5l6.5 3.6v7.2L12 18.9l-6.5-3.6V8.1L12 4.5z"/>
          </svg>
        </span>
      );
    }

    if (name.includes('mongo')) {
      return (
        <span
          key={tech.name}
          title="MongoDB"
          className="w-6 h-6 rounded-md flex items-center justify-center bg-green-500/10 border border-green-400/20 text-green-400"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C11.5 2 6 7 6 12s4.5 9 6 10c1.5-1 6-5 6-10S12.5 2 12 2zm0 3c.5 1 2 4.5 2 7s-1.5 6-2 7.5V5z"/>
          </svg>
        </span>
      );
    }

    if (name.includes('mdx')) {
      return (
        <span
          key={tech.name}
          title="MDX"
          className="w-6 h-6 rounded-md flex items-center justify-center bg-purple-500/10 border border-purple-400/20 text-purple-400 font-extrabold text-[8px]"
        >
          MDX
        </span>
      );
    }

    if (name.includes('vite')) {
      return (
        <span
          key={tech.name}
          title="Vite"
          className="w-6 h-6 rounded-md flex items-center justify-center bg-amber-500/10 border border-amber-400/20 text-amber-400 font-extrabold text-[10px]"
        >
          V
        </span>
      );
    }

    // Default Fallback Logo (Text Initials)
    return (
      <span
        key={tech.name}
        title={tech.name}
        className={`w-6 h-6 rounded-md flex items-center justify-center text-[9px] font-semibold border
          ${isDark
            ? 'bg-white/[0.04] border-white/10 text-white/50'
            : 'bg-slate-100 border-slate-200 text-slate-500'
          }`}
      >
        {tech.logo || tech.name.substring(0, 2).toUpperCase()}
      </span>
    );
  };

  // Horizontal list layout morphed to look exactly like BlogCard
  if (viewMode === 'list') {
    return (
      <div
        onClick={onExplore}
        className={`
          group relative flex gap-4 sm:gap-5 p-4 rounded-xl border w-full
          transition-all duration-300 cursor-pointer
          ${isDark
            ? 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20 hover:shadow-lg hover:shadow-blue-950/20'
            : 'bg-white/60 border-slate-200/60 hover:bg-white/80 hover:border-slate-300 hover:shadow-lg hover:shadow-blue-100/30'
          }
        `}
      >
        {/* Cover Image (Landscape Thumbnail style like BlogCard) */}
        <div className="flex-shrink-0 w-[100px] h-[80px] sm:w-[135px] sm:h-[105px] rounded-lg overflow-hidden relative">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className={`w-full h-full flex items-center justify-center ${isDark ? 'bg-white/[0.03]' : 'bg-slate-100'}`}>
              <span className="text-[10px] opacity-40">No Preview</span>
            </div>
          )}
        </div>

        {/* Content Details Wrapper */}
        <div className="flex-1 flex flex-col justify-between min-w-0">
          {/* Top Row: Category Badge + Starred Indicator */}
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1.5">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  backgroundColor: project.badge.toLowerCase().includes('stack')
                    ? '#a855f7'
                    : project.badge.toLowerCase().includes('app')
                    ? '#eab308'
                    : '#06b6d4'
                }}
              />
              <span
                className="text-[9px] sm:text-[10px] font-bold tracking-[0.15em] uppercase"
                style={{
                  color: project.badge.toLowerCase().includes('stack')
                    ? '#a855f7'
                    : project.badge.toLowerCase().includes('app')
                    ? '#eab308'
                    : '#06b6d4'
                }}
              >
                {project.badge}
              </span>
            </div>

            {project.starred && (
              <span className="text-amber-400">
                <Star size={12} fill="currentColor" />
              </span>
            )}
          </div>

          {/* Title */}
          <h3
            className={`
              text-sm sm:text-[15px] font-bold leading-snug mb-1 line-clamp-1
              transition-colors duration-200
              ${isDark ? 'text-white group-hover:text-blue-300' : 'text-slate-800 group-hover:text-blue-600'}
            `}
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p
            className={`
              text-[11px] sm:text-xs leading-relaxed line-clamp-1 sm:line-clamp-2 mb-2
              ${isDark ? 'text-white/50' : 'text-slate-500'}
            `}
          >
            {project.description}
          </p>

          {/* Bottom Row: Tech Stack and Circular Explore CTA */}
          <div className="flex items-center justify-between border-t border-dashed pt-2 border-white/5 mt-1">
            <div className="flex items-center gap-1.5">
              {project.techStack.map((tech) => renderTechIcon(tech))}
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onExplore();
              }}
              className={`
                w-6.5 h-6.5 rounded-full flex items-center justify-center border cursor-pointer
                transition-all duration-300
                ${isDark
                  ? 'bg-blue-500/10 border-blue-500/30 text-blue-300 hover:bg-blue-500 hover:border-blue-400 hover:text-white'
                  : 'bg-blue-50 border-blue-200 text-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-white'
                }
              `}
            >
              <ArrowRight size={11} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onExplore}
      className={`
        relative group rounded-2xl border flex flex-col overflow-hidden
        transition-all duration-300 cursor-pointer
        ${isDark
          ? 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04] hover:shadow-xl hover:shadow-blue-950/20'
          : 'bg-white/70 border-slate-200/80 hover:border-blue-200 hover:bg-white/90 hover:shadow-xl hover:shadow-blue-100/30'
        }
      `}
    >
      {/* Cover Image Container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div
            className={`
              w-full h-full flex items-center justify-center
              ${isDark ? 'bg-white/[0.03]' : 'bg-slate-100'}
            `}
          >
            <span className={isDark ? 'text-white/20' : 'text-slate-300'}>No Preview</span>
          </div>
        )}

        {/* Backdrop overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

        {/* Starred indicator */}
        {project.starred && (
          <div className="absolute top-3 left-3 bg-black/45 backdrop-blur-md border border-white/10 p-1.5 rounded-lg text-amber-400">
            <Star size={11} fill="currentColor" />
          </div>
        )}

        {/* Badge Indicator */}
        <span
          className={`
            absolute top-3 right-3 text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full backdrop-blur-md border
            ${project.badge.toLowerCase().includes('stack')
              ? 'bg-violet-500/10 border-violet-500/30 text-violet-300'
              : project.badge.toLowerCase().includes('app')
              ? 'bg-amber-500/10 border-amber-500/30 text-amber-300'
              : 'bg-purple-500/10 border-purple-500/30 text-purple-300'
            }
          `}
        >
          {project.badge}
        </span>
      </div>

      {/* Details Container */}
      <div className="p-4 flex-1 flex flex-col justify-between gap-3">
        <div>
          {/* Title & Star Icon */}
          <div className="flex items-center gap-1.5 mb-1.5">
            <h3
              className={`
                text-sm sm:text-base font-semibold tracking-wide transition-colors duration-200
                ${isDark ? 'text-white group-hover:text-blue-300' : 'text-slate-800 group-hover:text-blue-600'}
              `}
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              {project.title}
            </h3>
            <Star size={11} className="text-amber-400" fill="currentColor" />
          </div>

          {/* Excerpt */}
          <p
            className={`
              text-xs leading-relaxed line-clamp-2
              ${isDark ? 'text-white/60' : 'text-slate-500'}
            `}
          >
            {project.description}
          </p>
        </div>

        {/* Bottom Panel */}
        <div className="flex items-center justify-between border-t border-dashed mt-1 pt-3 border-white/10">
          {/* Tech Stack Icons */}
          <div className="flex items-center gap-1.5">
            {project.techStack.map((tech) => renderTechIcon(tech))}
          </div>

          {/* Action Circular Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onExplore();
            }}
            className={`
              w-6.5 h-6.5 rounded-full flex items-center justify-center border cursor-pointer
              transition-all duration-300
              ${isDark
                ? 'bg-blue-500/10 border-blue-500/30 text-blue-300 hover:bg-blue-500 hover:border-blue-400 hover:text-white hover:shadow-lg hover:shadow-blue-500/20'
                : 'bg-blue-50 border-blue-200 text-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/20'
              }
            `}
          >
            <ArrowRight size={11} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
