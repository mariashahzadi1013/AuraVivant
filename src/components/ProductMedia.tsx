import React, { useState } from 'react';
import { Product } from '../data/products';

interface ProductMediaProps {
  product: Product;
  className?: string;
  aspectRatio?: 'card' | 'detail';
}

export const ProductMedia: React.FC<ProductMediaProps> = ({
  product,
  className = '',
  aspectRatio = 'card',
}) => {
  const [imageFailed, setImageFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // If product has a photo and it hasn't failed to load:
  const hasPhoto = product.image.endsWith('.jpg') || product.image.endsWith('.png');

  if (hasPhoto && !imageFailed) {
    return (
      <div
        className={`relative overflow-hidden bg-[#F5F2EB] flex items-center justify-center ${className}`}
      >
        {!loaded && (
          <div className="absolute inset-0 bg-[#EFECE4] animate-pulse flex items-center justify-center">
            <span className="font-serif italic text-xs text-[#9E7B4F] tracking-widest uppercase">
              AuraVivant
            </span>
          </div>
        )}
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          onLoad={() => setLoaded(true)}
          onError={() => setImageFailed(true)}
          className={`w-full h-full object-cover object-center transition-all duration-700 ease-out ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } hover:scale-105`}
        />
        {/* Subtle vignette scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-black/5 pointer-events-none" />
      </div>
    );
  }

  // Bespoke luxury visual renders for products without JPGs or fallback:
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F5F2EB] to-[#ECE7DD] flex items-center justify-center p-6 ${className}`}
    >
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(212,175,55,0.09),transparent_70%)] pointer-events-none" />

      {/* Render bespoke visual based on product ID */}
      <div className="w-full h-full flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105">
        {renderBespokeArt(product.id, aspectRatio)}
      </div>

      {/* Subtle brand watermark */}
      <div className="absolute bottom-3 left-0 right-0 text-center pointer-events-none">
        <span className="font-serif text-[10px] tracking-[0.25em] text-[#A8967E] uppercase">
          AuraVivant · Paris
        </span>
      </div>
    </div>
  );
};

function renderBespokeArt(id: string, ratio: 'card' | 'detail') {
  const isLarge = ratio === 'detail';
  const sizeClass = isLarge ? 'w-64 h-64 md:w-80 md:h-80' : 'w-48 h-48 sm:w-56 sm:h-56';

  switch (id) {
    case 'av-p2': // AuraVivant Crème de la Nuit (Jar)
      return (
        <svg viewBox="0 0 200 200" className={sizeClass} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="jarGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#252422" />
              <stop offset="50%" stopColor="#151413" />
              <stop offset="100%" stopColor="#0B0A09" />
            </linearGradient>
            <linearGradient id="goldLid" x1="0%" y1="0%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#E9D6B8" />
              <stop offset="40%" stopColor="#D4AF37" />
              <stop offset="70%" stopColor="#9E7B4F" />
              <stop offset="100%" stopColor="#6C5332" />
            </linearGradient>
            <linearGradient id="reflection" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.03)" />
              <stop offset="45%" stopColor="rgba(255,255,255,0.2)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.01)" />
            </linearGradient>
            <filter id="shadowJar" x="-20%" y="-20%" width="140%" height="150%">
              <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#1A1816" floodOpacity="0.25" />
            </filter>
          </defs>
          {/* Base shadow */}
          <ellipse cx="100" cy="170" rx="65" ry="10" fill="#1C1A18" fillOpacity="0.12" filter="blur(4px)" />
          {/* Jar Body */}
          <g filter="url(#shadowJar)">
            <path d="M48 95 C48 95, 45 155, 54 162 C62 168, 138 168, 146 162 C155 155, 152 95, 152 95 Z" fill="url(#jarGlass)" />
            {/* Gloss reflection line */}
            <path d="M60 102 C60 102, 57 148, 64 154 C66 156, 74 156, 74 156 C68 148, 68 106, 68 102 Z" fill="url(#reflection)" />
            {/* Label plaque */}
            <rect x="68" y="112" width="64" height="34" rx="2" fill="#1A1817" stroke="#D4AF37" strokeWidth="0.8" />
            <text x="100" y="125" textAnchor="middle" fill="#E6D2B5" fontSize="6.5" fontFamily="serif" letterSpacing="0.15em">AURAVIVANT</text>
            <text x="100" y="133" textAnchor="middle" fill="#C5A880" fontSize="4.5" letterSpacing="0.08em">CRÈME DE LA NUIT</text>
            <text x="100" y="140" textAnchor="middle" fill="#9E7B4F" fontSize="3.5" letterSpacing="0.05em">PARIS</text>
            {/* Gold Lid */}
            <rect x="42" y="70" width="116" height="26" rx="4" fill="url(#goldLid)" stroke="#F0DEBA" strokeWidth="0.5" />
            <line x1="44" y1="74" x2="156" y2="74" stroke="#FFF" strokeOpacity="0.4" strokeWidth="0.8" />
            <line x1="44" y1="94" x2="156" y2="94" stroke="#553F24" strokeWidth="0.8" />
          </g>
        </svg>
      );

    case 'av-p5': // AuraVivant Satin Hydro-Glow (Foundation)
      return (
        <svg viewBox="0 0 200 200" className={sizeClass} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="pumpGold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DFCEB5" />
              <stop offset="50%" stopColor="#C5A880" />
              <stop offset="100%" stopColor="#7E603A" />
            </linearGradient>
            <linearGradient id="foundationLiquid" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E2CCA7" />
              <stop offset="50%" stopColor="#EDDCBF" />
              <stop offset="100%" stopColor="#CDB48E" />
            </linearGradient>
            <linearGradient id="glassSheen" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
              <stop offset="30%" stopColor="rgba(255,255,255,0.05)" />
              <stop offset="70%" stopColor="rgba(255,255,255,0.25)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
            <filter id="shadowFoundation" x="-20%" y="-20%" width="140%" height="150%">
              <feDropShadow dx="0" dy="14" stdDeviation="12" floodColor="#1A1816" floodOpacity="0.2" />
            </filter>
          </defs>
          <ellipse cx="100" cy="180" rx="55" ry="8" fill="#1C1A18" fillOpacity="0.1" filter="blur(4px)" />
          <g filter="url(#shadowFoundation)">
            {/* Pump Nozzle */}
            <path d="M96 28 L104 28 L104 36 L122 36 L122 41 L104 41 L104 46 L96 46 Z" fill="url(#pumpGold)" />
            {/* Pump Collar */}
            <rect x="85" y="46" width="30" height="18" rx="2" fill="url(#pumpGold)" stroke="#FFF" strokeWidth="0.4" strokeOpacity="0.4" />
            {/* Cap Shoulder */}
            <rect x="74" y="64" width="52" height="10" rx="2" fill="url(#pumpGold)" />
            {/* Bottle Cylinder */}
            <rect x="70" y="74" width="60" height="98" rx="7" fill="url(#foundationLiquid)" />
            <rect x="70" y="74" width="60" height="98" rx="7" fill="url(#glassSheen)" />
            <rect x="70" y="74" width="60" height="98" rx="7" stroke="#FFF" strokeWidth="1" strokeOpacity="0.4" />
            {/* Label Print */}
            <text x="100" y="115" textAnchor="middle" fill="#1C1A18" fontSize="6" fontFamily="serif" letterSpacing="0.2em">AURAVIVANT</text>
            <text x="100" y="124" textAnchor="middle" fill="#4A443E" fontSize="4.2" letterSpacing="0.08em">SATIN HYDRO-GLOW</text>
            <text x="100" y="131" textAnchor="middle" fill="#756A5E" fontSize="3.5" letterSpacing="0.05em">SILK FOUNDATION</text>
            <text x="100" y="152" textAnchor="middle" fill="#9E8D7B" fontSize="3.2" letterSpacing="0.15em">30 ML · 1 FL. OZ.</text>
          </g>
        </svg>
      );

    case 'av-p6': // AuraVivant Celestial Prism (Quad)
      return (
        <svg viewBox="0 0 200 200" className={sizeClass} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="compactCase" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5E5C9" />
              <stop offset="40%" stopColor="#DFBF8A" />
              <stop offset="80%" stopColor="#B38D56" />
              <stop offset="100%" stopColor="#805F30" />
            </linearGradient>
            <filter id="shadowCompact" x="-20%" y="-20%" width="140%" height="150%">
              <feDropShadow dx="0" dy="16" stdDeviation="12" floodColor="#1A1816" floodOpacity="0.22" />
            </filter>
          </defs>
          <ellipse cx="100" cy="175" rx="68" ry="10" fill="#1C1A18" fillOpacity="0.1" filter="blur(5px)" />
          <g filter="url(#shadowCompact)">
            {/* Outer Gold Compact */}
            <rect x="42" y="38" width="116" height="124" rx="10" fill="url(#compactCase)" stroke="#FFF" strokeWidth="0.8" strokeOpacity="0.5" />
            {/* Inner Pan Frame */}
            <rect x="52" y="48" width="96" height="104" rx="6" fill="#181716" />
            {/* Pan 1: Astral Champagne */}
            <rect x="58" y="54" width="40" height="42" rx="4" fill="#F8E8CB" />
            <circle cx="78" cy="75" r="8" fill="#FFF" fillOpacity="0.5" filter="blur(1px)" />
            {/* Pan 2: Or Rose */}
            <rect x="102" y="54" width="40" height="42" rx="4" fill="#D98A76" />
            <circle cx="122" cy="75" r="7" fill="#F4B8A8" fillOpacity="0.4" />
            {/* Pan 3: Terre Chaude */}
            <rect x="58" y="102" width="40" height="42" rx="4" fill="#99583D" />
            {/* Pan 4: Nuit d'Ombre */}
            <rect x="102" y="102" width="40" height="42" rx="4" fill="#3B2E2A" />
            {/* Engraved Logo */}
            <text x="100" y="45" textAnchor="middle" fill="#694C24" fontSize="4.5" fontFamily="serif" letterSpacing="0.2em">AURAVIVANT</text>
          </g>
        </svg>
      );

    case 'av-p8': // AuraVivant Santal Mythique (Fluted Amber Crystal Flacon)
      return (
        <svg viewBox="0 0 200 200" className={sizeClass} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="amberCrystal" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6E4018" />
              <stop offset="25%" stopColor="#C97D2E" />
              <stop offset="50%" stopColor="#E5A049" />
              <stop offset="75%" stopColor="#C97D2E" />
              <stop offset="100%" stopColor="#5C3312" />
            </linearGradient>
            <linearGradient id="goldCap" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DFC8A3" />
              <stop offset="50%" stopColor="#B38D56" />
              <stop offset="100%" stopColor="#75562B" />
            </linearGradient>
            <filter id="shadowPerfume" x="-20%" y="-20%" width="140%" height="150%">
              <feDropShadow dx="0" dy="16" stdDeviation="14" floodColor="#1A1816" floodOpacity="0.25" />
            </filter>
          </defs>
          <ellipse cx="100" cy="180" rx="55" ry="9" fill="#1C1A18" fillOpacity="0.14" filter="blur(4px)" />
          <g filter="url(#shadowPerfume)">
            {/* Heavy Gold Cap */}
            <rect x="80" y="32" width="40" height="34" rx="3" fill="url(#goldCap)" stroke="#FFF" strokeWidth="0.5" strokeOpacity="0.4" />
            <line x1="82" y1="36" x2="118" y2="36" stroke="#FFF" strokeOpacity="0.5" />
            {/* Fluted Neck Collar */}
            <rect x="86" y="66" width="28" height="8" fill="url(#goldCap)" />
            {/* Black Cordonnet Silk Cord */}
            <path d="M84 74 C84 74, 76 86, 78 98" stroke="#1C1A18" strokeWidth="1.5" />
            <circle cx="78" cy="100" r="3.5" fill="#B38D56" stroke="#1C1A18" strokeWidth="0.8" />
            {/* Heavy Amber Flacon */}
            <rect x="58" y="74" width="84" height="98" rx="6" fill="url(#amberCrystal)" />
            {/* Vertical Fluting Highlights */}
            <line x1="68" y1="76" x2="68" y2="170" stroke="#FFF" strokeOpacity="0.2" strokeWidth="2" />
            <line x1="80" y1="76" x2="80" y2="170" stroke="#FFF" strokeOpacity="0.1" strokeWidth="1" />
            <line x1="120" y1="76" x2="120" y2="170" stroke="#FFF" strokeOpacity="0.15" strokeWidth="1.5" />
            <line x1="132" y1="76" x2="132" y2="170" stroke="#000" strokeOpacity="0.25" strokeWidth="2" />
            {/* Black Lacquer Label */}
            <rect x="70" y="104" width="60" height="38" rx="2" fill="#121110" stroke="#C5A880" strokeWidth="0.8" />
            <text x="100" y="117" textAnchor="middle" fill="#DFC8A3" fontSize="5.5" fontFamily="serif" letterSpacing="0.2em">AURAVIVANT</text>
            <text x="100" y="126" textAnchor="middle" fill="#EAE5DC" fontSize="4.2" letterSpacing="0.1em">SANTAL MYTHIQUE</text>
            <text x="100" y="134" textAnchor="middle" fill="#9E8565" fontSize="3.2" letterSpacing="0.1em">EXTRAIT DE PARFUM</text>
          </g>
        </svg>
      );

    case 'av-p9': // AuraVivant Pétales d’Argent (Silver Rose Mist Flacon)
      return (
        <svg viewBox="0 0 200 200" className={sizeClass} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="silverCap" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F0F2F5" />
              <stop offset="50%" stopColor="#C4C9D1" />
              <stop offset="100%" stopColor="#8E96A3" />
            </linearGradient>
            <linearGradient id="roseMistLiquid" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F5DFDF" />
              <stop offset="50%" stopColor="#FCEBED" />
              <stop offset="100%" stopColor="#E8CCD0" />
            </linearGradient>
            <filter id="shadowMist" x="-20%" y="-20%" width="140%" height="150%">
              <feDropShadow dx="0" dy="16" stdDeviation="12" floodColor="#1A1816" floodOpacity="0.18" />
            </filter>
          </defs>
          <ellipse cx="100" cy="180" rx="48" ry="8" fill="#1C1A18" fillOpacity="0.1" filter="blur(4px)" />
          <g filter="url(#shadowMist)">
            {/* Tall Platinum Spray Cap */}
            <rect x="85" y="24" width="30" height="42" rx="3" fill="url(#silverCap)" stroke="#FFF" strokeWidth="0.5" strokeOpacity="0.5" />
            {/* Silver Collar */}
            <rect x="80" y="66" width="40" height="8" rx="1" fill="url(#silverCap)" />
            {/* Slender Glass Cylinder */}
            <rect x="74" y="74" width="52" height="100" rx="8" fill="url(#roseMistLiquid)" stroke="#FFF" strokeWidth="1" strokeOpacity="0.6" />
            {/* Dewdrop and Rose Motif */}
            <circle cx="82" cy="100" r="1.5" fill="#FFF" fillOpacity="0.8" />
            <circle cx="88" cy="148" r="2" fill="#FFF" fillOpacity="0.7" />
            <circle cx="118" cy="116" r="1.2" fill="#FFF" fillOpacity="0.8" />
            {/* Label */}
            <text x="100" y="112" textAnchor="middle" fill="#2E2C2A" fontSize="5.5" fontFamily="serif" letterSpacing="0.2em">AURAVIVANT</text>
            <text x="100" y="122" textAnchor="middle" fill="#6E6265" fontSize="4.2" letterSpacing="0.08em">PÉTALES D’ARGENT</text>
            <text x="100" y="130" textAnchor="middle" fill="#9E8D92" fontSize="3.5" letterSpacing="0.05em">ROSE BODY MIST</text>
            <text x="100" y="156" textAnchor="middle" fill="#A89EA2" fontSize="3.2" letterSpacing="0.15em">150 ML · 5.1 FL. OZ.</text>
          </g>
        </svg>
      );

    case 'av-p12': // Masque de Jade Impérial (Celadon jade jar with gold lid)
      return (
        <svg viewBox="0 0 200 200" className={sizeClass} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="jadeJar" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A6B5D" />
              <stop offset="50%" stopColor="#2F4F42" />
              <stop offset="100%" stopColor="#1B332A" />
            </linearGradient>
            <linearGradient id="jadeGoldLid" x1="0%" y1="0%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#F5E7D0" />
              <stop offset="40%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#7E5F33" />
            </linearGradient>
          </defs>
          <ellipse cx="100" cy="172" rx="65" ry="10" fill="#1C1A18" fillOpacity="0.14" filter="blur(4px)" />
          <path d="M48 95 C48 95, 45 155, 54 162 C62 168, 138 168, 146 162 C155 155, 152 95, 152 95 Z" fill="url(#jadeJar)" />
          <rect x="68" y="112" width="64" height="34" rx="2" fill="#1B332A" stroke="#D4AF37" strokeWidth="0.8" />
          <text x="100" y="125" textAnchor="middle" fill="#E6D2B5" fontSize="6.5" fontFamily="serif" letterSpacing="0.15em">AURAVIVANT</text>
          <text x="100" y="133" textAnchor="middle" fill="#C5A880" fontSize="4.5" letterSpacing="0.08em">MASQUE DE JADE</text>
          <rect x="42" y="70" width="116" height="26" rx="4" fill="url(#jadeGoldLid)" stroke="#FFF" strokeWidth="0.5" strokeOpacity="0.4" />
        </svg>
      );

    case 'av-p16': // Prisme Poudre Micro-Fine (Translucent Powder case)
      return (
        <svg viewBox="0 0 200 200" className={sizeClass} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="powderGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FAF2E6" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#8C6838" />
            </linearGradient>
          </defs>
          <ellipse cx="100" cy="168" rx="68" ry="12" fill="#1C1A18" fillOpacity="0.12" filter="blur(4px)" />
          <ellipse cx="100" cy="115" rx="64" ry="42" fill="#24211E" stroke="#D4AF37" strokeWidth="1" />
          <ellipse cx="100" cy="115" rx="54" ry="32" fill="#FBF8F1" stroke="#E2D4BC" strokeWidth="0.8" />
          <circle cx="100" cy="115" r="8" fill="#D4AF37" fillOpacity="0.4" />
          <text x="100" y="118" textAnchor="middle" fill="#524330" fontSize="5" fontFamily="serif" letterSpacing="0.2em">AV</text>
          <ellipse cx="100" cy="80" rx="66" ry="24" fill="url(#powderGold)" stroke="#FFF" strokeWidth="0.5" strokeOpacity="0.5" />
          <text x="100" y="83" textAnchor="middle" fill="#543C1D" fontSize="6" fontFamily="serif" letterSpacing="0.25em">AURAVIVANT</text>
        </svg>
      );

    case 'av-p17': // Crayon Sculpt Haute Définition
      return (
        <svg viewBox="0 0 200 200" className={sizeClass} fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="100" cy="176" rx="50" ry="7" fill="#1C1A18" fillOpacity="0.1" filter="blur(3px)" />
          <g transform="rotate(-30 100 100)">
            <rect x="94" y="30" width="12" height="140" rx="2" fill="#181615" stroke="#C5A880" strokeWidth="0.8" />
            <rect x="94" y="30" width="12" height="35" fill="#D4AF37" />
            <polygon points="94,170 106,170 100,186" fill="#D29985" />
            <text x="100" y="95" textAnchor="middle" fill="#D4AF37" fontSize="4" fontFamily="serif" letterSpacing="0.2em" transform="rotate(90 100 95)">AURAVIVANT</text>
          </g>
        </svg>
      );

    case 'av-p20': // Iris Poudré Sublime (Florentine Iris Flacon)
      return (
        <svg viewBox="0 0 200 200" className={sizeClass} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="irisViolet" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#37264A" />
              <stop offset="50%" stopColor="#5E457A" />
              <stop offset="100%" stopColor="#2E1F3E" />
            </linearGradient>
            <linearGradient id="irisGold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F5E7D0" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#7E5F33" />
            </linearGradient>
          </defs>
          <ellipse cx="100" cy="180" rx="55" ry="9" fill="#1C1A18" fillOpacity="0.14" filter="blur(4px)" />
          <rect x="80" y="32" width="40" height="34" rx="3" fill="url(#irisGold)" stroke="#FFF" strokeWidth="0.5" strokeOpacity="0.4" />
          <rect x="86" y="66" width="28" height="8" fill="url(#irisGold)" />
          <rect x="58" y="74" width="84" height="98" rx="6" fill="url(#irisViolet)" />
          <rect x="70" y="104" width="60" height="38" rx="2" fill="#1A1324" stroke="#D4AF37" strokeWidth="0.8" />
          <text x="100" y="117" textAnchor="middle" fill="#E8D7B8" fontSize="5.5" fontFamily="serif" letterSpacing="0.2em">AURAVIVANT</text>
          <text x="100" y="126" textAnchor="middle" fill="#EBE4F0" fontSize="4.2" letterSpacing="0.1em">IRIS POUDRÉ</text>
        </svg>
      );

    default:
      return (
        <div className="flex flex-col items-center justify-center p-6 text-center">
          <div className="w-16 h-16 rounded-full border border-[#D8CEBE] flex items-center justify-center mb-3 text-[#9E7B4F]">
            <span className="font-serif text-2xl">AV</span>
          </div>
          <span className="font-serif text-sm tracking-widest text-[#2E2C2A] uppercase">AuraVivant</span>
        </div>
      );
  }
}
