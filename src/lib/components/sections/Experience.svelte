<script lang="ts">
  import { t } from "$lib/i18n/store";
  import Globe from "$lib/icons/Globe.svelte";
  import LinkedIn from "$lib/icons/LinkedIn.svelte";
  import type { Component } from "svelte";
  import type { SVGAttributes } from "svelte/elements";

  type ExperienceEntry = {
    entity: string;
    position: string;
    start: string;
    end: string;
    note?: string;
    links?: Array<{
      title: string;
      url: string;
      icon: Component<SVGAttributes<SVGElement>>;
    }>;
  };

  let experienceEntries = $derived<ExperienceEntry[]>([
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
</script>

<section
  id={$t.sections.experience.id}
  class="flex gap-6 px-8 py-6 rounded-xl [transition:background-color_200ms] hover:bg-text/2.5"
>
  <h1 class="basis-1/4 text-lg font-mono font-bold text-accent duration-600">
    {$t.sections.experience.title}
  </h1>
  <div class="basis-3/4">
    <ol class="space-y-6">
      {#each experienceEntries as entry (`${entry.entity}-${entry.position}`)}
        <li class="flex gap-4">
          <div class="basis-3/4 space-y-2">
            <h2 class="font-semibold">
              {entry.position}
              {#if entry.note}
              <span class="ml-2 text-sm text-text-accent duration-600">
                {entry.note}
              </span>
            {/if}
            </h2>
            <p>{entry.entity}</p>
            {#if entry.links}
              <div class="flex gap-2">
                {#each entry.links as { url, title, icon: Icon } (url)}
                  <a href={url} title={title} aria-label={title} target="_blank" rel="noopener noreferrer">
                    <Icon class="size-5" aria-hidden/>
                  </a>
                {/each}
              </div>
            {/if}
          </div>
          <span class="basis-1/4 text-end text-text-accent duration-600">
            {#if entry.start !== entry.end}
              {entry.start} - {entry.end}
            {:else}
              {entry.start}
            {/if}
          </span>
        </li>
      {/each}
    </ol>
  </div>
</section>
