
//call back function
function cb(a, b) {
    console.log("call back executing...");
    return a + b;
}
function parent(a, b, fun) {
    console.log("higher order exectting....");
    let sum = a + b;
    let result = fun(sum, 20);
    return result;
}

let asns2 = parent(10, 20, cb);
console.log(asns2)


let arr = [1, 2, 3, 4, 5, 6];

function Square(num) {
    // return num * num;
    return num ** 2;
}

function cube(num) {
    return num ** 3;
}

function ArrConverter(array, fun) {
    let ar = [];
    for (let element of array) {
        let powVal = fun(element)
        ar.push(powVal);
    }
    return ar;
}

let sqArr = ArrConverter(arr, Square)
console.log(sqArr);

let CubeArr = ArrConverter(arr, cube);
console.log(CubeArr);

//using map 
let mapArr = arr.map(function (num) {
    return num ** 2;
})
console.log(mapArr);

