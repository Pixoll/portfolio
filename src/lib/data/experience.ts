import { t } from "$lib/i18n/store";
import Globe from "$lib/icons/Globe.svelte";
import LinkedIn from "$lib/icons/LinkedIn.svelte";
import type { Component } from "svelte";
import type { SVGAttributes } from "svelte/elements";
import { derived } from "svelte/store";

export type ExperienceEntry = {
  readonly entity: string;
  readonly position: string;
  readonly start: string;
  readonly end: string;
  readonly note?: string;
  readonly summary?: string[];
  readonly links?: readonly {
    readonly title: string;
    readonly url: string;
    readonly icon: Component<SVGAttributes<SVGElement>>;
  }[];
};

export const experienceEntries = derived(t, ($t): readonly ExperienceEntry[] => [
  {
    entity: $t.experience.kita,
    position: $t.experience.techLead,
    start: `${$t.months.may} 2025`,
    end: $t.experience.present,
    links: [
      {
        title: $t.experience.website,
        url: "https://kitainc.com/",
        icon: Globe,
      },
      {
        title: $t.experience.linkedIn,
        url: "https://www.linkedin.com/company/kita-app/",
        icon: LinkedIn,
      },
    ],
  },
]);
