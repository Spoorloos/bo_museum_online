<script>
    import { _ } from "svelte-i18n";
    import Article from "$lib/components/Article.svelte";
</script>

<article id="about-us-page-content">
    <h1 id="title">{$_("header.about_us")}</h1>

    <div id="articles">
        {#each $_("about_us") as { header, text }, i }
            <Article
                title={header}
                content={text}
                direction={ (i&1) ? "right" : "left" }
                titleStyle="font-size: 2.5rem;"
                style={`
                    border: none;
                    max-width: 60%; 
                    ${ (i&1) ? "align-self: flex-end;" : "" };
                `}/>
        {/each}
    </div>
</article>

<style>
    #about-us-page-content {
        padding: var(--page-spacing);
        box-sizing: border-box;
        font-family: Segoe UI;
    }

    #articles {
        margin-top: var(--page-spacing);
        width: 90%;
        display: flex;
        flex-direction: column;
        gap: var(--page-spacing);
        position: relative;
        left: 50%;
        translate: -50%;
    }

    #title {
        margin: 0;
        font-size: 3rem;
        text-align: center;
    }
</style>
