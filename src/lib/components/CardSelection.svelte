<script>
    import { onMount } from "svelte";

    let headers = [];
    let selectedCard = 0;

    function selectCard(index) {
        const cards = document.querySelectorAll(".content > div");

        // Hide all non-selected cards
        cards.forEach((card, i) => {
            if (i === index) {
                // ew
                setTimeout(() => {
                    card.style.display = "block";
                }, 200);
                setTimeout(() => {
                    card.style.opacity = "1";
                }, 300);
            } else {
                card.style.opacity = "0";
                setTimeout(() => {
                    card.style.display = "none";
                }, 300);
            }
        });

        selectedCard = index;
    }

    onMount(() => {
        // Create headers
        const cards = document.querySelectorAll(".content > div");

        headers = Array.from(cards).map((card, index) => ({
            img: card.querySelector(".card-img").src,
            title: card.querySelector(".card-title").innerText,
            // content: card.querySelector(".show-when-active").innerText,
            index,
        }));
        console.log(headers);

        // Select first card
        selectCard(0);
    });
</script>

<div class="card-selector">
    <div class="header">
        {#each headers as { title, img, index }}
            <button
                type="button"
                style="aspect-ratio: 16/9; background-image: url({img}); opacity: {selectedCard ===
                index
                    ? '1'
                    : '0.75'}"
                on:click={() => selectCard(index)}
            >
                <h2>{title}</h2>
                <!-- <p style="opacity: {selectedCard === index ? "1" : "0"}">yes</p> -->
            </button>
        {/each}
    </div>
    <div class="content">
        <slot />
    </div>
</div>

<style>
    .header {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: var(--page-spacing);
        /* height: 30rem; */
        transition: scale 0.3s;
    }

    .header > button {
        border: none;
        background: none;
        padding: 10px;
        display: flex;
        justify-content: center;
        color: white;
        background-size: contain;
        transition-duration: 0.3s;
        transition-property: translate scale opacity;

        & > h2 {
            text-shadow: 2px 2px 2px black;
            margin: 0;
        }

        &:hover {
            translate: 0 -10px;
            scale: 1.05;
        }
    }

    .content {
        & > div {
            transition: opacity 0.3s;
        }
    }

</style>
