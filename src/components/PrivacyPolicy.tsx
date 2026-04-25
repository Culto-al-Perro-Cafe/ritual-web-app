const sections = [
  {
    title: "1. Información que recopilamos",
    body: "Ritual Café no recopila, almacena ni solicita datos personales. No necesitas crear una cuenta, iniciar sesión ni compartir información como nombre, correo electrónico, ubicación o datos de contacto para usar la app.",
  },
  {
    title: "2. Uso local de la app",
    body: "Las funciones de preparación de café, como tiempos, pasos, proporciones o preferencias de uso, están pensadas para ejecutarse de forma local en tu dispositivo. Ritual Café no transmite esta información a servidores propios.",
  },
  {
    title: "3. Analítica, rastreo y publicidad",
    body: "Ritual Café no usa herramientas de rastreo, perfiles publicitarios ni analítica vinculada a tu identidad. Tampoco vende, renta ni comparte información personal con terceros.",
  },
  {
    title: "4. Servicios de terceros",
    body: "La app no comparte datos personales con proveedores externos. Si en el futuro se incorpora una función que requiera servicios de terceros o recopilación de información, esta política se actualizará antes de activar esa función.",
  },
  {
    title: "5. Menores de edad",
    body: "Ritual Café no está diseñada para recopilar información de menores de edad y no solicita datos personales de ninguna persona usuaria.",
  },
  {
    title: "6. Cambios a esta política",
    body: "Podemos actualizar esta política para reflejar cambios en la app o en requisitos legales. La versión vigente siempre estará disponible en esta página.",
  },
];

export default function PrivacyPolicy() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-xl space-y-10">
      <div className="space-y-4 border-b-3 border-ink pb-8">
        <p className="font-label-bold text-label-bold uppercase text-brand-roast">
          Última actualización: 25 de abril de 2026
        </p>
        <h1 className="font-h1 text-[48px] md:text-[64px] leading-none uppercase text-ink">
          Política de Privacidad
        </h1>
        <p className="font-body-lg text-body-lg text-ink">
          En Ritual Café respetamos tu privacidad. Esta política explica de forma clara qué información manejamos y cómo protegemos tu experiencia dentro de la app.
        </p>
      </div>

      <div className="space-y-8">
        {sections.map((section) => (
          <article className="space-y-3" key={section.title}>
            <h2 className="font-h3 text-h3 text-ink">{section.title}</h2>
            <p className="font-body-md text-body-md text-ink">{section.body}</p>
          </article>
        ))}
      </div>

      <div className="bg-brand-sand border-2 border-ink shadow-hard p-6 space-y-3">
        <h2 className="font-h3 text-h3 text-ink">Contacto</h2>
        <p className="font-body-md text-body-md text-ink">
          Si tienes preguntas sobre esta política de privacidad, puedes contactarnos a través de los canales oficiales de Ritual Café.
        </p>
      </div>
    </section>
  );
}
