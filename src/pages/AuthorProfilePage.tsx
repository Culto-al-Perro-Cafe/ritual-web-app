import { AUTHORS } from "../seo/authors";

const author = AUTHORS.joseSalcido;

export default function AuthorProfilePage() {
  return (
    <article className="max-w-5xl mx-auto px-6 py-xl space-y-12">
      <header className="border-b-3 border-ink pb-10 space-y-5">
        <p className="font-label-bold text-label-bold uppercase text-brand-roast">
          Autor
        </p>
        <h1 className="font-h1 text-[44px] md:text-[64px] leading-none uppercase text-ink">
          {author.name}
        </h1>
        <p className="font-body-lg text-body-lg text-ink max-w-3xl">
          CEO de Culto al Perro Cafe y autor de guias de preparacion para Ritual Cafe.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-lg items-start">
        <div className="bg-brand-white border-2 border-ink shadow-hard p-5">
          <p className="font-label-bold text-label-bold uppercase text-brand-roast">
            Cargo
          </p>
          <p className="font-h3 text-h3 text-ink mt-2">
            CEO, Culto al Perro Cafe
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-h2 text-h2 leading-tight text-ink">Sobre Jose</h2>
          <p className="font-body-md text-body-md text-ink leading-8">
            Jose Salcido dirige Culto al Perro Cafe y escribe sobre recetas,
            proporciones, molienda y rutinas de preparacion para ayudar a que
            el cafe diario sea mas claro, repetible y facil de disfrutar.
          </p>
          <a
            className="inline-block bg-brand-roast text-white border-2 border-ink px-5 py-3 font-label-bold text-label-bold shadow-hard active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all uppercase"
            href={author.worksFor?.url}
          >
            Visitar Culto al Perro Cafe
          </a>
        </div>
      </section>
    </article>
  );
}
