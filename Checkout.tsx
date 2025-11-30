
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface CheckoutProps {
  items: Product[];
  onBack: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ items, onBack }) => {
  const { t, language } = useLanguage();
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen pt-32 pb-32 px-6 bg-[var(--background)] animate-fade-in-up">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--heading-color)] transition-colors mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          {t.checkout.backLink}
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Form */}
          <div>
            <h1 className="text-3xl font-serif text-[var(--heading-color)] mb-4 tracking-tight">{t.checkout.title}</h1>
            <p className="text-sm text-[var(--text-primary)] mb-12">{t.checkout.disabledNote}</p>
            
            <div className="space-y-12">
              {/* Section 1: Contact */}
              <div>
                <h2 className="text-xl font-serif text-[var(--heading-color)] mb-6">{t.checkout.contactInfo}</h2>
                <div className="space-y-4">
                   <input type="email" placeholder={t.checkout.email} className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--heading-color)] placeholder-[var(--text-secondary)] outline-none focus:border-[var(--heading-color)] transition-colors cursor-not-allowed" disabled />
                   <div className="flex items-center gap-2">
                     <input type="checkbox" id="newsletter" className="accent-[var(--heading-color)] cursor-not-allowed" disabled />
                     <label htmlFor="newsletter" className="text-sm text-[var(--text-primary)] cursor-not-allowed">{t.checkout.newsletter}</label>
                   </div>
                </div>
              </div>

              {/* Section 2: Shipping */}
              <div>
                <h2 className="text-xl font-serif text-[var(--heading-color)] mb-6">{t.checkout.shippingAddr}</h2>
                <div className="space-y-4">
                   <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder={t.checkout.firstName} className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--heading-color)] placeholder-[var(--text-secondary)] outline-none focus:border-[var(--heading-color)] transition-colors cursor-not-allowed" disabled />
                      <input type="text" placeholder={t.checkout.lastName} className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--heading-color)] placeholder-[var(--text-secondary)] outline-none focus:border-[var(--heading-color)] transition-colors cursor-not-allowed" disabled />
                   </div>
                   <input type="text" placeholder={t.checkout.address} className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--heading-color)] placeholder-[var(--text-secondary)] outline-none focus:border-[var(--heading-color)] transition-colors cursor-not-allowed" disabled />
                   <input type="text" placeholder={t.checkout.apt} className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--heading-color)] placeholder-[var(--text-secondary)] outline-none focus:border-[var(--heading-color)] transition-colors cursor-not-allowed" disabled />
                   <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder={t.checkout.city} className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--heading-color)] placeholder-[var(--text-secondary)] outline-none focus:border-[var(--heading-color)] transition-colors cursor-not-allowed" disabled />
                      <input type="text" placeholder={t.checkout.postalCode} className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--heading-color)] placeholder-[var(--text-secondary)] outline-none focus:border-[var(--heading-color)] transition-colors cursor-not-allowed" disabled />
                   </div>
                </div>
              </div>

               {/* Section 3: Payment (Mock) */}
              <div>
                <h2 className="text-xl font-serif text-[var(--heading-color)] mb-6">{t.checkout.payment}</h2>
                <div className="p-8 border border-[var(--border)] bg-[var(--surface)] space-y-4 rounded-2xl shadow-sm">
                   <p className="text-sm text-[var(--text-primary)] mb-2">{t.checkout.secureNote}</p>
                   <input type="text" placeholder={t.checkout.cardNum} className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--heading-color)] placeholder-[var(--text-secondary)] outline-none focus:border-[var(--heading-color)] transition-colors cursor-not-allowed" disabled />
                   <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder={t.checkout.exp} className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--heading-color)] placeholder-[var(--text-secondary)] outline-none focus:border-[var(--heading-color)] transition-colors cursor-not-allowed" disabled />
                      <input type="text" placeholder={t.checkout.cvc} className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--heading-color)] placeholder-[var(--text-secondary)] outline-none focus:border-[var(--heading-color)] transition-colors cursor-not-allowed" disabled />
                   </div>
                </div>
              </div>

              <div>
                <button 
                    disabled
                    className="w-full py-5 bg-[var(--text-secondary)] text-white uppercase tracking-widest text-sm font-medium cursor-not-allowed opacity-80 rounded-full"
                >
                    {t.common.payNow} — ${total}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Summary */}
          <div className="lg:pl-12 lg:border-l border-[var(--border)]">
            <h2 className="text-xl font-serif text-[var(--heading-color)] mb-8">{t.checkout.orderSummary}</h2>
            
            <div className="space-y-6 mb-8">
               {items.map((item, idx) => (
                 <div key={idx} className="flex gap-4">
                    <div className="w-20 h-20 bg-[var(--accent)] relative rounded-xl overflow-hidden">
                       <img src={item.imageUrl} alt={language === 'no' ? (item.name_no || item.name) : item.name} className="w-full h-full object-cover" />
                       <span className="absolute -top-2 -right-2 w-6 h-6 bg-[var(--heading-color)] text-white text-[10px] flex items-center justify-center rounded-full border-2 border-[var(--surface)]">1</span>
                    </div>
                    <div className="flex-1">
                       <h3 className="font-serif text-[var(--heading-color)] text-base">{language === 'no' ? (item.name_no || item.name) : item.name}</h3>
                       <p className="text-xs text-[var(--text-secondary)]">{language === 'no' ? (item.category_no || item.category) : item.category}</p>
                    </div>
                    <span className="text-sm text-[var(--text-primary)]">
                        {language === 'no' ? (item.displayPrice_no || item.displayPrice || `$${item.price}`) : (item.displayPrice ? item.displayPrice : `$${item.price}`)}
                    </span>
                 </div>
               ))}
            </div>

            <div className="border-t border-[var(--border)] pt-6 space-y-2">
              <div className="flex justify-between text-sm text-[var(--text-primary)]">
                 <span>{t.common.subtotal}</span>
                 <span>${subtotal}</span>
              </div>
              <div className="flex justify-between text-sm text-[var(--text-primary)]">
                 <span>{t.common.shipping}</span>
                 <span>{t.common.free}</span>
              </div>
            </div>
            
            <div className="border-t border-[var(--border)] mt-6 pt-6">
               <div className="flex justify-between items-center">
                 <span className="font-serif text-xl text-[var(--heading-color)]">{t.common.total}</span>
                 <div className="flex items-end gap-2">
                   <span className="text-xs text-[var(--text-secondary)] mb-1">USD</span>
                   <span className="font-serif text-2xl text-[var(--heading-color)]">${total}</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
