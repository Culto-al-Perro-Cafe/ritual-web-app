import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const templatePath = path.join(distDir, "index.html");
const serverEntryPath = path.join(distDir, "server", "entry-server.js");
const siteUrl = "https://ritual.otfusion.org";

const template = await readFile(templatePath, "utf8");
const { getRoutes, render } = await import(pathToFileURL(serverEntryPath).href);
const routes = getRoutes();

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function routeOutputPath(routePath) {
  if (routePath === "/") {
    return path.join(distDir, "index.html");
  }

  return path.join(distDir, routePath.slice(1), "index.html");
}

function routeHtmlOutputPath(routePath) {
  if (routePath === "/") {
    return null;
  }

  return path.join(distDir, `${routePath.slice(1)}.html`);
}

function buildHead(meta) {
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  const canonicalUrl = escapeHtml(meta.canonicalUrl);
  const ogImage = escapeHtml(meta.ogImage);
  const robotsMeta = meta.robots
    ? [`<meta name="robots" content="${escapeHtml(meta.robots)}" />`]
    : [];

  return [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    ...robotsMeta,
    `<link rel="canonical" href="${canonicalUrl}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${canonicalUrl}" />`,
    `<meta property="og:image" content="${ogImage}" />`,
    `<meta property="og:image:type" content="image/png" />`,
    `<meta property="og:image:width" content="1024" />`,
    `<meta property="og:image:height" content="500" />`,
    `<meta property="og:image:alt" content="Ritual Cafe banner with pour-over coffee illustration." />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${ogImage}" />`,
    `<meta name="twitter:image:alt" content="Ritual Cafe banner with pour-over coffee illustration." />`,
  ].join("\n  ");
}

function replaceSeoHead(html, meta) {
  const cleaned = html
    .replace(/\s*<title>[\s\S]*?<\/title>/, "")
    .replace(/\s*<meta name="description" content="[\s\S]*?" \/>/g, "")
    .replace(/\s*<link rel="canonical" href="[\s\S]*?" \/>/g, "")
    .replace(/\s*<meta property="og:[\s\S]*?" content="[\s\S]*?" \/>/g, "")
    .replace(/\s*<meta name="twitter:[\s\S]*?" content="[\s\S]*?" \/>/g, "");

  return cleaned.replace(
    /(<meta name="viewport" content="width=device-width, initial-scale=1.0" \/>)/,
    `$1\n  ${buildHead(meta)}`,
  );
}

for (const route of routes) {
  const { html, meta } = render(route.path);
  const outputPath = routeOutputPath(route.path);
  const pageHtml = replaceSeoHead(template, meta).replace(
    '<div id="root" class="flex-grow flex flex-col"></div>',
    `<div id="root" class="flex-grow flex flex-col">${html}</div>`,
  );

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, pageHtml);

  const htmlOutputPath = routeHtmlOutputPath(route.path);
  if (htmlOutputPath) {
    await mkdir(path.dirname(htmlOutputPath), { recursive: true });
    await writeFile(htmlOutputPath, pageHtml);
  }
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .filter((route) => route.includeInSitemap !== false)
  .map(
    (route) => `  <url>
    <loc>${escapeHtml(route.canonicalUrl)}</loc>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

await writeFile(path.join(distDir, "sitemap.xml"), sitemap);
await writeFile(path.join(distDir, "robots.txt"), robots);
