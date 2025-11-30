
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import Hero from './Hero';
import { useLanguage } from '../contexts/LanguageContext';

interface HomeProps {
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <div className="animate-fade-in-up">
      <Hero onNavigate={onNavigate} />
      
      {/* SECTION 2: What is The Flow Mode? */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[var(--surface-muted)]">
        <div className="max-w-6xl mx-auto">
           <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
             
             {/* Left Text */}
             <div className="lg:w-1/2">
               <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-6">{t.home.whatIsTitle}</span>
               <h2 className="text-4xl md:text-5xl font-serif text-[var(--heading-color)] leading-tight mb-8">
                 {t.home.whatIsHeading}
               </h2>
               <div className="space-y-6 text-lg text-[var(--text-primary)] font-light leading-relaxed">
                 <p>
                   {t.home.whatIsText1}
                 </p>
                 <p>
                   {t.home.whatIsText2}
                 </p>
               </div>
             </div>

             {/* Right Card */}
             <div className="lg:w-1/2 w-full">
               <div className="bg-[var(--surface)] p-10 md:p-12 rounded-[2rem] shadow-sm border border-[var(--border)]">
                  <ul className="space-y-8">
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 mt-2.5 rounded-full bg-[var(--heading-color)] flex-shrink-0"></div>
                      <div>
                        <h4 className="text-xl font-serif text-[var(--heading-color)] mb-2">{t.home.cardTranslateTitle}</h4>
                        <p className="text-[var(--text-secondary)] font-light">{t.home.cardTranslateDesc}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 mt-2.5 rounded-full bg-[var(--heading-color)] flex-shrink-0"></div>
                      <div>
                        <h4 className="text-xl font-serif text-[var(--heading-color)] mb-2">{t.home.cardEmpowerTitle}</h4>
                        <p className="text-[var(--text-secondary)] font-light">{t.home.cardEmpowerDesc}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 mt-2.5 rounded-full bg-[var(--heading-color)] flex-shrink-0"></div>
                      <div>
                        <h4 className="text-xl font-serif text-[var(--heading-color)] mb-2">{t.home.cardExperimentTitle}</h4>
                        <p className="text-[var(--text-secondary)] font-light">{t.home.cardExperimentDesc}</p>
                      </div>
                    </li>
                  </ul>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* SECTION 2.5: Self-Reliance */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[var(--surface)]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif text-[var(--heading-color)] mb-6 leading-tight">
              {t.home.selfRelianceTitle}
            </h2>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] font-light leading-relaxed">
              {t.home.selfRelianceSubtitle}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
             {/* Left Column: Text */}
             <div className="lg:w-1/2 space-y-6 text-lg text-[var(--text-primary)] font-light leading-relaxed">
               <p>
                 {t.home.selfRelianceText1}
               </p>
               <p>
                 {t.home.selfRelianceText2}
               </p>
               <p>
                 {t.home.selfRelianceText3}
               </p>
             </div>

             {/* Right Column: Bullet List Card */}
             <div className="lg:w-1/2 w-full">
               <div className="bg-[var(--background)] p-10 md:p-12 rounded-[2rem] shadow-sm border border-[var(--border)] hover:shadow-md transition-shadow duration-300">
                  <ul className="space-y-6">
                    {t.home.selfRelianceBullets.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                         <div className="w-6 h-6 rounded-full bg-[var(--accent)] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 text-[var(--heading-color)]">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                         </div>
                         <span className="text-[var(--text-primary)] font-light text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* SECTION 3: Explore the Flow Mode */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[var(--background)]">
        <div className="max-w-6xl mx-auto">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-serif text-[var(--heading-color)] mb-6">{t.home.exploreTitle}</h2>
             <p className="text-lg text-[var(--text-secondary)] font-light">{t.home.exploreSubtitle}</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Card 1: Tools */}
             <div className="bg-[var(--surface)] p-10 rounded-[2rem] shadow-sm border border-[var(--border)] hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full">
               <div>
                 <h3 className="text-2xl font-serif text-[var(--heading-color)] mb-4">{t.home.cardAiToolsTitle}</h3>
                 <p className="text-[var(--text-primary)] font-light mb-8">{t.home.cardAiToolsDesc}</p>
               </div>
               <a 
                 href="/tools"
                 onClick={(e) => onNavigate(e, '/tools')}
                 className="inline-flex items-center text-sm font-medium uppercase tracking-widest text-[var(--heading-color)] hover:text-[var(--text-secondary)] transition-colors group"
               >
                 {t.home.cardAiToolsBtn}
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                 </svg>
               </a>
             </div>

             {/* Card 2: Flow Tools */}
             <div className="bg-[var(--surface)] p-10 rounded-[2rem] shadow-sm border border-[var(--border)] hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full">
               <div>
                 <h3 className="text-2xl font-serif text-[var(--heading-color)] mb-4">{t.home.cardFlowToolsTitle}</h3>
                 <p className="text-[var(--text-primary)] font-light mb-8">{t.home.cardFlowToolsDesc}</p>
               </div>
               <a 
                 href="/flow-tools"
                 onClick={(e) => onNavigate(e, '/flow-tools')}
                 className="inline-flex items-center text-sm font-medium uppercase tracking-widest text-[var(--heading-color)] hover:text-[var(--text-secondary)] transition-colors group"
               >
                 {t.home.cardFlowToolsBtn}
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                 </svg>
               </a>
             </div>

             {/* Card 3: Knowledge */}
             <div className="bg-[var(--surface)] p-10 rounded-[2rem] shadow-sm border border-[var(--border)] hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full">
               <div>
                 <h3 className="text-2xl font-serif text-[var(--heading-color)] mb-4">{t.home.cardKnowledgeTitle}</h3>
                 <p className="text-[var(--text-primary)] font-light mb-8">{t.home.cardKnowledgeDesc}</p>
               </div>
               <a 
                 href="/knowledge"
                 onClick={(e) => onNavigate(e, '/knowledge')}
                 className="inline-flex items-center text-sm font-medium uppercase tracking-widest text-[var(--heading-color)] hover:text-[var(--text-secondary)] transition-colors group"
               >
                 {t.home.cardKnowledgeBtn}
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                 </svg>
               </a>
             </div>
           </div>
        </div>
      </section>

      {/* SECTION 4: Focus Defined */}
      <section className="py-32 px-6 md:px-12 bg-[var(--surface-muted)] text-center border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto">
             <h2 className="text-6xl md:text-8xl lg:text-9xl font-serif font-semibold text-[var(--heading-color)] tracking-tighter mb-12">
               {t.home.focusTitle} <span className="italic font-light">{t.home.focusDefined}</span>
             </h2>
             
             <div className="space-y-8 text-xl md:text-2xl text-[var(--text-primary)] font-light leading-relaxed max-w-3xl mx-auto">
                <p>
                  {t.home.focusText1}
                </p>
                <p>
                  {t.home.focusText2}
                </p>
                <p>
                  {t.home.focusText3}
                </p>
             </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
