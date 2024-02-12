<script lang="ts">
  export let date: Date;
  export let sum: number;

  function formatDate(date: Date) {
    let month = (date.getMonth() + 1).toString();
    let year = date.getFullYear().toString();

    if (month.length < 2) month = "0" + month;

    return [year, month].join("-");
  }
</script>

<button class="root" on:click>
  <p class="date">{formatDate(date)}</p>
  <p class="sum roboto-light">{sum}</p>
</button>

<style>
  .date {
    margin-bottom: 0.5rem;
  }
  .root {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;

    padding: 20px;

    cursor: pointer;

    background-color: transparent;
    border: none;

    font-weight: bold;

    transition: background-color 0.2s;
  }
  .root:hover,
  .root:focus {
    filter: drop-shadow(0 0 2em);
    opacity: 0.8;
  }
  .root:active {
    background-color: inherit-background-color;
  }

  .root:active {
    transform: scale(1, 1.05);
  }
</style>
