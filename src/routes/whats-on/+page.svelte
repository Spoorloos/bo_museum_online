<script>
    import { _ } from "svelte-i18n";
</script>

<section id="whats-on-page-content">
    <h1>{ $_("header.whats_on") }</h1>
</section>

<style>    
    #whats-on-page-content {
        padding: var(--page-spacing);
        box-sizing: border-box;
    }

    h1 {
        margin: 0;
        font-size: 3rem;
    }
</style>