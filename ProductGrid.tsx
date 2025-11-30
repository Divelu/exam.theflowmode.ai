
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import ProductCard from './ProductCard';
import { useLanguage } from '../contexts/LanguageContext';

interface ProductGridProps {
  onProductClick: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ onProductClick }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { t, language } = useLanguage();

  const categories = [
    t.store.filters.all,
    t.store.filters.productivity,
    t.store.filters.health,
    t.store.filters.content,
    t.store.filters.work
  ];

  // Map display categories back to data categories for filtering if needed
  // Simplification: We assume data categories match English keys. 
  // Ideally, we'd map them, but for now let's do a simple check.
  const getInternalCategory = (displayCat: string) => {
    if (displayCat === t.store.filters.all) return 'All';
    if (displayCat === t.store.filters.productivity) return 'Productivity';
    if (displayCat === t.store.filters.health) return 'Health & Energy';
    if (displayCat === t.store.filters.content) return 'Content & Creativity';
    if (displayCat === t.store.filters.work) return 'Work & Strategy';
    return displayCat;
  }

  const filteredProducts = useMemo(() => {
    let products = PRODUCTS;
    const internalCat = getInternalCategory(activeCategory);
    
    if (internalCat !== 'All') {
        products = products.filter(p => p.category === internalCat);
    }
    
    const query = searchQuery.toLowerCase().trim();
    if (query) {
        products = products.filter(p => {
            const name = language === 'no' ? (p.name_no || p.name) : p.name;
            const desc = language === 'no' ? (p.description_no || p.description) : p.description;
            const cat = language === 'no' ? (p.category_no || p.category) : p.category;
            return name.toLowerCase().includes(query) ||
                   desc.toLowerCase().includes(query) ||
                   cat.toLowerCase().includes(query);
        });
    }
    
    return products;
  }, [activeCategory, searchQuery, language]);

  return (
    <section id="products" className="py-40 px-6 md:px-12 bg-[var(--background)]">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-16 space-y-8">
          <h2 className="text-4xl md:text-6xl font-serif text-[var(--heading-color)] tracking-tight">{t.store.title}</h2>
          
          {/* Minimal Filter */}
          <div className="flex flex-wrap justify-center gap-4 pt-4 w-full max-w-3xl">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-[var(--heading-color)] text-white shadow-md' 
                    : 'bg-transparent text-[var(--text-secondary)] hover:bg-[var(--surface-muted)] hover:text-[var(--heading-color)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="max-w-lg w-full relative">
             <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[var(--text-secondary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
             </div>
             <input 
                type="text" 
                placeholder={t.store.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-full text-[var(--heading-color)] placeholder-[var(--text-secondary)] outline-none focus:border-[var(--heading-color)] focus:shadow-md transition-all duration-300"
             />
          </div>
        </div>

        {/* Large Grid */}
        {filteredProducts.length === 0 ? (
             <div className="text-center py-24 opacity-60">
                <p className="text-xl text-[var(--text-primary)] font-light">{t.store.noResults} "{searchQuery}".</p>
                <button 
                    onClick={() => {setSearchQuery(''); setActiveCategory(t.store.filters.all);}}
                    className="mt-4 text-sm uppercase tracking-widest text-[var(--heading-color)] underline underline-offset-4 hover:text-[var(--text-secondary)] transition-colors"
                >
                    {t.common.clearSearch}
                </button>
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
            {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} onClick={onProductClick} />
            ))}
            </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
