<!-- Script -->
<script>
    import "$lib/styles/global.css";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<!-- Svelte Head -->
<svelte:head>
    <title>Museum Online</title>
</svelte:head>

<!-- Page -->
<Header/>
<div id="page-content">
    <slot/>
</div>
<Footer/>

<!-- Styles -->
<style>
    #page-content {
        padding: 5%;
    }
</style>