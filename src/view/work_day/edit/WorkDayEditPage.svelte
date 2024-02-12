<script lang="ts">
  import WorkMonth from "$root/data/WorkMonth";
  import EntityStorage from "$root/repository/EntityStorage";
  import { getContext, onMount } from "svelte";
  import DayEditModel from "./DayEditModel";
  import InputCardGroup from "./InputCardGroup.svelte";
  import DateToText from "$root/tool/DateToText";
  import IconFab from "$root/view/shared/fab/IconFab.svelte";
  import Icons from "$root/view/shared/icon/Icons";

  import { pop } from "svelte-spa-router";

  export let params;

  const month_id = params.id as number;
  const day = params.day as number;

  const storage = getContext(
    EntityStorage<WorkMonth>
  ) as EntityStorage<WorkMonth>;
  let month: WorkMonth;
  let groups: DayEditModel[];
  let date: Date;

  const fetchData = async () => {
    month = await storage.getBy(month_id);

    date = month.date;

    groups = DayEditModel.map(month.days[day - 1]);
  };

  onMount(async () => fetchData());

  const getHeaderMessage = () => {
    const dayDate = new Date(date.getFullYear(), date.getMonth(), day);

    return DateToText.format(dayDate, {
      weekday: "long",
    });
  };
  const onSave = () => {
    month.days[day - 1] = DayEditModel.toWorkDay(day, groups);

    pop();
  };
</script>

{#if groups}
  <h2 class="header">{getHeaderMessage()}</h2>

  <InputCardGroup {groups} />

  <IconFab icon={Icons.save} on:click={() => onSave()} />
{/if}

<style>
  .header {
    text-align: center;
    margin: 10px;
  }
</style>
