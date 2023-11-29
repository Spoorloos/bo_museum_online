<!-- Content -->
<svelte:head>
    <title>Museum Online</title>
</svelte:head>

<div id="content">
    <acticle id="first-article">
        <h1>NXT Museum</h1>
        <p>Hello World!</p>
    </acticle>
</div>

<!-- Style -->
<style>
    #content {
        display: flex;
        flex-direction: column;
        padding: 5%;
    }

    #first-article {
        padding-left: 25px;
        position: relative;
        animation: fade-in 1s both;
        border-left: 1px solid white;

        & h1 {
            margin: 0;
            font-size: 7rem;
        }

        & p {
            font-family: 'Segoe UI';
            font-weight: 350;
            font-size: 1.2rem;
        }
    }

    @keyframes fade-in {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: none;
        }
    }
</style>