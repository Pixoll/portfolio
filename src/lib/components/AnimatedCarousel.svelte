<script lang="ts">
  import type { Component } from "svelte";
  import type { SVGAttributes } from "svelte/elements";

  type Props = {
    svgs: Array<Component<SVGAttributes<SVGElement>>>;
    "offset-half"?: boolean;
  };

  let { svgs, "offset-half": offsetHalf }: Props = $props();
</script>

<div
  class={
    "relative flex flex-row w-full h-16 overflow-hidden "
    + "[mask-image:linear-gradient(to_right,transparent_0,black_200px,black_calc(100%-200px),transparent_100%)]"
  }
>
  <div class="absolute flex gap-8 pr-8 animate-infinite-scroll">
    {#each svgs as Svg (Svg)}
      <Svg class={"size-16 " + (offsetHalf ? "translate-x-[calc(100%-1rem)]" : "")} aria-hidden/>
    {/each}
  </div>
  <div class="absolute flex gap-8 pr-8 translate-x-full animate-infinite-scroll">
    {#each svgs as Svg (Svg)}
      <Svg class={"size-16 " + (offsetHalf ? "translate-x-[calc(100%-1rem)]" : "")} aria-hidden/>
    {/each}
  </div>
</div>
