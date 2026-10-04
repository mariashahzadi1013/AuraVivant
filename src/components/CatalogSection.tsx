import React, { useState, useMemo } from 'react';
import { Product, PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { Search, SlidersHorizontal, X, Sparkles } from 'lucide-react';

interface CatalogSectionProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  onSelectProduct: (product: Product) => void;
  onQuickPurchase?: (product: Product) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  activeCategory,
  onSelectCategory,
  onSelectProduct,
  onQuickPurchase,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBadge, setSelectedBadge] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  // Filter products based on search, category, and badge
  const filteredProducts = useMemo(() => {
    let result = PRODUCTS;

    // Category filter
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.categoryKey === activeCategory);
    }

    // Badge filter
    if (selectedBadge !== 'all') {
      result = result.filter((p) => p.badge?.toLowerCase().includes(selectedBadge.toLowerCase()));
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.fullDescription.toLowerCase().includes(q) ||
          p.keyIngredientsOrNotes.items.some((item) => item.toLowerCase().includes(q))
      );
    }

    // Sorting
    return [...result].sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
      return 0; // featured / default order
    });
  }, [activeCategory, selectedBadge, searchQuery, sortBy]);

  const totalCount = PRODUCTS.length;
  const isFiltered = searchQuery.trim() !== '' || selectedBadge !== 'all';

  return (
    <section id="collection" className="py-16 md:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#EAE4D8] gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.24em] uppercase text-[#9E7B4F] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#9E7B4F]" />
              <span>Haute Parfumerie &amp; Beauté</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1A18] font-normal tracking-tight">
              The Curated Masterworks
            </h2>
            <p className="text-sm text-[#73685C] mt-2 font-light max-w-lg">
              Twenty-one uncompromising creations across three sensorial chambers. Handcrafted with Swiss cellular science, Italian couture color, and Grasse perfumery.
            </p>
          </div>

          {/* Interactive Category Segmented Tabs */}
          <div className="flex items-center flex-wrap gap-1 p-1 bg-[#F1EDE4] border border-[#E3D9CC]">
            <button
              onClick={() => onSelectCategory('all')}
              className={`px-4 py-2 text-xs font-medium tracking-wider uppercase transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#1C1A18] text-[#FAF8F5] shadow-xs'
                  : 'text-[#635A50] hover:text-[#1C1A18]'
              }`}
            >
              All ({totalCount})
            </button>
            <button
              onClick={() => onSelectCategory('skincare')}
              className={`px-4 py-2 text-xs font-medium tracking-wider uppercase transition-all cursor-pointer ${
                activeCategory === 'skincare'
                  ? 'bg-[#1C1A18] text-[#FAF8F5] shadow-xs'
                  : 'text-[#635A50] hover:text-[#1C1A18]'
              }`}
            >
              Skincare ({PRODUCTS.filter((p) => p.categoryKey === 'skincare').length})
            </button>
            <button
              onClick={() => onSelectCategory('cosmetics')}
              className={`px-4 py-2 text-xs font-medium tracking-wider uppercase transition-all cursor-pointer ${
                activeCategory === 'cosmetics'
                  ? 'bg-[#1C1A18] text-[#FAF8F5] shadow-xs'
                  : 'text-[#635A50] hover:text-[#1C1A18]'
              }`}
            >
              Cosmetics ({PRODUCTS.filter((p) => p.categoryKey === 'cosmetics').length})
            </button>
            <button
              onClick={() => onSelectCategory('fragrance')}
              className={`px-4 py-2 text-xs font-medium tracking-wider uppercase transition-all cursor-pointer ${
                activeCategory === 'fragrance'
                  ? 'bg-[#1C1A18] text-[#FAF8F5] shadow-xs'
                  : 'text-[#635A50] hover:text-[#1C1A18]'
              }`}
            >
              Fragrance ({PRODUCTS.filter((p) => p.categoryKey === 'fragrance').length})
            </button>
          </div>
        </div>

        {/* Search, Filter Badges & Sort Controls Bar */}
        <div className="mb-12 p-4 bg-[#F6F2EA] border border-[#EAE3D6] flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          
          {/* Left: Search input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#8C7F72] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by ingredient, scent note, name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2 bg-[#FAF8F5] border border-[#D5CABB] text-xs text-[#1C1A18] placeholder-[#94887C] focus:outline-none focus:border-[#9E7B4F] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#8C7F72] hover:text-[#1C1A18]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Center: Badge quick filters */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[11px] uppercase tracking-wider text-[#7A6E62] mr-1 hidden sm:inline">
              Filter:
            </span>
            {[
              { id: 'all', label: 'All Badges' },
              { id: 'bestseller', label: 'Bestsellers' },
              { id: 'award', label: 'Awards' },
              { id: 'new', label: 'New Releases' },
              { id: 'reserve', label: 'Reserve' }
            ].map((badge) => (
              <button
                key={badge.id}
                onClick={() => setSelectedBadge(badge.id)}
                className={`px-3 py-1.5 text-[11px] tracking-wider uppercase border transition-all cursor-pointer ${
                  selectedBadge === badge.id
                    ? 'border-[#1C1A18] bg-[#1C1A18] text-[#FAF8F5]'
                    : 'border-[#D5CABB] bg-[#FAF8F5] text-[#5C5349] hover:border-[#9E7B4F]'
                }`}
              >
                {badge.label}
              </button>
            ))}
          </div>

          {/* Right: Sort selector */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#8C7F72]" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#FAF8F5] border border-[#D5CABB] text-xs px-3 py-2 text-[#3D3731] focus:outline-none focus:border-[#9E7B4F] cursor-pointer"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

        </div>

        {/* Results Counter / Filter Indicator */}
        {isFiltered && (
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#EAE4D8] text-xs text-[#7A6F62]">
            <span>
              Showing <strong>{filteredProducts.length}</strong> matching creations
              {searchQuery && ` for “${searchQuery}”`}
            </span>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedBadge('all');
              }}
              className="text-[#9E7B4F] underline hover:text-[#1C1A18] cursor-pointer"
            >
              Reset all filters
            </button>
          </div>
        )}

        {/* Product Grid Render */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center bg-[#F6F2EA] border border-[#EAE3D6] p-8">
            <h4 className="font-serif text-2xl text-[#1C1A18] mb-2">No creations found</h4>
            <p className="text-xs text-[#70665B] max-w-md mx-auto mb-6">
              We could not find any masterworks matching your criteria. Try adjusting your search query or reset your filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedBadge('all');
                onSelectCategory('all');
              }}
              className="px-6 py-2.5 bg-[#1C1A18] text-[#FAF8F5] text-xs uppercase tracking-wider hover:bg-[#9E7B4F] transition-colors"
            >
              View Full Collection
            </button>
          </div>
        ) : activeCategory === 'all' && !isFiltered ? (
          // Default categorized showcase: 3 chambers
          <div className="space-y-24">
            
            {/* Chamber 1: The Radiant Skincare Chamber */}
            <div>
              <div className="flex items-baseline justify-between mb-8 pb-3 border-b border-[#EAE4D8]">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.24em] font-medium text-[#9E7B4F] block">
                    Sensorial Chamber I
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1A18]">
                    The Radiant Skincare Chamber
                  </h3>
                </div>
                <span className="text-xs uppercase tracking-wider text-[#8A7D70]">
                  7 Master Formulations
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PRODUCTS.filter((p) => p.categoryKey === 'skincare').map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onSelectProduct={onSelectProduct}
                    onQuickPurchase={onQuickPurchase}
                  />
                ))}
              </div>
            </div>

            {/* Chamber 2: The Artisanal Cosmetic Chamber */}
            <div>
              <div className="flex items-baseline justify-between mb-8 pb-3 border-b border-[#EAE4D8]">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.24em] font-medium text-[#9E7B4F] block">
                    Sensorial Chamber II
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1A18]">
                    The Artisanal Cosmetic Chamber
                  </h3>
                </div>
                <span className="text-xs uppercase tracking-wider text-[#8A7D70]">
                  7 Couture Creations
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PRODUCTS.filter((p) => p.categoryKey === 'cosmetics').map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onSelectProduct={onSelectProduct}
                    onQuickPurchase={onQuickPurchase}
                  />
                ))}
              </div>
            </div>

            {/* Chamber 3: The Haute Fragrance Chamber */}
            <div>
              <div className="flex items-baseline justify-between mb-8 pb-3 border-b border-[#EAE4D8]">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.24em] font-medium text-[#9E7B4F] block">
                    Sensorial Chamber III
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1A18]">
                    The Haute Fragrance Chamber
                  </h3>
                </div>
                <span className="text-xs uppercase tracking-wider text-[#8A7D70]">
                  7 Rare Extraits
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PRODUCTS.filter((p) => p.categoryKey === 'fragrance').map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onSelectProduct={onSelectProduct}
                    onQuickPurchase={onQuickPurchase}
                  />
                ))}
              </div>
            </div>

          </div>
        ) : (
          // Filtered / Chamber grid view
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={onSelectProduct}
                onQuickPurchase={onQuickPurchase}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
