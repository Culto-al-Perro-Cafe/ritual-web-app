import { useState } from "react";
import { trackGoogleAnalyticsEvent } from "../lib/googleAnalytics";

type ArticleHelpfulFeedbackProps = {
  articlePath: string;
  articleTitle: string;
  locale: "en" | "es";
};

type FeedbackChoice = "yes" | "no";

const copy = {
  en: {
    question: "Was this helpful?",
    yes: "Yes, thanks!",
    no: "Not really",
    thanks: "Thanks for the feedback!",
  },
  es: {
    question: "¿Te sirvió?",
    yes: "¡Sí, gracias!",
    no: "No mucho",
    thanks: "¡Gracias por tu opinión!",
  },
} as const;

export default function ArticleHelpfulFeedback({
  articlePath,
  articleTitle,
  locale,
}: ArticleHelpfulFeedbackProps) {
  const [response, setResponse] = useState<FeedbackChoice | null>(null);
  const text = copy[locale];

  const submitFeedback = (choice: FeedbackChoice) => {
    if (response) return;

    setResponse(choice);
    trackGoogleAnalyticsEvent("article_helpful_feedback", {
      article_path: articlePath,
      article_title: articleTitle,
      response: choice,
      language: locale,
    });
  };

  return (
    <section
      className="border-2 border-ink bg-brand-white shadow-hard px-6 py-7 md:px-8 md:py-8 text-center"
      aria-labelledby="article-feedback-question"
    >
      {response ? (
        <p className="font-h3 text-h3 text-ink animate-feedback-thanks" role="status">
          {text.thanks}
        </p>
      ) : (
        <>
          <h2 id="article-feedback-question" className="font-h3 text-h3 text-ink">
            {text.question}
          </h2>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              className="group inline-flex items-center gap-2 border-2 border-ink bg-brand-roast px-5 py-3 font-label-bold text-label-bold uppercase text-white shadow-hard transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_#222222] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand-origin"
              onClick={() => submitFeedback("yes")}
            >
              <span className="inline-flex h-6 w-6 items-center justify-center origin-bottom group-hover:animate-coffee-cup" aria-hidden="true">
                <svg viewBox="0 0 32 32" className="h-7 w-7 fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 13h16v7a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6v-7Z" />
                  <path d="M23 16h2a3 3 0 0 1 0 6h-2" />
                  <path className="animate-coffee-steam" d="M12 9c-1-1.5 1-2.5 0-4" />
                  <path className="animate-coffee-steam [animation-delay:120ms]" d="M17 9c-1-1.5 1-2.5 0-4" />
                </svg>
              </span>
              {text.yes}
            </button>
            <button
              type="button"
              className="border-2 border-ink bg-brand-ivory px-5 py-3 font-label-bold text-label-bold uppercase text-ink transition-colors hover:bg-brand-sand active:translate-y-px focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand-origin"
              onClick={() => submitFeedback("no")}
            >
              {text.no}
            </button>
          </div>
        </>
      )}
    </section>
  );
}
