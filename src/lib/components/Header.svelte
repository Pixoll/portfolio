<script lang="ts">
  import { browser } from "$app/environment";
  import { lang, t } from "$lib/i18n/store";
  import GitHub from "$lib/icons/GitHub.svelte";
  import Lang from "$lib/icons/Lang.svelte";
  import Moon from "$lib/icons/Moon.svelte";
  import Sun from "$lib/icons/Sun.svelte";

  type Theme = "dark" | "light" | "initial";

  const THEME_KEY = "theme";

  let theme = $state<Theme>(browser
    ? (localStorage.getItem(THEME_KEY) ?? "initial") as Theme
    : "initial"
  );

  $effect(() => {
    if (theme === "initial") return;

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

  function onLanguageSwitchClick(): void {
    $lang = $lang === "es" ? "en" : "es";
  }
</script>

<nav
  class={
    "flex justify-between items-center px-12 py-3 w-screen text-orange-500 bg-amber-50 dark:text-orange-500"
    + " dark:bg-gray-900 transition-all duration-300"
  }
>
  <ul
    class={
      "flex gap-6 font-semibold w-fit [&>li]:hover:underline [&>li]:decoration-orange-500 [&>li]:decoration-2"
      + " [&>li]:underline-offset-2"
    }
  >
    <li>
      <a href="#">{$t.sections.home}</a>
    </li>
    <li>
      <a href="#about-me">{$t.sections.aboutMe}</a>
    </li>
    <li>
      <a href="#experience">{$t.sections.experience}</a>
    </li>
    <li>
      <a href="#projects">{$t.sections.projects}</a>
    </li>
    <li>
      <a href="#education">{$t.sections.education}</a>
    </li>
  </ul>

  <div class="flex gap-6">
    <ul class="flex gap-2 [&_svg]:size-8">
      <li>
        <a href="https://github.com/Pixoll" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <GitHub aria-hidden/>
        </a>
      </li>
    </ul>

    <ul class="flex gap-2 [&_svg]:size-7">
      <li>
        <button
          type="button"
          class="hover:cursor-pointer"
          aria-label={$t.header.toggleLanguage}
          onclick={onLanguageSwitchClick}
        >
          <Lang aria-hidden/>
        </button>
      </li>
      <li>
        <button
          type="button"
          class="hover:cursor-pointer"
          aria-label={$t.header.toggleDarkMode}
          aria-pressed={theme !== "light"}
          onclick={onThemeSwitchClick}
        >
          {#if theme === "light"}
            <Moon aria-hidden/>
          {:else}
            <Sun aria-hidden/>
          {/if}
        </button>
      </li>
    </ul>
  </div>
</nav>
