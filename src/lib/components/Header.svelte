<script lang="ts">
  import { browser } from "$app/environment";
  import GitHub from "$lib/icons/GitHub.svelte";
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
</script>

<nav
  class={
    "flex justify-between items-center px-12 py-3 w-screen text-orange-500 bg-amber-50 dark:text-orange-500"
    + " dark:bg-gray-900 transition-all duration-300"
  }
>
  <ul class="flex gap-6 font-semibold w-fit [&>li]:hover:cursor-pointer">
    <li>Home</li>
    <li>Experience</li>
    <li>Projects</li>
    <li>Education</li>
  </ul>

  <div class="flex gap-6">
    <ul class="flex gap-2 [&_svg]:size-8">
      <li>
        <a href="https://github.com/Pixoll" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <GitHub aria-hidden/>
        </a>
      </li>
    </ul>

    <button
      type="button"
      class="hover:cursor-pointer"
      aria-label="Toggle dark mode"
      aria-pressed={theme !== "light"}
      onclick={onThemeSwitchClick}
    >
      {#if theme === "light"}
        <Moon class="size-7" aria-hidden/>
      {:else}
        <Sun class="size-7" aria-hidden/>
      {/if}
    </button>
  </div>
</nav>
