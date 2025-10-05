<script lang="ts" generics="T">
  import type { Component } from "svelte";
  import type { Action } from "svelte/action";
  import type { HTMLButtonAttributes } from "svelte/elements";

  type Option = {
    id: T;
    name: string;
  }

  type Props = Pick<HTMLButtonAttributes, "aria-label" | "title"> & {
    options: readonly Option[];
    value: T;
    icon?: Component<{ "aria-hidden"?: boolean; class?: string }>;
    class?: string;
    "class-options"?: string;
    "class-option"?: string;
  };

  let {
    "aria-label": ariaLabel,
    title,
    options,
    value = $bindable(options[0]?.id),
    icon: Icon,
    class: classProp = "",
    "class-options": optionsClass,
    "class-option": optionClass,
  }: Props = $props();

  let expanded = $state(false);

  function onSelect(option: Option): void {
    value = option.id;
    expanded = false;
  }

  const clickOutside: Action<HTMLDivElement, undefined, { onclickoutside: (e: CustomEvent) => void }> = (node) => {
    const handleClick = (event: Event) => {
      if (node && event.target && !node.contains(event.target as Node) && !event.defaultPrevented) {
        node.dispatchEvent(new CustomEvent("clickoutside"));
      }
    };

    document.addEventListener("click", handleClick, true);

    // noinspection JSUnusedGlobalSymbols
    return {
      destroy() {
        document.removeEventListener("click", handleClick, true);
      }
    };
  };
</script>

<div class="relative">
  <button
    type="button"
    class={"flex flex-row items-center gap-2 cursor-pointer " + classProp}
    title={title}
    aria-label={ariaLabel}
    onclick={() => expanded = !expanded}
  >
    {#if Icon}
      <Icon aria-hidden class="inline size-3"/>
    {/if}
    {options.find(o => o.id === value)?.name}
  </button>
  <!--suppress HtmlUnknownAttribute -->
  <div
    class={"absolute -bottom-2 translate-y-full " + (optionsClass ?? "")}
    hidden={!expanded}
    use:clickOutside
    onclickoutside={() => expanded = false}
  >
    {#each options as option (option.id)}
      <button
        type="button"
        class={"w-full text-left enabled:cursor-pointer " + (optionClass ?? "")}
        onclick={() => onSelect(option)}
        disabled={!expanded}
      >
        {option.name}
      </button>
    {/each}
  </div>
</div>
