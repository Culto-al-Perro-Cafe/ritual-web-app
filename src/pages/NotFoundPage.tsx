import v60Image from "../assets/v60.png";

const recoveryLinks = [
  { href: "/", label: "Inicio", description: "Volver a la app" },
  { href: "/recetas/v60", label: "Receta V60", description: "Cafe filtrado paso a paso" },
  { href: "/recetas/prensa-francesa", label: "Prensa francesa", description: "Cuerpo y menos sedimento" },
  { href: "/guias/proporciones-molienda", label: "Proporciones", description: "Ratios, molienda y ajustes" },
];

export default function NotFoundPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-xl grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-xl items-center">
      <div className="space-y-8">
        <div className="inline-flex bg-brand-origin text-white border-2 border-ink shadow-hard px-4 py-2 font-label-bold text-label-bold uppercase">
          Error 404
        </div>

        <div className="space-y-5">
          <h1 className="font-h1 text-[48px] md:text-[72px] leading-none uppercase text-ink">
            Esta receta no existe
          </h1>
          <p className="font-body-lg text-body-lg text-ink max-w-2xl">
            La pagina que buscas se movio, cambio de nombre o nunca llego al filtro. Sigue preparando cafe con una guia disponible.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            className="bg-brand-roast text-white border-2 border-ink px-6 py-3 font-label-bold text-label-bold shadow-hard active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all uppercase text-center no-underline"
            href="/"
          >
            Volver al inicio
          </a>
          <a
            className="bg-brand-white text-ink border-2 border-ink px-6 py-3 font-label-bold text-label-bold shadow-hard active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all uppercase text-center no-underline"
            href="/recetas/v60"
          >
            Ver receta V60
          </a>
        </div>

        <nav aria-label="Paginas recomendadas" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {recoveryLinks.map((link) => (
            <a
              className="block bg-brand-white border-2 border-ink shadow-hard p-4 no-underline transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-roast"
              href={link.href}
              key={link.href}
            >
              <span className="block font-label-bold text-label-bold uppercase text-brand-roast">
                {link.label}
              </span>
              <span className="block font-body-md text-body-md text-ink mt-2">
                {link.description}
              </span>
            </a>
          ))}
        </nav>
      </div>

      <div className="relative bg-brand-sand border-3 border-ink shadow-hard h-[360px] md:h-[480px] flex items-center justify-center p-4 transform lg:translate-x-4 lg:translate-y-4">
        <img
          alt="Cafe V60 preparado sobre una bascula, visto desde arriba"
          className="w-full h-full object-cover border-2 border-ink filter grayscale contrast-125"
          src={v60Image}
        />
        <div className="absolute -bottom-6 left-4 md:-left-6 bg-brand-roast text-white px-4 py-2 border-2 border-ink shadow-hard font-label-bold text-label-bold uppercase">
          Ruta fuera de receta
        </div>
      </div>
    </section>
  );
}
