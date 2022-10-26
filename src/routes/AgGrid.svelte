<script>
  import { Grid } from "ag-grid-community";
  import "ag-grid-community/styles/ag-grid.css";
  import "ag-grid-community/styles/ag-theme-alpine.css";
  import { client } from "../utils/fetchWrapper";
  import { onMount } from "svelte";

  let gridContainer;
  // Grid Options are properties passed to the grid
  const gridOptions = {
    // each entry here represents one column
    columnDefs: [
      { field: "name" },
      { field: "city" },
      { field: "job" },
      { field: "age" },
    ],

    // default col def properties get applied to all columns
    defaultColDef: { sortable: true, filter: true },

    rowSelection: "multiple", // allow rows to be selected
    animateRows: true, // have rows animate to new positions when sorted

    // example event handler
    onCellClicked: (params) => {
      console.log("cell was clicked", params);
    },
  };

  onMount(() => {
    new Grid(gridContainer, gridOptions);
    client("data/data.json").then(({ data }) => {
      gridOptions.api.setRowData(data);
    });
  });
</script>

<div
  id="datagrid"
  class="ag-theme-alpine"
  style="height: 600px; width:100%;"
  bind:this={gridContainer}
/>
