/**
 * Verificador Interactivo de Compatibilidad de Activos Cosméticos
 */
class CompatibilityChecker {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.activeA = "retinol";
    this.activeB = "niacinamida";
    this.init();
  }

  init() {
    this.render();
  }

  render() {
    const activeList = [
      { id: "retinol", name: "Retinol y Retinoides" },
      { id: "vitamina-c", name: "Vitamina C (Ácido L-Ascórbico)" },
      { id: "niacinamida", name: "Niacinamida (Vitamina B3)" },
      { id: "acido-salicilico", name: "Ácido Salicílico (BHA)" },
      { id: "acido-glicolico", name: "Ácido Glicólico (AHA)" },
      { id: "acido-hialuronico", name: "Ácido Hialurónico" },
      { id: "ceramidas", name: "Ceramidas" },
      { id: "centella-asiatica", name: "Centella Asiática (Cica)" }
    ];

    this.container.innerHTML = `
      <div class="card-luxury p-6 sm:p-8 border-gold">
        <div class="flex items-center gap-2 mb-2">
          <span class="badge-gold">✦ Herramienta de Seguridad</span>
        </div>
        <h3 class="font-serif text-2xl sm:text-3xl text-[#2B2523] mb-2">
          Verificador de Compatibilidad de Activos
        </h3>
        <p class="text-sm text-[#6B5F5B] mb-6">
          Comprueba si dos ingredientes cosméticos se pueden combinar en la misma rutina o si es mejor separarlos entre día y noche para proteger tu barrera cutánea.
        </p>

        <!-- Selectores duales -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div class="bg-[#FCFAF8] p-4 rounded-xl border border-[#E5DDD3]">
            <label for="select-active-a" class="block text-xs font-semibold uppercase tracking-wider text-[#6B5F5B] mb-2">
              Primer Ingrediente Activo:
            </label>
            <select id="select-active-a" class="w-full bg-white border border-[#E5DDD3] rounded-lg p-3 text-sm font-medium text-[#2B2523] focus:border-[#C5A880] focus:outline-none">
              ${activeList.map(item => `
                <option value="${item.id}" ${item.id === this.activeA ? 'selected' : ''}>
                  ${item.name}
                </option>
              `).join('')}
            </select>
          </div>

          <div class="bg-[#FCFAF8] p-4 rounded-xl border border-[#E5DDD3]">
            <label for="select-active-b" class="block text-xs font-semibold uppercase tracking-wider text-[#6B5F5B] mb-2">
              Segundo Ingrediente Activo:
            </label>
            <select id="select-active-b" class="w-full bg-white border border-[#E5DDD3] rounded-lg p-3 text-sm font-medium text-[#2B2523] focus:border-[#C5A880] focus:outline-none">
              ${activeList.map(item => `
                <option value="${item.id}" ${item.id === this.activeB ? 'selected' : ''}>
                  ${item.name}
                </option>
              `).join('')}
            </select>
          </div>
        </div>

        <!-- Presets rápidos -->
        <div class="flex flex-wrap items-center gap-2 mb-6 text-xs">
          <span class="text-[#8F827D] font-medium">Combinaciones frecuentes:</span>
          <button type="button" class="preset-btn px-3 py-1 rounded-full bg-[#EFE8DE] hover:bg-[#E5DDD3] text-[#2B2523] font-medium transition-colors" data-a="retinol" data-b="niacinamida">
            Retinol + Niacinamida
          </button>
          <button type="button" class="preset-btn px-3 py-1 rounded-full bg-[#EFE8DE] hover:bg-[#E5DDD3] text-[#2B2523] font-medium transition-colors" data-a="retinol" data-b="vitamina-c">
            Retinol + Vitamina C
          </button>
          <button type="button" class="preset-btn px-3 py-1 rounded-full bg-[#EFE8DE] hover:bg-[#E5DDD3] text-[#2B2523] font-medium transition-colors" data-a="acido-salicilico" data-b="niacinamida">
            BHA + Niacinamida
          </button>
        </div>

        <!-- Panel de Resultado -->
        <div id="compatibility-result" class="transition-all duration-300">
          ${this.getCompatibilityHTML()}
        </div>
      </div>
    `;

    this.attachEvents();
  }

  attachEvents() {
    const selA = this.container.querySelector('#select-active-a');
    const selB = this.container.querySelector('#select-active-b');
    const resultBox = this.container.querySelector('#compatibility-result');

    const update = () => {
      this.activeA = selA.value;
      this.activeB = selB.value;
      resultBox.innerHTML = this.getCompatibilityHTML();
    };

    selA.addEventListener('change', update);
    selB.addEventListener('change', update);

    const presetBtns = this.container.querySelectorAll('.preset-btn');
    presetBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        selA.value = btn.dataset.a;
        selB.value = btn.dataset.b;
        update();
      });
    });
  }

  getCompatibilityHTML() {
    if (this.activeA === this.activeB) {
      return `
        <div class="callout-warning flex items-start gap-3">
          <span class="text-xl">ℹ️</span>
          <div>
            <strong class="font-semibold block text-sm">Has seleccionado el mismo activo dos veces</strong>
            <p class="text-xs sm:text-sm mt-1">No dupliques el mismo ingrediente en la misma rutina, ya que aumentas la posibilidad de saturación cutánea o irritación innecesaria sin mejorar los resultados cosméticos.</p>
          </div>
        </div>
      `;
    }

    const key1 = `${this.activeA}+${this.activeB}`;
    const key2 = `${this.activeB}+${this.activeA}`;

    const rule = COMPATIBILITY_RULES[key1] || COMPATIBILITY_RULES[key2];

    if (rule) {
      if (rule.status === 'safe') {
        return `
          <div class="callout-safe flex items-start gap-3">
            <span class="text-2xl">🟢</span>
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-[#4A7C59]">Combinación Segura & Sinergia</span>
              <h4 class="font-serif text-lg font-semibold text-[#2B2523] mt-0.5 mb-1">${rule.title}</h4>
              <p class="text-xs sm:text-sm text-[#4A3E3D] mb-2 leading-relaxed">${rule.explanation}</p>
              <div class="p-2.5 rounded-lg bg-white/70 text-xs text-[#2B2523] font-medium border border-[#4A7C59]/20">
                <strong>💡 Cómo aplicarlos:</strong> ${rule.recommendation}
              </div>
            </div>
          </div>
        `;
      } else if (rule.status === 'warn') {
        return `
          <div class="callout-warning flex items-start gap-3">
            <span class="text-2xl">🟡</span>
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-[#C88338]">Usar con Precaución o Alternar</span>
              <h4 class="font-serif text-lg font-semibold text-[#2B2523] mt-0.5 mb-1">${rule.title}</h4>
              <p class="text-xs sm:text-sm text-[#7A4B1A] mb-2 leading-relaxed">${rule.explanation}</p>
              <div class="p-2.5 rounded-lg bg-white/70 text-xs text-[#2B2523] font-medium border border-[#C88338]/20">
                <strong>💡 Recomendación:</strong> ${rule.recommendation}
              </div>
            </div>
          </div>
        `;
      } else {
        return `
          <div class="callout-danger flex items-start gap-3">
            <span class="text-2xl">🔴</span>
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-[#C05646]">No mezclar juntos en la misma rutina</span>
              <h4 class="font-serif text-lg font-semibold text-[#2B2523] mt-0.5 mb-1">${rule.title}</h4>
              <p class="text-xs sm:text-sm text-[#8C2C22] mb-2 leading-relaxed">${rule.explanation}</p>
              <div class="p-2.5 rounded-lg bg-white/70 text-xs text-[#2B2523] font-medium border border-[#C05646]/20">
                <strong>💡 Alternativa Segura:</strong> ${rule.recommendation}
              </div>
            </div>
          </div>
        `;
      }
    }

    // Regla por defecto para combinaciones neutras/reparadoras
    return `
      <div class="callout-safe flex items-start gap-3">
        <span class="text-2xl">🟢</span>
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-[#4A7C59]">Combinación Neutra y Compatible</span>
          <h4 class="font-serif text-lg font-semibold text-[#2B2523] mt-0.5 mb-1">Sin incompatibilidades conocidas reportadas</h4>
          <p class="text-xs sm:text-sm text-[#4A3E3D] mb-2 leading-relaxed">
            Estos dos ingredientes pueden convivir en la misma rutina o alternarse sin riesgo de interferencia química desfavorable, siempre que tu barrera cutánea esté sana y toleres cada uno individualmente.
          </p>
          <div class="p-2.5 rounded-lg bg-white/70 text-xs text-[#2B2523] font-medium border border-[#4A7C59]/20">
            <strong>💡 Recuerda:</strong> Aplica de textura más ligera a más densa y finaliza siempre con protección solar de día.
          </div>
        </div>
      </div>
    `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('compatibility-checker-container')) {
    new CompatibilityChecker('compatibility-checker-container');
  }
});
