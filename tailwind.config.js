/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-fixed-dim": "#c8c6c5",
        "surface-tint": "#5f5e5e",
        "on-primary-fixed": "#1b1c1c",
        "background": "#fdf8f8",
        "on-tertiary-fixed-variant": "#005049",
        "inverse-on-surface": "#f4f0ef",
        "on-secondary-container": "#732100",
        "surface-bright": "#fdf8f8",
        "on-error": "#ffffff",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#002723",
        "tertiary-fixed": "#88f5e6",
        "on-secondary-fixed-variant": "#802907",
        "error": "#ba1a1a",
        "error-container": "#ffdad6",
        "primary": "#0b0c0c",
        "primary-fixed": "#e5e2e1",
        "surface-container-high": "#ebe7e7",
        "on-secondary-fixed": "#390c00",
        "on-background": "#1c1b1b",
        "surface-container": "#f1edec",
        "outline": "#747878",
        "inverse-surface": "#313030",
        "secondary": "#a0401e",
        "secondary-container": "#fe875f",
        "outline-variant": "#c4c7c7",
        "primary-container": "#222222",
        "surface-variant": "#e5e2e1",
        "on-primary-fixed-variant": "#474746",
        "tertiary-fixed-dim": "#6ad8ca",
        "surface-container-highest": "#e5e2e1",
        "on-primary": "#ffffff",
        "on-tertiary-container": "#18998d",
        "secondary-fixed-dim": "#ffb59d",
        "on-secondary": "#ffffff",
        "surface": "#fdf8f8",
        "on-surface-variant": "#444748",
        "secondary-fixed": "#ffdbd0",
        "surface-container-low": "#f7f3f2",
        "surface-container-lowest": "#ffffff",
        "inverse-primary": "#c8c6c5",
        "on-error-container": "#93000a",
        "on-surface": "#1c1b1b",
        "on-tertiary-fixed": "#00201d",
        "on-primary-container": "#8a8989",
        "tertiary": "#000e0c",
        "surface-dim": "#ddd9d8",
        "brand-ink": "#222222",
        "brand-roast": "#e4734c",
        "brand-origin": "#2da598",
        "brand-sand": "#f2dab2",
        "brand-ivory": "#faefdf",
        "brand-white": "#ffffff"
      },
      borderRadius: {
        "DEFAULT": "0px",
        "lg": "0px",
        "xl": "0px",
        "full": "0px",
        "none": "0px"
      },
      spacing: {
        "unit": "4px",
        "xs": "8px",
        "sm": "16px",
        "md": "24px",
        "gutter": "24px",
        "lg": "40px",
        "margin": "32px",
        "xl": "64px"
      },
      fontFamily: {
        "body-lg": ["Josefin Sans", "sans-serif"],
        "accent": ["Courgette", "cursive"],
        "body-md": ["Josefin Sans", "sans-serif"],
        "h1": ["Rokkitt", "serif"],
        "h2": ["Rokkitt", "serif"],
        "h3": ["Rokkitt", "serif"],
        "label-bold": ["Josefin Sans", "sans-serif"]
      },
      fontSize: {
        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "accent": ["18px", {"lineHeight": "1.2", "fontWeight": "400"}],
        "body-md": ["16px", {"lineHeight": "1.5", "fontWeight": "400"}],
        "h1": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
        "h2": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "700"}],
        "h3": ["24px", {"lineHeight": "1.2", "letterSpacing": "0em", "fontWeight": "700"}],
        "label-bold": ["14px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "700"}]
      },
      boxShadow: {
        "hard": "4px 4px 0px 0px #222222",
        "hard-hover": "2px 2px 0px 0px #222222"
      },
      borderWidth: {
        "2": "2px",
        "3": "3px"
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries")
  ],
}
