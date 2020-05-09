<script>
  import SvelteFullscreen from "svelte-fullscreen";
  import Tailwindcss from "./Tailwindcss.svelte";
  import Calculator from "./components/Calculator.svelte";
  import SvgExpand from "./components/SvgExpand.svelte";
  import SvgCompress from "./components/SvgCompress.svelte";

  let isFullscreen;
</script>

<style>
  .bg {
    height: 100vh;
    display: flex;
    align-items: center;
  }
</style>

<Tailwindcss />

<SvelteFullscreen let:onRequest let:onExit>
  <div class="bg bg-blue-100">
    <Calculator />
  </div>
</SvelteFullscreen>
