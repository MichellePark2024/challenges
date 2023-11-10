console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // const formData = new FormData(event.target);
  // const data = Object.fromEntries(formData);
  // console.log("data: ", data);

const formData = event.target.elements;
console.log("formElements",formElements);
// const numberA = event.target.elements.numberA.value;
// const numberB = event.target.elements.numberB.value; 
// or
const numberA = Number(event.target.elements.numberA.value);
const numberB = Number(event.target.elements.numberB.value);
// console.log("numberA, numberB", typeof numberA, numberB);
const operator = formElements.operator.value;

  let result;

  // --v-- write your code here --v--
switch(operator) {
  case "addition": //value name
  result = add();
break;

}
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
