<!-- Script -->
<script>
    export let data;

    import "$lib/styles/global.css";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";

	import { fade } from "svelte/transition";
</script>

<!-- Svelte Head -->
<svelte:head>
    <title>Museum Online</title>
</svelte:head>

<!-- Page -->
<Header/>
{#key data.path}
    <main in:fade={{ duration: 250, delay: 250 }} out:fade={{ duration: 250 }}>
        <slot/>
    </main>
{/key}
<Footer/>

<!-- Styles -->
<style>
    main { width: 100%; }
</style>