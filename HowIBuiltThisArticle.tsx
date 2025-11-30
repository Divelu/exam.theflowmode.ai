
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

export const HowIBuiltThisArticleEn: React.FC = () => {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <p className="text-xl font-light leading-relaxed mb-8 border-b border-[var(--border)] pb-8 italic">
        EXAM REFLECTION
      </p>

      <p className="mb-6 font-light leading-relaxed">
        This website was created as part of my exam in <em>Generative AI for Business</em>, where one of the core learning
        objectives is to demonstrate how modern AI tools can accelerate, simplify and reshape software development.
      </p>

      <p className="mb-6 font-light leading-relaxed">
        Instead of taking the simplest possible route, I deliberately chose a path that allowed me to explore, experiment and compare different
        AI-assisted development platforms.
      </p>

      <h2 className="text-2xl font-serif text-[var(--heading-color)] mb-4 mt-12">Why I chose Google AI Studio</h2>
      <p className="mb-6 font-light leading-relaxed">
        I had <strong>never used Google AI Studio to build a website before</strong>, and that was precisely why I chose it. If the goal
        had been pure efficiency, I would have selected <strong>Lovable</strong>, which is extremely intuitive,
        beginner-friendly and offers built-in integrations such as Gemini endpoints without requiring API setup. Lovable would have allowed me
        to produce a polished site in minutes.
      </p>
      <p className="mb-6 font-light leading-relaxed">
        But the purpose of this exam is not to build the fastest website – it is to explore <em>how generative AI assists the development
        process</em>. Google AI Studio gives deeper access to the code, requires more explicit prompting, and demands greater structure and
        understanding. It also leaves more room for failure – which is exactly where learning happens.
      </p>

      <h2 className="text-2xl font-serif text-[var(--heading-color)] mb-4 mt-12">My development approach</h2>
      <p className="mb-6 font-light leading-relaxed">
        I followed a <strong>step-by-step, incremental building strategy</strong> instead of a single large “make me a website” prompt. There were
        three main reasons for this:
      </p>
      <ol className="list-decimal pl-5 space-y-4 mb-8 font-light">
        <li>
          <strong>Control.</strong> Large prompts often produce beautiful output, but at the cost of losing control over structure and
          details. By working iteratively, I could understand every part of the system, adjust the architecture, and refine the design.
        </li>
        <li>
          <strong>Learning.</strong> Each step forced me to see <em>how the model thinks</em> – how it interprets instructions, how
          it handles constraints, and where it makes mistakes.
        </li>
        <li>
          <strong>Scalability.</strong> Flow Mode is a long-term project. Building modularly now makes future updates, expansions and
          AI-powered features far easier.
        </li>
      </ol>

      <h2 className="text-2xl font-serif text-[var(--heading-color)] mb-4 mt-12">Tools I used</h2>
      <p className="mb-6 font-light leading-relaxed">This project combines several AI tools that each played a role:</p>
      <ul className="list-disc pl-5 space-y-3 mb-8 font-light">
        <li>
          <strong className="text-[var(--heading-color)]">Google AI Studio</strong> – for vibecoding, component generation, layout adjustments, color themes and logic.
        </li>
        <li>
          <strong className="text-[var(--heading-color)]">ChatGPT (GPT-5.1)</strong> – for deeper structure, clarity, UX reasoning, naming, content creation, error handling and
          architectural guidance. I ended up using ChatGPT more than expected because it understands context, constraints and nuance very well.
        </li>
        <li>
          <strong className="text-[var(--heading-color)]">Gemini (via Google AI Studio)</strong> – for code changes and model-level transformations.
        </li>
        <li>
          <strong className="text-[var(--heading-color)]">Lovable</strong> – tested as an alternative builder for comparison, and to validate the quality of AI-first development platforms.
        </li>
        <li>
          <strong className="text-[var(--heading-color)]">Other creative and productivity AIs</strong> – for writing, debugging, UX improvement and consistency.
        </li>
      </ul>

      <h2 className="text-2xl font-serif text-[var(--heading-color)] mb-4 mt-12">How the site is structured</h2>
      <p className="mb-6 font-light leading-relaxed">
        I designed the website the same way I design my own digital systems: <strong>clear, minimal, modular and extensible.</strong>
      </p>
      <p className="mb-4 font-light">The core sections are:</p>
      <ul className="list-disc pl-5 space-y-3 mb-8 font-light">
        <li>
          <strong className="text-[var(--heading-color)]">Home</strong> – the entry to the Flow Mode ecosystem: warm, calm and simple.
        </li>
        <li>
          <strong className="text-[var(--heading-color)]">AI Tools</strong> – a curated list of external AI tools I use when building prototypes and digital systems.
        </li>
        <li>
          <strong className="text-[var(--heading-color)]">Flow Tools</strong> – tools I am designing myself, such as Flow Planner and Flow Story Coach, where users can join waitlists.
        </li>
        <li>
          <strong className="text-[var(--heading-color)]">Knowledge</strong> – a growing library of frameworks, explanations and learning resources.
        </li>
        <li>
          <strong className="text-[var(--heading-color)]">Responsible AI</strong> – a dedicated section for responsible AI guidance.
        </li>
        <li>
          <strong className="text-[var(--heading-color)]">About</strong> – who I am and the philosophy behind Flow Mode.
        </li>
      </ul>
      <p className="mb-6 font-light leading-relaxed">
        Each page is built from reusable components so the entire system is modular, future-proof and easy to extend.
      </p>

      <h2 className="text-2xl font-serif text-[var(--heading-color)] mb-4 mt-12">Why Flow Mode was a perfect exam subject</h2>
      <p className="mb-6 font-light leading-relaxed">
        Flow Mode is both a personal project and a long-term professional ecosystem where I experiment with:
      </p>
      <ul className="list-disc pl-5 space-y-3 mb-8 font-light">
        <li>AI-assisted development and prototyping</li>
        <li>Innovation frameworks and responsible AI</li>
        <li>Knowledge democratization and digital structure tools</li>
        <li>Designing interfaces where AI acts as a calm, supportive partner</li>
      </ul>
      <p className="mb-6 font-light leading-relaxed">
        It made sense to use the exam as an opportunity to build the foundation of something real, rather than creating a one-off school exercise.
      </p>

      <h2 className="text-2xl font-serif text-[var(--heading-color)] mb-4 mt-12">What I learned</h2>
      <p className="mb-6 font-light leading-relaxed">
        Through this project I learned how different AI systems interpret prompts, the importance of structure and incremental iteration, and
        how AI can transform frontend development without replacing human judgment. I also experienced how vibecoding changes the way you
        think about interfaces and design systems.
      </p>
      <p className="mb-6 font-light leading-relaxed">
        Most of all, I learned that AI development is not about shortcuts – it is about <strong>reducing friction, freeing creativity and enabling new ways of thinking.</strong>
      </p>

      <h2 className="text-2xl font-serif text-[var(--heading-color)] mb-4 mt-12">Final reflection</h2>
      <p className="mb-6 font-light leading-relaxed">
        This website is not just an exam delivery. It is a living prototype of how I believe digital tools should feel – warm, intuitive,
        human-supportive and built in flow.
      </p>
      <p className="mb-6 font-medium text-lg text-[var(--heading-color)]">
        Generative AI did not build this <em>for</em> me – <strong>generative AI built this <em>with</em> me.</strong>
      </p>
    </div>
  );
};

export const HowIBuiltThisArticleNo: React.FC = () => {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <p className="text-xl font-light leading-relaxed mb-8 border-b border-[var(--border)] pb-8 italic">
        EKSAMENSREFLEKSJON
      </p>

      <p className="mb-6 font-light leading-relaxed">
        Denne nettsiden ble laget som en del av min eksamen i <em>Generativ KI for Business</em>, hvor et av hovedlæringsmålene er å demonstrere
        hvordan moderne KI-verktøy kan akselerere, forenkle og omforme programvareutvikling.
      </p>

      <p className="mb-6 font-light leading-relaxed">
        I stedet for å velge den enkleste ruten, valgte jeg bevisst en vei som lot meg utforske, eksperimentere med og sammenligne ulike
        plattformer for KI-assistert utvikling.
      </p>

      <h2 className="text-2xl font-serif text-[var(--heading-color)] mb-4 mt-12">Hvorfor jeg valgte Google AI Studio</h2>
      <p className="mb-6 font-light leading-relaxed">
        Jeg hadde <strong>aldri brukt Google AI Studio til å bygge en nettside før</strong>, og det var nettopp derfor jeg valgte det. Hvis målet
        kun hadde vært effektivitet, ville jeg valgt <strong>Lovable</strong>, som er ekstremt intuitivt, nybegynnervennlig og tilbyr
        innebygde integrasjoner som Gemini-endepunkter uten å kreve API-oppsett. Lovable ville latt meg produsere en polert side på minutter.
      </p>
      <p className="mb-6 font-light leading-relaxed">
        Men formålet med denne eksamenen er ikke å bygge den raskeste nettsiden – det er å utforske <em>hvordan generativ KI støtter
        utviklingsprosessen</em>. Google AI Studio gir dypere tilgang til koden, krever mer eksplisitt prompting, og fordrer større struktur og
        forståelse. Det gir også mer rom for å feile – som er nøyaktig der læringen skjer.
      </p>

      <h2 className="text-2xl font-serif text-[var(--heading-color)] mb-4 mt-12">Min utviklingstilnærming</h2>
      <p className="mb-6 font-light leading-relaxed">
        Jeg fulgte en <strong>steg-for-steg, inkrementell byggestrategi</strong> i stedet for en enkelt stor "lag en nettside"-prompt. Det var tre
        hovedgrunner til dette:
      </p>
      <ol className="list-decimal pl-5 space-y-4 mb-8 font-light">
        <li>
          <strong>Kontroll.</strong> Store prompter produserer ofte vakkert resultat, men på bekostning av kontroll over struktur og
          detaljer. Ved å jobbe iterativt kunne jeg forstå hver del av systemet, justere arkitekturen og finpusse designet.
        </li>
        <li>
          <strong>Læring.</strong> Hvert steg tvang meg til å se <em>hvordan modellen tenker</em> – hvordan den tolker instruksjoner, hvordan
          den håndterer begrensninger, og hvor den gjør feil.
        </li>
        <li>
          <strong>Skalerbarhet.</strong> Flow Mode er et langsiktig prosjekt. Å bygge modulært nå gjør fremtidige oppdateringer, utvidelser og
          KI-drevne funksjoner langt enklere.
        </li>
      </ol>

      <h2 className="text-2xl font-serif text-[var(--heading-color)] mb-4 mt-12">Verktøy jeg brukte</h2>
      <p className="mb-6 font-light leading-relaxed">Dette prosjektet kombinerer flere KI-verktøy som alle spilte en rolle:</p>
      <ul className="list-disc pl-5 space-y-3 mb-8 font-light">
        <li>
          <strong className="text-[var(--heading-color)]">Google AI Studio</strong> – for vibecoding, generering av komponenter, layoutjusteringer, fargetemaer og logikk.
        </li>
        <li>
          <strong className="text-[var(--heading-color)]">ChatGPT (GPT-5.1)</strong> – for dypere struktur, klarhet, UX-resonnering, navngiving, innholdsproduksjon, feilhåndtering og
          arkitektonisk veiledning. Jeg endte opp med å bruke ChatGPT mer enn forventet fordi den forstår kontekst, begrensninger og nyanser svært godt.
        </li>
        <li>
          <strong className="text-[var(--heading-color)]">Gemini (via Google AI Studio)</strong> – for kodeendringer og transformasjoner på modellnivå.
        </li>
        <li>
          <strong className="text-[var(--heading-color)]">Lovable</strong> – testet som en alternativ bygger for sammenligning, og for å validere kvaliteten på KI-først utviklingsplattformer.
        </li>
        <li>
          <strong className="text-[var(--heading-color)]">Andre kreative og produktive KI-er</strong> – for skriving, feilsøking, UX-forbedring og konsistens.
        </li>
      </ul>

      <h2 className="text-2xl font-serif text-[var(--heading-color)] mb-4 mt-12">Hvordan siden er strukturert</h2>
      <p className="mb-6 font-light leading-relaxed">
        Jeg designet nettsiden på samme måte som jeg designer mine egne digitale systemer: <strong>klar, minimalistisk, modulær og utvidbar.</strong>
      </p>
      <p className="mb-4 font-light">Kjernedelenene er:</p>
      <ul className="list-disc pl-5 space-y-3 mb-8 font-light">
        <li>
          <strong className="text-[var(--heading-color)]">Hjem</strong> – inngangen til Flow Mode-økosystemet: varm, rolig og enkel.
        </li>
        <li>
          <strong className="text-[var(--heading-color)]">KI-verktøy</strong> – en kuratert liste over eksterne KI-verktøy jeg bruker når jeg bygger prototyper og digitale systemer.
        </li>
        <li>
          <strong className="text-[var(--heading-color)]">Flow-verktøy</strong> – verktøy jeg designer selv, som Flow Planlegger og Flow Historieforteller, hvor brukere kan sette seg på venteliste.
        </li>
        <li>
          <strong className="text-[var(--heading-color)]">Kunnskap</strong> – et voksende bibliotek av rammeverk, forklaringer og læringsressurser.
        </li>
        <li>
          <strong className="text-[var(--heading-color)]">Ansvarlig KI</strong> – en dedikert seksjon for veiledning om ansvarlig KI.
        </li>
        <li>
          <strong className="text-[var(--heading-color)]">Om</strong> – hvem jeg er og filosofien bak Flow Mode.
        </li>
      </ul>
      <p className="mb-6 font-light leading-relaxed">
        Hver side er bygget av gjenbrukbare komponenter slik at hele systemet er modulært, fremtidssikkert og enkelt å utvide.
      </p>

      <h2 className="text-2xl font-serif text-[var(--heading-color)] mb-4 mt-12">Hvorfor Flow Mode var et perfekt eksamenstema</h2>
      <p className="mb-6 font-light leading-relaxed">
        Flow Mode er både et personlig prosjekt og et langsiktig profesjonelt økosystem hvor jeg eksperimenterer med:
      </p>
      <ul className="list-disc pl-5 space-y-3 mb-8 font-light">
        <li>KI-assistert utvikling og prototyping</li>
        <li>Innovasjonsrammeverk og ansvarlig KI</li>
        <li>Demokratisering av kunnskap og digitale strukturverktøy</li>
        <li>Design av grensesnitt hvor KI fungerer som en rolig, støttende partner</li>
      </ul>
      <p className="mb-6 font-light leading-relaxed">
        Det ga mening å bruke eksamenen som en mulighet til å bygge fundamentet for noe ekte, i stedet for å lage en engangs skoleøvelse.
      </p>

      <h2 className="text-2xl font-serif text-[var(--heading-color)] mb-4 mt-12">Hva jeg lærte</h2>
      <p className="mb-6 font-light leading-relaxed">
        Gjennom dette prosjektet lærte jeg hvordan ulike KI-systemer tolker prompter, viktigheten av struktur og inkrementell iterasjon, og
        hvordan KI kan transformere frontend-utvikling uten å erstatte menneskelig vurderingsevne. Jeg erfarte også hvordan vibecoding endrer måten
        man tenker på grensesnitt og designsystemer.
      </p>
      <p className="mb-6 font-light leading-relaxed">
        Mest av alt lærte jeg at KI-utvikling ikke handler om snarveier – det handler om å <strong>redusere friksjon, frigjøre kreativitet og muliggjøre nye måter å tenke på.</strong>
      </p>

      <h2 className="text-2xl font-serif text-[var(--heading-color)] mb-4 mt-12">Avsluttende refleksjon</h2>
      <p className="mb-6 font-light leading-relaxed">
        Denne nettsiden er ikke bare en eksamensleveranse. Det er en levende prototype på hvordan jeg mener digitale verktøy bør føles – varme, intuitive,
        menneskestøttende og bygget i flyt.
      </p>
      <p className="mb-6 font-medium text-lg text-[var(--heading-color)]">
        Generativ KI bygget ikke dette <em>for</em> meg – <strong>generativ KI bygget dette <em>sammen med</em> meg.</strong>
      </p>
    </div>
  );
};
