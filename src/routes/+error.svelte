<script>
    import { page } from '$app/stores';
</script>

<section>
    <img src="img/logo-and-title.png" alt="logo"/>
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

    img {
        width: 100%;
    }
</style>