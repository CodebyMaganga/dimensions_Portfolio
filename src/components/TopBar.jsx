import { useState, useEffect } from 'react';

export default function TopBar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const contactSection = document.getElementById('contact');
      const scrollPosition = window.scrollY + 100;

      setScrolled(window.scrollY > 50);

      if (contactSection && scrollPosition >= contactSection.offsetTop) {
        setActiveSection('contact');
      } else if (aboutSection && scrollPosition >= aboutSection.offsetTop) {
        setActiveSection('about');
      } else {
        setActiveSection('home');
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-50
        transition-all duration-500 ${
          scrolled
            ? 'bg-black/60 backdrop-blur-xl border-b border-purple-500/30 shadow-2xl'
            : 'bg-transparent border-b border-transparent shadow-none'
        }`}
    >
      <h1
        className="text-white text-base sm:text-lg font-extrabold tracking-wide 
                   drop-shadow-[0_0_6px_rgba(168,85,247,0.8)] cursor-pointer"
        onClick={() => scrollToSection('home')}
      >
        Maganga · Mwambonu
      </h1>
      <div className="flex gap-5 text-sm sm:text-base">
        <button
          onClick={() => scrollToSection('about')}
          className={`px-3 py-1 rounded-lg transition-all duration-300 ${
            activeSection === 'about'
              ? 'text-white bg-purple-600/30 border border-purple-500/50'
              : 'text-white/80 hover:text-purple-400 hover:bg-purple-600/10'
          }`}
        >
          ABOUT
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className={`px-3 py-1 rounded-lg transition-all duration-300 ${
            activeSection === 'contact'
              ? 'text-white bg-purple-600/30 border border-purple-500/50'
              : 'text-white/80 hover:text-purple-400 hover:bg-purple-600/10'
          }`}
        >
          CONTACT
        </button>
      </div>
    </div>
  );
}