
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#4A3B2A] text-[#EADFCC] pt-20 pb-12 px-6 rounded-t-[3rem] mt-12 mx-4 md:mx-0 md:rounded-none">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12">
        
        {/* COLUMN 1 – BRAND */}
        <div className="md:col-span-4 space-y-8">
          <div>
            <h4 className="text-2xl font-serif text-white mb-6 tracking-tight">{t.footer.brandTitle}</h4>
            <p className="font-light leading-loose opacity-90 whitespace-pre-line">
              {t.footer.brandText}
            </p>
          </div>
          <p className="text-sm font-light opacity-60">
            {t.footer.brandTagline}
          </p>
        </div>

        {/* COLUMN 2 – FLOW TOOLS */}
        <div className="md:col-span-2 md:col-start-6">
          <h4 className="font-bold text-white mb-6 tracking-widest text-xs uppercase">{t.footer.colFlowTools}</h4>
          <ul className="space-y-4 font-light text-sm opacity-80">
            <li><a href="/tools" onClick={(e) => onLinkClick(e, '/tools')} className="hover:text-white transition-colors underline-offset-4 hover:underline">{t.footer.linkAllTools}</a></li>
            <li><a href="/tools" onClick={(e) => onLinkClick(e, '/tools')} className="hover:text-white transition-colors underline-offset-4 hover:underline">{t.footer.linkAiTools}</a></li>
            <li><a href="/flow-tools" onClick={(e) => onLinkClick(e, '/flow-tools')} className="hover:text-white transition-colors underline-offset-4 hover:underline">{t.footer.linkFlowTools}</a></li>
            <li><a href="#" className="hover:text-white transition-colors underline-offset-4 hover:underline">{t.footer.linkKnowledgePacks}</a></li>
          </ul>
        </div>
        
        {/* COLUMN 3 – PHILOSOPHY */}
        <div className="md:col-span-2">
          <h4 className="font-bold text-white mb-6 tracking-widest text-xs uppercase">{t.footer.colPhilosophy}</h4>
          <ul className="space-y-4 font-light text-sm opacity-80">
            <li><a href="/about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-white transition-colors underline-offset-4 hover:underline">{t.footer.linkAbout}</a></li>
            <li><a href="/knowledge" onClick={(e) => onLinkClick(e, '/knowledge')} className="hover:text-white transition-colors underline-offset-4 hover:underline">{t.footer.linkKnowledgeHub}</a></li>
            <li><a href="#" className="hover:text-white transition-colors underline-offset-4 hover:underline">{t.footer.linkResponsibleAi}</a></li>
          </ul>
        </div>

        {/* COLUMN 4 – CONTACT & SOCIAL */}
        <div className="md:col-span-2">
          <h4 className="font-bold text-white mb-6 tracking-widest text-xs uppercase">{t.footer.colContact}</h4>
          <div className="space-y-8 font-light text-sm opacity-80">
            <a href="mailto:hege@theflowmode.ai" className="block hover:text-white transition-colors underline-offset-4 hover:underline">
              hege@theflowmode.ai
            </a>
            
            <div>
              <h5 className="font-bold text-white mb-4 tracking-widest text-xs uppercase opacity-80">{t.footer.colSocial}</h5>
              <ul className="space-y-2">
                 <li><a href="https://www.tiktok.com/@theflowmode" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline-offset-4 hover:underline">TikTok</a></li>
                 <li><a href="https://www.snapchat.com/add/hekrisu" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline-offset-4 hover:underline">Snapchat</a></li>
                 <li><a href="https://www.linkedin.com/in/hege-kristin-sunde-84265315" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline-offset-4 hover:underline">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto mt-20 pt-8 border-t border-[#EADFCC]/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest opacity-40">
        <p>&copy; 2025 The Flow Mode.</p>
      </div>
    </footer>
  );
};

export default Footer;
