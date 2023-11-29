<script lang="ts">
    import "$lib/styles/buttons.css";
    import language from "$lib/stores/language.ts";
	import { slide } from "svelte/transition";

    let currentLanguage = "en";

    $: (async () => {
        language.set(await import(`$lib/lang/${currentLanguage}.json`));
    })();
</script>

<header>
    <img id="logo" alt="logo" src="logo_and_title.png" class="fade-slide"/>
    <nav class="fade-slide">
        <select title="select-lang" id="language-picker-select" bind:value={currentLanguage}>
            <option lang="en" value="en">EN</option>
            <option lang="nl" value="nl">NL</option>
        </select>

        {#each Object.values($language.header) as head}
            <button class="fill-button" type="button">{head}</button>
        {/each}
    </nav>
</header>

<style>
    header {
        top: 0;
        position: sticky;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(10px);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        height: 50px;
        box-shadow: 0 0 200px 100px black;
    }

    #logo {
        height: 100%
    }

    nav {
        display: inline-flex;
        justify-content: space-between;
        gap: 20px;
        height: 100%;
    }

    #language-picker-select {
        color: white;
        background-color: transparent;
        border: none;
        border-bottom: thin solid white;
        font-family: sans-serif;
        font-weight: bold;
        outline: none;
        cursor: pointer;

        & option {
            background-color: black;
        }
    }
</style>