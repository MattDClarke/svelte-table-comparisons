<script>
  import jQuery from "jquery";
  import { onMount, tick } from "svelte";
  import { load } from "./data.js";

  let el; // table element
  let table; // table object (API)

  const dataPromise = load();

  onMount(() => {
    dataPromise.then(tick).then(() => {
      table = jQuery(el).DataTable();
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
  <tbody>
    {#await dataPromise then rows}
      {#each rows as row}
        <tr>
          {#each row as cell}
            <td>{cell}</td>
          {/each}
        </tr>
      {/each}
    {/await}
  </tbody>
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
