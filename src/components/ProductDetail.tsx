import React, { useState } from 'react';
import { Product } from '../data/products';
import { ProductMedia } from './ProductMedia';
import { 
  ArrowLeft, 
  Minus, 
  Plus, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  Gift 
} from 'lucide-react';

interface ProductDetailProps {
  product: Product;
  onBackToCollection: () => void;
  onPurchaseNow: (product: Product, quantity: number) => void;
  onSelectOtherProduct?: (product: Product) => void;
  relatedProducts?: Product[];
}

export const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  onBackToCollection,
  onPurchaseNow,
  onSelectOtherProduct,
  relatedProducts = [],
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrement = () => {
    if (quantity < 10) setQuantity(quantity + 1);
  };

  const totalCalculated = product.price * quantity;

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Navigation & Breadcrumb: "Back to Collection" button */}
        <div className="mb-8 md:mb-12">
          <button
            onClick={onBackToCollection}
            className="group inline-flex items-center gap-2.5 text-xs font-medium tracking-[0.18em] uppercase text-[#6E6459] hover:text-[#1C1A18] transition-colors cursor-pointer py-1"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Back to Collection</span>
          </button>
        </div>

        {/* Main Product Detail Grid (Sticky gallery left, contiguous purchase module right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Large Product Image Presentation */}
          <div className="lg:col-span-6">
            <div className="sticky top-28 space-y-6">
              <div className="relative aspect-[4/3] sm:aspect-square w-full overflow-hidden bg-[#F5F2EB] border border-[#EAE4D8] shadow-sm">
                <ProductMedia
                  product={product}
                  aspectRatio="detail"
                  className="w-full h-full"
                />

                {/* Badge Overlay */}
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-[#FAF8F5]/95 backdrop-blur-sm px-3.5 py-1.5 border border-[#E0D5C5] text-[11px] uppercase tracking-[0.2em] font-medium text-[#7D6A56]">
                    {product.badge}
                  </div>
                )}

                {/* Hallmark seal */}
                <div className="absolute bottom-4 right-4 bg-[#FAF8F5]/90 backdrop-blur-sm px-3 py-1 border border-[#E0D5C5] text-[10px] tracking-[0.2em] uppercase text-[#8C7D6E]">
                  Purity Guaranteed
                </div>
              </div>

              {/* Luxury Guarantee Cards */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-[#F7F4ED] border border-[#EAE3D6] text-center flex flex-col items-center justify-center">
                  <Gift className="w-4 h-4 text-[#9E7B4F] mb-1 stroke-[1.5]" />
                  <span className="text-[10px] uppercase tracking-wider text-[#544D44] font-medium">Bespoke Box</span>
                </div>
                <div className="p-3 bg-[#F7F4ED] border border-[#EAE3D6] text-center flex flex-col items-center justify-center">
                  <Truck className="w-4 h-4 text-[#9E7B4F] mb-1 stroke-[1.5]" />
                  <span className="text-[10px] uppercase tracking-wider text-[#544D44] font-medium">Insured Transit</span>
                </div>
                <div className="p-3 bg-[#F7F4ED] border border-[#EAE3D6] text-center flex flex-col items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-[#9E7B4F] mb-1 stroke-[1.5]" />
                  <span className="text-[10px] uppercase tracking-wider text-[#544D44] font-medium">100% Authentic</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Reusable Contiguous Purchase Module */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            
            {/* Category & Rating */}
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2 text-xs tracking-[0.22em] uppercase text-[#9E7B4F] font-medium">
                <span>{product.category}</span>
                <span className="text-[#C4B6A3]">·</span>
                <span className="text-[#786D61] font-light lowercase">{product.size}</span>
              </div>
              {product.rating && (
                <div className="flex items-center gap-1.5 text-xs text-[#7A6B5B]">
                  <span className="text-[#D4AF37]">★★★★★</span>
                  <span className="font-semibold text-[#1C1A18]">{product.rating}</span>
                  <span className="text-[#9C8F80]">({product.reviewCount || 100}+ reviews)</span>
                </div>
              )}
            </div>

            {/* Product Name */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1A18] font-normal tracking-tight leading-[1.15] mb-3">
              {product.name}
            </h1>

            {/* Short Tagline / Description */}
            <p className="text-base text-[#73675B] italic font-serif mb-6">
              {product.shortDescription}
            </p>

            {/* Price Box */}
            <div className="py-4 border-y border-[#EAE4D8] flex items-baseline justify-between mb-8">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-3xl sm:text-4xl text-[#1C1A18] tabular-nums font-medium">
                  ${product.price}
                </span>
                <span className="text-xs uppercase tracking-wider text-[#8A7E73]">USD</span>
              </div>
              <span className="text-xs text-[#527A59] flex items-center gap-1.5 font-medium tracking-wide">
                <Check className="w-3.5 h-3.5 text-[#527A59]" />
                In Stock &amp; Ready for Dispatch
              </span>
            </div>

            {/* Full Editorial Description */}
            <div className="mb-8">
              <h3 className="text-xs font-semibold tracking-[0.16em] uppercase text-[#38332E] mb-3">
                The Formulation
              </h3>
              <p className="text-sm sm:text-base text-[#524B43] leading-relaxed font-light">
                {product.fullDescription}
              </p>
            </div>

            {/* Product Benefits */}
            <div className="mb-8 p-5 bg-[#F6F3EC] border border-[#E9E2D4]">
              <h3 className="text-xs font-semibold tracking-[0.16em] uppercase text-[#38332E] mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#9E7B4F]" />
                <span>Distinctive Benefits</span>
              </h3>
              <ul className="space-y-2.5">
                {product.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#574F46] leading-snug">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#9E7B4F] mt-1.5 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Ingredients or Olfactory Notes */}
            <div className="mb-8">
              <h3 className="text-xs font-semibold tracking-[0.16em] uppercase text-[#38332E] mb-2.5">
                {product.keyIngredientsOrNotes.label}
              </h3>
              <div className="flex flex-wrap gap-2 text-xs text-[#5A524A]">
                {product.keyIngredientsOrNotes.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-block py-1.5 px-3 bg-[#FAF8F5] border border-[#E2D8C9] text-[12px]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Application Ritual */}
            <div className="mb-8 text-xs sm:text-sm text-[#5C534A] leading-relaxed">
              <span className="font-semibold text-[#38332E] uppercase tracking-wider block mb-1">
                The Application Ritual:
              </span>
              <p className="italic font-light">{product.applicationRitual}</p>
            </div>

            {/* Purchase Action Box (Quantity selector + "Purchase Now" button) */}
            <div className="p-6 bg-[#FAF8F5] border-2 border-[#1C1A18] shadow-sm mb-10">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-4">
                
                {/* Quantity Selector */}
                <div className="flex items-center justify-between sm:justify-start border border-[#D5CABB] bg-[#FAF8F5] px-3 py-2.5 w-full sm:w-auto">
                  <span className="text-[11px] uppercase tracking-wider text-[#7A6F63] mr-3 font-medium">
                    Qty:
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handleDecrement}
                      disabled={quantity <= 1}
                      className="p-1 text-[#423C35] hover:text-[#1C1A18] disabled:opacity-30 disabled:cursor-not-allowed"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-serif text-lg font-medium text-[#1C1A18] tabular-nums min-w-[20px] text-center">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={handleIncrement}
                      disabled={quantity >= 10}
                      className="p-1 text-[#423C35] hover:text-[#1C1A18] disabled:opacity-30 disabled:cursor-not-allowed"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* “Purchase Now” Button */}
                <button
                  type="button"
                  onClick={() => onPurchaseNow(product, quantity)}
                  className="flex-1 py-4 px-6 bg-[#1C1A18] text-[#FAF8F5] text-xs font-semibold tracking-[0.2em] uppercase border border-[#1C1A18] hover:bg-[#9E7B4F] hover:border-[#9E7B4F] transition-all duration-300 text-center cursor-pointer shadow-md"
                >
                  Purchase Now — ${totalCalculated} USD
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#7A6E62] pt-2 border-t border-[#EAE4D8]">
                <span>Provenance: {product.provenance}</span>
                <span className="font-medium">Direct Maison Fulfillment</span>
              </div>
            </div>

          </div>
        </div>

        {/* Related Creations from the Maison */}
        {relatedProducts.length > 0 && onSelectOtherProduct && (
          <div className="mt-20 pt-12 border-t border-[#EAE4D8]">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#9E7B4F] font-medium block mb-1">
                  Harmonious Pairings
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A18]">
                  From the Same Maison Chamber
                </h2>
              </div>
              <button
                onClick={onBackToCollection}
                className="text-xs uppercase tracking-[0.14em] text-[#6E6356] hover:text-[#1C1A18] underline underline-offset-4 cursor-pointer"
              >
                View Complete Collection
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectOtherProduct(rel)}
                  className="group cursor-pointer bg-[#FAF8F5] border border-[#EAE4D8] p-4 hover:border-[#C4B39B] transition-all duration-200"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[#F4F1EA] mb-3">
                    <ProductMedia product={rel} aspectRatio="card" className="w-full h-full" />
                  </div>
                  <h4 className="font-serif text-lg text-[#1C1A18] group-hover:text-[#9E7B4F] transition-colors">
                    {rel.name}
                  </h4>
                  <p className="text-xs text-[#70675D] mb-2">{rel.shortDescription}</p>
                  <div className="text-sm font-serif text-[#1C1A18] tabular-nums font-medium">
                    ${rel.price} USD
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
