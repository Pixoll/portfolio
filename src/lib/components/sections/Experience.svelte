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
    summary?: string[];
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
  class={
    "flex gap-6 px-8 py-6 rounded-xl bg-text/2.5 hover:ring-2 hover:ring-primary/20 max-lg:flex-col"
    + " [transition:box-shadow_200ms,background-color_1500ms]"
  }
>
  <h1 class="basis-1/4 text-lg font-mono font-bold text-primary duration-1500">
    {$t.sections.experience.title}
  </h1>
  <div class="basis-3/4">
    <ol class="space-y-8">
      {#each experienceEntries as entry (`${entry.entity}-${entry.position}`)}
        <li class="flex flex-row-reverse gap-4 max-md:flex-col max-md:gap-2">
          <span class="basis-1/4 md:text-end text-text-accent duration-1500">
            {#if entry.start !== entry.end}
              {entry.start} - {entry.end}
            {:else}
              {entry.start}
            {/if}
          </span>
          <div class="basis-3/4 space-y-2">
            <h2 class="font-semibold">
              {entry.position}
              {#if entry.note}
              <span class="ml-2 text-sm text-text-accent duration-1500">
                {entry.note}
              </span>
            {/if}
            </h2>
            <p class="flex gap-2 items-center">
              {entry.entity}
            </p>
            {#if entry.links}
              <div class="flex gap-2">
                {#each entry.links as { url, title, icon: Icon } (url)}
                  <a href={url} title={title} aria-label={title} target="_blank" rel="noopener noreferrer">
                    <Icon class="size-5" aria-hidden/>
                  </a>
                {/each}
              </div>
            {/if}
            {#if entry.summary}
              <ul class="space-y-2 ml-6 pt-2 [&>li]:before:mr-2 [&>li]:before:font-mono [&>li]:before:content-['|>']">
                {#each entry.summary as item (item)}
                  <li>{item}</li>
                {/each}
              </ul>
            {/if}
          </div>
        </li>
      {/each}
    </ol>
  </div>
</section>
