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
    showSections: "Mostrar secciones",
    hideSections: "Ocultar secciones",
    toggleDarkMode: "Alternar modo oscuro",
    changeLanguage: "Cambiar idioma",
  },
  aboutMe: {
    paragraph1: "Soy un estudiante de ciencias de la computación y un desarrollador de software quien ha estado "
      + "programando desde hace más de 5 años, con intereses variados, entre los cuales se encuentra la ciberseguridad,"
      + " DevOps, backend, bases de datos y modding de videojuegos. Tengo una pasión por crear y ayudar a la gente en "
      + "el proceso, y no dudo en trabajar en problemas que requieren solución.",
    paragraph2: "A través de los años he trabajado con una diversa cantidad de lenguajes, como C/C++, Java, Kotlin, "
      + "Python, JavaScript/TypeScript, HTML/CSS, Svelte, y C#, además de herramientas y frameworks como Nginx, Docker,"
      + " Next.js, Nest.js (Express.js), Spring Boot, Django Ninja, y Jetpack Compose.",
    paragraph3: "Algunos de mis hobbies son leer literatura científica, jugar con electrónicos, hornear, tocar piano, y"
      + " cantar.",
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
