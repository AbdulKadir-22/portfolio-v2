import { useState, useMemo } from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { projects, projectConfig } from '../data/config';
import ProjectCard from '../components/ProjectCard';
import ProjectFilters from '../components/ProjectFilters';
import ProjectStatsWidget from '../components/ProjectStatsWidget';
import ProjectTechWidget from '../components/ProjectTechWidget';
import { ChevronDown, ExternalLink, X, Eye } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

/**
 * ProjectsPage — renders the full projects catalog with categories filter, grid/list layout controls,
 * sidebar statistics, tech stack, and interactive previews.
 */
const ProjectsPage = () => {
  const { isDark } = useTheme();

  // State
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const displayedProjects = useMemo(() => {
    return filteredProjects.slice(0, visibleCount);
  }, [filteredProjects, visibleCount]);

  const handleExploreProject = (project) => {
    setSelectedProject(project);
  };

  const handleLoadMore = () => {
    // Show premium animation or increase visible count
    setVisibleCount((prev) => Math.min(projects.length, prev + 3));
  };

  return (
    <section
      id="projects-page"
      className="w-full max-w-[98vw] xl:max-w-[1650px] mx-auto px-4 flex flex-col items-center gap-6 py-4"
    >
      {/* Page Title */}
      <header className="flex items-center gap-4 mb-2">
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
          className="text-2xl sm:text-3xl md:text-4xl tracking-wider"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: 700,
            color: isDark ? '#e2e8f0' : '#1e3a5f',
          }}
        >
          {projectConfig.pageTitle}
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

      {/* Subtitle */}
      <p
        className={`
          text-xs sm:text-sm tracking-wide -mt-4 mb-2 text-center max-w-xl
          ${isDark ? 'text-white/50' : 'text-slate-500'}
        `}
      >
        {projectConfig.pageSubtitle}
      </p>

      {/* Two-column layout matching design mockup */}
      <div className="w-full lg:pl-[210px] xl:pl-[240px] flex flex-col lg:flex-row gap-10 items-start justify-between">
        
        {/* Left Column: Filters + Projects Catalog Grid (Takes 74% / 76%) */}
        <div className="w-full lg:w-[74%] xl:w-[76%] flex-shrink-0 flex flex-col gap-5">
          {/* Layout Filters (Category pills + Grid/List triggers) */}
          <ProjectFilters
            activeCategory={activeCategory}
            onCategorySelect={setActiveCategory}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
          />

          {/* Project List / Grid Container */}
          {displayedProjects.length > 0 ? (
            <div
              className={`
                grid gap-5 w-full
                ${viewMode === 'grid'
                  ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'
                  : 'grid-cols-1'
                }
              `}
            >
              {displayedProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  viewMode={viewMode}
                  onExplore={() => handleExploreProject(project)}
                />
              ))}
            </div>
          ) : (
            <div
              className={`
                text-center py-16 rounded-xl border
                ${isDark
                  ? 'bg-white/[0.02] border-white/10 text-white/40'
                  : 'bg-white/40 border-slate-200/60 text-slate-400'
                }
              `}
            >
              <p className="text-sm font-medium">No projects found in this category</p>
              <p className="text-xs mt-1 opacity-60">Try selecting another filter</p>
            </div>
          )}

          {/* View More Button */}
          {filteredProjects.length > displayedProjects.length && (
            <button
              onClick={handleLoadMore}
              className={`
                self-center flex items-center gap-1.5 px-6 py-2.5 rounded-xl border text-[10px] font-bold tracking-[0.1em] uppercase cursor-pointer
                transition-all duration-300 mt-4
                ${isDark
                  ? 'bg-white/[0.02] border-white/10 text-white/60 hover:bg-white/[0.06] hover:text-white/80 hover:border-white/20'
                  : 'bg-white/50 border-slate-200 text-slate-500 hover:bg-white hover:text-slate-800 hover:border-slate-300 hover:shadow-sm'
                }
              `}
            >
              View More Projects
            </button>
          )}

          {/* Scroll to Explore Helper */}
          <div className="flex flex-col items-center gap-1 mt-6 text-slate-400 opacity-60">
            <svg
              className="w-5 h-5 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <span className="text-[9px] font-bold tracking-[0.2em] uppercase">Scroll To Explore</span>
          </div>
        </div>

        {/* Right Column: Stats + Tech stack progress widgets (Pushed far right) */}
        <div className="w-full lg:w-[25%] xl:w-[23%] lg:max-w-[300px] flex-shrink-0 lg:ml-auto flex flex-col gap-4">
          <ProjectStatsWidget />
          <ProjectTechWidget />
        </div>
      </div>

      {/* ── High-Fidelity Project Details Modal (Prepares path for detailed route) ── */}
      {selectedProject && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          {/* Modal Backdrop overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
            onClick={() => setSelectedProject(null)}
          />

          {/* Modal Body Container */}
          <div
            className={`
              relative w-full max-w-2xl rounded-2xl border overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-200
              ${isDark ? 'bg-slate-950/90 border-white/10 text-white' : 'bg-white/95 border-slate-200 text-slate-800'}
            `}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className={`
                absolute top-3 right-3 z-10 p-1.5 rounded-lg border cursor-pointer
                transition-all duration-200
                ${isDark
                  ? 'bg-black/30 border-white/10 text-white/60 hover:bg-black/60 hover:text-white'
                  : 'bg-slate-100 border-slate-200 text-slate-500 hover:bg-slate-200 hover:text-slate-800'
                }
              `}
            >
              <X size={15} />
            </button>

            {/* Banner Cover Image */}
            <div className="w-full aspect-[16/8] overflow-hidden relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              
              {/* Category Badge */}
              <span
                className={`
                  absolute bottom-3 left-4 text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full backdrop-blur-md border
                  ${selectedProject.badge.toLowerCase().includes('stack')
                    ? 'bg-violet-500/20 border-violet-500/40 text-violet-300'
                    : selectedProject.badge.toLowerCase().includes('app')
                    ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                    : 'bg-purple-500/20 border-purple-500/40 text-purple-300'
                  }
                `}
              >
                {selectedProject.badge}
              </span>
            </div>

            {/* Modal Content Details */}
            <div className="p-6 flex flex-col gap-4">
              <div>
                <h2
                  className="text-xl sm:text-2xl font-bold tracking-wide mb-1"
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  {selectedProject.title}
                </h2>
                <p className={`text-xs ${isDark ? 'text-white/40' : 'text-slate-400'}`}>
                  Project Case Study & Overview
                </p>
              </div>

              {/* Description */}
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
                {selectedProject.description} Heavy production architecture with state managers, optimized routers, customized API bindings, and gorgeous layouts completely responsive on all platforms.
              </p>

              {/* Tech Stack Specs */}
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Built With
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech.name}
                      className={`
                        text-[10px] px-2.5 py-1.5 rounded-lg border font-semibold flex items-center gap-1.5
                        ${isDark
                          ? 'bg-white/[0.04] border-white/10 text-white/70'
                          : 'bg-slate-50 border-slate-200 text-slate-600'
                        }
                      `}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link CTAs */}
              <div className="flex items-center gap-3 border-t border-dashed mt-2 pt-4 border-white/10">
                {/* Live Demo URL */}
                <a
                  href={`https://demo.shaikh.dev/${selectedProject.id}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`
                    flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest border transition-all duration-300
                    ${isDark
                      ? 'bg-blue-600 hover:bg-blue-500 border-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/20'
                      : 'bg-blue-600 hover:bg-blue-700 border-blue-600 text-white hover:shadow-lg hover:shadow-blue-600/20'
                    }
                  `}
                >
                  <Eye size={12} />
                  Live Preview
                </a>

                {/* Source Code Git Link */}
                <a
                  href={`https://github.com/AbdulKadir-22/${selectedProject.id}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`
                    flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest border transition-all duration-300
                    ${isDark
                      ? 'bg-white/[0.02] border-white/10 text-white/60 hover:bg-white/[0.06] hover:text-white'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-800'
                    }
                  `}
                >
                  <FaGithub size={12} />
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsPage;
