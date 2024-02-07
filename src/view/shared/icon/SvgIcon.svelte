<script lang="ts">
  import Icons from "./Icons";

  export let type: Icons;
</script>

<img src="icons/{type}.svg" alt="" />

<style>
  img {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(160deg)
      brightness(101%) contrast(105%);

    width: 1.5rem;
    height: 1.5rem;
  }
</style>
