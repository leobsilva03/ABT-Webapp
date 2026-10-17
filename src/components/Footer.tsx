import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { AbtLogo } from './AbtLogo';

interface FooterProps {
  onOpenQuote: () => void;
  onOpenService: (serviceId: string) => void;
  onOpenProcess: () => void;
  onOpenAreas: () => void;
  onOpenGallery: () => void;
  onOpenHealthSafety: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenQuote,
  onOpenService,
  onOpenProcess,
  onOpenAreas,
  onOpenGallery,
  onOpenHealthSafety,
}) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#06221c] text-slate-300 pt-16 pb-12 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-emerald-900/60">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <AbtLogo className="h-10 sm:h-12 w-auto max-w-[240px]" variant="dark" />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mb-4">
              Licensed hazardous materials remediation contractors serving residential, commercial and industrial properties across Ontario with certified containment, HEPA filtration and air clearance verification.
            </p>

            <p className="text-xs text-emerald-300 font-medium">
              Ontario Ministry of Labour &amp; MOE Compliant
            </p>
          </div>

          {/* Col 2 & 3: Quick Navigation */}
          <div>
            <p className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Company
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenProcess}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  Our Process
                </button>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Standards
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={onOpenHealthSafety}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  Health &amp; Safety
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAreas}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  Service Areas
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenGallery}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact-banner')}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Canadian Flag */}
          <div>
            <p className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Direct Contact
            </p>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">Serving Ontario</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:5198047779" className="text-slate-300 hover:text-white transition-colors">
                  (519) 804-7779
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:info@abtenvironmental.ca" className="text-slate-300 hover:text-white transition-colors">
                  info@abtenvironmental.ca
                </a>
              </div>
            </div>

            {/* Proudly Canadian Badge matching image */}
            <div className="mt-6 pt-5 border-t border-emerald-900/50 flex items-center gap-2.5">
              <span className="text-xs font-semibold text-slate-200">Proudly Canadian</span>
              {/* Canadian Flag SVG / Emoji */}
              <span className="inline-flex items-center justify-center text-lg" aria-label="Canadian flag">
                🇨🇦
              </span>
            </div>
          </div>
        </div>

        {/* Bottom copyright and legal links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2025 ABT Environmental. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => alert('Privacy Policy: ABT Environmental adheres strictly to PIPEDA privacy regulations regarding client and site environmental reports.')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>|</span>
            <button 
              onClick={() => alert('Terms & Conditions: Hazardous materials abatement is governed by Ontario Regulation 278/05 and the Occupational Health and Safety Act.')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
