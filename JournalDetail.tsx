
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { JournalArticle } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface JournalDetailProps {
  article: JournalArticle;
  onBack: () => void;
}

const JournalDetail: React.FC<JournalDetailProps> = ({ article, onBack }) => {
  const { t, language } = useLanguage();
  const title = language === 'no' ? (article.title_no || article.title) : article.title;
  const date = language === 'no' ? (article.date_no || article.date) : article.date;
  const content = language === 'no' ? (article.content_no || article.content) : article.content;

  return (
    <div className="min-h-screen bg-[var(--background)] animate-fade-in-up">
       {/* Hero Image for Article - Full bleed to top so navbar sits on it */}
       <div className="w-full h-[50vh] md:h-[60vh] relative overflow-hidden">
          <img 
             src={article.image} 
             alt={title} 
             className="w-full h-full object-cover contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-black/30"></div>
       </div>

       <div className="max-w-4xl mx-auto px-6 md:px-12 -mt-32 relative z-10 pb-32">
          <div className="bg-[var(--background)] p-8 md:p-16 shadow-2xl shadow-[var(--card-shadow)] border border-[var(--border)] rounded-[2.5rem]">
             <div className="flex justify-between items-center mb-12 border-b border-[var(--border)] pb-8">
                <button 
                  onClick={onBack}
                  className="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--heading-color)] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                  {t.knowledge.backLink}
                </button>
                <span className="text-xs font-medium uppercase tracking-widest text-[var(--text-secondary)]">{date}</span>
             </div>

             <h1 className="text-3xl md:text-5xl font-serif text-[var(--heading-color)] mb-12 leading-tight text-center tracking-tight">
               {title}
             </h1>

             <div className="prose prose-stone prose-lg mx-auto font-light leading-loose text-[var(--text-primary)]">
               {content}
             </div>
             
             <div className="mt-16 pt-12 border-t border-[var(--border)] flex justify-center">
                 <span className="text-xl font-serif font-medium text-[var(--heading-color)]">{t.knowledge.theFlowMode}</span>
             </div>
          </div>
       </div>
    </div>
  );
};

export default JournalDetail;
