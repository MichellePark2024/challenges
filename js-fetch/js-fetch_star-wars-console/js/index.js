console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
    try{
        const response = await fetch(url)
     
        if (response.ok){
            const data = await response.json();
            // console.log(data.results[3].films[3]);
            // console.log(data.results[2].eye_color);
            return data;
    
        } else {
            console.error("Bad Response");
        }
    } catch (error){
        console.error("An Error occurred")
    }
}

fetchData();








// async function fetchSomething() {
//     try {
//       const response = await fetch("/bad/url/oops");
  
//       if (response.ok) {
//         // Success (Good Response)
//         const data = await response.json();
//         return data;
//       } else {
//         // Failure (Bad Response)
//         console.error("Bad Response");
//       }
//     } catch (error) {
//       // Failure (Network error, etc)
//       console.error("An Error occurred");
//     }
//   }