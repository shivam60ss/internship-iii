

// array methods

//add item at beginning

let arr = [1, 2, 3, 4, 5];
let newArr = [...arr, 7, ...arr.slice(1)];
console.log(newArr); // [0, 1, 2, 3, 4]

//add item at beginning 
let arr2 = [1, 2, 3, 4, 5];
arr2.unshift(5)

console.log(arr2)
// [5, 1, 2, 3, 4, 5]

//add item at end
let arr3 = [1, 2, 3, 4, 5];
arr3.push(6)
console.log(arr3)
// [1, 2, 3, 4, 5, 6]

//add element at inddex 1 and shift elements forward 
let arr4 = [1, 2, 3, 4, 5];
arr4.splice(1, 0, 6);
console.log(arr4)
// [1, 6, 2, 3, 4, 5]

console.log("join")
//join
let arr5 = [1, 2, 3, 4, 5];
let str = arr5.join('');
console.log(str)
// "12345"
//join with comma and space
let arr6 = [1, 2, 3, 4, 5];
let str2 = arr6.join(', ');
console.log(str2)
// "1, 2, 3, 4, 5"
//join with comma and space with separator
let arr7 = [1, 2, 3, 4, 5];
let str3 = arr7.join(', ');
console.log(str3)
// "1, 2, 3, 4, 5"
