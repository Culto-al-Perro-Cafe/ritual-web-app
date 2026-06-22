export type CoffeeBrewingAppLocale = "en" | "es";

type Card = {
  title: string;
  body: string;
};

type Method = {
  method: string;
  detail: string;
};

type Faq = {
  question: string;
  answer: string;
};

export type CoffeeBrewingAppContent = {
  lang: CoffeeBrewingAppLocale;
  path: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  keywords: string[];
  hero: {
    h1: string;
    subheadline: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
  };
  preview: {
    label: string;
    title: string;
    coffeeLabel: string;
    waterLabel: string;
    steps: string[];
  };
  calm: {
    title: string;
    paragraphs: string[];
  };
  scaling: {
    title: string;
    paragraphs: string[];
    examples: Card[];
  };
  timer: {
    title: string;
    paragraphs: string[];
    cta: string;
    methods: Method[];
  };
  journal: {
    title: string;
    paragraphs: string[];
    cta: string;
    cards: Array<[string, string]>;
  };
  routines: {
    title: string;
    paragraphs: string[];
    cardTitle: string;
    cardBody: string;
  };
  audience: {
    title: string;
    intro: string;
    items: string[];
  };
  flow: {
    title: string;
    intro: string;
    steps: string[];
  };
  faqTitle: string;
  faqs: Faq[];
  finalCta: {
    title: string;
    body: string;
    link: string;
  };
};

export const coffeeBrewingAppContent: Record<CoffeeBrewingAppLocale, CoffeeBrewingAppContent> = {
  en: {
    lang: "en",
    path: "/coffee-brewing-app",
    title: "Coffee Brewing App | Guided Brew Timer & Journal by Ritual Café",
    description:
      "Brew better coffee with Ritual Café. Follow guided V60, AeroPress, French press, and espresso recipes, track your brews, save favorites, and build a calmer coffee routine.",
    ogTitle: "Ritual Café — Guided Coffee Brewing App",
    ogDescription:
      "Choose a recipe, scale your coffee or water amount, follow a guided brew timer, and track every cup.",
    keywords: [
      "Coffee Brewing App",
      "Coffee Brew Journal",
      "Coffee Brewing Log",
      "Coffee Recipe Tracker",
      "Coffee Brew Timer",
      "V60 Timer App",
      "AeroPress Timer App",
      "Coffee Routine App",
      "Coffee Brewing Journal",
    ],
    hero: {
      h1: "Coffee Brewing App for Better Daily Brews",
      subheadline:
        "Choose a recipe, scale your coffee or water amount, and follow a calm guided timer for V60, AeroPress, French press, and espresso.",
      body:
        "Ritual Cafe brings the recipe, brew timer, and brew history into one simple flow, so your daily cup can become easier to repeat without turning into another complicated morning task.",
      primaryCta: "Start Brewing with Ritual",
      secondaryCta: "Explore Brew Journal",
    },
    preview: {
      label: "Guided recipe",
      title: "Morning V60",
      coffeeLabel: "Coffee",
      waterLabel: "Water",
      steps: ["Bloom to 45g", "Pour to 150g", "Finish at 240g", "Save brew notes"],
    },
    calm: {
      title: "Brew better coffee, one calm step at a time",
      paragraphs: [
        "Ritual Cafe is built for the quiet part of the morning when you want a better cup of coffee but do not want to juggle a recipe, a calculator, a scale, and a timer at the same time. It turns a coffee recipe into a clear sequence you can follow from the first gram to the final note.",
        "Instead of asking you to remember every pour or steeping phase, Ritual keeps the routine visible and simple. Choose the recipe, enter the amount you are brewing, start the timer, and move through each step with enough structure to stay consistent and enough calm to enjoy the process.",
        "That calm matters because most brewing mistakes happen when the small details compete for attention. A clear coffee brewing app gives you the next action at the right moment: when to pour, when to wait, when to plunge, when to stop the shot, and when to save what happened. The cup still belongs to you; the app just keeps the routine from drifting.",
      ],
    },
    scaling: {
      title: "Choose a recipe and scale it instantly",
      paragraphs: [
        "A good coffee brewing app should remove the small calculations that interrupt a real brew. Ritual Cafe lets you enter either the coffee amount or the water amount, then adjusts the recipe around that choice. You can keep the ratio stable, make a smaller cup, prepare two cups, or follow an espresso routine without rewriting the recipe.",
        "This is useful when your morning changes. Maybe you only want one V60 before work. Maybe someone else wants coffee too. Maybe your kettle has less water than expected. The recipe stays readable because the app handles the proportional adjustment before you start the guided brew timer.",
        "Scaling also makes recipes easier to trust. If a recipe tastes good at one size, you can use the same structure as a starting point for another size instead of guessing a new dose from scratch. That turns Ritual Cafe into a practical coffee recipe tracker: the recipe is not just stored, it is ready to adapt to the cup you are actually making.",
      ],
      examples: [
        {
          title: "15g coffee for a single V60",
          body: "Start with a small pour-over, keep the same ratio, and let Ritual Cafe calculate the water target before the timer begins.",
        },
        {
          title: "30g coffee for two cups",
          body: "Scale a familiar recipe up for a shared morning brew without doing ratio math while the kettle is ready.",
        },
        {
          title: "250g water for a smaller brew",
          body: "Enter the water you want to use and let the recipe adjust the coffee dose around that smaller cup.",
        },
        {
          title: "Espresso dose and yield",
          body: "Follow an espresso routine around dose, target yield, and shot timing so your next change is intentional.",
        },
      ],
    },
    timer: {
      title: "Follow a guided coffee timer",
      paragraphs: [
        "A basic timer tells you how long it has been. Ritual Cafe does more useful work: it connects time to the recipe step you are actually performing. The app can guide a bloom and pour sequence for V60, a steep and plunge routine for AeroPress, a slower immersion process for French press, or shot timing for espresso.",
        "The result is a coffee brew timer that supports attention instead of taking it over. You can look down, see the current phase, make the next move, and return to the cup. When a brew tastes right, the same timed structure makes it easier to repeat.",
        "The timer is especially helpful when each method asks for a different rhythm. A V60 timer needs pour targets and drawdown awareness. An AeroPress timer needs steeping and plunging prompts. A French press routine rewards patience. Espresso depends on a short window where dose, yield, and time all matter. Ritual keeps those routines separated so you can focus on the method in front of you.",
      ],
      cta: "Start your next brew",
      methods: [
        { method: "V60", detail: "Bloom, first pour, second pour, final pour, and drawdown timing." },
        { method: "AeroPress", detail: "Pour, stir, steep, cap, flip or settle, then plunge at the right moment." },
        { method: "French press", detail: "Immersion, crust break, rest, plunge, and serve without rushing the cup." },
        { method: "Espresso", detail: "Dose, yield, and shot time prompts for a routine that is easy to repeat." },
      ],
    },
    journal: {
      title: "Keep a coffee brew journal",
      paragraphs: [
        "Better coffee comes from remembering what worked. Ritual Cafe acts as a coffee brew journal by keeping completed brews, notes, favorites, and recipes close to the timer you already use. You can save the brew after it finishes, write down what changed, and return to a favorite routine when you want a dependable cup.",
        "The journal is focused on the brew itself: recipe, timing, amount, notes, and whether the result is worth repeating. It is not a coffee bean inventory, roaster database, or marketplace. The goal is simpler and more practical: keep your best cups from disappearing into memory.",
        "A coffee brewing journal does not need to feel like a spreadsheet to be useful. A short note about grind, taste, timing, or a favorite recipe can be enough to make the next brew better. Ritual keeps that note close to the recipe flow, so your coffee brewing log grows naturally as you brew instead of becoming a separate chore.",
      ],
      cta: "Log your first brew",
      cards: [
        ["Recipe", "V60 morning cup"],
        ["Brew note", "Sweeter at 15g coffee and a slower second pour."],
        ["Favorite", "Saved for weekdays"],
        ["Next change", "Try one click finer if it drains under 2:30."],
      ],
    },
    routines: {
      title: "Built for everyday coffee routines",
      paragraphs: [
        "Ritual Cafe is for the brews you repeat often: the first V60 of the day, an AeroPress before leaving home, a French press on a slower weekend, or an espresso routine you are trying to dial in. Favorites make those routines easier to revisit, and the brew history gives you a simple record of what you changed.",
        "The app keeps the routine calm by making each step visible before you need it. You can brew with the same recipe tomorrow, adjust one variable, and keep building a pattern that tastes better without becoming complicated.",
        "That makes Ritual useful for both everyday repetition and small experiments. You can keep a weekday favorite untouched, then make one careful change on a slower morning: a little more water, a finer grind note, a longer steep, or a different espresso yield. The routine stays familiar while the brew history keeps the change visible.",
      ],
      cardTitle: "Coffee consistency without a spreadsheet",
      cardBody:
        "Use Ritual as a coffee routine app when you want the same cup again, but still want room to learn from the next brew. Recipe, timer, log, and favorite all stay part of one quiet workflow.",
    },
    audience: {
      title: "Who Ritual Cafe is for",
      intro:
        "Ritual Cafe is made for people who care about better coffee but do not want every cup to feel like a technical exercise. It works as a coffee routine app for daily brews, a V60 timer app for pour-over mornings, an AeroPress timer app for quick recipes, and a simple place to remember the cups worth repeating.",
      items: [
        "Home brewers who want better coffee without turning breakfast into a lab session.",
        "V60 users who need a calm timer for bloom, pours, and drawdown.",
        "AeroPress users who want steeping and plunging steps in one place.",
        "French press drinkers who want repeatable immersion timing.",
        "Espresso beginners who are learning dose, yield, and shot timing.",
        "Coffee enthusiasts who want consistency without spreadsheets.",
      ],
    },
    flow: {
      title: "Example brew flow",
      intro:
        "A realistic Ritual Cafe session starts before the timer. You choose the method, decide how much coffee or water you want to use, confirm the scaled recipe, then follow each phase with the brew journal waiting at the end. For a small weekday V60, the flow can look like this.",
      steps: [
        "Pick a V60 recipe.",
        "Enter 15g coffee.",
        "Ritual scales the water amount.",
        "Start the guided timer.",
        "Follow bloom and pour steps.",
        "Save the brew.",
        "Mark it as a favorite if it worked well.",
      ],
    },
    faqTitle: "FAQ",
    faqs: [
      {
        question: "What is Ritual Cafe?",
        answer:
          "Ritual Cafe is a coffee brewing app for following recipes, scaling coffee or water amounts, using a guided brew timer, and keeping a record of the cups you want to repeat.",
      },
      {
        question: "Is Ritual Cafe a coffee brew journal?",
        answer:
          "Yes. Ritual Cafe is designed to help you track completed brews, notes, recipes, and favorites so you can remember what worked and brew it again with less guesswork.",
      },
      {
        question: "Can I use Ritual Cafe as a coffee brewing log?",
        answer:
          "Yes. Ritual Cafe can work as a coffee brewing log because each completed brew can keep the recipe, amount, timing, notes, and favorite status connected to the cup you made.",
      },
      {
        question: "Is Ritual Cafe a coffee recipe tracker?",
        answer:
          "Yes. Ritual Cafe helps you choose recipes, scale them for the amount you want to brew, follow the steps, and return to favorite recipes when you want a repeatable cup.",
      },
      {
        question: "Can I use Ritual Cafe as a V60 timer?",
        answer:
          "Yes. You can use Ritual Cafe as a V60 timer with guided phases for bloom, pours, and drawdown, while keeping the recipe attached to the brew you are making.",
      },
      {
        question: "Does Ritual Cafe work for AeroPress?",
        answer:
          "Yes. Ritual Cafe supports AeroPress-style routines with timed pouring, stirring, steeping, and plunging steps, depending on the recipe you choose.",
      },
      {
        question: "Can I scale coffee recipes?",
        answer:
          "Yes. You can enter either the coffee amount or the water amount, and Ritual Cafe adjusts the recipe so the proportions stay clear before you start brewing.",
      },
      {
        question: "Can I track espresso?",
        answer:
          "Yes. Ritual Cafe can help you follow espresso routines around dose, yield, and shot timing, then save notes so you can compare what changed between shots.",
      },
      {
        question: "Does Ritual Cafe track coffee beans?",
        answer:
          "Ritual Cafe is currently focused on recipes, guided brewing, and brew history. Dedicated coffee bean inventory is not part of the current product.",
      },
      {
        question: "Is Ritual Cafe good for beginners?",
        answer:
          "Yes. Ritual Cafe is useful for beginners because it turns brewing into clear steps. You do not need to memorize ratios, pour timings, or every phase before making your first better cup.",
      },
    ],
    finalCta: {
      title: "Build your morning ritual",
      body:
        "Open Ritual Cafe, pick a recipe, scale the amount, follow the timer, and save the brew you want to repeat.",
      link: "Open Ritual Cafe",
    },
  },
  es: {
    lang: "es",
    path: "/es/app-para-preparar-cafe",
    title: "App para preparar café | Temporizador y diario de Ritual Café",
    description:
      "Prepara mejor café con Ritual Café. Sigue recetas guiadas para V60, AeroPress, prensa francesa y espresso, registra tus preparaciones y repite tus favoritas.",
    ogTitle: "Ritual Café — App guiada para preparar café",
    ogDescription:
      "Elige una receta, escala café o agua, sigue un temporizador guiado y registra cada taza.",
    keywords: [
      "App para preparar café",
      "Diario de café",
      "Bitácora de café",
      "Registro de preparación de café",
      "Temporizador de café",
      "Temporizador V60",
      "Temporizador AeroPress",
      "App de rutina de café",
      "Recetario de café",
    ],
    hero: {
      h1: "App para preparar mejor café todos los días",
      subheadline:
        "Elige una receta, escala la cantidad de café o agua y sigue un temporizador guiado para V60, AeroPress, prensa francesa y espresso.",
      body:
        "Ritual Café une receta, temporizador y registro de preparación en un flujo simple, para que tu taza diaria sea más fácil de repetir sin convertir la mañana en otra tarea complicada.",
      primaryCta: "Empieza a preparar con Ritual",
      secondaryCta: "Explorar diario de café",
    },
    preview: {
      label: "Receta guiada",
      title: "V60 de la mañana",
      coffeeLabel: "Café",
      waterLabel: "Agua",
      steps: ["Bloom hasta 45g", "Verter hasta 150g", "Terminar en 240g", "Guardar notas"],
    },
    calm: {
      title: "Prepara mejor café, un paso tranquilo a la vez",
      paragraphs: [
        "Ritual Café está hecho para esa parte tranquila de la mañana en la que quieres una mejor taza, pero no quieres manejar receta, calculadora, báscula y timer al mismo tiempo. Convierte una receta de café en una secuencia clara que puedes seguir desde el primer gramo hasta la nota final.",
        "En lugar de pedirte que memorices cada vertido o fase de inmersión, Ritual mantiene la rutina visible y simple. Elige la receta, escribe la cantidad que vas a preparar, inicia el temporizador y avanza con suficiente estructura para mantener consistencia sin perder calma.",
        "Esa calma importa porque muchos errores aparecen cuando los pequeños detalles compiten por atención. Una app para preparar café debe darte la siguiente acción en el momento correcto: cuándo verter, cuándo esperar, cuándo bajar el émbolo, cuándo detener el shot y cuándo guardar lo que pasó. La taza sigue siendo tuya; la app solo evita que la rutina se desordene.",
      ],
    },
    scaling: {
      title: "Elige una receta y escálala al instante",
      paragraphs: [
        "Una buena app para preparar café debe quitar los cálculos pequeños que interrumpen una preparación real. Ritual Café te permite escribir la cantidad de café o la cantidad de agua, y ajusta la receta alrededor de esa elección. Puedes conservar el ratio, hacer una taza más pequeña, preparar dos tazas o seguir una rutina de espresso sin reescribir la receta.",
        "Esto ayuda cuando la mañana cambia. Tal vez solo quieres un V60 antes de trabajar. Tal vez alguien más también quiere café. Tal vez tu tetera tiene menos agua de la esperada. La receta sigue siendo fácil de leer porque la app ajusta la proporción antes de iniciar el temporizador guiado.",
        "Escalar también hace que las recetas sean más confiables. Si una receta sabe bien en un tamaño, puedes usar la misma estructura para otro tamaño sin adivinar una dosis nueva desde cero. Así Ritual Café funciona como un recetario de café práctico: la receta no solo se guarda, también se adapta a la taza que realmente vas a preparar.",
      ],
      examples: [
        {
          title: "15g de café para un V60 individual",
          body: "Empieza con un pour-over pequeño, conserva el mismo ratio y deja que Ritual Café calcule el objetivo de agua antes del timer.",
        },
        {
          title: "30g de café para dos tazas",
          body: "Escala una receta conocida para compartir la mañana sin hacer cuentas mientras el agua ya está lista.",
        },
        {
          title: "250g de agua para una preparación pequeña",
          body: "Escribe el agua que quieres usar y deja que la receta ajuste la dosis de café para esa taza.",
        },
        {
          title: "Rutina de espresso con dosis y rendimiento",
          body: "Sigue una rutina de espresso con dosis, rendimiento objetivo y tiempo de shot para cambiar con intención.",
        },
      ],
    },
    timer: {
      title: "Sigue un temporizador de café guiado",
      paragraphs: [
        "Un timer básico solo te dice cuánto tiempo ha pasado. Ritual Café hace algo más útil: conecta el tiempo con el paso de receta que estás haciendo. La app puede guiar el bloom y los vertidos de un V60, la inmersión y el plunge de un AeroPress, una prensa francesa más pausada o el tiempo de extracción de espresso.",
        "El resultado es un temporizador de café que apoya tu atención en lugar de robarla. Puedes mirar la pantalla, ver la fase actual, hacer el siguiente movimiento y volver a la taza. Cuando una preparación sabe bien, esa misma estructura de tiempos hace más fácil repetirla.",
        "El timer ayuda especialmente porque cada método pide un ritmo distinto. Un temporizador V60 necesita objetivos de vertido y atención al drenado. Un temporizador AeroPress necesita avisos para infusionar y presionar. La prensa francesa recompensa la paciencia. El espresso depende de una ventana corta donde dosis, rendimiento y tiempo importan. Ritual separa esas rutinas para que puedas concentrarte en el método que tienes enfrente.",
      ],
      cta: "Prepara tu próxima taza",
      methods: [
        { method: "V60", detail: "Bloom, primer vertido, segundo vertido, vertido final y tiempo de drenado." },
        { method: "AeroPress", detail: "Verter, agitar, infusionar, tapar, voltear o asentar, y presionar en el momento correcto." },
        { method: "Prensa francesa", detail: "Inmersión, ruptura de capa, reposo, émbolo y servido sin apresurar la taza." },
        { method: "Espresso", detail: "Dosis, rendimiento y tiempo de shot para una rutina fácil de repetir." },
      ],
    },
    journal: {
      title: "Mantén un diario de café",
      paragraphs: [
        "Preparar mejor café empieza por recordar qué funcionó. Ritual Café funciona como un diario de café porque mantiene preparaciones terminadas, notas, favoritos y recetas cerca del temporizador que ya usas. Puedes guardar la preparación al terminar, anotar qué cambió y volver a una rutina favorita cuando quieras una taza confiable.",
        "El diario está enfocado en la preparación: receta, tiempo, cantidad, notas y si vale la pena repetir el resultado. No es inventario de granos, base de datos de tostadores ni marketplace. El objetivo es más simple y práctico: que tus mejores tazas no desaparezcan de la memoria.",
        "Una bitácora de café no necesita sentirse como una hoja de cálculo para ser útil. Una nota corta sobre molienda, sabor, tiempo o una receta favorita puede bastar para que la siguiente taza mejore. Ritual mantiene esa nota junto al flujo de receta, para que tu registro de café crezca naturalmente mientras preparas.",
      ],
      cta: "Registrar mi primera preparación",
      cards: [
        ["Receta", "V60 de la mañana"],
        ["Nota", "Más dulce con 15g de café y un segundo vertido más lento."],
        ["Favorito", "Guardado para días de trabajo"],
        ["Siguiente ajuste", "Probar un punto más fino si drena antes de 2:30."],
      ],
    },
    routines: {
      title: "Hecha para rutinas diarias de café",
      paragraphs: [
        "Ritual Café es para las preparaciones que repites seguido: el primer V60 del día, un AeroPress antes de salir, una prensa francesa en un fin de semana más lento o una rutina de espresso que estás aprendiendo a ajustar. Los favoritos hacen más fácil volver a esas rutinas, y el historial te da un registro simple de lo que cambiaste.",
        "La app mantiene la rutina tranquila porque muestra cada paso antes de que lo necesites. Puedes preparar la misma receta mañana, ajustar una sola variable y construir un patrón que sabe mejor sin volverse complicado.",
        "Eso hace que Ritual funcione tanto para repetición diaria como para pequeños experimentos. Puedes dejar intacta una receta favorita entre semana y cambiar una cosa en una mañana más lenta: un poco más de agua, una nota de molienda más fina, una inmersión más larga o un rendimiento de espresso distinto. La rutina sigue familiar mientras el historial conserva el cambio.",
      ],
      cardTitle: "Consistencia de café sin hojas de cálculo",
      cardBody:
        "Usa Ritual como app de rutina de café cuando quieres repetir una taza, pero también quieres aprender de la siguiente preparación. Receta, timer, registro y favorito viven en un flujo tranquilo.",
    },
    audience: {
      title: "Para quién es Ritual Café",
      intro:
        "Ritual Café está hecha para personas que quieren mejor café sin convertir cada taza en un ejercicio técnico. Funciona como app de rutina diaria, temporizador V60 para mañanas de filtrado, temporizador AeroPress para recetas rápidas y un lugar simple para recordar las tazas que vale la pena repetir.",
      items: [
        "Personas que preparan café en casa y quieren mejorar sin complicarse.",
        "Usuarios de V60 que necesitan un timer tranquilo para bloom, vertidos y drenado.",
        "Usuarios de AeroPress que quieren pasos de inmersión y presión en un solo lugar.",
        "Personas que toman prensa francesa y quieren tiempos repetibles.",
        "Principiantes de espresso que están aprendiendo dosis, rendimiento y tiempo.",
        "Entusiastas del café que quieren consistencia sin hojas de cálculo.",
      ],
    },
    flow: {
      title: "Ejemplo de flujo de preparación",
      intro:
        "Una sesión real en Ritual Café empieza antes del timer. Eliges el método, decides cuánto café o agua usar, confirmas la receta escalada y sigues cada fase con el diario esperando al final. Para un V60 pequeño entre semana, el flujo puede verse así.",
      steps: [
        "Elige una receta V60.",
        "Escribe 15g de café.",
        "Ritual escala la cantidad de agua.",
        "Inicia el temporizador guiado.",
        "Sigue el bloom y los vertidos.",
        "Guarda la preparación.",
        "Márcala como favorita si funcionó bien.",
      ],
    },
    faqTitle: "Preguntas frecuentes",
    faqs: [
      {
        question: "¿Qué es Ritual Café?",
        answer:
          "Ritual Café es una app para preparar café que te ayuda a seguir recetas, escalar café o agua, usar un temporizador guiado y guardar un registro de las tazas que quieres repetir.",
      },
      {
        question: "¿Ritual Café funciona como diario de café?",
        answer:
          "Sí. Ritual Café está diseñada para registrar preparaciones terminadas, notas, recetas y favoritos, para que recuerdes qué funcionó y puedas repetirlo con menos adivinanza.",
      },
      {
        question: "¿Puedo usar Ritual Café como bitácora de café?",
        answer:
          "Sí. Ritual Café puede funcionar como bitácora de café porque cada preparación puede conservar receta, cantidad, tiempo, notas y estado de favorito junto a la taza que hiciste.",
      },
      {
        question: "¿Ritual Café es un recetario de café?",
        answer:
          "Sí. Ritual Café te ayuda a elegir recetas, escalarlas según la cantidad que quieres preparar, seguir los pasos y volver a favoritas cuando quieres una taza repetible.",
      },
      {
        question: "¿Puedo usar Ritual Café como temporizador V60?",
        answer:
          "Sí. Puedes usar Ritual Café como temporizador V60 con fases guiadas para bloom, vertidos y drenado, manteniendo la receta conectada a la preparación.",
      },
      {
        question: "¿Ritual Café funciona para AeroPress?",
        answer:
          "Sí. Ritual Café soporta rutinas tipo AeroPress con pasos para verter, agitar, infusionar y presionar, según la receta que elijas.",
      },
      {
        question: "¿Puedo escalar recetas de café?",
        answer:
          "Sí. Puedes escribir la cantidad de café o la cantidad de agua, y Ritual Café ajusta la receta para que las proporciones queden claras antes de preparar.",
      },
      {
        question: "¿Puedo registrar espresso?",
        answer:
          "Sí. Ritual Café puede ayudarte a seguir rutinas de espresso con dosis, rendimiento y tiempo de shot, y guardar notas para comparar qué cambió entre extracciones.",
      },
      {
        question: "¿Ritual Café registra granos de café?",
        answer:
          "Ritual Café actualmente está enfocada en recetas, preparación guiada e historial de preparaciones. Un inventario dedicado de granos de café no forma parte del producto actual.",
      },
      {
        question: "¿Ritual Café es buena para principiantes?",
        answer:
          "Sí. Ritual Café es útil para principiantes porque convierte la preparación en pasos claros. No necesitas memorizar ratios, tiempos de vertido o cada fase antes de hacer una mejor taza.",
      },
    ],
    finalCta: {
      title: "Construye tu ritual de la mañana",
      body:
        "Abre Ritual Café, elige una receta, escala la cantidad, sigue el temporizador y guarda la preparación que quieres repetir.",
      link: "Abrir Ritual Café",
    },
  },
};

export function coffeeBrewingAppJsonLd(locale: CoffeeBrewingAppLocale) {
  const content = coffeeBrewingAppContent[locale];
  const url = `https://ritual.otfusion.org${content.path}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Ritual Cafe",
      applicationCategory: "LifestyleApplication",
      operatingSystem: "iOS",
      inLanguage: content.lang,
      url,
      description: content.description,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      featureList: content.keywords,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: content.title,
      url,
      inLanguage: content.lang,
      description: content.description,
      isPartOf: {
        "@type": "WebSite",
        name: "Ritual Cafe",
        url: "https://ritual.otfusion.org/",
      },
      keywords: content.keywords,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: content.lang,
      mainEntity: content.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];
}
