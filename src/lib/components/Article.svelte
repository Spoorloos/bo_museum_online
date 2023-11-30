<script>
	import { onMount } from "svelte";
	import { cubicOut } from "svelte/easing";
    import { tweened } from "svelte/motion";

    // Attributes
    export let title = "";
    export let content = "";
    export let image;

    export let titleSize = "7rem";
    export let direction = "left";

    // Animation
    let animation = tweened(0, {
        duration: 1000,
        easing: cubicOut
    });

    onMount(() => void animation.set(1));
</script>

<div
    class="article"
    style={`
        opacity: ${ $animation };
        transform: translateX(${ (direction === "right" || -1) * (50 - $animation * 50) }px);
        border-${direction}: 1px solid white;
    `}>

    <div>
        <h1 style={`font-size: ${titleSize};`}>{title}</h1>
        <p>{content}</p>
    </div>

    {#if image}
        <img alt="article pic" src={image}/>
    {/if}
</div>

<style>
    .article {
        display: inline-flex;
        justify-content: space-between;
        gap: 50px;
        padding: 25px;
    }

    h1 {
        margin: 0;
        font-family: sans-serif;

        &::first-letter {
            margin-left: -0.05em;
        }
    }

    p {
        margin: 0;
        font-family: 'Segoe UI';
        font-weight: 350;
        font-size: 1.2rem;
    }

    img {
        height: 100%;
    }
</style>