export function getAnimal(animal) {
 if (animal=== "cats"){
    return "I totally love cats!";
 }
 else if (typeof animal == "string") {
    return `I like ${animal}!`
}
else if (typeof animal === "undefined") {
    return "I do not like animals at all!"
}
}



// export function getAnimal(animalPluraName){
//     if (animalPluraName === "dog") {
//         return "I like dogs!"
//     }
// }


// export function getAnimal(animal) {
//     if (animal === "cats") {
//       return "I totally love cats!";
//     } else {
//       return "I don't know this animal.";
//     }
//   }
  