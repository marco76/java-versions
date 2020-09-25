<script>
    export let category = 'language';
    let categoryIcon;
    let categoryLabel;

    $: switch (category) {
        case "language": categoryIcon = 'happy.svg'; categoryLabel = 'Language'; break;
        case "deprecated": categoryIcon = 'bin.svg'; categoryLabel = 'Pruning'; break;
        case "gc": categoryIcon = 'recycle.svg'; categoryLabel = 'Garbage Collector'; break;
        case "tools": categoryIcon = 'tools.svg'; categoryLabel = 'Tools'; break;
        default: categoryIcon = undefined
    }

</script>

<style>
    .label {
        color:gray;
        font-size: 10px;
    }
</style>

<span>
    {#if categoryIcon}
        <div style="align-items: center">
             <img src="icons/{categoryIcon}"
                  height="32"
                  width="32"
                  style="color: lightgray">
            <div class="label">
                {categoryLabel}
            </div>
        </div>

    {/if}
</span>
