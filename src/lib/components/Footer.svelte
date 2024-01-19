<!-- <footer>Copyright © 2023</footer> -->
<script>
    let canvas = document.getElementsByClassName("social_media")
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/img/instagram.svg", true);

</script>

<footer>
    <div id="left"><canvas class="social_media"></canvas></div>
    <div id="right">
        <img src="/img/routebeschrijving_nxt.png" alt="" />
    </div>
</footer>

<style>
    #left,
    #right {
        width: 50vw;
        height: 500px;
        float: left;
    }
    /* #right {
        width:;
    }
    #left {
    } */

    footer {
        display: flex;
        font-family: sans-serif;
    }
    .social_media{
        width: 100%;
        height: 100%;
    }
    #right img {
        float: left;
    }
</style>
