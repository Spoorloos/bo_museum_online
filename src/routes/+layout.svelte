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
<div id="shadow-box">
    <div id="page-content">
        <slot/>
    </div>
</div>
<Footer/>

<!-- Styles -->
<style>
    #shadow-box {
        padding: 5%;
        height: 100%;
        background-image: url("/img/background.jpg");
        background-position: center -200px;
        background-repeat: no-repeat;
        position: relative;
    }

    #shadow-box:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to bottom, black 0%, transparent 100%);
        background-repeat: no-repeat;
        animation: background-grow 1s both;
    }

    @keyframes background-grow {
        from {  background-size: 100% 100px; }
        to { background-size: 100% 500px; }
    }

    #page-content {
        position: relative;
        z-index: 2;
    }
</style>