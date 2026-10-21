/**
 * Controlador de la Línea de Tiempo Interactiva de Rutinas (Mañana / Noche)
 */
class RoutineTimeline {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.currentSkin = "mixta";
    this.currentMode = "morning"; // 'morning' | 'night'
    this.init();
  }

  init() {
    this.render();
  }

  render() {
    const routine = ROUTINES_DATA[this.currentSkin] || ROUTINES_DATA.mixta;
    const steps = this.currentMode === 'morning' ? routine.morning : routine.night;

    const skins = [
      { key: "mixta", label: "Piel Mixta" },
      { key: "grasa", label: "Piel Grasa" },
      { key: "seca", label: "Piel Seca" },
      { key: "sensible", label: "Piel Sensible" },
      { key: "madura", label: "Piel Madura" }
    ];

    this.container.innerHTML = `
      <div class="space-y-8">
        <!-- Selector de Tipo de Piel -->
        <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          ${skins.map(s => `
            <button type="button" 
              class="skin-selector-btn px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${s.key === this.currentSkin ? 'bg-[#2B2523] text-white shadow-sm' : 'bg-[#F7F3EE] text-[#6B5F5B] hover:bg-[#EFE8DE]'}"
              data-skin="${s.key}">
              ${s.label}
            </button>
          `).join('')}
        </div>

        <!-- Cabecera de la Rutina Seleccionada -->
        <div class="card-cream p-6 text-center max-w-2xl mx-auto border-gold">
          <span class="badge-gold mb-2">Protocolo Recomendado</span>
          <h3 class="font-serif text-2xl sm:text-3xl text-[#2B2523] font-medium mb-1">
            ${routine.name}
          </h3>
          <p class="text-xs sm:text-sm text-[#6B5F5B]">
            ${routine.tagline}
          </p>

          <!-- Toggle Mañana / Noche -->
          <div class="inline-flex p-1.5 rounded-full bg-[#EFE8DE] mt-6 border border-[#E5DDD3]">
            <button type="button" id="timeline-morning-toggle" 
              class="px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${this.currentMode === 'morning' ? 'bg-[#FCFAF8] text-[#2B2523] shadow-sm' : 'text-[#6B5F5B] hover:text-[#2B2523]'}">
              ☀️ Mañana (${routine.morning.length} pasos)
            </button>
            <button type="button" id="timeline-night-toggle" 
              class="px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${this.currentMode === 'night' ? 'bg-[#FCFAF8] text-[#2B2523] shadow-sm' : 'text-[#6B5F5B] hover:text-[#2B2523]'}">
              🌙 Noche (${routine.night.length} pasos)
            </button>
          </div>
        </div>

        <!-- Línea de Pasos Conectados -->
        <div class="max-w-3xl mx-auto space-y-4">
          ${steps.map((st, i) => `
            <div class="card-luxury p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 border-soft hover:border-gold transition-all">
              <div class="step-number flex-shrink-0">
                ${st.step}
              </div>
              <div class="flex-grow">
                <div class="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <h4 class="font-serif text-lg font-semibold text-[#2B2523]">${st.title}</h4>
                  <span class="text-xs font-semibold px-3 py-1 rounded-full bg-[#EFE8DE] text-[#6B5F5B] border border-[#E5DDD3]">
                    ${st.product}
                  </span>
                </div>
                <p class="text-xs sm:text-sm text-[#6B5F5B] leading-relaxed">
                  ${st.desc}
                </p>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Banner de la Regla de Densidad -->
        <div class="max-w-3xl mx-auto p-4 rounded-2xl bg-[#FCFAF8] border border-[#C5A880]/40 flex items-center gap-3 text-xs sm:text-sm text-[#6B5F5B]">
          <span class="text-xl">🧴</span>
          <div>
            <strong class="text-[#2B2523]">La Regla de Oro de las Densidades:</strong> Aplica siempre tus fórmulas de más líquida a más densa (Agua $\\rightarrow$ Gel $\\rightarrow$ Loción $\\rightarrow$ Crema $\\rightarrow$ Aceite $\\rightarrow$ Protector Solar de día).
          </div>
        </div>
      </div>
    `;

    this.attachEvents();
  }

  attachEvents() {
    const skinBtns = this.container.querySelectorAll('.skin-selector-btn');
    skinBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.currentSkin = btn.dataset.skin;
        this.render();
      });
    });

    const morningToggle = this.container.querySelector('#timeline-morning-toggle');
    const nightToggle = this.container.querySelector('#timeline-night-toggle');

    if (morningToggle && nightToggle) {
      morningToggle.addEventListener('click', () => {
        this.currentMode = 'morning';
        this.render();
      });

      nightToggle.addEventListener('click', () => {
        this.currentMode = 'night';
        this.render();
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('routine-timeline-container')) {
    new RoutineTimeline('routine-timeline-container');
  }
});
