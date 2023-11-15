console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!



//#Task 1:
function showWelcomeMessage(){
  console.log('"Welcome Jane Doe! You are logged in now."')
}

handleUserLogin(showWelcomeMessage);

//#Task 2:
handleUserLogin(showWelcomeMessage, () => {

});


//#Task 1-2 practice:
function showWelcomeMessage(username){
  console.log(`"Welcome ${username}! You are logged in now."`)
}
showWelcomeMessage('Michelle');

handleUserLogin(showWelcomeMessage);

//#Task 2-2 practice:
handleUserLogin(username, () => {

});








// function showWelcomeMessage(username){
//   console.log('welcome ${username}! You are logged in now.')
// }
// //e.g.
// //  showWelcomeMessage('Michelle')

// handleUserLogin(showWelcomeMessage)

// handleUserLogin(username => {

// })
