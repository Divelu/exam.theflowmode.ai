
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  onNavigate?: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (onNavigate) {
      onNavigate(e, targetId);
    }
  };

  return (
    <section className="relative w-full h-[85vh] min-h-[700px] overflow-hidden bg-[var(--background)] flex items-center justify-center">
      
      {/* Background - Gradient and Texture */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--surface-muted)] to-[var(--background)] opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        <div className="animate-fade-in-up flex flex-col items-center">
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-semibold text-[var(--heading-color)] tracking-tighter mb-8">
            {t.hero.title}
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-2xl text-[var(--text-primary)] font-light leading-relaxed mb-12">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="/flow-tools" 
              onClick={(e) => handleButtonClick(e, '/flow-tools')}
              className="px-10 py-4 bg-[var(--heading-color)] text-white text-sm font-medium uppercase tracking-widest hover:bg-[var(--text-primary)] transition-all duration-300 rounded-full shadow-lg shadow-[var(--card-shadow)]"
            >
              {t.hero.exploreBtn}
            </a>
            <a 
              href="/about" 
              onClick={(e) => handleButtonClick(e, '/about')}
              className="px-10 py-4 bg-transparent border border-[var(--heading-color)] text-[var(--heading-color)] text-sm font-medium uppercase tracking-widest hover:bg-[var(--surface-muted)] transition-all duration-300 rounded-full"
            >
              {t.hero.aboutBtn}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-[var(--heading-color)]/50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
