export default function FeatureGrid() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-xl space-y-16">
      <div className="text-center">
        <h2 className="font-h2 text-[48px] uppercase text-ink border-b-3 border-ink inline-block pb-2 mb-8">SIGUE EL RITUAL</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-brand-white border-2 border-ink p-6 shadow-hard space-y-4 col-span-1 md:col-span-2">
          <span className="material-symbols-outlined text-[40px] text-brand-roast">timer</span>
          <h3 className="font-h3 text-h3 text-ink">Timer paso a paso</h3>
          <p className="font-body-md text-body-md text-ink">Flujo claro, sin distracciones. Recetas listas para usar con indicaciones exactas.</p>
        </div>
        <div className="bg-brand-sand border-2 border-ink p-6 shadow-hard space-y-4">
          <span className="material-symbols-outlined text-[40px] text-brand-origin">vibration</span>
          <h3 className="font-h3 text-h3 text-ink">Vibración y sonido</h3>
          <p className="font-body-md text-body-md text-ink">Funciona sin ver la pantalla. Siente el cambio de fase.</p>
        </div>
        <div className="bg-brand-ivory border-2 border-ink p-6 shadow-hard space-y-4">
          <span className="material-symbols-outlined text-[40px] text-ink">calculate</span>
          <h3 className="font-h3 text-h3 text-ink">Ajuste rápido</h3>
          <p className="font-body-md text-body-md text-ink">Input café o agua. Proporción automática.</p>
        </div>
        <div className="bg-brand-white border-2 border-ink shadow-hard col-span-1 md:col-span-2 h-64 relative overflow-hidden">
          <img 
            alt="Close up of black coffee dripping into a glass carafe, brutalist style, high contrast" 
            className="w-full h-full object-cover grayscale contrast-125" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgOoLSWScWQhGFU-E9i5FhKNARxEA88eEuEjuAWAjUFvOcuTEoV2dRRgB3whN0oeeqUs6osQaPNY5nryF0wWwW72FkBh5BNO7Ts5E16b6vOGPCj72ZLXh84dj1rpxHey1rrBkjw_eky8NxbMLzznrypt4dStY8siM_6Hzy-V0wjRGD_2Kw5Q18-O28Tqc9uezSk_-EhqkPtQtx1xZWSQ-op3K2fouhcMpsMJLHSK4EriQwmLLyztjTPGSv70Tw4wT9nmMwvN-qduQ"
          />
        </div>
      </div>
    </section>
  );
}
