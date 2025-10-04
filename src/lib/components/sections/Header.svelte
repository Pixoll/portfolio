<script lang="ts">
  import { browser } from "$app/environment";
  import Dropdown from "$lib/components/Dropdown.svelte";
  import { lang, langs, t } from "$lib/i18n/store";
  import GitHub from "$lib/icons/GitHub.svelte";
  import Lang from "$lib/icons/Lang.svelte";
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

  $effect(() => {
    localStorage.setItem(THEME_KEY, theme);

    const classList = document.documentElement.classList;
    if (theme === "light") {
      classList.remove("dark");
    } else {
      classList.add("dark");
    }
  });

  function onThemeSwitchClick(): void {
    theme = theme === "light" ? "dark" : "light";
  }
</script>

<nav
  class={
    "fixed w-full flex justify-between items-center px-12 py-4 text-orange-500 bg-amber-100 dark:text-orange-400"
    + " dark:bg-gray-950 transition-all duration-600"
  }
  lang={$t.langId}
>
  <section
    class={
      "flex gap-6 font-mono font-bold w-fit [&>a]:hover:underline [&>a]:decoration-2 [&>a]:underline-offset-2"
      + " [&>a]:decoration-orange-500 dark:[&>a]:decoration-orange-400"
    }
  >
    <a href="#top">{$t.sections.home}</a>
    <a href="#about-me">{$t.sections.aboutMe}</a>
    <a href="#experience">{$t.sections.experience}</a>
    <a href="#projects">{$t.sections.projects}</a>
    <a href="#education">{$t.sections.education}</a>
  </section>

  <section class="flex gap-6 items-center">
    <div class="flex gap-4 [&_svg]:size-8 items-center">
      <a href="https://github.com/Pixoll" title="GitHub" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
        <GitHub aria-hidden/>
      </a>
    </div>

    <div class="flex gap-4 [&_svg]:size-7 items-center">
      <Dropdown
        class="font-mono"
        class-options="rounded-lg border-2 border-orange-400 bg-amber-100 dark:bg-gray-900"
        class-option="font-mono px-3 py-2"
        title={$t.header.changeLanguage}
        aria-label={$t.header.changeLanguage}
        options={langs}
        bind:value={$lang}
        icon={Lang}
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
  </section>
</nav>
