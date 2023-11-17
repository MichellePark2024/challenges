import { getRandomColor } from "../../utils/randomColor.js";


    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("click", () => {
      // square.style.backgroundColor = "#ccc";
      const randomColor = getRandomColor();
      square.style.backgroundColor = randomColor;
      
    });
   
    export default square