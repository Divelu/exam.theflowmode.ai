
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import Journal from './components/Journal';
import Assistant from './components/Assistant';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import JournalDetail from './components/JournalDetail';
import CartDrawer from './components/CartDrawer';
import Checkout from './components/Checkout';
import FlowTools from './components/FlowTools';
import FlowToolDetail from './components/FlowToolDetail';
import RecommendedTools from './components/RecommendedTools';
import RecommendedToolDetail from './components/RecommendedToolDetail';
import { Product, JournalArticle, ViewState } from './types';
import { FLOW_TOOLS_DATA, RECOMMENDED_TOOLS_DATA } from './constants';
import { LanguageProvider } from './contexts/LanguageContext';

function AppContent() {
  const [view, setView] = useState<ViewState>({ type: 'home' });
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Handle URL hash on load for basic routing
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'tools' || hash === '/tools') setView({ type: 'recommended-tools' });
    if (hash === 'flow-tools' || hash === '/flow-tools') setView({ type: 'flow-tools' });
    if (hash === 'knowledge' || hash === '/knowledge') setView({ type: 'knowledge' });
    if (hash === 'about' || hash === '/about') setView({ type: 'about' });
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    if (targetId === '') {
        setView({ type: 'home' });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (targetId === '/tools') { // New Tools page
        setView({ type: 'recommended-tools' });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (targetId === '/flow-tools') {
        setView({ type: 'flow-tools' });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (targetId === 'journal' || targetId === '/knowledge') {
        setView({ type: 'knowledge' });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (targetId === 'about' || targetId === '/about') {
        setView({ type: 'about' });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
       // Fallback for anchor links on home
       scrollToSection(targetId);
    }
  };

  const scrollToSection = (targetId: string) => {
    if (!targetId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
    setIsCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    const newItems = [...cartItems];
    newItems.splice(index, 1);
    setCartItems(newItems);
  };

  return (
    <div className="min-h-screen bg-[var(--background)] font-sans text-[var(--text-primary)] selection:bg-[var(--accent)] selection:text-[var(--heading-color)]">
      {view.type !== 'checkout' && (
        <Navbar 
            onNavClick={handleNavClick} 
            cartCount={cartItems.length}
            onOpenCart={() => setIsCartOpen(true)}
            theme={view.type === 'journal' ? 'light' : 'dark'}
        />
      )}
      
      <main>
        {view.type === 'home' && (
          <Home onNavigate={handleNavClick} />
        )}

        {view.type === 'about' && (
            <About />
        )}

        {view.type === 'tools' && (
            // Legacy / Fallback view if accessed via other means, effectively same as home grid but standalone
            <div className="pt-24 animate-fade-in-up">
                <ProductGrid onProductClick={(p) => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setView({ type: 'product', product: p });
                }} />
            </div>
        )}

        {view.type === 'recommended-tools' && (
            <RecommendedTools onToolClick={(tool) => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setView({ type: 'recommended-tool-detail', toolId: tool.id });
            }} />
        )}

        {view.type === 'recommended-tool-detail' && (
             <RecommendedToolDetail 
                tool={RECOMMENDED_TOOLS_DATA.find(t => t.id === view.toolId)!} 
                onBack={() => setView({ type: 'recommended-tools' })}
             />
        )}

        {view.type === 'flow-tools' && (
            <FlowTools onToolClick={(tool) => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setView({ type: 'flow-tool-detail', toolId: tool.id });
            }} />
        )}

        {view.type === 'flow-tool-detail' && (
             <FlowToolDetail 
                tool={FLOW_TOOLS_DATA.find(t => t.id === view.toolId)!} 
                onBack={() => setView({ type: 'flow-tools' })}
             />
        )}

        {view.type === 'knowledge' && (
            <div className="pt-24 animate-fade-in-up">
                <Journal onArticleClick={(a) => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setView({ type: 'journal', article: a });
                }} />
            </div>
        )}

        {view.type === 'product' && (
          <ProductDetail 
            product={view.product} 
            onBack={() => {
              // Go back home since Flow Store is on home
              setView({ type: 'home' }); 
            }}
            onAddToCart={addToCart}
          />
        )}

        {view.type === 'journal' && (
          <JournalDetail 
            article={view.article} 
            onBack={() => setView({ type: 'knowledge' })}
          />
        )}

        {view.type === 'checkout' && (
            <Checkout 
                items={cartItems}
                onBack={() => setView({ type: 'home' })}
            />
        )}
      </main>

      {view.type !== 'checkout' && <Footer onLinkClick={handleNavClick} />}
      
      <Assistant />
      
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={removeFromCart}
        onCheckout={() => {
            setIsCartOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setView({ type: 'checkout' });
        }}
      />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
