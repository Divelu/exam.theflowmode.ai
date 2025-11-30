
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { FlowTool } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface FlowToolDetailProps {
  tool: FlowTool;
  onBack: () => void;
}

const FlowToolDetail: React.FC<FlowToolDetailProps> = ({ tool, onBack }) => {
  const { t, language } = useLanguage();
  const title = language === 'no' ? (tool.title_no || tool.title) : tool.title;
  const description = language === 'no' ? (tool.description_no || tool.description) : tool.description;

  const handleJoinWaitlist = () => {
    const email = "hege@theflowmode.ai";
    const subject = encodeURIComponent(`Waitlist: ${title}`);
    const body = encodeURIComponent(
      `Hi,\n\nI would like to join the waitlist for ${title}.\n\nName:\n\nOptional message:\n`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[var(--background)] pt-32 px-6 md:px-12 animate-fade-in-up">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--heading-color)] transition-colors mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          {t.flowTools.backLink}
        </button>

        <h1 className="text-4xl md:text-6xl font-serif text-[var(--heading-color)] mb-8 tracking-tight leading-tight">
          {title}
        </h1>

        <p className="text-xl md:text-2xl text-[var(--text-primary)] font-light leading-relaxed mb-16 border-b border-[var(--border)] pb-16">
          {description}
        </p>

        <div className="bg-[var(--accent)] p-12 text-center border border-[var(--border)]">
            <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-4">{t.common.status}</span>
            <h2 className="text-3xl font-serif text-[var(--heading-color)] mb-4">{t.flowTools.comingSoonTitle}</h2>
            <p className="text-[var(--text-primary)] font-light mb-8 max-w-md mx-auto">
                {t.flowTools.comingSoonText}
            </p>
            <button 
                onClick={handleJoinWaitlist}
                className="px-8 py-4 bg-[var(--heading-color)] text-white uppercase tracking-widest text-sm font-medium hover:bg-[var(--text-primary)] transition-colors shadow-lg rounded-full"
            >
                {t.common.joinWaitlist}
            </button>
        </div>
      </div>
    </div>
  );
};

export default FlowToolDetail;
