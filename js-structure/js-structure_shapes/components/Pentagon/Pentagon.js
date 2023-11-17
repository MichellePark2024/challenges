import { getRandomColor } from "../../utils/randomColor.js";


    const pentagon = document.createElement("div");
    pentagon.classList.add("pentagon");
    pentagon.addEventListener("click", () => {
      // pentagon.style.backgroundColor = "#ccc";
      const randomColor = getRandomColor();
      pentagon.style.backgroundColor = randomColor;
    });
   

    export default pentagon;