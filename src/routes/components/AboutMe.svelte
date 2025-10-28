<script lang="ts">
  import AnimatedCarousel from "$lib/components/AnimatedCarousel.svelte";
  import { sections } from "$lib/data/sections";
  import { t } from "$lib/i18n/store";
  import LogoCPlusPlus from "$lib/icons/LogoCPlusPlus.svelte";
  import LogoCSharp from "$lib/icons/LogoCSharp.svelte";
  import LogoDjango from "$lib/icons/LogoDjango.svelte";
  import LogoDocker from "$lib/icons/LogoDocker.svelte";
  import LogoJava from "$lib/icons/LogoJava.svelte";
  import LogoJetpackCompose from "$lib/icons/LogoJetpackCompose.svelte";
  import LogoKotlin from "$lib/icons/LogoKotlin.svelte";
  import LogoNestJs from "$lib/icons/LogoNestJs.svelte";
  import LogoNextJs from "$lib/icons/LogoNextJs.svelte";
  import LogoNginx from "$lib/icons/LogoNginx.svelte";
  import LogoPython from "$lib/icons/LogoPython.svelte";
  import LogoSpringBoot from "$lib/icons/LogoSpringBoot.svelte";
  import LogoSvelte from "$lib/icons/LogoSvelte.svelte";
  import LogoTypeScript from "$lib/icons/LogoTypeScript.svelte";
  import { type Component } from "svelte";
  import type { SVGAttributes } from "svelte/elements";

  type SvgComponent = Component<SVGAttributes<SVGElement>>;

  const langSvgs: SvgComponent[] = [
    LogoCPlusPlus,
    LogoCSharp,
    LogoJava,
    LogoKotlin,
    LogoPython,
    LogoSvelte,
    LogoTypeScript,
  ];

  const toolSvgs: SvgComponent[] = [
    LogoDjango,
    LogoDocker,
    LogoJetpackCompose,
    LogoNestJs,
    LogoNextJs,
    LogoNginx,
    LogoSpringBoot,
  ];
</script>

<section
  id={$sections.aboutMe.id}
  class={
    "flex gap-6 px-8 py-6 rounded-xl bg-text/2.5 hover:ring-2 hover:ring-primary/20 max-lg:flex-col"
    + " [transition:box-shadow_200ms,background-color_1500ms]"
  }
>
  <h1 class="basis-1/4 text-lg font-mono font-bold text-primary duration-1500">
    {$sections.aboutMe.title}
  </h1>
  <div class="basis-3/4 space-y-4">
    <p>{$t.aboutMe.paragraph1}</p>
    <p>{$t.aboutMe.paragraph2}</p>

    <div class="flex flex-col gap-8 w-3/4 py-8 items-center place-self-center">
      <!-- TODO moderate CPU usage, find a way to not use duplicate -->
      <AnimatedCarousel svgs={langSvgs}/>
      <AnimatedCarousel svgs={toolSvgs} offset-half/>
    </div>

    <p>{$t.aboutMe.paragraph3}</p>
  </div>
</section>
