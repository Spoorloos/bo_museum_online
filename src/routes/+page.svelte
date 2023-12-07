<!-- Script -->
<script>
    import Article from "$lib/components/Article.svelte";
    //import ReviewCard from "$lib/components/ReviewCard.svelte";
    import CustomButton from "$lib/components/CustomButton.svelte";

    import { _ } from "svelte-i18n";
</script>

<!-- Content -->
<section id="main-page-content">
    <Article
        title="NXT Museum"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        direction="left"
        style="max-width: 60%;"
        titleStyle="font-size: 6rem;"/>

    <div id="purchase" class="fade">
        <CustomButton noHover>{ $_("home.purchase") }</CustomButton>
    </div>
</section>

<section id="reviews">
</section>

<!-- Style -->
<style>
    #main-page-content {
        display: flex;
        flex-direction: column;
        gap: var(--page-spacing);
        height: calc(100vh - var(--header-height));
        padding: var(--page-outer-padding);
        box-sizing: border-box;
        background-image: url("/img/background.jpg");
        background-position: center 0;
        background-repeat: no-repeat;
        box-shadow: inset 0 -50px 100px black, inset 0 50px 100px black;
    }

    #purchase {
        align-self: center;
    }
</style>