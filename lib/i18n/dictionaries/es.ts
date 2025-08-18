export default {
  nav: {
    home: "INICIO",
    caps: "GORRAS",
    process: "PROCESO",
    contact: "CONTACTO",
  },
  hero: {
    title: "GORRAS PERSONALIZADAS CON BRILLANTES",
    subtitle: "Cada gorra cuenta tu historia, con llamas y estilo.",
    cta: "DESCUBRE LAS GORRAS",
  },
  pages: {
    caps: { title: "MIS GORRAS PERSONALIZADAS" },
    process: { title: "CÓMO FUNCIONA", subtitle: "DEL BOCETO A LA LLAMA" },
    contact: { title: "CONTACTO", subtitle: "COMIENZA TU PROYECTO PERSONALIZADO" },
  },
  cta: {
    headerButton: "DRIP NOW!",
  },
  home: {
    about: {
      heading: "QUIÉN SOY",
      p1: "Soy un artista especializado en la personalización de gorras con cristales y brillantes. Cada pieza es única, creada a mano con pasión y dedicación al estilo streetwear.",
      p2: "Mi misión es transformar gorras ordinarias en obras de arte que reflejen la personalidad y el estilo de quien las usa. Llamas, cristales y diseños audaces son mi sello.",
    },
    preview: {
      heading: "VISTA PREVIA DE GORRAS",
    },
    process: {
      heading: "EL PROCESO",
      steps: {
        imagine: { title: "IMAGINA", desc: "Comparte tu visión" },
        design: { title: "DISEÑA", desc: "Creo el diseño perfecto" },
        create: { title: "CREA", desc: "Realizo tu gorra" },
      },
      cta: "DESCUBRE EL PROCESO COMPLETO",
    },
    callout: {
      heading: "PROPÓN TU IDEA",
      subtitle: "Hazla realidad.",
      button: "DRIP NOW!",
    },
  },
  capsPage: {
    cta: {
      heading: "REALIZA TU IDEA",
      subtitle: "Cada gorra puede convertirse en una obra de arte personalizada",
      button: "CONTÁCTAME",
    },
  },
  processPage: {
    intro: {
      title: "Mi Método de Creación",
      paragraph:
        "Cada gorra personalizada nace de un proceso creativo único que combina tu visión con mi experiencia artesanal. Desde la primera idea hasta el producto final, cada fase se cuida al máximo para garantizar un resultado excepcional.",
    },
    steps: {
      step1: {
        title: "CUÉNTAME TU IDEA",
        desc: "Comparte tu visión, los colores preferidos, el estilo que deseas. Cada detalle cuenta para crear la gorra perfecta.",
      },
      step2: {
        title: "CREO UN BOCETO ÚNICO",
        desc: "Transformo tu idea en un diseño detallado, eligiendo cristales, posiciones y efectos para maximizar el impacto visual.",
      },
      step3: {
        title: "PERSONALIZO LA GORRA",
        desc: "Con precisión artesanal, aplico cada cristal y detalle a mano, creando una pieza única que refleja tu personalidad.",
      },
      step4: {
        title: "ENJOY YOUR DRIP",
        desc: "Tu gorra personalizada está lista! Una obra de arte que llama la atención y cuenta tu historia.",
      },
    },
    cta: {
      heading: "COMIENZA HOY TU GORRA PERSONALIZADA",
      button: "DRIP NOW!",
    },
  },
  contactPage: {
    info: {
      direct: "CONTACTO DIRECTO",
      email: "Email",
      socials: "SÍGUEME EN LAS REDES",
      instagram: "Instagram",
      tiktok: "TikTok",
      comingSoon: "Próximamente",
      responseTime: "TIEMPO DE RESPUESTA",
      responseText: "¡Respondo en 24 horas para comenzar de inmediato tu proyecto personalizado!",
    },
    form: {
      title: "ENVÍA TU CONSULTA",
      nameLabel: "Nombre *",
      namePlaceholder: "Tu nombre",
      emailLabel: "Email *",
      emailPlaceholder: "tu correo",
      messageLabel: "Mensaje *",
      messagePlaceholder: "Describe tu idea para la gorra personalizada...",
      uploadLabel: (max: number) => `Envía la gorra que quieres personalizar (max ${max} imágenes)`,
      uploadPlaceholder: "Sube una imagen de la gorra",
      removeImageAria: "Eliminar imagen",
      submit: "ENVIAR CONSULTA",
      toastSuccessTitle: "Mensaje enviado con éxito!",
      toastSuccessDesc: "Gracias por contactarme. Te responderé lo antes posible.",
      toastErrorTitle: "Error al enviar",
      toastErrorDesc: "Error al enviar. Intenta de nuevo o escríbeme directamente!",
      toastTooBigTitle: "Archivos demasiado grandes",
      toastTooBigDesc: "El total de los archivos adjuntos supera los 10MB. Reduce el tamaño o el número de archivos adjuntos y vuelve a intentarlo.",
      previewAlt: (i: number) => `Vista previa ${i}`,
    },
  },
  footer: {
    crafted: "Creado con llama y estilo — AstroCap © 2025",
  },
} as const
