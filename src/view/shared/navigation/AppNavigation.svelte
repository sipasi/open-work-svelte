<script lang="ts">
  import Icons from "../icon/Icons";
  import NavigationBar from "./NavigationBar.svelte";
  import NavigationBarItem from "./NavigationBarItem.svelte";
  import PageNames from "./PageNames";

  export let onSelected: (value: string) => void;
</script>

<NavigationBar>
  <NavigationBarItem
    icon={Icons.calendar_month}
    label="Months"
    click={() => onSelected(PageNames.work_month_list)}
  />
  <NavigationBarItem
    icon={Icons.list_alt}
    label="Types"
    click={() => onSelected(PageNames.work_type_list)}
  />
  <NavigationBarItem
    icon={Icons.settings}
    label="Settings"
    railLast={true}
    click={() => onSelected(PageNames.settings)}
  />
</NavigationBar>

<div class="content">
  <slot />
</div>

<style>
  @media (orientation: landscape) {
    .content {
      margin-left: 5rem;
    }
  }
  @media (orientation: portrait) {
    .content {
      margin-bottom: 5rem;
    }
  }
</style>
