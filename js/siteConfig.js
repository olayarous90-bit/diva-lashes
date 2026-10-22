/**
 * ==========================================================================
 * CONFIGURACIÓN CENTRALIZADA DE DIVA-LASHE'S (PROMPT 12)
 * ==========================================================================
 * Permite cambiar fácilmente el mensaje promocional de la barra de anuncios
 * y la información de contacto sin necesidad de modificar el HTML.
 */

window.DIVA_CONFIG = {
  // 1. Barra Superior de Anuncios
  announcement: {
    // Para activar o desactivar la barra (true/false)
    enabled: true,
    
    // Mensaje promocional elegante (edita este texto cuando lo desees)
    message: "✨ Realza tu belleza, disfruta tu momento ✨",
    
    // Enlace opcional al hacer clic en el anuncio (null para texto informativo)
    link: null
  },

  // 2. Parámetros Oficiales de Contacto y Reservas
  contact: {
    phone: "573001234567",
    whatsappMessage: "¡Hola! 💗 Bienvenida a DIVA-LASHE'S. Quiero agendar una cita. Mi nombre es: ____. El servicio que me interesa es: ____. La fecha que prefiero es: ____. El horario que prefiero es: ____. ¿Me pueden confirmar la disponibilidad? Gracias."
  }
};

/**
 * Aplica la configuración de la barra de anuncios en el DOM
 */
function applyAnnouncementConfig() {
  const bar = document.getElementById('announcement-bar');
  const textEl = document.getElementById('announcement-bar-text');

  if (!window.DIVA_CONFIG || !window.DIVA_CONFIG.announcement) return;

  const { enabled, message } = window.DIVA_CONFIG.announcement;

  if (bar) {
    if (!enabled) {
      bar.style.display = 'none';
      return;
    } else {
      bar.style.display = 'block';
    }
  }

  if (textEl && message) {
    textEl.textContent = message;
  }
}

// Inicializar de inmediato o al cargar el DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', applyAnnouncementConfig);
} else {
  applyAnnouncementConfig();
}
