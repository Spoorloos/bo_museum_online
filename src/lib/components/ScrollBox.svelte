<!-- Script -->
<script>
    let width;
    let offset = 0;

    $: childWidth = width / 5;

    const scrollLeft = () => offset += childWidth;
    const scrollRight = () => offset -= childWidth;
</script>

<!-- Contents -->
<div class="scroll-box">
    <button type="button" class="scroll-arrow" on:click={scrollLeft}>&lt;</button>

    <div class="scroll-content" bind:clientWidth={width}>
        <div class="scroll-slider" style="translate: {offset}px; --child-width: {childWidth}px;">
            <slot/>
        </div>
    </div>

    <button type="button" class="scroll-arrow" on:click={scrollRight}>&gt;</button>
</div>

<!-- Style -->
<style>
    .scroll-box {
        display: flex;
        width: 100%;
        height: 200px;
        padding: var(--page-spacing);
        box-sizing: border-box;
    }

    .scroll-arrow {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        font-size: var(--page-spacing);
        font-weight: bold;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: translate 0.3s;

        &:first-of-type:hover { translate: -5px; }
        &:last-of-type:hover { translate: 5px; }
    }

    .scroll-content {
        flex-grow: 1;
        margin: var(--page-spacing);
        overflow: hidden;
    }

    .scroll-slider {
        display: flex;
        gap: var(--page-spacing);
        transition: translate 0.3s;

        & * {
            width: calc(var(--child-width) - var(--page-spacing));
        }
    }
</style>