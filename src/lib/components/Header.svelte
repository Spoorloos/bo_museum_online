<!-- Script -->
<script>
    import "$lib/styles/buttons.css";
    import CustomSelect from "./CustomSelect.svelte";
    import { locale, _ } from "svelte-i18n";
</script>

<!-- Content -->
<header>
    <img id="logo" alt="logo" src="img/logo_and_title.png" class="fade-slide"/>

    <nav class="fade-slide">
        <CustomSelect
            bind:selected={ $locale }
            options={ [ "en", "nl" ] }
        />

        <button class="fill-button" type="button">{ $_("header.whats_on") }</button>
        <button class="fill-button" type="button">{ $_("header.about_us") }</button>
        <button class="fill-button" type="button">{ $_("header.contact") }</button>
    </nav>
</header>

<!-- Style -->
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
    }

    #logo {
        height: 50px;
    }

    nav {
        display: inline-flex;
        justify-content: space-between;
        gap: 20px;
        height: 100%;
    }
</style>
