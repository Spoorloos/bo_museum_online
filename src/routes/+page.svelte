<!-- Script -->
<script>
    import Article from "$lib/components/Article.svelte";
    import ReviewCard from "$lib/components/ReviewCard.svelte";
    import CustomButton from "$lib/components/CustomButton.svelte";

    import reviews from "$lib/json/reviews.json";
    import { inview } from "svelte-inview";
    import { _ } from "svelte-i18n";
    import { base } from "$app/paths";

    let reviewsEnteredView = false;

    function getRandomElements(array, n) {
        return array.sort(() => 0.5 - Math.random()).slice(0, n);
    }
</script>

<!-- Content -->
<section id="main-page-content">
    <Article
        title="NXT Museum"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        direction="left"
        style="max-width: 60%;"
        titleStyle="font-size: 6rem;"/>

    <a id="purchase" class="fade" href="{base}/tickets">
        <CustomButton noHover>{ $_("home.purchase") }</CustomButton>
    </a>

    <a id="reviews-arrow" href="#reviews">
        <span>Reviews</span>
        <img alt="arrow down" src="img/arrow-down.svg">
    </a>
</section>

<section id="reviews" class:fade-slide-blur={reviewsEnteredView}>
    <div id="reviews-logo">
        <img
            alt="logo"
            src="img/logo-and-title.png"
            use:inview={{ unobserveOnEnter: true }}
            on:inview_enter={ () => reviewsEnteredView = true }>
    </div>

    <div id="reviews-list">
        {#each getRandomElements(reviews, 3) as { name, content, rating }}
            <ReviewCard {name} {content} {rating}/>
        {/each}
    </div>
</section>

<!-- Style -->
<style>
    #main-page-content {
        display: flex;
        flex-direction: column;
        gap: var(--page-spacing);
        height: calc(100vh - var(--header-height));
        padding: var(--page-outer-padding);
        padding-bottom: var(--page-spacing);
        box-sizing: border-box;
        background-position: center 0;
        /* box-shadow is making me suicidal, don't mind this */
        background:
            linear-gradient(to bottom, black, transparent 30%),
            linear-gradient(to top, black, transparent 30%),
            url("/img/background.jpg") no-repeat;
    }

    #purchase {
        align-self: center;
    }

    #reviews-arrow {
        margin-top: auto;
        align-self: center;
        height: 1.3rem;
        width: fit-content;
        display: flex;

        & > span {
            font-family: 'Segoe UI';
            font-size: 1.3rem;
            font-weight: 100;
            line-height: 18px;
        }

        & > img {
            height: 100%;
            aspect-ratio: 1/1;
            object-fit: contain;
        }
    }

    #reviews {
        display: flex;
        gap: var(--page-spacing);
        padding: var(--page-spacing);
        opacity: 0;
        --direction: translateX(-50px);
    }

    #reviews-logo {
        width: 50%;
        align-self: center;

        & > img {
            padding: var(--page-spacing);
            box-sizing: border-box;
            width: 100%;
        }
    }

    #reviews-list {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: var(--page-spacing);
    }
</style>