<!-- Script -->
<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<!-- Page -->
<Header/>
<slot/>
<Footer/>

<!-- Style -->
<style>
    :global(body) {
        color: white;
        background-color: black;
        font-family: sans-serif;
    }
</style>