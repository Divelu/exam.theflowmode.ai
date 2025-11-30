
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { RecommendedTool } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface RecommendedToolDetailProps {
  tool: RecommendedTool;
  onBack: () => void;
}

const RecommendedToolDetail: React.FC<RecommendedToolDetailProps> = ({ tool, onBack }) => {
  const { t, language } = useLanguage();
  
  const category = language === 'no' ? (tool.category_no || tool.category) : tool.category;
  const detailedContent = language === 'no' ? (tool.detailedContent_no || tool.detailedContent) : tool.detailedContent;
  const description = language === 'no' ? (tool.description_no || tool.description) : tool.description;

  return (
    <div className="min-h-screen bg-[var(--background)] pt-32 px-6 md:px-12 animate-fade-in-up">
      <div className="max-w-4xl mx-auto pb-32">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--heading-color)] transition-colors mb-16"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          {t.aiTools.backLink}
        </button>

        {/* Content Header - Accent Line */}
        <div className="w-24 h-1.5 bg-[var(--accent)] mb-8 rounded-full"></div>

        <span className="block text-sm font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-6">{category}</span>
        
        <h1 className="text-4xl md:text-6xl font-serif text-[var(--heading-color)] mb-12 tracking-tight leading-tight">
          {tool.name}
        </h1>

        <div className="mb-16 border-b border-[var(--border)] pb-16">
            {detailedContent ? (
                <div className="text-[var(--text-primary)] font-light leading-relaxed space-y-6 text-xl">
                    {detailedContent}
                </div>
            ) : (
                <p className="text-xl text-[var(--text-primary)] font-light leading-relaxed">
                    {description}
                </p>
            )}
        </div>

        <div className="bg-[var(--surface-muted)] p-12 text-center border border-[var(--border)] rounded-[2.5rem]">
            <p className="text-[var(--text-primary)] font-light mb-8 max-w-md mx-auto text-lg">
                {t.aiTools.comingSoonGuides.replace('{tool.name}', tool.name)}
            </p>
            {tool.link ? (
                <a 
                  href={tool.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-10 py-5 bg-[var(--heading-color)] border border-[var(--heading-color)] text-white uppercase tracking-widest text-sm font-medium hover:bg-[var(--text-primary)] transition-colors rounded-full shadow-lg"
                >
                    {t.common.visitSite}
                </a>
            ) : (
                <button disabled className="px-10 py-5 bg-transparent border border-[var(--heading-color)] text-[var(--heading-color)] uppercase tracking-widest text-sm font-medium opacity-50 cursor-not-allowed rounded-full">
                    {t.common.visitSite}
                </button>
            )}
        </div>
      </div>
    </div>
  );
};

export default RecommendedToolDetail;
