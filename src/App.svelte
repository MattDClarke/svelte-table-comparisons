<script>
  import Router from "svelte-spa-router";
  import Home from "./routes/Home.svelte";
  import Bryntum from "./routes/Bryntum.svelte";
  import NotFound from "./routes/NotFound.svelte";
  import DataTables from "./routes/DataTables.svelte";
  import AgGrid from "./routes/AgGrid.svelte";

  let routes = {
    "/": Home,
    "/bryntum-grid": Bryntum,
    "/data-tables": DataTables,
    "/ag-grid": AgGrid,

    "*": NotFound,
  };
</script>

<nav>
  <a href="#/">Home</a>
  <a href="#/bryntum-grid">Bryntum Grid</a>
  <a href="#/data-tables">DataTables</a>
  <a href="#/ag-grid">AG Grid</a>
</nav>

<main>
  <Router {routes} />
</main>
