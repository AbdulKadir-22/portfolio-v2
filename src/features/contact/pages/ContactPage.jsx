import { Helmet } from 'react-helmet-async';
import { useTheme } from '../../../context/ThemeContext';
import { contactConfig } from '../data/config';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import SocialConnect from '../components/SocialConnect';
import QuoteCard from '../components/QuoteCard';

const ContactPage = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="contact-page"
      className="w-full max-w-[98vw] xl:max-w-[1650px] mx-auto px-4 flex flex-col items-center gap-6 py-4"
    >
      <Helmet>
        <title>Contact — Abdulkadir Shaikh</title>
        <meta name="description" content="Have a question, an idea, or want to collaborate? Contact Abdulkadir Shaikh directly via the contact form or connect on GitHub and LinkedIn." />
        <link rel="canonical" href="https://abdulkadir.in/contact" />
        <meta property="og:title" content="Contact — Abdulkadir Shaikh" />
        <meta property="og:description" content="Have a question, an idea, or want to collaborate? Contact Abdulkadir Shaikh directly via the contact form or connect on GitHub and LinkedIn." />
        <meta property="og:url" content="https://abdulkadir.in/contact" />
        <meta property="og:image" content="https://abdulkadir.in/og-image.png" />
      </Helmet>
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
          {contactConfig.pageTitle}
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
          text-xs sm:text-sm tracking-wide -mt-4 mb-4 text-center max-w-xl leading-relaxed
          ${isDark ? 'text-white/50' : 'text-slate-500'}
        `}
      >
        Have a question, an idea, or just want to say hi? <br className="sm:hidden" />
        <span className={isDark ? 'text-yellow-400/80 font-medium' : 'text-blue-600/80 font-medium'}>
          I'd love to hear from you.
        </span>
      </p>

      {/* Two-Column Responsive Layout */}
      {/* Desktop Orbit Margin Correction: lg:pl-[210px] xl:pl-[240px] */}
      <div className="w-full lg:pl-[210px] xl:pl-[240px] flex flex-col lg:flex-row gap-8 items-start justify-between">
        
        {/* Left Column: Contact Form (Takes 58% on large screens) */}
        <div className="w-full lg:w-[58%] xl:w-[61%] flex-shrink-0">
          <ContactForm />
        </div>

        {/* Right Column: Information, Socials & Quote (Takes 39% on large screens) */}
        <div className="w-full lg:w-[39%] xl:w-[36%] lg:max-w-[420px] flex-shrink-0 lg:ml-auto flex flex-col gap-6">
          <ContactInfo />
          <SocialConnect />
          <QuoteCard />
        </div>

      </div>

      {/* Mouse scroll indicator at the bottom (Optional layout indicator) */}
      <div className="mt-8 mb-4 hidden lg:flex flex-col items-center gap-1.5 opacity-45 text-slate-500 hover:opacity-75 transition-opacity duration-300">
        <div className={`w-5 h-8 rounded-full border-2 flex justify-center pt-1.5 ${isDark ? 'border-white/30' : 'border-slate-400/60'}`}>
          <div className={`w-1 h-2 rounded-full animate-bounce ${isDark ? 'bg-white/60' : 'bg-slate-500'}`} />
        </div>
        <span className="text-[8px] font-bold tracking-[0.2em] uppercase">Scroll to explore</span>
      </div>
    </section>
  );
};

export default ContactPage;
