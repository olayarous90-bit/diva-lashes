/**
 * Controlador del Skin Routine Quiz Interactivo
 */
class SkinQuiz {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentStep = 0;
    this.answers = [];
    this.scores = {
      seca: 0,
      grasa: 0,
      mixta: 0,
      sensible: 0,
      madura: 0
    };

    if (this.container) {
      this.init();
    }
  }

  init() {
    this.renderQuestion();
  }

  renderQuestion() {
    if (!this.container) return;

    const q = QUIZ_QUESTIONS[this.currentStep];
    const totalSteps = QUIZ_QUESTIONS.length;
    const progressPercent = Math.round(((this.currentStep + 1) / totalSteps) * 100);

    this.container.innerHTML = `
      <div class="card-luxury p-6 sm:p-10 max-w-2xl mx-auto border-gold shadow-lg">
        <!-- Barra de Progreso Superior -->
        <div class="mb-8">
          <div class="flex justify-between items-center text-xs uppercase tracking-wider font-semibold text-secondary mb-2">
            <span class="text-gold-gradient font-bold">Diagnóstico de Piel</span>
            <span>Paso ${this.currentStep + 1} de ${totalSteps}</span>
          </div>
          <div class="w-full bg-[#EFE8DE] h-2 rounded-full overflow-hidden">
            <div class="bg-gradient-to-r from-[#C5A880] to-[#9E7D53] h-full transition-all duration-400 ease-out" style="width: ${progressPercent}%"></div>
          </div>
        </div>

        <!-- Pregunta -->
        <h3 class="font-serif text-2xl sm:text-3xl text-[#2B2523] mb-6 leading-tight">
          ${q.question}
        </h3>

        <!-- Opciones -->
        <div class="space-y-3 mb-8">
          ${q.options.map((opt, idx) => `
            <button type="button" 
              class="quiz-option-btn w-full text-left p-4 sm:p-5 rounded-2xl border border-[#E5DDD3] bg-[#FCFAF8] hover:bg-[#F7F3EE] hover:border-[#C5A880] transition-all flex items-start gap-4 group focus:outline-none focus:border-[#9E7D53]"
              data-value="${opt.value}"
              data-index="${idx}">
              <span class="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200">${opt.icon}</span>
              <span class="text-sm sm:text-base text-[#2B2523] font-medium leading-relaxed">${opt.text}</span>
            </button>
          `).join('')}
        </div>

        <!-- Navegación Inferior -->
        <div class="flex justify-between items-center pt-4 border-t border-[#E5DDD3]">
          ${this.currentStep > 0 ? `
            <button type="button" id="quiz-prev-btn" class="text-sm font-semibold text-secondary hover:text-primary transition-colors flex items-center gap-1.5">
              ← Pregunta anterior
            </button>
          ` : `<span></span>`}
          <span class="text-xs text-muted">Tus respuestas no se comparten con terceros</span>
        </div>
      </div>
    `;

    // Event listeners para las opciones
    const optionButtons = this.container.querySelectorAll('.quiz-option-btn');
    optionButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const val = btn.dataset.value;
        this.handleSelect(val);
      });
    });

    const prevBtn = this.container.querySelector('#quiz-prev-btn');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (this.currentStep > 0) {
          const lastVal = this.answers.pop();
          if (lastVal && this.scores[lastVal]) {
            this.scores[lastVal]--;
          }
          this.currentStep--;
          this.renderQuestion();
        }
      });
    }
  }

  handleSelect(value) {
    this.answers.push(value);
    this.scores[value] = (this.scores[value] || 0) + 1;

    if (this.currentStep < QUIZ_QUESTIONS.length - 1) {
      this.currentStep++;
      this.renderQuestion();
    } else {
      this.renderResults();
    }
  }

  calculateSkinType() {
    let topType = "mixta";
    let maxScore = -1;

    for (const [type, score] of Object.entries(this.scores)) {
      if (score > maxScore) {
        maxScore = score;
        topType = type;
      }
    }
    return topType;
  }

  renderResults() {
    const skinTypeKey = this.calculateSkinType();
    const routine = ROUTINES_DATA[skinTypeKey] || ROUTINES_DATA.mixta;

    this.container.innerHTML = `
      <div class="card-luxury p-6 sm:p-10 max-w-3xl mx-auto border-gold shadow-lg animate-fade-in">
        <div class="text-center mb-8">
          <span class="badge-gold mb-3">✦ Diagnóstico Personalizado Listo</span>
          <h3 class="font-serif text-3xl sm:text-4xl text-[#2B2523] mb-3">
            Tu perfil predominante es: <span class="text-gold-gradient">${routine.name}</span>
          </h3>
          <p class="text-[#6B5F5B] max-w-xl mx-auto text-sm sm:text-base">
            ${routine.tagline}. ${routine.characteristics}
          </p>
        </div>

        <!-- Selector de Pestañas Rutina Mañana / Noche -->
        <div class="flex justify-center gap-3 mb-8">
          <button id="quiz-tab-morning" class="px-5 py-2.5 rounded-full text-sm font-semibold transition-all bg-[#2B2523] text-white shadow-sm flex items-center gap-2">
            ☀️ Rutina de Mañana (${routine.morning.length} pasos)
          </button>
          <button id="quiz-tab-night" class="px-5 py-2.5 rounded-full text-sm font-semibold transition-all bg-[#FCFAF8] text-[#2B2523] border border-[#E5DDD3] hover:border-[#C5A880] flex items-center gap-2">
            🌙 Rutina de Noche (${routine.night.length} pasos)
          </button>
        </div>

        <!-- Contenedor Dinámico de Pasos -->
        <div id="quiz-steps-container" class="space-y-4 mb-8">
          ${this.getStepsHTML(routine.morning, 'morning')}
        </div>

        <!-- Advertencia Cosmética Responsable -->
        <div class="callout-warning text-xs sm:text-sm mb-8 flex items-start gap-3">
          <span class="text-lg">⚠️</span>
          <div>
            <strong>Recomendación responsable:</strong> Introduce productos nuevos de uno en uno, realizando previamente un <em>patch test</em> en el antebrazo. Usa fotoprotector solar cada mañana.
          </div>
        </div>

        <!-- Acciones: Copiar y Reiniciar -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-[#E5DDD3]">
          <button id="copy-routine-btn" class="btn-gold w-full sm:w-auto">
            📋 Copiar Rutina a mis Notas
          </button>
          <button id="restart-quiz-btn" class="btn-outline w-full sm:w-auto">
            🔄 Reiniciar Diagnóstico
          </button>
        </div>
      </div>
    `;

    // Interacciones de las pestañas
    const morningBtn = this.container.querySelector('#quiz-tab-morning');
    const nightBtn = this.container.querySelector('#quiz-tab-night');
    const stepsContainer = this.container.querySelector('#quiz-steps-container');

    morningBtn.addEventListener('click', () => {
      morningBtn.className = "px-5 py-2.5 rounded-full text-sm font-semibold transition-all bg-[#2B2523] text-white shadow-sm flex items-center gap-2";
      nightBtn.className = "px-5 py-2.5 rounded-full text-sm font-semibold transition-all bg-[#FCFAF8] text-[#2B2523] border border-[#E5DDD3] hover:border-[#C5A880] flex items-center gap-2";
      stepsContainer.innerHTML = this.getStepsHTML(routine.morning, 'morning');
    });

    nightBtn.addEventListener('click', () => {
      nightBtn.className = "px-5 py-2.5 rounded-full text-sm font-semibold transition-all bg-[#2B2523] text-white shadow-sm flex items-center gap-2";
      morningBtn.className = "px-5 py-2.5 rounded-full text-sm font-semibold transition-all bg-[#FCFAF8] text-[#2B2523] border border-[#E5DDD3] hover:border-[#C5A880] flex items-center gap-2";
      stepsContainer.innerHTML = this.getStepsHTML(routine.night, 'night');
    });

    // Copiar rutina
    const copyBtn = this.container.querySelector('#copy-routine-btn');
    copyBtn.addEventListener('click', () => {
      this.copyRoutineToClipboard(routine);
    });

    // Reiniciar
    const restartBtn = this.container.querySelector('#restart-quiz-btn');
    restartBtn.addEventListener('click', () => {
      this.currentStep = 0;
      this.answers = [];
      this.scores = { seca: 0, grasa: 0, mixta: 0, sensible: 0, madura: 0 };
      this.renderQuestion();
    });
  }

  getStepsHTML(steps, mode) {
    return steps.map(s => `
      <div class="p-4 sm:p-5 rounded-2xl bg-[#FCFAF8] border border-[#E5DDD3] flex items-start gap-4">
        <div class="step-number flex-shrink-0">
          ${s.step}
        </div>
        <div class="flex-grow">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-1">
            <h4 class="font-semibold text-[#2B2523] text-base">${s.title}</h4>
            <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#EFE8DE] text-[#6B5F5B]">
              ${s.product}
            </span>
          </div>
          <p class="text-xs sm:text-sm text-[#6B5F5B] leading-relaxed">
            ${s.desc}
          </p>
        </div>
      </div>
    `).join('');
  }

  copyRoutineToClipboard(routine) {
    let text = `✦ MI RUTINA FACIAL PERSONALIZADA (${routine.name.toUpperCase()}) ✦\n\n`;
    text += `☀️ RUTINA DE MAÑANA:\n`;
    routine.morning.forEach(s => {
      text += `Paso ${s.step}: ${s.title} - ${s.product}\n${s.desc}\n\n`;
    });
    text += `🌙 RUTINA DE NOCHE:\n`;
    routine.night.forEach(s => {
      text += `Paso ${s.step}: ${s.title} - ${s.product}\n${s.desc}\n\n`;
    });
    text += `Nota: Uso de protector solar cada mañana indispensable. Consultar siempre a un dermatólogo colegiado.`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        if (typeof showToast === 'function') {
          showToast('¡Rutina copiada con éxito a tu portapapeles!', 'success');
        } else {
          alert('¡Rutina copiada al portapapeles!');
        }
      }).catch(() => {
        if (typeof showToast === 'function') {
          showToast('Copia manual: no se pudo acceder al portapapeles en este navegador.', 'info');
        }
      });
    } else {
      if (typeof showToast === 'function') {
        showToast('Función de portapapeles no soportada en este navegador.', 'info');
      }
    }
  }
}

// Inicialización global si existe el contenedor en la página
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('skin-quiz-container')) {
    new SkinQuiz('skin-quiz-container');
  }
});
