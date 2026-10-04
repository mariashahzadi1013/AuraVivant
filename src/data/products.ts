/**
 * ============================================================================
 * AURAVIVANT — CENTRAL PRODUCT CATALOG CONFIGURATION
 * ============================================================================
 * 
 * Luxury catalog featuring 21 masterworks across three sensorial chambers:
 * 1. The Radiant Skincare Chamber (7 creations)
 * 2. The Artisanal Cosmetic Chamber (7 creations)
 * 3. The Haute Fragrance Chamber (7 creations)
 * 
 * HOW TO EDIT THIS FILE:
 * - To change a product name: edit the 'name' field.
 * - To change a price: edit the 'price' field (numbers only, e.g. 185).
 * - To change a description: edit the 'shortDescription' or 'fullDescription'.
 * - To change an image: update the 'image' property with a new image path.
 * - To edit benefits or notes: update the 'benefits' or 'notes' array.
 * ============================================================================
 */

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: "The Radiant Skincare Collection" | "The Artisanal Cosmetic Collection" | "The Haute Fragrance Collection" | string;
  categoryKey: "skincare" | "cosmetics" | "fragrance";
  shortDescription: string;
  price: number;
  size: string;
  image: string;
  badge?: "Bestseller" | "Artisanal Reserve" | "Heritage Formulation" | "Iconic Signature" | "Couture Complexion" | "Collector's Palette" | "Haute Parfumerie" | "Grand Cru Edition" | "Airy Freshness" | "New Release" | "Limited Edition" | "Award Winner";
  fullDescription: string;
  benefits: string[];
  keyIngredientsOrNotes: {
    label: string;
    items: string[];
  };
  applicationRitual: string;
  provenance: string;
  texture: string;
  rating?: number;
  reviewCount?: number;
}

export const PRODUCTS: Product[] = [
  // ==========================================================================
  // CHAMBER 1: The Radiant Skincare Collection (7 Creations)
  // ==========================================================================
  {
    id: "av-p1",
    slug: "lumiere-serum",
    name: "AuraVivant Lumière Serum",
    category: "The Radiant Skincare Collection",
    categoryKey: "skincare",
    shortDescription: "Diamond-Infused Brightening Serum",
    price: 185,
    size: "30 ml / 1.0 fl. oz.",
    image: "/src/assets/images/skincare_lumiere_serum_1790523974814.jpg",
    badge: "Bestseller",
    rating: 4.95,
    reviewCount: 142,
    fullDescription:
      "A breakthrough cellular elixir suspended with micro-micronized diamond crystals and white truffle peptides. Lumière Serum instantly corrects optical unevenness while penetrating deeply to stimulate collagen turnover and illuminate the complexion from within with a pearlescent halo.",
    benefits: [
      "Instantly diffuses ambient light for an ethereal, glass-skin luminosity",
      "Noticeably diminishes hyperpigmentation and fine expression lines in 14 days",
      "Deeply hydrates intercellular moisture reservoirs with multi-weight hyaluronic acid",
      "Infused with rare alpine edelweiss extract for 24-hour environmental defense"
    ],
    keyIngredientsOrNotes: {
      label: "Key Active Ingredients",
      items: [
        "Micronized Diamond Particles",
        "Piedmont White Truffle Extract",
        "Liposomal Niacinamide 5%",
        "Tetrahexyldecyl Ascorbate (Vitamin C)"
      ]
    },
    applicationRitual:
      "Warm 3 to 4 drops between the palms of your hands. Gently press into cleansed face, neck, and décolletage using upward gliding motions each morning prior to your moisturizer.",
    provenance: "Formulated & Bottled in Geneva, Switzerland",
    texture: "Silky, weightless fluid with a delicate diamond luminescence"
  },
  {
    id: "av-p2",
    slug: "creme-de-la-nuit",
    name: "AuraVivant Crème de la Nuit",
    category: "The Radiant Skincare Collection",
    categoryKey: "skincare",
    shortDescription: "Overnight Molecular Repair Balm",
    price: 220,
    size: "50 ml / 1.7 oz. net wt.",
    image: "/src/assets/images/skincare_creme_nuit.svg",
    badge: "Artisanal Reserve",
    rating: 4.98,
    reviewCount: 98,
    fullDescription:
      "An ultra-rich, melt-in-contact restorative treatment engineered to sync with circadian rejuvenation cycles. Crème de la Nuit marries botanical bio-retinols with rare fermented black orchid nectar to rebuild the epidermal barrier while you sleep.",
    benefits: [
      "Re-densifies epidermal volume and restores skin elasticity overnight",
      "Replenishes essential ceramides and lipid matrix depleted by stress",
      "Non-comedogenic, velvet-cushion barrier that locks in continuous moisture",
      "Awakens tired skin with velvety suppleness and a restful, luminous contour"
    ],
    keyIngredientsOrNotes: {
      label: "Key Active Ingredients",
      items: [
        "Fermented Black Orchid Nectar",
        "Botanical Bakuchiol & Sea Fennel",
        "Triple Ceramide Complex (NP, AP, EOP)",
        "Chronobiological Copper Peptides"
      ]
    },
    applicationRitual:
      "Using the signature golden spatula, scoop a pearl-sized amount and melt between fingertips. Press into skin with deep, rhythmic breaths to release soothing botanical aromatics before sleep.",
    provenance: "Hand-blended in Provence, France",
    texture: "Opulent velvet balm that melts into a nourishing satin veil upon touch"
  },
  {
    id: "av-p3",
    slug: "or-essence",
    name: "AuraVivant Or Essence",
    category: "The Radiant Skincare Collection",
    categoryKey: "skincare",
    shortDescription: "24k Gold Hydrating Face Oil",
    price: 160,
    size: "30 ml / 1.0 fl. oz.",
    image: "/src/assets/images/skincare_gold_essence_1790523990388.jpg",
    badge: "Heritage Formulation",
    rating: 4.92,
    reviewCount: 116,
    fullDescription:
      "A sacred elixir infused with suspended 24-karat gold leaf flakes and cold-pressed botanical oils from the Mediterranean coastline. Or Essence seals in vital hydration while infusing tired skin with warm, incandescent radiance.",
    benefits: [
      "Suspended 24k gold flakes melt invisibly into skin to enhance microcirculation",
      "Cold-pressed organic Kalahari melon and prickly pear seed oils deliver intense omegas",
      "Restores natural lipid balance without feeling greasy or heavy",
      "Imparts an immediate warm, lit-from-within golden glow"
    ],
    keyIngredientsOrNotes: {
      label: "Key Active Ingredients",
      items: [
        "24k Cosmetic Elemental Gold Leaf",
        "Prickly Pear Cactus Seed Oil",
        "Moroccan Argan Kernel Elixir",
        "Damask Rose Essential Absolute"
      ]
    },
    applicationRitual:
      "Dispense 2 to 3 golden drops onto fingertips. Press into high points of the face (cheekbones, brow bone, bridge of the nose) or blend into foundation for an amplified dew.",
    provenance: "Artisanally crafted in Grasse, France",
    texture: "Ultra-fine, dry-touch botanical oil with floating gold luminescence"
  },
  {
    id: "av-p10",
    slug: "eau-de-rose-celeste",
    name: "AuraVivant Eau de Rose Céleste",
    category: "The Radiant Skincare Collection",
    categoryKey: "skincare",
    shortDescription: "Botanical Rose Cellular Infusion Toner",
    price: 95,
    size: "150 ml / 5.1 fl. oz.",
    image: "/src/assets/images/skincare_rose_toner_1791102349332.jpg",
    badge: "Award Winner",
    rating: 4.96,
    reviewCount: 84,
    fullDescription:
      "Harvested at daybreak in the valleys of Grasse, pure distilled Centifolia and Damascena rose hydrosols are enriched with tremella mushroom hyaluronic acid and mineral thermal spring water. This clarifying essence resets the skin's pH, refines pores, and preps tissues to absorb serums exponentially.",
    benefits: [
      "Hydrates and calms reactivity with 100% steam-distilled French rosewater",
      "Tremella snow mushroom polysaccharide holds 500x its weight in cellular moisture",
      "Softens skin texture and reduces redness caused by environmental pollutants",
      "Leaves skin petal-soft, refreshed, and receptive to active serums"
    ],
    keyIngredientsOrNotes: {
      label: "Key Active Ingredients",
      items: [
        "Distilled Grasse Rose Centifolia Hydrosol",
        "Tremella Snow Mushroom Hyaluronic Complex",
        "Organic Aloe Barbadensis Leaf Juice",
        "Alpine Glacial Thermal Mineral Water"
      ]
    },
    applicationRitual:
      "Pour a few drops into the palms or onto an organic cotton pad. Gently sweep over face, neck, and chest morning and evening following cleansing.",
    provenance: "Harvested & Steam Distilled in Grasse, France",
    texture: "Refreshing, featherweight cellular liquid with an uplifting fresh rose aroma"
  },
  {
    id: "av-p11",
    slug: "regard-d-or-peptides",
    name: "AuraVivant Regard d'Or",
    category: "The Radiant Skincare Collection",
    categoryKey: "skincare",
    shortDescription: "24k Gold Micro-Lifting Eye Crème",
    price: 145,
    size: "15 ml / 0.5 fl. oz.",
    image: "/src/assets/images/skincare_eye_creme_1791102415581.jpg",
    badge: "New Release",
    rating: 4.97,
    reviewCount: 67,
    fullDescription:
      "A concentrated orbital contour treatment targeting under-eye darkness, fluid stagnation, and delicate expression lines. Infused with colloidal gold and six biomimetic peptides, Regard d'Or visibly firms the delicate eyelid and orbital region while diffusing shadows with micro-pearls.",
    benefits: [
      "Noticeably de-puffs and brightens dark vascular shadows within 10 minutes",
      "Hexapeptide-8 and copper tripeptide smooth crow's feet and fine expression crinkles",
      "Includes a cooling 24k gold zamac ergonomic contour wand for lymphatic drainage",
      "Ophthalmologist tested, suitable for contact lens wearers and sensitive eyes"
    ],
    keyIngredientsOrNotes: {
      label: "Key Active Ingredients",
      items: [
        "Bio-Chelated Colloidal Gold",
        "Hexapeptide-8 & Palmitoyl Tripeptide-38",
        "Green Caffeine Arabica Extract",
        "Chlorella Vulgaris Micro-Algae"
      ]
    },
    applicationRitual:
      "Dot a pinhead amount along the orbital bone using your ring finger. Use the cooling golden zamac wand to glide from inner corner outward in gentle figure-eight motions.",
    provenance: "Formulated in Zurich, Switzerland",
    texture: "Silky, cooling whipped emulsion that cushions without migrating into eyes"
  },
  {
    id: "av-p12",
    slug: "masque-de-jade-imperial",
    name: "AuraVivant Masque de Jade Impérial",
    category: "The Radiant Skincare Collection",
    categoryKey: "skincare",
    shortDescription: "Clarifying Jade Clay & Cellular Enzyme Mask",
    price: 130,
    size: "75 ml / 2.5 fl. oz.",
    image: "/src/assets/images/skincare_creme_nuit.svg",
    badge: "Artisanal Reserve",
    rating: 4.93,
    reviewCount: 52,
    fullDescription:
      "An extraordinary detoxifying and resurfacing treatment incorporating French green montmorillonite clay infused with finely powdered nephrite jade and fermented pomegranate enzymes. It draws out micro-pollutants and refines cellular texture without stripping moisture.",
    benefits: [
      "Dissolves dull keratinized cells gently through non-abrasive proteolytic enzymes",
      "Purifies congested pores and harmonizes natural sebum balance",
      "Infuses bio-available zinc, silica, and magnesium into the dermal matrix",
      "Reveals extraordinarily polished, baby-soft radiance in a single 15-minute ritual"
    ],
    keyIngredientsOrNotes: {
      label: "Key Active Ingredients",
      items: [
        "Micro-Milled Nephrite Jade Powder",
        "French Montmorillonite Green Clay",
        "Fermented Pomegranate & Papaya Enzymes",
        "Cold-Pressed Mediterranean Olive Leaf Oil"
      ]
    },
    applicationRitual:
      "Apply an even layer over cleansed skin with the Maison applicator brush. Relax for 10-15 minutes while the mask gently warms. Rinse with tepid water and a warm muslin cloth.",
    provenance: "Artisanally compounded in Bordeaux, France",
    texture: "Lush, creamy mineral paste with subtle cool jade tones"
  },
  {
    id: "av-p13",
    slug: "emulsion-solaire-luminescente",
    name: "AuraVivant Émulsion Solaire SPF 50",
    category: "The Radiant Skincare Collection",
    categoryKey: "skincare",
    shortDescription: "Mineral Silk Sun Veil with Niacinamide",
    price: 105,
    size: "50 ml / 1.7 fl. oz.",
    image: "/src/assets/images/skincare_gold_essence_1790523990388.jpg",
    badge: "Limited Edition",
    rating: 4.94,
    reviewCount: 71,
    fullDescription:
      "The pinnacle of daily photo-aging defense. A 100% non-nano zinc oxide mineral shield formulated in an ultra-sheer silk fluid that vanishes invisibly across all complexions. Fortified with 4% niacinamide and ectoin to block UVA, UVB, blue light, and urban smog.",
    benefits: [
      "Broad Spectrum SPF 50 PA++++ non-nano mineral sun protection",
      "Completely invisible finish with zero white cast or greasy residue",
      "Acts as a luminous primer that grips cosmetics for 16-hour endurance",
      "Protects against photo-induced collagen breakdown and pigment spots"
    ],
    keyIngredientsOrNotes: {
      label: "Key Active Ingredients",
      items: [
        "Non-Nano Micronized Zinc Oxide 18.2%",
        "Ectoin Extremolyte Defense Molecule",
        "Niacinamide (Vitamin B3) 4%",
        "French Sea Lavender Extract"
      ]
    },
    applicationRitual:
      "Shake gently before dispensing two finger-lengths of fluid. Smooth evenly across face, neck, and ears every morning as the final step of your skincare ritual.",
    provenance: "Formulated in Monaco",
    texture: "Featherlight, water-burst fluid with a satin bare-skin finish"
  },

  // ==========================================================================
  // CHAMBER 2: The Artisanal Cosmetic Collection (7 Creations)
  // ==========================================================================
  {
    id: "av-p4",
    slug: "velvet-absolute",
    name: "AuraVivant Velvet Absolute",
    category: "The Artisanal Cosmetic Collection",
    categoryKey: "cosmetics",
    shortDescription: "Weightless Matte Red Lipstick",
    price: 68,
    size: "3.8 g / 0.13 oz.",
    image: "/src/assets/images/cosmetic_velvet_lipstick_1790524001466.jpg",
    badge: "Iconic Signature",
    rating: 4.99,
    reviewCount: 210,
    fullDescription:
      "A couture matte red lipstick that glides with cashmere softness, delivering saturated crimson pigment in a single pass. Formulated with spherical blurring powders and camellia seed butter, Velvet Absolute never bleeds, cakes, or dehydrates.",
    benefits: [
      "12-hour high-impact chromatic saturation with no feathering",
      "Micro-fine pigments coat lips with an ultra-light, second-skin veil",
      "Enriched with nourishing wild French camellia oil for cloud-soft wear",
      "Presented in a weighted architectural casing with magnetic closure"
    ],
    keyIngredientsOrNotes: {
      label: "Artisanal Formulation Notes",
      items: [
        "Pure Mineral Carmine & Iron Oxides",
        "French Camellia Japonica Seed Oil",
        "Wild Mango Kernel Butter",
        "Soft-Focus Spherical Silica"
      ]
    },
    applicationRitual:
      "Trace the Cupid’s bow directly using the sculptural teardrop bullet tip. Fill the center of the lips and press together for an effortless velvet-matte Parisian finish.",
    provenance: "Designed in Paris, Crafted in Italy",
    texture: "Weightless cushion matte with a decadent powdery glide"
  },
  {
    id: "av-p5",
    slug: "satin-hydro-glow",
    name: "AuraVivant Satin Hydro-Glow",
    category: "The Artisanal Cosmetic Collection",
    categoryKey: "cosmetics",
    shortDescription: "Silk Liquid Foundation",
    price: 110,
    size: "30 ml / 1.0 fl. oz.",
    image: "/src/assets/images/cosmetic_satin_foundation.svg",
    badge: "Couture Complexion",
    rating: 4.91,
    reviewCount: 135,
    fullDescription:
      "An innovative serum-foundation hybrid combining the skin-perfecting coverage of raw silk pigments with 82% skincare moisture actives. Satin Hydro-Glow mimics the authentic texture of healthy, bare skin with a breathable, radiant veil.",
    benefits: [
      "Medium buildable coverage that seamlessly blurs pores and redness",
      "82% active skincare base featuring Japanese marine collagen & squalane",
      "All-day luminous wear that adapts to natural skin oils without oxidizing",
      "Featherweight breathable formula that allows skin to respirate freely"
    ],
    keyIngredientsOrNotes: {
      label: "Artisanal Formulation Notes",
      items: [
        "Coated Japanese Silk Powders",
        "Plant-Derived Olive Squalane",
        "Marine Micro-Algae Ferment",
        "Broad Spectrum SPF 25 Mineral Shield"
      ]
    },
    applicationRitual:
      "Shake gently before pumping 1 drop onto the back of the hand. Blend outward from the center of the face using fingertips or a dense buffing brush for a seamless, second-skin complexion.",
    provenance: "Formulated in Milan, Italy",
    texture: "Airy liquid serum that melds into a satin-soft finish"
  },
  {
    id: "av-p6",
    slug: "celestial-prism",
    name: "AuraVivant Celestial Prism",
    category: "The Artisanal Cosmetic Collection",
    categoryKey: "cosmetics",
    shortDescription: "Multi-Dimensional Eyeshadow Quad",
    price: 92,
    size: "4 x 2.2 g / 0.31 oz.",
    image: "/src/assets/images/cosmetic_celestial_quad.svg",
    badge: "Collector's Palette",
    rating: 4.94,
    reviewCount: 88,
    fullDescription:
      "Four harmonized chromatic pigments inspired by the twilight reflections over the Seine. Features a creamy velvet matte base, a satiny copper taupe, an astral champagne sparkle, and a celestial bronze metallic that catch the light from every dimension.",
    benefits: [
      "Wet/dry dual-finish versatility for subtle daytime washes or intense evening drama",
      "Zero fallout formula infused with prismatic pearls and squalane binders",
      "Silky buttery blendability that glides effortlessly across the eyelid",
      "Housed in a bespoke champagne-gold lacquered jewel compact"
    ],
    keyIngredientsOrNotes: {
      label: "Shade Harmony",
      items: [
        "Astral Voile: Crystalline champagne glitter topper",
        "Or Rose: Lustrous metallic rose-gold foil",
        "Terre Chaude: Rich terracotta satin transition",
        "Nuit d'Ombre: Deep espresso velvet matte define"
      ]
    },
    applicationRitual:
      "Sweep Terre Chaude into the crease, press Or Rose across the lid with your fingertip, and tap Astral Voile onto the inner corner and brow bone for an ethereal starlit reflection.",
    provenance: "Hand-pressed in Como, Italy",
    texture: "Ultra-micronized powders ranging from buttery matte to molten foil"
  },
  {
    id: "av-p14",
    slug: "voile-de-joues",
    name: "AuraVivant Voile de Joues",
    category: "The Artisanal Cosmetic Collection",
    categoryKey: "cosmetics",
    shortDescription: "Luminous Liquid Silk Blush",
    price: 74,
    size: "15 ml / 0.5 fl. oz.",
    image: "/src/assets/images/cosmetic_silk_blush_1791102384455.jpg",
    badge: "Bestseller",
    rating: 4.96,
    reviewCount: 94,
    fullDescription:
      "A weightless water-gel liquid blush infused with Damask rose water and micronized pearl spheres. It blends like a dream into bare skin or foundation, providing an authentic youthful flush that looks lit from within and never disrupts underlying makeup.",
    benefits: [
      "Sheer, buildable warmth that mimics a healthy, fresh-air radiance",
      "Infused with hyaluronic spheres to plump cheek contours visibly",
      "Long-wear chromatic stain that endures up to 14 hours without fading",
      "Glides effortlessly without clinging to dry patches or fine lines"
    ],
    keyIngredientsOrNotes: {
      label: "Artisanal Formulation Notes",
      items: [
        "Centifolia Rose Hydrosol Base",
        "Sodium Hyaluronate Microspheres",
        "Cold-Pressed Camellia Seed Oil",
        "Reflective Light-Diffusion Silica"
      ]
    },
    applicationRitual:
      "Dab 1 or 2 small dots onto the apples of the cheeks. Tap and blend upward along cheekbones using your ring finger or a damp sponge.",
    provenance: "Crafted in Florence, Italy",
    texture: "Bouncy water-silk emulsion with a dewy, non-sticky finish"
  },
  {
    id: "av-p15",
    slug: "baume-nectar-teinte",
    name: "AuraVivant Baume Nectar Teinté",
    category: "The Artisanal Cosmetic Collection",
    categoryKey: "cosmetics",
    shortDescription: "Plumping Peptides Tinted Lip Oil",
    price: 58,
    size: "7 ml / 0.24 fl. oz.",
    image: "/src/assets/images/cosmetic_velvet_lipstick_1790524001466.jpg",
    badge: "New Release",
    rating: 4.93,
    reviewCount: 78,
    fullDescription:
      "A rich, non-sticky cushion lip nectar that bridges the nourishing comfort of a lip treatment balm with the high-shine glass gloss of a couture lacquer. Infused with botanical maxi-lip peptides that boost lip fullness and define contours effortlessly.",
    benefits: [
      "Immediate cushiony glass reflection without tackiness or drag",
      "Peptides visibly smooth lip crinkles and enhance volume over 28 days",
      "Sheer flattering berry-rose glaze that enhances natural lip undertones",
      "Enriched with cold-pressed cherry kernel oil and shea butter esters"
    ],
    keyIngredientsOrNotes: {
      label: "Artisanal Formulation Notes",
      items: [
        "Maxi-Lip Biomimetic Peptide Complex",
        "Organic French Cherry Kernel Oil",
        "Hydrolyzed Hyaluronic Acid",
        "Plant-Derived Phytosterols"
      ]
    },
    applicationRitual:
      "Glide the plush velvet paddle applicator across bare lips or layer atop Velvet Absolute lipstick for an opulent, mirror-lacquer finish.",
    provenance: "Compounded in Paris, France",
    texture: "Nourishing, non-sticky oil-gel with a cushiony glaze"
  },
  {
    id: "av-p16",
    slug: "prisme-poudre-microfine",
    name: "AuraVivant Prisme Poudre Micro-Fine",
    category: "The Artisanal Cosmetic Collection",
    categoryKey: "cosmetics",
    shortDescription: "Translucent Cashmere Setting Powder",
    price: 82,
    size: "12 g / 0.42 oz.",
    image: "/src/assets/images/cosmetic_celestial_quad.svg",
    badge: "Award Winner",
    rating: 4.97,
    reviewCount: 112,
    fullDescription:
      "An ethereal setting powder milled in the mountains of Como for four days to achieve an air-light micronized particle size. It blurs pores, locks in makeup, and controls unwanted shine while allowing skin's natural luminance to radiate through without flashback.",
    benefits: [
      "Zero flashback in high-definition digital flash photography",
      "Ultra-soft optical blurring spheres erase pores and texture",
      "Talc-free formulation powered by treated rice starch and mica",
      "Includes a handmade French goose-down cotton velour powder puff"
    ],
    keyIngredientsOrNotes: {
      label: "Artisanal Formulation Notes",
      items: [
        "Micronized Como Rice Starch",
        "Soft-Focus Boron Nitride",
        "Squalane Lipid Enriched Powders",
        "Silk Amino Acid Crystals"
      ]
    },
    applicationRitual:
      "Press the included velour puff into the mesh sifter, tap off excess onto the back of your hand, and press gently into the T-zone and under-eye area.",
    provenance: "Milled in Como, Italy",
    texture: "Airy, cloud-soft cashmere powder with zero chalkiness"
  },
  {
    id: "av-p17",
    slug: "crayon-contour-couture",
    name: "AuraVivant Crayon Sculpt Haute Définition",
    category: "The Artisanal Cosmetic Collection",
    categoryKey: "cosmetics",
    shortDescription: "Waterproof Gel Lip & Eye Definer Duo",
    price: 48,
    size: "1.2 g / 0.04 oz.",
    image: "/src/assets/images/cosmetic_velvet_lipstick_1790524001466.jpg",
    badge: "Iconic Signature",
    rating: 4.90,
    reviewCount: 65,
    fullDescription:
      "An architectural dual-ended sculpting pencil featuring an ultra-creamy gel formula that glides without skipping and sets into a transfer-proof, waterproof contour in 30 seconds. Perfect for precision lip framing or sultry eye contouring.",
    benefits: [
      "16-hour smudge-proof, tear-proof, and transfer-resistant hold",
      "Smooth glide infused with conditioning jojoba and marula oils",
      "Architectural triangular barrel with built-in mini sharpener",
      "Neutral Parisian undertone that flatters every complexion"
    ],
    keyIngredientsOrNotes: {
      label: "Artisanal Formulation Notes",
      items: [
        "High-Purity Treated Iron Oxides",
        "Hydrogenated Jojoba Seed Wax",
        "Marula Kernel Oil",
        "Vitamin E Tocopherol"
      ]
    },
    applicationRitual:
      "Outline the outer perimeter of the lips to enhance symmetry before filling with lipstick, or softly line the lash line and smudge with a dense pencil brush.",
    provenance: "Engineered in Germany, Styled in Paris",
    texture: "Ultra-silky gel that sets into a velvety waterproof lock"
  },

  // ==========================================================================
  // CHAMBER 3: The Haute Fragrance Collection (7 Creations)
  // ==========================================================================
  {
    id: "av-p7",
    slug: "nuit-oud",
    name: "AuraVivant Nuit Oud",
    category: "The Haute Fragrance Collection",
    categoryKey: "fragrance",
    shortDescription: "Intense French-Oriental Eau de Parfum",
    price: 265,
    size: "100 ml / 3.4 fl. oz.",
    image: "/src/assets/images/fragrance_nuit_oud_1790524013428.jpg",
    badge: "Haute Parfumerie",
    rating: 4.98,
    reviewCount: 165,
    fullDescription:
      "A nocturnal masterpiece that bridges Parisian elegance with the smoky opulence of ancient Middle Eastern perfumery. Rare wild Assamese agarwood is swathed in velvety Damask rose, warm amber resin, and caramelized vanilla pod.",
    benefits: [
      "Concentrated 28% Extrait de Parfum oil density for 16+ hour longevity",
      "Matured for 6 months in French oak barrels to harmonize precious resins",
      "A hypnotic sillage that evolves from spicy warmth to magnetic smoky sweetness",
      "Heavy flacon hand-cut from lead crystal topped with a solid brass cap"
    ],
    keyIngredientsOrNotes: {
      label: "Olfactory Architecture",
      items: [
        "Top Notes: Saffron Stigmas, Pink Peppercorn, Bergamot",
        "Heart Notes: Bulgarian Rose Absolute, Guaiac Wood, Labdanum",
        "Base Notes: Assamese Oud Wood, Smoked Benzoin, Bourbon Vanilla"
      ]
    },
    applicationRitual:
      "Mist onto pulse points — the nape of the neck, inner wrists, and behind the knees. Allow the warmth of your pulse to release the deep resinous heart notes without rubbing.",
    provenance: "Compounded & Matured in Grasse, France",
    texture: "Rich, enveloping extrait oil with immense projection and warmth"
  },
  {
    id: "av-p8",
    slug: "santal-mythique",
    name: "AuraVivant Santal Mythique",
    category: "The Haute Fragrance Collection",
    categoryKey: "fragrance",
    shortDescription: "Premium Sandalwood Extrait de Parfum",
    price: 295,
    size: "100 ml / 3.4 fl. oz.",
    image: "/src/assets/images/fragrance_santal_mythique.svg",
    badge: "Grand Cru Edition",
    rating: 4.99,
    reviewCount: 180,
    fullDescription:
      "A serene and intoxicating meditation on sustainable Australian and Mysore sandalwood. Creamy woods are illuminated with cardamome, cedar bark, orris butter, and wrapped in warm cashmeran for a calm, commanding presence.",
    benefits: [
      "Sustainably harvested 40-year aged heartwood sandalwood essence",
      "Velvety, intimate skin scent that radiates understated luxury",
      "Universal composition beloved for its grounding, meditative presence",
      "Numbered batch flacon sealed with silk cordonnet and gold wax stamp"
    ],
    keyIngredientsOrNotes: {
      label: "Olfactory Architecture",
      items: [
        "Top Notes: Green Cardamom, Violet Leaf, Papyrus",
        "Heart Notes: Florentine Orris Butter, Atlas Cedar, Ambergris",
        "Base Notes: Mysore Sandalwood, Cashmeran, White Musk"
      ]
    },
    applicationRitual:
      "Spray in a gentle arc over the shoulders and collarbone. Ideal for quiet contemplation, intimate gatherings, or formal evening occasions.",
    provenance: "Distilled in Grasse, France",
    texture: "Creamy, dry-woody extrait with velvet sillage"
  },
  {
    id: "av-p9",
    slug: "petales-d-argent",
    name: "AuraVivant Pétales d’Argent",
    category: "The Haute Fragrance Collection",
    categoryKey: "fragrance",
    shortDescription: "Fresh Silver Rose Body Mist",
    price: 140,
    size: "150 ml / 5.1 fl. oz.",
    image: "/src/assets/images/fragrance_petales_argent.svg",
    badge: "Airy Freshness",
    rating: 4.92,
    reviewCount: 92,
    fullDescription:
      "An invigorating, crystal-clear body mist capturing early dawn dewdrops on May rose blossoms. Sparkling white tea, crystalline pear, and silver cedar mingle with pure distilled rosewater to revive the senses throughout the day.",
    benefits: [
      "Alcohol-light formula enriched with moisturizing rose hydrosol",
      "Featherlight, refreshing mist that revives both skin and mood effortlessly",
      "Subtle, uplifting trail perfect for layered scents or warm climates",
      "Fine-mist nozzle delivering an ultra-diffused cooling cloud"
    ],
    keyIngredientsOrNotes: {
      label: "Olfactory Architecture",
      items: [
        "Top Notes: Crisp Silver Pear, Dewy White Tea, Italian Mandarin",
        "Heart Notes: May Rose Centifolia, Peony Petals, Water Lily",
        "Base Notes: Silver Cedarwood, Clean Cotton Musk, Sheer Amber"
      ]
    },
    applicationRitual:
      "Generously mist from head to toe after bathing or whenever you seek a burst of revitalizing freshness. Safe for hair, skin, and fine natural fabrics.",
    provenance: "Distilled in Saint-Paul-de-Vence, France",
    texture: "Ultra-fine hydrating botanical mist with instantaneous absorption"
  },
  {
    id: "av-p18",
    slug: "soleil-de-grasse",
    name: "AuraVivant Soleil de Grasse",
    category: "The Haute Fragrance Collection",
    categoryKey: "fragrance",
    shortDescription: "Radiant Neroli, Ambergris & Fig Extrait",
    price: 280,
    size: "100 ml / 3.4 fl. oz.",
    image: "/src/assets/images/fragrance_soleil_grasse_1791102365064.jpg",
    badge: "Bestseller",
    rating: 4.97,
    reviewCount: 124,
    fullDescription:
      "A tribute to the golden Mediterranean sunlight caressing citrus orchards along the French Riviera. Sun-warmed neroli blossom and bitter orange petitgrain sparkle above milky Mediterranean green fig leaves, grounded by authentic floating grey ambergris and clean white cedarwood.",
    benefits: [
      "26% perfume concentration providing remarkable 14-hour solar longevity",
      "Contains cold-pressed hand-picked bitter orange blossoms from Grasse",
      "Elicits immediate joy, warmth, and the feeling of a private villa on Cap d'Antibes",
      "Sealed in a heavy polished crystal bottle topped with an engraved gold cap"
    ],
    keyIngredientsOrNotes: {
      label: "Olfactory Architecture",
      items: [
        "Top Notes: Grasse Neroli, Sicilian Petitgrain, Bergamot Zest",
        "Heart Notes: Green Riviera Fig, Jasmine Sambac, Orange Flower",
        "Base Notes: Natural Grey Ambergris, Sunlit Cedar, White Vetiver"
      ]
    },
    applicationRitual:
      "Spray liberally over pulse points and allow the golden neroli top notes to bloom with your body heat. Magnificent for both daytime radiance and warm evening galas.",
    provenance: "Distilled & Formulated in Grasse, France",
    texture: "Bright, sparkling extrait with a golden solar trail"
  },
  {
    id: "av-p19",
    slug: "ambre-cuir-imperial",
    name: "AuraVivant Ambre Cuir Impérial",
    category: "The Haute Fragrance Collection",
    categoryKey: "fragrance",
    shortDescription: "Smoky Tonka Bean & Tuscan Suede",
    price: 310,
    size: "100 ml / 3.4 fl. oz.",
    image: "/src/assets/images/fragrance_ambre_cuir_1791102399996.jpg",
    badge: "Artisanal Reserve",
    rating: 4.99,
    reviewCount: 89,
    fullDescription:
      "An aristocratic composition evoking the private library of a Parisian grand salon. Supple Tuscan suede is laced with rich golden amber, toasted Venezuelan tonka beans, bitter almond, and a touch of birch tar smoke, creating an aura of timeless authority and magnetic warmth.",
    benefits: [
      "Ultra-concentrated 30% Extrait de Parfum with monumental projection",
      "Features wild roasted tonka beans and aged Tuscan leather accord",
      "Commands attention in boardroom and formal evening settings",
      "Numbered bottle flacon housed in a bespoke velvet-lined wooden presentation box"
    ],
    keyIngredientsOrNotes: {
      label: "Olfactory Architecture",
      items: [
        "Top Notes: Bitter Almond, Thyme, Smoked Cardamom",
        "Heart Notes: Tuscan Suede Leather, Clary Sage, Cashmere Wood",
        "Base Notes: Golden Amber Resin, Roasted Tonka Bean, Birch Tar"
      ]
    },
    applicationRitual:
      "Two precise spritzes on the collarbones and wrists are sufficient for a commanding, sophisticated presence that lasts through the night.",
    provenance: "Aged in French Oak Barrels in Grasse, France",
    texture: "Smoky, velvety extrait with an unforgettable commanding sillage"
  },
  {
    id: "av-p20",
    slug: "iris-poudre-sublime",
    name: "AuraVivant Iris Poudré Sublime",
    category: "The Haute Fragrance Collection",
    categoryKey: "fragrance",
    shortDescription: "Florentine Orris Butter & White Musk Elixir",
    price: 275,
    size: "100 ml / 3.4 fl. oz.",
    image: "/src/assets/images/fragrance_santal_mythique.svg",
    badge: "Grand Cru Edition",
    rating: 4.95,
    reviewCount: 76,
    fullDescription:
      "Florentine iris rhizomes dried and aged for three full years before steam distillation yield the rare and precious orris butter. Iris Poudré Sublime wraps this noble velvet floral note in clean crystalline aldehydes, powdery violet leaf, and skin-soft white musk.",
    benefits: [
      "Features authentic aged Florentine orris butter (one of the world's costliest perfume ingredients)",
      "Unmatched sophistication with a powdery, royal skin-scent profile",
      "Incredibly versatile for daytime elegance, high diplomacy, and quiet luxury",
      "Leaves an indelible impression of effortless cleanliness and grace"
    ],
    keyIngredientsOrNotes: {
      label: "Olfactory Architecture",
      items: [
        "Top Notes: Crystalline Aldehydes, Italian Mandarin, Angelica Root",
        "Heart Notes: 3-Year Aged Florentine Orris Butter, French Violet",
        "Base Notes: Silk White Musk, Clean Amber, Haitian Vetiver"
      ]
    },
    applicationRitual:
      "Mist into the air and walk through the cloud, then apply a drop directly to the base of the throat for an intoxicating close-contact aura.",
    provenance: "Distilled in Grasse, France with Florentine Iris",
    texture: "Silky, powdery skin-scent extrait with aristocratic elegance"
  },
  {
    id: "av-p21",
    slug: "vanille-botanique-nocturne",
    name: "AuraVivant Vanille Nocturne",
    category: "The Haute Fragrance Collection",
    categoryKey: "fragrance",
    shortDescription: "Madagascan Bourbon Vanilla & Roasted Vetiver",
    price: 250,
    size: "100 ml / 3.4 fl. oz.",
    image: "/src/assets/images/fragrance_nuit_oud_1790524013428.jpg",
    badge: "Limited Edition",
    rating: 4.96,
    reviewCount: 104,
    fullDescription:
      "A dark, adult reimagining of noble vanilla. Far from confectionery sweetness, Vanille Nocturne highlights the leathery, boozy facets of whole Madagascan Bourbon vanilla pods extracted using supercritical CO2, paired with earthy Haitian vetiver, dark rum, and charred oak.",
    benefits: [
      "Supercritical CO2 extraction captures the true botanical soul of cured vanilla orchid pods",
      "Enchanting contrast between warm boozy sweetness and earthy woody darkness",
      "Beloved by both women and men for its cozy yet seductive magnetic draw",
      "Flacon tinted in deep smoked amethyst with polished brass accents"
    ],
    keyIngredientsOrNotes: {
      label: "Olfactory Architecture",
      items: [
        "Top Notes: Aged Dark Rum, Pink Pepper, Bitter Cocoa",
        "Heart Notes: Madagascan Vanilla Orchid Absolute, Tobacco Leaf",
        "Base Notes: Haitian Vetiver, Charred Oak, Benzoin Tears"
      ]
    },
    applicationRitual:
      "Spray onto pulse points and scarf or jacket lapels. The smoky vanilla facets intensify in cool evening breezes and ambient warmth.",
    provenance: "Extracted & Bottled in Paris, France",
    texture: "Warm, enveloping gourmand-woody extrait with hypnotic depth"
  }
];

export const CATEGORIES = [
  {
    id: "all",
    label: "Complete Catalog",
    count: 21,
    description: "The complete 21-piece AuraVivant haute collection across three sensorial chambers."
  },
  {
    id: "skincare",
    label: "The Radiant Skincare Chamber",
    count: 7,
    description: "Cellular elixirs, 24k gold botanicals, and rose hydrolates designed for luminous longevity."
  },
  {
    id: "cosmetics",
    label: "The Artisanal Cosmetic Chamber",
    count: 7,
    description: "Couture color, silk blushes, and cashmere textures engineered for effortless beauty."
  },
  {
    id: "fragrance",
    label: "The Haute Fragrance Chamber",
    count: 7,
    description: "Concentrated extraits de parfum blending Grasse traditions with noble resins and rare woods."
  }
];

export const MAISON_TESTIMONIALS = [
  {
    id: "rev-1",
    author: "Baroness Vivienne de Montmirail",
    location: "Paris, France",
    role: "Verified Connoisseur",
    rating: 5,
    product: "AuraVivant Lumière Serum",
    date: "September 2026",
    quote:
      "The diamond luminescence is unlike any other serum in my collection. Within three days, my complexion looked noticeably more awake and lit with an authentic pearlescent halo."
  },
  {
    id: "rev-2",
    author: "Camille Laurent-Dumas",
    location: "Geneva, Switzerland",
    role: "Haute Beauté Patron",
    rating: 5,
    product: "AuraVivant Nuit Oud",
    date: "October 2026",
    quote:
      "Nuit Oud is a true masterpiece of French-Oriental perfumery. TheAssamese agarwood with French oak aging leaves an indelible trail at evening galas. Sublime."
  },
  {
    id: "rev-3",
    author: "Elena Rostova",
    location: "London, Mayfair",
    role: "Verified Connoisseur",
    rating: 5,
    product: "AuraVivant Velvet Absolute",
    date: "August 2026",
    quote:
      "Velvet Absolute has the powdery glide of pure cashmere. It lasts through multi-course dinners without feathering, while remaining completely featherweight."
  },
  {
    id: "rev-4",
    author: "Dr. Alistair Vance",
    location: "Monaco",
    role: "Private Collector",
    rating: 5,
    product: "AuraVivant Santal Mythique",
    date: "September 2026",
    quote:
      "The 40-year aged sandalwood heartwood is creamy, serene, and commanding. The packaging, with its solid brass cap and gold seal, is pure Parisian haute luxury."
  }
];

export const EDITORIAL_ACCOLADES = [
  { magazine: "VOGUE", quote: "“The benchmark of modern Parisian luxury beauty.”" },
  { magazine: "HARPER'S BAZAAR", quote: "“Where Swiss cellular science meets Grasse haute perfumery.”" },
  { magazine: "L'OFFICIEL", quote: "“Formulations that elevate beauty to an ethereal aura.”" },
  { magazine: "ELLE LUXE", quote: "“The most coveted artisanal cosmetic creations of the year.”" }
];
