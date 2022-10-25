<script>
  import Router from "svelte-spa-router";
  import Home from "./routes/Home.svelte";
  import Bryntum from "./routes/Bryntum.svelte";
  import NotFound from "./routes/NotFound.svelte";
  import DataTables from "./routes/DataTables.svelte";

  let routes = {
    "/": Home,
    "/bryntum-grid": Bryntum,
    "/data-tables": DataTables,

    "*": NotFound,
  };
</script>

<nav>
  <a href="#/">Home</a>
  <a href="#/bryntum-grid">Bryntum Grid</a>
  <a href="#/data-tables">DataTables</a>
</nav>

<main>
  <Router {routes} />
</main>
