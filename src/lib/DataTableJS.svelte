<script>
  import "datatables.net-dt/css/jquery.dataTables.min.css";
  import jQuery from "jquery";
  import { onMount } from "svelte";

  let el; // table element
  let table; // table object (API)

  onMount(() => {
    table = jQuery(el).DataTable({
      ajax: {
        url: "/data/data.json",
        dataSrc: "data",
      },
      columns: [
        { data: "name" },
        { data: "city" },
        { data: "job" },
        { data: "age" },
      ],
    });
    table.init();
  });
</script>

<table bind:this={el} class="display" style="width:100%">
  <thead>
    <tr>
      <th>Name</th>
      <th>City</th>
      <th>Job</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody />
</table>
