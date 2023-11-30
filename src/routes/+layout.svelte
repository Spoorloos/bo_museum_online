<!-- Script -->
<script>
    import "$lib/styles/global.css";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<!-- Svelte Head -->
<svelte:head>
    <title>Museum Online</title>
</svelte:head>

<!-- Page -->
<Header/>
<div id="page-content">
    <slot/>
</div>
<Footer/>

<!-- Styles -->
<style>
    #page-content {
        padding: 5%;
        height: 100%;
        background-image: url("/img/background.png");
        background-position: center center;
        background-repeat: no-repeat;
        position: relative;
    }

    #page-content:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to bottom, black 0%, transparent 50%);
        background-repeat: no-repeat;
        animation: background-grow 1s both;
    }

    @keyframes background-grow {
        from {
            background-size: 100% 20%;
        }
        to {
            background-size: 100% 100%;
        }
    }
</style>