<script lang="ts">
  import { t } from "$lib/i18n/store";
</script>

<section
  id={$t.sections.projects.id}
  class={
    "flex gap-6 px-8 py-6 rounded-xl bg-text/2.5 hover:ring-2 hover:ring-primary/20 max-lg:flex-col"
    + " [transition:box-shadow_200ms,background-color_1500ms]"
  }
>
  <h1 class="basis-1/4 text-lg font-mono font-bold text-primary duration-1500">
    {$t.sections.projects.title}
  </h1>
  <div class="basis-3/4">
  </div>
</section>
