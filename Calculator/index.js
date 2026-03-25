const one = document.getElementById("oneBtn");
const two = document.getElementById("twoBtn");
const three = document.getElementById("threeBtn");
const four = document.getElementById("fourBtn");
const five = document.getElementById("fiveBtn");
const six = document.getElementById("sixBtn");
const seven = document.getElementById("sevenBtn");
const eight = document.getElementById("eightBtn");
const nine = document.getElementById("nineBtn");
const zero = document.getElementById("zeroBtn");

const plus = document.getElementById("plusBtn");
const minus = document.getElementById("minusBtn");
const multiply = document.getElementById("multiplyBtn");
const divide = document.getElementById("divideBtn");
const dot = document.getElementById("dotBtn");

const clear = document.getElementById("clearBtn");
const equal = document.getElementById("equalBtn");
const allClear = document.getElementById("allClearBtn");

let output = document.getElementById("outputH3");
let currentValue = "";
let previousValue = "";
let operator = "";


one.onclick = function() {
  currentValue += "1";
  output.textContent = currentValue;
}

two.onclick = function() {
  currentValue += "2";
  output.textContent = currentValue;
}

three.onclick = function(){
  currentValue += "3";
  output.textContent = currentValue;
}

four.onclick = function(){
  currentValue += "4";
  output.textContent = currentValue;
}

five.onclick = function(){
  currentValue += "5";
  output.textContent = currentValue;
}

six.onclick = function(){
  currentValue += "6";
  output.textContent = currentValue;
}

seven.onclick = function(){
  currentValue += "7";
  output.textContent = currentValue;
}

eight.onclick = function(){
  currentValue += "8";
  output.textContent = currentValue;
}

nine.onclick = function(){
  currentValue += "9";
  output.textContent = currentValue;
}

zero.onclick = function(){
  currentValue += "0";
  output.textContent = currentValue;
}

plus.onclick = function(){
  previousValue = currentValue;
  currentValue = "";
  operator = "+";
  output.textContent = "+";
}

minus.onclick = function(){
  previousValue = currentValue;
  currentValue = "";
  operator = "-";
  output.textContent = "-";
}

multiply.onclick = function(){
  previousValue = currentValue;
  currentValue = "";
  operator = "*";
  output.textContent = "×";
}

divide.onclick = function(){
  previousValue = currentValue;
  currentValue = "";
  operator = "/";
  output.textContent = "÷";
}

dot.onclick = function() {
  if(currentValue.includes(`.`)){
    return;
  }else {
    currentValue += ".";
    output.textContent += ".";
  }
}

clear.onclick = function() {
  currentValue = currentValue.slice(0, -1);
  output.textContent = currentValue;
}

allClear.onclick = function(){
  currentValue = "";
  output.textContent = currentValue;
}

equal.onclick = function(){
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);

  if(operator === "+"){
    output.textContent = previousValue + currentValue;
  }
  else if (operator === "-"){
    output.textContent = previousValue - currentValue;
  }
  else if (operator === "*"){
    output.textContent = previousValue * currentValue;
  }
  else if (operator === "/"){
    output.textContent = previousValue / currentValue;
  }
}
