<script lang="ts">
  import { browser } from "$app/environment";
  import Dropdown from "$lib/components/Dropdown.svelte";
  import { type I18n, lang, LANG_KEY, langs, t } from "$lib/i18n/store";
  import GitHub from "$lib/icons/GitHub.svelte";
  import Language from "$lib/icons/Language.svelte";
  import Moon from "$lib/icons/Moon.svelte";
  import Sun from "$lib/icons/Sun.svelte";

  type Theme = "dark" | "light";

  const THEME_KEY = "theme";

  let theme = $state<Theme>(browser
    ? (localStorage.getItem(THEME_KEY)
      ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    ) as Theme
    : "dark"
  );

  type Section = I18n["sections"][keyof I18n["sections"]];

  let sections = $derived<Section[]>(Object.values($t.sections));

  $effect(() => {
    localStorage.setItem(THEME_KEY, theme);

    const classList = document.documentElement.classList;
    if (theme === "light") {
      classList.remove("dark");
    } else {
      classList.add("dark");
    }
  });

  $effect(() => {
    localStorage.setItem(LANG_KEY, $lang);
  });

  function onThemeSwitchClick(): void {
    theme = theme === "light" ? "dark" : "light";
  }
</script>

<nav
  class={
    "fixed z-10 w-full flex justify-between items-center px-12 py-4 text-primary backdrop-blur-sm"
    + " transition-colors duration-1500"
  }
  lang={$t.langId}
>
  <div
    class={
      "flex gap-6 font-mono font-bold w-fit [&>a]:hover:underline [&>a]:decoration-2 [&>a]:underline-offset-2"
      + " [&>a]:decoration-primary"
    }
  >
    {#each sections as section (section.id)}
      <a href={`#${section.id}`}>{section.title}</a>
    {/each}
  </div>

  <div class="flex gap-6 items-center">
    <div class="flex gap-4 [&_svg]:size-8 items-center">
      <a href="https://github.com/Pixoll" title="GitHub" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
        <GitHub aria-hidden/>
      </a>
    </div>

    <div class="flex gap-4 [&_svg]:size-7 items-center">
      <Dropdown
        class="font-mono hover:underline decoration-2 underline-offset-2 decoration-primary"
        class-options="rounded-lg border-2 border-primary bg-background/85 transition-colors duration-1500"
        class-option="font-mono px-3 py-2 hover:underline decoration-2 underline-offset-2 decoration-primary"
        title={$t.header.changeLanguage}
        aria-label={$t.header.changeLanguage}
        options={langs}
        bind:value={$lang}
        icon={Language}
      />

      <button
        type="button"
        class="hover:cursor-pointer"
        title={$t.header.toggleDarkMode}
        aria-label={$t.header.toggleDarkMode}
        aria-pressed={theme !== "light"}
        onclick={onThemeSwitchClick}
      >
        {#if theme === "light"}
          <Sun aria-hidden/>
        {:else}
          <Moon aria-hidden/>
        {/if}
      </button>
    </div>
  </div>
</nav>
