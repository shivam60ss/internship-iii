
//string 
let str = "this is the string";

let newarr = str.replace(" is" ," in");
console.log(newarr); // this is the string

//charAt()
console.log(str.charAt(0)); 
//t

//startsWith()
console.log(str.startsWith("this")); // true

//endsWith()
console.log(str.endsWith("string")); // true

//includes()
console.log(str.includes("is")); // true

//split()
let arr = str.split(" ");
console.log(arr); // ["this", "is", "the", "string"]

let arr1 = str.split(" ");
console.log(arr1);

//trim()
let str1 = "   this is the string   ";
console.log(str1.trim()); // this is the string





