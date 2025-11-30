
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product, JournalArticle, FlowTool, RecommendedTool } from './types';
import { HowIBuiltThisArticleEn, HowIBuiltThisArticleNo } from './components/HowIBuiltThisArticle';

export const PRODUCTS: Product[] = [
  {
    id: 't1',
    name: 'Flow Planner',
    name_no: 'Flow Planlegger',
    tagline: 'In development',
    tagline_no: 'Under utvikling',
    description: 'An AI-driven daily planner that adapts to your energy levels.',
    description_no: 'En KI-drevet dagsplanlegger som tilpasser seg energinivået ditt.',
    longDescription: 'The Flow Planner isn\'t just a calendar. It\'s a cognitive architect. By analyzing your peak productivity windows, it dynamically reschedules your deep work sessions to ensure you are always working with the current, not against it. Integrates with your existing calendar ecosystem.',
    longDescription_no: 'Flow Planner er ikke bare en kalender. Det er en kognitiv arkitekt. Ved å analysere dine mest produktive tidsvinduer, planlegger den dynamisk om øktene dine for dypt arbeid for å sikre at du alltid jobber med strømmen, ikke mot den. Integreres med ditt eksisterende kalenderøkosystem.',
    price: 0,
    displayPrice: 'Coming Soon',
    displayPrice_no: 'Kommer Snart',
    category: 'Productivity',
    category_no: 'Produktivitet',
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=1000',
    gallery: [],
    features: ['Adaptive Scheduling', 'Energy Tracking', 'Focus Analytics'],
    features_no: ['Adaptiv Planlegging', 'Energisporing', 'Fokus-analyse']
  },
  {
    id: 't2',
    name: 'Flow Health Companion',
    name_no: 'Flow Helsepartner',
    tagline: 'In development',
    tagline_no: 'Under utvikling',
    description: 'Biometric insights to optimize your cognitive performance.',
    description_no: 'Biometrisk innsikt for å optimalisere din kognitive ytelse.',
    longDescription: 'Connects with your wearables to correlate sleep, heart rate variability, and movement with your mental output. Flow Health Companion provides actionable insights to prepare your physiology for deep work.',
    longDescription_no: 'Kobler seg til dine bærbare enheter for å korrelere søvn, hjerterytmevariabilitet og bevegelse med din mentale kapasitet. Flow Helsepartner gir handlingsrettet innsikt for å forberede fysiologien din for dypt arbeid.',
    price: 0,
    displayPrice: 'Coming Soon',
    displayPrice_no: 'Kommer Snart',
    category: 'Health & Energy',
    category_no: 'Helse & Energi',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000',
    gallery: [],
    features: ['HRV Correlation', 'Sleep Optimization', 'Recovery Scores'],
    features_no: ['HRV-korrelasjon', 'Søvnoptimalisering', 'Restitusjonsscore']
  },
  {
    id: 't3',
    name: 'Flow Story Coach',
    name_no: 'Flow Historieforteller',
    tagline: 'In development',
    tagline_no: 'Under utvikling',
    description: 'Unblock your creativity with structured narrative guidance.',
    description_no: 'Frigjør kreativiteten din med strukturert narrativ veiledning.',
    longDescription: 'Whether you are writing a novel or a pitch deck, Flow Story Coach uses advanced LLMs to act as a Socratic partner. It asks the right questions to untangle plot holes and refine your messaging, without writing the content for you.',
    longDescription_no: 'Enten du skriver en roman eller en presentasjon, bruker Flow Historieforteller avanserte språkmodeller for å fungere som en sokratisk partner. Den stiller de riktige spørsmålene for å løse opp i plothull og forbedre budskapet ditt, uten å skrive innholdet for deg.',
    price: 0,
    displayPrice: 'Coming Soon',
    displayPrice_no: 'Kommer Snart',
    category: 'Content & Creativity',
    category_no: 'Innhold & Kreativitet',
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1000',
    gallery: [],
    features: ['Socratic Mode', 'Narrative Structure', 'Block Breaker'],
    features_no: ['Sokratisk Modus', 'Narrativ Struktur', 'Blokkeringsbryter']
  },
  {
    id: 't4',
    name: 'Flow Business Companion',
    name_no: 'Flow Forretningspartner',
    tagline: 'In development',
    tagline_no: 'Under utvikling',
    description: 'Strategic clarity for complex decision making.',
    description_no: 'Strategisk klarhet for komplekse beslutningsprosesser.',
    longDescription: 'A decision-support system that helps you map out strategic options, weigh risks, and simulate outcomes. The Flow Business Companion forces you to slow down and think through second-order consequences.',
    longDescription_no: 'Et beslutningsstøttesystem som hjelper deg med å kartlegge strategiske alternativer, veie risikoer og simulere utfall. Flow Forretningspartner tvinger deg til å senke farten og tenke gjennom andreordens konsekvenser.',
    price: 0,
    displayPrice: 'Coming Soon',
    displayPrice_no: 'Kommer Snart',
    category: 'Work & Strategy',
    category_no: 'Arbeid & Strategi',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    gallery: [],
    features: ['Decision Mapping', 'Risk Analysis', 'Strategy Simulation'],
    features_no: ['Beslutningskartlegging', 'Risikoanalyse', 'Strategisimulering']
  }
];

export const FLOW_TOOLS_DATA: FlowTool[] = [
  {
    id: 'flow-planner',
    title: 'Flow Planner',
    title_no: 'Flow Planlegger',
    description: 'An AI-assisted planning companion for structure, focus and daily clarity.',
    description_no: 'En KI-assistert planleggingspartner for struktur, fokus og daglig klarhet.',
    slug: 'flow-planner'
  },
  {
    id: 'health-companion',
    title: 'Flow Health Companion',
    title_no: 'Flow Helsepartner',
    description: 'A personal experiment combining data, reflection and AI to support sleep, energy and migraines.',
    description_no: 'Et personlig eksperiment som kombinerer data, refleksjon og KI for å støtte søvn, energi og migrene.',
    slug: 'health-companion'
  },
  {
    id: 'story-coach',
    title: 'Flow Story Coach',
    title_no: 'Flow Historieforteller',
    description: 'An AI helper for creating content on Snapchat, TikTok and LinkedIn with less friction.',
    description_no: 'En KI-hjelper for å skape innhold på Snapchat, TikTok og LinkedIn med mindre friksjon.',
    slug: 'story-coach'
  },
  {
    id: 'business-companion',
    title: 'Flow Business Companion',
    title_no: 'Flow Forretningspartner',
    description: 'A work assistant for documents, workshops and strategy using generative AI.',
    description_no: 'En arbeidsassistent for dokumenter, workshops og strategi ved bruk av generativ KI.',
    slug: 'business-companion'
  }
];

export const RECOMMENDED_TOOLS_DATA: RecommendedTool[] = [
  {
    id: 'lovable',
    name: 'Lovable',
    description: 'AI-powered web and app builder used to prototype and design this site.',
    description_no: 'KI-drevet nett- og appbygger brukt til å prototypere og designe denne siden.',
    category: 'Development',
    category_no: 'Utvikling',
    imageUrl: 'lovable-icon-light.png',
    link: 'https://lovable.dev/?via=div',
    detailedContent: React.createElement(React.Fragment, null,
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4 mt-8" }, "What is Lovable?"),
      React.createElement("p", { className: "mb-6 text-[var(--text-primary)]" }, 
        "Lovable is an AI-powered platform for building web applications. It allows you to create full-featured React applications by describing what you want in natural language."
      ),
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "Main Features"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-3 mb-8 text-[var(--text-primary)]" },
        React.createElement("li", null, React.createElement("strong", null, "AI-Assisted Development:"), " Chat with AI to build and iterate on projects"),
        React.createElement("li", null, React.createElement("strong", null, "Visual Edits:"), " Click directly on elements to change text, colors, and design"),
        React.createElement("li", null, React.createElement("strong", null, "Lovable Cloud:"), " Built-in backend with database, authentication, and file storage"),
        React.createElement("li", null, React.createElement("strong", null, "Modern Stack:"), " React, TypeScript, Tailwind CSS, shadcn/ui"),
        React.createElement("li", null, React.createElement("strong", null, "Deployment:"), " One-click publishing"),
        React.createElement("li", null, React.createElement("strong", null, "Collaboration:"), " Invite team members to workspace")
      ),
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "Use Cases"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-2 mb-8 text-[var(--text-primary)]" },
        React.createElement("li", null, "Prototypes and MVPs"),
        React.createElement("li", null, "Internal tools"),
        React.createElement("li", null, "Landing pages and websites"),
        React.createElement("li", null, "Full-stack web applications"),
        React.createElement("li", null, "SaaS products")
      ),
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "Benefits"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-2 text-[var(--text-primary)]" },
        React.createElement("li", null, "Rapid development from idea to finished product"),
        React.createElement("li", null, "No need for complex setup"),
        React.createElement("li", null, "Scalable infrastructure"),
        React.createElement("li", null, "Open source under the hood (can export to GitHub)")
      )
    ),
    detailedContent_no: React.createElement(React.Fragment, null,
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4 mt-8" }, "Hva er Lovable?"),
      React.createElement("p", { className: "mb-6 text-[var(--text-primary)]" }, 
        "Lovable er en KI-drevet plattform for å bygge webapplikasjoner. Den lar deg lage fullverdige React-applikasjoner ved å beskrive hva du vil ha med naturlig språk."
      ),
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "Hovedfunksjoner"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-3 mb-8 text-[var(--text-primary)]" },
        React.createElement("li", null, React.createElement("strong", null, "KI-assistert utvikling:"), " Chat med KI for å bygge og iterere på prosjekter"),
        React.createElement("li", null, React.createElement("strong", null, "Visuelle redigeringer:"), " Klikk direkte på elementer for å endre tekst, farger og design"),
        React.createElement("li", null, React.createElement("strong", null, "Lovable Cloud:"), " Innebygd backend med database, autentisering og fillagring"),
        React.createElement("li", null, React.createElement("strong", null, "Moderne stack:"), " React, TypeScript, Tailwind CSS, shadcn/ui"),
        React.createElement("li", null, React.createElement("strong", null, "Publisering:"), " Publiser med ett klikk"),
        React.createElement("li", null, React.createElement("strong", null, "Samarbeid:"), " Inviter teammedlemmer til workspace")
      ),
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "Bruksområder"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-2 mb-8 text-[var(--text-primary)]" },
        React.createElement("li", null, "Prototyper og MVP-er"),
        React.createElement("li", null, "Interne verktøy"),
        React.createElement("li", null, "Landingssider og nettsteder"),
        React.createElement("li", null, "Full-stack webapplikasjoner"),
        React.createElement("li", null, "SaaS-produkter")
      ),
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "Fordeler"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-2 text-[var(--text-primary)]" },
        React.createElement("li", null, "Rask utvikling fra idé til ferdig produkt"),
        React.createElement("li", null, "Ingen behov for kompleks oppsett"),
        React.createElement("li", null, "Skalerbar infrastruktur"),
        React.createElement("li", null, "Åpen kildekode under panseret (kan eksporteres til GitHub)")
      )
    )
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'Conversational AI assistant used for ideas, writing and problem-solving.',
    description_no: 'Samtalebasert KI-assistent brukt for ideer, skriving og problemløsning.',
    category: 'Assistant',
    category_no: 'Assistent',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    link: 'https://chatgpt.com/nb-NO/overview?openaicom_referred=true',
    detailedContent: React.createElement(React.Fragment, null,
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4 mt-8" }, "What is ChatGPT?"),
      React.createElement("p", { className: "mb-6 text-[var(--text-primary)]" }, 
        "ChatGPT is an advanced conversational AI developed by OpenAI. It acts as a versatile cognitive partner that can help you draft text, analyze data, write code, and brainstorm ideas. Unlike simple search engines, it understands context and nuance, allowing for deep, iterative dialogue."
      ),
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "How to Personalize It"),
      React.createElement("p", { className: "mb-4 text-[var(--text-primary)]" },
        "To make ChatGPT truly effective for your specific flow, you should configure ",
        React.createElement("strong", null, "Custom Instructions"),
        ". This feature allows you to set a persistent context so you don't have to repeat yourself in every new chat."
      ),
      React.createElement("ul", { className: "list-disc pl-5 space-y-3 mb-8 text-[var(--text-primary)]" },
        React.createElement("li", null, React.createElement("strong", null, "1. Define your Role:"), " Tell the model who you are and what you do (e.g., 'I work in the public sector with a focus on responsible AI')."),
        React.createElement("li", null, React.createElement("strong", null, "2. Set Tone & Format:"), " Specify how you want answers to be delivered (e.g., 'Be concise, use bullet points, and avoid corporate jargon')."),
        React.createElement("li", null, React.createElement("strong", null, "3. Enable Memory:"), " Allow the model to remember key details from past conversations to provide more relevant assistance over time.")
      )
    ),
    detailedContent_no: React.createElement(React.Fragment, null,
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4 mt-8" }, "Hva er ChatGPT?"),
      React.createElement("p", { className: "mb-6 text-[var(--text-primary)]" }, 
        "ChatGPT er en avansert samtalebasert KI utviklet av OpenAI. Den fungerer som en allsidig kognitiv partner som kan hjelpe deg med å skrive tekst, analysere data, kode og brainstorme ideer. I motsetning til enkle søkemotorer forstår den kontekst og nyanser, noe som muliggjør dyp, iterativ dialog."
      ),
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "Hvordan personalisere den"),
      React.createElement("p", { className: "mb-4 text-[var(--text-primary)]" },
        "For å gjøre ChatGPT virkelig effektiv for din flyt, bør du konfigurere ",
        React.createElement("strong", null, "Tilpassede Instruksjoner (Custom Instructions)"),
        ". Denne funksjonen lar deg sette en varig kontekst slik at du slipper å gjenta deg selv i hver nye chat."
      ),
      React.createElement("ul", { className: "list-disc pl-5 space-y-3 mb-8 text-[var(--text-primary)]" },
        React.createElement("li", null, React.createElement("strong", null, "1. Definer din rolle:"), " Fortell modellen hvem du er og hva du gjør (f.eks. 'Jeg jobber i offentlig sektor med fokus på ansvarlig KI')."),
        React.createElement("li", null, React.createElement("strong", null, "2. Sett tone og format:"), " Spesifiser hvordan du vil ha svarene levert (f.eks. 'Vær kortfattet, bruk kulepunkter, og unngå konsulentspråk')."),
        React.createElement("li", null, React.createElement("strong", null, "3. Aktiver minne:"), " Tillat modellen å huske nøkkeldetaljer fra tidligere samtaler for å gi mer relevant hjelp over tid.")
      )
    )
  },
  {
    id: 'gemini',
    name: 'Google AI Studio (Gemini)',
    description: 'Playground for building and testing AI-powered apps and prototypes.',
    description_no: 'Lekeplass for å bygge og teste KI-drevne apper og prototyper.',
    category: 'Development',
    category_no: 'Utvikling',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000',
    link: 'https://aistudio.google.com/',
    detailedContent: React.createElement(React.Fragment, null,
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4 mt-8" }, "What is Google AI Studio?"),
      React.createElement("p", { className: "mb-6 text-[var(--text-primary)]" }, 
        "Google AI Studio is a web-based prototyping environment for developers. It allows you to quickly test Gemini models, experiment with different prompts, and get API keys to build your own applications."
      ),
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "Why I Use It"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-3 mb-8 text-[var(--text-primary)]" },
        React.createElement("li", null, React.createElement("strong", null, "Rapid Prototyping:"), " You can test an idea in seconds without writing a single line of code."),
        React.createElement("li", null, React.createElement("strong", null, "System Instructions:"), " It allows you to define the 'persona' of the AI (e.g., 'You are a calm productivity coach') which is essential for building specialized tools."),
        React.createElement("li", null, React.createElement("strong", null, "Free Tier:"), " It offers a generous free tier for experimentation and personal projects.")
      )
    ),
    detailedContent_no: React.createElement(React.Fragment, null,
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4 mt-8" }, "Hva er Google AI Studio?"),
      React.createElement("p", { className: "mb-6 text-[var(--text-primary)]" }, 
        "Google AI Studio er et nettbasert prototypingsmiljø for utviklere. Det lar deg raskt teste Gemini-modeller, eksperimentere med ulike prompter, og få API-nøkler for å bygge dine egne applikasjoner."
      ),
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "Hvorfor jeg bruker det"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-3 mb-8 text-[var(--text-primary)]" },
        React.createElement("li", null, React.createElement("strong", null, "Rask Prototyping:"), " Du kan teste en idé på sekunder uten å skrive en eneste linje kode."),
        React.createElement("li", null, React.createElement("strong", null, "Systeminstruksjoner:"), " Det lar deg definere 'personaen' til KI-en (f.eks. 'Du er en rolig produktivitetscoach') som er essensielt for å bygge spesialiserte verktøy."),
        React.createElement("li", null, React.createElement("strong", null, "Gratis nivå:"), " Det tilbyr et raust gratisnivå for eksperimentering og personlige prosjekter.")
      )
    )
  },
  {
    id: 'poe',
    name: 'Poe',
    description: 'Multi-model chat interface for accessing different AI models in one place.',
    description_no: 'Multimodell chat-grensesnitt for tilgang til ulike KI-modeller på ett sted.',
    category: 'Aggregator',
    category_no: 'Aggregator',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000',
    link: 'https://poe.com/',
    detailedContent: React.createElement(React.Fragment, null,
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4 mt-8" }, "What is Poe?"),
      React.createElement("p", { className: "mb-6 text-[var(--text-primary)]" }, 
        "Poe (Platform for Open Exploration) is an AI aggregator by Quora. It gives you access to the world's best models—like GPT-4, Claude 3.5 Sonnet, and Llama—all in a single, unified chat interface."
      ),
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "Key Features"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-3 mb-8 text-[var(--text-primary)]" },
        React.createElement("li", null, React.createElement("strong", null, "Model Comparison:"), " You can ask the same question to different models to see which one gives the best answer."),
        React.createElement("li", null, React.createElement("strong", null, "Create Bots:"), " You can create your own custom bots with specific instructions and share them with others."),
        React.createElement("li", null, React.createElement("strong", null, "Access to Niche Models:"), " It provides access to specialized models for coding, creative writing, and image generation.")
      )
    ),
    detailedContent_no: React.createElement(React.Fragment, null,
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4 mt-8" }, "Hva er Poe?"),
      React.createElement("p", { className: "mb-6 text-[var(--text-primary)]" }, 
        "Poe (Platform for Open Exploration) er en KI-aggregator fra Quora. Den gir deg tilgang til verdens beste modeller – som GPT-4, Claude 3.5 Sonnet og Llama – alt i ett enkelt, samlet chat-grensesnitt."
      ),
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "Nøkkelfunksjoner"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-3 mb-8 text-[var(--text-primary)]" },
        React.createElement("li", null, React.createElement("strong", null, "Modell-sammenligning:"), " Du kan stille samme spørsmål til ulike modeller for å se hvilken som gir best svar."),
        React.createElement("li", null, React.createElement("strong", null, "Lag boter:"), " Du kan lage dine egne tilpassede boter med spesifikke instruksjoner og dele dem med andre."),
        React.createElement("li", null, React.createElement("strong", null, "Tilgang til nisjemodeller:"), " Det gir tilgang til spesialiserte modeller for koding, kreativ skriving og bildegenerering.")
      )
    )
  },
  {
    id: 'replit',
    name: 'Replit',
    description: 'Cloud-based IDE with AI-assisted coding for quick prototypes.',
    description_no: 'Skybasert IDE med KI-assistert koding for raske prototyper.',
    category: 'Development',
    category_no: 'Utvikling',
    imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1000',
    link: 'https://replit.com/',
    detailedContent: React.createElement(React.Fragment, null,
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4 mt-8" }, "What is Replit?"),
      React.createElement("p", { className: "mb-6 text-[var(--text-primary)]" }, 
        "Replit is a collaborative, cloud-based Integrated Development Environment (IDE). It allows you to write, run, and host code directly from your browser, making it incredibly fast to spin up new projects."
      ),
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "Why It Matters"),
      React.createElement("p", { className: "mb-6 text-[var(--text-primary)]" },
        "For non-traditional developers, setting up a local coding environment (installing Python, Node.js, git, etc.) is a huge barrier. Replit removes this barrier completely."
      ),
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "AI Features"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-3 mb-8 text-[var(--text-primary)]" },
        React.createElement("li", null, React.createElement("strong", null, "Replit Agent:"), " An autonomous coding agent that can build entire apps from a simple description."),
        React.createElement("li", null, React.createElement("strong", null, "Ghostwriter:"), " An intelligent code completion tool that helps you write code faster and fix errors.")
      )
    ),
    detailedContent_no: React.createElement(React.Fragment, null,
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4 mt-8" }, "Hva er Replit?"),
      React.createElement("p", { className: "mb-6 text-[var(--text-primary)]" }, 
        "Replit er et samarbeidsorientert, skybasert utviklingsmiljø (IDE). Det lar deg skrive, kjøre og hoste kode direkte fra nettleseren din, noe som gjør det utrolig raskt å starte nye prosjekter."
      ),
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "Hvorfor det er viktig"),
      React.createElement("p", { className: "mb-6 text-[var(--text-primary)]" },
        "For ikke-tradisjonelle utviklere er det å sette opp et lokalt kodemiljø (installere Python, Node.js, git osv.) en stor barriere. Replit fjerner denne barrieren fullstendig."
      ),
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "KI-funksjoner"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-3 mb-8 text-[var(--text-primary)]" },
        React.createElement("li", null, React.createElement("strong", null, "Replit Agent:"), " En autonom kodeagent som kan bygge hele apper fra en enkel beskrivelse."),
        React.createElement("li", null, React.createElement("strong", null, "Ghostwriter:"), " Et intelligent kodefullføringsverktøy som hjelper deg å skrive kode raskere og fikse feil.")
      )
    )
  },
  {
    id: 'copilot',
    name: 'Microsoft Copilot',
    description: 'AI assistant inside Microsoft 365 for documents, emails and meetings.',
    description_no: 'KI-assistent i Microsoft 365 for dokumenter, e-poster og møter.',
    category: 'Productivity',
    category_no: 'Produktivitet',
    imageUrl: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1000',
    link: 'https://copilot.microsoft.com/',
    detailedContent: React.createElement(React.Fragment, null,
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4 mt-8" }, "What is Microsoft Copilot?"),
      React.createElement("p", { className: "mb-6 text-[var(--text-primary)]" }, 
        "Microsoft Copilot is an AI assistant embedded directly into the Microsoft 365 apps you use every day—Word, Excel, PowerPoint, Outlook, and Teams."
      ),
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "Everyday Use Cases"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-3 mb-8 text-[var(--text-primary)]" },
        React.createElement("li", null, React.createElement("strong", null, "Meeting Summaries:"), " Automatically generate notes and action items from Teams meetings."),
        React.createElement("li", null, React.createElement("strong", null, "Document Drafting:"), " Generate first drafts of reports, proposals, and emails in seconds."),
        React.createElement("li", null, React.createElement("strong", null, "Data Analysis:"), " Ask questions about your Excel data in plain English to uncover trends and insights.")
      ),
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "Why It's Different"),
      React.createElement("p", { className: "mb-6 text-[var(--text-primary)]" },
        "Because it is grounded in your work data (Microsoft Graph), it understands your context—your colleagues, your meetings, and your documents—making it uniquely useful for enterprise tasks."
      )
    ),
    detailedContent_no: React.createElement(React.Fragment, null,
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4 mt-8" }, "Hva er Microsoft Copilot?"),
      React.createElement("p", { className: "mb-6 text-[var(--text-primary)]" }, 
        "Microsoft Copilot er en KI-assistent innebygd direkte i Microsoft 365-appene du bruker hver dag – Word, Excel, PowerPoint, Outlook og Teams."
      ),
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "Hverdagsbruk"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-3 mb-8 text-[var(--text-primary)]" },
        React.createElement("li", null, React.createElement("strong", null, "Møtesammendrag:"), " Generer automatisk notater og gjøremål fra Teams-møter."),
        React.createElement("li", null, React.createElement("strong", null, "Dokumentskriving:"), " Generer førsteutkast til rapporter, forslag og e-poster på sekunder."),
        React.createElement("li", null, React.createElement("strong", null, "Dataanalyse:"), " Still spørsmål om Excel-dataene dine på vanlig språk for å avdekke trender og innsikt.")
      ),
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "Hvorfor det er annerledes"),
      React.createElement("p", { className: "mb-6 text-[var(--text-primary)]" },
        "Fordi det er forankret i arbeidsdataene dine (Microsoft Graph), forstår det konteksten din – kollegene dine, møtene dine og dokumentene dine – noe som gjør det unikt nyttig for virksomhetsoppgaver."
      )
    )
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 999,
    title: "How I Built This Website — A Reflection on AI-Assisted Development",
    title_no: "Hvordan jeg bygget denne nettsiden — En refleksjon over KI-assistert utvikling",
    date: "November 2025",
    date_no: "November 2025",
    excerpt: "A deep dive into the process of building The Flow Mode with generative AI.",
    excerpt_no: "Et dypdykk i prosessen med å bygge The Flow Mode med generativ KI.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000",
    content: React.createElement(HowIBuiltThisArticleEn, null),
    content_no: React.createElement(HowIBuiltThisArticleNo, null)
  },
  {
    id: 1,
    title: "Getting Started with Generative AI at Work",
    title_no: "Kom i gang med Generativ KI på jobb",
    date: "November 2025",
    date_no: "November 2025",
    excerpt: "A practical introduction to using AI safely and effectively in everyday tasks.",
    excerpt_no: "En praktisk introduksjon til trygg og effektiv bruk av KI i hverdagsoppgaver.",
    image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&q=80&w=1000",
    content: React.createElement(React.Fragment, null,
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "Starting Small"),
      React.createElement("p", { className: "mb-6" }, 
        "The best way to learn generative AI is not to read about it, but to use it. Start with low-stakes tasks. Ask ChatGPT to summarize a long email, draft a meeting agenda, or suggest five headlines for a presentation."
      ),
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "The 'Human in the Loop'"),
      React.createElement("p", { className: "mb-6" },
        "Never copy-paste blindly. AI is a reasoning engine, not a fact database. It can hallucinate. Always review, edit, and fact-check the output. Treat the AI as an eager intern: talented and fast, but inexperienced."
      )
    ),
    content_no: React.createElement(React.Fragment, null,
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "Start i det små"),
      React.createElement("p", { className: "mb-6" }, 
        "Den beste måten å lære generativ KI på er ikke å lese om det, men å bruke det. Start med oppgaver med lav risiko. Be ChatGPT oppsummere en lang e-post, lage utkast til en møteagenda, eller foreslå fem overskrifter til en presentasjon."
      ),
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "'Mennesket i loopen'"),
      React.createElement("p", { className: "mb-6" },
        "Kopier aldri blindt. KI er en resonneringsmotor, ikke en faktadatabase. Den kan hallusinere. Gjennomgå, rediger og faktasjekk alltid resultatet. Behandle KI som en ivrig praktikant: talentfull og rask, men uerfaren."
      )
    )
  },
  {
    id: 2,
    title: "Using Copilot and ChatGPT Without Losing Control",
    title_no: "Bruk Copilot og ChatGPT uten å miste kontrollen",
    date: "November 2025",
    date_no: "November 2025",
    excerpt: "Simple principles for responsible AI use in organisations.",
    excerpt_no: "Enkle prinsipper for ansvarlig KI-bruk i organisasjoner.",
    image: "https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?auto=format&fit=crop&q=80&w=1000",
    content: React.createElement(React.Fragment, null,
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "Data Privacy First"),
      React.createElement("p", { className: "mb-6" }, 
        "Before pasting anything into an AI tool, ask yourself: 'Is this public information?' If the answer is no, check your organization's policy. Tools like Microsoft Copilot (Enterprise) are designed to keep data secure within your tenant, while free versions of ChatGPT use your data for training."
      ),
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "Bias and Fairness"),
      React.createElement("p", { className: "mb-6" },
        "AI models reflect the biases in their training data. When using AI for decisions that affect people (like recruitment or benefits), be hyper-aware of potential bias. Use AI to inform your decision, not to make it for you."
      )
    ),
    content_no: React.createElement(React.Fragment, null,
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "Personvern først"),
      React.createElement("p", { className: "mb-6" }, 
        "Før du limer inn noe i et KI-verktøy, spør deg selv: 'Er dette offentlig informasjon?' Hvis svaret er nei, sjekk organisasjonens retningslinjer. Verktøy som Microsoft Copilot (Enterprise) er designet for å holde data sikre innenfor din leier, mens gratisversjoner av ChatGPT bruker dataene dine til trening."
      ),
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "Skjevhet og rettferdighet"),
      React.createElement("p", { className: "mb-6" },
        "KI-modeller gjenspeiler skjevhetene i treningsdataene sine. Når du bruker KI til beslutninger som påvirker mennesker (som rekruttering eller ytelser), vær hyperbevisst på potensiell bias. Bruk KI til å informere beslutningen din, ikke til å ta den for deg."
      )
    )
  },
  {
    id: 3,
    title: "Designing a Life in Flow with AI",
    title_no: "Designe et liv i flyt med KI",
    date: "November 2025",
    date_no: "November 2025",
    excerpt: "How AI tools can reduce friction, support focus and create more mental space.",
    excerpt_no: "Hvordan KI-verktøy kan redusere friksjon, støtte fokus og skape mer mentalt rom.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1000",
    content: React.createElement(React.Fragment, null,
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "Offloading Cognitive Load"),
      React.createElement("p", { className: "mb-6" }, 
        "Our brains are for having ideas, not holding them. Use AI to capture and structure your thoughts. Dictate a stream of consciousness to ChatGPT and ask it to organize it into a project plan. This clears your working memory for deep thinking."
      ),
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "Automating the Trivial"),
      React.createElement("p", { className: "mb-6" },
        "Identify the repetitive tasks that drain your energy—scheduling, formatting documents, searching for files. These are prime candidates for AI automation. By delegating the friction, you buy back time for flow."
      )
    ),
    content_no: React.createElement(React.Fragment, null,
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "Avlaste kognitiv belastning"),
      React.createElement("p", { className: "mb-6" }, 
        "Hjernene våre er til for å få ideer, ikke holde på dem. Bruk KI til å fange og strukturere tankene dine. Dikter en strøm av bevissthet til ChatGPT og be den organisere det i en prosjektplan. Dette frigjør arbeidsminnet ditt for dyp tenkning."
      ),
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "Automatisere det trivielle"),
      React.createElement("p", { className: "mb-6" },
        "Identifiser de repeterende oppgavene som tapper deg for energi – planlegging, formatering av dokumenter, søking etter filer. Disse er gode kandidater for KI-automatisering. Ved å delegere friksjonen kjøper du tilbake tid til flyt."
      )
    )
  },
  {
    id: 4,
    title: "The Principles of Responsible AI",
    title_no: "Prinsippene for Ansvarlig KI",
    date: "November 2025",
    date_no: "November 2025",
    excerpt: "Understanding fairness, accountability, and transparency in the age of algorithms.",
    excerpt_no: "Forståelse av rettferdighet, ansvarlighet og transparens i algoritmenes tidsalder.",
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=1000",
    content: React.createElement(React.Fragment, null,
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "Fairness and Non-Discrimination"),
      React.createElement("p", { className: "mb-6" }, 
        "AI systems learn from historic data, which often contains historic biases. Responsible AI requires us to actively audit models to ensure they do not discriminate against specific groups based on race, gender, or socioeconomic status. It is not enough to just 'use' the model; we must interrogate it."
      ),
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "Transparency and Trust"),
      React.createElement("p", { className: "mb-6" },
        "Black box models pose a risk to accountability. In The Flow Mode, we advocate for 'explainable AI' where possible. Users should know when they are interacting with an AI, and stakeholders should understand the factors driving automated suggestions."
      )
    ),
    content_no: React.createElement(React.Fragment, null,
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "Rettferdighet og ikke-diskriminering"),
      React.createElement("p", { className: "mb-6" }, 
        "KI-systemer lærer fra historiske data, som ofte inneholder historiske skjevheter. Ansvarlig KI krever at vi aktivt reviderer modeller for å sikre at de ikke diskriminerer spesifikke grupper basert på rase, kjønn eller sosioøkonomisk status. Det er ikke nok å bare 'bruke' modellen; vi må utfordre den."
      ),
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "Transparens og tillit"),
      React.createElement("p", { className: "mb-6" },
        "Svarte boks-modeller utgjør en risiko for ansvarlighet. I The Flow Mode argumenterer vi for 'forklarbar KI' der det er mulig. Brukere bør vite når de samhandler med en KI, og interessenter bør forstå faktorene som driver automatiserte forslag."
      )
    )
  },
  {
    id: 5,
    title: "AI Governance in the Public Sector",
    title_no: "KI-styring i Offentlig Sektor",
    date: "November 2025",
    date_no: "November 2025",
    excerpt: "Navigating the balance between innovation and public duty.",
    excerpt_no: "Navigere balansen mellom innovasjon og samfunnsoppdrag.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
    content: React.createElement(React.Fragment, null,
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "The High Stakes of Public Trust"),
      React.createElement("p", { className: "mb-6" }, 
        "When public services adopt AI, the standard for accuracy and fairness is exceptionally high. Unlike a Netflix recommendation, a recommendation in social services affects lives. Innovation must never come at the cost of citizens' rights or due process."
      ),
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "Compliance as Design"),
      React.createElement("p", { className: "mb-6" },
        "We view GDPR and ethical guidelines not as bureaucratic hurdles, but as essential design constraints. By building privacy and human oversight into the workflow from day one, we create systems that are robust, sustainable, and worthy of the public's confidence."
      )
    ),
    content_no: React.createElement(React.Fragment, null,
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "Høy innsats for offentlig tillit"),
      React.createElement("p", { className: "mb-6" }, 
        "Når offentlige tjenester tar i bruk KI, er standarden for nøyaktighet og rettferdighet eksepsjonelt høy. I motsetning til en Netflix-anbefaling, påvirker en anbefaling i sosialtjenesten liv. Innovasjon må aldri gå på bekostning av innbyggernes rettigheter eller rettssikkerhet."
      ),
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "Etterlevelse som design"),
      React.createElement("p", { className: "mb-6" },
        "Vi ser på GDPR og etiske retningslinjer ikke som byråkratiske hindre, men som essensielle designbegrensninger. Ved å bygge personvern og menneskelig tilsyn inn i arbeidsflyten fra dag én, skaper vi systemer som er robuste, bærekraftige og verdige publikums tillit."
      )
    )
  },
  {
    id: 6,
    title: "Deepfakes and the Age of Critical Thinking",
    title_no: "Deepfakes og Kritisk Tenkningens Tidsalder",
    date: "November 2025",
    date_no: "November 2025",
    excerpt: "How to navigate a world where seeing is no longer believing.",
    excerpt_no: "Hvordan navigere i en verden der det å se ikke lenger er å tro.",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=1000",
    content: React.createElement(React.Fragment, null,
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "The Erosion of Truth"),
      React.createElement("p", { className: "mb-6" }, 
        "We are entering an era where audio and video can be synthesized with terrifying accuracy. Deepfakes challenge our fundamental assumption that 'seeing is believing'. In this new landscape, skepticism is not cynicism; it is a necessary survival skill."
      ),
      React.createElement("h3", { className: "text-2xl font-serif text-[var(--heading-color)] mb-4" }, "Critical Thinking as a Survival Skill"),
      React.createElement("p", { className: "mb-6" },
        "To navigate this, we must slow down. Verify sources before sharing. Ask: 'Does this provoke an emotional reaction intentionally?' We must move from passive consumption to active verification. The human ability to question context is our best defense against synthetic deception."
      )
    )
  }
];

export const BRAND_NAME = 'The Flow Mode';
