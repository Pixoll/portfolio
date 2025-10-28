<script lang="ts">
  import { browser } from "$app/environment";
  import { page } from "$app/state";
  import { clickOutside } from "$lib/actions/click-outside";
  import Dropdown from "$lib/components/Dropdown.svelte";
  import { sectionEntries } from "$lib/data/sections";
  import { lang, LANG_KEY, langs, t } from "$lib/i18n/store";
  import GitHub from "$lib/icons/GitHub.svelte";
  import Language from "$lib/icons/Language.svelte";
  import Logo from "$lib/icons/Logo.svelte";
  import Moon from "$lib/icons/Moon.svelte";
  import Sun from "$lib/icons/Sun.svelte";
  import { MediaQuery } from "svelte/reactivity";

  type Theme = "dark" | "light";

  type AnchorMouseEvent = MouseEvent & {
    currentTarget: (EventTarget & HTMLAnchorElement)
  };

  const THEME_KEY = "theme";
  const small = new MediaQuery("width < 64rem", false);

  let navRef: HTMLElement;
  let theme = $state<Theme>(browser
    ? (localStorage.getItem(THEME_KEY)
      ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    ) as Theme
    : "dark"
  );

  let showSections = $derived(!small.current);

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

  function onSectionAnchorClick(event: AnchorMouseEvent | undefined): void {
    showSections = !small.current;

    if (!event) return;

    event.preventDefault();

    const targetId = event.currentTarget.getAttribute("href")?.substring(1);
    if (!targetId) return;

    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const offsetPosition = targetElement.offsetTop - navRef.offsetHeight - 2;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }

  function onThemeSwitchClick(): void {
    theme = theme === "light" ? "dark" : "light";
  }
</script>

<nav
  bind:this={navRef}
  class={
    "fixed z-10 w-full flex justify-between items-center px-20 py-4 text-primary border-b-2 border-b-primary/50"
    + " backdrop-blur-sm bg-background1/80 dark:bg-transparent dark:border-b-primary/20 max-sm:px-6"
    + " [transition:color_1500ms,background-color_1500ms,border-bottom-color_1500ms,padding_200ms]"
  }
  lang={$t.langId}
>
  <div class="relative flex gap-10 items-center">
    <button
      type="button"
      class="hover:cursor-pointer"
      title={showSections ? $t.header.hideSections : $t.header.showSections}
      aria-label={showSections ? $t.header.hideSections : $t.header.showSections}
      onclick={() => showSections = !showSections}
    >
      <Logo class="size-8" aria-hidden/>
    </button>

    <div
      class={
        "w-fit invisible opacity-0 top-0 translate-x-0 -translate-y-[calc(100%+4rem)] aria-expanded:visible"
        + " aria-expanded:opacity-100 aria-expanded:translate-y-0 transition-discrete max-lg:absolute"
        + " max-lg:translate-y-0 max-lg:top-10 max-lg:-translate-x-full max-lg:aria-expanded:translate-x-0"
        + " max-lg:rounded-lg max-lg:border-2 max-lg:border-primary max-lg:bg-background2/95"
        + " [transition:visibility_200ms,opacity_200ms,translate_200ms,top_200ms]"
        + " max-lg:[transition:visibility_200ms,opacity_200ms,translate_200ms,top_200ms,background-color_200ms]"
      }
      aria-expanded={showSections}
      use:clickOutside
      onclickoutside={() => showSections = small.current ? false : showSections}
    >
      <div
        class={
          "flex gap-6 font-mono font-bold w-full text-transparent bg-clip-text bg-gradient-to-r from-primary"
          + " to-secondary max-lg:flex-col max-lg:gap-4 max-lg:px-3 max-lg:py-2"
        }
      >
        {#each $sectionEntries as section (section.id)}
          <a
            class="hover:underline decoration-2 underline-offset-2 decoration-primary"
            href={`#${section.id}`}
            onclick={onSectionAnchorClick}
          >
            {section.title}
          </a>
        {/each}
      </div>
    </div>
  </div>

  <div class="flex gap-6 items-center text-secondary">
    <div class="flex gap-4 [&_svg]:size-8 items-center">
      <a href="https://github.com/Pixoll" title="GitHub" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
        <GitHub aria-hidden/>
      </a>
    </div>

    <div class="flex gap-4 [&_svg]:size-7 items-center">
      <div class="relative font-mono">
        <Dropdown
          class="hover:underline decoration-2 underline-offset-2 decoration-secondary"
          class-options="rounded-lg border-2 border-secondary bg-background2/95"
          class-option="px-3 py-2 hover:underline decoration-2 underline-offset-2 decoration-secondary"
          title={$t.header.changeLanguage}
          aria-label={$t.header.changeLanguage}
          options={langs}
          bind:value={$lang}
          icon={Language}
        />
      </div>

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
