<script>
  // calculator basics
  let firstNum = "";
  let secondNum = "";
  let isOperatorActive = false;
  let currentOperator = null;
  let countCalculation = 0;
  let displayNum = 0;
  let ans = null;

  // for fun
  let screenIsFlipped = false;

  // enable vibration support
  // navigator.vibrate =
  //   navigator.vibrate ||
  //   navigator.webkitVibrate ||
  //   navigator.mozVibrate ||
  //   navigator.msVibrate;

  const feedbackVibrate = () => {
    window.navigator.vibrate(300);
  };

  const utilitySetError = () => {
    displayNum = "error";
  };

  const utilityCalculateAns = () => {
    try {
      ans = eval(firstNum + currentOperator + secondNum);
    } catch (err) {
      ans = "error";
      // console.log(err);
    }
  };
  const utilityGetResult = () => {
    if (firstNum) {
      utilityCalculateAns();
      firstNum = ans;
      countCalculation = countCalculation + 1;
      secondNum = "";
      displayNum = ans;
      // console.log("utilityGetResult", ans);
    } else {
      utilitySetError();
    }
  };

  const utilitySetOperator = op => {
    isOperatorActive = true;
    currentOperator = op;
    // console.log("setOperator", currentOperator);
  };

  const utilityDisplayFirstNum = val => {
    countCalculation > 0 ? (firstNum = "") : "";
    firstNum = firstNum + val;
    displayNum = firstNum;
  };

  const utilityDisplaySecondNum = val => {
    secondNum = secondNum + val;
    displayNum = secondNum;
  };

  const interactWithFlip = () => {
    feedbackVibrate();
    screenIsFlipped = !screenIsFlipped;
  };

  const interactWithClear = () => {
    feedbackVibrate();
    firstNum = "";
    secondNum = "";
    isOperatorActive = false;
    countCalculation = 0;
    currentOperator = null;
    ans = null;
    displayNum = 0;
  };

  const interactWithNumber = val => {
    feedbackVibrate();
    !currentOperator
      ? utilityDisplayFirstNum(val)
      : utilityDisplaySecondNum(val);
  };

  const interactWithOperator = op => {
    feedbackVibrate();
    if (op === "=") {
      if (firstNum !== "" && secondNum === "") {
        ans = firstNum;
        displayNum = ans;
      } else {
        isOperatorActive = false;
        utilityGetResult();
        currentOperator = null;
      }
    } else if (isOperatorActive) {
      // chaining answers
      utilityGetResult();
      utilitySetOperator(op);
    } else {
      utilitySetOperator(op);
    }
  };

  const interactWithTopButtons = val => {
    alert("CANT TOUCH THIS");
  };

  // $: console.log("firstNum", firstNum);
  // $: console.log("secondNum", secondNum);
  // $: console.log("displayNum", displayNum);
  // $: console.log("isOperatorActive", isOperatorActive);
  // $: console.log("currentOperator", currentOperator);
  // $: console.log("ans", ans);
  // $: console.log("countCalculation", countCalculation);
</script>

<style>
  .device {
    min-width: 320px;
  }
  .screen {
    font-family: "Orbitron", "Nova Mono", monospace;
    min-height: 74px;
  }

  .screen.flip {
    transform: scaleX(-1) scaleY(-1);
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
    box-shadow: 1px 2px 5px 1px rgba(0, 0, 0, 0.382);
    transition: all 0.3s ease;
    @apply cursor-pointer uppercase font-semibold text-white bg-blue-600 rounded flex justify-center items-center;
  }

  .button:hover {
    box-shadow: 1px 4px 5px 2px rgba(0, 0, 0, 0.191);
    @apply bg-blue-500;
  }
  .button:active {
    box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.5);
    @apply bg-blue-600;
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

  .button-sm {
    @apply text-base w-8 h-8;
  }
  .button-lg {
    @apply text-lg w-12 h-12;
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

  @media (min-width: 640px) {
    .button-sm {
      @apply text-xl w-12 h-12;
    }
    .button-lg {
      @apply text-2xl w-16 h-16;
    }
  }
</style>

<div
  class="device flex flex-col bg-gray-500 shadow-xl sm:shadow-2xl container
  mx-auto rounded max-w-xs sm:max-w-sm pt-4 pb-2 sm:pt-8 sm:pb-4">
  <div class="mx-4">
    <div
      class="{screenIsFlipped === true ? 'flip' : ''} screen text-4xl
      bg-teal-200 mx-8 my-4 border-b-2 border-t-2 border-l-8 border-r-8
      border-teal-800 rounded tracking-tight">
      <div id="ans" class="text-right p-2">{displayNum}</div>
    </div>

    <div class="pad mx-6 sm:mx-8 my-4">
      <div class="buttons-top flex justify-evenly">
        <button
          on:click={e => interactWithTopButtons(e.target.value)}
          class="button button-sm">
          MRC
        </button>
        <button
          on:click={e => interactWithTopButtons(e.target.value)}
          class="button button-sm">
          M-
        </button>
        <button
          on:click={e => interactWithTopButtons(e.target.value)}
          class="button button-sm">
          M+
        </button>
        <button
          on:click={e => interactWithTopButtons(e.target.value)}
          class="button button-sm">
          √x
        </button>
        <button
          on:click={e => interactWithTopButtons(e.target.value)}
          class="button button-sm">
          ±
        </button>
      </div>
      <div class="buttons-main">
        <button
          on:click={interactWithClear}
          value="null"
          class="button button-lg clear">
          C/AC
        </button>
        <button
          on:click={interactWithFlip}
          value="null"
          class="button button-lg mem">
          FLP
        </button>
        <button
          on:click={e => interactWithOperator(e.target.value)}
          value="%"
          class="button button-lg percent">
          %
        </button>
        <button
          on:click={e => interactWithOperator(e.target.value)}
          value="/"
          class="button button-lg divide">
          ÷
        </button>
        <button
          on:click={e => interactWithOperator(e.target.value)}
          value="*"
          class="button button-lg multiply">
          ×
        </button>
        <button
          on:click={e => interactWithOperator(e.target.value)}
          value="-"
          class="button button-lg subtract">
          -
        </button>
        <button
          on:click={e => interactWithOperator(e.target.value)}
          value="+"
          style="height: 100%;"
          class="button button-lg add">
          +
        </button>
        <button
          on:click={e => interactWithOperator(e.target.value)}
          value="="
          class="button button-lg equals">
          =
        </button>
        <button
          on:click={e => interactWithNumber(e.target.value)}
          value="."
          class="button button-lg decimal">
          .
        </button>
        <button
          on:click={e => interactWithNumber(e.target.value)}
          value="0"
          class="button button-lg num0">
          0
        </button>
        <button
          on:click={e => interactWithNumber(e.target.value)}
          value="1"
          class="button button-lg num1">
          1
        </button>
        <button
          on:click={e => interactWithNumber(e.target.value)}
          value="2"
          class="button button-lg num2">
          2
        </button>
        <button
          on:click={e => interactWithNumber(e.target.value)}
          value="3"
          class="button button-lg num3">
          3
        </button>
        <button
          on:click={e => interactWithNumber(e.target.value)}
          value="4"
          class="button button-lg num4">
          4
        </button>
        <button
          on:click={e => interactWithNumber(e.target.value)}
          value="5"
          class="button button-lg num5">
          5
        </button>
        <button
          on:click={e => interactWithNumber(e.target.value)}
          value="6"
          class="button button-lg num6">
          6
        </button>
        <button
          on:click={e => interactWithNumber(e.target.value)}
          value="7"
          class="button button-lg num7">
          7
        </button>
        <button
          on:click={e => interactWithNumber(e.target.value)}
          value="8"
          class="button button-lg num8">
          8
        </button>
        <button
          on:click={e => interactWithNumber(e.target.value)}
          value="9"
          class="button button-lg num9">
          9
        </button>
      </div>
    </div>
  </div>
</div>
