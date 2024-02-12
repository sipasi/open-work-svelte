<script lang="ts">
  import WorkCalculator from "$root/tool/WorkCalculator";
  import type WorkMonth from "$root/data/WorkMonth";
  import EntityStorage from "$root/repository/EntityStorage";
  import Divider from "$root/view/shared/divider/Divider.svelte";
  import { getContext } from "svelte";
  import DateToText from "$root/tool/DateToText";
  import { push } from "svelte-spa-router";

  export let params: any;

  const storage = getContext(
    EntityStorage<WorkMonth>
  ) as EntityStorage<WorkMonth>;

  function onClick(month: number, day: number) {
    push(`/months/${month}/${day}`);
  }
</script>

{#if params.id}
  {#await storage.getBy(params.id) then month}
    <h1 class="month-title">
      {DateToText.yearNumMonthText(month.date)}
    </h1>

    <ul>
      {#each month.days as item}
        <li>
          <a class="item"
            href={null}
            on:click|preventDefault={() => onClick(month.id, item.day)}
          >
            <div class="header">
              <span>
                {DateToText.dayNumMonthText(month.date, item.day)}
              </span>
              <span>
                {WorkCalculator.calculateWorks(item.works)}
              </span>
            </div>

            <Divider type="round" />

            <ul>
              {#each item.works as work}
                <li class="work-info">
                  <span class="work-info-type">
                    {work.type.name}:&nbsp;
                  </span>
                  <span>
                    {work.units.join(", ")}
                  </span>
                </li>
              {/each}
            </ul>
          </a>
        </li>
      {/each}
    </ul>
  {/await}
{/if}

<style>
  .month-title {
    text-align: center;
    margin-top: 3rem;
    margin-bottom: 1rem;
  }

  .item {
    display: flex;
    flex-direction: column;
    padding: 20px;
    cursor: pointer;
  }
  .item:hover {
    background-color: #212121;
  }
  .item:active {
    background-color: #424242;
  }
  .item:active {
    background-color: #424242;
  }
  .item a {
    text-decoration: none;
    color: white;
  }

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .work-info {
    display: block;
    margin-top: 10px;
  }
  ul :first-child.work-info {
    margin-top: 0;
  }

  .work-info :first-child {
    font-weight: bold;
  }

  /* .work-info-type {
    font-weight: bold;
  } */
</style>
