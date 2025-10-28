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
    showSections: "Show sections",
    hideSections: "Hide sections",
    toggleDarkMode: "Toggle dark mode",
    changeLanguage: "Change language",
  },
  home: {
    hi: "Hi, I'm",
    subtitle: "Computer Science student and Software Developer",
  },
  aboutMe: {
    paragraph1: "I'm a computer science student and software developer with over five years of programming experience, "
      + "who has varied interests, including cybersecurity, DevOps, backend, databases, and video game modding. I have "
      + "a passion for creating and helping people in the process, and I don't hesitate to work on problems that "
      + "require solutions.",
    paragraph2: "Over the years, I've worked with a variety of languages, including C/C++, Java, Kotlin, Python, "
      + "JavaScript/TypeScript, HTML/CSS, Svelte, and C#, as well as tools and frameworks such as Nginx, Docker, "
      + "Next.js, Nest.js (Express.js), Spring Boot, Django Ninja, y Jetpack Compose.",
    paragraph3: "Some of my hobbies include reading scientific literature, tinkering with electronics, baking, playing "
      + "the piano, and singing.",
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
