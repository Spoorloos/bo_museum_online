<!-- Script -->
<script>
    import Article from "$lib/components/Article.svelte";
</script>

<!-- Content -->
<div>
    <Article
        title="NXT Museum"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        direction="left"
        style="max-width: 60%;"
        titleStyle="font-size: 6rem;"/>

    <Article
        title="Voorbeeld tekst"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        direction="right"
        style="max-width: 60%; align-self: flex-end;"
        titleStyle="font-size: 3rem;"/>
</div>

<!-- Style -->
<style>
    div {
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
</style>