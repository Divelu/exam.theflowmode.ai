
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useMemo } from 'react';
import { JOURNAL_ARTICLES } from '../constants';
import { JournalArticle } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface JournalProps {
  onArticleClick: (article: JournalArticle) => void;
}

const Journal: React.FC<JournalProps> = ({ onArticleClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { t, language } = useLanguage();

  const filteredArticles = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return JOURNAL_ARTICLES;
    
    return JOURNAL_ARTICLES.filter(article => {
      const title = language === 'no' ? (article.title_no || article.title) : article.title;
      const excerpt = language === 'no' ? (article.excerpt_no || article.excerpt) : article.excerpt;
      return title.toLowerCase().includes(query) || excerpt.toLowerCase().includes(query);
    });
  }, [searchQuery, language]);

  return (
    <section id="journal" className="bg-[var(--background)] py-40 px-6 md:px-12 border-t border-[var(--border)]">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 pb-8 border-b border-[var(--border)]">
            <div className="w-full md:w-auto">
                <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-4">{t.knowledge.label}</span>
                <h2 className="text-4xl md:text-6xl font-serif text-[var(--heading-color)] tracking-tight mb-8 md:mb-0">{t.knowledge.title}</h2>
            </div>
            
            {/* Search Bar */}
            <div className="w-full md:w-96 relative">
                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[var(--text-secondary)]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                 </div>
                 <input 
                    type="text" 
                    placeholder={t.knowledge.searchPlaceholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-6 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-full text-[var(--heading-color)] placeholder-[var(--text-secondary)] outline-none focus:border-[var(--heading-color)] focus:shadow-sm transition-all duration-300"
                 />
            </div>
        </div>

        {filteredArticles.length === 0 ? (
             <div className="text-center py-24 opacity-60">
                <p className="text-xl text-[var(--text-primary)] font-light">{t.knowledge.noResults} "{searchQuery}".</p>
                <button 
                    onClick={() => setSearchQuery('')}
                    className="mt-4 text-sm uppercase tracking-widest text-[var(--heading-color)] underline underline-offset-4 hover:text-[var(--text-secondary)] transition-colors"
                >
                    {t.common.clearSearch}
                </button>
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {filteredArticles.map((article) => (
                    <div key={article.id} className="group cursor-pointer flex flex-col text-left" onClick={() => onArticleClick(article)}>
                        <div className="w-full aspect-[4/3] overflow-hidden mb-8 bg-[var(--accent)] rounded-3xl shadow-[var(--card-shadow)]">
                            <img 
                                src={article.image} 
                                alt={article.title} 
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                        </div>
                        <div className="flex flex-col flex-1 text-left px-2">
                            <span className="text-xs font-medium uppercase tracking-widest text-[var(--text-secondary)] mb-3">
                                {language === 'no' ? (article.date_no || article.date) : article.date}
                            </span>
                            <h3 className="text-2xl font-serif text-[var(--heading-color)] mb-4 leading-tight group-hover:text-[var(--text-secondary)] transition-colors">
                                {language === 'no' ? (article.title_no || article.title) : article.title}
                            </h3>
                            <p className="text-[var(--text-primary)] font-light leading-relaxed">
                                {language === 'no' ? (article.excerpt_no || article.excerpt) : article.excerpt}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        )}
      </div>
    </section>
  );
};

export default Journal;
