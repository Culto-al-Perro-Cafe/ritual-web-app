# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Ritual Cafe landing page. The integration adds client-side event tracking via `posthog-js` in the React browser components and server-side tracking via `posthog-node` in the static prerender build script. PostHog is initialized in `src/main.tsx` on page load and tracks the key user interactions that drive app downloads: the download CTA button, the App Store badge link, and the demo video modal. Exception autocapture is enabled to automatically surface JavaScript errors.

| Event | Description | File |
|---|---|---|
| `download cta clicked` | User clicks the primary "DESCARGAR LA APP" button, expanding the download options. Top of the app download conversion funnel. | `src/components/Hero.tsx` |
| `app store download clicked` | User clicks the App Store badge to download the iOS app. The primary conversion event for mobile acquisition. Includes `platform: "ios"` property. | `src/components/Hero.tsx` |
| `video modal opened` | User opens the "Ver cómo funciona" YouTube demo video modal. | `src/components/Hero.tsx` |
| `video modal closed` | User closes the demo video modal. Includes `method: "button"` or `method: "backdrop"` property. | `src/components/Hero.tsx` |
| `blog link clicked` | User clicks the external Blog navigation link in the header. Includes `destination` URL property. | `src/components/Header.tsx` |
| `site prerendered` | All static HTML pages successfully generated during build. Includes `page_count` and `pages` properties. | `scripts/prerender.mjs` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](/dashboard/1633510)
- [App Download Funnel](/insights/OmkIq0o7) — conversion from CTA click to App Store download
- [Download CTA Clicks](/insights/24KDm0se) — daily trend of "DESCARGAR LA APP" button clicks
- [App Store Downloads](/insights/mtdVfl4C) — daily trend of App Store badge clicks
- [Video Modal Engagement](/insights/QmdifyjY) — daily trend of demo video opens
- [CTA to Download Conversion Rate](/insights/LLAndxHt) — percentage of CTA clickers who proceed to App Store (formula: A/B×100)

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-javascript_node/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
