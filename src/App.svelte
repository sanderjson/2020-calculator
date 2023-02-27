<script>
  // import SvelteFullscreen from "svelte-fullscreen";
  import Calculator from "./lib/Calculator.svelte";
  import Calculator2 from "./lib/Calculator_2.svelte";
</script>

<div class="bg bg-blue-100">
  <!-- <Calculator /> -->
  <Calculator2 />
</div>

<style>
  .bg {
    height: 100vh;
    display: flex;
    align-items: center;
  }
</style>
