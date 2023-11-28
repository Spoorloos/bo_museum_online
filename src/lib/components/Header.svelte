<script lang="ts">
    import "$lib/styles/buttons.css";
    import language from "$lib/stores/language.ts";

    let currentLanguage = "en";

    $: (async() => {
        language.set(await import(`$lib/lang/${currentLanguage}.json`));
    })();
</script>

<header>
    <h1>Museum Online</h1>
    <div id="links">
        <select title="select-lang" id="language-picker-select" bind:value={currentLanguage}>
            <option lang="en" value="en" selected>EN</option>
            <option lang="nl" value="nl">NL</option>
        </select>

        <button class="fill-button">{$language?.header?.whatsOn}</button>
        <button class="fill-button">{$language?.header?.aboutUs}</button>
        <button class="fill-button">{$language?.header?.contact}</button>
        <button class="fill-button">{$language?.header?.blog}</button>
    </div>
</header>

<style>
    h1 {
        margin: 0;
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 75px;
        padding: 10px;
    }

    header :not(div) {
        animation: slide-in 1s both;
    }

    @keyframes slide-in {
        from {
            opacity: 0;
            margin-bottom: 50px;
        }
        to {
            opacity: 1;
            margin-bottom: 0;
        }
    }

    #links {
        display: inline-flex;
        justify-content: space-between;
        gap: 20px;
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