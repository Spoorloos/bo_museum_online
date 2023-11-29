<script lang="ts">
    import "$lib/styles/buttons.css";

    import english from "$lib/lang/en.json";
    import nederlands from "$lib/lang/nl.json";
    import language from "$lib/stores/language.ts";

    let currentLanguage = "en";
    $: language.set(currentLanguage === "en" ? english : nederlands);
</script>

<header>
    <h1>Museum Online</h1>
    <nav>
        <select title="select-lang" id="language-picker-select" bind:value={currentLanguage}>
            <option lang="en" value="en">EN</option>
            <option lang="nl" value="nl">NL</option>
        </select>

        <button class="fill-button">{$language.header.whatsOn}</button>
        <button class="fill-button">{$language.header.aboutUs}</button>
        <button class="fill-button">{$language.header.contact}</button>
        <button class="fill-button">{$language.header.blog}</button>
    </nav>
</header>

<style>
    h1 {
        margin: 0;
    }

    header {
        position: sticky;
        top: 0;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(10px);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        height: 50px;
    }

    header > * {
        position: relative;
        animation: slide-in 1s both;
    }

    @keyframes slide-in {
        from {
            opacity: 0;
            bottom: 50px;
        }
        to {
            opacity: 1;
            bottom: 0;
        }
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