console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let counter = 1; counter <= 5; counter++) {
    // Create an image element
    const starImage = document.createElement('img');

     // Set the "src" attribute based on whether the current star should be filled or empty
     starImage.src = counter <= filledStars ? "assets/star-filled.svg" : "assets/star-empty.svg";
    
     //Before appending the star element to the `starContainer`, add a "click" event listener to it.
     //Inside the event listener, re-render the stars by calling `renderStars`. Pass the correct number to that function in order to render the correct number of filled stars.
     starImage.addEventListener('click', function(){
     renderStars(counter);
    })

    // Append the star to the star container
    starContainer.append(starImage);
  }

  //--^-- your code here --^--
}
//Change the code that calls `renderStars`: pass in a number between 0 and 5 as an argument, and see if it works as expected!
renderStars(3);
