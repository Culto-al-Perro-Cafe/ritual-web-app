import { absoluteUrl } from "./site";

export type SchemaFaq = {
  question: string;
  answer: string;
};

export type SchemaAuthor = {
  id: string;
  name: string;
  url: string;
  jobTitle?: string;
  worksFor?: {
    name: string;
    url: string;
  };
  sameAs?: string[];
};

export type BlogPostingSchemaInput = {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
  author: SchemaAuthor;
  image?: string;
  keywords?: string[];
  inLanguage?: string;
};

export type SoftwareApplicationSchemaInput = {
  name: string;
  description: string;
  url: string;
  applicationCategory: string;
  operatingSystem: string;
  inLanguage: string;
  featureList: string[];
  price: string;
  priceCurrency: string;
};

export type WebPageSchemaInput = {
  name: string;
  description: string;
  url: string;
  inLanguage: string;
  keywords?: string[];
};

export function personSchema(author: SchemaAuthor) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": author.url,
    name: author.name,
    url: author.url,
    ...(author.jobTitle ? { jobTitle: author.jobTitle } : {}),
    ...(author.worksFor
      ? {
          worksFor: {
            "@type": "Organization",
            name: author.worksFor.name,
            url: author.worksFor.url,
          },
        }
      : {}),
    ...(author.sameAs ? { sameAs: author.sameAs } : {}),
  };
}

export function faqPageSchema(faqs: SchemaFaq[], inLanguage: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function softwareApplicationSchema(input: SoftwareApplicationSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: input.name,
    applicationCategory: input.applicationCategory,
    operatingSystem: input.operatingSystem,
    inLanguage: input.inLanguage,
    url: input.url,
    description: input.description,
    offers: {
      "@type": "Offer",
      price: input.price,
      priceCurrency: input.priceCurrency,
    },
    featureList: input.featureList,
  };
}

export function webPageSchema(input: WebPageSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input.name,
    url: input.url,
    inLanguage: input.inLanguage,
    description: input.description,
    isPartOf: {
      "@type": "WebSite",
      name: "Ritual Cafe",
      url: absoluteUrl("/"),
    },
    ...(input.keywords ? { keywords: input.keywords } : {}),
  };
}

export function blogPostingSchema(input: BlogPostingSchemaInput) {
  const url = absoluteUrl(input.path);
  const author = personSchema(input.author);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: input.title,
    description: input.description,
    image: input.image ? absoluteUrl(input.image) : absoluteUrl("/og-image.png"),
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    inLanguage: input.inLanguage ?? "es",
    author,
    publisher: {
      "@type": "Organization",
      name: "Ritual Cafe",
      url: absoluteUrl("/"),
    },
    url,
    ...(input.keywords ? { keywords: input.keywords } : {}),
  };
}
