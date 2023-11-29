<script lang="ts">
    import "$lib/styles/buttons.css";
    import language from "$lib/stores/language.ts";

    let currentLanguage = "en";

    $: (async () => {
        language.set(await import(`$lib/lang/${currentLanguage}.json`));
    })();
</script>

<header>
    <img
        id="logo"
        alt="logo"
        src="logo_and_title.png"/>
    <nav>
        <select title="select-lang" id="language-picker-select" bind:value={currentLanguage}>
            <option lang="en" value="en">EN</option>
            <option lang="nl" value="nl">NL</option>
        </select>

        <button class="fill-button" type="button">{$language.header.whatsOn}</button>
        <button class="fill-button" type="button">{$language.header.aboutUs}</button>
        <button class="fill-button" type="button">{$language.header.contact}</button>
        <button class="fill-button" type="button">{$language.header.blog}</button>
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
        z-index: 1;
    }

    #logo {
        height: 100%
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