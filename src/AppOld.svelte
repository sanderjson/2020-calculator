<!-- <script>
  import Tailwindcss from "./Tailwindcss.svelte";

  let firstNum = "";
  let secondNum = "";
  let operation = null;
  let ans = 0;
  let evalAns = false;

  // const opClear = () => {
  //   firstNum = "";
  //   secondNum = "";
  //   operation = null;
  //   ans = 0;
  // };

  // const opFlip = () => {
  //   console.log("flip");
  // };

  // const opEvaluateAns = () => {
  //   if (firstNum !== "" && secondNum !== "" && operation) {
  //     console.log("opEvaluateAns: standard evaluation");
  //     ans = eval(firstNum + operation + secondNum);
  //     firstNum = ans;
  //     secondNum = "";
  //     operation = null;
  //     evalAns = true;
  //   } else if (!operation) {
  //     console.log("opEvaluateAns: number equals number");
  //     secondNum ? (ans = eval(secondNum)) : (ans = eval(firstNum));
  //     firstNum = ans;
  //     secondNum = "";
  //     operation = null;
  //     evalAns = true;
  //   } else {
  //     ans = "error";
  //   }
  // };

  // const addNumberToState = val => {
  //   if (typeof firstNum !== "number") {
  //     console.log("addNumberToState: firstNum is a string");
  //     firstNum = firstNum + val;
  //     if (firstNum[0] === "0") {
  //       firstNum = firstNum.substring(1);
  //     }
  //     ans = firstNum;
  //   } else {
  //     console.log("addNumberToState: firstNum is a number");
  //     secondNum = secondNum + val;
  //     if (secondNum[0] === "0") {
  //       secondNum = secondNum.substring(1);
  //     }
  //     ans = secondNum;
  //   }
  // };

  // const addOperationToState = val => {
  //   if (operation && !secondNum) {
  //     console.log("addNumberToState: no double operators");
  //     ans = "error";
  //   } else {
  //     if (secondNum !== "" && operation) {
  //       console.log("addNumberToState: calculation sequence without equals");
  //       ans = eval(firstNum + operation + secondNum);
  //       firstNum = ans;
  //       secondNum = "";
  //       operation = null;
  //       evalAns = true;
  //     } else {
  //       console.log("addNumberToState: unknown case");
  //     }
  //     firstNum = Number(firstNum);
  //     operation = val;
  //   }
  // };

  const interactWithFlip = () => {
    console.log("flip");
  };

  const interactWithClear = () => {
    console.log("clear");
  };

  const interactWithNumber = val => {
    console.log(val);
  };

  const interactWithOperator = val => {
    console.log(val);
  };

  const interactWithTopButtons = val => {
    alert("CANT TOUCH THIS");
  };

  // $: console.log("evalAns", evalAns);
  // $: console.log("ans", ans);
  // $: console.log("firstNum", firstNum, "type:", typeof firstNum);
  // $: console.log("secondNum", secondNum, "type:", typeof secondNum);
</script>

<style>
  .device {
    min-width: 320px;
  }
  .screen {
    font-family: "Nova Mono", monospace;
    min-height: 74px;
  }
  .buttons-top {
    display: flex;
    margin: 1em 0;
  }
  .buttons-main {
    display: grid;
    place-items: center;
    row-gap: 1em;
    grid-template-areas:
      "clear mem percent divide"
      "num7 num8 num9 multiply"
      "num4 num5 num6 subtract"
      "num1 num2 num3 add"
      "num0 decimal equals add";
  }

  .button {
    @apply cursor-pointer uppercase font-semibold text-white bg-blue-600 rounded flex justify-center items-center;
    box-shadow: 1px 2px 5px 1px rgba(0, 0, 0, 0.382);
    transition: all 0.3s ease;
  }

  .button.clear {
    @apply bg-red-600;
  }

  .button:hover {
    box-shadow: 1px 4px 5px 2px rgba(0, 0, 0, 0.191);
  }
  .button:active {
    box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.5);
  }

  .button-sm {
    @apply text-xl w-12 h-12;
  }
  .button-lg {
    @apply text-2xl w-16 h-16;
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
</style>

<Tailwindcss />

<div class="bg flex justify-center items-center bg-red-100 w-screen h-screen">
  <div
    class="device flex flex-col bg-gray-500 shadow-2xl container mx-auto rounded
    max-w-sm pt-8 pb-4">
    <div class="mx-4">
      <div
        class="screen text-4xl bg-teal-200 mx-8 my-4 border-b-2 border-t-2
        border-l-8 border-r-8 border-teal-800 rounded tracking-tight">
        <div id="ans" class="text-right p-2">{ans}</div>
      </div>

      <div class="pad mx-8 my-4">
        <div class="buttons-top flex justify-evenly">
          <button
            on:click={e => interactWithTopButtons(e.target.value)}
            class="button hover:bg-blue-500 button-sm">
            MRC
          </button>
          <button
            on:click={e => interactWithTopButtons(e.target.value)}
            class="button hover:bg-blue-500 button-sm">
            M-
          </button>
          <button
            on:click={e => interactWithTopButtons(e.target.value)}
            class="button hover:bg-blue-500 button-sm">
            M+
          </button>
          <button
            on:click={e => interactWithTopButtons(e.target.value)}
            class="button hover:bg-blue-500 button-sm">
            √x
          </button>
          <button
            on:click={e => interactWithTopButtons(e.target.value)}
            class="button hover:bg-blue-500 button-sm">
            ±
          </button>
        </div>
        <div class="buttons-main">
          <button
            on:click={interactWithClear}
            value="null"
            class="button hover:bg-red-500 button-lg clear">
            C/AC
          </button>
          <button
            on:click={interactWithFlip}
            value="null"
            class="button hover:bg-blue-500 button-lg mem">
            FLP
          </button>
          <button
            on:click={e => interactWithOperator(e.target.value)}
            value="%"
            class="button hover:bg-blue-500 button-lg percent">
            %
          </button>
          <button
            on:click={e => interactWithOperator(e.target.value)}
            value="/"
            class="button hover:bg-blue-500 button-lg divide">
            ÷
          </button>
          <button
            on:click={e => interactWithOperator(e.target.value)}
            value="*"
            class="button hover:bg-blue-500 button-lg multiply">
            ×
          </button>
          <button
            on:click={e => interactWithOperator(e.target.value)}
            value="-"
            class="button hover:bg-blue-500 button-lg subtract">
            -
          </button>
          <button
            on:click={e => interactWithOperator(e.target.value)}
            value="+"
            style="height: 100%;"
            class="button hover:bg-blue-500 button-lg add">
            +
          </button>
          <button
            on:click={e => interactWithOperator(e.target.value)}
            value="="
            class="button hover:bg-blue-500 button-lg equals">
            =
          </button>
          <button
            on:click={e => interactWithNumber(e.target.value)}
            value="."
            class="button hover:bg-blue-500 button-lg decimal">
            .
          </button>
          <button
            on:click={e => interactWithNumber(e.target.value)}
            value="0"
            class="button hover:bg-blue-500 button-lg num0">
            0
          </button>
          <button
            on:click={e => interactWithNumber(e.target.value)}
            value="1"
            class="button hover:bg-blue-500 button-lg num1">
            1
          </button>
          <button
            on:click={e => interactWithNumber(e.target.value)}
            value="2"
            class="button hover:bg-blue-500 button-lg num2">
            2
          </button>
          <button
            on:click={e => interactWithNumber(e.target.value)}
            value="3"
            class="button hover:bg-blue-500 button-lg num3">
            3
          </button>
          <button
            on:click={e => interactWithNumber(e.target.value)}
            value="4"
            class="button hover:bg-blue-500 button-lg num4">
            4
          </button>
          <button
            on:click={e => interactWithNumber(e.target.value)}
            value="5"
            class="button hover:bg-blue-500 button-lg num5">
            5
          </button>
          <button
            on:click={e => interactWithNumber(e.target.value)}
            value="6"
            class="button hover:bg-blue-500 button-lg num6">
            6
          </button>
          <button
            on:click={e => interactWithNumber(e.target.value)}
            value="7"
            class="button hover:bg-blue-500 button-lg num7">
            7
          </button>
          <button
            on:click={e => interactWithNumber(e.target.value)}
            value="8"
            class="button hover:bg-blue-500 button-lg num8">
            8
          </button>
          <button
            on:click={e => interactWithNumber(e.target.value)}
            value="9"
            class="button hover:bg-blue-500 button-lg num9">
            9
          </button>
        </div>
      </div>
    </div>
  </div>
</div> -->
