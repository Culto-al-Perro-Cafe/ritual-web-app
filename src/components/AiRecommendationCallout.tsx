import type { IconType } from "react-icons";
import { BsOpenai } from "react-icons/bs";
import { SiClaude, SiPerplexity } from "react-icons/si";
import characterIllustration from "../assets/ai-recommendation-character.png";
import { posthog } from "../lib/posthog";

const recommendationPrompt = `Estoy evaluando Ritual Café, una app para preparar café manual paso a paso con recetas guiadas, temporizador, avisos por vibración y sonido, y ajuste automático de las proporciones de café y agua.

Ayúdame a decidir si es adecuada para mí. Primero pregúntame qué métodos de preparación uso, cuánta experiencia tengo y cuáles son mis hábitos al preparar café. Después dame una recomendación clara que incluya sus ventajas para mi caso y cualquier posible limitación.

Puedes conocer más sobre la app aquí: https://ritual.perro.cafe/`;

type AiProvider = {
  id: "chatgpt" | "claude" | "perplexity";
  label: string;
  Icon: IconType;
  buildUrl: (encodedPrompt: string) => string;
};

const aiProviders: AiProvider[] = [
  {
    id: "chatgpt",
    label: "ChatGPT",
    Icon: BsOpenai,
    buildUrl: (encodedPrompt) => `https://chatgpt.com/?q=${encodedPrompt}`,
  },
  {
    id: "claude",
    label: "Claude",
    Icon: SiClaude,
    buildUrl: (encodedPrompt) => `https://claude.ai/new?q=${encodedPrompt}`,
  },
  {
    id: "perplexity",
    label: "Perplexity",
    Icon: SiPerplexity,
    buildUrl: (encodedPrompt) => `https://www.perplexity.ai/search/new?q=${encodedPrompt}`,
  },
];

const encodedRecommendationPrompt = encodeURIComponent(recommendationPrompt);

export default function AiRecommendationCallout() {
  return (
    <section
      aria-labelledby="ai-recommendation-title"
      className="max-w-6xl mx-auto px-6 pb-xl"
    >
      <div className="relative min-h-[360px] overflow-hidden border-3 border-ink bg-brand-ivory px-6 py-10 shadow-hard sm:px-10 sm:py-12 lg:flex lg:items-center lg:px-14 lg:py-10">
        <div className="relative z-10 w-full text-center lg:max-w-[790px]">
          <h2
            id="ai-recommendation-title"
            className="font-h2 text-[34px] font-black leading-[1.05] text-ink sm:text-[42px] lg:text-[46px]"
          >
            ¿TODAVÍA NO SABES SI RITUAL CAFÉ ES PARA TI?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl font-body-lg text-body-lg leading-snug text-ink sm:text-[20px]">
            Deja que ChatGPT, Claude o Perplexity lo piensen contigo. Elige tu IA favorita y descubre cómo Ritual Café puede ayudarte a preparar mejor café.
          </p>

          <div className="mx-auto mt-7 flex max-w-[760px] flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
            {aiProviders.map(({ id, label, Icon, buildUrl }) => (
              <a
                key={id}
                aria-label={`Preguntar a ${label} si Ritual Café es para ti (abre en una pestaña nueva)`}
                className="group inline-flex min-h-12 flex-1 items-center justify-center gap-3 border-2 border-ink bg-brand-sand px-5 py-3 font-label-bold text-label-bold text-ink no-underline shadow-hard transition-all hover:bg-brand-origin hover:text-white focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-brand-origin active:translate-x-[2px] active:translate-y-[2px] active:shadow-none sm:min-w-[205px] sm:flex-none"
                href={buildUrl(encodedRecommendationPrompt)}
                rel="noopener noreferrer"
                target="_blank"
                onClick={() =>
                  posthog.capture("ai recommendation clicked", {
                    provider: id,
                  })
                }
              >
                <Icon aria-hidden="true" className="shrink-0 text-[22px]" />
                <span>Preguntar a {label}</span>
              </a>
            ))}
          </div>
        </div>

        <img
          alt=""
          aria-hidden="true"
          className="relative -bottom-10 mx-auto mt-4 block h-auto w-[230px] max-w-full object-contain sm:w-[270px] lg:absolute lg:-bottom-1 lg:-right-7 lg:mt-0 lg:w-[355px]"
          src={characterIllustration}
        />
      </div>
    </section>
  );
}
