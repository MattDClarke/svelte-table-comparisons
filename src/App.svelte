<script>
  import Router from "svelte-spa-router";
  import Home from "./routes/Home.svelte";
  import Bryntum from "./routes/Bryntum.svelte";
  import NotFound from "./routes/NotFound.svelte";

  let routes = {
    "/": Home,
    "/bryntum-grid": Bryntum,

    "*": NotFound,
  };
</script>

<nav>
  <a href="#/">Home</a>
  <a href="#/bryntum-grid">Bryntum Grid</a>
</nav>

<main>
  <Router {routes} />
</main>
