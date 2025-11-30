/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div className="group flex flex-col gap-6 cursor-pointer" onClick={() => onClick(product)}>
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-[var(--accent)] rounded-3xl shadow-[var(--card-shadow)]">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105 contrast-[1.05]"
        />
        
        {/* Hover overlay with "Quick View" */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="bg-[var(--surface)]/90 backdrop-blur text-[var(--heading-color)] px-8 py-3 rounded-full text-xs uppercase tracking-widest font-medium shadow-lg">
                    View
                </span>
            </div>
        </div>
      </div>
      
      <div className="text-center">
        <h3 className="text-2xl font-serif font-medium text-[var(--heading-color)] mb-1 group-hover:text-[var(--text-secondary)] transition-colors">{product.name}</h3>
        <p className="text-sm font-light text-[var(--text-secondary)] mb-3 tracking-wide">{product.category}</p>
        <span className="text-sm font-medium text-[var(--heading-color)] block">
            {product.displayPrice ? product.displayPrice : `$${product.price}`}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;