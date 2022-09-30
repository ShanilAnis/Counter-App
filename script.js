// const subtract = document.querySelector(".subtract");
// const addition = document.querySelector(".add");
// const reset = document.querySelector(".reset");
const count = document.querySelector(".counter");
const buttons = document.querySelector(".buttons");

buttons.addEventListener('click', (e)=>{
    if (e.target.classList.contains('add')){
         setColor()
         count.innerHTML++
    }
    else if (e.target.classList.contains('subtract')){
        setColor() 
        count.innerHTML--
    }
    else if (e.target.classList.contains('reset')){
        setColor() 
        count.innerHTML = 0
    }
})

function setColor(){
    if(count.innerHTML > 0){
        count.style.color = "yellow"
    }
    else if(count.innerHTML ==0){
        count.style.color = 'white'
    }

    else{
        count.style.color = 'red'
    }
}


// addition.addEventListener("click", () => {
//   count.innerHTML++;
// // });
// subtract.addEventListener("click", () => {
//   count.innerHTML--;
// });
// reset.addEventListener("click", () => {
//   count.innerHTML = 0;
// });
