<script lang="ts">
  import SettingsPage from "./setting/SettingsPage.svelte";
  import AppNavigation from "./shared/navigation/AppNavigation.svelte";
  import PageNames from "./shared/navigation/PageNames";
  import WorkMonthDetailPage from "./work_month/detail/WorkMonthDetailPage.svelte";
  import WorkMonthListPage from "./work_month/list/WorkMonthListPage.svelte";
  import WorkTypeListPage from "./work_type/list/WorkTypeListPage.svelte";

  let page = PageNames.work_month_list;

  function onPageSelection(name: string) {
    page = name;
    console.info(name);
  }
</script>

<AppNavigation onSelected={onPageSelection}>
  {#if page === PageNames.work_month_list}
    <WorkMonthListPage />
  {:else if page === PageNames.work_month_detail}
    <WorkMonthDetailPage />
  {:else if page === PageNames.work_type_list}
    <WorkTypeListPage />
  {:else if page === PageNames.settings}
    <SettingsPage />
  {/if}
</AppNavigation>
