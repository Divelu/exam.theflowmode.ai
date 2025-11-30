
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[var(--background)] animate-fade-in-up">
      
      {/* SECTION 1: Hero / Intro */}
      <section className="pt-48 pb-24 px-6 md:px-12 bg-[var(--background)]">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-20">
           <div className="md:w-1/2">
              <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-6">{t.about.label}</span>
              <h1 className="text-4xl md:text-6xl font-serif text-[var(--heading-color)] leading-tight mb-8">
                {t.about.title}
              </h1>
              <p className="text-lg md:text-xl text-[var(--text-primary)] font-light leading-relaxed mb-6">
                {t.about.intro1}
              </p>
              <p className="text-lg md:text-xl text-[var(--text-primary)] font-light leading-relaxed">
                {t.about.intro2}
              </p>
           </div>
           <div className="md:w-1/2">
              <div className="relative w-full aspect-[3/4] md:aspect-square bg-[var(--accent)] overflow-hidden rounded-3xl shadow-xl shadow-[var(--card-shadow)]">
                 {/* Placeholder for Hege's image */}
                 <img 
                   src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1000" 
                   alt="Hege - Founder of The Flow Mode" 
                   className="w-full h-full object-cover grayscale-[20%] contrast-[1.05]"
                 />
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 2: My Journey (CV style) */}
      <section className="py-32 px-6 md:px-12 bg-[var(--surface-muted)] rounded-t-[3rem] -mt-12">
        <div className="max-w-[1400px] mx-auto">
           <div className="max-w-3xl mb-16">
             <h2 className="text-3xl md:text-4xl font-serif text-[var(--heading-color)] mb-6">{t.about.journeyTitle}</h2>
             <p className="text-[var(--text-primary)] font-light leading-relaxed text-lg">
                {t.about.journeyIntro}
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {/* Column 1: Work */}
             <div className="space-y-6">
                <h3 className="text-xl font-serif text-[var(--heading-color)] border-b border-[var(--border)] pb-4">{t.about.workTitle}</h3>
                <ul className="space-y-4 text-[var(--text-primary)] font-light">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 bg-[var(--text-secondary)] rounded-full flex-shrink-0"></span>
                    <span>Public sector innovation & strategy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 bg-[var(--text-secondary)] rounded-full flex-shrink-0"></span>
                    <span>Digital transformation & data-driven work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 bg-[var(--text-secondary)] rounded-full flex-shrink-0"></span>
                    <span>AI adoption and Copilot training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 bg-[var(--text-secondary)] rounded-full flex-shrink-0"></span>
                    <span>Workshops, facilitation and change management</span>
                  </li>
                </ul>
             </div>

             {/* Column 2: Studies */}
             <div className="space-y-6">
                <h3 className="text-xl font-serif text-[var(--heading-color)] border-b border-[var(--border)] pb-4">{t.about.studiesTitle}</h3>
                <ul className="space-y-4 text-[var(--text-primary)] font-light">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 bg-[var(--text-secondary)] rounded-full flex-shrink-0"></span>
                    <span>Executive Master in AI, Innovation and Leadership</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 bg-[var(--text-secondary)] rounded-full flex-shrink-0"></span>
                    <span>Responsible AI Leadership</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 bg-[var(--text-secondary)] rounded-full flex-shrink-0"></span>
                    <span>Generative AI for Business</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 bg-[var(--text-secondary)] rounded-full flex-shrink-0"></span>
                    <span>Digitalisation, Innovation & Business Models</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 bg-[var(--text-secondary)] rounded-full flex-shrink-0"></span>
                    <span>Leadership & Psychological Safety</span>
                  </li>
                </ul>
             </div>

             {/* Column 3: Interests */}
             <div className="space-y-6">
                <h3 className="text-xl font-serif text-[var(--heading-color)] border-b border-[var(--border)] pb-4">{t.about.interestsTitle}</h3>
                <ul className="space-y-4 text-[var(--text-primary)] font-light">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 bg-[var(--text-secondary)] rounded-full flex-shrink-0"></span>
                    <span>AI in everyday life & work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 bg-[var(--text-secondary)] rounded-full flex-shrink-0"></span>
                    <span>Health, sleep & biohacking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 bg-[var(--text-secondary)] rounded-full flex-shrink-0"></span>
                    <span>Creative AI and social media</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 bg-[var(--text-secondary)] rounded-full flex-shrink-0"></span>
                    <span>Love making tools to make the world a better place to stay</span>
                  </li>
                </ul>
             </div>
           </div>
        </div>
      </section>

      {/* SECTION 3: Responsible AI */}
      <section className="py-32 px-6 md:px-12 bg-[var(--background)] border-t border-[var(--border)]">
        <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row gap-16 mb-16">
                <div className="md:w-1/3">
                    <h2 className="text-3xl md:text-4xl font-serif text-[var(--heading-color)] leading-tight">
                        {t.about.responsibleTitle}
                    </h2>
                </div>
                <div className="md:w-2/3 max-w-3xl">
                    <p className="text-lg text-[var(--text-primary)] font-light leading-relaxed mb-6">
                        {t.about.responsibleText1}
                    </p>
                    <p className="text-lg text-[var(--text-primary)] font-light leading-relaxed">
                        {t.about.responsibleText2}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-10 border border-[var(--border)] bg-[var(--surface)] rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-2xl font-serif text-[var(--heading-color)] mb-4">{t.about.raiLeadershipTitle}</h3>
                    <p className="text-[var(--text-primary)] font-light leading-relaxed">
                        {t.about.raiLeadershipText}
                    </p>
                </div>
                <div className="p-10 border border-[var(--border)] bg-[var(--surface)] rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-2xl font-serif text-[var(--heading-color)] mb-4">{t.about.raiPublicTitle}</h3>
                    <p className="text-[var(--text-primary)] font-light leading-relaxed">
                        {t.about.raiPublicText}
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* SECTION 4: Why Flow Mode */}
      <section className="py-32 px-6 md:px-12 bg-[var(--heading-color)] text-[var(--background)] rounded-[3rem] mx-4 md:mx-12 mb-12">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-serif mb-8 text-white">{t.about.whyTitle}</h2>
            <p className="text-lg md:text-xl font-light leading-relaxed mb-8 opacity-90">
                {t.about.whyText1}
            </p>
            <p className="text-lg md:text-xl font-light leading-relaxed mb-16 opacity-90">
                {t.about.whyText2}
            </p>
            
            <blockquote className="text-2xl md:text-4xl font-serif italic leading-tight text-[var(--accent)]">
                "{t.about.quote}"
            </blockquote>
        </div>
      </section>

      {/* SECTION 5: How this site was built */}
      <section className="py-32 px-6 md:px-12 bg-[var(--background)]">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif text-[var(--heading-color)] mb-8">{t.about.builtTitle}</h2>
            <p className="text-[var(--text-primary)] font-light leading-relaxed mb-8">
                {t.about.builtText}
            </p>
            
            <ul className="space-y-4 text-[var(--text-primary)] font-light mb-12 border-l-2 border-[var(--border)] pl-6">
                <li className="flex items-center gap-3">
                    <span>AI-assisted development in Google AI Studio</span>
                </li>
                <li className="flex items-center gap-3">
                    <span>Layout and components scaffolded and refactored with generative AI</span>
                </li>
                <li className="flex items-center gap-3">
                    <span>Text drafted with AI and then edited by me for authentic voice</span>
                </li>
                <li className="flex items-center gap-3">
                    <span>Color theme and design tokens iterated through prompts</span>
                </li>
                <li className="flex items-center gap-3">
                    <span>Deployed as a real, working web application that can grow over time</span>
                </li>
            </ul>

            <p className="text-[var(--text-primary)] font-light leading-relaxed text-sm">
                {t.about.builtClosing}
            </p>
        </div>
      </section>
    </div>
  );
};

export default About;
