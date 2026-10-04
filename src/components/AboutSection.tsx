import React from 'react';
import { Sparkles, Compass, Feather } from 'lucide-react';

interface AboutSectionProps {
  onExploreProducts: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreProducts }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#F6F2EB] border-b border-[#EAE3D6] relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        
        {/* Editorial Subtitle Kicker */}
        <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.26em] uppercase text-[#9E7B4F] mb-6">
          <span className="w-8 h-[1px] bg-[#9E7B4F]" />
          <span>The Maison Philosophy</span>
          <span className="w-8 h-[1px] bg-[#9E7B4F]" />
        </div>

        {/* Primary Required Brand Story Quote */}
        <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1C1A18] font-normal leading-[1.35] tracking-tight max-w-3xl mx-auto mb-10 text-balance">
          “AuraVivant is an expression of modern beauty — a curated world where luminous skincare, artisanal cosmetics, and captivating fragrance meet timeless elegance.”
        </blockquote>

        <p className="text-sm sm:text-base text-[#574F46] font-light leading-relaxed max-w-2xl mx-auto mb-16">
          Born from the convergence of Parisian haute parfumerie and Swiss cellular precision, AuraVivant was created for the discerning connoisseur who regards beauty not as a surface ornament, but as an undeniable presence — an intangible, radiant aura.
        </p>

        {/* 3 Pillars of Craftsmanship */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left pt-6 border-t border-[#E2D9CC]">
          
          <div className="p-6 bg-[#FAF8F5] border border-[#E8DFD1]">
            <div className="w-10 h-10 rounded-full bg-[#F2EAE0] flex items-center justify-center text-[#9E7B4F] mb-4">
              <Sparkles className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h4 className="font-serif text-lg text-[#1C1A18] mb-2 font-medium">
              Alchemical Purity
            </h4>
            <p className="text-xs text-[#635A52] leading-relaxed">
              We weave micro-micronized diamonds and suspended 24k gold leaf into cold-pressed Mediterranean botanicals to achieve incandescent luminosity.
            </p>
          </div>

          <div className="p-6 bg-[#FAF8F5] border border-[#E8DFD1]">
            <div className="w-10 h-10 rounded-full bg-[#F2EAE0] flex items-center justify-center text-[#9E7B4F] mb-4">
              <Feather className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h4 className="font-serif text-lg text-[#1C1A18] mb-2 font-medium">
              Couture Textures
            </h4>
            <p className="text-xs text-[#635A52] leading-relaxed">
              Every cosmetic pigment is hand-milled in Como and Milan, producing weightless cashmere lipsticks and second-skin silk foundation fluids.
            </p>
          </div>

          <div className="p-6 bg-[#FAF8F5] border border-[#E8DFD1]">
            <div className="w-10 h-10 rounded-full bg-[#F2EAE0] flex items-center justify-center text-[#9E7B4F] mb-4">
              <Compass className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h4 className="font-serif text-lg text-[#1C1A18] mb-2 font-medium">
              Haute Parfumerie
            </h4>
            <p className="text-xs text-[#635A52] leading-relaxed">
              Our extraits are compounded in Grasse and matured in French oak casks, marrying Assamese agarwood with fresh May rose centifolia.
            </p>
          </div>

        </div>

        <div className="mt-12">
          <button
            onClick={onExploreProducts}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#1C1A18] hover:text-[#9E7B4F] underline underline-offset-8 transition-colors cursor-pointer"
          >
            <span>Experience The 21 Master Creations</span>
          </button>
        </div>

      </div>
    </section>
  );
};
