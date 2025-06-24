// Q. 
let menu = [
    "roti", "rice", "eggrice", "paneer", "dal", "egg-curry", "chicken",
    "chicken rice", "matar paneer", "dal-makhni",
]

// filter out veg and non-veg items.
let veg = menu.filter(item =>
    !(item.includes("chicken") || item.includes("egg"))

)
let nonveg = menu.filter(item =>
    item.includes("chicken") || item.includes("egg")
)
console.log("veg=", veg);
console.log("nonveg=", nonveg);

///

let products = [
    {
        name: "product 1 name",
        category: "wearable",
        color: ["red", "white"]
    },
    {
        name: "product 2 name",
        category: "playable",
        color: ["black", "silver"]
    },
    {
        name: "product 3 name",
        category: "wearable",
        color: ["blue", "white"]
    },
    {
        name: "product 4 name",
        category: "playable",
        color: ["white", "gray"]
    },
    {
        name: "product 5 name",
        category: "playable",
        color: ["gold", "black"]
    },
    {
        name: "product 6 name",
        category: "wearable",
        color: ["orange", "black"]
    },
    {
        name: "product 7 name",
        category: "wearable",
        color: ["purple", "pink"]
    }
];

//Q.filter out all the products which are white & wearable
let filteredProducts = products.filter(product =>
    product.category === "wearable" && product.color.includes("white")
);
console.log(filteredProducts);

///
//Q. 
// console.log("A"); //1

// Promise.resolve().then(()=>{ //4
//     console.log("B");
// })
// console.log("c"); //2

// setTimeout(()=>{    //5
//     console.log("D");
// },0)
// console.log("E") //3

///

console.log("xs")

new Promise((resolve) => {
    console.log("y")
    resolve();
})
    .then(() => {
        console.log("z")
        return Promise.resolve("W")
    })
    .then((val) => {
        console.log(val);
    })

console.log("end")