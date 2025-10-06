import type { EnStructure } from "$lib/i18n/en";

export const es = {
  langId: "es",
  langName: "Español",
  mainPageTitle: "Pixoll | Estudiante de Ciencias de la Computación",
  sections: {
    home: {
      id: "top",
      title: "Inicio",
    },
    aboutMe: {
      id: "about-me",
      title: "Sobre mí",
    },
    experience: {
      id: "experience",
      title: "Experiencia",
    },
    projects: {
      id: "projects",
      title: "Proyectos",
    },
    education: {
      id: "education",
      title: "Educación",
    },
  },
  header: {
    toggleDarkMode: "Alternar modo oscuro",
    changeLanguage: "Cambiar idioma",
  },
  education: {
    universityOfConcepcion: "Universidad de Concepción, Chile",
    bachelorOfAstronomy: "Grado en Astronomía",
    astronomy: "Astronomía",
    bachelorOfEngineering: "Grado en Ingeniería",
    informaticsEngineering: "Ingeniería Civil Informática (Ciencias de la Computación)",
    present: "Presente",
    unfinished: "No terminado",
  },
  experience: {
    techLead: "Líder Técnico",
    kita: "KITA, Kids Intuitive Training Assistant, Inc.",
    present: "Presente",
    linkedIn: "LinkedIn",
    website: "Sitio web",
  },
  months: {
    jan: "Ene",
    feb: "Feb",
    mar: "Mar",
    apr: "Abr",
    may: "May",
    jun: "Jun",
    jul: "Jul",
    aug: "Ago",
    sep: "Sep",
    oct: "Oct",
    nov: "Nov",
    dec: "Dic",
  },
} as const satisfies EnStructure;
