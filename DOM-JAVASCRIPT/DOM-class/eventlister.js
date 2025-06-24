
const h1 = document.querySelector("h1");

h1.addEventListener("click",(e)=>{
    console.log(e.target) //return the element inside h1 at which the event tigger
    h1.classList.toggle("backgroud"); 
})

//event bubling

h1.children[0].addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("span clicked");
})

const input = document.getElementById("textInp");
//input event
input.addEventListener("change",(e)=>{
    console.log(input.value);
    console.log(e.target.value);
   
})

