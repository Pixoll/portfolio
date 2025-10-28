import { t } from "$lib/i18n/store";
import { derived } from "svelte/store";

export type EducationEntry = {
  readonly title: string;
  readonly institution: string;
  readonly start: string;
  readonly end: string;
  readonly note?: string;
};

export const educationEntries = derived(t, ($t): readonly EducationEntry[] => [
  {
    title: `${$t.education.bachelorOfEngineering} - ${$t.education.informaticsEngineering}`,
    institution: $t.education.universityOfConcepcion,
    start: `${$t.months.mar} 2023`,
    end: $t.education.present,
  },
  {
    title: `${$t.education.bachelorOfAstronomy} - ${$t.education.astronomy}`,
    institution: $t.education.universityOfConcepcion,
    start: `${$t.months.mar} 2022`,
    end: `${$t.months.dec} 2022`,
    note: $t.education.unfinished,
  },
]);
