<script>
    import { _ } from "svelte-i18n";

    export let name = "Peter";
    export let content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    export let rating = 1;

    let showMore = false;
    let isLargeReview = content.length > 100;
    let shortContent = isLargeReview ? content.slice(0, 100) + " ..." : content;
</script>

<div class="review-card">
    <div class="top">
        <div class="user-info">
            <img class="user-icon" alt="user icon" src="img/user-icon.png">
            <h3>{name}</h3>
        </div>
        <div class="stars">
            {#each [ 1, 2, 3, 4, 5 ] as i}
                <img
                    class="star"
                    alt="star"
                    src="img/{
                        // Ew lol, but it works ig
                        rating - i >= 0 ? "star-full" : (rating - i >= -0.5 ?  "star-half-full" : "star-empty")
                    }.png">
            {/each}
        </div>
    </div>
    <p>{showMore ? content : shortContent}</p>
    <button
        class="show-more"
        disabled={!isLargeReview}
        on:click={ () => showMore = !showMore }
    >{ $_("home.reviews.show_more") }</button>
</div>

<style>
    h3 {
        margin: 0;
    }

    .review-card {
        height: 100%;
        position: relative;
    }

    .top {
        height: 30px;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .user-info {
        display: flex;
        align-items: center;
        gap: 10%;
    }

    .user-icon {
        display: inline;
        height: 100%;
    }

    .show-more {
        padding: 0;
        border: none;
        background: none;
        color: #98a6ff;
        font-family: sans-serif;
        font-size: 17px;
    }

    .stars {
        height: 100%;
        display: flex;
    }

    button:disabled {
        opacity: 0.7;
    }
</style>