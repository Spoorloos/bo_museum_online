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
</script>

<section id="whats-on-page-content">
    <h1>{$_("header.whats_on")}</h1>
    <article class="content">
        <h2 class="paragraph">{$_("whats_on.random_international.name")}</h2>
        {#each storage as item}
            <p class="paragraph">{item}</p>
        {/each}
    </article>
    <br>
    <CardSelection>
        <!-- the following isn't pretty but least it works.  -->
        <div class="content">
            <h2 class="card-title paragraph">
                {$_("whats_on.random_international.fifteen_points.name")}
            </h2>
            <img
                class="card-img"
                alt="card"
                src="img/whats-on/fifteen-points.png"
            />
            {#each $_("whats_on.random_international.fifteen_points.description") as item, i}
                <p class="paragraph" class:show-when-active={i == 0}>{item}</p>
            {/each}
        </div>

        <div class="content">
            <h2 class="card-title paragraph">
                {$_("whats_on.random_international.living_room.name")}
            </h2>
            <img
                class="card-img"
                alt="card"
                src="img/whats-on/Living-Room-710x709.png"
            />
            {#each $_("whats_on.random_international.living_room.description") as item, i}
                <p class="paragraph" class:show-when-active={i == 0}>{item}</p>
            {/each}
        </div>

        <div class="content">
            <h2 class="card-title paragraph">
                {$_(
                    "whats_on.random_international.Life_In_Our_Minds:_Motherflock_III.name",
                )}
            </h2>
            <img
                class="card-img"
                alt="card"
                src="img/whats-on/Life_In_Our_Minds.png"
            />
            {#each $_("whats_on.random_international.Life_In_Our_Minds:_Motherflock_III.description") as item, i}
                <p class="paragraph" class:show-when-active={i == 0}>{item}</p>
            {/each}
        </div>

        <div class="content">
            <h2 class="card-title paragraph">
                {$_("whats_on.random_international.Swarm_Study_XIII.name")}
            </h2>
            <img
                class="card-img"
                alt="card"
                src="img/whats-on/swarm-study.png"
            />
            {#each $_("whats_on.random_international.Swarm_Study_XIII.description") as item, i}
                <p class="paragraph" class:show-when-active={i == 0}>{item}</p>
            {/each}
        </div>

        <div class="content">
            <h2 class="card-title paragraph">
                {$_("whats_on.random_international.Our_Future_Selfs.name")}
            </h2>
            <img
                class="card-img"
                alt="card"
                src="img/whats-on/Our-Future-Selves-Random-International-710x710.jpg"
            />
            {#each $_("whats_on.random_international.Our_Future_Selfs.description") as item, i}
                <p class="paragraph" class:show-when-active={i == 0}>{item}</p>
            {/each}
        </div>

        <div class="content">
            <h2 class="card-title paragraph">
                {$_("whats_on.random_international.Presence_And_Erasure.name")}
            </h2>
            <img
                class="card-img"
                alt="card"
                src="img/whats-on/presence and erasure.png"
            />
            {#each $_("whats_on.random_international.Presence_And_Erasure.description") as item, i}
                <p class="paragraph" class:show-when-active={i == 0}>{item}</p>
            {/each}
        </div>
    </CardSelection>
</section>

<style>
    #whats-on-page-content {
        padding: var(--page-spacing);
        box-sizing: border-box;
        font-family: Segoe UI;
    }

    .content {
        display: flex;
        flex-flow: column wrap;
        align-content: center;
        justify-content: flex-start;
        gap: 1.5rem /*var(--page-spacing) */;
    }

    .card-img {
        float: right;
        margin: var(--page-spacing);
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
