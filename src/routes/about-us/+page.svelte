<script>
    import { _ } from "svelte-i18n";
</script>

<section id="about-us-page-content">
    <h1>{ $_("header.about_us") }</h1>
</section>

<style>    
    #about-us-page-content {
        padding: var(--page-spacing);
        box-sizing: border-box;
    }

    h1 {
        margin: 0;
        font-size: 3rem;
    }
</style>