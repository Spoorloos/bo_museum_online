<script>
    import { _ } from "svelte-i18n";
    import { inview } from "svelte-inview";

    let enteredView = false;
</script>

<footer class:fade-slide-blur={enteredView}>
    <div
        class="contact"
        use:inview={{ unobserveOnEnter: true }}
        on:inview_enter={ () => enteredView = true }
    >
        <div>
            <h2>{ $_("footer.follow_us_at") }</h2>
            <div class="contact-platforms">
                <a href="https://twitter.com/nxtmuseum"><img alt="twitter" src="img/twitter-logo.svg"></a>
                <a href="https://www.tiktok.com/@nxtmuseum"><img alt="tiktok" src="img/tiktok-logo.svg"></a>
                <a href="https://www.youtube.com/@NxtMuseum"><img alt="youtube" src="img/youtube-logo.svg"></a>
                <a href="https://www.instagram.com/nxtmuseum"><img alt="instagram" src="img/instagram-logo.svg"></a>
            </div>
            <h2>{ $_("footer.reach_us_at") }</h2>
            <div>support@nxtmuseum.com</div>
        </div>
        <div>
            <h2>{ $_("footer.visit_us_at") }</h2>
            <address>
                Nxt Museum<br>
                Asterweg 22<br>
                1031HP Amsterdam
            </address>
            <a class="google-maps" href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47c6093179f05169:0xb7418dbe6d40beb6?sa=X&ved=2ahUKEwjdiNqHme-DAxVw7LsIHSNNC2UQ4kB6BAgCEAA">Google Maps</a>
        </div>
    </div>
</footer>

<style>
    footer {
        opacity: 0;
        --direction: translateX(-50px);
    }

    .contact {
        display: flex;
        padding: var(--page-spacing);
        gap: var(--page-spacing);

        & > div {
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-top: thin solid white;
        }
    }

    .contact-platforms {
        display: flex;
        flex-wrap: wrap;
        gap: 5%;
        width: 100%;
        justify-content: center;
        
        & img {
            height: 3rem;
            padding: 5px;
            box-sizing: border-box;
            border-bottom: thin solid transparent;
            transition: border-bottom-color 0.3s, translate 0.3s;

            &:hover {
                border-bottom-color: white;
                translate: 0 -10px;
            }
        }
    }

    address {
        margin: 0;
        text-align: center;
        font-size: 1.2rem;
    }

    .google-maps {
        margin: 10px 0;
        color: #98a6ff;
    }
</style>
