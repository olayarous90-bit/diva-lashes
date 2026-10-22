/**
 * Funcionalidad Común de Navegación, Header y Utilidades
 */
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initHeaderScroll();
  initNewsletterForm();
});

/**
 * Menú Móvil Accesible
 */
function initMobileMenu() {
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenu = document.getElementById('mobile-menu-close');

  if (!menuToggle || !mobileMenu) return;

  menuToggle.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
      mobileMenu.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      menuToggle.setAttribute('aria-expanded', 'true');
    } else {
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = '';
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });

  if (closeMenu) {
    closeMenu.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = '';
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  }

  // Cerrar al hacer clic en un enlace
  const links = mobileMenu.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = '';
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Cerrar al pulsar Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = '';
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

/**
 * Efecto de desenfoque al hacer scroll en el Header
 */
function initHeaderScroll() {
  const header = document.querySelector('header');
  const headerGlass = document.querySelector('.header-glass');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 25) {
      header.classList.add('shadow-sm');
      if (headerGlass) {
        headerGlass.style.backgroundColor = 'rgba(252, 250, 248, 0.96)';
      }
    } else {
      header.classList.remove('shadow-sm');
      if (headerGlass) {
        headerGlass.style.backgroundColor = 'rgba(252, 250, 248, 0.90)';
      }
    }
  });
}

/**
 * Formulario de suscripción educativa / newsletter
 */
function initNewsletterForm() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    if (!input || !input.value) return;

    const btn = form.querySelector('button');
    const originalText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = `<span class="inline-block animate-spin mr-2">✦</span> Guardando...`;

    setTimeout(() => {
      btn.innerHTML = `✓ ¡Guía de Skincare Enviada!`;
      btn.style.backgroundColor = 'var(--status-safe)';
      btn.style.borderColor = 'var(--status-safe)';
      btn.style.color = '#FFFFFF';
      input.value = '';

      setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = originalText;
        btn.style.backgroundColor = '';
        btn.style.borderColor = '';
        btn.style.color = '';
      }, 4000);
    }, 700);
  });
}

/**
 * Notificación Toast reutilizable
 */
function showToast(message, type = 'info') {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'fixed bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-none';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'pointer-events-auto px-5 py-3 rounded-xl shadow-lg border text-sm font-medium flex items-center gap-3 transition-all duration-300 transform translate-y-4 opacity-0';
  
  if (type === 'success') {
    toast.style.backgroundColor = '#FCFAF8';
    toast.style.borderColor = '#C5A880';
    toast.style.color = '#2B2523';
    toast.innerHTML = `<span style="color: #9E7D53;">✦</span> ${message}`;
  } else {
    toast.style.backgroundColor = '#FCFAF8';
    toast.style.borderColor = '#E5DDD3';
    toast.style.color = '#2B2523';
    toast.innerHTML = `ℹ️ ${message}`;
  }

  toastContainer.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
  });

  setTimeout(() => {
    toast.classList.add('translate-y-4', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
