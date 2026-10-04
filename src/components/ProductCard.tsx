import React from 'react';
import { Product } from '../data/products';
import { ProductMedia } from './ProductMedia';
import { ArrowUpRight, Star, ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
  onQuickPurchase?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
  onQuickPurchase,
}) => {
  return (
    <article
      onClick={() => onSelectProduct(product)}
      className="group cursor-pointer bg-[#FAF8F5] border border-[#EAE4D8] flex flex-col h-full transition-all duration-300 hover:border-[#C4B39B] hover:shadow-lg relative"
    >
      {/* Top Image Container with 4:3 Aspect Ratio */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F4F1EA] border-b border-[#EAE4D8]">
        <ProductMedia product={product} aspectRatio="card" className="w-full h-full" />

        {/* Subtle unboxed badge indicator if present */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-[#FAF8F5]/95 backdrop-blur-sm px-2.5 py-1 border border-[#E3D9CB] text-[10px] uppercase tracking-[0.18em] font-medium text-[#7A6A58] shadow-xs">
            {product.badge}
          </div>
        )}

        {/* Quick View Corner Icon on Hover */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#FAF8F5]/90 backdrop-blur-sm border border-[#E3D9CB] flex items-center justify-center text-[#4A4540] opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-xs">
          <ArrowUpRight className="w-4 h-4 text-[#9E7B4F]" />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1 justify-between bg-[#FAF8F5]">
        <div>
          {/* Category kicker & Rating */}
          <div className="flex items-center justify-between text-[11px] mb-2">
            <div className="font-medium tracking-[0.2em] uppercase text-[#9E7B4F]">
              {product.categoryKey === 'skincare' && 'Skincare Chamber'}
              {product.categoryKey === 'cosmetics' && 'Cosmetic Chamber'}
              {product.categoryKey === 'fragrance' && 'Haute Fragrance'}
              <span className="mx-1.5 text-[#C4B6A3]">·</span>
              <span className="text-[#877C70] lowercase font-normal">{product.size}</span>
            </div>

            {product.rating && (
              <div className="flex items-center gap-1 text-[#8A7968]">
                <Star className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" />
                <span className="text-[11px] font-medium text-[#4A423A]">{product.rating}</span>
              </div>
            )}
          </div>

          {/* Product Name */}
          <h3 className="font-serif text-xl text-[#1E1C1A] font-medium leading-snug group-hover:text-[#9E7B4F] transition-colors mb-2">
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-[#635C54] line-clamp-2 leading-relaxed mb-4">
            {product.shortDescription}
          </p>
        </div>

        {/* Bottom Section: Price & Actions */}
        <div className="pt-4 border-t border-[#EFECE4] flex items-center justify-between gap-3 mt-auto">
          {/* Price */}
          <div className="flex flex-col">
            <span className="text-[10px] tracking-[0.14em] uppercase text-[#8A7F73]">Price</span>
            <span className="font-serif text-lg font-medium text-[#1E1C1A] tabular-nums">
              ${product.price} <span className="text-xs font-sans text-[#786E63] font-normal">USD</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            {onQuickPurchase && (
              <button
                type="button"
                title="Direct Acquire"
                onClick={(e) => {
                  e.stopPropagation();
                  onQuickPurchase(product);
                }}
                className="p-2 border border-[#D5C9B8] text-[#1C1A18] hover:border-[#9E7B4F] hover:bg-[#FAF6F0] hover:text-[#9E7B4F] transition-colors"
                aria-label={`Order ${product.name}`}
              >
                <ShoppingBag className="w-3.5 h-3.5 stroke-[1.5]" />
              </button>
            )}

            {/* "View Product" Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelectProduct(product);
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[11px] font-medium tracking-[0.14em] uppercase text-[#1C1A18] border border-[#D5C9B8] hover:border-[#1C1A18] hover:bg-[#1C1A18] hover:text-[#FAF8F5] transition-all duration-200"
            >
              <span>View</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
