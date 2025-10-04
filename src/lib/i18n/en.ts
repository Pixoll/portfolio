import type { I18nObject, RemoveConstantStrings } from "$lib/i18n/types";

export const en = {
  langId: "en",
  langName: "English",
  mainPageTitle: "Pixoll | Computer Science Student",
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
    changeLanguage: "Change language",
  },
  education: {
    universityOfConcepcion: "University of Concepción, Chile",
    bachelorOfAstronomy: "Bachelor of Astronomy",
    astronomy: "Astronomy",
    bachelorOfEngineering: "Bachelor of Engineering",
    informaticsEngineering: "Informatics Engineering (Computer Science)",
    present: "Present",
    unfinished: "Unfinished",
  },
} as const satisfies I18nObject;

export type EnStructure = RemoveConstantStrings<typeof en>;
