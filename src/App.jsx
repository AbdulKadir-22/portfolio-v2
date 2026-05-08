import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from './components/ThemeToggle';
import StatusCard from './components/StatusCard';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import { Orbit } from 'lucide-react';
import lightBg from './assets/background/light-bg.png';
import darkBg from './assets/background/dark-bg.png';
import earthIcon from './assets/icons/earth.png';
import meteorImg from './assets/meteors/meteor.png';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });
  const [isMobile, setIsMobile] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  
  // Derive current page from path
  const path = location.pathname.slice(1).toUpperCase();
  const currentPage = path === '' ? 'HOME' : path;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const pageTitle = currentPage.charAt(0) + currentPage.slice(1).toLowerCase();
    document.title = `${pageTitle} - Abdulkadir Shaikh`;
  }, [currentPage]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const meteorImage = meteorImg;

  return (
    <main className="relative min-h-screen w-full overflow-hidden font-['Inter',system-ui,sans-serif]">
      {/* Background Layers for Smooth Transition */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}
        style={{ backgroundImage: `url(${lightBg})` }}
      />
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
        style={{ backgroundImage: `url(${darkBg})` }}
      />

      {/* Content Layer */}
      <div className="relative z-10 w-full h-screen">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-0 w-[44vw] min-w-[320px] max-w-[720px] overflow-hidden">
          <img
            src={meteorImage}
            alt=""
            className="meteor-piece meteor-piece-lg hidden lg:block"
          />
          <img
            src={meteorImage}
            alt=""
            className="meteor-piece meteor-piece-sm meteor-piece-sm-top"
          />
          <img
            src={meteorImage}
            alt=""
            className="meteor-piece meteor-piece-sm meteor-piece-sm-upper"
          />
        </div>

        {/* Main Interface Layout */}
        <div className="relative h-full w-full flex items-center justify-center px-[4%]">
          {/* Navigation Section (Positioned Left) */}
          <div className="absolute left-[-5%] lg:left-0 top-1/2 -translate-y-1/2 w-full lg:w-[500px] h-full pointer-events-none lg:pointer-events-auto z-20">
            <div className="pointer-events-auto h-full">
              <Navigation theme={theme} currentPage={currentPage} onPageChange={(page) => {
                console.log('App received page change:', page);
                navigate(page === 'HOME' ? '/' : `/${page.toLowerCase()}`);
              }} />
            </div>
          </div>

          {/* Content Section (Centered) */}
          <div className="relative z-10">
            <Routes>
              <Route path="/" element={<Hero theme={theme} />} />
              {['ABOUT', 'SKILLS', 'PROJECTS', 'EXPERIENCE', 'CONTACT'].map((page) => (
                <Route 
                  key={page} 
                  path={`/${page.toLowerCase()}`} 
                  element={
                    <div className={`text-center ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                      <h1 className="text-4xl md:text-5xl font-black mb-2 tracking-wider">{page}</h1>
                      <p className={`text-xs uppercase tracking-[0.3em] font-light ${theme === 'dark' ? 'text-white/60' : 'text-blue-600/70'}`}>
                        Page Under Construction
                      </p>
                      <button 
                        onClick={() => navigate('/')}
                        className={`mt-6 px-4 py-2 border rounded-full text-xs font-bold tracking-widest transition-colors ${
                          theme === 'dark' 
                            ? 'border-white text-white hover:bg-white hover:text-black' 
                            : 'border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white'
                        }`}
                      >
                        BACK TO HOME
                      </button>
                    </div>
                  } 
                />
              ))}
            </Routes>
          </div>
        </div>

        {/* Bottom Left: Location Card (Moved to top right on mobile to avoid overlap) */}
        <StatusCard
          theme={theme}
          imageSrc={earthIcon}
          label="LOCATION"
          status="Earth"
          subtext="Milky Way"
          showDot={false}
          position={isMobile ? "top-right" : "bottom-left"}
        />

        {/* Bottom Right: Status Card (Hidden on mobile) */}
        <div className="hidden lg:block">
          <StatusCard
            theme={theme}
            icon={Orbit}
            status="Dreaming"
            subtext="Building · Learning · Growing"
            position="bottom-right"
          />
        </div>
      </div>
    </main>
  );
}

export default App;


