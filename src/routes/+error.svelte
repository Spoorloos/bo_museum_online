<script>
    import { page } from '$app/stores';
</script>

<section>
    <div id="dino-game">
        <div id="dino"></div>
    </div>
    <h1>{$page.status}: {$page.error.message}</h1>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        font-family: "Segoe UI";
        position: relative;
        left: 50%;
        translate: -50%;
        padding: var(--page-spacing);
    }

    h1 {
        margin: 0;
        margin-top: var(--page-spacing);
    }

    #dino-game {
        background-color: gray;
        width: 100%;
        height: 13rem;
        border-bottom: white solid thin;
    }

    #dino {
        width: 2rem;
        height: 2rem;
        background-color: white;
        position: relative;
        top: calc(100% - 2rem);
    }
</style>