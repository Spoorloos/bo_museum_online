<!-- Script -->
<script>
    export let selected = "";
    export let options = [];

    // Functions
    function languageClick(event, option) {
        selected = option;
        event.target.blur();
    }
</script>
  
<!-- Contents -->
<div class="select-parent">
    <div class="selected">{ selected.toUpperCase() } ▼</div>
    <div class="options">
        {#each options as option}
            <button
                type="button"
                class="option"
                on:click={ e => languageClick(e, option) }
            >{ option.toUpperCase() }</button>
        {/each}
    </div>
</div>
  
<!-- Style -->
<style>
    .selected {
        text-align: center;
        height: calc(100% - 1px);
        color: white;
        padding: 15px;
        box-sizing: border-box;
        font: bold 13px sans-serif;
    }

    .options {
        position: relative;
        max-height: 1px;
        width: 100%;
        background-color: white;
        box-shadow: 0px 0px 10px white;
        overflow: hidden;
        transition: max-height 0.45s;
    }

    .select-parent:hover .options,
    .select-parent:focus-within .options {
        max-height: 100px;
    }

    .option {
        color: black;
        background-color: transparent;
        border: 0;
        width: 100%;
        padding: 10px;
        font: bold 13px sans-serif;
        transition: background-color 0.3s, color 0.3s;

        &:hover { background-color: rgba(0, 0, 0, 0.2); }
    }
</style>