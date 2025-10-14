<script lang="ts">
  import "../app.css";
  import favicon from "$lib/assets/favicon.svg";
  import { t } from "$lib/i18n/store";
  import type { Snippet } from "svelte";
  import Header from "./components/Header.svelte";

  type Props = {
    children?: Snippet;
  };

  let { children }: Props = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon}/>
  <title>{$t.mainPageTitle}</title>
</svelte:head>

<div class="fixed left-0 -z-10 w-full h-screen overflow-clip">
  <div class="relative -top-[575vh] dark:top-0 [transition:top_1500ms]">
    <div class="h-[125vh] bg-gradient-to-t from-background3 via-background2 to-background1"></div>
    <div class="h-[175vh] bg-gradient-to-t from-background4 to-background3"></div>
    <div class="h-[100vh] bg-gradient-to-t from-background6 via-background5 to-background4"></div>
    <div class="h-[150vh] bg-gradient-to-t from-background8 via-background7 to-background6"></div>
    <div class="h-[50vh] bg-background8"></div>
    <div class="h-[75vh] bg-gradient-to-t from-background9 to-background8"></div>
  </div>
</div>

<Header/>
<main
  class={
    "max-w-[1250px] mx-auto px-12 pt-24 pb-8 text-text max-sm:px-4"
    + " [transition:color_1500ms,background-color_1500ms,padding_200ms]"
  }
  lang={$t.langId}
>
  {@render children?.()}
</main>
