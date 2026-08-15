import { useEffect, useRef, useState } from "react";
import { posthog } from "../lib/posthog";

type HeaderProps = {
  path: string;
  locale?: "en" | "es";
};

const navigationCopy = {
  en: {
    blog: "Blog",
    calculator: "Calculator",
    contact: "Contact",
    download: "Download app",
    menu: "Menu",
    close: "Close",
    openMenuLabel: "Open navigation menu",
    closeMenuLabel: "Close navigation menu",
    storeLabel: "Visit Culto al Perro store (opens in a new tab)",
  },
  es: {
    blog: "Blog",
    calculator: "Calculadora",
    contact: "Contacto",
    download: "Descargar app",
    menu: "Menú",
    close: "Cerrar",
    openMenuLabel: "Abrir menú de navegación",
    closeMenuLabel: "Cerrar menú de navegación",
    storeLabel: "Visitar STORE de Culto al Perro (abre en una pestaña nueva)",
  },
} as const;

const navigationLinkClass = (isActive: boolean) =>
  `text-ink border-b-2 transition-all no-underline ${
    isActive ? "border-ink" : "border-transparent hover:border-ink"
  }`;

function isBlogPath(path: string) {
  return path === "/blog" || path.startsWith("/recetas/") || path.startsWith("/guias/") || path.startsWith("/recipes/");
}

function isCalculatorPath(path: string) {
  return path === "/calculadora-cafe-agua" || path === "/coffee-to-water-ratio-calculator";
}

export default function Header({ path, locale = "es" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const blogIsActive = isBlogPath(path);
  const calculatorIsActive = isCalculatorPath(path);
  const contactIsActive = path === "/contact";
  const copy = navigationCopy[locale];
  const calculatorPath = locale === "en" ? "/coffee-to-water-ratio-calculator" : "/calculadora-cafe-agua";

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      setIsMenuOpen(false);
      menuButtonRef.current?.focus();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-brand-ivory border-b-3 border-ink shadow-hard">
      <div className="flex min-h-[72px] items-center justify-between gap-4 px-6 py-3">
        <a className="font-h3 text-h3 uppercase tracking-tight font-black text-ink no-underline" href="/">
          RITUAL CAFÉ
        </a>

        <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-6 font-label-bold text-label-bold uppercase">
          <a aria-current={blogIsActive ? "page" : undefined} className={navigationLinkClass(blogIsActive)} href="/blog">
            {copy.blog}
          </a>
          <a aria-current={calculatorIsActive ? "page" : undefined} className={navigationLinkClass(calculatorIsActive)} href={calculatorPath}>
            {copy.calculator}
          </a>
          <a aria-current={contactIsActive ? "page" : undefined} className={navigationLinkClass(contactIsActive)} href="/contact">
            {copy.contact}
          </a>
          <a
            className={navigationLinkClass(false)}
            href="https://perro.cafe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={copy.storeLabel}
            onClick={() => posthog.capture("header store clicked", { location: "header" })}
          >
            Store ↗
          </a>
        </nav>

        <div className="hidden lg:block">
          <a
            className="inline-block bg-brand-roast text-white border-2 border-ink px-4 py-2 font-label-bold text-label-bold shadow-hard active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all uppercase no-underline"
            href="/#download"
            onClick={() => posthog.capture("header download clicked", { location: "header" })}
          >
            {copy.download}
          </a>
        </div>

        <button
          ref={menuButtonRef}
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? copy.closeMenuLabel : copy.openMenuLabel}
          className="lg:hidden bg-brand-white text-ink border-2 border-ink px-4 py-2 font-label-bold text-label-bold shadow-hard active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all uppercase"
          type="button"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          {isMenuOpen ? copy.close : copy.menu}
        </button>
      </div>

      {isMenuOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Navegación móvil"
          className="lg:hidden border-t-2 border-ink bg-brand-ivory px-6 py-5"
        >
          <div className="flex flex-col items-stretch gap-4 font-label-bold text-label-bold uppercase">
            <a aria-current={blogIsActive ? "page" : undefined} className={navigationLinkClass(blogIsActive)} href="/blog" onClick={closeMenu}>
              {copy.blog}
            </a>
            <a aria-current={calculatorIsActive ? "page" : undefined} className={navigationLinkClass(calculatorIsActive)} href={calculatorPath} onClick={closeMenu}>
              {copy.calculator}
            </a>
            <a aria-current={contactIsActive ? "page" : undefined} className={navigationLinkClass(contactIsActive)} href="/contact" onClick={closeMenu}>
              {copy.contact}
            </a>
            <a
              className={navigationLinkClass(false)}
              href="https://perro.cafe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={copy.storeLabel}
              onClick={() => {
                posthog.capture("header store clicked", { location: "mobile navigation" });
                closeMenu();
              }}
            >
              Store ↗
            </a>
            <a
              className="mt-2 bg-brand-roast text-white border-2 border-ink px-4 py-3 text-center shadow-hard active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all no-underline"
              href="/#download"
              onClick={() => {
                posthog.capture("header download clicked", { location: "mobile navigation" });
                closeMenu();
              }}
            >
              {copy.download}
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
