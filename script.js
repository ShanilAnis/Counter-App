// const subtract = document.querySelector(".subtract");
// const addition = document.querySelector(".add");
// const reset = document.querySelector(".reset");
const count = document.querySelector(".counter");
const buttons = document.querySelector(".buttons");

buttons.addEventListener('click', (e)=>{
    if (e.target.classList.contains('add')){
         count.innerHTML++
    }
    else if (e.target.classList.contains('subtract')){
         count.innerHTML--
    }
    else if (e.target.classList.contains('reset')){
         count.innerHTML = 0
    }
})


// addition.addEventListener("click", () => {
//   count.innerHTML++;
// // });
// subtract.addEventListener("click", () => {
//   count.innerHTML--;
// });
// reset.addEventListener("click", () => {
//   count.innerHTML = 0;
// });
