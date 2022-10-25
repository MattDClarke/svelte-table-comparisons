<script>
  import { onMount, onDestroy } from "svelte";
  import { Grid } from "@bryntum/grid";
  import { GridConfig } from "./GridConfig.js";

  let gridContainer = GridConfig.appendTo;

  export let engine = null;

  onMount(() => {
    engine = new Grid({
      ...GridConfig,
    });
  });

  onDestroy(() => {
    if (engine) {
      engine.destroy();
    }
  });
</script>

<div bind:this={gridContainer} />
