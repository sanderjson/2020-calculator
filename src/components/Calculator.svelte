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
  navigator.vibrate =
    navigator.vibrate ||
    navigator.webkitVibrate ||
    navigator.mozVibrate ||
    navigator.msVibrate;

  const feedbackVibrate = () => {
    navigator.vibrate(50);
  };

  const utilitySetError = () => {
    displayNum = "error";
  };

  const utilityOperatorObj = {
    "+": function(a, b) {
      return a + b;
    },
    "-": function(a, b) {
      return a - b;
    },
    "*": function(a, b) {
      return a * b;
    },
    "/": function(a, b) {
      return a / b;
    },
    "%": function(a, b) {
      return a % b;
    }
  };

  const utilityCalculateAns = () => {
    try {
      firstNum = Number(firstNum);
      secondNum = Number(secondNum);
      ans = utilityOperatorObj[currentOperator](firstNum, secondNum);
    } catch (err) {
      ans = "error";
      // console.log(err);
    }
  };
  const utilityGetResult = () => {
    if (firstNum) {
      utilityCalculateAns();
      firstNum = String(ans);
      countCalculation = countCalculation + 1;
      secondNum = "";
      Math.abs(ans > 1000000) || Math.abs(ans < 0.00001)
        ? (ans = ans.toExponential(2))
        : (ans = ans);
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

  const utilityDisplayNum = num => {
    num = Number(num);
    Math.abs(num > 1000000) || Math.abs(num < 0.00001)
      ? (num = num.toExponential(2))
      : (num = num);
    return num;
  };

  const utilityDisplayFirstNum = val => {
    firstNum = firstNum + val;
    displayNum = utilityDisplayNum(firstNum);
  };

  const utilityDisplaySecondNum = val => {
    secondNum = secondNum + val;
    displayNum = utilityDisplayNum(secondNum);
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
    width: 100%;
    height: 100%;
  }

  .device-internal {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .screen {
    flex-grow: 1;
    font-family: "Orbitron", "Nova Mono", monospace;
    min-height: 74px;
  }

  .pad {
    flex-grow: 50;
    width: 100%;
    background: yellow;
    /* height: calc(100% - 74px); */
    display: flex;
    flex-direction: column;
  }

  .screen.flip {
    transform: scaleX(-1) scaleY(-1);
  }

  .buttons-top {
    flex-grow: 1;
    display: flex;
  }

  .buttons-main {
    flex-grow: 5;
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

  @media only screen and (min-wdith: 480px) {
    .device {
      min-width: 320px;
      width: initial;
      height: initial;
    }
    .buttons-top {
      margin: 1em 0;
    }

    .buttons-main {
      row-gap: 1em;
    }

    .button {
      box-shadow: 1px 2px 5px 1px rgba(0, 0, 0, 0.382);
      transition: all 0.3s ease;
      @apply rounded;
    }

    .button:hover {
      box-shadow: 1px 4px 5px 2px rgba(0, 0, 0, 0.191);
    }
    .button:active {
      box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.5);
    }

    .button-sm {
      @apply text-base w-8 h-8;
    }
    .button-lg {
      @apply text-lg w-12 h-12;
    }
  }

  @media only screen and (min-width: 640px) {
    .button-sm {
      @apply text-xl w-12 h-12;
    }
    .button-lg {
      @apply text-2xl w-16 h-16;
    }
  }
</style>

<div
  class="device bg-gray-500 shadow-xl sm:shadow-2xl container mx-auto xs:rounded
  sm:max-w-sm xs:pt-4 xs:pb-2 sm:pt-8 sm:pb-4">
  <div class="device-internal mx-0 xs:mx-4">
    <!-- SCREEN -->
    <div
      class="{screenIsFlipped === true ? 'flip' : ''} screen text-4xl
      bg-teal-200 sm:mx-8 xs:my-4 border-b-2 border-t-2 border-l-8 border-r-8
      border-teal-800 xs:rounded tracking-tight flex items-center justify-end">
      <div id="ans" class="text-right p-2">{displayNum}</div>
    </div>
    <!-- BUTTONS -->
    <div class="pad xs:mx-6 sm:mx-8 sm:my-4">
      <!-- TOP ROW -->
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
      <!-- MAIN SECTION -->
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
