import { browser } from "$app/environment";
import { derived, writable } from "svelte/store";
import { en } from "./en";
import { es } from "./es";

const i18n = {
  en,
  es,
} as const;

export type I18n = typeof i18n[keyof typeof i18n];
export type Lang = keyof typeof i18n;

export const LANG_KEY = "lang";

export const langs = Object.freeze(Object.values(i18n).map(l => Object.freeze({
  id: l.langId,
  name: l.langName,
})));
export const lang = writable<Lang>(browser
  ? localStorage.getItem(LANG_KEY) as Lang | null ?? "en"
  : "en"
);
export const t = derived(lang, $lang => i18n[$lang]);
