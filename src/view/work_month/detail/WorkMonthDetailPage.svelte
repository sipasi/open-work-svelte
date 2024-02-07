<script lang="ts">
  import type WorkDay from "$root/data/WorkDay";
  import type WorkMonth from "$root/data/WorkMonth";
  import EntityStorage from "$root/repository/EntityStorage";
  import Divider from "$root/view/shared/divider/Divider.svelte";
  import { getContext } from "svelte";

  export let params: any;

  const storage = getContext(
    EntityStorage<WorkMonth>
  ) as EntityStorage<WorkMonth>;

  function formatDay(date: Date, day: number) {
    const temp = new Date(date);

    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
    };

    temp.setDate(day);

    return temp.toLocaleDateString("en-US", options);
  }
  function formatMonth(date: Date) {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
    };

    return date.toLocaleDateString("en-US", options);
  }
</script>

<ul class="list">
  {#if params.id}
    {#await storage.getBy(params.id) then month}
      <h1 class="month-title">
        {formatMonth(month.date)}
      </h1>

      {#each month.days as item}
        <li class="item">
          <div class="header">
            <span>
              {formatDay(month.date, item.day)}
            </span>
            <span>
              {1332}
            </span>
          </div>

          <Divider type="round" />

          {#each item.works as work}
            <div class="work-info">
              <span class="work-info-type">
                {work.type}:&nbsp;
              </span>
              <span>
                {work.units.join(",")}
              </span>
            </div>
          {/each}
        </li>
      {/each}
    {/await}
  {/if}
</ul>

<style>
  .month-title {
    text-align: center;
    margin-top: 3rem;
    margin-bottom: 1rem;
  }

  .list {
    list-style: none;
  }

  .item {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  .item:hover {
    background-color: #212121;
  }
  .item:active {
    background-color: #424242;
  }
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .work-info {
    display: flex;
  }
  .work-info-type {
    font-weight: bold;
  }
</style>
