
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { Product } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { t, language } = useLanguage();
  
  const name = language === 'no' ? (product.name_no || product.name) : product.name;
  const description = language === 'no' ? (product.longDescription_no || product.description_no || product.longDescription || product.description) : (product.longDescription || product.description);
  const category = language === 'no' ? (product.category_no || product.category) : product.category;
  const displayPrice = language === 'no' ? (product.displayPrice_no || product.displayPrice) : product.displayPrice;
  const features = language === 'no' ? (product.features_no || product.features) : product.features;

  // Sizes usually only applicable to apparel or specific hardware variants
  const showSizes = product.category === 'Hardware' && product.name.includes('Neural Link');
  
  const isComingSoon = product.price === 0 && !!product.displayPrice;

  return (
    <div className="pt-32 min-h-screen bg-[var(--background)] animate-fade-in-up">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-32">
        
        {/* Breadcrumb / Back */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--heading-color)] transition-colors mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          {t.store.backLink}
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Main Image Only */}
          <div className="flex flex-col gap-4">
            <div className="w-full aspect-[4/5] bg-[var(--accent)] overflow-hidden rounded-3xl shadow-lg shadow-[var(--card-shadow)]">
              <img 
                src={product.imageUrl} 
                alt={name} 
                className="w-full h-full object-cover animate-fade-in-up contrast-[1.1]"
              />
            </div>
          </div>

          {/* Right: Details */}
          <div className="flex flex-col justify-center max-w-xl">
             <span className="text-sm font-medium text-[var(--text-secondary)] uppercase tracking-widest mb-2">{category}</span>
             <h1 className="text-4xl md:text-5xl font-serif text-[var(--heading-color)] mb-4 tracking-tight">{name}</h1>
             <span className="text-2xl font-light text-[var(--heading-color)] mb-8">
                {displayPrice ? displayPrice : `$${product.price}`}
             </span>
             
             <p className="text-[var(--text-primary)] leading-relaxed font-light text-lg mb-8 border-b border-[var(--border)] pb-8">
               {description}
             </p>

             {showSizes && (
                <div className="mb-8">
                  <span className="block text-xs font-bold uppercase tracking-widest text-[var(--heading-color)] mb-4">{t.store.selectFit}</span>
                  <div className="flex gap-4">
                    {['S', 'M', 'L'].map(size => (
                      <button 
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-12 h-12 flex items-center justify-center border rounded-full transition-all duration-300 ${
                          selectedSize === size 
                            ? 'border-[var(--heading-color)] bg-[var(--heading-color)] text-white' 
                            : 'border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--heading-color)]'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
             )}

             <div className="flex flex-col gap-4">
               <button 
                 onClick={() => onAddToCart(product)}
                 disabled={isComingSoon}
                 className="w-full py-5 bg-[var(--heading-color)] text-white uppercase tracking-widest text-sm font-medium hover:bg-[var(--text-primary)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded-full shadow-lg"
               >
                 {isComingSoon ? t.common.notifyMe : `${t.common.addToCart} — $${product.price}`}
               </button>
               <ul className="mt-8 space-y-2 text-sm text-[var(--text-primary)]">
                 {features.map((feature, idx) => (
                   <li key={idx} className="flex items-center gap-3">
                     <span className="w-1.5 h-1.5 bg-[var(--heading-color)] rounded-full"></span>
                     {feature}
                   </li>
                 ))}
               </ul>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
