/**
 * ==========================================================================
 * CONFIGURACIÓN CENTRAL DE SERVICIOS Y DURACIONES - diva-lashe's
 * ==========================================================================
 * Centraliza las duraciones de cada procedimiento para que la clienta y la
 * dueña puedan consultar los tiempos estimados y modificarlos fácilmente.
 * 
 * Cada servicio tiene su propia duración configurada de forma independiente.
 */

const DIVA_SERVICES_CONFIG = {
  // 1. Limpieza Facial y Desmaquillado
  "limpieza-facial": {
    id: "limpieza-facial",
    name: "Limpieza Facial y Desmaquillado",
    shortName: "Limpieza Facial",
    duration: "1 hora",
    isConfirmed: true,
    badgeText: "🕒 1 hora",
    category: "Higiene Facial",
    description: "Limpieza facial respetuosa y desmaquillado para disolver impurezas sin dañar el manto protector."
  },

  // 2. Hidratación Facial Profunda
  "hidratacion-facial": {
    id: "hidratacion-facial",
    name: "Hidratación Facial Profunda",
    shortName: "Hidratación Facial",
    duration: "45 min",
    isConfirmed: true,
    badgeText: "🕒 45 min",
    category: "Nutrición & Barrera",
    description: "Sérums humectantes y activos selladores para mantener la piel jugosa, elástica y protegida."
  },

  // 3. Cuidado e Hidratación de Labios
  "cuidado-labios": {
    id: "cuidado-labios",
    name: "Cuidado e Hidratación de Labios",
    shortName: "Cuidado de Labios",
    duration: "30 min",
    isConfirmed: true,
    badgeText: "🕒 30 min",
    category: "Zona Delicada",
    description: "Tratamiento emoliente intensivo con bálsamos de ceramidas y protección solar labial."
  },

  // 4. Rutina Facial de Mañana
  "rutina-manana": {
    id: "rutina-manana",
    name: "Rutina Facial de Mañana",
    shortName: "Rutina de Mañana",
    duration: "30 min",
    isConfirmed: true,
    badgeText: "🕒 30 min",
    category: "Protocolo Diurno",
    description: "Protocolo de preparación diurna con limpieza suave, hidratación y escudo solar indispensable."
  },

  // 5. Rutina Facial de Noche
  "rutina-noche": {
    id: "rutina-noche",
    name: "Rutina Facial de Noche",
    shortName: "Rutina de Noche",
    duration: "45 min",
    isConfirmed: true,
    badgeText: "🕒 45 min",
    category: "Protocolo Nocturno",
    description: "Protocolo reparador intensivo nocturno para regenerar la piel y sellar la barrera dérmica."
  },

  // 6. Mascarillas Faciales
  "mascarillas-faciales": {
    id: "mascarillas-faciales",
    name: "Tratamiento de Mascarillas Faciales",
    shortName: "Mascarillas Faciales",
    duration: "30 min",
    isConfirmed: true,
    badgeText: "🕒 30 min",
    category: "Tratamiento Concentrado",
    description: "Dosis concentrada de hidratación o purificación según las necesidades específicas de la piel."
  },

  // 7. Exfoliación Suave
  "exfoliacion": {
    id: "exfoliacion",
    name: "Exfoliación Facial Suave",
    shortName: "Exfoliación Suave",
    duration: "30 min",
    isConfirmed: true,
    badgeText: "🕒 30 min",
    category: "Renovación Cutánea",
    description: "Renovación celular delicada sin fricción agresiva para una piel luminosa y poros despejados."
  },

  // 8. Contorno de Ojos
  "contorno-ojos": {
    id: "contorno-ojos",
    name: "Tratamiento de Contorno de Ojos",
    shortName: "Contorno de Ojos",
    duration: "30 min",
    isConfirmed: true,
    badgeText: "🕒 30 min",
    category: "Zona Delicada",
    description: "Cuidado especializado para la piel periocular fina, previniendo líneas y signos de fatiga."
  }
};

/**
 * Obtiene la información formateada de duración de un servicio
 */
function getServiceDurationInfo(serviceId) {
  const service = DIVA_SERVICES_CONFIG[serviceId];
  if (!service) return { badgeText: "🕒 30 min", isConfirmed: true, text: "30 min" };

  if (service.isConfirmed && service.duration) {
    return {
      badgeText: `🕒 ${service.duration}`,
      isConfirmed: true,
      text: service.duration
    };
  }

  return {
    badgeText: "🕒 Por confirmar",
    isConfirmed: false,
    text: "Por confirmar"
  };
}

/**
 * Genera el enlace de WhatsApp con el servicio seleccionado y su duración (si está confirmada)
 */
function getWhatsAppUrlForService(serviceId) {
  const service = DIVA_SERVICES_CONFIG[serviceId];
  const serviceName = service ? service.name : "Servicio de Belleza Facial";
  
  let serviceDetail = serviceName;
  if (service && service.isConfirmed && service.duration) {
    serviceDetail += ` (Duración estimada: ${service.duration})`;
  }

  const customMessage = `¡Hola! 💗 Bienvenida a diva-lashe's. Quiero agendar una cita. Mi nombre es: ____. El servicio que me interesa es: ${serviceDetail}. La fecha que prefiero es: ____. El horario que prefiero es: ____. ¿Me pueden confirmar la disponibilidad? Gracias.`;

  const phone = (typeof DIVA_WHATSAPP_CONFIG !== 'undefined' && DIVA_WHATSAPP_CONFIG.phone)
    ? DIVA_WHATSAPP_CONFIG.phone
    : "573001234567";

  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(customMessage);
  return `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodedText}`;
}

/**
 * Sincroniza dinámicamente todas las etiquetas de duración e interacciones de WhatsApp en el DOM
 */
function syncServiceDurations() {
  // Sincronizar badges con atributo data-service-duration
  const badges = document.querySelectorAll('[data-service-duration]');
  badges.forEach(badge => {
    const serviceId = badge.dataset.serviceDuration;
    const info = getServiceDurationInfo(serviceId);
    
    badge.innerHTML = `<span aria-hidden="true">🕒</span> ${info.text}`;
    badge.classList.remove('pending');
    badge.classList.add('confirmed');
    badge.setAttribute('title', `Duración estimada: ${info.text}`);
  });

  // Sincronizar botones de agendar servicio con atributo data-book-service
  const bookButtons = document.querySelectorAll('[data-book-service]');
  bookButtons.forEach(btn => {
    const serviceId = btn.dataset.bookService;
    const url = getWhatsAppUrlForService(serviceId);
    btn.setAttribute('href', url);
    btn.setAttribute('target', '_blank');
    btn.setAttribute('rel', 'noopener noreferrer');
  });
}

// Ejecutar inmediatamente si el DOM ya está listo, o al cargarse
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', syncServiceDurations);
} else {
  syncServiceDurations();
}
