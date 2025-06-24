
// local storage
localStorage.setItem("name","shivam");
console.log(localStorage.getItem("name"));

const obj = {
    name:"shivam",
    arr:[1,2,3,"4"]
}

console.log(JSON.stringify(obj));
localStorage.setItem("obj"),JSON.stringify(obj);

console.log("storage - ",localStorage.getItem("obj"));
let storedobj = JSON.parse(localStorage.getItem("obj"));
console.log(storedobj);