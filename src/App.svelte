<script lang="ts">
  import { setContext } from "svelte";
  import FakeCreator from "./repository/fake/FakeCreator";
  import AppView from "./view/AppView.svelte";
  import EntityStorage from "./repository/EntityStorage";
  import type WorkMonth from "./data/WorkMonth";

  setContext(EntityStorage<WorkMonth>, FakeCreator.createFakeMonths());
</script>

<main>
  <AppView />
</main>
