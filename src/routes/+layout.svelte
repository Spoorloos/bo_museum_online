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
    <div
        class="page-trans"
        in:fade={{ duration: 250, delay: 250 }}
        out:fade={{ duration: 250 }}
    >
        <slot/>
    </div>
{/key}
<Footer/>

<!-- Styles -->
<style>
    .page-trans {
        width: 100%;
        height: 100%;
    }
</style>