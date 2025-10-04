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
        const offsetPosition = targetElement ? targetElement.offsetTop - navbarHeight : 0;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      });
    });
  });
</script>

<Header/>
<main
  class={
    "min-h-screen px-12 pt-24 pb-8 text-gray-900 bg-amber-50 dark:text-amber-50 dark:bg-gray-900 transition-all"
    + " duration-600"
  }
  lang={$t.langId}
>
  <div class="max-w-[1000px] mx-auto">
    <Home/>
    <AboutMe/>
    <Experience/>
    <Projects/>
    <Education/>
  </div>
</main>
