<script lang="ts">
  import "../app.css";
  import favicon from "$lib/assets/favicon.svg";
  import { t } from "$lib/i18n/store";
  import type { Snippet } from "svelte";

  type Props = {
    children?: Snippet;
  };

  let { children }: Props = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon}/>
  <title>{$t.mainPageTitle}</title>
</svelte:head>

{@render children?.()}
