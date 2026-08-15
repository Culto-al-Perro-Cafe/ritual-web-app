import { useEffect, useRef, useState } from "react";
import { posthog } from "../lib/posthog";

type HeaderProps = {
  path: string;
};

const navigationLinkClass = (isActive: boolean) =>
  `text-ink border-b-2 transition-all no-underline ${
    isActive ? "border-ink" : "border-transparent hover:border-ink"
  }`;

function isBlogPath(path: string) {
  return path === "/blog" || path.startsWith("/recetas/") || path.startsWith("/guias/") || path.startsWith("/recipes/");
}

export default function Header({ path }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const blogIsActive = isBlogPath(path);
  const contactIsActive = path === "/contact";

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
            Blog
          </a>
          <a aria-current={contactIsActive ? "page" : undefined} className={navigationLinkClass(contactIsActive)} href="/contact">
            Contacto
          </a>
          <a
            className={navigationLinkClass(false)}
            href="https://perro.cafe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar STORE de Culto al Perro (abre en una pestaña nueva)"
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
            Descargar app
          </a>
        </div>

        <button
          ref={menuButtonRef}
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          className="lg:hidden bg-brand-white text-ink border-2 border-ink px-4 py-2 font-label-bold text-label-bold shadow-hard active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all uppercase"
          type="button"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          {isMenuOpen ? "Cerrar" : "Menú"}
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
              Blog
            </a>
            <a aria-current={contactIsActive ? "page" : undefined} className={navigationLinkClass(contactIsActive)} href="/contact" onClick={closeMenu}>
              Contacto
            </a>
            <a
              className={navigationLinkClass(false)}
              href="https://perro.cafe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar STORE de Culto al Perro (abre en una pestaña nueva)"
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
              Descargar app
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
