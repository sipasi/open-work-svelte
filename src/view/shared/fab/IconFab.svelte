<script lang="ts">
  import Icons from "../icon/Icons";
  import SvgIcon from "../icon/SvgIcon.svelte";

  export let icon: Icons;
</script>

<button class="fab-square" on:click>
  <SvgIcon type={icon} />
</button>

<style>
  .fab-square {
    width: 64px;
    height: 64px;

    position: fixed;
    right: 20px;
    bottom: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 25%;

    text-decoration: none;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);

    background-color: #3f51b5;

    transition: background-color 0.25s;
  }

  .fab-square:hover {
    background-color: #3949ab;
  }
  .fab-square:active {
    background-color: #303f9f;
  }
  @media (orientation: landscape) {
    .fab-square {
      bottom: 1rem;
      bottom: 1rem;
    }
  }
  @media (orientation: portrait) {
    .fab-square {
      right: 20px;
      bottom: 6rem;
    }
  }
</style>
