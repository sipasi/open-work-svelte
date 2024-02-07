<script lang="ts">
  import WorkMonth from "../../../data/WorkMonth";
  import WorkDay from "../../../data/WorkDay";
  import Work from "../../../data/Work";
  import CalculationType from "../../../data/CalculationType";
  import Divider from "../../shared/divider/Divider.svelte";

  let now = Date.now();

  let list = Array<WorkDay>();

  for (let i = 1; i < 32; i++) {
    let day = new WorkDay({
      day: i,
      works: [
        new Work(204, "abon", CalculationType.commaSeparator, [
          "1",
          "1",
          "1",
          "1",
        ]),
        new Work(204, "pers", CalculationType.commaSeparator, [
          "1",
          "1",
          "1",
          "1",
        ]),
        new Work(204, "spli", CalculationType.commaSeparator, [
          "1",
          "1",
          "1",
          "1",
        ]),
      ],
    });

    list.push(day);
  }

  function getDay(date: Date) {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = date.toLocaleDateString();
    console.log(formattedDate); // Saturday, January 28, 2024
  }
</script>

<ul class="list">
  {#each list as item}
    <li class="item">
      <div class="header">
        <span>
          {item.day}
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
</ul>

<style>
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
