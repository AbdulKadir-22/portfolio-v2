import { MessageSquareCode } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import { contactConfig } from '../data/config';
import spaceBg from '../../../assets/background/contact-space.png';

const QuoteCard = () => {
  const { isDark } = useTheme();
  const { text, author } = contactConfig.quote;

  return (
    <div
      className={`
        relative w-full rounded-2xl overflow-hidden border p-6 md:p-8 min-h-[140px]
        flex flex-col justify-center transition-all duration-500 group cursor-pointer
        ${isDark
          ? 'border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-white/20'
          : 'border-blue-200/40 shadow-[0_8px_32px_rgba(31,38,135,0.05)] hover:border-slate-300'
        }
      `}
    >
      {/* Background Deep Space Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={spaceBg}
          alt="Crescent planet"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Soft Contrast Overlay */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isDark
              ? 'bg-gradient-to-b from-black/60 via-black/40 to-black/80 group-hover:opacity-95'
              : 'bg-gradient-to-b from-white/85 via-white/65 to-white/90 group-hover:opacity-95'
          }`}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-start gap-4 h-full">
        {/* Quote Icon */}
        <div className={`p-2.5 rounded-lg border flex-shrink-0 ${
          isDark 
            ? 'bg-white/5 border-white/10 text-yellow-400' 
            : 'bg-blue-50 border-blue-100 text-blue-600'
        }`}>
          <MessageSquareCode size={18} />
        </div>

        {/* Text */}
        <div className="flex flex-col">
          <p
            className={`
              text-sm sm:text-base italic font-light leading-relaxed mb-2 transition-colors duration-300
              ${isDark ? 'text-white/90' : 'text-slate-700'}
            `}
          >
            "{text}"
          </p>
          <span
            className={`
              text-[10px] font-bold tracking-[0.15em] uppercase transition-colors duration-300
              ${isDark ? 'text-yellow-400/80' : 'text-blue-600/80'}
            `}
          >
            — {author}
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
