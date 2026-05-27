import type { ReactElement } from "react";
import PrivacyPolicy from "./components/PrivacyPolicy";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import SeoArticlePage from "./pages/SeoArticlePage";
import { frenchPressArticle, ratiosGuideArticle, v60Article } from "./pages/articles";
import { DEFAULT_OG_IMAGE, absoluteUrl } from "./seo/site";

export type PageMeta = {
  title: string;
  description: string;
  path: string;
  canonicalUrl: string;
  ogImage: string;
  robots?: string;
  includeInSitemap?: boolean;
};

export type SiteRoute = PageMeta & {
  render: () => ReactElement;
};

export const routes: SiteRoute[] = [
  {
    path: "/",
    title: "Ritual Cafe | Prepara cafe sin pensar",
    description: "Una app para preparar cafe manual paso a paso con recetas, timer y proporciones claras.",
    canonicalUrl: absoluteUrl("/"),
    ogImage: absoluteUrl(DEFAULT_OG_IMAGE),
    render: () => <HomePage />,
  },
  {
    path: "/recetas/v60",
    title: "Receta V60 gratis paso a paso | Ritual Cafe",
    description:
      "Aprende una receta V60 clara con ratio 1:16, molienda media fina, tiempos de vertido y ajustes para mejorar tu cafe filtrado.",
    canonicalUrl: absoluteUrl("/recetas/v60"),
    ogImage: absoluteUrl(DEFAULT_OG_IMAGE),
    render: () => <SeoArticlePage article={v60Article} />,
  },
  {
    path: "/recetas/prensa-francesa",
    title: "Receta de prensa francesa con menos sedimento | Ritual Cafe",
    description:
      "Prepara cafe en prensa francesa con cuerpo, dulzor y menos sedimento usando molienda gruesa, ratio 1:15 y reposo controlado.",
    canonicalUrl: absoluteUrl("/recetas/prensa-francesa"),
    ogImage: absoluteUrl(DEFAULT_OG_IMAGE),
    render: () => <SeoArticlePage article={frenchPressArticle} />,
  },
  {
    path: "/guias/proporciones-molienda",
    title: "Proporciones y molienda para cafe | Ritual Cafe",
    description:
      "Guia practica para elegir ratios, ajustar molienda y corregir cafe agrio, amargo, delgado o astringente en metodos manuales.",
    canonicalUrl: absoluteUrl("/guias/proporciones-molienda"),
    ogImage: absoluteUrl(DEFAULT_OG_IMAGE),
    render: () => <SeoArticlePage article={ratiosGuideArticle} />,
  },
  {
    path: "/privacidad",
    title: "Politica de Privacidad | Ritual Cafe",
    description: "Conoce como Ritual Cafe maneja privacidad, analitica respetuosa y datos dentro de la app.",
    canonicalUrl: absoluteUrl("/privacidad"),
    ogImage: absoluteUrl(DEFAULT_OG_IMAGE),
    render: () => <PrivacyPolicy />,
  },
  {
    path: "/404",
    title: "Pagina no encontrada | Ritual Cafe",
    description:
      "La pagina que buscas no existe. Encuentra recetas de cafe, guias de proporcion y molienda, o vuelve al inicio de Ritual Cafe.",
    canonicalUrl: absoluteUrl("/404"),
    ogImage: absoluteUrl(DEFAULT_OG_IMAGE),
    robots: "noindex, follow",
    includeInSitemap: false,
    render: () => <NotFoundPage />,
  },
];

export const notFoundRoute = routes.find((route) => route.path === "/404") ?? routes[0];

export function normalizePath(pathname: string) {
  const cleanPath = pathname.replace(/\/$/, "") || "/";
  return cleanPath;
}

export function findRoute(pathname: string) {
  const cleanPath = normalizePath(pathname);
  return routes.find((route) => route.path === cleanPath) ?? notFoundRoute;
}
