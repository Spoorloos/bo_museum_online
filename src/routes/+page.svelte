<!-- Script -->
<script>
</script>

<!-- Content -->
<svelte:head>
    <title>Museum Online</title>
</svelte:head>

<div id="content">
    <h1>NXT Museum</h1>
    <p>
        Hello World!
    </p>
</div>

<!-- Style -->
<style>
    #content {
        display: inline-block;
        position: relative;
        top: 100px;
        left: 100px;
        padding: 25px;
        animation: fade-in 1s both;
        border-left: 1px solid white;
    }

    @keyframes fade-in {
        from {
            opacity: 0;
            left: 50px;
        }
        to {
            opacity: 1;
            left: 100px;
        }
    }

    #content h1 {
        font-size: 100px;
        margin: 0;  
    }

    #content p {
        font-family: 'Segoe UI';
        font-weight: 200;
    }
</style>