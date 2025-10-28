import { t } from "$lib/i18n/store";
import { derived } from "svelte/store";

export type Section = {
  readonly id: string;
  readonly title: string;
};

export const sections = derived(t, ($t) => ({
  home: {
    id: "top",
    title: $t.sections.home,
  },
  aboutMe: {
    id: "about-me",
    title: $t.sections.aboutMe,
  },
  experience: {
    id: "experience",
    title: $t.sections.experience,
  },
  projects: {
    id: "projects",
    title: $t.sections.projects,
  },
  education: {
    id: "education",
    title: $t.sections.education,
  },
}) satisfies Readonly<Record<string, Section>>);

export const sectionEntries = derived(sections, ($sections) =>
  Object.values($sections)
);
