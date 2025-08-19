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
} as const satisfies I18nObject;

export type EnStructure = RemoveConstantStrings<typeof en>;
