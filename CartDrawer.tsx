
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  onRemoveItem: (index: number) => void;
  onCheckout: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemoveItem, onCheckout }) => {
  const { t, language } = useLanguage();
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 w-full md:w-[450px] bg-[var(--background)] z-[70] shadow-2xl transform transition-transform duration-500 ease-in-out border-l border-[var(--border)] flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-8 border-b border-[var(--border)]">
          <h2 className="text-xl font-serif text-[var(--heading-color)] tracking-tight">{t.cart.title} ({items.length})</h2>
          <button 
            onClick={onClose} 
            className="text-[var(--text-secondary)] hover:text-[var(--heading-color)] transition-colors p-2 hover:bg-[var(--surface)] rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-60">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12 text-[var(--text-secondary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <p className="font-light text-[var(--text-primary)]">{t.cart.empty}</p>
            </div>
          ) : (
            items.map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="flex gap-4 animate-fade-in-up">
                <div className="w-24 h-24 bg-[var(--accent)] flex-shrink-0 rounded-xl overflow-hidden">
                  <img src={item.imageUrl} alt={language === 'no' ? (item.name_no || item.name) : item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                        <h3 className="font-serif text-[var(--heading-color)] font-medium">{language === 'no' ? (item.name_no || item.name) : item.name}</h3>
                        <span className="text-sm font-light text-[var(--heading-color)]">
                            {language === 'no' ? (item.displayPrice_no || item.displayPrice || `$${item.price}`) : (item.displayPrice ? item.displayPrice : `$${item.price}`)}
                        </span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] uppercase tracking-widest mt-1">
                        {language === 'no' ? (item.category_no || item.category) : item.category}
                    </p>
                  </div>
                  <button 
                    onClick={() => onRemoveItem(idx)}
                    className="text-xs text-[var(--text-secondary)] hover:text-[var(--heading-color)] self-start underline underline-offset-4 transition-colors"
                  >
                    {t.common.remove}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-8 border-t border-[var(--border)] bg-[var(--surface-muted)]">
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm font-medium uppercase tracking-widest text-[var(--text-primary)]">{t.common.subtotal}</span>
            <span className="text-xl font-serif text-[var(--heading-color)]">${total}</span>
          </div>
          <p className="text-xs text-[var(--text-secondary)] mb-6 text-center">{t.cart.shippingCalc}</p>
          <button 
            onClick={onCheckout}
            disabled={items.length === 0}
            className="w-full py-4 bg-[var(--heading-color)] text-white uppercase tracking-widest text-sm font-medium hover:bg-[var(--text-primary)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded-full shadow-lg"
          >
            {t.common.checkout}
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
