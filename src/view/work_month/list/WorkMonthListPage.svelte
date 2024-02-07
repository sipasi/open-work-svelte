<script lang="ts">
  import { getContext } from "svelte";
  import WorkMonth from "../../../data/WorkMonth";
  import IconFab from "../../shared/fab/IconFab.svelte";
  import Icons from "../../shared/icon/Icons";
  import MonthTile from "./MonthTile.svelte";
  import EntityStorage from "$root/repository/EntityStorage";

  const storage = getContext(
    EntityStorage<WorkMonth>
  ) as EntityStorage<WorkMonth>;

  const loadData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return storage.getAll();
  };
</script>

{#await loadData()}
  <p>loading...</p>
{:then list}
  <ul class="adaptive-list-view">
    {#each list as item}
      <MonthTile count={1} date={item.date} sum={233} />
    {/each}
  </ul>
  <IconFab icon={Icons.add} />
{/await}

<style>
  .adaptive-list-view {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
</style>
