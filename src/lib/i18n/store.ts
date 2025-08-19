import { derived, writable } from "svelte/store";
import { en } from "./en";
import { es } from "./es";

const i18n = {
  en,
  es,
} as const;

export const lang = writable<Lang>("en");
export const t = derived(lang, $lang => i18n[$lang]);

type Lang = keyof typeof i18n;
