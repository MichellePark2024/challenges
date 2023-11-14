console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');
const newToastMessage = document.createElement("li");
newToastMessage.textContent = "Here new text"
newToastMessage.classList.add("toast-container__message")


addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  toastContainer.append(newToastMessage);
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast 
  toastContainer.innerHTML = ""
});
