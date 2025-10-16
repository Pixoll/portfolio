<script lang="ts">
  import { fade } from "svelte/transition";

  const size = Math.ceil(Math.random() * 5);
  const top = `${Math.ceil(Math.random() * 100)}%`;
  const left = `${Math.ceil(Math.random() * 100)}%`;
  const animationDelay = `${-Math.ceil(Math.random() * 10)}s`;
  const animationDuration = `${Math.ceil(Math.random() * 4) + 2}s`;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 2 2"
  class="absolute animate-twinkle"
  height={size}
  width={size}
  style:top={top}
  style:left={left}
  style:animation-delay={animationDelay}
  style:animation-duration={animationDuration}
  transition:fade
>
  <circle cx="1" cy="1" r="1" fill="white"/>
</svg>
