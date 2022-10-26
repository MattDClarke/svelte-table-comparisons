<script>
  import { Grid } from "ag-grid-community";
  import "ag-grid-community/styles/ag-grid.css";
  import "ag-grid-community/styles/ag-theme-alpine.css";
  import { client } from "../utils/fetchWrapper";
  import { onMount } from "svelte";

  let gridContainer;

  //   const columnDefs = [
  //     { field: "make" },
  //     { field: "model" },
  //     { field: "price" },
  //   ];

  //   const rowData = [
  //     { make: "Toyota", model: "Celica", price: 35000 },
  //     { make: "Ford", model: "Mondeo", price: 32000 },
  //     { make: "Porsche", model: "Boxter", price: 72000 },
  //   ];

  //   const gridOptions = {
  //     columnDefs: columnDefs,
  //     rowData: rowData,
  //   };

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
    client("data/bryntum-data.json").then(({ data }) => {
      gridOptions.api.setRowData(data);
    });
  });
</script>

<div
  id="datagrid"
  class="ag-theme-alpine"
  style="height: 600px; width:500px;"
  bind:this={gridContainer}
/>

<style>
  #datagrid {
    --ag-header-foreground-color: blue;
  }
  :global(.ag-header-cell) {
    background: orange;
    font-size: 16px;
  }
</style>
