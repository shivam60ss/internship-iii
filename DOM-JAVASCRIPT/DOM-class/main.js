
// //dom

// const allParagraphs =  document.getElementsByTagName('p')

// console.log(allParagraphs);

// const hey =  document.getElementsByClassName('.heading'); 
// console.log(hey);

// //getters and setters
// const heading = document.querySelector('.heading');
// console.log(heading);


const container = document.getElementById("container");
// console.log(container.innerHTML)
// console.log(container.innerText)
// console.log(container.textContent)
// container.innerHTML = "this is changed by <h1>js</h1"
// container.innerText = "this is changed by <h1>js</h1>"

// elementByQuery.classList.add("c15");
// elementByQuery.classList.remove("c15");
// elementByQuery.classList.toggle("c15");
// elementByQuery.classList.contains("c15");
// console.log(elementByQuery.classList)


const val =  "hello paragraph"
const div = document.createElement("div") //create element
div.className = "cl1 cl2";
div.id = "dynamic-container";
div.innerHTML  = `<p>${val}</p> <p>${val}2</p>`


//append and prepend 

container.append(div)
container.prepend(div);
container.after(div);
container.before(div);
console.log(div)

// eventlisteners
  

