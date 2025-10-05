<script lang="ts">
  import { t } from "$lib/i18n/store";
</script>

<section
  id={$t.sections.projects.id}
  class="flex gap-6 px-8 py-6 rounded-xl [transition:background-color_200ms] hover:bg-text/2.5"
>
  <h1 class="basis-1/4 text-lg font-mono font-bold text-accent duration-600">
    {$t.sections.projects.title}
  </h1>
  <div class="basis-3/4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis pharetra libero. Nam egestas imperdiet dapibus.
    In hac habitasse platea dictumst. Cras in tellus leo. Suspendisse non varius diam. Etiam sit amet euismod ligula, et
    elementum tortor. Vivamus id sem dignissim, accumsan diam vitae, egestas turpis. Maecenas vulputate tortor auctor.
  </div>
</section>
