import { spanishBlogArticles } from "./articles";

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-xl space-y-12">
      <header className="border-b-3 border-ink pb-10 space-y-5">
        <p className="font-label-bold text-label-bold uppercase text-brand-roast">
          Blog
        </p>
        <h1 className="font-h1 text-[44px] md:text-[64px] leading-none uppercase text-ink">
          Recetas y guías de café
        </h1>
        <p className="font-body-lg text-body-lg text-ink max-w-3xl">
          Recetas simples, proporciones claras y ajustes prácticos para preparar
          mejor café en casa.
        </p>
      </header>

      <section aria-label="Artículos de café" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {spanishBlogArticles.map((article) => (
          <article
            className="bg-brand-white border-2 border-ink shadow-hard p-6 flex flex-col items-start gap-4"
            key={article.path}
          >
            <p className="font-label-bold text-label-bold uppercase text-brand-roast">
              {article.kicker}
            </p>
            <h2 className="font-h3 text-h3 leading-tight text-ink">{article.title}</h2>
            <p className="font-body-md text-body-md text-ink leading-7 flex-grow">
              {article.description}
            </p>
            <a
              className="inline-block bg-brand-roast text-white border-2 border-ink px-5 py-3 font-label-bold text-label-bold shadow-hard active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all uppercase no-underline"
              href={article.path}
            >
              Leer artículo
            </a>
          </article>
        ))}
      </section>
    </div>
  );
}
