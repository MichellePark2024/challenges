console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe", "admin");
}

// The exercise starts here!


//## Tasks 1:

function showWelcomeMessage (userName, userRole){
  console.log(`"Welcome ${userName}! You are logged in now as ${userRole}."`)
}

handleUserLogin(showWelcomeMessage);

//## Tasks 2:

handleUserLogin((userName, userRole) =>{
  console.log(`"Welcome ${userName}! You are logged in now as ${userRole}."`);
});