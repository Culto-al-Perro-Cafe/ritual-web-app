import { getAuthor, type AuthorId } from "../seo/authors";

type Detail = {
  label: string;
  value: string;
};

type Section = {
  title: string;
  body: string[];
};

export type SeoArticle = {
  path: string;
  kicker: string;
  title: string;
  description: string;
  intro: string;
  datePublished: string;
  dateModified: string;
  authorId: AuthorId;
  keywords?: string[];
  image?: string;
  details: Detail[];
  sections: Section[];
  ctaTitle: string;
  ctaBody: string;
};

type SeoArticlePageProps = {
  article: SeoArticle;
};

export default function SeoArticlePage({ article }: SeoArticlePageProps) {
  const author = getAuthor(article.authorId);

  return (
    <article className="max-w-5xl mx-auto px-6 py-xl space-y-12">
      <header className="border-b-3 border-ink pb-10 space-y-5">
        <p className="font-label-bold text-label-bold uppercase text-brand-roast">
          {article.kicker}
        </p>
        <h1 className="font-h1 text-[44px] md:text-[64px] leading-none uppercase text-ink">
          {article.title}
        </h1>
        <p className="font-body-lg text-body-lg text-ink max-w-3xl">
          {article.intro}
        </p>
        <p className="font-label-bold text-label-bold uppercase text-ink">
          Por <a className="text-brand-roast underline decoration-2 underline-offset-4" href={new URL(author.url).pathname}>{author.name}</a>
        </p>
      </header>

      <dl className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {article.details.map((detail) => (
          <div className="bg-brand-white border-2 border-ink shadow-hard p-4" key={detail.label}>
            <dt className="font-label-bold text-label-bold uppercase text-brand-roast">
              {detail.label}
            </dt>
            <dd className="font-h3 text-h3 text-ink mt-2">{detail.value}</dd>
          </div>
        ))}
      </dl>

      <div className="space-y-10">
        {article.sections.map((section) => (
          <section className="space-y-4" key={section.title}>
            <h2 className="font-h2 text-h2 leading-tight text-ink">{section.title}</h2>
            <div className="space-y-4">
              {section.body.map((paragraph) => (
                <p className="font-body-md text-body-md text-ink leading-8" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <aside className="bg-brand-sand border-2 border-ink shadow-hard p-6 md:p-8 space-y-3">
        <h2 className="font-h3 text-h3 text-ink">{article.ctaTitle}</h2>
        <p className="font-body-md text-body-md text-ink leading-8">{article.ctaBody}</p>
        <a
          className="inline-block bg-brand-roast text-white border-2 border-ink px-5 py-3 font-label-bold text-label-bold shadow-hard active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all uppercase"
          href="/"
        >
          Descargar Ritual Cafe
        </a>
      </aside>
    </article>
  );
}
