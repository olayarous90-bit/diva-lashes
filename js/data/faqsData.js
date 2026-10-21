/**
 * Base de datos de Preguntas Frecuentes, Protocolo de Seguridad y Mitos Cosméticos
 */
const FAQS_DATA = [
  {
    category: "Seguridad y Aplicación",
    items: [
      {
        q: "¿Qué es el 'Patch Test' o prueba del parche y por qué es imprescindible?",
        a: "El Patch Test consiste en aplicar una cantidad del tamaño de una lenteja del producto nuevo en una zona discreta de piel fina (como la cara interna del antebrazo o detrás del lóbulo de la oreja) y dejar actuar durante 24 a 48 horas sin lavar la zona. Si transcurrido ese tiempo no aparece enrojecimiento, picor, hinchazón ni ardor, el producto presenta buena tolerancia inicial antes de aplicarlo en el rostro."
      },
      {
        q: "¿Cuál es la diferencia real entre la 'Purga Cutánea' (Skin Purging) y una Reacción Alérgica?",
        a: "La purga solo ocurre con ingredientes activos que ACELERAN el recambio celular (como Retinol, Ácido Glicólico o Ácido Salicílico). Consiste en la salida acelerada de microcomedones que ya estaban formándose bajo la piel; ocurre exclusivamente en las zonas donde habitualmente tienes brotes y suele durar de 4 a 6 semanas. En cambio, una reacción alérgica o dermatitis por contacto produce granitos o urticaria en zonas donde NUNCA tienes brotes, acompañada de picor intenso, sensación de quemazón o descamación repentina. Ante una reacción alérgica, suspende el producto de inmediato."
      },
      {
        q: "¿En qué orden exacto debo aplicar mis productos faciales?",
        a: "La regla de oro cosmética es ordenar los productos de MENOR a MAYOR densidad (de textura más ligera y acuosa a la más densa y oleosa): 1º Limpiador, 2º Tónico o esencia, 3º Sérums acuosos (Ácido Hialurónico, Niacinamida), 4º Contorno de ojos, 5º Sérums densos o tratamientos activos, 6º Crema hidratante o loción selladora, 7º Aceite facial (opcional, siempre de noche), y 8º Protector solar (paso final e innegociable de cada mañana)."
      }
    ]
  },
  {
    category: "Protección Solar & Fotoprotección",
    items: [
      {
        q: "¿Es necesario usar protector solar si trabajo en interiores o el día está nublado?",
        a: "Sí. Mientras que los rayos UVB (causantes de quemaduras) son bloqueados en gran medida por cristales y nubes, la radiación UVA (responsable de la degradación del colágeno, manchas profundas y fotoenvejecimiento celular) atraviesa las nubes, los cristales de las ventanas y está presente con intensidad similar los 365 días del año. Además, la luz azul emitida por pantallas prolongadas puede contribuir a la hiperpigmentación en pieles propensas a melasma."
      },
      {
        q: "¿Cómo puedo reaplicar el protector solar a lo largo del día si llevo maquillaje?",
        a: "Existen tres métodos eficaces y cómodos: 1) Brumas o sprays faciales con SPF 50 específicos para fijar sobre maquillaje sin alterar la base; 2) Polvos traslúcidos minerales con SPF aplicados con brocha suave; o 3) Reaplicar protector solar fluido dando toquecitos suaves con una esponja de maquillaje humedecida tipo 'blender'."
      }
    ]
  },
  {
    category: "Mitos Cosméticos y Remedios Caseros Peligrosos",
    items: [
      {
        q: "¿Por qué NO se debe aplicar limón, bicarbonato ni pasta dental sobre los granitos?",
        a: "El limón tiene un pH ácido extremo (~2.0) y furanocumarinas que, al contacto con la luz del día, provocan fitofotodermatitis (quemaduras químicas y manchas oscuras indelebles). El bicarbonato de sodio posee un pH extremadamente alcalino (~9.0) que destruye el manto ácido protector de la piel (cuyo pH natural es 4.5-5.5), dejándola vulnerable a bacterias. La pasta dental contiene mentol, alcohol y detergentes que queman la epidermis superficial creando una costra que empeora la cicatriz del grano."
      },
      {
        q: "¿Se pueden 'cerrar' o 'abrir' los poros con agua fría o vapor caliente?",
        a: "Mito anatómico: Los poros no son músculos y no tienen fibras esfinterianas que les permitan abrirse o cerrarse a voluntad. El vapor caliente únicamente ablanda el sebo facilitando su remoción, y el agua fría produce una vasoconstricción temporal que genera una sensación momentánea de tersura. El tamaño óptico del poro está determinado genéticamente, pero puede verse mucho más pequeño y limpio manteniendo el conducto desobstruido con BHA (Ácido Salicílico) y manteniendo una buena elasticidad cutánea."
      }
    ]
  },
  {
    category: "Criterio Profesional Dermatológico",
    items: [
      {
        q: "¿Cuándo es indispensable acudir a la consulta de un médico dermatólogo?",
        a: "La cosmética aborda el embellecimiento, la hidratación y el cuidado preventivo. Debes consultar a un dermatólogo colegiado si presentas: acné quístico o nódulos dolorosos profundos; lunares que cambien de forma, color, bordes o tamaño (regla ABCDE); dermatitis persistente con descamación y sangrado; brotes repentinos de rosácea con pústulas; o sospecha de patologías cutáneas de origen hormonal o inmunológico."
      }
    ]
  }
];
