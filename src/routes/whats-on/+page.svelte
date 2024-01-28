<script>
    import { _ } from "svelte-i18n";
    import CardSelection from "$lib/components/CardSelection.svelte";

    // console.log($_("whats_on"));
    // convert string to template string, updates when language changes
    // thought `` would make <strong></strong> work, it doesn't. it could work with docu.element.innerHTML()? maybe will try page is finished
    let storage = [];
    let context;
    $: {
        storage = [];
        context = $_("whats_on.random_international.description");
        context.forEach((element) => {
            storage.push(eval("{`" + element + "`}"));
        });
    }

    //TODO in 5 years: be able to add a new article in json and have it automaticly generate here.

    /*let content = $_("whats_on.random_international");
    delete content.name;
    delete content.description;
    delete content.index;
    console.log(content);*/

    // String.prototype.interpolate = function (params) {
    //     const names = Object.keys(params);
    //     const vals = Object.values(params);
    //     return new Function(...names, `return \`${this}\`;`)(...vals);
    // };
    // let template = "Example text: aaaaaaaaaaaa".interpolate({});
    // console.log(template);
    // console.log(context);
</script>

<section id="whats-on-page-content">
    <h1>{$_("header.whats_on")}</h1>
    <article class="content">
        <h2 class="paragraph">{$_("whats_on.random_international.name")}</h2>
        {#each storage as item}
            <p class="paragraph">{item}</p>
        {/each}
    </article>
    <CardSelection>
        <div>
            <h2 class="card-title">
                {$_("whats_on.random_international.fifteen_points.name")}
            </h2>
            <img
                class="card-img"
                alt="card"
                src="https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png"
            />
            {#each $_("whats_on.random_international.fifteen_points.description") as item}
                <p>{item}</p>
            {/each}
        </div>

        <div>
            <h2 class="card-title">
                {$_("whats_on.random_international.living_room.name")}
            </h2>
            <img
                class="card-img"
                alt="card"
                src="https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png"
            />
            {#each $_("whats_on.random_international.living_room.description") as item}
                <p>{item}</p>
            {/each}
        </div>

        <div>
            <h2 class="card-title">
                {$_(
                    "whats_on.random_international.Life_In_Our_Minds:_Motherflock_III.name",
                )}
            </h2>
            <img
                class="card-img"
                alt="card"
                src="https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png"
            />
        </div>

        <div>
            <h2 class="card-title">
                {$_("whats_on.random_international.Swarm_Study_XIII.name")}
            </h2>
            <img
                class="card-img"
                alt="card"
                src="https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png"
            />
        </div>

        <div>
            <h2 class="card-title">
                {$_("whats_on.random_international.Our_Future_Selfs.name")}
            </h2>
            <img
                class="card-img"
                alt="card"
                src="https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png"
            />
        </div>

        <div>
            <h2 class="card-title">
                {$_("whats_on.random_international.Presence_And_Erasure.name")}
            </h2>
            <img
                class="card-img"
                alt="card"
                src="https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png"
            />
        </div>

        <div>
            <h2 class="card-title">Tentoonstellaaaaing #1</h2>
            <img
                class="card-img"
                alt="card"
                src="https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png"
            />
        </div>
        <div>
            <h2 class="card-title">Tentoonstellaaaing #2</h2>
            <p class="show-when-active">nealsdjfuoargg???</p>
            <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
            <img
                class="card-img"
                alt="card"
                src="https://cdn11.bigcommerce.com/s-3uewkq06zr/images/stencil/1280x1280/products/230/406/blue_b__05623.1492487362.png"
            />
        </div>
    </CardSelection>
</section>

<style>
    #whats-on-page-content {
        padding: var(--page-spacing);
        box-sizing: border-box;
    }

    .content {
        display: flex;
        flex-flow: column wrap;
        align-content: center;
        justify-content: flex-start;
        gap: 1.5rem /*var(--page-spacing) */;
    }

    .paragraph {
        font-size: 1.5rem;
        max-width: 800px;
        width: 60%;
        flex: 1 0 60%;
    }

    h1 {
        margin: 0;
        font-size: 3rem;
    }
</style>
