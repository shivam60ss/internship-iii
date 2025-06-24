
// function cb(x){
//     console.log("callback function",x);
//     return function(y){
//         console.log("callback function",y);
//         return x + y;
//     };
// }

// function higher(callback){
//     console.log("higher function");
//     let innerFunc = callback(5);
//     console.log("this is the below call");
//     return innerFunc(10);
// }
// console.log(higher(cb));


///

function cd (x){
    console.log("callback function",x);
    if(x > 10){
        return "greater than 10";
    }else{
        return "less than 10";
    }
}
function higherCallback(callback,value){
    console.log("higher order function");
    let ans = callback(value);
    console.log("this is the below call");
    return ans ;
}
console.log(higherCallback(cd,20));
console.log(higherCallback(cb,5));

////
