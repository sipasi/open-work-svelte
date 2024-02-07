<script>
  import NavigationBarItem from "./NavigationBarItem.svelte";
</script>

<nav class="navbar">
  <ul class="navbar-panel">
    <slot />
  </ul>
</nav>

<style>
  .navbar {
    position: fixed;
    background-color: #3f51b5;
  }
  .navbar-panel {
    list-style: none;
    display: flex;
  }
  @media (orientation: landscape) {
    .navbar {
      top: 0;
      width: 5rem;
      height: 100vh;
    }
    .navbar-panel {
      flex-direction: column;
      align-items: center;
      height: 100%;
    }
  }
  @media (orientation: portrait) {
    .navbar {
      bottom: 0;
      width: 100%;
      height: 5rem;
    }

    .navbar-panel {
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
</style>
