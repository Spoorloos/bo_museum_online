<!-- Script -->
<script>
    export let data;

    import "$lib/styles/global.css";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<!-- Page -->
<Header/>
{#key data.path}
    <main class="fade">
        <slot/>
        <Footer/>
    </main>
{/key}

<!-- Styles -->
<style>
    main {
        display: flex;
        flex-direction: column;
        gap: var(--page-spacing);
        width: 100%; 
    }
</style>