import CoffeeRatioCalculator from "../components/CoffeeRatioCalculator";
import v60Image from "../assets/v60.png";
import {
  coffeeRatioCalculatorContent,
  type CoffeeRatioCalculatorLocale,
} from "../seo/coffeeRatioCalculator";

type CoffeeRatioCalculatorPageProps = {
  locale: CoffeeRatioCalculatorLocale;
};

export default function CoffeeRatioCalculatorPage({ locale }: CoffeeRatioCalculatorPageProps) {
  const content = coffeeRatioCalculatorContent[locale];

  return (
    <article className="overflow-hidden">
      <section className="max-w-6xl mx-auto px-6 py-xl grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-xl items-center">
        <div className="space-y-6">
          <h1 className="font-h1 text-[46px] sm:text-[68px] leading-none uppercase text-ink">{content.hero.title}</h1>
          <p className="font-body-lg text-body-lg leading-8 text-ink max-w-xl">{content.hero.body}</p>
          <div className="hidden lg:block h-48 max-w-sm border-3 border-ink bg-brand-sand p-3 shadow-hard">
            <img
              alt="V60 coffee brewing over a scale"
              className="h-full w-full border-2 border-ink object-cover object-center grayscale contrast-125"
              src={v60Image}
            />
          </div>
        </div>
        <CoffeeRatioCalculator content={content} />
      </section>

      <section className="bg-brand-ink text-brand-ivory border-y-3 border-ink py-xl">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-lg items-start">
          <h2 className="font-h2 text-[40px] md:text-[52px] leading-none uppercase">{content.howItWorks.title}</h2>
          <div className="space-y-4 font-body-lg text-body-lg leading-8">
            {content.howItWorks.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-xl space-y-8">
        <h2 className="font-h2 text-[40px] md:text-[52px] leading-none uppercase text-ink">{content.methodsTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {content.methods.map((method) => (
            <section className="bg-brand-white border-2 border-ink shadow-hard p-5 space-y-4" key={method.id}>
              <p className="font-label-bold text-label-bold uppercase text-brand-roast">1:{method.ratio}</p>
              <h3 className="font-h3 text-h3 text-ink">{method.label}</h3>
              <p className="font-body-md text-body-md text-ink leading-7">{method.note}</p>
              <a className="font-label-bold text-label-bold uppercase text-brand-origin underline decoration-2 underline-offset-4" href={method.recipePath}>
                {method.recipeLabel}
              </a>
            </section>
          ))}
        </div>
      </section>

      <section className="bg-brand-sand border-y-3 border-ink py-xl">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          <h2 className="font-h2 text-[40px] md:text-[52px] leading-none uppercase text-ink">{content.faqTitle}</h2>
          <div className="space-y-4">
            {content.faqs.map((faq) => (
              <details className="bg-brand-white border-2 border-ink shadow-hard p-5 group" key={faq.question}>
                <summary className="font-h3 text-h3 text-ink cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{faq.question}</span>
                  <span className="material-symbols-outlined text-brand-roast group-open:rotate-180 transition-transform" aria-hidden="true">expand_more</span>
                </summary>
                <p className="font-body-md text-body-md leading-8 text-ink mt-4">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
