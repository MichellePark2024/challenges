console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMessage = document.querySelector('[data-js="success"]')

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function hideSucessMessage() {
successMessage.setAttribute("hidden", "")
}

function showSucessMessage() {
  successMessage.removeAttribute("hidden")
  }

//*hide error first
hideTosError();
hideSucessMessage();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const tos = event.target.elements.tos.checked
  // --v-- write your code here --v--
  // --^-- write your code here --^--

if (tos){
  showSucessMessage();
  hideTosError();
  alert("Form submitted");
}else {
  showTosError();
  hideSucessMessage();
}

event.target.reset();

});
