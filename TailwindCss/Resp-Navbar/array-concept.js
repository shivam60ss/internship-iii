// Array Concept in JavaScript

// An array is a data structure that can hold multiple values under a single variable name.
// Arrays are ordered collections of elements, which can be of any type (numbers, strings, objects, etc.).

// Creating an array
const fruits = ['Apple', 'Banana', 'Cherry'];

// Accessing elements by index (index starts at 0)
console.log('First fruit:', fruits[0]); // Output: Apple

// Adding an element to the end of the array
fruits.push('Date');
console.log('After push:', fruits);

// Removing the last element
const lastFruit = fruits.pop();
console.log('Removed fruit:', lastFruit);
console.log('After pop:', fruits);

// Looping through an array
console.log('All fruits:');
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Other useful array methods:
// - fruits.length: returns the number of elements
// - fruits.shift(): removes the first element
// - fruits.unshift('Mango'): adds an element to the beginning
// - fruits.indexOf('Banana'): returns the index of 'Banana'

// Example: Check if an array contains a value
if (fruits.indexOf('Cherry') !== -1) {
  console.log('Cherry is in the list!');
}

// Variable Concepts in JavaScript

// Declare and initialize variables
var a = 10;           // var declaration and initialization
let b = 20;           // let declaration and initialization
const c = 30;         // const declaration and initialization (cannot be reassigned)

// Declare without initialization
var x;                // var declaration without initialization (undefined)
let y;                // let declaration without initialization (undefined)
// const z;           // const must be initialized at declaration (uncommenting this will cause error)

// Assign values to declared variables
x = 100;
y = 200;

// Reassign values
a = 15;               // var can be reassigned
b = 25;               // let can be reassigned
// c = 35;            // const cannot be reassigned (uncommenting this will cause error)

// Redeclare variables
var a = 50;           // var can be redeclared
// let b = 60;        // let cannot be redeclared in the same scope (uncommenting this will cause error)
// const c = 70;      // const cannot be redeclared in the same scope (uncommenting this will cause error)

console.log('a:', a); // 50
console.log('b:', b); // 25
console.log('c:', c); // 30
console.log('x:', x); // 100

