//should only have one . in a number
//four decimal places
const display = document.getElementById("display");
const btns = document.getElementById("btns");

btns.addEventListener("click", handleClick);

let cal_str = "";
let string = "";

function handleClick(e) {
  let value = e.target.value;
  string += value;

  if (value === "AC") {
    clear_display();
    return;
  }

  if (value === "=") {
    calculate(cal_str);
    return;
  }

  if (value === "0" && cal_str === "0") {
    alert("A number cant start with two zeros");
    return;
  }
  if (value === undefined) {
    value = 0;
  }
  if ((value.match(/\./g) || []).length > 1) {
    console.log("has multiple decimals");
  }
  cal_str += value;

  const last = cal_str.charAt(cal_str.length - 1);
  const second_last = cal_str.charAt(cal_str.length - 2);

  if (last === second_last) {
    if (isNaN(last) && isNaN(second_last)) {
      cal_str = cal_str.slice(0, cal_str.length - 1);
    }
  }
  has_multiple_decimals(cal_str);

  display.innerText = cal_str;
}

function calculate(str) {
  const total = eval(str);
  if (is_float(total)) {
    display.innerText = total.toFixed(4);
  } else {
    display.innerText = total;
  }
  cal_str = "";
  cal_str += total;
  return total;
}

function clear_display() {
  display.innerText = 0;
  cal_str = "";
  return;
}

function display_error() {
  alert("A number can not have more than one decimal place");
  cal_str = "";
  display.innerText = 0;
  return;
}

function has_multiple_decimals(input) {
  const numbers = input.split(/[\+\-\*\/]/);
  for (let num of numbers) {
    if ((num.match(/\./g) || []).length > 1) {
      display_error();
    }
  }
}

function is_float(input) {
  input = String(input);
  return input.includes(".");
}
