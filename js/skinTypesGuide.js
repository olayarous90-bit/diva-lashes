/**
 * Controlador de la Sección "Conoce tu piel" - diva-lashe's
 * Muestra recomendaciones básicas de cuidado para cada tipo de piel sin salir de la página.
 */

const SKIN_TYPES_GUIDE_DATA = {
  seca: {
    title: "Piel Seca",
    badge: "💧 Falta de Lípidos • Confort & Nutrición",
    image: "assets/images/piel_seca.jpg",
    shortDesc: "Tiende a sentirse tirante, áspera o con falta de luminosidad debido a una menor producción de grasa protectora natural.",
    characteristics: "Poros casi imperceptibles, sensación de tensión tras lavar la cara, textura apagada o descamación fina en épocas de frío.",
    recommendations: [
      {
        icon: "🫧",
        title: "Limpieza Confortable",
        desc: "Usa leches o bálsamos limpiadores que no hagan espuma agresiva. Evita geles astringentes y lávate siempre con agua tibia, jamás caliente."
      },
      {
        icon: "💧",
        title: "Hidratación en Capas Húmedas",
        desc: "Aplica tu sérum de Ácido Hialurónico sobre la piel aún ligeramente humedecida con tónico o bruma para capturar y retener el agua."
      },
      {
        icon: "🛡️",
        title: "Cremas Ricas y Nutritivas",
        desc: "Elige cremas con Ceramidas, Escualano o Manteca de Karité para sellar la hidratación y reponer los lípidos que tu piel no produce por sí sola."
      },
      {
        icon: "☀️",
        title: "Protector Solar Hidratante",
        desc: "Prefiere fotoprotectores con acabado jugoso y emoliente (SPF 30 o 50) para proteger y nutrir al mismo tiempo durante el día."
      }
    ],
    safeTips: [
      "Evita exfoliantes físicos con gránulos duros que puedan agrietar la piel.",
      "Aplica una capa adicional de crema antes de dormir para despertar con el rostro aterciopelado.",
      "Bebe suficiente agua a lo largo del día para apoyar la hidratación interna."
    ]
  },
  grasa: {
    title: "Piel Grasa",
    badge: "✨ Seborregulación • Frescura & Poros Limpios",
    image: "assets/images/piel_grasa.jpg",
    shortDesc: "Produce mayor cantidad de sebo, lo que genera brillos frecuentes a lo largo del día y tendencia a poros visibles.",
    characteristics: "Brillo generalizado (frente, nariz, mejillas), poros más dilatados y mayor propensión a puntos negros o brotes comedonianos.",
    recommendations: [
      {
        icon: "🫧",
        title: "Limpieza Purificante Equilibrada",
        desc: "Usa un gel limpiador suave de pH 5.5 mañana y noche. Evita jabones muy fuertes que resequen, pues provocarán un 'efecto rebote' de más grasa."
      },
      {
        icon: "🌿",
        title: "Sérums Ligeros de Niacinamida",
        desc: "La Niacinamida al 2%-5% ayuda a calmar, regular la producción sebácea y mejorar el aspecto de la textura sin resecar."
      },
      {
        icon: "💧",
        title: "Hidratantes en Gel 'Oil-Free'",
        desc: "La piel grasa necesita agua, no aceites pesados. Las lociones al agua o geles con ácido hialurónico aportan hidratación ligera y fresca."
      },
      {
        icon: "☀️",
        title: "Protección Solar Toque Seco",
        desc: "Utiliza fotoprotectores fluidos matificantes que no dejen residuo pegajoso ni taponen los poros durante tus actividades."
      }
    ],
    safeTips: [
      "No laves tu rostro más de dos veces al día para no dañar la barrera protectora.",
      "Nunca aprietes granitos ni puntos negros con las uñas para evitar marcas y cicatrices.",
      "Una exfoliación química suave semanal con BHA (ácido salicílico) ayuda a mantener los poros limpios."
    ]
  },
  mixta: {
    title: "Piel Mixta",
    badge: "⚖️ Equilibrio • Zona T & Mejillas",
    image: "assets/images/piel_mixta.jpg",
    shortDesc: "Presenta brillos o poros visibles en la Zona T (frente, nariz y mentón), mientras las mejillas permanecen normales o tirantes.",
    characteristics: "La condición más común: requiere un balance inteligente para matificar la zona central sin deshidratar los laterales del rostro.",
    recommendations: [
      {
        icon: "🫧",
        title: "Limpiador Suave Universal",
        desc: "Un gel neutro o agua micelar aclarada que limpie eficazmente la zona T sin dejar tirantez en las mejillas."
      },
      {
        icon: "💧",
        title: "Hidratación Equilibrada",
        desc: "Aplica fluidos ligeros en todo el rostro y añade una pequeña cantidad extra de crema hidratante en las mejillas si notas sequedad."
      },
      {
        icon: "🎯",
        title: "Cuidado Zonificado",
        desc: "Aplica productos purificantes o mascarillas de arcilla únicamente sobre la nariz y frente, respetando las mejillas."
      },
      {
        icon: "☀️",
        title: "Fotoprotección Fluida",
        desc: "Un protector solar ligero de acabado natural que no engrase la zona T ni acentúe líneas en las mejillas."
      }
    ],
    safeTips: [
      "No uses productos astringentes agresivos en todo el rostro: resecarán tus mejillas.",
      "El Ácido Hialurónico y la Niacinamida son los mejores aliados para equilibrar ambas zonas.",
      "Ajusta tu crema según la estación (más ligera en verano, más nutritiva en invierno)."
    ]
  },
  sensible: {
    title: "Piel Sensible y Reactiva",
    badge: "🌸 Delicadeza • Calma & Refuerzo de Barrera",
    image: "assets/images/piel_sensible.jpg",
    shortDesc: "Reacciona con facilidad al frío, cambios de cosméticos o fricción, manifestando enrojecimiento, ardor o sensación de calor.",
    characteristics: "Barrera cutánea más fina y permeable; suele experimentar picor, tirantez inmediata y poca tolerancia a perfumes artificiales.",
    recommendations: [
      {
        icon: "🫧",
        title: "Limpieza Mínima y Delicada",
        desc: "Usa lociones limpiadoras sin fragancia ni alcohol. Si tu piel está muy reactiva por la mañana, un enjuague con agua tibia es suficiente."
      },
      {
        icon: "🌿",
        title: "Ingredientes Calmantes (Cica y Pantenol)",
        desc: "La Centella Asiática, el Madecassoside y la Provitamina B5 desinflaman, alivian el ardor y ayudan a reconstituir el tejido dérmico."
      },
      {
        icon: "🛡️",
        title: "Cremas Hipoalergénicas con Ceramidas",
        desc: "Fórmulas cortas y limpias que refuercen la barrera lipídica para impedir que agentes externos causen irritación."
      },
      {
        icon: "☀️",
        title: "Protección Solar Mineral (Física)",
        desc: "Los filtros minerales con Óxido de Zinc reflejan la luz sin generar calor en la piel, siendo los mejor tolerados."
      }
    ],
    safeTips: [
      "Realiza siempre una prueba de parche (patch test) en el antebrazo 24 horas antes de usar un producto nuevo.",
      "Evita frotar con toallas ásperas; seca dando toques sumamente delicados.",
      "Evita cosméticos con perfumes sintéticos intensos, aceites esenciales cítricos o exfoliantes agresivos."
    ]
  },
  normal: {
    title: "Piel Normal (Equilibrada)",
    badge: "✨ Armonía Natural • Mantenimiento & Prevención",
    image: "assets/images/piel_normal.jpg",
    shortDesc: "Goza de un balance natural adecuado entre grasa y agua; es elástica, suave y no tiende a extremos de brillo ni sequedad.",
    characteristics: "Tono uniforme, poros finos y buena tolerancia general a los cosméticos. El objetivo principal es mantener su salud y protegerla.",
    recommendations: [
      {
        icon: "🫧",
        title: "Limpieza Diaria Neutra",
        desc: "Un gel o espuma suave mañana y noche para retirar partículas ambientales y mantener los poros limpios sin alterar su balance."
      },
      {
        icon: "💧",
        title: "Hidratación Ligera Diaria",
        desc: "Una crema hidratante de textura sedosa con Ácido Hialurónico y antioxidantes para conservar la jugosidad natural."
      },
      {
        icon: "🍊",
        title: "Antioxidantes (Vitamina C)",
        desc: "Un sérum de Vitamina C por la mañana ayuda a potenciar la luminosidad y proteger las células de la oxidación solar."
      },
      {
        icon: "☀️",
        title: "Protector Solar Constante",
        desc: "Fotoprotector diario SPF 30 o 50 para prevenir manchas y conservar la elasticidad natural a lo largo de los años."
      }
    ],
    safeTips: [
      "La constancia es la clave: no satures tu piel con productos innecesarios si está sana y equilibrada.",
      "Mantén hábitos saludables de sueño, buena alimentación e hidratación con agua.",
      "No olvides extender tu hidratante y protector solar hasta el cuello y escote."
    ]
  }
};

/**
 * Inicializador de la sección "Conoce tu piel"
 */
function initSkinTypesGuide() {
  const container = document.getElementById('conoce-tu-piel-viewer');
  const buttons = document.querySelectorAll('.view-skin-tips-btn');
  const modal = document.getElementById('skin-tips-modal');
  const modalContent = document.getElementById('skin-tips-modal-body');
  const modalClose = document.getElementById('skin-tips-modal-close');

  if (!container && !buttons.length) return;

  function getSkinTypeHTML(key) {
    const data = SKIN_TYPES_GUIDE_DATA[key];
    if (!data) return '';

    return `
      <div class="card-luxury p-6 sm:p-10 border-gold bg-[#FCFAF8] shadow-md animate-fade-in">
        <!-- Cabecera -->
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#EFE6DC]">
          <div>
            <span class="badge-gold mb-2">${data.badge}</span>
            <h3 class="font-serif text-2xl sm:text-3xl text-[#2B2523] font-semibold">${data.title}</h3>
            <p class="text-xs sm:text-sm text-[#6B5F5B] mt-1">${data.shortDesc}</p>
          </div>
          <!-- Selector rápido entre tipos de piel -->
          <div class="flex flex-wrap items-center gap-1.5 text-xs">
            <button type="button" class="switch-skin-btn px-3 py-1.5 rounded-full font-semibold ${key === 'seca' ? 'bg-[#2B2523] text-white' : 'bg-[#FAF6F0] text-[#6B5F5B] hover:bg-[#EFE6DC]'}" data-skin="seca">Seca</button>
            <button type="button" class="switch-skin-btn px-3 py-1.5 rounded-full font-semibold ${key === 'grasa' ? 'bg-[#2B2523] text-white' : 'bg-[#FAF6F0] text-[#6B5F5B] hover:bg-[#EFE6DC]'}" data-skin="grasa">Grasa</button>
            <button type="button" class="switch-skin-btn px-3 py-1.5 rounded-full font-semibold ${key === 'mixta' ? 'bg-[#2B2523] text-white' : 'bg-[#FAF6F0] text-[#6B5F5B] hover:bg-[#EFE6DC]'}" data-skin="mixta">Mixta</button>
            <button type="button" class="switch-skin-btn px-3 py-1.5 rounded-full font-semibold ${key === 'sensible' ? 'bg-[#2B2523] text-white' : 'bg-[#FAF6F0] text-[#6B5F5B] hover:bg-[#EFE6DC]'}" data-skin="sensible">Sensible</button>
            <button type="button" class="switch-skin-btn px-3 py-1.5 rounded-full font-semibold ${key === 'normal' ? 'bg-[#2B2523] text-white' : 'bg-[#FAF6F0] text-[#6B5F5B] hover:bg-[#EFE6DC]'}" data-skin="normal">Normal</button>
          </div>
        </div>

        <!-- Características destacadas -->
        <div class="p-4 rounded-xl bg-[#FAF6F0] border border-[#EFE6DC] my-6 text-xs sm:text-sm text-[#2B2523]">
          <strong class="text-[#9E7D53]">Cómo reconocerla:</strong> ${data.characteristics}
        </div>

        <!-- 4 Recomendaciones básicas de cuidado -->
        <h4 class="font-serif text-lg font-semibold text-[#2B2523] mb-4">Recomendaciones básicas de cuidado:</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          ${data.recommendations.map(rec => `
            <div class="p-4 rounded-2xl bg-white border border-[#EFE6DC] flex items-start gap-3.5 hover:border-[#C5A880] transition-colors">
              <span class="text-2xl flex-shrink-0">${rec.icon}</span>
              <div>
                <h5 class="font-serif text-base font-semibold text-[#2B2523] mb-1">${rec.title}</h5>
                <p class="text-xs text-[#6B5F5B] leading-relaxed">${rec.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Consejos seguros de diva-lashe's -->
        <div class="p-5 rounded-2xl bg-[#EDF5F0] border border-[#4A7C59]/30 text-xs sm:text-sm text-[#2C5237]">
          <strong class="font-serif text-sm block mb-1.5 text-[#2C5237]">Consejos seguros para cuidar tu piel:</strong>
          <ul class="space-y-1.5 text-xs text-[#2C5237]">
            ${data.safeTips.map(tip => `<li>• ${tip}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  }

  // Render inicial en el visor embebido
  if (container) {
    container.innerHTML = getSkinTypeHTML('seca');

    container.addEventListener('click', (e) => {
      const btn = e.target.closest('.switch-skin-btn');
      if (btn) {
        const skinKey = btn.dataset.skin;
        container.innerHTML = getSkinTypeHTML(skinKey);
      }
    });
  }

  // Delegación de eventos para el modal (se asigna una sola vez)
  if (modalContent) {
    modalContent.addEventListener('click', (e) => {
      const switchBtn = e.target.closest('.switch-skin-btn');
      if (switchBtn) {
        const newKey = switchBtn.dataset.skin;
        modalContent.innerHTML = getSkinTypeHTML(newKey);
      }
    });
  }

  // Botones "Ver consejos" en las tarjetas
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const skinKey = btn.dataset.skin || 'seca';

      // 1. Actualizar el visor embebido y deslizar suavemente hacia él
      if (container) {
        container.innerHTML = getSkinTypeHTML(skinKey);
        container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      // 2. Abrir el modal interactivo para lectura inmediata
      if (modal && modalContent) {
        modalContent.innerHTML = getSkinTypeHTML(skinKey);
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Cerrar modal
  if (modalClose && modal) {
    modalClose.addEventListener('click', () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = '';
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = '';
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = '';
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', initSkinTypesGuide);
