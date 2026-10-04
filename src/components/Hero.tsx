import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreCollection: () => void;
  onDiscoverAuraVivant: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCollection,
  onDiscoverAuraVivant,
}) => {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] pt-12 pb-20 md:pt-16 md:pb-28 border-b border-[#EAE5DC]">
      {/* Subtle ambient luxury background aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#F2ECE1]/60 via-[#EAE1D1]/40 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand, Headline, Supporting Text, CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            {/* Quiet brand kicker without pills */}
            <div className="flex items-center gap-2.5 text-xs tracking-[0.24em] uppercase text-[#9E7B4F] mb-4">
              <span className="inline-block w-6 h-[1px] bg-[#9E7B4F]" />
              <span className="font-medium">Maison de Haute Beauté</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
              <span className="font-light text-[#7A6C5D]">Paris · Grasse</span>
            </div>

            {/* Brand Title */}
            <h2 className="font-serif text-lg tracking-[0.28em] uppercase text-[#736555] mb-2 font-light">
              AuraVivant
            </h2>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A1817] font-normal leading-[1.1] tracking-tight mb-6 max-w-xl text-balance">
              Where Beauty Becomes an <span className="italic text-[#9E7B4F] font-serif">Aura.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#524C46] font-light leading-relaxed max-w-lg mb-10">
              Discover a curated collection of luminous skincare, artisanal cosmetics, and exquisite fragrances crafted for the modern connoisseur.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Primary CTA */}
              <button
                onClick={onExploreCollection}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1C1A18] text-[#FAF8F5] text-xs font-medium tracking-[0.18em] uppercase border border-[#1C1A18] hover:bg-[#9E7B4F] hover:border-[#9E7B4F] transition-all duration-300 cursor-pointer shadow-sm"
              >
                <span>Explore the Collection</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={onDiscoverAuraVivant}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-[#2E2B27] text-xs font-medium tracking-[0.18em] uppercase border border-[#C9BEAF] hover:border-[#1C1A18] hover:bg-[#F2ECE1] transition-all duration-300 cursor-pointer"
              >
                <span>Discover AuraVivant</span>
              </button>
            </div>

            {/* Quiet Editorial Proof Elements */}
            <div className="mt-12 pt-8 border-t border-[#EAE5DC] grid grid-cols-3 gap-6 max-w-md">
              <div>
                <div className="font-serif text-2xl text-[#1C1A18]">21</div>
                <div className="text-[11px] text-[#786E63] uppercase tracking-wider mt-0.5">Master Creations</div>
              </div>
              <div>
                <div className="font-serif text-2xl text-[#1C1A18]">24k</div>
                <div className="text-[11px] text-[#786E63] uppercase tracking-wider mt-0.5">Gold &amp; Diamond</div>
              </div>
              <div>
                <div className="font-serif text-2xl text-[#1C1A18]">100%</div>
                <div className="text-[11px] text-[#786E63] uppercase tracking-wider mt-0.5">Artisanal Purity</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Campaign Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Decorative warm frame hairline */}
              <div className="absolute -inset-3 border border-[#E2D8C9] pointer-events-none -z-0 hidden sm:block" />

              <div className="relative overflow-hidden bg-[#EFEBE4] aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] shadow-lg">
                <img
                  src="/src/assets/images/hero_auravivant_luxury_1790523959481.jpg"
                  alt="AuraVivant Haute Beauté &amp; Parfumerie Campaign"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform transition-transform duration-1000 ease-out hover:scale-105"
                />
                
                {/* Subtle gradient vignette scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

                {/* Floating Seal in bottom corner */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white pointer-events-none">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#E6D7C3] font-medium">Edition Limitée</div>
                    <div className="font-serif text-lg tracking-wide text-white">The Haute Masterworks</div>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center backdrop-blur-sm bg-black/20">
                    <Sparkles className="w-4 h-4 text-[#F3E2C7]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
