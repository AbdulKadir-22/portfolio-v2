import { LayoutGrid, List } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import { projectConfig } from '../data/config';

/**
 * ProjectFilters — displays category pill filters and layout view toggles (grid vs. list).
 * Perfectly matches the design mockup styling.
 */
const ProjectFilters = ({ activeCategory, onCategorySelect, viewMode, onViewModeChange }) => {
  const { isDark } = useTheme();

  return (
    <div
      id="project-filters"
      className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full"
    >
      {/* Category Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
        {projectConfig.categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onCategorySelect(cat.id)}
              className={`
                px-4 py-2 rounded-xl text-[10px] font-bold tracking-[0.1em] uppercase whitespace-nowrap cursor-pointer
                transition-all duration-300
                ${isActive
                  ? isDark
                    ? 'bg-blue-500/15 border border-blue-400/30 text-blue-300'
                    : 'bg-blue-600 border border-blue-600 text-white shadow-sm'
                  : isDark
                    ? 'bg-white/[0.02] border border-white/5 text-white/40 hover:bg-white/[0.04] hover:text-white/60'
                    : 'bg-white/40 border border-slate-200/50 text-slate-500 hover:bg-white/80 hover:text-slate-700'
                }
              `}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid vs. List View Toggle Buttons */}
      <div
        className={`
          flex items-center p-1 rounded-xl border self-end sm:self-auto
          ${isDark ? 'bg-white/[0.02] border-white/10' : 'bg-white/40 border-slate-200/60 shadow-sm'}
        `}
      >
        {/* Grid Button */}
        <button
          onClick={() => onViewModeChange('grid')}
          className={`
            p-2 rounded-lg cursor-pointer transition-all duration-200
            ${viewMode === 'grid'
              ? isDark
                ? 'bg-white/10 text-white shadow-sm'
                : 'bg-slate-200 text-slate-800 shadow-sm'
              : 'text-slate-400 hover:text-slate-600'
            }
          `}
          title="Grid View"
        >
          <LayoutGrid size={13} />
        </button>

        {/* List Button */}
        <button
          onClick={() => onViewModeChange('list')}
          className={`
            p-2 rounded-lg cursor-pointer transition-all duration-200
            ${viewMode === 'list'
              ? isDark
                ? 'bg-white/10 text-white shadow-sm'
                : 'bg-slate-200 text-slate-800 shadow-sm'
              : 'text-slate-400 hover:text-slate-600'
            }
          `}
          title="List View"
        >
          <List size={13} />
        </button>
      </div>
    </div>
  );
};

export default ProjectFilters;
