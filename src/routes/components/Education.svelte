<script lang="ts">
  import { t } from "$lib/i18n/store";

  type EducationEntry = {
    title: string;
    institution: string;
    start: string;
    end: string;
    note?: string;
  };

  let educationEntries = $derived<EducationEntry[]>([
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
</script>

<section
  id={$t.sections.education.id}
  class={
    "flex gap-6 px-8 py-6 rounded-xl bg-text/2.5 hover:ring-2 hover:ring-primary/20 max-lg:flex-col"
    + " [transition:box-shadow_200ms,background-color_1500ms]"
  }
>
  <h1 class="basis-1/4 text-lg font-mono font-bold text-primary duration-1500">
    {$t.sections.education.title}
  </h1>
  <div class="basis-3/4">
    <ol class="space-y-8">
      {#each educationEntries as entry (entry.title)}
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
              {entry.title}
              {#if entry.note}
              <span class="ml-2 text-sm text-text-accent duration-1500">
                {entry.note}
              </span>
            {/if}
            </h2>
            <p>{entry.institution}</p>
          </div>
        </li>
      {/each}
    </ol>
  </div>
</section>
