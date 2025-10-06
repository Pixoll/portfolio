<script lang="ts">
  import AboutMe from "$lib/components/sections/AboutMe.svelte";
  import Education from "$lib/components/sections/Education.svelte";
  import Experience from "$lib/components/sections/Experience.svelte";
  import Header from "$lib/components/sections/Header.svelte";
  import Home from "$lib/components/sections/Home.svelte";
  import Projects from "$lib/components/sections/Projects.svelte";
  import { t } from "$lib/i18n/store";
  import { onMount } from "svelte";

  onMount(() => {
    const navbarHeight = document.querySelector("nav")?.offsetHeight ?? 0;
    const links = document.querySelectorAll("a[href^=\"#\"]");

    links.forEach((link) => {
      link.addEventListener("click", function (this: Element, event) {
        event.preventDefault();
        const targetId = this.getAttribute("href")?.substring(1);
        if (!targetId) return;

        const targetElement = document.getElementById(targetId);
        const offsetPosition = targetElement ? targetElement.offsetTop - navbarHeight - 2 : 0;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      });
    });
  });
</script>

<div class="fixed left-0 -z-10 w-full h-screen overflow-clip">
  <div class="relative -top-[400vh] dark:top-0 [transition:top_1500ms]">
    <div class="h-[75vh] bg-gradient-to-t from-background3 via-background2 to-background1"></div>
    <div class="h-[100vh] bg-gradient-to-t from-background4 to-background3"></div>
    <div class="h-[75vh] bg-gradient-to-t from-background6 via-background5 to-background4"></div>
    <div class="h-[125vh] bg-gradient-to-t from-background8 via-background7 to-background6"></div>
    <div class="h-[50vh] bg-background8"></div>
    <div class="h-[75vh] bg-gradient-to-t from-background9 to-background8"></div>
  </div>
</div>

<Header/>
<main
  class={
    "min-h-screen px-12 pt-24 pb-8 text-text max-sm:px-4"
    + " [transition:color_1500ms,background-color_1500ms,padding_200ms]"
  }
  lang={$t.langId}
>
  <div class="flex flex-col gap-4 max-w-[1250px] mx-auto">
    <Home/>
    <AboutMe/>
    <Experience/>
    <Projects/>
    <Education/>
  </div>
</main>
