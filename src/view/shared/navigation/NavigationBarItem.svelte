<script lang="ts">
  import type Icons from "../icon/Icons";
  import SvgIcon from "../icon/SvgIcon.svelte";

  export let icon: Icons;
  export let label: string;
  export let selected: boolean = false;
  export let railLast: boolean = false;

  export let click: () => void;
</script>

<li class="panel-item {railLast && 'rail-last'}">
  <button
    class="item-link {selected && 'item-link-selected'}"
    on:click={() => click()}
  >
    <span>
      <SvgIcon type={icon} />
    </span>
    <span class="link-text">
      {label}
    </span>
  </button>
</li>

<style>
  .panel-item {
    width: 100%;
  }
  .item-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;

    height: 5rem;

    color: var(--text-primary);
    background-color: transparent;

    border: none;

    cursor: pointer;
  }
  .link-text {
    color: var(--text-primary);
  }  
  
  .panel-item:hover {
    background-color: #3949ab;
  }
  .panel-item:active {
    background-color: #303f9f;
  }

  @media (orientation: landscape) {
    .panel-item:first-child {
      margin-top: 20px;
    }

    .rail-last {
      margin-top: auto;
    }
  }
  @media (orientation: portrait) {
  }
</style>
