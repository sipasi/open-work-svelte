<script lang="ts">
  import SettingsPage from "./setting/SettingsPage.svelte";
  import AppNavigation from "./shared/navigation/AppNavigation.svelte";
  import WorkDayEditPage from "./work_day/edit/WorkDayEditPage.svelte";
  import WorkMonthDetailPage from "./work_month/detail/WorkMonthDetailPage.svelte";
  import WorkMonthListPage from "./work_month/list/WorkMonthListPage.svelte";
  import WorkTypeListPage from "./work_type/list/WorkTypeListPage.svelte";

  import Router, { push, replace } from "svelte-spa-router";

  function onPageSelection(name: string) {
    console.info(name);
    replace(`/${name}`);
  }

  const routes = {
    "/": WorkMonthListPage,

    "/months": WorkMonthListPage,
    "/months/:id": WorkMonthDetailPage,
    "/months/:id/:day": WorkDayEditPage,

    "/types": WorkTypeListPage,

    "/settings": SettingsPage,

    "*": WorkMonthListPage,
  };
</script>

<AppNavigation onSelected={onPageSelection}>
  <Router {routes} />
</AppNavigation>
