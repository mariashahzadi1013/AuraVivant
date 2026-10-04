import React, { useState } from 'react';
import { Product, PRODUCTS } from '../data/products';
import { ProductMedia } from './ProductMedia';
import { X, Sparkles, ArrowRight, RotateCcw, Check } from 'lucide-react';

interface AuraQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  onPurchaseProduct: (product: Product, quantity: number) => void;
}

export const AuraQuizModal: React.FC<AuraQuizModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onPurchaseProduct,
}) => {
  const [step, setStep] = useState<number>(1);
  const [skinGoal, setSkinGoal] = useState<string>('');
  const [scentProfile, setScentProfile] = useState<string>('');
  const [finishPref, setFinishPref] = useState<string>('');

  if (!isOpen) return null;

  // Derive recommended product based on answers
  const getRecommendation = (): { main: Product; pairing: Product } => {
    if (skinGoal === 'fragrance' || scentProfile === 'oud') {
      return {
        main: PRODUCTS.find((p) => p.slug === 'nuit-oud') || PRODUCTS[6],
        pairing: PRODUCTS.find((p) => p.slug === 'or-essence') || PRODUCTS[2],
      };
    }
    if (skinGoal === 'cosmetics' || finishPref === 'matte') {
      return {
        main: PRODUCTS.find((p) => p.slug === 'velvet-absolute') || PRODUCTS[3],
        pairing: PRODUCTS.find((p) => p.slug === 'voile-de-joues') || PRODUCTS[10],
      };
    }
    if (scentProfile === 'soleil') {
      return {
        main: PRODUCTS.find((p) => p.slug === 'soleil-de-grasse') || PRODUCTS[17],
        pairing: PRODUCTS.find((p) => p.slug === 'eau-de-rose-celeste') || PRODUCTS[9],
      };
    }
    // Default: Lumière Serum
    return {
      main: PRODUCTS.find((p) => p.slug === 'lumiere-serum') || PRODUCTS[0],
      pairing: PRODUCTS.find((p) => p.slug === 'creme-de-la-nuit') || PRODUCTS[1],
    };
  };

  const handleReset = () => {
    setStep(1);
    setSkinGoal('');
    setScentProfile('');
    setFinishPref('');
  };

  const recommendation = getRecommendation();

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 md:p-8"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-2xl bg-[#FAF8F5] border border-[#D5CABB] shadow-2xl transition-all my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 sm:px-8 py-5 border-b border-[#EAE4D8] flex items-center justify-between bg-[#F6F3EC]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#9E7B4F]" />
            <div>
              <span className="text-[10px] uppercase tracking-[0.24em] font-medium text-[#9E7B4F] block">
                Maison Consultation
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1C1A18]">
                Find Your Signature Aura
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#6B6258] hover:text-[#1C1A18] transition-colors cursor-pointer"
            aria-label="Close consultation"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E7B4F] font-semibold">
                  Step 1 of 3
                </span>
                <h4 className="font-serif text-2xl text-[#1C1A18] mt-1 mb-2">
                  What is your primary sensorial focus?
                </h4>
                <p className="text-xs text-[#70665B]">
                  Select the ritual that resonates most with your personal style.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  {
                    id: 'glow',
                    title: 'Luminous Cellular Skincare',
                    desc: 'Diamond brightening, 24k gold hydration, and overnight barrier repair.',
                  },
                  {
                    id: 'cosmetics',
                    title: 'Couture Artisanal Color',
                    desc: 'Cashmere lip color, silk foundation, and liquid petal blush.',
                  },
                  {
                    id: 'fragrance',
                    title: 'Hypnotic Haute Fragrance',
                    desc: 'Grasse-distilled extraits,Assamese agarwood, and royal ambergris.',
                  },
                  {
                    id: 'complete',
                    title: 'The Complete Aura Ritual',
                    desc: 'A harmonized pairing of skincare and bespoke signature scent.',
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSkinGoal(item.id);
                      setStep(2);
                    }}
                    className={`p-4 border text-left transition-all cursor-pointer ${
                      skinGoal === item.id
                        ? 'border-[#9E7B4F] bg-[#F5EDE1]'
                        : 'border-[#E2D8C9] bg-[#FAF8F5] hover:border-[#1C1A18]'
                    }`}
                  >
                    <div className="font-serif text-base text-[#1C1A18] font-medium mb-1">
                      {item.title}
                    </div>
                    <div className="text-xs text-[#70665B] leading-snug">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E7B4F] font-semibold">
                  Step 2 of 3
                </span>
                <h4 className="font-serif text-2xl text-[#1C1A18] mt-1 mb-2">
                  Which olfactory family stirs your spirit?
                </h4>
                <p className="text-xs text-[#70665B]">
                  Fragrance notes and botanical aromatics carry emotional resonance.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  {
                    id: 'oud',
                    title: 'Deep Resins & Assamese Oud',
                    desc: 'Smoky, nocturnal, enveloped in Damask rose and caramelized vanilla.',
                  },
                  {
                    id: 'rose',
                    title: 'Dewy Rose & White Tea',
                    desc: 'Clean, sparkling freshness capturing morning dawn on centifolia petals.',
                  },
                  {
                    id: 'soleil',
                    title: 'Sunlit Neroli & Fig Leaf',
                    desc: 'Mediterranean warmth, citrus blossom, and authentic grey ambergris.',
                  },
                  {
                    id: 'santal',
                    title: 'Aged Mysore Sandalwood',
                    desc: 'Creamy, meditative woods wrapped in cashmeran and Florentine orris.',
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setScentProfile(item.id);
                      setStep(3);
                    }}
                    className={`p-4 border text-left transition-all cursor-pointer ${
                      scentProfile === item.id
                        ? 'border-[#9E7B4F] bg-[#F5EDE1]'
                        : 'border-[#E2D8C9] bg-[#FAF8F5] hover:border-[#1C1A18]'
                    }`}
                  >
                    <div className="font-serif text-base text-[#1C1A18] font-medium mb-1">
                      {item.title}
                    </div>
                    <div className="text-xs text-[#70665B] leading-snug">{item.desc}</div>
                  </button>
                ))}
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs uppercase tracking-wider text-[#8A7D70] hover:text-[#1C1A18]"
                >
                  ← Back to Step 1
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E7B4F] font-semibold">
                  Step 3 of 3
                </span>
                <h4 className="font-serif text-2xl text-[#1C1A18] mt-1 mb-2">
                  What texture speaks most to your skin?
                </h4>
                <p className="text-xs text-[#70665B]">
                  Every formulation offers a unique tactile glide on the skin.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  {
                    id: 'dewy',
                    title: 'Luminous Glass-Skin Elixir',
                    desc: 'Weightless micro-pearl fluids that melt with an instant ethereal halo.',
                  },
                  {
                    id: 'velvet',
                    title: 'Velvety Cushion Balm',
                    desc: 'Ultra-rich regenerative textures that melt into a nourishing satin veil.',
                  },
                  {
                    id: 'matte',
                    title: 'Cashmere Soft-Focus Veil',
                    desc: 'Air-light blur that softens pores and delivers comfortable high-impact wear.',
                  },
                  {
                    id: 'oil',
                    title: 'Incandescent Botanical Oil',
                    desc: 'Dry-touch suspended 24k gold oils imparting warmth and lipid harmony.',
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setFinishPref(item.id);
                      setStep(4);
                    }}
                    className={`p-4 border text-left transition-all cursor-pointer ${
                      finishPref === item.id
                        ? 'border-[#9E7B4F] bg-[#F5EDE1]'
                        : 'border-[#E2D8C9] bg-[#FAF8F5] hover:border-[#1C1A18]'
                    }`}
                  >
                    <div className="font-serif text-base text-[#1C1A18] font-medium mb-1">
                      {item.title}
                    </div>
                    <div className="text-xs text-[#70665B] leading-snug">{item.desc}</div>
                  </button>
                ))}
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={() => setStep(2)}
                  className="text-xs uppercase tracking-wider text-[#8A7D70] hover:text-[#1C1A18]"
                >
                  ← Back to Step 2
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6 text-center animate-fadeIn">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F5ECE1] border border-[#E3D4C1] text-[10px] uppercase tracking-[0.24em] font-semibold text-[#8C7356]">
                <Sparkles className="w-3 h-3 text-[#9E7B4F]" />
                Your Bespoke Maison Prescription
              </div>

              <h4 className="font-serif text-2xl sm:text-3xl text-[#1C1A18]">
                The Matched Creation For Your Aura
              </h4>

              {/* Main Recommended Product Card */}
              <div className="p-6 bg-[#F8F5EE] border border-[#E2D8C9] text-left flex flex-col sm:flex-row items-center gap-6">
                <div className="w-32 h-32 shrink-0 bg-[#EFECE4] border border-[#E5DDD0] overflow-hidden">
                  <ProductMedia product={recommendation.main} aspectRatio="card" className="w-full h-full" />
                </div>

                <div className="flex-1">
                  <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#9E7B4F] mb-1">
                    Signature Creation · ${recommendation.main.price} USD
                  </div>
                  <h5 className="font-serif text-xl text-[#1C1A18] font-medium mb-1">
                    {recommendation.main.name}
                  </h5>
                  <p className="text-xs text-[#6B6156] mb-3 leading-relaxed">
                    {recommendation.main.shortDescription}
                  </p>
                  <p className="text-xs text-[#4A433C] italic line-clamp-2">
                    {recommendation.main.fullDescription}
                  </p>
                </div>
              </div>

              {/* Pairing Recommendation */}
              <div className="p-4 bg-[#FAF8F5] border border-[#E7DFD1] text-left flex items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#8A7E73]">
                    Recommended Harmonious Pairing
                  </div>
                  <div className="font-serif text-base text-[#1C1A18] font-medium">
                    {recommendation.pairing.name}
                  </div>
                  <div className="text-xs text-[#70665B]">${recommendation.pairing.price} USD · {recommendation.pairing.shortDescription}</div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onSelectProduct(recommendation.pairing);
                  }}
                  className="px-3 py-1.5 text-[11px] uppercase tracking-wider border border-[#D5CABB] hover:border-[#1C1A18] text-[#1C1A18] whitespace-nowrap cursor-pointer"
                >
                  View Pairing
                </button>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onPurchaseProduct(recommendation.main, 1);
                  }}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#1C1A18] text-[#FAF8F5] text-xs font-semibold tracking-[0.2em] uppercase border border-[#1C1A18] hover:bg-[#9E7B4F] hover:border-[#9E7B4F] transition-all cursor-pointer shadow-sm"
                >
                  Acquire {recommendation.main.name}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onSelectProduct(recommendation.main);
                  }}
                  className="w-full sm:w-auto px-6 py-3.5 bg-transparent text-[#2E2B27] text-xs font-medium tracking-[0.16em] uppercase border border-[#C9BEAF] hover:border-[#1C1A18] transition-all cursor-pointer"
                >
                  Read Full Formulation
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="p-3 text-[#8A7D70] hover:text-[#1C1A18] transition-colors"
                  title="Retake Consultation"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
