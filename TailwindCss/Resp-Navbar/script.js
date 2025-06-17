
const a = 10;
const b = 20;

// Example of const with array - mutable contents but constant reference
const arr = [1, 2, 3, 4, 5];
arr[1] = 10;
console.log(arr); // [1, 10, 3, 4, 5]

// Example of let - block scoped variable
let c = "hello";
console.log(c);

c = "world";
console.log(c); // "world"

{
    // code block
    let c = "shivam";
    console.log(c); // "shivam"
    c = "kumar"
    console.log(c); // "kumar"
}

// Example of var - function scoped or globally scoped variable
var d = "var variable";
console.log(d);

d = "changed var variable";
console.log(d); // "changed var variable"

function varTest() {
    var x = 1;
    if (true) {
        var x = 2;  // same variable!
        console.log(x); // 2
    }
    console.log(x); // 2
}
varTest();

// Comparison of var and let scoping
function letTest() {
    let y = 1;
    if (true) {
        let y = 2;  // different variable
        console.log(y); // 2
    }
    console.log(y); // 1
}
letTest();

// Summary:
// var is function scoped or globally scoped and can be redeclared and updated.
// let is block scoped and can be updated but not redeclared in the same scope.
// const is block scoped and cannot be updated or redeclared. For objects and arrays, the reference is constant but contents can be mutated.


// clear the concept of callstack
console.log(temp);
var temp = "this is the temp";
console.log(temp);   

let arr1 = [1,2,3,"item 4",true,null, undefined]
let TwoDArr = [
    [1,2,3],
    [4,5,6]
]
console.log(TwoDArr);
console.log(TwoDArr[1][2]);
console.log(arr1[4]);

// var x =4;
// let x = 4;
// //error
// console.log(x);


let 
conp = 12;
console.log(conp);





