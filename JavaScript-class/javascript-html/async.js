// const { reject } = require("async");

setTimeout(() => {
    console.log('setTimeout 2');
}, 2000); //runs the callback function after 2000ms(2sec)


const callback = ()=>{
    console.log('callback');
}

setTimeout(callback,1000); // runs the callback function after 1000ms(1sec).

const id = setInterval(()=>{
    console.log('this function is running every 3s');
}, 3000);

// clearInterval(id);

setTimeout(()=>{
    clearInterval(id);
},3000*4)
//promises 
//promise is a object that has a value that may not be available yet, but will be resolved
//in the future. It is used to handle asynchronous operations in a more readable way.
//it is a function that returns a value that may not be available yet, but will be resolved
//in the future. It is used to handle asynchronous operations in a more readable way.

const mypromise = new Promise((resolve,reject)=>{
    let num = Math.random()*10
    if(num<5){
        resolve(num)
    }else{
        reject('num is greater than 5')
    }
})

mypromise.then((value)=>{
    console.log('resolved', value);
}).catch((error)=>{
    console.log('rejected', error);
});

console.log("this is the 12")

////
const chainPromise = new Promise((resolve,reject)=>{
    let num = Math.random()*10
    if(num === 50){
        resolve(num)
    }else{
        reject('num is greater than 50')
    }
})

chainPromise.then((data)=>{
    console.log(data);
}).then((dta)=>{
    console.log(dta);
}).catch(()=>{
    console.log("object");
})

//async function 
//async function is a function that returns a promise. It is used to handle asynchronous operations in a
//more readable way.

let a = 10 ;

async function myAsyncFunction(){
    console.log("async funciton");
}
let result;
const arrowFun = async ()=>{
    console.log(" async arrow function");
    // let data = await fetch("https://jsonplaceholder.typicode.com/posts");
    // result = await data.json();
    let res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    result = res.data;
    console.log(result);
    console.log("async arrow function end");
}
myAsyncFunction();
arrowFun();
// console.log(result);
 
console.log(a);



