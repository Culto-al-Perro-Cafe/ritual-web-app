export default function Footer() {
  const blogUrl = "https://www.perro.cafe/blogs/recetas";

  return (
    <footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-8 bg-brand-sand border-t-3 border-ink">
      <div className="text-xl font-black uppercase text-ink font-h3">
        RITUAL CAFÉ
      </div>
      <div className="flex flex-wrap gap-6 font-serif italic text-sm text-ink">
        <a className="no-underline opacity-80 hover:opacity-100 hover:text-brand-roast transition-colors" href="/recetas/v60">Receta V60</a>
        <a className="no-underline opacity-80 hover:opacity-100 hover:text-brand-roast transition-colors" href="/recetas/prensa-francesa">Prensa francesa</a>
        <a className="no-underline opacity-80 hover:opacity-100 hover:text-brand-roast transition-colors" href="/guias/proporciones-molienda">Proporciones</a>
        <a className="no-underline opacity-80 hover:opacity-100 hover:text-brand-roast transition-colors" href="/contact">Contacto</a>
        <a className="no-underline opacity-80 hover:opacity-100 hover:text-brand-roast transition-colors" href={blogUrl}>Blog</a>
        <a className="no-underline opacity-80 hover:opacity-100 hover:text-brand-roast transition-colors" href="/privacidad">Privacidad</a>
      </div>
      <div className="font-serif italic text-sm text-ink opacity-80">
        © 2026 RITUAL CAFÉ. CULTO AL PERRO CAFÉ.
      </div>
    </footer>
  );
}
