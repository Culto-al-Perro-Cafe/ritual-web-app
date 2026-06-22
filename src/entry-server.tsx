import { renderToString } from "react-dom/server";
import App from "./App";
import { findRoute, routes } from "./routes";

export function render(path: string) {
  const route = findRoute(path);

  return {
    html: renderToString(<App path={route.path} />),
    meta: {
      title: route.title,
      description: route.description,
      canonicalUrl: route.canonicalUrl,
      ogImage: route.ogImage,
      ogTitle: route.ogTitle,
      ogDescription: route.ogDescription,
      lang: route.lang,
      alternateLanguages: route.alternateLanguages,
      robots: route.robots,
      structuredData: route.structuredData,
    },
  };
}

export function getRoutes() {
  return routes.map(
    ({
      path,
      title,
      description,
      canonicalUrl,
      ogImage,
      ogTitle,
      ogDescription,
      lang,
      alternateLanguages,
      robots,
      includeInSitemap,
      structuredData,
    }) => ({
      path,
      title,
      description,
      canonicalUrl,
      ogImage,
      ogTitle,
      ogDescription,
      lang,
      alternateLanguages,
      robots,
      includeInSitemap,
      structuredData,
    }),
  );
}
