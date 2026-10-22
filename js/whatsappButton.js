/**
 * Controlador del Botón de WhatsApp para Agendar Citas - diva-lashe's
 */

const DIVA_WHATSAPP_CONFIG = {
  // Número internacional con código de país (configurable)
  phone: "573001234567",
  
  // Mensaje oficial solicitado
  message: "¡Hola! 💗 Bienvenida a DIVA-LASHE'S. Quiero agendar una cita. Mi nombre es: ____. El servicio que me interesa es: ____. La fecha que prefiero es: ____. El horario que prefiero es: ____. ¿Me pueden confirmar la disponibilidad? Gracias."
};

/**
 * Genera el enlace de WhatsApp con el mensaje pre-completado
 */
function getWhatsAppAppointmentUrl(phone = (window.DIVA_CONFIG?.contact?.phone || DIVA_WHATSAPP_CONFIG.phone), customMsg = (window.DIVA_CONFIG?.contact?.whatsappMessage || DIVA_WHATSAPP_CONFIG.message)) {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(customMsg);
  return `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodedText}`;
}

/**
 * Genera el enlace para agendar una cita de un servicio específico,
 * incluyendo su duración si está confirmada.
 */
function createServiceBookingUrl(serviceName, duration) {
  let serviceText = serviceName;
  if (duration && duration !== 'Por confirmar' && duration !== null) {
    serviceText += ` (Duración: ${duration})`;
  }
  const msg = `¡Hola! 💗 Bienvenida a DIVA-LASHE'S. Quiero agendar una cita. Mi nombre es: ____. El servicio que me interesa es: ${serviceText}. La fecha que prefiero es: ____. El horario que prefiero es: ____. ¿Me pueden confirmar la disponibilidad? Gracias.`;
  return getWhatsAppAppointmentUrl(DIVA_WHATSAPP_CONFIG.phone, msg);
}

/**
 * Inicializador del botón flotante y botones de reserva de WhatsApp
 */
function initWhatsAppButton() {
  const whatsappLink = document.getElementById('whatsapp-floating-btn');
  const tooltipLink = document.getElementById('whatsapp-floating-tooltip');
  const welcomeHeroBtn = document.getElementById('welcome-hero-whatsapp-btn');
  const navBookBtn = document.getElementById('nav-book-appointment-btn');
  const mobileNavBookBtn = document.getElementById('mobile-nav-book-btn');
  const targetUrl = getWhatsAppAppointmentUrl();

  if (whatsappLink) {
    whatsappLink.href = targetUrl;
  }
  if (tooltipLink) {
    tooltipLink.href = targetUrl;
  }
  if (welcomeHeroBtn) {
    welcomeHeroBtn.href = targetUrl;
  }
  if (navBookBtn) {
    navBookBtn.href = targetUrl;
  }
  if (mobileNavBookBtn) {
    mobileNavBookBtn.href = targetUrl;
  }
}

document.addEventListener('DOMContentLoaded', initWhatsAppButton);
