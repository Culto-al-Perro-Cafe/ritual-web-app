export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-brand-ivory border-b-3 border-ink shadow-hard">
      <div className="flex items-center gap-4">
        <span className="font-h3 text-h3 uppercase tracking-tight font-black text-ink">RITUAL CAFÉ</span>
      </div>
      <div className="hidden md:flex gap-6 items-center font-label-bold text-label-bold uppercase">
        <a className="text-ink border-b-2 border-transparent hover:border-ink transition-all" href="#">RITUALES</a>
        <a className="text-ink border-b-2 border-transparent hover:border-ink transition-all" href="#">PREPARACIONES</a>
        <a className="text-ink border-b-2 border-transparent hover:border-ink transition-all" href="#">EXPLORAR</a>
      </div>
      <button className="bg-brand-roast text-white border-2 border-ink px-4 py-2 font-label-bold text-label-bold shadow-hard active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all uppercase">
        PREPARAR AHORA
      </button>
    </header>
  );
}
