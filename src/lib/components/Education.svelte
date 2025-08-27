<script lang="ts">
  import { t } from "$lib/i18n/store";

  type EducationEntry = {
    title: string;
    institution: string;
    start: string;
    end: string;
  };

  const educationEntries: EducationEntry[] = [
    {
      title: `${$t.education.bachelorOfEngineering} - ${$t.education.informaticsEngineering}`,
      institution: $t.education.universityOfConcepcion,
      start: "2023",
      end: $t.education.present,
    },
    {
      title: `${$t.education.bachelorOfAstronomy} - ${$t.education.astronomy}`,
      institution: $t.education.universityOfConcepcion,
      start: "2022",
      end: "2022",
    },
  ].sort((a, b) => b.start.localeCompare(a.start));
</script>

<section id="education" class="flex gap-6 py-8">
  <h1 class="basis-1/4 text-lg font-mono font-bold text-orange-500">{$t.sections.education}</h1>
  <div class="basis-3/4">
    <ol class="space-y-6">
      {#each educationEntries as entry (entry.title)}
        <li class="flex">
          <div class="basis-5/6 space-y-2">
            <h2 class="font-semibold">{entry.title}</h2>
            <p>{entry.institution}</p>
          </div>
          <span class="basis-1/6 text-end text-gray-600 dark:text-gray-300 transition-all duration-600">
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
