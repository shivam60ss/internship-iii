
//operators

//

let a = 10;
let b = "10";
if (a === b || b == a) {
    console.log(true);
}
// Output: true

// Explanation: The expression a===b is false because a is a number and b is a string
// The expression b==a is true because the == operator performs type coercion, converting a to a
// string and comparing it with b, which is also a string. The result is true because th
// strings are equal.

//ternary operators
// The ternary operator is a shorthand for a simple if-else statement. It consists of thre
// parts: a condition, a value if the condition is true, and a value if the condition
// false.
// Syntax: condition ? valueIfTrue : valueIfFalse

(a === b ? console.log("true statement") : console.log("flase statement"))
let result = (a == b ? "true" : "false");
console.log("result =>", result);
// Output: true statement

//loops
// There are two types of loops in JavaScript: for and while loops.
// for loops are used to iterate over an array or a string, while while loops are used to
// execute a block of code repeatedly while a condition is true.
// for loops
// Syntax: for (initialization; condition; increment) {
//     code to be executed
// }

let arr = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//object in javascript ?
const person = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Developer'
};


// let k = 10;
// let l = 20;

function fun3(k, l, n) {
    return k + l + n;
}
let res = fun3(1, 2);
console.log(res);
//output :NaN

// let res = fun3(1,2,3);
// console.log(res);
//output :6


//overwrite function 
function fun4(k, l, n) {
    return k + l + n;
}
let ress = fun4(1, 2);
console.log(ress);
//output :NaN
// let res = fun4(1,2,3);
// console.log(res);
//output :6

