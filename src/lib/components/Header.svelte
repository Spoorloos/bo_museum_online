<!-- Script -->
<script>
    import CustomSelect from "./CustomSelect.svelte";
    import CustomButton from "./CustomButton.svelte";

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

        <a tabindex="-1" href="{base}/whats-on/">
            <CustomButton>{ $_("header.whats_on") }</CustomButton>
        </a>
    
        <a tabindex="-1" href="{base}/about-us/">
            <CustomButton>{ $_("header.about_us") }</CustomButton>
        </a>

        <a tabindex="-1" href="{base}/tickets/">
            <CustomButton>{ $_("header.tickets") }</CustomButton>
        </a>
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
