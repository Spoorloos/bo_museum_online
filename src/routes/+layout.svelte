<!-- Script -->
<script>
    import "$lib/styles/global.css";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

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