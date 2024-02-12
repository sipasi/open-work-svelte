<script lang="ts">
  import RawWorkCalculator from "$root/data/RawWorkCalculator";
  import type WorkType from "$root/data/WorkType";

  export let input: string;
  export let name: string;
  export let works: string[];

  export let type: WorkType;

  export let onChipTap: (index: number) => void;
  export let onSubmit: () => void;

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };
</script>

<div class="card">
  <div class="header">
    <h3>{name}</h3>
    <h4>
      {RawWorkCalculator.calculateWorks(works, type.calculation, type.price)}
    </h4>
  </div>
  <div
    class:empty-label-visible={works.length === 0}
    class:empty-label-unvisible={works.length !== 0}
  >
    <p>empty</p>
  </div>
  <div class="chips-container">
    {#each works as work, index}
      <button class="chips" on:click={() => onChipTap(index)}>
        <span>{work}</span>
        <span>&#10006;</span>
      </button>
    {/each}
  </div>
  <input
    type="text"
    class="input"
    bind:value={input}
    on:keydown={handleKeyPress}
  />
</div>

<style>
  .card {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
  }
  .card * {
    flex-grow: 1;
  }

  .header {
    display: flex;
  }
  .header :first-child {
    text-align: start;
  }
  .header :last-child {
    text-align: end;
    color: #81c784;
  }

  .chips {
    padding: 4px 10px;
    text-align: center;
  }
  .chips :last-child {
    margin-left: 10px;
  }
  .chips-container {
    display: inline-block;
  }
  .chips-container .chips {
    margin: 4px 4px;
  }
  .empty-label-unvisible {
    display: none;
  }
  .empty-label-visible {
    display: block;
  }

  .input {
    padding: 10px;
    border-radius: 4px;
    border-top: none;
    border-left: none;
    border-right: none;
    margin: 0px;
  }
</style>
