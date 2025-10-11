import type { Action } from "svelte/action";

type ClickOutsideAction = Action<HTMLDivElement, undefined, { onclickoutside: (e: CustomEvent) => void }>;

export const clickOutside: ClickOutsideAction = (node) => {
  const handleClick = (event: Event) => {
    if (event.target && !node.contains(event.target as Node) && !event.defaultPrevented) {
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
