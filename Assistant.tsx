
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';
import { useLanguage } from '../contexts/LanguageContext';

const Assistant: React.FC = () => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Initialize messages on load or language change if empty
  useEffect(() => {
    if (messages.length === 0) {
        setMessages([{ role: 'model', text: t.assistant.initialMessage, timestamp: Date.now() }]);
    }
  }, [t.assistant.initialMessage]);

  // Optionally reset welcome message when language changes? 
  // Probably better not to clear history, but maybe append a new welcome message or just let it be.
  // For simplicity, if we haven't started chatting, update the initial message.
  useEffect(() => {
      if (messages.length === 1 && messages[0].role === 'model') {
          setMessages([{ role: 'model', text: t.assistant.initialMessage, timestamp: Date.now() }]);
      }
  }, [language, t.assistant.initialMessage]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsThinking(true);

    try {
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      // Pass language preference to the service if needed, though prompt handles it via detection
      // But we can implicitly hint it by the user's input language.
      const responseText = await sendMessageToGemini(history, userMsg.text);
      
      const aiMsg: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
        // Error handled in service
    } finally {
      setIsThinking(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end font-sans">
      {isOpen && (
        <div className="bg-[var(--background)] rounded-3xl shadow-2xl shadow-[var(--card-shadow)] w-[90vw] sm:w-[380px] h-[550px] mb-6 flex flex-col overflow-hidden border border-[var(--border)] animate-slide-up-fade">
          {/* Header */}
          <div className="bg-[var(--surface)] p-5 border-b border-[var(--border)] flex justify-between items-center">
            <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[var(--heading-color)] rounded-full animate-pulse"></div>
                <span className="font-sans font-medium text-[var(--heading-color)] text-sm tracking-wide">{t.assistant.title}</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-[var(--text-secondary)] hover:text-[var(--heading-color)] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-[var(--background)]" ref={scrollRef}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-4 text-sm leading-relaxed rounded-2xl ${
                    msg.role === 'user' 
                      ? 'bg-[var(--heading-color)] text-white rounded-br-none' 
                      : 'bg-[var(--surface)] border border-[var(--border)] text-[var(--text-primary)] shadow-sm rounded-bl-none'
                  }`}
                  style={{ whiteSpace: 'pre-wrap' }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isThinking && (
               <div className="flex justify-start">
                 <div className="bg-[var(--surface)] border border-[var(--border)] p-4 flex gap-1 items-center shadow-sm rounded-2xl rounded-bl-none">
                   <div className="w-1.5 h-1.5 bg-[var(--text-secondary)] rounded-full animate-bounce"></div>
                   <div className="w-1.5 h-1.5 bg-[var(--text-secondary)] rounded-full animate-bounce delay-75"></div>
                   <div className="w-1.5 h-1.5 bg-[var(--text-secondary)] rounded-full animate-bounce delay-150"></div>
                 </div>
               </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-5 bg-[var(--surface)] border-t border-[var(--border)]">
            <div className="flex gap-2 relative">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder={t.assistant.placeholder} 
                className="flex-1 bg-[var(--background)] border border-[var(--border)] focus:border-[var(--heading-color)] px-4 py-3 text-sm outline-none transition-colors placeholder-[var(--text-secondary)] text-[var(--heading-color)] rounded-xl"
              />
              <button 
                onClick={handleSend}
                disabled={!inputValue.trim() || isThinking}
                className="bg-[var(--heading-color)] text-white px-4 hover:bg-[var(--text-primary)] transition-colors disabled:opacity-50 rounded-xl"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[var(--heading-color)] text-white w-14 h-14 flex items-center justify-center rounded-full shadow-xl hover:scale-105 transition-all duration-500 z-50"
      >
        {isOpen ? (
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
             </svg>
        ) : (
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
             </svg>
        )}
      </button>
    </div>
  );
};

export default Assistant;
