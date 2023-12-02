<script>
    export let title = "";
    export let content = "";
    export let image;
    export let direction = "left";

    export let style = "";
    export let titleStyle = "";
    export let contentStyle = "";
</script>

<div class={`article ${direction}`} {style}>
    <div>
        <h1 style={titleStyle}>{title}</h1>
        <p style={contentStyle}>{content}</p>
    </div>

    {#if image}
        <img alt="article pic" src={image}/>
    {/if}
</div>

<style>
    .article {
        padding: 25px;
        animation: fade-slide 1s both;
    }

    .article.left {
        --direction: -50px;
        border-left: 1px solid white;

        & h1::first-letter {
            margin-left: -0.05em;
        }
    }

    .article.right {
        --direction: 50px;
        border-right: 1px solid white;
        text-align: end;
    }

    @keyframes fade-slide {
        from {
            opacity: 0;
            transform: translateX(var(--direction, 50px));
        }
    }

    h1 {
        margin: 0;
        font-family: sans-serif;
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