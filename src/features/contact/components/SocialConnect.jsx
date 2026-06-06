import { createElement } from 'react';
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram, FaDev } from 'react-icons/fa6';
import { useTheme } from '../../../context/ThemeContext';
import { contactConfig } from '../data/config';

// Map icon string IDs to React Icons components
const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  twitter: FaXTwitter,
  instagram: FaInstagram,
  devto: FaDev
};

const SocialConnect = () => {
  const { isDark } = useTheme();

  return (
    <div
      className={`
        w-full rounded-2xl p-6 border backdrop-blur-md transition-all duration-300
        ${isDark 
          ? 'bg-black/40 border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]' 
          : 'bg-white/40 border-blue-200/40 shadow-[0_8px_32px_rgba(31,38,135,0.05)]'
        }
      `}
    >
      {/* Header info */}
      <h3 className={`text-sm font-bold tracking-wider mb-1 ${isDark ? 'text-white' : 'text-slate-800'}`}>
        Connect on Platforms <span className={isDark ? 'text-yellow-400' : 'text-blue-500'}>•</span>
      </h3>
      <p className={`text-[11px] mb-5 ${isDark ? 'text-white/50' : 'text-slate-500'}`}>
        Let's connect and build something amazing together.
      </p>

      {/* Grid of Social Links */}
      <div className="grid grid-cols-5 gap-2.5 sm:gap-4">
        {contactConfig.socials.map((social) => {
          const IconComponent = iconMap[social.id];
          if (!IconComponent) return null;

          const isGold = social.color === 'gold';
          
          return (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`
                flex flex-col items-center gap-2 py-3.5 rounded-xl border transition-all duration-300 hover:-translate-y-1 outline-none
                ${isDark
                  ? 'bg-white/[0.02] border-white/10 text-white/70 hover:text-white'
                  : 'bg-white/60 border-slate-100 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                }
              `}
              style={{
                '--hover-glow': isDark
                  ? isGold ? 'rgba(234, 179, 8, 0.18)' : 'rgba(59, 130, 246, 0.18)'
                  : isGold ? 'rgba(234, 179, 8, 0.08)' : 'rgba(59, 130, 246, 0.08)',
                '--hover-border': isGold ? '#eab30888' : '#3b82f688',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 8px 20px var(--hover-glow)`;
                e.currentTarget.style.borderColor = `var(--hover-border)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '';
                e.currentTarget.style.borderColor = '';
              }}
            >
              <div className="text-xl sm:text-2xl">
                {createElement(IconComponent)}
              </div>
              <span className={`text-[9px] font-bold tracking-tight text-center ${
                isDark ? 'text-white/40' : 'text-slate-400'
              }`}>
                {social.label.split(' ')[0]} {/* Shorten names like X (Twitter) to just X */}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialConnect;
