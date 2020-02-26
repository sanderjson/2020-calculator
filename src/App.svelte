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
    width: 24px;
    fill: #a0aec0;
  }
</style>

<Tailwindcss />

<SvelteFullscreen let:onRequest let:onExit>
  <main class="m-0">
    <section
      class="bg relative flex flex-col justify-center items-center bg-red-100
      w-screen h-screen mb-4">
      <Calculator />
      <div class="fullscreen-controls absolute mx-auto bottom-0 mb-12">
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
    </section>

    <footer class="bg-black text-white text-2xl pt-6 pb-2">
      <div class="container mx-auto flex justify-between mx-4">
        <span>Calculator</span>
        <div>@sanderjson</div>
      </div>
    </footer>

  </main>
</SvelteFullscreen>
