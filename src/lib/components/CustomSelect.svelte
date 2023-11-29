<!-- Script -->
<script>
    export let selected = "";
    export let options = [];
</script>
  
<!-- Contents -->
<div class="select-parent">
    <button class="selector">
        <span class="selected-item">{ selected.toUpperCase() } ▼</span>
    </button>

    <div style="position: relative;">
        <div class="options">
            {#each options as option}
                <button
                    on:click={ () => void (selected = option) }
                    class="option"
                >{ option.toUpperCase() }</button>
            {/each}
        </div>
    </div>
</div>
  
<!-- Style -->
<style>
    .options {
        position: absolute;
        max-height: 0px;
        width: 100%;
        background-color: white;
        box-shadow: 0px 0px 10px white;
        overflow: hidden;
        transition: max-height 0.45s;
    }

    .option {
        color: black;
        background-color: transparent;
        border: 0;
        width: 100%;
        padding: 10px;
        transition: background-color 0.3s, color 0.3s;

        &:hover {
            background-color: rgba(0, 0, 0, 0.2);
        }
    }

    .select-parent:hover .options {
        max-height: 100px;
    }

    .selector {
        height: 100%;
        background-color: transparent;
        color: white;
        border: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 20px;
        border-color: white;
        border-bottom: 1px;
        border-style: solid;
        font: bold 13px sans-serif;
    }

    .select-parent:hover .selector {
        border-style: none;
    }
</style>