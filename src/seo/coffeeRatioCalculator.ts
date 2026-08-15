export type CoffeeRatioCalculatorLocale = "en" | "es";

type Method = {
  id: "v60" | "aeropress" | "frenchPress";
  ratio: number;
  label: string;
  note: string;
  recipePath: string;
  recipeLabel: string;
};

type Faq = {
  question: string;
  answer: string;
};

export type CoffeeRatioCalculatorContent = {
  lang: CoffeeRatioCalculatorLocale;
  path: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  hero: {
    title: string;
    body: string;
  };
  calculator: {
    methodLabel: string;
    coffeeLabel: string;
    waterLabel: string;
    ratioLabel: string;
    ratioHint: string;
    ratioError: string;
    amountError: string;
    resultTitle: string;
    resultBody: string;
    cta: string;
  };
  howItWorks: {
    title: string;
    paragraphs: string[];
  };
  methodsTitle: string;
  methods: Method[];
  faqTitle: string;
  faqs: Faq[];
};

export const coffeeRatioCalculatorContent: Record<CoffeeRatioCalculatorLocale, CoffeeRatioCalculatorContent> = {
  es: {
    lang: "es",
    path: "/calculadora-cafe-agua",
    title: "Calculadora de café y agua | Ratio para V60, AeroPress y prensa francesa | Ritual Café",
    description:
      "Calcula cuántos gramos de café o agua necesitas para V60, AeroPress y prensa francesa. Ajusta el ratio y prepara una taza más consistente.",
    ogTitle: "Calculadora de café y agua | Ritual Café",
    ogDescription: "Calcula café, agua y ratio para tu próxima preparación.",
    hero: {
      title: "Calculadora de café y agua",
      body:
        "Ingresa el café o el agua que tienes, elige tu método y obtén una proporción clara para preparar una taza más consistente.",
    },
    calculator: {
      methodLabel: "Método",
      coffeeLabel: "Café",
      waterLabel: "Agua",
      ratioLabel: "Proporción",
      ratioHint: "Ajustable de 1:10 a 1:20",
      ratioError: "Elige un ratio entre 1:10 y 1:20.",
      amountError: "Ingresa una cantidad mayor a 0 para calcular.",
      resultTitle: "Tu preparación",
      resultBody:
        "Ritual convierte esta proporción en una receta guiada con tiempos, fases y notas para que puedas repetir la taza que te gustó.",
      cta: "Usa esta receta en Ritual",
    },
    howItWorks: {
      title: "Cómo usar esta calculadora de café",
      paragraphs: [
        "Una proporción de café y agua te ayuda a repetir una receta sin hacer cuentas mientras el agua está caliente. El primer número representa el café; el segundo, el agua. Por ejemplo, 1:16 significa 1 gramo de café por cada 16 gramos de agua.",
        "Elige un método como punto de partida, escribe la cantidad de café que quieres usar o el agua disponible y la otra cantidad se actualizará automáticamente. Cambia el ratio si buscas una taza más intensa o más ligera.",
      ],
    },
    methodsTitle: "Ratios para empezar según tu método",
    methods: [
      {
        id: "v60",
        ratio: 16,
        label: "V60",
        note: "1:16 da una taza clara y equilibrada. Prueba 1:15 para más intensidad o 1:17 para una taza más ligera.",
        recipePath: "/recetas/v60",
        recipeLabel: "Ver receta V60",
      },
      {
        id: "aeropress",
        ratio: 15,
        label: "AeroPress",
        note: "1:15 es una base redonda y dulce para una taza diaria con filtro de papel.",
        recipePath: "/recetas/aeropress",
        recipeLabel: "Ver receta AeroPress",
      },
      {
        id: "frenchPress",
        ratio: 15,
        label: "Prensa francesa",
        note: "1:15 mantiene cuerpo y dulzor sin hacer que la inmersión se sienta demasiado pesada.",
        recipePath: "/recetas/prensa-francesa",
        recipeLabel: "Ver receta de prensa francesa",
      },
    ],
    faqTitle: "Preguntas frecuentes",
    faqs: [
      {
        question: "¿Cuánto café necesito para 300 g de agua?",
        answer: "Con un ratio 1:16, usa 18.8 g de café. Con 1:15, usa 20 g. Elige según qué tan intensa quieres la taza.",
      },
      {
        question: "¿Qué ratio de café y agua debo usar?",
        answer: "Para filtrados, empieza entre 1:15 y 1:17. V60 suele funcionar bien en 1:16; AeroPress y prensa francesa tienen un punto de partida confiable en 1:15.",
      },
      {
        question: "¿Puedo cambiar el ratio?",
        answer: "Sí. Baja el segundo número para una taza más intensa y súbelo para una taza más ligera. Cambia una variable por preparación para entender el resultado.",
      },
      {
        question: "¿Por qué no aparece espresso?",
        answer: "El espresso se ajusta mejor con una proporción de dosis y bebida final, no con café y agua vertida. Esta calculadora está pensada para métodos manuales con agua.",
      },
    ],
  },
  en: {
    lang: "en",
    path: "/coffee-to-water-ratio-calculator",
    title: "Coffee to Water Ratio Calculator for V60, AeroPress & French Press | Ritual Cafe",
    description:
      "Calculate coffee and water grams for V60, AeroPress, and French press. Adjust your brew ratio and make a more consistent cup at home.",
    ogTitle: "Coffee to Water Ratio Calculator | Ritual Cafe",
    ogDescription: "Calculate coffee, water, and brew ratio for your next cup.",
    hero: {
      title: "Coffee to water ratio calculator",
      body:
        "Enter the coffee or water you have, choose your brew method, and get a clear ratio for a more consistent cup.",
    },
    calculator: {
      methodLabel: "Method",
      coffeeLabel: "Coffee",
      waterLabel: "Water",
      ratioLabel: "Ratio",
      ratioHint: "Adjust from 1:10 to 1:20",
      ratioError: "Choose a ratio between 1:10 and 1:20.",
      amountError: "Enter an amount greater than 0 to calculate.",
      resultTitle: "Your brew",
      resultBody:
        "Ritual turns this ratio into a guided recipe with timing, phases, and notes so you can repeat the cup you enjoyed.",
      cta: "Use this recipe in Ritual",
    },
    howItWorks: {
      title: "How to use this coffee ratio calculator",
      paragraphs: [
        "A coffee-to-water ratio helps you repeat a recipe without doing math while your water is hot. The first number is coffee and the second is water. For example, 1:16 means 1 gram of coffee for every 16 grams of water.",
        "Choose a brew method as a starting point, enter the coffee you want to use or the water you have available, and the other amount updates automatically. Change the ratio when you want a stronger or lighter cup.",
      ],
    },
    methodsTitle: "Starter ratios by brew method",
    methods: [
      {
        id: "v60",
        ratio: 16,
        label: "V60",
        note: "1:16 makes a clear, balanced cup. Try 1:15 for more intensity or 1:17 for a lighter cup.",
        recipePath: "/recetas/v60",
        recipeLabel: "See the V60 recipe",
      },
      {
        id: "aeropress",
        ratio: 15,
        label: "AeroPress",
        note: "1:15 is a round, sweet starting point for an everyday paper-filtered cup.",
        recipePath: "/recipes/aeropress-recipe",
        recipeLabel: "See the AeroPress recipe",
      },
      {
        id: "frenchPress",
        ratio: 15,
        label: "French press",
        note: "1:15 keeps body and sweetness without making the immersion brew feel too heavy.",
        recipePath: "/recetas/prensa-francesa",
        recipeLabel: "See the French press recipe",
      },
    ],
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        question: "How much coffee do I need for 300 g of water?",
        answer: "At a 1:16 ratio, use 18.8 g of coffee. At 1:15, use 20 g. Choose based on how intense you want the cup to taste.",
      },
      {
        question: "What coffee-to-water ratio should I use?",
        answer: "For manual brews, start between 1:15 and 1:17. V60 often works well at 1:16, while AeroPress and French press have a dependable 1:15 starting point.",
      },
      {
        question: "Can I change the ratio?",
        answer: "Yes. Lower the second number for a stronger cup and raise it for a lighter cup. Change one variable per brew so you can understand the result.",
      },
      {
        question: "Why is espresso not included?",
        answer: "Espresso is best adjusted with a dose-to-yield ratio, not coffee to poured water. This calculator is for manual water-based brew methods.",
      },
    ],
  },
};
