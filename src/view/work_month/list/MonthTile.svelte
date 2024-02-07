<script lang="ts">
  export let count: number;
  export let date: Date;
  export let sum: number;

  function formatDate(date: Date) {
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();
    let year = date.getFullYear().toString();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
</script>

<div tabindex="0" class="root" role="button">
  <p class="date">{formatDate(date)}</p>

  <p class="sum roboto-light">{sum}</p>
</div>

<style>
  .date {
  }
  .sum {
    color: #bdbdbd;
  }

  .root {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;

    font-weight: 500;

    padding: 20px;

    cursor: pointer;

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
    position: relative;
    display: block;
    transform: scale(1, 1.05);
  }
</style>
