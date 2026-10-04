import React, { useState } from 'react';
import { X, Globe, CheckCircle, Copy, Check, ExternalLink, Zap, Shield } from 'lucide-react';
import { GOOGLE_APPS_SCRIPT_URL } from '../config/webhook';

interface PublishGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PublishGuideModal: React.FC<PublishGuideModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(GOOGLE_APPS_SCRIPT_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
            <Globe className="w-5 h-5 text-[#9E7B4F]" />
            <div>
              <span className="text-[10px] uppercase tracking-[0.24em] font-medium text-[#9E7B4F] block">
                Publishing Concierge
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1C1A18]">
                Publish Your Website 100% Free of Cost
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#6B6258] hover:text-[#1C1A18] transition-colors cursor-pointer"
            aria-label="Close guide"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 text-xs text-[#524B43]">
          
          <div className="p-4 bg-[#F5EDE1] border border-[#E0D3C1] text-xs text-[#6B5A46] leading-relaxed flex items-start gap-3">
            <Zap className="w-4 h-4 text-[#9E7B4F] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#1C1A18]">Zero-Cost Forever:</strong> AuraVivant is built as a lightning-fast static single-page web app. You do <em>not</em> need to pay for any servers or databases. All orders flow directly into your private Google Sheet free of cost.
            </div>
          </div>

          {/* Option 1: Vercel (Easiest & Fastest - 60 seconds) */}
          <div className="p-5 bg-[#FAF8F5] border border-[#E3D9CC]">
            <div className="flex items-center justify-between mb-2">
              <span className="font-serif text-base font-semibold text-[#1C1A18]">
                Option 1: Vercel (Recommended — 60 Seconds)
              </span>
              <span className="px-2 py-0.5 bg-[#4CAF50]/15 text-[#2E7D32] text-[10px] uppercase tracking-wider font-semibold rounded">
                100% Free
              </span>
            </div>
            <ol className="list-decimal list-inside space-y-2 text-[#574F46] leading-relaxed">
              <li>Go to <strong className="text-[#1C1A18]">vercel.com</strong> and create a free account.</li>
              <li>Import this project repository or drag &amp; drop the exported project.</li>
              <li>Click <strong className="text-[#1C1A18]">“Deploy”</strong>.</li>
              <li>Your luxury website will immediately be live on a secure free URL (e.g. <span className="font-mono text-[#9E7B4F]">auravivant.vercel.app</span>) with free SSL and custom domain support!</li>
            </ol>
          </div>

          {/* Option 2: Netlify (Drag and Drop) */}
          <div className="p-5 bg-[#FAF8F5] border border-[#E3D9CC]">
            <div className="flex items-center justify-between mb-2">
              <span className="font-serif text-base font-semibold text-[#1C1A18]">
                Option 2: Netlify (Drag &amp; Drop Deployment)
              </span>
              <span className="px-2 py-0.5 bg-[#4CAF50]/15 text-[#2E7D32] text-[10px] uppercase tracking-wider font-semibold rounded">
                100% Free
              </span>
            </div>
            <p className="text-[#574F46] leading-relaxed mb-2">
              Run <code className="bg-[#EFECE4] px-1.5 py-0.5 text-[#1C1A18] font-mono">npm run build</code> in the terminal. Simply drag and drop the generated <strong className="text-[#1C1A18]">/dist</strong> folder into <strong>app.netlify.com/drop</strong>. Done in 30 seconds!
            </p>
          </div>

          {/* Option 3: GitHub Pages */}
          <div className="p-5 bg-[#FAF8F5] border border-[#E3D9CC]">
            <div className="flex items-center justify-between mb-2">
              <span className="font-serif text-base font-semibold text-[#1C1A18]">
                Option 3: GitHub Pages
              </span>
              <span className="px-2 py-0.5 bg-[#4CAF50]/15 text-[#2E7D32] text-[10px] uppercase tracking-wider font-semibold rounded">
                100% Free
              </span>
            </div>
            <p className="text-[#574F46] leading-relaxed">
              Push your code to a free GitHub repository and enable <strong className="text-[#1C1A18]">Pages</strong> in repository Settings. GitHub hosts your site with global CDN for free.
            </p>
          </div>

          {/* Connected Webhook Verification Box */}
          <div className="p-4 bg-[#F6F2EA] border border-[#E5DDD0]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#1C1A18] flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#4CAF50]" />
                Your Live Google Apps Script Webhook is Connected:
              </span>
              <button
                onClick={handleCopyUrl}
                className="text-[11px] text-[#9E7B4F] flex items-center gap-1 hover:underline cursor-pointer"
              >
                {copied ? <Check className="w-3 h-3 text-[#4CAF50]" /> : <Copy className="w-3 h-3" />}
                {copied ? 'Copied' : 'Copy URL'}
              </button>
            </div>
            <p className="font-mono text-[10px] text-[#695F54] break-all bg-[#FAF8F5] p-2 border border-[#E0D8CB]">
              {GOOGLE_APPS_SCRIPT_URL}
            </p>
            <p className="text-[11px] text-[#7A6E62] mt-2">
              Every customer order placed on your published website will immediately appear in your Google Sheet without any monthly subscription!
            </p>
          </div>

          <div className="text-center pt-2">
            <button
              onClick={onClose}
              className="px-8 py-3 bg-[#1C1A18] text-[#FAF8F5] text-xs uppercase tracking-widest font-semibold hover:bg-[#9E7B4F] transition-colors cursor-pointer"
            >
              Understood — Ready to Publish
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
