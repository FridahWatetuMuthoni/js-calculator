//a number should not start with multiple zeros
//should only have one . in a number
//if 2 or more operators are entered consecutively you should use the last operator
//pressing an operator after pressing = should perform the operations of the current result
//four decimal places
const display = document.getElementById("display");
const btns = document.getElementById("btns");

btns.addEventListener("click", handleClick);

let cal_str = "";
function handleClick(e) {
  let value = e.target.value;
  if (!isNaN(e.target.value)) {
    value = parseFloat(value);
  }

  if (value === "AC") {
    display.innerText = 0;
    cal_str = "";
    return;
  }
  if (value === "=") {
    handleCalculation(cal_str);
    return;
  }
  cal_str += value;
  display.innerText = cal_str;
}

function handleCalculation(result) {
  console.log(result);
  let total = eval(result);
  //   const total = calculate(result);
  //   display.innerText = total;
  //   cal_str = "";
  console.log(total);
}

function calculate(str) {
  const tokens = str.match(/(?:\b[1-9]\d*|0)(?:\.\d+)?|\+|\-|\*|\//g);
  console.log(tokens);

  let result = parseFloat(tokens[0]);
  for (let i = 1; i < tokens.length; i++) {
    const token = tokens[i];
    const isOperator = /\+|\-|\*|\//.test(token);

    if (isOperator) {
      lastOperator = token;
    } else {
      const operand = parseFloat(token);

      switch (lastOperator) {
        case "+":
          result += operand;
          break;
        case "-":
          result -= operand;
          break;
        case "*":
          result *= operand;
          break;
        case "/":
          result /= operand;
          break;
        default:
          result = operand;
      }
    }
  }

  return result;
}
