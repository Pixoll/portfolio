<script lang="ts">
  import { t } from "$lib/i18n/store";
  import Logo from "$lib/icons/Logo.svelte";
  import { onMount } from "svelte";

  const msPerChar = 75;
  const name = "Pixoll";
  const nameChars = $state(name.split("").map(c => ({
    char: c,
    fontClass: "font-mono",
  })));

  onMount(() => {
    const interval = setInterval(() => {
      for (let i = 0; i < nameChars.length; i++) {
        const char = nameChars[i];
        if (char) {
          setTimeout(() => {
            char.fontClass = char.fontClass ? "" : "font-mono";
          }, msPerChar * i);
        }
      }
    }, msPerChar * name.length * 10);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<div class="flex gap-6 px-8 py-6 mb-12">
  <div class="max-md:w-full w-1/2">
    <span class="text-[4rem] font-bold">
      {$t.home.hi}
      <span class="flex gap-4 h-24 items-center -mt-4">
        <Logo class="size-[4rem] shrink-0 text-primary" aria-hidden/>
        <span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
          {#each nameChars as { char, fontClass }, i (i)}
            <span class={fontClass}>{char}</span>
          {/each}
        </span>
      </span>
    </span>
    <span class="text-[2.5rem] font-medium">
      {$t.home.subtitle}
    </span>
  </div>
</div>
