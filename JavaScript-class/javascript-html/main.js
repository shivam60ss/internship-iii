
//Q.take an input (number) from user and console whether the number is 0,less than 0,or greater than 0 

// let num = prompt("enter a number");
// console.log(num,typeof(num))

//Q.take an input (number) from user and console whether the number is 0,less than 0,or greater than 0 or a word

// let num = prompt("enter a number");
// console.log(num,typeof(num))
// if(num === 0){
//     console.log("number is 0")
// }else if(num<0){
//     console.log("number is less than 0");
// }else if(isNaN(num)){
//     console.log("this is not a number");
// }
// else{
//     console.log("number is greater than 0");
// }

//using tarnary operators
let num = prompt("enter a number");
console.log(num,typeof(num))
let result = (num === 0) ? "number is 0" : (num<0) ? "number is less then 0" :(isNaN(num) ? "this is not a number" : "number is greater then 0");
   
