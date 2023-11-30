<!-- Content -->
<svelte:head>
    <title>Museum Online</title>
</svelte:head>

<div id="first-article">
    <h1>NXT Museum</h1>
    <p>Hello World!</p>
</div>

<!-- Style -->
<style>
    #first-article {
        padding: 25px;
        animation: fade-in 1s both;
        border-left: 1px solid white;

        & h1 {
            margin: 0;
            font-family: sans-serif;
            font-size: 7rem;
        }

        & h1::first-letter {
            margin-left: -0.05em;
        }

        & p {
            margin: 0;
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