console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit",(event)=>{
    event.preventDefault() 
    //form *이벤트리스너는 서브밋 이벤트 쓰고 밑에 줄은 꼭 같이써야됨.
//   *const formElements = event.target.elements;(모든 양식 요소(양식 필드, 필드 세트 및 버튼)
//   *console.log(formElements.firstName);
//   *console.log(formElements.firstName.value);

// const firstName = formElements.firstName.value;
// const lastName = formElements.lastName.value;
// const age = formElements.age.value;
// const email = formElements.email.value;
// const dataObject = {
//     userName: firstName
// }  or below

// console.log(event.target);

// *all data log. (event.target)=전체 양식
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const age = Number(data.age)
    const badness = Number(data.badness)
    const firstName = data.firstName
console.log(`The age-badness-sum of ${firstName} is ${age + badness}`)

    
    event.target.reset()

})


// form.addEventListener("submit", (event) => {
//     event.preventDefault();
  
//     const formData = new FormData(event.target);
//     const data = Object.fromEntries(formData);
  
//     console.log(data);
//   });