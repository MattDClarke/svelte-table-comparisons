<script>
  import jQuery from "jquery";
  import initDt from "datatables.net-dt";

  import DataTableHTML from "../lib/DataTableHTML.svelte";
  import DataTableJS from "../lib/DataTableJS.svelte";

  initDt();
</script>

<h1>JS controlled</h1>

<DataTableJS />

<h1>Data in HTML</h1>

<DataTableHTML />
