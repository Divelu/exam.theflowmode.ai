
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useMemo } from 'react';
import { RECOMMENDED_TOOLS_DATA } from '../constants';
import { RecommendedTool } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface RecommendedToolsProps {
  onToolClick: (tool: RecommendedTool) => void;
}

const RecommendedTools: React.FC<RecommendedToolsProps> = ({ onToolClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { t, language } = useLanguage();

  const filteredTools = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return RECOMMENDED_TOOLS_DATA;
    
    return RECOMMENDED_TOOLS_DATA.filter(tool => {
      const name = tool.name;
      const category = language === 'no' ? (tool.category_no || tool.category) : tool.category;
      const description = language === 'no' ? (tool.description_no || tool.description) : tool.description;
      
      return name.toLowerCase().includes(query) || 
             category.toLowerCase().includes(query) ||
             description.toLowerCase().includes(query);
    });
  }, [searchQuery, language]);

  return (
    <div className="min-h-screen bg-[var(--background)] animate-fade-in-up">
      {/* Hero Section */}
      <section className="pt-48 pb-12 px-6 md:px-12 bg-[var(--background)]">
        <div className="max-w-[1400px] mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[var(--heading-color)] tracking-tight mb-8">
            {t.aiTools.title}
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-[var(--text-primary)] font-light leading-relaxed mb-12">
            {t.aiTools.subtitle}
          </p>

          {/* Search Bar */}
          <div className="max-w-lg mx-auto relative">
             <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[var(--text-secondary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
             </div>
             <input 
                type="text" 
                placeholder={t.aiTools.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-[var(--surface)] border border-[var(--border)] rounded-full text-[var(--heading-color)] placeholder-[var(--text-secondary)] outline-none focus:border-[var(--heading-color)] focus:shadow-md transition-all duration-300"
             />
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-20 px-6 md:px-12 bg-[var(--background)]">
        <div className="max-w-[1400px] mx-auto">
          
          {filteredTools.length === 0 ? (
            <div className="text-center py-24 opacity-60">
                <p className="text-xl text-[var(--text-primary)] font-light">{t.aiTools.noResults} "{searchQuery}".</p>
                <button 
                    onClick={() => setSearchQuery('')}
                    className="mt-4 text-sm uppercase tracking-widest text-[var(--heading-color)] underline underline-offset-4 hover:text-[var(--text-secondary)] transition-colors"
                >
                    {t.common.clearSearch}
                </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
                {filteredTools.map((tool) => (
                <div 
                    key={tool.id} 
                    className="group flex flex-col justify-between p-10 bg-[var(--surface)] border border-[var(--border)] rounded-[2.5rem] hover:shadow-lg hover:border-[var(--heading-color)] transition-all duration-300 cursor-pointer min-h-[320px]"
                    onClick={() => onToolClick(tool)}
                >
                    <div>
                    {/* Category Header */}
                    <span className="inline-block px-4 py-1.5 mb-8 text-xs font-bold uppercase tracking-widest text-[var(--heading-color)] bg-[var(--surface-muted)] border border-[var(--border)] rounded-full">
                        {language === 'no' ? (tool.category_no || tool.category) : tool.category}
                    </span>
                    
                    {/* Title */}
                    <h3 className="text-3xl font-serif font-medium text-[var(--heading-color)] mb-6 group-hover:text-[var(--text-secondary)] transition-colors">
                        {tool.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-[var(--text-primary)] font-light leading-relaxed text-lg mb-8">
                        {language === 'no' ? (tool.description_no || tool.description) : tool.description}
                    </p>
                    </div>
                    
                    {/* Footer / CTA */}
                    <div className="flex items-center text-sm font-medium uppercase tracking-widest text-[var(--heading-color)] mt-auto pt-6 border-t border-[var(--border)]/50 group-hover:border-[var(--border)] transition-colors">
                        {t.common.learnMore}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </div>
                </div>
                ))}
            </div>
          )}
          
          <div className="mt-32 text-center border-t border-[var(--border)] pt-16">
             <p className="text-[var(--text-secondary)] font-light text-sm tracking-wide">{t.aiTools.moreComing}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecommendedTools;
