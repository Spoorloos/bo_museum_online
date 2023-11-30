<!-- Script -->
<script>
    import "$lib/styles/buttons.css";
    import CustomSelect from "./CustomSelect.svelte";
    import { locale, _ } from "svelte-i18n";
    import { base } from "$app/paths";
</script>

<!-- Content -->
<header>
    <a href={base + "/"}>
        <img alt="logo" src="img/logo_and_title.png" class="fade-slide"/>
    </a>

    <nav class="fade-slide">
        <CustomSelect
            bind:selected={ $locale }
            options={ [ "en", "nl" ] }
        />

        <a href={base + "/whats-on"}>
            <button class="fill-button" type="button">{ $_("header.whats_on") }</button>
        </a>
    
        <a href={base + "/about-us"}>
            <button class="fill-button" type="button">{ $_("header.about_us") }</button>
        </a>

        <a href={base + "/contact"}>
            <button class="fill-button" type="button">{ $_("header.contact") }</button>
        </a>
    </nav>
</header>

<!-- Style -->
<style>
    a, button, img {
        height: 100%;
    }

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
        z-index: 1;
    }

    nav {
        display: inline-flex;
        justify-content: space-between;
        gap: 20px;
        height: 100%;
    }
</style>
