<script>
  import SvelteFullscreen from "svelte-fullscreen";
  import Tailwindcss from "./Tailwindcss.svelte";
  import Calculator from "./components/Calculator.svelte";
  import SvgExpand from "./components/SvgExpand.svelte";
  import SvgCompress from "./components/SvgCompress.svelte";

  let isFullscreen;
</script>

<style>
  :global(.fullscreen-controls svg) {
    width: 32px;
    fill: red;
  }
</style>

<Tailwindcss />

<SvelteFullscreen let:onRequest let:onExit>
  <main class="m-0">
    <section
      class="bg relative flex flex-col justify-center items-center bg-red-100
      w-screen h-screen">
      <div class="fullscreen-controls absolute mx-auto top-0 mt-8">
        {#if !isFullscreen}
          <button
            on:click={() => {
              isFullscreen = true;
              onRequest();
            }}>
            <SvgExpand />
          </button>
        {:else}
          <button
            on:click={() => {
              isFullscreen = false;
              onExit();
            }}>
            <SvgCompress />
          </button>
        {/if}
      </div>
      <Calculator />
    </section>

    <footer class="bg-black text-white text-2xl pt-6 pb-2">
      <div class="container mx-auto flex justify-between mx-4">
        <span>Calculator</span>
        <div>@sanderjson</div>
      </div>
    </footer>

  </main>
</SvelteFullscreen>
