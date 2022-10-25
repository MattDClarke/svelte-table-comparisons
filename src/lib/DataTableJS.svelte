<script>
  import jQuery from "jquery";
  import { onMount, tick } from "svelte";
  import { load } from "./data.js";

  let el; // table element
  let table; // table object (API)

  onMount(() => {
    table = jQuery(el).DataTable();

    load().then((rows) => {
      table.rows.add(rows).draw();
    });
  });
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="//cdn.datatables.net/1.10.21/css/jquery.dataTables.min.css"
  />
</svelte:head>

<table bind:this={el} class="display" style="width:100%">
  <thead>
    <tr>
      <th>Name</th>
      <th>Position</th>
      <th>Office</th>
      <th>Age</th>
      <th>Start date</th>
      <th>Salary</th>
    </tr>
  </thead>
  <tbody />
  <tfoot>
    <tr>
      <th>Name</th>
      <th>Position</th>
      <th>Office</th>
      <th>Age</th>
      <th>Start date</th>
      <th>Salary</th>
    </tr>
  </tfoot>
</table>
