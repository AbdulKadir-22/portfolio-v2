import { useState } from 'react';
import { User, Mail, ClipboardList, Pencil, Send, CheckCircle, AlertCircle, ShieldCheck } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';

const ContactForm = () => {
  const { isDark } = useTheme();
  
  // State variables
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('');
  
  // Verify Web3Forms Access Key
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  const isKeyConfigured = accessKey && accessKey !== 'your-access-key-here' && accessKey.trim() !== '';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    // If key is not configured, simulate successful submit but warn in console
    if (!isKeyConfigured) {
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        console.warn(
          "Web3Forms API key is missing or not configured. To enable live emails, " +
          "please set VITE_WEB3FORMS_ACCESS_KEY in your .env file."
        );
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1500);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: 'Portfolio Contact Form'
        })
      });

      const data = await response.json();
      
      if (response.ok && data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Email submission error:', err);
      setSubmitStatus('error');
      setErrorMessage(err.message || 'Failed to send message. Please check your network connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`
        relative w-full rounded-2xl p-6 md:p-8 border backdrop-blur-md transition-all duration-300
        ${isDark 
          ? 'bg-black/40 border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]' 
          : 'bg-white/40 border-blue-200/40 shadow-[0_8px_32px_rgba(31,38,135,0.05)]'
        }
      `}
    >
      {/* Dynamic Key Warning for Admin/Developer */}
      {!isKeyConfigured && (
        <div className={`mb-6 p-3 rounded-lg border text-xs flex items-start gap-2.5 leading-relaxed ${
          isDark 
            ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-300' 
            : 'bg-yellow-50 border-yellow-200 text-yellow-800'
        }`}>
          <AlertCircle size={15} className="mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-bold">Developer Notice:</span> Live emails are disabled. Add your Web3Forms Access Key to the <code className="font-semibold bg-black/10 px-1 py-0.5 rounded">.env</code> file: 
            <div className="mt-1 bg-black/20 font-mono px-2 py-1 rounded select-all break-all w-fit">
              VITE_WEB3FORMS_ACCESS_KEY=your_key_here
            </div>
          </div>
        </div>
      )}

      {/* Form Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-2.5 rounded-lg border ${
          isDark ? 'bg-white/5 border-white/10 text-yellow-400' : 'bg-blue-50 border-blue-100 text-blue-600'
        }`}>
          <Send size={18} className="transform rotate-[-30deg]" />
        </div>
        <div>
          <h2 className={`text-lg font-bold tracking-wide ${isDark ? 'text-white' : 'text-slate-800'}`}>
            Send a Message <span className={isDark ? 'text-yellow-400' : 'text-blue-500'}>•</span>
          </h2>
          <p className={`text-xs ${isDark ? 'text-white/50' : 'text-slate-500'}`}>
            I usually reply within 24 hours.
          </p>
        </div>
      </div>

      {submitStatus === 'success' && (
        <div className={`mb-6 p-4 rounded-xl border flex items-start gap-3 animate-fadeIn ${
          isDark 
            ? 'bg-green-500/10 border-green-500/20 text-green-300' 
            : 'bg-green-50 border-green-200 text-green-800'
        }`}>
          <CheckCircle size={20} className="flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-bold">Message Sent Successfully!</h3>
            <p className="text-xs mt-1 opacity-90">
              Thank you for reaching out. Your message has been routed to my inbox, and I will get back to you shortly.
            </p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className={`mb-6 p-4 rounded-xl border flex items-start gap-3 animate-fadeIn ${
          isDark 
            ? 'bg-red-500/10 border-red-500/20 text-red-300' 
            : 'bg-red-50 border-red-200 text-red-800'
        }`}>
          <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-bold">Failed to Send Message</h3>
            <p className="text-xs mt-1 opacity-90">{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Name and Email side by side on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className={`text-xs font-bold tracking-wider ${isDark ? 'text-white/60' : 'text-slate-600'}`}>
              Your Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                placeholder="Enter your name"
                className={`
                  w-full px-4 py-3 rounded-xl border text-sm transition-all duration-300 outline-none
                  ${isDark 
                    ? 'bg-white/[0.02] border-white/10 text-white placeholder-white/20 focus:border-yellow-500/50 focus:bg-white/[0.04]' 
                    : 'bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400 focus:border-blue-500/50 focus:bg-white'
                  }
                  ${errors.name ? 'border-red-500/50 focus:border-red-500/50' : ''}
                `}
              />
              <User size={16} className={`absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 ${isDark ? 'text-white' : 'text-slate-800'}`} />
            </div>
            {errors.name && <span className="text-[10px] text-red-500 font-semibold">{errors.name}</span>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className={`text-xs font-bold tracking-wider ${isDark ? 'text-white/60' : 'text-slate-600'}`}>
              Your Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                placeholder="Enter your email"
                className={`
                  w-full px-4 py-3 rounded-xl border text-sm transition-all duration-300 outline-none
                  ${isDark 
                    ? 'bg-white/[0.02] border-white/10 text-white placeholder-white/20 focus:border-yellow-500/50 focus:bg-white/[0.04]' 
                    : 'bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400 focus:border-blue-500/50 focus:bg-white'
                  }
                  ${errors.email ? 'border-red-500/50 focus:border-red-500/50' : ''}
                `}
              />
              <Mail size={16} className={`absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 ${isDark ? 'text-white' : 'text-slate-800'}`} />
            </div>
            {errors.email && <span className="text-[10px] text-red-500 font-semibold">{errors.email}</span>}
          </div>
        </div>

        {/* Subject */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="subject" className={`text-xs font-bold tracking-wider ${isDark ? 'text-white/60' : 'text-slate-600'}`}>
            Subject
          </label>
          <div className="relative">
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              disabled={isSubmitting}
              placeholder="What is this about?"
              className={`
                w-full px-4 py-3 rounded-xl border text-sm transition-all duration-300 outline-none
                ${isDark 
                  ? 'bg-white/[0.02] border-white/10 text-white placeholder-white/20 focus:border-yellow-500/50 focus:bg-white/[0.04]' 
                  : 'bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400 focus:border-blue-500/50 focus:bg-white'
                }
                ${errors.subject ? 'border-red-500/50 focus:border-red-500/50' : ''}
              `}
            />
            <ClipboardList size={16} className={`absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 ${isDark ? 'text-white' : 'text-slate-800'}`} />
          </div>
          {errors.subject && <span className="text-[10px] text-red-500 font-semibold">{errors.subject}</span>}
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className={`text-xs font-bold tracking-wider ${isDark ? 'text-white/60' : 'text-slate-600'}`}>
            Your Message
          </label>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
              rows={6}
              placeholder="Write your message here..."
              className={`
                w-full px-4 py-3 rounded-xl border text-sm transition-all duration-300 outline-none resize-none
                ${isDark 
                  ? 'bg-white/[0.02] border-white/10 text-white placeholder-white/20 focus:border-yellow-500/50 focus:bg-white/[0.04]' 
                  : 'bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400 focus:border-blue-500/50 focus:bg-white'
                }
                ${errors.message ? 'border-red-500/50 focus:border-red-500/50' : ''}
              `}
            />
            <Pencil size={15} className={`absolute right-4 bottom-4 pointer-events-none opacity-40 ${isDark ? 'text-white' : 'text-slate-800'}`} />
          </div>
          {errors.message && <span className="text-[10px] text-red-500 font-semibold">{errors.message}</span>}
        </div>

        {/* Action Button & Info */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              w-full sm:w-auto px-7 py-3.5 rounded-xl border font-bold text-xs tracking-[0.12em] uppercase
              flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer group
              ${isDark
                ? 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/20 hover:border-yellow-500/50 disabled:opacity-50 disabled:pointer-events-none'
                : 'bg-blue-600/10 border-blue-600/30 text-blue-600 hover:bg-blue-600/20 hover:border-blue-600/50 disabled:opacity-50 disabled:pointer-events-none'
              }
            `}
          >
            {isSubmitting ? (
              <>
                <div className="w-3.5 h-3.5 border-2 border-t-transparent animate-spin rounded-full" />
                Sending Message...
              </>
            ) : (
              <>
                Send Message
                <Send size={12} className="transform rotate-[-30deg] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </>
            )}
          </button>

          <div className="flex items-center gap-2 text-slate-500 text-[10px] tracking-wide font-medium">
            <ShieldCheck size={14} className={isDark ? 'text-yellow-400/50' : 'text-blue-500/50'} />
            <span>Your information is safe with me.</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
