export const SITE_URL = "https://ritual.otfusion.org";
export const DEFAULT_OG_IMAGE = "/og-image.png";

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}
