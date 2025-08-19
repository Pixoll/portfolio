<script lang="ts">
  import AboutMe from "$lib/components/AboutMe.svelte";
  import Education from "$lib/components/Education.svelte";
  import Experience from "$lib/components/Experience.svelte";
  import Header from "$lib/components/Header.svelte";
  import Home from "$lib/components/Home.svelte";
  import Projects from "$lib/components/Projects.svelte";
</script>

<Header/>
<main
  class={
    "min-h-screen px-12 py-4 text-orange-500 bg-amber-50 dark:text-orange-500 dark:bg-gray-900 transition-all"
    + " duration-600"
  }
>
  <Home/>
  <AboutMe/>
  <Experience/>
  <Projects/>
  <Education/>
</main>
