<script lang="ts">
  import type { SVGAttributes } from "svelte/elements";

  type Props = SVGAttributes<SVGElement>;

  let props: Props = $props();
</script>

<!-- eslint-disable max-len -->
<!-- https://iconify.design lucide:globe -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em" {...props}>
  <!--suppress HtmlDeprecatedAttribute -->
  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"/>
  </g>
</svg>
