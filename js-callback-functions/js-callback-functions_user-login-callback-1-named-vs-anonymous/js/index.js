console.clear();
//Defining higher order function
function handleUserLogin(onSuccess) {
// // //   // You might wonder why this function is called `onSuccess`. This will become clear by the fourth challenge! 🤞
  onSuccess();
}

// // // // Call handleUserLogin below!



// //Task1
function showWelcomeMessage(){
  console.log("Welcome! You are logged in now.");
}

handleUserLogin(showWelcomeMessage);

// //Task2
handleUserLogin(() => {
  console.log("Welcome! You are logged in now.");
})




//e,g. define
// function Button(text, callback){
//   const buttonElement = document.createElement('button')
//   buttonElement.textContent = text
//   buttonElement.addEventListener('click', callback)
//   return buttonElement
// }
// //call
// const alerButton = Button('Click', ()=>{
//   console.log('I was clicked')
// });
// //append =show
// document.body.append(alerButton); 