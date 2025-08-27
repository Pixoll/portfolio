import type { EnStructure } from "$lib/i18n/en";

export const es = {
  langName: "Español",
  sections: {
    home: "Inicio",
    aboutMe: "Sobre mí",
    experience: "Experiencia",
    projects: "Proyectos",
    education: "Educación",
  },
  header: {
    toggleDarkMode: "Alternar modo oscuro",
    toggleLanguage: "Alternar lenguaje",
  },
  education: {
    universityOfConcepcion: "Universidad de Concepción",
    bachelorOfAstronomy: "Grado en Astronomía",
    astronomy: "Astronomía",
    bachelorOfEngineering: "Grado en Ingeniería",
    informaticsEngineering: "Ingeniería Civil Informática",
    present: "Presente",
  },
} as const satisfies EnStructure;
