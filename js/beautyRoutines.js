/**
 * Controlador de la Sección "Rutinas de belleza" diva-lashe's
 * Permite alternar y consultar los pasos de cada rutina sin salir de la página.
 */

const BEAUTY_ROUTINES_DATA = {
  manana: {
    title: "Rutina Facial de Mañana",
    badge: "☀️ Protocolo Diurno • Protección & Luminosidad",
    tagline: "Pasos básicos para cuidar, preparar y proteger el rostro durante el día",
    image: "assets/images/rutina_manana.jpg",
    steps: [
      {
        number: "1",
        title: "Limpieza Suave",
        product: "Agua tibia o limpiador ligero no espumoso (pH 5.5)",
        desc: "Lava tu rostro al despertar con suavidad. Esto elimina el sudor, el exceso de sebo acumulado durante la noche y los restos de productos nocturnos sin agredir el manto hidrolipídico.",
        tip: "💡 Consejo seguro: Evita el agua muy caliente; el agua tibia respeta la barrera dérmica y evita rojeces."
      },
      {
        number: "2",
        title: "Hidratación",
        product: "Sérum humectante (Ácido Hialurónico) o loción fluida",
        desc: "Aplica tu hidratante sobre la piel todavía ligeramente húmeda. Ayuda a capturar el agua, conservando la elasticidad, tersura y frescura durante toda la jornada.",
        tip: "💡 Consejo seguro: Deja absorber 1 minuto antes del siguiente paso para evitar que se formen bolitas (pilling)."
      },
      {
        number: "3",
        title: "Protector Solar",
        product: "Fotoprotector de amplio espectro (SPF 30 o 50)",
        desc: "El paso más importante de cada mañana. Crea un escudo protector frente a la radiación solar UVA y UVB, previniendo manchas, asperezas y fotoenvejecimiento.",
        tip: "💡 Consejo seguro: Aplica la cantidad de dos dedos sobre rostro y cuello. Reaplica si estás al aire libre."
      }
    ],
    safeTips: [
      "Aplica los productos con toques suaves, sin frotar ni estirar la piel.",
      "Si tienes la piel muy seca, un aclarado con agua tibia por la mañana puede ser suficiente.",
      "Usa siempre protector solar, incluso en días nublados o si trabajas en interiores junto a ventanas."
    ]
  },
  noche: {
    title: "Rutina Facial de Noche",
    badge: "🌙 Protocolo Nocturno • Limpieza & Reparación",
    tagline: "Limpieza profunda e hidratación reparadora antes de dormir",
    image: "assets/images/rutina_noche.jpg",
    steps: [
      {
        number: "1",
        title: "Desmaquillado Respetuoso",
        product: "Aceite limpiador o bálsamo desmaquillante emulsionable",
        desc: "Aplica sobre rostro seco con las manos secas. Masajea suavemente en círculos para disolver bases, maquillaje resistente y filtros solares sin frotar con discos ásperos.",
        tip: "💡 Consejo seguro: En los ojos, deja actuar unos segundos el bálsamo para aflojar la máscara sin tirones."
      },
      {
        number: "2",
        title: "Limpieza Facial Acuosa",
        product: "Gel limpiador suave o espuma delicada de pH neutro",
        desc: "Segundo lavado con agua tibia para retirar cualquier impureza hidrosoluble y residuo oleoso. Deja los poros limpios y el rostro listo para recibir los activos reparadores.",
        tip: "💡 Consejo seguro: Seca con toques suaves usando una toalla de algodón limpia exclusiva para tu rostro."
      },
      {
        number: "3",
        title: "Crema Hidratante Reparadora",
        product: "Crema nutritiva rica en Ceramidas, Glicerina o Pantenol",
        desc: "Durante la noche la piel activa su regeneración celular. Una crema rica en lípidos sella la humedad y restaura el manto protector mientras descansas.",
        tip: "💡 Consejo seguro: Extiende una pequeña porción también en cuello y escote con movimientos ascendentes."
      }
    ],
    safeTips: [
      "Nunca te vayas a dormir con maquillaje; la acumulación de pigmentos y sebo congestiona los poros.",
      "Cambia la funda de tu almohada con regularidad para evitar la acumulación de bacterias.",
      "La noche es el momento de máxima reparación: dale a tu piel descanso y calma."
    ]
  },
  labios: {
    title: "Cuidado e Hidratación de Labios",
    badge: "💋 Zona Delicada • Nutrición & Protección Solar",
    tagline: "Hidratación diaria, bálsamos con ceramidas, protección solar y hábitos saludables",
    image: "assets/images/cuidado_labios.jpg",
    steps: [
      {
        number: "1",
        title: "Uso de Bálsamos Labiales Nutritivos",
        product: "Bálsamos con Manteca de Karité, Ceramidas, Escualano y Cera vegetal",
        desc: "La piel de los labios no tiene glándulas sebáceas propias. Aplicar un bálsamo emoliente crea la capa de protección que tus labios no pueden producir por sí mismos.",
        tip: "💡 Consejo seguro: Aplica una capa generosa antes de dormir a modo de mascarilla labial nocturna."
      },
      {
        number: "2",
        title: "Hidratación Diaria Constante",
        product: "Bálsamo hidratante de bolsillo",
        desc: "Reaplica tu bálsamo varias veces al día, especialmente después de beber agua, tras lavarte el rostro o al exponerte a aire acondicionado o calefacción.",
        tip: "💡 Consejo seguro: Bebe agua regularmente; la hidratación celular interna es vital para los labios."
      },
      {
        number: "3",
        title: "Protección Solar para los Labios",
        product: "Bálsamo labial con SPF 30 o SPF 50",
        desc: "El labio inferior recibe radiación solar directa perpendicular. El fotoprotector labial previene quemaduras, resequedad severa y manchas solares en el bermellón.",
        tip: "💡 Consejo seguro: Aplica protector labial antes de salir a la calle o durante actividades al aire libre."
      }
    ],
    consejosEvitarResecos: [
      "Aplica una capa gruesa de bálsamo antes de dormir para despertar con labios suaves y flexibles.",
      "Si tienes pielecitas secas, masajéalas suavemente con una toallita húmeda tibia tras la ducha; jamás tires de ellas en seco.",
      "Asegura una adecuada ingesta de agua diaria para mantener la turgencia desde el interior."
    ],
    habitosIrritantes: [
      "⚠️ Lamerse los labios constantemente: La saliva contiene enzimas digestivas ácidas que, al evaporarse, resecan aún más la piel y causan irritación.",
      "⚠️ Arrancar los pellejitos con los dientes o uñas: Provoca microdesgarros, sangrado y pequeñas heridas que pueden oscurecerse.",
      "⚠️ Usar labiales mate muy secantes sin hidratación previa: Aplica siempre bálsamo nutritivo unos minutos antes de usar labial.",
      "⚠️ Bálsamos con mentol, canela o fragancias fuertes: Aunque dan frescor inicial, suelen irritar la piel fina de los labios."
    ]
  }
};

/**
 * Inicializador interactivo
 */
function initBeautyRoutines() {
  const container = document.getElementById('rutinas-belleza-viewer');
  const buttons = document.querySelectorAll('.view-routine-btn');
  const modal = document.getElementById('routine-detail-modal');
  const modalContent = document.getElementById('routine-modal-body');
  const modalClose = document.getElementById('routine-modal-close');

  if (!container && !buttons.length) return;

  // Función para renderizar el contenido de una rutina
  function getRoutineHTML(key) {
    const data = BEAUTY_ROUTINES_DATA[key];
    if (!data) return '';

    let html = `
      <div class="card-luxury p-6 sm:p-10 border-gold bg-[#FCFAF8] shadow-md animate-fade-in">
        <!-- Cabecera de la Rutina -->
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#EFE6DC]">
          <div>
            <span class="badge-gold mb-2">${data.badge}</span>
            <h3 class="font-serif text-2xl sm:text-3xl text-[#2B2523] font-semibold">${data.title}</h3>
            <p class="text-xs sm:text-sm text-[#6B5F5B] mt-1">${data.tagline}</p>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <button type="button" class="switch-routine-btn px-3 py-1.5 rounded-full text-xs font-semibold ${key === 'manana' ? 'bg-[#2B2523] text-white' : 'bg-[#FAF6F0] text-[#6B5F5B] hover:bg-[#EFE6DC]'}" data-routine="manana">Mañana</button>
            <button type="button" class="switch-routine-btn px-3 py-1.5 rounded-full text-xs font-semibold ${key === 'noche' ? 'bg-[#2B2523] text-white' : 'bg-[#FAF6F0] text-[#6B5F5B] hover:bg-[#EFE6DC]'}" data-routine="noche">Noche</button>
            <button type="button" class="switch-routine-btn px-3 py-1.5 rounded-full text-xs font-semibold ${key === 'labios' ? 'bg-[#2B2523] text-white' : 'bg-[#FAF6F0] text-[#6B5F5B] hover:bg-[#EFE6DC]'}" data-routine="labios">Labios</button>
          </div>
        </div>

        <!-- Pasos Cronológicos -->
        <div class="space-y-4 my-8">
          ${data.steps.map(step => `
            <div class="p-5 rounded-2xl bg-white border border-[#EFE6DC] flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:border-[#C5A880] transition-colors">
              <div class="w-10 h-10 rounded-full bg-[#FAF6F0] border border-[#C5A880] text-[#9E7D53] font-serif font-bold text-lg flex items-center justify-center flex-shrink-0">
                ${step.number}
              </div>
              <div class="flex-grow">
                <div class="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h4 class="font-serif text-lg font-semibold text-[#2B2523]">${step.title}</h4>
                  <span class="text-[0.7rem] font-semibold px-2.5 py-0.5 rounded-full bg-[#FAF6F0] text-[#6B5F5B] border border-[#EFE6DC]">
                    ${step.product}
                  </span>
                </div>
                <p class="text-xs sm:text-sm text-[#6B5F5B] leading-relaxed mb-1.5">${step.desc}</p>
                <p class="text-[0.75rem] font-medium text-[#9E7D53]">${step.tip}</p>
              </div>
            </div>
          `).join('')}
        </div>
    `;

    // Si es labios, añadir bloques especiales de consejos y hábitos que irritan
    if (key === 'labios') {
      html += `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 pt-4 border-t border-[#EFE6DC]">
          <div class="p-5 rounded-2xl bg-[#EDF5F0] border border-[#4A7C59]/30">
            <h4 class="font-serif text-base font-semibold text-[#2C5237] mb-2 flex items-center gap-1.5">
              <span>✨</span> Consejos para Evitar Labios Resecos:
            </h4>
            <ul class="text-xs text-[#2C5237] space-y-2">
              ${data.consejosEvitarResecos.map(c => `<li>• ${c}</li>`).join('')}
            </ul>
          </div>

          <div class="p-5 rounded-2xl bg-[#FDF0ED] border border-[#C05646]/30">
            <h4 class="font-serif text-base font-semibold text-[#8C2C22] mb-2 flex items-center gap-1.5">
              <span>🛑</span> Hábitos que Pueden Irritar los Labios:
            </h4>
            <ul class="text-xs text-[#8C2C22] space-y-2">
              ${data.habitosIrritantes.map(h => `<li>${h}</li>`).join('')}
            </ul>
          </div>
        </div>
      `;
    } else {
      // Para mañana y noche, añadir consejos seguros
      html += `
        <div class="p-4 rounded-xl bg-[#FAF6F0] border border-[#EFE6DC] text-xs sm:text-sm text-[#2B2523]">
          <strong class="font-serif text-sm block mb-1.5 text-[#9E7D53]">Consejos seguros de diva-lashe's:</strong>
          <ul class="space-y-1 text-xs text-[#6B5F5B]">
            ${data.safeTips.map(tip => `<li>• ${tip}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    html += `
      </div>
    `;

    return html;
  }

  // Render inicial en el contenedor en la página (in-page viewer)
  if (container) {
    container.innerHTML = getRoutineHTML('manana');

    // Event delegation para cambiar pestañas
    container.addEventListener('click', (e) => {
      const btn = e.target.closest('.switch-routine-btn');
      if (btn) {
        const routineKey = btn.dataset.routine;
        container.innerHTML = getRoutineHTML(routineKey);
      }
    });
  }

  // Delegación de eventos para el modal (se asigna una sola vez)
  if (modalContent) {
    modalContent.addEventListener('click', (e) => {
      const btn = e.target.closest('.switch-routine-btn');
      if (btn) {
        const newKey = btn.dataset.routine;
        modalContent.innerHTML = getRoutineHTML(newKey);
      }
    });
  }

  // Botones "Ver rutina" de las tarjetas
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const routineKey = button.dataset.routine || 'manana';
      
      // Actualizar el visor en la página y desplazarse suavemente hacia él
      if (container) {
        container.innerHTML = getRoutineHTML(routineKey);
        container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      // Además, si existe el modal accesible, abrirlo para visualización inmediata
      if (modal && modalContent) {
        modalContent.innerHTML = getRoutineHTML(routineKey);
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

document.addEventListener('DOMContentLoaded', initBeautyRoutines);
