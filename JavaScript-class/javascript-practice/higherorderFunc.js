
//higher order function 

function helper() {
    console.log("hello");
    return 10; // Added return value to avoid NaN
}

function higherOrderFunction(func) {
    let res = func();
    console.log("higher order executting....");
    // Handle non-numeric returns gracefully
    let numRes = Number(res);
    if (isNaN(numRes)) {
        console.warn("Warning: function did not return a number, defaulting to 0");
        numRes = 0;
    }
    return numRes + 5;
}

higherOrderFunction(helper);


let result2 = higherOrderFunction(()=>{ 
    console.log("this is annonymous function");
    return "20";
})

console.log(result2);







