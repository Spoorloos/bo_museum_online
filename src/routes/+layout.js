import { waitLocale, register, init } from "svelte-i18n";

// Register languages
register("en", () => import("$lib/json/en.json"))
register("nl", () => import("$lib/json/nl.json"))

init({ fallbackLocale: "en", initialLocale: "en" });

// Set page options
export const prerender = true;

// Load function
export async function load(data) {
    await waitLocale();
    return { path: data.url.pathname };
}