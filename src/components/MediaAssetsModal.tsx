import React from 'react';
import { X, Download, ExternalLink, Image as ImageIcon, Copy, Check } from 'lucide-react';

interface MediaAssetsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MediaAssetsModal: React.FC<MediaAssetsModalProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null);

  if (!isOpen) return null;

  const baseUrl = window.location.origin;

  const assets = [
    {
      name: 'Official Logo Vector',
      file: 'abt-logo.svg',
      path: '/images/abt-logo.svg',
      fullUrl: `${baseUrl}/images/abt-logo.svg`,
      description: 'High-res vector emblem, ABT Environmental wordmark & tagline.',
      category: 'Branding',
      aspect: 'Vector SVG'
    },
    {
      name: 'Hero Abatement Team',
      file: 'hero-abatement-team.jpg',
      path: '/images/hero-abatement-team.jpg',
      fullUrl: `${baseUrl}/images/hero-abatement-team.jpg`,
      description: 'Certified technicians in PPE suits & respirators in containment.',
      category: 'Hero Banner',
      aspect: '16:9 Landscape'
    },
    {
      name: 'About Section Technician',
      file: 'about-technician-ppe.jpg',
      path: '/images/about-technician-ppe.jpg',
      fullUrl: `${baseUrl}/images/about-technician-ppe.jpg`,
      description: 'Technician measuring containment air quality with handheld device.',
      category: 'About Section',
      aspect: '4:3 Photo'
    },
    {
      name: 'Asbestos Removal Service',
      file: 'service-asbestos-removal.jpg',
      path: '/images/service-asbestos-removal.jpg',
      fullUrl: `${baseUrl}/images/service-asbestos-removal.jpg`,
      description: 'Technician abating pipe insulation near Danger Asbestos signage.',
      category: 'Services',
      aspect: '4:3 Photo'
    },
    {
      name: 'Lead Abatement Service',
      file: 'service-lead-abatement.jpg',
      path: '/images/service-lead-abatement.jpg',
      fullUrl: `${baseUrl}/images/service-lead-abatement.jpg`,
      description: 'Remediation technician scraping lead paint with HEPA vacuum setup.',
      category: 'Services',
      aspect: '4:3 Photo'
    },
    {
      name: 'Mould Remediation Service',
      file: 'service-mould-remediation.jpg',
      path: '/images/service-mould-remediation.jpg',
      fullUrl: `${baseUrl}/images/service-mould-remediation.jpg`,
      description: 'Technician pointing to containment cut line above black mould wall corner.',
      category: 'Services',
      aspect: '4:3 Photo'
    },
    {
      name: 'Proudly Serving Ontario Skyline',
      file: 'ontario-toronto-skyline.jpg',
      path: '/images/ontario-toronto-skyline.jpg',
      fullUrl: `${baseUrl}/images/ontario-toronto-skyline.jpg`,
      description: 'Twilight panoramic view of the Toronto skyline across Lake Ontario.',
      category: 'Banner Backdrop',
      aspect: '16:9 Landscape'
    }
  ];

  const copyToClipboard = (url: string, index: number) => {
    navigator.clipboard.writeText(url);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        <div className="bg-[#0B3B32] text-white p-5 sm:p-6 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-800/80 text-emerald-300 text-xs font-semibold mb-2">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Full Production Assets Library</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Website Images &amp; Production Assets
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 mt-1">
              Direct access links and high-resolution files ready for publishing.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-emerald-900 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-5 sm:p-7 space-y-4 max-h-[75vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {assets.map((asset, idx) => (
              <div 
                key={idx}
                className="flex flex-col sm:flex-row gap-4 p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:border-emerald-400 transition-colors"
              >
                <div className="w-full sm:w-28 h-24 rounded-lg bg-slate-900 overflow-hidden shrink-0 border border-slate-200 flex items-center justify-center">
                  <img 
                    src={asset.path} 
                    alt={asset.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between gap-1">
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{asset.name}</h4>
                      <span className="text-[10px] font-mono bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">
                        {asset.aspect}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{asset.description}</p>
                    <code className="text-[10px] text-slate-600 font-mono bg-white px-1.5 py-0.5 rounded border border-slate-200 block mt-1.5 truncate">
                      {asset.path}
                    </code>
                  </div>
                  <div className="flex items-center gap-2 mt-2 pt-2 border-t border-slate-200/60">
                    <a
                      href={asset.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded text-xs font-semibold flex items-center gap-1 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Open</span>
                    </a>
                    <a
                      href={asset.path}
                      download={asset.file}
                      className="px-2.5 py-1 bg-[#2E7D32] hover:bg-[#256629] text-white rounded text-xs font-semibold flex items-center gap-1 transition-colors"
                    >
                      <Download className="w-3 h-3" />
                      <span>Download</span>
                    </a>
                    <button
                      onClick={() => copyToClipboard(asset.fullUrl, idx)}
                      className="px-2 py-1 bg-white hover:bg-slate-100 text-slate-600 border border-slate-200 rounded text-xs font-medium flex items-center gap-1 ml-auto"
                      title="Copy full URL"
                    >
                      {copiedIndex === idx ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-700 text-[11px]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span className="text-[11px]">Copy Link</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              All images are hosted in <code className="font-mono text-slate-700">/public/images/</code>
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
