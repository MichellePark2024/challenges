console.clear();
console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');




pizzaInput1.addEventListener("input", () => {
  // write your code here
// console.log('hello')
const pizzaSize1 = pizzaInput1.value;
const pizzaSize2 = pizzaInput2.value;

console.log(pizzaSize1)
calculatePizzaGain(pizzaSize1, pizzaSize2)
updatePizzaDisplay(pizza1, pizzaSize1)
updateOutputColor(pizzaSize1, pizzaSize2)

});

pizzaInput2.addEventListener("input", () => {
  // write your code here
  const pizzaSize1 = pizzaInput1.value;
  const pizzaSize2 = pizzaInput2.value;
console.log(pizzaSize2)
calculatePizzaGain(pizzaSize1, pizzaSize2)
updatePizzaDisplay(pizza2, pizzaSize2)
updateOutputColor(pizzaSize1, pizzaSize2)
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1,diameter2){
  const area1 = Math.PI * (diameter1/2) ** 2; 
  const area2 = Math.PI * (diameter2/2) ** 2;
  const pizzaGain = (area2 - area1) / area1 * 100;
  const pizzaGainFullNumber = Math.round(pizzaGain);
  output.textContent = pizzaGainFullNumber;
 // or -> output.textContent = Math.round(pizzaGain);
}
calculatePizzaGain(pizzaSize1, pizzaSize2)

// Task 2
// define the function updatePizzaDisplay here
function updatePizzaDisplay(pizzaElement, newSize){
  const newDisplaySize = newSize / 24 * 100;
  pizzaElement.style.width = newDisplaySize + "px";
}

// Task 3
// define the function updateOutputColor here
function updateOutputColor(size1, size2){
  if (size1 < size2 ) {
  outputSection.style.backgroundColor = "var(--green)"
}
else {
  outputSection.style.backgroundColor = "var(--red)"
}
}