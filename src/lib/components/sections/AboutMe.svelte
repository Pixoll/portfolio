<script lang="ts">
  import { t } from "$lib/i18n/store";
</script>

<section
  id={$t.sections.aboutMe.id}
  class={
    "flex gap-6 px-8 py-6 rounded-xl bg-text/2.5 hover:ring-2 hover:ring-primary/20 max-lg:flex-col"
    + " [transition:box-shadow_200ms,background-color_1500ms]"
  }
>
  <h1 class="basis-1/4 text-lg font-mono font-bold text-primary duration-1500">
    {$t.sections.aboutMe.title}
  </h1>
  <div class="basis-3/4 space-y-4">
    {#each $t.aboutMe.content as line (line)}
      <p>{line}</p>
    {/each}
  </div>
</section>
