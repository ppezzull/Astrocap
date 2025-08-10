export default {
  nav: {
    home: "HOME",
    caps: "CAPS",
    process: "PROSESO",
    contact: "KONTAK",
  },
  hero: {
    title: "CUSTOM NA SOMBRERO NA MAY KRISTAL",
    subtitle: "Bawat sombrero ay nagkukuwento ng iyong kwento, may apoy at estilo.",
    cta: "TINGNAN ANG MGA CAPS",
  },
  pages: {
    caps: { title: "ANG AKING MGA CUSTOM NA SOMBRERO" },
    process: { title: "PAANO ITO GUMAGANA", subtitle: "MULA SKETCH HANGGANG APOY" },
    contact: { title: "KONTAK", subtitle: "SIMULAN ANG IYONG CUSTOM NA PROYEKTO" },
  },
  cta: {
    headerButton: "DRIP NOW!",
  },
  home: {
    about: {
      heading: "TUNGKOL SA AKIN",
      p1: "Isa akong artist na dalubhasa sa pag-customize ng sombrero gamit ang kristal at mga palamuti. Bawat piraso ay natatangi, ginawa nang may pagmamahal at dedikasyon sa istilong streetwear.",
      p2: "Layunin kong gawing obra maestra ang mga ordinaryong sombrero—sumasalamin sa personalidad at istilo ng nagsusuot. Apoy, kristal, at matapang na disenyo ang aking pirma.",
    },
    preview: { heading: "PREVIEW NG MGA SOMBRERO" },
    process: {
      heading: "ANG PROSESO",
      steps: {
        imagine: { title: "ISIPIN", desc: "Ibahagi ang iyong ideya" },
        design: { title: "DISEÑO", desc: "Gagawa ako ng perpektong disenyo" },
        create: { title: "LIKHAIN", desc: "Gagawa ako ng iyong sombrero" },
      },
      cta: "ALAMIN ANG BUONG PROSESO",
    },
    callout: {
      heading: "IPANUKALA ANG IYONG IDEYA",
      subtitle: "Gawin itong totoo.",
      button: "DRIP NOW!",
    },
  },
  capsPage: {
    cta: {
      heading: "GAWIN MONG TOTOO ANG IYONG IDEYA",
      subtitle: "Bawat sombrero ay maaaring maging personalisadong obra",
      button: "KONTAKIN AKO",
    },
  },
  processPage: {
    intro: {
      title: "Aking Paraan ng Paglikha",
      paragraph:
        "Ang bawat custom na sombrero ay nabubuo mula sa natatanging proseso—pinaghalo ang iyong ideya at aking kasanayan. Mula ideya hanggang tapos, bawat yugto ay maingat na inaalagaan para sa napakahusay na resulta.",
    },
    steps: {
      step1: {
        title: "IKUWENTO ANG IYONG IDEYA",
        desc: "Ibahagi ang iyong bisyon, paboritong kulay, at nais na istilo. Mahalagang detalye para magawa ang perpektong sombrero.",
      },
      step2: {
        title: "GUMAGAWA AKO NG NATATANGING SKETCH",
        desc: "Ginagawang detalyadong disenyo ang iyong ideya—pinipili ang kristal, puwesto, at effects para sa maximum na dating.",
      },
      step3: {
        title: "KINAKUSTOM KO ANG SOMBRERO",
        desc: "May artisanal na husay, mano-manong inilalagay ang bawat kristal at detalye para sa natatanging piraso.",
      },
      step4: {
        title: "ENJOY YOUR DRIP",
        desc: "Handa na ang iyong custom na sombrero! Isang suot na obra na umaagaw ng pansin at nagkukuwento ng iyong kwento.",
      },
    },
    cta: {
      heading: "SIMULAN ANG IYONG CUSTOM NA SOMBRERO NGAYON",
      button: "DRIP NOW!",
    },
  },
  contactPage: {
    info: {
      direct: "DIREKTANG KONTAK",
      email: "Email",
      socials: "SUNDAN AKO SA SOCIALS",
      instagram: "Instagram",
      tiktok: "TikTok",
      comingSoon: "Paparating na",
      responseTime: "ORAS NG SAGOT",
      responseText: "Sumasagot ako sa loob ng 24 oras upang simulan agad ang iyong proyekto!",
    },
    form: {
      title: "IPADALA ANG IYONG REQUEST",
      nameLabel: "Pangalan *",
      namePlaceholder: "Iyong pangalan",
      emailLabel: "Email *",
      emailPlaceholder: "iyong email",
      messageLabel: "Mensahe *",
      messagePlaceholder: "Ilarawan ang iyong custom na sombrero...",
      uploadLabel: (max: number) => `Ipadala ang sombrerong gusto mong i-customize (max ${max} larawan)`,
      uploadPlaceholder: "Mag-upload ng larawan ng sombrero",
      removeImageAria: "Alisin ang larawan",
      submit: "IPADALA ANG REQUEST",
      toastSuccessTitle: "Matagumpay na naipadala!",
      toastSuccessDesc: "Salamat sa iyong mensahe. Magre-reply ako agad.",
      toastErrorTitle: "Error sa pagpapadala",
      toastErrorDesc: "Nagka-error. Subukang muli o i-email ako direkta!",
      toastTooBigTitle: "Sobra ang laki ng attachments",
      toastTooBigDesc: "Lumagpas sa 10MB ang attachments. Bawasan ang laki o bilang ng files at subukan muli.",
      previewAlt: (i: number) => `Preview ${i}`,
    },
  },
  footer: {
    crafted: "Ginawa na may apoy at estilo — AstroCap © 2025",
  },
} as const

