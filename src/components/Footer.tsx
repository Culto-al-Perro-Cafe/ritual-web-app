export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-8 bg-brand-sand border-t-3 border-ink">
      <div className="text-xl font-black uppercase text-ink font-h3">
        RITUAL CAFÉ
      </div>
      <div className="flex flex-wrap gap-6 font-serif italic text-sm text-ink">
        <a className="no-underline opacity-80 hover:opacity-100 hover:text-brand-roast transition-colors" href="#">Diario</a>
        <a className="no-underline opacity-80 hover:opacity-100 hover:text-brand-roast transition-colors" href="#">Tostaduría</a>
        <a className="no-underline opacity-80 hover:opacity-100 hover:text-brand-roast transition-colors" href="#">Origen</a>
        <a className="no-underline opacity-80 hover:opacity-100 hover:text-brand-roast transition-colors" href="/privacidad">Privacidad</a>
      </div>
      <div className="font-serif italic text-sm text-ink opacity-80">
        © 2026 RITUAL CAFÉ. CULTO AL PERRO CAFÉ.
      </div>
    </footer>
  );
}
