<script lang="ts">
  import { getContext } from "svelte";
  import WorkMonth from "../../../data/WorkMonth";
  import IconFab from "../../shared/fab/IconFab.svelte";
  import Icons from "../../shared/icon/Icons";
  import MonthTile from "./MonthTile.svelte";
  import EntityStorage from "$root/repository/EntityStorage";
  import { push } from "svelte-spa-router";
  import WorkCalculator from "$root/tool/WorkCalculator";

  const storage = getContext(
    EntityStorage<WorkMonth>
  ) as EntityStorage<WorkMonth>;

  function onClick(item: WorkMonth) {
    push(`/months/${item.id.toString()}`);
  }
</script>

{#await storage.getAll()}
  <p>loading...</p>
{:then list}
  <ul class="adaptive-list-view">
    {#each list as item}
      <MonthTile
        date={item.date}
        sum={WorkCalculator.calculateMonth(item)}
        on:click={() => onClick(item)}
      />
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
