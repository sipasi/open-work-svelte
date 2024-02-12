<script lang="ts">
  import DayEditModel from "./DayEditModel";
  import InputCard from "./InputCard.svelte";

  export let groups: DayEditModel[];
</script>

<div class="input-card-group">
  {#each groups as item}
    <InputCard
      name={item.type.name}
      type={item.type}
      works={item.units}
      bind:input={item.input}
      onChipTap={(index) => {
        const unit = item.units[index];

        item.units.splice(index, 1);

        item.input = unit;
      }}
      onSubmit={() => {
        const input = item.input;

        item.units.push(input);

        item.input = "";
      }}
    />
  {/each}
</div>

<style>
  .input-card-group {
    display: flex;
    flex-direction: column;
  }
</style>
