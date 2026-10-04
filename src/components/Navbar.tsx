import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Sparkles, Globe } from 'lucide-react';

interface NavbarProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  onNavigateHome: () => void;
  onNavigateAbout: () => void;
  onShopCollection: () => void;
  onOpenQuickPurchase: () => void;
  onOpenQuiz?: () => void;
  onOpenPublishGuide?: () => void;
  orderCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeCategory,
  onSelectCategory,
  onNavigateHome,
  onNavigateAbout,
  onShopCollection,
  onOpenQuickPurchase,
  onOpenQuiz,
  onOpenPublishGuide,
  orderCount = 0,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (action: () => void) => {
    action();
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EAE5DC] transition-all">
      {/* Editorial Top Utility Notice with Publish Free & Quiz access */}
      <div className="flex items-center justify-between py-1.5 px-4 lg:px-12 bg-[#F2ECE1] border-b border-[#E8DFD1] text-[11px] font-medium tracking-[0.16em] uppercase text-[#736353]">
        <div className="hidden md:flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9E7B4F]" />
          <span>Complimentary Parisian Gift Boxing &amp; Worldwide Priority Dispatch</span>
        </div>

        <div className="flex items-center gap-4 mx-auto md:mx-0">
          {onOpenQuiz && (
            <button
              onClick={onOpenQuiz}
              className="inline-flex items-center gap-1.5 text-[#856D48] hover:text-[#1C1A18] transition-colors cursor-pointer"
            >
              <Sparkles className="w-3 h-3 text-[#9E7B4F]" />
              <span>Aura Consultation Quiz</span>
            </button>
          )}

          {onOpenPublishGuide && (
            <button
              onClick={onOpenPublishGuide}
              className="inline-flex items-center gap-1 text-[#2E7D32] hover:text-[#1B5E20] transition-colors font-semibold cursor-pointer border-l border-[#DECDB8] pl-3"
            >
              <Globe className="w-3 h-3 text-[#2E7D32]" />
              <span>Publish Free</span>
            </button>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element brand wordmark */}
        <button
          onClick={onNavigateHome}
          className="text-left group focus-visible:outline-none cursor-pointer"
          aria-label="AuraVivant Home"
        >
          <span className="font-serif text-2xl lg:text-3xl font-medium tracking-[0.22em] uppercase text-[#1C1A18] transition-colors group-hover:text-[#9E7B4F]">
            AuraVivant
          </span>
          <span className="block text-[9px] tracking-[0.28em] uppercase text-[#8C7D6C] font-sans -mt-0.5">
            Haute Beauté &amp; Parfumerie
          </span>
        </button>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-[0.12em] uppercase text-[#57524E]">
          <button
            onClick={onNavigateHome}
            className={`py-1 relative transition-colors hover:text-[#1C1A18] cursor-pointer ${
              activeCategory === 'all' ? 'text-[#1C1A18] font-semibold' : ''
            }`}
          >
            Home
            {activeCategory === 'all' && (
              <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#9E7B4F]" />
            )}
          </button>

          <button
            onClick={() => onSelectCategory('skincare')}
            className={`py-1 relative transition-colors hover:text-[#1C1A18] cursor-pointer ${
              activeCategory === 'skincare' ? 'text-[#1C1A18] font-semibold' : ''
            }`}
          >
            Skincare
            {activeCategory === 'skincare' && (
              <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#9E7B4F]" />
            )}
          </button>

          <button
            onClick={() => onSelectCategory('cosmetics')}
            className={`py-1 relative transition-colors hover:text-[#1C1A18] cursor-pointer ${
              activeCategory === 'cosmetics' ? 'text-[#1C1A18] font-semibold' : ''
            }`}
          >
            Cosmetics
            {activeCategory === 'cosmetics' && (
              <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#9E7B4F]" />
            )}
          </button>

          <button
            onClick={() => onSelectCategory('fragrance')}
            className={`py-1 relative transition-colors hover:text-[#1C1A18] cursor-pointer ${
              activeCategory === 'fragrance' ? 'text-[#1C1A18] font-semibold' : ''
            }`}
          >
            Fragrance
            {activeCategory === 'fragrance' && (
              <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#9E7B4F]" />
            )}
          </button>

          <button
            onClick={onNavigateAbout}
            className="py-1 relative transition-colors hover:text-[#1C1A18] cursor-pointer"
          >
            About
          </button>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={onShopCollection}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium tracking-[0.14em] uppercase text-[#FAF8F5] bg-[#1C1A18] border border-[#1C1A18] transition-all duration-300 hover:bg-[#9E7B4F] hover:border-[#9E7B4F] whitespace-nowrap cursor-pointer shadow-xs"
          >
            Shop Collection
          </button>

          <button
            onClick={onOpenQuickPurchase}
            className="relative p-2.5 text-[#2C2926] hover:text-[#9E7B4F] transition-colors focus-visible:outline-none cursor-pointer"
            aria-label="View Order Request"
            title="Order Form"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
            {orderCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#9E7B4F] text-[#FAF8F5] text-[10px] font-bold rounded-full flex items-center justify-center">
                {orderCount}
              </span>
            )}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#2C2926] hover:text-[#9E7B4F] focus-visible:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 stroke-[1.5]" /> : <Menu className="w-6 h-6 stroke-[1.5]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[110px] sm:top-[116px] bg-[#FAF8F5] border-b border-[#EAE5DC] px-6 py-8 shadow-xl animate-fadeIn">
          <nav className="flex flex-col gap-6 text-sm font-medium tracking-[0.16em] uppercase text-[#423E3A]">
            <button
              onClick={() => handleNavClick(onNavigateHome)}
              className="text-left py-1 hover:text-[#9E7B4F] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick(() => onSelectCategory('skincare'))}
              className="text-left py-1 hover:text-[#9E7B4F] transition-colors flex items-center justify-between"
            >
              <span>The Radiant Skincare Chamber</span>
              <span className="text-[11px] text-[#A69785] tracking-normal font-serif italic">7 elixirs</span>
            </button>
            <button
              onClick={() => handleNavClick(() => onSelectCategory('cosmetics'))}
              className="text-left py-1 hover:text-[#9E7B4F] transition-colors flex items-center justify-between"
            >
              <span>The Artisanal Cosmetic Chamber</span>
              <span className="text-[11px] text-[#A69785] tracking-normal font-serif italic">7 couture items</span>
            </button>
            <button
              onClick={() => handleNavClick(() => onSelectCategory('fragrance'))}
              className="text-left py-1 hover:text-[#9E7B4F] transition-colors flex items-center justify-between"
            >
              <span>The Haute Fragrance Chamber</span>
              <span className="text-[11px] text-[#A69785] tracking-normal font-serif italic">7 extraits</span>
            </button>
            <button
              onClick={() => handleNavClick(onNavigateAbout)}
              className="text-left py-1 hover:text-[#9E7B4F] transition-colors"
            >
              About the Maison
            </button>

            {onOpenQuiz && (
              <button
                onClick={() => handleNavClick(onOpenQuiz)}
                className="text-left py-1 text-[#9E7B4F] font-semibold flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Aura Consultation Quiz</span>
              </button>
            )}

            {onOpenPublishGuide && (
              <button
                onClick={() => handleNavClick(onOpenPublishGuide)}
                className="text-left py-1 text-[#2E7D32] font-semibold flex items-center gap-2"
              >
                <Globe className="w-4 h-4" />
                <span>Publish 100% Free Guide</span>
              </button>
            )}

            <div className="pt-4 border-t border-[#EAE5DC]">
              <button
                onClick={() => handleNavClick(onShopCollection)}
                className="w-full py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-[#FAF8F5] bg-[#1C1A18] hover:bg-[#9E7B4F] transition-colors text-center"
              >
                Explore All 21 Creations
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
