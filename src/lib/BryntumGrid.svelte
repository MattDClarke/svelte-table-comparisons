<script>
  import { onMount, onDestroy } from "svelte";
  import { Grid } from "@bryntum/grid";
  import "@bryntum/grid/grid.stockholm.css";

  import { GridConfig } from "./GridConfig.js";

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
