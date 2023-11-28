<script>
    import "$lib/styles/Buttons.css";
</script>

<header>
    <h1>Museum Online</h1>
    <div id="links">
        <button class="fill-button">What's on</button>
        <button class="fill-button">About us</button>
        <button class="fill-button">Contact</button>
        <button class="fill-button">Blog</button>
    </div>
</header>

<style>
    h1, h4 {
        margin: 0;
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 75px;
        padding: 10px;
    }

    header :not(div) {
        animation: slide-in 1s both;
    }

    @keyframes slide-in {
        from {
            opacity: 0;
            margin-bottom: 50px;
        }
        to {
            opacity: 1;
            margin-bottom: 0;
        }
    }

    #links {
        display: inline-flex;
        justify-content: space-between;
        gap: 20px;
    }
</style>