import type { I18nObject, RemoveConstantStrings } from "$lib/i18n/types";

export const en = {
  langId: "en",
  langName: "English",
  mainPageTitle: "Pixoll | Computer Science Student",
  sections: {
    home: {
      id: "top",
      title: "Home",
    },
    aboutMe: {
      id: "about-me",
      title: "About me",
    },
    experience: {
      id: "experience",
      title: "Experience",
    },
    projects: {
      id: "projects",
      title: "Projects",
    },
    education: {
      id: "education",
      title: "Education",
    },
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
  experience: {
    techLead: "Technical Lead",
    kita: "KITA, Kids Intuitive Training Assistant, Inc.",
    present: "Present",
    linkedIn: "LinkedIn",
    website: "Website",
  },
  months: {
    jan: "Jan",
    feb: "Feb",
    mar: "Mar",
    apr: "Apr",
    may: "May",
    jun: "Jun",
    jul: "Jul",
    aug: "Aug",
    sep: "Sep",
    oct: "Oct",
    nov: "Nov",
    dec: "Dec",
  },
} as const satisfies I18nObject;

export type EnStructure = RemoveConstantStrings<typeof en>;
