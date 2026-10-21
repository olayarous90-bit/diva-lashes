/**
 * Cuestionario Interactivo: Diagnóstico de Piel y Rutina Personalizada
 */
const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "¿Cómo se siente tu piel unos 30 minutos después de lavarla solo con agua o limpiador suave, sin aplicar ningún producto?",
    options: [
      { text: "Muy tirante, áspera o con ganas urgentes de aplicar crema", value: "seca", icon: "💧" },
      { text: "Brillante y grasa en todo el rostro (frente, mejillas, nariz)", value: "grasa", icon: "✨" },
      { text: "Con brillos en la zona T (frente y nariz), pero normal o tirante en las mejillas", value: "mixta", icon: "⚖️" },
      { text: "Enrojecida, con ardor, picor o sensación de calor", value: "sensible", icon: "🌸" }
    ]
  },
  {
    id: 2,
    question: "A mediodía, ¿cómo notas la visibilidad de tus poros y la textura de tu piel?",
    options: [
      { text: "Poros casi imperceptibles, pero textura apagada o con descamación fina", value: "seca", icon: "🔍" },
      { text: "Poros dilatados y visibles en mejillas, frente y nariz, con textura oleosa", value: "grasa", icon: "🫧" },
      { text: "Poros visibles principalmente sobre la nariz y barbilla", value: "mixta", icon: "🎯" },
      { text: "Zonas enrojecidas, pequeños parches ásperos o capilares evidentes", value: "sensible", icon: "🌿" }
    ]
  },
  {
    id: 3,
    question: "¿Cuál es tu objetivo cosmético o preocupación prioritaria en este momento?",
    options: [
      { text: "Recuperar nutrición profunda, elasticidad y combatir líneas de expresión", value: "madura", icon: "⏳" },
      { text: "Descongestionar puntos negros, regular brillos y prevenir brotes", value: "grasa", icon: "🛡️" },
      { text: "Lograr un equilibrio general: controlar brillos sin resecar mejillas", value: "mixta", icon: "🤍" },
      { text: "Calmar la sensibilidad extrema, reforzar la barrera y mitigar rojeces", value: "sensible", icon: "🕊️" }
    ]
  },
  {
    id: 4,
    question: "¿Cómo reacciona habitualmente tu rostro ante cambios de temperatura o nuevos cosméticos?",
    options: [
      { text: "Se deshidrata con el frío o la calefacción; absorbe todo de inmediato", value: "seca", icon: "🍂" },
      { text: "Produce más sebo con el calor y reacciona con granos si la crema es muy densa", value: "grasa", icon: "☀️" },
      { text: "Se adapta bien en general, aunque la zona T brilla en verano", value: "mixta", icon: "🌤️" },
      { text: "Reacciona con frecuencia con rojez, picor o sensación de tirantez", value: "sensible", icon: "🍃" }
    ]
  }
];
