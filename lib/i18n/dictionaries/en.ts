export default {
  nav: {
    home: "HOME",
    caps: "CAPS",
    process: "PROCESS",
    contact: "CONTACT",
  },
  hero: {
    title: "CUSTOM CAPS WITH CRYSTALS",
    subtitle: "Every cap tells your story, with flames and style.",
    cta: "EXPLORE CAPS",
  },
  pages: {
    caps: { title: "MY CUSTOM CAPS" },
    process: { title: "HOW IT WORKS", subtitle: "FROM SKETCH TO FLAME" },
    contact: { title: "CONTACT", subtitle: "START YOUR CUSTOM PROJECT" },
  },
  cta: {
    headerButton: "DRIP NOW!",
  },
  home: {
    about: {
      heading: "ABOUT ME",
      p1: "I am an artist specialized in customizing caps with crystals and rhinestones. Each piece is unique, handcrafted with passion and dedication to streetwear style.",
      p2: "My mission is to transform ordinary caps into works of art that reflect the personality and style of those who wear them. Flames, crystals, and bold designs are my signature.",
    },
    preview: { heading: "CAPS PREVIEW" },
    process: {
      heading: "THE PROCESS",
      steps: {
        imagine: { title: "IMAGINE", desc: "Share your vision" },
        design: { title: "DESIGN", desc: "I create the perfect design" },
        create: { title: "CREATE", desc: "I craft your cap" },
      },
      cta: "DISCOVER THE FULL PROCESS",
    },
    callout: {
      heading: "PROPOSE YOUR IDEA",
      subtitle: "Make it real.",
      button: "DRIP NOW!",
    },
    editorDemo: {
      heading: "TRY THE 3D EDITOR",
      subtitle: "Color the cap in real time",
      cta: "OPEN THE EDITOR",
    },
  },
  capsPage: {
    cta: {
      heading: "MAKE YOUR IDEA REAL",
      subtitle: "Every cap can become a personalized work of art",
      button: "CONTACT ME",
    },
  },
  processPage: {
    intro: {
      title: "My Creation Method",
      paragraph:
        "Every custom cap is born from a unique creative process that combines your vision with my craftsmanship. From the first idea to the finished product, every phase is carefully curated for an exceptional result.",
    },
    steps: {
      step1: {
        title: "TELL ME YOUR IDEA",
        desc: "Share your vision, favorite colors, and desired style. Every detail matters to create the perfect cap.",
      },
      step2: {
        title: "I CREATE A UNIQUE SKETCH",
        desc: "I turn your idea into a detailed design, choosing crystals, placements, and effects for maximum visual impact.",
      },
      step3: {
        title: "I CUSTOMIZE THE CAP",
        desc: "With artisanal precision, I apply each crystal and detail by hand, creating a unique piece that reflects your personality.",
      },
      step4: {
        title: "ENJOY YOUR DRIP",
        desc: "Your custom cap is ready! A wearable work of art that captures attention and tells your story.",
      },
    },
    cta: {
      heading: "START YOUR CUSTOM CAP TODAY",
      button: "DRIP NOW!",
    },
  },
  contactPage: {
    info: {
      direct: "DIRECT CONTACT",
      email: "Email",
      socials: "FOLLOW ME ON SOCIALS",
      instagram: "Instagram",
      tiktok: "TikTok",
      comingSoon: "Coming soon",
      responseTime: "RESPONSE TIME",
      responseText: "I reply within 24 hours to kick off your custom project!",
    },
    form: {
      title: "SEND YOUR REQUEST",
      nameLabel: "Name *",
      namePlaceholder: "Your name",
      emailLabel: "Email *",
      emailPlaceholder: "your email",
      messageLabel: "Message *",
      messagePlaceholder: "Describe your custom cap idea...",
      uploadLabel: (max: number) => `Send the cap you want customized (max ${max} images)`,
      uploadPlaceholder: "Upload a cap image",
      removeImageAria: "Remove image",
      submit: "SEND REQUEST",
      toastSuccessTitle: "Message sent successfully!",
      toastSuccessDesc: "Thanks for reaching out. I'll get back to you shortly.",
      toastErrorTitle: "Send error",
      toastErrorDesc: "Error sending. Try again or email me directly!",
      toastTooBigTitle: "Attachments too large",
      toastTooBigDesc: "Total attachments exceed 10MB. Reduce size or number of files and try again.",
      previewAlt: (i: number) => `Preview ${i}`,
    },
  },
  footer: {
    crafted: "Crafted with fire and style — AstroCap © 2025",
  },
} as const

