import type { I18nObject, RemoveConstantStrings } from "$lib/i18n/types";

export const en = {
  langName: "English",
  sections: {
    home: "Home",
    aboutMe: "About me",
    experience: "Experience",
    projects: "Projects",
    education: "Education",
  },
  header: {
    toggleDarkMode: "Toggle dark mode",
    toggleLanguage: "Toggle language",
  },
  education: {
    universityOfConcepcion: "University of Concepción",
    bachelorOfAstronomy: "Bachelor of Astronomy",
    astronomy: "Astronomy",
    bachelorOfEngineering: "Bachelor of Engineering",
    informaticsEngineering: "Informatics Engineering (Computer Science)",
    present: "Present",
    unfinished: "Unfinished",
  },
} as const satisfies I18nObject;

export type EnStructure = RemoveConstantStrings<typeof en>;
