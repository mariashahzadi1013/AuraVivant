import React from 'react';
import { EDITORIAL_ACCOLADES, MAISON_TESTIMONIALS } from '../data/products';
import { Star, Quote, Award, Sparkles, ShieldCheck } from 'lucide-react';

export const EditorialBanner: React.FC = () => {
  return (
    <section className="bg-[#FAF8F5] border-y border-[#EAE3D6] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Press Accolades Strip */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] font-medium text-[#9E7B4F] mb-6">
            <Sparkles className="w-3 h-3 text-[#9E7B4F]" />
            <span>International Critical Acclaim</span>
            <Sparkles className="w-3 h-3 text-[#9E7B4F]" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            {EDITORIAL_ACCOLADES.map((item, idx) => (
              <div key={idx} className="p-4 border-l border-[#E2D8C9] text-left">
                <div className="font-serif tracking-[0.25em] text-sm md:text-base font-semibold text-[#1C1A18] mb-1">
                  {item.magazine}
                </div>
                <p className="text-xs text-[#73685C] italic font-serif leading-snug">
                  {item.quote}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Connoisseur Reviews Carousel / Grid */}
        <div className="pt-12 border-t border-[#EAE3D6]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-[0.24em] font-medium text-[#9E7B4F] block mb-1">
                The Connoisseur Experience
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1A18]">
                Words From Our Patrons
              </h3>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#6B6156]">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <span className="font-medium text-[#1C1A18]">4.97 / 5.0</span>
              <span className="text-[#A3978A]">· 1,200+ Verified Maison Orders</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MAISON_TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-6 bg-[#F8F5EE] border border-[#E9E1D3] flex flex-col justify-between relative shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" />
                      ))}
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-[#9E7B4F] flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-[#9E7B4F]" />
                      Verified
                    </span>
                  </div>

                  <p className="text-xs text-[#524B43] leading-relaxed italic font-serif mb-4">
                    “{t.quote}”
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E6DDCE]">
                  <div className="font-medium text-xs text-[#1C1A18]">{t.author}</div>
                  <div className="text-[10px] text-[#8C8072]">{t.location} · {t.product}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
