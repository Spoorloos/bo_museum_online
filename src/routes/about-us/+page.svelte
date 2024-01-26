<script>
    import { _, t, format } from "svelte-i18n";

    console.log($_("about_us"));
    let test = $_("about_us.test");

    // let header = $_("about_us.header")
    // let text = $_("about_us.text")

    // let content = { header: $_("about_us.header"), text:$_("about_us.text")};
</script>

<article id="about-us-page-content">
    <h1 id="title">{$_("about_us.name")}</h1>
    {#each $_("about_us.text") as { header, text }}
        <div class="paragraph">
            <p class="side-header">{header}</p>
            <p class="main-text">{text}</p>
        </div>
    {/each}
    <!-- <p>{test[0]}</p> -->
</article>

<style>
    .paragraph {
        display: flex;
        padding-bottom: 50px;
    }

    .side-header {
        writing-mode: sideways-lr;
    }

    .main-text {
        font-size: 1.5rem;
        max-width: 40%;
        line-height: 2rem;
    }

    #about-us-page-content {
        padding: var(--page-spacing);
        box-sizing: border-box;
    }

    h1#title {
        margin: 0;
        font-size: 3rem;
    }
</style>
