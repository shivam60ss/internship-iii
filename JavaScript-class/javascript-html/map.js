
//map

let newPerson = {
    name: "John",
    age: 30,
    occupation: "Software Engineer",
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345"
    }

}

//Person object with nested properties

console.log(newPerson);
//address
console.log(newPerson.address);
//street
console.log(newPerson.address.street);

///

let numArr = [1, 2, 3, 4, 5, 6];
let newNumber = [...numArr, 7, 8, 9, 10];
console.log(newNumber);

///

let arr = [
    { name: "John", salary: 50000 },
    { name: "Jane", salary: 60000 },
    { name: "Doe", salary: 55000 }
];

arr = arr.map((obj, index) => {
    return { ...obj, id: index };
});

let newArr2 = arr.filter((person) => {
    return person.name === "John";
});
console.log(newArr2);

let salarySum = arr.reduce((accum, person) => {
    return accum + person.salary;

}, 0)
console.log(salarySum);

///

let ar = [1, 2, 3, 4, 5, 6, 7, 8];
let sum = ar.reduce((accum, num) => {
    return accum + num;
}, 0)
console.log(sum);

let sum1 = ar.reduce((accum, num) => {
    return accum + num;
}, 1)
console.log(sum1);

///
//find -> same as filer but retrun first matching element.


///

//forEach
let arrr = [1, 2, 3, 4, 5, 6, 7, 8];
arrr.forEach((num, index) => {
    console.log(num, index);
}
);



