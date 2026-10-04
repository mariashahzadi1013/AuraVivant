/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PRODUCTS, Product } from './data/products';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CatalogSection } from './components/CatalogSection';
import { ProductDetail } from './components/ProductDetail';
import { EditorialBanner } from './components/EditorialBanner';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { PurchaseModal } from './components/PurchaseModal';
import { AuraQuizModal } from './components/AuraQuizModal';
import { PublishGuideModal } from './components/PublishGuideModal';
import { OrderRecord } from './config/webhook';

export default function App() {
  // Navigation / View State
  const [currentView, setCurrentView] = useState<'home' | 'detail'>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Modal States
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [purchaseProduct, setPurchaseProduct] = useState<Product | null>(null);
  const [purchaseQuantity, setPurchaseQuantity] = useState(1);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isPublishGuideOpen, setIsPublishGuideOpen] = useState(false);

  // Orders Log State
  const [orders, setOrders] = useState<OrderRecord[]>([]);

  // Scroll to top upon navigating to product detail
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView, selectedProduct]);

  // Handler: Selecting a product card from catalog
  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('detail');
  };

  // Handler: "Back to Collection"
  const handleBackToCollection = () => {
    setCurrentView('home');
    setTimeout(() => {
      const el = document.getElementById('collection');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  // Handler: "Explore the Collection" CTA in hero
  const handleExploreCollection = () => {
    setCurrentView('home');
    setActiveCategory('all');
    setTimeout(() => {
      const el = document.getElementById('collection');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  // Handler: "Discover AuraVivant" CTA in hero
  const handleDiscoverAuraVivant = () => {
    setCurrentView('home');
    setTimeout(() => {
      const el = document.getElementById('about');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  // Handler: Category navigation from Navbar
  const handleSelectCategory = (categoryKey: string) => {
    setCurrentView('home');
    setActiveCategory(categoryKey);
    setTimeout(() => {
      const el = document.getElementById('collection');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  // Handler: "Purchase Now" button clicked
  const handlePurchaseNow = (product: Product, quantity: number = 1) => {
    setPurchaseProduct(product);
    setPurchaseQuantity(quantity);
    setIsPurchaseModalOpen(true);
  };

  // Handler: Quick Order trigger from Navbar Bag icon
  const handleOpenQuickPurchase = () => {
    const fallbackProduct = selectedProduct || PRODUCTS[0];
    setPurchaseProduct(fallbackProduct);
    setPurchaseQuantity(1);
    setIsPurchaseModalOpen(true);
  };

  // Find related products in the same category (excluding the current one)
  const relatedProducts = selectedProduct
    ? PRODUCTS.filter((p) => p.categoryKey === selectedProduct.categoryKey && p.id !== selectedProduct.id)
    : [];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E1C1A] flex flex-col font-sans selection:bg-[#E6D7C3] selection:text-[#1E1C1A]">
      
      {/* 1. Header / Navbar */}
      <Navbar
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        onNavigateHome={() => {
          setCurrentView('home');
          setActiveCategory('all');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateAbout={handleDiscoverAuraVivant}
        onShopCollection={handleExploreCollection}
        onOpenQuickPurchase={handleOpenQuickPurchase}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenPublishGuide={() => setIsPublishGuideOpen(true)}
        orderCount={orders.length}
      />

      {/* 2. Main Content: Home View vs Individual Product Detail View */}
      <main className="flex-1">
        {currentView === 'home' ? (
          <>
            {/* Hero Section */}
            <Hero
              onExploreCollection={handleExploreCollection}
              onDiscoverAuraVivant={handleDiscoverAuraVivant}
            />

            {/* Catalog Section with 21 Masterworks across 3 chambers */}
            <CatalogSection
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
              onSelectProduct={handleSelectProduct}
              onQuickPurchase={(product) => handlePurchaseNow(product, 1)}
            />

            {/* Editorial Accolades & Verified Reviews */}
            <EditorialBanner />

            {/* Luxury Brand Story & Craftsmanship Pillars */}
            <AboutSection onExploreProducts={handleExploreCollection} />
          </>
        ) : (
          selectedProduct && (
            <ProductDetail
              product={selectedProduct}
              onBackToCollection={handleBackToCollection}
              onPurchaseNow={handlePurchaseNow}
              onSelectOtherProduct={handleSelectProduct}
              relatedProducts={relatedProducts}
            />
          )
        )}
      </main>

      {/* 3. Footer */}
      <Footer
        onNavigateHome={() => {
          setCurrentView('home');
          setActiveCategory('all');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateCollection={handleExploreCollection}
        onNavigateAbout={handleDiscoverAuraVivant}
        onOpenPublishGuide={() => setIsPublishGuideOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* 4. Purchase / Order Form Modal (connected to user's Google Sheet webhook) */}
      <PurchaseModal
        isOpen={isPurchaseModalOpen}
        onClose={() => setIsPurchaseModalOpen(false)}
        selectedProduct={purchaseProduct}
        initialQuantity={purchaseQuantity}
        onOrderCompleted={(order) => {
          setOrders((prev) => [order, ...prev]);
        }}
      />

      {/* 5. Interactive Aura Consultation Quiz */}
      <AuraQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSelectProduct={handleSelectProduct}
        onPurchaseProduct={(product, qty) => handlePurchaseNow(product, qty)}
      />

      {/* 6. Step-by-Step Free Publishing Guide */}
      <PublishGuideModal
        isOpen={isPublishGuideOpen}
        onClose={() => setIsPublishGuideOpen(false)}
      />

    </div>
  );
}
