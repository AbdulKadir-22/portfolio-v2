import { Mail, MapPin, Clock, Sparkles, ChevronRight } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import { contactConfig } from '../data/config';
import radarBg from '../../../assets/background/contact-radar.png';

const ContactInfo = () => {
  const { isDark } = useTheme();
  const { email, location, timezone, availability } = contactConfig.info;

  const infoItems = [
    {
      id: 'email',
      icon: Mail,
      label: 'Email',
      value: email,
      action: `mailto:${email}`,
      isLink: true
    },
    {
      id: 'location',
      icon: MapPin,
      label: 'Location',
      value: location
    },
    {
      id: 'timezone',
      icon: Clock,
      label: 'Time Zone',
      value: timezone
    },
    {
      id: 'availability',
      icon: Sparkles,
      label: 'Availability',
      value: availability,
      showStatusIndicator: true
    }
  ];

  return (
    <div
      className={`
        relative w-full rounded-2xl overflow-hidden border
        flex flex-col justify-between min-h-[360px] md:min-h-[380px]
        transition-all duration-500 group cursor-pointer
        ${isDark
          ? 'border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-white/20'
          : 'border-blue-200/40 shadow-[0_8px_32px_rgba(31,38,135,0.05)] hover:border-slate-300'
        }
      `}
    >
      {/* Background Cosmic Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={radarBg}
          alt="Cosmic Radar"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Darkening Gradient Overlay to ensure readable contrast for information */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isDark
              ? 'bg-gradient-to-b from-black/75 via-black/40 to-black/85 group-hover:opacity-95'
              : 'bg-gradient-to-b from-white/90 via-white/70 to-white/95 group-hover:opacity-95'
          }`}
        />
      </div>

      {/* Card Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-6 md:p-8">
        
        {/* Header Section */}
        <div>
          <div className="flex items-center gap-2.5 mb-2">
            <span
              className={`
                text-[9px] font-bold tracking-[0.2em] uppercase transition-colors duration-300
                ${isDark ? 'text-yellow-400' : 'text-blue-600'}
              `}
            >
              Get In Touch
            </span>
          </div>

          <h2
            className={`
              text-xl md:text-2xl font-black tracking-tight mb-2 leading-tight transition-colors duration-300
              ${isDark ? 'text-white' : 'text-slate-800'}
            `}
          >
            Contact Information
          </h2>

          <p
            className={`
              text-xs leading-relaxed max-w-xs mb-6 transition-colors duration-300
              ${isDark ? 'text-white/60' : 'text-slate-500'}
            `}
          >
            Reach out through any of these channels.
          </p>
        </div>

        {/* Contact Fields List */}
        <div className="flex flex-col gap-4">
          {infoItems.map((item) => {
            const Icon = item.icon;
            const itemContent = (
              <div
                className={`
                  flex items-center justify-between p-3.5 rounded-xl border transition-all duration-300
                  ${isDark
                    ? 'bg-black/40 border-white/5 hover:bg-white/5 hover:border-white/10'
                    : 'bg-white/60 border-slate-100 hover:bg-white hover:border-slate-200'
                  }
                `}
              >
                <div className="flex items-center gap-3.5">
                  {/* Icon */}
                  <div className={`p-2 rounded-lg border ${
                    isDark 
                      ? 'bg-white/5 border-white/10 text-yellow-400' 
                      : 'bg-blue-50 border-blue-100 text-blue-600'
                  }`}>
                    <Icon size={16} />
                  </div>

                  {/* Text details */}
                  <div className="flex flex-col">
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${
                      isDark ? 'text-white/40' : 'text-slate-400'
                    }`}>
                      {item.label}
                    </span>
                    <span className={`text-xs font-semibold ${
                      isDark ? 'text-white' : 'text-slate-700'
                    }`}>
                      {item.value}
                    </span>
                  </div>
                </div>

                {/* Status dot or link chevron */}
                {item.showStatusIndicator && (
                  <div className="flex items-center gap-1.5 bg-green-500/10 px-2.5 py-1 rounded-full border border-green-500/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[9px] font-bold text-green-400 uppercase tracking-wider">Active</span>
                  </div>
                )}

                {item.isLink && (
                  <ChevronRight
                    size={14}
                    className={`transition-transform duration-300 group-hover:translate-x-0.5 ${
                      isDark ? 'text-white/40' : 'text-slate-400'
                    }`}
                  />
                )}
              </div>
            );

            return item.isLink ? (
              <a
                key={item.id}
                href={item.action}
                target="_blank"
                rel="noopener noreferrer"
                className="block outline-none"
              >
                {itemContent}
              </a>
            ) : (
              <div key={item.id}>{itemContent}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
