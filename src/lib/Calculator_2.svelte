<script>
  let display = "";
  let is_screen_flipped = false;

  let current_expression = "";
  let last_result = "";

  function u_update_display(value) {
    display = value;
  }

  const u_handle_flip_screen = () => {
    is_screen_flipped = !is_screen_flipped;
  };

  const u_handle_top_row = (val) => {
    alert("🎵🎵 Can't touch this 🎵🎵");
  };

  function handle_input(target) {
    let input = target.dataset.value;
    // Check if the input is a valid number, operator, or decimal point
    if (
      /^\d$/.test(input) ||
      ["+", "-", "*", "/"].includes(input) ||
      input === "."
    ) {
      // If it's a valid input, append it to the current expression
      if (current_expression.length < 12) {
        current_expression += input;
        // Update the display with the current expression
        u_update_display(current_expression);
      }
    } else if (input === "C") {
      // If the input is 'C', clear the current expression and update the display
      current_expression = "";
      u_update_display(current_expression);
    } else if (input === "=") {
      // If the input is '=', evaluate the current expression and update the display
      let result = eval(current_expression);
      // Check if the result is a large or small number
      if (
        Math.abs(result) >= 1e8 ||
        (Math.abs(result) > 0 && Math.abs(result) < 1e-4)
      ) {
        // Split the result into its base and exponent
        const [base, exponent] = result.toExponential(3).split("e");
        // Limit the number of characters to 12 for the base
        const limitedBase = base.slice(0, 12);
        // Join the base and exponent back together
        result = `${limitedBase}e${exponent}`;
      } else {
        // Limit the number of characters to 12
        result = result.toString().slice(0, 12);
      }
      u_update_display(result);
      // Save the result as the start of a new expression
      current_expression = result.toString();
    } else {
      // If the input is an operator, append it to the current expression
      current_expression += input;
    }
  }
</script>

<div
  class="device sm:rounded-xs bg-gray-500 border-2 border-gray-600 shadow-xl sm:shadow-2xl mx-auto xs:rounded
      xs:pt-4 xs:pb-2 xs:px-1 sm:pt-8 sm:pb-4"
>
  <div class="device-internal">
    <!-- SCREEN -->
    <div
      class="{is_screen_flipped === true ? 'flip' : ''} screen text-4xl
          bg-teal-200 xs:my-4 border-b-2 border-t-2 border-l-8 border-r-8
          border-teal-800 xs:rounded tracking-tight flex items-center justify-end"
    >
      <div id="ans" class="text-right p-2">{display}</div>
    </div>
    <!-- BUTTONS -->
    <div class="pad">
      <!-- TOP ROW -->
      <div class="buttons-top flex justify-evenly">
        <button
          data-value="TopButton"
          on:click={u_handle_top_row}
          class="button button-sm"
        >
          MRC
        </button>
        <button
          data-value="TopButton"
          on:click={u_handle_top_row}
          class="button button-sm"
        >
          M-
        </button>
        <button
          data-value="TopButton"
          on:click={u_handle_top_row}
          class="button button-sm"
        >
          M+
        </button>
        <button
          data-value="TopButton"
          on:click={u_handle_top_row}
          class="button button-sm"
        >
          √x
        </button>
        <button
          data-value="TopButton"
          on:click={u_handle_top_row}
          class="button button-sm"
        >
          ±
        </button>
      </div>
      <!-- MAIN SECTION -->
      <div class="buttons-main">
        <button
          data-value="C"
          on:click={(e) => handle_input(e.target)}
          value="null"
          class="button button-lg clear"
        >
          C/AC
        </button>
        <button
          data-value="Flip"
          on:click={u_handle_flip_screen}
          value="null"
          class="button button-lg mem"
        >
          FLP
        </button>
        <button
          data-value="%"
          on:click={(e) => handle_input(e.target)}
          class="button button-lg percent"
        >
          %
        </button>
        <button
          data-value="/"
          on:click={(e) => handle_input(e.target)}
          class="button button-lg divide"
        >
          ÷
        </button>
        <button
          data-value="*"
          on:click={(e) => handle_input(e.target)}
          class="button button-lg multiply"
        >
          ×
        </button>
        <button
          data-value="-"
          on:click={(e) => handle_input(e.target)}
          class="button button-lg subtract"
        >
          -
        </button>
        <button
          data-value="+"
          on:click={(e) => handle_input(e.target)}
          style="height: 100%;"
          class="button button-lg add"
        >
          +
        </button>
        <button
          data-value="="
          on:click={(e) => handle_input(e.target)}
          class="button button-lg equals"
        >
          =
        </button>
        <button
          data-value="."
          on:click={(e) => handle_input(e.target)}
          class="button button-lg decimal"
        >
          .
        </button>
        <button
          data-value="0"
          on:click={(e) => handle_input(e.target)}
          class="button button-lg num0"
        >
          0
        </button>
        <button
          data-value="1"
          on:click={(e) => handle_input(e.target)}
          class="button button-lg num1"
        >
          1
        </button>
        <button
          data-value="2"
          on:click={(e) => handle_input(e.target)}
          class="button button-lg num2"
        >
          2
        </button>
        <button
          data-value="3"
          on:click={(e) => handle_input(e.target)}
          class="button button-lg num3"
        >
          3
        </button>
        <button
          data-value="4"
          on:click={(e) => handle_input(e.target)}
          class="button button-lg num4"
        >
          4
        </button>
        <button
          data-value="5"
          on:click={(e) => handle_input(e.target)}
          class="button button-lg num5"
        >
          5
        </button>
        <button
          data-value="6"
          on:click={(e) => handle_input(e.target)}
          class="button button-lg num6"
        >
          6
        </button>
        <button
          data-value="7"
          on:click={(e) => handle_input(e.target)}
          class="button button-lg num7"
        >
          7
        </button>
        <button
          data-value="8"
          on:click={(e) => handle_input(e.target)}
          class="button button-lg num8"
        >
          8
        </button>
        <button
          data-value="9"
          on:click={(e) => handle_input(e.target)}
          class="button button-lg num9"
        >
          9
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  .device {
    width: 100%;
    height: 100vh;
  }

  .device-internal {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .screen {
    height: 16%;
    font-family: "Orbitron", "Nova Mono", monospace;
    min-height: 74px;
  }

  .pad {
    flex-grow: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .screen.flip {
    transform: scaleX(-1) scaleY(-1);
  }

  .buttons-top {
    height: 10%;
    display: flex;
  }

  .buttons-main {
    flex-grow: 1;
    display: grid;
    place-items: center;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "clear mem percent divide"
      "num7 num8 num9 multiply"
      "num4 num5 num6 subtract"
      "num1 num2 num3 add"
      "num0 decimal equals add";
  }

  .button {
    @apply cursor-pointer uppercase font-semibold text-white border border-white bg-blue-600 flex justify-center items-center;
  }

  .button.clear {
    @apply bg-red-600;
  }
  .button.clear:hover {
    @apply bg-red-500;
  }
  .button.clear:active {
    @apply bg-red-600;
  }

  .button-sm,
  .button-lg {
    @apply text-2xl w-full h-full;
  }

  .clear {
    grid-area: clear;
  }
  .mem {
    grid-area: mem;
  }
  .percent {
    grid-area: percent;
  }
  .divide {
    grid-area: divide;
  }
  .multiply {
    grid-area: multiply;
  }
  .subtract {
    grid-area: subtract;
  }
  .equals {
    grid-area: equals;
  }
  .add {
    grid-area: add;
  }
  .decimal {
    grid-area: decimal;
  }
  .num0 {
    grid-area: num0;
  }
  .num1 {
    grid-area: num1;
  }
  .num2 {
    grid-area: num2;
  }
  .num3 {
    grid-area: num3;
  }
  .num4 {
    grid-area: num4;
  }
  .num5 {
    grid-area: num5;
  }
  .num6 {
    grid-area: num6;
  }
  .num7 {
    grid-area: num7;
  }
  .num8 {
    grid-area: num8;
  }
  .num9 {
    grid-area: num9;
  }

  @media only screen and (min-width: 480px) {
    .device {
      height: 540px;
      width: 400px;
    }
  }
</style>
