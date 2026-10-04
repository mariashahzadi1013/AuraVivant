import React, { useState } from 'react';
import { Globe, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigateHome: () => void;
  onNavigateCollection: () => void;
  onNavigateAbout: () => void;
  onOpenPublishGuide?: () => void;
  onOpenQuiz?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateHome,
  onNavigateCollection,
  onNavigateAbout,
  onOpenPublishGuide,
  onOpenQuiz,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#181615] text-[#FAF8F5] pt-20 pb-12 border-t border-[#292523]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#2C2825]">
          
          {/* Brand & Slogan Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-serif text-3xl tracking-[0.22em] uppercase text-[#FAF8F5] block mb-3">
                AuraVivant
              </span>
              <p className="font-serif text-lg italic text-[#C5A880] mb-6">
                “Where Beauty Becomes an Aura.”
              </p>
              <p className="text-xs text-[#9E9385] font-light leading-relaxed max-w-sm mb-6">
                Paris · Grasse · Genève · Milano. A private collection of 21 luminous masterworks across cellular skincare, artisanal cosmetics, and haute parfumerie.
              </p>
            </div>

            {/* Concierge dispatch info */}
            <div className="text-[11px] text-[#7A7167] tracking-wider uppercase">
              Private Concierge: <span className="text-[#C5A880] lowercase">concierge@auravivant.com</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#C5A880] mb-6">
              Maison Navigation
            </h4>
            <ul className="space-y-3.5 text-xs tracking-wider uppercase text-[#C4B7A5]">
              <li>
                <button
                  onClick={onNavigateHome}
                  className="hover:text-[#FAF8F5] transition-colors focus:outline-none cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigateCollection}
                  className="hover:text-[#FAF8F5] transition-colors focus:outline-none cursor-pointer"
                >
                  Complete Collection (21)
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigateAbout}
                  className="hover:text-[#FAF8F5] transition-colors focus:outline-none cursor-pointer"
                >
                  About the Maison
                </button>
              </li>
              {onOpenQuiz && (
                <li>
                  <button
                    onClick={onOpenQuiz}
                    className="hover:text-[#FAF8F5] text-[#C5A880] transition-colors focus:outline-none flex items-center gap-1 cursor-pointer"
                  >
                    <Sparkles className="w-3 h-3 text-[#C5A880]" />
                    <span>Aura Consultation</span>
                  </button>
                </li>
              )}
              {onOpenPublishGuide && (
                <li>
                  <button
                    onClick={onOpenPublishGuide}
                    className="hover:text-[#FAF8F5] text-[#81C784] transition-colors focus:outline-none flex items-center gap-1 cursor-pointer"
                  >
                    <Globe className="w-3 h-3 text-[#81C784]" />
                    <span>Publish 100% Free</span>
                  </button>
                </li>
              )}
              <li>
                <button
                  onClick={() => setActiveModal('contact')}
                  className="hover:text-[#FAF8F5] transition-colors focus:outline-none cursor-pointer"
                >
                  Contact Concierge
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveModal('privacy')}
                  className="hover:text-[#FAF8F5] transition-colors focus:outline-none cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveModal('terms')}
                  className="hover:text-[#FAF8F5] transition-colors focus:outline-none cursor-pointer"
                >
                  Terms &amp; Craftsmanship
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter / Private Salon Column */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#C5A880] mb-4">
              Private Salon Invitation
            </h4>
            <p className="text-xs text-[#9E9385] font-light leading-relaxed mb-4">
              Receive private preview notices for limited extrait distillations, bespoke skincare consultations, and seasonal couture releases.
            </p>

            {subscribed ? (
              <div className="p-3.5 bg-[#252220] border border-[#3E3834] text-xs text-[#C5A880]">
                Thank you. You have been placed on the private salon register.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-[#24211F] border border-[#3E3935] px-4 py-2.5 text-xs text-[#FAF8F5] placeholder-[#736B63] focus:outline-none focus:border-[#C5A880]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#C5A880] text-[#181615] text-xs font-semibold uppercase tracking-wider hover:bg-[#FAF8F5] transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Join
                  </button>
                </div>
                <span className="text-[10px] text-[#696159] block">
                  Discreet correspondence. Unsubscribe at any moment.
                </span>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#736A61] gap-4">
          <p>© 2026 AuraVivant. All rights reserved.</p>
          <div className="flex items-center gap-6 text-[11px] tracking-widest uppercase">
            <span>Haute Parfumerie</span>
            <span>·</span>
            <span>Cellular Skincare</span>
            <span>·</span>
            <span>Artisanal Cosmetics</span>
          </div>
        </div>

      </div>

      {/* Simple Information Modals (Contact, Privacy, Terms) */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FAF8F5] text-[#1C1A18] max-w-lg w-full p-8 border border-[#D5CABB] shadow-2xl relative">
            <h3 className="font-serif text-2xl uppercase tracking-wider text-[#1C1A18] mb-4">
              {activeModal === 'contact' && 'Concierge Contact'}
              {activeModal === 'privacy' && 'Privacy Policy'}
              {activeModal === 'terms' && 'Terms & Conditions'}
            </h3>
            
            <div className="text-xs text-[#574F46] leading-relaxed space-y-3 mb-6 max-h-60 overflow-y-auto pr-2">
              {activeModal === 'contact' && (
                <>
                  <p>Our dedicated Maison advisors are at your service for product consultations, formulation inquiries, and bespoke order requests.</p>
                  <p><strong>Email:</strong> concierge@auravivant.com</p>
                  <p><strong>Atelier Paris:</strong> 14 Rue Saint-Honoré, 75001 Paris, France</p>
                  <p><strong>Hours:</strong> Monday – Friday, 9:00 AM – 6:00 PM CET</p>
                </>
              )}
              {activeModal === 'privacy' && (
                <>
                  <p>AuraVivant strictly honors the confidentiality of its patrons. We collect order information solely to fulfill acquisition requests and provide shipping notifications.</p>
                  <p>We do not sell, rent, or lease your personal data to third parties. All order records dispatched via our Google Sheets webhook integration are protected in compliance with global data protection standards.</p>
                </>
              )}
              {activeModal === 'terms' && (
                <>
                  <p>All AuraVivant formulations and flacons are produced under certified laboratory conditions in France, Switzerland, and Italy.</p>
                  <p>Orders submitted through this prototype are processed by our concierge fulfillment team. Cancellations may be requested within 24 hours of placement.</p>
                </>
              )}
            </div>

            <button
              onClick={() => setActiveModal(null)}
              className="w-full py-3 bg-[#1C1A18] text-[#FAF8F5] text-xs uppercase tracking-widest font-semibold hover:bg-[#9E7B4F] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
