export default {
  nav: {
    home: "HOME",
    caps: "CAPS",
    process: "PROCESSO",
    contact: "CONTATTI",
  },
  hero: {
    title: "CAPPELLI PERSONALIZZATI CON BRILLANTINI",
    subtitle: "Ogni cappello racconta la tua storia, con fiamme e stile.",
    cta: "SCOPRI I CAPPELLI",
  },
  pages: {
    caps: { title: "I MIEI CAPPELLI PERSONALIZZATI" },
    process: { title: "COME FUNZIONA", subtitle: "DAL BOZZETTO ALLA FIAMMA" },
    contact: { title: "CONTATTI", subtitle: "INIZIA IL TUO PROGETTO PERSONALIZZATO" },
  },
  cta: {
    headerButton: "DRIP NOW!",
  },
  home: {
    about: {
      heading: "CHI SONO",
      p1: "Sono un artista specializzato nella personalizzazione di cappelli con cristalli e brillantini. Ogni pezzo è unico, creato a mano con passione e dedizione per lo stile streetwear.",
      p2: "La mia missione è trasformare cappelli ordinari in opere d'arte che riflettono la personalità e lo stile di chi li indossa. Fiamme, cristalli e design audaci sono la mia firma.",
    },
    preview: {
      heading: "ANTEPRIMA CAPPELLI",
    },
    process: {
      heading: "IL PROCESSO",
      steps: {
        imagine: { title: "IMMAGINA", desc: "Condividi la tua visione" },
        design: { title: "DISEGNA", desc: "Creo il design perfetto" },
        create: { title: "CREA", desc: "Realizzo il tuo cappello" },
      },
      cta: "SCOPRI IL PROCESSO COMPLETO",
    },
    callout: {
      heading: "PROPONI LA TUA IDEA",
      subtitle: "Rendila realtà.",
      button: "DRIP NOW!",
    },
  },
  capsPage: {
    cta: {
      heading: "REALIZZA LA TUA IDEA",
      subtitle: "Ogni cappello può diventare un'opera d'arte personalizzata",
      button: "CONTATTAMI",
    },
  },
  processPage: {
    intro: {
      title: "Il Mio Metodo di Creazione",
      paragraph:
        "Ogni cappello personalizzato nasce da un processo creativo unico che combina la tua visione con la mia esperienza artigianale. Dalla prima idea al prodotto finito, ogni fase è curata nei minimi dettagli per garantire un risultato eccezionale.",
    },
    steps: {
      step1: {
        title: "SCRIVIMI LA TUA IDEA",
        desc: "Condividi la tua visione, i colori preferiti, lo stile che desideri. Ogni dettaglio conta per creare il cappello perfetto.",
      },
      step2: {
        title: "CREO UN BOZZETTO UNICO",
        desc: "Trasformo la tua idea in un design dettagliato, scegliendo cristalli, posizioni e effetti per massimizzare l'impatto visivo.",
      },
      step3: {
        title: "PERSONALIZZO IL CAPPELLO",
        desc: "Con precisione artigianale, applico ogni cristallo e dettaglio a mano, creando un pezzo unico che rispecchia la tua personalità.",
      },
      step4: {
        title: "ENJOY YOUR DRIP",
        desc: "Il tuo cappello personalizzato è pronto! Un'opera d'arte indossabile che cattura l'attenzione e racconta la tua storia.",
      },
    },
    cta: {
      heading: "INIZIA OGGI IL TUO CAPPELLO PERSONALIZZATO",
      button: "DRIP NOW!",
    },
  },
  contactPage: {
    info: {
      direct: "CONTATTO DIRETTO",
      email: "Email",
      socials: "SEGUIMI SUI SOCIAL",
      instagram: "Instagram",
      tiktok: "TikTok",
      comingSoon: "Coming soon",
      responseTime: "TEMPO DI RISPOSTA",
      responseText: "Rispondo entro 24 ore per iniziare subito il tuo progetto personalizzato!",
    },
    form: {
      title: "INVIA LA TUA RICHIESTA",
      nameLabel: "Nome *",
      namePlaceholder: "Il tuo nome",
      emailLabel: "Email *",
      emailPlaceholder: "la tua mail",
      messageLabel: "Messaggio *",
      messagePlaceholder: "Descrivi la tua idea per il cappello personalizzato...",
      uploadLabel: (max: number) => `Invia il cappello che vuoi personalizzare (max ${max} immagini)`,
      uploadPlaceholder: "Carica un'immagine del cappello",
      removeImageAria: "Rimuovi immagine",
      submit: "INVIA RICHIESTA",
      toastSuccessTitle: "Messaggio inviato con successo!",
      toastSuccessDesc: "Grazie per averci contattato. Ti risponderemo al più presto.",
      toastErrorTitle: "Errore nell'invio",
      toastErrorDesc: "Errore nell'invio. Riprova o scrivimi direttamente!",
      toastTooBigTitle: "Allegati troppo grandi",
      toastTooBigDesc: "Il totale degli allegati supera i 10MB. Riduci la dimensione o il numero dei file allegati e riprova.",
      previewAlt: (i: number) => `Anteprima ${i}`,
    },
  },
  footer: {
    crafted: "Creato con fiamma e stile — AstroCap © 2025",
  },
} as const

