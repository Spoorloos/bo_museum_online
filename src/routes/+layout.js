import { waitLocale, register, init } from "svelte-i18n";

// Register languages
register("en", () => import('$lib/lang/en.json'))
register("nl", () => import('$lib/lang/nl.json'))

init({ fallbackLocale: "en", initialLocale: "en" });

// Load function
export async function load() {
    await waitLocale();
}

export const prerender = true;