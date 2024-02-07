<script lang="ts">
  export let type: "solid" | "dot" | "round" | "dash" = "solid";
</script>

<hr class={type} />

<style>
  /* Solid border */
  .solid {
    border-top: 3px solid #bbb;
    margin: 10px 0px;
  }

  /* Dotted border */
  .dot {
    border-top: 3px dotted #bbb;
    margin: 10px 0px;
  }

  /* Rounded border */
  .round {
    border-top: 3px solid #bbb;
    border-radius: 4px;
    margin: 10px 0px;
  }

  /* Dashed border */
  .dash {
    border-top: 3px dashed #bbb;
    margin: 10px 0px;
  }
</style>
