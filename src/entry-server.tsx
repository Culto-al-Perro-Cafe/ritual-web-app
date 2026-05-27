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
    },
  };
}

export function getRoutes() {
  return routes.map(({ path, title, description, canonicalUrl, ogImage }) => ({
    path,
    title,
    description,
    canonicalUrl,
    ogImage,
  }));
}
