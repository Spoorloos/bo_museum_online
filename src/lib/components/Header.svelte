<!-- Script -->
<script>
    import CustomSelect from "./CustomSelect.svelte";
    import CustomButton from "./CustomButton.svelte";

    import { locale, _ } from "svelte-i18n";
    import { base } from "$app/paths";
</script>

<!-- Content -->
<header>
    <a class="fade-slide" href={base + "/"}>
        <img alt="logo" src="img/logo_and_title.png"/>
    </a>

    <nav class="fade-slide">
        <CustomSelect
            bind:selected={ $locale }
            options={ [ "en", "nl" ] }
        />

        <a href={base + "/whats-on"}>
            <CustomButton>{ $_("header.whats_on") }</CustomButton>
        </a>
    
        <a href={base + "/about-us"}>
            <CustomButton>{ $_("header.about_us") }</CustomButton>
        </a>

        <a href={base + "/contact"}>
            <CustomButton>{ $_("header.contact") }</CustomButton>
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
        z-index: 1000;
    }

    nav {
        display: inline-flex;
        justify-content: space-between;
        gap: 20px;
        height: 100%;
    }
</style>
