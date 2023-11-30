<script>
    // Attributes
    export let title = "";
    export let content = "";
    export let image;

    export let titleSize = "7rem";
    export let direction = "left";
    export let maxWidth = "75%";
</script>

<div
    class="article"
    style={`
        --direction: ${ (direction === "right" || -1) * 50 }px;
        border-${direction}: 1px solid white;
        max-width: ${maxWidth};
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
        animation: fade-slide 1s both;
    }

    @keyframes fade-slide {
        from {
            opacity: 0;
            transform: translateX(var(--direction));
        }
        to {
            opacity: 1;
            transform: none;
        }
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