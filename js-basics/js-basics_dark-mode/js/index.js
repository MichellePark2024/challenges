console.clear();


const bodyElement = document.querySelector('[data-js="body"]');
const darkModeBtn = document.querySelector('[data-js="dark-mode-button"]');
const lightModeBtn = document.querySelector('[data-js="light-mode-button"]');
const toggleBtn = document.querySelector('[data-js="toggle-button"]');
  
   
    // 버튼에 이벤트 리스너 추가
    
    darkModeBtn.addEventListener("click", function() {
        bodyElement.classList.add("dark");
    })
    
    lightModeBtn.addEventListener("click", () => {
        bodyElement.classList.remove("dark");
    })
    
    toggleBtn.addEventListener("click", () => {
        bodyElement.classList.toggle("dark");
    })
  
  