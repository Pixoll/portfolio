import { derived, writable } from "svelte/store";
import { en } from "./en";
import { es } from "./es";

const i18n = {
  en,
  es,
} as const;

export const langs = Object.freeze(Object.values(i18n).map(l => Object.freeze({
  id: l.langId,
  name: l.langName,
})));
export const lang = writable<Lang>("en");
export const t = derived(lang, $lang => i18n[$lang]);

type Lang = keyof typeof i18n;
