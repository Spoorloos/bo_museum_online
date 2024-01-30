<!-- Script -->
<script>
    import CustomSelect from "./CustomSelect.svelte";

    import { locale, _ } from "svelte-i18n";
    import { base } from "$app/paths";
</script>

<!-- Content -->
<header>
    <a class="fade-slide-blur" href="{base}/">
        <img id="logo" alt="logo" src="img/logo-and-title.png"/>
    </a>

    <nav class="fade-slide-blur">
        <CustomSelect
            bind:selected={ $locale }
            options={ [ "en", "nl" ] }/>

        <a href="{base}/whats-on/" class="fill-button">{ $_("header.whats_on") }</a>
        <a href="{base}/about-us/" class="fill-button">{ $_("header.about_us") }</a>
        <a href="{base}/tickets/" class="fill-button">{ $_("header.tickets") }</a>
    </nav>
</header>

<!-- Style -->
<style>
    a, img {
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
        padding: var(--header-spacing);
        height: var(--header-height);
        box-sizing: border-box;
        z-index: 5;
    }

    #logo {
        transition: scale 0.3s;

        &:hover { scale: 1.1; }
    }

    nav {
        display: inline-flex;
        justify-content: space-between;
        gap: var(--header-spacing);
        height: 100%;
    }
</style>
