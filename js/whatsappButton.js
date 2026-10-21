/**
 * Controlador del Botón de WhatsApp para Agendar Citas - diva-lashe's
 */

const DIVA_WHATSAPP_CONFIG = {
  // Número internacional con código de país (configurable)
  phone: "573001234567",
  
  // Mensaje oficial solicitado en el Prompt 7
  message: "¡Hola! 💗 Bienvenida a diva-lashe's. Quiero agendar una cita. Mi nombre es: ____. El servicio que me interesa es: ____. La fecha que prefiero es: ____. El horario que prefiero es: ____. ¿Me pueden confirmar la disponibilidad? Gracias."
};

/**
 * Genera el enlace de WhatsApp con el mensaje pre-completado
 */
function getWhatsAppAppointmentUrl(phone = DIVA_WHATSAPP_CONFIG.phone, customMsg = DIVA_WHATSAPP_CONFIG.message) {
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
  const msg = `¡Hola! 💗 Bienvenida a diva-lashe's. Quiero agendar una cita. Mi nombre es: ____. El servicio que me interesa es: ${serviceText}. La fecha que prefiero es: ____. El horario que prefiero es: ____. ¿Me pueden confirmar la disponibilidad? Gracias.`;
  return getWhatsAppAppointmentUrl(DIVA_WHATSAPP_CONFIG.phone, msg);
}

/**
 * Inicializador del botón flotante de WhatsApp
 */
function initWhatsAppButton() {
  const whatsappLink = document.getElementById('whatsapp-floating-btn');
  const tooltipLink = document.getElementById('whatsapp-floating-tooltip');
  const targetUrl = getWhatsAppAppointmentUrl();

  if (whatsappLink) {
    whatsappLink.href = targetUrl;
  }
  if (tooltipLink) {
    tooltipLink.href = targetUrl;
  }
}

document.addEventListener('DOMContentLoaded', initWhatsAppButton);
