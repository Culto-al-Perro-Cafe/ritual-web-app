export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-xl grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
      <div className="space-y-md">
        <h1 className="font-h1 text-[64px] leading-none uppercase text-ink">PREPARA CAFÉ SIN PENSAR</h1>
        <p className="font-body-lg text-body-lg text-ink">Una app diseñada para seguir el ritual perfecto paso a paso.</p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="bg-brand-roast text-white border-2 border-ink px-6 py-3 font-label-bold text-label-bold shadow-hard active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all uppercase text-center">
            Probar en TestFlight
          </button>
          <button className="bg-brand-white text-ink border-2 border-ink px-6 py-3 font-label-bold text-label-bold shadow-hard active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all uppercase text-center">
            Ver cómo funciona
          </button>
        </div>
      </div>
      <div className="relative bg-brand-sand border-3 border-ink shadow-hard h-96 flex items-center justify-center p-4 transform translate-x-4 translate-y-4">
        <img 
          alt="Minimalist overhead shot of a pour-over coffee setup with a digital scale and timer, high contrast, warm lighting" 
          className="w-full h-full object-cover border-2 border-ink filter grayscale contrast-125" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuClcWy455S1_II5C5tPRlWw-CcystlFI3ZovK9l1G_YWeiMySsRgiSmBZ83kFQ0iDMi4ecMowYtl0UlES8y6gdebvbDgPCJDP9LZoMqhf5bKqy_Ty7c9nDDrTC1xW-KW954ivaOL7voVm_UEwdVsTLsfTHPyOV8MQDrVCUszrRvBa_BO4hAnY-MwhGBMyikS6PJQrVwB7WPOOr9YQNVSTpGRn0pRhdJ_BFH1RESXqLa1CBR6ayFL7QxnqsLPxEBTto3wdbBrOheN70"
        />
        <div className="absolute -bottom-6 -left-6 bg-brand-origin text-white px-4 py-2 border-2 border-ink shadow-hard font-label-bold text-label-bold uppercase">
          Listo para V60
        </div>
      </div>
    </section>
  );
}
