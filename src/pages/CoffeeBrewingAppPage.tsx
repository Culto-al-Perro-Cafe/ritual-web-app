import { coffeeBrewingAppContent, type CoffeeBrewingAppLocale } from "../seo/coffeeBrewingApp";

function CtaLink({
  children,
  href = "/home",
  variant = "primary",
}: {
  children: string;
  href?: string;
  variant?: "primary" | "secondary";
}) {
  const classes =
    variant === "primary"
      ? "bg-brand-roast text-white"
      : "bg-brand-white text-ink";

  return (
    <a
      className={`${classes} inline-flex items-center justify-center border-2 border-ink px-5 py-3 font-label-bold text-label-bold shadow-hard active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all uppercase no-underline`}
      href={href}
    >
      {children}
    </a>
  );
}

function SectionHeading({
  children,
  align = "left",
}: {
  children: string;
  align?: "left" | "center";
}) {
  return (
    <h2
      className={`font-h2 text-[38px] md:text-[52px] leading-none uppercase text-ink ${
        align === "center" ? "text-center" : ""
      }`}
    >
      {children}
    </h2>
  );
}

type CoffeeBrewingAppPageProps = {
  locale?: CoffeeBrewingAppLocale;
};

export default function CoffeeBrewingAppPage({ locale = "en" }: CoffeeBrewingAppPageProps) {
  const content = coffeeBrewingAppContent[locale];

  return (
    <article className="overflow-hidden">
      <section className="max-w-6xl mx-auto px-6 py-xl grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-xl items-center">
        <div className="space-y-md">
          <h1 className="font-h1 text-[48px] sm:text-[64px] md:text-[78px] leading-none uppercase text-ink">
            {content.hero.h1}
          </h1>
          <p className="font-body-lg text-body-lg text-ink max-w-2xl">
            {content.hero.subheadline}
          </p>
          <p className="font-body-md text-body-md text-ink leading-8 max-w-2xl">
            {content.hero.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <CtaLink>{content.hero.primaryCta}</CtaLink>
            <CtaLink href="#coffee-brew-journal" variant="secondary">
              {content.hero.secondaryCta}
            </CtaLink>
          </div>
        </div>

        <div className="bg-brand-sand border-3 border-ink shadow-hard p-4 md:p-6 transform lg:translate-x-4 lg:translate-y-4">
          <div className="bg-brand-white border-2 border-ink p-5 md:p-6 space-y-5">
            <div className="flex items-start justify-between gap-4 border-b-2 border-ink pb-4">
              <div>
                <p className="font-label-bold text-label-bold uppercase text-brand-roast">
                  {content.preview.label}
                </p>
                <h2 className="font-h3 text-[34px] leading-none text-ink mt-2">
                  {content.preview.title}
                </h2>
              </div>
              <span className="material-symbols-outlined text-[44px] text-brand-origin" aria-hidden="true">
                timer
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="border-2 border-ink bg-brand-ivory p-3">
                <p className="font-label-bold text-label-bold uppercase text-brand-roast">
                  {content.preview.coffeeLabel}
                </p>
                <p className="font-h3 text-h3 text-ink mt-1">15g</p>
              </div>
              <div className="border-2 border-ink bg-brand-ivory p-3">
                <p className="font-label-bold text-label-bold uppercase text-brand-origin">
                  {content.preview.waterLabel}
                </p>
                <p className="font-h3 text-h3 text-ink mt-1">240g</p>
              </div>
            </div>
            <ol className="space-y-3">
              {content.preview.steps.map((step, index) => (
                <li className="flex items-center gap-3 font-body-md text-body-md text-ink" key={step}>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center border-2 border-ink bg-brand-roast font-label-bold text-label-bold text-white">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-brand-ink text-brand-ivory py-xl border-y-3 border-ink">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-lg items-start">
          <h2 className="font-h2 text-[38px] md:text-[52px] leading-none uppercase">
            {content.calm.title}
          </h2>
          <div className="space-y-4 font-body-lg text-body-lg">
            {content.calm.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-xl space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-lg items-start">
          <div className="space-y-4">
            <SectionHeading>{content.scaling.title}</SectionHeading>
            {content.scaling.paragraphs.map((paragraph) => (
              <p className="font-body-md text-body-md text-ink leading-8" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {content.scaling.examples.map((example) => (
              <div className="bg-brand-white border-2 border-ink shadow-hard p-5 space-y-3" key={example.title}>
                <span className="material-symbols-outlined text-[34px] text-brand-roast" aria-hidden="true">
                  scale
                </span>
                <h3 className="font-h3 text-h3 text-ink">{example.title}</h3>
                <p className="font-body-md text-body-md text-ink leading-7">{example.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-sand border-y-3 border-ink py-xl">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-lg items-start">
            <div className="space-y-4">
              <SectionHeading>{content.timer.title}</SectionHeading>
              {content.timer.paragraphs.map((paragraph) => (
                <p className="font-body-md text-body-md text-ink leading-8" key={paragraph}>
                  {paragraph}
                </p>
              ))}
              <div className="pt-2">
                <CtaLink>{content.timer.cta}</CtaLink>
              </div>
            </div>
            <div className="bg-brand-white border-3 border-ink shadow-hard p-5 md:p-6 space-y-4">
              {content.timer.methods.map((item) => (
                <div className="border-b-2 border-ink pb-4 last:border-b-0 last:pb-0" key={item.method}>
                  <h3 className="font-h3 text-h3 text-ink">{item.method}</h3>
                  <p className="font-body-md text-body-md text-ink leading-7 mt-2">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="coffee-brew-journal" className="max-w-6xl mx-auto px-6 py-xl space-y-10 scroll-mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-lg items-start">
          <div className="bg-brand-white border-3 border-ink shadow-hard p-5 md:p-6 space-y-4 order-2 lg:order-1">
            {content.journal.cards.map(([label, value]) => (
              <div className="border-2 border-ink bg-brand-ivory p-4" key={label}>
                <p className="font-label-bold text-label-bold uppercase text-brand-roast">{label}</p>
                <p className="font-body-md text-body-md text-ink leading-7 mt-2">{value}</p>
              </div>
            ))}
          </div>
          <div className="space-y-4 order-1 lg:order-2">
            <SectionHeading>{content.journal.title}</SectionHeading>
            {content.journal.paragraphs.map((paragraph) => (
              <p className="font-body-md text-body-md text-ink leading-8" key={paragraph}>
                {paragraph}
              </p>
            ))}
            <div className="pt-2">
              <CtaLink>{content.journal.cta}</CtaLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-ink text-brand-ivory py-xl border-y-3 border-ink">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-lg">
          <div className="space-y-4">
            <h2 className="font-h2 text-[38px] md:text-[52px] leading-none uppercase">
              {content.routines.title}
            </h2>
            {content.routines.paragraphs.map((paragraph) => (
              <p className="font-body-lg text-body-lg" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className="bg-brand-origin text-white border-3 border-ink shadow-hard p-6 space-y-4">
            <h3 className="font-h3 text-[34px] leading-tight">{content.routines.cardTitle}</h3>
            <p className="font-body-md text-body-md leading-8">{content.routines.cardBody}</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-xl space-y-10">
        <SectionHeading align="center">{content.audience.title}</SectionHeading>
        <p className="font-body-lg text-body-lg text-ink leading-8 max-w-4xl mx-auto text-center">
          {content.audience.intro}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {content.audience.items.map((item) => (
            <div className="bg-brand-white border-2 border-ink shadow-hard p-5" key={item}>
              <p className="font-body-md text-body-md text-ink leading-7">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-sand border-y-3 border-ink py-xl">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          <SectionHeading>{content.flow.title}</SectionHeading>
          <p className="font-body-md text-body-md text-ink leading-8 max-w-3xl">
            {content.flow.intro}
          </p>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.flow.steps.map((step, index) => (
              <li className="bg-brand-white border-2 border-ink shadow-hard p-5 flex gap-4 items-start" key={step}>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border-2 border-ink bg-brand-roast font-label-bold text-label-bold text-white">
                  {index + 1}
                </span>
                <p className="font-body-md text-body-md text-ink leading-7">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-xl space-y-10">
        <SectionHeading>{content.faqTitle}</SectionHeading>
        <div className="space-y-4">
          {content.faqs.map((faq) => (
            <details className="bg-brand-white border-2 border-ink shadow-hard p-5 group" key={faq.question}>
              <summary className="font-h3 text-h3 text-ink cursor-pointer list-none flex items-center justify-between gap-4">
                <span>{faq.question}</span>
                <span className="material-symbols-outlined text-brand-roast group-open:rotate-180 transition-transform" aria-hidden="true">
                  expand_more
                </span>
              </summary>
              <p className="font-body-md text-body-md text-ink leading-8 mt-4">{faq.answer}</p>
            </details>
          ))}
        </div>
        <aside className="bg-brand-roast text-white border-3 border-ink shadow-hard p-6 md:p-8 space-y-4">
          <h2 className="font-h2 text-[38px] md:text-[48px] leading-none uppercase">
            {content.finalCta.title}
          </h2>
          <p className="font-body-lg text-body-lg max-w-3xl">{content.finalCta.body}</p>
          <CtaLink variant="secondary">{content.finalCta.link}</CtaLink>
        </aside>
      </section>
    </article>
  );
}
