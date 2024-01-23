<script>
    import { _ } from "svelte-i18n";
    import CustomButton from "$lib/components/CustomButton.svelte";

    $: tickets = [
        { name: $_("tickets.tickets.adult"), price: 20 },
        { name: $_("tickets.tickets.student"), price: 16 },
        { name: $_("tickets.tickets.youth") + " (5-17 yo)", price: 13 },
        { name: $_("tickets.tickets.children") + " (0-4 yo)", price: 0 }
    ];
</script>

<section id="tickets-page-content">
    <h1>{ $_("header.tickets") }</h1>
    <div id="tickets-content">
        <div id="ticket-selection">
            <h2>{ $_("tickets.choose") }</h2>
            <div>
                <div id="ticket-selection-header" class="ticket-card">
                    <div class="ticket-name">{ $_("tickets.name") }</div>
                    <div class="ticket-price">{ $_("tickets.price") }</div>
                    <div class="ticket-quantity">{ $_("tickets.quantity") }</div>
                </div>
    
                <div id="ticket-selection-list">
                    {#each tickets as { name, price }}
                        <div class="ticket-card">
                            <div class="ticket-name">{name}</div>
                            <div class="ticket-price">€ {price}</div>
                            <div class="ticket-quantity">
                                <input
                                    class="ticket-quantity-selector"
                                    type="number"
                                    value="0"
                                    min="0"
                                    max="10"/>
                            </div>
                        </div>
                    {/each}
                </div>
    
                <div id="ticket-checkout">
                    <CustomButton noHover>{ $_("tickets.checkout") }</CustomButton>
                </div>
            </div>
        </div>

        <div id="tickets-logo">
            <img
                alt="logo"
                src="img/logo_and_title.png">
        </div>
    </div>
</section>

<style>    
    #tickets-page-content {
        padding: var(--page-spacing);
        box-sizing: border-box;
    }

    h1 {
        margin: 0;
        font-size: 3rem;
    }

    #tickets-content {
        display: flex;
        gap: var(--page-spacing);
    }

    #tickets-logo {
        width: 50%;
        align-self: center;

        & > img {
            padding: var(--page-spacing);
            box-sizing: border-box;
            width: 100%;
        }
    }

    #ticket-selection {
        width: 50%;
        padding: var(--page-spacing);
        box-sizing: border-box;
    }

    #ticket-selection-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 2% 0;
    }

    .ticket-card {
        width: 100%;
        display: flex;
        align-items: center;
        font-family: "Segoe UI";
    }

    .ticket-name {
        width: 50%;
    }

    .ticket-price {
        display: inline;
        text-align: left;
        font-weight: bold;
        width: 40%;
    }

    .ticket-quantity {
        width: 10%;
    }

    .ticket-quantity-selector {
        border: none;
        background: none;
        color: white;
        font-weight: bold;
        font-size: 1rem;
        width: 100%;
    }

    #ticket-selection-header {
        padding: 10px 0;
        border-bottom: solid thin white;
        font-weight: bold;
    }

    #ticket-checkout {
        text-align: right;
    }
</style>