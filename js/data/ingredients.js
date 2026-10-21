/**
 * Base de datos educativa de Ingredientes Cosméticos
 * Información cosmética objetiva, sin promesas milagro ni afirmaciones médicas.
 */
const INGREDIENTS_DATA = [
  {
    id: "acido-hialuronico",
    name: "Ácido Hialurónico",
    inci: "Sodium Hyaluronate / Hyaluronic Acid",
    category: "Humectante",
    description: "Molécula capaz de retener hasta 1.000 veces su propio peso en agua. Actúa en las capas superficiales aportando turgencia y jugosidad.",
    idealFor: ["Piel Seca", "Piel Deshidratada", "Piel Grasa", "Piel Sensible", "Piel Madura"],
    usageTime: "Día y Noche",
    tolerance: "Muy Alta (Apto para todo tipo de piel)",
    howToApply: "Aplicar siempre sobre la piel ligeramente humedecida (con tónico o bruma) y sellar inmediatamente con crema para evitar deshidratación por evaporación.",
    cautions: "En ambientes de humedad ambiental extremadamente baja (climas muy áridos), si no se sella con emoliente u oclusivo, puede robar agua de las capas profundas.",
    tags: ["Hidratación", "Turgencia", "Barrera cutánea"]
  },
  {
    id: "niacinamida",
    name: "Niacinamida (Vitamina B3)",
    inci: "Niacinamide",
    category: "Multiacción / Antioxidante",
    description: "Vitamina hidrosoluble que estimula la síntesis de ceramidas, equilibra la producción de sebo, calma el enrojecimiento y ayuda a homogenizar el tono.",
    idealFor: ["Piel Grasa", "Piel Mixta", "Piel con Manchas", "Piel con Poros Visibles", "Piel Sensible"],
    usageTime: "Día y Noche",
    tolerance: "Alta (Concentraciones recomendadas: 2% a 5%)",
    howToApply: "Aplicar en formato sérum antes de cremas más densas. Puede usarse tanto en rutina matutina como nocturna.",
    cautions: "Concentraciones elevadas (10% o superiores) no aportan mayor eficacia y pueden provocar enrojecimiento transitorio (*niacin flush*) en pieles reactivas.",
    tags: ["Poros", "Seborregulación", "Manchas", "Calmante"]
  },
  {
    id: "retinol",
    name: "Retinol y Retinoides",
    inci: "Retinol / Retinaldehyde / Hydroxypinacolone Retinoate",
    category: "Renovador Celular / Pro-Aging",
    description: "Derivado de la vitamina A considerado el estándar de oro cosmético para estimular la renovación celular, suavizar líneas de expresión y mejorar la textura cutánea.",
    idealFor: ["Piel Madura", "Textura Irregular", "Piel con Manchas", "Marcas Residuales"],
    usageTime: "Exclusivo de Noche",
    tolerance: "Media-Baja (Requiere proceso de retinización paulatina)",
    howToApply: "Iniciar con frecuencia baja (1 a 2 veces por semana) en concentraciones del 0.1% al 0.2%. Usar la técnica del sándwich (crema hidratante - retinol - crema hidratante) en pieles sensibles.",
    cautions: "Fotosensibilizante: el uso diario de protector solar de amplio espectro (SPF 50) a la mañana siguiente es OBLIGATORIO. Contraindicado de forma estricta durante el embarazo y periodo de lactancia.",
    tags: ["Renovación", "Líneas de expresión", "Manchas", "Uso Nocturno"]
  },
  {
    id: "vitamina-c",
    name: "Vitamina C (Ácido L-Ascórbico)",
    inci: "Ascorbic Acid / Sodium Ascorbyl Phosphate",
    category: "Antioxidante / Luminosidad",
    description: "Potente antioxidante que neutraliza los radicales libres causados por la radiación solar y la contaminación, estimula la síntesis de colágeno e ilumina el tono.",
    idealFor: ["Tono Apagado", "Manchas Solares", "Fotoenvejecimiento", "Piel Normal / Grasa"],
    usageTime: "Preferente de Mañana (bajo el protector solar)",
    tolerance: "Media (El ácido ascórbico puro requiere un pH ácido de ~3.0)",
    howToApply: "Aplicar unas gotas sobre rostro limpio y seco por la mañana, permitiendo absorción de 1 a 2 minutos antes de continuar con la hidratante y el fotoprotector.",
    cautions: "El ácido L-ascórbico puro se oxida con facilidad (adquiere tono marrón/anaranjado intenso; deséchese si cambia de color). En pieles muy sensibles puede generar ardor; se recomiendan derivados estables.",
    tags: ["Luminosidad", "Antioxidante", "Colágeno", "Uso Diurno"]
  },
  {
    id: "acido-salicilico",
    name: "Ácido Salicílico (BHA)",
    inci: "Salicylic Acid",
    category: "Exfoliante Químico Lipofílico",
    description: "Beta-hidroxiácido soluble en grasa. Penetra profundamente en el interior del poro para disolver el exceso de sebo, células muertas e impurezas atrapadas.",
    idealFor: ["Piel Grasa", "Puntos Negros", "Filamentos Sebáceos", "Tendencia Acneica"],
    usageTime: "Noche (1 a 3 veces por semana)",
    tolerance: "Media (Concentraciones cosméticas habituales: 0.5% al 2%)",
    howToApply: "Aplicar con las manos o disco reutilizable sobre la piel limpia y seca. Dejar actuar sin aclarar.",
    cautions: "No abusar de la frecuencia para no alterar la barrera cutánea. Contraindicado en personas alérgicas a la aspirina (salicilatos). Uso de protector solar indispensable.",
    tags: ["Poros", "Puntos Negros", "Acné", "BHA"]
  },
  {
    id: "acido-glicolico",
    name: "Ácido Glicólico (AHA)",
    inci: "Glycolic Acid",
    category: "Exfoliante Químico Hidrofílico",
    description: "Alfa-hidroxiácido de tamaño molecular pequeño con potente acción queratolítica superficial. Desprende las células muertas del estrato córneo devolviendo luz y suavidad.",
    idealFor: ["Tono Desigual", "Textura Áspera", "Piel Fotoenvejecida"],
    usageTime: "Noche (1 a 2 veces por semana)",
    tolerance: "Media-Baja (Concentraciones cosméticas recomendadas: 4% a 8%)",
    howToApply: "Aplicar por la noche sobre piel totalmente seca. Comenzar espaciando su uso para evaluar la tolerancia.",
    cautions: "Produce fotosensibilidad residual durante los días posteriores a su aplicación. No utilizar sobre piel con heridas abiertas o rosácea activa.",
    tags: ["Exfoliación", "Luminosidad", "Textura", "AHA"]
  },
  {
    id: "ceramidas",
    name: "Ceramidas",
    inci: "Ceramide NP, Ceramide AP, Ceramide EOP",
    category: "Lípidos Reparadores de Barrera",
    description: "Lípidos esenciales que constituyen más del 50% de la matriz intercelular del estrato córneo. Forman el 'cemento' que mantiene unidas las células de la piel.",
    idealFor: ["Piel Seca", "Barrera Comprometida", "Piel Sensible", "Uso concomitante con Retinol"],
    usageTime: "Día y Noche",
    tolerance: "Excelente (Biocompatibles y fisiológicas)",
    howToApply: "En lociones, bálsamos o cremas finales de hidratación. Ideales para reparar la piel tras rutinas intensivas de renovación.",
    cautions: "No tienen contraindicaciones conocidas ni riesgo de irritación.",
    tags: ["Barrera Cutánea", "Reparación", "Calmante", "Nutrición"]
  },
  {
    id: "centella-asiatica",
    name: "Centella Asiática (Cica)",
    inci: "Centella Asiatica Extract / Madecassoside / Asiaticoside",
    category: "Calmante y Cicatrizante Cosmético",
    description: "Planta medicinal rica en madecasósido que reduce notablemente la inflamación cutánea, calma la quemazón, acelera la regeneración superficial y mitiga rojeces.",
    idealFor: ["Piel Reactiva", "Rosácea", "Piel Sensibilizada", "Post-exfoliación"],
    usageTime: "Día y Noche",
    tolerance: "Muy Alta",
    howToApply: "En tónicos, ampollas, sérums o cremas de rescate tras agresiones ambientales o activos exfoliantes.",
    cautions: "Excelente perfil de seguridad para pieles con tendencia a la dermatitis o reactivas.",
    tags: ["Cica", "Rojeces", "Piel Sensible", "Calmante"]
  },
  {
    id: "acido-azelaico",
    name: "Ácido Azelaico",
    inci: "Azelaic Acid",
    category: "Antioxidante / Seborregulador / Despigmentante",
    description: "Ácido dicarboxílico natural con propiedades antibacterianas selectivas, antiinflamatorias y despigmentantes sin inducir fotosensibilidad marcada.",
    idealFor: ["Rojeces", "Marcas Post-Acné (PIE / PIH)", "Piel Grasa", "Tono Irregular"],
    usageTime: "Día y Noche",
    tolerance: "Alta (Concentraciones cosméticas habituales: 5% a 10%)",
    howToApply: "Aplicar capa fina tras la limpieza o sobre el sérum ligero. Puede provocar un ligero cosquilleo en los primeros usos que cede con el tiempo.",
    cautions: "Apto durante el embarazo bajo formulación cosmética estándar, previa consulta profesional.",
    tags: ["Rojeces", "Manchas", "Marcas", "Acné"]
  }
];

/**
 * Matriz de compatibilidad entre activos cosméticos
 * Reglas para el verificador interactivo
 */
const COMPATIBILITY_RULES = {
  "retinol+vitamina-c": {
    status: "danger",
    title: "No combinar juntos en la misma rutina",
    explanation: "El ácido ascórbico puro requiere un pH ácido (~3.0), mientras que el retinol actúa mejor a pH neutro (~5.5 - 6.0). Juntos pueden provocar sobreestimulación, descamación y fuerte irritación.",
    recommendation: "Aplica la Vitamina C por la MAÑANA para proteger contra radicales libres y reserva el Retinol para la NOCHE."
  },
  "retinol+acido-glicolico": {
    status: "danger",
    title: "Evitar en la misma sesión (Riesgo alto de irritación)",
    explanation: "Ambos son potentes estimuladores de la renovación celular. Su combinación directa en la misma noche puede comprometer gravemente la función barrera cutánea.",
    recommendation: "Utiliza una estrategia de alternancia (Skin Cycling): Noche 1 Ácido Glicólico, Noche 2 Retinol, Noches 3 y 4 Descanso con Ceramidas."
  },
  "retinol+acido-salicilico": {
    status: "warn",
    title: "Usar con extrema precaución o en noches distintas",
    explanation: "El BHA limpia en profundidad los poros mientras el retinol acelera el recambio celular. Juntos pueden provocar sequedad extrema.",
    recommendation: "Usa el Ácido Salicílico en una noche y el Retinol en otra noche. Hidrata intensamente con ceramidas."
  },
  "retinol+niacinamida": {
    status: "safe",
    title: "¡Combinación Estrella / Gran Sinergia!",
    explanation: "La niacinamida estimula la síntesis de ceramidas e hidrata la barrera, amortiguando de forma notable la irritación inherente a la retinización.",
    recommendation: "Aplica la Niacinamida primero para preparar la piel y a continuación tu tratamiento de Retinol."
  },
  "retinol+acido-hialuronico": {
    status: "safe",
    title: "Combinación Segura y Altamente Recomendada",
    explanation: "El Ácido Hialurónico provee hidratación que contrarresta la posible sequedad producida por el retinol.",
    recommendation: "Aplica el hialurónico sobre piel húmeda, deja secar por completo y luego aplica el retinol."
  },
  "retinol+ceramidas": {
    status: "safe",
    title: "Pareja Perfecta para Reparación",
    explanation: "Las ceramidas reconstruyen el manto lipídico mientras el retinol trabaja en la renovación de capas inferiores.",
    recommendation: "Aplica tu retinol y sella después con una crema densa rica en ceramidas (método de protección)."
  },
  "vitamina-c+niacinamida": {
    status: "safe",
    title: "Combinación Compatible y Potente",
    explanation: "Los mitos antiguos sobre su incompatibilidad han quedado obsoletos con las formulaciones cosméticas modernas estables.",
    recommendation: "Potencia la luminosidad y la acción antimanchas aplicando ambos por la mañana antes del protector solar."
  },
  "vitamina-c+acido-hialuronico": {
    status: "safe",
    title: "Sinergia Antioxidante e Hidratante",
    explanation: "Excelente mezcla para una piel luminosa, rellena y protegida de la deshidratación diurna.",
    recommendation: "Ideal en tu rutina matinal previa al protector solar."
  },
  "acido-salicilico+niacinamida": {
    status: "safe",
    title: "El Dúo Óptimo para Poros y Brillos",
    explanation: "El BHA desobstruye los poros disolviendo el tapón sebáceo y la Niacinamida regula la producción sebácea y calma.",
    recommendation: "Aplica el BHA 2 veces por semana y la Niacinamida a diario."
  },
  "acido-glicolico+acido-salicilico": {
    status: "warn",
    title: "Precaución: Solo en fórmulas ya equilibradas por laboratorios",
    explanation: "No mezcles dos sérums independientes de AHA y BHA al mismo tiempo en casa, salvo que vengan formulados en un único producto testado.",
    recommendation: "Alterna su uso según tus necesidades (AHA para manchas y textura; BHA para puntos negros)."
  },
  "centella-asiatica+retinol": {
    status: "safe",
    title: "Rescate y Confort Inmediato",
    explanation: "La centella asiática reduce activamente la respuesta inflamatoria y apoya la tolerancia al retinol.",
    recommendation: "Úsala en sérum o crema junto a tu retinoide de noche."
  }
};
