<script>
    export let noHover = false;
    export let style = '';
</script>

<!-- Contents -->
<button type="button" class:nohover={noHover} {style} on:click>
    <slot/>
</button>

<!-- Style -->
<style>
    button {
        color: white;
        background-color: transparent;
        border: none;
        font: bold 13px sans-serif;
        padding: 15px;
        position: relative;
        transition: color 0.3s;
        height: 100%;
        z-index: 1;
    }

    button::before {
        content: '';
        background-color: white;
        box-shadow: 0px 0px 10px white;
        transition: height 0.3s, opacity 0.1s linear;
        position: absolute;
        width: 100%;
        height: 1px;
        left: 0;
        bottom: 0;
        z-index: -1;
    }
    
    button:not(.nohover):hover, button.nohover {
        color: black;
        &::before { height: 100%; }
    }

    button:active::before {
        opacity: 0.75;
    }
</style>