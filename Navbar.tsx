
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useEffect } from 'react';
import { BRAND_NAME } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  theme?: 'light' | 'dark';
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick, cartCount, onOpenCart, theme = 'dark' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    // Check initial position in case of page reload
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMobileMenuOpen(false);
    onNavClick(e, targetId);
  };

  const handleCartClick = (e: React.MouseEvent) => {
      e.preventDefault();
      setMobileMenuOpen(false);
      onOpenCart();
  }

  // Determine text color based on theme, scroll state, and mobile menu
  // If theme is light (for dark hero pages) AND we haven't scrolled AND mobile menu is closed -> Use Light Text
  // Otherwise (Dark theme, or Scrolled, or Mobile Menu Open) -> Use Default Dark Text
  const useLightText = theme === 'light' && !scrolled && !mobileMenuOpen;
  
  // text-[var(--background)] gives us the light cream color
  // text-[var(--heading-color)] gives us the dark brown
  const textColorClass = useLightText ? 'text-[var(--background)]' : 'text-[var(--heading-color)]';
  const hoverColorClass = useLightText ? 'hover:text-[var(--accent)]' : 'hover:text-[var(--text-secondary)]';

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
          scrolled || mobileMenuOpen ? 'bg-[var(--background)] py-6 md:py-8 shadow-sm border-b border-[var(--border)]' : 'bg-transparent py-8 md:py-12'
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-8 lg:px-20 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="/" 
            onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                onNavClick(e, ''); 
            }}
            className={`text-2xl md:text-3xl lg:text-4xl font-serif font-extrabold tracking-tight z-50 relative transition-colors duration-500 ease-in-out ${textColorClass}`}
          >
            {BRAND_NAME}
          </a>
          
          {/* Center Links - Desktop */}
          <div className={`hidden md:flex items-center gap-6 lg:gap-12 text-sm lg:text-base font-medium tracking-widest uppercase transition-colors duration-500 ${textColorClass}`}>
            <a href="/" onClick={(e) => handleLinkClick(e, '')} className={`${hoverColorClass} transition-colors whitespace-nowrap`}>{t.nav.home}</a>
            <a href="/tools" onClick={(e) => handleLinkClick(e, '/tools')} className={`${hoverColorClass} transition-colors whitespace-nowrap`}>{t.nav.aiTools}</a>
            <a href="/flow-tools" onClick={(e) => handleLinkClick(e, '/flow-tools')} className={`${hoverColorClass} transition-colors whitespace-nowrap`}>{t.nav.flowTools}</a>
            <a href="/knowledge" onClick={(e) => handleLinkClick(e, '/knowledge')} className={`${hoverColorClass} transition-colors whitespace-nowrap`}>{t.nav.knowledge}</a>
            <a href="/about" onClick={(e) => handleLinkClick(e, 'about')} className={`${hoverColorClass} transition-colors whitespace-nowrap`}>{t.nav.about}</a>
          </div>

          {/* Right Actions */}
          <div className={`flex items-center gap-4 md:gap-8 z-50 relative transition-colors duration-500 ${textColorClass}`}>
            {/* Language Toggle */}
            <div className="flex items-center gap-2 text-xs md:text-sm font-medium tracking-widest uppercase">
                <button 
                    onClick={() => setLanguage('en')} 
                    className={`transition-colors ${hoverColorClass} ${language === 'en' ? 'font-bold' : 'opacity-70'}`}
                >
                    EN
                </button>
                <span className="opacity-50">|</span>
                <button 
                    onClick={() => setLanguage('no')} 
                    className={`transition-colors ${hoverColorClass} ${language === 'no' ? 'font-bold' : 'opacity-70'}`}
                >
                    NO
                </button>
            </div>

            {cartCount > 0 && (
              <button 
                onClick={handleCartClick}
                className={`text-xs md:text-sm lg:text-lg font-medium uppercase tracking-widest ${hoverColorClass} transition-colors hidden sm:block whitespace-nowrap`}
              >
                {t.nav.cart} ({cartCount})
              </button>
            )}
            
            {/* Mobile Menu Toggle */}
            <button 
              className={`block md:hidden focus:outline-none transition-colors duration-500 ${textColorClass}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
               {mobileMenuOpen ? (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                 </svg>
               ) : (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                 </svg>
               )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[var(--background)] z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'
      }`}>
          <div className="flex flex-col items-center space-y-10 text-3xl font-serif font-medium text-[var(--heading-color)]">
            <a href="/" onClick={(e) => handleLinkClick(e, '')} className="hover:text-[var(--text-secondary)] transition-colors">{t.nav.home}</a>
            <a href="/tools" onClick={(e) => handleLinkClick(e, '/tools')} className="hover:text-[var(--text-secondary)] transition-colors">{t.nav.aiTools}</a>
            <a href="/flow-tools" onClick={(e) => handleLinkClick(e, '/flow-tools')} className="hover:text-[var(--text-secondary)] transition-colors">{t.nav.flowTools}</a>
            <a href="/knowledge" onClick={(e) => handleLinkClick(e, '/knowledge')} className="hover:text-[var(--text-secondary)] transition-colors">{t.nav.knowledge}</a>
            <a href="/about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-[var(--text-secondary)] transition-colors">{t.nav.about}</a>
            {cartCount > 0 && (
              <button 
                  onClick={handleCartClick} 
                  className="hover:text-[var(--text-secondary)] transition-colors text-xl uppercase tracking-widest font-sans mt-8"
              >
                  {t.nav.cart} ({cartCount})
              </button>
            )}
          </div>
      </div>
    </>
  );
};

export default Navbar;
