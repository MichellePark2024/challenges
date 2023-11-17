import { getRandomColor } from "../../utils/randomColor.js";


    const circle = document.createElement("div");
    circle.classList.add("circle");

    circle.addEventListener("click", () => {
      // circle.style.backgroundColor = "#ccc";
      const randomColor = getRandomColor(); // getRandomColor 함수 호출
      circle.style.backgroundColor = randomColor; // 반환된 색상을 배경색으로 설정
    });
    
  export default circle;


 