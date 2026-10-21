/**
 * Rutinas Faciales Estructuradas por Tipo de Piel (Mañana y Noche)
 * Guía cosmética metodológica basada en la regla de densidad y respeto a la barrera.
 */
const ROUTINES_DATA = {
  seca: {
    name: "Piel Seca",
    tagline: "Nutrición profunda, reposición lipídica y confort duradero",
    characteristics: "Falta de lípidos, sensación constante de tirantez, textura opaca o descamación fina y poros casi invisibles.",
    morning: [
      {
        step: 1,
        title: "Limpieza Confortable",
        product: "Emulsión o leche limpiadora no espumosa (pH 5.5)",
        desc: "Limpia sin despojar al rostro de sus escasos lípidos protectores. Enjuagar con agua tibia (nunca caliente)."
      },
      {
        step: 2,
        title: "Hidratación Humectante",
        product: "Esencia o tónico enriquecido + Sérum de Ácido Hialurónico",
        desc: "Aplicar sobre la piel todavía húmeda para capturar y fijar el agua en el estrato córneo."
      },
      {
        step: 3,
        title: "Nutrición y Barrera",
        product: "Crema rica en Ceramidas, Colesterol y Escualano",
        desc: "Sella los humectantes y restaura la matriz lipídica impidiendo la pérdida transepidérmica de agua (TEWL)."
      },
      {
        step: 4,
        title: "Fotoprotección Nutritiva",
        product: "Protector solar en crema hidratante SPF 50+",
        desc: "Fórmula emoliente con acabado hidratante. Recuerda aplicar la cantidad de 2 dedos sobre rostro y cuello."
      }
    ],
    night: [
      {
        step: 1,
        title: "Doble Limpieza: Fase Oleosa",
        product: "Bálsamo nutritivo o aceite limpiador emulsionable",
        desc: "Disuelve filtros solares resistentes y maquillaje sin fricción mecánica agresiva."
      },
      {
        step: 2,
        title: "Doble Limpieza: Fase Acuosa",
        product: "Limpiador cremoso hidratante",
        desc: "Retira los restos hidrosolubles dejando la piel flexible y sin sensación acartonada."
      },
      {
        step: 3,
        title: "Tratamiento Reparador",
        product: "Sérum con Péptidos o Ácido Láctico suave (1 vez/semana)",
        desc: "Estimula la renovación de superficie con suavidad extrema sin agredir la barrera."
      },
      {
        step: 4,
        title: "Sellado Oclusivo / Noche",
        product: "Crema bálsamo reparadora + 2 gotas de aceite facial puro (Jojoba o Escualano)",
        desc: "Crea una capa protectora para despertar con el rostro aterciopelado y repulpado."
      }
    ]
  },
  grasa: {
    name: "Piel Grasa",
    tagline: "Equilibrio sebáceo, descongestión de poros y frescura matificante",
    characteristics: "Hiperproducción sebácea generalizada, brillos evidentes a las pocas horas de lavar, poros dilatados y propensión a puntos negros.",
    morning: [
      {
        step: 1,
        title: "Limpieza Purificante Suave",
        product: "Gel limpiador espumoso suave sin sulfatos irritantes",
        desc: "Elimina el sebo acumulado durante la noche sin efecto rebote. Evitar jabones astringentes agresivos."
      },
      {
        step: 2,
        title: "Equilibrio y Poros",
        product: "Sérum de Niacinamida al 2%-5% o Tónico de Té Verde",
        desc: "Ayuda a regular la producción sebácea, afina visualmente los poros y calma rojeces."
      },
      {
        step: 3,
        title: "Hidratación Ligera",
        product: "Gel de agua ultraligero o fluido libre de aceites (oil-free)",
        desc: "La piel grasa necesita agua, no grasa. Si se priva de hidratación, el cuerpo producirá más sebo compensatorio."
      },
      {
        step: 4,
        title: "Protección Solar Toque Seco",
        product: "Fotoprotector fluido 'Toque Seco' o 'Matificante' SPF 50+",
        desc: "Fórmula no comedogénica que absorbe el exceso de brillo sin dejar residuos blancos ni sensación pesada."
      }
    ],
    night: [
      {
        step: 1,
        title: "Doble Limpieza: Fase Oleosa",
        product: "Aceite limpiador ligero emulsionable",
        desc: "El aceite disuelve el aceite: es el mejor método para aflojar el sebo endurecido de los poros."
      },
      {
        step: 2,
        title: "Doble Limpieza: Fase Acuosa",
        product: "Gel limpiador purificante con pH 5.5",
        desc: "Asegura una piel limpia y equilibrada lista para recibir los activos nocturnos."
      },
      {
        step: 3,
        title: "Tratamiento Seborregulador / Exfoliante",
        product: "Ácido Salicílico al 2% (2 noches/semana) o Retinoide suave",
        desc: "Penetra en el poro disolviendo filamentos sebáceos y previene la formación de comedones."
      },
      {
        step: 4,
        title: "Hidratación Nocturna No Grasa",
        product: "Loción en gel con Pantenol o Centella Asiática",
        desc: "Calma y recupera la piel sin aportar pesadez ni ocluir los poros."
      }
    ]
  },
  mixta: {
    name: "Piel Mixta",
    tagline: "Zonificación inteligente: matificar la zona T e hidratar las mejillas",
    characteristics: "Zona T (frente, nariz, barbilla) grasa con tendencia a brillos y poros dilatados, mientras las mejillas permanecen normales, secas o tirantes.",
    morning: [
      {
        step: 1,
        title: "Limpieza Equilibrante",
        product: "Gel limpiador neutro de base acuosa suave",
        desc: "Limpia la zona T sin deshidratar las mejillas ni dejar sensación de tensión."
      },
      {
        step: 2,
        title: "Sérum Polivalente",
        product: "Sérum de Niacinamida + Ácido Hialurónico",
        desc: "Regula el brillo en la frente y nariz mientras aporta hidratación profunda en las mejillas."
      },
      {
        step: 3,
        title: "Emulsión Hidratante Equilibrada",
        product: "Fluido hidratante no comedogénico",
        desc: "Aporte de agua equilibrado. Puedes aplicar una capa adicional en las mejillas si notas tirantez."
      },
      {
        step: 4,
        title: "Protección Solar Fluida",
        product: "Protector solar ligero de amplio espectro SPF 50+",
        desc: "Textura acuosa o 'water gel' de absorción rápida que no engrasa la zona T."
      }
    ],
    night: [
      {
        step: 1,
        title: "Doble Limpieza Suave",
        product: "Agua micelar de calidad o bálsamo ligero + limpiador acuoso",
        desc: "Retira eficazmente impurezas diurnas preservando el equilibrio de ambas zonas faciales."
      },
      {
        step: 2,
        title: "Tratamiento Nocturno Focalizado",
        product: "Ácido Salicílico (en zona T) o Ácido Glicólico suave",
        desc: "Zonifica el producto: aplica el BHA en nariz y barbilla y deja las mejillas con hidratación calmante."
      },
      {
        step: 3,
        title: "Nutrición Nocturna",
        product: "Crema hidratante enriquecida con péptidos y ceramidas ligeras",
        desc: "Nutre y restaura la barrera durante el sueño manteniendo el balance dérmico."
      }
    ]
  },
  sensible: {
    name: "Piel Sensible y Reactiva",
    tagline: "Calma, refuerzo de la barrera cutánea y máxima tolerancia",
    characteristics: "Propensión al enrojecimiento fácil, ardor, tirantez, picor o intolerancia a perfumes y cambios de temperatura bruscos.",
    morning: [
      {
        step: 1,
        title: "Limpieza Mínima",
        product: "Agua tibia o limpiador en loción extremadamente suave sin fragancia",
        desc: "En pieles muy reactivas, un enjuague con agua termal o tibia por la mañana puede ser suficiente."
      },
      {
        step: 2,
        title: "Sérum Calmante",
        product: "Sérum de Centella Asiática (Cica) + Pantenol (Vitamina B5)",
        desc: "Desactiva la señal inflamatoria, reduce rojeces y aporta confort inmediato."
      },
      {
        step: 3,
        title: "Crema Barrera Relipidante",
        product: "Crema hipoalergénica rica en Ceramidas y Alantoína",
        desc: "Sella microfisuras de la barrera cutánea sin contener fragancias, aceites esenciales ni alcohol denat."
      },
      {
        step: 4,
        title: "Protección Solar Mineral / Física",
        product: "Protector solar con filtros 100% minerales (Óxido de Zinc)",
        desc: "Los filtros físicos reflejan los rayos UV sin generar calor en la piel, siendo los más tolerados por pieles reactivas."
      }
    ],
    night: [
      {
        step: 1,
        title: "Desmaquillado Delicado",
        product: "Bálsamo o leche limpiadora emoliente sin frotar",
        desc: "Masajear con las yemas de los dedos suavemente y retirar con agua tibia sin discos ásperos."
      },
      {
        step: 2,
        title: "Reparación Nocturna Intensiva",
        product: "Bálsamo o crema SOS con Madecassoside y Escualano vegetal",
        desc: "Repara y restaura el manto lipídico mientras descansas, minimizando la reactividad matutina."
      }
    ]
  },
  madura: {
    name: "Piel Madura",
    tagline: "Densidad, firmeza, estimulación de colágeno y luminosidad",
    characteristics: "Disminución gradual de estrógenos y colágeno natural, menor elasticidad, líneas de expresión marcadas y sequedad creciente.",
    morning: [
      {
        step: 1,
        title: "Limpieza Nutritiva",
        product: "Limpiador en crema nutritivo con aceites vegetales suaves",
        desc: "Preserva los lípidos epidérmicos y deja la piel elástica y sedosa desde el primer paso."
      },
      {
        step: 2,
        title: "Escudo Antioxidante",
        product: "Sérum de Vitamina C + Ácido Ferúlico",
        desc: "Estimula la producción de colágeno natural y protege contra el fotoenvejecimiento diurno."
      },
      {
        step: 3,
        title: "Contorno de Ojos Reafirmante",
        product: "Crema periocular con Péptidos y Cafeína",
        desc: "Drena bolsas matutinas y aporta elasticidad a la piel más delgada del rostro."
      },
      {
        step: 4,
        title: "Crema Redensificante y Fotoprotector SPF 50+",
        product: "Crema reafirmante con Péptidos + Fotoprotector hidratante",
        desc: "El protector solar es el cosmético antiedad número 1: previene la degradación acelerada del colágeno."
      }
    ],
    night: [
      {
        step: 1,
        title: "Doble Limpieza Suave y Sedosa",
        product: "Bálsamo desmaquillante reconfortante + Limpiador acuoso",
        desc: "Limpia en profundidad respetando la delicadeza de la piel madura."
      },
      {
        step: 2,
        title: "Activo Estrella de Renovación",
        product: "Retinol o Retinaldehído (empezando 2-3 noches/semana)",
        desc: "Acelera el recambio celular, difumina manchas solares y estimula la arquitectura de soporte dérmico."
      },
      {
        step: 3,
        title: "Crema Nutritiva de Noche",
        product: "Crema rica en Ceramidas, Ácidos Grasos Esenciales y Niacinamida",
        desc: "Nutrición reparadora profunda que acompaña y amortigua la acción del retinoide."
      }
    ]
  }
};
