import { useState } from 'react';
import heroImage from '../assets/v60.png';

const appStoreUrl = 'https://apps.apple.com/us/app/ritual-caf%C3%A9/id6764177904';
const appStoreBadgeUrl = 'https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/es-mx?size=250x83';
const googlePlayBadgeUrl = 'https://play.google.com/intl/es-419/badges/static/images/badges/es-419_badge_web_generic.png';

export default function Hero() {
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);

  return (
    <section className="max-w-6xl mx-auto px-6 py-xl grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
      <div className="space-y-md">
        <h1 className="font-h1 text-[64px] leading-none uppercase text-ink">PREPARA CAFÉ SIN BATALLAR</h1>
        <p className="font-body-lg text-body-lg text-ink">Una app diseñada para seguir el ritual perfecto paso a paso.</p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button
            aria-expanded={showDownloadOptions}
            aria-controls="download-options"
            className="bg-brand-roast text-white border-2 border-ink px-6 py-3 font-label-bold text-label-bold shadow-hard active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all uppercase text-center"
            type="button"
            onClick={() => setShowDownloadOptions((isVisible) => !isVisible)}
          >
            DESCARGAR LA APP
          </button>
          <button className="bg-brand-white text-ink border-2 border-ink px-6 py-3 font-label-bold text-label-bold shadow-hard active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all uppercase text-center">
            Ver cómo funciona
          </button>
        </div>
        {showDownloadOptions && (
          <div id="download-options" className="flex flex-wrap gap-4 pt-2">
            <a
              className="inline-flex h-[44px] shadow-hard active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
              href={appStoreUrl}
              aria-label="Descargar en App Store"
            >
              <img
                alt="Descargar en App Store"
                className="h-full w-auto"
                src={appStoreBadgeUrl}
              />
            </a>
            <button
              aria-disabled="true"
              aria-label="Google Play no disponible"
              className="inline-flex h-[44px] items-center cursor-not-allowed opacity-60 grayscale"
              disabled
              type="button"
              title="Google Play en proceso"
            >
              <img
                alt="Disponible en Google Play"
                className="h-[54px] w-auto"
                src={googlePlayBadgeUrl}
              />
            </button>
          </div>
        )}
      </div>
      <div className="relative bg-brand-sand border-3 border-ink shadow-hard h-96 flex items-center justify-center p-4 transform translate-x-4 translate-y-4">
        <img 
          alt="Minimalist overhead shot of a pour-over coffee setup with a digital scale and timer, high contrast, warm lighting" 
          className="w-full h-full object-cover border-2 border-ink filter grayscale contrast-125" 
          src={heroImage}
        />
        <div className="absolute -bottom-6 -left-6 bg-brand-origin text-white px-4 py-2 border-2 border-ink shadow-hard font-label-bold text-label-bold uppercase">
          Listo para V60
        </div>
      </div>
    </section>
  );
}
