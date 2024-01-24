<script>
    import { page } from '$app/stores';
</script>

<div>
    <section>
        <img src="img/logo-and-title.png" alt="logo"/>
        <h1>{$page.status}: {$page.error.message}</h1>
    </section>
</div>

<style>
    div {
        display: flex;
        justify-content: center;
        margin: 10% 0;
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 50px;
        width: 30%;
    }

    img {
        width: 100%;
    }
</style>