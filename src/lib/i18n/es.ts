import type { EnStructure } from "$lib/i18n/en";

export const es = {
  langId: "es",
  langName: "Español",
  mainPageTitle: "Pixoll | Estudiante de Ciencias de la Computación",
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
    informaticsEngineering: "Ingeniería Civil Informática (Ciencias de la Computación)",
    present: "Presente",
    unfinished: "No terminado",
  },
} as const satisfies EnStructure;
